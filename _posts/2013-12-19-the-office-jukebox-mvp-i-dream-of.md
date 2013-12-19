---
layout: post
comments: true
title: The Office Jukebox MVP I Dream Of
---

Music in an office, especially a shared space, is often a contentious issue. Everyone has different tastes, people are sensitive to feeling different emotions on a daily, no wait, hourly basis and therefore will often contradict their own tastes on a regular basis. Often people are on the phone, or developers need to concentrate without distraction and don't forget, once a week Friday comes around and it's time to gear up for the weekend. There's a multitude of variables affecting the type of music that's loaded onto those naff portable speakers in the corner of the studio. Hmmmm can you tell i've already drifted into more of rant about my own personal experiences than sticking with the general tone i started this post with.

## My Office Music Experiences
Anyway, during my short career thus far, i've been fortunate enough to work in offices that have regularly allowed music to played throughout the day:

1. [Caterpillar](http://www.caterpillar.com/) - Music wasn't a massive part of working in this office. I was still a student and wasn't confident enough to regularly crack out my headphones, although it did happen every now and again.

2. [TroisxHuit](http://www.troisxhuit.com/) - A small web development agency agency on the outskirts of Paris. I listened to my own music via headphones, on a daily basis.

3. [Kyan](http://kyan.com) - The best equipped office i've worked in when it came to music. A communial jukebox, accessible via an interal URL. The jukebox indexed music from each employees iMac and allowed anyone to explore the library and add it to the office playlist. Tracks could be previewed before being added to a playlist and also voted on once they were finally added to the playlist too. This experience is the largely responsible for the high standards i now seem to put forward when it comes to an office jukebox solution.

3. [PANDR](http://wearepandr.com) - At PANDR we ran our own project, [Rakkit](http://rakkit.com), an Internet music aggregation tool. As a result Rakkit was the music player of choice 99% of the time - despite again, lacking any of the traditional jukebox features you'd expect (this wasn't it's purpose). [Rakkit was killed in the Summer](http://rakkit.com/post/61661397167/power-off "Rakkit: Power Off").

4. [Beta Hive](http://betahive.com) - Since killing off Rakkit, i've finally turned to Spotify. I'm enjoying it's vast catalogue aswell as the features that recommend new and interesting music. However, i listen via my headphones most of the time. The shared office we occupy has been a bit of a testing ground in recent weeks for better solutions to allow people to listen to music without having to put headphones on: Radio, someone's iPod or a shared Spotify playlist. To date, i feel the shared playlist has been the most successful solution but it's still very floored in terms of a office jukebox solution.

Products like Soundrop exist but they still feel limited and contrived in the communal playlist context.

## Collaborative Spotify Playlists
Although Spotify's collaborative playlists are good to an extent. They are perfect for aggregating track recommendations from your friends for a party but in terms of an office jukebox, they have their drawbacks:

* I can't find out what's currently playing unless i specifically ask the person who is streaming the playlist. As a result the following problems occur:

	* I can't 'star' the currently playing track for later use within my own Spotify account.

	* I can't add that track to my own playlists.

* If the playlist ends, the music in the office stops.

* The playlist is the same every day unless someone clears it out each morning. You end up listening to the same music over and over.

* The tracks played are only recorded/scrobbled to the account they are being played from, not the account of the person who added them to the playlist. This is annoying if you're a bit a music stats geek like myself.

* People will often add whole albums, or big blocks of tracks preventing others from hearing the music they'd like to listen to for long periods of time. This is a sure fire way of encouraging people to keep their headphones on.

This leads me nicely onto my next gripe with music in the workplace…

## The Problem With Headphones
Headphones in the office certainly have their place. It's almost less about listening to your own music and more about the signal they give out - do not disturb! When i put my headphones on it's largely because i'm trying to concentrate without being distracted. A by-product of this approach is that i get to listen to the music i want to listen to at the volume i want to listen to it at too.

There are inherent problems that come with wearing headphones though, especially in a 'creative' workplace. Potential conversations are scuppered; from discussing small ideas to talking through the solution to a bug. Colleagues are less inclined to have these conversations when the person they want to speak to has their headphones on. It's not a very team orientated or collaborative approach to working. I'll hold my hand up and confess to being a key adopter of the headphones approach in our office.

## The Aims Of An Office Jukebox
The problems i've discussed above got me thinking: what would i actually like from an office jukebox?

I started out by thinking about the aims; what would i be trying to achieve?:

1. Give people control. Control over the music that's played and the volume it's played at.

2. Reduce the amount of arguments and shirty conversations about what music is being played in and around the office.

3. Encourage fewer people to wear headphones in and around the office.

## An Office Jukebox MVP
With the above aims considered, i've started to draw up a list of features that i believe an Office Jukebox MVP should have. I've been trying to consider what would have the biggest impact with the least amount of effort.

The requirements are as follows:

1. **User Sign In** - In order to make the experience personal, users must be able to sign in. From the get go this would allow us to attribute music picks and plays to particular users for use later down the line. 
	
	*Nice to have:* Based on the attribution of music plays and picks mentioned above the following would be possible: favouriting tracks, scrobbling to Last.FM, loading in your own playlists from 3rd party services and adding tracks to those playlists too - no matter who selected the track in the first place.

2. **Spotify/Rdio connected** - A jukebox needs a music source right?! One of the 3rd party services available out there such as Spotify or Rdio would be the most suitable choice for an MVP. I know Spotify has an API but i'm not sure about Rdio (i'm on a train without an Internet connection). 
	
	*Nice to have:* Access to each users own personal music collections whether that's on iTunes, MP3's on an external drive or via another 3rd party service like YouTube.

3. **Search** - Users must be able to search the music they'd like to hear and add it to the playlist. 
	
	*Nice to have:* Artwork. Spotify link search - drop in a Spotify link to the search and have it return the results.

4. **It must be listener driven** - The system must allow users to add whatever music they choose to a playlist ordered by the time at which tracks were added - as per the definition of a jukebox. Once a track has been played, it should be removed from the playlist. 
	*Nice to have:* An automated fallback would be the ideal solution here. For those times when the playlist has ended and everyone's too busy to add anymore music. This would likely be based on the music previously played on the system. Like Spotify Radio, it would become more intelligent the more the juekbox was used.

4. **Play Controls** - 'Play', 'Pause' and 'Next' for those times a client walks in and you've got some [Dre](http://en.wikipedia.org/wiki/Dr._Dre "Dr. Dre Wiki") on the speakers that needs skipping. 
	
	*Nice to have:* A community driven skip button. if enough people vote to skip a track, the track is skipped. This would need to be tested but 50% of the listening audience might be a good starting point to decide if a track should be skipped or not. An overriding skip button for the situation described above - when a client walks in and you NEED to change the track. The difficulty would be in ensuring this isn't abused within the context of the community driven skip.

5. **Volume Controls** - Users must be able to control the volume of the jukebox without having to leave their seats, via the system (probably a browser window). For those times when the phone rings, someone starts talking to you, it's a bit too loud for concentration or it's a bit too quiet for a Friday afternoon. 
	
	*Nice to have:* A mute button.

## MVP Ommissions
With the aim of drawing together the blueprint of an MVP i've left a lot of cooler features off of the above list. I wanted this article to be quite focused on the MVP approach so i was tempted to not even include the list of features i've noted below. However, i've decided to leave them in for future reference but i have striked them through to visually indicate focus.

<ul>
	<li>
		<del>
			<p>Estimations of when a track can be expected to be played.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Community driven voting on a particular track.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Ability to Star a track for later use on Spotify.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Scrobbling to Last.FM on an individual level.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Share a track, via Facebook or Twitter.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Add tracks to your own personal Spotify playlists.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Auto-generate an office playlist on Spotify everyday based on what's been played previously.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Keyboard shortcuts.</p>
		</del>
	</li>
	<li>
		<del>
			<p>New Day Clean Slate - each morning wipes leftover tracks from the day before.</p>
		</del>
	</li>
	<li>
		<del>
			<p>Play History - show users what has previously been played.</p>
		</del>
	</li>
</ul>

## HTML5 & Meteor
With the power of HTML5, this should be a relatively straightforward undertaking, i don't think there is anything too complex here. I'm speaking off the top of my head of course. Even without HTML5 this wouldn't be too hard an undertaking.

I have also been looking to get my teeth into [Meteor](http://www.meteor.com/). Meteor is a Javscript framework with an emphasis on building real time apps. 

> Live page updates.
>
> Just write your templates. They automatically update when data in the database changes. No more boilerplate redraw code to write. Supports any templating language.

The real time elements of an office jukebox (adding tracks, a timer count down on the track being played and user voting etc), with various browser windows open on different machines, seems to lend itself perfectly to this framework.

That said, this is all time dependent and i might never get any further than laying out these blueprints for my perfect office jukebox. On the otherhand this could be a nice little fluffy open-source project.