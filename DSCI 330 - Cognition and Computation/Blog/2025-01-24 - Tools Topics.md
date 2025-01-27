# Tools Topics

## Prompt

Post 250 words on your blog outlining three possible topics for your effort (small paper or final project) on _tools_. We will discuss this in class.

## Response

Computational tools are commonly used to look at and process data, whether it be a large amount of small personal observations. As a computer science and data science student, I have plenty of experience using computational tools in order to draw conclusions from data, including geospatial data, large language data, and of course widely used datasets such as those from MNIST or Kaggle.

My personal favorite computational tools to use include PostgreSQL, Numpy, and UIUA to process data. Depending on the size and type of the data I am looking at, I would choose different tools to more better process the data I am looking at.

I use PostgreSQL for the largest data sets I have to deal with. For example, I have worked on a gerrymandering detection project with my classmate Aidan using a geospatial dataset containing voting data on a city block level of resolution. By putting all this data into the SQL database, we were able to easily process several gigabytes of data with ease and speed. The database allows for multiple connections to it at once, allowing us to create a server/worker model to further parallelize and speed up the computation of out data processing.

For smaller datasets that can normally all fit within one file, such as the MNIST handwriting dataset or the iris flower dataset, I am more inclined to use Numpy, for its ease of use and speed of writing. Numpy, when used in conjunction with Scipy, and a learning library like Pytorch or Tensorflow, allows me to quickly draft a model of data to quickly understand a piece of data. One thing I also appreciate about using python packages like this is that it also allows me to connect it to Postgres to further push what I am able to accomplish within python and its packages.

Lastly, for the smallest datasets or small mathematical/crypological pieces of information, I prefer to use UIUA. UIUA, the language is an extremely terse language providing practically any functional paradigm you would need to process any piece of data. UIUA allows me to speedily use the repl to quickly process small pieces of data with no need for any setup or preprocessing, similar to how a calculator speeds up basic algrbra, UIUA speeds up data processing by orders of magnitude.