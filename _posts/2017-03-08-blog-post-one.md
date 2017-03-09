---
layout: post
title:  "Blog Post #1"
---
{{ page.title }}
================

<h2>Overview - Anthony</h2>

For the past week, we have been going over exactly what the scope and purpose of our insight into music data was going to be. We wanted to initially look at the popularity of artists for the past 40 years and compare and contrast the trends in popularity of artists before and after the introduction of the internet. However, we quickly realized that that might prove to be problematic since it is difficult to directly measure the popularity of artists using the data from social media against the popularity of artists without that data. While we are still able to use sales data as a viable metric for older artists’ popularity, we think that it might be best to focus on comparing apples to apples with artists in the past 10 years or so and measure them against each other in order to get a sense of how social media has impacted different artists differently over time. Rather than comparing how the introduction of the internet impacted the trends of popularity in the music industry as a whole, we might look at how the different artists within the industry developed given the presence of the internet. This distinction in time will become more apparent as we continue to scrape data from various data sources using APIs.

On the topic of APIs and creating the best data-set we can, we thought it would be best to use Spotify for our main source of data on artists. It already has a popularity field that we can base the bulk of our analyses on. The one caveat to this is that we might want to take into context exactly what the algorithm for popularity is really trying to capture. It is based on the number of streams (among various parameters) contained within Spotify itself. So, if an artist has become largely popular on YouTube, using this metric by itself might prove misleading as it would not take that source of viewership into account. Therefore, it might be prudent to include a variety of sources as to best be able to capture the most holistic view we can on the lifespan of an artist’s popularity for our model.  

Some of the APIs/data sources that we were considering could be of (but are not limited to) the following list: Discogs, Wikipedia, Google Knowledge Graph Search, and MusicBrainz (open source).  We also are keeping the options of using techniques such as text mining on social media data sources open to us as we add to our model. Discogs is by far the largest API source out there currently, however it isn't as frequently up to date as some of the other data sources. Wikipedia will be great in the sense that, similar to how we plan on extracting data from social media outlets, we can use text mining to try and extract some more nuanced information. 

With regards to tracking the data and discover geographical and historical trends, we hope that with the inclusion of different sources, we might be able to capture and illustrate something that these data sources by themselves are not able to. One possible trend worth exploring is the rise in popularity for an artist within a certain social media site (e.g. a YouTube star or a young artist’s twitter campaign) and note the patterns that we might find with that origin for rising artists' careers.

Since we are including a web application with our project, an important feature worth mentioning is the possibility that we can leverage the patterns that we find with our data into a predictive machine. The basic idea is that a user can choose to look at an artist’s popularity history (geographically, with social media, etc.) and then input a certain amount of time into the future they want the application to project the expected popularity for that artist. This would be particularly challenging, however, because there are many distinct factors that can have a dramatic impact on an artist’s musical career (like celebrity scandals or the loss of a record deal).  Bearing that in mind, we are taking the assumption that the further into the future the user wants their projection to be, the less informative our data will become and the vaguer our visualization might turn out. It ultimately depends on how we represent popularity given whichever context we are measuring in. 



<h2>Integrating social media with music - Luke</h2>
I worked on setting up a method to gather social media data. So far I have
gathered data from Twitter. I plan in the future to look at Reddit comments
as well.

First, I collected tweets using the query "Bad and Boujee". I found that searching
for tweets was not the best way to measure popularity. However, It seemed
possible to measure popularity by looking at the difference between the
post times of different tweets or by using the since_id parameter to limit
the query search to a given time interval.

Using the trends API or looking for mentions of the
artist would give me more concrete numbers. In addition, the rate limiting
posed a problem for collecting data for many songs. I have not looked into
the Streaming API but I believe that will allow us to collect more data.

I ended up creating two tables schemas, an artist table, and a song table.

The tweet table looks like the following

      "song": "bad and boujee",
      "query_id": 5,
      "query": "bad and boujee",
      "query_date": "Thu Mar 09 04:19:44 +0000 2017",
      "created_at": "Thu Mar 09 04:10:48 +0000 2017",
      "id": 839689902228967400,
      "id_str": "839689902228967426",
      "text": "RT @_darthvaderr: here's me being bad and boujee 💃🏻 https://t.co/ZG0yzHaQT2",
      "retweet_count": 15,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,

The artist table looks like the following
      
      "artist": "Migos",
      "query_id": 1,
      "query": "@Migos",
      "query_date": "Thu Mar 09 04:39:06 +0000 2017"
      "created_at": "Thu Mar 09 04:39:06 +0000 2017",
      "id": 839697025553805300,
      "id_str": "839697025553805314",
      "text": "RT @ChemistJams: Migos Featuring 2 Chainz - Deadz Official Video (@Migos) (@2chainz)\n\n#YRN\n#CULTURE\n#ChemistJams https://t.co/bmHZlYa0Sw",
      "retweet_count": 11,
      "favorite_count": 0,
      "favorited": false,
      "retweeted": false,

I kept the data in a json file as I am still considering how to use the
"text" field. While I am not sure, It might be better to use a noSQL database
instead for text analysis.
In the future, I hope to do some analysis of the texts but
it is a problem to store the full tweet.

I have not been able to systematically collect data but I hope to do so soon
on the songs we have decided to analyze. As for visualizations, I believe
comparing the popularity of songs based on tweets with Spotify's data or
using the geocode parameter to create a map visualization showing which songs
different parts of the country enjoy may be better.
