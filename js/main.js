!function(a){a.Parse=a.Parse||{},a.Parse.VERSION="js1.3.4"}(this),function(){var a=this,b=a._,c={},d=Array.prototype,e=Object.prototype,f=Function.prototype,g=d.push,h=d.slice,i=d.concat,j=e.toString,k=e.hasOwnProperty,l=d.forEach,m=d.map,n=d.reduce,o=d.reduceRight,p=d.filter,q=d.every,r=d.some,s=d.indexOf,t=d.lastIndexOf,u=Array.isArray,v=Object.keys,w=f.bind,x=function(a){return a instanceof x?a:this instanceof x?void(this._wrapped=a):new x(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=x),exports._=x):a._=x,x.VERSION="1.4.4";var y=x.each=x.forEach=function(a,b,d){if(null!=a)if(l&&a.forEach===l)a.forEach(b,d);else if(a.length===+a.length){for(var e=0,f=a.length;f>e;e++)if(b.call(d,a[e],e,a)===c)return}else for(var g in a)if(x.has(a,g)&&b.call(d,a[g],g,a)===c)return};x.map=x.collect=function(a,b,c){var d=[];return null==a?d:m&&a.map===m?a.map(b,c):(y(a,function(a,e,f){d[d.length]=b.call(c,a,e,f)}),d)};var z="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),n&&a.reduce===n)return d&&(b=x.bind(b,d)),e?a.reduce(b,c):a.reduce(b);if(y(a,function(a,f,g){e?c=b.call(d,c,a,f,g):(c=a,e=!0)}),!e)throw new TypeError(z);return c},x.reduceRight=x.foldr=function(a,b,c,d){var e=arguments.length>2;if(null==a&&(a=[]),o&&a.reduceRight===o)return d&&(b=x.bind(b,d)),e?a.reduceRight(b,c):a.reduceRight(b);var f=a.length;if(f!==+f){var g=x.keys(a);f=g.length}if(y(a,function(h,i,j){i=g?g[--f]:--f,e?c=b.call(d,c,a[i],i,j):(c=a[i],e=!0)}),!e)throw new TypeError(z);return c},x.find=x.detect=function(a,b,c){var d;return A(a,function(a,e,f){return b.call(c,a,e,f)?(d=a,!0):void 0}),d},x.filter=x.select=function(a,b,c){var d=[];return null==a?d:p&&a.filter===p?a.filter(b,c):(y(a,function(a,e,f){b.call(c,a,e,f)&&(d[d.length]=a)}),d)},x.reject=function(a,b,c){return x.filter(a,function(a,d,e){return!b.call(c,a,d,e)},c)},x.every=x.all=function(a,b,d){b||(b=x.identity);var e=!0;return null==a?e:q&&a.every===q?a.every(b,d):(y(a,function(a,f,g){return(e=e&&b.call(d,a,f,g))?void 0:c}),!!e)};var A=x.some=x.any=function(a,b,d){b||(b=x.identity);var e=!1;return null==a?e:r&&a.some===r?a.some(b,d):(y(a,function(a,f,g){return e||(e=b.call(d,a,f,g))?c:void 0}),!!e)};x.contains=x.include=function(a,b){return null==a?!1:s&&a.indexOf===s?-1!=a.indexOf(b):A(a,function(a){return a===b})},x.invoke=function(a,b){var c=h.call(arguments,2),d=x.isFunction(b);return x.map(a,function(a){return(d?b:a[b]).apply(a,c)})},x.pluck=function(a,b){return x.map(a,function(a){return a[b]})},x.where=function(a,b,c){return x.isEmpty(b)?c?null:[]:x[c?"find":"filter"](a,function(a){for(var c in b)if(b[c]!==a[c])return!1;return!0})},x.findWhere=function(a,b){return x.where(a,b,!0)},x.max=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);if(!b&&x.isEmpty(a))return-1/0;var d={computed:-1/0,value:-1/0};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g>=d.computed&&(d={value:a,computed:g})}),d.value},x.min=function(a,b,c){if(!b&&x.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);if(!b&&x.isEmpty(a))return 1/0;var d={computed:1/0,value:1/0};return y(a,function(a,e,f){var g=b?b.call(c,a,e,f):a;g<d.computed&&(d={value:a,computed:g})}),d.value},x.shuffle=function(a){var b,c=0,d=[];return y(a,function(a){b=x.random(c++),d[c-1]=d[b],d[b]=a}),d};var B=function(a){return x.isFunction(a)?a:function(b){return b[a]}};x.sortBy=function(a,b,c){var d=B(b);return x.pluck(x.map(a,function(a,b,e){return{value:a,index:b,criteria:d.call(c,a,b,e)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index<b.index?-1:1}),"value")};var C=function(a,b,c,d){var e={},f=B(b||x.identity);return y(a,function(b,g){var h=f.call(c,b,g,a);d(e,h,b)}),e};x.groupBy=function(a,b,c){return C(a,b,c,function(a,b,c){(x.has(a,b)?a[b]:a[b]=[]).push(c)})},x.countBy=function(a,b,c){return C(a,b,c,function(a,b){x.has(a,b)||(a[b]=0),a[b]++})},x.sortedIndex=function(a,b,c,d){c=null==c?x.identity:B(c);for(var e=c.call(d,b),f=0,g=a.length;g>f;){var h=f+g>>>1;c.call(d,a[h])<e?f=h+1:g=h}return f},x.toArray=function(a){return a?x.isArray(a)?h.call(a):a.length===+a.length?x.map(a,x.identity):x.values(a):[]},x.size=function(a){return null==a?0:a.length===+a.length?a.length:x.keys(a).length},x.first=x.head=x.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:h.call(a,0,b)},x.initial=function(a,b,c){return h.call(a,0,a.length-(null==b||c?1:b))},x.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:h.call(a,Math.max(a.length-b,0))},x.rest=x.tail=x.drop=function(a,b,c){return h.call(a,null==b||c?1:b)},x.compact=function(a){return x.filter(a,x.identity)};var D=function(a,b,c){return y(a,function(a){x.isArray(a)?b?g.apply(c,a):D(a,b,c):c.push(a)}),c};x.flatten=function(a,b){return D(a,b,[])},x.without=function(a){return x.difference(a,h.call(arguments,1))},x.uniq=x.unique=function(a,b,c,d){x.isFunction(b)&&(d=c,c=b,b=!1);var e=c?x.map(a,c,d):a,f=[],g=[];return y(e,function(c,d){(b?d&&g[g.length-1]===c:x.contains(g,c))||(g.push(c),f.push(a[d]))}),f},x.union=function(){return x.uniq(i.apply(d,arguments))},x.intersection=function(a){var b=h.call(arguments,1);return x.filter(x.uniq(a),function(a){return x.every(b,function(b){return x.indexOf(b,a)>=0})})},x.difference=function(a){var b=i.apply(d,h.call(arguments,1));return x.filter(a,function(a){return!x.contains(b,a)})},x.zip=function(){for(var a=h.call(arguments),b=x.max(x.pluck(a,"length")),c=new Array(b),d=0;b>d;d++)c[d]=x.pluck(a,""+d);return c},x.object=function(a,b){if(null==a)return{};for(var c={},d=0,e=a.length;e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},x.indexOf=function(a,b,c){if(null==a)return-1;var d=0,e=a.length;if(c){if("number"!=typeof c)return d=x.sortedIndex(a,b),a[d]===b?d:-1;d=0>c?Math.max(0,e+c):c}if(s&&a.indexOf===s)return a.indexOf(b,c);for(;e>d;d++)if(a[d]===b)return d;return-1},x.lastIndexOf=function(a,b,c){if(null==a)return-1;var d=null!=c;if(t&&a.lastIndexOf===t)return d?a.lastIndexOf(b,c):a.lastIndexOf(b);for(var e=d?c:a.length;e--;)if(a[e]===b)return e;return-1},x.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0),c=arguments[2]||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=0,f=new Array(d);d>e;)f[e++]=a,a+=c;return f},x.bind=function(a,b){if(a.bind===w&&w)return w.apply(a,h.call(arguments,1));var c=h.call(arguments,2);return function(){return a.apply(b,c.concat(h.call(arguments)))}},x.partial=function(a){var b=h.call(arguments,1);return function(){return a.apply(this,b.concat(h.call(arguments)))}},x.bindAll=function(a){var b=h.call(arguments,1);return 0===b.length&&(b=x.functions(a)),y(b,function(b){a[b]=x.bind(a[b],a)}),a},x.memoize=function(a,b){var c={};return b||(b=x.identity),function(){var d=b.apply(this,arguments);return x.has(c,d)?c[d]:c[d]=a.apply(this,arguments)}},x.delay=function(a,b){var c=h.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},x.defer=function(a){return x.delay.apply(x,[a,1].concat(h.call(arguments,1)))},x.throttle=function(a,b){var c,d,e,f,g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)};return function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},x.debounce=function(a,b,c){var d,e;return function(){var f=this,g=arguments,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout(h,b),i&&(e=a.apply(f,g)),e}},x.once=function(a){var b,c=!1;return function(){return c?b:(c=!0,b=a.apply(this,arguments),a=null,b)}},x.wrap=function(a,b){return function(){var c=[a];return g.apply(c,arguments),b.apply(this,c)}},x.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}},x.after=function(a,b){return 0>=a?b():function(){return--a<1?b.apply(this,arguments):void 0}},x.keys=v||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)x.has(a,c)&&(b[b.length]=c);return b},x.values=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push(a[c]);return b},x.pairs=function(a){var b=[];for(var c in a)x.has(a,c)&&b.push([c,a[c]]);return b},x.invert=function(a){var b={};for(var c in a)x.has(a,c)&&(b[a[c]]=c);return b},x.functions=x.methods=function(a){var b=[];for(var c in a)x.isFunction(a[c])&&b.push(c);return b.sort()},x.extend=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},x.pick=function(a){var b={},c=i.apply(d,h.call(arguments,1));return y(c,function(c){c in a&&(b[c]=a[c])}),b},x.omit=function(a){var b={},c=i.apply(d,h.call(arguments,1));for(var e in a)x.contains(c,e)||(b[e]=a[e]);return b},x.defaults=function(a){return y(h.call(arguments,1),function(b){if(b)for(var c in b)null==a[c]&&(a[c]=b[c])}),a},x.clone=function(a){return x.isObject(a)?x.isArray(a)?a.slice():x.extend({},a):a},x.tap=function(a,b){return b(a),a};var E=function(a,b,c,d){if(a===b)return 0!==a||1/a==1/b;if(null==a||null==b)return a===b;a instanceof x&&(a=a._wrapped),b instanceof x&&(b=b._wrapped);var e=j.call(a);if(e!=j.call(b))return!1;switch(e){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase}if("object"!=typeof a||"object"!=typeof b)return!1;for(var f=c.length;f--;)if(c[f]==a)return d[f]==b;c.push(a),d.push(b);var g=0,h=!0;if("[object Array]"==e){if(g=a.length,h=g==b.length)for(;g--&&(h=E(a[g],b[g],c,d)););}else{var i=a.constructor,k=b.constructor;if(i!==k&&!(x.isFunction(i)&&i instanceof i&&x.isFunction(k)&&k instanceof k))return!1;for(var l in a)if(x.has(a,l)&&(g++,!(h=x.has(b,l)&&E(a[l],b[l],c,d))))break;if(h){for(l in b)if(x.has(b,l)&&!g--)break;h=!g}}return c.pop(),d.pop(),h};x.isEqual=function(a,b){return E(a,b,[],[])},x.isEmpty=function(a){if(null==a)return!0;if(x.isArray(a)||x.isString(a))return 0===a.length;for(var b in a)if(x.has(a,b))return!1;return!0},x.isElement=function(a){return!(!a||1!==a.nodeType)},x.isArray=u||function(a){return"[object Array]"==j.call(a)},x.isObject=function(a){return a===Object(a)},y(["Arguments","Function","String","Number","Date","RegExp"],function(a){x["is"+a]=function(b){return j.call(b)=="[object "+a+"]"}}),x.isArguments(arguments)||(x.isArguments=function(a){return!(!a||!x.has(a,"callee"))}),"function"!=typeof/./&&(x.isFunction=function(a){return"function"==typeof a}),x.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},x.isNaN=function(a){return x.isNumber(a)&&a!=+a},x.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==j.call(a)},x.isNull=function(a){return null===a},x.isUndefined=function(a){return void 0===a},x.has=function(a,b){return k.call(a,b)},x.noConflict=function(){return a._=b,this},x.identity=function(a){return a},x.times=function(a,b,c){for(var d=Array(a),e=0;a>e;e++)d[e]=b.call(c,e);return d},x.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};var F={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};F.unescape=x.invert(F.escape);var G={escape:new RegExp("["+x.keys(F.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(F.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(a){x[a]=function(b){return null==b?"":(""+b).replace(G[a],function(b){return F[a][b]})}}),x.result=function(a,b){if(null==a)return null;var c=a[b];return x.isFunction(c)?c.call(a):c},x.mixin=function(a){y(x.functions(a),function(b){var c=x[b]=a[b];x.prototype[b]=function(){var a=[this._wrapped];return g.apply(a,arguments),L.call(this,c.apply(x,a))}})};var H=0;x.uniqueId=function(a){var b=++H+"";return a?a+b:b},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var I=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},K=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(a,b,c){var d;c=x.defaults({},c,x.templateSettings);var e=new RegExp([(c.escape||I).source,(c.interpolate||I).source,(c.evaluate||I).source].join("|")+"|$","g"),f=0,g="__p+='";a.replace(e,function(b,c,d,e,h){return g+=a.slice(f,h).replace(K,function(a){return"\\"+J[a]}),c&&(g+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(g+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(g+="';\n"+e+"\n__p+='"),f=h+b.length,b}),g+="';\n",c.variable||(g="with(obj||{}){\n"+g+"}\n"),g="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+g+"return __p;\n";try{d=new Function(c.variable||"obj","_",g)}catch(h){throw h.source=g,h}if(b)return d(b,x);var i=function(a){return d.call(this,a,x)};return i.source="function("+(c.variable||"obj")+"){\n"+g+"}",i},x.chain=function(a){return x(a).chain()};var L=function(a){return this._chain?x(a).chain():a};x.mixin(x),y(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=d[a];x.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],L.call(this,c)}}),y(["concat","join","slice"],function(a){var b=d[a];x.prototype[a]=function(){return L.call(this,b.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),function(a){a.Parse=a.Parse||{};var b=a.Parse;"undefined"!=typeof localStorage?b.localStorage=localStorage:"undefined"!=typeof require&&(b.localStorage=require("localStorage")),"undefined"!=typeof XMLHttpRequest?b.XMLHttpRequest=XMLHttpRequest:"undefined"!=typeof require&&(b.XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest),"undefined"!=typeof exports&&exports._?(b._=exports._.noConflict(),exports.Parse=b):b._=_.noConflict(),"undefined"!=typeof $&&(b.$=$);var c=function(){},d=function(a,d,e){var f;return f=d&&d.hasOwnProperty("constructor")?d.constructor:function(){a.apply(this,arguments)},b._.extend(f,a),c.prototype=a.prototype,f.prototype=new c,d&&b._.extend(f.prototype,d),e&&b._.extend(f,e),f.prototype.constructor=f,f.__super__=a.prototype,f};b.serverURL="https://api.parse.com","undefined"!=typeof process&&process.versions&&process.versions.node&&(b._isNode=!0),b.initialize=function(a,c,d){if(d)throw"Parse.initialize() was passed a Master Key, which is only allowed from within Node.js.";b._initialize(a,c)},b._initialize=function(a,c,d){b.applicationId=a,b.javaScriptKey=c,b.masterKey=d,b._useMasterKey=!1},b._isNode&&(b.initialize=b._initialize,b.Cloud=b.Cloud||{},b.Cloud.useMasterKey=function(){b._useMasterKey=!0}),b._getParsePath=function(a){if(!b.applicationId)throw"You need to call Parse.initialize before using Parse.";if(a||(a=""),!b._.isString(a))throw"Tried to get a localStorage path that wasn't a String.";return"/"===a[0]&&(a=a.substring(1)),"Parse/"+b.applicationId+"/"+a},b._installationId=null,b._getInstallationId=function(){if(b._installationId)return b._installationId;var a=b._getParsePath("installationId");if(b._installationId=b.localStorage.getItem(a),!b._installationId||""===b._installationId){var c=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};b._installationId=c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c(),b.localStorage.setItem(a,b._installationId)}return b._installationId},b._parseDate=function(a){var b=new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),c=b.exec(a);if(!c)return null;var d=c[1]||0,e=(c[2]||1)-1,f=c[3]||0,g=c[4]||0,h=c[5]||0,i=c[6]||0,j=c[8]||0;return new Date(Date.UTC(d,e,f,g,h,i,j))},b._ajaxIE8=function(a,c,d){var e=new b.Promise,f=new XDomainRequest;return f.onload=function(){var a;try{a=JSON.parse(f.responseText)}catch(b){e.reject(b)}a&&e.resolve(a)},f.onerror=f.ontimeout=function(){var a={responseText:JSON.stringify({code:b.Error.X_DOMAIN_REQUEST,error:"IE's XDomainRequest does not supply error info."})};e.reject(a)},f.onprogress=function(){},f.open(a,c),f.send(d),e},b._useXDomainRequest=function(){return"undefined"!=typeof XDomainRequest?"withCredentials"in new XMLHttpRequest?!1:!0:!1},b._ajax=function(a,c,d,e,f){var g={success:e,error:f};if(b._useXDomainRequest())return b._ajaxIE8(a,c,d)._thenRunCallbacks(g);var h=new b.Promise,i=!1,j=new b.XMLHttpRequest;return j.onreadystatechange=function(){if(4===j.readyState){if(i)return;if(i=!0,j.status>=200&&j.status<300){var a;try{a=JSON.parse(j.responseText)}catch(b){h.reject(b)}a&&h.resolve(a,j.status,j)}else h.reject(j)}},j.open(a,c,!0),j.setRequestHeader("Content-Type","text/plain"),b._isNode&&j.setRequestHeader("User-Agent","Parse/"+b.VERSION+" (NodeJS "+process.versions.node+")"),j.send(d),h._thenRunCallbacks(g)},b._extend=function(a,b){var c=d(this,a,b);return c.extend=this.extend,c},b._request=function(a){var c=a.route,d=a.className,e=a.objectId,f=a.method,g=a.useMasterKey,h=a.sessionToken,i=a.data;if(!b.applicationId)throw"You must specify your applicationId using Parse.initialize.";if(!b.javaScriptKey&&!b.masterKey)throw"You must specify a key using Parse.initialize.";if(!h){var j=b.User.current();j&&j._sessionToken&&(h=j._sessionToken)}if("batch"!==c&&"classes"!==c&&"events"!==c&&"files"!==c&&"functions"!==c&&"login"!==c&&"push"!==c&&"requestPasswordReset"!==c&&"rest_verify_analytics"!==c&&"users"!==c&&"jobs"!==c&&"config"!==c)throw"Bad route: '"+c+"'.";var k=b.serverURL;"/"!==k.charAt(k.length-1)&&(k+="/"),k+="1/"+c,d&&(k+="/"+d),e&&(k+="/"+e),i=b._.clone(i||{}),"POST"!==f&&(i._method=f,f="POST"),b._.isUndefined(g)&&(g=b._useMasterKey),i._ApplicationId=b.applicationId,g?i._MasterKey=b.masterKey:i._JavaScriptKey=b.javaScriptKey,i._ClientVersion=b.VERSION,i._InstallationId=b._getInstallationId(),h&&(i._SessionToken=h);var l=JSON.stringify(i);return b._ajax(f,k,l).then(null,function(a){var c;if(a&&a.responseText)try{var d=JSON.parse(a.responseText);c=new b.Error(d.code,d.error)}catch(e){c=new b.Error(b.Error.INVALID_JSON,"Received an error with invalid JSON from Parse: "+a.responseText)}else c=new b.Error(b.Error.CONNECTION_FAILED,"XMLHttpRequest failed: "+JSON.stringify(a));return b.Promise.error(c)})},b._getValue=function(a,c){return a&&a[c]?b._.isFunction(a[c])?a[c]():a[c]:null},b._encode=function(a,c,d){var e=b._;if(a instanceof b.Object){if(d)throw"Parse.Objects not allowed here";if(!c||e.include(c,a)||!a._hasData)return a._toPointer();if(!a.dirty())return c=c.concat(a),b._encode(a._toFullJSON(c),c,d);throw"Tried to save an object with a pointer to a new, unsaved object."}if(a instanceof b.ACL)return a.toJSON();if(e.isDate(a))return{__type:"Date",iso:a.toJSON()};if(a instanceof b.GeoPoint)return a.toJSON();if(e.isArray(a))return e.map(a,function(a){return b._encode(a,c,d)});if(e.isRegExp(a))return a.source;if(a instanceof b.Relation)return a.toJSON();if(a instanceof b.Op)return a.toJSON();if(a instanceof b.File){if(!a.url())throw"Tried to save an object containing an unsaved file.";return{__type:"File",name:a.name(),url:a.url()}}if(e.isObject(a)){var f={};return b._objectEach(a,function(a,e){f[e]=b._encode(a,c,d)}),f}return a},b._decode=function(a,c){var d=b._;if(!d.isObject(c))return c;if(d.isArray(c))return b._arrayEach(c,function(a,d){c[d]=b._decode(d,a)}),c;if(c instanceof b.Object)return c;if(c instanceof b.File)return c;if(c instanceof b.Op)return c;if(c.__op)return b.Op._decode(c);if("Pointer"===c.__type&&c.className){var e=b.Object._create(c.className);return e._finishFetch({objectId:c.objectId},!1),e}if("Object"===c.__type&&c.className){var f=c.className;delete c.__type,delete c.className;var g=b.Object._create(f);return g._finishFetch(c,!0),g}if("Date"===c.__type)return b._parseDate(c.iso);if("GeoPoint"===c.__type)return new b.GeoPoint({latitude:c.latitude,longitude:c.longitude});if("ACL"===a)return c instanceof b.ACL?c:new b.ACL(c);if("Relation"===c.__type){var h=new b.Relation(null,a);return h.targetClassName=c.className,h}if("File"===c.__type){var i=new b.File(c.name);return i._url=c.url,i}return b._objectEach(c,function(a,d){c[d]=b._decode(d,a)}),c},b._arrayEach=b._.each,b._traverse=function(a,c,d){if(a instanceof b.Object){if(d=d||[],b._.indexOf(d,a)>=0)return;return d.push(a),b._traverse(a.attributes,c,d),c(a)}return a instanceof b.Relation||a instanceof b.File?c(a):b._.isArray(a)?(b._.each(a,function(e,f){var g=b._traverse(e,c,d);g&&(a[f]=g)}),c(a)):b._.isObject(a)?(b._each(a,function(e,f){var g=b._traverse(e,c,d);g&&(a[f]=g)}),c(a)):c(a)},b._objectEach=b._each=function(a,c){var d=b._;d.isObject(a)?d.each(d.keys(a),function(b){c(a[b],b)}):d.each(a,c)},b._isNullOrUndefined=function(a){return b._.isNull(a)||b._.isUndefined(a)}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Analytics=b.Analytics||{},c.extend(b.Analytics,{track:function(a,d,e){if(a=a||"",a=a.replace(/^\s*/,""),a=a.replace(/\s*$/,""),0===a.length)throw"A name for the custom event must be provided";return c.each(d,function(a,b){if(!c.isString(b)||!c.isString(a))throw'track() dimensions expects keys and values of type "string".'}),e=e||{},b._request({route:"events",className:a,method:"POST",data:{dimensions:d}})._thenRunCallbacks(e)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Config=function(){this.attributes={},this._escapedAttributes={}},b.Config.current=function(){if(b.Config._currentConfig)return b.Config._currentConfig;var a=b.localStorage.getItem(b._getParsePath(b.Config._CURRENT_CONFIG_KEY)),c=new b.Config;return a&&(c._finishFetch(JSON.parse(a)),b.Config._currentConfig=c),c},b.Config.get=function(a){a=a||{};var c=b._request({route:"config",method:"GET"});return c.then(function(a){if(!a||!a.params){var c=new b.Error(b.Error.INVALID_JSON,"Config JSON response invalid.");return b.Promise.error(c)}var d=new b.Config;return d._finishFetch(a),b.Config._currentConfig=d,d})._thenRunCallbacks(a)},b.Config.prototype={escape:function(a){var d=this._escapedAttributes[a];if(d)return d;var e,f=this.attributes[a];return e=b._isNullOrUndefined(f)?"":c.escape(f.toString()),this._escapedAttributes[a]=e,e},get:function(a){return this.attributes[a]},_finishFetch:function(a){this.attributes=b._decode(null,c.clone(a.params)),b.localStorage.setItem(b._getParsePath(b.Config._CURRENT_CONFIG_KEY),JSON.stringify(a))}},b.Config._currentConfig=null,b.Config._CURRENT_CONFIG_KEY="currentConfig"}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Error=function(a,b){this.code=a,this.message=b},c.extend(b.Error,{OTHER_CAUSE:-1,INTERNAL_SERVER_ERROR:1,CONNECTION_FAILED:100,OBJECT_NOT_FOUND:101,INVALID_QUERY:102,INVALID_CLASS_NAME:103,MISSING_OBJECT_ID:104,INVALID_KEY_NAME:105,INVALID_POINTER:106,INVALID_JSON:107,COMMAND_UNAVAILABLE:108,NOT_INITIALIZED:109,INCORRECT_TYPE:111,INVALID_CHANNEL_NAME:112,PUSH_MISCONFIGURED:115,OBJECT_TOO_LARGE:116,OPERATION_FORBIDDEN:119,CACHE_MISS:120,INVALID_NESTED_KEY:121,INVALID_FILE_NAME:122,INVALID_ACL:123,TIMEOUT:124,INVALID_EMAIL_ADDRESS:125,MISSING_CONTENT_TYPE:126,MISSING_CONTENT_LENGTH:127,INVALID_CONTENT_LENGTH:128,FILE_TOO_LARGE:129,FILE_SAVE_ERROR:130,DUPLICATE_VALUE:137,INVALID_ROLE_NAME:139,EXCEEDED_QUOTA:140,SCRIPT_FAILED:141,VALIDATION_ERROR:142,INVALID_IMAGE_DATA:150,UNSAVED_FILE_ERROR:151,INVALID_PUSH_TIME_ERROR:152,FILE_DELETE_ERROR:153,REQUEST_LIMIT_EXCEEDED:155,INVALID_EVENT_NAME:160,USERNAME_MISSING:200,PASSWORD_MISSING:201,USERNAME_TAKEN:202,EMAIL_TAKEN:203,EMAIL_MISSING:204,EMAIL_NOT_FOUND:205,SESSION_MISSING:206,MUST_CREATE_USER_THROUGH_SIGNUP:207,ACCOUNT_ALREADY_LINKED:208,LINKED_ID_MISSING:250,INVALID_LINKED_SESSION:251,UNSUPPORTED_SERVICE:252,AGGREGATE_ERROR:600,FILE_READ_ERROR:601,X_DOMAIN_REQUEST:602})}(this),function(){var a=this,b=a.Parse||(a.Parse={}),c=/\s+/,d=Array.prototype.slice;b.Events={on:function(a,b,d){var e,f,g,h,i;if(!b)return this;for(a=a.split(c),e=this._callbacks||(this._callbacks={}),f=a.shift();f;)i=e[f],g=i?i.tail:{},g.next=h={},g.context=d,g.callback=b,e[f]={tail:h,next:i?i.next:g},f=a.shift();return this},off:function(a,b,d){var e,f,g,h,i,j;if(f=this._callbacks){if(!(a||b||d))return delete this._callbacks,this;for(a=a?a.split(c):_.keys(f),e=a.shift();e;)if(g=f[e],delete f[e],g&&(b||d)){for(h=g.tail,g=g.next;g!==h;)i=g.callback,j=g.context,(b&&i!==b||d&&j!==d)&&this.on(e,i,j),g=g.next;e=a.shift()}else e=a.shift();return this}},trigger:function(a){var b,e,f,g,h,i,j;if(!(f=this._callbacks))return this;for(i=f.all,a=a.split(c),j=d.call(arguments,1),b=a.shift();b;){if(e=f[b])for(g=e.tail;(e=e.next)!==g;)e.callback.apply(e.context||this,j);if(e=i)for(g=e.tail,h=[b].concat(j);(e=e.next)!==g;)e.callback.apply(e.context||this,h);b=a.shift()}return this}},b.Events.bind=b.Events.on,b.Events.unbind=b.Events.off}.call(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.GeoPoint=function(a,d){c.isArray(a)?(b.GeoPoint._validate(a[0],a[1]),this.latitude=a[0],this.longitude=a[1]):c.isObject(a)?(b.GeoPoint._validate(a.latitude,a.longitude),this.latitude=a.latitude,this.longitude=a.longitude):c.isNumber(a)&&c.isNumber(d)?(b.GeoPoint._validate(a,d),this.latitude=a,this.longitude=d):(this.latitude=0,this.longitude=0);var e=this;this.__defineGetter__&&this.__defineSetter__&&(this._latitude=this.latitude,this._longitude=this.longitude,this.__defineGetter__("latitude",function(){return e._latitude}),this.__defineGetter__("longitude",function(){return e._longitude}),this.__defineSetter__("latitude",function(a){b.GeoPoint._validate(a,e.longitude),e._latitude=a}),this.__defineSetter__("longitude",function(a){b.GeoPoint._validate(e.latitude,a),e._longitude=a}))},b.GeoPoint._validate=function(a,b){if(-90>a)throw"Parse.GeoPoint latitude "+a+" < -90.0.";if(a>90)throw"Parse.GeoPoint latitude "+a+" > 90.0.";if(-180>b)throw"Parse.GeoPoint longitude "+b+" < -180.0.";if(b>180)throw"Parse.GeoPoint longitude "+b+" > 180.0."},b.GeoPoint.current=function(a){var c=new b.Promise;return navigator.geolocation.getCurrentPosition(function(a){c.resolve(new b.GeoPoint({latitude:a.coords.latitude,longitude:a.coords.longitude}))},function(a){c.reject(a)}),c._thenRunCallbacks(a)},b.GeoPoint.prototype={toJSON:function(){return b.GeoPoint._validate(this.latitude,this.longitude),{__type:"GeoPoint",latitude:this.latitude,longitude:this.longitude}},radiansTo:function(a){var b=Math.PI/180,c=this.latitude*b,d=this.longitude*b,e=a.latitude*b,f=a.longitude*b,g=c-e,h=d-f,i=Math.sin(g/2),j=Math.sin(h/2),k=i*i+Math.cos(c)*Math.cos(e)*j*j;return k=Math.min(1,k),2*Math.asin(Math.sqrt(k))},kilometersTo:function(a){return 6371*this.radiansTo(a)},milesTo:function(a){return 3958.8*this.radiansTo(a)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._,d="*";b.ACL=function(a){var d=this;if(d.permissionsById={},c.isObject(a))if(a instanceof b.User)d.setReadAccess(a,!0),d.setWriteAccess(a,!0);else{if(c.isFunction(a))throw"Parse.ACL() called with a function.  Did you forget ()?";b._objectEach(a,function(a,e){if(!c.isString(e))throw"Tried to create an ACL with an invalid userId.";d.permissionsById[e]={},b._objectEach(a,function(a,b){if("read"!==b&&"write"!==b)throw"Tried to create an ACL with an invalid permission type.";if(!c.isBoolean(a))throw"Tried to create an ACL with an invalid permission value.";d.permissionsById[e][b]=a})})}},b.ACL.prototype.toJSON=function(){return c.clone(this.permissionsById)},b.ACL.prototype._setAccess=function(a,d,e){if(d instanceof b.User?d=d.id:d instanceof b.Role&&(d="role:"+d.getName()),!c.isString(d))throw"userId must be a string.";if(!c.isBoolean(e))throw"allowed must be either true or false.";var f=this.permissionsById[d];if(!f){if(!e)return;f={},this.permissionsById[d]=f}e?this.permissionsById[d][a]=!0:(delete f[a],c.isEmpty(f)&&delete f[d])},b.ACL.prototype._getAccess=function(a,c){c instanceof b.User?c=c.id:c instanceof b.Role&&(c="role:"+c.getName());var d=this.permissionsById[c];return d&&d[a]?!0:!1},b.ACL.prototype.setReadAccess=function(a,b){this._setAccess("read",a,b)},b.ACL.prototype.getReadAccess=function(a){return this._getAccess("read",a)},b.ACL.prototype.setWriteAccess=function(a,b){this._setAccess("write",a,b)},b.ACL.prototype.getWriteAccess=function(a){return this._getAccess("write",a)},b.ACL.prototype.setPublicReadAccess=function(a){this.setReadAccess(d,a)},b.ACL.prototype.getPublicReadAccess=function(){return this.getReadAccess(d)},b.ACL.prototype.setPublicWriteAccess=function(a){this.setWriteAccess(d,a)},b.ACL.prototype.getPublicWriteAccess=function(){return this.getWriteAccess(d)},b.ACL.prototype.getRoleReadAccess=function(a){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return this.getReadAccess("role:"+a);throw"role must be a Parse.Role or a String"},b.ACL.prototype.getRoleWriteAccess=function(a){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return this.getWriteAccess("role:"+a);throw"role must be a Parse.Role or a String"},b.ACL.prototype.setRoleReadAccess=function(a,d){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return void this.setReadAccess("role:"+a,d);throw"role must be a Parse.Role or a String"},b.ACL.prototype.setRoleWriteAccess=function(a,d){if(a instanceof b.Role&&(a=a.getName()),c.isString(a))return void this.setWriteAccess("role:"+a,d);throw"role must be a Parse.Role or a String"}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Op=function(){this._initialize.apply(this,arguments)},b.Op.prototype={_initialize:function(){}},c.extend(b.Op,{_extend:b._extend,_opDecoderMap:{},_registerDecoder:function(a,c){b.Op._opDecoderMap[a]=c},_decode:function(a){var c=b.Op._opDecoderMap[a.__op];return c?c(a):void 0}}),b.Op._registerDecoder("Batch",function(a){var c=null;return b._arrayEach(a.ops,function(a){a=b.Op._decode(a),c=a._mergeWithPrevious(c)}),c}),b.Op.Set=b.Op._extend({_initialize:function(a){this._value=a},value:function(){return this._value},toJSON:function(){return b._encode(this.value())},_mergeWithPrevious:function(){return this},_estimate:function(){return this.value()}}),b.Op._UNSET={},b.Op.Unset=b.Op._extend({toJSON:function(){return{__op:"Delete"}},_mergeWithPrevious:function(){return this},_estimate:function(){return b.Op._UNSET}}),b.Op._registerDecoder("Delete",function(){return new b.Op.Unset}),b.Op.Increment=b.Op._extend({_initialize:function(a){this._amount=a},amount:function(){return this._amount},toJSON:function(){return{__op:"Increment",amount:this._amount}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.amount());if(a instanceof b.Op.Set)return new b.Op.Set(a.value()+this.amount());if(a instanceof b.Op.Increment)return new b.Op.Increment(this.amount()+a.amount());throw"Op is invalid after previous op."}return this},_estimate:function(a){return a?a+this.amount():this.amount()}}),b.Op._registerDecoder("Increment",function(a){return new b.Op.Increment(a.amount)}),b.Op.Add=b.Op._extend({_initialize:function(a){this._objects=a},objects:function(){return this._objects},toJSON:function(){return{__op:"Add",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.objects());if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.Add)return new b.Op.Add(a.objects().concat(this.objects()));throw"Op is invalid after previous op."}return this},_estimate:function(a){return a?a.concat(this.objects()):c.clone(this.objects())}}),b.Op._registerDecoder("Add",function(a){return new b.Op.Add(b._decode(void 0,a.objects))}),b.Op.AddUnique=b.Op._extend({_initialize:function(a){this._objects=c.uniq(a)},objects:function(){return this._objects},toJSON:function(){return{__op:"AddUnique",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return new b.Op.Set(this.objects());if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.AddUnique)return new b.Op.AddUnique(this._estimate(a.objects()));
throw"Op is invalid after previous op."}return this},_estimate:function(a){if(a){var d=c.clone(a);return b._arrayEach(this.objects(),function(a){if(a instanceof b.Object&&a.id){var e=c.find(d,function(c){return c instanceof b.Object&&c.id===a.id});if(e){var f=c.indexOf(d,e);d[f]=a}else d.push(a)}else c.contains(d,a)||d.push(a)}),d}return c.clone(this.objects())}}),b.Op._registerDecoder("AddUnique",function(a){return new b.Op.AddUnique(b._decode(void 0,a.objects))}),b.Op.Remove=b.Op._extend({_initialize:function(a){this._objects=c.uniq(a)},objects:function(){return this._objects},toJSON:function(){return{__op:"Remove",objects:b._encode(this.objects())}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)return a;if(a instanceof b.Op.Set)return new b.Op.Set(this._estimate(a.value()));if(a instanceof b.Op.Remove)return new b.Op.Remove(c.union(a.objects(),this.objects()));throw"Op is invalid after previous op."}return this},_estimate:function(a){if(a){var d=c.difference(a,this.objects());return b._arrayEach(this.objects(),function(a){a instanceof b.Object&&a.id&&(d=c.reject(d,function(c){return c instanceof b.Object&&c.id===a.id}))}),d}return[]}}),b.Op._registerDecoder("Remove",function(a){return new b.Op.Remove(b._decode(void 0,a.objects))}),b.Op.Relation=b.Op._extend({_initialize:function(a,d){this._targetClassName=null;var e=this,f=function(a){if(a instanceof b.Object){if(!a.id)throw"You can't add an unsaved Parse.Object to a relation.";if(e._targetClassName||(e._targetClassName=a.className),e._targetClassName!==a.className)throw"Tried to create a Parse.Relation with 2 different types: "+e._targetClassName+" and "+a.className+".";return a.id}return a};this.relationsToAdd=c.uniq(c.map(a,f)),this.relationsToRemove=c.uniq(c.map(d,f))},added:function(){var a=this;return c.map(this.relationsToAdd,function(c){var d=b.Object._create(a._targetClassName);return d.id=c,d})},removed:function(){var a=this;return c.map(this.relationsToRemove,function(c){var d=b.Object._create(a._targetClassName);return d.id=c,d})},toJSON:function(){var a=null,b=null,d=this,e=function(a){return{__type:"Pointer",className:d._targetClassName,objectId:a}},f=null;return this.relationsToAdd.length>0&&(f=c.map(this.relationsToAdd,e),a={__op:"AddRelation",objects:f}),this.relationsToRemove.length>0&&(f=c.map(this.relationsToRemove,e),b={__op:"RemoveRelation",objects:f}),a&&b?{__op:"Batch",ops:[a,b]}:a||b||{}},_mergeWithPrevious:function(a){if(a){if(a instanceof b.Op.Unset)throw"You can't modify a relation after deleting it.";if(a instanceof b.Op.Relation){if(a._targetClassName&&a._targetClassName!==this._targetClassName)throw"Related object must be of class "+a._targetClassName+", but "+this._targetClassName+" was passed in.";var d=c.union(c.difference(a.relationsToAdd,this.relationsToRemove),this.relationsToAdd),e=c.union(c.difference(a.relationsToRemove,this.relationsToAdd),this.relationsToRemove),f=new b.Op.Relation(d,e);return f._targetClassName=this._targetClassName,f}throw"Op is invalid after previous op."}return this},_estimate:function(a,c,d){if(a){if(a instanceof b.Relation){if(this._targetClassName)if(a.targetClassName){if(a.targetClassName!==this._targetClassName)throw"Related object must be a "+a.targetClassName+", but a "+this._targetClassName+" was passed in."}else a.targetClassName=this._targetClassName;return a}throw"Op is invalid after previous op."}var e=new b.Relation(c,d);e.targetClassName=this._targetClassName}}),b.Op._registerDecoder("AddRelation",function(a){return new b.Op.Relation(b._decode(void 0,a.objects),[])}),b.Op._registerDecoder("RemoveRelation",function(a){return new b.Op.Relation([],b._decode(void 0,a.objects))})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Relation=function(a,b){this.parent=a,this.key=b,this.targetClassName=null},b.Relation.prototype={_ensureParentAndKey:function(a,b){if(this.parent=this.parent||a,this.key=this.key||b,this.parent!==a)throw"Internal Error. Relation retrieved from two different Objects.";if(this.key!==b)throw"Internal Error. Relation retrieved from two different keys."},add:function(a){c.isArray(a)||(a=[a]);var d=new b.Op.Relation(a,[]);this.parent.set(this.key,d),this.targetClassName=d._targetClassName},remove:function(a){c.isArray(a)||(a=[a]);var d=new b.Op.Relation([],a);this.parent.set(this.key,d),this.targetClassName=d._targetClassName},toJSON:function(){return{__type:"Relation",className:this.targetClassName}},query:function(){var a,c;return this.targetClassName?(a=b.Object._getSubclass(this.targetClassName),c=new b.Query(a)):(a=b.Object._getSubclass(this.parent.className),c=new b.Query(a),c._extraOptions.redirectClassNameForKey=this.key),c._addCondition("$relatedTo","object",this.parent._toPointer()),c._addCondition("$relatedTo","key",this.key),c}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Promise=function(){this._resolved=!1,this._rejected=!1,this._resolvedCallbacks=[],this._rejectedCallbacks=[]},c.extend(b.Promise,{_isPromisesAPlusCompliant:!1,is:function(a){return a&&a.then&&c.isFunction(a.then)},as:function(){var a=new b.Promise;return a.resolve.apply(a,arguments),a},error:function(){var a=new b.Promise;return a.reject.apply(a,arguments),a},when:function(a){var c;c=a&&b._isNullOrUndefined(a.length)?arguments:a;var d=c.length,e=!1,f=[],g=[];if(f.length=c.length,g.length=c.length,0===d)return b.Promise.as.apply(this,f);var h=new b.Promise,i=function(){d-=1,0===d&&(e?h.reject(g):h.resolve.apply(h,f))};return b._arrayEach(c,function(a,c){b.Promise.is(a)?a.then(function(a){f[c]=a,i()},function(a){g[c]=a,e=!0,i()}):(f[c]=a,i())}),h},_continueWhile:function(a,c){return a()?c().then(function(){return b.Promise._continueWhile(a,c)}):b.Promise.as()}}),c.extend(b.Promise.prototype,{resolve:function(){if(this._resolved||this._rejected)throw"A promise was resolved even though it had already been "+(this._resolved?"resolved":"rejected")+".";this._resolved=!0,this._result=arguments;var a=arguments;b._arrayEach(this._resolvedCallbacks,function(b){b.apply(this,a)}),this._resolvedCallbacks=[],this._rejectedCallbacks=[]},reject:function(a){if(this._resolved||this._rejected)throw"A promise was rejected even though it had already been "+(this._resolved?"resolved":"rejected")+".";this._rejected=!0,this._error=a,b._arrayEach(this._rejectedCallbacks,function(b){b(a)}),this._resolvedCallbacks=[],this._rejectedCallbacks=[]},then:function(a,c){var d=new b.Promise,e=function(){var c=arguments;if(a)if(b.Promise._isPromisesAPlusCompliant)try{c=[a.apply(this,c)]}catch(e){c=[b.Promise.error(e)]}else c=[a.apply(this,c)];1===c.length&&b.Promise.is(c[0])?c[0].then(function(){d.resolve.apply(d,arguments)},function(a){d.reject(a)}):d.resolve.apply(d,c)},f=function(a){var e=[];if(c){if(b.Promise._isPromisesAPlusCompliant)try{e=[c(a)]}catch(f){e=[b.Promise.error(f)]}else e=[c(a)];1===e.length&&b.Promise.is(e[0])?e[0].then(function(){d.resolve.apply(d,arguments)},function(a){d.reject(a)}):b.Promise._isPromisesAPlusCompliant?d.resolve.apply(d,e):d.reject(e[0])}else d.reject(a)},g=function(a){a.call()};b.Promise._isPromisesAPlusCompliant&&("undefined"!=typeof window&&window.setTimeout?g=function(a){window.setTimeout(a,0)}:"undefined"!=typeof process&&process.nextTick&&(g=function(a){process.nextTick(a)}));var h=this;return this._resolved?g(function(){e.apply(h,h._result)}):this._rejected?g(function(){f(h._error)}):(this._resolvedCallbacks.push(e),this._rejectedCallbacks.push(f)),d},always:function(a){return this.then(a,a)},done:function(a){return this.then(a)},fail:function(a){return this.then(null,a)},_thenRunCallbacks:function(a,d){var e;if(c.isFunction(a)){var f=a;e={success:function(a){f(a,null)},error:function(a){f(null,a)}}}else e=c.clone(a);return e=e||{},this.then(function(a){return e.success?e.success.apply(this,arguments):d&&d.trigger("sync",d,a,e),b.Promise.as.apply(b.Promise,arguments)},function(a){return e.error?c.isUndefined(d)?e.error(a):e.error(d,a):d&&d.trigger("error",d,a,e),b.Promise.error(a)})},_continueWith:function(a){return this.then(function(){return a(arguments,null)},function(b){return a(null,b)})}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._,d=function(a){if(26>a)return String.fromCharCode(65+a);if(52>a)return String.fromCharCode(97+(a-26));if(62>a)return String.fromCharCode(48+(a-52));if(62===a)return"+";if(63===a)return"/";throw"Tried to encode large digit "+a+" in base64."},e=function(a){var b=[];return b.length=Math.ceil(a.length/3),c.times(b.length,function(c){var e=a[3*c],f=a[3*c+1]||0,g=a[3*c+2]||0,h=3*c+1<a.length,i=3*c+2<a.length;b[c]=[d(e>>2&63),d(e<<4&48|f>>4&15),h?d(f<<2&60|g>>6&3):"=",i?d(63&g):"="].join("")}),b.join("")},f={ai:"application/postscript",aif:"audio/x-aiff",aifc:"audio/x-aiff",aiff:"audio/x-aiff",asc:"text/plain",atom:"application/atom+xml",au:"audio/basic",avi:"video/x-msvideo",bcpio:"application/x-bcpio",bin:"application/octet-stream",bmp:"image/bmp",cdf:"application/x-netcdf",cgm:"image/cgm","class":"application/octet-stream",cpio:"application/x-cpio",cpt:"application/mac-compactpro",csh:"application/x-csh",css:"text/css",dcr:"application/x-director",dif:"video/x-dv",dir:"application/x-director",djv:"image/vnd.djvu",djvu:"image/vnd.djvu",dll:"application/octet-stream",dmg:"application/octet-stream",dms:"application/octet-stream",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",dotx:"application/vnd.openxmlformats-officedocument.wordprocessingml.template",docm:"application/vnd.ms-word.document.macroEnabled.12",dotm:"application/vnd.ms-word.template.macroEnabled.12",dtd:"application/xml-dtd",dv:"video/x-dv",dvi:"application/x-dvi",dxr:"application/x-director",eps:"application/postscript",etx:"text/x-setext",exe:"application/octet-stream",ez:"application/andrew-inset",gif:"image/gif",gram:"application/srgs",grxml:"application/srgs+xml",gtar:"application/x-gtar",hdf:"application/x-hdf",hqx:"application/mac-binhex40",htm:"text/html",html:"text/html",ice:"x-conference/x-cooltalk",ico:"image/x-icon",ics:"text/calendar",ief:"image/ief",ifb:"text/calendar",iges:"model/iges",igs:"model/iges",jnlp:"application/x-java-jnlp-file",jp2:"image/jp2",jpe:"image/jpeg",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/x-javascript",kar:"audio/midi",latex:"application/x-latex",lha:"application/octet-stream",lzh:"application/octet-stream",m3u:"audio/x-mpegurl",m4a:"audio/mp4a-latm",m4b:"audio/mp4a-latm",m4p:"audio/mp4a-latm",m4u:"video/vnd.mpegurl",m4v:"video/x-m4v",mac:"image/x-macpaint",man:"application/x-troff-man",mathml:"application/mathml+xml",me:"application/x-troff-me",mesh:"model/mesh",mid:"audio/midi",midi:"audio/midi",mif:"application/vnd.mif",mov:"video/quicktime",movie:"video/x-sgi-movie",mp2:"audio/mpeg",mp3:"audio/mpeg",mp4:"video/mp4",mpe:"video/mpeg",mpeg:"video/mpeg",mpg:"video/mpeg",mpga:"audio/mpeg",ms:"application/x-troff-ms",msh:"model/mesh",mxu:"video/vnd.mpegurl",nc:"application/x-netcdf",oda:"application/oda",ogg:"application/ogg",pbm:"image/x-portable-bitmap",pct:"image/pict",pdb:"chemical/x-pdb",pdf:"application/pdf",pgm:"image/x-portable-graymap",pgn:"application/x-chess-pgn",pic:"image/pict",pict:"image/pict",png:"image/png",pnm:"image/x-portable-anymap",pnt:"image/x-macpaint",pntg:"image/x-macpaint",ppm:"image/x-portable-pixmap",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",potx:"application/vnd.openxmlformats-officedocument.presentationml.template",ppsx:"application/vnd.openxmlformats-officedocument.presentationml.slideshow",ppam:"application/vnd.ms-powerpoint.addin.macroEnabled.12",pptm:"application/vnd.ms-powerpoint.presentation.macroEnabled.12",potm:"application/vnd.ms-powerpoint.template.macroEnabled.12",ppsm:"application/vnd.ms-powerpoint.slideshow.macroEnabled.12",ps:"application/postscript",qt:"video/quicktime",qti:"image/x-quicktime",qtif:"image/x-quicktime",ra:"audio/x-pn-realaudio",ram:"audio/x-pn-realaudio",ras:"image/x-cmu-raster",rdf:"application/rdf+xml",rgb:"image/x-rgb",rm:"application/vnd.rn-realmedia",roff:"application/x-troff",rtf:"text/rtf",rtx:"text/richtext",sgm:"text/sgml",sgml:"text/sgml",sh:"application/x-sh",shar:"application/x-shar",silo:"model/mesh",sit:"application/x-stuffit",skd:"application/x-koan",skm:"application/x-koan",skp:"application/x-koan",skt:"application/x-koan",smi:"application/smil",smil:"application/smil",snd:"audio/basic",so:"application/octet-stream",spl:"application/x-futuresplash",src:"application/x-wais-source",sv4cpio:"application/x-sv4cpio",sv4crc:"application/x-sv4crc",svg:"image/svg+xml",swf:"application/x-shockwave-flash",t:"application/x-troff",tar:"application/x-tar",tcl:"application/x-tcl",tex:"application/x-tex",texi:"application/x-texinfo",texinfo:"application/x-texinfo",tif:"image/tiff",tiff:"image/tiff",tr:"application/x-troff",tsv:"text/tab-separated-values",txt:"text/plain",ustar:"application/x-ustar",vcd:"application/x-cdlink",vrml:"model/vrml",vxml:"application/voicexml+xml",wav:"audio/x-wav",wbmp:"image/vnd.wap.wbmp",wbmxl:"application/vnd.wap.wbxml",wml:"text/vnd.wap.wml",wmlc:"application/vnd.wap.wmlc",wmls:"text/vnd.wap.wmlscript",wmlsc:"application/vnd.wap.wmlscriptc",wrl:"model/vrml",xbm:"image/x-xbitmap",xht:"application/xhtml+xml",xhtml:"application/xhtml+xml",xls:"application/vnd.ms-excel",xml:"application/xml",xpm:"image/x-xpixmap",xsl:"application/xml",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.12",xltm:"application/vnd.ms-excel.template.macroEnabled.12",xlam:"application/vnd.ms-excel.addin.macroEnabled.12",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.12",xslt:"application/xslt+xml",xul:"application/vnd.mozilla.xul+xml",xwd:"image/x-xwindowdump",xyz:"chemical/x-xyz",zip:"application/zip"},g=function(a,c){var d=new b.Promise;if("undefined"==typeof FileReader)return b.Promise.error(new b.Error(b.Error.FILE_READ_ERROR,"Attempted to use a FileReader on an unsupported browser."));var e=new FileReader;return e.onloadend=function(){if(2!==e.readyState)return void d.reject(new b.Error(b.Error.FILE_READ_ERROR,"Error reading file."));var a=e.result,f=/^data:([^;]*);base64,(.*)$/.exec(a);return f?void d.resolve(f[2],c||f[1]):void d.reject(new b.Error(b.Error.FILE_READ_ERROR,"Unable to interpret data URL: "+a))},e.readAsDataURL(a),d};b.File=function(a,d,h){this._name=a;var i=/\.([^.]*)$/.exec(a);i&&(i=i[1].toLowerCase());var j=h||f[i]||"text/plain";if(c.isArray(d))this._source=b.Promise.as(e(d),j);else if(d&&d.base64){var k=/^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/,l=k.exec(d.base64);this._source=l&&l.length>0?b.Promise.as(4===l.length?l[3]:l[2],l[1]):b.Promise.as(d.base64,j)}else if("undefined"!=typeof File&&d instanceof File)this._source=g(d,h);else if(c.isString(d))throw"Creating a Parse.File from a String is not yet supported."},b.File.prototype={name:function(){return this._name},url:function(){return this._url},save:function(a){a=a||{};var c=this;return c._previousSave||(c._previousSave=c._source.then(function(d,e){var f={base64:d,_ContentType:e};return b._request({route:"files",className:c._name,method:"POST",data:f,useMasterKey:a.useMasterKey})}).then(function(a){return c._name=a.name,c._url=a.url,c})),c._previousSave._thenRunCallbacks(a)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Object=function(a,d){if(c.isString(a))return b.Object._create.apply(this,arguments);a=a||{},d&&d.parse&&(a=this.parse(a));var e=b._getValue(this,"defaults");if(e&&(a=c.extend({},e,a)),d&&d.collection&&(this.collection=d.collection),this._serverData={},this._opSetQueue=[{}],this.attributes={},this._hashedJSON={},this._escapedAttributes={},this.cid=c.uniqueId("c"),this.changed={},this._silent={},this._pending={},!this.set(a,{silent:!0}))throw new Error("Can't create an invalid Parse.Object");this.changed={},this._silent={},this._pending={},this._hasData=!0,this._previousAttributes=c.clone(this.attributes),this.initialize.apply(this,arguments)},b.Object.saveAll=function(a,c){return c=c||{},b.Object._deepSaveAsync(a,{useMasterKey:c.useMasterKey})._thenRunCallbacks(c)},b.Object.destroyAll=function(a,d){d=d||{};var e=function(a){a.trigger("destroy",a,a.collection,d)},f=[],g=function(a){var g=b.Promise.as();return a.length>0&&(g=g.then(function(){return b._request({route:"batch",method:"POST",useMasterKey:d.useMasterKey,data:{requests:c.map(a,function(a){return{method:"DELETE",path:"/1/classes/"+a.className+"/"+a.id}})}})}).then(function(c){b._arrayEach(a,function(a,g){if(c[g].success&&d.wait)e(a);else if(c[g].error){var h=new b.Error(c[g].error.code,c[g].error.error);h.object=a,f.push(h)}})})),g},h=b.Promise.as(),i=[];return b._arrayEach(a,function(b,c){if(b.id&&d.wait||e(b),b.id&&i.push(b),20===i.length||c+1===a.length){var f=i;i=[],h=h.then(function(){return g(f)})}}),h.then(function(){if(0===f.length)return!0;var a=new b.Error(b.Error.AGGREGATE_ERROR,"Error deleting an object in destroyAll");return a.errors=f,b.Promise.error(a)})._thenRunCallbacks(d)},b.Object.fetchAll=function(a,c){return b.Object._fetchAll(a,!0)._thenRunCallbacks(c)},b.Object.fetchAllIfNeeded=function(a,c){return b.Object._fetchAll(a,!1)._thenRunCallbacks(c)},c.extend(b.Object.prototype,b.Events,{_existed:!1,initialize:function(){},toJSON:function(){var a=this._toFullJSON();return b._arrayEach(["__type","className"],function(b){delete a[b]}),a},_toFullJSON:function(a){var d=c.clone(this.attributes);return b._objectEach(d,function(c,e){d[e]=b._encode(c,a)}),b._objectEach(this._operations,function(a,b){d[b]=a}),c.has(this,"id")&&(d.objectId=this.id),c.has(this,"createdAt")&&(d.createdAt=c.isDate(this.createdAt)?this.createdAt.toJSON():this.createdAt),c.has(this,"updatedAt")&&(d.updatedAt=c.isDate(this.updatedAt)?this.updatedAt.toJSON():this.updatedAt),d.__type="Object",d.className=this.className,d},_refreshCache:function(){var a=this;a._refreshingCache||(a._refreshingCache=!0,b._objectEach(this.attributes,function(d,e){d instanceof b.Object?d._refreshCache():c.isObject(d)&&a._resetCacheForKey(e)&&a.set(e,new b.Op.Set(d),{silent:!0})}),delete a._refreshingCache)},dirty:function(a){this._refreshCache();var b=c.last(this._opSetQueue);return a?b[a]?!0:!1:this.id?c.keys(b).length>0?!0:!1:!0},dirtyKeys:function(){return c.keys(c.last(this._opSetQueue))},_toPointer:function(){if(!this.id)throw new Error("Can't serialize an unsaved Parse.Object");return{__type:"Pointer",className:this.className,objectId:this.id}},get:function(a){return this.attributes[a]},relation:function(a){var c=this.get(a);if(c){if(!(c instanceof b.Relation))throw"Called relation() on non-relation field "+a;return c._ensureParentAndKey(this,a),c}return new b.Relation(this,a)},escape:function(a){var d=this._escapedAttributes[a];if(d)return d;var e,f=this.attributes[a];return e=b._isNullOrUndefined(f)?"":c.escape(f.toString()),this._escapedAttributes[a]=e,e},has:function(a){return!b._isNullOrUndefined(this.attributes[a])},_mergeMagicFields:function(a){var d=this,e=["id","objectId","createdAt","updatedAt"];b._arrayEach(e,function(e){a[e]&&("objectId"===e?d.id=a[e]:d[e]="createdAt"!==e&&"updatedAt"!==e||c.isDate(a[e])?a[e]:b._parseDate(a[e]),delete a[e])})},_copyServerData:function(a){var c={};b._objectEach(a,function(a,d){c[d]=b._decode(d,a)}),this._serverData=c,this._rebuildAllEstimatedData(),this._refreshCache(),this._opSetQueue=[{}],this._rebuildAllEstimatedData()},_mergeFromObject:function(a){a&&(this.id=a.id,this.createdAt=a.createdAt,this.updatedAt=a.updatedAt,this._copyServerData(a._serverData),this._hasData=!0)},_startSave:function(){this._opSetQueue.push({})},_cancelSave:function(){var a=c.first(this._opSetQueue);this._opSetQueue=c.rest(this._opSetQueue);var d=c.first(this._opSetQueue);b._objectEach(a,function(b,c){var e=a[c],f=d[c];e&&f?d[c]=f._mergeWithPrevious(e):e&&(d[c]=e)}),this._saving=this._saving-1},_finishSave:function(a){var d={};b._traverse(this.attributes,function(a){a instanceof b.Object&&a.id&&a._hasData&&(d[a.id]=a)});var e=c.first(this._opSetQueue);this._opSetQueue=c.rest(this._opSetQueue),this._applyOpSet(e,this._serverData),this._mergeMagicFields(a);var f=this;b._objectEach(a,function(a,c){f._serverData[c]=b._decode(c,a);var e=b._traverse(f._serverData[c],function(a){return a instanceof b.Object&&d[a.id]?d[a.id]:void 0});e&&(f._serverData[c]=e)}),this._rebuildAllEstimatedData(),this._saving=this._saving-1},_finishFetch:function(a,b){this._opSetQueue=[{}],this._mergeMagicFields(a),this._copyServerData(a),this._hasData=b},_applyOpSet:function(a,c){var d=this;b._objectEach(a,function(a,e){c[e]=a._estimate(c[e],d,e),c[e]===b.Op._UNSET&&delete c[e]})},_resetCacheForKey:function(a){var d=this.attributes[a];if(!(!c.isObject(d)||d instanceof b.Object||d instanceof b.File)){d=d.toJSON?d.toJSON():d;var e=JSON.stringify(d);if(this._hashedJSON[a]!==e){var f=!!this._hashedJSON[a];return this._hashedJSON[a]=e,f}}return!1},_rebuildEstimatedDataForKey:function(a){var c=this;delete this.attributes[a],this._serverData[a]&&(this.attributes[a]=this._serverData[a]),b._arrayEach(this._opSetQueue,function(d){var e=d[a];e&&(c.attributes[a]=e._estimate(c.attributes[a],c,a),c.attributes[a]===b.Op._UNSET?delete c.attributes[a]:c._resetCacheForKey(a))})},_rebuildAllEstimatedData:function(){var a=this,d=c.clone(this.attributes);this.attributes=c.clone(this._serverData),b._arrayEach(this._opSetQueue,function(c){a._applyOpSet(c,a.attributes),b._objectEach(c,function(b,c){a._resetCacheForKey(c)})}),b._objectEach(d,function(b,c){a.attributes[c]!==b&&a.trigger("change:"+c,a,a.attributes[c],{})}),b._objectEach(this.attributes,function(b,e){c.has(d,e)||a.trigger("change:"+e,a,b,{})})},set:function(a,d,e){var f;if(c.isObject(a)||b._isNullOrUndefined(a)?(f=a,b._objectEach(f,function(a,c){f[c]=b._decode(c,a)}),e=d):(f={},f[a]=b._decode(a,d)),e=e||{},!f)return this;f instanceof b.Object&&(f=f.attributes),e.unset&&b._objectEach(f,function(a,c){f[c]=new b.Op.Unset});var g=c.clone(f),h=this;if(b._objectEach(g,function(a,c){a instanceof b.Op&&(g[c]=a._estimate(h.attributes[c],h,c),g[c]===b.Op._UNSET&&delete g[c])}),!this._validate(f,e))return!1;this._mergeMagicFields(f),e.changes={};{var i=this._escapedAttributes;this._previousAttributes||{}}return b._arrayEach(c.keys(f),function(a){var d=f[a];d instanceof b.Relation&&(d.parent=h),d instanceof b.Op||(d=new b.Op.Set(d));var g=!0;d instanceof b.Op.Set&&c.isEqual(h.attributes[a],d.value)&&(g=!1),g&&(delete i[a],e.silent?h._silent[a]=!0:e.changes[a]=!0);var j=c.last(h._opSetQueue);j[a]=d._mergeWithPrevious(j[a]),h._rebuildEstimatedDataForKey(a),g?(h.changed[a]=h.attributes[a],e.silent||(h._pending[a]=!0)):(delete h.changed[a],delete h._pending[a])}),e.silent||this.change(e),this},unset:function(a,b){return b=b||{},b.unset=!0,this.set(a,null,b)},increment:function(a,d){return(c.isUndefined(d)||c.isNull(d))&&(d=1),this.set(a,new b.Op.Increment(d))},add:function(a,c){return this.set(a,new b.Op.Add([c]))},addUnique:function(a,c){return this.set(a,new b.Op.AddUnique([c]))},remove:function(a,c){return this.set(a,new b.Op.Remove([c]))},op:function(a){return c.last(this._opSetQueue)[a]},clear:function(a){a=a||{},a.unset=!0;var b=c.extend(this.attributes,this._operations);return this.set(b,a)},_getSaveJSON:function(){var a=c.clone(c.first(this._opSetQueue));return b._objectEach(a,function(b,c){a[c]=b.toJSON()}),a},_canBeSerialized:function(){return b.Object._canBeSerializedAsValue(this.attributes)},fetch:function(a){var c=this;a=a||{};var d=b._request({method:"GET",route:"classes",className:this.className,objectId:this.id,useMasterKey:a.useMasterKey});return d.then(function(a,b,d){return c._finishFetch(c.parse(a,b,d),!0),c})._thenRunCallbacks(a,this)},save:function(a,d,e){var f,g,h;if(c.isObject(a)||b._isNullOrUndefined(a)?(f=a,h=d):(f={},f[a]=d,h=e),!h&&f){var i=c.reject(f,function(a,b){return c.include(["success","error","wait"],b)});if(0===i.length){var j=!0;if(c.has(f,"success")&&!c.isFunction(f.success)&&(j=!1),c.has(f,"error")&&!c.isFunction(f.error)&&(j=!1),j)return this.save(null,f)}}h=c.clone(h)||{},h.wait&&(g=c.clone(this.attributes));var k=c.clone(h)||{};k.wait&&(k.silent=!0);var l;if(k.error=function(a,b){l=b},f&&!this.set(f,k))return b.Promise.error(l)._thenRunCallbacks(h,this);var m=this;m._refreshCache();var n=[],o=[];return b.Object._findUnsavedChildren(m.attributes,n,o),n.length+o.length>0?b.Object._deepSaveAsync(this.attributes,{useMasterKey:h.useMasterKey}).then(function(){return m.save(null,h)},function(a){return b.Promise.error(a)._thenRunCallbacks(h,m)}):(this._startSave(),this._saving=(this._saving||0)+1,this._allPreviousSaves=this._allPreviousSaves||b.Promise.as(),this._allPreviousSaves=this._allPreviousSaves._continueWith(function(){var a=m.id?"PUT":"POST",d=m._getSaveJSON(),e="classes",i=m.className;"_User"!==m.className||m.id||(e="users",i=null);var j=b._request({route:e,className:i,objectId:m.id,method:a,useMasterKey:h.useMasterKey,data:d});return j=j.then(function(a,b,d){var e=m.parse(a,b,d);return h.wait&&(e=c.extend(f||{},e)),m._finishSave(e),h.wait&&m.set(g,k),m},function(a){return m._cancelSave(),b.Promise.error(a)})._thenRunCallbacks(h,m)}),this._allPreviousSaves)},destroy:function(a){a=a||{};var c=this,d=function(){c.trigger("destroy",c,c.collection,a)};if(!this.id)return d();a.wait||d();var e=b._request({route:"classes",className:this.className,objectId:this.id,method:"DELETE",useMasterKey:a.useMasterKey});return e.then(function(){return a.wait&&d(),c})._thenRunCallbacks(a,this)},parse:function(a,d){var e=c.clone(a);return c(["createdAt","updatedAt"]).each(function(a){e[a]&&(e[a]=b._parseDate(e[a]))}),e.updatedAt||(e.updatedAt=e.createdAt),d&&(this._existed=201!==d),e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.id},change:function(a){a=a||{};var d=this._changing;this._changing=!0;var e=this;b._objectEach(this._silent,function(a){e._pending[a]=!0});var f=c.extend({},a.changes,this._silent);if(this._silent={},b._objectEach(f,function(b,c){e.trigger("change:"+c,e,e.get(c),a)}),d)return this;for(var g=function(a,b){e._pending[b]||e._silent[b]||delete e.changed[b]};!c.isEmpty(this._pending);)this._pending={},this.trigger("change",this,a),b._objectEach(this.changed,g),e._previousAttributes=c.clone(this.attributes);return this._changing=!1,this},existed:function(){return this._existed},hasChanged:function(a){return arguments.length?this.changed&&c.has(this.changed,a):!c.isEmpty(this.changed)},changedAttributes:function(a){if(!a)return this.hasChanged()?c.clone(this.changed):!1;var d={},e=this._previousAttributes;return b._objectEach(a,function(a,b){c.isEqual(e[b],a)||(d[b]=a)}),d},previous:function(a){return arguments.length&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return c.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},validate:function(a){if(c.has(a,"ACL")&&!(a.ACL instanceof b.ACL))return new b.Error(b.Error.OTHER_CAUSE,"ACL must be a Parse.ACL.");var d=!0;return b._objectEach(a,function(a,b){/^[A-Za-z][0-9A-Za-z_]*$/.test(b)||(d=!1)}),d?!1:new b.Error(b.Error.INVALID_KEY_NAME)},_validate:function(a,b){if(b.silent||!this.validate)return!0;a=c.extend({},this.attributes,a);var d=this.validate(a,b);return d?(b&&b.error?b.error(this,d,b):this.trigger("error",this,d,b),!1):!0},getACL:function(){return this.get("ACL")},setACL:function(a,b){return this.set("ACL",a,b)}}),b.Object._getSubclass=function(a){if(!c.isString(a))throw"Parse.Object._getSubclass requires a string argument.";var d=b.Object._classMap[a];return d||(d=b.Object.extend(a),b.Object._classMap[a]=d),d},b.Object._create=function(a,c,d){var e=b.Object._getSubclass(a);return new e(c,d)},b.Object._toObjectIdArray=function(a,c){if(0===a.length)return b.Promise.as(a);for(var d,e=a[0].className,f=[],g=0;g<a.length;g++){var h=a[g];if(e!==h.className)return d=new b.Error(b.Error.INVALID_CLASS_NAME,"All objects should be of the same class"),b.Promise.error(d);if(!h.id)return d=new b.Error(b.Error.MISSING_OBJECT_ID,"All objects must have an ID"),b.Promise.error(d);c&&h._hasData||f.push(h.id)}return b.Promise.as(f)},b.Object._updateWithFetchedResults=function(a,c,d){var e={};b._arrayEach(c,function(a){e[a.id]=a});for(var f=0;f<a.length;f++){var g=a[f],h=e[g.id];if(!h&&d){var i=new b.Error(b.Error.OBJECT_NOT_FOUND,"All objects must exist on the server");return b.Promise.error(i)}g._mergeFromObject(h)}return b.Promise.as(a)},b.Object._fetchAll=function(a,c){if(0===a.length)return b.Promise.as(a);var d=!c;return b.Object._toObjectIdArray(a,d).then(function(c){var d=a[0].className,e=new b.Query(d);return e.containedIn("objectId",c),e.limit=c.length,e.find()}).then(function(d){return b.Object._updateWithFetchedResults(a,d,c)})},b.Object._classMap={},b.Object._extend=b._extend,b.Object.extend=function(a,d,e){if(!c.isString(a)){if(a&&c.has(a,"className"))return b.Object.extend(a.className,a,d);throw new Error("Parse.Object.extend's first argument should be the className.")}"User"===a&&b.User._performUserRewrite&&(a="_User"),d=d||{},d.className=a;var f=null;if(c.has(b.Object._classMap,a)){var g=b.Object._classMap[a];f=g._extend(d,e)}else f=this._extend(d,e);return f.extend=function(d){if(c.isString(d)||d&&c.has(d,"className"))return b.Object.extend.apply(f,arguments);var e=[a].concat(b._.toArray(arguments));return b.Object.extend.apply(f,e)},b.Object._classMap[a]=f,f},b.Object._findUnsavedChildren=function(a,c,d){b._traverse(a,function(a){return a instanceof b.Object?(a._refreshCache(),void(a.dirty()&&c.push(a))):a instanceof b.File?void(a.url()||d.push(a)):void 0})},b.Object._canBeSerializedAsValue=function(a){if(a instanceof b.Object)return!!a.id;if(a instanceof b.File)return!0;var d=!0;return c.isArray(a)?b._arrayEach(a,function(a){b.Object._canBeSerializedAsValue(a)||(d=!1)}):c.isObject(a)&&b._objectEach(a,function(a){b.Object._canBeSerializedAsValue(a)||(d=!1)}),d},b.Object._deepSaveAsync=function(a,d){var e=[],f=[];b.Object._findUnsavedChildren(a,e,f);var g=b.Promise.as();c.each(f,function(a){g=g.then(function(){return a.save(d)})});var h=c.uniq(e),i=c.uniq(h);return g.then(function(){return b.Promise._continueWhile(function(){return i.length>0},function(){var a=[],e=[];if(b._arrayEach(i,function(b){return a.length>20?void e.push(b):void(b._canBeSerialized()?a.push(b):e.push(b))}),i=e,0===a.length)return b.Promise.error(new b.Error(b.Error.OTHER_CAUSE,"Tried to save a batch with a cycle."));var f=b.Promise.when(c.map(a,function(a){return a._allPreviousSaves||b.Promise.as()})),g=new b.Promise;return b._arrayEach(a,function(a){a._allPreviousSaves=g}),f._continueWith(function(){return b._request({route:"batch",method:"POST",useMasterKey:d.useMasterKey,data:{requests:c.map(a,function(a){var b=a._getSaveJSON(),c="POST",d="/1/classes/"+a.className;return a.id&&(d=d+"/"+a.id,c="PUT"),a._startSave(),{method:c,path:d,body:b}})}}).then(function(c,d,e){var f;return b._arrayEach(a,function(a,b){c[b].success?a._finishSave(a.parse(c[b].success,d,e)):(f=f||c[b].error,a._cancelSave())}),f?b.Promise.error(new b.Error(f.code,f.error)):void 0}).then(function(a){return g.resolve(a),a},function(a){return g.reject(a),b.Promise.error(a)})})})}).then(function(){return a})}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Role=b.Object.extend("_Role",{constructor:function(a,d){c.isString(a)&&d instanceof b.ACL?(b.Object.prototype.constructor.call(this,null,null),this.setName(a),this.setACL(d)):b.Object.prototype.constructor.call(this,a,d)},getName:function(){return this.get("name")},setName:function(a,b){return this.set("name",a,b)},getUsers:function(){return this.relation("users")},getRoles:function(){return this.relation("roles")},validate:function(a,d){if("name"in a&&a.name!==this.getName()){var e=a.name;if(this.id&&this.id!==a.objectId)return new b.Error(b.Error.OTHER_CAUSE,"A role's name can only be set before it has been saved.");
if(!c.isString(e))return new b.Error(b.Error.OTHER_CAUSE,"A role's name must be a String.");if(!/^[0-9a-zA-Z\-_ ]+$/.test(e))return new b.Error(b.Error.OTHER_CAUSE,"A role's name can only contain alphanumeric characters, _, -, and spaces.")}return b.Object.prototype.validate?b.Object.prototype.validate.call(this,a,d):!1}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Collection=function(a,b){b=b||{},b.comparator&&(this.comparator=b.comparator),b.model&&(this.model=b.model),b.query&&(this.query=b.query),this._reset(),this.initialize.apply(this,arguments),a&&this.reset(a,{silent:!0,parse:b.parse})},c.extend(b.Collection.prototype,b.Events,{model:b.Object,initialize:function(){},toJSON:function(){return this.map(function(a){return a.toJSON()})},add:function(a,d){var e,f,g,h,i,j,k={},l={};for(d=d||{},a=c.isArray(a)?a.slice():[a],e=0,g=a.length;g>e;e++){if(a[e]=this._prepareModel(a[e],d),h=a[e],!h)throw new Error("Can't add an invalid model to a collection");if(i=h.cid,k[i]||this._byCid[i])throw new Error("Duplicate cid: can't add the same model to a collection twice");if(j=h.id,!b._isNullOrUndefined(j)&&(l[j]||this._byId[j]))throw new Error("Duplicate id: can't add the same model to a collection twice");l[j]=h,k[i]=h}for(e=0;g>e;e++)(h=a[e]).on("all",this._onModelEvent,this),this._byCid[h.cid]=h,h.id&&(this._byId[h.id]=h);if(this.length+=g,f=b._isNullOrUndefined(d.at)?this.models.length:d.at,this.models.splice.apply(this.models,[f,0].concat(a)),this.comparator&&this.sort({silent:!0}),d.silent)return this;for(e=0,g=this.models.length;g>e;e++)h=this.models[e],k[h.cid]&&(d.index=e,h.trigger("add",h,this,d));return this},remove:function(a,b){var d,e,f,g;for(b=b||{},a=c.isArray(a)?a.slice():[a],d=0,e=a.length;e>d;d++)g=this.getByCid(a[d])||this.get(a[d]),g&&(delete this._byId[g.id],delete this._byCid[g.cid],f=this.indexOf(g),this.models.splice(f,1),this.length--,b.silent||(b.index=f,g.trigger("remove",g,this,b)),this._removeReference(g));return this},get:function(a){return a&&this._byId[a.id||a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},sort:function(a){if(a=a||{},!this.comparator)throw new Error("Cannot sort a set without a comparator");var b=c.bind(this.comparator,this);return 1===this.comparator.length?this.models=this.sortBy(b):this.models.sort(b),a.silent||this.trigger("reset",this,a),this},pluck:function(a){return c.map(this.models,function(b){return b.get(a)})},reset:function(a,c){var d=this;return a=a||[],c=c||{},b._arrayEach(this.models,function(a){d._removeReference(a)}),this._reset(),this.add(a,{silent:!0,parse:c.parse}),c.silent||this.trigger("reset",this,c),this},fetch:function(a){a=c.clone(a)||{},void 0===a.parse&&(a.parse=!0);var d=this,e=this.query||new b.Query(this.model);return e.find({useMasterKey:a.useMasterKey}).then(function(b){return a.add?d.add(b,a):d.reset(b,a),d})._thenRunCallbacks(a,this)},create:function(a,b){var d=this;if(b=b?c.clone(b):{},a=this._prepareModel(a,b),!a)return!1;b.wait||d.add(a,b);var e=b.success;return b.success=function(c,f){b.wait&&d.add(c,b),e?e(c,f):c.trigger("sync",a,f,b)},a.save(null,b),a},parse:function(a){return a},chain:function(){return c(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(a,c){if(a instanceof b.Object)a.collection||(a.collection=this);else{var d=a;c.collection=this,a=new this.model(d,c),a._validate(a.attributes,c)||(a=!1)}return a},_removeReference:function(a){this===a.collection&&delete a.collection,a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"!==a&&"remove"!==a||c===this)&&("destroy"===a&&this.remove(b,d),b&&"change:objectId"===a&&(delete this._byId[b.previous("objectId")],this._byId[b.id]=b),this.trigger.apply(this,arguments))}});var d=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];b._arrayEach(d,function(a){b.Collection.prototype[a]=function(){return c[a].apply(c,[this.models].concat(c.toArray(arguments)))}}),b.Collection.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.View=function(a){this.cid=c.uniqueId("view"),this._configure(a||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()};var d=/^(\S+)\s*(.*)$/,e=["model","collection","el","id","attributes","className","tagName"];c.extend(b.View.prototype,b.Events,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(a,c,d){var e=document.createElement(a);return c&&b.$(e).attr(c),d&&b.$(e).html(d),e},setElement:function(a,c){return this.$el=b.$(a),this.el=this.$el[0],c!==!1&&this.delegateEvents(),this},delegateEvents:function(a){if(a=a||b._getValue(this,"events")){this.undelegateEvents();var e=this;b._objectEach(a,function(b,f){if(c.isFunction(b)||(b=e[a[f]]),!b)throw new Error('Event "'+a[f]+'" does not exist');var g=f.match(d),h=g[1],i=g[2];b=c.bind(b,e),h+=".delegateEvents"+e.cid,""===i?e.$el.bind(h,b):e.$el.delegate(i,h,b)})}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=c.extend({},this.options,a));var b=this;c.each(e,function(c){a[c]&&(b[c]=a[c])}),this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var a=b._getValue(this,"attributes")||{};this.id&&(a.id=this.id),this.className&&(a["class"]=this.className),this.setElement(this.make(this.tagName,a),!1)}}}),b.View.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.User=b.Object.extend("_User",{_isCurrentUser:!1,_mergeFromObject:function(a){a.getSessionToken()&&(this._sessionToken=a.getSessionToken()),b.User.__super__._mergeFromObject.call(this,a)},_mergeMagicFields:function(a){a.sessionToken&&(this._sessionToken=a.sessionToken,delete a.sessionToken),b.User.__super__._mergeMagicFields.call(this,a)},_cleanupAuthData:function(){if(this.isCurrent()){var a=this.get("authData");a&&b._objectEach(this.get("authData"),function(b,c){a[c]||delete a[c]})}},_synchronizeAllAuthData:function(){var a=this.get("authData");if(a){var c=this;b._objectEach(this.get("authData"),function(a,b){c._synchronizeAuthData(b)})}},_synchronizeAuthData:function(a){if(this.isCurrent()){var d;c.isString(a)?(d=a,a=b.User._authProviders[d]):d=a.getAuthType();var e=this.get("authData");if(e&&a){var f=a.restoreAuthentication(e[d]);f||this._unlinkFrom(a)}}},_handleSaveResult:function(a){a&&(this._isCurrentUser=!0),this._cleanupAuthData(),this._synchronizeAllAuthData(),delete this._serverData.password,this._rebuildEstimatedDataForKey("password"),this._refreshCache(),(a||this.isCurrent())&&b.User._saveCurrentUser(this)},_linkWith:function(a,d){var e;if(c.isString(a)?(e=a,a=b.User._authProviders[a]):e=a.getAuthType(),c.has(d,"authData")){var f=this.get("authData")||{};f[e]=d.authData,this.set("authData",f);var g=c.clone(d)||{};return g.success=function(a){a._handleSaveResult(!0),d.success&&d.success.apply(this,arguments)},this.save({authData:f},g)}var h=this,i=new b.Promise;return a.authenticate({success:function(a,b){h._linkWith(a,{authData:b,success:d.success,error:d.error}).then(function(){i.resolve(h)})},error:function(a,b){d.error&&d.error(h,b),i.reject(b)}}),i},_unlinkFrom:function(a,d){var e;c.isString(a)?(e=a,a=b.User._authProviders[a]):e=a.getAuthType();var f=c.clone(d),g=this;return f.authData=null,f.success=function(){g._synchronizeAuthData(a),d.success&&d.success.apply(this,arguments)},this._linkWith(a,f)},_isLinked:function(a){var b;b=c.isString(a)?a:a.getAuthType();var d=this.get("authData")||{};return!!d[b]},_logOutWithAll:function(){var a=this.get("authData");if(a){var c=this;b._objectEach(this.get("authData"),function(a,b){c._logOutWith(b)})}},_logOutWith:function(a){this.isCurrent()&&(c.isString(a)&&(a=b.User._authProviders[a]),a&&a.deauthenticate&&a.deauthenticate())},signUp:function(a,d){var e;d=d||{};var f=a&&a.username||this.get("username");if(!f||""===f)return e=new b.Error(b.Error.OTHER_CAUSE,"Cannot sign up user with an empty name."),d&&d.error&&d.error(this,e),b.Promise.error(e);var g=a&&a.password||this.get("password");if(!g||""===g)return e=new b.Error(b.Error.OTHER_CAUSE,"Cannot sign up user with an empty password."),d&&d.error&&d.error(this,e),b.Promise.error(e);var h=c.clone(d);return h.success=function(a){a._handleSaveResult(!0),d.success&&d.success.apply(this,arguments)},this.save(a,h)},logIn:function(a){var c=this;a=a||{};var d=b._request({route:"login",method:"GET",useMasterKey:a.useMasterKey,data:this.toJSON()});return d.then(function(a,b,d){var e=c.parse(a,b,d);return c._finishFetch(e),c._handleSaveResult(!0),c})._thenRunCallbacks(a,this)},save:function(a,d,e){var f,g;c.isObject(a)||c.isNull(a)||c.isUndefined(a)?(f=a,g=d):(f={},f[a]=d,g=e),g=g||{};var h=c.clone(g);return h.success=function(a){a._handleSaveResult(!1),g.success&&g.success.apply(this,arguments)},b.Object.prototype.save.call(this,f,h)},fetch:function(a){var d=a?c.clone(a):{};return d.success=function(b){b._handleSaveResult(!1),a&&a.success&&a.success.apply(this,arguments)},b.Object.prototype.fetch.call(this,d)},isCurrent:function(){return this._isCurrentUser},getUsername:function(){return this.get("username")},setUsername:function(a,b){return this.set("username",a,b)},setPassword:function(a,b){return this.set("password",a,b)},getEmail:function(){return this.get("email")},setEmail:function(a,b){return this.set("email",a,b)},authenticated:function(){return!!this._sessionToken&&b.User.current()&&b.User.current().id===this.id},getSessionToken:function(){return this._sessionToken}},{_currentUser:null,_currentUserMatchesDisk:!1,_CURRENT_USER_KEY:"currentUser",_authProviders:{},_performUserRewrite:!0,signUp:function(a,c,d,e){d=d||{},d.username=a,d.password=c;var f=b.Object._create("_User");return f.signUp(d,e)},logIn:function(a,c,d){var e=b.Object._create("_User");return e._finishFetch({username:a,password:c}),e.logIn(d)},become:function(a,c){c=c||{};var d=b.Object._create("_User");return b._request({route:"users",className:"me",method:"GET",useMasterKey:c.useMasterKey,sessionToken:a}).then(function(a,b,c){var e=d.parse(a,b,c);return d._finishFetch(e),d._handleSaveResult(!0),d})._thenRunCallbacks(c,d)},logOut:function(){null!==b.User._currentUser&&(b.User._currentUser._logOutWithAll(),b.User._currentUser._isCurrentUser=!1),b.User._currentUserMatchesDisk=!0,b.User._currentUser=null,b.localStorage.removeItem(b._getParsePath(b.User._CURRENT_USER_KEY))},requestPasswordReset:function(a,c){c=c||{};var d=b._request({route:"requestPasswordReset",method:"POST",useMasterKey:c.useMasterKey,data:{email:a}});return d._thenRunCallbacks(c)},current:function(){if(b.User._currentUser)return b.User._currentUser;if(b.User._currentUserMatchesDisk)return b.User._currentUser;b.User._currentUserMatchesDisk=!0;var a=b.localStorage.getItem(b._getParsePath(b.User._CURRENT_USER_KEY));if(!a)return null;b.User._currentUser=b.Object._create("_User"),b.User._currentUser._isCurrentUser=!0;var c=JSON.parse(a);return b.User._currentUser.id=c._id,delete c._id,b.User._currentUser._sessionToken=c._sessionToken,delete c._sessionToken,b.User._currentUser._finishFetch(c),b.User._currentUser._synchronizeAllAuthData(),b.User._currentUser._refreshCache(),b.User._currentUser._opSetQueue=[{}],b.User._currentUser},allowCustomUserClass:function(a){this._performUserRewrite=!a},_saveCurrentUser:function(a){b.User._currentUser!==a&&b.User.logOut(),a._isCurrentUser=!0,b.User._currentUser=a,b.User._currentUserMatchesDisk=!0;var c=a.toJSON();c._id=a.id,c._sessionToken=a._sessionToken,b.localStorage.setItem(b._getParsePath(b.User._CURRENT_USER_KEY),JSON.stringify(c))},_registerAuthenticationProvider:function(a){b.User._authProviders[a.getAuthType()]=a,b.User.current()&&b.User.current()._synchronizeAuthData(a.getAuthType())},_logInWith:function(a,c){var d=b.Object._create("_User");return d._linkWith(a,c)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Query=function(a){c.isString(a)&&(a=b.Object._getSubclass(a)),this.objectClass=a,this.className=a.prototype.className,this._where={},this._include=[],this._limit=-1,this._skip=0,this._extraOptions={}},b.Query.or=function(){var a=c.toArray(arguments),d=null;b._arrayEach(a,function(a){if(c.isNull(d)&&(d=a.className),d!==a.className)throw"All queries must be for the same class"});var e=new b.Query(d);return e._orQuery(a),e},b.Query.prototype={get:function(a,d){var e=this;e.equalTo("objectId",a);var f={};return d&&c.has(d,"useMasterKey")&&(f={useMasterKey:d.useMasterKey}),e.first(f).then(function(a){if(a)return a;var c=new b.Error(b.Error.OBJECT_NOT_FOUND,"Object not found.");return b.Promise.error(c)})._thenRunCallbacks(d,null)},toJSON:function(){var a={where:this._where};return this._include.length>0&&(a.include=this._include.join(",")),this._select&&(a.keys=this._select.join(",")),this._limit>=0&&(a.limit=this._limit),this._skip>0&&(a.skip=this._skip),void 0!==this._order&&(a.order=this._order.join(",")),b._objectEach(this._extraOptions,function(b,c){a[c]=b}),a},find:function(a){var d=this;a=a||{};var e=b._request({route:"classes",className:this.className,method:"GET",useMasterKey:a.useMasterKey,data:this.toJSON()});return e.then(function(a){return c.map(a.results,function(c){var e;return e=a.className?new b.Object(a.className):new d.objectClass,e._finishFetch(c,!0),e})})._thenRunCallbacks(a)},count:function(a){var c=this;a=a||{};var d=this.toJSON();d.limit=0,d.count=1;var e=b._request({route:"classes",className:c.className,method:"GET",useMasterKey:a.useMasterKey,data:d});return e.then(function(a){return a.count})._thenRunCallbacks(a)},first:function(a){var d=this;a=a||{};var e=this.toJSON();e.limit=1;var f=b._request({route:"classes",className:this.className,method:"GET",useMasterKey:a.useMasterKey,data:e});return f.then(function(a){return c.map(a.results,function(c){var e;return e=a.className?new b.Object(a.className):new d.objectClass,e._finishFetch(c,!0),e})[0]})._thenRunCallbacks(a)},collection:function(a,d){return d=d||{},new b.Collection(a,c.extend(d,{model:this.objectClass,query:this}))},skip:function(a){return this._skip=a,this},limit:function(a){return this._limit=a,this},equalTo:function(a,d){return c.isUndefined(d)?this.doesNotExist(a):(this._where[a]=b._encode(d),this)},_addCondition:function(a,c,d){return this._where[a]||(this._where[a]={}),this._where[a][c]=b._encode(d),this},notEqualTo:function(a,b){return this._addCondition(a,"$ne",b),this},lessThan:function(a,b){return this._addCondition(a,"$lt",b),this},greaterThan:function(a,b){return this._addCondition(a,"$gt",b),this},lessThanOrEqualTo:function(a,b){return this._addCondition(a,"$lte",b),this},greaterThanOrEqualTo:function(a,b){return this._addCondition(a,"$gte",b),this},containedIn:function(a,b){return this._addCondition(a,"$in",b),this},notContainedIn:function(a,b){return this._addCondition(a,"$nin",b),this},containsAll:function(a,b){return this._addCondition(a,"$all",b),this},exists:function(a){return this._addCondition(a,"$exists",!0),this},doesNotExist:function(a){return this._addCondition(a,"$exists",!1),this},matches:function(a,b,c){return this._addCondition(a,"$regex",b),c||(c=""),b.ignoreCase&&(c+="i"),b.multiline&&(c+="m"),c&&c.length&&this._addCondition(a,"$options",c),this},matchesQuery:function(a,b){var c=b.toJSON();return c.className=b.className,this._addCondition(a,"$inQuery",c),this},doesNotMatchQuery:function(a,b){var c=b.toJSON();return c.className=b.className,this._addCondition(a,"$notInQuery",c),this},matchesKeyInQuery:function(a,b,c){var d=c.toJSON();return d.className=c.className,this._addCondition(a,"$select",{key:b,query:d}),this},doesNotMatchKeyInQuery:function(a,b,c){var d=c.toJSON();return d.className=c.className,this._addCondition(a,"$dontSelect",{key:b,query:d}),this},_orQuery:function(a){var b=c.map(a,function(a){return a.toJSON().where});return this._where.$or=b,this},_quote:function(a){return"\\Q"+a.replace("\\E","\\E\\\\E\\Q")+"\\E"},contains:function(a,b){return this._addCondition(a,"$regex",this._quote(b)),this},startsWith:function(a,b){return this._addCondition(a,"$regex","^"+this._quote(b)),this},endsWith:function(a,b){return this._addCondition(a,"$regex",this._quote(b)+"$"),this},ascending:function(){return this._order=[],this.addAscending.apply(this,arguments)},addAscending:function(){var a=this;return this._order||(this._order=[]),b._arrayEach(arguments,function(b){Array.isArray(b)&&(b=b.join()),a._order=a._order.concat(b.replace(/\s/g,"").split(","))}),this},descending:function(){return this._order=[],this.addDescending.apply(this,arguments)},addDescending:function(){var a=this;return this._order||(this._order=[]),b._arrayEach(arguments,function(b){Array.isArray(b)&&(b=b.join()),a._order=a._order.concat(c.map(b.replace(/\s/g,"").split(","),function(a){return"-"+a}))}),this},near:function(a,c){return c instanceof b.GeoPoint||(c=new b.GeoPoint(c)),this._addCondition(a,"$nearSphere",c),this},withinRadians:function(a,b,c){return this.near(a,b),this._addCondition(a,"$maxDistance",c),this},withinMiles:function(a,b,c){return this.withinRadians(a,b,c/3958.8)},withinKilometers:function(a,b,c){return this.withinRadians(a,b,c/6371)},withinGeoBox:function(a,c,d){return c instanceof b.GeoPoint||(c=new b.GeoPoint(c)),d instanceof b.GeoPoint||(d=new b.GeoPoint(d)),this._addCondition(a,"$within",{$box:[c,d]}),this},include:function(){var a=this;return b._arrayEach(arguments,function(b){c.isArray(b)?a._include=a._include.concat(b):a._include.push(b)}),this},select:function(){var a=this;return this._select=this._select||[],b._arrayEach(arguments,function(b){c.isArray(b)?a._select=a._select.concat(b):a._select.push(b)}),this},each:function(a,d){if(d=d||{},this._order||this._skip||this._limit>=0){var e="Cannot iterate on a query with sort, skip, or limit.";return b.Promise.error(e)._thenRunCallbacks(d)}var f=(new b.Promise,new b.Query(this.objectClass));f._limit=d.batchSize||100,f._where=c.clone(this._where),f._include=c.clone(this._include),f.ascending("objectId");var g={};c.has(d,"useMasterKey")&&(g.useMasterKey=d.useMasterKey);var h=!1;return b.Promise._continueWhile(function(){return!h},function(){return f.find(g).then(function(c){var d=b.Promise.as();return b._.each(c,function(b){d=d.then(function(){return a(b)})}),d.then(function(){c.length>=f._limit?f.greaterThan("objectId",c[c.length-1].id):h=!0})})})._thenRunCallbacks(d)}}}(this),function(a){a.Parse=a.Parse||{};var b,c,d=a.Parse,e=d._,f=!1,g={authenticate:function(a){var c=this;FB.login(function(b){b.authResponse?a.success&&a.success(c,{id:b.authResponse.userID,access_token:b.authResponse.accessToken,expiration_date:new Date(1e3*b.authResponse.expiresIn+(new Date).getTime()).toJSON()}):a.error&&a.error(c,b)},{scope:b})},restoreAuthentication:function(a){if(a){var b={userID:a.id,accessToken:a.access_token,expiresIn:(d._parseDate(a.expiration_date).getTime()-(new Date).getTime())/1e3},f=e.clone(c);f.authResponse=b,f.status=!1;var g=FB.getAuthResponse();g&&g.userID!==b.userID&&FB.logout(),FB.init(f)}return!0},getAuthType:function(){return"facebook"},deauthenticate:function(){this.restoreAuthentication(null)}};d.FacebookUtils={init:function(a){if("undefined"==typeof FB)throw"The Facebook JavaScript SDK must be loaded before calling init.";if(c=e.clone(a)||{},c.status&&"undefined"!=typeof console){var b=console.warn||console.log||function(){};b.call(console,"The 'status' flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.")}c.status=!1,FB.init(c),d.User._registerAuthenticationProvider(g),f=!0},isLinked:function(a){return a._isLinked("facebook")},logIn:function(a,c){if(!a||e.isString(a)){if(!f)throw"You must initialize FacebookUtils before calling logIn.";return b=a,d.User._logInWith("facebook",c)}var g=e.clone(c)||{};return g.authData=a,d.User._logInWith("facebook",g)},link:function(a,c,d){if(!c||e.isString(c)){if(!f)throw"You must initialize FacebookUtils before calling link.";return b=c,a._linkWith("facebook",d)}var g=e.clone(d)||{};return g.authData=c,a._linkWith("facebook",g)},unlink:function(a,b){if(!f)throw"You must initialize FacebookUtils before calling unlink.";return a._unlinkFrom("facebook",b)}}}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.History=function(){this.handlers=[],c.bindAll(this,"checkUrl")};var d=/^[#\/]/,e=/msie [\w.]+/;b.History.started=!1,c.extend(b.History.prototype,b.Events,{interval:50,getHash:function(a){var b=a?a.location:window.location,c=b.href.match(/#(.*)$/);return c?c[1]:""},getFragment:function(a,c){if(b._isNullOrUndefined(a))if(this._hasPushState||c){a=window.location.pathname;var e=window.location.search;e&&(a+=e)}else a=this.getHash();return a.indexOf(this.options.root)||(a=a.substr(this.options.root.length)),a.replace(d,"")},start:function(a){if(b.History.started)throw new Error("Parse.history has already been started");b.History.started=!0,this.options=c.extend({},{root:"/"},this.options,a),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var f=this.getFragment(),g=document.documentMode,h=e.exec(navigator.userAgent.toLowerCase())&&(!g||7>=g);h&&(this.iframe=b.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(f)),this._hasPushState?b.$(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!h?b.$(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=window.setInterval(this.checkUrl,this.interval)),this.fragment=f;var i=window.location,j=i.pathname===this.options.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!j?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&j&&i.hash&&(this.fragment=this.getHash().replace(d,""),window.history.replaceState({},document.title,i.protocol+"//"+i.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){b.$(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),window.clearInterval(this._checkUrlInterval),b.History.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();return a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe))),a===this.fragment?!1:(this.iframe&&this.navigate(a),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(a){var b=this.fragment=this.getFragment(a),d=c.any(this.handlers,function(a){return a.route.test(b)?(a.callback(b),!0):void 0});return d},navigate:function(a,c){if(!b.History.started)return!1;c&&c!==!0||(c={trigger:c});var e=(a||"").replace(d,"");if(this.fragment!==e){if(this._hasPushState){0!==e.indexOf(this.options.root)&&(e=this.options.root+e),this.fragment=e;var f=c.replace?"replaceState":"pushState";window.history[f]({},document.title,e)}else this._wantsHashChange?(this.fragment=e,this._updateHash(window.location,e,c.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(c.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,c.replace))):window.location.assign(this.options.root+a);c.trigger&&this.loadUrl(a)}},_updateHash:function(a,b,c){if(c){var d=a.toString().replace(/(javascript:|#).*$/,"");a.replace(d+"#"+b)}else a.hash=b}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Router=function(a){a=a||{},a.routes&&(this.routes=a.routes),this._bindRoutes(),this.initialize.apply(this,arguments)};var d=/:\w+/g,e=/\*\w+/g,f=/[\-\[\]{}()+?.,\\\^\$\|#\s]/g;c.extend(b.Router.prototype,b.Events,{initialize:function(){},route:function(a,d,e){return b.history=b.history||new b.History,c.isRegExp(a)||(a=this._routeToRegExp(a)),e||(e=this[d]),b.history.route(a,c.bind(function(c){var f=this._extractParameters(a,c);e&&e.apply(this,f),this.trigger.apply(this,["route:"+d].concat(f)),b.history.trigger("route",this,d,f)},this)),this},navigate:function(a,c){b.history.navigate(a,c)},_bindRoutes:function(){if(this.routes){var a=[];for(var b in this.routes)this.routes.hasOwnProperty(b)&&a.unshift([b,this.routes[b]]);for(var c=0,d=a.length;d>c;c++)this.route(a[c][0],a[c][1],this[a[c][1]])}},_routeToRegExp:function(a){return a=a.replace(f,"\\$&").replace(d,"([^/]+)").replace(e,"(.*?)"),new RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}}),b.Router.extend=b._extend}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse,c=b._;b.Cloud=b.Cloud||{},c.extend(b.Cloud,{run:function(a,c,d){d=d||{};var e=b._request({route:"functions",className:a,method:"POST",useMasterKey:d.useMasterKey,data:b._encode(c,null,!0)});return e.then(function(a){return b._decode(null,a).result})._thenRunCallbacks(d)}})}(this),function(a){a.Parse=a.Parse||{};var b=a.Parse;b.Installation=b.Object.extend("_Installation"),b.Push=b.Push||{},b.Push.send=function(a,c){if(c=c||{},a.where&&(a.where=a.where.toJSON().where),a.push_time&&(a.push_time=a.push_time.toJSON()),a.expiration_time&&(a.expiration_time=a.expiration_time.toJSON()),a.expiration_time&&a.expiration_interval)throw"Both expiration_time and expiration_interval can't be set";var d=b._request({route:"push",method:"POST",data:a,useMasterKey:c.useMasterKey});return d._thenRunCallbacks(c)}}(this);
/*
 AngularJS v1.4.0-beta.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,Y,v){'use strict';function S(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.0-beta.2/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Oa(b){if(null==b||Pa(b))return!1;var a=b.length;return b.nodeType===
na&&a?!0:P(b)||A(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d,e;if(b)if(B(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(A(b)||Oa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==q)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function yd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function gc(b){return function(a,c){b(c,a)}}function zd(){return++hb}function hc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function J(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}hc(b,a);return b}function ca(b){return parseInt(b,10)}function F(){}function ja(b){return b}function da(b){return function(){return b}}function E(b){return"undefined"===typeof b}function w(b){return"undefined"!==
typeof b}function L(b){return null!==b&&"object"===typeof b}function P(b){return"string"===typeof b}function T(b){return"number"===typeof b}function oa(b){return"[object Date]"===Ba.call(b)}function B(b){return"function"===typeof b}function ib(b){return"[object RegExp]"===Ba.call(b)}function Pa(b){return b&&b.window===b}function Qa(b){return b&&b.$evalAsync&&b.$watch}function Ra(b){return"boolean"===typeof b}function ic(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Ad(b){var a={};
b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function sa(b){return H(b.nodeName||b[0]&&b[0].nodeName)}function Sa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function xa(b,a,c,d){if(Pa(b)||Qa(b))throw Ia("cpws");if(a){if(b===a)throw Ia("cpi");c=c||[];d=d||[];if(L(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(A(b))for(var f=a.length=0;f<b.length;f++)e=xa(b[f],null,c,d),L(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;A(a)?a.length=
0:q(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=xa(b[f],null,c,d),L(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);hc(a,g)}}else if(a=b)A(b)?a=xa(b,[],c,d):oa(b)?a=new Date(b.getTime()):ib(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):L(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=xa(b,e,c,d));return a}function U(b,a){if(A(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(L(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=
b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(A(b)){if(!A(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(oa(b))return oa(a)?ka(b.getTime(),a.getTime()):!1;if(ib(b)&&ib(a))return b.toString()==a.toString();if(Qa(b)||Qa(a)||Pa(b)||Pa(a)||A(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!B(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&
"$"!==d.charAt(0)&&a[d]!==v&&!B(a[d]))return!1;return!0}return!1}function Ta(b,a,c){return b.concat(Ua.call(a,c))}function jc(b,a){var c=2<arguments.length?Ua.call(arguments,2):[];return!B(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ta(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Bd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=v:Pa(a)?c="$WINDOW":a&&Y===a?c="$DOCUMENT":Qa(a)&&
(c="$SCOPE");return c}function Va(b,a){if("undefined"===typeof b)return v;T(a)||(a=a?2:null);return JSON.stringify(b,Bd,a)}function kc(b){return P(b)?JSON.parse(b):b}function ta(b){b=D(b).clone();try{b.empty()}catch(a){}var c=D("<div>").append(b).html();try{return b[0].nodeType===jb?H(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+H(b)})}catch(d){return H(c)}}function lc(b){try{return decodeURIComponent(b)}catch(a){}}function mc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&
(c=b.replace(/\+/g,"%20").split("="),d=lc(c[0]),w(d)&&(b=w(c[1])?lc(c[1]):!0,nc.call(a,d)?A(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Ib(b){var a=[];q(b,function(b,d){A(b)?q(b,function(b){a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))}):a.push(Ca(d,!0)+(!0===b?"":"="+Ca(b,!0)))});return a.length?a.join("&"):""}function kb(b){return Ca(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ca(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Cd(b,a){var c,d,e=lb.length;b=D(b);for(d=0;d<e;++d)if(c=lb[d]+a,P(c=b.attr(c)))return c;return null}function Dd(b,a){var c,d,e={};q(lb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});q(lb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Cd(c,"strict-di"),a(c,d?[d]:[],e))}function oc(b,
a,c){L(c)||(c={});c=J({strictDi:!1},c);var d=function(){b=D(b);if(b.injector()){var d=b[0]===Y?"document":ta(b);throw Ia("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=Jb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},
e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");W.resumeBootstrap=function(b){q(b,function(b){a.push(b)});d()}}function Ed(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function Fd(b){b=W.element(b).injector();if(!b)throw Ia("test");return b.get("$$testability")}function pc(b,a){a=a||"_";return b.replace(Gd,function(b,d){return(d?a:"")+b.toLowerCase()})}
function Hd(){var b;qc||((pa=O.jQuery)&&pa.fn.on?(D=pa,J(pa.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),b=pa.cleanData,pa.cleanData=function(a){var c;if(Kb)Kb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=pa._data(e,"events"))&&c.$destroy&&pa(e).triggerHandler("$destroy");b(a)}):D=z,W.element=D,qc=!0)}function Lb(b,a,c){if(!b)throw Ia("areq",a||"?",c||"required");return b}function mb(b,a,c){c&&A(b)&&(b=b[b.length-1]);
Lb(B(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ka(b,a){if("hasOwnProperty"===b)throw Ia("badname",a);}function rc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&B(b)?jc(e,b):b}function nb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return D(c)}function ea(){return Object.create(null)}function Id(b){function a(a,b,c){return a[b]||
(a[b]=c())}var c=S("$injector"),d=S("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||S;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],r=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide",
"provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:r,run:function(a){e.push(a);return this}};h&&r(h);return t})}})}function Jd(b){J(b,{bootstrap:oc,copy:xa,extend:J,equals:ka,element:D,forEach:q,injector:Jb,noop:F,bind:jc,toJson:Va,
fromJson:kc,identity:ja,isUndefined:E,isDefined:w,isString:P,isFunction:B,isObject:L,isNumber:T,isElement:ic,isArray:A,version:Kd,isDate:oa,lowercase:H,uppercase:ob,callbacks:{counter:0},getTestability:Fd,$$minErr:S,$$csp:Wa,reloadWithDebugInfo:Ed});Xa=Id(O);try{Xa("ngLocale")}catch(a){Xa("ngLocale",[]).provider("$locale",Ld)}Xa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Md});a.provider("$compile",sc).directive({a:Nd,input:tc,textarea:tc,form:Od,script:Pd,select:Qd,style:Rd,
option:Sd,ngBind:Td,ngBindHtml:Ud,ngBindTemplate:Vd,ngClass:Wd,ngClassEven:Xd,ngClassOdd:Yd,ngCloak:Zd,ngController:$d,ngForm:ae,ngHide:be,ngIf:ce,ngInclude:de,ngInit:ee,ngNonBindable:fe,ngPluralize:ge,ngRepeat:he,ngShow:ie,ngStyle:je,ngSwitch:ke,ngSwitchWhen:le,ngSwitchDefault:me,ngOptions:ne,ngTransclude:oe,ngModel:pe,ngList:qe,ngChange:re,pattern:uc,ngPattern:uc,required:vc,ngRequired:vc,minlength:wc,ngMinlength:wc,maxlength:xc,ngMaxlength:xc,ngValue:se,ngModelOptions:te}).directive({ngInclude:ue}).directive(pb).directive(yc);
a.provider({$anchorScroll:ve,$animate:we,$browser:xe,$cacheFactory:ye,$controller:ze,$document:Ae,$exceptionHandler:Be,$filter:zc,$interpolate:Ce,$interval:De,$http:Ee,$httpBackend:Fe,$location:Ge,$log:He,$parse:Ie,$rootScope:Je,$q:Ke,$$q:Le,$sce:Me,$sceDelegate:Ne,$sniffer:Oe,$templateCache:Pe,$templateRequest:Qe,$$testability:Re,$timeout:Se,$window:Te,$$rAF:Ue,$$asyncCallback:Ve,$$jqLite:We})}])}function Ya(b){return b.replace(Xe,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Ye,"Moz$1")}
function Ac(b){b=b.nodeType;return b===na||!b||9===b}function Bc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Mb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Ze.exec(b)||["",""])[1].toLowerCase();d=fa[d]||fa._default;c.innerHTML=d[1]+b.replace($e,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ta(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function z(b){if(b instanceof
z)return b;var a;P(b)&&(b=V(b),a=!0);if(!(this instanceof z)){if(a&&"<"!=b.charAt(0))throw Nb("nosel");return new z(b)}if(a){a=Y;var c;b=(c=af.exec(b))?[a.createElement(c[1])]:(c=Bc(b,a))?c.childNodes:[]}Cc(this,b)}function Ob(b){return b.cloneNode(!0)}function qb(b,a){a||rb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)rb(c[d])}function Dc(b,a,c,d){if(w(d))throw Nb("offargs");var e=(d=sb(b))&&d.events,f=d&&d.handle;if(f)if(a)q(a.split(" "),function(a){if(w(c)){var d=
e[a];Sa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function rb(b,a){var c=b.ng339,d=c&&tb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Dc(b)),delete tb[c],b.ng339=v))}function sb(b,a){var c=b.ng339,c=c&&tb[c];a&&!c&&(b.ng339=c=++bf,c=tb[c]={events:{},data:{},handle:v});return c}function Pb(b,a,c){if(Ac(b)){var d=w(c),e=!d&&a&&!L(a),f=!a;b=(b=sb(b,!e))&&b.data;
if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];J(b,a)}}}function ub(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function vb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",V((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+V(a)+" "," ")))})}function wb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=
V(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",V(c))}}function Cc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Ec(b,a){return xb(b,"$"+(a||"ngController")+"Controller")}function xb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=A(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=D.data(b,a[d]))!==v)return c;b=b.parentNode||11===b.nodeType&&b.host}}
function Fc(b){for(qb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Qb(b,a){a||qb(b);var c=b.parentNode;c&&c.removeChild(b)}function cf(b,a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);else D(a).on("load",b)}function Gc(b,a){var c=yb[a.toLowerCase()];return c&&Hc[sa(b)]&&c}function df(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Ic[a]}function ef(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:
0;if(g){if(E(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=U(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function We(){this.$get=function(){return J(z,{hasClass:function(b,a){b.attr&&(b=b[0]);return ub(b,a)},addClass:function(b,
a){b.attr&&(b=b[0]);return wb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return vb(b,a)}})}}function Da(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||zd)():c+":"+b}function zb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function ff(b){return(b=b.toString().replace(Jc,"").match(Kc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Rb(b,
a,c){var d;if("function"===typeof b){if(!(d=b.$inject)){d=[];if(b.length){if(a)throw P(c)&&c||(c=b.name||ff(b)),Ea("strictdi",c);a=b.toString().replace(Jc,"");a=a.match(Kc);q(a[1].split(gf),function(a){a.replace(hf,function(a,b,c){d.push(c)})})}b.$inject=d}}else A(b)?(a=b.length-1,mb(b[a],"fn"),d=b.slice(0,a)):mb(b,"fn",!0);return d}function Jb(b,a){function c(a){return function(b,c){if(L(b))q(b,gc(a));else return a(b,c)}}function d(a,b){Ka(a,"service");if(B(b)||A(b))b=r.instantiate(b);if(!b.$get)throw Ea("pget",
a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(E(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{P(a)?(c=Xa(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(r.invoke(a)):A(a)?b.push(r.invoke(a)):mb(a,"module")}catch(e){throw A(a)&&
(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ea("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],l=Rb(b,a,g),k,r,n;r=0;for(k=l.length;r<k;r++){n=l[r];if("string"!==
typeof n)throw Ea("itkn",n);h.push(f&&f.hasOwnProperty(n)?f[n]:d(n,g))}A(b)&&(b=b[k]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((A(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return L(a)||B(a)?a:d},get:d,annotate:Rb,has:function(a){return n.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new zb([],!0),n={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),
value:c(function(a,b){return f(a,da(b),!1)}),constant:c(function(a,b){Ka(a,"constant");n[a]=b;t[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},r=n.$injector=h(n,function(a,b){W.isString(b)&&k.push(b);throw Ea("unpr",k.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=r.get(a+"Provider",b);return s.invoke(c.$get,c,v,a)});q(g(b),function(a){s.invoke(a||F)});return s}function ve(){var b=!0;this.disableAutoScrolling=
function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===sa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():ic(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||cf(function(){d.$evalAsync(g)})});return g}]}function Ve(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function jf(b,a,c,d){function e(a){try{a.apply(null,Ua.call(arguments,1))}finally{if(u--,0===u)for(;y.length;)try{y.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ua(){q(x,function(a){a()});Q=b(ua,
a)})()}function g(){h();l()}function h(){G=b.history.state;G=E(G)?null:G;ka(G,R)&&(G=R);R=G}function l(){if(C!==m.url()||I!==G)C=m.url(),I=G,q(Z,function(a){a(m.url(),G)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}var m=this,n=a[0],r=b.location,t=b.history,s=b.setTimeout,N=b.clearTimeout,p={};m.isMock=!1;var u=0,y=[];m.$$completeOutstandingRequest=e;m.$$incOutstandingRequestCount=function(){u++};m.notifyWhenNoOutstandingRequests=function(a){q(x,function(a){a()});0===u?a():
y.push(a)};var x=[],Q;m.addPollFn=function(a){E(Q)&&f(100,s);x.push(a);return a};var G,I,C=r.href,ga=a.find("base"),K=null;h();I=G;m.url=function(a,c,e){E(e)&&(e=null);r!==b.location&&(r=b.location);t!==b.history&&(t=b.history);if(a){var f=I===e;if(C===a&&(!d.history||f))return m;var g=C&&Fa(C)===Fa(a);C=a;I=e;!d.history||g&&f?(g||(K=a),c?r.replace(a):g?(c=r,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):r.href=a):(t[c?"replaceState":"pushState"](e,"",a),h(),I=G);return m}return K||r.href.replace(/%27/g,
"'")};m.state=function(){return G};var Z=[],$=!1,R=null;m.onUrlChange=function(a){if(!$){if(d.history)D(b).on("popstate",g);D(b).on("hashchange",g);$=!0}Z.push(a);return a};m.$$checkUrlChange=l;m.baseHref=function(){var a=ga.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var ha={},w="",la=m.baseHref();m.cookies=function(a,b){var d,e,f,g;if(a)b===v?n.cookie=encodeURIComponent(a)+"=;path="+la+";expires=Thu, 01 Jan 1970 00:00:00 GMT":P(b)&&(d=(n.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+
";path="+la).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(n.cookie!==w)for(w=n.cookie,d=w.split("; "),ha={},f=0;f<d.length;f++)e=d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),ha[a]===v&&(ha[a]=k(e.substring(g+1))));return ha}};m.defer=function(a,b){var c;u++;c=s(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};m.defer.cancel=function(a){return p[a]?(delete p[a],N(a),e(F),!0):!1}}function xe(){this.$get=["$window",
"$log","$sniffer","$document",function(b,a,c,d){return new jf(b,d,a,c)}]}function ye(){this.$get=function(){function b(b,d){function e(a){a!=n&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw S("$cacheFactory")("iid",b);var g=0,h=J({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,r=null;return a[b]={put:function(a,b){if(!E(b)){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(r.key);
return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==r&&(r=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};n=r=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return J({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Pe(){this.$get=
["$cacheFactory",function(b){return b("templates")}]}function sc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};q(a,function(a,e){var f=a.match(c);if(!f)throw ma("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Ad("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function n(a,e){Ka(a,"directive");
P(a)?(Lb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];q(d[a],function(d,g){try{var h=b.invoke(d);B(h)?h={compile:da(h)}:!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";L(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):q(a,gc(n));return this};
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return w(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var k=!0;this.debugInfoEnabled=function(a){return w(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,
N,p,u,y,x,Q,G){function I(a,b){try{a.addClass(b)}catch(c){}}function C(a,b,c,d,e){a instanceof D||(a=D(a));q(a,function(b,c){b.nodeType==jb&&b.nodeValue.match(/\S+/)&&(a[c]=D(b).wrap("<span></span>").parent()[0])});var f=ga(a,b,a,c,d,e);C.$$addScopeClass(a);var g=null;return function(b,c,d){Lb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==sa(d)&&d.toString().match(/SVG/)?
"svg":"html":"html");d="html"!==g?D(Tb(g,D("<div>").append(a).html())):c?Ja.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);C.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function ga(a,b,c,d,e,f){function g(a,c,d,e){var f,l,k,n,r,p,I;if(s)for(I=Array(c.length),n=0;n<h.length;n+=3)f=h[n],I[f]=c[f];else I=c;n=0;for(r=h.length;n<r;)l=I[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(k=a.$new(),C.$$addScopeInfo(D(l),k)):k=a,p=c.transcludeOnThisElement?K(a,c.transclude,e,c.elementTranscludeOnThisElement):
!c.templateOnThisElement&&e?e:!e&&b?K(a,b):null,c(f,k,l,d,p)):f&&f(a,l.childNodes,v,e)}for(var h=[],l,k,n,r,s,p=0;p<a.length;p++){l=new da;k=Z(a[p],[],l,0===p?d:v,e);(f=k.length?w(k,a[p],l,b,c,null,[],[],f):null)&&f.scope&&C.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[p].childNodes)||!n.length?null:ga(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(p,f,l),r=!0,s=s||f;f=null}return r?g:null}function K(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,
h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function Z(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case na:la(b,va(sa(a)),"E",d,g);for(var k,n,r,s=a.attributes,p=0,I=s&&s.length;p<I;p++){var y=!1,x=!1;k=s[p];l=k.name;n=V(k.value);k=va(l);if(r=ba.test(k))l=l.replace(Mc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var u=k.replace(/(Start|End)$/,"");ya(u)&&k===u+"Start"&&(y=l,x=l.substr(0,l.length-5)+"end",
l=l.substr(0,l.length-6));k=va(l.toLowerCase());h[k]=l;if(r||!c.hasOwnProperty(k))c[k]=n,Gc(a,k)&&(c[k]=!0);T(a,b,n,k,r);la(b,k,"A",d,g,y,x)}a=a.className;L(a)&&(a=a.animVal);if(P(a)&&""!==a)for(;l=f.exec(a);)k=va(l[2]),la(b,k,"C",d,g)&&(c[k]=V(l[3])),a=a.substr(l.index+l[0].length);break;case jb:O(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=va(l[1]),la(b,k,"M",d,g)&&(c[k]=V(l[2]))}catch(N){}}b.sort(ua);return b}function $(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ma("uterdir",
b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function R(a,b,c){return function(d,e,f,g,h){e=$(e[0],b,c);return a(d,e,f,g,h)}}function w(a,d,e,f,g,l,k,n,s){function I(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=M.require;a.directiveName=O;if(K===M||M.$$isolateScope)a=aa(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=R(b,c,d));b.require=M.require;b.directiveName=O;if(K===M||M.$$isolateScope)b=aa(b,{isolateScope:!0});n.push(b)}}
function y(a,b,c,d){var e,f="data",g=!1,l=c,k;if(P(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ma("ctreq",b,a);return e||null}A(b)&&(e=[],q(b,function(b){e.push(y(a,b,c,d))}));return e}function x(a,c,f,g,h){function l(a,b,c){var d;Qa(a)||(c=b,b=a,a=v);ya&&(d=t);c||(c=ya?Z.parent():
Z);return h(a,b,d,c,Sb)}var s,I,u,G,t,Za,Z,R;d===f?(R=e,Z=e.$$element):(Z=D(f),R=new da(Z,e));K&&(G=c.$new(!0));h&&(Za=l,Za.$$boundTransclude=h);Q&&(ga={},t={},q(Q,function(a){var b={$scope:a===K||a.$$isolateScope?G:c,$element:Z,$attrs:R,$transclude:Za};u=a.controller;"@"==u&&(u=R[a.name]);b=p(u,b,!0,a.controllerAs);t[a.name]=b;ya||Z.data("$"+a.name+"Controller",b.instance);ga[a.name]=b}));if(K){C.$$addScopeInfo(Z,G,!0,!(ha&&(ha===K||ha===K.$$originalDirective)));C.$$addScopeClass(Z,!0);g=ga&&ga[K.name];
var $=G;g&&g.identifier&&!0===K.bindToController&&($=g.instance);q(G.$$isolateBindings=K.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,l,k;switch(a.mode){case "@":R.$observe(e,function(a){$[d]=a});R.$$observers[e].$$scope=c;R[e]&&($[d]=b(R[e])(c));break;case "=":if(f&&!R[e])break;h=N(R[e]);k=h.literal?ka:function(a,b){return a===b||a!==a&&b!==b};l=h.assign||function(){g=$[d]=h(c);throw ma("nonassign",R[e],K.name);};g=$[d]=h(c);f=function(a){k(a,$[d])||(k(a,g)?l(c,a=$[d]):$[d]=
a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(R[e],f):c.$watch(N(R[e],f),null,h.literal);G.$on("$destroy",f);break;case "&":h=N(R[e]),$[d]=function(a){return h(c,a)}}})}ga&&(q(ga,function(a){a()}),ga=null);g=0;for(s=k.length;g<s;g++)I=k[g],ca(I,I.isolateScope?G:c,Z,R,I.require&&y(I.directiveName,I.require,Z,t),Za);var Sb=c;K&&(K.template||null===K.templateUrl)&&(Sb=G);a&&a(Sb,f.childNodes,v,h);for(g=n.length-1;0<=g;g--)I=n[g],ca(I,I.isolateScope?G:c,Z,R,I.require&&y(I.directiveName,
I.require,Z,t),Za)}s=s||{};for(var u=-Number.MAX_VALUE,G,Q=s.controllerDirectives,ga,K=s.newIsolateScopeDirective,ha=s.templateDirective,la=s.nonTlbTranscludeDirective,F=!1,J=!1,ya=s.hasElementTranscludeDirective,H=e.$$element=D(d),M,O,z,ua=f,T,U=0,W=a.length;U<W;U++){M=a[U];var ba=M.$$start,ea=M.$$end;ba&&(H=$(d,ba,ea));z=v;if(u>M.priority)break;if(z=M.scope)M.templateUrl||(L(z)?(La("new/isolated scope",K||G,M,H),K=M):La("new/isolated scope",K,M,H)),G=G||M;O=M.name;!M.templateUrl&&M.controller&&
(z=M.controller,Q=Q||{},La("'"+O+"' controller",Q[O],M,H),Q[O]=M);if(z=M.transclude)F=!0,M.$$tlb||(La("transclusion",la,M,H),la=M),"element"==z?(ya=!0,u=M.priority,z=H,H=e.$$element=D(Y.createComment(" "+O+": "+e[O]+" ")),d=H[0],X(g,Ua.call(z,0),d),ua=C(z,f,u,l&&l.name,{nonTlbTranscludeDirective:la})):(z=D(Ob(d)).contents(),H.empty(),ua=C(z,f));if(M.template)if(J=!0,La("template",ha,M,H),ha=M,z=B(M.template)?M.template(H,e):M.template,z=fa(z),M.replace){l=M;z=Mb.test(z)?Nc(Tb(M.templateNamespace,
V(z))):[];d=z[0];if(1!=z.length||d.nodeType!==na)throw ma("tplrt",O,"");X(g,H,d);W={$attr:{}};z=Z(d,[],W);var ia=a.splice(U+1,a.length-(U+1));K&&E(z);a=a.concat(z).concat(ia);Lc(e,W);W=a.length}else H.html(z);if(M.templateUrl)J=!0,La("template",ha,M,H),ha=M,M.replace&&(l=M),x=S(a.splice(U,a.length-U),H,e,g,F&&ua,k,n,{controllerDirectives:Q,newIsolateScopeDirective:K,templateDirective:ha,nonTlbTranscludeDirective:la}),W=a.length;else if(M.compile)try{T=M.compile(H,e,ua),B(T)?I(null,T,ba,ea):T&&I(T.pre,
T.post,ba,ea)}catch(ja){c(ja,ta(H))}M.terminal&&(x.terminal=!0,u=Math.max(u,M.priority))}x.scope=G&&!0===G.scope;x.transcludeOnThisElement=F;x.elementTranscludeOnThisElement=ya;x.templateOnThisElement=J;x.transclude=ua;s.hasElementTranscludeDirective=ya;return x}function E(a){for(var b=0,c=a.length;b<c;b++){var d=b,e;e=J(Object.create(a[b]),{$$isolateScope:!0});a[d]=e}}function la(b,e,f,g,h,l,k){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var r;e=a.get(e+"Directive");for(var s=0,I=e.length;s<
I;s++)try{if(r=e[s],(g===v||g>r.priority)&&-1!=r.restrict.indexOf(f)){if(l){var p={$$start:l,$$end:k};r=J(Object.create(r),p)}b.push(r);h=r}}catch(u){c(u)}}return h}function ya(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;return!1}function Lc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(I(e,b),a["class"]=
(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function S(a,b,c,d,e,f,g,h){var l=[],k,n,r=b[0],p=a.shift(),u=J({},p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),G=B(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,y=p.templateNamespace;b.empty();s(x.getTrustedResourceUrl(G)).then(function(s){var x,N;s=fa(s);if(p.replace){s=Mb.test(s)?Nc(Tb(y,
V(s))):[];x=s[0];if(1!=s.length||x.nodeType!==na)throw ma("tplrt",p.name,G);s={$attr:{}};X(d,b,x);var t=Z(x,[],s);L(p.scope)&&E(t);a=t.concat(a);Lc(c,s)}else x=r,b.html(s);a.unshift(u);k=w(a,x,c,e,b,p,f,g,h);q(d,function(a,c){a==x&&(d[c]=b[0])});for(n=ga(b[0].childNodes,e);l.length;){s=l.shift();N=l.shift();var C=l.shift(),Q=l.shift(),t=b[0];if(!s.$$destroyed){if(N!==r){var R=N.className;h.hasElementTranscludeDirective&&p.replace||(t=Ob(x));X(C,D(N),t);I(D(t),R)}N=k.transcludeOnThisElement?K(s,k.transclude,
Q):Q;k(n,s,t,d,N)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(k.transcludeOnThisElement&&(a=K(b,k.transclude,e)),k(n,b,c,d,a)))}}function ua(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function La(a,b,c,d){if(b)throw ma("multidir",b.name,c.name,a,ta(d));}function O(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&C.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||C.$$addBindingClass(e);C.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Tb(a,b){a=H(a||"html");switch(a){case "svg":case "math":var c=Y.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function z(a,b){if("srcdoc"==b)return x.HTML;var c=sa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return x.RESOURCE_URL}function T(a,c,d,e,f){var h=z(a,e);f=g[e]||f;var k=b(d,!0,
h,f);if(k){if("multiple"===e&&"select"===sa(a))throw ma("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ma("nodomevents");var n=g[e];n!==d&&(k=n&&b(n,!0,h,f),d=n);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function X(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<
h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=Y.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());pa?(Kb=!0,pa.cleanData([d])):delete D.cache[d[D.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],D(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function aa(a,b){return J(function(){return a.apply(null,arguments)},a,b)}function ca(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,
ta(d))}}var da=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};da.prototype={$normalize:va,$addClass:function(a){a&&0<a.length&&Q.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&Q.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Oc(a,b);c&&c.length&&Q.addClass(this.$$element,c);(c=Oc(b,a))&&c.length&&Q.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=
Gc(f,a),h=df(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=pc(a,"-"));g=sa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=G(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=V(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var n=2*k,g=g+G(V(h[n]),!0),g=g+(" "+V(h[n+1]));h=V(h[2*k]).split(/\s/);g+=G(V(h[0]),!0);2===h.length&&
(g+=" "+V(h[1]));this[a]=b=g}!1!==d&&(null===b||b===v?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&q(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ea()),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Sa(e,b)}}};var U=b.startSymbol(),W=b.endSymbol(),fa="{{"==U||"}}"==W?ja:function(a){return a.replace(/\{\{/g,U).replace(/}}/g,W)},ba=/^ngAttr[A-Z]/;
C.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];A(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:F;C.$$addBindingClass=k?function(a){I(a,"ng-binding")}:F;C.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:F;C.$$addScopeClass=k?function(a,b){I(a,b?"ng-isolate-scope":"ng-scope")}:F;return C}]}function va(b){return Ya(b.replace(Mc,""))}function Oc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=
d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Nc(b){b=D(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&kf.call(b,a,1);return b}function ze(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ka(a,"controller");L(a)?J(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!L(a.$scope))throw S("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,
l,k){var m,n,r;l=!0===l;k&&P(k)&&(r=k);P(g)&&(k=g.match(c),n=k[1],r=r||k[3],g=b.hasOwnProperty(n)?b[n]:rc(h.$scope,n,!0)||(a?rc(e,n,!0):v),mb(g,n,!0));if(l)return l=(A(g)?g[g.length-1]:g).prototype,m=Object.create(l||null),r&&f(h,r,m,n||g.name),J(function(){d.invoke(g,m,h,n);return m},{instance:m,identifier:r});m=d.instantiate(g,h,n);r&&f(h,r,m,n||g.name);return m}}]}function Ae(){this.$get=["$window",function(b){return D(b.document)}]}function Be(){this.$get=["$log",function(b){return function(a,
c){b.error.apply(b,arguments)}}]}function Ub(b,a){if(P(b)){var c=b.replace(lf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Pc))||(d=(d=c.match(mf))&&nf[d[0]].test(c));d&&(b=kc(c))}}return b}function Qc(b){var a=ea(),c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=H(V(b.substr(0,e)));d=V(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Rc(b){var a=L(b)?b:v;return function(c){a||(a=Qc(b));return c?(c=a[H(c)],void 0===c&&(c=null),c):a}}function Sc(b,
a,c,d){if(B(d))return d(b,a,c);q(d,function(d){b=d(b,a,c)});return b}function Ee(){var b=this.defaults={transformResponse:[Ub],transformRequest:[function(a){return L(a)&&"[object File]"!==Ba.call(a)&&"[object Blob]"!==Ba.call(a)&&"[object FormData]"!==Ba.call(a)?Va(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:U(Vb),put:U(Vb),patch:U(Vb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return w(b)?(a=!!b,this):a};var c=this.interceptors=
[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=J({},a);b.data=a.data?Sc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};q(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!W.isObject(a))throw S("$http")("badreq",a);var e=J({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},
a);e.headers=function(a){var c=b.headers,e=J({},a.headers),f,g,h,c=J({},c.common,c[H(a.method)]);a:for(f in c){g=H(f);for(h in e)if(H(h)===g)continue a;e[f]=c[f]}return d(e,U(a))}(a);e.method=ob(e.method);var f=[function(a){var d=a.headers,e=Sc(a.data,Rc(d),v,a.transformRequest);E(e)&&q(d,function(a,b){"content-type"===H(b)&&delete d[b]});E(a.withCredentials)&&!E(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},v],g=h.when(e);for(q(t,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}I&&(200<=b&&300>b?I.put(K,[b,c,Qc(d),e]):I.remove(K));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,
b,d,e){b=Math.max(b,0);(200<=b&&300>b?t.resolve:t.reject)({data:a,status:b,headers:Rc(d),config:c,statusText:e})}function y(a){m(a.data,a.status,U(a.headers()),a.statusText)}function x(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var t=h.defer(),G=t.promise,I,C,q=c.headers,K=n(c.url,c.params);k.pendingRequests.push(c);G.then(x,x);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(I=L(c.cache)?c.cache:L(b.cache)?b.cache:r);I&&(C=I.get(K),w(C)?C&&
B(C.then)?C.then(y,y):A(C)?m(C[1],C[0],U(C[2]),C[3]):m(C,200,{},"OK"):I.put(K,G));E(C)&&((C=Tc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:v)&&(q[c.xsrfHeaderName||b.xsrfHeaderName]=C),d(c.method,K,f,l,q,c.timeout,c.withCredentials,c.responseType));return G}function n(a,b){if(!b)return a;var c=[];yd(b,function(a,b){null===a||E(a)||(A(a)||(a=[a]),q(a,function(a){L(a)&&(a=oa(a)?a.toISOString():Va(a));c.push(Ca(b)+"="+Ca(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}
var r=f("$http"),t=[];q(c,function(a){t.unshift(P(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){q(arguments,function(a){k[a]=function(b,c){return k(J(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){k[a]=function(b,c,d){return k(J(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function of(){return new O.XMLHttpRequest}function Fe(){this.$get=["$browser","$window","$document",function(b,a,c){return pf(b,
of,b.defer,a.angular.callbacks,c[0])}]}function pf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,
h,l,k,m,n,r,t){function s(){u&&u();y&&y.abort()}function N(a,d,e,f,g){Q!==v&&c.cancel(Q);u=y=null;a(d,e,f,g);b.$$completeOutstandingRequest(F)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==H(e)){var p="_"+(d.counter++).toString(36);d[p]=function(a){d[p].data=a;d[p].called=!0};var u=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){N(k,a,d[p].data,"",b);d[p]=F})}else{var y=a();y.open(e,h,!0);q(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"==za(h).protocol?404:0);N(k,c,b,y.getAllResponseHeaders(),a)};e=function(){N(k,-1,null,null,"")};y.onerror=e;y.onabort=e;r&&(y.withCredentials=!0);if(t)try{y.responseType=t}catch(x){if("json"!==t)throw x;}y.send(l||null)}if(0<n)var Q=c(s,n);else n&&B(n.then)&&n.then(s)}}function Ce(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):
a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function N(c){return c.replace(k,b).replace(m,a)}function p(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!w(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=Va(a)}c=a}return c}catch(g){c=Wb("interr",f,g.toString()),d(c)}}s=!!s;for(var u,y,x=0,Q=[],G=[],I=f.length,C=[],q=[];x<I;)if(-1!=(u=f.indexOf(b,x))&&-1!=
(y=f.indexOf(a,u+h)))x!==u&&C.push(N(f.substring(x,u))),x=f.substring(u+h,y),Q.push(x),G.push(c(x,p)),x=y+l,q.push(C.length),C.push("");else{x!==I&&C.push(N(f.substring(x)));break}if(t&&1<C.length)throw Wb("noconcat",f);if(!g||Q.length){var K=function(a){for(var b=0,c=Q.length;b<c;b++){if(s&&E(a[b]))return;C[q[b]]=a[b]}return C.join("")};return J(function(a){var b=0,c=Q.length,e=Array(c);try{for(;b<c;b++)e[b]=G[b](a);return K(e)}catch(g){a=Wb("interr",f,g.toString()),d(a)}},{exp:f,expressions:Q,$$watchDelegate:function(a,
b,c){var d;return a.$watchGroup(G,function(c,e){var f=K(c);B(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),m=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function De(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=a.setInterval,n=a.clearInterval,r=0,t=w(k)&&!k,s=(t?d:c).defer(),N=s.promise;l=w(l)?l:0;N.then(null,null,e);N.$$intervalId=
m(function(){s.notify(r++);0<l&&r>=l&&(s.resolve(r),n(N.$$intervalId),delete f[N.$$intervalId]);t||b.$apply()},h);f[N.$$intervalId]=s;return N}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function Ld(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,
lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",
fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Xb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=kb(b[a]);return b.join("/")}function Uc(b,a){var c=za(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=ca(c.port)||qf[c.protocol]||null}function Vc(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=za(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?
d.pathname.substring(1):d.pathname);a.$$search=mc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function wa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Wc(b){return b.replace(/(#.+)|#$/,"$1")}function Yb(b){return b.substr(0,Fa(b).lastIndexOf("/")+1)}function Zb(b,a){this.$$html5=!0;a=a||"";var c=Yb(b);Uc(b,this);this.$$parse=function(a){var b=wa(c,a);if(!P(b))throw Ab("ipthprfx",
a,c);Vc(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Ib(this.$$search),b=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Xb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=wa(b,d))!==v?(g=f,g=(f=wa(a,f))!==v?c+(wa("/",f)||f):b+g):(f=wa(c,d))!==v?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function $b(b,a){var c=Yb(b);Uc(b,this);this.$$parse=
function(d){d=wa(b,d)||wa(c,d);var e;"#"===d.charAt(0)?(e=wa(a,d),E(e)&&(e=d)):e=this.$$html5?d:"";Vc(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Xb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):
!1}}function Xc(b,a){this.$$html5=!0;$b.apply(this,arguments);var c=Yb(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=wa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Ib(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Xb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Bb(b){return function(){return this[b]}}function Yc(b,a){return function(c){if(E(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function Ge(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return w(a)?(b=a,this):b};this.html5Mode=function(b){return Ra(b)?(a.enabled=b,this):L(b)?(Ra(b.enabled)&&(a.enabled=b.enabled),Ra(b.requireBase)&&(a.requireBase=b.requireBase),Ra(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),
f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var n=d.url(),r;if(a.enabled){if(!m&&a.requireBase)throw Ab("nobase");r=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?Zb:Xc}else r=Fa(n),m=$b;k=new m(r,"#"+b);k.$$parseLinkUrl(n,n);k.$$state=d.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&
!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=D(b.target);"a"!==sa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");L(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=za(h.animVal).href);t.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=n&&d.url(k.absUrl(),!0);var s=!0;d.onUrlChange(function(a,
b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(s=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Wc(d.url()),b=Wc(k.absUrl()),f=d.state(),g=k.$$replace,n=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(s||n)s=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===
b&&(d?(k.$$parse(a),k.$$state=f):(n&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function He(){var b=!0,a=this;this.debugEnabled=function(a){return w(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||F;a=!1;try{a=!!e.apply}catch(l){}return a?
function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function qa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ba("isecfld",a);return b}function ra(b,a){if(b){if(b.constructor===b)throw ba("isecfn",a);if(b.window===
b)throw ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ba("isecdom",a);if(b===Object)throw ba("isecobj",a);}return b}function ac(b){return b.constant}function $a(b,a,c,d){ra(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=qa(a.shift(),d);var g=ra(b[e],d);g||(g={},b[e]=g);b=g}e=qa(a.shift(),d);ra(b[e],d);return b[e]=c}function Ma(b){return"constructor"==b}function Zc(b,a,c,d,e,f,g){qa(b,f);qa(a,f);qa(c,f);qa(d,f);qa(e,f);var h=function(a){return ra(a,f)},l=g||Ma(b)?
h:ja,k=g||Ma(a)?h:ja,m=g||Ma(c)?h:ja,n=g||Ma(d)?h:ja,r=g||Ma(e)?h:ja;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return v;h=k(h[a]);if(!c)return h;if(null==h)return v;h=m(h[c]);if(!d)return h;if(null==h)return v;h=n(h[d]);return e?null==h?v:h=r(h[e]):h}}function rf(b,a){return function(c,d){return b(c,d,ra,a)}}function sf(b,a,c){var d=a.expensiveChecks,e=d?tf:uf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?Zc(g[0],
g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=Zc(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=v,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;q(g,function(a,b){qa(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Ma(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=da(l);k&&(a=rf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c){return $a(a,
b,c,b)};return e[b]=f}function bc(b){return B(b.valueOf)?b.valueOf():vf.call(b)}function Ie(){var b=ea(),a=ea();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=
bc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var l=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,l)||(h=d(a),l=b&&bc(b));return h},b,c)}for(var k=[],n=0,r=e.length;n<r;n++)k[n]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var l=e[c](a);if(b||(b=!g(l,k[c])))k[c]=l&&bc(l)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=
a;B(b)&&b.apply(this,arguments);w(a)&&d.$$postDigest(function(){w(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){w(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function m(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){B(b)&&b.apply(this,arguments);e()},c)}function n(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,
d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return w(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var r={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var u,y,x;switch(typeof d){case "string":x=d=d.trim();var Q=g?a:b;u=Q[x];u||(":"===d.charAt(0)&&":"===d.charAt(1)&&(y=!0,d=d.substring(2)),g=g?t:r,u=new cc(g),u=(new ab(u,c,g)).parse(d),
u.constant?u.$$watchDelegate=m:y?(u=e(u),u.$$watchDelegate=u.literal?k:l):u.inputs&&(u.$$watchDelegate=h),Q[x]=u);return n(u,f);case "function":return n(d,f);default:return n(F,f)}}}]}function Ke(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return $c(function(a){b.$evalAsync(a)},a)}]}function Le(){this.$get=["$browser","$exceptionHandler",function(b,a){return $c(function(a){b.defer(a)},a)}]}function $c(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=
!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=v;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{B(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);
this.notify=e(this,this.notify)}var h=S("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):
this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(L(b)||B(b))d=b&&b.then;B(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;
0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(B(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return l(e,!1)}return d&&B(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},n=function t(a){if(!B(a))throw h("norslvr",
a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.defer=function(){return new g};n.reject=function(a){var b=new g;b.reject(a);return b.promise};n.when=m;n.all=function(a){var b=new g,c=0,d=A(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return n}function Ue(){this.$get=["$window",
"$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Je(){var b=10,a=S("$rootScope"),c=null,d=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",
function(e,f,g,h){function l(){this.$id=++hb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function k(b){if(s.$$phase)throw a("inprog",s.$$phase);s.$$phase=b}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}function r(){for(;u.length;)try{u.shift()()}catch(a){f(a)}d=
null}function t(){null===d&&(d=h.defer(function(){s.$apply(r)}))}l.prototype={constructor:l,$new:function(a,b){function c(){d.$$destroyed=!0}var d;b=b||this;a?(d=new l,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++hb;this.$$ChildScope=null},this.$$ChildScope.prototype=this),d=new this.$$ChildScope);d.$parent=b;d.$$prevSibling=b.$$childTail;b.$$childHead?
(b.$$childTail.$$nextSibling=d,b.$$childTail=d):b.$$childHead=b.$$childTail=d;(a||b!=this)&&d.$on("$destroy",c);return d},$watch:function(a,b,d){var e=g(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,d,e);var f=this.$$watchers,h={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;B(b)||(h.fn=F);f||(f=this.$$watchers=[]);f.unshift(h);return function(){Sa(f,h);c=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=
!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!E(e)){if(L(e))if(Oa(e))for(f!==m&&(f=m,t=f.length=0,k++),a=e.length,t!==a&&(k++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==
g,d||h===g||(k++,f[b]=g);else{f!==r&&(f=r={},t=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(t++,f[b]=g,k++));if(t>a)for(b in k++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,h,l=1<b.length,k=0,n=g(a,c),m=[],r={},p=!0,t=0;return this.$watch(n,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(l)if(L(e))if(Oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)nc.call(e,
a)&&(h[a]=e[a]);else h=e})},$digest:function(){var e,g,l,m,t,u,q=b,K,v=[],$,R;k("$digest");h.$$checkUrlChange();this===s&&null!==d&&(h.defer.cancel(d),r());c=null;do{u=!1;for(K=this;N.length;){try{R=N.shift(),R.scope.$eval(R.expression,R.locals)}catch(w){f(w)}c=null}a:do{if(m=K.$$watchers)for(t=m.length;t--;)try{if(e=m[t])if((g=e.get(K))!==(l=e.last)&&!(e.eq?ka(g,l):"number"===typeof g&&"number"===typeof l&&isNaN(g)&&isNaN(l)))u=!0,c=e,e.last=e.eq?xa(g,null):g,e.fn(g,l===n?g:l,K),5>q&&($=4-q,v[$]||
(v[$]=[]),v[$].push({msg:B(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:g,oldVal:l}));else if(e===c){u=!1;break a}}catch(D){f(D)}if(!(m=K.$$childHead||K!==this&&K.$$nextSibling))for(;K!==this&&!(m=K.$$nextSibling);)K=K.$parent}while(K=m);if((u||N.length)&&!q--)throw s.$$phase=null,a("infdig",b,v);}while(u||N.length);for(s.$$phase=null;p.length;)try{p.shift()()}catch(z){f(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;
if(this!==s){for(var b in this.$$listenerCount)m(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=F;this.$on=this.$watch=this.$watchGroup=function(){return F};this.$$listeners={};this.$parent=
this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){s.$$phase||N.length||h.defer(function(){N.length&&s.$digest()});N.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){p.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){f(b)}finally{s.$$phase=null;try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=
this;a&&u.push(b);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,m(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=Ta([h],arguments,1),k,n;do{d=e.$$listeners[a]||
c;h.currentScope=e;k=0;for(n=d.length;k<n;k++)if(d[k])try{d[k].apply(null,l)}catch(m){f(m)}else d.splice(k,1),k--,n--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=Ta([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,
g)}catch(k){f(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var s=new l,N=s.$$asyncQueue=[],p=s.$$postDigestQueue=[],u=s.$$applyAsyncQueue=[];return s}]}function Md(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return w(b)?
(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=za(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function wf(b){if("self"===b)return b;if(P(b)){if(-1<b.indexOf("***"))throw Aa("iwcard",b);b=ad(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(ib(b))return new RegExp("^"+b.source+"$");throw Aa("imatcher");}function bd(b){var a=[];w(b)&&q(b,function(b){a.push(wf(b))});return a}function Ne(){this.SCE_CONTEXTS=ia;var b=["self"],a=[];this.resourceUrlWhitelist=
function(a){arguments.length&&(b=bd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=bd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Tc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Aa("unsafe");
};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ia.HTML]=e(g);h[ia.CSS]=e(g);h[ia.URL]=e(g);h[ia.JS]=e(g);h[ia.RESOURCE_URL]=e(h[ia.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Aa("icontext",a,b);if(null===b||b===v||""===b)return b;if("string"!==typeof b)throw Aa("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===v||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===
ia.RESOURCE_URL){var g=za(e.toString()),n,r,t=!1;n=0;for(r=b.length;n<r;n++)if(d(b[n],g)){t=!0;break}if(t)for(n=0,r=a.length;n<r;n++)if(d(a[n],g)){t=!1;break}if(t)return e;throw Aa("insecurl",e.toString());}if(c===ia.HTML)return f(e);throw Aa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Me(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>bb)throw Aa("iequirks");var d=U(ia);
d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=ja);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;q(ia,function(a,b){var c=H(b);d[Ya("parse_as_"+c)]=function(b){return e(a,b)};d[Ya("get_trusted_"+c)]=function(b){return f(a,b)};d[Ya("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}
function Oe(){this.$get=["$window","$document",function(b,a){var c={},d=ca((/android (\d+)/.exec(H((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var n in l)if(k=h.exec(n)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=P(l.webkitTransition),
m=P(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=bb)return!1;if(E(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Wa(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function Qe(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;A(g)?g=g.filter(function(a){return a!==Ub}):g===Ub&&(g=null);return a.get(e,
{cache:b,transformResponse:g}).finally(function(){d.totalPendingRequests--}).then(function(a){b.put(e,a.data);return a.data},function(a){if(!f)throw ma("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Re(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var d=W.element(a).data("$binding");d&&q(d,function(d){c?(new RegExp("(^|\\s)"+
ad(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Se(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
function(b,a,c,d,e){function f(f,l,k){B(f)||(k=l,l=f,f=F);var m=w(k)&&!k,n=(m?d:c).defer(),r=n.promise;l=a.defer(function(){try{n.resolve(f())}catch(a){n.reject(a),e(a)}finally{delete g[r.$$timeoutId]}m||b.$apply()},l);r.$$timeoutId=l;g[l]=n;return r}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b){bb&&(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,
protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function Tc(b){b=P(b)?za(b):b;return b.protocol===cd.protocol&&b.host===cd.host}function Te(){this.$get=da(O)}function zc(b){function a(c,d){if(L(c)){var e={};q(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",
function(a){return function(b){return a.get(b+"Filter")}}];a("currency",dd);a("date",ed);a("filter",xf);a("json",yf);a("limitTo",zf);a("lowercase",Af);a("number",fd);a("orderBy",gd);a("uppercase",Bf)}function xf(){return function(b,a,c){if(!A(b)){if(null==b)return b;throw S("filter")("notarray",b);}var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Cf(a,c,d);break;default:return b}return b.filter(a)}}function Cf(b,a,c){var d=L(b)&&"$"in b;
!0===a?a=ka:B(a)||(a=function(a,b){if(L(a)||L(b))return!1;a=H(""+a);b=H(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!L(e)?Ga(e,b.$,a,!1):Ga(e,b,a,c)}}function Ga(b,a,c,d,e){var f=typeof b,g=typeof a;if("string"===g&&"!"===a.charAt(0))return!Ga(b,a.substring(1),c,d);if(A(b))return b.some(function(b){return Ga(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ga(b[h],a,c,!0))return!0;return e?!1:Ga(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!B(e)&&
(f="$"===h,!Ga(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function dd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){E(d)&&(d=a.CURRENCY_SYM);E(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:hd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function fd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:hd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function hd(b,a,c,d,e){if(L(b))return"";var f=0>b;b=Math.abs(b);
var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,m=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var n=h.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(id)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(id),h=g[0],g=g[1]||"",n=0,r=a.lgSize,t=a.gSize;if(h.length>=r+t)for(n=h.length-r,k=0;k<n;k++)0===
(n-k)%t&&0!==k&&(l+=c),l+=h.charAt(k);for(k=n;k<h.length;k++)0===(h.length-k)%r&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return m.join("")}function Cb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function aa(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Cb(e,a,d)}}function Db(b,a){return function(c,
d){var e=c["get"+b](),f=ob(a?"SHORT"+b:b);return d[f][e]}}function jd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function kd(b){return function(a){var c=jd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Cb(a,b)}}function ed(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ca(b[9]+b[10]),g=ca(b[9]+b[11]));
h.call(a,ca(b[1]),ca(b[2])-1,ca(b[3]));f=ca(b[4]||0)-f;g=ca(b[5]||0)-g;h=ca(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;P(c)&&(c=Df.test(c)?ca(c):a(c));T(c)&&(c=new Date(c));if(!oa(c)||!isFinite(c.getTime()))return c;for(;e;)(k=Ef.exec(e))?(h=Ta(h,k,1),e=h.pop()):(h.push(e),
e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));q(h,function(a){l=Ff[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function yf(){return function(b,a){E(a)&&(a=2);return Va(b,a)}}function zf(){return function(b,a){a=Infinity===Math.abs(Number(a))?Number(a):ca(a);if(isNaN(a))return b;T(b)&&(b=b.toString());return A(b)||P(b)?0<=a?b.slice(0,a):b.slice(a):b}}function gd(b){return function(a,c,d){function e(a,b){return b?
function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Oa(a))return a;c=A(c)?c:[c];0===c.length&&(c=
["+"]);c=c.map(function(a){var c=!1,d=a||ja;if(P(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Ua.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ha(b){B(b)&&(b={link:b});b.restrict=b.restrict||"AC";return da(b)}function ld(b,a,c,d,e){var f=this,
g=[],h=f.$$parentForm=b.parent().controller("form")||Eb;f.$error={};f.$$success={};f.$pending=v;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ka(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];
f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Sa(g,a)};md({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Sa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Na);d.addClass(b,
Fb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Na,Fb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function dc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function cb(b,a,c,d,e,f){var g=H(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",
function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=V(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",
m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Gb(b,a){return function(c,d){var e,f;if(oa(c))return c;if(P(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Gf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,
function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function db(b,a,c,d){return function(e,f,g,h,l,k,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return w(a)?oa(a)?a:c(a):v}nd(e,f,g,h);cb(e,f,g,h,l,k);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):v});
h.$formatters.push(function(a){if(a&&!oa(a))throw Hb("datefmt",a);if(n(a)){if((s=a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return m("date")(a,d,t)}s=null;return""});if(w(g.min)||g.ngMin){var q;h.$validators.min=function(a){return!n(a)||E(q)||c(a)>=q};g.$observe("min",function(a){q=r(a);h.$validate()})}if(w(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!n(a)||E(p)||c(a)<=p};g.$observe("max",function(a){p=r(a);h.$validate()})}}}function nd(b,a,c,d){(d.$$hasNativeValidators=
L(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?v:b})}function od(b,a,c,d,e){if(w(d)){b=b(d);if(!b.constant)throw S("ngModel")("constexpr",c,d);return b(a)}return e}function ec(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(A(a))return a.join(" ").split(" ");if(P(a))return a.split(" ");if(L(a)){var b=
[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var t=l(k,1);h.$addClass(t)}else if(!ka(b,m)){var s=e(m),t=d(k,s),k=d(s,k),t=l(t,1),k=l(k,-1);t&&t.length&&c.addClass(g,t);k&&k.length&&c.removeClass(g,k)}}m=
U(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function md(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+pc(b,"-"):"";a(eb+b,!0===c);a(pd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[pd]=!(f[eb]=
e.hasClass(eb));d.$setValidity=function(b,e,f){e===v?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),qd(d.$pending)&&(d.$pending=v));Ra(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(rd,!0),d.$valid=d.$invalid=v,c("",null)):(a(rd,!1),d.$valid=qd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?v:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,
d)}}function qd(b){if(b)for(var a in b)return!1;return!0}var Hf=/^\/(.+)\/([a-z]*)$/,H=function(b){return P(b)?b.toLowerCase():b},nc=Object.prototype.hasOwnProperty,ob=function(b){return P(b)?b.toUpperCase():b},bb,D,pa,Ua=[].slice,kf=[].splice,If=[].push,Ba=Object.prototype.toString,Ia=S("ng"),W=O.angular||(O.angular={}),Xa,hb=0;bb=Y.documentMode;F.$inject=[];ja.$inject=[];var A=Array.isArray,V=function(b){return P(b)?b.trim():b},ad=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08")},Wa=function(){if(w(Wa.isActive_))return Wa.isActive_;var b=!(!Y.querySelector("[ng-csp]")&&!Y.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Wa.isActive_=b},lb=["ng-","data-ng-","ng:","x-ng-"],Gd=/[A-Z]/g,qc=!1,Kb,na=1,jb=3,Kd={full:"1.4.0-beta.2",major:1,minor:4,dot:0,codeName:"holographic-rooster"};z.expando="ng339";var tb=z.cache={},bf=1;z._data=function(b){return this.cache[b[this.expando]]||{}};var Xe=/([\:\-\_]+(.))/g,Ye=/^moz([A-Z])/,Jf={mouseleave:"mouseout",
mouseenter:"mouseover"},Nb=S("jqLite"),af=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Mb=/<|&#?\w+;/,Ze=/<([\w:]+)/,$e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,fa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};fa.optgroup=fa.option;fa.tbody=fa.tfoot=fa.colgroup=fa.caption=fa.thead;
fa.th=fa.td;var Ja=z.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Y.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),z(O).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?D(this[b]):D(this[this.length+b])},length:0,push:If,sort:[].sort,splice:[].splice},yb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){yb[H(b)]=b});var Hc={};q("input select option textarea button form details".split(" "),
function(b){Hc[b]=!0});var Ic={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Pb,removeData:rb},function(b,a){z[a]=b});q({data:Pb,inheritedData:xb,scope:function(b){return D.data(b,"$scope")||xb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return D.data(b,"$isolateScope")||D.data(b,"$isolateScopeNoTemplate")},controller:Ec,injector:function(b){return xb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:ub,
css:function(b,a,c){a=Ya(a);if(w(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=H(a);if(yb[d])if(w(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||F).specified?d:v;else if(w(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?v:b},prop:function(b,a,c){if(w(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(E(b)){var d=a.nodeType;return d===na||d===jb?a.textContent:""}a.textContent=
b}b.$dv="";return b}(),val:function(b,a){if(E(a)){if(b.multiple&&"select"===sa(b)){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;qb(b,!0);b.innerHTML=a},empty:Fc},function(b,a){z.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Fc&&(2==b.length&&b!==ub&&b!==Ec?a:d)===v){if(L(a)){for(e=0;e<g;e++)if(b===Pb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;
g=e===v?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});q({removeData:rb,on:function a(c,d,e,f){if(w(f))throw Nb("onargs");if(Ac(c)){var g=sb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=ef(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Jf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,
h,!1),k=f[d]);k.push(e)}}},off:Dc,one:function(a,c,d){a=D(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;qb(a);q(new z(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new z(c);for(var d=0,e=c.length;d<
e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;q(new z(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=D(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Qb,detach:function(a){Qb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new z(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:wb,removeClass:vb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=
d;E(f)&&(f=!ub(a,c));(f?wb:vb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ob,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=sb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:F,type:g,target:a},c.type&&(e=J(e,c)),c=U(h),f=d?[e].concat(d):[e],q(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){z.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)E(g)?(g=a(this[h],c,e,f),w(g)&&(g=D(g))):Cc(g,a(this[h],c,e,f));return w(g)?g:this};z.prototype.bind=z.prototype.on;z.prototype.unbind=z.prototype.off});zb.prototype={put:function(a,
c){this[Da(a,this.nextUid)]=c},get:function(a){return this[Da(a,this.nextUid)]},remove:function(a){var c=this[a=Da(a,this.nextUid)];delete this[a];return c}};var Kc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,gf=/,/,hf=/^\s*(_?)(\S+?)\1\s*$/,Jc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=S("$injector");Jb.$$annotate=Rb;var Kf=S("$animate"),we=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Kf("notcsel",c);this.$$selectors[c.substr(1)]=e;
a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ea();q((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});q(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):
!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){m||(m=a.defer(),d(function(){m.resolve();m=null}));return m.promise}function k(a,c){if(W.isObject(c)){var d=J(c.from||{},c.to||{});a.css(d)}}var m;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){a.remove();return l()},move:function(a,c,d,e){return this.enter(a,
c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=D(a);c=P(c)?c:A(c)?c.join(" "):"";q(a,function(a){wb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=D(a);c=P(c)?c:A(c)?c.join(" "):"";q(a,function(a){vb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=D(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=W.extend(m.options||{},e)):
(m={classes:{},options:e},l=!0);e=m.classes;c=A(c)?c:c.split(" ");d=A(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:F,cancel:F}}]}],ma=S("$compile");
sc.$inject=["$provide","$$sanitizeUriProvider"];var Mc=/^((?:x|data)[\:\-_])/i,Pc="application/json",Vb={"Content-Type":Pc+";charset=utf-8"},mf=/^\[|^\{(?!\{)/,nf={"[":/]$/,"{":/}$/},lf=/^\)\]\}',?\n/,Wb=S("$interpolate"),Lf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,qf={http:80,https:443,ftp:21},Ab=S("$location"),Mf={$$html5:!1,$$replace:!1,absUrl:Bb("$$absUrl"),url:function(a){if(E(a))return this.$$url;var c=Lf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||
"");this.hash(c[5]||"");return this},protocol:Bb("$$protocol"),host:Bb("$$host"),port:Bb("$$port"),path:Yc("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(P(a)||T(a))a=a.toString(),this.$$search=mc(a);else if(L(a))a=xa(a,{}),q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Ab("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();
return this},hash:Yc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([Xc,$b,Zb],function(a){a.prototype=Object.create(Mf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==Zb||!this.$$html5)throw Ab("nostate");this.$$state=E(c)?null:c;return this}});var ba=S("$parse"),Nf=Function.prototype.call,Of=Function.prototype.apply,Pf=Function.prototype.bind,fb=ea();q({"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;fb[c]=a});fb["this"]=function(a){return a};fb["this"].sharedGetter=!0;var gb=J(ea(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return w(d)?w(e)?d+e:d:w(e)?e:v},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(w(d)?d:0)-(w(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===
e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Qf={n:"\n",f:"\f",r:"\r",t:"\t",
v:"\v","'":"'",'"':'"'},cc=function(a){this.options=a};cc.prototype={constructor:cc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=
a+this.peek(),d=c+this.peek(2),e=gb[c],f=gb[d];gb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||
"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=w(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=H(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==
d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Qf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,
value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ab=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ab.ZERO=J(function(){return 0},{sharedGetter:!0,constant:!0});ab.prototype={constructor:ab,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),
this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in fb?a=fb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");
return a},throwError:function(a,c){throw ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===
this.tokens.length)throw ba("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=gb[a];return J(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=gb[c];return J(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,
"(");)a+=this.consume().text+this.consume().text;return sf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return J(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);
return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return J(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(v,e)}return c(l)},{constant:!c.$stateful&&f.every(ac),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+
this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),J(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return J(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);
return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,
c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ab.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();return J(function(d,e,f){d=f||a(d,e);return null==d?v:c(d)},{assign:function(d,e,f){(f=a(d,
f))||a.assign(d,f={});return c.assign(f,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return J(function(e,f){var g=a(e,f),h=d(e,f);qa(h,c);return g?ra(g[h],c):v},{assign:function(e,f,g){var h=qa(d(e,g),c);(g=ra(a(e,g),c))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,
h):w(c)?v:g,k=a(g,h,l)||F;if(f)for(var m=d.length;m--;)f[m]=ra(d[m](g,h),e);ra(l,e);if(k){if(k.constructor===k)throw ba("isecfn",e);if(k===Nf||k===Of||k===Pf)throw ba("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);return ra(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return J(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,
constant:a.every(ac),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return J(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=c[h](d,f);return g},{literal:!0,constant:c.every(ac),inputs:c})}};var uf=ea(),tf=ea(),vf=Object.prototype.valueOf,Aa=
S("$sce"),ia={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ma=S("$compile"),X=Y.createElement("a"),cd=za(O.location.href);zc.$inject=["$provide"];dd.$inject=["$locale"];fd.$inject=["$locale"];var id=".",Ff={yyyy:aa("FullYear",4),yy:aa("FullYear",2,0,!0),y:aa("FullYear",1),MMMM:Db("Month"),MMM:Db("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",
1),ss:aa("Seconds",2),s:aa("Seconds",1),sss:aa("Milliseconds",3),EEEE:Db("Day"),EEE:Db("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Cb(Math[0<a?"floor":"ceil"](a/60),2)+Cb(Math.abs(a%60),2))},ww:kd(2),w:kd(1)},Ef=/((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,Df=/^\-?\d+$/;ed.$inject=["$locale"];var Af=da(H),Bf=da(ob);gd.$inject=["$parse"];var Nd=da({restrict:"E",compile:function(a,
c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ba.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),pb={};q(yb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=va("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});pb[e]=function(){return{restrict:"A",priority:100,link:f}}}});q(Ic,function(a,
c){pb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Hf))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});q(["src","srcset","href"],function(a){var c=va("ng-"+a);pb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ba.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,
c),bb&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Eb={$addControl:F,$$renameControl:function(a,c){a.$name=c},$removeControl:F,$setValidity:F,$setDirty:F,$setPristine:F,$setSubmitted:F};ld.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var sd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:ld,compile:function(a){a.addClass(Na).addClass(eb);return{pre:function(a,d,g,h){if(!("action"in g)){var l=function(c){a.$apply(function(){h.$commitViewValue();
h.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",l,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",l,!1)},0,!1)})}var k=h.$$parentForm,m=h.$name;m&&($a(a,m,h,m),g.$observe(g.name?"name":"ngForm",function(c){m!==c&&($a(a,m,v,m),m=c,$a(a,m,h,m),k.$$renameControl(h,m))}));d.on("$destroy",function(){k.$removeControl(h);m&&$a(a,m,v,m);J(h,Eb)})}}}}}]},Od=sd(),ae=sd(!0),Gf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Rf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Sf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Tf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,td=/^(\d{4})-(\d{2})-(\d{2})$/,ud=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,fc=/^(\d{4})-W(\d\d)$/,vd=/^(\d{4})-(\d\d)$/,wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,xd={text:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);dc(e)},date:db("date",td,Gb(td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":db("datetimelocal",ud,Gb(ud,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:db("time",wd,Gb(wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:db("week",fc,function(a,c){if(oa(a))return a;if(P(a)){fc.lastIndex=0;var d=fc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=jd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:db("month",vd,Gb(vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){nd(a,c,d,e);cb(a,c,d,e,f,g);e.$$parserName=
"number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:Tf.test(a)?parseFloat(a):v});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!T(a))throw Hb("numfmt",a);a=a.toString()}return a});if(d.min||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||E(h)||a>=h};d.$observe("min",function(a){w(a)&&!T(a)&&(a=parseFloat(a,10));h=T(a)&&!isNaN(a)?a:v;e.$validate()})}if(d.max||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||E(l)||a<=l};d.$observe("max",function(a){w(a)&&
!T(a)&&(a=parseFloat(a,10));l=T(a)&&!isNaN(a)?a:v;e.$validate()})}},url:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);dc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||Rf.test(d)}},email:function(a,c,d,e,f,g){cb(a,c,d,e,f,g);dc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||Sf.test(d)}},radio:function(a,c,d,e){E(d.name)&&c.attr("name",++hb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=
function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=od(l,a,"ngTrueValue",d.ngTrueValue,!0),m=od(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:F,button:F,submit:F,reset:F,file:F},tc=["$browser",
"$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(xd[H(h.type)]||xd.text)(f,g,h,l[0],c,a,d,e)}}}}],Uf=/^(true|false|\d+)$/,se=function(){return{restrict:"A",priority:100,compile:function(a,c){return Uf.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Td=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);
return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===v?"":a})}}}}],Vd=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===v?"":a})}}}}],Ud=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),
h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],re=da({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Wd=ec("",!0),Yd=ec("Odd",0),Xd=ec("Even",1),Zd=Ha({compile:function(a,c){c.$set("ngCloak",v);a.removeClass("ng-cloak")}}),$d=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],yc={},Vf={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=va("ng-"+a);yc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};Vf[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ce=["$animate",function(a){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=Y.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=nb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],de=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:W.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,r,q,s){var v=0,p,u,y,x=function(){u&&(u.remove(),u=null);p&&(p.$destroy(),p=null);y&&(d.leave(y).then(function(){u=null}),u=y,y=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!w(k)||k&&!f.$eval(k)||c()},I=++v;e?(a(e,!0).then(function(a){if(I===v){var c=f.$new();q.template=a;a=s(c,function(a){x();d.enter(a,null,g).then(h)});p=c;y=a;p.$emit("$includeContentLoaded",
e);f.$eval(l)}},function(){I===v&&(x(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(x(),q.template=null)})}}}}],ue=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Bc(f.template,Y).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ee=Ha({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
qe=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?V(f):f;e.$parsers.push(function(a){if(!E(a)){var c=[];a&&q(a.split(h),function(a){a&&c.push(g?V(a):a)});return c}});e.$formatters.push(function(a){return A(a)?a.join(f):v});e.$isEmpty=function(a){return!a||!a.length}}}},eb="ng-valid",pd="ng-invalid",Na="ng-pristine",Fb="ng-dirty",rd="ng-pending",Hb=new S("ngModel"),Wf=["$scope","$exceptionHandler","$attrs",
"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=v;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=v;this.$name=m(d.name||"",!1)(a);var n=f(d.ngModel),r=n.assign,t=n,s=r,
N=null,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=n(a);B(d)&&(d=c(a));return d};s=function(a,c){B(n(a))?g(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!n.assign)throw Hb("nonassign",d.ngModel,ta(e));};this.$render=F;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var u=e.inheritedData("$formController")||Eb,y=0;md({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
c){delete a[c]},parentForm:u,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Fb);g.addClass(e,Na)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Na);g.addClass(e,Fb);u.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);p.$viewValue=
p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!T(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(p.$error[p.$$parserName||"parse"]?!1:v,a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:v,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d,e){function f(){var a=!0;q(p.$validators,function(e,f){var g=e(c,d);a=a&&g;h(f,g)});return a?
!0:(q(p.$asyncValidators,function(a,c){h(c,null)}),!1)}function g(){var a=[],e=!0;q(p.$asyncValidators,function(f,g){var l=f(c,d);if(!l||!B(l.then))throw Hb("$asyncValidators",l);h(g,v);a.push(l.then(function(){h(g,!0)},function(a){e=!1;h(g,!1)}))});a.length?k.all(a).then(function(){l(e)},F):l(!0)}function h(a,c){m===y&&p.$setValidity(a,c)}function l(a){m===y&&e(a)}y++;var m=y;(function(a){var c=p.$$parserName||"parse";if(a===v)h(c,null);else if(h(c,a),!a)return q(p.$validators,function(a,c){h(c,
null)}),q(p.$asyncValidators,function(a,c){h(c,null)}),!1;return!0})(a)?f()?g():l(!1):l(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(N);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue,d=E(c)?v:!0;if(d)for(var e=0;e<p.$parsers.length;e++)if(c=p.$parsers[e](c),E(c)){d=!1;break}T(p.$modelValue)&&isNaN(p.$modelValue)&&
(p.$modelValue=t(a));var f=p.$modelValue,g=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;g&&(p.$modelValue=c,p.$modelValue!==f&&p.$$writeModelToScope());p.$$runValidators(d,c,p.$$lastCommittedViewValue,function(a){g||(p.$modelValue=a?c:v,p.$modelValue!==f&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,p.$modelValue);q(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||
p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&w(e.debounce)&&(e=e.debounce,T(e)?d=e:T(e[c])?d=e[c]:T(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==p.$modelValue){p.$modelValue=p.$$rawModelValue=c;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=
f,p.$render(),p.$$runValidators(v,c,f,F))}return c})}],pe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Wf,priority:1,compile:function(c){c.addClass(Na).addClass("ng-untouched").addClass(eb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Eb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=
g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],Xf=/(\s+|^)default(\s+|$)/,te=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=xa(a.$eval(c.ngModelOptions));this.$options.updateOn!==v?(this.$options.updateOnDefault=!1,this.$options.updateOn=V(this.$options.updateOn.replace(Xf,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},fe=Ha({terminal:!0,priority:1E3}),Yf=S("ngOptions"),Zf=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,ne=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e}var m=a.match(Zf);
if(!m)throw Yf("iexp",a,ta(d));var n=m[4]||m[6],r=m[5];a=/ as /.test(m[0])&&m[1];d=m[8];var q=c(m[2]?m[1]:n),s=a&&c(a)||q,v=d&&c(d),p=d?function(a,c){return v(e,c)}:function(a){return Da(a)},u=c(m[2]||m[1]),y=c(m[3]||""),x=c(m[7]),w={},G=r?function(a,c){w[r]=c;w[n]=a;return w}:function(a){w[n]=a;return w};return{getWatchables:c(x,function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){var f=G(a[d],d),g=u(e,f);d=p(a[d],f);c.push(d);c.push(g)});return c}),getOptions:function(){var a=[],c={},
d=x(e)||[];Object.keys(d).forEach(function(g){if("$"!==g.charAt(0)){var h=G(d[g],g),m=s(e,h);g=p(m,h);var n=u(e,h),h=y(e,h),m=new f(g,m,n,h);a.push(m);c[g]=m}});return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[p(a,G(a))]}}}}}var e=Y.createElement("option"),f=Y.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function m(a,c){a.element=c;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,
c.textContent=a.label)}function n(a,c,d,e){c&&H(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=a.nextSibling,Qb(a),a=c}function q(a){var c=u&&u[0],d=x&&x[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function s(){var a=w&&p.readValue();w=G.getOptions();var c={},d=h[0].firstChild;y&&h.prepend(u);d=q(d);w.items.forEach(function(a){var g,l;a.group?(g=c[a.group],g||(g=n(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,
g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),l=n(g.groupElement,g.currentOptionElement,"option",e),m(a,l),g.currentOptionElement=l.nextSibling):(l=n(h[0],d,"option",e),m(a,l),d=l.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var g=p.readValue();ka(a,g)||v.$setViewValue(g)}}var v=k[1];if(v){var p=k[0];k=l.multiple;var u=p.emptyOption,y=!!u,x=D(e.cloneNode(!1));x.val("?");var w,G=d(l.ngOptions,h,c);p.writeValue=
function(a){var c=w.getOptionFromViewValue(a);c?h[0].value!==c.selectValue&&(x.remove(),y||u.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||y?(x.remove(),y||h.prepend(u),h.val(""),u.prop("selected",!0),u.attr("selected",!0)):(y||u.remove(),h.prepend(x),h.val("?"),x.prop("selected",!0),x.attr("selected",!0))};p.readValue=function(){var a=w.selectValueMap[h.val()];return a?(y||u.remove(),x.remove(),a.viewValue):null};k&&(v.$isEmpty=function(a){return!a||
0===a.length},p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){return(h.val()||[]).map(function(a){return w.selectValueMap[a].viewValue})});y?(u.remove(),a(u)(c),u.removeClass("ng-scope")):u=D(e.cloneNode(!1));s();c.$watchCollection(G.getWatchables,s)}}}}],ge=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(g,
h,l){function k(a){h.text(a||"")}var m=l.count,n=l.$attr.when&&h.attr(l.$attr.when),r=l.offset||0,t=g.$eval(n)||{},s={},v=c.startSymbol(),p=c.endSymbol(),u=v+m+"-"+r+p,w=W.noop,x;q(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+H(d[2]),t[d]=h.attr(l.$attr[c]))});q(t,function(a,d){s[d]=c(a.replace(e,u))});g.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in t||(e=a.pluralCat(e-r));e===x||f&&T(x)&&isNaN(x)||(w(),f=s[e],E(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+
n),w=F,k()):w=g.$watch(f,k),x=e)})}}}],he=["$parse","$animate",function(a,c){var d=S("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=Y.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",h);var m=k[1],n=k[2],r=k[3],t=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var s=k[3]||k[1],w=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var p,u,y,x,z={$id:Da};t?p=a(t):(y=function(a,c){return Da(c)},x=function(a){return a});return function(a,f,g,k,m){p&&(u=function(c,d,e){w&&(z[w]=c);z[s]=d;z.$index=
e;return p(a,z)});var t=ea();a.$watchCollection(n,function(g){var k,n,p=f[0],z,C=ea(),E,F,H,B,J,A,L;r&&(a[r]=g);if(Oa(g))J=g,n=u||y;else for(L in n=u||x,J=[],g)g.hasOwnProperty(L)&&"$"!==L.charAt(0)&&J.push(L);E=J.length;L=Array(E);for(k=0;k<E;k++)if(F=g===J?k:J[k],H=g[F],B=n(F,H,k),t[B])A=t[B],delete t[B],C[B]=A,L[k]=A;else{if(C[B])throw q(L,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,B,H);L[k]={id:B,scope:v,clone:v};C[B]=!0}for(z in t){A=t[z];B=nb(A.clone);c.leave(B);if(B[0].parentNode)for(k=
0,n=B.length;k<n;k++)B[k].$$NG_REMOVED=!0;A.scope.$destroy()}for(k=0;k<E;k++)if(F=g===J?k:J[k],H=g[F],A=L[k],A.scope){z=p;do z=z.nextSibling;while(z&&z.$$NG_REMOVED);A.clone[0]!=z&&c.move(nb(A.clone),null,D(p));p=A.clone[A.clone.length-1];e(A.scope,k,s,H,w,F,E)}else m(function(a,d){A.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,D(p));p=f;A.clone=a;C[A.id]=A;e(A.scope,k,s,H,w,F,E)});t=C})}}}}],ie=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,
function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],be=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],je=Ha(function(a,c,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),ke=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=nb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=Y.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,
f.parent(),f)})})})}}}],le=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),me=Ha({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),oe=Ha({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw S("ngTransclude")("orphan",
ta(c));f(function(a){c.empty();c.append(a)})}}),Pd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],$f={$setViewValue:F,$render:F},ag=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new zb;e.ngModelCtrl=$f;e.unknownOption=D(Y.createElement("option"));e.renderUnknownOption=function(c){c="? "+Da(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=
F});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};c=0;d=a.children();for(var g=d.length;c<g;c++)if(""===d[c].value){e.emptyOption=d.eq(c);break}e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):E(c)&&e.emptyOption?a.val(""):e.renderUnknownOption(c)};e.addOption=function(a){Ka(a,'"option value"');var c=f.get(a)||0;f.put(a,c+1)};e.removeOption=
function(a){var c=f.get(a);c&&(1===c?f.remove(a):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],Qd=function(){var a;return{restrict:"E",require:["select","?ngModel"],controller:ag,link:function(c,d,e,f){var g=f[1];if(g){var h=f[0];h.ngModelCtrl=g;g.$render=function(){h.writeValue(g.$viewValue)};d.on("change",function(){c.$apply(function(){g.$setViewValue(h.readValue())})});e.multiple&&(h.readValue=function(){var a=[];q(d.find("option"),function(c){c.selected&&a.push(c.value)});return a},
h.writeValue=function(a){var c=new zb(a);q(d.find("option"),function(a){a.selected=w(c.get(a.value))})},c.$watch(function(){ka(a,g.$viewValue)||(a=U(g.$viewValue),g.$render())}),g.$isEmpty=function(a){return!a||0===a.length})}}}},Sd=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||
k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],Rd=da({restrict:"E",terminal:!1}),vc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},
d.$observe("required",function(){e.$validate()}))}}},uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){P(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw S("ngPattern")("noregexp",g,a,ta(c));f=a||v;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||E(f)||f.test(a)}}}}},xc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",
function(a){a=ca(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(a)||c.length<=f}}}}},wc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=ca(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Hd(),Jd(W),D(Y).ready(function(){Dd(Y,oc)}))})(window,document);
!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');

/*
 AngularJS v1.3.11
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,d,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),f=r.current;m=y(b,function(b){g.enter(b,null,m||c).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=f.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,h,g){return{restrict:"ECA",priority:-400,link:function(a,c){var b=g.current,f=b.locals;c.html(f.$template);var y=d(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));y(a)}}}p=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,c){return d.extend(Object.create(a),
c)}function h(a,d){var b=d.caseInsensitiveMatch,f={originalPath:a,regexp:a},g=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;g.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=new RegExp("^"+a+"$",b?"i":"");return f}var g={};this.when=function(a,c){var b=d.copy(c);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,a&&h(a,b));if(a){var f="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[f]=d.extend({redirectTo:a},h(f,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,c,b,f,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&d.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?c.path(t(e.redirectTo,e.params)).search(e.params).replace():c.url(e.redirectTo(e.pathParams,c.path(),c.search())).replace()),f.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,c;d.forEach(a,function(b,e){a[e]=d.isString(b)?h.get(b):h.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(c=e.templateUrl)&&(d.isFunction(c)&&(c=c(e.params)),c=x.getTrustedResourceUrl(c),d.isDefined(c)&&(e.loadedTemplateUrl=c,b=p(c)));d.isDefined(b)&&(a.$template=b);return f.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;d.forEach(g,function(f,g){var q;if(q=!b){var h=c.path();q=f.keys;var l={};if(f.regexp)if(h=f.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(f,{params:d.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];c.push(b[g]);c.push(f[2]||"");delete b[g]}});return c.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route){var b={},f=this;d.forEach(Object.keys(a),function(c){f.current.pathParams[c]||(b[c]=a[c])});a=d.extend({},this.current.params,a);c.path(t(this.current.$$route.originalPath,a));c.search(d.extend({},c.search(),b))}else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",
m);return s}]});var B=d.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);

/**
 * angular-route-segment 1.3.3
 * https://angular-route-segment.com
 * @author Artem Chivchalov
 * @license MIT License http://opensource.org/licenses/MIT
 */
"use strict";!function(a){var b=a.module("route-segment",[]);b.provider("$routeSegment",["$routeProvider",function(b){function c(a){return a.replace(/([\:\-\_]+(.))/g,function(a,b,c,d){return d?c.toUpperCase():c})}function d(a,b){if(!a)throw new Error("Invalid pointer segment");var e;return{segment:function(b,d){return a[c(b)]={params:d},e=b,this},within:function(b){var g;if(b=b||e,g=a[c(b)])void 0==g.children&&(g.children={});else{if(f.strictMode)throw new Error("Cannot get into unknown `"+b+"` segment");g=a[c(b)]={params:{},children:{}}}return d(g.children,this)},up:function(){return b},root:function(){return h}}}var e=this,f=e.options={autoLoadTemplates:!0,strictMode:!1},g=this.segments={},h=d(g,null),i={};e.when=function(a,c){return b.when(a,{segment:c}),i[c]=a,this},a.extend(e,h),this.$get=["$rootScope","$q","$http","$templateCache","$route","$routeParams","$injector",function(b,d,e,h,j,k,l){function m(b){var c=!1;return b.params.dependencies&&a.forEach(b.params.dependencies,function(b){a.equals(r.$routeParams[b],k[b])||(c=!0)}),c}function n(a,b){return r.chain[a]&&r.chain[a].clearWatcher&&r.chain[a].clearWatcher(),b?(s[a]=b.name,b.params.untilResolved?o(a,b.name,b.params.untilResolved).then(function(c){return void 0!=c.success&&p(a),o(a,b.name,b.params)}):o(a,b.name,b.params)):(s[a]=null,void p(a))}function o(c,g,i){var j=a.extend({},i.resolve);return a.forEach(j,function(b,c){j[c]=a.isString(b)?l.get(b):l.invoke(b)}),i.template&&(j.$template=i.template,a.isFunction(j.$template)&&(j.$template=l.invoke(j.$template))),f.autoLoadTemplates&&i.templateUrl&&(j.$template=i.templateUrl,a.isFunction(j.$template)&&(j.$template=l.invoke(j.$template)),j.$template=e.get(j.$template,{cache:h}).then(function(a){return a.data})),d.all(j).then(function(e){if(s[c]!=g)return d.reject();if(r.chain[c]={name:g,params:i,locals:e,reload:function(){var a=q(c,r.name.split("."));n(c,a).then(function(a){void 0!=a.success&&p(c)})}},i.watcher){var f=function(){if(!a.isFunction(i.watcher)&&!a.isArray(i.watcher))throw new Error("Watcher is not a function in segment `"+g+"`");return l.invoke(i.watcher,{},{segment:r.chain[c]})},h=f();r.chain[c].clearWatcher=b.$watch(f,function(a){a!=h&&(h=a,r.chain[c].reload())})}return{success:c}},function(b){if(i.resolveFailed){var e={error:function(){return d.when(b)}};return o(c,g,a.extend({resolve:e},i.resolveFailed))}throw new Error("Resolving failed with a reason `"+b+"`, but no `resolveFailed` provided for segment `"+g+"`")})}function p(c){r.$routeParams=a.copy(k),r.name="";for(var d=0;d<r.chain.length;d++)r.chain[d]&&(r.name+=r.chain[d].name+".");r.name=r.name.substr(0,r.name.length-1),b.$broadcast("routeSegmentChange",{index:c,segment:r.chain[c]||null})}function q(a,b){if(!b)return null;if(a>=b.length)return null;for(var d,e=g,f=0;a>=f;f++)d=b[f],void 0!=e[c(d)]&&(e=e[c(d)]),a>f&&(e=e.children);return{name:d,params:e.params,children:e.children}}var r={name:"",$routeParams:a.copy(k),chain:[],startsWith:function(a){var b=new RegExp("^"+a);return b.test(r.name)},contains:function(a){for(var b=0;b<this.chain.length;b++)if(this.chain[b]&&this.chain[b].name==a)return!0;return!1},getSegmentUrl:function(b,c){var d,e,f;if(!i[b])throw new Error("Can not get URL for segment with name `"+b+"`");c=a.extend({},k,c||{}),d=i[b];for(e in c){var g=new RegExp(":"+e+"[*?]?","g");d=d.replace(g,c[e])}if(d=d.replace(/\/\:.*?\?/g,""),f=d.match(/\/\:([^\/]*)/))throw new Error("Route param `"+f[1]+"` is not specified for route `"+i[b]+"`");return d}},s={};return b.$on("$routeChangeSuccess",function(a,b){var c=b.$route||b.$$route;if(c&&c.segment){for(var e=c.segment,f=e.split("."),g=[],h=-1,i=0;i<f.length;i++){var j=q(i,f);(s[i]!=j.name||g.length>0||m(j))&&(r.chain[i]&&r.chain[i].name==j.name&&0==g.length&&!m(j)?s[i]=j.name:(g.push({index:i,newSegment:j}),h=i))}var k=d.when();if(g.length>0)for(var i=0;i<g.length;i++)!function(a){k=k.then(function(){return n(g[a].index,g[a].newSegment)}).then(function(b){if(void 0!=b.success){p(b.success);for(var c=g[a].index+1;c<r.chain.length;c++)r.chain[c]&&(r.chain[c]=null,n(c,null))}})}(i);k.then(function(){if(r.chain.length>f.length){var a=r.chain.length,b=r.chain.length-f.length;r.chain.splice(-b,b);for(var c=f.length;a>c;c++)n(c,null),h=r.chain.length-1}}).then(function(){var a=d.when();if(h==r.chain.length-1)for(var b=q(h,r.name.split("."));b;){var c=b.children,e=h+1;b=null;for(var f in c)!function(c,d,e){d[c].params["default"]&&(a=a.then(function(){return n(e,{name:c,params:d[c].params}).then(function(a){a.success&&p(a.success)})}),b=d[c],h=e)}(f,c,e)}return a})}}),r}]}]),b.filter("routeSegmentUrl",["$routeSegment",function(a){var b=function(b,c){return a.getSegmentUrl(b,c)};return b.$stateful=!0,b}]),b.filter("routeSegmentEqualsTo",["$routeSegment",function(a){var b=function(b){return a.name==b};return b.$stateful=!0,b}]),b.filter("routeSegmentStartsWith",["$routeSegment",function(a){var b=function(b){return a.startsWith(b)};return b.$stateful=!0,b}]),b.filter("routeSegmentContains",["$routeSegment",function(a){var b=function(b){return a.contains(b)};return b.$stateful=!0,b}]),b.filter("routeSegmentParam",["$routeSegment",function(a){var b=function(b){return a.$routeParams[b]};return b.$stateful=!0,b}])}(angular),function(a){a.module("view-segment",["route-segment"]).directive("appViewSegment",["$route","$compile","$controller","$routeParams","$routeSegment","$q","$injector","$timeout",function(b,c,d,e,f,g,h,i){return{restrict:"ECA",priority:500,compile:function(b,e){var g=b.html(),j=!0,k=a.element(document.createComment(" view-segment "));return b.prepend(k),function(l){function m(){p&&(r.leave(p),p=null),o&&(o.$destroy(),o=null)}function n(e){if(q=e,j&&(j=!1,b.replaceWith(k)),!e)return m(),p=b.clone(),p.html(g),r.enter(p,null,k),void c(p,!1,499)(l);var f=a.extend({},e.locals),h=f&&f.$template;m(),p=b.clone(),p.html(h?h:g),r.enter(p,null,k);var i,n=c(p,!1,499);o=l.$new(),e.params.controller&&(f.$scope=o,i=d(e.params.controller,f),e.params.controllerAs&&(o[e.params.controllerAs]=i),p.data("$ngControllerController",i),p.children().data("$ngControllerController",i)),n(o),o.$emit("$viewContentLoaded"),o.$eval(t)}var o,p,q,r,s,t=e.onload||"",u=parseInt(e.appViewSegment);try{var v=h.get("$animator");r=v(l,e)}catch(w){}try{r=h.get("$animate")}catch(w){}f.chain[u]&&(s=i(function(){n(f.chain[u])},0)),l.$on("routeSegmentChange",function(a,b){s&&i.cancel(s),b.index==u&&q!=b.segment&&n(b.segment)})}}}}])}(angular);
angular.module('ss', [
    'ngRoute',
    'ss.audioSelector',
    'route-segment',
    'view-segment',
    'ss.header',
    'ss.photoSelector',
    'ss.templates',
    'ss.panel',
    'ss.player',
    'ss.tooltip',
    'vkontakteServices',
    'ss.slideshow',
    'ss.previewModal',
    'ss.slideshowList'
]);

(function() {
    if (!VK || !window.name) {
        return;
    }

    angular.module('ss')
        .config(function($routeSegmentProvider, $routeProvider) {
            VK.addCallback('onScrollTop', function(scrollTop, windowHeight, offsetTop) {
                VK.callMethod('scrollWindow', offsetTop);
                VK.callMethod('resizeWindow', 1000, windowHeight > 500 ? windowHeight : 500);
            });

            VK.callMethod('scrollTop');

            $routeSegmentProvider
                .when('/home', 'home')
                .when('/create', 'create')
                .when('/create/albums', 'create.albums')
                .when('/create/albums/:id', 'create.album')
                .when('/slideshow/:id', 'slideshow')

                .segment('home', {
                    default: true,
                    templateUrl: 'pages/home-page/home-page.html'
                })
                .segment('slideshow', {
                    templateUrl: 'pages/slideshow-page/slideshow-page.html',
                    controller: 'SlideshowController',
                    dependencies: ['id']
                })

                .segment('create', {
                    templateUrl: 'pages/create-page/create-page.html'
                })
                .within()

                .segment('albums', {
                    default: true,
                    templateUrl: 'modules/photo-selector/albums/albums.html',
                    controller: 'AlbumsController'
                })

                .segment('album', {
                    templateUrl: 'modules/photo-selector/photos/photos.html',
                    controller: 'PhotosController',
                    dependencies: ['id']
                });

            $routeProvider.otherwise({redirectTo: '/home'});
        })
        .run(function($location, $rootScope, currentUser, URLS) {
            $location.path(VK.params.hash);

            VK.addCallback('onLocationChanged', function(location) {
                if (location !== $location.url()) {
                    $rootScope.$apply(function() {
                        $location.path(location);
                    });
                }
            });

            $rootScope.$on('$locationChangeSuccess', function() {
                VK.callMethod('setLocation', $location.url());
            });

            $rootScope.currentUser = currentUser;
            $rootScope.URLS = URLS;
        });
})();

'use strict';

angular.module('ss.templates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('pages/start-page/start-page.html', '<div class="location-loading">Инициализация...</div>');

  $templateCache.put('modules/audio-selector/audio-selector.html', '<section class="audio-selector section" ng-controller="AudiosController"><header class="section__header"><input type="text" ng-model="search" class="audio-selector__filter" placeholder="Поиск"><h2 class="section__title">Выберите музыку</h2></header><ul class="audio-list"><li class="audio-list__item" ng-repeat="audio in audios | filter:search track by audio.id" ng-class="{selected: audio.selected}" ng-click="toggleAudio($event, audio)"><button class="audio-list__play" play-audio="{{audio.url}}"></button> <span class="audio-list__duration">{{audio.duration | timeFormatter}}</span> <span class="audio-list__name">{{audio.artist + \' - \' + audio.title}}</span> <button class="audio-list__toggle"></button></li></ul></section>');

  $templateCache.put('modules/dialog/dialog.html', '<div class="dialog-holder" ng-show="dialogService.showed" ng-include="dialogService.data.template" ng-click="closeOnBgClick($event)"></div>');

  $templateCache.put('modules/header/header.html', '<header class="header" ng-controller="HeaderController"><a href="#/home" active-link="home" class="logo">SocaSlide</a><breadcrumbs></breadcrumbs><div class="header__user">{{firstName}} {{lastName}}</div></header>');

  $templateCache.put('modules/panel/panel.html', '<div class="panel"><frame-list></frame-list><div class="panel__info"><div class="panel__photo-count panel__info-row">{{selectedPhotos.size()}}</div><div class="panel__duration panel__info-row">{{ duration() | timeFormatter:\'ms\' }}</div><audio-list class="panel__info-row"></audio-list></div><div class="panel__btns"><button class="create-slideshow" ng-click="preview()"></button> <button class="open-settings" ng-click="openSettings()"></button></div></div>');

  $templateCache.put('modules/player/player.html', '<div class="player" ng-mousemove="resetActivity()" ng-class="{\'player_no-activity\': noActivity, \'player_rewind-started\': rewindStarted, \'player_loaded\': loaded}"><player-canvas></player-canvas><player-controls can-play="canPlay" autoplay="{{autoplay}}" toggle-full-screen="toggleFullScreen()" duration="{{duration}}" no-activity="noActivity" rewind-started="rewindStarted"></player-controls><span class="player__load-progress-wrap"><span class="player__load-progress" ng-style="{width: loadProgress + \'%\'}">{{loadProgress}}</span></span></div>');

  $templateCache.put('modules/player-modal/player-modal.html', '<section class="dialog"><button class="dialog__close dialog__close_video" ng-click="dialogService.close()"></button><player src="{{dialogService.data.src}}" autoplay=""></player></section>');

  $templateCache.put('modules/preview-modal/preview-modal.html', '<section class="dialog"><button class="dialog__close dialog__close_video" ng-click="dialogService.close()"></button><player src="local" autoplay=""></player><form class="preview-modal__content" ng-submit="saveSlideshow()" ng-controller="PreviewModalController"><div class="form-row"><label class="label" for="slideshowTitle">Заголовок</label><div class="input-holder"><input class="input" id="slideshowTitle" type="text" ng-model="title"></div></div><div class="form-btns"><button class="button button_cancel" type="button" ng-click="dialogService.close()">Отмена</button> <button class="button" type="submit">Сохранить</button></div></form></section>');

  $templateCache.put('modules/slideshow-list/slideshow-list.html', '<div><ul class="slideshow-list" ng-if="slideshows.length"><li class="slideshow-list__item" ng-repeat="slideshow in slideshows"><img ng-src="{{slideshow.get(\'cover\').sizes | photoSrc:\'p\'}}"> <span class="slideshow-list__item-title-wrap"><span class="slideshow-list__item-duration">{{slideshow.get(\'duration\') | timeFormatter: \'ms\'}}</span> <span class="slideshow-list__item-title">{{slideshow.get(\'title\') || \'Без заголовка\'}}</span></span><div class="slideshow-list__buttons"><button ng-click="show(slideshow.id)" class="slideshow-list__button slideshow-list__button_show" title="Просмотр"></button> <button ng-click="share(slideshow)" class="slideshow-list__button slideshow-list__button_share" title="Опубликовать"></button> <button ng-click="remove(slideshow)" class="slideshow-list__button slideshow-list__button_remove" title="Удалить"></button></div></li></ul><div ng-if="slideshows && !slideshows.length" class="wrapper"><br><br>Вы пока еще не создали ни 1 слайдшоу. <a href="#/create">Создать мое первое слайдшоу</a></div></div>');

  $templateCache.put('modules/slideshow-saved-modal/slideshow-saved-modal.html', '<section class="dialog" ng-controller="SlideshowSavedController"><header class="dialog__header"><h2 class="dialog__title">Слайдшоу сохранено</h2><button class="dialog__close" ng-click="dialogService.close()"></button></header><main class="dialog__content"><a href="{{URLS.app + \'#/slideshow/\' + dialogService.data.slideshow.id}}">Ссылка на слайдшоу</a><br><a href ng-click="share(dialogService.data.slideshow)">Опубликовать</a></main></section>');

  $templateCache.put('modules/slideshow-settings/slideshow-settings.html', '<section class="dialog" ng-controller="SlideshowSettingsController"><header class="dialog__header"><h2 class="dialog__title">Настройки слайдшоу</h2><button class="dialog__close" ng-click="dialogService.close()"></button></header><main class="dialog__content"><form ng-submit="save(); dialogService.close()"><div class="form-row"><label class="label" for="slideDuration">Длительность кадра</label><div class="input-holder"><input type="number" class="input" id="slideDuration" name="slideDuration" placeholder="slide duration" ng-model="data.slideDuration"></div></div><div class="form-btns"><button class="button button_cancel" ng-click="dialogService.close()">Отмена</button> <button type="submit" class="button">Сохранить</button></div></form></main></section>');

  $templateCache.put('modules/tooltip/tooltip.html', '<span class="tooltip" ng-show="tooltipService.showed">{{tooltipService.data.message}}</span>');

  $templateCache.put('pages/create-page/create-page.html', '<section class="create-section"><ng-include src="\'modules/audio-selector/audio-selector.html\'"></ng-include><section class="section" app-view-segment="1"></section><panel></panel></section>');

  $templateCache.put('pages/home-page/home-page.html', '<section class="section"><header class="section__header"><div class="section__header-controls"><a href="#/create" class="button">Создать своё слайдшоу</a></div><h2 class="section__title">Мои слайдшоу</h2></header><section class="section__content"><slideshow-list user-id="{{currentUser}}"></slideshow-list></section></section>');

  $templateCache.put('pages/slideshow-page/slideshow-page.html', '<player src="{{src}}"></player>');

  $templateCache.put('modules/directives/breadcrumbs/breadcrumbs.html', '<ul ng-if="breadcrumbs" class="breadcrumbs"><li ng-repeat="breadcrumb in breadcrumbs" class="breadcrumbs__item"><ng-switch on="!!breadcrumb.link"><a ng-href="#{{breadcrumb.link}}" ng-switch-when="true" class="breadcrumbs__link">{{breadcrumb.name}}</a> <span ng-switch-default="" class="breadcrumbs__active">{{breadcrumb.name}}</span></ng-switch></li></ul>');

  $templateCache.put('modules/directives/grid-size/grid-size.html', '<div class="grid-size-block"><button ng-repeat="size in sizes" class="grid-size grid-size_{{size}}" ng-class="{active: size === gridSize}" ng-click="$parent.changeSize(size)">{{$parent.names[size]}}</button></div>');

  $templateCache.put('modules/photo-selector/albums/albums.html', '<header class="section__header"><grid-size size="gridSize"></grid-size><h2 class="section__title">Альбомы</h2></header><div class="section__content"><ul class="album-list album-list_size_{{gridSize}}"><li class="album-list__item" data-ng-repeat="album in albums track by album.id"><img ng-src="{{album.sizes | photoSrc: gridSize }}"> <span class="album-list__item-title" title="{{album.title}}">{{album.title}}</span><div class="album-list__buttons"><a href="#/create/albums/{{album.id}}" class="album-list__button album-list__button_open" title="Открыть"></a> <button class="album-list__button album-list__button_add" ng-click="add(album)" title="Добавить весь альбом"></button></div></li></ul></div>');

  $templateCache.put('modules/photo-selector/photos/photos.html', '<header class="section__header"><grid-size size="gridSize"></grid-size><h2 class="section__title">{{album.title}}</h2></header><div class="section__content"><ul class="photo-list photo-list_size_{{gridSize}}"><li class="photo-list__item" ng-class="{selected: photo.selected}" ng-repeat="photo in photos track by photo.id" title="{{photo.title}}" ng-click="togglePhoto(photo)"><img ng-src="{{photo.sizes | photoSrc: gridSize }}"></li></ul></div>');

  $templateCache.put('modules/panel/directives/audio-list/audio-list.html', '<ul class="panel-audios"><li class="panel-audios__item" ng-repeat="audio in audios track by audio.id" title="{{audio.artist + \' - \' + audio.title}}"><span class="panel-audios__info">{{audio.artist + \' - \' + audio.title}}&nbsp;&nbsp;&nbsp;{{audio.duration | timeFormatter}}</span></li></ul>');

  $templateCache.put('modules/panel/directives/timeline/timeline.html', '');

  $templateCache.put('modules/panel/directives/frame-list/frame-list.html', '<div class="frame-list__holder"><button class="frame-list__prev" ng-click="prev()" ng-disabled="disabled || prevDisabled"></button><div class="frame-list__wrap"><ul class="frame-list"><li class="frame-list__item" ng-repeat="frame in frames track by frame.id" title="{{frame.title}}" ng-click="removeFrame(frame)"><img ng-src="{{frame.sizes | photoSrc: \'o\' }}"></li></ul><span class="frame-placeholders"><span class="frame-placeholder" ng-repeat="placeholder in placeholders track by $index"></span></span></div><button class="frame-list__next" ng-click="next()" ng-disabled="disabled || nextDisabled"></button></div>');

  $templateCache.put('modules/player/directives/player-controls/player-controls.html', '<div class="controls" ng-class="{controls_paused: !played}"><button ng-click="toggle()" ng-disabled="!canPlay" class="controls__toggle" ng-class="{controls__toggle_pause: played}"></button> <button ng-click="toggleFullScreen()" class="controls__full-screen" ng-class="{active: isFullScreenActive()}"></button> <input class="controls__volume" type="range" ng-model="volume" min="0" max="100" ng-change="setVolume()"><div class="controls__progress-holder"><input type="range" class="controls__progress" min="0" max="{{duration}}" ng-model="currentTime" ng-change="rewind()" ng-mousedown="rewindStart()" ng-mouseup="rewindEnd()"></div></div>');

}]);
angular.module('ss.dialog', [])
    .factory('dialogService', function($rootScope) {
        var instance = {
            showed: false,

            initialize: function(scope) {
                this.scope = scope;
            },

            open: function(data, forcePaint) {
                this.data = data;
                this.showed = true;

                if (forcePaint) {
                    this.scope.$digest();
                }
            },

            close: function(forcePaint) {
                this.data = undefined;
                this.showed = false;

                if (forcePaint) {
                    this.scope.$digest();
                }
            }
        };

        $rootScope.$on('$locationChangeSuccess', function() {
            instance.close();
        });

        return instance;
    })
    .directive('dialog', function() {
        return {
            restrict: 'E',
            scope: true,
            replace: true,
            templateUrl: 'modules/dialog/dialog.html',
            controller: function($scope, dialogService) {
                dialogService.initialize($scope);
                $scope.dialogService = dialogService;

                $scope.closeOnBgClick = function(event) {
                    if (event.target === event.currentTarget) {
                        dialogService.close();
                    }
                };

                window.addEventListener('keydown', function(event) {
                    if (event.keyCode === 27) {
                        dialogService.close(true);
                    }
                })
            }
        };
    });

angular.module('ss.audioSelector', ['vkontakteServices', 'ss.services', 'ss.filters', 'ss.audioService'])
    .controller('AudiosController', AudiosController);

function AudiosController($scope, VKAudios, selectedAudios) {
    VKAudios.getAudios().then(function(audios) {
        $scope.audios = audios;
    });

    $scope.toggleAudio = function(event, audio) {
        if (event.playAudio) {
            return false;
        }

        if (audio.selected) {
            selectedAudios.remove(audio);
        } else {
            selectedAudios.add(audio);
        }
    }
}

angular.module('ss.filters', ['ss.gridSizes'])
    .filter('photoSrc', function(gridSizes) {
        var retina = window.devicePixelRatio > 1;

        /**
         * get closest available image size
         * @param sizes {Array}
         * @param type {String}
         * @returns {Object}
         */
        function closestSize(sizes, type) {
            for (var i = 0; i < sizes.length; i++) {
                if (sizes[i].type === type) {
                    return sizes[i];
                }
            }
        }

        /**
         * Return 2x size type of image
         * @param type {String}
         * @returns {String}
         */
        function retinaType(type) {
            switch (type) {
                case 's': return 'm';
                case 'm': return 'p';
                case 'o': return 'p';
                case 'p': return 'r';
                case 'q': return 'x';
                case 'x': return 'z';
                case 'y': return 'z';
                case 'r': return 'z';
                default: return 'z';
            }
        }

        return function(sizes, type) {
            if (!sizes || !type) {
                return '';
            }

            if (retina) {
                type = retinaType(type);
            }

            var i = gridSizes.types.indexOf(type);

            if (i === -1) {
                return '';
            }

            var size;
            for (; i >= 0; i--) {
                size = closestSize(sizes, gridSizes.types[i]);
                if (size) {
                    return size.src;
                }
            }
        };
    })

    .filter('timeFormatter', function() {
        function addZero(number) {
            number = number.toString();
            return number.length > 1 ? number : '0' + number;
        }

        return function(time, type) {
            if (type === 'ms') {
                time /= 1000;
            }

            var minutes = parseInt(time / 60, 10);
            var seconds = addZero(time % 60);

            return minutes + ':' + seconds;
        };
    });

angular.module('ss')
    .directive('addSpace', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.after('&nbsp;');
            }
        }
    });

/*bad bad angular (( need space for justify list*/
angular.module('ss.header', ['vkontakteServices'])
    .controller('HeaderController', function($scope, VKUser) {
        VKUser.getInfo().then(function(data) {
            //jscs: disable
            $scope.firstName = data.first_name;
            $scope.lastName = data.last_name;
            //jscs: enable
        });
    });

angular.module('ss.panel', ['ss.services', 'parseServices', 'ss.filters', 'ss.settings', 'ss.dialog'])
    .directive('panel', function() {
        return {
            restrict: 'E',
            controller: panelController,
            templateUrl: 'modules/panel/panel.html'
        };
    });

function panelController($scope, selectedPhotos, durationService, dialogService) {
    $scope.selectedPhotos = selectedPhotos;
    $scope.duration = durationService.value;

    $scope.preview = function() {
        dialogService.open({
            template: 'modules/preview-modal/preview-modal.html'
        });
    };

    $scope.openSettings = function() {
        dialogService.open({
            template: 'modules/slideshow-settings/slideshow-settings.html'
        });
    };
}

angular.module('ss.photoSelector', ['vkontakteServices', 'ss.directives', 'ss.services', 'ngRoute']);

angular.module('ss.player', [
    'parseServices',
    'ss.templates',
    'ss.filters',
    'vkontakteServices',
    'ss.services',
    'ss.audioService'
])
    .directive('player', function() {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'modules/player/player.html',
            scope: {
                src: '@'
            },
            controller: playerController,
            link: function(scope, element, attrs) {
                scope.toggleFullScreen = function() {
                    if (document.webkitFullscreenElement) {
                        document.webkitCancelFullScreen();
                    } else {
                        element[0].webkitRequestFullScreen();
                    }
                };

                scope.autoplay = 'autoplay' in attrs;
            }
        };
    });

function playerController(
    $scope,
    slideshowService,
    canvasPlayService,
    audioPlayService,
    VKAudios,
    selectedPhotos,
    selectedAudios,
    durationService,
    slideshowSettingsService,
    playerImgLoader,
    $q
) {
    var activityTimer;

    if ($scope.src === 'local') {
        initialize(
            selectedPhotos.get(),
            selectedAudios.getIds(),
            durationService.value(),
            slideshowSettingsService.get()
        );
    } else {
        slideshowService.getSlideshow($scope.src).then(function(data) {
            initialize(data.get('frames'), data.get('audios'), data.get('duration'), data.get('settings'));
        });
    }

    $scope.$on('$destroy', function() {
        canvasPlayService.destroy();
        audioPlayService.destroy();
        playerImgLoader.destroy();
    });

    $scope.$watch('rewindStarted', function(started) {
        if (started) {
            clearActivity();
        } else {
            setActivity();
        }
    });

    $scope.$on('playEnd', function() {
        audioPlayService.stop();
    });

    $scope.rewindStarted = false;
    $scope.canPlay = false;
    $scope.resetActivity = resetActivity;

    function initialize(frames, audioIds, duration, settings) {
        var imgReadyDfd = $q.defer();
        var imgReadyDfdResolved = false;
        var audioReadyPromise;

        playerImgLoader.load(frames, 'w', function(images) {
            canvasPlayService.initialize(images, $scope, settings);
        }).then(function() {
            $scope.loaded = true;
        }, function() {
            alert('Error while loading images')
        }, function(progress) {
            $scope.loadProgress = progress;
            //if we can play 15 seconds of slideshow
            if (!imgReadyDfdResolved && duration * progress / 100 > 15000) {
                imgReadyDfd.resolve();
                imgReadyDfdResolved = true;
            }
        });

        if (audioIds.length) {
            audioReadyPromise = VKAudios.getAudios(audioIds.join(',')).then(audioPlayService.initialize);
        }

        $q.all([imgReadyDfd.promise, audioReadyPromise]).then(function() {
            $scope.canPlay = true;
        });

        $scope.duration = duration;
    }

    function resetActivity() {
        if ($scope.rewindStarted) {
            return false;
        }

        clearActivity();
        setActivity();
    }

    function clearActivity() {
        clearTimeout(activityTimer);

        if ($scope.noActivity) {
            $scope.noActivity = false;
        }
    }

    function setActivity() {
        activityTimer = setTimeout(function() {
            $scope.noActivity = true;
            $scope.$digest();
        }, 3000);
    }
}

angular.module('ss.previewModal', ['ss.player', 'parseServices', 'ss.services', 'ss.constants', 'ss.dialog'])
    .controller('PreviewModalController', PreviewModalController);

function PreviewModalController(
    $scope,
    currentUser,
    slideshowService,
    selectedPhotos,
    selectedAudios,
    slideshowSettingsService,
    dialogService,
    durationService
) {
    function saveSlideshow() {
        slideshowService.saveNew({
            frames: selectedPhotos.get(),
            audios: selectedAudios.getIds(),
            settings: slideshowSettingsService.get(),
            author: currentUser,
            title: $scope.title,
            duration: durationService.value(),
            cover: selectedPhotos.get()[0]
        }).then(function(slideshow) {
            dialogService.open({
                template: 'modules/slideshow-saved-modal/slideshow-saved-modal.html',
                slideshow: slideshow
            }, true);
        });
    }

    $scope.title = '';

    $scope.saveSlideshow = saveSlideshow;
}

angular.module('ss.audioService', [])
    .factory('audioService', function() {
        var audio = new Audio();

        return {
            audio: audio,

            play: function(url) {
                if (url) {
                    audio.src = url;
                }

                audio.play();
            },

            pause: function() {
                audio.pause();
            },

            stop: function() {
                audio.pause();
                audio.currentTime = 0;
            },

            destroy: function() {
                audio.src = '';
            }
        };
    });

angular.module('parseServices', [])
    .constant('config', {
        appId: 'd95PTnwnQvQCj49xf9AUMgXpbSEIl78rVDUg55X0',
        JSKey: 'MzTSKQkIJFB1qA33Hg2Qzk7UKikiIN75nj9f3PR4'
    })
    .run(function(config) {
        Parse.initialize(config.appId, config.JSKey);
    })
    .factory('slideshowService', function() {
        var Slideshow = Parse.Object.extend('Slideshow');

        function create(slideshowData) {
            return new Slideshow(slideshowData);
        }

        function getSlideshow(id) {
            var query = new Parse.Query(Slideshow);
            return query.get(id);
        }

        function remove(slideshow) {
            return slideshow.destroy();
        }

        function saveNew(slideshowData) {
            var newSlideshow = this.create(slideshowData);

            return newSlideshow.save();
        }

        function getUserSlideshows(userId) {
            var query = new Parse.Query(Slideshow);
            query.equalTo('author', userId);
            query.select('title', 'cover', 'duration');
            return query.find();
        }

        return {
            create: create,
            getSlideshow: getSlideshow,
            saveNew: saveNew,
            remove: remove,
            getUserSlideshows: getUserSlideshows
        };
    });

angular.module('ss.services', [])
    .factory('durationService', function(selectedPhotos, slideshowSettingsService) {
        return {
            value: function() {
                return selectedPhotos.size() * slideshowSettingsService.get('slideDuration') * 1000;
            }
        };
    })

    .factory('slideshowSettingsService', function() {
        var data = {
            slideDuration: 5
        };

        return {
            get: function(name) {
                if (name) {
                    return data[name];
                }

                return data;
            },
            save: function(_data_) {
                angular.extend(data, _data_);
            }
        };
    })

    .factory('selectedPhotos', function() {
        var photos = [];

        return {
            size: function() {
                return photos.length;
            },
            get: function(index) {
                if (index) {
                    return photos[index];
                } else {
                    return photos;
                }
            },

            set: function(newCollection) {
                photos = newCollection;
            },

            add: function(photo) {
                var existIndex = this.exist(photo);
                if (existIndex === -1) {
                    photos.push(photo);
                } else {
                    if (photos[existIndex] !== photo) {
                        photos[existIndex] = photo;
                    }
                }

                photo.selected = true;
            },

            addAll: function(photoArray) {
                for (var i = 0; i < photoArray.length; i++) {
                    this.add(photoArray[i]);
                }
            },

            remove: function(photo) {
                var index = this.exist(photo);
                if (index !== -1) {
                    photos.splice(index, 1);
                }
                photo.selected = false;
            },

            removeAll: function(photoArray) {
                for (var i = 0; i < photoArray.length; i++) {
                    this.remove(photoArray[i])
                }
            },

            check: function(photo) {
                var index = this.exist(photo);
                if (index !== -1) {
                    if (photos[index] !== photo) {
                        photos[index] = photo;
                    }

                    photo.selected = true;
                }
            },

            checkAll: function(photoArray) {
                for (var i = 0; i < photoArray.length; i++) {
                    this.check(photoArray[i])
                }
            },

            exist: function(_photo_) {
                for (var i = 0; i < photos.length; i++) {
                    if (_photo_.id === photos[i].id) {
                        return i;
                    }
                }

                return -1;
            }
        };
    })

    .factory('selectedAudios', function() {
        var audios = [];

        return {
            get: function(index) {
                if (index) {
                    return audios[index];
                } else {
                    return audios;
                }
            },

            set: function(newCollection) {
                audios = newCollection;
            },

            getIds: function() {
                return audios.map(function(audio) {
                    return audio.id
                });
            },

            add: function(audio) {
                //temporary
                if (audios.length) {
                    this.remove(audios[0]);
                }
                audios.push(audio);

                //var existIndex = this.exist(audio);
                //
                //if (existIndex === -1) {
                //    audios.push(audio);
                //} else {
                //    if (audios[existIndex] !== audio) {
                //        audios[existIndex] = audio;
                //    }
                //
                //}

                audio.selected = true;
            },

            remove: function(audio) {
                var index = this.exist(audio);
                if (index !== -1) {
                    audios.splice(index, 1);
                }

                audio.selected = false;
            },

            exist: function(_audio_) {
                for (var i = 0; i < audios.length; i++) {
                    if (_audio_.id === audios[i].id) {
                        return i;
                    }
                }

                return -1;
            }
        };
    });

angular.module('vkontakteServices', ['ss.constants', 'ss.filters'])
    .run(function(VKReady) {
        VK.init(function() {
            VKReady.deferred.resolve();
        }, function() {
            VKReady.deferred.reject();
        }, '5.28');
    })

    .factory('methodWrapper', function(VKReady, $q) {
        return function(method) {
            var deferred = $q.defer();

            VKReady.then(function() {
                method(deferred);
            }, function() {
                deferred.reject('VK not available');
            });

            return deferred.promise;
        };
    })

    .factory('VKReady', function($q) {
        return {
            deferred: $q.defer(),
            then: function(successCallback, errorCallback) {
                this.deferred.promise.then(successCallback, errorCallback);
            }
        };
    })

    .factory('VKUser', function(methodWrapper) {
        function getInfo() {
            return methodWrapper(function(deferred) {
                VK.api('users.get', {}, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response[0]);
                    } else {
                        deferred.reject('error while getting user info');
                    }
                });
            });
        }

        return {
            getInfo: getInfo
        };
    })

    .factory('VKWall', function(methodWrapper, URLS) {
        function postSlideshow(slideshow) {
            var cover = slideshow.get('cover');

            return methodWrapper(function(deferred) {
                //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
                var attachments = 'photo' + cover.owner_id + '_' + cover.id + ',' +
                    URLS.app + '#/slideshow/' + slideshow.id;
                //jscs: enable requireCamelCaseOrUpperCaseIdentifiers

                VK.api('wall.post', {
                    message: 'Слайдшоу ' + slideshow.get('title'),
                    attachments: attachments
                }, function() {
                    deferred.resolve();
                });
            });
        }

        return {
            postSlideshow: postSlideshow
        };
    })

    .factory('VKPhotos', function(methodWrapper) {
        function getAlbums() {
            //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
            var parameters = {
                need_system: 1,
                need_covers: 1,
                photo_sizes: 1
            };
            //jscs: enable requireCamelCaseOrUpperCaseIdentifiers

            return methodWrapper(function(deferred) {
                VK.api('photos.getAlbums', parameters, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response.items);
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }

        function getAlbumPhotos(id) {
            return methodWrapper(function(deferred) {
                //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
                VK.api('photos.get', {
                    album_id: id,
                    photo_sizes: 1
                }, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response.items);
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
                //jscs: enable requireCamelCaseOrUpperCaseIdentifiers
            });
        }

        function getAlbumInfo(id) {
            var parameters = {};
            var system;

            if (id < 0) {
                system = true;
                //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
                parameters.need_system = 1;
                //jscs: enable requireCamelCaseOrUpperCaseIdentifiers
            } else {
                system = false;
                //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
                parameters.album_ids = id;
                //jscs: enable requireCamelCaseOrUpperCaseIdentifiers
            }

            return methodWrapper(function(deferred) {
                VK.api('photos.getAlbums', parameters, function(data) {
                    if (data.response) {
                        if (system) {
                            data.response.items.some(function(album) {
                                if (album.id == id) {
                                    deferred.resolve(album);
                                    return true;
                                }
                            });
                        } else {
                            deferred.resolve(data.response.items[0]);
                        }
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }

        return {
            getAlbums: getAlbums,
            getAlbumPhotos: getAlbumPhotos,
            getAlbumInfo: getAlbumInfo
        };
    })

    .factory('VKAudios', function(methodWrapper) {
        //jscs: disable requireCamelCaseOrUpperCaseIdentifiers
        function getAudios(audio_ids) {
            return methodWrapper(function(deferred) {
                VK.api('audio.get', {
                    audio_ids: audio_ids
                }, function(data) {
                    if (data.response) {
                        deferred.resolve(data.response.items);
                    } else {
                        deferred.reject('error in getting data');
                    }
                });
            });
        }
        //jscs: enable requireCamelCaseOrUpperCaseIdentifiers

        return {
            getAudios: getAudios
        };
    });

angular.module('ss.slideshow', [])
    .controller('SlideshowController', function($scope, $route) {
        $scope.src = $route.current.params.id;
    });

angular.module('ss.slideshowList', ['parseServices', 'ss.dialog', 'vkontakteServices'])
    .directive('slideshowList', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                userId: '@'
            },
            controller: SlideshowListController,
            templateUrl: 'modules/slideshow-list/slideshow-list.html'
        }
    });

function SlideshowListController($scope, slideshowService, dialogService, VKWall) {
    function show(id) {
        dialogService.open({
            template: 'modules/player-modal/player-modal.html',
            src: id
        });
    }

    function remove(slideshow) {
        if (!confirm('Вы верены, что хотите удалить слайдшоу "' + slideshow.get('title') + '"')) {
            return ;
        }

        slideshowService
            .remove(slideshow)
            .then(function() {
                $scope.slideshows.splice($scope.slideshows.indexOf(slideshow), 1);
                $scope.$digest();
            }, function(response) {
                console.log(response);
                alert('error while deleting slideshow')
            });
    }

    slideshowService.getUserSlideshows($scope.userId)
        .then(function(data) {
            $scope.slideshows = data;
            $scope.$digest();
        });

    $scope.share = VKWall.postSlideshow;
    $scope.show = show;
    $scope.remove = remove;
}

angular.module('ss')
    .controller('SlideshowSavedController', function($scope, VKWall) {
        $scope.share = VKWall.postSlideshow;
    });

angular.module('ss.settings', ['ss.services'])
    .controller('SlideshowSettingsController', function($scope, slideshowSettingsService) {
        $scope.data = angular.copy(slideshowSettingsService.get());

        $scope.save = function() {
            slideshowSettingsService.save($scope.data);
        };
    });

VK.loadParams(window.location.href);

angular.module('ss.constants', [])
    .constant('URLS', {
        app: 'http://vk.com/app4750775_238478875'
    })
    //jscs: disable
    .constant('currentUser', VK.params.viewer_id);
    //jscs: enable

angular.module('ss.gridSizes', [])
    .value('gridSizes', {
        types: ['s', 'm', 'o', 'p', 'q', 'x', 'r', 'y', 'z', 'w'],
        names: {
            's': 'S',
            'o': 'M',
            'p': 'L',
            'q': 'XL'
        }
    });

angular.module('ss.tooltip', [])
    .factory('tooltipService', function() {
        var $body = angular.element(document.body);
        var element;
        var scope;
        var offsetX = 0;
        var offsetY = -20;
        var instance;

        function onMove(event) {
            element.css({
                top: (event.pageY + offsetY) + 'px',
                left: (event.pageX + offsetX) + 'px'
            });
        }

        function show(data) {
            instance.data = data;
            instance.showed = true;
            $body.on('mousemove', onMove);
            scope.$digest();
            offsetX = -element[0].offsetWidth / 2;
            offsetY = -element[0].offsetHeight - 10;
        }

        function hide() {
            instance.showed = false;
            $body.off('mousemove', onMove);
            scope.$digest();
        }

        function initialze(_element_, _scope_) {
            element = _element_;
            scope = _scope_;
        }

        instance = {
            showed: false,
            show: show,
            hide: hide,
            initialize: initialze
        };

        return instance;
    })

    .directive('tooltipPopup', function(tooltipService) {
        return {
            restrict: 'E',
            templateUrl: 'modules/tooltip/tooltip.html',
            replace: true,
            scope: true,
            link: function(scope, element) {
                tooltipService.initialize(element, scope);
                scope.tooltipService = tooltipService;
            }
        };
    })

    .directive('tooltip', function(tooltipService) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('mouseenter', function() {
                        tooltipService.show({
                            message: attrs.tooltip
                        });
                    })
                    .on('mouseleave', function() {
                        tooltipService.hide();
                    });
            }
        };
    });

angular.module('ss.audioSelector')
    //play audio after clicking element
    .directive('playAudio', function(audioService) {
        var currentPlayedElement;

        audioService.audio.addEventListener('pause', function() {
            if (currentPlayedElement) {
                currentPlayedElement.removeClass('played');
                currentPlayedElement = undefined;
            }
        });

        function play(url, element) {
            if (currentPlayedElement) {
                currentPlayedElement.removeClass('played');
            }

            if (audioService.audio.src === url && !audioService.audio.paused) {
                audioService.pause();
            } else {
                audioService.play(url);
                element.addClass('played');
                currentPlayedElement = element;
            }
        }

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.on('click', function() {
                    //for prevent toggle audio on clicking play control
                    event.playAudio = true;

                    play(attrs.playAudio, element);
                });
            }
        };
    });
angular.module('ss')
    .value('breadcrumbsConfig', {
        'create.album': [
            {
                'name': 'Альбомы',
                'link': 'create/albums'
            },

            {
                'name': 'Фотогорафии'
            }
        ]
    })
    .directive('breadcrumbs', function($route, breadcrumbsConfig) {
        return {
            templateUrl: 'modules/directives/breadcrumbs/breadcrumbs.html',
            controller: function($scope, $rootScope) {
                if ($route.current) {
                    $scope.breadcrumbs = breadcrumbsConfig[$route.current.segment];
                }

                $rootScope.$on('$routeChangeSuccess', function() {
                    $scope.breadcrumbs = breadcrumbsConfig[$route.current.segment];
                });
            }
        };
    });

angular.module('ss.directives', ['ss.gridSizes', 'ss.templates'])
    .directive('gridSize', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                gridSize: '=size'
            },
            templateUrl: 'modules/directives/grid-size/grid-size.html',
            controller: function($scope, gridSizes) {
                function changeSize(size) {
                    $scope.gridSize = size;
                }

                $scope.sizes = ['o', 'p', 'q'];
                $scope.names = gridSizes.names;

                $scope.changeSize = changeSize;
            }
        }
    });

angular.module('ss.photoSelector')
    .controller('PhotosController', PhotosController);

function PhotosController($scope, VKPhotos, selectedPhotos, $routeParams) {
    function togglePhoto(photo) {
        if (photo.selected) {
            selectedPhotos.remove(photo);
        } else {
            selectedPhotos.add(photo);
        }
    }

    $scope.gridSize = 'o';
    $scope.photos = [];

    $scope.togglePhoto = togglePhoto;

    VKPhotos.getAlbumPhotos($routeParams.id).then(function(photos) {
        selectedPhotos.checkAll(photos);
        $scope.photos = photos;
    });

    VKPhotos.getAlbumInfo($routeParams.id).then(function(album) {
        $scope.album = album;
    });
}

angular.module('ss.photoSelector')
    .controller('AlbumsController', AlbumsController);

function AlbumsController($scope, VKPhotos, selectedPhotos) {
    function add(album) {
        VKPhotos.getAlbumPhotos(album.id).then(function(photos) {
            selectedPhotos.addAll(photos);
        });
    }

    $scope.albums = [];
    $scope.sizes = ['o', 'p', 'q'];
    $scope.gridSize = 'p';

    $scope.add = add;

    VKPhotos.getAlbums().then(function(albums) {
        $scope.albums = albums;
    });
}
angular.module('ss.player')
    .factory('audioPlayService', function(audioService) {
        var audios = [];
        var currentAudio = 0;
        var instance;
        var audio = audioService.audio;

        function initialize(_audios_) {
            if (!_audios_.length) {
                console.error('Audios not found!');
                return;
            }

            audios = _audios_;

            currentAudio = 0;

            audio.src = audios[currentAudio].url;
        }

        function play() {
            if (!audios.length) {
                return false;
            }

            audioService.play();
        }

        function pause() {
            audioService.pause()
        }

        function audioEnded() {
            if (audios.length === 1) {
                audio.currentTime = 0;
            } else {
                currentAudio++;

                if (currentAudio >= audios.length) {
                    currentAudio = 0;
                }

                audio.src = audios[currentAudio].url;
            }

            audioService.play();
        }

        function stop() {
            audioService.stop();
        }

        function destroy() {
            stop();
            audios.length = 0;
        }

        function setVolume(volume) {
            audio.volume = volume;
        }

        function rewind(value) {
            audio.currentTime = value % audio.duration;
        }

        audio.addEventListener('ended', audioEnded);
        audio.volume = 0.5;

        instance = {
            volume: audio.volume,
            initialize: initialize,
            play: play,
            stop: stop,
            pause: pause,
            setVolume: setVolume,
            destroy: destroy,
            rewind: rewind
        };

        return instance;
    });

angular.module('ss.player')
    .factory('defaultAnimationType', function() {
        /**
         * calculate image width and height to fit canvas size
         * @param image {Image}
         * @param cWidth {Number}
         * @param cHeight {Number}
         * @param scale {Number}
         * @returns {{width: number, height: number}}
         */
        function drawImageSize(image, cWidth, cHeight, scale) {
            var factor = 1;
            var width;
            var height;

            if (image.width > cWidth) {
                width = cWidth;
                factor = cWidth / image.width;
            }

            if (image.height * factor > cHeight) {
                height = cHeight;
                factor = cHeight / image.height;
                width = factor * image.width;
            } else {
                height = image.height;
                width = image.width;
            }

            return {
                width: width * scale,
                height: height * scale
            };
        }

        /**
         * calculate images draw properties depends on time
         * @param currentSlide {Number}
         * @param currentSlideTime {Number}
         * @param slideDuration {Number}
         * @param images {Array}
         * @param cWidth {Number}
         * @param cHeight {Number}
         * @returns {Object}
         */
        function animateFunction(currentSlide, currentSlideTime, slideDuration, images, cWidth, cHeight) {
            var result = {};
            var scaledSize;
            var scale;

            result[currentSlide] = {
                sx: 0,
                sy: 0
            };

            if (currentSlideTime < this.hideDuration) {

                if (currentSlide > 0) {
                    var prevIndex = currentSlide - 1;

                    scale = this.timingValue(
                        currentSlideTime + slideDuration,
                        slideDuration + this.hideDuration,
                        1,
                        this.scale
                    );
                    scaledSize = drawImageSize(images[prevIndex], cWidth, cHeight, scale);

                    result[prevIndex] = {
                        opacity: this.timingValue(currentSlideTime, this.hideDuration, 1, 0),
                        sx: 0,
                        sy: 0,
                        x: (cWidth - scaledSize.width) / 2,
                        y: (cHeight - scaledSize.height) / 2,
                        width: images[prevIndex].width,
                        height: images[prevIndex].height,
                        scaleWidth: scaledSize.width,
                        scaleHeight: scaledSize.height
                    };
                }

                result[currentSlide].opacity = this.timingValue(currentSlideTime, this.hideDuration, 0, 1);
            }

            scale = this.timingValue(currentSlideTime, slideDuration + this.hideDuration, 1, this.scale);
            scaledSize = drawImageSize(images[currentSlide], cWidth, cHeight, scale);

            result[currentSlide].x = (cWidth - scaledSize.width) / 2;
            result[currentSlide].y = (cHeight - scaledSize.height) / 2;
            result[currentSlide].width = images[currentSlide].width;
            result[currentSlide].height = images[currentSlide].height;
            result[currentSlide].scaleWidth = scaledSize.width;
            result[currentSlide].scaleHeight = scaledSize.height;

            return result;
        }

        function timingValue(currentSlideTime, endTime, startValue, endValue) {
            return startValue + currentSlideTime / endTime * (endValue - startValue);
        }

        function init(slideDuration) {
            this.hideDuration = slideDuration * 0.3;
        }

        return {
            scale: 1.2,

            func: animateFunction,
            timingValue: timingValue,
            init: init
        };
    })
    .factory('canvasPlayService', function($rootScope, defaultAnimationType) {
        var requestAnimationFrameId;
        var ctx; //canvas context
        var images;
        var startTime;
        var pausedAt = 0;
        var slideDuration = 5000;
        var instance;
        var scope;

        defaultAnimationType.init(slideDuration);

        function setCanvas(canvas) {
            ctx = canvas.getContext('2d');
        }

        function initialize(_images_, playerScope, settings) {
            images = _images_;
            scope = playerScope;
            slideDuration = settings.slideDuration * 1000 || slideDuration;
        }

        function render() {
            if (instance.currentTime < 0) {
                instance.currentTime = 0;
            }

            var currentSlide = parseInt(instance.currentTime / slideDuration, 10);
            var currentSlideTime = instance.currentTime % slideDuration;

            if (currentSlide >= images.length) {
                return false;
            }

            ctx.clearRect(0, 0, instance.cWidth, instance.cHeight);

            var animationObject = defaultAnimationType.func(
                currentSlide,
                currentSlideTime,
                slideDuration,
                images,
                instance.cWidth,
                instance.cHeight
            );

            for (var key in animationObject) {
                draw(images[key], animationObject[key]);
            }

            return true;
        }

        function step(time) {
            instance.currentTime = (time - startTime);

            if (render()) {
                scope.$broadcast('playProgress', instance.currentTime);
                requestAnimationFrameId = window.requestAnimationFrame(step);
            } else {
                scope.$broadcast('playEnd');
            }
        }

        function pause() {
            if (instance.paused) {
                return false;
            }

            window.cancelAnimationFrame(requestAnimationFrameId);
            pausedAt = performance.now() - startTime;
            instance.paused = true;
        }

        function stop() {
            ctx.clearRect(0, 0, instance.cWidth, instance.cHeight);
            window.cancelAnimationFrame(requestAnimationFrameId);
            pausedAt = 0;
            instance.paused = true;
        }

        function play() {
            if (!instance.paused) {
                return false;
            }

            startTime = performance.now() - pausedAt;
            window.requestAnimationFrame(step);
            instance.paused = false;
        }

        function destroy() {
            stop();
            images.length = 0;
        }

        function rewind(time) {
            instance.currentTime = time;
            pausedAt = time;
            render();
        }

        function draw(image, object) {
            ctx.save();
            for (var key in object) {
                switch (key) {
                    case 'opacity':
                        ctx.globalAlpha = object.opacity;
                        break;
                    case 'scale':
                        ctx.scale(object.scale, object.scale);
                        break;
                }
            }

            ctx.drawImage(
                image,
                object.sx,
                object.sy,
                object.width,
                object.height,
                object.x,
                object.y,
                object.scaleWidth,
                object.scaleHeight
            );

            ctx.restore();
        }

        instance = {
            cWidth: 1280,
            cHeight: 720,
            paused: true,
            destroy: destroy,
            setCanvas: setCanvas,
            initialize: initialize,
            play: play,
            pause: pause,
            stop: stop,
            rewind: rewind,
            currentTime: 0
        };

        return instance;
    });

angular.module('ss.player')
    .factory('loadWrapper', function($q) {
        return function(callback) {
            return callback($q.defer());
        }
    })

    /*.factory('playerAudioLoader', function() {
        function load(audios) {
            audios[0].addEventListener('progress', function(a, b) {
                console.log(a, b);
            })
        }
        return {
            progress: 0,
            load: load
        };
    })*/

    .factory('playerImgLoader', function(loadWrapper, $filter) {
        function _onFinishLoad(event) {
            instance.loaded++;

            if (instance.current < instance.images.length) {
                _loadImage(instance.current);
                instance.current++;
            }

            instance.deferred.notify(instance.loaded / instance.images.length * 100);

            if (instance.loaded === instance.images.length) {
                instance.loading = false;
                instance.deferred.resolve(instance.images);
            }

            if (event.type === 'error') {
                instance.errors.push(this);
            }
        }

        function _loadImage(index) {
            instance.images[index].src = $filter('photoSrc')(instance.frames[index].sizes, instance.quality);
        }

        function _createImage() {
            var image = new Image();

            image.addEventListener('load', _onFinishLoad);
            image.addEventListener('error', _onFinishLoad);

            return image;
        }

        function load(frames, quality, imagesReadyCallback) {
            return loadWrapper(function(deferred) {
                instance.frames = frames;
                instance.quality = quality;
                instance.deferred = deferred;

                if (!instance.frames.length) {
                    deferred.resolve(instance.images);
                    return deferred;
                }

                for (var i = 0; i < instance.frames.length; i++) {
                    instance.images.push(_createImage());
                }

                var startLoad = instance.frames.length > 5 ? 5 : instance.frames.length;

                for (; instance.current < startLoad; instance.current++) {
                    _loadImage(instance.current);
                }

                instance.loading = true;

                imagesReadyCallback(instance.images);

                return deferred.promise;
            });
        }

        function destroy() {
            for (var i = 0; i < instance.images.length; i++) {
                instance.images[i].removeEventListener('error', _onFinishLoad);
                instance.images[i].removeEventListener('load', _onFinishLoad);
            }

            instance.images.length = 0;
            instance.errors.length = 0;
            instance.loading = false;
            instance.loaded = 0;
            instance.current = 0;
        }

        var instance = {
            load: load,
            loading: false,
            destroy: destroy,
            loaded: 0,
            current: 0,
            images: [],
            errors: []
        };

        return instance;
    });

angular.module('ss.panel')
    .directive('audioList', function() {
        return {
            restrict: 'E',
            replace: true,
            controller: audioListController,
            templateUrl: 'modules/panel/directives/audio-list/audio-list.html'
        };
    });

function audioListController($scope, selectedAudios) {
    $scope.audios = selectedAudios.get();

    $scope.removeAudio = function(audio) {
        selectedAudios.remove(audio);
    };
}

angular.module('ss.panel')
    .directive('frameList', function() {
        return {
            restrict: 'E',
            replace: true,
            controller: frameListController,
            templateUrl: 'modules/panel/directives/frame-list/frame-list.html',
            link: initPanelScrollGallery
        };
    });

function initPanelScrollGallery(scope, element) {
    var wrap = element[0].querySelector('.frame-list__wrap');

    scope.disabled = wrap.scrollWidth === wrap.offsetWidth;

    scope.$watch('frames.length', update);
    scope.prev = prev;
    scope.next = next;

    wrap.addEventListener('scroll', onScroll);
    wrap.addEventListener('wheel', onMouseWheel);

    function update(currentLength, prevLength) {
        if (prevLength < currentLength) {
            wrap.scrollLeft = 99999;
        }

        scope.disabled = wrap.scrollWidth === wrap.offsetWidth;

        checkButtons();
    }

    function onScroll() {
        checkButtons();

        scope.$digest();
    }

    function onMouseWheel(event) {
        var deltaX = event.wheelDeltaX ? event.wheelDeltaX : event.wheelDeltaY;
        var oldValue = wrap.scrollLeft;

        if (isNaN(deltaX)) {
            deltaX = 0;
        }

        wrap.scrollLeft -= deltaX;

        if (wrap.scrollLeft !== oldValue) {
            event.preventDefault();
        }
    }

    function next() {
        wrap.scrollLeft += 200;

        checkButtons();
    }

    function prev() {
        wrap.scrollLeft -= 200;

        checkButtons();
    }

    function checkButtons() {
        scope.prevDisabled = wrap.scrollLeft === 0;

        scope.nextDisabled = wrap.scrollLeft >= wrap.scrollWidth - wrap.offsetWidth
    }
}

function frameListController($scope, selectedPhotos) {
    $scope.frames = selectedPhotos.get();

    $scope.placeholders = new Array(6);

    $scope.removeFrame = function(frame) {
        selectedPhotos.remove(frame);
    };
}


angular.module('ss.player')
    .directive('playerCanvas', function(canvasPlayService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                images: '=',
                slideTime: '@'
            },
            controller: function($scope) {
                $scope.cWidth = canvasPlayService.cWidth;
                $scope.cHeight = canvasPlayService.cHeight;
            },
            template: '<canvas width="{{cWidth}}" height="{{cHeight}}"></canvas>',

            link: function(scope, element) {
                canvasPlayService.setCanvas(element[0]);
            }
        };
    });

angular.module('ss.player')
    .directive('playerControls', function() {
        return {
            restrict:'E',
            replace: true,
            scope: {
                toggleFullScreen: '&',
                duration: '@',
                rewindStarted: '=',
                noActivity: '=',
                canPlay: '='
            },
            templateUrl: 'modules/player/directives/player-controls/player-controls.html',
            controller: PlayerControlsController,
            link: function(scope, element, attrs) {
                if (attrs.autoplay === 'true') {
                    var watcher = scope.$watch('canPlay', function(newValue) {
                        if (newValue) {
                            scope.play();
                            watcher(); //stop watching
                        }
                    });
                }
            }
        }
    });

function PlayerControlsController($scope, audioPlayService, canvasPlayService) {
    function play() {
        audioPlayService.play();
        canvasPlayService.play();
        $scope.played = true;
    }

    function pause() {
        audioPlayService.pause();
        canvasPlayService.pause();
        $scope.played = false;
    }

    function setVolume() {
        audioPlayService.setVolume($scope.volume / 100);
    }

    function toggle() {
        if ($scope.played) {
            pause();
        } else {
            play();
        }
    }

    function rewindStart() {
        audioPlayService.pause();
        canvasPlayService.pause();
        $scope.rewindStarted = true;
    }

    function rewindEnd() {
        if ($scope.played) {
            audioPlayService.play();
            canvasPlayService.play();
        }
        $scope.rewindStarted = false;
    }

    function rewind() {
        audioPlayService.rewind(Number($scope.currentTime) / 1000);
        canvasPlayService.rewind(Number($scope.currentTime));
    }

    function isFullScreenActive() {
        return Boolean(document.webkitFullscreenElement);
    }

    $scope.$on('playProgress', function(event, progress) {
        $scope.currentTime = progress;

        if (!$scope.noActivity) {
            $scope.$digest();
        }
    });

    $scope.$on('playEnd', function() {
        $scope.played = false;
        $scope.$digest();
    });

    $scope.volume = audioPlayService.volume * 100;
    $scope.currentTime = 0;
    $scope.played = false;
    $scope.isFullScreenActive = isFullScreenActive;
    $scope.toggle = toggle;
    $scope.play = play;
    $scope.pause = pause;
    $scope.setVolume = setVolume;
    $scope.rewind = rewind;
    $scope.rewindStart = rewindStart;
    $scope.rewindEnd = rewindEnd;
}
