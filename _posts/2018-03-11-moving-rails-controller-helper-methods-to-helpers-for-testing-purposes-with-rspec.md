---
layout: post
comments: true
title: Moving Rails controller helper_methods to helpers for testing purposes with Rspec
---

A Rails architecture thing that I picked up this week…

It's easier to test and better practice to define helper methods in a helper file, rather than in a controller by using the `helper_method` method.

In some controllers I've recently been working with there were quite a lot of `helper_methods` defined like this:

	{% highlight ruby %}
	class ApplicationController < ActionController::Base
		helper_method :current_cart

		def current_cart
			Cart.find(params[:cart_id])
		end
	end
	{% endhighlight %}

This works fine. However, when it comes to testing things get complicated. I created a helper method in a helper and it uses the `current_cart` helper method from the controller, like this:

	{% highlight ruby %}
	module CartHelper
		def cart_empty?
		   current_cart && current_cart.cart_items.empty?
		end
	end
	{% endhighlight %}

In the spec I was writing, I was only interested in testing my new helper method so I tried to stub the `current_cart` method like this:

	{% highlight ruby %}
	let(:current_cart) { double(:cart, cart_items: []) }

	before do
	    allow(helper).to(
	      receive(:current_cart).and_return current_cart
	    )
	end
	{% endhighlight %}

This always failed though. `current_cart` isn't defined in my helper, it's defined in the controller, so it can't be stubbed like this. I was getting the error…

>   @view_renderer … does not implement: current_cart

(View renderer because that's what Rspec is using to test the view helper that I'm interested in testing).

So, I moved the `current_cart` helper method to our `CartHelper`, out of the `ApplicationController`. I can then add the line `include CartHelper` in the `ApplicationController`. Like this…

	{% highlight ruby %}
	class ApplicationController < ActionController::Base
		include CartHelper
	end
	{% endhighlight %}

This allows me to now stub the helper method in my test and correctly test other helper methods that use the `current_cart` method.

**Win!**
