# Week 3

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

> [https://bit.csc.lsu.edu/~jianhua/madaboost.pdf](https://bit.csc.lsu.edu/~jianhua/madaboost.pdf) 1.5 hours
> 
> [https://chu-data-lab.github.io/CS8803Fall2018/CS8803-Fall2018-DML-Papers/adaboost-multiclass.pdf](https://chu-data-lab.github.io/CS8803Fall2018/CS8803-Fall2018-DML-Papers/adaboost-multiclass.pdf) 2 hours
> 
> [https://github.com/rmitsuboshi/miniboosts](https://github.com/rmitsuboshi/miniboosts) 2 hours (code review)
> 
> [https://docs.rs/miniboosts/latest/miniboosts/struct.AdaBoost.html](https://docs.rs/miniboosts/latest/miniboosts/struct.AdaBoost.html)
> 
> Started coding an implementation for SAMME Multi-class (2 hours)

## 3

Summarize what you have learned **this week** from the resources above. Be clear, detailed and precise. It is ok to be uncertain about the content. Do **not** copy/paste content from any resource.

> This week I spent more time re-reading the madaboost and multiclass papers in order to understand why the changes they made solved their respective problems. I feel now that I understand better the inner workings of AdaBoost as a whole, leading me to want to begin trying to implement some of the ideas in a programming language.
> 
> I have spent some time this week looking through prior AdaBoost implementations as well, primarily the rust implementation within the `miniboosts` library. I have also begun implementing SAMME in the miniboosts framework as well as put some thought to applications of this software for later development.

## 4

Describe any new ideas you may have had as you were studying the resources, and if you did any follow ups to investigate these ideas.

> After studying the different "corrections" to AdaBoost these various algorithms have done, I am now less motivated to attempt to try and re-solve this issue. However, I have ran across `SAMME.R`- an alternative to `SAMME` for probabilistic class predictions, which I may also take the time out in later weeks to learn more about and possibly try to implement.
> 
> I additionally have also began thinking of attempting to make an image classifier by tying in the concept of a neural auto-encoder, and utilizing the encoded state as a representation of images to be trained on in a boosted basic classifier.

## 5

If you implemented/ran any code or algorithms from the resources or while investigating any new ideas, describe what you did. Link to a jupyter notebook in your Week_n folder showing the runs. You may also include python files containing code in your Week_n folder. If so, their content should be described here. If you forked another repo or imported pre-built code, please provide a link. If an AI tool wrote part of the code, please provide a session transcript in the Week_n folder and link to it here. If any part of the code did not run or did not behave as expected, describe your best guess why and possible fixes.

> I have began working on code within the `src/` folder of the repo. I have spent majority of the time this week setting up environments for the code to work properly.

## 6

Summarize any specific points of confusion, uncertainty or difficulty from your reading or implementation that arose from your readings or implementations this week. This can partly overlap with your answer (3).

> Some terminology is still confusing to me, it is not as bad as previous weeks, but some things still trip me up. Additionally, the library I am trying to extend does not natively support multi-class classification, so I am trying to implement that.

## 7

List specific goals you would like to accomplish for next week and action items aligned with these goals based on your answers above. Be as specific as you can.

> Work more on my implementation of SAMME, and research SAMME.R, then likely try to implement/train this on an autoencoder.
