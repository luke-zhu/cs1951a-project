---
layout: post5
title:  "Blog Post #5"
---
{{ page.title }}
================

With the size and scope of our project, we wanted to try and focus on a particular genre and only within the past few years. There are many different forms of data-sets out there for different genres, time periods, and different metrics with which they defined popularity. We decided to make use of data from more specific sources of data and do more rigorous analysis on a particular subset of social media for our questions about the trends of the popularity of artists. 

The datasets were collected from various sources including the US Billboard Top 100 charts, Metacritic, Spotify information about artists and songs via Spotify API pulls, and text data from social media sites like Reddit and Rap Genius. For the majority of our data sources, we used a web scraper called Scrapy to collect information that was not really made available through regular API. 

    
    {"url": "https://www.reddit.com/r/hiphopheads/comments/62hhm2/fresh_kendrick_lamar_humble_single/", "polarity_mean": 0.09551545536375143, "polarity_std": 0.2607894828412269},
    {"url": "https://www.reddit.com/r/hiphopheads/comments/5xvl9s/chance_the_rapper_has_just_donated_1000000_to/", "polarity_mean": 0.12773875989161007, "polarity_std": 0.2815185198246458},
    {"url": "https://www.reddit.com/r/hiphopheads/comments/3x3j31/chance_the_rapper_announces_his_warmest_winter/", "polarity_mean": 0.08483745021527826, "polarity_std": 0.2788481117219995},

When trying to pull data for particular artists, we ran into the issue of ambiguity with names. For instance, “Beyonce” and “Beyoncé” would be categorized as two different artists if we didn’t account for both versions. In order to solve this, we made use of the Spotify API, which already had this sort of check built in. The way we implement it was that we would make requests using any of the ambiguous names that we came across and standardized the logical meaning behind each version of the name to the first result that Spotify gave for it. This made the aggregation process much easier and fully incorporated all of the different data points without any significant loss in data.

Some interesting things we learned along the way was that the nature of comments that users give on /r/Hiphopheads. Also, when we developed our application which plotted out the number of occurrences that an artist received on social media for mentions over time, we were able to look at specific comparisons between artists which gave us some more general insight that was backed by actual data analysis. 

This data trend shows some significant changes that are happening relatively recently and we cab demonstrate that graphically with data that we extracted and integrated. 

<img alt="" src="/cs1951a-project/images/image3.png" style="width: 653.25px; height: 268.50px; margin-left: -21.64px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""><

To explore the data we used a variety of different visualizations and statistics. For example, we aggregated Reddit posts by artist based on whether a post title contained the artist’s name. Using bar charts we were able to see a relationship between popularity on Reddit and popularity on the Billboard Top Hip Hop and R&B charts.

We then gathered samples of other data and looked at descriptive statistics like mean and median. When we noticed that the mean Metacritic score of the ten most popular artists on r/hiphopheads was almost 10 points higher than the mean Metacritic score of the ten most popular artists on the Billboard charts (73 vs 64), we decided to look more closely at how Metacritic scores of albums and artists affected the relationship between artist popularity on forums like r/hiphopheads and popularity on the charts.

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 340.00px; height: 178.36px;"><img alt="" src="/cs1951a-project/images/image7.png" style="width: 340.00px; height: 178.36px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 319.67px; height: 177.00px;"><img alt="" src="/cs1951a-project/images/image6.png" style="width: 319.67px; height: 177.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

The visualization also supported our initial exploration and we continued by doing machine learning analysis on this set of relations.

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 339.93px; height: 176.50px;"><img alt="" src="/cs1951a-project/images/image2.png" style="width: 339.93px; height: 176.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 340.00px; height: 175.99px;"><img alt="" src="/cs1951a-project/images/image5.png" style="width: 340.00px; height: 175.99px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

From our data exploration we proceeded to create linear regression relating mentions of artists in r/hiphopheads posts, Metacritic scores, and Billboard chart history. We eventually expanded our model to include RapGenius occurrence data and variations of Billboard charts. We found that a linear model with the below details had a r2 value of 0.586:

Predictors (artists):
artist average metacritic score
    # of weeks on Billboard’s Top Hip Hop and R&B Albums chart
    # of weeks on Billboard’s Top Hip Hop and R&B Albums chart
Dependent variable:
    # of mentions in titles of posts on the RapGenius forum since 2015
r/hiphopheads had less of a relationship to the Billboard charts (r2 values less than 0.43) and using our social media data to predict billboard chart rankings resulted in weaker models as well.
In addition to linear regression regarding artist popularity, we also did sentiment analysis on the comments in Reddit posts and compared them to the Metacritic averages of the artists mentioned in those posts. Using the TextBlob API, we used their model with pretrained sentiment polarity values for words and used the predicted sentiment values of each comment to estimate the overall sentiment of the community to different hip hop artists. 

However, as it turned out, the sentiment of discussions about artists are not correlated to the popularity nor the rating of the artist. One aspect of this refers back to the specific slang and jargon that is used on r/hiphopheads.

<img alt="" src="/cs1951a-project/images/image4.png" style="width: 592.50px; height: 293.16px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">

Aggregating these slang words and adjusting their sentiment scores could garner better results. This would be something to potentially improve if more research were to be done. 

The other underlying problem with the sentiments is that r/hiphopheads tends to be a place where users post about music that they like. There are few posts that express distaste about particular artists and their songs. The culture of the subreddit tends to be more about putting the spotlight and good music. So if more research were to be done it may be more meaningful to find sentiments about comments on a forum that is based more on giving critical reviews on artists.