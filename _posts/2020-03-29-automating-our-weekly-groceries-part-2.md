---
layout: post
comments: true
title: Automating my family’s grocery shopping to reduce costs and waste - Part 2
---

[So it’s been almost a month since my first post](https://www.peteroome.com/2020/02/29/automating-our-weekly-groceries-version-1.html) about how I am automating my family’s grocery shopping - and a lot has changed in the world. Here we are, comfortably isolated at home, practicing the art of social distancing.

I’m not too sure how it is around the rest of the World, but the UK has gone bonkers panic buying groceries and household goods. In our small corner of South East London, the shelves in our local supermarkets - big and small - are bare. Fresh produce is like gold dust and the items they do have (the dregs) are limited to one or two per person depending on which store you’re in.

When constraints like this exist, a glorious thing happens - people get creative. I’ve been trying to embrace the limited resources. Paying close attention to those ingredients we have at the back of the cupboard, we’ve been trying to work out what we can cook and bake that we otherwise wouldn’t think of. This week, we baked a tiny soda bread - our very first - and some sweetcorn fritters too - a lovely brunch.

![The tiniest soda bread, ever](/images/2020-03-29-automating-our-weekly-groceries-part-2/soda-bread.jpg)
<br>
_(Tiny 👨‍🍳) Soda bread_

![Sweetcorn fritters for brunch](/images/2020-03-29-automating-our-weekly-groceries-part-2/sweetcorn-fritters.jpg)
<br>
_Sweetcorn fritters, perfect for brunch_

[As per my last post](https://www.peteroome.com/2020/02/29/automating-our-weekly-groceries-version-1.html), one of the first steps we took to streamline our grocery shopping was adopting a Just In Time (JIT) approach. This falls down very quickly when the stores have no stock - we’ve just had to lay our hands on what we can get. We took delivery of an online shop just before the pandemic levelled up in terms of seriousness, so we had ingredients for five meals in the house. When the UK Government started to restrict our time outside our homes, our food tactics changed. We managed to string out those five meals we prepped by intermittently choosing frozen food/meals to help make the fresh produce last - and it’s worked. We have ingredients left for a couple more fresh meals before we’ll need to really think about where, when and how we stock up.

## How automation can help
This got me thinking more about the merits of automating our grocery shopping. Would receiving groceries automatically each week have made people less anxious about running out of food in the midst of the COVID-19 outbreak?

Without a doubt, in my opinion.

Panic buying is happening due to the worry of not being able to access certain items (e.g. toilet roll) and because of a potential 100% lock-down / need for the whole family to isolate, preventing them from shopping so regularly - two problems online delivery solves. If fresh groceries were turning up to our doors, like clockwork, the need for any of us to panic buy would disappear. Automation would cut out the human, emotional side of this caused by our own anxiety and ensure there was still enough to go around for everyone.

## Review of the goal
By way of a quick reminder, I set out to reduce the time my wife and I spend on grocery shopping. We calculated we were probably spending 11 days a year - a mind blowing figure 🤯. In addition to this, we wanted to reduce the amount of food waste in our home, as well as our overall spend on food too.

### Our goals
1. Zero time spent grocery shopping
2. Zero food waste
3. Save money

## Progress…
In my [previous post](https://www.peteroome.com/2020/02/29/automating-our-weekly-groceries-version-1.html), I described our JIT process using the [Mealime](https://www.mealime.com/) app to help build a grocery list.

![Black bean burgers](/images/2020-03-29-automating-our-weekly-groceries-part-2/black-bean-burgers.jpg)
<br>
_Black bean burgers we prepped and cooked, using [Mealime](https://cooking.mealime.com/recipes/black-bean-burgers-avocado-spread-mixed-greens-salad/3332#!/)_

There was a reasonable amount of manual work still done to get to a complete grocery list. My next steps were to start removing these steps; primarily, getting the ingredients from [Mealime](https://www.mealime.com/) into a spreadsheet via an email picked up by a spreadsheet using [IFTTT](https://ifttt.com/).

On reflection this step wasn’t going to provide enough additional value to the process, so I went further.

My goal changed and I wanted a spreadsheet that would select recipes at random - dependent on how many meals I wanted to prep for - and generate a grocery list.

![Flow diagram of our grocery ordering process - before working on it](/images/2020-03-29-automating-our-weekly-groceries-part-2/grocery-shopping-automation-grocery-ordering-process-before.jpg)

The steps to achieve this:

1. Enter the number of meals to prep for (N)
2. Select N recipes
3. Aggregate the ingredients for these recipes into a grocery list

One feature I was keen to achieve was to make sure ingredients weren’t repeated in my grocery list (step 3), but instead aggregated depending on how many were required. For example, if I had two recipes that needed potatoes, one with two potatoes, the other with three, then my grocery list would show five potatoes, instead of two separate potato entries.

## How I’ve done it
To achieve this, I’ve modelled recipes in my spreadsheet the same way that I would if I were storing them in a database.

I have three sheets (database tables?!):
1. Recipes
2. Ingredients
3. Quantities

Using unique ID’s I’m able to randomly select recipes and then lookup the ingredients for those recipes and the quantities too (for the purpose of aggregation).

I used an [ArrayFormula](https://support.google.com/docs/answer/3093275?hl=en-GB) to randomise the recipes returned - this provides my grocery list with some variety. It would be easy to select seven recipes and just reorder them every week - but that would get boring very quickly as a consumer. My spreadsheet now takes an input (how many meals we are planning for) and using the ArrayFormula returns a select from the Recipes sheet I have created.

_Note: We’re currently only prepping dinners. We generally eat porridge for breakfast and have been adding ingredients on an ad-hoc basis to our grocery list for lunches. Supporting other meals is a feature we would love to add in the future._

![Modelling recipes across three sheets: Recipes, Ingredients and Quantities](/images/2020-03-29-automating-our-weekly-groceries-part-2/Screenshot%202020-03-26%20at%2022.20.11.png)
<br>
_Recipes modelled across three sheets: Recipes, Ingredients and Quantities. There is a fourth sheet called Selection that is responsible for randomly selecting recipes from the Recipe sheet and then looking up the ingredients and quantities for those._

![An example weekly order sheet](/images/2020-03-29-automating-our-weekly-groceries-part-2/Screenshot%202020-03-26%20at%2022.22.39.png)
<br>
_An example weekly order sheet - it’s a bit verbose at the moment and should be streamlined to make it simpler for others to use._

![A complete grocery list](/images/2020-03-29-automating-our-weekly-groceries-part-2/final-grocery-list.png)
<br>
_A complete grocery list._

So now all I have to do is add new recipes to my sheet as and when I come across them and my grocery list will at some point contain the ingredients for them - it’s very dynamic.

_Note: To be completely transparent, this still isn’t 100% automated, there is a minor, manual step that I am sure I could resolve in time. Once the grocery list has been generated after inputting the number of meals we’re planning for, I still need to copy and paste the output to the sheet for our order for that week to combine it with the other essentials and extras we plan to order._

On a weekly basis, with a sheet populated with recipes, the work to generate my grocery list takes 30 seconds. I still spend 10 minutes checking if we already have any of the ingredients on the grocery list before purchasing, but afterwards all that’s left is to place the order.

![Flow diagram of our grocery ordering process - after working on it](/images/2020-03-29-automating-our-weekly-groceries-part-2/grocery-shopping-automation-grocery-ordering-process-after.jpg)
_Aspects of the grocery ordering process that I am looking to fix._

## What next?
There are a couple of unknowns and risks with this project still - things that I should address sooner rather than later to ensure it’s possible and viable. These are likely to be the areas of this project that I tackle next. Even if I can get a rough and ready version of this service running from start to finish with only a small amount of input - checking what groceries we have in the house - then I can work on polishing the experience over time.

1. Placing and paying for the order. How should/could I automate this 100%?
None of the major supermarkets in the UK have APIs for placing orders. Tesco have one for querying products but that’s not very helpful here.  Amazon Fresh might be one option - I’ve never used it - but [there is a suggestion on their forums that an API might be available](https://forums.developer.amazon.com/questions/60471/amazon-fresh-api.html). Other options that come to mind include some kind of webs scraping technology, Amazon’s Mechanical Turk product (again I’ve never used this before so don’t know if it’s suitable at this point) or simply just paying someone to place the order on our behalf. Either way, there are plenty of options to explore here.

![Amazon Fresh API - possibly?](/images/2020-03-29-automating-our-weekly-groceries-part-2/amazon-fresh-api.png)
_Amazon Fresh forum_

2. Unavailable groceries / replacements
It’s quite common in my experience to have at least one replacement item on an online order, if not two or three. What is the best way to manage this, especially if it’s integral to one of our recipes? How important is this?

## What I’m not focusing on right now
1. Scaling quantities
The current process is only geared towards my family of three; me, my wife and my eight week old daughter - although she doesn’t need too much from the shops these days 👼. Quantities - depending on household size - can be addressed later. This shouldn’t be too tricky now we’ve modelled recipes in our spreadsheet.

3. Setting a delivery date_time_frequency
We’ve not even considered the ability to stipulate a delivery date, time or frequency. I would like to automate the order part first before thinking about the levers that drive that order.

5. Cost efficiencies
Without knowing the full cost of automation (depending on the solution I find for placing the order) it’s hard to know what opportunities there will be to reduce costs. They may come from the order process itself or by finding opportunities to save on the actual groceries we are ordering and the recipes as a whole.

## That’s all for now ⏱
If there’s one thing I know about side-projects (and probably any kind of project), maintaining momentum is key. It’s super easy to get bored of a side-project when you get into the details - the less exciting parts. I don’t feel at present that this little project is getting boring, but I find it helpful to remain conscious of that fact.

So, with that in mind, I’m aiming to follow up in reasonable time with my progress. In the mean time, if you have any feedback, thoughts or advice, or you would like to test out my system for yourself - don’t hesitate to reach out <a href="mailto:pete.roome@gmail.com?subject=I%20hate%20grocery%20shopping%20too%E2%80%A6" target="_blank">pete.roome@gmail.com</a>.
