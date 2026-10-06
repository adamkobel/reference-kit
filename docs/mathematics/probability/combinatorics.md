# Combinatorics

Combinatorics is the branch of mathematics concerned with counting arrangements and selections. In probability, counting the possible outcomes can help determine the probability of an event when those outcomes are equally likely.

To choose a counting method, ask:

1. **Does order matter?** If changing the order creates a different outcome, use a permutation or variation. If not, use a combination.
2. **Can an item be used more than once?** This determines whether repetition is included in the count.

## Factorials and the counting principle

For a positive integer $n$, the factorial $n!$ is the product of the positive integers up to $n$. By definition, $0! = 1$.

$$
n! = n(n-1)(n-2)\cdots 2 \cdot 1
$$

For example, $5! = 120$. If a process has successive steps with $a_1, a_2, \ldots, a_m$ possible choices, and every choice at one step can be paired with every choice at the others, the total number of outcomes is $a_1 a_2 \cdots a_m$.

## The three counting methods

| Method | What is counted? | Does order matter? |
| --- | --- | --- |
| [Permutations](/mathematics/probability/combinatorics/permutations) | Arrangements of all items | Yes |
| [Variations](/mathematics/probability/combinatorics/variations) | Ordered selections of some items | Yes |
| [Combinations](/mathematics/probability/combinatorics/combinations) | Selections of some items | No |

Each method has versions with and without repetition. Check the rules of the problem before choosing a formula; changing whether order matters or reuse is allowed changes the count.

## Using counts in probability

If every outcome in a finite sample space is equally likely, the probability of an event is:

$$
P(\text{event}) =
\frac{\text{number of outcomes in the event}}
{\text{total number of possible outcomes}}
$$

For example, if 3 of 10 equally likely outcomes satisfy an event, its probability is $\frac{3}{10}$. Counting alone does not establish that outcomes are equally likely; that assumption must also be justified.

Use the focused pages for the formulas, examples, and conditions:

- [Permutations](/mathematics/probability/combinatorics/permutations) — order all items, including cases with identical items.
- [Variations](/mathematics/probability/combinatorics/variations) — choose and order some items, with or without repetition.
- [Combinations](/mathematics/probability/combinatorics/combinations) — choose items when order does not matter.
