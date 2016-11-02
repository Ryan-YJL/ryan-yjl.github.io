---
layout: post
title: Using eval with redis-cli and lua
category: web
tags: [lua,redis]

---

Recently, I had to use redis for some bash scripting and came across lua as the --eval option on redis command line.

Lua come across as a very simple scripting language and extremely lightweight and designed for easy integration into existing applications. 

Because it has so few functions out of the box, you can learn it within a couple of hours and if you are only using it for the purpose of passing some key value stores to redis via the command line, all you need to do is to master some of the basic conditionals of lua.

This allows you to create all the redis commands you need to perform in a lua script and have the redis-cli evaluate the file for you.

So you can have a simple lua script like:


<u>script.lua</u>

{% highlight lua %}
local some_value = KEYS[1]

redis.call('setnx','counter',1)

if some_value ~= nil then
	
	redis.call('HSET','member','some_field','some_value')

end

{% endhighlight %}



and then run your command like so 

{% highlight bash %}
redis-cli -eval /path/to/script.lua
{% endhighlight %}

In a more real world situation, you are mostly like to use a command before piping to redis-cli like this.

{% highlight bash %}
cat file | redis-cli -eval /path/to/script.lua $(awk '{print $2}')
{% endhighlight %}

With a simple lua script, you can avoid using an additional layer of abstraction to interact with redis - a fast key value storage system.


