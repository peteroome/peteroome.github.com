---
layout: post
comments: true
title: Growth hacking using Javascript to automate following, unfollowing and connecting on Twitter and LinkedIn
image: /images/2015-09-15-growth-twitter-and-linkedin/post-header.png
---

It's very difficult to test the validity of an Internet startup without data. Most of the time this means having an audience that you can test your product on, inorder to collect some data. Without an audience, you're not going to prove any hypothesees regarding your product.

During the 15 months I ran Upstate, with @robbarwell, we quickly learnt that one of the most challenging aspects of our day to day work, was growing our audience.

> Upstate was a product development agency that designed, built Internet product ideas with the aim of scaling any that were validated. Upstate had no clients but was instead funded by an Angel Investor and earnings from any product revenue.

We quickly learnt that writing about what we were doing (new product launches, experiments, failures) and sharing it with our own personal audiences helped. This generated shares and likes, but it wasn't scalable. So we started to experiment.

There are a multitude of tools out there, free (with limitations) and paid for, to help automate the growth of an Audience. We tried a number of these different tools, including: [Good Audience](http://www.goodaudience.com/), [Unfollowers](https://unfollowers.com/) and [Buffer](https://buffer.com).

It was during this period of using third party tools that I began to better understand what these apps were doing and how we could replicate them for free. We were a startup on a tight budget, afterall.

The opportunities that presented themselves were easy to spot. The usual tell tell sign was when i had to click the same button on a webpage, more than 3 or 4 times. This immediately felt like something that could and should be automated. It's this lazyiness that a lot of social network automation tools rely on, to entice people to pay for their service. A button to "Follow all" or "Unfollow all" is often made available immediately after credit card details are entered. Other limitations that are commonly lifted by paying for social media automation tools, include: the number of people who can be followed or followed in a single day, how many 'posts' can be queued up and access to more recommendations for who to follow, who to unfollow and even interesting content to share.

In this post, I'm going to focus on growing an audience, using automation, to follow/connect and unfollow other accounts…

### Required knowledge
The code snippets i'm about to share require you to have a basic knowledge and understanding of the Google Chrome web inspector, inparticular it's console.

For those who don't know what web inspector is; open Chrome, load a web page and `ctrl + click` (OS X) on any part of it. From the menu that appears, click `Inspect Element`. 

This will open up the web inspector on your screen. You should see some tabs, which include `Console`. Select `Console` to reveal a tool that allows you to interact with the currently open webpage, live, with Javascript. For example, copy and paste this line into the console and press return: 

	{% highlight javascript %}
		alert("Hello world");
	{% endhighlight %}

You should see a popup that says "Hello world".

This technique of copying and pasting snippets into the console is something you'll need to be able to do for these examples to work.

## Twitter
Those with a proficiency in programming will stop at nothing to exploit unprotected loopholes in social networks. Twitter is no exception and has long been gamed by hackers. Although aggressive attempts to DDOS a service happen, more often than not, hackers tinkerings are merely 'a bit of fun'.

### Limits
This [support document on Twitter](https://support.twitter.com/articles/66885) lists the platforms current limits when it comes to following other accounts, but to summarize:

- Every account can follow 2,000 users total. Once this number is reached, additional follows are allowed based on a follow to follower ratio that Twitter claims to be different for every account.

- Every Twitter account is technically unable to follow more than 1,000 users per day. Unfortunately, there is no avoiding this one.

### Technique
We have a 1000 follows each day, to maximise. My first approach is to unfollow those followers who aren't following me back (to maximise my following ability) and to follow as many of the 1k limit of people as possible each day.

### Unfollowing
I use the free tier of a 3rd party service called [ManageFlitter](https://manageflitter.com). Once connected to my Twitter account, this service shows me the accounts that i follow but aren't following me back. ManageFlitter provides an `unfollow` button next to each of these accounts that i can click.

I use the following code to automate this process of unfollowing:

	{% highlight javascript %}
			a = setInterval( function () {
				$('.Unfollow').click();
			}, 3000);
	{% endhighlight %}

This code will run on repeat in your browser, forever, unless you stop it. Stopping it is either a case of refreshing your browser or, copying this line of code into the console and pressing return.

	{% highlight javascript %}
		clearInterval(a);
	{% endhighlight %}

On the free tier atleast, ManageFlitter limit the number of people you can unfollow in a single day. So the process of unfollowing and following accounts is done in small batches each day, that take 5 minutes or so to complete.

### Following
When it comes to following users my technique is as follows:  

1. Find an account of interest to me.
2. Click their 'Followers' tab.
3. Follow as many of the accounts as i can, that follow the initial account i was interested in.

The aim of this approach is to find other accounts that i may have something in common with, and are therefore far more likely to follow back.

	{% highlight javascript %}
		a = setInterval(function () {
		  window.scrollTo(0,document.body.scrollHeight);
		  $('.not-following .user-actions-follow-button.js-follow-btn').click();
		}, 3000);
	{% endhighlight %}

***Disclaimer****: This technique requires you to run code on an adhoc basis in the web inspector console. As a result, we're not tracking the accounts we've followed and unfollowed in a database for example. Therefore we have no historical data to prevent us from following and unfollowing those accounts again in the future. This is will more than likely irritate those users and result in them reporting your account as spam to Twitter.*

### Favouriting
The same approach can be used for favouriting tweets too. Simply use the Twitter search bar to search for a hastag or term you're interested in. Once you've arrived at some search results of interest, for example [#madewithsisu](https://twitter.com/search?q=%23madewithsisu), open your web inspector console and run the following snippet…

	{% highlight javascript %}
		a = setInterval(function () {
		  window.scrollTo(0,document.body.scrollHeight);
		  $('.js-actionButton.js-actionFavorite:visible').click();
		}, 3000);
	{% endhighlight %}

This will replicate clicking all of the favourite buttons on the page, scroll to the bottom of the page so more content loads, and continue to favourite tweets.

There does seem to be a limit in place for how many tweets you can follow, but for now, i don't know what it is.

## LinkedIn

LinkedIn is a fun network to game. I'll go into more detail in another post about all of the fun to be had, but in the meantime; there is a URL i found that doesn't seem to be accessible unless you know it, called: [People You May Know (PYMK)](https://www.linkedin.com/people/pymk). The URL lists people LinkedIn believes you may have a connection with. You may have worked with these people, been to college with them or just know them through another connection.

The element we're interested in on this page is the `Connect` button. With so many of them on the page, we have the opportunity to script clicking them all automatically. 

However, a good percentage of the PYMK will have their accounts set so that inorder to connect with them, you must enter their email address. This isn't useful to us and prevents us from automating the connection. However, the rest of the people on this page won't have this setting enabled, meaning we can initiate a connection.

This snippet will find all of the `Connect` buttons on the page, simulate clicking them and then scroll to the bottom of the page. When you scroll to the bottom of the page, LinkedIn kindly load more PYMK onto the screen!!!

I've found that LinkedIn users are fairly similar to those on Twitter in the sense that they're not too fussed about who they connect with. Most aren't that bothered if they don't know the person they're connecting with, so it's quite easy to grow your own list of connections.

	{% highlight javascript %}
		a = setInterval(function () {
		  window.scrollTo(0,document.body.scrollHeight);
		  $("button.bt-request-buffed[data-act='request']").click();
		}, 3000);
	{% endhighlight %}

After a while this becomes a self fulfilling phallacy. Other users will try to connect with you - people you won't even know. The reason for this is because of LinkedIn's [Profile Rankings](https://www.linkedin.com/wvmx/profile/rankings). As you gain more connections, you naturally receive more profile views. More profile views and more connections accelerate you up the profile rankings. Profile Rankings are very prominant on the LinkedIn mobile app - they're right on your profile. It's quite natural therefore, for those ranked around you to become curious about who you are and what you do, so they will take a look at your profile. This only helps to further accelerate you up the LinkedIn profile rankings.

![My own profile ranking acceleration](/images/2015-09-15-growth-twitter-and-linkedin/post-header.png "My own profile ranking acceleration")

### Limitations
There don't seem to be any limitations to doing this through the web inspector console.

However, this is only a short term approach to growth hacking your account. Although you'll likely reach the dizzing heights of the Top 1% of connections in your network, you'll just as quickly slip back down the rankings as you run out of PYMK who haven't enabled the "Enter my address to connect" feature.

Inbox messages from recruiters. But this is a positive if you're job hunting, right?!