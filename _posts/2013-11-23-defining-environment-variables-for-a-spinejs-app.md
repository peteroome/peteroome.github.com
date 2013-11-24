---
layout: post
comments: true
title: Defining and exposing environment variables with Hem for use in a SpineJS app.
---

I like defining environment variables - they allow me to keep my code clean and tidy when it comes to using things like API keys & secrets, usernames, passwords, connection strings etc. So where possible i use environment variables to extract the repetitive use of these. The aspect of my job that this helps with the most is when things change, later down the line. I don't have that nervous job of making sure i've updated API keys and secrets in every place within my app; a couple of changes to the environment variables and we're good to go.

Doing this in Ruby, locally with a .env file and on Heroku too, is really easy: [https://devcenter.heroku.com/articles/config-vars](https://devcenter.heroku.com/articles/config-vars "Defining Config Vars on Heroku")

However, i wasn't so sure how to achieve the same results with our Spine app. Fortunately, Michael Bleigh came to the rescue with some useful knowledge.

## Defining Environment Variables for a SpineJS App
Disclaimer: This post is based largely off of the expertise of Michael Bleigh, CEO of Divshot. Thanks for pointing me in the right direction on this one Michael: ['Exposing Environment Variables to Static Spine.js Apps'](http://www.divshot.com/blog/tips-and-tricks/exposing-environment-variables-to-static-spinejs-apps/ "Exposing Environment Variables to Static Spine.js Apps by Michael Bleigh")

Using, Hem, we can write our own custom compilers. Michael shows how to write a compiler that will consume a `.env` that contains a JSON hash and expose the data.

I started by creating a `slug.js` file in my project's root:
  
    {% highlight javascript %}
    var hem = new (require('hem'));
    var fs   = require('fs');
    var argv = process.argv.slice(2);

    hem.compilers.env = function(path) {
      var content = fs.readFileSync(path, 'utf8');
      var envHash = JSON.parse(content);

      for (key in envHash) {
        if (process.env[key]) {
          envHash[key] = process.env[key];
        }
      }

      return "module.exports = " + JSON.stringify(envHash);
    };

    hem.exec(argv[0]);
    {% endhighlight %}

Within the 'app' folder of my project i then created an `environment.env` file with a JSON hash of my values:
    
    {% highlight json %}
    {
      "RUNTIME":"web",
      "FB_APP_ID":"MY_FACEBOOK_APP_ID",
      "FB_APP_SECRET":"MY_FACEBOOK_APP_SECRET",
      "FB_CHANNEL_FILE":"//dev.pingle.co.uk:9294/channel.html",
      "GA_ID":"MY_GOOGLE_ANALYTICS_ID"
    }
    {% endhighlight %}

These were the default values that my app would load in when served up.

    $ hem server

And any one of these values could be overwritten very simply, for example, on compilation of the project…

    $ RUNTIME=staging hem build

This was a great feature because it meant that i'd be able to maintain `Staging` versions of my architecture to test against, prior to deploy.

## Expose the variables
In order to access the variables, we'd need to drop a little more code into our project:
    
    {% highlight javascript %}
    window.env = require("environment");
    {% endhighlight %}

Using the exposed variables was then simply a case of using them wherever i needed them in my code, like this for example, to initialize a connection to the Facebook API:

    {% highlight javascript %}
    FB.init({ 
      appId: env.FB_APP_ID, 
      nativeInterface: CDV.FB, 
      useCachedDialogs: false 
    });
    {% endhighlight %}

Don't forget to preceed your variable with the `env` element inorder to access it i.e `env.FB_APP_ID`.

## Further Config Values
With this in mind, i created a `config.coffee` file within `/app/controllers/` that further contained some important values i'd use throughout my project, mainly my API connection URL.
  
    {% highlight coffeescript %}
    if env.RUNTIME is "staging"
      Config =
        API_HOST: "http://some-staging-api-location/api/v1"
    else if env.RUNTIME is "production"
      Config =
        API_HOST: "http://some-production-api-location/api/v1"
    else
      Config =
        API_HOST: "http://dev-api-location/api/v1"

    Config['version'] = '0.1'
    module.exports = Config
    {% endhighlight %}

Notice how the above file makes use of the environment variable `env.RUNTIME` that we defined and exposed inorder to define our API connection string.

## Using our config variables
In order to use these new settings, i need to require the file where i am about to use it, like so…
    
    {% highlight coffeescript %}
    Config  = require('controllers/config')
    {% endhighlight %}

And then simply call the variables, as you'd expect. For example…

    {% highlight coffeescript %}
      $.ajax
        type: "GET"
        dataType: "json"
        url: Config.API_HOST + "/login"
    {% endhighlight %}