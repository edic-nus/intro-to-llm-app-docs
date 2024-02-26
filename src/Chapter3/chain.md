# Chapter 3: LLM chaining

So you probably have seen how straight forward it is to spin up a personal LLM application, and honestly it is quite cool isn't it? But now, we will take it up a notch.

In recent development, we have a new method to improve the range of capability of LLM application. We called it "chaining".

So what exactly is "chaining".

## Chaining

Imagine you have a team of specialists, each with their own expertise. LLM chaining is like combining their skills to tackle a complex task. Here's how it works:

1. Individual LLMs: Think of each LLM as a specialist with a specific talent. One might be good at summarizing information, another at translating languages, and another at writing different creative text formats.
2. Chaining the specialists: LLM chaining connects these specialists in a specific order. You provide the initial information, and it gets passed through each LLM, with each one using its expertise to modify or add to the information.
3. Final output: After going through the chain, the final output is a result that combines the strengths of all the individual LLMs.

Here's an example:
1. You want to write a poem about a historical event in Vietnamese.
2. The chain might start with an LLM summarizing the event's key points.
3. Another LLM could translate those points from English to Vietnamese.
4. Finally, a creative writing LLM might use the translated points to craft a poem.

Overall, LLM chaining allows you to achieve complex tasks by combining the capabilities of different LLMs, just like how a team of specialists can achieve more than any individual working alone.

## Agents

We have another term for these individual LLMs functions: **Agents**.

Agents are usually LLM function like the `extract` function we have in the previous chapter that usually only specialized in one task. In our case, the task would be extraction of item data from an email and put it into csv format.

We can build as many agents as we need to do specific task for us using an input and return an ouput to our specification.

Agents allow us to build modular and flexible LLM application that can complete a wide range of functionality and tasks at the same time.
