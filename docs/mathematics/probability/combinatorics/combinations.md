# Combinations

A **combination** is a selection of items where order does not matter. For example, choosing Alice, Ben, and Chen forms the same group regardless of the order in which they are chosen.

## Without repetition

The number of ways to choose $k$ distinct items from $n$ is:

$$
\binom{n}{k} = C(n,k) = \frac{n!}{k!(n-k)!}, \qquad 0 \le k \le n
$$

For example, choosing 3 people from a group of 8 gives:

$$
\binom{8}{3} = \frac{8!}{3!5!} = 56
$$

## With repetition

When items may be selected more than once and order still does not matter, the number of selections of $k$ items from $n$ types is:

$$
\binom{n+k-1}{k}
$$

For example, selecting 3 scoops from 5 ice-cream flavors, with flavors allowed to repeat, gives:

$$
\binom{5+3-1}{3} = \binom{7}{3} = 35
$$

This formula counts selections by type, so two scoops of the same flavor are indistinguishable from each other.

## When to use a combination

Use a combination when selecting a group, team, or subset where rearranging the selected items does not create a new outcome. If order matters, use a [variation](/mathematics/probability/combinatorics/variations). If all items are arranged, use a [permutation](/mathematics/probability/combinatorics/permutations).
