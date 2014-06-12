---
layout: post
comments: true
title: 'World Cup 2014 Office Sweepstake Ruby Script'
---

Well it would have been rude not to wouldn't it?

Like a lot of other offices, we like to add a sprinkling of fun, harmless gambling to the World Cup by each drawing teams in a sweepstake.

A lot of the websites I found when I Googled 'world cup sweepstake' were so ridiculously overcomplicated that I figured it would be just as quick to program something.

10 minutes later - problem solved.

This isn't by any means a complicated problem to solve, but one I thought I'd do anyway. My solution is 21 lines of code but I'm certain it could be made much shorter. Perhaps a challenege for when I literally have nothing better to do with my time.

[My World Cup 2014 Sweepstake generator](https://github.com/coolbox/sweepstake).

## How to use it…
**Step 1:**  
`$ git clone git@github.com:coolbox/sweepstake.git`

`$ cd sweepstake`

**Step 2:**  
`$ ruby sweepstake.rb`

**Step 3:**  
Enter the names of the people taking part in your sweepstake.

e.g `Pete, Rob, Kylie`

**Step 4:**  
Wait for the output and share with the rest of your sweepstake participants.

**Example output:**  

- ***Player (number of teams assigned): team names***

- Pete(11): Russia, United States, Ghana, Spain, Brazil, Uruguay, Switzerland, Côte d'Ivoire, Netherlands, Belgium, Korea Republic

- Rob(10): Colombia, Honduras, France, Iran, Germany, Croatia, Australia, Argentina, Ecuador, Chile

- Kylie(11): Japan, Algeria, England, Nigeria, Cameroon, Portugal, Greece, Italy, Bosnia and Herzegovina, Costa Rica, Mexico