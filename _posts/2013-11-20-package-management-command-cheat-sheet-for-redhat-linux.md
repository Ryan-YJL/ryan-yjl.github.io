---
layout: post
title: Package management command cheat sheet for Redhat Linux
category: web
tags: [fedora,redhat]

---

Here is my list of mostly frequently used **yum** commmnds that will help you handle most if not all of the package management <u>you will ever need</u>.



##Updating repositories

If you are using **Fedora**, then you usually have the latest repository without doing much.

If you are using **CentOS** or **RHEL**, then you best bet is to get the repo from [webtatic](https://webtatic.com/projects/yum-repository/).
The installation of the repo is simply "rpm -Uvh" followed by the repo url.

### YUM

Searching for package

{% highlight bash%}
# search package name & description by term
$ yum search tomcat

# search package name that start with term
$ yum list tomcat
tomcat7-common
tomcat7
tomcat7-admin
tomcat7-examples
tomcat7-docs
tomcat7-user

# list all installed packages in system 
$ yum list installed

{% endhighlight %}

Upgrading packages

{% highlight bash%}
# upgrade packages (safe)
$ yum update

# upgrade packages and remove existing obsolete packages
# which you may be using
$ yum upgrade
{% endhighlight %}

Installing packages

{% highlight bash%}
# install specific package
$ yum install tomcat7

# remove wildcard package
$ yum install 'tomcat7*'

# install package group
$ yum groupinstall 'Development Tools'
{% endhighlight %}

Removing packages

{% highlight bash%}
# install specific package
$ yum erase tomcat7

# remove wildcard package
$ yum erase 'tomcat7*'
{% endhighlight %}

Checking for broken packages/ dependencies

{% highlight bash%}
# update package cache and check for broken dependencies
$ yum check

# check for packages to update
$ yum check-update

# reinstall package and dependencies
$ yum reinstall
{% endhighlight %}

Cleaning up archive files

{% highlight bash%}
# delete all cached data
$ yum clean
{% endhighlight %}
