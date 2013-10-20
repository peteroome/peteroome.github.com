---
layout: post
title: Killing Foreman Workers Locally on OS X.
---

I was in a situation the other day where i used ctrl+c (OS X) to kill my local [Foreman](https://github.com/ddollar/foreman "Foreman - Manage Procfile-based application") server. However, not all of the workers intiated by [Puma](http://puma.io/ "Puma Server") had been killed, preventing me from firing up another project on the same port.

As a result i needed to find the PID's of those workers and kill them manually.

## Find the PID's
First port of call is to find the PID's of the processes that are still running. 

In this case, 5000 was the port i'd been running on…

    $ lsof -i :5000

## Manually kill the PID's
Then it was simply a case of manually killing the PID's id found…

    $ kill -9 PID_NUMBER

…replace PID_NUMBER with the actual number retrieved with the first command.

I worked out that multiple PID's could be killed with a single command too, simply by adding them to the end of the line, for example:

    $ kill -9 PID_NUMBER_1 PID_NUMBER_2 PID_NUMBER_3