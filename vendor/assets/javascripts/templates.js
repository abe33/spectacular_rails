
spectacular.templates['card'] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),example = locals_.example;var result = (example.result);
var state = (result.state);
var hasExpectations = (result.expectations.length > 0);
buf.push("<div" + (jade.attrs({ "class": [('example'),(state)] }, {"class":true})) + "><div class=\"details\"><header><h3>" + (null == (jade.interp = example.fullDescription) ? "" : jade.interp) + "</h3><span class=\"state\">" + (jade.escape(null == (jade.interp = state) ? "" : jade.interp)) + "</span><span class=\"time\"><i class=\"icon-time\"></i>" + (null == (jade.interp = (example.duration / 1000) + "s") ? "" : jade.interp) + "</span></header>");
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
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('success')] }, {"data-expectation":true})) + ">" + (jade.escape(null == (jade.interp = expectation.description) ? "" : jade.interp)) + "</li>");
}
else
{
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('failure')] }, {"data-expectation":true})) + ">" + (jade.escape(null == (jade.interp = expectation.description) ? "" : jade.interp)) + "</li>");
}
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var expectation = $$obj[i];

if ( expectation.success)
{
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('success')] }, {"data-expectation":true})) + ">" + (jade.escape(null == (jade.interp = expectation.description) ? "" : jade.interp)) + "</li>");
}
else
{
buf.push("<li" + (jade.attrs({ 'data-expectation':(i), "class": [('expectation'),('failure')] }, {"data-expectation":true})) + ">" + (jade.escape(null == (jade.interp = expectation.description) ? "" : jade.interp)) + "</li>");
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

spectacular.templates['list'] = function anonymous(locals) {
var buf = [];
buf.push("<div id=\"examples\"><header class=\"header\"><button class=\"btn-open-left\"><i class=\"icon-reorder\"></i></button><button class=\"btn-open-right\"><i class=\"icon-plus\"></i></button><button class=\"btn-collapse\"><i class=\"icon-ellipsis-horizontal\"></i></button></header><div></div></div>");;return buf.join("");
}

spectacular.templates['progress'] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),seed = locals_.seed,chars = locals_.chars;buf.push("<div id=\"progress\"><span><span class=\"seed\"><i class=\"icon-random\"></i><span class=\"value\">" + (jade.escape(null == (jade.interp = seed) ? "" : jade.interp)) + "</span></span><span class=\"time\"><i class=\"icon-time\"></i><span class=\"value\">0s</span></span><span class=\"all\"><span class=\"value\">0</span>/<span class=\"total\">0</span></span><ul>");
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

buf.push("</ul></span></div>");;return buf.join("");
}

spectacular.templates['viewer'] = function anonymous(locals) {
var buf = [];
buf.push("<div id=\"viewer\"><div></div></div>");;return buf.join("");
}
