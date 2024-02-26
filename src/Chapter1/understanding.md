# Chapter 1: Understanding basic LLM toolings

In this chapter, we will go through the basic setup and toolings that you would often us in the development of a LLM application. You will learn how to use:
- Jupyter Notebook
- Gradio
- Gemini API
- uv (optional)

## [Jupyter Notebook](https://jupyter.org/)

Imagine a notebook where you can combine code, explanations, and results all in one place. That's essentially what a Jupyter Notebook is! It's a **free, open-source tool** that lets you:

* **Write code:** You can use various programming languages like Python, R, Julia, etc., to write code and see the output instantly.
* **Add explanations:** Explain your code step-by-step using text, images, or even videos.
* **Visualize results:** Create charts, graphs, and other visualizations to understand your data better.

Think of it like a **playground for your ideas:**

* **Experiment:** Try different code snippets and see the results immediately, making it easy to learn and explore.
* **Share your work:** Easily share your notebooks with others, allowing for collaboration and teaching.
* **Document your process:** Keep track of your code, explanations, and results, making it easier to revisit and understand later.

Jupyter notebooks are widely used in various fields, especially:

* **Data science:** for data cleaning, analysis, and visualization.
* **Machine learning:** for building and experimenting with machine learning models.
* **Scientific computing:** for numerical computations and simulations.
* **Education:** for teaching and learning programming concepts.

If you're a beginner interested in coding, data analysis, or just exploring new ideas, Jupyter notebooks are a great place to start! They provide a friendly and interactive environment to learn and experiment without feeling overwhelmed.

## [Gradio](https://www.gradio.app/)

Imagine you have a cool machine learning model, an API you built, or even just a fun Python function. You want people to be able to use it and see what it does, but building a whole website or app seems like a hassle.

That's where **Gradio** comes in. It's a **free and easy-to-use Python library** that lets you create **simple web interfaces** for your creations with **just a few lines of code**. No need for web development experience!

Here's what Gradio can do for you:

* **Turn your machine learning model into a user-friendly app:** People can upload data, see the model's predictions, and even visualize the results.
* **Make your API accessible:** Share your API with others through a clean and interactive interface.
* **Showcase your Python functions:** Let others experiment with your code and see the outputs in real-time.

**The best part?** You can share your Gradio creations with just a link, so anyone can use them from their browser, no installation needed.

Think of Gradio as a **quick and easy way to bring your Python creations to life** and share them with the world. It's a great tool for beginners to get started with building interactive applications without diving into complex web development.

## [Gemini](https://ai.google.dev/)

The Google Gemini API is a tool that allows you to interact with one of Google's most powerful LLM, **Gemini**. Gemini provides an API, which means it allows programmers to access and use Gemini's capabilities inside their code, without having to access the Gemini platform.

**What can it do?**

Gemini can understand and respond to **text**, and even handle **images and videos** in its advanced version. You can ask it questions, give it instructions, or even have conversations with it. For example, you could:
- Ask it to write different kinds of creative text formats, like poems and code, etc.
- Summarize information from a complex document.
- Translate languages.
- Answer your questions in an informative way.

**What are the benefits?**

Gemini has a [free tier](https://ai.google.dev/pricing) that allow you to query 60 queries per minute, or in another word 1 query every second, with no cap on the number of input token and output token link. This makes it extremely cost effective for prototyping purpose, and probably has become the defacto standard for prototyping LLM app.

## [uv](https://github.com/astral-sh/uv) (optional, but recommended)

uv is a new tool aiming to be the **"Cargo for Python"**: a fast, reliable, and user-friendly package manager. Developed by the Astral team, known for their lightning-fast linter "Ruff," uv focuses on speed and ease of use.

* **What it does:** uv helps you **install and manage Python packages** efficiently.
* **Why it's different:** uv is written in **Rust**, known for its speed, making it significantly **faster** than traditional Python package managers like `pip`.
* **Easy to use:** uv aims to be **compatible** with existing tools and workflows, so you can use it like you would `pip` with minimal changes.
* **Future goals:** While currently focused on installation, uv plans to become a comprehensive **project and package manager**, handling various aspects of your Python development workflow.

Think of it as a faster and potentially more convenient alternative to `pip` for managing your Python packages. If you don't want to waste your whole day just downloading packages and managing them, I suggest you use uv instead. As with most courses in NUS, you will probably have to use python at one point or another, so I highly recommended you to give uv a try and feel more superior to all of your other friends who is running on `pip`.
