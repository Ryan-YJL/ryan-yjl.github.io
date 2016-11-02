---
layout: post
title: Managing processes in unix
category: web
tags: [unix,linux]

---

##About the PS command
The ps (i.e., process status) command is used to provide information about the currently running processes, including their process identification numbers (PIDs). A process, also referred to as a task, is an executing (i.e., running) instance of a program. Every process is assigned a unique PID by the system.

{% highlight bash %}
ps aux | grep php
{% endhighlight %}

##AUX headers

1. USER
2. PID  
3. %CPU 
4. %MEM
5. VSZ
6. RSS
7. TT
8. STAT
9. STARTED
10. TIME
11. COMMAND

Most of the time, you only need to care about **USER**, **PID** and **COMMAND**. If you have 

