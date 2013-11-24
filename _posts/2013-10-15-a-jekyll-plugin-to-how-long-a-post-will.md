---
layout: post
comments: true
title: A Jekyll plugin to how long a post will take to read
date: 2013-10-15 23:01:45
---

Having set about creating a Jekyll site i quickly realised whilst playing with the css that i wanted to copy Medium's "4 min read" system. Knowing how long an article helps me to make a really quick decision about whether i'm going to read the content during the day at work or if i'm going to Instapaper it for later consumption.

## My first Jekyll plugin

So i set about creating the code required to do this. jekyll plugins were my answer. [There are a lot of Jekyll plugins](http://jekyllrb.com/docs/plugins/ "Jekyll plugins") out there and i'm guessing a lot of people have already accomplished what i wanted to achieve but i wanted to get my hands dirty and have a play.

15 minutes later, i've got my plugin. [Ellen Gummesson had largely completed the task](http://ellengummesson.com/blog/2013/01/31/wordcount-plugin-for-jekyll/ "Ellen Gummesson's Jekyll Word Count Plugin") i wanted to achieve but without the final 10% that i was after, so i forked her repo and made the changes.

I am now left with a Liquid tag that i can use like so…
    
    {{ "{{ page.content | reading_length "}} }}

You can checkout [my fork of the plugin over on Github](https://github.com/coolbox/jekyll-post-length "Jekyll post length plugin").

To be as explicit as possible, here is the code to drop into your `_plugins` folder.

    {% highlight ruby %}
    module Jekyll
      module WordCount
        def count_words(input)
          calculate(input)
        end

        def count_seconds(input)
          calculate(input) / 5
        end

        def reading_length(input)
          seconds = count_seconds(input)
          minutes = (seconds/60).round(0)
          return time_and_word(minutes)
        end

        def time_and_word(minutes)
          string = case
                   when minutes === 0
                     "Less than a 1 minute read."
                   when minutes === 1
                     "About a minutes read."
                   when minutes === 2
                     "A couple of minutes read."
                   when minutes > 2
                     "#{minutes} minute read."
                   end
          return string
        end

        def calculate(input)
          input.gsub(/<\/?[^>]*>/, "").split.size
        end
      end
    end

    Liquid::Template.register_filter(Jekyll::WordCount)
    {% endhighlight %}