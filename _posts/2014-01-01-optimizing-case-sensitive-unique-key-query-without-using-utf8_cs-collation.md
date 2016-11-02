---
layout: post
title: Optimizing Case sensitive unique key query without using utf8_bin-collation
category: web
tags: [mysql]

---

Most users of mysql would likely to have the collation of their database set to <span class="impt">utf8\_general\_ci</span>.

Say you have a need to have a table of items with 'name' as a unique key and want a name like "Guns N' Roses" to be different from "Guns n' Roses"

Right away you would do something like:

{%highlight sql%}

ALTER TABLE bands ALTER COLUMN name varchar(255) COLLATE utf8_bin

ALTER TABLE bands ADD UNIQUE (name)

{% endhighlight %}

Alternatively, you can do a one way hash for 'name' field with md5 and store it as 'name_hash'.

**\*\*Note you still need to set it as a unique key but because md5 strings are all in 32 digit hexadecimal number, you don't have to collate your hash column differently from the rest of your table.**

This is similar to how <span class="impt">utf8_bin compares characters in binary format</span>. This means that characters like "å" will not be treated like "a".

-----

In doing so, you can simply do a search

{%highlight php%}
<?php

$name = 'Romeo & Juliet';
$name_hash = md5($name);

?>
{% endhighlight %}

{% highlight php%}
<?php

$sql = "SELECT * FROM bands WHERE name_hash = ".md5($name);

?>
{% endhighlight %}

Now, you may think, why use a hash when you can let mysql do all the heavy lifting? The benefit comes when there are times you have **multiple unique keys** and have no real use for the unique keys except to check if the row exist.

You can combine all the unique fields into one <span class="impt">single hash column</span> where you can query like so.

{% highlight php%}
<?php

$sql = "SELECT id FROM bands WHERE hash = ".md5("$field_1 , $field_2 , $field_3 , $field_4");


?>
{% endhighlight %}

This saves mysql from checking multiple columns for matches simply to fulfill a check exist query.

