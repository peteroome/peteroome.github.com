---
layout: post
comments: true
title: Valuator: A Ruby Script to help pick trending value stocks
---

I've always been curious about investing on the stock market. Until recently i've neither had the knowledge, money or confidence to do so though. Some of those things haven't changed but i've been doing a lot more reading around the subject.

Disclaimer: I am not and do not claim to be an expert in investing. You should always do your own, thorough and detailed research, before investing in stocks.

A few months back i stumbled across [this Reddit thread](http://www.reddit.com/r/investing/comments/1eyx3r/how_do_you_select_stocks_contd_trending_value_see/). I found it fascinating reading about the 'program' that 'SwellsInMoisture' had developed and found myself reading this thread through a few times over.

Seeing a few people asking if this would be of any use as a Python script got me thinking. Then i saw the comment by 'nicolamr' who had turned the screener into a web app. However, on inspection the site didn't seem to work. Well it worked but i couldn't see any data from one of the reported snapshots that was on offer.

With that being the case, i found [nicolamr's repository on Github]() and proceeded to convert it to Ruby. Not having really read any Python before i wasn't sure what to expect. It turned out to be pretty straight forward though. Quite Ruby like actually. A few missing `end`s and a couple of extra `;`'s.

Anyway, i now have my own functioning Trending Value Stock Script/Screener. The script pulls data from various sources before calculating the necessary rankings suggested by O'Shaughnessy in his book: ['What Works on Wall Street'](http://www.amazon.co.uk/gp/product/B005NASI8S/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B005NASI8S&linkCode=as2&tag=zoltarspeaks-21).

