# Week 5

## 1

Briefly summarize your knowledge of the area you are studying as of last week, and your plans for the current week from Q7 of your last diary. If this is the first diary write "Not Applicable."

> - Starting over from scratch, utilizing my prior knowledge of online time-based learning algorithms

## 2

List all resources you have read or looked at this week, along with the time you spent on each one (to the nearest 1/2 hour is enough). For web pages, blog posts, videos etc, provide links and titles. For papers, provide links and citations. For AI tools, provide a transcript of your session in a separate file in the Week_n folder, and list the file name (as a link) here.

> https://proceedings.mlr.press/v80/kipf18a.html
> https://papers.nips.cc/paper_files/paper/2019/hash/a6b8deb7798e7532ade2a8934477d3ce-Abstract.html
> https://papers.nips.cc/paper/2020/hash/a7789ef88d599b8df86bbee632b2994d-Abstract.html
> https://papers.nips.cc/paper/2020/hash/a32d7eeaae19821fd9ce317f3ce952a7-Abstract.html
> https://arxiv.org/abs/2110.14012
> https://link.springer.com/article/10.1007/s10462-023-10443-1
> https://link.springer.com/article/10.1007/s10462-023-10562-9
> https://link.springer.com/article/10.1007/s10462-022-10351-w
> https://aaai.org/papers/04054-neural-latent-space-model-for-dynamic-networks-and-temporal-knowledge-graphs/
> https://proceedings.mlr.press/v206/liu23a.html
> https://arxiv.org/abs/2401.03599
> 
> EEGNN: Edge Enhanced Graph Neural Network with a Bayesian Nonparametric Graph Model: (1 hour)

## 3

Summarize what you have learned **this week** from the resources above. Be clear, detailed and precise. It is ok to be uncertain about the content. Do **not** copy/paste content from any resource.

> I have not got much deep detailed understanding of many of these concepts, but I am learning a lot about the higher level concepts and their composability into the model as a whole. I have read up and am beginning to understand the capabilities and shortcomings of BNNs and GNNs, and am beginning to think about how I will combat these shortfalls.

## 4

Describe any new ideas you may have had as you were studying the resources, and if you did any follow ups to investigate these ideas.

> This week, I thought over the purpose of this entire project and sought to find resources to allow me to expand my scope of direction. I now seek to attempt to create a model based upon the concepts of bidirectional neural networks in a graph topology, similar to that of graphical Bayesian reasoning, for the purpose of deep online learning of interrelated systems. I seek to accomplish this by implementing a bidirectional message passing neural network based on the ideas of a Bayesian neural network due to the fact that BNNs are capable of providing bidirectional learning as well as uncertainty and causality prediction, leading to a more robust and interpretable model ultimately. I have not found significant literature on this topic in the past as a whole composed system, and believe this is a novel usage of such ideas. I expect the propagation of causality and uncertainty would require the development of novel algorithms for the purpose of integrating it in a deep message passing model.
> 
> I have investigated these ideas and found 11 papers loosely related to these concepts for the purpose of allowing me to gain a deeper understanding of the area of research as a whole, which will allow my further synthesis later.

## 5

If you implemented/ran any code or algorithms from the resources or while investigating any new ideas, describe what you did. Link to a jupyter notebook in your Week_n folder showing the runs. You may also include python files containing code in your Week_n folder. If so, their content should be described here. If you forked another repo or imported pre-built code, please provide a link. If an AI tool wrote part of the code, please provide a session transcript in the Week_n folder and link to it here. If any part of the code did not run or did not behave as expected, describe your best guess why and possible fixes.

> No code has been implemented this week

## 6

Summarize any specific points of confusion, uncertainty or difficulty from your reading or implementation that arose from your readings or implementations this week. This can partly overlap with your answer (3).

> Generally, most of the implementation details of BNNs and GNNs are still very uncertain to me. I understand the general high level purpose of different portions of the models, but still lack insight into why formulae perform the functions they were created to do, which I believe would be required in order for me to synthesize something novel in the space.

## 7

List specific goals you would like to accomplish for next week and action items aligned with these goals based on your answers above. Be as specific as you can.

> Read and take notes on the new papers I have found and skimmed this week to gain a deeper understanding of all the details.
> 
> Begin planning the architecture of my final model, divide up different sections into independent projects so that I am able to checkpoint and test things as we go.
