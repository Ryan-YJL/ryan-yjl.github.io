---
layout: post
title: Choose Grunt, GulpJS or NPM?
category: web
tags: [nodejs,npm,javascript]
---

Grunt, Gulp, and npm are the three build tools most frequently used in front-end development workflows. What are the differences? Which should I use to start? In this article, I will briefly summarize the areas where each tool excels in and give you a glimpse of how you can easily utilize these tools to automate your workflows or even adopt best practices (if you haven't already do so).

### Grunt : Configuration over coding
Favoring task configuration over implementation make the process of re-read and fix old scripts more easy, Grunt implements the concatenation and minification process for you, it’s smart enough to care of the rest, you only  need to specify input and output files. Grunt configurations (JSON objects) are easy to understand when they are small, but as they grow, it is a bit more difficult to read and understand  huge configurations.
Grunt looks for its configuration under a property with the same name. Multi-tasking can have multi configurations, defined using arbitrarily named "targets." In the example below, the concat task has "foo" and "bar" targets, while the uglify task only has a "bar" target.

```js
grunt.initConfig({
  concat: {
    foo: {
      // concat task "foo" target options and files go here.
    },
    bar: {
      // concat task "bar" target options and files go here.
    },
  },
  uglify: {
    bar: {
      // uglify task "bar" target options and files go here.
    },
  },
});
```

### Gulp : Code-driven build tool
Gulp uses streams instead of temporary files/folders, it makes IO more faster. Gulp places a little more emphasis on code over configuration with the use of pipes and streams. Gulp tasks are also very readable and easy to debug since you can set breakpoints in it, compared to no debugging in the configuration aspects of Grunt.

As an example, we will pipe through gulp-size , which calculate the size of the library that are in the buffer, and print that to the terminal. Note that if you add it before Uglify then you’d get the unminified size :

```js
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var size = require('gulp-size');

gulp.task('build', function () {
  return gulp
    .src('./myscript.js')
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest('./build'));
});
```


### NPM as a build tool
In order to use npm  as a task runner, we add the required properties to our packages.json, the name of the property will be the task name. Using npm has several obvious advantages as it hosts tens of thousands of packages and also allows for the use of the command line. An added bonus is that it also removes complexity from your project since you don’t need any other specific APIs of another tool or the inherent dependencies of the tools that you are using.

As an example, in the following package file, we will just copy a directory in our JavaScript build flow and compile an Stylus stylesheet during our CSS build flow. In this case, we're using a single "&" to run the tasks asynchronously.

```js
{
  "scripts": {
    "build-js": "cp -r src/js/ dist/js",
    "build-css": "stylus src/css/all.styl -o dist/css",
    "build": "npm run build-js & npm run build-css"
  },
  "devDependencies": {
    "stylus": "latest"
  }
}
```

### Wrap Up
I hope you've been able to learn a few things about using Grunt, Gulp, and npm as a build process in general. During rapid prototyping, automation tools might be a step that you wouldn't consider, but once you begin to juggle multiple projects, maintenance becomes a chore and soon you find yourself appreciating these build tools which can help you quickly optimize your assets for quicker deployments and updates.


<!-- {
  "devDependencies": {
    "jshint": "latest",
    "uglify": "latest",
    "stylus": "latest",
    "cssmin": "latest"
  },
  "scripts": {
    "scss": "node-sass --output-style compressed -o dist/css src/scss"
    "lint": "lint src/js/*",
    "uglify": "uglifyjs src/js/*.js -m -o dist/js/app.js"
    "build:css": "npm run scss && npm run autoprefixer",
    "build:js": "npm run lint && npm run uglify",
    "build": "npm run build:css && npm run build:js"
    "serve": "browser-sync start --server --files 'dist/css/*.css, dist/js/*.js'"
  }
} -->