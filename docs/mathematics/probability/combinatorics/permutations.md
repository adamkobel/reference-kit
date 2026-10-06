# Permutations

A **permutation** is an arrangement of items in a particular order. Use permutations when all the items are being arranged and changing their order creates a different outcome.

## Distinct items

The number of ways to arrange $n$ distinct items is:

$$
P(n) = n!
$$

The factorial is $n! = n(n-1)\cdots 2 \cdot 1$, with $0! = 1$. For example, 4 distinct books can be arranged on a shelf in:

$$
4! = 4 \cdot 3 \cdot 2 \cdot 1 = 24
$$

## Arrangements with identical items

If some items are identical, arrangements that differ only by swapping identical items are not distinct. If there are $n$ items total, with repeated-item counts $n_1, n_2, \ldots, n_r$, the number of distinct arrangements is:

$$
\frac{n!}{n_1! n_2! \cdots n_r!}
$$

For example, `LEVEL` has 5 letters, with 2 Ls and 2 Es. Its distinct arrangements number:

$$
\frac{5!}{2!2!} = 30
$$

## When to use a permutation

Use a permutation when every item is arranged and position matters, such as arranging people in a line or letters in a word. If only some items are selected and arranged, use a [variation](/mathematics/probability/combinatorics/variations). If order does not matter, use a [combination](/mathematics/probability/combinatorics/combinations).
