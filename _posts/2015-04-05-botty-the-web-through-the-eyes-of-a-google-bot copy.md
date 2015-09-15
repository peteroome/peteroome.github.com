---
layout: post
comments: true
title: Botty - The web through the eyes of a Googlebot
image: /images/botty/post-header.png
---

Previous to [Botty](https://chrome.google.com/webstore/detail/botty-through-the-eyes-of/ecjekiaiphcnmloaiadoeendpnlaldfc), I'd never built a Chrome Extension before. However, I was inspiried after being tipped off with some information. A colleague of mine had mentioned that it was possible to access paywall content on the [Financial Times website](http://www.ft.com/home/uk), if you changed your browsers User Agent to be a Googlebot. A simple hack that seemed easy to implement. 

Of course [this is already possible using the Chrome Developer tools](https://developer.chrome.com/devtools/docs/device-mode), however, not every Tom, Dick and Harry knows how to navigate their way around those advanced features. Therefore, I thought it would be fun to cobble together a Chrome extension that did just this.

To date, i've found that this extension works particularly well with:

- [The Financial Times](http://www.ft.com/home/uk)
- [Quora.com](https://www.quora.com/)

## Botty For Testing

It should also be noted that this tool can also be used for website testing purposes too. Viewing a website using Botty allows you to see differences between how a Googlebot sees your page and how your browser renders it. Every website creator knows that in order to rank in Google, Googlebot needs to be able to crawl your website.

## Download Botty

So, without further ado, I present to you: [Botty!](https://chrome.google.com/webstore/detail/botty-through-the-eyes-of/ecjekiaiphcnmloaiadoeendpnlaldfc)

Botty is a simple `background` extension that monitors the URL's you visit. If the current page matches a URL in the extension's customisable White List, then the browsers User Agent is submitted as a Googlebot.

Via the extensions Options menu, it's possible to update the White List of URL's the extension monitors.

[Install Botty now.](https://chrome.google.com/webstore/detail/botty-through-the-eyes-of/ecjekiaiphcnmloaiadoeendpnlaldfc)

![Botty - Options Page](/images/botty/options.png "Botty - Options Page")