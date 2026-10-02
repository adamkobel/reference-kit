# Probability Fundamentals

Probability is a way to describe how likely an event is. It is a foundation for data science because data often contains uncertainty: samples vary, measurements are noisy, and predictions are not guaranteed.

## The basic probability formula

For outcomes that are all equally likely:

$$
P(\text{event}) = \frac{\text{number of outcomes in the event}}{\text{total number of possible outcomes}}
$$

$P(\text{event})$ means "the probability of the event." Probability is between $0$ and $1$:

- $0$ means the event cannot happen.
- $1$ means the event is certain.
- A probability of $0.5$ means a 50% chance.

For example, a fair six-sided die has six equally likely outcomes. The event "roll an even number" contains $\{2, 4, 6\}$, so:

$$
P(\text{even}) = \frac{3}{6} = \frac{1}{2} = 0.5
$$

The favorable-outcomes formula only works directly when the possible outcomes are equally likely. For a biased die, outcomes need not have the same probability.

## Outcomes, sample spaces, and events

- An **outcome** is one possible result, such as rolling a $4$.
- The **sample space** is the set of all possible outcomes. For one roll of a six-sided die, it is $\{1, 2, 3, 4, 5, 6\}$.
- An **event** is a set of outcomes we care about, such as rolling an even number: $\{2, 4, 6\}$.

More generally, an event's probability is the sum of the probabilities of its outcomes. When outcomes are equally likely, this reduces to counting outcomes and using the basic formula.

## Useful probability rules

### Complement

The complement of an event $A$ is the event that $A$ does not happen:

$$
P(A^\complement) = 1 - P(A)
$$

If the probability of rain is $0.3$, the probability of no rain is $1 - 0.3 = 0.7$.

### Either of two events

For events $A$ and $B$, the probability that at least one happens is:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

The intersection, $A \cap B$, is subtracted because it would otherwise be counted twice. If the events cannot happen together, then $P(A \cap B) = 0$, and the rule simplifies to $P(A \cup B) = P(A) + P(B)$.

### Conditional probability

Conditional probability is the chance of $A$ happening when we know that $B$ has happened:

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad \text{when } P(B) > 0
$$

For a fair die, let $A$ be "the roll is greater than 3" and $B$ be "the roll is even." Given that the roll is even, the possible results are $\{2, 4, 6\}$; two of those three are greater than 3. Therefore:

$$
P(A \mid B) = \frac{2}{3}
$$

### Independent events

Two events are independent when knowing that one happened does not change the probability of the other. For independent events:

$$
P(A \cap B) = P(A)P(B)
$$

For example, separate tosses of a fair coin are independent. The probability of two heads in two tosses is $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. Events that cannot happen together are not automatically independent; independence is about whether one event changes the other's probability.

### Bayes' theorem

Bayes' theorem reverses a conditional probability and is useful for updating a probability after observing evidence:

$$
P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}, \quad \text{when } P(B) > 0
$$

For example, it can help estimate the probability that a customer belongs to a group after observing a purchase pattern, using both the pattern's frequency in that group and how common the group is overall.

## Probability and data

In data science, the exact probability of an event may be unknown. A common estimate is its observed relative frequency:

$$
\widehat{P}(\text{event}) = \frac{\text{number of times the event occurred}}{\text{number of observations}}
$$

For example, if 18 of 100 sampled customers renew a subscription, the observed renewal rate is $\frac{18}{100} = 0.18$, or 18%. This describes the sample; the rate in the wider population may differ, especially with a small or biased sample.

Probability describes uncertainty, not a guarantee about an individual outcome. When interpreting a probability, define the event and the information available, check whether the observations are representative, and distinguish estimates from known values.
