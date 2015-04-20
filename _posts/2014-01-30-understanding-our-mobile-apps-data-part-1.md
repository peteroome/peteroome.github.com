---
layout: post
comments: true
title: Understanding Our Mobile App's Data (Part 1)
---

We’re approximately 4 months into the development of [Pingle](http://joinpingle.com) and 1 month of it being available in the Google Play store. As a result, I wanted to share with you the data we’ve captured so far. This is the data currently driving our design and development decisions with regards to changes, updates and features.

![Pingle Logo](/images/2014-01-30-understanding-our-mobile-apps-data-part-1/social_logo.png)

Despite still only having a small amount of it (data), i’ve broken this post down into a few parts so as not to bore you all and so this post doesn’t end up setting some kind of word count record.

## Current Status
So, iOS users of our app are still restricted by TestFlight - we are still beta testing here and our app isn’t in the Apple App Store yet. The Android version of [Pingle is in the Goolge Play Store](https://play.google.com/store/apps/details?id=com.betahive.pingle&hl=en) where it went live on 16th December.

For the purpose of accuracy and insight, we decided it would be sensible to remove all ‘admin’ content from the data sets. This means there is no content, contributed by the Upstate team that is contributing to these stats.

If you don’t already know what Pingle is, or how it works, the flow of our app is:

1. Signup!
2. Post a group along with a caption of what you’re doing and who you’d like to chat to.
3. RSVP to other posts on the app - tick yes or no as to whether you’d like to chat or not.
4. Get a match from another group owner who would also like to chat to you.
5. Send messages in a group chat room.

Here are some screenshots to clarify this…

![Pingle Screenshots](/images/2014-01-30-understanding-our-mobile-apps-data-part-1/Walkthrough.jpg)

First things first, we checked on the general growth of the key areas of our app. As per the aforementioned flow, these are: **signups**, **posts**, **rsvp’s**, **matches** and **messages**.

##Signups
![Pingle Signups Per Week](/images/2014-01-30-understanding-our-mobile-apps-data-part-1/pingle_signups_per_week.png)
Things got off to a ‘lumpy’ start. This was very early on in development of the app when we were showing the prototype to friends, family and peers via TestFlight; a useful tool with a painful on-boarding process.

The Christmas period saw our lowest signup period. This wasn’t unexpected but since our return from the holidays, we’ve put considerably more effort into marketing Pingle. This has been done via blog posts, paid adverts (Facebook, Reddit, Google Ad’s) and general social-networking too.

We’ve been extremely happy with the signup rate over the past 3 weeks which has sat at around 20% per week.

##Posts
![Pingle Posts Per Week](/images/2014-01-30-understanding-our-mobile-apps-data-part-1/pingle_posts_per_week.png)
Posts are a different story. There is a general negative trend on the posting of content to Pingle, except for what looks to be an anomoly on the week starting the 13th January.

Growth seems to be flirting around the 16% mark more recently with regards to this data point.

##RSVP’s
![Pingle RSVP's Per Week](/images/2014-01-30-understanding-our-mobile-apps-data-part-1/pingle_rsvps_per_week.png)
The Yes/No options have been controversial amongst the team; some hate them and think they’re a barrier to enabling people to chat with one another, others think they’re a good mechanism for validating the people you’d like to chat to and some just think the buttons need refining slightly. Whichever way you look at it, there is strong growth on the app with regard to this function; it seems to be one feature that users do not need any help in using!

##Matches
![Pingle Matches Per Week](/images/2014-01-30-understanding-our-mobile-apps-data-part-1/pingle_matches_per_week.png)
Again, it’s been a ‘lumpy’ start, with a dead period over the Christmas holidays that correlates with all the data i've presented so far. However, as with signups, growth has been good in the few weeks since we’ve been back and matches are occurring on a regular basis - it seems.

However, all is not quite as it seems. This data is skewed in that we made a decision to implement functionality that would help to educate our users about what Pingle is for.

Every time a new user signs up, they’re automatically generated a post and matched with Rob and I (the co-founders) so we can chat with all our users. So with regards to matches, our graph takes a similar shape to that of our signups data as a result of everyone getting a system generated match upon signup.

Our posts data above also includes these system generated posts.

##Messages
![Pingle Messages Per Week](/images/2014-01-30-understanding-our-mobile-apps-data-part-1/pingle_messages_per_week.png)
Similar to signups and matches, messages have shown a positive trend over the past 3 weeks. However, this again may be due to the auto generated match and chat scenario we’ve artificially generated within Pingle for new users.


## What have we learnt?
So the past 3 weeks, since we’ve been marketing Pingle, data is looking generally quite positive and there seems to be some level of engagement on the app when it comes to RSVP’ing to posts. However, there is clearly some disparity with this when it comes to actually posting content to the app in the firstplace.

That said, these are very high level metrics that should probably be considered more as ‘vanity’ metrics than actual insightful, development driving content. 

In the next post, I will continue to look into Pingle’s data and i will take a more in-depth look at some of the enablers and disablers that are encouraging and equally discouraging the growth and engagement of our app.