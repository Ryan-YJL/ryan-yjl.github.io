---
layout: post
title: How to install luarocks (Unix)
category: web
tags: [lua, ubuntu]

---

LuaRocks, a deployment and management system for Lua modules. Like homebrew for mac users, luarocks has a repository that makes the installation of lua modules a breeze.

{% highlight bash %}

wget http://luarocks.org/releases/luarocks-2.1.2.tar.gz

tar -zxvf luarocks-2.1.2.tar.gz

cd luarocks-2.1.2

{% endhighlight %}

Depending on your setup, you may need to specify the lua location. The default is /usr

For my setup, I have installed the lua at /usr/local/bin/lua

{% highlight bash %}
./configure --with-lua=/usr/local/bin

make

sudo make install
{% endhighlight %}

The full list of available configurations is [here](http://luarocks.org/en/Installation_instructions_for_Unix).

Once install you can install your modules like so

{% highlight bash %}
luarocks install luafilesystem
{% endhighlight %}