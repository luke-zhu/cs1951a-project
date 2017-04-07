---
layout: post2
title:  "Blog Post #2"
---
{{ page.title }}
================
For this blog post we tried to do a little bit of prediction analysis on the data set that we were able to collect from Spotify to try and see just how correlated the genre of a song was to its popularity metric. For this we split the data into two sets, one for training and one for testing. They were sets of the same length and were arbitrarily chosen based on the output of the Spotify queries for songs and was equal amount for each year.With the training set, we made a list of buckets for each genre of music and found the average value for the popularity metric that Spotify uses for each genre. Once we made an average value for each genre we used that information as our prediction labeling for what the popularity might be for each song in the testing data. We then compared the actual probability with our predicted probability based on what category of genre the song fell under. In order to compute accuracy, we did a mean-squared error test and found an accuracy of about 183.64 for our variance, meaning that, for each song that we were compare our data with, we were (183.64)^1/2 off or about 13.5 off of the actual popularity metric that was for the song. 

This was unexpectedly accurate, considering all we did was use a singular variable (genre) as our prediction factor. This gave us a little bit of confidence moving forward with our decision to apply more of a prediction based approach to our project with the popularity of artists. However, we want to keep in mind that there are plenty of prediction based analyses out there already for up and coming artists so if we want to make our project more unique, our prediction section of our analysis might be better spent on something that combines other elements of popularity that other companies or service providers have yet tried.

Below you can see a scatterplot of the relative accuracy for each data point where the perfectly accurate line lies on the x = y or diagonal axis as we compare each predicted value to the actual value:

<img src="/cs1951a-project/unnamed.png" />

Here are downloads of the code and output:

<a href="/cs1951a-project/tester2.py">Code</a>
<a href="/cs1951a-project/output.csv">Output</a>


Below is our visualization from the midterm report.