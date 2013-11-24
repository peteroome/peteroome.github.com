---
layout: post
comments: true
title: Xcode 5 broke the Safari Web Inspector
date: 2013-10-15 10:29:00
---

So it turns out that along with the release of iOS 7 and Xcode 5, Web Inspector inside Safari has broken.

## Symptoms
- Unable to view the DOM of your website.
- Unable to access the styles associated with your webpage.

## The fix
So long as you have a free Apple developer licence, it's a relatively straight forward fix.

You simply need to [download and install Safari 6.1 from the Apple Developers portal](https://developer.apple.com/downloads "Safari 6.1").

## Webkit Nightly

Although i didn't try this approach, apparently the [Webkit Nightly build](http://nightly.webkit.org/ "Webkit download") will fix the problem too, [according to this thread](https://discussions.apple.com/thread/5362095?start=0&tstart=0 "Broken Web Inspector thread").