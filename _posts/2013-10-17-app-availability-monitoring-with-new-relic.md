---
layout: post
title: App availability monitoring with New Relic (and how to stop your Heroku app from falling asleep)
---

Whilst working on a number of sites at [PANDR](http://wearepandr.com "PANDR Web Design and Development"), using [Heroku](http://heroku.com "Heroku Cloud Hosting"), i would often find applications would 'go to sleep'. As a result they would then take anything up to ~10s to respond to the first call that hit them. 

This isn't so much of a big deal if you run a busy website because the chances are your app won't go to sleep because it has regular traffic. However, for a couple of our smaller clients, their websites weren't particularly busy and there would be occasions when traffic slowed down for a few hours - enough time for the app to fall asleep. [Heroku indicate in their docs](https://blog.heroku.com/archives/2013/6/20/app_sleeping_on_heroku "Heroku app goes to sleep") that it only requires an 1 hour of inactivity on your site for it to be put to sleep, so to speak.

## The Solution - New Relic

It turns out there is a really easy fix for this, to prevent your app from falling asleep no matter how much traffic you do or don't get. [The New Relic add-on](https://addons.heroku.com/newrelic "New Relic Heroku Add-on").

Once you have the New Relic add-on working on your app (and it's free for what we need it for here), then you can make use of their App Availability Monitoring tool. This tool will ping a URL on your site on a regular basis (every 1 minute at it's most frequent) to test that you're website is available and working. 

The brilliant thing is, this ping is enough to keep your app awake and to prevent those slow response times that we previously experienced when our apps fell asleep.

## Enable App Availability Monitoring

To enable this feature, within New Relic…

* Visit: Settings > Availability Monitoring.
* Enter a 'URL to Ping' i.e your homepage will do fine.
* Choose an elapsed time for the pings. The default 1 minute is fine.
* Save your changes.

You should now find your Heroku app won't fall asleep again.

## Alternatives
Alternatively, you could set up some kind of scheduled Rake task yourself using Heroku's Scheduler Add-on or even use a dedicated availability monitoring tool to achieve the same results.