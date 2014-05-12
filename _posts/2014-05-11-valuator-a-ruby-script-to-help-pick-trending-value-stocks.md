---
layout: post
comments: true
title: Valuator - A Ruby Script To Pick A Trending Value Stock Portfolio
---

I've always been curious about investing on the stock market. However, until recently i've neither had the knowledge, money or confidence to do so. Some of these things haven't changed, but I have been doing a lot more reading around the subject.    

_**Disclaimer:** I am not and do not claim to be an expert in investing. You should always do your own, thorough and detailed research, before investing in stocks. To this date (12/05/2014), I have not used this script to pick stocks I have then followed through and invested money into._  

A few months back I stumbled across [this Reddit thread](http://www.reddit.com/r/investing/comments/1eyx3r/how_do_you_select_stocks_contd_trending_value_see/). I found it fascinating reading about the 'program' that SwellsInMoisture had developed and found myself reading this thread a few times over.

Seeing a few people asking if this would be of any use as a Python script got me thinking. Then I saw the comment by nicolamr who had turned the screener into a [web app](http://finance.nmr.io/). However, on inspection the site didn't seem to work. Well, it worked but I couldn't see any data from one of the listed snapshots.

With that being the case, I found [nicolamr's repository on Github]() and proceeded to convert it to Ruby. Not having really read any Python before I wasn't sure what to expect. It turned out to be pretty straight forward though. Quite Ruby like actually. A few missing `end`'s and a couple of extra `;`'s.

Anyway, I now have my own functioning Trending Value Stock script/screener. The script pulls data from various sources ([finviz](http://finviz.com/) and [Yahoo finance](https://uk.finance.yahoo.com/)), before calculating the necessary rankings indicated by O'Shaughnessy in his book: ['What Works on Wall Street'](http://www.amazon.co.uk/gp/product/B005NASI8S/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B005NASI8S&linkCode=as2&tag=zoltarspeaks-21).

## Why Trending Value?
[On the Forbes website](http://www.forbes.com/sites/johndobosz/2011/12/13/values-to-hold-dear-when-youre-buying-stocks/), O'Shaughnessy explains: 

> "if you want the best results over time, go with small cap stocks trading at lower-than-average multiples of earnings, sales and book value–and buy them when they’re trending higher. Momentum does matter as history shows that winners tend to keep on winning."

Our initial aim when it comes to picking our trending value stocks is to calculate a value composite. The value composite will measure undervaluation of a stock and replaces the common approach of simply using the price-to-sales ratio. It also provides us with another route towards portfolio diversitification; highly recommended when investing.

In [a video](http://www.forbes.com/sites/johndobosz/2011/12/13/values-to-hold-dear-when-youre-buying-stocks/), unfortunately no-longer available on the Forbes website] (you'll have to take my word for it), O’Shaughnessy talks about the problem with single-factor valuation ratios. He explains that they move 'in and out of favor' and can significantly underperform the overall market over any given 10-year period, despite their long-term outperformance.


## The Value Composite
Our value composite is composed of six value measures:

* [Price to book value (p/b)](http://www.investopedia.com/terms/p/price-to-bookratio.asp)

* [Price to sales (psr or p/s)](http://www.investopedia.com/terms/p/price-to-salesratio.asp)

* [Earnings before interest, taxes, depreciation and amortization (EBITDA) to Enterprise value (EV)(EV/EBITDA)](http://www.investopedia.com/terms/e/ebitda-ev-multiple.asp)

* [Price to free cash flow](http://www.investopedia.com/terms/p/pricetofreecashflow.asp)

* [Price to earnings (p/e)](http://www.investopedia.com/terms/p/price-earningsrelative.asp)

* [Shareholder yield](http://en.wikipedia.org/wiki/Shareholder_yield)

## The Trending Value Stock Screen/Script
Firstly, we shortlist all stocks with a market cap > $200M.

We then assign each stock in our universe a score of 1 to 100 for each of the aforementioned value measures, in comparison to one another. Then calculate an average score from each of these values to create an overall value composite.

A "perfect" value stock will have a rating of 600 (or 100%)(a 100 score for each measure). However, a stock with a composite score > 420 is normally a financially sound, well rounded company and undervalued too.

The script itself does this and generates a CSV file of our entire universe at the time of running it.

Our Trending Value Portfolio is then narrowed down to the 10% of stocks with the best average score. We sort the 10% by their trailing six-month performance (the trending part of this screen) and select the top 25 from the list.

At present I am doing this manually so I can clearly see the results of all the calculations and be sure that no silly errors have occured. I will then manually filter the 10% in the previously mentioned manner before selecting a final shortlist of 25.

## Turnover
O'Shaughnessey rebalances his portfolio annually. The cost (commission) paid on investing in a portfolio of this size will cost you a fair whack hence only rebalancing annually. With that in mind, this script should only need to be run once a year - in theory.

## Testing
I am testing the results of my script using one of the many stocks apps available on iOS: [Stocks+](https://itunes.apple.com/gb/app/stocks+-alerts-real-time-stock/id667161120?mt=8). I picked an amount I wanted to 'virtually' invest and split it evenly amongst the 25 shortlisted companies.

It should also be possible to back test this script/screen using historical data. However, i've not gotten round to doing this yet.

## Download
The repository for this script is on [Github here](https://github.com/coolbox/valuator). Feel free to report issues or submit pull requests.

Or you can [download the repository as a zip](https://github.com/coolbox/valuator/archive/master.zip), right now.