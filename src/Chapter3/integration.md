# Chainning in action

Ok now that we have had all the building block, let actually see chaining in action by putting them all into a function

```py
def agent_chain(text, cat):
  extract = extract_agent(text)
  print(f"Extract: \n {extract.strip()} \n")
  classify = classify_agent(extract, cat)
  print(f"Classify: \n {classify.strip()} \n")
  summarize = summarize_agent(classify)

  return summarize
```

Let test to see if our chain of agents actually works:

```py
response = agent_chain(email, cat)
print(response)
```

Run the above code and you should see the following get printed out:

```
Extract:
Chips,20
Coca-cola,50
Pepsi,40
Pretzel,40
Popcorn,60

Classify:
snack,Chips,20
drink,Coca-cola,50
drink,Pepsi,40
snack,Pretzel,40
snack,Popcorn,60

snack,120
drink,90
```

This is AMAZING isn't it? Can you imagine doing something like this just 4 years ago? I couldn't honestly. I hope this is enough to get you excited about the potential of this technology already.

However, for now, let us finish integration with our UI first for a complete workflows.

## UI integration

Let add a new code block to our notebook.

```py
with gr.Blocks() as demo:
  email_inp = gr.Textbox(value=email)
  cat_inp = gr.Textbox(placeholder="Your category in this format: drink,snack,...,...")
  out = gr.Textbox(label="Output")
  with gr.Row():
    run_btn = gr.Button("Run")
    save_btn = gr.Button("Save")

  run_btn.click(fn=agent_chain, inputs=[email_inp, cat_inp], outputs=out)
  save_btn.click(fn=save_to_csv, inputs=out)
  print(out.value)

demo.launch()
```

And run this codeblock to have access to our UI. Now, it is time for you to play around with what you have just built. Honestly it should be quite mind boggling what you have just managed to do.

However, by now you should have noticed that, this system is still quite finicky and not very reliable yet. This is the challenge of building an LLM application, and the important of understanding Prompt Engineering as well as how to control the predictability and reliability of your applications.

## Adding plot (optional)

This is an optional part to the workshop.

You must have been wondering why I have been turning everything into csv? Well, partially it is because it is an easier form of data processing for LLMs. But it is also because, ideally, we would want to do something with this data.

One of the most common thing to do with data retrieved from your LLM is to plot it out, so let do just that and add a plot to our application.

Create a new code block to contain the plot function:

```py
import pandas as pd

def plot(inp):
  frame = {
    "Category": [],
    "Total cost ($)": []
  }

  for line in inp.strip().split("\n"):
    [cat, cost] = line.strip().split(",")
    frame["Category"].append(cat.strip())
    frame["Total cost ($)"].append(cost.strip())

  print(frame)

  return  gr.BarPlot(
    pd.DataFrame(frame),
    x="Category",
    y="Total cost ($)",
    title="Breakdown of party cost",
    min_width=300
  )
```

And another block for the new upgraded UI with plot capability:

```py
with gr.Blocks() as demo:
  email_inp = gr.Textbox(value=email)
  cat_inp = gr.Textbox(placeholder="Your category in this format: drink,snack,...,...")
  out = gr.Textbox(label="Output")
  with gr.Row():
    run_btn = gr.Button("Run")
    save_btn = gr.Button("Save")
    plot_btn = gr.Button("Plot")
  plt = gr.BarPlot()

  run_btn.click(fn=agent_chain, inputs=[email_inp, cat_inp], outputs=out)
  save_btn.click(fn=save_to_csv, inputs=out)
  plot_btn.click(fn=plot, inputs=out, outputs=plt)
  print(out.value)

demo.launch()
```

Click run and enjoy!

Well-done you have made it all the way to the end of the workshop, and has created a fully functioning LLM application for your own personal usage!

The best part is, this is all free (as long as our Google overlord not kill off the free tier to Gemini that is lol).
