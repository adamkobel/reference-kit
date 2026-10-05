# Snowflake CLI Cheat Sheet

Quick reference for Snowflake's `snow` CLI, the modern CLI (not the legacy `snowsql` client).

## Install and get help

Follow the [official installation instructions](https://docs.snowflake.com/en/developer-guide/snowflake-cli/installation/installation), then verify the install and explore commands:

```sh
snow --version
snow --help
snow connection --help
snow sql --help
```

## Connections

Create a saved connection interactively; provide its name, account, user, and authentication details when prompted:

```sh
snow connection add
```

List configured connections and test one:

```sh
snow connection list
snow connection test -c <name>
```

The default connection is named `default`. Set a connection as default while adding it with `--default`. Avoid passing passwords or tokens directly on the command line, where they may be saved in shell history.

## Run SQL

Run a query, execute a SQL file, or start the interactive SQL REPL:

```sh
snow sql -c <name> -q "SELECT CURRENT_VERSION();"
snow sql -c <name> -f query.sql
snow sql -c <name>
```

Omit `-c <name>` to use the default connection. Choose a role, warehouse, database, or schema for a command with `--role`, `--warehouse`, `--database`, or `--schema`:

```sh
snow sql -c <name> --warehouse <warehouse> --database <database> --schema <schema> \
  -q "SELECT CURRENT_DATABASE(), CURRENT_SCHEMA(), CURRENT_WAREHOUSE();"
```

Useful SQL options:

```sh
snow sql -c <name> -f query.sql --format JSON
snow sql -c <name> -f query.sql --format CSV
snow sql -c <name> -f query.sql --single-transaction
```

`--format` accepts `TABLE` (default), `JSON`, `JSON_EXT`, and `CSV`. `--single-transaction` runs the file's statements together in a transaction; use it when that behavior is intended.

## Troubleshooting

- Run `snow connection test -c <name> --enable-diag` to generate connection diagnostics.
- Use `--debug` on a command for detailed logs; check `snow <command> --help` for supported options.
- A connection can succeed while a query still fails if its role lacks privileges or its warehouse is unavailable.

## References

- [Snowflake CLI documentation](https://docs.snowflake.com/en/developer-guide/snowflake-cli)
- [Installation](https://docs.snowflake.com/en/developer-guide/snowflake-cli/installation/installation)
- [Connection commands](https://docs.snowflake.com/en/developer-guide/snowflake-cli/command-reference/connection-commands/overview)
- [SQL command](https://docs.snowflake.com/en/developer-guide/snowflake-cli/command-reference/sql-commands/sql)
