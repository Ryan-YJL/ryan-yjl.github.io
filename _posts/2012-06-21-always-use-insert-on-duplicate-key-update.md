---
layout: post
title: Always use insert on duplicate key update
category: web
tags: [mysql]
---

I think on duplicate update has to be the best MySQL function. If you are using a 2 step approach to determine whether your row exists like 'mysql\_num\_rows' which is [terrible]() or SELECT COUNT(id) FROM table and then insert your data in another query.

You should really be only using 1 single query which is <span class="impt">insert on duplicate update</span>.

{% highlight  sql%}

INSERT INTO table (a,b,c) VALUES (1,2,3)
  ON DUPLICATE KEY UPDATE c=c+1;

{% endhighlight%}

By default, if the query is an update, it does not return a meaningful insert_id. So to work around that, I always use it as such:


{% highlight  sql%}

INSERT INTO users ( name, email, created, modified  
VALUES (
	'John Doe',
	'username@example.com',
	'2011-01-01 00:00:00',
	'2011-01-01 00:00:00'
)
  ON DUPLICATE KEY UPDATE id = LAST_INSERT_ID( id ), modified = VALUES( modified );

{% endhighlight%}

If you need to update more values, just stick in a comma and add in the format COLUMN = VALUES( COLUMN ).


If you are not using it, use it.