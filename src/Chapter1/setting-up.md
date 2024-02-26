# Setting up python development environment

Now let get our hand dirty with setting up our Python development environtment.

## Installing Python

Of course, the first thing you would need is to install Python onto your system. You can follow this link to download Python version [3.10.11](https://www.python.org/downloads/release/python-31011/) which is what we will use in this workshop. This is because from my experience, this is the most stable version of supported Python for most ML library.

If you already have Python from a previous projects or installation project you have done, you can run this following command in your terminal (Terminal for MacOS, Powershell for Windows) to check your python version:

```shell
python3 --version
```

## Installing uv

Once you have installed Python, next we will install our package manger. One the coolest feature about `uv` is that it also support creating virtual environtments, which are environtment to help us set up our packages that is specifically for that projects, and avoiding collision of package dependencies with other projects. It also led us definite what version of python we would want to use.

To install `uv`, follow this [link](https://github.com/astral-sh/uv) and scroll down to see the installation instruction in the Getting Started section. Alternatively, you can also just copy and run this command in your terminal.

For MacOS:
```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

For Windows:
```shell
powershell -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Follow the on screen instruction in the terminal, and after you are done, you should run the follow command to check that everything is installed correctly:
```shell
uv -V
```

You should see:
```shell
uv 0.1.10
```

## Setting up project development environment

Create a new folder for your project, open up your VSCode, and select the folder you just created for your project. Now, we can finally start.

Press ``Ctrl - ` `` to bring up your terminal inside your VSCode.

Inside your terminal, run the following command (the first line only, the rest is the supposed display result):

```shell
uv venv

Using Python 3.10.12 interpreter at /Users/yuuki/miniforge3/bin/python3
Creating virtualenv at: .venv
Activate with: source .venv/bin/activate
```

In your folder right now, you should a new folder created named `.venv`. That where your isolated instance of your virtual environtment is living in.

Next we run the following command to activate the `venv`:

```shell
source .venv/bin/activate
```

Now that your environtment is activated, we can start downloading the necessary package for our projects:

```shell
uv pip install ipykernel gradio google-generativeai
```

With that, we are basically done with setting up our project development environtment. Now, we will move on to working with Jupyter notebook.

## Working with Jupyter inside VSCode

In your VSCode, create a new file and named it `app.ipynb`. Open it and you should see something like this:

![Jupyter](../img/jupyter.png)

In the first box, copy and paste the following code:

```py
import google.generativeai as genai

genai.configure(api_key="")
model = genai.GenerativeModel('gemini-pro')
```

And then click the run symbol. If everything works, we are all good to go to the next section.

If you run into a problem where it said your package is not found, you need to make sure that your Jupyter Kernel is correctly seclected the `.venv` environtment that we have set up earlier.
