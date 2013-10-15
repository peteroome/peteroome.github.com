---
layout: post
title: Running Jekyll on Github Pages
---

So to expand on my first post, i decided it was high time i got myself a little site together, even if it was just for snippets and general opinions and thoughts.

So here it is. Firstly, it's a static site as you may be able to tell from the urls; .html, all of them. That's because i've turned my hand to Jekyll - a blogging platform built with Ruby that generates static HTML pages before/during deployment and serves them up on the server of your choice.

That brings me nicely onto hosting. This site is currently (i'm not sure at the moment what limitations this might have - besides running Jekyll in safe mode - no plugins allowed!) running on Github Pages.

Github pages is a service provided by, you guessed it, Github. By adhereing to a not so complicated naming structure for your repo (your-github-username.github.com), Github will automatically detect that you're site is to be served up as a webpage.

Without further ado, i'll document my Jekyll workflow for you all to see. This is based on the current site consists of an index.html page, indexing my posts, and a page for each post. No more, no less. KISS, right?

## Create a new repository on Github for your Jekyll site.

Don't forget you'll need to stick with the [required naming convention](https://help.github.com/articles/user-organization-and-project-pages#user--organization-pages "Github Pages repo naming"): your-github-username.github.com.

Once you've created your repo with a `.gitignore` and license, clone the project onto your machine…

git clone https://github.com/your-github-username/your-github-username.github.com.git

So, on my local machine:

    $ cd coolbox.github.com

## Gemfile

You'll need to add Jekyll to your Gemfile and bundle…
    
    {% highlight ruby %}
    source 'https://rubygems.org'
    gem 'jekyll'
    {% endhighlight %}

…and then:

    $ bundle install

## Running Jekyll.
Once i got the basic file structure for Jekyll in place, which is really well documented over on the Jekyll site itself, i run the following command to run my site:

    $ jekyll serve --watch

…the `--watch` argument means Jekyll will pickup updates you make to any file in the project and regenerate your pages for you to see locally.

## Localhost

You can view your new shiny Jekyll site over at: [http://localhost:4000](http://localhost:4000 "Your Jekyll site").

## Deployment to Github Pages…

That's about it locally…

All that's left now is to commit your repo and push it back up to Github.

So long as you don't have any fancy plugins or additional code, Github will happily generate Jekyll's `_site` folder that houses your static site and also serve those pages to the web.

## Custom Domain

Want a custom domain for your new Jekyll site? Easy, thanks to Github. Simply add a file to your project call `CNAME` and drop in your custom domain. My file literally only contains:

    peteroome.com

You'll need to now root around your DNS file with your domain provider in order to point the domain at Github.

Your A record should point at: 204.232.175.78

## But i'm using plugins…

Ok so my site is a little more complex than i've made out, but not much. I'm using Stylus to generate my css files and therefore required a plugin to do this generation when my sites pages are created.

As a result when it comes to deploying my site to Github, i have to pre-generate the `_site` folder and it's contents on my own machine beore pushing to Github. The idea of this grated with me a little but you can't blame Github really - i wouldn't want all those (dare i say, untested?!) Ruby plugins running on my servers. 

So, i wanted to automate the build process of my site a little more so i had a quick Google to see what others had done and stumbled across the idea of generating a simple Rake task.

## Master and Source Branches

You'll want to setup a `source` branch to work with alongside your `master` branch. I'm going to keep all my code in `source` and only my generated static pages in `master`.

Delete the `master` branch:

    $ git branch -D master

Checkout a new `master` branch:

    $ git checkout -b master

Set the `_site/` subdirectory, we generate with Jekyll, to be your project root:

    $ git filter-branch --subdirectory-filter _site/ -f

Create the `source` branch…

    $ git checkout -b source master

Push everything up to `source`.

    $ git push -u origin source


## Jekyll deployment via Rake

I now have a rake task which lets me generate my site and push it to my master branch automagically:

    $ rake publish

The Rakefile, courtesy of: [ixti](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html "Automate publishing")
    
    {% highlight ruby %}
    require "rubygems"
    require "tmpdir"

    require "bundler/setup"
    require "jekyll"

    # Change your GitHub reponame
    GITHUB_REPONAME = "coolbox/coolbox.github.com"

    desc "Generate blog files"
    task :generate do
      Jekyll::Site.new(Jekyll.configuration({
        "source"      => ".",
        "destination" => "_site"
      })).process
    end

    desc "Generate and publish blog to gh-pages"
    task :publish => [:generate] do
      Dir.mktmpdir do |tmp|
        cp_r "_site/.", tmp
        Dir.chdir tmp
        system "git init"
        system "git add ."
        message = "Site updated at #{Time.now.utc}"
        system "git commit -m #{message.inspect}"
        system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
        system "git push origin master --force"
      end
    end
    {% endhighlight %}

## Conclusion

And that's it, a very quick and simple, Jekyll blog built, styled, deployed in under half a day.