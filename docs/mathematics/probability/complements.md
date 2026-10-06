# Complements in Probability

The **complement** of an event is the event that it does not occur. Complement probabilities are useful when "not A" is easier to count or calculate than A, especially for questions such as "at least one" or "none."

## The complement rule

For an event $A$, its complement is often written $A^\complement$, $A'$, or "not $A$." Together, $A$ and its complement cover every possible outcome and cannot happen at the same time:

$$
P(A) + P(A^\complement) = 1
$$

Therefore:

$$
P(A^\complement) = 1 - P(A)
$$

For example, if a model correctly classifies 92% of examples in an evaluation set, then its observed error rate on that set is $1 - 0.92 = 0.08$, or 8%. This is a sample estimate; it does not guarantee the same error rate on future data.

## Complements in observed data

For a dataset with $N$ observations, if $k$ observations meet a clearly defined condition $A$, then:

$$
\widehat{P}(A) = \frac{k}{N}
\qquad
\widehat{P}(A^\complement) = \frac{N-k}{N} = 1 - \widehat{P}(A)
$$

Suppose 240 of 1,000 transactions are returned. The observed proportion not returned is:

$$
\frac{1{,}000 - 240}{1{,}000} = 0.76
$$

So 76% of these transactions were not returned. Before calculating, define the population and the event precisely, and decide how missing or incomplete records are handled. Otherwise, the complement may describe a data-recording outcome rather than the real-world outcome of interest.

## "At least one" events

To find the probability that at least one of several events happens, it can be simpler to subtract the probability that none happen from 1:

$$
P(\text{at least one } A_i) = 1 - P(\text{none of the } A_i)
$$

For $n$ independent trials where event $A$ has the same probability $p$ each time, the probability of no occurrences is $(1-p)^n$. Thus:

$$
P(\text{at least one occurrence}) = 1 - (1-p)^n
$$

If each incoming record has an independent 2% chance of failing validation, the probability that at least one of 10 records fails is:

$$
1 - (1 - 0.02)^{10} \approx 0.183
$$

That is about 18.3%. This calculation depends on independence and a constant failure probability. If records share a cause of failure or have different probabilities, use a model that accounts for those dependencies rather than applying this formula directly.

## Conditional complements

The complement rule also applies when conditioning on known information $B$, provided $P(B) > 0$:

$$
P(A^\complement \mid B) = 1 - P(A \mid B)
$$

For example, among customers who received a promotion, if the estimated purchase rate is 12%, the estimated rate who did not purchase is 88%. Both rates refer to the same conditioned group, not to all customers.

## Practical checks

- **Define the universe:** $A$ and its complement must cover all outcomes under consideration.
- **Use the same denominator:** For empirical proportions, count $A$ and not $A$ among the same eligible observations.
- **Do not confuse "not observed" with "did not happen":** Missing, censored, or unrecorded outcomes may need a separate category.
- **Check assumptions for repeated trials:** The expression $(1-p)^n$ requires independent trials with the same probability $p$.
- **Interpret estimates carefully:** A complement of a sample proportion describes that sample; population conclusions also depend on sampling and uncertainty.
