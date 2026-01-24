# Week 4

## 1

Briefly summarize your knowledge of the area you are studying as of last week, and your plans for the current week from Q7 of your last diary. If this is the first diary write "Not Applicable."

> - Online learning is a set of systems and algorithms that can self-learn over time, by assessing and processing upon individual samples as they happen in real time
> - Previous algorithms are able to learn arbitrarily accurately given arbitrarily large data
> - The new algorithm proposed, proposes to do this optimally quickly (Online BBM)
> - A secondary algorithm is also proposed that does not require pre-knoledge of tuning parameters (AdaBoost)
> - We can create **boosters** that are very smart, also known as strong learners that are composed of a large number of weak learners (learners slightly better than random guessing)
> - Boosters function as a weighted vote of weak learners
> - Boosters are able to achieve very accurate results off of inaccurate weaker learners
> - Madaboost's primary difference is just a change in one of the model parameter update procedures
> - SAMME uses a slightly different learner weighting as compared to the original adaboost

## 2

List all resources you have read or looked at this week, along with the time you spent on each one (to the nearest 1/2 hour is enough). For web pages, blog posts, videos etc, provide links and titles. For papers, provide links and citations. For AI tools, provide a transcript of your session in a separate file in the Week_n folder, and list the file name (as a link) here.

> [https://chu-data-lab.github.io/CS8803Fall2018/CS8803-Fall2018-DML-Papers/adaboost-multiclass.pdf](https://chu-data-lab.github.io/CS8803Fall2018/CS8803-Fall2018-DML-Papers/adaboost-multiclass.pdf) 1 hour
> 
> [https://github.com/rmitsuboshi/miniboosts](https://github.com/rmitsuboshi/miniboosts) 1 hour (code review)
> 
> [https://docs.rs/miniboosts/latest/miniboosts/struct.AdaBoost.html](https://docs.rs/miniboosts/latest/miniboosts/struct.AdaBoost.html)

## 3

Summarize what you have learned **this week** from the resources above. Be clear, detailed and precise. It is ok to be uncertain about the content. Do **not** copy/paste content from any resource.

> This week, I spent all my time reading and writing code for the SAMME algorithm. I seeked inspiration from the source code of the miniboosts algorithm, while reviewing the algorithm state in the SAMME paper.

## 4

Describe any new ideas you may have had as you were studying the resources, and if you did any follow ups to investigate these ideas.

> I didn't have many new ideas this week, but I thought it would be worth looking into boosting algorithms with non-homogenous weak learners, similar to the concept of a "Mixture of Experts" in the NN field.
> 
> Since SAMME can do multi-class prediction, maybe its possible to expand this even further to predict multiple columns and possibly mimic a NN.

## 5

If you implemented/ran any code or algorithms from the resources or while investigating any new ideas, describe what you did. Link to a jupyter notebook in your Week_n folder showing the runs. You may also include python files containing code in your Week_n folder. If so, their content should be described here. If you forked another repo or imported pre-built code, please provide a link. If an AI tool wrote part of the code, please provide a session transcript in the Week_n folder and link to it here. If any part of the code did not run or did not behave as expected, describe your best guess why and possible fixes.

> More progress has been made in the `/src` directory of this repo, which is where I spent majority of my time this week. I seeked a lot of inspiration from the miniboosts repository for reference implementations of `AdaBoost`, but instead extended their implementation to `SAMME`.

## 6

Summarize any specific points of confusion, uncertainty or difficulty from your reading or implementation that arose from your readings or implementations this week. This can partly overlap with your answer (3).

> No content this week was confusing, as it was mainly review from previous weeks.

## 7

List specific goals you would like to accomplish for next week and action items aligned with these goals based on your answers above. Be as specific as you can.

> Continue working on my implementation of SAMME, conduct some tests to see how it fares against the original AdaBoost, then plan my next steps for the algorithm from there.


> Ensemble algorithms, noise reduction
> Backprop research and connection between NN layers and boosters
> Autoencoders + Boosters?
