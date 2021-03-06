
spectacular.templates['card'] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),example = locals_.example,icons = locals_.icons;var result = (example.result);
var state = (result.state);
var hasExpectations = (result.expectations.length > 0);
icons = { success: 'ok', failure: 'remove', errored: 'remove', pending: 'ellipsis', skipped: 'remove' }
buf.push("<div" + (jade.attrs({ "class": [('example'),(state)] }, {"class":true})) + "><div class=\"details\"><section><span class=\"state\"><i" + (jade.attrs({ "class": [("icon-" + (icons[state]) + "")] }, {"class":true})) + "></i><span>" + (jade.escape(null == (jade.interp = state) ? "" : jade.interp)) + "</span></span><span class=\"time\"><i class=\"icon-time\"></i><span>" + (null == (jade.interp = (example.duration / 1000) + "s") ? "" : jade.interp) + "</span></span><a" + (jade.attrs({ 'href':("/?filter=" + (example.description) + ""), "class": [('refresh')] }, {"href":true})) + "><i class=\"icon-refresh\"></i><span>Rerun it!</span></a></section><header><h3>" + (null == (jade.interp = example.fullDescription) ? "" : jade.interp) + "</h3></header>");
if ( hasExpectations)
{
buf.push("<ul class=\"expectations\">");
// iterate result.expectations
;(function(){
  var $$obj = result.expectations;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var expectation = $$obj[i];

if ( expectation.success)
{
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('success')] }, {"data-expectation":true})) + ">" + (null == (jade.interp = expectation.description) ? "" : jade.interp) + "</li>");
}
else
{
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('failure')] }, {"data-expectation":true})) + ">" + (null == (jade.interp = expectation.description) ? "" : jade.interp) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var expectation = $$obj[i];

if ( expectation.success)
{
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('success')] }, {"data-expectation":true})) + ">" + (null == (jade.interp = expectation.description) ? "" : jade.interp) + "</li>");
}
else
{
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('failure')] }, {"data-expectation":true})) + ">" + (null == (jade.interp = expectation.description) ? "" : jade.interp) + "</li>");
}
    }

  }
}).call(this);

buf.push("</ul>");
}
else if ( state != 'success' && state != 'pending')
{
buf.push("<div class=\"message\">" + (jade.escape(null == (jade.interp = example.examplePromise.reason.message) ? "" : jade.interp)) + "</div>");
}
buf.push("</div><div class=\"expectation-message\"></div><div class=\"stack\"></div></div>");;return buf.join("");
}

spectacular.templates['error'] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),message = locals_.message,source = locals_.source;buf.push("<div class=\"error\"><div class=\"message\">" + (jade.escape(null == (jade.interp = message) ? "" : jade.interp)) + "</div><pre class=\"source\">" + (jade.escape(null == (jade.interp = source) ? "" : jade.interp)) + "</pre></div>");;return buf.join("");
}

spectacular.templates['list'] = function anonymous(locals) {
var buf = [];
buf.push("<div id=\"examples\"><header class=\"header\"><button class=\"btn-open-left\"><i class=\"icon-reorder\"></i></button><span class=\"all\"><span class=\"value\">0</span>/<span class=\"total\">0</span></span><button class=\"btn-open-right\"><i class=\"icon-plus\"></i></button><button class=\"btn-collapse\"><i class=\"icon-ellipsis-horizontal\"></i></button></header><div></div></div>");;return buf.join("");
}

spectacular.templates['progress'] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),seed = locals_.seed,chars = locals_.chars;buf.push("<div id=\"progress\"><section><span class=\"seed\"><i class=\"icon-random\"></i><span class=\"value\">" + (jade.escape(null == (jade.interp = seed) ? "" : jade.interp)) + "</span></span><span class=\"time\"><i class=\"icon-time\"></i><span class=\"value\">0s</span></span></section><span class=\"all\"><span class=\"value\">0</span>/<span class=\"total\">0</span></span><ul>");
// iterate chars
;(function(){
  var $$obj = chars;
  if ('number' == typeof $$obj.length) {

    for (var state = 0, $$l = $$obj.length; state < $$l; state++) {
      var chr = $$obj[state];

buf.push("<li" + (jade.attrs({ 'data-state':(state), "class": [(state)] }, {"class":true,"data-state":true})) + "><span class=\"value\">0</span><span class=\"symbol\">" + (jade.escape(null == (jade.interp = ' ' + state) ? "" : jade.interp)) + "</span></li>");
    }

  } else {
    var $$l = 0;
    for (var state in $$obj) {
      $$l++;      var chr = $$obj[state];

buf.push("<li" + (jade.attrs({ 'data-state':(state), "class": [(state)] }, {"class":true,"data-state":true})) + "><span class=\"value\">0</span><span class=\"symbol\">" + (jade.escape(null == (jade.interp = ' ' + state) ? "" : jade.interp)) + "</span></li>");
    }

  }
}).call(this);

buf.push("</ul></div>");;return buf.join("");
}

spectacular.templates['search'] = function anonymous(locals) {
var buf = [];
buf.push("<div id=\"search\"><form action=\"/\" method=\"get\"><input id=\"search-input\" type=\"text\" name=\"filter\"/><button type=\"submit\"><i class=\"icon-search\"></i></button></form><style id=\"search-style\"></style></div>");;return buf.join("");
}

spectacular.templates['viewer'] = function anonymous(locals) {
var buf = [];
buf.push("<div id=\"viewer\"><div></div></div>");;return buf.join("");
}
