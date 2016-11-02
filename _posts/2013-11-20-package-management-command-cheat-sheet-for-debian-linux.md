---
layout: post
title: Package management command cheat sheet for Debian Linux
category: web
tags: [ubuntu,debian]

---

Here is my list of mostly frequently used **apt-cache** and **apt-get** commmands that will help you handle most if not all of the package management <u>you will ever need</u>.

### APT-CACHE

Searching for package

{% highlight bash%}
# search package name & description by term
$ apt-cache search tomcat7
libtomcat7-java - Servlet and JSP engine -- core libraries
tomcat7 - Servlet and JSP engine
tomcat7-admin - Servlet and JSP engine -- admin web applications
tomcat7-common - Servlet and JSP engine -- common files
tomcat7-docs - Servlet and JSP engine -- documentation
tomcat7-examples - Servlet and JSP engine -- example web applications
tomcat7-user - Servlet and JSP engine -- tools to create user instances

# search package name that start with term
$ apt-cache pkgnames tomcat7
tomcat7-common
tomcat7
tomcat7-admin
tomcat7-examples
tomcat7-docs
tomcat7-user
{% endhighlight %}

### APT-GET

Updating package source list

{% highlight bash%}
$ sudo apt-get update
{% endhighlight %}

Upgrading packages

{% highlight bash%}
# upgrade packages (safe)
$ sudo apt-get upgrade

# upgrade may add or remove existing packages
$ sudo apt-get dist-upgrade
{% endhighlight %}

Installing packages

{% highlight bash%}
# install specific package
$ sudo apt-get install tomcat7

# remove wildcard package
$ sudo apt-get install 'tomcat7*'
{% endhighlight %}

Removing packages

{% highlight bash%}
# install specific package
$ sudo apt-get remove tomcat7

# remove wildcard package
$ sudo apt-get remove 'tomcat7*'

# remove package & config files
$ sudo apt-get purge tomcat7
{% endhighlight %}

Checking for broken packages/ dependencies

{% highlight bash%}
# update package cache and check for broken dependencies
$ sudo apt-get check

# install dependencies for package
$ sudo apt-get build-dep
{% endhighlight %}

Cleaning up archive files

{% highlight bash%}
# delete all stored archived .deb files
$ sudo apt-get clean

# only delete .deb files that can no longer be downloaded
$ sudo apt-get autoclean
{% endhighlight %}
