---
layout: post
title: What is your use for Redis?
category: web
tags: [redis]

---

Personally, I use redis for storing/ caching simple stats like google analytics, caching mysql queries and counter stats for applications. 

I think the main use for redis is strictly to caching at abstract query level. If you are planning to store records, I think using solr will a more suitable option.

Stackoverflow also primary uses redis for [caching](http://meta.stackexchange.com/questions/69164/does-stack-overflow-use-caching-and-if-so-how/69172#69172).


