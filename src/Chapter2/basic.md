# Chapter 2: Building a basic data extraction app

In this chapter, we will learn how to make a basic data extraction app. This app is a representation of one the most powerful utility that comes with LLM:
> Unstructure data to structured data text extraction

What do we mean by this? It is very simple. Given the following example email:

```
Subject: Recap of Expenses from Our Recent Party

I hope this email finds you well. I wanted to take a moment to thank you for joining us at the party last week. It was fantastic having you there, and your presence truly added to the fun atmosphere!

I've gone through the expenses from the party, and I wanted to provide you with a breakdown of the costs incurred. Here are the five main items along with their respective costs:

Chips: $20
Coca-cola: $50
Pepsi: $40
Pretzel: $40
Popcorn: $60

Since we both participated in the event, I thought it would be helpful to share these details with you.

If you have any questions or concerns about the expenses, please don't hesitate to reach out. I believe in transparency when it comes to sharing costs, and I want to ensure that everything is clear and accounted for.

Once again, thank you for being a part of the celebration. I had a wonderful time, and I hope you did too!

Looking forward to hearing from you soon.

Best regards,

Alice
```

How can we extract the items with a price tag successfuly from the email?

From a traditional software engineer perspective, this is near impossible to extract from such an unstructured text data. However, this is but almost trivially easy for most LLMs.

That is the one of the most power and useful features of LLMs. The majority of data around the world is actually unstructured. So having the capability to extract them is something that is not possible at scale before, until today. It is a very exciting time!
