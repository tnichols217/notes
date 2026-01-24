# Week 2

## 1

Briefly summarize your knowledge of the area you are studying as of last week, and your plans for the current week from Q7 of your last diary. If this is the first diary write "Not Applicable."

> - Online learning is a set of systems and algorithms that can self-learn over time, by assessing and processing upon individual samples as they happen in real time
> - Previous algorithms are able to learn arbitrarily accurately given arbitrarily large data
> - The new algorithm proposed, proposes to do this optimally quickly (Online BBM)
> - A secondary algorithm is also proposed that does not require pre-knoledge of tuning parameters (AdaBoost)
> - We can create **boosters** that are very smart, also known as strong learners that are composed of a large number of weak learners (learners slightly better than random guessing)
> - Boosters function as a weighted vote of weak learners
> - Boosters are able to achieve very accurate results off of inaccurate weaker learners

## 2

List all resources you have read or looked at this week, along with the time you spent on each one (to the nearest 1/2 hour is enough). For web pages, blog posts, videos etc, provide links and titles. For papers, provide links and citations. For AI tools, provide a transcript of your session in a separate file in the Week_n folder, and list the file name (as a link) here.

> [https://bit.csc.lsu.edu/~jianhua/madaboost.pdf](https://bit.csc.lsu.edu/~jianhua/madaboost.pdf)
> 
> [https://chu-data-lab.github.io/CS8803Fall2018/CS8803-Fall2018-DML-Papers/adaboost-multiclass.pdf](https://chu-data-lab.github.io/CS8803Fall2018/CS8803-Fall2018-DML-Papers/adaboost-multiclass.pdf)

## 3

Summarize what you have learned **this week** from the resources above. Be clear, detailed and precise. It is ok to be uncertain about the content. Do **not** copy/paste content from any resource.

> I am still trying to grasp the original concepts from each paper, but essentially they both attempt to build upon `adaboost` in different ways. With `madaboost` trying to solve the problem of noisy data creating a non-divergent learning model, as well as allowing it to be used in filtering models. `multi-class adaboost` on the other hand, attempts to generalize `adaboost` to allow for more classifiers, which is something I was originally interested in last week when I took notes on `adaboost` and tried to generalize the formulae.

## 4

Describe any new ideas you may have had as you were studying the resources, and if you did any follow ups to investigate these ideas.

> I think I still would like to pursure the generalization of `adaboost`, however `madaboost` has made me more curious about wider applications of `adaboost` to boost more non-standard weak-learners. Both are still interesting to me and I plan to investigate further before pursuing one path.

## 5

If you implemented/ran any code or algorithms from the resources or while investigating any new ideas, describe what you did. Link to a jupyter notebook in your Week_n folder showing the runs. You may also include python files containing code in your Week_n folder. If so, their content should be described here. If you forked another repo or imported pre-built code, please provide a link. If an AI tool wrote part of the code, please provide a session transcript in the Week_n folder and link to it here. If any part of the code did not run or did not behave as expected, describe your best guess why and possible fixes.

> No code yet this week

## 6

Summarize any specific points of confusion, uncertainty or difficulty from your reading or implementation that arose from your readings or implementations this week. This can partly overlap with your answer (3).

> A lot of the terminology used in the `madaboost` paper was new to me and required extensive background research.

## 7

List specific goals you would like to accomplish for next week and action items aligned with these goals based on your answers above. Be as specific as you can.

> I feel like I accomplished last week's goal well, by being able to find papers that were directly answering my inquisitions. I want to further look into these algorithms and see what I can do differently as well as grok the underlying reasoning behind both of them. I would also like to look for more papers in order to compare various methods.
