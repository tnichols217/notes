# Week 6

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
> 
> Bayesian learning for neural networks: an algorithmic survey: (4 hours)
> Building powerful and equivariant graph neural networks with structural message-passing: (1 hour)

## 3

Summarize what you have learned **this week** from the resources above. Be clear, detailed and precise. It is ok to be uncertain about the content. Do **not** copy/paste content from any resource.

> This week I continued my research into existing research on this topic by reading through the entirety of the survey on Bayesian learning (50 pages). This provided me with a lot of needed insight into what problems have arisen in the area and what solutions have been attempted.
> 
> It has confirmed a lot of my prior suspicions about being able to apply BNNs with minor modifications in order to provide a strong inference model for graphical learning. I also learned how different models can be derived from a general BNN model, showing that this learning method has wide applications.
> 
> I also began looking through the SMP paper, seeking to gain a better understanding of how to tackle graph wide inference when MPNN's typically suffer from scaling. I have not yet finished the paper yet.

## 4

Describe any new ideas you may have had as you were studying the resources, and if you did any follow ups to investigate these ideas.

> This week, I realized the importance of having the inputs to the graph be encoded, likely with a VAE, as it allows for both faster learning and "unwrapping" of higher-dimensional spaces. I looked further into it in the survey paper I read this week.

## 5

If you implemented/ran any code or algorithms from the resources or while investigating any new ideas, describe what you did. Link to a jupyter notebook in your Week_n folder showing the runs. You may also include python files containing code in your Week_n folder. If so, their content should be described here. If you forked another repo or imported pre-built code, please provide a link. If an AI tool wrote part of the code, please provide a session transcript in the Week_n folder and link to it here. If any part of the code did not run or did not behave as expected, describe your best guess why and possible fixes.

> No code has been implemented this week, but have begun looking for libraries for some of the math that is required for performing this kind of learning.

## 6

Summarize any specific points of confusion, uncertainty or difficulty from your reading or implementation that arose from your readings or implementations this week. This can partly overlap with your answer (3).

> I have majority of the higher level concepts complete, just a few things about KL learning are still slightly confusing to me and how it is able to generalize outside of the context of a dense network, I grappled and concluded that it likely is able to tackle multimodalities and non-normal distributions through the influence of multiple nodes.

## 7

List specific goals you would like to accomplish for next week and action items aligned with these goals based on your answers above. Be as specific as you can.

> Continue to read through the papers I have selected, and possibly select the assortment of libraries I would like to utilize for this project.
