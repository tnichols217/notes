# MnM Lab
## Data
### Solo
| Color  | Obs | Exp | $o-e$ | $(o-e)^2$ | $(o-e)^2/e$ | 
| ------ | --- | --- | ----- | --------- | ----------- |
| Red    | 7   | 5   | +2    | 4         | 0.8         |
| Orange | 3   | 5   | -2    | 4         | 0.8         |
| Yellow | 2   | 5   | -3    | 9         | 1.8         |
| Green  | 6   | 5   | +1    | 1         | 0.2         |
| Blue   | 7   | 5   | +2    | 4         | 0.8         |
| Brown  | 5   | 5   | +0    | 0         | 0.0         |
| Total  | 30  | 30  | 0     |           | 4.4         |

### Group
| Color  | Obs | Exp    | $o-e$  | $(o-e)^2$  | $(o-e)^2/e$   |
| ------ | --- | ------ | ------ | ---------- | ------------- |
| Red    | 31  | 29.833 | +1.166 | 1.359556   |               |
| Orange | 38  | 29.833 | +8.166 | 66.683556  |               |
| Yellow | 33  | 29.833 | +3.166 | 10.023556  |               |
| Green  | 27  | 29.833 | -2.833 | 8.025889   |               |
| Blue   | 26  | 29.833 | -3.833 | 14.691889  |               |
| Brown  | 24  | 29.833 | -5.833 | 34.023889  |               |
| Total  | 179 |        | 0      | 134.808335 | 4.51876562867 | 

## Analysis
### Null Hypothesis
The assortment of colors in a crispy MnM packet are each of equal chance of occurring.

### Conclusion
With a 95% confidence level, and 5 degrees of freedom, the $\chi^2$ result of either 4.4 or 4.518 are insignificant to the threshold of 9.49, and fails to reject the Null Hypothesis that the MnMs' colors are equally assorted.

# Additional Practice Problems
## Phenotypic ratio heterozygous genes

|       | **G** | **g** |
| ----- | ----- | ----- |
| **G** | GG    | Gg    |
| **g** | Gg    | gg    |

G:g ratio of 3:1

## Chi-squared test for phenotypes in Green/Albino peas
### Data
| Phenotype | Obv | Exp | $o-e$ | $(o-e)^2$ | $(o-e)^2/e$   |
| --------- | --- | --- | ----- | --------- | ------------- |
| Green     | 72  | 63  | 9     | 81        | 1.28571428571 |
| Albino    | 12  | 21  | -9    | 81        | 3.85714285714 |
| Total     | 84  | 84  |       |           | 5.14285714285 | 

### Analysis
#### Null Hypothesis
Pea seeds obey the law of independent assortment and the combination of genes are completely random, meaning that the dominant phenotype in a cross should account for 75% of the offspring.

#### Conclusion
With a 95% confidence level, and 1 degree of freedom, the $\chi^2$ value of 5.14285714285 is significant at the threshold of 3.84, which rejects the null hypothesis that these peas obey the law of independent assortment.
