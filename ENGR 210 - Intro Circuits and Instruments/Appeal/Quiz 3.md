# ENGR 210 Quiz 3 Regrade

## Abstract

I believe I was graded unfairly against on my third quiz in this class. There are several comments I would deem unprofessional and inappropriate for a quiz remark, and thus fails to explain what I did wrong or how I could improve on the questions given on the quiz.

Following is a breakdown of the two questions on the quiz with commentary on the remarks given by the TA.

## Question 1

For the first question on the quiz, I utilized the linear algebra version of the mesh current method (as outlined in the textbook) to write down the equations necessary for solving the circuit given.

The following comments were given on the first question:
1. where did $i_{3}=12I_{1}$ come from?
2. please write in actual equation form, linear algebra is cool but like just write the equations
3. ($-7i_{\Delta}$) $\to+7i_{\Delta}$ (-0.5)
4. it is just $i_{3}=2V_{\Delta}$ (-1)
5. based on current direction it should be negative (-0.25)
6. please do it the way we did it in class or give more thorough explanations (-0.25)

On order of appearance:

### Remark 1

> where did $i_{3}=12I_{1}$ come from?

The equation $i_{3}=12I_{1}$ is directly derived from the prior statement which the TA has ticked where I state that $V_{\Delta}=6I_{1}$, therefore $i_{3}=2V_{\Delta}=12I_{1}$.

I thought it was trivial to see that this following of logic is sound as I showed the direct prior step in my question.

### Remark 2

> please write in actual equation form, linear algebra is cool but like just write the equations

I believe this comment is completely unnecessary and unprofessional especially as the linear algebra versions of the equations are direct analogs of the mesh current method taught in class as well as mentioned and explained on pages `65-66` of our textbook under the explanation of Kirchoff's laws and mentioned on pages `131-132` under the by-inspection section of the textbook.

### Remark 3

> ($-7i_{\Delta}$) $\to+7i_{\Delta}$ (-0.5)

This is blatantly false, as I defined all my current loops to be clockwise, therefore going against the direction of the dependant source, and thus must be negated to make the equation hold true. Therefore the equation for the second loop should appear to be: $-12I_{1}-87i_{\Delta}-60(12I_{1})=-7i_{\Delta}$. It would make no logical sense for this equation to have a postive $7i_{\Delta}$ on the right side of this equation.

### Remark 4

> it is just $i_{3}=2V_{\Delta}$ (-1)

Yes, this is true, but this statement is already encoded into the logic of the multiplication, and thus would not add an independent equation to the system to be able to solve the equation.

Upon looking back upon this question, I made the mistake that the bottom right entry of the resistance matrix should be $60$ instead of $0$, thus making the third loop equivalent to $60i_{\Delta}+60(12I_{1})=V_{3}$, which is an independent equation that would add to the solving of this circuit.

### Remark 5

> based on current direction it should be negative (-0.25)

No contest.

This statement is true, I have overlooked the fact that by assuming directions with signs we can decide which sign the power should be.

### Remark 6

> please do it the way we did it in class or give more thorough explanations (-0.25)

I do not see how this is a necessary comment either, or worthy of points off. As I have mentioned in my response to the second remark, this method is a direct analog and also covered multiple times in the textbook.

## Question 2

Once again, I have utilized the same linear algebra technique to solve this circuit

The following comments were given on the second question:
1. $V_{2}'=i(6\ohm)$ please draw circuit (-1)
2. invalid equations (-1)
3. $\times$ on the final answer of $\frac{675}{2}~W$

On order of appearance:

### Remark 1

> $V_{2}'=i(6\ohm)$ please draw circuit (-1)

Yes, the statement he made is true, but it once again it does not contribute to solving this circuit as it is not an independent equation as compared to the rest of the system.

Additionally, if we were to generate our resistive, current, and voltage matrices from the Kirchoff laws via the method explained on page `65` of the textbook, the equation stated would not appear in the output equations.

I understand the want to have circuits drawn, but with the time crunch of the exam I did not get the time to draw it, which would have taken too much time in a timed environment. Additionally, if drawing a circuit was required to score points for this question, I don't believe the question makes that clear.

I additionally have re-checked my matrices and they are correct for this circuit.

### Remark 2

> invalid equations (-1)

This is a false statement. The equations are correct and consistent with the matrix method of the Kirchoff Current laws explained on page `65` of out textbook. Additionally, solving the equation I have listed produces the correct current for the resistor for this modified circuit (at $\frac{5}{2}~A$)

### Remark 3

My answer is correct as compared with the answers given by you on canvas, as $\frac{675}{2}=337.5$ is evidently true, yet the TA has marked it incorrect incorrectly.

### Additional Supporting evidence

The following is a python script that calculates the solution by solving the matrices I have written down on the quiz:

```python
from sympy import symbols, solve
from sympy.matrices import Matrix

i1, v2, i6 = symbols("i1 v2 i6")

R = Matrix([
    [50, 10, -40],
    [10, 10, 0],
    [-40, 0, 48]
])

I = Matrix([[i1, -10, i6]]).T
V = Matrix([[0, v2, 0]]).T

s = solve([R*I - V], i1, v2, i6)
i6p = i6.subs(s)

R = Matrix([
    [50, -40],
    [-40, 48]
])

I = Matrix([[i1, i6]]).T
V = Matrix([[-200, 200]]).T

s = solve([R*I - V], i1, i6)
i6pp = i6.subs(s)

i6 = i6p + i6pp

P = i6**2 * 6
display(P)
```

This snippet of code directly produces the answer $P=\frac{675}{2}~W$ via the exact method I have executed on my quiz.

## Finishing Thoughts

I do agree that I have accidentally forgotten about passive sign convention as well as the $60$ in the bottom right of the matrix in the first equation, but I do not feel that this warrants a 2 point deduction as these are fairly minor mistakes while I have performed the entirety of the rest of the quiz correctly. As for the second question on this quiz, both my method and solution are correct yet I have gotten points taken off. I do not feel like this is a fair or accurate reflection of my performance at all and thus feel that I should recieve all points back for the second question of this quiz, unless fractions are not an accepable method of submitting answers on this quiz.

Following this document is a scan of my quiz with the remarks.
