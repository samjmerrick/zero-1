---
title: Pricing AI products when every request costs you money
description: Software used to cost almost nothing per extra user. AI changed that. Here’s how to price for it.
date: 2026-11-28
topic: Economics
draft: true
---

<!-- GHOST DRAFT for Sam to review. Not published until draft: false. The worked example uses made-up round numbers and should stay labelled as an example. -->

For twenty years, software had a lovely property: once you’d built it, an extra customer cost you almost nothing. AI features broke that. Every request to a model has a cost, and your heaviest users cost you the most.

That changes how you should price.

## Start from cost per customer, not cost per request

Cost per request is what the model provider shows you, but it’s the wrong number to plan with. What matters is what a typical customer costs you in a month, and what your heaviest customers cost.

Work it out from three things:

1. How many times a customer uses the AI feature in a month
2. How much text goes in and comes out each time
3. The price of the model you’re using

## A worked example (made-up numbers)

Say a customer uses your feature 200 times a month, and each use costs you 2p in model fees. That’s £4 a month. If you charge £20 a month, you keep £16 before everything else. Fine.

Now say your top 5% of customers use it 3,000 times a month. That’s £60 each, on a £20 plan. Those customers lose you money every month, and they’re probably the ones who love the product most.

## Four ways to price for it

**Usage limits on flat plans.** Simple for customers. Set the limit above what most people use, and offer a higher tier for the rest.

**Credits.** Customers buy a bundle and spend it. Clear, but people dislike watching a meter run.

**Price on the outcome.** Charge per report written or per lead qualified, not per request. Customers understand it, and it rewards you for making each outcome cheaper to produce.

**Make it cheaper to run.** Use a smaller model for easy cases, cache repeated work, and send less text in each request. Each of these can cut the cost a lot without customers noticing.

## Do this before you build

Model the cost per customer in a spreadsheet before writing code. If the numbers only work when people don’t use the product, change the product or the price now, while it’s cheap to change.

I’m exploring a tool that does this modelling for you: [AI Margin](/ventures/ai-margin).
