this["JST"] = this["JST"] || {};
this["JST"]["chat"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"messages\"></div>\n<form class=\"new-message-form\">\n    <input type=\"text\" class=\"newMessage\" placeholder=\"New Message\"/>\n    <input type=\"submit\" class=\"sendMessage\" value=\"Send\"/>\n</form>";
},"useData":true});
this["JST"]["container"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\">\n    <div class=\"sidebar\"></div>\n    <div class=\"main\"></div>\n\n</div>\n";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"login-form\" >\n    <input type=\"text\" placeholder=\"Username\" class=\"login-user\"/>\n    <input type=\"submit\" value=\"Login\"/>\n</form>";
},"useData":true});
this["JST"]["messages"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<div class=\"each-message-container\">\n<div><span class=\"message-name\">"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "<span class=\"message-time\">"
    + alias3((helpers['format-date'] || (depth0 && depth0['format-date']) || alias1).call(depth0,(depth0 != null ? depth0.created_at : depth0),{"name":"format-date","hash":{},"data":data}))
    + "</span></span></div>\n    <div><span class=\"message-content\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</span></div>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div><h3>dude</h3></div>";
},"useData":true});