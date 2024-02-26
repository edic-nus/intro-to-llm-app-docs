# Prompt engineering: the heart of LLM app

If you have not lived under a rock for the past year or so, you should have heard about the term "Prompting" or "Prompt Engineering".

So what is it exactly?

## Prompting

In the context of large language models (LLMs), prompting refers to the technique of providing instructions and context to guide the model towards generating the desired output. It's essentially how you communicate with the LLM and tell it what you want it to do.

Here's a brief overview:

- Instructions: You provide clear and concise instructions for the LLM, specifying what you want it to achieve. This could be anything from writing a poem to translating a language to answering a question.
- Context: You give the LLM relevant information about the task at hand. This helps the model understand the situation and generate a more accurate and relevant response.
- Desired output: You set the expectations for the LLM's output. This could be the format (e.g., poem, code, summary), style (e.g., formal, informal), or specific content you want it to include.
- Effective prompting requires careful crafting to ensure the LLM understands your intent and generates the desired output.

Some of the common prompting techniques:
- Zero-shot prompting: Providing a simple instruction without any additional information.
- Few-shot prompting: Providing examples or demonstrations of the desired output.
- Chain-of-thought prompting: Guiding the LLM through the reasoning steps involved in the task.

By mastering the art of prompting, you can unlock the full potential of LLMs and leverage them for more complex problem-solving.

If that is prompting, what is promt engineering then?

## Prompt Engineering

Prompt engieering is exactly like what the title suggested, you engineered the prompt in a certain way to improve the reliability and predictability of your output, when you are running a generation task leveraging LLMs.

For example, here is the prompt we are going to use:

```py
prompt = f"""
You are an efficient accountant assistant.
Your job is to read the input text list out the item in the test with the following csv format

item-name,cost

Represent the cost as pure number, with no extra symbol.

Here is the INPUT:

{inp}

OUTPUT:
"""
```

If we only going to tell the LLM to retrieve as all the item, it will probably do it just fine. However, it would just be from one form of unstructured data, to another. You can verify this by taking out the part related to the instruction on how it should output the data. You will see that everytime you run the generation, it will give you a different answer. That is not very helpful when you want to integrate it into a larger system.

Hence, we need to engineer prompts to fit our goal, before we can use it in our system. Although there are a lot of resources and research online regarding prompt engineering technique, it is often just a  matter of trial and error until you get what works for you.

## Running our application with prompt

Now we can replace the promt above, into our `extract` function to get the following:

```py
def extract(inp):
  prompt = f"""
  You are an efficient accountant assistant.
  Your job is to read the input text list out the item in the test with the following csv format

  item-name,cost

  Represent the cost as pure number, with no extra symbol.

  Here is the INPUT:

  {inp}

  OUTPUT:
  """

  response = model.generate_content(prompt)
  return response.text
```

Click the run button again for the code block.

Now we can click run on our UI again, and this time, we should have a fully working data extraction LLM app.

Congratulation! You have just finished building your first LLM app!

A journey of a thousand mile start with a single step!
