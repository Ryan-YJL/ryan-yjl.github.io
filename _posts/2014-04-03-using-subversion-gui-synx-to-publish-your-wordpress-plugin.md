---
layout: post
title: Using subversion (GUI) SVNx to publish your WordPress plugin
category: web
tags: [wordpress]

---

You have just got approved by WordPress and handed your official WordPress repository and want to get up and running with publishing your WordPress plugin at the plugin directory.

But you have been using git have no time to learn all the nooks and crannies of SVN, what should you do?

If you are using a mac, I would recommend you to use SVNx. It is free and easy to use and you can download it [here](https://code.google.com/p/svnx/).

Once you downloaded, simply open up the app and go to the top menu bar and right under 'Window', you will see '**Repositories**' and '**Working Copies**'.

<img src="{{ site.url }}/assets/img/uploads/svnx-screenshot-1.jpg">

Basically, '**Repositories**' is the one where you specify your WordPress plugin repository.

So you can go ahead and hit the "+" sign to create a respository.

 * Enter a **Name** for your repository (can be anything)
 * **Path** which will be something like http://plugins.svn.wordpress.org/your-plugin-name/
 * **User** and **Pass** which will be your wordpress.org credentials

<img src="{{ site.url }}/assets/img/uploads/svnx-screenshot-2.jpg">

If your svn plugin url and credentials are right, at the GUI you will see that under 'root', there are 4 folders.

* assets
* branches
* tags
* trunk

Go ahead and svn checkout the files to a local directory.

<img src="{{ site.url }}/assets/img/uploads/svnx-screenshot-3.jpg">

Next go to Window -> Working Copies and hit the "+" sign to create a "Working Copy".

<img src="{{ site.url }}/assets/img/uploads/svnx-screenshot-4.jpg">

 * Enter a **Name** for your working copy. (can be anything)
 * **Path** which will be the location where you checked out your respository in the previous step.
 * **User** and **Pass** which will be your wordpress.org credentials.

2) Copy all your plugin files to the trunk folder. ( This is where your development files should be. )


Now when you double click on your **Working Copy**, you will see the files that have been added to your directory. If a new file is added, you will see an 'A' in front of the file path. If file has been changed, you will see an 'M' instead.

To upload your files to your repository is simple. Just select all the files you want and click 'Add' or 'Update' and then 'Commit' to commit your changes to the wordpress repository.

<img src="{{ site.url }}/assets/img/uploads/svnx-screenshot-5.jpg">

Once you have committed the changes, you will see a Rev # and date/time along with your commit message over at the Respositories window.

<img src="{{ site.url }}/assets/img/uploads/svnx-screenshot-6.jpg">

Now to tag your release, all you need to do is to svn copy the newly updated 'trunk' folder to the 'tags' folder and indicate a 'version'. Make sure that this version corresponds to the version info specified in your plugin main php file.

<img src="{{ site.url }}/assets/img/uploads/svnx-screenshot-7.jpg">

Here is a simplified workflow of a WordPress plugin update using SVNx

1. Do all your changes in the 'trunk' folder 
2. Update the 'Stable tag' in the readme file.
3. Update the 'Version' in your plugin’s main PHP file.
5. Commit the additions/updates in the 'trunk' folder at 'Working Copies' window
6. Go over to 'Repositories' window
6. Tag the new version by copying the 'trunk' folder to a new tag under the 'tags' folder.

### Things to note

* Make sure you are selecting the trunk folder before you click on 'svn copy' and that you have selected the 'tags' folder for the target.
* Always remember to update your 'Stable tag' in the readme.txt file
* You need to include 'Version' info the plugin main php, your plugin page will not show the correct download version.


