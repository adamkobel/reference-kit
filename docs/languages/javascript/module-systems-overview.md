# CommonJS vs ES Modules

Conceptual overview and comparison of JavaScript's two module systems:
CommonJS (CJS) and ECMAScript modules (ESM). Learn why both exist, how their
loading rules differ, and how to diagnose common Node.js errors.

## Why Modules, and Why Two?

A module is a file with a boundary: it can keep implementation details private
and explicitly export values for other files to use. This avoids sharing
everything through global variables or relying on scripts to run in just the
right order.

When Node.js began in 2009, JavaScript had no standardized module system.
CommonJS filled that gap for server-side JavaScript with `require()` and
`module.exports`. Its synchronous loading fit Node's early use, and packages
and tools built around it became a large part of the ecosystem.

ES modules became the official JavaScript standard in ECMAScript 2015. They
were designed to work across browsers and server-side runtimes. Browsers need
to fetch modules over a network, so ESM uses a declared dependency graph that
runtimes can load asynchronously and analyze before executing. Its static
`import` declarations are not just another spelling for a `require()` call.

By the time ESM was widely supported in Node.js, much of npm already used
CommonJS. Both systems remain because existing packages and tools still rely
on CJS, while ESM is generally the better default for new JavaScript code.

If you've used `import` in front-end projects for years, a bundler such as Vite
or Webpack may have been translating or packaging modules for the browser.
"Front end uses `import`, Node uses `require`" describes a common historical
setup, not a rule about where either syntax can be used.

## Syntax

| | CommonJS | ES modules |
| --- | --- | --- |
| Named export | `exports.add = add` | `export function add() {}` |
| Export an object | `module.exports = { add, subtract }` | `export { add, subtract }` |
| Default export | `module.exports = fn` | `export default fn` |
| Named import | `const { add } = require('./math')` | `import { add } from './math.js'` |
| Default import | `const fn = require('./fn')` | `import fn from './fn.js'` |
| Import all | `const math = require('./math')` | `import * as math from './math.js'` |
| Conditional or dynamic load | `require(path)` can be called in code | `await import(path)` returns a promise |

In CommonJS, `exports` is initially a shortcut for `module.exports`. Assigning
a new value to `exports` alone does not change what the module exports; use
`module.exports = ...` to replace it. In ESM, named imports must match named
exports, while a default import corresponds to `export default`.

## Key Differences

| | CommonJS | ES modules |
| --- | --- | --- |
| Loading | `require()` loads synchronously | Static dependencies are resolved as a module graph; `import()` is asynchronous |
| Static import placement | `require()` can appear in expressions and conditional code | `import` declarations are top-level and use a string specifier; use `import()` for dynamic loading |
| Imported values | `require()` returns the exported value; destructuring copies a property into a local variable | Imports are read-only live bindings to the exporting module's values |
| Top-level `await` | Not supported in CommonJS code | Supported by ESM runtimes that implement it |
| Strict mode | Depends on code and runtime | Always strict mode |
| Top-level `this` in Node.js | The module's `exports` object | `undefined` |
| Relative file extensions in Node.js | Often resolved automatically | Include the extension in relative paths |
| Tree-shaking | Harder for tools to analyze reliably | Static structure makes it easier for bundlers to analyze |
| Browser loading | Requires a bundler or another transformation | Native support with `<script type="module">` |

### Live Bindings

An ESM import refers to the exported binding, so it sees later updates made by
the exporting module. The imported name itself cannot be reassigned by the
importing module.

```js
// counter.js
export let count = 0
export function increment() {
  count++
}
```

```js
// main.js
import { count, increment } from './counter.js'

increment()
console.log(count) // 1
```

With CommonJS, destructuring reads the property at that moment into a local
variable. If `count` is a number, that local variable does not update when the
exported property changes:

```js
const { count, increment } = require('./counter.cjs')

increment()
console.log(count) // still the value read when destructuring
```

Reading `counter.count` from the returned object again can see a later property
value; the difference is that the destructured local variable is not a live
module binding.

### File Paths and Node Globals

In Node.js, CommonJS often resolves extensions and directory entry points for
`require('./math')`. ESM relative imports generally need the full file name, for
example `import './math.js'`. Browser module imports also use explicit URLs.

Node.js CommonJS files provide `__dirname` and `__filename`. In ESM, Node.js
20.11 and later provide `import.meta.dirname` and `import.meta.filename` for
file-based modules. `import.meta.url` is the portable ESM mechanism for getting
the current module URL:

```js
import.meta.dirname
import.meta.filename
import.meta.url
```

For older Node.js versions, convert the URL to a file path:

```js
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
```

## How Node.js Chooses a Module System

Node.js uses explicit file extensions and the nearest `package.json` to
determine how to interpret files:

| Marker | Module format |
| --- | --- |
| `.mjs` | ESM |
| `.cjs` | CommonJS |
| `.js` in a package with `"type": "module"` | ESM |
| `.js` in a package with `"type": "commonjs"` | CommonJS |
| `.js` with no `"type"` | Depends on Node.js version and syntax-detection rules; don't rely on ambiguity |

Set the package default explicitly. For example, this marks `.js` files as ESM:

```json
{
  "type": "module"
}
```

The nearest parent `package.json` controls a `.js` file. An ESM package can
still contain `.cjs` files, and a CommonJS package can contain `.mjs` files.
Bundlers, test runners, and transpilers may have their own configuration, so
also check the tools that run the code.

## Mixing CommonJS and ESM

### Import CommonJS from ESM

Node.js exposes a CommonJS module's `module.exports` value as its default
import. This is the reliable option for packages whose named exports are not
recognized by Node's static analysis:

```js
import express from 'express'
import pkg from 'some-cjs-library'

const { helper } = pkg
```

### Import ESM from CommonJS

The portable option is dynamic `import()`. Since a CommonJS file cannot use
top-level `await`, call it inside an async function:

```js
async function loadLibrary() {
  const { default: library } = await import('some-esm-library')
  return library
}
```

Recent Node.js releases also allow `require()` to load ESM starting with Node.js
20.19.0 and 22.12.0, provided the ESM dependency graph does not use top-level
`await`. For compatibility across Node.js versions, use `import()` instead.

## Common Errors

| Error or symptom | Likely fix |
| --- | --- |
| `Cannot use import statement outside a module` | Node is treating the file as CommonJS. Set `"type": "module"` in the nearest `package.json` or use `.mjs`. |
| `require is not defined in ES module scope` | Use `import`; use `createRequire()` from `node:module` only when a CommonJS API is required. |
| `__dirname is not defined in ES module scope` | Use `import.meta.dirname` on Node.js 20.11+, or derive it from `import.meta.url` for older versions. |
| `ERR_MODULE_NOT_FOUND` for a relative import | Check the path and add the file extension, such as `'./utils.js'`. |
| `ERR_REQUIRE_ESM` | The Node.js version may not support `require(ESM)`. Upgrade when suitable or switch to `await import()`. |
| `does not provide an export named ...` | Check the spelling and export style. When importing CommonJS, try its default import and read the property from that object. |

## Choosing a Format

For new code, prefer ESM unless a runtime, dependency, or tool requires
CommonJS. In an existing project, follow its current format first. A migration
can affect file extensions, `package.json`, relative imports, configuration
files, and dependencies, so treat it as a project-wide change rather than
changing individual import statements at random.

## Further Reading

- [Node.js: Modules](https://nodejs.org/api/modules.html)
- [Node.js: ECMAScript modules](https://nodejs.org/api/esm.html)
- [MDN: JavaScript modules](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)