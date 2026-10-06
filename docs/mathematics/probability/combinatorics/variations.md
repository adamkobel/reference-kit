# Variations

A **variation** selects $k$ items from $n$ distinct items and puts the selected items in order. Variations are also called **ordered selections** or **partial permutations**. Use them when only some of the available items are used and changing their order creates a different outcome.

## Without repetition

When an item cannot be selected more than once, the number of ordered selections is:

$$
V(n,k) = \frac{n!}{(n-k)!}, \qquad 0 \le k \le n
$$

For example, awarding gold, silver, and bronze among 8 runners has:

$$
V(8,3) = \frac{8!}{5!} = 8 \cdot 7 \cdot 6 = 336
$$

The medal positions are different, so order matters, and a runner cannot win more than one medal.

## With repetition

When any of the $n$ items can be used in each of the $k$ ordered positions, including items already used in another position, the count is:

$$
V_{\mathrm{rep}}(n,k) = n^k
$$

A 4-digit code using digits 0–9, with repetition allowed, has $10^4 = 10{,}000$ possible codes. A code may start with zero because it is a code, not a four-digit number.

## Relationship to combinations

For selections without repetition, each group of $k$ items can be ordered in $k!$ ways. Therefore:

$$
V(n,k) = \binom{n}{k} k!
$$

If order does not create a different outcome, use a [combination](/mathematics/probability/combinatorics/combinations) instead. If all items are arranged, use a [permutation](/mathematics/probability/combinatorics/permutations).
