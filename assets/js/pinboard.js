var pinboard = (function() {
  function fetch(url) {
    (function() {
      var pinboardLinkroll = document.createElement('script');
      pinboardLinkroll.type = 'text/javascript';
      pinboardLinkroll.async = true;
      pinboardLinkroll.src = url;
      document.getElementsByTagName('head')[0].appendChild(pinboardLinkroll);
    })();
  }

  function linkroll(element) {
    var items;
    this.set_items = function(i) {
      this.items = i;
    }
    this.show_bmarks = function() {
      var lines = [];
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var str = this.format_item(item);
        lines.push(str);
      }
      document.getElementById(element).innerHTML = lines.join("\n");
    }
    this.cook = function(v) {
      return v.replace('<', '&lt;').replace('>', '&gt>');
    }
    this.format_item = function(it) {
      var str = "<div class=\"archive-item\">";
      if (!it.d) {
        return;
      }
      str += "<a class=\"archive-title\" href=\"" + this.cook(it.u) + "\">" + this.cook(it.d) + "</a>";
      if (it.n) {
        str += "<div class=\"archive-description\">" + this.cook(it.n) + "</div>\n";
      }
      if (it.t.length > 0) {
        str += "<ul class=\"tags clearfix\">";
        for (var i = 0; i < it.t.length; i++) {
          var tag = it.t[i];
          str += " <li><a href=\"http://pinboard.in/u:" + this.cook(it.a) + "/t:" + this.cook(tag) + "\">" + this.cook(tag).replace(/^\s+|\s+$/g, '') + "</li></a> ";
        }
        str += "</ul>"
      }
      str += "</div>\n";
      return str;
    }
  }
  return {
    getFeed: function(options) {
      this.element = options.target;
      fetch("http://feeds.pinboard.in/json/v1/u:" + options.user + "/?cb=pinboard.render\&start=2\&count=" + options.count);
    },
    render: function(data) {
      console.log(data);
      var lr = new linkroll(this.element);
      lr.set_items(data);
      lr.show_bmarks();
    }
  }
})();