---
layout: post
title: Difference between redis EVAL command and redis-cli --eval
category: web
tags: [lua,redis]

---

There are a number of tutorials that focus on the redis eval command (which is the interactive mode).

Most of it demostrates with using the cli like so 

{% highlight sh %}

redis-cli

EVAL "$(cat update_members.lua)" 2 members:counter members:email username@example.com

{% endhighlight %}

where the <u>update_members.lua</u> is something like: 
{% highlight lua %}

counter = KEYS[1]
member_emails = KEYS[2]
email = ARGV[2]

local member_id = redis.call("INCR", counter)
redis.call("HSET", member_emails, member_id, email)
return member_id
{% endhighlight %}

While this is not wrong, most of you might be confuse this with the --eval option available on redis-cli which is awfully similar. You might end up wondering why your KEYS[1] and ARG[1] are gumbled up and the error messages are not making any sense.

If you type redis-cli --help, you get the **typical bullshit documentation**.

It doesn't offer any explanation why your arguments are not working, the way it should (or least the way you expected it to be like the EVAL command in interactive mode).

{% highlight sh %}
redis-cli --help

Usage: redis-cli [OPTIONS] [cmd [arg [arg ...]]]
--eval <file>     Send an EVAL command using the Lua script at <file>
{% endhighlight %}

> If you are using the command line format &mdash; **redis-cli --eval**, there is no ARGV variable in the file.

You only have **KEYS**, and can assess them like KEYS[1], KEYS[2], etc and <span class="impt">you don't have to specify the number of arguments</span> like you do in the EVAL command.

And so you only need to do something like:

{% highlight sh %}

redis-cli -eval /path/to/script.lua key1 key2 key3

{% endhighlight %}


And there you go, you can do call your redis operations using redis.call() and go ahead to script in lua.

Personally, I find that more use for the redis-cli --eval because I use to pipe variables from other input to redis-cli.

