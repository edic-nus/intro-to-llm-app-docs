# Understanding agents

Agent is actually a rather simple concept, take for example our `extract` function previously.

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
  return response.tex
```

This is in fact a simple agent that take in an input (an email) and return a list of item in csv format.

Let rename it to `extract_agent`.

Now, let say if we have a list of categories that the item should fall into (for example: `drink` and `snack`) and we want to know which item fall into each category, how would we do that?

Well quite straight forward actually, we create an agent that help us do just that.

```py
def classify_agent(inp, cat):
  prompt = f"""
  You are an efficient classifier assistant.
  There are two classification categories: {cat}.
  Classsify the following input into this csv format:

  category, item-name, cost

  Here is the INPUT:

  {inp}

  OUTPUT:
  """

  response = model.generate_content(prompt)
  return response.text
```

Let add this agent to our notebook.

Hmmmmm, but how would we know if our agent works? Well, we simply run a test, just like how you would, with a normal python function.

Create a new code block as follow:

```py
inp = """
Chips,$20
Coca-cola,$50
Pepsi,$40
Pretzel,$40
Popcorn,$60
"""

cat = "drink,snack"

response = classify_agent(inp.strip(), cat)
print(response)
```

And click Run, you should see the following:

```
snack,Chips,$20
drink,Coca-cola,$50
drink,Pepsi,$40
snack,Pretzel,$40
snack,Popcorn,$60
```

Ok, now that we know which category each item belong to already, but I am not so sure how much did I spend exactly in each category. Let make another agent that do just that.

```py
def summarize_agent(inp):
  prompt = f"""
  You are an efficient summarizer.
  Your task is to sum up the total cost of every entry of the same category of the following input.
  The input will has the following format:

  category, item-name, cost

  Return the ouput as follow:

  category, total-cost

  Here is the INPUT:

  {inp}

  OUTPUT:
  """

  response = model.generate_content(prompt)
  return response.text
```

And once again, we can create another test block for our agent as follow:

```py
inp = """
snack,Chips,$20
drink,Coca-cola,$50
drink,Pepsi,$40
snack,Pretzel,$40
snack,Popcorn,$60
"""

response = summarize_agent(inp.strip())
print(response)
```

Click Run and we should see:

```
snack,$120
drink,$90
```

Now, before we progress further, I want you to know that, this agent is actually very unecessary. That is because we could achieved a much more efficient and free alternative, that is just process the csv output, and sum up the total cost using simple addition function. And indeed, you could make a non-LLM agent too.

However, for the purpose of demonstration in this workshop, we will pretend that this is something very hard to do algorithmically, and need the help of LLM to calculate this information for us.

And that is it, we have just created ourselves 3 different agent that do 3 very different but specific tasks.
