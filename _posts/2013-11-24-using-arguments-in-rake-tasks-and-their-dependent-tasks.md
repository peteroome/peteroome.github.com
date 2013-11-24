---
layout: post
title: Using arguments in Rake tasks and their dependent tasks too.
---

I'm trying to slowly automate my workflow during the development of Pingle, the project i'm currently working on.

Part of this has been the development of a Rake task that compiles and minifies Pingle's SpineJS app, copies the new `application.js` and `application.css` files to our deploy repo and finally commits those new files to Github.

In doing this, i quickly realised i was going to want to be able to switch the environment variables used in each compile inorder to test in a closed environment along each stage of the development process: dev, staging, production.

This post follows on directly from my previous one that describes [how to go about defining Environment Variables within a SpineJS app using a custom Hem compiler](/2013/11/23/defining-environment-variables-for-a-spinejs-app.html "Defining and exposing environment variables with Hem for use in a SpineJS app").

## Custom Builds
Fortunately, using the techniques i described in my previous post, it was very easy to define which environment i wanted the build of my app to use each time i compiled the project…

    $ RUNTIME=staging hem build

or…

    $ RUNTIME=production hem build

With this in mind, i was able to start developing my rake task.

## Automating build with a rake task
Although, i guess this isn't really automation like some people consider automation, it's still removing a few steps from my build process that i'd otherwise have to type on the commandline. It's all moving in the right direction.

    {% highlight ruby %}
    require "rubygems"
    require "tmpdir"

    PHONE_GAP_REPO  = "/Users/myusername/Sites/my_site/phonegap-version/"

    desc "Generate application.js and application.css"
    task :build do |task, args|
      puts "Compiling for #{args[:environment]}"
      system "RUNTIME=#{args[:environment]} hem build"
    end

    desc "Generate and publish blog to gh-pages"
    task :publish, [:environment] => :build do |task, args|
      FileUtils.cp_r(Dir["www"], Dir[PHONE_GAP_REPO])
      system "cd #{PHONE_GAP_REPO}"
      system "git add ."
      message = "New Build, created at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git push origin master --force"
    end
    {% endhighlight %}

I'll go into a little more detail about this…

## Phonegap Project Sizes
Phonegap have a limit on the size of a repo that can be pulled into their remote Build tool. Slightly annoying, but i got round this by creating another repo especially for Phonegap that literally only contains my core assets, minified js and css and the index.html file and thats about it; production code if you will.

So, in my rake task i start by defining where my production ready repo is on my machine: `PHONE_GAP_REPO`.
    
    {% highlight ruby %}
    PHONE_GAP_REPO  = "/Users/myusername/Sites/my_site/phonegap-version/"
    {% endhighlight %}

## The Build Task
Next, is a small task that is depended on by the main task - the `hem build` aspect of my automation. This takes a RUNTIME argument to determine the variables used in the build of the project.

    {% highlight ruby %}
    desc "Generate application.js and application.css"
    task :build do |task, args|
      puts "Compiling for #{args[:environment]}"
      system "RUNTIME=#{args[:environment]} hem build"
    end
    {% endhighlight %}

And finally, the `:publish` task; the task i'll call from the command line when i'm ready to build.
    
    {% highlight ruby %}
    desc "Generate and publish"
    task :publish, [:environment] => :build do |task, args|
      FileUtils.cp_r(Dir["www"], Dir[PHONE_GAP_REPO])
      system "git add ."
      message = "New Build, created at #{Time.now.utc}"
      system "git commit -m #{message.inspect}"
      system "git push origin master --force"
    end
    {% endhighlight %}

This task depends on the previous `:build` task to complete. So once that task has completed the following takes place:

  1. Copy the 'www' directory from the repo i'm currently in, to the defined: `PHONE_GAP_REPO`.

  2. Commit the new files to the repo i'm currently within.
  
TODO:

  1. Commit the new files, within the `PHONE_GAP_REPO` and push them to Github.

  2. Develop a Github post receive hook to alert the Phonegap Build tool of the new files and to queue my app for rebuilding.

## Rake task argument filtering
This rake task takes an environment as an argument for use during the build; as defined in the first line of the task: `task :publish, [:environment] => :build do |task, args|`. The way this task is defined means that any arguments passed to the main task. will also filter down into the dependent tasks too which is really smart.

So in our build task, the definition of the task does not state any arguments but does pass them in the block it creates, because it receives the arguments i pass to the main `:publish` task. Like so: `task :build do |task, args|`.


## Running the task
All i have to do now, once my tests pass in my development repository and i'm ready to build my Phonegap app, is run:

    $ rake publish[staging]

or for production:

    $ rake publish[production]