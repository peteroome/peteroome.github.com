---
layout: post
title: A Christmas Gift List Built With Sinatra, Mongoid and hosted on Heroku.
---

It's getting to that time of the year again when parents, family and girlfriends start demanding gift lists in order to remain organised and prevent themselves from having to do any last minute shopping.

I normally use a service called [Whimventory](http://www.whimventory.com/ "Whimventory - Wishlists"), which to all intense and purpose has provided a worthy service for the past couple of years. However this year it occurred to me that i ought to just build my own and where possible provide affiliate linked gifts that will earn me a % each time someone purchases something - logical right?!

Don't get me wrong, this isn't an attempt to make a quick buck through the goodwill of my family and friends; more an experiment to see how much money could be made during this period through a gift list. My intention is to donate any money made to a Charity or Good Cause i see fit for the fund.

So, i introduce to you my quick weekend hack: [http://giftlist.peteroome.com](http://giftlist.peteroome.com "Pete Roome's Gift List App").

The app was built using:
* [Sinatra](http://www.sinatrarb.com/)
* [MongoHQ](http://www.mongohq.com/home)
* [Haml](http://haml.info/)
* [Sass](http://sass-lang.com/)

Mongo and Mongoid provided the learning element in this exercise as i'd used neither prior to this little hack. Although i've not implemented a Mongo setup locally as of yet, bypassing that by use of MongoHQ and interfacing with Mongoid, everything seemed very straight forward and very ActiveRecord like. This project clearly hasn't stretched the requirements of either though; there were no complex table relationships to consider.

[I have made this Gift List project open source](https://github.com/coolbox/giftlist "The Gift List App on Github") so if interested, you can fork the project, restyle it and add your own gifts.

I will proceed to improve documentation and of course implement some tests as i progress with the project - however it's (just about) 'useable' in it's current state.