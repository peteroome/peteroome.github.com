---
layout: post
comments: true
title: "Automating my family’s grocery shopping to reduce costs and waste: user testing, emailing recipes and Task Rabbit"
---

Hello 👋, I'm Pete and I've been working on a side-project to 100% automate my family's grocery shopping. Here is what I've been working on in the last few weeks.

**If you would like to find out more or stay up to date with my progress, send me an email and I'll keep you in the loop: [pete.roome@gmail.com](mailto:pete.roome@gmail.com).**

I will quickly get to the changes I have made in the last few weeks.

### 📝 Changes

✅ Added a new "Grocery tasks" menu to provide two controls:
- Generate ingredients - to generate recipes and their ingredients
- Email recipes - to email yourself a list of the recipes you have planned for the week, for future you 👨‍🎤

![Grocery tasks](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/grocery-tasks.png)

✅ Added three more recipes to the central set on the "Recipes" sheet

✅ "Planning" sheet - removed to simplify the overall spreadsheet

In addition to changes I have made to the spreadsheet, there is also now some accompanying information:

- [Documentation](https://www.notion.so/Household-grocery-list-documentation-32d2c8a4d2624bf28419d1052c29bf20) - written up to make it easier for others to understand how to use the spreadsheet
- [Release notes](https://www.notion.so/Release-notes-056a54c50ec14b23bf83669e16e050e9) - documented for historical reference and for those interested in reading what has changed over the weeks

Continue reading for more detail on all of this…

## 🤔 Err what is this? Quick recap…

For a couple of months, my family and I have been working towards the goal of 100% automating our grocery shopping.

We're doing this to:

1. Save time - simplify our lives
2. Save money - reduce our grocery spend
3. Increase the variety of our meals
4. Reduce food waste

You can [read my original post that goes into more detail about this here](https://www.peteroome.com/2020/02/29/automating-our-weekly-groceries-version-1.html).

## Lockdown cooking

So, another month has passed and here we are, still shopping and cooking in "lockdown".

![Kidney Bean Chili with Melty Cheddar & Cornbread Topping](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/Kidney-Bean-Chili-with-Melty-Cheddar-Cornbread-Topping.jpg)
*Kidney Bean Chili with Melty Cheddar & Cornbread Topping*

![Kale Pesto](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/Kale-pesto.jpg)
*Kale pesto*

![Hashbrown and baked eggs](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/Hashbrown-and-baked-eggs.jpg)
*Hashbrown and baked eggs*

My family and I are still experimenting with our grocery habits, both planning and buying-wise. The difference is that the availability of delivery slots online are few and far between. We have managed two online orders in the last month; one from Ocado and one from Morrisons. In addition, we have visited the store twice - something we were trying to avoid, as part of reducing the time we spent grocery shopping.

However, shopping in-store (a big supermarket as opposed to a small local store) wasn't as bad as I expected. The first time I queued for 40 minutes to get in, on my lunch break. The second time I went at 8 pm on a Monday night and walked straight in. The only problem was that a lot of the fresh produce had run out.

Either way, we are in no position to talk about how annoying the lack of online delivery slots is. My family and I are fit, healthy and perfectly capable of visiting the store. There are people in far greater need of those online delivery slots than we are.

With regards to this side-project, I had thought that the lack of online options had put a kibosh on automating our meal-planning and grocery shopping, but I may have been wrong. Giving the problem a little more thought revealed some other options that I will come on to shortly.

## What have we progressed?

### 🧪 User testing

My wife Jen was the perfect candidate to user test the spreadsheet. Set with the goal of "Doing the family shop for 10 days" (slightly longer than normal due to the lockdown), Jen took to our new tool to see how she fared.

I provided a light intro into how to use the spreadsheet - [what's covered in the documentation](https://www.notion.so/Household-grocery-list-documentation-32d2c8a4d2624bf28419d1052c29bf20). With this knowledge, Jen got started, generated a shopping list and reconciled the ingredients with what we had in stock.

Although the process was relatively smooth, Jen had two really useful pieces of feedback:

📢 "Sometimes we have one item but the grocery list says we need two - I need a way to input what we already have".  Wow - something I had previously overlooked but was insightful. 🤔

![Ingredient quantities](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/ingredient-quantities.png)

📢 "You should group the final grocery list so it's easier to find the items when you visit the store". This was great. The tool hadn't been built for shopping in-store, but this feedback was valid. The tins of black beans will never be in the same aisle as the cilantro. 🤦🏼‍♂️ However, the order of the ingredients makes no difference when ordering online and could, therefore, be a distraction, long-term.

![Grouping ingredients](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/grouping-ingredients.png)

> *🦄 **Next step:** Add a column to enable the user to add the number of ingredients they have in stock, to calculate a more accurate final grocery list.*

### 🔍 In-life observations

I had previously been the person to place our grocery orders using our new tool. However, what I kept noticing was whenever Jen cooked, she would ask for a link to the recipe.

As a result, we added a feature that allows you to email a list of the generated recipes for your grocery list, to your family so they all know what meals are coming up that week and where to find the recipe.

> ***Skill learnt:** How to script a Google sheet 🎉*

### 🍔 Generating recipes

Recipes are driven by an input field that allows the user to enter the number of meals they would like to prep for that shop. However, the problem was that any time a field on the sheet was updated, the randomised list of recipes would refresh - changing your entire grocery list.

With my new found Google Sheet scripting skills I was able to solve this. I added a new menu to the toolbar, that would automatically generate the recipes for your shop, but only when the user initiated it. This means you can be sure that unless you press the "Generate recipes" your ingredients won't change. 💪

![Meal planning email](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/meal-planning-email.jpg)

### 📒 Documentation

To accompany the Spreadsheet template, [I wrote some documentation](https://www.notion.so/Household-grocery-list-documentation-32d2c8a4d2624bf28419d1052c29bf20).

The purists amongst you will point out that a good product shouldn't need documentation. Typically, I would agree. However, I'm prototyping a no-code solution using a third-party product (Google Sheets) and using that product to do something it wasn't designed to. My goal is to automate our grocery shopping. Until I validate if that's possible, I will attempt to use little to no code to build the solution - for speed and simplicity. I, therefore, have a prototype that needs a little documentation to explain how it works - and I'm ok with that.

## Next steps

The last few weeks have been a little off-focus with us unable to place online grocery orders, but it's forced some creativity regarding other options that are available to us.

### 🐰 Task rabbit?

I remembered the platform Task Rabbit existed. Task Rabbit allows you to hire local people, ad-hoc, to help with a task you have. It could be anything from building your Ikea wardrobes to… doing your grocery shopping.

A quick search revealed a few handy helpers who already had reviews for shopping-related tasks.

With regards to this project, there are two ways Hassan A. could help.

![Task Rabbit Grocery Shopping Screenshot](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/task-rabbit-grocery-shopping-screenshot.png)
*People on Task Rabbit who can help with grocery shopping*

1. Going to the store, picking up the ingredients from our list, pay for them on our behalf and delivering them.

2. Picking up and delivering a Click & Collect order

*Click & Collect is an online feature some of the UK supermarkets provide that allows you to place your order online and then collect it from the store in person.*

As a result, I have updated the flow diagram I created for this project.

![Grocery order process map V2](/images/2020-04-28-automating-my-familys-grocery-shopping-to-reduce-costs-and-waste-user-testing-emailing-recipes-and-task-rabbit/Grocery_Shopping_Automation_-_Grocery_ordering_process.jpg)

> 🦄 ***Next step:** Determine if it's possible to automate ordering groceries using Task Rabbit or a similar platform. Consider either a Click & Collect option if available or a helper to do the shopping from start to finish.*

On the face of it, these options don't look to be the most cost-effective, but I can review that during the research.

## 🎁 To wrap up

I've improved the process of generating recipes within our spreadsheet and can now email them for easy reference.

My next steps and focus for the coming weeks:

- Add a column to the spreadsheet to enable the user to add the number of ingredients they have in stock, to calculate a more accurate final grocery list.
- Determine if it's possible to automate ordering groceries using Task Rabbit or a similar platform. Consider either a Click & Collect option if available or a helper to do the shopping from start to finish.

Thanks for tuning in.

**If you would like to find out more or stay up to date with my progress, send me an email and I'll keep you in the loop: [pete.roome@gmail.com](mailto:pete.roome@gmail.com).**
