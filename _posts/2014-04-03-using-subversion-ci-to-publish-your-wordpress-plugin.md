---
layout: post
title: Using subversion (Command Line) to publish your WordPress plugin
category: web
tags: [wordpress]

---

I recently had to write a WordPress plugin for my web application. Here is, step-by-step guide to publish your WordPress plugin.

### What you need.

1. A WordPress.org account
2. Learn how to use Subversion (SVN)


### Prerequistie

1. Your own WordPress plugin

## Using SVN

There are a number of ways to publish your WordPress. 

1. You can either use svn via the command line (or) 
2. if you are new to svn and want to [get going with a GUI](). I recommend you to use [SVNx](https://code.google.com/p/svnx/).

If you are more familar with the command line, you can simply open up Terminal on your mac. 


If you don't know if you have svn installed, check by using 'which' command.

{% highlight bash%}
$ which svn
/usr/bin/svn
{% endhighlight %}

1) Checkout the repository files from WordPress to your local directory

{% highlight bash%}
$ svn co http://plugins.svn.wordpress.org/your-plugin-name my-local-dir
{% endhighlight %}

You will notice that your my-local-dir now has 4 folders

* assets
* branches
* tags
* trunk

2) Copy all your plugin files to the trunk folder. ( This is where your development files should be. )

3) Add files to your repository trunk

{% highlight bash%}
$ svn add trunk/*
$ svn ci -m 'First commit'
{% endhighlight %}

4) Tag your release version

{% highlight bash%}
$ svn cp trunk tags/1.0
$ svn ci -m "Tagging version 1.0"
{% endhighlight %}

Here is a simplified workflow of a WordPress plugin update

1. Do all your changes in the "trunk" folder 
2. Update the "Stable tag" in the readme file.
3. Update the "Version" in your plugin’s main PHP file.
5. Commit the changes in the "trunk" folder
6. Tag the new version by copying the "trunk" folder to a new tag under the "tags" folder.

### Things to note

* Always remember to update your "Stable tag" in the readme.txt file
* You need to include "Version" info the plugin main php, your plugin page will not show the Download Version 1.0 correctly.


