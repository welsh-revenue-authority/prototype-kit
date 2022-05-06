# Flask Prototype Kit

## Getting started

Optional but recommended. Run in a virtualenv. To create one (with Python 3) run:

```
mkvirtualenv --python=`which python3` <name>
```
where <name> is what you wish to call it.

When returning run `workon <name>` to activate the virtualenv you just created.

To install flask and all the other dependencies run:

```
make init
```

This will install the python dependencies and the npm requirements.


Finally to start the it run:

```
flask run
```