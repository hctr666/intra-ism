header('Expires: Mon, 25 May 2015 21:17:14 GMT');header('Last-Modified: Sat, 25 Apr 2015 21:17:14 GMT');header('Cache-Control: Public');header('Vary: Accept-Encoding');?>/* FILE: /joomla25/university/media/system/js/mootools-core.js */
/*
---
MooTools: the javascript framework

web build:
 - http://mootools.net/core/76bf47062d6c1983d66ce47ad66aa0e0

packager build:
 - packager build Core/Core Core/Array Core/String Core/Number Core/Function Core/Object Core/Event Core/Browser Core/Class Core/Class.Extras Core/Slick.Parser Core/Slick.Finder Core/Element Core/Element.Style Core/Element.Event Core/Element.Delegation Core/Element.Dimensions Core/Fx Core/Fx.CSS Core/Fx.Tween Core/Fx.Morph Core/Fx.Transitions Core/Request Core/Request.HTML Core/Request.JSON Core/Cookie Core/JSON Core/DOMReady Core/Swiff

copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/

(function(){this.MooTools={version:"1.4.5",build:"ab8ea8824dc3b24b6666867a2c4ed58ebb762cf0"};var e=this.typeOf=function(i){if(i==null){return"null";}if(i.$family!=null){return i.$family();
}if(i.nodeName){if(i.nodeType==1){return"element";}if(i.nodeType==3){return(/\S/).test(i.nodeValue)?"textnode":"whitespace";}}else{if(typeof i.length=="number"){if(i.callee){return"arguments";
}if("item" in i){return"collection";}}}return typeof i;};var u=this.instanceOf=function(w,i){if(w==null){return false;}var v=w.$constructor||w.constructor;
while(v){if(v===i){return true;}v=v.parent;}if(!w.hasOwnProperty){return false;}return w instanceof i;};var f=this.Function;var r=true;for(var q in {toString:1}){r=null;
}if(r){r=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];}f.prototype.overloadSetter=function(v){var i=this;
return function(x,w){if(x==null){return this;}if(v||typeof x!="string"){for(var y in x){i.call(this,y,x[y]);}if(r){for(var z=r.length;z--;){y=r[z];if(x.hasOwnProperty(y)){i.call(this,y,x[y]);
}}}}else{i.call(this,x,w);}return this;};};f.prototype.overloadGetter=function(v){var i=this;return function(x){var y,w;if(typeof x!="string"){y=x;}else{if(arguments.length>1){y=arguments;
}else{if(v){y=[x];}}}if(y){w={};for(var z=0;z<y.length;z++){w[y[z]]=i.call(this,y[z]);}}else{w=i.call(this,x);}return w;};};f.prototype.extend=function(i,v){this[i]=v;
}.overloadSetter();f.prototype.implement=function(i,v){this.prototype[i]=v;}.overloadSetter();var o=Array.prototype.slice;f.from=function(i){return(e(i)=="function")?i:function(){return i;
};};Array.from=function(i){if(i==null){return[];}return(k.isEnumerable(i)&&typeof i!="string")?(e(i)=="array")?i:o.call(i):[i];};Number.from=function(v){var i=parseFloat(v);
return isFinite(i)?i:null;};String.from=function(i){return i+"";};f.implement({hide:function(){this.$hidden=true;return this;},protect:function(){this.$protected=true;
return this;}});var k=this.Type=function(x,w){if(x){var v=x.toLowerCase();var i=function(y){return(e(y)==v);};k["is"+x]=i;if(w!=null){w.prototype.$family=(function(){return v;
}).hide();w.type=i;}}if(w==null){return null;}w.extend(this);w.$constructor=k;w.prototype.$constructor=w;return w;};var p=Object.prototype.toString;k.isEnumerable=function(i){return(i!=null&&typeof i.length=="number"&&p.call(i)!="[object Function]");
};var b={};var d=function(i){var v=e(i.prototype);return b[v]||(b[v]=[]);};var h=function(w,A){if(A&&A.$hidden){return;}var v=d(this);for(var x=0;x<v.length;
x++){var z=v[x];if(e(z)=="type"){h.call(z,w,A);}else{z.call(this,w,A);}}var y=this.prototype[w];if(y==null||!y.$protected){this.prototype[w]=A;}if(this[w]==null&&e(A)=="function"){t.call(this,w,function(i){return A.apply(i,o.call(arguments,1));
});}};var t=function(i,w){if(w&&w.$hidden){return;}var v=this[i];if(v==null||!v.$protected){this[i]=w;}};k.implement({implement:h.overloadSetter(),extend:t.overloadSetter(),alias:function(i,v){h.call(this,i,this.prototype[v]);
}.overloadSetter(),mirror:function(i){d(this).push(i);return this;}});new k("Type",k);var c=function(v,A,y){var x=(A!=Object),E=A.prototype;if(x){A=new k(v,A);
}for(var B=0,z=y.length;B<z;B++){var F=y[B],D=A[F],C=E[F];if(D){D.protect();}if(x&&C){A.implement(F,C.protect());}}if(x){var w=E.propertyIsEnumerable(y[0]);
A.forEachMethod=function(J){if(!w){for(var I=0,G=y.length;I<G;I++){J.call(E,E[y[I]],y[I]);}}for(var H in E){J.call(E,E[H],H);}};}return c;};c("String",String,["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","quote","replace","search","slice","split","substr","substring","trim","toLowerCase","toUpperCase"])("Array",Array,["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice","indexOf","lastIndexOf","filter","forEach","every","map","some","reduce","reduceRight"])("Number",Number,["toExponential","toFixed","toLocaleString","toPrecision"])("Function",f,["apply","call","bind"])("RegExp",RegExp,["exec","test"])("Object",Object,["create","defineProperty","defineProperties","keys","getPrototypeOf","getOwnPropertyDescriptor","getOwnPropertyNames","preventExtensions","isExtensible","seal","isSealed","freeze","isFrozen"])("Date",Date,["now"]);
Object.extend=t.overloadSetter();Date.extend("now",function(){return +(new Date);});new k("Boolean",Boolean);Number.prototype.$family=function(){return isFinite(this)?"number":"null";
}.hide();Number.extend("random",function(v,i){return Math.floor(Math.random()*(i-v+1)+v);});var l=Object.prototype.hasOwnProperty;Object.extend("forEach",function(i,w,x){for(var v in i){if(l.call(i,v)){w.call(x,i[v],v,i);
}}});Object.each=Object.forEach;Array.implement({forEach:function(x,y){for(var w=0,v=this.length;w<v;w++){if(w in this){x.call(y,this[w],w,this);}}},each:function(i,v){Array.forEach(this,i,v);
return this;}});var s=function(i){switch(e(i)){case"array":return i.clone();case"object":return Object.clone(i);default:return i;}};Array.implement("clone",function(){var v=this.length,w=new Array(v);
while(v--){w[v]=s(this[v]);}return w;});var a=function(v,i,w){switch(e(w)){case"object":if(e(v[i])=="object"){Object.merge(v[i],w);}else{v[i]=Object.clone(w);
}break;case"array":v[i]=w.clone();break;default:v[i]=w;}return v;};Object.extend({merge:function(C,y,x){if(e(y)=="string"){return a(C,y,x);}for(var B=1,w=arguments.length;
B<w;B++){var z=arguments[B];for(var A in z){a(C,A,z[A]);}}return C;},clone:function(i){var w={};for(var v in i){w[v]=s(i[v]);}return w;},append:function(z){for(var y=1,w=arguments.length;
y<w;y++){var v=arguments[y]||{};for(var x in v){z[x]=v[x];}}return z;}});["Object","WhiteSpace","TextNode","Collection","Arguments"].each(function(i){new k(i);
});var j=Date.now();String.extend("uniqueID",function(){return(j++).toString(36);});var g=this.Hash=new k("Hash",function(i){if(e(i)=="hash"){i=Object.clone(i.getClean());
}for(var v in i){this[v]=i[v];}return this;});g.implement({forEach:function(i,v){Object.forEach(this,i,v);},getClean:function(){var v={};for(var i in this){if(this.hasOwnProperty(i)){v[i]=this[i];
}}return v;},getLength:function(){var v=0;for(var i in this){if(this.hasOwnProperty(i)){v++;}}return v;}});g.alias("each","forEach");Object.type=k.isObject;
var n=this.Native=function(i){return new k(i.name,i.initialize);};n.type=k.type;n.implement=function(x,v){for(var w=0;w<x.length;w++){x[w].implement(v);
}return n;};var m=Array.type;Array.type=function(i){return u(i,Array)||m(i);};this.$A=function(i){return Array.from(i).slice();};this.$arguments=function(v){return function(){return arguments[v];
};};this.$chk=function(i){return !!(i||i===0);};this.$clear=function(i){clearTimeout(i);clearInterval(i);return null;};this.$defined=function(i){return(i!=null);
};this.$each=function(w,v,x){var i=e(w);((i=="arguments"||i=="collection"||i=="array"||i=="elements")?Array:Object).each(w,v,x);};this.$empty=function(){};
this.$extend=function(v,i){return Object.append(v,i);};this.$H=function(i){return new g(i);};this.$merge=function(){var i=Array.slice(arguments);i.unshift({});
return Object.merge.apply(null,i);};this.$lambda=f.from;this.$mixin=Object.merge;this.$random=Number.random;this.$splat=Array.from;this.$time=Date.now;
this.$type=function(i){var v=e(i);if(v=="elements"){return"array";}return(v=="null")?false:v;};this.$unlink=function(i){switch(e(i)){case"object":return Object.clone(i);
case"array":return Array.clone(i);case"hash":return new g(i);default:return i;}};})();Array.implement({every:function(c,d){for(var b=0,a=this.length>>>0;
b<a;b++){if((b in this)&&!c.call(d,this[b],b,this)){return false;}}return true;},filter:function(d,f){var c=[];for(var e,b=0,a=this.length>>>0;b<a;b++){if(b in this){e=this[b];
if(d.call(f,e,b,this)){c.push(e);}}}return c;},indexOf:function(c,d){var b=this.length>>>0;for(var a=(d<0)?Math.max(0,b+d):d||0;a<b;a++){if(this[a]===c){return a;
}}return -1;},map:function(c,e){var d=this.length>>>0,b=Array(d);for(var a=0;a<d;a++){if(a in this){b[a]=c.call(e,this[a],a,this);}}return b;},some:function(c,d){for(var b=0,a=this.length>>>0;
b<a;b++){if((b in this)&&c.call(d,this[b],b,this)){return true;}}return false;},clean:function(){return this.filter(function(a){return a!=null;});},invoke:function(a){var b=Array.slice(arguments,1);
return this.map(function(c){return c[a].apply(c,b);});},associate:function(c){var d={},b=Math.min(this.length,c.length);for(var a=0;a<b;a++){d[c[a]]=this[a];
}return d;},link:function(c){var a={};for(var e=0,b=this.length;e<b;e++){for(var d in c){if(c[d](this[e])){a[d]=this[e];delete c[d];break;}}}return a;},contains:function(a,b){return this.indexOf(a,b)!=-1;
},append:function(a){this.push.apply(this,a);return this;},getLast:function(){return(this.length)?this[this.length-1]:null;},getRandom:function(){return(this.length)?this[Number.random(0,this.length-1)]:null;
},include:function(a){if(!this.contains(a)){this.push(a);}return this;},combine:function(c){for(var b=0,a=c.length;b<a;b++){this.include(c[b]);}return this;
},erase:function(b){for(var a=this.length;a--;){if(this[a]===b){this.splice(a,1);}}return this;},empty:function(){this.length=0;return this;},flatten:function(){var d=[];
for(var b=0,a=this.length;b<a;b++){var c=typeOf(this[b]);if(c=="null"){continue;}d=d.concat((c=="array"||c=="collection"||c=="arguments"||instanceOf(this[b],Array))?Array.flatten(this[b]):this[b]);
}return d;},pick:function(){for(var b=0,a=this.length;b<a;b++){if(this[b]!=null){return this[b];}}return null;},hexToRgb:function(b){if(this.length!=3){return null;
}var a=this.map(function(c){if(c.length==1){c+=c;}return c.toInt(16);});return(b)?a:"rgb("+a+")";},rgbToHex:function(d){if(this.length<3){return null;}if(this.length==4&&this[3]==0&&!d){return"transparent";
}var b=[];for(var a=0;a<3;a++){var c=(this[a]-0).toString(16);b.push((c.length==1)?"0"+c:c);}return(d)?b:"#"+b.join("");}});Array.alias("extend","append");
var $pick=function(){return Array.from(arguments).pick();};String.implement({test:function(a,b){return((typeOf(a)=="regexp")?a:new RegExp(""+a,b)).test(this);
},contains:function(a,b){return(b)?(b+this+b).indexOf(b+a+b)>-1:String(this).indexOf(a)>-1;},trim:function(){return String(this).replace(/^\s+|\s+$/g,"");
},clean:function(){return String(this).replace(/\s+/g," ").trim();},camelCase:function(){return String(this).replace(/-\D/g,function(a){return a.charAt(1).toUpperCase();
});},hyphenate:function(){return String(this).replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase());});},capitalize:function(){return String(this).replace(/\b[a-z]/g,function(a){return a.toUpperCase();
});},escapeRegExp:function(){return String(this).replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");},toInt:function(a){return parseInt(this,a||10);},toFloat:function(){return parseFloat(this);
},hexToRgb:function(b){var a=String(this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return(a)?a.slice(1).hexToRgb(b):null;},rgbToHex:function(b){var a=String(this).match(/\d{1,3}/g);
return(a)?a.rgbToHex(b):null;},substitute:function(a,b){return String(this).replace(b||(/\\?\{([^{}]+)\}/g),function(d,c){if(d.charAt(0)=="\\"){return d.slice(1);
}return(a[c]!=null)?a[c]:"";});}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this));},round:function(a){a=Math.pow(10,a||0).toFixed(a<0?-a:0);
return Math.round(this*a)/a;},times:function(b,c){for(var a=0;a<this;a++){b.call(c,a,this);}},toFloat:function(){return parseFloat(this);},toInt:function(a){return parseInt(this,a||10);
}});Number.alias("each","times");(function(b){var a={};b.each(function(c){if(!Number[c]){a[c]=function(){return Math[c].apply(null,[this].concat(Array.from(arguments)));
};}});Number.implement(a);})(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]);Function.extend({attempt:function(){for(var b=0,a=arguments.length;
b<a;b++){try{return arguments[b]();}catch(c){}}return null;}});Function.implement({attempt:function(a,c){try{return this.apply(c,Array.from(a));}catch(b){}return null;
},bind:function(e){var a=this,b=arguments.length>1?Array.slice(arguments,1):null,d=function(){};var c=function(){var g=e,h=arguments.length;if(this instanceof c){d.prototype=a.prototype;
g=new d;}var f=(!b&&!h)?a.call(g):a.apply(g,b&&h?b.concat(Array.slice(arguments)):b||arguments);return g==e?f:g;};return c;},pass:function(b,c){var a=this;
if(b!=null){b=Array.from(b);}return function(){return a.apply(c,b||arguments);};},delay:function(b,c,a){return setTimeout(this.pass((a==null?[]:a),c),b);
},periodical:function(c,b,a){return setInterval(this.pass((a==null?[]:a),b),c);}});delete Function.prototype.bind;Function.implement({create:function(b){var a=this;
b=b||{};return function(d){var c=b.arguments;c=(c!=null)?Array.from(c):Array.slice(arguments,(b.event)?1:0);if(b.event){c=[d||window.event].extend(c);}var e=function(){return a.apply(b.bind||null,c);
};if(b.delay){return setTimeout(e,b.delay);}if(b.periodical){return setInterval(e,b.periodical);}if(b.attempt){return Function.attempt(e);}return e();};
},bind:function(c,b){var a=this;if(b!=null){b=Array.from(b);}return function(){return a.apply(c,b||arguments);};},bindWithEvent:function(c,b){var a=this;
if(b!=null){b=Array.from(b);}return function(d){return a.apply(c,(b==null)?arguments:[d].concat(b));};},run:function(a,b){return this.apply(b,Array.from(a));
}});if(Object.create==Function.prototype.create){Object.create=null;}var $try=Function.attempt;(function(){var a=Object.prototype.hasOwnProperty;Object.extend({subset:function(d,g){var f={};
for(var e=0,b=g.length;e<b;e++){var c=g[e];if(c in d){f[c]=d[c];}}return f;},map:function(b,e,f){var d={};for(var c in b){if(a.call(b,c)){d[c]=e.call(f,b[c],c,b);
}}return d;},filter:function(b,e,g){var d={};for(var c in b){var f=b[c];if(a.call(b,c)&&e.call(g,f,c,b)){d[c]=f;}}return d;},every:function(b,d,e){for(var c in b){if(a.call(b,c)&&!d.call(e,b[c],c)){return false;
}}return true;},some:function(b,d,e){for(var c in b){if(a.call(b,c)&&d.call(e,b[c],c)){return true;}}return false;},keys:function(b){var d=[];for(var c in b){if(a.call(b,c)){d.push(c);
}}return d;},values:function(c){var b=[];for(var d in c){if(a.call(c,d)){b.push(c[d]);}}return b;},getLength:function(b){return Object.keys(b).length;},keyOf:function(b,d){for(var c in b){if(a.call(b,c)&&b[c]===d){return c;
}}return null;},contains:function(b,c){return Object.keyOf(b,c)!=null;},toQueryString:function(b,c){var d=[];Object.each(b,function(h,g){if(c){g=c+"["+g+"]";
}var f;switch(typeOf(h)){case"object":f=Object.toQueryString(h,g);break;case"array":var e={};h.each(function(k,j){e[j]=k;});f=Object.toQueryString(e,g);
break;default:f=g+"="+encodeURIComponent(h);}if(h!=null){d.push(f);}});return d.join("&");}});})();Hash.implement({has:Object.prototype.hasOwnProperty,keyOf:function(a){return Object.keyOf(this,a);
},hasValue:function(a){return Object.contains(this,a);},extend:function(a){Hash.each(a||{},function(c,b){Hash.set(this,b,c);},this);return this;},combine:function(a){Hash.each(a||{},function(c,b){Hash.include(this,b,c);
},this);return this;},erase:function(a){if(this.hasOwnProperty(a)){delete this[a];}return this;},get:function(a){return(this.hasOwnProperty(a))?this[a]:null;
},set:function(a,b){if(!this[a]||this.hasOwnProperty(a)){this[a]=b;}return this;},empty:function(){Hash.each(this,function(b,a){delete this[a];},this);
return this;},include:function(a,b){if(this[a]==null){this[a]=b;}return this;},map:function(a,b){return new Hash(Object.map(this,a,b));},filter:function(a,b){return new Hash(Object.filter(this,a,b));
},every:function(a,b){return Object.every(this,a,b);},some:function(a,b){return Object.some(this,a,b);},getKeys:function(){return Object.keys(this);},getValues:function(){return Object.values(this);
},toQueryString:function(a){return Object.toQueryString(this,a);}});Hash.extend=Object.append;Hash.alias({indexOf:"keyOf",contains:"hasValue"});(function(){var k=this.document;
var h=k.window=this;var a=navigator.userAgent.toLowerCase(),b=navigator.platform.toLowerCase(),i=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],f=i[1]=="ie"&&k.documentMode;
var o=this.Browser={extend:Function.prototype.extend,name:(i[1]=="version")?i[3]:i[1],version:f||parseFloat((i[1]=="opera"&&i[4])?i[4]:i[2]),Platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||b.match(/mac|win|linux/)||["other"])[0]},Features:{xpath:!!(k.evaluate),air:!!(h.runtime),query:!!(k.querySelector),json:!!(h.JSON)},Plugins:{}};
o[o.name]=true;o[o.name+parseInt(o.version,10)]=true;o.Platform[o.Platform.name]=true;o.Request=(function(){var q=function(){return new XMLHttpRequest();
};var p=function(){return new ActiveXObject("MSXML2.XMLHTTP");};var e=function(){return new ActiveXObject("Microsoft.XMLHTTP");};return Function.attempt(function(){q();
return q;},function(){p();return p;},function(){e();return e;});})();o.Features.xhr=!!(o.Request);var j=(Function.attempt(function(){return navigator.plugins["Shockwave Flash"].description;
},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");})||"0 r0").match(/\d+/g);o.Plugins.Flash={version:Number(j[0]||"0."+j[1])||0,build:Number(j[2])||0};
o.exec=function(p){if(!p){return p;}if(h.execScript){h.execScript(p);}else{var e=k.createElement("script");e.setAttribute("type","text/javascript");e.text=p;
k.head.appendChild(e);k.head.removeChild(e);}return p;};String.implement("stripScripts",function(p){var e="";var q=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(r,s){e+=s+"\n";
return"";});if(p===true){o.exec(e);}else{if(typeOf(p)=="function"){p(e,q);}}return q;});o.extend({Document:this.Document,Window:this.Window,Element:this.Element,Event:this.Event});
this.Window=this.$constructor=new Type("Window",function(){});this.$family=Function.from("window").hide();Window.mirror(function(e,p){h[e]=p;});this.Document=k.$constructor=new Type("Document",function(){});
k.$family=Function.from("document").hide();Document.mirror(function(e,p){k[e]=p;});k.html=k.documentElement;if(!k.head){k.head=k.getElementsByTagName("head")[0];
}if(k.execCommand){try{k.execCommand("BackgroundImageCache",false,true);}catch(g){}}if(this.attachEvent&&!this.addEventListener){var c=function(){this.detachEvent("onunload",c);
k.head=k.html=k.window=null;};this.attachEvent("onunload",c);}var m=Array.from;try{m(k.html.childNodes);}catch(g){Array.from=function(p){if(typeof p!="string"&&Type.isEnumerable(p)&&typeOf(p)!="array"){var e=p.length,q=new Array(e);
while(e--){q[e]=p[e];}return q;}return m(p);};var l=Array.prototype,n=l.slice;["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice"].each(function(e){var p=l[e];
Array[e]=function(q){return p.apply(Array.from(q),n.call(arguments,1));};});}if(o.Platform.ios){o.Platform.ipod=true;}o.Engine={};var d=function(p,e){o.Engine.name=p;
o.Engine[p+e]=true;o.Engine.version=e;};if(o.ie){o.Engine.trident=true;switch(o.version){case 6:d("trident",4);break;case 7:d("trident",5);break;case 8:d("trident",6);
}}if(o.firefox){o.Engine.gecko=true;if(o.version>=3){d("gecko",19);}else{d("gecko",18);}}if(o.safari||o.chrome){o.Engine.webkit=true;switch(o.version){case 2:d("webkit",419);
break;case 3:d("webkit",420);break;case 4:d("webkit",525);}}if(o.opera){o.Engine.presto=true;if(o.version>=9.6){d("presto",960);}else{if(o.version>=9.5){d("presto",950);
}else{d("presto",925);}}}if(o.name=="unknown"){switch((a.match(/(?:webkit|khtml|gecko)/)||[])[0]){case"webkit":case"khtml":o.Engine.webkit=true;break;case"gecko":o.Engine.gecko=true;
}}this.$exec=o.exec;})();(function(){var b={};var a=this.DOMEvent=new Type("DOMEvent",function(c,g){if(!g){g=window;}c=c||g.event;if(c.$extended){return c;
}this.event=c;this.$extended=true;this.shift=c.shiftKey;this.control=c.ctrlKey;this.alt=c.altKey;this.meta=c.metaKey;var i=this.type=c.type;var h=c.target||c.srcElement;
while(h&&h.nodeType==3){h=h.parentNode;}this.target=document.id(h);if(i.indexOf("key")==0){var d=this.code=(c.which||c.keyCode);this.key=b[d]||Object.keyOf(Event.Keys,d);
if(i=="keydown"){if(d>111&&d<124){this.key="f"+(d-111);}else{if(d>95&&d<106){this.key=d-96;}}}if(this.key==null){this.key=String.fromCharCode(d).toLowerCase();
}}else{if(i=="click"||i=="dblclick"||i=="contextmenu"||i=="DOMMouseScroll"||i.indexOf("mouse")==0){var j=g.document;j=(!j.compatMode||j.compatMode=="CSS1Compat")?j.html:j.body;
this.page={x:(c.pageX!=null)?c.pageX:c.clientX+j.scrollLeft,y:(c.pageY!=null)?c.pageY:c.clientY+j.scrollTop};this.client={x:(c.pageX!=null)?c.pageX-g.pageXOffset:c.clientX,y:(c.pageY!=null)?c.pageY-g.pageYOffset:c.clientY};
if(i=="DOMMouseScroll"||i=="mousewheel"){this.wheel=(c.wheelDelta)?c.wheelDelta/120:-(c.detail||0)/3;}this.rightClick=(c.which==3||c.button==2);if(i=="mouseover"||i=="mouseout"){var k=c.relatedTarget||c[(i=="mouseover"?"from":"to")+"Element"];
while(k&&k.nodeType==3){k=k.parentNode;}this.relatedTarget=document.id(k);}}else{if(i.indexOf("touch")==0||i.indexOf("gesture")==0){this.rotation=c.rotation;
this.scale=c.scale;this.targetTouches=c.targetTouches;this.changedTouches=c.changedTouches;var f=this.touches=c.touches;if(f&&f[0]){var e=f[0];this.page={x:e.pageX,y:e.pageY};
this.client={x:e.clientX,y:e.clientY};}}}}if(!this.client){this.client={};}if(!this.page){this.page={};}});a.implement({stop:function(){return this.preventDefault().stopPropagation();
},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation();}else{this.event.cancelBubble=true;}return this;},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault();
}else{this.event.returnValue=false;}return this;}});a.defineKey=function(d,c){b[d]=c;return this;};a.defineKeys=a.defineKey.overloadSetter(true);a.defineKeys({"38":"up","40":"down","37":"left","39":"right","27":"esc","32":"space","8":"backspace","9":"tab","46":"delete","13":"enter"});
})();var Event=DOMEvent;Event.Keys={};Event.Keys=new Hash(Event.Keys);(function(){var a=this.Class=new Type("Class",function(h){if(instanceOf(h,Function)){h={initialize:h};
}var g=function(){e(this);if(g.$prototyping){return this;}this.$caller=null;var i=(this.initialize)?this.initialize.apply(this,arguments):this;this.$caller=this.caller=null;
return i;}.extend(this).implement(h);g.$constructor=a;g.prototype.$constructor=g;g.prototype.parent=c;return g;});var c=function(){if(!this.$caller){throw new Error('The method "parent" cannot be called.');
}var g=this.$caller.$name,h=this.$caller.$owner.parent,i=(h)?h.prototype[g]:null;if(!i){throw new Error('The method "'+g+'" has no parent.');}return i.apply(this,arguments);
};var e=function(g){for(var h in g){var j=g[h];switch(typeOf(j)){case"object":var i=function(){};i.prototype=j;g[h]=e(new i);break;case"array":g[h]=j.clone();
break;}}return g;};var b=function(g,h,j){if(j.$origin){j=j.$origin;}var i=function(){if(j.$protected&&this.$caller==null){throw new Error('The method "'+h+'" cannot be called.');
}var l=this.caller,m=this.$caller;this.caller=m;this.$caller=i;var k=j.apply(this,arguments);this.$caller=m;this.caller=l;return k;}.extend({$owner:g,$origin:j,$name:h});
return i;};var f=function(h,i,g){if(a.Mutators.hasOwnProperty(h)){i=a.Mutators[h].call(this,i);if(i==null){return this;}}if(typeOf(i)=="function"){if(i.$hidden){return this;
}this.prototype[h]=(g)?i:b(this,h,i);}else{Object.merge(this.prototype,h,i);}return this;};var d=function(g){g.$prototyping=true;var h=new g;delete g.$prototyping;
return h;};a.implement("implement",f.overloadSetter());a.Mutators={Extends:function(g){this.parent=g;this.prototype=d(g);},Implements:function(g){Array.from(g).each(function(j){var h=new j;
for(var i in h){f.call(this,i,h[i],true);}},this);}};})();(function(){this.Chain=new Class({$chain:[],chain:function(){this.$chain.append(Array.flatten(arguments));
return this;},callChain:function(){return(this.$chain.length)?this.$chain.shift().apply(this,arguments):false;},clearChain:function(){this.$chain.empty();
return this;}});var a=function(b){return b.replace(/^on([A-Z])/,function(c,d){return d.toLowerCase();});};this.Events=new Class({$events:{},addEvent:function(d,c,b){d=a(d);
if(c==$empty){return this;}this.$events[d]=(this.$events[d]||[]).include(c);if(b){c.internal=true;}return this;},addEvents:function(b){for(var c in b){this.addEvent(c,b[c]);
}return this;},fireEvent:function(e,c,b){e=a(e);var d=this.$events[e];if(!d){return this;}c=Array.from(c);d.each(function(f){if(b){f.delay(b,this,c);}else{f.apply(this,c);
}},this);return this;},removeEvent:function(e,d){e=a(e);var c=this.$events[e];if(c&&!d.internal){var b=c.indexOf(d);if(b!=-1){delete c[b];}}return this;
},removeEvents:function(d){var e;if(typeOf(d)=="object"){for(e in d){this.removeEvent(e,d[e]);}return this;}if(d){d=a(d);}for(e in this.$events){if(d&&d!=e){continue;
}var c=this.$events[e];for(var b=c.length;b--;){if(b in c){this.removeEvent(e,c[b]);}}}return this;}});this.Options=new Class({setOptions:function(){var b=this.options=Object.merge.apply(null,[{},this.options].append(arguments));
if(this.addEvent){for(var c in b){if(typeOf(b[c])!="function"||!(/^on[A-Z]/).test(c)){continue;}this.addEvent(c,b[c]);delete b[c];}}return this;}});})();
(function(){var k,n,l,g,a={},c={},m=/\\/g;var e=function(q,p){if(q==null){return null;}if(q.Slick===true){return q;}q=(""+q).replace(/^\s+|\s+$/g,"");g=!!p;
var o=(g)?c:a;if(o[q]){return o[q];}k={Slick:true,expressions:[],raw:q,reverse:function(){return e(this.raw,true);}};n=-1;while(q!=(q=q.replace(j,b))){}k.length=k.expressions.length;
return o[k.raw]=(g)?h(k):k;};var i=function(o){if(o==="!"){return" ";}else{if(o===" "){return"!";}else{if((/^!/).test(o)){return o.replace(/^!/,"");}else{return"!"+o;
}}}};var h=function(u){var r=u.expressions;for(var p=0;p<r.length;p++){var t=r[p];var q={parts:[],tag:"*",combinator:i(t[0].combinator)};for(var o=0;o<t.length;
o++){var s=t[o];if(!s.reverseCombinator){s.reverseCombinator=" ";}s.combinator=s.reverseCombinator;delete s.reverseCombinator;}t.reverse().push(q);}return u;
};var f=function(o){return o.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(p){return"\\"+p;});};var j=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+f(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));
function b(x,s,D,z,r,C,q,B,A,y,u,F,G,v,p,w){if(s||n===-1){k.expressions[++n]=[];l=-1;if(s){return"";}}if(D||z||l===-1){D=D||" ";var t=k.expressions[n];
if(g&&t[l]){t[l].reverseCombinator=i(D);}t[++l]={combinator:D,tag:"*"};}var o=k.expressions[n][l];if(r){o.tag=r.replace(m,"");}else{if(C){o.id=C.replace(m,"");
}else{if(q){q=q.replace(m,"");if(!o.classList){o.classList=[];}if(!o.classes){o.classes=[];}o.classList.push(q);o.classes.push({value:q,regexp:new RegExp("(^|\\s)"+f(q)+"(\\s|$)")});
}else{if(G){w=w||p;w=w?w.replace(m,""):null;if(!o.pseudos){o.pseudos=[];}o.pseudos.push({key:G.replace(m,""),value:w,type:F.length==1?"class":"element"});
}else{if(B){B=B.replace(m,"");u=(u||"").replace(m,"");var E,H;switch(A){case"^=":H=new RegExp("^"+f(u));break;case"$=":H=new RegExp(f(u)+"$");break;case"~=":H=new RegExp("(^|\\s)"+f(u)+"(\\s|$)");
break;case"|=":H=new RegExp("^"+f(u)+"(-|$)");break;case"=":E=function(I){return u==I;};break;case"*=":E=function(I){return I&&I.indexOf(u)>-1;};break;
case"!=":E=function(I){return u!=I;};break;default:E=function(I){return !!I;};}if(u==""&&(/^[*$^]=$/).test(A)){E=function(){return false;};}if(!E){E=function(I){return I&&H.test(I);
};}if(!o.attributes){o.attributes=[];}o.attributes.push({key:B,operator:A,value:u,test:E});}}}}}return"";}var d=(this.Slick||{});d.parse=function(o){return e(o);
};d.escapeRegExp=f;if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);(function(){var k={},m={},d=Object.prototype.toString;
k.isNativeCode=function(c){return(/\{\s*\[native code\]\s*\}/).test(""+c);};k.isXML=function(c){return(!!c.xmlVersion)||(!!c.xml)||(d.call(c)=="[object XMLDocument]")||(c.nodeType==9&&c.documentElement.nodeName!="HTML");
};k.setDocument=function(w){var p=w.nodeType;if(p==9){}else{if(p){w=w.ownerDocument;}else{if(w.navigator){w=w.document;}else{return;}}}if(this.document===w){return;
}this.document=w;var A=w.documentElement,o=this.getUIDXML(A),s=m[o],r;if(s){for(r in s){this[r]=s[r];}return;}s=m[o]={};s.root=A;s.isXMLDocument=this.isXML(w);
s.brokenStarGEBTN=s.starSelectsClosedQSA=s.idGetsName=s.brokenMixedCaseQSA=s.brokenGEBCN=s.brokenCheckedQSA=s.brokenEmptyAttributeQSA=s.isHTMLDocument=s.nativeMatchesSelector=false;
var q,u,y,z,t;var x,v="slick_uniqueid";var c=w.createElement("div");var n=w.body||w.getElementsByTagName("body")[0]||A;n.appendChild(c);try{c.innerHTML='<a id="'+v+'"></a>';
s.isHTMLDocument=!!w.getElementById(v);}catch(C){}if(s.isHTMLDocument){c.style.display="none";c.appendChild(w.createComment(""));u=(c.getElementsByTagName("*").length>1);
try{c.innerHTML="foo</foo>";x=c.getElementsByTagName("*");q=(x&&!!x.length&&x[0].nodeName.charAt(0)=="/");}catch(C){}s.brokenStarGEBTN=u||q;try{c.innerHTML='<a name="'+v+'"></a><b id="'+v+'"></b>';
s.idGetsName=w.getElementById(v)===c.firstChild;}catch(C){}if(c.getElementsByClassName){try{c.innerHTML='<a class="f"></a><a class="b"></a>';c.getElementsByClassName("b").length;
c.firstChild.className="b";z=(c.getElementsByClassName("b").length!=2);}catch(C){}try{c.innerHTML='<a class="a"></a><a class="f b a"></a>';y=(c.getElementsByClassName("a").length!=2);
}catch(C){}s.brokenGEBCN=z||y;}if(c.querySelectorAll){try{c.innerHTML="foo</foo>";x=c.querySelectorAll("*");s.starSelectsClosedQSA=(x&&!!x.length&&x[0].nodeName.charAt(0)=="/");
}catch(C){}try{c.innerHTML='<a class="MiX"></a>';s.brokenMixedCaseQSA=!c.querySelectorAll(".MiX").length;}catch(C){}try{c.innerHTML='<select><option selected="selected">a</option></select>';
s.brokenCheckedQSA=(c.querySelectorAll(":checked").length==0);}catch(C){}try{c.innerHTML='<a class=""></a>';s.brokenEmptyAttributeQSA=(c.querySelectorAll('[class*=""]').length!=0);
}catch(C){}}try{c.innerHTML='<form action="s"><input id="action"/></form>';t=(c.firstChild.getAttribute("action")!="s");}catch(C){}s.nativeMatchesSelector=A.matchesSelector||A.mozMatchesSelector||A.webkitMatchesSelector;
if(s.nativeMatchesSelector){try{s.nativeMatchesSelector.call(A,":slick");s.nativeMatchesSelector=null;}catch(C){}}}try{A.slick_expando=1;delete A.slick_expando;
s.getUID=this.getUIDHTML;}catch(C){s.getUID=this.getUIDXML;}n.removeChild(c);c=x=n=null;s.getAttribute=(s.isHTMLDocument&&t)?function(G,E){var H=this.attributeGetters[E];
if(H){return H.call(G);}var F=G.getAttributeNode(E);return(F)?F.nodeValue:null;}:function(F,E){var G=this.attributeGetters[E];return(G)?G.call(F):F.getAttribute(E);
};s.hasAttribute=(A&&this.isNativeCode(A.hasAttribute))?function(F,E){return F.hasAttribute(E);}:function(F,E){F=F.getAttributeNode(E);return !!(F&&(F.specified||F.nodeValue));
};var D=A&&this.isNativeCode(A.contains),B=w&&this.isNativeCode(w.contains);s.contains=(D&&B)?function(E,F){return E.contains(F);}:(D&&!B)?function(E,F){return E===F||((E===w)?w.documentElement:E).contains(F);
}:(A&&A.compareDocumentPosition)?function(E,F){return E===F||!!(E.compareDocumentPosition(F)&16);}:function(E,F){if(F){do{if(F===E){return true;}}while((F=F.parentNode));
}return false;};s.documentSorter=(A.compareDocumentPosition)?function(F,E){if(!F.compareDocumentPosition||!E.compareDocumentPosition){return 0;}return F.compareDocumentPosition(E)&4?-1:F===E?0:1;
}:("sourceIndex" in A)?function(F,E){if(!F.sourceIndex||!E.sourceIndex){return 0;}return F.sourceIndex-E.sourceIndex;}:(w.createRange)?function(H,F){if(!H.ownerDocument||!F.ownerDocument){return 0;
}var G=H.ownerDocument.createRange(),E=F.ownerDocument.createRange();G.setStart(H,0);G.setEnd(H,0);E.setStart(F,0);E.setEnd(F,0);return G.compareBoundaryPoints(Range.START_TO_END,E);
}:null;A=null;for(r in s){this[r]=s[r];}};var f=/^([#.]?)((?:[\w-]+|\*))$/,h=/\[.+[*$^]=(?:""|'')?\]/,g={};k.search=function(U,z,H,s){var p=this.found=(s)?null:(H||[]);
if(!U){return p;}else{if(U.navigator){U=U.document;}else{if(!U.nodeType){return p;}}}var F,O,V=this.uniques={},I=!!(H&&H.length),y=(U.nodeType==9);if(this.document!==(y?U:U.ownerDocument)){this.setDocument(U);
}if(I){for(O=p.length;O--;){V[this.getUID(p[O])]=true;}}if(typeof z=="string"){var r=z.match(f);simpleSelectors:if(r){var u=r[1],v=r[2],A,E;if(!u){if(v=="*"&&this.brokenStarGEBTN){break simpleSelectors;
}E=U.getElementsByTagName(v);if(s){return E[0]||null;}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{if(u=="#"){if(!this.isHTMLDocument||!y){break simpleSelectors;
}A=U.getElementById(v);if(!A){return p;}if(this.idGetsName&&A.getAttributeNode("id").nodeValue!=v){break simpleSelectors;}if(s){return A||null;}if(!(I&&V[this.getUID(A)])){p.push(A);
}}else{if(u=="."){if(!this.isHTMLDocument||((!U.getElementsByClassName||this.brokenGEBCN)&&U.querySelectorAll)){break simpleSelectors;}if(U.getElementsByClassName&&!this.brokenGEBCN){E=U.getElementsByClassName(v);
if(s){return E[0]||null;}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{var T=new RegExp("(^|\\s)"+e.escapeRegExp(v)+"(\\s|$)");E=U.getElementsByTagName("*");
for(O=0;A=E[O++];){className=A.className;if(!(className&&T.test(className))){continue;}if(s){return A;}if(!(I&&V[this.getUID(A)])){p.push(A);}}}}}}if(I){this.sort(p);
}return(s)?null:p;}querySelector:if(U.querySelectorAll){if(!this.isHTMLDocument||g[z]||this.brokenMixedCaseQSA||(this.brokenCheckedQSA&&z.indexOf(":checked")>-1)||(this.brokenEmptyAttributeQSA&&h.test(z))||(!y&&z.indexOf(",")>-1)||e.disableQSA){break querySelector;
}var S=z,x=U;if(!y){var C=x.getAttribute("id"),t="slickid__";x.setAttribute("id",t);S="#"+t+" "+S;U=x.parentNode;}try{if(s){return U.querySelector(S)||null;
}else{E=U.querySelectorAll(S);}}catch(Q){g[z]=1;break querySelector;}finally{if(!y){if(C){x.setAttribute("id",C);}else{x.removeAttribute("id");}U=x;}}if(this.starSelectsClosedQSA){for(O=0;
A=E[O++];){if(A.nodeName>"@"&&!(I&&V[this.getUID(A)])){p.push(A);}}}else{for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}if(I){this.sort(p);
}return p;}F=this.Slick.parse(z);if(!F.length){return p;}}else{if(z==null){return p;}else{if(z.Slick){F=z;}else{if(this.contains(U.documentElement||U,z)){(p)?p.push(z):p=z;
return p;}else{return p;}}}}this.posNTH={};this.posNTHLast={};this.posNTHType={};this.posNTHTypeLast={};this.push=(!I&&(s||(F.length==1&&F.expressions[0].length==1)))?this.pushArray:this.pushUID;
if(p==null){p=[];}var M,L,K;var B,J,D,c,q,G,W;var N,P,o,w,R=F.expressions;search:for(O=0;(P=R[O]);O++){for(M=0;(o=P[M]);M++){B="combinator:"+o.combinator;
if(!this[B]){continue search;}J=(this.isXMLDocument)?o.tag:o.tag.toUpperCase();D=o.id;c=o.classList;q=o.classes;G=o.attributes;W=o.pseudos;w=(M===(P.length-1));
this.bitUniques={};if(w){this.uniques=V;this.found=p;}else{this.uniques={};this.found=[];}if(M===0){this[B](U,J,D,q,G,W,c);if(s&&w&&p.length){break search;
}}else{if(s&&w){for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);if(p.length){break search;}}}else{for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);
}}}N=this.found;}}if(I||(F.expressions.length>1)){this.sort(p);}return(s)?(p[0]||null):p;};k.uidx=1;k.uidk="slick-uniqueid";k.getUIDXML=function(n){var c=n.getAttribute(this.uidk);
if(!c){c=this.uidx++;n.setAttribute(this.uidk,c);}return c;};k.getUIDHTML=function(c){return c.uniqueNumber||(c.uniqueNumber=this.uidx++);};k.sort=function(c){if(!this.documentSorter){return c;
}c.sort(this.documentSorter);return c;};k.cacheNTH={};k.matchNTH=/^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/;k.parseNTHArgument=function(q){var o=q.match(this.matchNTH);
if(!o){return false;}var p=o[2]||false;var n=o[1]||1;if(n=="-"){n=-1;}var c=+o[3]||0;o=(p=="n")?{a:n,b:c}:(p=="odd")?{a:2,b:1}:(p=="even")?{a:2,b:0}:{a:0,b:n};
return(this.cacheNTH[q]=o);};k.createNTHPseudo=function(p,n,c,o){return function(s,q){var u=this.getUID(s);if(!this[c][u]){var A=s.parentNode;if(!A){return false;
}var r=A[p],t=1;if(o){var z=s.nodeName;do{if(r.nodeName!=z){continue;}this[c][this.getUID(r)]=t++;}while((r=r[n]));}else{do{if(r.nodeType!=1){continue;
}this[c][this.getUID(r)]=t++;}while((r=r[n]));}}q=q||"n";var v=this.cacheNTH[q]||this.parseNTHArgument(q);if(!v){return false;}var y=v.a,x=v.b,w=this[c][u];
if(y==0){return x==w;}if(y>0){if(w<x){return false;}}else{if(x<w){return false;}}return((w-x)%y)==0;};};k.pushArray=function(p,c,r,o,n,q){if(this.matchSelector(p,c,r,o,n,q)){this.found.push(p);
}};k.pushUID=function(q,c,s,p,n,r){var o=this.getUID(q);if(!this.uniques[o]&&this.matchSelector(q,c,s,p,n,r)){this.uniques[o]=true;this.found.push(q);}};
k.matchNode=function(n,o){if(this.isHTMLDocument&&this.nativeMatchesSelector){try{return this.nativeMatchesSelector.call(n,o.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'));
}catch(u){}}var t=this.Slick.parse(o);if(!t){return true;}var r=t.expressions,s=0,q;for(q=0;(currentExpression=r[q]);q++){if(currentExpression.length==1){var p=currentExpression[0];
if(this.matchSelector(n,(this.isXMLDocument)?p.tag:p.tag.toUpperCase(),p.id,p.classes,p.attributes,p.pseudos)){return true;}s++;}}if(s==t.length){return false;
}var c=this.search(this.document,t),v;for(q=0;v=c[q++];){if(v===n){return true;}}return false;};k.matchPseudo=function(q,c,p){var n="pseudo:"+c;if(this[n]){return this[n](q,p);
}var o=this.getAttribute(q,c);return(p)?p==o:!!o;};k.matchSelector=function(o,v,c,p,q,s){if(v){var t=(this.isXMLDocument)?o.nodeName:o.nodeName.toUpperCase();
if(v=="*"){if(t<"@"){return false;}}else{if(t!=v){return false;}}}if(c&&o.getAttribute("id")!=c){return false;}var r,n,u;if(p){for(r=p.length;r--;){u=this.getAttribute(o,"class");
if(!(u&&p[r].regexp.test(u))){return false;}}}if(q){for(r=q.length;r--;){n=q[r];if(n.operator?!n.test(this.getAttribute(o,n.key)):!this.hasAttribute(o,n.key)){return false;
}}}if(s){for(r=s.length;r--;){n=s[r];if(!this.matchPseudo(o,n.key,n.value)){return false;}}}return true;};var j={" ":function(q,w,n,r,s,u,p){var t,v,o;
if(this.isHTMLDocument){getById:if(n){v=this.document.getElementById(n);if((!v&&q.all)||(this.idGetsName&&v&&v.getAttributeNode("id").nodeValue!=n)){o=q.all[n];
if(!o){return;}if(!o[0]){o=[o];}for(t=0;v=o[t++];){var c=v.getAttributeNode("id");if(c&&c.nodeValue==n){this.push(v,w,null,r,s,u);break;}}return;}if(!v){if(this.contains(this.root,q)){return;
}else{break getById;}}else{if(this.document!==q&&!this.contains(q,v)){return;}}this.push(v,w,null,r,s,u);return;}getByClass:if(r&&q.getElementsByClassName&&!this.brokenGEBCN){o=q.getElementsByClassName(p.join(" "));
if(!(o&&o.length)){break getByClass;}for(t=0;v=o[t++];){this.push(v,w,n,null,s,u);}return;}}getByTag:{o=q.getElementsByTagName(w);if(!(o&&o.length)){break getByTag;
}if(!this.brokenStarGEBTN){w=null;}for(t=0;v=o[t++];){this.push(v,w,n,r,s,u);}}},">":function(p,c,r,o,n,q){if((p=p.firstChild)){do{if(p.nodeType==1){this.push(p,c,r,o,n,q);
}}while((p=p.nextSibling));}},"+":function(p,c,r,o,n,q){while((p=p.nextSibling)){if(p.nodeType==1){this.push(p,c,r,o,n,q);break;}}},"^":function(p,c,r,o,n,q){p=p.firstChild;
if(p){if(p.nodeType==1){this.push(p,c,r,o,n,q);}else{this["combinator:+"](p,c,r,o,n,q);}}},"~":function(q,c,s,p,n,r){while((q=q.nextSibling)){if(q.nodeType!=1){continue;
}var o=this.getUID(q);if(this.bitUniques[o]){break;}this.bitUniques[o]=true;this.push(q,c,s,p,n,r);}},"++":function(p,c,r,o,n,q){this["combinator:+"](p,c,r,o,n,q);
this["combinator:!+"](p,c,r,o,n,q);},"~~":function(p,c,r,o,n,q){this["combinator:~"](p,c,r,o,n,q);this["combinator:!~"](p,c,r,o,n,q);},"!":function(p,c,r,o,n,q){while((p=p.parentNode)){if(p!==this.document){this.push(p,c,r,o,n,q);
}}},"!>":function(p,c,r,o,n,q){p=p.parentNode;if(p!==this.document){this.push(p,c,r,o,n,q);}},"!+":function(p,c,r,o,n,q){while((p=p.previousSibling)){if(p.nodeType==1){this.push(p,c,r,o,n,q);
break;}}},"!^":function(p,c,r,o,n,q){p=p.lastChild;if(p){if(p.nodeType==1){this.push(p,c,r,o,n,q);}else{this["combinator:!+"](p,c,r,o,n,q);}}},"!~":function(q,c,s,p,n,r){while((q=q.previousSibling)){if(q.nodeType!=1){continue;
}var o=this.getUID(q);if(this.bitUniques[o]){break;}this.bitUniques[o]=true;this.push(q,c,s,p,n,r);}}};for(var i in j){k["combinator:"+i]=j[i];}var l={empty:function(c){var n=c.firstChild;
return !(n&&n.nodeType==1)&&!(c.innerText||c.textContent||"").length;},not:function(c,n){return !this.matchNode(c,n);},contains:function(c,n){return(c.innerText||c.textContent||"").indexOf(n)>-1;
},"first-child":function(c){while((c=c.previousSibling)){if(c.nodeType==1){return false;}}return true;},"last-child":function(c){while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"only-child":function(o){var n=o;while((n=n.previousSibling)){if(n.nodeType==1){return false;}}var c=o;while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"nth-child":k.createNTHPseudo("firstChild","nextSibling","posNTH"),"nth-last-child":k.createNTHPseudo("lastChild","previousSibling","posNTHLast"),"nth-of-type":k.createNTHPseudo("firstChild","nextSibling","posNTHType",true),"nth-last-of-type":k.createNTHPseudo("lastChild","previousSibling","posNTHTypeLast",true),index:function(n,c){return this["pseudo:nth-child"](n,""+(c+1));
},even:function(c){return this["pseudo:nth-child"](c,"2n");},odd:function(c){return this["pseudo:nth-child"](c,"2n+1");},"first-of-type":function(c){var n=c.nodeName;
while((c=c.previousSibling)){if(c.nodeName==n){return false;}}return true;},"last-of-type":function(c){var n=c.nodeName;while((c=c.nextSibling)){if(c.nodeName==n){return false;
}}return true;},"only-of-type":function(o){var n=o,p=o.nodeName;while((n=n.previousSibling)){if(n.nodeName==p){return false;}}var c=o;while((c=c.nextSibling)){if(c.nodeName==p){return false;
}}return true;},enabled:function(c){return !c.disabled;},disabled:function(c){return c.disabled;},checked:function(c){return c.checked||c.selected;},focus:function(c){return this.isHTMLDocument&&this.document.activeElement===c&&(c.href||c.type||this.hasAttribute(c,"tabindex"));
},root:function(c){return(c===this.root);},selected:function(c){return c.selected;}};for(var b in l){k["pseudo:"+b]=l[b];}var a=k.attributeGetters={"for":function(){return("htmlFor" in this)?this.htmlFor:this.getAttribute("for");
},href:function(){return("href" in this)?this.getAttribute("href",2):this.getAttribute("href");},style:function(){return(this.style)?this.style.cssText:this.getAttribute("style");
},tabindex:function(){var c=this.getAttributeNode("tabindex");return(c&&c.specified)?c.nodeValue:null;},type:function(){return this.getAttribute("type");
},maxlength:function(){var c=this.getAttributeNode("maxLength");return(c&&c.specified)?c.nodeValue:null;}};a.MAXLENGTH=a.maxLength=a.maxlength;var e=k.Slick=(this.Slick||{});
e.version="1.1.7";e.search=function(n,o,c){return k.search(n,o,c);};e.find=function(c,n){return k.search(c,n,null,true);};e.contains=function(c,n){k.setDocument(c);
return k.contains(c,n);};e.getAttribute=function(n,c){k.setDocument(n);return k.getAttribute(n,c);};e.hasAttribute=function(n,c){k.setDocument(n);return k.hasAttribute(n,c);
};e.match=function(n,c){if(!(n&&c)){return false;}if(!c||c===n){return true;}k.setDocument(n);return k.matchNode(n,c);};e.defineAttributeGetter=function(c,n){k.attributeGetters[c]=n;
return this;};e.lookupAttributeGetter=function(c){return k.attributeGetters[c];};e.definePseudo=function(c,n){k["pseudo:"+c]=function(p,o){return n.call(p,o);
};return this;};e.lookupPseudo=function(c){var n=k["pseudo:"+c];if(n){return function(o){return n.call(this,o);};}return null;};e.override=function(n,c){k.override(n,c);
return this;};e.isXML=k.isXML;e.uidOf=function(c){return k.getUIDHTML(c);};if(!this.Slick){this.Slick=e;}}).apply((typeof exports!="undefined")?exports:this);
var Element=function(b,g){var h=Element.Constructors[b];if(h){return h(g);}if(typeof b!="string"){return document.id(b).set(g);}if(!g){g={};}if(!(/^[\w-]+$/).test(b)){var e=Slick.parse(b).expressions[0][0];
b=(e.tag=="*")?"div":e.tag;if(e.id&&g.id==null){g.id=e.id;}var d=e.attributes;if(d){for(var a,f=0,c=d.length;f<c;f++){a=d[f];if(g[a.key]!=null){continue;
}if(a.value!=null&&a.operator=="="){g[a.key]=a.value;}else{if(!a.value&&!a.operator){g[a.key]=true;}}}}if(e.classList&&g["class"]==null){g["class"]=e.classList.join(" ");
}}return document.newElement(b,g);};if(Browser.Element){Element.prototype=Browser.Element.prototype;Element.prototype._fireEvent=(function(a){return function(b,c){return a.call(this,b,c);
};})(Element.prototype.fireEvent);}new Type("Element",Element).mirror(function(a){if(Array.prototype[a]){return;}var b={};b[a]=function(){var h=[],e=arguments,j=true;
for(var g=0,d=this.length;g<d;g++){var f=this[g],c=h[g]=f[a].apply(f,e);j=(j&&typeOf(c)=="element");}return(j)?new Elements(h):h;};Elements.implement(b);
});if(!Browser.Element){Element.parent=Object;Element.Prototype={"$constructor":Element,"$family":Function.from("element").hide()};Element.mirror(function(a,b){Element.Prototype[a]=b;
});}Element.Constructors={};Element.Constructors=new Hash;var IFrame=new Type("IFrame",function(){var e=Array.link(arguments,{properties:Type.isObject,iframe:function(f){return(f!=null);
}});var c=e.properties||{},b;if(e.iframe){b=document.id(e.iframe);}var d=c.onload||function(){};delete c.onload;c.id=c.name=[c.id,c.name,b?(b.id||b.name):"IFrame_"+String.uniqueID()].pick();
b=new Element(b||"iframe",c);var a=function(){d.call(b.contentWindow);};if(window.frames[c.id]){a();}else{b.addListener("load",a);}return b;});var Elements=this.Elements=function(a){if(a&&a.length){var e={},d;
for(var c=0;d=a[c++];){var b=Slick.uidOf(d);if(!e[b]){e[b]=true;this.push(d);}}}};Elements.prototype={length:0};Elements.parent=Array;new Type("Elements",Elements).implement({filter:function(a,b){if(!a){return this;
}return new Elements(Array.filter(this,(typeOf(a)=="string")?function(c){return c.match(a);}:a,b));}.protect(),push:function(){var d=this.length;for(var b=0,a=arguments.length;
b<a;b++){var c=document.id(arguments[b]);if(c){this[d++]=c;}}return(this.length=d);}.protect(),unshift:function(){var b=[];for(var c=0,a=arguments.length;
c<a;c++){var d=document.id(arguments[c]);if(d){b.push(d);}}return Array.prototype.unshift.apply(this,b);}.protect(),concat:function(){var b=new Elements(this);
for(var c=0,a=arguments.length;c<a;c++){var d=arguments[c];if(Type.isEnumerable(d)){b.append(d);}else{b.push(d);}}return b;}.protect(),append:function(c){for(var b=0,a=c.length;
b<a;b++){this.push(c[b]);}return this;}.protect(),empty:function(){while(this.length){delete this[--this.length];}return this;}.protect()});Elements.alias("extend","append");
(function(){var f=Array.prototype.splice,a={"0":0,"1":1,length:2};f.call(a,1,1);if(a[1]==1){Elements.implement("splice",function(){var g=this.length;var e=f.apply(this,arguments);
while(g>=this.length){delete this[g--];}return e;}.protect());}Array.forEachMethod(function(g,e){Elements.implement(e,g);});Array.mirror(Elements);var d;
try{d=(document.createElement("<input name=x>").name=="x");}catch(b){}var c=function(e){return(""+e).replace(/&/g,"&amp;").replace(/"/g,"&quot;");};Document.implement({newElement:function(e,g){if(g&&g.checked!=null){g.defaultChecked=g.checked;
}if(d&&g){e="<"+e;if(g.name){e+=' name="'+c(g.name)+'"';}if(g.type){e+=' type="'+c(g.type)+'"';}e+=">";delete g.name;delete g.type;}return this.id(this.createElement(e)).set(g);
}});})();(function(){Slick.uidOf(window);Slick.uidOf(document);Document.implement({newTextNode:function(e){return this.createTextNode(e);},getDocument:function(){return this;
},getWindow:function(){return this.window;},id:(function(){var e={string:function(E,D,l){E=Slick.find(l,"#"+E.replace(/(\W)/g,"\\$1"));return(E)?e.element(E,D):null;
},element:function(D,E){Slick.uidOf(D);if(!E&&!D.$family&&!(/^(?:object|embed)$/i).test(D.tagName)){var l=D.fireEvent;D._fireEvent=function(F,G){return l(F,G);
};Object.append(D,Element.Prototype);}return D;},object:function(D,E,l){if(D.toElement){return e.element(D.toElement(l),E);}return null;}};e.textnode=e.whitespace=e.window=e.document=function(l){return l;
};return function(D,F,E){if(D&&D.$family&&D.uniqueNumber){return D;}var l=typeOf(D);return(e[l])?e[l](D,F,E||document):null;};})()});if(window.$==null){Window.implement("$",function(e,l){return document.id(e,l,this.document);
});}Window.implement({getDocument:function(){return this.document;},getWindow:function(){return this;}});[Document,Element].invoke("implement",{getElements:function(e){return Slick.search(this,e,new Elements);
},getElement:function(e){return document.id(Slick.find(this,e));}});var m={contains:function(e){return Slick.contains(this,e);}};if(!document.contains){Document.implement(m);
}if(!document.createElement("div").contains){Element.implement(m);}Element.implement("hasChild",function(e){return this!==e&&this.contains(e);});(function(l,E,e){this.Selectors={};
var F=this.Selectors.Pseudo=new Hash();var D=function(){for(var G in F){if(F.hasOwnProperty(G)){Slick.definePseudo(G,F[G]);delete F[G];}}};Slick.search=function(H,I,G){D();
return l.call(this,H,I,G);};Slick.find=function(G,H){D();return E.call(this,G,H);};Slick.match=function(H,G){D();return e.call(this,H,G);};})(Slick.search,Slick.find,Slick.match);
var r=function(E,D){if(!E){return D;}E=Object.clone(Slick.parse(E));var l=E.expressions;for(var e=l.length;e--;){l[e][0].combinator=D;}return E;};Object.forEach({getNext:"~",getPrevious:"!~",getParent:"!"},function(e,l){Element.implement(l,function(D){return this.getElement(r(D,e));
});});Object.forEach({getAllNext:"~",getAllPrevious:"!~",getSiblings:"~~",getChildren:">",getParents:"!"},function(e,l){Element.implement(l,function(D){return this.getElements(r(D,e));
});});Element.implement({getFirst:function(e){return document.id(Slick.search(this,r(e,">"))[0]);},getLast:function(e){return document.id(Slick.search(this,r(e,">")).getLast());
},getWindow:function(){return this.ownerDocument.window;},getDocument:function(){return this.ownerDocument;},getElementById:function(e){return document.id(Slick.find(this,"#"+(""+e).replace(/(\W)/g,"\\$1")));
},match:function(e){return !e||Slick.match(this,e);}});if(window.$$==null){Window.implement("$$",function(e){var H=new Elements;if(arguments.length==1&&typeof e=="string"){return Slick.search(this.document,e,H);
}var E=Array.flatten(arguments);for(var F=0,D=E.length;F<D;F++){var G=E[F];switch(typeOf(G)){case"element":H.push(G);break;case"string":Slick.search(this.document,G,H);
}}return H;});}if(window.$$==null){Window.implement("$$",function(e){if(arguments.length==1){if(typeof e=="string"){return Slick.search(this.document,e,new Elements);
}else{if(Type.isEnumerable(e)){return new Elements(e);}}}return new Elements(arguments);});}var w={before:function(l,e){var D=e.parentNode;if(D){D.insertBefore(l,e);
}},after:function(l,e){var D=e.parentNode;if(D){D.insertBefore(l,e.nextSibling);}},bottom:function(l,e){e.appendChild(l);},top:function(l,e){e.insertBefore(l,e.firstChild);
}};w.inside=w.bottom;Object.each(w,function(l,D){D=D.capitalize();var e={};e["inject"+D]=function(E){l(this,document.id(E,true));return this;};e["grab"+D]=function(E){l(document.id(E,true),this);
return this;};Element.implement(e);});var j={},d={};var k={};Array.forEach(["type","value","defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","rowSpan","tabIndex","useMap"],function(e){k[e.toLowerCase()]=e;
});k.html="innerHTML";k.text=(document.createElement("div").textContent==null)?"innerText":"textContent";Object.forEach(k,function(l,e){d[e]=function(D,E){D[l]=E;
};j[e]=function(D){return D[l];};});var x=["compact","nowrap","ismap","declare","noshade","checked","disabled","readOnly","multiple","selected","noresize","defer","defaultChecked","autofocus","controls","autoplay","loop"];
var h={};Array.forEach(x,function(e){var l=e.toLowerCase();h[l]=e;d[l]=function(D,E){D[e]=!!E;};j[l]=function(D){return !!D[e];};});Object.append(d,{"class":function(e,l){("className" in e)?e.className=(l||""):e.setAttribute("class",l);
},"for":function(e,l){("htmlFor" in e)?e.htmlFor=l:e.setAttribute("for",l);},style:function(e,l){(e.style)?e.style.cssText=l:e.setAttribute("style",l);
},value:function(e,l){e.value=(l!=null)?l:"";}});j["class"]=function(e){return("className" in e)?e.className||null:e.getAttribute("class");};var f=document.createElement("button");
try{f.type="button";}catch(z){}if(f.type!="button"){d.type=function(e,l){e.setAttribute("type",l);};}f=null;var p=document.createElement("input");p.value="t";
p.type="submit";if(p.value!="t"){d.type=function(l,e){var D=l.value;l.type=e;l.value=D;};}p=null;var q=(function(e){e.random="attribute";return(e.getAttribute("random")=="attribute");
})(document.createElement("div"));Element.implement({setProperty:function(l,D){var E=d[l.toLowerCase()];if(E){E(this,D);}else{if(q){var e=this.retrieve("$attributeWhiteList",{});
}if(D==null){this.removeAttribute(l);if(q){delete e[l];}}else{this.setAttribute(l,""+D);if(q){e[l]=true;}}}return this;},setProperties:function(e){for(var l in e){this.setProperty(l,e[l]);
}return this;},getProperty:function(F){var D=j[F.toLowerCase()];if(D){return D(this);}if(q){var l=this.getAttributeNode(F),E=this.retrieve("$attributeWhiteList",{});
if(!l){return null;}if(l.expando&&!E[F]){var G=this.outerHTML;if(G.substr(0,G.search(/\/?['"]?>(?![^<]*<['"])/)).indexOf(F)<0){return null;}E[F]=true;}}var e=Slick.getAttribute(this,F);
return(!e&&!Slick.hasAttribute(this,F))?null:e;},getProperties:function(){var e=Array.from(arguments);return e.map(this.getProperty,this).associate(e);
},removeProperty:function(e){return this.setProperty(e,null);},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this;},set:function(D,l){var e=Element.Properties[D];
(e&&e.set)?e.set.call(this,l):this.setProperty(D,l);}.overloadSetter(),get:function(l){var e=Element.Properties[l];return(e&&e.get)?e.get.apply(this):this.getProperty(l);
}.overloadGetter(),erase:function(l){var e=Element.Properties[l];(e&&e.erase)?e.erase.apply(this):this.removeProperty(l);return this;},hasClass:function(e){return this.className.clean().contains(e," ");
},addClass:function(e){if(!this.hasClass(e)){this.className=(this.className+" "+e).clean();}return this;},removeClass:function(e){this.className=this.className.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)"),"$1");
return this;},toggleClass:function(e,l){if(l==null){l=!this.hasClass(e);}return(l)?this.addClass(e):this.removeClass(e);},adopt:function(){var E=this,e,G=Array.flatten(arguments),F=G.length;
if(F>1){E=e=document.createDocumentFragment();}for(var D=0;D<F;D++){var l=document.id(G[D],true);if(l){E.appendChild(l);}}if(e){this.appendChild(e);}return this;
},appendText:function(l,e){return this.grab(this.getDocument().newTextNode(l),e);},grab:function(l,e){w[e||"bottom"](document.id(l,true),this);return this;
},inject:function(l,e){w[e||"bottom"](this,document.id(l,true));return this;},replaces:function(e){e=document.id(e,true);e.parentNode.replaceChild(this,e);
return this;},wraps:function(l,e){l=document.id(l,true);return this.replaces(l).grab(l,e);},getSelected:function(){this.selectedIndex;return new Elements(Array.from(this.options).filter(function(e){return e.selected;
}));},toQueryString:function(){var e=[];this.getElements("input, select, textarea").each(function(D){var l=D.type;if(!D.name||D.disabled||l=="submit"||l=="reset"||l=="file"||l=="image"){return;
}var E=(D.get("tag")=="select")?D.getSelected().map(function(F){return document.id(F).get("value");}):((l=="radio"||l=="checkbox")&&!D.checked)?null:D.get("value");
Array.from(E).each(function(F){if(typeof F!="undefined"){e.push(encodeURIComponent(D.name)+"="+encodeURIComponent(F));}});});return e.join("&");}});var i={},A={};
var B=function(e){return(A[e]||(A[e]={}));};var v=function(l){var e=l.uniqueNumber;if(l.removeEvents){l.removeEvents();}if(l.clearAttributes){l.clearAttributes();
}if(e!=null){delete i[e];delete A[e];}return l;};var C={input:"checked",option:"selected",textarea:"value"};Element.implement({destroy:function(){var e=v(this).getElementsByTagName("*");
Array.each(e,v);Element.dispose(this);return null;},empty:function(){Array.from(this.childNodes).each(Element.dispose);return this;},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this;
},clone:function(G,E){G=G!==false;var L=this.cloneNode(G),D=[L],F=[this],J;if(G){D.append(Array.from(L.getElementsByTagName("*")));F.append(Array.from(this.getElementsByTagName("*")));
}for(J=D.length;J--;){var H=D[J],K=F[J];if(!E){H.removeAttribute("id");}if(H.clearAttributes){H.clearAttributes();H.mergeAttributes(K);H.removeAttribute("uniqueNumber");
if(H.options){var O=H.options,e=K.options;for(var I=O.length;I--;){O[I].selected=e[I].selected;}}}var l=C[K.tagName.toLowerCase()];if(l&&K[l]){H[l]=K[l];
}}if(Browser.ie){var M=L.getElementsByTagName("object"),N=this.getElementsByTagName("object");for(J=M.length;J--;){M[J].outerHTML=N[J].outerHTML;}}return document.id(L);
}});[Element,Window,Document].invoke("implement",{addListener:function(E,D){if(E=="unload"){var e=D,l=this;D=function(){l.removeListener("unload",D);e();
};}else{i[Slick.uidOf(this)]=this;}if(this.addEventListener){this.addEventListener(E,D,!!arguments[2]);}else{this.attachEvent("on"+E,D);}return this;},removeListener:function(l,e){if(this.removeEventListener){this.removeEventListener(l,e,!!arguments[2]);
}else{this.detachEvent("on"+l,e);}return this;},retrieve:function(l,e){var E=B(Slick.uidOf(this)),D=E[l];if(e!=null&&D==null){D=E[l]=e;}return D!=null?D:null;
},store:function(l,e){var D=B(Slick.uidOf(this));D[l]=e;return this;},eliminate:function(e){var l=B(Slick.uidOf(this));delete l[e];return this;}});if(window.attachEvent&&!window.addEventListener){window.addListener("unload",function(){Object.each(i,v);
if(window.CollectGarbage){CollectGarbage();}});}Element.Properties={};Element.Properties=new Hash;Element.Properties.style={set:function(e){this.style.cssText=e;
},get:function(){return this.style.cssText;},erase:function(){this.style.cssText="";}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase();
}};Element.Properties.html={set:function(e){if(e==null){e="";}else{if(typeOf(e)=="array"){e=e.join("");}}this.innerHTML=e;},erase:function(){this.innerHTML="";
}};var t=document.createElement("div");t.innerHTML="<nav></nav>";var a=(t.childNodes.length==1);if(!a){var s="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "),b=document.createDocumentFragment(),u=s.length;
while(u--){b.createElement(s[u]);}}t=null;var g=Function.attempt(function(){var e=document.createElement("table");e.innerHTML="<tr><td></td></tr>";return true;
});var c=document.createElement("tr"),o="<td></td>";c.innerHTML=o;var y=(c.innerHTML==o);c=null;if(!g||!y||!a){Element.Properties.html.set=(function(l){var e={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};
e.thead=e.tfoot=e.tbody;return function(D){var E=e[this.get("tag")];if(!E&&!a){E=[0,"",""];}if(!E){return l.call(this,D);}var H=E[0],G=document.createElement("div"),F=G;
if(!a){b.appendChild(G);}G.innerHTML=[E[1],D,E[2]].flatten().join("");while(H--){F=F.firstChild;}this.empty().adopt(F.childNodes);if(!a){b.removeChild(G);
}G=null;};})(Element.Properties.html.set);}var n=document.createElement("form");n.innerHTML="<select><option>s</option></select>";if(n.firstChild.value!="s"){Element.Properties.value={set:function(G){var l=this.get("tag");
if(l!="select"){return this.setProperty("value",G);}var D=this.getElements("option");for(var E=0;E<D.length;E++){var F=D[E],e=F.getAttributeNode("value"),H=(e&&e.specified)?F.value:F.get("text");
if(H==G){return F.selected=true;}}},get:function(){var D=this,l=D.get("tag");if(l!="select"&&l!="option"){return this.getProperty("value");}if(l=="select"&&!(D=D.getSelected()[0])){return"";
}var e=D.getAttributeNode("value");return(e&&e.specified)?D.value:D.get("text");}};}n=null;if(document.createElement("div").getAttributeNode("id")){Element.Properties.id={set:function(e){this.id=this.getAttributeNode("id").value=e;
},get:function(){return this.id||null;},erase:function(){this.id=this.getAttributeNode("id").value="";}};}})();(function(){var i=document.html;var d=document.createElement("div");
d.style.color="red";d.style.color=null;var c=d.style.color=="red";d=null;Element.Properties.styles={set:function(k){this.setStyles(k);}};var h=(i.style.opacity!=null),e=(i.style.filter!=null),j=/alpha\(opacity=([\d.]+)\)/i;
var a=function(l,k){l.store("$opacity",k);l.style.visibility=k>0||k==null?"visible":"hidden";};var f=(h?function(l,k){l.style.opacity=k;}:(e?function(l,k){var n=l.style;
if(!l.currentStyle||!l.currentStyle.hasLayout){n.zoom=1;}if(k==null||k==1){k="";}else{k="alpha(opacity="+(k*100).limit(0,100).round()+")";}var m=n.filter||l.getComputedStyle("filter")||"";
n.filter=j.test(m)?m.replace(j,k):m+k;if(!n.filter){n.removeAttribute("filter");}}:a));var g=(h?function(l){var k=l.style.opacity||l.getComputedStyle("opacity");
return(k=="")?1:k.toFloat();}:(e?function(l){var m=(l.style.filter||l.getComputedStyle("filter")),k;if(m){k=m.match(j);}return(k==null||m==null)?1:(k[1]/100);
}:function(l){var k=l.retrieve("$opacity");if(k==null){k=(l.style.visibility=="hidden"?0:1);}return k;}));var b=(i.style.cssFloat==null)?"styleFloat":"cssFloat";
Element.implement({getComputedStyle:function(m){if(this.currentStyle){return this.currentStyle[m.camelCase()];}var l=Element.getDocument(this).defaultView,k=l?l.getComputedStyle(this,null):null;
return(k)?k.getPropertyValue((m==b)?"float":m.hyphenate()):null;},setStyle:function(l,k){if(l=="opacity"){if(k!=null){k=parseFloat(k);}f(this,k);return this;
}l=(l=="float"?b:l).camelCase();if(typeOf(k)!="string"){var m=(Element.Styles[l]||"@").split(" ");k=Array.from(k).map(function(o,n){if(!m[n]){return"";
}return(typeOf(o)=="number")?m[n].replace("@",Math.round(o)):o;}).join(" ");}else{if(k==String(Number(k))){k=Math.round(k);}}this.style[l]=k;if((k==""||k==null)&&c&&this.style.removeAttribute){this.style.removeAttribute(l);
}return this;},getStyle:function(q){if(q=="opacity"){return g(this);}q=(q=="float"?b:q).camelCase();var k=this.style[q];if(!k||q=="zIndex"){k=[];for(var p in Element.ShortStyles){if(q!=p){continue;
}for(var o in Element.ShortStyles[p]){k.push(this.getStyle(o));}return k.join(" ");}k=this.getComputedStyle(q);}if(k){k=String(k);var m=k.match(/rgba?\([\d\s,]+\)/);
if(m){k=k.replace(m[0],m[0].rgbToHex());}}if(Browser.opera||Browser.ie){if((/^(height|width)$/).test(q)&&!(/px$/.test(k))){var l=(q=="width")?["left","right"]:["top","bottom"],n=0;
l.each(function(r){n+=this.getStyle("border-"+r+"-width").toInt()+this.getStyle("padding-"+r).toInt();},this);return this["offset"+q.capitalize()]-n+"px";
}if(Browser.ie&&(/^border(.+)Width|margin|padding/).test(q)&&isNaN(parseFloat(k))){return"0px";}}return k;},setStyles:function(l){for(var k in l){this.setStyle(k,l[k]);
}return this;},getStyles:function(){var k={};Array.flatten(arguments).each(function(l){k[l]=this.getStyle(l);},this);return k;}});Element.Styles={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"};
Element.implement({setOpacity:function(k){f(this,k);return this;},getOpacity:function(){return g(this);}});Element.Properties.opacity={set:function(k){f(this,k);
a(this,k);},get:function(){return g(this);}};Element.Styles=new Hash(Element.Styles);Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};
["Top","Right","Bottom","Left"].each(function(q){var p=Element.ShortStyles;var l=Element.Styles;["margin","padding"].each(function(r){var s=r+q;p[r][s]=l[s]="@px";
});var o="border"+q;p.border[o]=l[o]="@px @ rgb(@, @, @)";var n=o+"Width",k=o+"Style",m=o+"Color";p[o]={};p.borderWidth[n]=p[o][n]=l[n]="@px";p.borderStyle[k]=p[o][k]=l[k]="@";
p.borderColor[m]=p[o][m]=l[m]="rgb(@, @, @)";});})();(function(){Element.Properties.events={set:function(b){this.addEvents(b);}};[Element,Window,Document].invoke("implement",{addEvent:function(f,h){var i=this.retrieve("events",{});
if(!i[f]){i[f]={keys:[],values:[]};}if(i[f].keys.contains(h)){return this;}i[f].keys.push(h);var g=f,b=Element.Events[f],d=h,j=this;if(b){if(b.onAdd){b.onAdd.call(this,h,f);
}if(b.condition){d=function(k){if(b.condition.call(this,k,f)){return h.call(this,k);}return true;};}if(b.base){g=Function.from(b.base).call(this,f);}}var e=function(){return h.call(j);
};var c=Element.NativeEvents[g];if(c){if(c==2){e=function(k){k=new DOMEvent(k,j.getWindow());if(d.call(j,k)===false){k.stop();}};}this.addListener(g,e,arguments[2]);
}i[f].values.push(e);return this;},removeEvent:function(e,d){var c=this.retrieve("events");if(!c||!c[e]){return this;}var h=c[e];var b=h.keys.indexOf(d);
if(b==-1){return this;}var g=h.values[b];delete h.keys[b];delete h.values[b];var f=Element.Events[e];if(f){if(f.onRemove){f.onRemove.call(this,d,e);}if(f.base){e=Function.from(f.base).call(this,e);
}}return(Element.NativeEvents[e])?this.removeListener(e,g,arguments[2]):this;},addEvents:function(b){for(var c in b){this.addEvent(c,b[c]);}return this;
},removeEvents:function(b){var d;if(typeOf(b)=="object"){for(d in b){this.removeEvent(d,b[d]);}return this;}var c=this.retrieve("events");if(!c){return this;
}if(!b){for(d in c){this.removeEvents(d);}this.eliminate("events");}else{if(c[b]){c[b].keys.each(function(e){this.removeEvent(b,e);},this);delete c[b];
}}return this;},fireEvent:function(e,c,b){var d=this.retrieve("events");if(!d||!d[e]){return this;}c=Array.from(c);d[e].keys.each(function(f){if(b){f.delay(b,this,c);
}else{f.apply(this,c);}},this);return this;},cloneEvents:function(e,d){e=document.id(e);var c=e.retrieve("events");if(!c){return this;}if(!d){for(var b in c){this.cloneEvents(e,b);
}}else{if(c[d]){c[d].keys.each(function(f){this.addEvent(d,f);},this);}}return this;}});Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,paste:2,input:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};
Element.Events={mousewheel:{base:(Browser.firefox)?"DOMMouseScroll":"mousewheel"}};if("onmouseenter" in document.documentElement){Element.NativeEvents.mouseenter=Element.NativeEvents.mouseleave=2;
}else{var a=function(b){var c=b.relatedTarget;if(c==null){return true;}if(!c){return false;}return(c!=this&&c.prefix!="xul"&&typeOf(this)!="document"&&!this.contains(c));
};Element.Events.mouseenter={base:"mouseover",condition:a};Element.Events.mouseleave={base:"mouseout",condition:a};}if(!window.addEventListener){Element.NativeEvents.propertychange=2;
Element.Events.change={base:function(){var b=this.type;return(this.get("tag")=="input"&&(b=="radio"||b=="checkbox"))?"propertychange":"change";},condition:function(b){return this.type!="radio"||(b.event.propertyName=="checked"&&this.checked);
}};}Element.Events=new Hash(Element.Events);})();(function(){var c=!!window.addEventListener;Element.NativeEvents.focusin=Element.NativeEvents.focusout=2;
var k=function(l,m,n,o,p){while(p&&p!=l){if(m(p,o)){return n.call(p,o,p);}p=document.id(p.parentNode);}};var a={mouseenter:{base:"mouseover"},mouseleave:{base:"mouseout"},focus:{base:"focus"+(c?"":"in"),capture:true},blur:{base:c?"blur":"focusout",capture:true}};
var b="$delegation:";var i=function(l){return{base:"focusin",remove:function(m,o){var p=m.retrieve(b+l+"listeners",{})[o];if(p&&p.forms){for(var n=p.forms.length;
n--;){p.forms[n].removeEvent(l,p.fns[n]);}}},listen:function(x,r,v,n,t,s){var o=(t.get("tag")=="form")?t:n.target.getParent("form");if(!o){return;}var u=x.retrieve(b+l+"listeners",{}),p=u[s]||{forms:[],fns:[]},m=p.forms,w=p.fns;
if(m.indexOf(o)!=-1){return;}m.push(o);var q=function(y){k(x,r,v,y,t);};o.addEvent(l,q);w.push(q);u[s]=p;x.store(b+l+"listeners",u);}};};var d=function(l){return{base:"focusin",listen:function(m,n,p,q,r){var o={blur:function(){this.removeEvents(o);
}};o[l]=function(s){k(m,n,p,s,r);};q.target.addEvents(o);}};};if(!c){Object.append(a,{submit:i("submit"),reset:i("reset"),change:d("change"),select:d("select")});
}var h=Element.prototype,f=h.addEvent,j=h.removeEvent;var e=function(l,m){return function(r,q,n){if(r.indexOf(":relay")==-1){return l.call(this,r,q,n);
}var o=Slick.parse(r).expressions[0][0];if(o.pseudos[0].key!="relay"){return l.call(this,r,q,n);}var p=o.tag;o.pseudos.slice(1).each(function(s){p+=":"+s.key+(s.value?"("+s.value+")":"");
});l.call(this,r,q);return m.call(this,p,o.pseudos[0].value,q);};};var g={addEvent:function(v,q,x){var t=this.retrieve("$delegates",{}),r=t[v];if(r){for(var y in r){if(r[y].fn==x&&r[y].match==q){return this;
}}}var p=v,u=q,o=x,n=a[v]||{};v=n.base||p;q=function(B){return Slick.match(B,u);};var w=Element.Events[p];if(w&&w.condition){var l=q,m=w.condition;q=function(C,B){return l(C,B)&&m.call(C,B,v);
};}var z=this,s=String.uniqueID();var A=n.listen?function(B,C){if(!C&&B&&B.target){C=B.target;}if(C){n.listen(z,q,x,B,C,s);}}:function(B,C){if(!C&&B&&B.target){C=B.target;
}if(C){k(z,q,x,B,C);}};if(!r){r={};}r[s]={match:u,fn:o,delegator:A};t[p]=r;return f.call(this,v,A,n.capture);},removeEvent:function(r,n,t,u){var q=this.retrieve("$delegates",{}),p=q[r];
if(!p){return this;}if(u){var m=r,w=p[u].delegator,l=a[r]||{};r=l.base||m;if(l.remove){l.remove(this,u);}delete p[u];q[m]=p;return j.call(this,r,w);}var o,v;
if(t){for(o in p){v=p[o];if(v.match==n&&v.fn==t){return g.removeEvent.call(this,r,n,t,o);}}}else{for(o in p){v=p[o];if(v.match==n){g.removeEvent.call(this,r,n,v.fn,o);
}}}return this;}};[Element,Window,Document].invoke("implement",{addEvent:e(f,g.addEvent),removeEvent:e(j,g.removeEvent)});})();(function(){var h=document.createElement("div"),e=document.createElement("div");
h.style.height="0";h.appendChild(e);var d=(e.offsetParent===h);h=e=null;var l=function(m){return k(m,"position")!="static"||a(m);};var i=function(m){return l(m)||(/^(?:table|td|th)$/i).test(m.tagName);
};Element.implement({scrollTo:function(m,n){if(a(this)){this.getWindow().scrollTo(m,n);}else{this.scrollLeft=m;this.scrollTop=n;}return this;},getSize:function(){if(a(this)){return this.getWindow().getSize();
}return{x:this.offsetWidth,y:this.offsetHeight};},getScrollSize:function(){if(a(this)){return this.getWindow().getScrollSize();}return{x:this.scrollWidth,y:this.scrollHeight};
},getScroll:function(){if(a(this)){return this.getWindow().getScroll();}return{x:this.scrollLeft,y:this.scrollTop};},getScrolls:function(){var n=this.parentNode,m={x:0,y:0};
while(n&&!a(n)){m.x+=n.scrollLeft;m.y+=n.scrollTop;n=n.parentNode;}return m;},getOffsetParent:d?function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}var n=(k(m,"position")=="static")?i:l;while((m=m.parentNode)){if(n(m)){return m;}}return null;}:function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}try{return m.offsetParent;}catch(n){}return null;},getOffsets:function(){if(this.getBoundingClientRect&&!Browser.Platform.ios){var r=this.getBoundingClientRect(),o=document.id(this.getDocument().documentElement),q=o.getScroll(),t=this.getScrolls(),s=(k(this,"position")=="fixed");
return{x:r.left.toInt()+t.x+((s)?0:q.x)-o.clientLeft,y:r.top.toInt()+t.y+((s)?0:q.y)-o.clientTop};}var n=this,m={x:0,y:0};if(a(this)){return m;}while(n&&!a(n)){m.x+=n.offsetLeft;
m.y+=n.offsetTop;if(Browser.firefox){if(!c(n)){m.x+=b(n);m.y+=g(n);}var p=n.parentNode;if(p&&k(p,"overflow")!="visible"){m.x+=b(p);m.y+=g(p);}}else{if(n!=this&&Browser.safari){m.x+=b(n);
m.y+=g(n);}}n=n.offsetParent;}if(Browser.firefox&&!c(this)){m.x-=b(this);m.y-=g(this);}return m;},getPosition:function(p){var q=this.getOffsets(),n=this.getScrolls();
var m={x:q.x-n.x,y:q.y-n.y};if(p&&(p=document.id(p))){var o=p.getPosition();return{x:m.x-o.x-b(p),y:m.y-o.y-g(p)};}return m;},getCoordinates:function(o){if(a(this)){return this.getWindow().getCoordinates();
}var m=this.getPosition(o),n=this.getSize();var p={left:m.x,top:m.y,width:n.x,height:n.y};p.right=p.left+p.width;p.bottom=p.top+p.height;return p;},computePosition:function(m){return{left:m.x-j(this,"margin-left"),top:m.y-j(this,"margin-top")};
},setPosition:function(m){return this.setStyles(this.computePosition(m));}});[Document,Window].invoke("implement",{getSize:function(){var m=f(this);return{x:m.clientWidth,y:m.clientHeight};
},getScroll:function(){var n=this.getWindow(),m=f(this);return{x:n.pageXOffset||m.scrollLeft,y:n.pageYOffset||m.scrollTop};},getScrollSize:function(){var o=f(this),n=this.getSize(),m=this.getDocument().body;
return{x:Math.max(o.scrollWidth,m.scrollWidth,n.x),y:Math.max(o.scrollHeight,m.scrollHeight,n.y)};},getPosition:function(){return{x:0,y:0};},getCoordinates:function(){var m=this.getSize();
return{top:0,left:0,bottom:m.y,right:m.x,height:m.y,width:m.x};}});var k=Element.getComputedStyle;function j(m,n){return k(m,n).toInt()||0;}function c(m){return k(m,"-moz-box-sizing")=="border-box";
}function g(m){return j(m,"border-top-width");}function b(m){return j(m,"border-left-width");}function a(m){return(/^(?:body|html)$/i).test(m.tagName);
}function f(m){var n=m.getDocument();return(!n.compatMode||n.compatMode=="CSS1Compat")?n.html:n.body;}})();Element.alias({position:"setPosition"});[Window,Document,Element].invoke("implement",{getHeight:function(){return this.getSize().y;
},getWidth:function(){return this.getSize().x;},getScrollTop:function(){return this.getScroll().y;},getScrollLeft:function(){return this.getScroll().x;
},getScrollHeight:function(){return this.getScrollSize().y;},getScrollWidth:function(){return this.getScrollSize().x;},getTop:function(){return this.getPosition().y;
},getLeft:function(){return this.getPosition().x;}});(function(){var f=this.Fx=new Class({Implements:[Chain,Events,Options],options:{fps:60,unit:false,duration:500,frames:null,frameSkip:true,link:"ignore"},initialize:function(g){this.subject=this.subject||this;
this.setOptions(g);},getTransition:function(){return function(g){return -(Math.cos(Math.PI*g)-1)/2;};},step:function(g){if(this.options.frameSkip){var h=(this.time!=null)?(g-this.time):0,i=h/this.frameInterval;
this.time=g;this.frame+=i;}else{this.frame++;}if(this.frame<this.frames){var j=this.transition(this.frame/this.frames);this.set(this.compute(this.from,this.to,j));
}else{this.frame=this.frames;this.set(this.compute(this.from,this.to,1));this.stop();}},set:function(g){return g;},compute:function(i,h,g){return f.compute(i,h,g);
},check:function(){if(!this.isRunning()){return true;}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.pass(arguments,this));
return false;}return false;},start:function(k,j){if(!this.check(k,j)){return this;}this.from=k;this.to=j;this.frame=(this.options.frameSkip)?0:-1;this.time=null;
this.transition=this.getTransition();var i=this.options.frames,h=this.options.fps,g=this.options.duration;this.duration=f.Durations[g]||g.toInt();this.frameInterval=1000/h;
this.frames=i||Math.round(this.duration/this.frameInterval);this.fireEvent("start",this.subject);b.call(this,h);return this;},stop:function(){if(this.isRunning()){this.time=null;
d.call(this,this.options.fps);if(this.frames==this.frame){this.fireEvent("complete",this.subject);if(!this.callChain()){this.fireEvent("chainComplete",this.subject);
}}else{this.fireEvent("stop",this.subject);}}return this;},cancel:function(){if(this.isRunning()){this.time=null;d.call(this,this.options.fps);this.frame=this.frames;
this.fireEvent("cancel",this.subject).clearChain();}return this;},pause:function(){if(this.isRunning()){this.time=null;d.call(this,this.options.fps);}return this;
},resume:function(){if((this.frame<this.frames)&&!this.isRunning()){b.call(this,this.options.fps);}return this;},isRunning:function(){var g=e[this.options.fps];
return g&&g.contains(this);}});f.compute=function(i,h,g){return(h-i)*g+i;};f.Durations={"short":250,normal:500,"long":1000};var e={},c={};var a=function(){var h=Date.now();
for(var j=this.length;j--;){var g=this[j];if(g){g.step(h);}}};var b=function(h){var g=e[h]||(e[h]=[]);g.push(this);if(!c[h]){c[h]=a.periodical(Math.round(1000/h),g);
}};var d=function(h){var g=e[h];if(g){g.erase(this);if(!g.length&&c[h]){delete e[h];c[h]=clearInterval(c[h]);}}};})();Fx.CSS=new Class({Extends:Fx,prepare:function(b,e,a){a=Array.from(a);
var h=a[0],g=a[1];if(g==null){g=h;h=b.getStyle(e);var c=this.options.unit;if(c&&h.slice(-c.length)!=c&&parseFloat(h)!=0){b.setStyle(e,g+c);var d=b.getComputedStyle(e);
if(!(/px$/.test(d))){d=b.style[("pixel-"+e).camelCase()];if(d==null){var f=b.style.left;b.style.left=g+c;d=b.style.pixelLeft;b.style.left=f;}}h=(g||1)/(parseFloat(d)||1)*(parseFloat(h)||0);
b.setStyle(e,h+c);}}return{from:this.parse(h),to:this.parse(g)};},parse:function(a){a=Function.from(a)();a=(typeof a=="string")?a.split(" "):Array.from(a);
return a.map(function(c){c=String(c);var b=false;Object.each(Fx.CSS.Parsers,function(f,e){if(b){return;}var d=f.parse(c);if(d||d===0){b={value:d,parser:f};
}});b=b||{value:c,parser:Fx.CSS.Parsers.String};return b;});},compute:function(d,c,b){var a=[];(Math.min(d.length,c.length)).times(function(e){a.push({value:d[e].parser.compute(d[e].value,c[e].value,b),parser:d[e].parser});
});a.$family=Function.from("fx:css:value");return a;},serve:function(c,b){if(typeOf(c)!="fx:css:value"){c=this.parse(c);}var a=[];c.each(function(d){a=a.concat(d.parser.serve(d.value,b));
});return a;},render:function(a,d,c,b){a.setStyle(d,this.serve(c,b));},search:function(a){if(Fx.CSS.Cache[a]){return Fx.CSS.Cache[a];}var c={},b=new RegExp("^"+a.escapeRegExp()+"$");
Array.each(document.styleSheets,function(f,e){var d=f.href;if(d&&d.contains("://")&&!d.contains(document.domain)){return;}var g=f.rules||f.cssRules;Array.each(g,function(k,h){if(!k.style){return;
}var j=(k.selectorText)?k.selectorText.replace(/^\w+/,function(i){return i.toLowerCase();}):null;if(!j||!b.test(j)){return;}Object.each(Element.Styles,function(l,i){if(!k.style[i]||Element.ShortStyles[i]){return;
}l=String(k.style[i]);c[i]=((/^rgb/).test(l))?l.rgbToHex():l;});});});return Fx.CSS.Cache[a]=c;}});Fx.CSS.Cache={};Fx.CSS.Parsers={Color:{parse:function(a){if(a.match(/^#[0-9a-f]{3,6}$/i)){return a.hexToRgb(true);
}return((a=a.match(/(\d+),\s*(\d+),\s*(\d+)/)))?[a[1],a[2],a[3]]:false;},compute:function(c,b,a){return c.map(function(e,d){return Math.round(Fx.compute(c[d],b[d],a));
});},serve:function(a){return a.map(Number);}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return(a)?b+a:b;}},String:{parse:Function.from(false),compute:function(b,a){return a;
},serve:function(a){return a;}}};Fx.CSS.Parsers=new Hash(Fx.CSS.Parsers);Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);
this.parent(a);},set:function(b,a){if(arguments.length==1){a=b;b=this.property||this.options.property;}this.render(this.element,b,a,this.options.unit);
return this;},start:function(c,e,d){if(!this.check(c,e,d)){return this;}var b=Array.flatten(arguments);this.property=this.options.property||b.shift();var a=this.prepare(this.element,this.property,b);
return this.parent(a.from,a.to);}});Element.Properties.tween={set:function(a){this.get("tween").cancel().setOptions(a);return this;},get:function(){var a=this.retrieve("tween");
if(!a){a=new Fx.Tween(this,{link:"cancel"});this.store("tween",a);}return a;}};Element.implement({tween:function(a,c,b){this.get("tween").start(a,c,b);
return this;},fade:function(d){var e=this.get("tween"),g,c=["opacity"].append(arguments),a;if(c[1]==null){c[1]="toggle";}switch(c[1]){case"in":g="start";
c[1]=1;break;case"out":g="start";c[1]=0;break;case"show":g="set";c[1]=1;break;case"hide":g="set";c[1]=0;break;case"toggle":var b=this.retrieve("fade:flag",this.getStyle("opacity")==1);
g="start";c[1]=b?0:1;this.store("fade:flag",!b);a=true;break;default:g="start";}if(!a){this.eliminate("fade:flag");}e[g].apply(e,c);var f=c[c.length-1];
if(g=="set"||f!=0){this.setStyle("visibility",f==0?"hidden":"visible");}else{e.chain(function(){this.element.setStyle("visibility","hidden");this.callChain();
});}return this;},highlight:function(c,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));a=(a=="transparent")?"#fff":a;
}var b=this.get("tween");b.start("background-color",c||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));
b.callChain();}.bind(this));return this;}});Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);
},set:function(a){if(typeof a=="string"){a=this.search(a);}for(var b in a){this.render(this.element,b,a[b],this.options.unit);}return this;},compute:function(e,d,c){var a={};
for(var b in e){a[b]=this.parent(e[b],d[b],c);}return a;},start:function(b){if(!this.check(b)){return this;}if(typeof b=="string"){b=this.search(b);}var e={},d={};
for(var c in b){var a=this.prepare(this.element,c,b[c]);e[c]=a.from;d[c]=a.to;}return this.parent(e,d);}});Element.Properties.morph={set:function(a){this.get("morph").cancel().setOptions(a);
return this;},get:function(){var a=this.retrieve("morph");if(!a){a=new Fx.Morph(this,{link:"cancel"});this.store("morph",a);}return a;}};Element.implement({morph:function(a){this.get("morph").start(a);
return this;}});Fx.implement({getTransition:function(){var a=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof a=="string"){var b=a.split(":");
a=Fx.Transitions;a=a[b[0]]||a[b[0].capitalize()];if(b[1]){a=a["ease"+b[1].capitalize()+(b[2]?b[2].capitalize():"")];}}return a;}});Fx.Transition=function(c,b){b=Array.from(b);
var a=function(d){return c(d,b);};return Object.append(a,{easeIn:a,easeOut:function(d){return 1-c(1-d,b);},easeInOut:function(d){return(d<=0.5?c(2*d,b):(2-c(2*(1-d),b)))/2;
}});};Fx.Transitions={linear:function(a){return a;}};Fx.Transitions=new Hash(Fx.Transitions);Fx.Transitions.extend=function(a){for(var b in a){Fx.Transitions[b]=new Fx.Transition(a[b]);
}};Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a&&a[0]||6);},Expo:function(a){return Math.pow(2,8*(a-1));},Circ:function(a){return 1-Math.sin(Math.acos(a));
},Sine:function(a){return 1-Math.cos(a*Math.PI/2);},Back:function(b,a){a=a&&a[0]||1.618;return Math.pow(b,2)*((a+1)*b-a);},Bounce:function(f){var e;for(var d=0,c=1;
1;d+=c,c/=2){if(f>=(7-4*d)/11){e=c*c-Math.pow((11-6*d-11*f)/4,2);break;}}return e;},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a&&a[0]||1)/3);
}});["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(c){return Math.pow(c,a+2);});});(function(){var d=function(){},a=("onprogress" in new Browser.Request);
var c=this.Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,timeout:0,noCache:false},initialize:function(e){this.xhr=new Browser.Request();
this.setOptions(e);this.headers=this.options.headers;},onStateChange:function(){var e=this.xhr;if(e.readyState!=4||!this.running){return;}this.running=false;
this.status=0;Function.attempt(function(){var f=e.status;this.status=(f==1223)?204:f;}.bind(this));e.onreadystatechange=d;if(a){e.onprogress=e.onloadstart=d;
}clearTimeout(this.timer);this.response={text:this.xhr.responseText||"",xml:this.xhr.responseXML};if(this.options.isSuccess.call(this,this.status)){this.success(this.response.text,this.response.xml);
}else{this.failure();}},isSuccess:function(){var e=this.status;return(e>=200&&e<300);},isRunning:function(){return !!this.running;},processScripts:function(e){if(this.options.evalResponse||(/(ecma|java)script/).test(this.getHeader("Content-type"))){return Browser.exec(e);
}return e.stripScripts(this.options.evalScripts);},success:function(f,e){this.onSuccess(this.processScripts(f),e);},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain();
},failure:function(){this.onFailure();},onFailure:function(){this.fireEvent("complete").fireEvent("failure",this.xhr);},loadstart:function(e){this.fireEvent("loadstart",[e,this.xhr]);
},progress:function(e){this.fireEvent("progress",[e,this.xhr]);},timeout:function(){this.fireEvent("timeout",this.xhr);},setHeader:function(e,f){this.headers[e]=f;
return this;},getHeader:function(e){return Function.attempt(function(){return this.xhr.getResponseHeader(e);}.bind(this));},check:function(){if(!this.running){return true;
}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.pass(arguments,this));return false;}return false;},send:function(o){if(!this.check(o)){return this;
}this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.running=true;var l=typeOf(o);if(l=="string"||l=="element"){o={data:o};}var h=this.options;
o=Object.append({data:h.data,url:h.url,method:h.method},o);var j=o.data,f=String(o.url),e=o.method.toLowerCase();switch(typeOf(j)){case"element":j=document.id(j).toQueryString();
break;case"object":case"hash":j=Object.toQueryString(j);}if(this.options.format){var m="format="+this.options.format;j=(j)?m+"&"+j:m;}if(this.options.emulation&&!["get","post"].contains(e)){var k="_method="+e;
j=(j)?k+"&"+j:k;e="post";}if(this.options.urlEncoded&&["post","put"].contains(e)){var g=(this.options.encoding)?"; charset="+this.options.encoding:"";this.headers["Content-type"]="application/x-www-form-urlencoded"+g;
}if(!f){f=document.location.pathname;}var i=f.lastIndexOf("/");if(i>-1&&(i=f.indexOf("#"))>-1){f=f.substr(0,i);}if(this.options.noCache){f+=(f.contains("?")?"&":"?")+String.uniqueID();
}if(j&&e=="get"){f+=(f.contains("?")?"&":"?")+j;j=null;}var n=this.xhr;if(a){n.onloadstart=this.loadstart.bind(this);n.onprogress=this.progress.bind(this);
}n.open(e.toUpperCase(),f,this.options.async,this.options.user,this.options.password);if(this.options.user&&"withCredentials" in n){n.withCredentials=true;
}n.onreadystatechange=this.onStateChange.bind(this);Object.each(this.headers,function(q,p){try{n.setRequestHeader(p,q);}catch(r){this.fireEvent("exception",[p,q]);
}},this);this.fireEvent("request");n.send(j);if(!this.options.async){this.onStateChange();}else{if(this.options.timeout){this.timer=this.timeout.delay(this.options.timeout,this);
}}return this;},cancel:function(){if(!this.running){return this;}this.running=false;var e=this.xhr;e.abort();clearTimeout(this.timer);e.onreadystatechange=d;
if(a){e.onprogress=e.onloadstart=d;}this.xhr=new Browser.Request();this.fireEvent("cancel");return this;}});var b={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(e){b[e]=function(g){var f={method:e};
if(g!=null){f.data=g;}return this.send(f);};});c.implement(b);Element.Properties.send={set:function(e){var f=this.get("send").cancel();f.setOptions(e);
return this;},get:function(){var e=this.retrieve("send");if(!e){e=new c({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")});
this.store("send",e);}return e;}};Element.implement({send:function(e){var f=this.get("send");f.send({data:this,url:e||f.options.url});return this;}});})();
Request.HTML=new Class({Extends:Request,options:{update:false,append:false,evalScripts:true,filter:false,headers:{Accept:"text/html, application/xml, text/xml, */*"}},success:function(f){var e=this.options,c=this.response;
c.html=f.stripScripts(function(h){c.javascript=h;});var d=c.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);if(d){c.html=d[1];}var b=new Element("div").set("html",c.html);
c.tree=b.childNodes;c.elements=b.getElements(e.filter||"*");if(e.filter){c.tree=c.elements;}if(e.update){var g=document.id(e.update).empty();if(e.filter){g.adopt(c.elements);
}else{g.set("html",c.html);}}else{if(e.append){var a=document.id(e.append);if(e.filter){c.elements.reverse().inject(a);}else{a.adopt(b.getChildren());}}}if(e.evalScripts){Browser.exec(c.javascript);
}this.onSuccess(c.tree,c.elements,c.html,c.javascript);}});Element.Properties.load={set:function(a){var b=this.get("load").cancel();b.setOptions(a);return this;
},get:function(){var a=this.retrieve("load");if(!a){a=new Request.HTML({data:this,link:"cancel",update:this,method:"get"});this.store("load",a);}return a;
}};Element.implement({load:function(){this.get("load").send(Array.link(arguments,{data:Type.isObject,url:Type.isString}));return this;}});if(typeof JSON=="undefined"){this.JSON={};
}JSON=new Hash({stringify:JSON.stringify,parse:JSON.parse});(function(){var special={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
var escape=function(chr){return special[chr]||"\\u"+("0000"+chr.charCodeAt(0).toString(16)).slice(-4);};JSON.validate=function(string){string=string.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");
return(/^[\],:{}\s]*$/).test(string);};JSON.encode=JSON.stringify?function(obj){return JSON.stringify(obj);}:function(obj){if(obj&&obj.toJSON){obj=obj.toJSON();
}switch(typeOf(obj)){case"string":return'"'+obj.replace(/[\x00-\x1f\\"]/g,escape)+'"';case"array":return"["+obj.map(JSON.encode).clean()+"]";case"object":case"hash":var string=[];
Object.each(obj,function(value,key){var json=JSON.encode(value);if(json){string.push(JSON.encode(key)+":"+json);}});return"{"+string+"}";case"number":case"boolean":return""+obj;
case"null":return"null";}return null;};JSON.decode=function(string,secure){if(!string||typeOf(string)!="string"){return null;}if(secure||JSON.secure){if(JSON.parse){return JSON.parse(string);
}if(!JSON.validate(string)){throw new Error("JSON could not decode the input; security is enabled and the value is not secure.");}}return eval("("+string+")");
};})();Request.JSON=new Class({Extends:Request,options:{secure:true},initialize:function(a){this.parent(a);Object.append(this.headers,{Accept:"application/json","X-Request":"JSON"});
},success:function(c){var b;try{b=this.response.json=JSON.decode(c,this.options.secure);}catch(a){this.fireEvent("error",[c,a]);return;}if(b==null){this.onFailure();
}else{this.onSuccess(b,c);}}});var Cookie=new Class({Implements:Options,options:{path:"/",domain:false,duration:false,secure:false,document:document,encode:true},initialize:function(b,a){this.key=b;
this.setOptions(a);},write:function(b){if(this.options.encode){b=encodeURIComponent(b);}if(this.options.domain){b+="; domain="+this.options.domain;}if(this.options.path){b+="; path="+this.options.path;
}if(this.options.duration){var a=new Date();a.setTime(a.getTime()+this.options.duration*24*60*60*1000);b+="; expires="+a.toGMTString();}if(this.options.secure){b+="; secure";
}this.options.document.cookie=this.key+"="+b;return this;},read:function(){var a=this.options.document.cookie.match("(?:^|;)\\s*"+this.key.escapeRegExp()+"=([^;]*)");
return(a)?decodeURIComponent(a[1]):null;},dispose:function(){new Cookie(this.key,Object.merge({},this.options,{duration:-1})).write("");return this;}});
Cookie.write=function(b,c,a){return new Cookie(b,a).write(c);};Cookie.read=function(a){return new Cookie(a).read();};Cookie.dispose=function(b,a){return new Cookie(b,a).dispose();
};(function(i,k){var l,f,e=[],c,b,d=k.createElement("div");var g=function(){clearTimeout(b);if(l){return;}Browser.loaded=l=true;k.removeListener("DOMContentLoaded",g).removeListener("readystatechange",a);
k.fireEvent("domready");i.fireEvent("domready");};var a=function(){for(var m=e.length;m--;){if(e[m]()){g();return true;}}return false;};var j=function(){clearTimeout(b);
if(!a()){b=setTimeout(j,10);}};k.addListener("DOMContentLoaded",g);var h=function(){try{d.doScroll();return true;}catch(m){}return false;};if(d.doScroll&&!h()){e.push(h);
c=true;}if(k.readyState){e.push(function(){var m=k.readyState;return(m=="loaded"||m=="complete");});}if("onreadystatechange" in k){k.addListener("readystatechange",a);
}else{c=true;}if(c){j();}Element.Events.domready={onAdd:function(m){if(l){m.call(this);}}};Element.Events.load={base:"load",onAdd:function(m){if(f&&this==i){m.call(this);
}},condition:function(){if(this==i){g();delete Element.Events.load;}return true;}};i.addEvent("load",function(){f=true;});})(window,document);(function(){var Swiff=this.Swiff=new Class({Implements:Options,options:{id:null,height:1,width:1,container:null,properties:{},params:{quality:"high",allowScriptAccess:"always",wMode:"window",swLiveConnect:true},callBacks:{},vars:{}},toElement:function(){return this.object;
},initialize:function(path,options){this.instance="Swiff_"+String.uniqueID();this.setOptions(options);options=this.options;var id=this.id=options.id||this.instance;
var container=document.id(options.container);Swiff.CallBacks[this.instance]={};var params=options.params,vars=options.vars,callBacks=options.callBacks;
var properties=Object.append({height:options.height,width:options.width},options.properties);var self=this;for(var callBack in callBacks){Swiff.CallBacks[this.instance][callBack]=(function(option){return function(){return option.apply(self.object,arguments);
};})(callBacks[callBack]);vars[callBack]="Swiff.CallBacks."+this.instance+"."+callBack;}params.flashVars=Object.toQueryString(vars);if(Browser.ie){properties.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
params.movie=path;}else{properties.type="application/x-shockwave-flash";}properties.data=path;var build='<object id="'+id+'"';for(var property in properties){build+=" "+property+'="'+properties[property]+'"';
}build+=">";for(var param in params){if(params[param]){build+='<param name="'+param+'" value="'+params[param]+'" />';}}build+="</object>";this.object=((container)?container.empty():new Element("div")).set("html",build).firstChild;
},replaces:function(element){element=document.id(element,true);element.parentNode.replaceChild(this.toElement(),element);return this;},inject:function(element){document.id(element,true).appendChild(this.toElement());
return this;},remote:function(){return Swiff.remote.apply(Swiff,[this.toElement()].append(arguments));}});Swiff.CallBacks={};Swiff.remote=function(obj,fn){var rs=obj.CallFunction('<invoke name="'+fn+'" returntype="javascript">'+__flash__argumentsToXML(arguments,2)+"</invoke>");
return eval(rs);};})();

/* FILE: /joomla25/university/media/system/js/core.js */
/*
		GNU General Public License version 2 or later; see LICENSE.txt
*/
if("undefined"===typeof Joomla)var Joomla={};Joomla.editors={};Joomla.editors.instances={};Joomla.submitform=function(a,b){if("undefined"===typeof b&&(b=document.getElementById("adminForm"),!b))b=document.adminForm;if("undefined"!==typeof a&&''!==a)b.task.value=a;if("function"==typeof b.onsubmit)b.onsubmit();"function"==typeof b.fireEvent&&b.fireEvent("submit");b.submit()};Joomla.submitbutton=function(a){Joomla.submitform(a)};
Joomla.JText={strings:{},_:function(a,b){return"undefined"!==typeof this.strings[a.toUpperCase()]?this.strings[a.toUpperCase()]:b},load:function(a){for(var b in a)this.strings[b.toUpperCase()]=a[b];return this}};Joomla.replaceTokens=function(a){for(var b=document.getElementsByTagName("input"),c=0;c<b.length;c++)if("hidden"==b[c].type&&32==b[c].name.length&&"1"==b[c].value)b[c].name=a};Joomla.isEmail=function(a){return/^[\w-_.]*[\w-_.]@[\w].+[\w]+[\w]$/.test(a)};
Joomla.checkAll=function(a,b){b||(b="cb");if(a.form){for(var c=0,d=0,f=a.form.elements.length;d<f;d++){var e=a.form.elements[d];if(e.type==a.type&&(b&&0==e.id.indexOf(b)||!b))e.checked=a.checked,c+=!0==e.checked?1:0}if(a.form.boxchecked)a.form.boxchecked.value=c;return!0}return!1};
Joomla.renderMessages=function(a){Joomla.removeMessages();var b=document.id("system-message-container"),c=new Element("dl",{id:"system-message",role:"alert"});Object.each(a,function(a,b){(new Element("dt",{"class":b,html:b})).inject(c);var e=new Element("dd",{"class":b});e.addClass("message");var g=new Element("ul");Array.each(a,function(a){(new Element("li",{html:a})).inject(g)},this);g.inject(e);e.inject(c)},this);c.inject(b)};Joomla.removeMessages=function(){$$("#system-message-container > *").destroy()};
Joomla.isChecked=function(a,b){if("undefined"===typeof b&&(b=document.getElementById("adminForm"),!b))b=document.adminForm;!0==a?b.boxchecked.value++:b.boxchecked.value--};Joomla.popupWindow=function(a,b,c,d,f){window.open(a,b,"height="+d+",width="+c+",top="+(screen.height-d)/2+",left="+(screen.width-c)/2+",scrollbars="+f+",resizable").window.focus()};
Joomla.tableOrdering=function(a,b,c,d){if("undefined"===typeof d&&(d=document.getElementById("adminForm"),!d))d=document.adminForm;d.filter_order.value=a;d.filter_order_Dir.value=b;Joomla.submitform(c,d)};function writeDynaList(a,b,c,d,f){var a="\n\t<select "+a+">",e=0;for(x in b){if(b[x][0]==c){var g="";if(d==c&&f==b[x][1]||0==e&&d!=c)g='selected="selected"';a+='\n\t\t<option value="'+b[x][1]+'" '+g+">"+b[x][2]+"</option>"}e++}document.writeln(a+"\n\t</select>")}
function changeDynaList(a,b,c,d,f){a=document.adminForm[a];for(i in a.options.length)a.options[i]=null;i=0;for(x in b)if(b[x][0]==c){opt=new Option;opt.value=b[x][1];opt.text=b[x][2];if(d==c&&f==opt.value||0==i)opt.selected=!0;a.options[i++]=opt}a.length=i}function radioGetCheckedValue(a){if(!a)return"";var b=a.length;if(void 0==b)return a.checked?a.value:"";for(var c=0;c<b;c++)if(a[c].checked)return a[c].value;return""}
function getSelectedValue(a,b){var c=document[a][b];i=c.selectedIndex;return null!=i&&-1<i?c.options[i].value:null}
function checkAll(a,b){b||(b="cb");if(a.form){for(var c=0,d=0,f=a.form.elements.length;d<f;d++){var e=a.form.elements[d];if(e.type==a.type&&(b&&0==e.id.indexOf(b)||!b))e.checked=a.checked,c+=!0==e.checked?1:0}if(a.form.boxchecked)a.form.boxchecked.value=c;return!0}for(var e=document.adminForm,c=e.toggle.checked,f=a,g=0,d=0;d<f;d++){var h=e[b+""+d];if(h)h.checked=c,g++}document.adminForm.boxchecked.value=c?g:0}
function listItemTask(a,b){var c=document.adminForm,d=c[a];if(d){for(var f=0;;f++){var e=c["cb"+f];if(!e)break;e.checked=!1}d.checked=!0;c.boxchecked.value=1;submitbutton(b)}return!1}function isChecked(a){!0==a?document.adminForm.boxchecked.value++:document.adminForm.boxchecked.value--}function submitbutton(a){submitform(a)}
function submitform(a){if(a)document.adminForm.task.value=a;if("function"==typeof document.adminForm.onsubmit)document.adminForm.onsubmit();"function"==typeof document.adminForm.fireEvent&&document.adminForm.fireEvent("submit");document.adminForm.submit()}function popupWindow(a,b,c,d,f){winprops="height="+d+",width="+c+",top="+(screen.height-d)/2+",left="+(screen.width-c)/2+",scrollbars="+f+",resizable";win=window.open(a,b,winprops);4<=parseInt(navigator.appVersion)&&win.window.focus()}
function tableOrdering(a,b,c){var d=document.adminForm;d.filter_order.value=a;d.filter_order_Dir.value=b;submitform(c)}function saveorder(a,b){checkAll_button(a,b)}function checkAll_button(a,b){b||(b="saveorder");for(var c=0;c<=a;c++){var d=document.adminForm["cb"+c];if(d){if(!1==d.checked)d.checked=!0}else{alert("You cannot change the order of items, as an item in the list is `Checked Out`");return}}submitform(b)};


/* FILE: //ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js */
/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("Â ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/* FILE: /joomla25/university/components/com_k2/js/k2.js?v2.6.8&amp;sitepath=/joomla25/university/ */


/* FILE: /joomla25/university/media/system/js/caption.js */
/*
		GNU General Public License version 2 or later; see LICENSE.txt
*/
var JCaption=new Class({initialize:function(a){this.selector=a;$$(a).each(function(a){this.createCaption(a)},this)},createCaption:function(a){var f=document.createTextNode(a.title),c=document.createElement("div"),d=document.createElement("p"),e=a.getAttribute("width"),b=a.getAttribute("align");if(!e)e=a.width;b||(b=a.getStyle("float"));if(!b)b=a.style.styleFloat;if(b==""||!b)b="none";d.appendChild(f);d.className=this.selector.replace(".","_");a.parentNode.insertBefore(c,a);c.appendChild(a);a.title!=
""&&c.appendChild(d);c.className=this.selector.replace(".","_");c.className=c.className+" "+b;c.setAttribute("style","float:"+b);c.style.width=e+"px"}});

/* FILE: /joomla25/university/media/system/js/mootools-more.js */
// MooTools: the javascript framework.
// Load this file's selection again by visiting: http://mootools.net/more/065f2f092ece4e3b32bb5214464cf926 
// Or build this file again with packager using: packager build More/More More/Events.Pseudos More/Class.Refactor More/Class.Binds More/Class.Occlude More/Chain.Wait More/Array.Extras More/Date More/Date.Extras More/Number.Format More/Object.Extras More/String.Extras More/String.QueryString More/URI More/URI.Relative More/Hash More/Hash.Extras More/Element.Forms More/Elements.From More/Element.Event.Pseudos More/Element.Event.Pseudos.Keys More/Element.Measure More/Element.Pin More/Element.Position More/Element.Shortcuts More/Form.Request More/Form.Request.Append More/Form.Validator More/Form.Validator.Inline More/Form.Validator.Extras More/OverText More/Fx.Elements More/Fx.Accordion More/Fx.Move More/Fx.Reveal More/Fx.Scroll More/Fx.Slide More/Fx.SmoothScroll More/Fx.Sort More/Drag More/Drag.Move More/Slider More/Sortables More/Request.JSONP More/Request.Queue More/Request.Periodical More/Assets More/Color More/Group More/Hash.Cookie More/IframeShim More/Table More/HtmlTable More/HtmlTable.Zebra More/HtmlTable.Sort More/HtmlTable.Select More/Keyboard More/Keyboard.Extras More/Mask More/Scroller More/Tips More/Spinner More/Locale More/Locale.Set.From More/Locale.en-US.Date More/Locale.en-US.Form.Validator More/Locale.en-US.Number More/Locale.ar.Date More/Locale.ar.Form.Validator More/Locale.ca-CA.Date More/Locale.ca-CA.Form.Validator More/Locale.cs-CZ.Date More/Locale.cs-CZ.Form.Validator More/Locale.da-DK.Date More/Locale.da-DK.Form.Validator More/Locale.de-CH.Date More/Locale.de-CH.Form.Validator More/Locale.de-DE.Date More/Locale.de-DE.Form.Validator More/Locale.de-DE.Number More/Locale.en-GB.Date More/Locale.es-AR.Date More/Locale.es-AR.Form.Validator More/Locale.es-ES.Date More/Locale.es-ES.Form.Validator More/Locale.et-EE.Date More/Locale.et-EE.Form.Validator More/Locale.EU.Number More/Locale.fa.Date More/Locale.fa.Form.Validator More/Locale.fi-FI.Date More/Locale.fi-FI.Form.Validator More/Locale.fi-FI.Number More/Locale.fr-FR.Date More/Locale.fr-FR.Form.Validator More/Locale.fr-FR.Number More/Locale.he-IL.Date More/Locale.he-IL.Form.Validator More/Locale.he-IL.Number More/Locale.hu-HU.Date More/Locale.hu-HU.Form.Validator More/Locale.it-IT.Date More/Locale.it-IT.Form.Validator More/Locale.ja-JP.Date More/Locale.ja-JP.Form.Validator More/Locale.ja-JP.Number More/Locale.nl-NL.Date More/Locale.nl-NL.Form.Validator More/Locale.nl-NL.Number More/Locale.no-NO.Date More/Locale.no-NO.Form.Validator More/Locale.pl-PL.Date More/Locale.pl-PL.Form.Validator More/Locale.pt-BR.Date More/Locale.pt-BR.Form.Validator More/Locale.pt-PT.Date More/Locale.pt-PT.Form.Validator More/Locale.ru-RU-unicode.Date More/Locale.ru-RU-unicode.Form.Validator More/Locale.si-SI.Date More/Locale.si-SI.Form.Validator More/Locale.sv-SE.Date More/Locale.sv-SE.Form.Validator More/Locale.uk-UA.Date More/Locale.uk-UA.Form.Validator More/Locale.zh-CH.Date More/Locale.zh-CH.Form.Validator
/*
---
copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
MooTools.More={version:"1.4.0.1",build:"a4244edf2aa97ac8a196fc96082dd35af1abab87"};(function(){Events.Pseudos=function(h,e,f){var d="_monitorEvents:";var c=function(i){return{store:i.store?function(j,k){i.store(d+j,k);
}:function(j,k){(i._monitorEvents||(i._monitorEvents={}))[j]=k;},retrieve:i.retrieve?function(j,k){return i.retrieve(d+j,k);}:function(j,k){if(!i._monitorEvents){return k;
}return i._monitorEvents[j]||k;}};};var g=function(k){if(k.indexOf(":")==-1||!h){return null;}var j=Slick.parse(k).expressions[0][0],p=j.pseudos,i=p.length,o=[];
while(i--){var n=p[i].key,m=h[n];if(m!=null){o.push({event:j.tag,value:p[i].value,pseudo:n,original:k,listener:m});}}return o.length?o:null;};return{addEvent:function(m,p,j){var n=g(m);
if(!n){return e.call(this,m,p,j);}var k=c(this),r=k.retrieve(m,[]),i=n[0].event,l=Array.slice(arguments,2),o=p,q=this;n.each(function(s){var t=s.listener,u=o;
if(t==false){i+=":"+s.pseudo+"("+s.value+")";}else{o=function(){t.call(q,s,u,arguments,o);};}});r.include({type:i,event:p,monitor:o});k.store(m,r);if(m!=i){e.apply(this,[m,p].concat(l));
}return e.apply(this,[i,o].concat(l));},removeEvent:function(m,l){var k=g(m);if(!k){return f.call(this,m,l);}var n=c(this),j=n.retrieve(m);if(!j){return this;
}var i=Array.slice(arguments,2);f.apply(this,[m,l].concat(i));j.each(function(o,p){if(!l||o.event==l){f.apply(this,[o.type,o.monitor].concat(i));}delete j[p];
},this);n.store(m,j);return this;}};};var b={once:function(e,f,d,c){f.apply(this,d);this.removeEvent(e.event,c).removeEvent(e.original,f);},throttle:function(d,e,c){if(!e._throttled){e.apply(this,c);
e._throttled=setTimeout(function(){e._throttled=false;},d.value||250);}},pause:function(d,e,c){clearTimeout(e._pause);e._pause=e.delay(d.value||250,this,c);
}};Events.definePseudo=function(c,d){b[c]=d;return this;};Events.lookupPseudo=function(c){return b[c];};var a=Events.prototype;Events.implement(Events.Pseudos(b,a.addEvent,a.removeEvent));
["Request","Fx"].each(function(c){if(this[c]){this[c].implement(Events.prototype);}});})();Class.refactor=function(b,a){Object.each(a,function(e,d){var c=b.prototype[d];
c=(c&&c.$origin)||c||function(){};b.implement(d,(typeof e=="function")?function(){var f=this.previous;this.previous=c;var g=e.apply(this,arguments);this.previous=f;
return g;}:e);});return b;};Class.Mutators.Binds=function(a){if(!this.prototype.initialize){this.implement("initialize",function(){});}return Array.from(a).concat(this.prototype.Binds||[]);
};Class.Mutators.initialize=function(a){return function(){Array.from(this.Binds).each(function(b){var c=this[b];if(c){this[b]=c.bind(this);}},this);return a.apply(this,arguments);
};};Class.Occlude=new Class({occlude:function(c,b){b=document.id(b||this.element);var a=b.retrieve(c||this.property);if(a&&!this.occluded){return(this.occluded=a);
}this.occluded=false;b.store(c||this.property,this);return this.occluded;}});(function(){var a={wait:function(b){return this.chain(function(){this.callChain.delay(b==null?500:b,this);
return this;}.bind(this));}};Chain.implement(a);if(this.Fx){Fx.implement(a);}if(this.Element&&Element.implement&&this.Fx){Element.implement({chains:function(b){Array.from(b||["tween","morph","reveal"]).each(function(c){c=this.get(c);
if(!c){return;}c.setOptions({link:"chain"});},this);return this;},pauseFx:function(c,b){this.chains(b).get(b||"tween").wait(c);return this;}});}})();(function(a){Array.implement({min:function(){return Math.min.apply(null,this);
},max:function(){return Math.max.apply(null,this);},average:function(){return this.length?this.sum()/this.length:0;},sum:function(){var b=0,c=this.length;
if(c){while(c--){b+=this[c];}}return b;},unique:function(){return[].combine(this);},shuffle:function(){for(var c=this.length;c&&--c;){var b=this[c],d=Math.floor(Math.random()*(c+1));
this[c]=this[d];this[d]=b;}return this;},reduce:function(d,e){for(var c=0,b=this.length;c<b;c++){if(c in this){e=e===a?this[c]:d.call(null,e,this[c],c,this);
}}return e;},reduceRight:function(c,d){var b=this.length;while(b--){if(b in this){d=d===a?this[b]:c.call(null,d,this[b],b,this);}}return d;}});})();(function(){var b=function(c){return c!=null;
};var a=Object.prototype.hasOwnProperty;Object.extend({getFromPath:function(e,f){if(typeof f=="string"){f=f.split(".");}for(var d=0,c=f.length;d<c;d++){if(a.call(e,f[d])){e=e[f[d]];
}else{return null;}}return e;},cleanValues:function(c,e){e=e||b;for(var d in c){if(!e(c[d])){delete c[d];}}return c;},erase:function(c,d){if(a.call(c,d)){delete c[d];
}return c;},run:function(d){var c=Array.slice(arguments,1);for(var e in d){if(d[e].apply){d[e].apply(d,c);}}return d;}});})();(function(){var b=null,a={},e={};
var d=function(g){if(instanceOf(g,f.Set)){return g;}else{return a[g];}};var f=this.Locale={define:function(g,k,i,j){var h;if(instanceOf(g,f.Set)){h=g.name;
if(h){a[h]=g;}}else{h=g;if(!a[h]){a[h]=new f.Set(h);}g=a[h];}if(k){g.define(k,i,j);}if(k=="cascade"){return f.inherit(h,i);}if(!b){b=g;}return g;},use:function(g){g=d(g);
if(g){b=g;this.fireEvent("change",g);this.fireEvent("langChange",g.name);}return this;},getCurrent:function(){return b;},get:function(h,g){return(b)?b.get(h,g):"";
},inherit:function(g,h,i){g=d(g);if(g){g.inherit(h,i);}return this;},list:function(){return Object.keys(a);}};Object.append(f,new Events);f.Set=new Class({sets:{},inherits:{locales:[],sets:{}},initialize:function(g){this.name=g||"";
},define:function(j,h,i){var g=this.sets[j];if(!g){g={};}if(h){if(typeOf(h)=="object"){g=Object.merge(g,h);}else{g[h]=i;}}this.sets[j]=g;return this;},get:function(s,k,r){var q=Object.getFromPath(this.sets,s);
if(q!=null){var n=typeOf(q);if(n=="function"){q=q.apply(null,Array.from(k));}else{if(n=="object"){q=Object.clone(q);}}return q;}var j=s.indexOf("."),p=j<0?s:s.substr(0,j),m=(this.inherits.sets[p]||[]).combine(this.inherits.locales).include("en-US");
if(!r){r=[];}for(var h=0,g=m.length;h<g;h++){if(r.contains(m[h])){continue;}r.include(m[h]);var o=a[m[h]];if(!o){continue;}q=o.get(s,k,r);if(q!=null){return q;
}}return"";},inherit:function(h,i){h=Array.from(h);if(i&&!this.inherits.sets[i]){this.inherits.sets[i]=[];}var g=h.length;while(g--){(i?this.inherits.sets[i]:this.inherits.locales).unshift(h[g]);
}return this;}});var c=MooTools.lang={};Object.append(c,f,{setLanguage:f.use,getCurrentLanguage:function(){var g=f.getCurrent();return(g)?g.name:null;},set:function(){f.define.apply(this,arguments);
return this;},get:function(i,h,g){if(h){i+="."+h;}return f.get(i,g);}});})();Locale.define("en-US","Date",{months:["January","February","March","April","May","June","July","August","September","October","November","December"],months_abbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],days_abbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dateOrder:["month","date","year"],shortDate:"%m/%d/%Y",shortTime:"%I:%M%p",AM:"AM",PM:"PM",firstDayOfWeek:0,ordinal:function(a){return(a>3&&a<21)?"th":["th","st","nd","rd","th"][Math.min(a%10,4)];
},lessThanMinuteAgo:"less than a minute ago",minuteAgo:"about a minute ago",minutesAgo:"{delta} minutes ago",hourAgo:"about an hour ago",hoursAgo:"about {delta} hours ago",dayAgo:"1 day ago",daysAgo:"{delta} days ago",weekAgo:"1 week ago",weeksAgo:"{delta} weeks ago",monthAgo:"1 month ago",monthsAgo:"{delta} months ago",yearAgo:"1 year ago",yearsAgo:"{delta} years ago",lessThanMinuteUntil:"less than a minute from now",minuteUntil:"about a minute from now",minutesUntil:"{delta} minutes from now",hourUntil:"about an hour from now",hoursUntil:"about {delta} hours from now",dayUntil:"1 day from now",daysUntil:"{delta} days from now",weekUntil:"1 week from now",weeksUntil:"{delta} weeks from now",monthUntil:"1 month from now",monthsUntil:"{delta} months from now",yearUntil:"1 year from now",yearsUntil:"{delta} years from now"});
(function(){var a=this.Date;var f=a.Methods={ms:"Milliseconds",year:"FullYear",min:"Minutes",mo:"Month",sec:"Seconds",hr:"Hours"};["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds","Time","TimezoneOffset","Week","Timezone","GMTOffset","DayOfYear","LastMonth","LastDayOfMonth","UTCDate","UTCDay","UTCFullYear","AMPM","Ordinal","UTCHours","UTCMilliseconds","UTCMinutes","UTCMonth","UTCSeconds","UTCMilliseconds"].each(function(s){a.Methods[s.toLowerCase()]=s;
});var p=function(u,t,s){if(t==1){return u;}return u<Math.pow(10,t-1)?(s||"0")+p(u,t-1,s):u;};a.implement({set:function(u,s){u=u.toLowerCase();var t=f[u]&&"set"+f[u];
if(t&&this[t]){this[t](s);}return this;}.overloadSetter(),get:function(t){t=t.toLowerCase();var s=f[t]&&"get"+f[t];if(s&&this[s]){return this[s]();}return null;
}.overloadGetter(),clone:function(){return new a(this.get("time"));},increment:function(s,u){s=s||"day";u=u!=null?u:1;switch(s){case"year":return this.increment("month",u*12);
case"month":var t=this.get("date");this.set("date",1).set("mo",this.get("mo")+u);return this.set("date",t.min(this.get("lastdayofmonth")));case"week":return this.increment("day",u*7);
case"day":return this.set("date",this.get("date")+u);}if(!a.units[s]){throw new Error(s+" is not a supported interval");}return this.set("time",this.get("time")+u*a.units[s]());
},decrement:function(s,t){return this.increment(s,-1*(t!=null?t:1));},isLeapYear:function(){return a.isLeapYear(this.get("year"));},clearTime:function(){return this.set({hr:0,min:0,sec:0,ms:0});
},diff:function(t,s){if(typeOf(t)=="string"){t=a.parse(t);}return((t-this)/a.units[s||"day"](3,3)).round();},getLastDayOfMonth:function(){return a.daysInMonth(this.get("mo"),this.get("year"));
},getDayOfYear:function(){return(a.UTC(this.get("year"),this.get("mo"),this.get("date")+1)-a.UTC(this.get("year"),0,1))/a.units.day();},setDay:function(t,s){if(s==null){s=a.getMsg("firstDayOfWeek");
if(s===""){s=1;}}t=(7+a.parseDay(t,true)-s)%7;var u=(7+this.get("day")-s)%7;return this.increment("day",t-u);},getWeek:function(v){if(v==null){v=a.getMsg("firstDayOfWeek");
if(v===""){v=1;}}var x=this,u=(7+x.get("day")-v)%7,t=0,w;if(v==1){var y=x.get("month"),s=x.get("date")-u;if(y==11&&s>28){return 1;}if(y==0&&s<-2){x=new a(x).decrement("day",u);
u=0;}w=new a(x.get("year"),0,1).get("day")||7;if(w>4){t=-7;}}else{w=new a(x.get("year"),0,1).get("day");}t+=x.get("dayofyear");t+=6-u;t+=(7+w-v)%7;return(t/7);
},getOrdinal:function(s){return a.getMsg("ordinal",s||this.get("date"));},getTimezone:function(){return this.toString().replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");
},getGMTOffset:function(){var s=this.get("timezoneOffset");return((s>0)?"-":"+")+p((s.abs()/60).floor(),2)+p(s%60,2);},setAMPM:function(s){s=s.toUpperCase();
var t=this.get("hr");if(t>11&&s=="AM"){return this.decrement("hour",12);}else{if(t<12&&s=="PM"){return this.increment("hour",12);}}return this;},getAMPM:function(){return(this.get("hr")<12)?"AM":"PM";
},parse:function(s){this.set("time",a.parse(s));return this;},isValid:function(s){if(!s){s=this;}return typeOf(s)=="date"&&!isNaN(s.valueOf());},format:function(s){if(!this.isValid()){return"invalid date";
}if(!s){s="%x %X";}if(typeof s=="string"){s=g[s.toLowerCase()]||s;}if(typeof s=="function"){return s(this);}var t=this;return s.replace(/%([a-z%])/gi,function(v,u){switch(u){case"a":return a.getMsg("days_abbr")[t.get("day")];
case"A":return a.getMsg("days")[t.get("day")];case"b":return a.getMsg("months_abbr")[t.get("month")];case"B":return a.getMsg("months")[t.get("month")];
case"c":return t.format("%a %b %d %H:%M:%S %Y");case"d":return p(t.get("date"),2);case"e":return p(t.get("date"),2," ");case"H":return p(t.get("hr"),2);
case"I":return p((t.get("hr")%12)||12,2);case"j":return p(t.get("dayofyear"),3);case"k":return p(t.get("hr"),2," ");case"l":return p((t.get("hr")%12)||12,2," ");
case"L":return p(t.get("ms"),3);case"m":return p((t.get("mo")+1),2);case"M":return p(t.get("min"),2);case"o":return t.get("ordinal");case"p":return a.getMsg(t.get("ampm"));
case"s":return Math.round(t/1000);case"S":return p(t.get("seconds"),2);case"T":return t.format("%H:%M:%S");case"U":return p(t.get("week"),2);case"w":return t.get("day");
case"x":return t.format(a.getMsg("shortDate"));case"X":return t.format(a.getMsg("shortTime"));case"y":return t.get("year").toString().substr(2);case"Y":return t.get("year");
case"z":return t.get("GMTOffset");case"Z":return t.get("Timezone");}return u;});},toISOString:function(){return this.format("iso8601");}}).alias({toJSON:"toISOString",compare:"diff",strftime:"format"});
var k=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var g={db:"%Y-%m-%d %H:%M:%S",compact:"%Y%m%dT%H%M%S","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M",rfc822:function(s){return k[s.get("day")]+s.format(", %d ")+h[s.get("month")]+s.format(" %Y %H:%M:%S %Z");
},rfc2822:function(s){return k[s.get("day")]+s.format(", %d ")+h[s.get("month")]+s.format(" %Y %H:%M:%S %z");},iso8601:function(s){return(s.getUTCFullYear()+"-"+p(s.getUTCMonth()+1,2)+"-"+p(s.getUTCDate(),2)+"T"+p(s.getUTCHours(),2)+":"+p(s.getUTCMinutes(),2)+":"+p(s.getUTCSeconds(),2)+"."+p(s.getUTCMilliseconds(),3)+"Z");
}};var c=[],n=a.parse;var r=function(v,x,u){var t=-1,w=a.getMsg(v+"s");switch(typeOf(x)){case"object":t=w[x.get(v)];break;case"number":t=w[x];if(!t){throw new Error("Invalid "+v+" index: "+x);
}break;case"string":var s=w.filter(function(y){return this.test(y);},new RegExp("^"+x,"i"));if(!s.length){throw new Error("Invalid "+v+" string");}if(s.length>1){throw new Error("Ambiguous "+v);
}t=s[0];}return(u)?w.indexOf(t):t;};var i=1900,o=70;a.extend({getMsg:function(t,s){return Locale.get("Date."+t,s);},units:{ms:Function.from(1),second:Function.from(1000),minute:Function.from(60000),hour:Function.from(3600000),day:Function.from(86400000),week:Function.from(608400000),month:function(t,s){var u=new a;
return a.daysInMonth(t!=null?t:u.get("mo"),s!=null?s:u.get("year"))*86400000;},year:function(s){s=s||new a().get("year");return a.isLeapYear(s)?31622400000:31536000000;
}},daysInMonth:function(t,s){return[31,a.isLeapYear(s)?29:28,31,30,31,30,31,31,30,31,30,31][t];},isLeapYear:function(s){return((s%4===0)&&(s%100!==0))||(s%400===0);
},parse:function(v){var u=typeOf(v);if(u=="number"){return new a(v);}if(u!="string"){return v;}v=v.clean();if(!v.length){return null;}var s;c.some(function(w){var t=w.re.exec(v);
return(t)?(s=w.handler(t)):false;});if(!(s&&s.isValid())){s=new a(n(v));if(!(s&&s.isValid())){s=new a(v.toInt());}}return s;},parseDay:function(s,t){return r("day",s,t);
},parseMonth:function(t,s){return r("month",t,s);},parseUTC:function(t){var s=new a(t);var u=a.UTC(s.get("year"),s.get("mo"),s.get("date"),s.get("hr"),s.get("min"),s.get("sec"),s.get("ms"));
return new a(u);},orderIndex:function(s){return a.getMsg("dateOrder").indexOf(s)+1;},defineFormat:function(s,t){g[s]=t;return this;},parsePatterns:c,defineParser:function(s){c.push((s.re&&s.handler)?s:l(s));
return this;},defineParsers:function(){Array.flatten(arguments).each(a.defineParser);return this;},define2DigitYearStart:function(s){o=s%100;i=s-o;return this;
}}).extend({defineFormats:a.defineFormat.overloadSetter()});var d=function(s){return new RegExp("(?:"+a.getMsg(s).map(function(t){return t.substr(0,3);
}).join("|")+")[a-z]*");};var m=function(s){switch(s){case"T":return"%H:%M:%S";case"x":return((a.orderIndex("month")==1)?"%m[-./]%d":"%d[-./]%m")+"([-./]%y)?";
case"X":return"%H([.:]%M)?([.:]%S([.:]%s)?)? ?%p? ?%z?";}return null;};var j={d:/[0-2]?[0-9]|3[01]/,H:/[01]?[0-9]|2[0-3]/,I:/0?[1-9]|1[0-2]/,M:/[0-5]?\d/,s:/\d+/,o:/[a-z]*/,p:/[ap]\.?m\.?/,y:/\d{2}|\d{4}/,Y:/\d{4}/,z:/Z|[+-]\d{2}(?::?\d{2})?/};
j.m=j.I;j.S=j.M;var e;var b=function(s){e=s;j.a=j.A=d("days");j.b=j.B=d("months");c.each(function(u,t){if(u.format){c[t]=l(u.format);}});};var l=function(u){if(!e){return{format:u};
}var s=[];var t=(u.source||u).replace(/%([a-z])/gi,function(w,v){return m(v)||w;}).replace(/\((?!\?)/g,"(?:").replace(/ (?!\?|\*)/g,",? ").replace(/%([a-z%])/gi,function(w,v){var x=j[v];
if(!x){return v;}s.push(v);return"("+x.source+")";}).replace(/\[a-z\]/gi,"[a-z\\u00c0-\\uffff;&]");return{format:u,re:new RegExp("^"+t+"$","i"),handler:function(y){y=y.slice(1).associate(s);
var v=new a().clearTime(),x=y.y||y.Y;if(x!=null){q.call(v,"y",x);}if("d" in y){q.call(v,"d",1);}if("m" in y||y.b||y.B){q.call(v,"m",1);}for(var w in y){q.call(v,w,y[w]);
}return v;}};};var q=function(s,t){if(!t){return this;}switch(s){case"a":case"A":return this.set("day",a.parseDay(t,true));case"b":case"B":return this.set("mo",a.parseMonth(t,true));
case"d":return this.set("date",t);case"H":case"I":return this.set("hr",t);case"m":return this.set("mo",t-1);case"M":return this.set("min",t);case"p":return this.set("ampm",t.replace(/\./g,""));
case"S":return this.set("sec",t);case"s":return this.set("ms",("0."+t)*1000);case"w":return this.set("day",t);case"Y":return this.set("year",t);case"y":t=+t;
if(t<100){t+=i+(t<o?100:0);}return this.set("year",t);case"z":if(t=="Z"){t="+00";}var u=t.match(/([+-])(\d{2}):?(\d{2})?/);u=(u[1]+"1")*(u[2]*60+(+u[3]||0))+this.getTimezoneOffset();
return this.set("time",this-u*60000);}return this;};a.defineParsers("%Y([-./]%m([-./]%d((T| )%X)?)?)?","%Y%m%d(T%H(%M%S?)?)?","%x( %X)?","%d%o( %b( %Y)?)?( %X)?","%b( %d%o)?( %Y)?( %X)?","%Y %b( %d%o( %X)?)?","%o %b %d %X %z %Y","%T","%H:%M( ?%p)?");
Locale.addEvent("change",function(s){if(Locale.get("Date")){b(s);}}).fireEvent("change",Locale.getCurrent());})();Date.implement({timeDiffInWords:function(a){return Date.distanceOfTimeInWords(this,a||new Date);
},timeDiff:function(f,c){if(f==null){f=new Date;}var h=((f-this)/1000).floor().abs();var e=[],a=[60,60,24,365,0],d=["s","m","h","d","y"],g,b;for(var i=0;
i<a.length;i++){if(i&&!h){break;}g=h;if((b=a[i])){g=(h%b);h=(h/b).floor();}e.unshift(g+(d[i]||""));}return e.join(c||":");}}).extend({distanceOfTimeInWords:function(b,a){return Date.getTimePhrase(((a-b)/1000).toInt());
},getTimePhrase:function(f){var d=(f<0)?"Until":"Ago";if(f<0){f*=-1;}var b={minute:60,hour:60,day:24,week:7,month:52/12,year:12,eon:Infinity};var e="lessThanMinute";
for(var c in b){var a=b[c];if(f<1.5*a){if(f>0.75*a){e=c;}break;}f/=a;e=c+"s";}f=f.round();return Date.getMsg(e+d,f).substitute({delta:f});}}).defineParsers({re:/^(?:tod|tom|yes)/i,handler:function(a){var b=new Date().clearTime();
switch(a[0]){case"tom":return b.increment();case"yes":return b.decrement();default:return b;}}},{re:/^(next|last) ([a-z]+)$/i,handler:function(e){var f=new Date().clearTime();
var b=f.getDay();var c=Date.parseDay(e[2],true);var a=c-b;if(c<=b){a+=7;}if(e[1]=="last"){a-=7;}return f.set("date",f.getDate()+a);}}).alias("timeAgoInWords","timeDiffInWords");
Locale.define("en-US","Number",{decimal:".",group:",",currency:{prefix:"$ "}});Number.implement({format:function(q){var n=this;q=q?Object.clone(q):{};var a=function(i){if(q[i]!=null){return q[i];
}return Locale.get("Number."+i);};var f=n<0,h=a("decimal"),k=a("precision"),o=a("group"),c=a("decimals");if(f){var e=a("negative")||{};if(e.prefix==null&&e.suffix==null){e.prefix="-";
}["prefix","suffix"].each(function(i){if(e[i]){q[i]=a(i)+e[i];}});n=-n;}var l=a("prefix"),p=a("suffix");if(c!==""&&c>=0&&c<=20){n=n.toFixed(c);}if(k>=1&&k<=21){n=(+n).toPrecision(k);
}n+="";var m;if(a("scientific")===false&&n.indexOf("e")>-1){var j=n.split("e"),b=+j[1];n=j[0].replace(".","");if(b<0){b=-b-1;m=j[0].indexOf(".");if(m>-1){b-=m-1;
}while(b--){n="0"+n;}n="0."+n;}else{m=j[0].lastIndexOf(".");if(m>-1){b-=j[0].length-m-1;}while(b--){n+="0";}}}if(h!="."){n=n.replace(".",h);}if(o){m=n.lastIndexOf(h);
m=(m>-1)?m:n.length;var d=n.substring(m),g=m;while(g--){if((m-g-1)%3==0&&g!=(m-1)){d=o+d;}d=n.charAt(g)+d;}n=d;}if(l){n=l+n;}if(p){n+=p;}return n;},formatCurrency:function(b){var a=Locale.get("Number.currency")||{};
if(a.scientific==null){a.scientific=false;}a.decimals=b!=null?b:(a.decimals==null?2:a.decimals);return this.format(a);},formatPercentage:function(b){var a=Locale.get("Number.percentage")||{};
if(a.suffix==null){a.suffix="%";}a.decimals=b!=null?b:(a.decimals==null?2:a.decimals);return this.format(a);}});(function(){var c={a:/[Ã Ã¡Ã¢Ã£Ã¤Ã¥ÄƒÄ…]/g,A:/[Ã€ÃÃ‚ÃƒÃ„Ã…Ä‚Ä„]/g,c:/[Ä‡ÄÃ§]/g,C:/[Ä†ÄŒÃ‡]/g,d:/[ÄÄ‘]/g,D:/[ÄŽÃ]/g,e:/[Ã¨Ã©ÃªÃ«Ä›Ä™]/g,E:/[ÃˆÃ‰ÃŠÃ‹ÄšÄ˜]/g,g:/[ÄŸ]/g,G:/[Äž]/g,i:/[Ã¬Ã­Ã®Ã¯]/g,I:/[ÃŒÃÃŽÃ]/g,l:/[ÄºÄ¾Å‚]/g,L:/[Ä¹Ä½Å]/g,n:/[Ã±ÅˆÅ„]/g,N:/[Ã‘Å‡Åƒ]/g,o:/[Ã²Ã³Ã´ÃµÃ¶Ã¸Å‘]/g,O:/[Ã’Ã“Ã”Ã•Ã–Ã˜]/g,r:/[Å™Å•]/g,R:/[Å˜Å”]/g,s:/[Å¡Å¡ÅŸ]/g,S:/[Å ÅžÅš]/g,t:/[Å¥Å£]/g,T:/[Å¤Å¢]/g,ue:/[Ã¼]/g,UE:/[Ãœ]/g,u:/[Ã¹ÃºÃ»Å¯Âµ]/g,U:/[Ã™ÃšÃ›Å®]/g,y:/[Ã¿Ã½]/g,Y:/[Å¸Ã]/g,z:/[Å¾ÅºÅ¼]/g,Z:/[Å½Å¹Å»]/g,th:/[Ã¾]/g,TH:/[Ãž]/g,dh:/[Ã°]/g,DH:/[Ã]/g,ss:/[ÃŸ]/g,oe:/[Å“]/g,OE:/[Å’]/g,ae:/[Ã¦]/g,AE:/[Ã†]/g},b={" ":/[\xa0\u2002\u2003\u2009]/g,"*":/[\xb7]/g,"'":/[\u2018\u2019]/g,'"':/[\u201c\u201d]/g,"...":/[\u2026]/g,"-":/[\u2013]/g,"&raquo;":/[\uFFFD]/g};
var a=function(f,h){var e=f,g;for(g in h){e=e.replace(h[g],g);}return e;};var d=function(e,g){e=e||"";var h=g?"<"+e+"(?!\\w)[^>]*>([\\s\\S]*?)</"+e+"(?!\\w)>":"</?"+e+"([^>]+)?>",f=new RegExp(h,"gi");
return f;};String.implement({standardize:function(){return a(this,c);},repeat:function(e){return new Array(e+1).join(this);},pad:function(e,h,g){if(this.length>=e){return this;
}var f=(h==null?" ":""+h).repeat(e-this.length).substr(0,e-this.length);if(!g||g=="right"){return this+f;}if(g=="left"){return f+this;}return f.substr(0,(f.length/2).floor())+this+f.substr(0,(f.length/2).ceil());
},getTags:function(e,f){return this.match(d(e,f))||[];},stripTags:function(e,f){return this.replace(d(e,f),"");},tidy:function(){return a(this,b);},truncate:function(e,f,i){var h=this;
if(f==null&&arguments.length==1){f="â€¦";}if(h.length>e){h=h.substring(0,e);if(i){var g=h.lastIndexOf(i);if(g!=-1){h=h.substr(0,g);}}if(f){h+=f;}}return h;
}});})();String.implement({parseQueryString:function(d,a){if(d==null){d=true;}if(a==null){a=true;}var c=this.split(/[&;]/),b={};if(!c.length){return b;
}c.each(function(i){var e=i.indexOf("=")+1,g=e?i.substr(e):"",f=e?i.substr(0,e-1).match(/([^\]\[]+|(\B)(?=\]))/g):[i],h=b;if(!f){return;}if(a){g=decodeURIComponent(g);
}f.each(function(k,j){if(d){k=decodeURIComponent(k);}var l=h[k];if(j<f.length-1){h=h[k]=l||{};}else{if(typeOf(l)=="array"){l.push(g);}else{h[k]=l!=null?[l,g]:g;
}}});});return b;},cleanQueryString:function(a){return this.split("&").filter(function(e){var b=e.indexOf("="),c=b<0?"":e.substr(0,b),d=e.substr(b+1);return a?a.call(null,c,d):(d||d===0);
}).join("&");}});(function(){var b=function(){return this.get("value");};var a=this.URI=new Class({Implements:Options,options:{},regex:/^(?:(\w+):)?(?:\/\/(?:(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)?(\.\.?$|(?:[^?#\/]*\/)*)([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,parts:["scheme","user","password","host","port","directory","file","query","fragment"],schemes:{http:80,https:443,ftp:21,rtsp:554,mms:1755,file:0},initialize:function(d,c){this.setOptions(c);
var e=this.options.base||a.base;if(!d){d=e;}if(d&&d.parsed){this.parsed=Object.clone(d.parsed);}else{this.set("value",d.href||d.toString(),e?new a(e):false);
}},parse:function(e,d){var c=e.match(this.regex);if(!c){return false;}c.shift();return this.merge(c.associate(this.parts),d);},merge:function(d,c){if((!d||!d.scheme)&&(!c||!c.scheme)){return false;
}if(c){this.parts.every(function(e){if(d[e]){return false;}d[e]=c[e]||"";return true;});}d.port=d.port||this.schemes[d.scheme.toLowerCase()];d.directory=d.directory?this.parseDirectory(d.directory,c?c.directory:""):"/";
return d;},parseDirectory:function(d,e){d=(d.substr(0,1)=="/"?"":(e||"/"))+d;if(!d.test(a.regs.directoryDot)){return d;}var c=[];d.replace(a.regs.endSlash,"").split("/").each(function(f){if(f==".."&&c.length>0){c.pop();
}else{if(f!="."){c.push(f);}}});return c.join("/")+"/";},combine:function(c){return c.value||c.scheme+"://"+(c.user?c.user+(c.password?":"+c.password:"")+"@":"")+(c.host||"")+(c.port&&c.port!=this.schemes[c.scheme]?":"+c.port:"")+(c.directory||"/")+(c.file||"")+(c.query?"?"+c.query:"")+(c.fragment?"#"+c.fragment:"");
},set:function(d,f,e){if(d=="value"){var c=f.match(a.regs.scheme);if(c){c=c[1];}if(c&&this.schemes[c.toLowerCase()]==null){this.parsed={scheme:c,value:f};
}else{this.parsed=this.parse(f,(e||this).parsed)||(c?{scheme:c,value:f}:{value:f});}}else{if(d=="data"){this.setData(f);}else{this.parsed[d]=f;}}return this;
},get:function(c,d){switch(c){case"value":return this.combine(this.parsed,d?d.parsed:false);case"data":return this.getData();}return this.parsed[c]||"";
},go:function(){document.location.href=this.toString();},toURI:function(){return this;},getData:function(e,d){var c=this.get(d||"query");if(!(c||c===0)){return e?null:{};
}var f=c.parseQueryString();return e?f[e]:f;},setData:function(c,f,d){if(typeof c=="string"){var e=this.getData();e[arguments[0]]=arguments[1];c=e;}else{if(f){c=Object.merge(this.getData(),c);
}}return this.set(d||"query",Object.toQueryString(c));},clearData:function(c){return this.set(c||"query","");},toString:b,valueOf:b});a.regs={endSlash:/\/$/,scheme:/^(\w+):/,directoryDot:/\.\/|\.$/};
a.base=new a(Array.from(document.getElements("base[href]",true)).getLast(),{base:document.location});String.implement({toURI:function(c){return new a(this,c);
}});})();URI=Class.refactor(URI,{combine:function(f,e){if(!e||f.scheme!=e.scheme||f.host!=e.host||f.port!=e.port){return this.previous.apply(this,arguments);
}var a=f.file+(f.query?"?"+f.query:"")+(f.fragment?"#"+f.fragment:"");if(!e.directory){return(f.directory||(f.file?"":"./"))+a;}var d=e.directory.split("/"),c=f.directory.split("/"),g="",h;
var b=0;for(h=0;h<d.length&&h<c.length&&d[h]==c[h];h++){}for(b=0;b<d.length-h-1;b++){g+="../";}for(b=h;b<c.length-1;b++){g+=c[b]+"/";}return(g||(f.file?"":"./"))+a;
},toAbsolute:function(a){a=new URI(a);if(a){a.set("directory","").set("file","");}return this.toRelative(a);},toRelative:function(a){return this.get("value",new URI(a));
}});(function(){if(this.Hash){return;}var a=this.Hash=new Type("Hash",function(b){if(typeOf(b)=="hash"){b=Object.clone(b.getClean());}for(var c in b){this[c]=b[c];
}return this;});this.$H=function(b){return new a(b);};a.implement({forEach:function(b,c){Object.forEach(this,b,c);},getClean:function(){var c={};for(var b in this){if(this.hasOwnProperty(b)){c[b]=this[b];
}}return c;},getLength:function(){var c=0;for(var b in this){if(this.hasOwnProperty(b)){c++;}}return c;}});a.alias("each","forEach");a.implement({has:Object.prototype.hasOwnProperty,keyOf:function(b){return Object.keyOf(this,b);
},hasValue:function(b){return Object.contains(this,b);},extend:function(b){a.each(b||{},function(d,c){a.set(this,c,d);},this);return this;},combine:function(b){a.each(b||{},function(d,c){a.include(this,c,d);
},this);return this;},erase:function(b){if(this.hasOwnProperty(b)){delete this[b];}return this;},get:function(b){return(this.hasOwnProperty(b))?this[b]:null;
},set:function(b,c){if(!this[b]||this.hasOwnProperty(b)){this[b]=c;}return this;},empty:function(){a.each(this,function(c,b){delete this[b];},this);return this;
},include:function(b,c){if(this[b]==undefined){this[b]=c;}return this;},map:function(b,c){return new a(Object.map(this,b,c));},filter:function(b,c){return new a(Object.filter(this,b,c));
},every:function(b,c){return Object.every(this,b,c);},some:function(b,c){return Object.some(this,b,c);},getKeys:function(){return Object.keys(this);},getValues:function(){return Object.values(this);
},toQueryString:function(b){return Object.toQueryString(this,b);}});a.alias({indexOf:"keyOf",contains:"hasValue"});})();Hash.implement({getFromPath:function(a){return Object.getFromPath(this,a);
},cleanValues:function(a){return new Hash(Object.cleanValues(this,a));},run:function(){Object.run(arguments);}});Element.implement({tidy:function(){this.set("value",this.get("value").tidy());
},getTextInRange:function(b,a){return this.get("value").substring(b,a);},getSelectedText:function(){if(this.setSelectionRange){return this.getTextInRange(this.getSelectionStart(),this.getSelectionEnd());
}return document.selection.createRange().text;},getSelectedRange:function(){if(this.selectionStart!=null){return{start:this.selectionStart,end:this.selectionEnd};
}var e={start:0,end:0};var a=this.getDocument().selection.createRange();if(!a||a.parentElement()!=this){return e;}var c=a.duplicate();if(this.type=="text"){e.start=0-c.moveStart("character",-100000);
e.end=e.start+a.text.length;}else{var b=this.get("value");var d=b.length;c.moveToElementText(this);c.setEndPoint("StartToEnd",a);if(c.text.length){d-=b.match(/[\n\r]*$/)[0].length;
}e.end=d-c.text.length;c.setEndPoint("StartToStart",a);e.start=d-c.text.length;}return e;},getSelectionStart:function(){return this.getSelectedRange().start;
},getSelectionEnd:function(){return this.getSelectedRange().end;},setCaretPosition:function(a){if(a=="end"){a=this.get("value").length;}this.selectRange(a,a);
return this;},getCaretPosition:function(){return this.getSelectedRange().start;},selectRange:function(e,a){if(this.setSelectionRange){this.focus();this.setSelectionRange(e,a);
}else{var c=this.get("value");var d=c.substr(e,a-e).replace(/\r/g,"").length;e=c.substr(0,e).replace(/\r/g,"").length;var b=this.createTextRange();b.collapse(true);
b.moveEnd("character",e+d);b.moveStart("character",e);b.select();}return this;},insertAtCursor:function(b,a){var d=this.getSelectedRange();var c=this.get("value");
this.set("value",c.substring(0,d.start)+b+c.substring(d.end,c.length));if(a!==false){this.selectRange(d.start,d.start+b.length);}else{this.setCaretPosition(d.start+b.length);
}return this;},insertAroundCursor:function(b,a){b=Object.append({before:"",defaultMiddle:"",after:""},b);var c=this.getSelectedText()||b.defaultMiddle;
var g=this.getSelectedRange();var f=this.get("value");if(g.start==g.end){this.set("value",f.substring(0,g.start)+b.before+c+b.after+f.substring(g.end,f.length));
this.selectRange(g.start+b.before.length,g.end+b.before.length+c.length);}else{var d=f.substring(g.start,g.end);this.set("value",f.substring(0,g.start)+b.before+d+b.after+f.substring(g.end,f.length));
var e=g.start+b.before.length;if(a!==false){this.selectRange(e,e+d.length);}else{this.setCaretPosition(e+f.length);}}return this;}});Elements.from=function(e,d){if(d||d==null){e=e.stripScripts();
}var b,c=e.match(/^\s*<(t[dhr]|tbody|tfoot|thead)/i);if(c){b=new Element("table");var a=c[1].toLowerCase();if(["td","th","tr"].contains(a)){b=new Element("tbody").inject(b);
if(a!="tr"){b=new Element("tr").inject(b);}}}return(b||new Element("div")).set("html",e).getChildren();};(function(){var d={relay:false},c=["once","throttle","pause"],b=c.length;
while(b--){d[c[b]]=Events.lookupPseudo(c[b]);}DOMEvent.definePseudo=function(e,f){d[e]=f;return this;};var a=Element.prototype;[Element,Window,Document].invoke("implement",Events.Pseudos(d,a.addEvent,a.removeEvent));
})();(function(){var a="$moo:keys-pressed",b="$moo:keys-keyup";DOMEvent.definePseudo("keys",function(d,e,c){var g=c[0],f=[],h=this.retrieve(a,[]);f.append(d.value.replace("++",function(){f.push("+");
return"";}).split("+"));h.include(g.key);if(f.every(function(j){return h.contains(j);})){e.apply(this,c);}this.store(a,h);if(!this.retrieve(b)){var i=function(j){(function(){h=this.retrieve(a,[]).erase(j.key);
this.store(a,h);}).delay(0,this);};this.store(b,i).addEvent("keyup",i);}});DOMEvent.defineKeys({"16":"shift","17":"control","18":"alt","20":"capslock","33":"pageup","34":"pagedown","35":"end","36":"home","144":"numlock","145":"scrolllock","186":";","187":"=","188":",","190":".","191":"/","192":"`","219":"[","220":"\\","221":"]","222":"'","107":"+"}).defineKey(Browser.firefox?109:189,"-");
})();(function(){var b=function(e,d){var f=[];Object.each(d,function(g){Object.each(g,function(h){e.each(function(i){f.push(i+"-"+h+(i=="border"?"-width":""));
});});});return f;};var c=function(f,e){var d=0;Object.each(e,function(h,g){if(g.test(f)){d=d+h.toInt();}});return d;};var a=function(d){return !!(!d||d.offsetHeight||d.offsetWidth);
};Element.implement({measure:function(h){if(a(this)){return h.call(this);}var g=this.getParent(),e=[];while(!a(g)&&g!=document.body){e.push(g.expose());
g=g.getParent();}var f=this.expose(),d=h.call(this);f();e.each(function(i){i();});return d;},expose:function(){if(this.getStyle("display")!="none"){return function(){};
}var d=this.style.cssText;this.setStyles({display:"block",position:"absolute",visibility:"hidden"});return function(){this.style.cssText=d;}.bind(this);
},getDimensions:function(d){d=Object.merge({computeSize:false},d);var i={x:0,y:0};var h=function(j,e){return(e.computeSize)?j.getComputedSize(e):j.getSize();
};var f=this.getParent("body");if(f&&this.getStyle("display")=="none"){i=this.measure(function(){return h(this,d);});}else{if(f){try{i=h(this,d);}catch(g){}}}return Object.append(i,(i.x||i.x===0)?{width:i.x,height:i.y}:{x:i.width,y:i.height});
},getComputedSize:function(d){if(d&&d.plains){d.planes=d.plains;}d=Object.merge({styles:["padding","border"],planes:{height:["top","bottom"],width:["left","right"]},mode:"both"},d);
var g={},e={width:0,height:0},f;if(d.mode=="vertical"){delete e.width;delete d.planes.width;}else{if(d.mode=="horizontal"){delete e.height;delete d.planes.height;
}}b(d.styles,d.planes).each(function(h){g[h]=this.getStyle(h).toInt();},this);Object.each(d.planes,function(i,h){var k=h.capitalize(),j=this.getStyle(h);
if(j=="auto"&&!f){f=this.getDimensions();}j=g[h]=(j=="auto")?f[h]:j.toInt();e["total"+k]=j;i.each(function(m){var l=c(m,g);e["computed"+m.capitalize()]=l;
e["total"+k]+=l;});},this);return Object.append(e,g);}});})();(function(){var a=false,b=false;var c=function(){var d=new Element("div").setStyles({position:"fixed",top:0,right:0}).inject(document.body);
a=(d.offsetTop===0);d.dispose();b=true;};Element.implement({pin:function(h,f){if(!b){c();}if(this.getStyle("display")=="none"){return this;}var j,k=window.getScroll(),l,e;
if(h!==false){j=this.getPosition(a?document.body:this.getOffsetParent());if(!this.retrieve("pin:_pinned")){var g={top:j.y-k.y,left:j.x-k.x};if(a&&!f){this.setStyle("position","fixed").setStyles(g);
}else{l=this.getOffsetParent();var i=this.getPosition(l),m=this.getStyles("left","top");if(l&&m.left=="auto"||m.top=="auto"){this.setPosition(i);}if(this.getStyle("position")=="static"){this.setStyle("position","absolute");
}i={x:m.left.toInt()-k.x,y:m.top.toInt()-k.y};e=function(){if(!this.retrieve("pin:_pinned")){return;}var n=window.getScroll();this.setStyles({left:i.x+n.x,top:i.y+n.y});
}.bind(this);this.store("pin:_scrollFixer",e);window.addEvent("scroll",e);}this.store("pin:_pinned",true);}}else{if(!this.retrieve("pin:_pinned")){return this;
}l=this.getParent();var d=(l.getComputedStyle("position")!="static"?l:l.getOffsetParent());j=this.getPosition(d);this.store("pin:_pinned",false);e=this.retrieve("pin:_scrollFixer");
if(!e){this.setStyles({position:"absolute",top:j.y+k.y,left:j.x+k.x});}else{this.store("pin:_scrollFixer",null);window.removeEvent("scroll",e);}this.removeClass("isPinned");
}return this;},unpin:function(){return this.pin(false);},togglePin:function(){return this.pin(!this.retrieve("pin:_pinned"));}});Element.alias("togglepin","togglePin");
})();(function(b){var a=Element.Position={options:{relativeTo:document.body,position:{x:"center",y:"center"},offset:{x:0,y:0}},getOptions:function(d,c){c=Object.merge({},a.options,c);
a.setPositionOption(c);a.setEdgeOption(c);a.setOffsetOption(d,c);a.setDimensionsOption(d,c);return c;},setPositionOption:function(c){c.position=a.getCoordinateFromValue(c.position);
},setEdgeOption:function(d){var c=a.getCoordinateFromValue(d.edge);d.edge=c?c:(d.position.x=="center"&&d.position.y=="center")?{x:"center",y:"center"}:{x:"left",y:"top"};
},setOffsetOption:function(f,d){var c={x:0,y:0},g=f.measure(function(){return document.id(this.getOffsetParent());}),e=g.getScroll();if(!g||g==f.getDocument().body){return;
}c=g.measure(function(){var i=this.getPosition();if(this.getStyle("position")=="fixed"){var h=window.getScroll();i.x+=h.x;i.y+=h.y;}return i;});d.offset={parentPositioned:g!=document.id(d.relativeTo),x:d.offset.x-c.x+e.x,y:d.offset.y-c.y+e.y};
},setDimensionsOption:function(d,c){c.dimensions=d.getDimensions({computeSize:true,styles:["padding","border","margin"]});},getPosition:function(e,d){var c={};
d=a.getOptions(e,d);var f=document.id(d.relativeTo)||document.body;a.setPositionCoordinates(d,c,f);if(d.edge){a.toEdge(c,d);}var g=d.offset;c.left=((c.x>=0||g.parentPositioned||d.allowNegative)?c.x:0).toInt();
c.top=((c.y>=0||g.parentPositioned||d.allowNegative)?c.y:0).toInt();a.toMinMax(c,d);if(d.relFixedPosition||f.getStyle("position")=="fixed"){a.toRelFixedPosition(f,c);
}if(d.ignoreScroll){a.toIgnoreScroll(f,c);}if(d.ignoreMargins){a.toIgnoreMargins(c,d);}c.left=Math.ceil(c.left);c.top=Math.ceil(c.top);delete c.x;delete c.y;
return c;},setPositionCoordinates:function(k,g,d){var f=k.offset.y,h=k.offset.x,e=(d==document.body)?window.getScroll():d.getPosition(),j=e.y,c=e.x,i=window.getSize();
switch(k.position.x){case"left":g.x=c+h;break;case"right":g.x=c+h+d.offsetWidth;break;default:g.x=c+((d==document.body?i.x:d.offsetWidth)/2)+h;break;}switch(k.position.y){case"top":g.y=j+f;
break;case"bottom":g.y=j+f+d.offsetHeight;break;default:g.y=j+((d==document.body?i.y:d.offsetHeight)/2)+f;break;}},toMinMax:function(c,d){var f={left:"x",top:"y"},e;
["minimum","maximum"].each(function(g){["left","top"].each(function(h){e=d[g]?d[g][f[h]]:null;if(e!=null&&((g=="minimum")?c[h]<e:c[h]>e)){c[h]=e;}});});
},toRelFixedPosition:function(e,c){var d=window.getScroll();c.top+=d.y;c.left+=d.x;},toIgnoreScroll:function(e,d){var c=e.getScroll();d.top-=c.y;d.left-=c.x;
},toIgnoreMargins:function(c,d){c.left+=d.edge.x=="right"?d.dimensions["margin-right"]:(d.edge.x!="center"?-d.dimensions["margin-left"]:-d.dimensions["margin-left"]+((d.dimensions["margin-right"]+d.dimensions["margin-left"])/2));
c.top+=d.edge.y=="bottom"?d.dimensions["margin-bottom"]:(d.edge.y!="center"?-d.dimensions["margin-top"]:-d.dimensions["margin-top"]+((d.dimensions["margin-bottom"]+d.dimensions["margin-top"])/2));
},toEdge:function(c,d){var e={},g=d.dimensions,f=d.edge;switch(f.x){case"left":e.x=0;break;case"right":e.x=-g.x-g.computedRight-g.computedLeft;break;default:e.x=-(Math.round(g.totalWidth/2));
break;}switch(f.y){case"top":e.y=0;break;case"bottom":e.y=-g.y-g.computedTop-g.computedBottom;break;default:e.y=-(Math.round(g.totalHeight/2));break;}c.x+=e.x;
c.y+=e.y;},getCoordinateFromValue:function(c){if(typeOf(c)!="string"){return c;}c=c.toLowerCase();return{x:c.test("left")?"left":(c.test("right")?"right":"center"),y:c.test(/upper|top/)?"top":(c.test("bottom")?"bottom":"center")};
}};Element.implement({position:function(d){if(d&&(d.x!=null||d.y!=null)){return(b?b.apply(this,arguments):this);}var c=this.setStyle("position","absolute").calculatePosition(d);
return(d&&d.returnPos)?c:this.setStyles(c);},calculatePosition:function(c){return a.getPosition(this,c);}});})(Element.prototype.position);Element.implement({isDisplayed:function(){return this.getStyle("display")!="none";
},isVisible:function(){var a=this.offsetWidth,b=this.offsetHeight;return(a==0&&b==0)?false:(a>0&&b>0)?true:this.style.display!="none";},toggle:function(){return this[this.isDisplayed()?"hide":"show"]();
},hide:function(){var b;try{b=this.getStyle("display");}catch(a){}if(b=="none"){return this;}return this.store("element:_originalDisplay",b||"").setStyle("display","none");
},show:function(a){if(!a&&this.isDisplayed()){return this;}a=a||this.retrieve("element:_originalDisplay")||"block";return this.setStyle("display",(a=="none")?"block":a);
},swapClass:function(a,b){return this.removeClass(a).addClass(b);}});Document.implement({clearSelection:function(){if(window.getSelection){var a=window.getSelection();
if(a&&a.removeAllRanges){a.removeAllRanges();}}else{if(document.selection&&document.selection.empty){try{document.selection.empty();}catch(b){}}}}});var IframeShim=new Class({Implements:[Options,Events,Class.Occlude],options:{className:"iframeShim",src:'javascript:false;document.write("");',display:false,zIndex:null,margin:0,offset:{x:0,y:0},browsers:(Browser.ie6||(Browser.firefox&&Browser.version<3&&Browser.Platform.mac))},property:"IframeShim",initialize:function(b,a){this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a);this.makeShim();return this;},makeShim:function(){if(this.options.browsers){var c=this.element.getStyle("zIndex").toInt();
if(!c){c=1;var b=this.element.getStyle("position");if(b=="static"||!b){this.element.setStyle("position","relative");}this.element.setStyle("zIndex",c);
}c=((this.options.zIndex!=null||this.options.zIndex===0)&&c>this.options.zIndex)?this.options.zIndex:c-1;if(c<0){c=1;}this.shim=new Element("iframe",{src:this.options.src,scrolling:"no",frameborder:0,styles:{zIndex:c,position:"absolute",border:"none",filter:"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"},"class":this.options.className}).store("IframeShim",this);
var a=(function(){this.shim.inject(this.element,"after");this[this.options.display?"show":"hide"]();this.fireEvent("inject");}).bind(this);if(!IframeShim.ready){window.addEvent("load",a);
}else{a();}}else{this.position=this.hide=this.show=this.dispose=Function.from(this);}},position:function(){if(!IframeShim.ready||!this.shim){return this;
}var a=this.element.measure(function(){return this.getSize();});if(this.options.margin!=undefined){a.x=a.x-(this.options.margin*2);a.y=a.y-(this.options.margin*2);
this.options.offset.x+=this.options.margin;this.options.offset.y+=this.options.margin;}this.shim.set({width:a.x,height:a.y}).position({relativeTo:this.element,offset:this.options.offset});
return this;},hide:function(){if(this.shim){this.shim.setStyle("display","none");}return this;},show:function(){if(this.shim){this.shim.setStyle("display","block");
}return this.position();},dispose:function(){if(this.shim){this.shim.dispose();}return this;},destroy:function(){if(this.shim){this.shim.destroy();}return this;
}});window.addEvent("load",function(){IframeShim.ready=true;});var Mask=new Class({Implements:[Options,Events],Binds:["position"],options:{style:{},"class":"mask",maskMargins:false,useIframeShim:true,iframeShimOptions:{}},initialize:function(b,a){this.target=document.id(b)||document.id(document.body);
this.target.store("mask",this);this.setOptions(a);this.render();this.inject();},render:function(){this.element=new Element("div",{"class":this.options["class"],id:this.options.id||"mask-"+String.uniqueID(),styles:Object.merge({},this.options.style,{display:"none"}),events:{click:function(a){this.fireEvent("click",a);
if(this.options.hideOnClick){this.hide();}}.bind(this)}});this.hidden=true;},toElement:function(){return this.element;},inject:function(b,a){a=a||(this.options.inject?this.options.inject.where:"")||this.target==document.body?"inside":"after";
b=b||(this.options.inject&&this.options.inject.target)||this.target;this.element.inject(b,a);if(this.options.useIframeShim){this.shim=new IframeShim(this.element,this.options.iframeShimOptions);
this.addEvents({show:this.shim.show.bind(this.shim),hide:this.shim.hide.bind(this.shim),destroy:this.shim.destroy.bind(this.shim)});}},position:function(){this.resize(this.options.width,this.options.height);
this.element.position({relativeTo:this.target,position:"topLeft",ignoreMargins:!this.options.maskMargins,ignoreScroll:this.target==document.body});return this;
},resize:function(a,e){var b={styles:["padding","border"]};if(this.options.maskMargins){b.styles.push("margin");}var d=this.target.getComputedSize(b);if(this.target==document.body){this.element.setStyles({width:0,height:0});
var c=window.getScrollSize();if(d.totalHeight<c.y){d.totalHeight=c.y;}if(d.totalWidth<c.x){d.totalWidth=c.x;}}this.element.setStyles({width:Array.pick([a,d.totalWidth,d.x]),height:Array.pick([e,d.totalHeight,d.y])});
return this;},show:function(){if(!this.hidden){return this;}window.addEvent("resize",this.position);this.position();this.showMask.apply(this,arguments);
return this;},showMask:function(){this.element.setStyle("display","block");this.hidden=false;this.fireEvent("show");},hide:function(){if(this.hidden){return this;
}window.removeEvent("resize",this.position);this.hideMask.apply(this,arguments);if(this.options.destroyOnHide){return this.destroy();}return this;},hideMask:function(){this.element.setStyle("display","none");
this.hidden=true;this.fireEvent("hide");},toggle:function(){this[this.hidden?"show":"hide"]();},destroy:function(){this.hide();this.element.destroy();this.fireEvent("destroy");
this.target.eliminate("mask");}});Element.Properties.mask={set:function(b){var a=this.retrieve("mask");if(a){a.destroy();}return this.eliminate("mask").store("mask:options",b);
},get:function(){var a=this.retrieve("mask");if(!a){a=new Mask(this,this.retrieve("mask:options"));this.store("mask",a);}return a;}};Element.implement({mask:function(a){if(a){this.set("mask",a);
}this.get("mask").show();return this;},unmask:function(){this.get("mask").hide();return this;}});var Spinner=new Class({Extends:Mask,Implements:Chain,options:{"class":"spinner",containerPosition:{},content:{"class":"spinner-content"},messageContainer:{"class":"spinner-msg"},img:{"class":"spinner-img"},fxOptions:{link:"chain"}},initialize:function(c,a){this.target=document.id(c)||document.id(document.body);
this.target.store("spinner",this);this.setOptions(a);this.render();this.inject();var b=function(){this.active=false;}.bind(this);this.addEvents({hide:b,show:b});
},render:function(){this.parent();this.element.set("id",this.options.id||"spinner-"+String.uniqueID());this.content=document.id(this.options.content)||new Element("div",this.options.content);
this.content.inject(this.element);if(this.options.message){this.msg=document.id(this.options.message)||new Element("p",this.options.messageContainer).appendText(this.options.message);
this.msg.inject(this.content);}if(this.options.img){this.img=document.id(this.options.img)||new Element("div",this.options.img);this.img.inject(this.content);
}this.element.set("tween",this.options.fxOptions);},show:function(a){if(this.active){return this.chain(this.show.bind(this));}if(!this.hidden){this.callChain.delay(20,this);
return this;}this.active=true;return this.parent(a);},showMask:function(a){var b=function(){this.content.position(Object.merge({relativeTo:this.element},this.options.containerPosition));
}.bind(this);if(a){this.parent();b();}else{if(!this.options.style.opacity){this.options.style.opacity=this.element.getStyle("opacity").toFloat();}this.element.setStyles({display:"block",opacity:0}).tween("opacity",this.options.style.opacity);
b();this.hidden=false;this.fireEvent("show");this.callChain();}},hide:function(a){if(this.active){return this.chain(this.hide.bind(this));}if(this.hidden){this.callChain.delay(20,this);
return this;}this.active=true;return this.parent(a);},hideMask:function(a){if(a){return this.parent();}this.element.tween("opacity",0).get("tween").chain(function(){this.element.setStyle("display","none");
this.hidden=true;this.fireEvent("hide");this.callChain();}.bind(this));},destroy:function(){this.content.destroy();this.parent();this.target.eliminate("spinner");
}});Request=Class.refactor(Request,{options:{useSpinner:false,spinnerOptions:{},spinnerTarget:false},initialize:function(a){this._send=this.send;this.send=function(b){var c=this.getSpinner();
if(c){c.chain(this._send.pass(b,this)).show();}else{this._send(b);}return this;};this.previous(a);},getSpinner:function(){if(!this.spinner){var b=document.id(this.options.spinnerTarget)||document.id(this.options.update);
if(this.options.useSpinner&&b){b.set("spinner",this.options.spinnerOptions);var a=this.spinner=b.get("spinner");["complete","exception","cancel"].each(function(c){this.addEvent(c,a.hide.bind(a));
},this);}}return this.spinner;}});Element.Properties.spinner={set:function(a){var b=this.retrieve("spinner");if(b){b.destroy();}return this.eliminate("spinner").store("spinner:options",a);
},get:function(){var a=this.retrieve("spinner");if(!a){a=new Spinner(this,this.retrieve("spinner:options"));this.store("spinner",a);}return a;}};Element.implement({spin:function(a){if(a){this.set("spinner",a);
}this.get("spinner").show();return this;},unspin:function(){this.get("spinner").hide();return this;}});if(!window.Form){window.Form={};}(function(){Form.Request=new Class({Binds:["onSubmit","onFormValidate"],Implements:[Options,Events,Class.Occlude],options:{requestOptions:{evalScripts:true,useSpinner:true,emulation:false,link:"ignore"},sendButtonClicked:true,extraData:{},resetForm:true},property:"form.request",initialize:function(b,c,a){this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a).setTarget(c).attach();},setTarget:function(a){this.target=document.id(a);if(!this.request){this.makeRequest();
}else{this.request.setOptions({update:this.target});}return this;},toElement:function(){return this.element;},makeRequest:function(){var a=this;this.request=new Request.HTML(Object.merge({update:this.target,emulation:false,spinnerTarget:this.element,method:this.element.get("method")||"post"},this.options.requestOptions)).addEvents({success:function(c,e,d,b){["complete","success"].each(function(f){a.fireEvent(f,[a.target,c,e,d,b]);
});},failure:function(){a.fireEvent("complete",arguments).fireEvent("failure",arguments);},exception:function(){a.fireEvent("failure",arguments);}});return this.attachReset();
},attachReset:function(){if(!this.options.resetForm){return this;}this.request.addEvent("success",function(){Function.attempt(function(){this.element.reset();
}.bind(this));if(window.OverText){OverText.update();}}.bind(this));return this;},attach:function(a){var c=(a!=false)?"addEvent":"removeEvent";this.element[c]("click:relay(button, input[type=submit])",this.saveClickedButton.bind(this));
var b=this.element.retrieve("validator");if(b){b[c]("onFormValidate",this.onFormValidate);}else{this.element[c]("submit",this.onSubmit);}return this;},detach:function(){return this.attach(false);
},enable:function(){return this.attach();},disable:function(){return this.detach();},onFormValidate:function(c,b,a){if(!a){return;}var d=this.element.retrieve("validator");
if(c||(d&&!d.options.stopOnFailure)){a.stop();this.send();}},onSubmit:function(a){var b=this.element.retrieve("validator");if(b){this.element.removeEvent("submit",this.onSubmit);
b.addEvent("onFormValidate",this.onFormValidate);this.element.validate();return;}if(a){a.stop();}this.send();},saveClickedButton:function(b,c){var a=c.get("name");
if(!a||!this.options.sendButtonClicked){return;}this.options.extraData[a]=c.get("value")||true;this.clickedCleaner=function(){delete this.options.extraData[a];
this.clickedCleaner=function(){};}.bind(this);},clickedCleaner:function(){},send:function(){var b=this.element.toQueryString().trim(),a=Object.toQueryString(this.options.extraData);
if(b){b+="&"+a;}else{b=a;}this.fireEvent("send",[this.element,b.parseQueryString()]);this.request.send({data:b,url:this.options.requestOptions.url||this.element.get("action")});
this.clickedCleaner();return this;}});Element.implement("formUpdate",function(c,b){var a=this.retrieve("form.request");if(!a){a=new Form.Request(this,c,b);
}else{if(c){a.setTarget(c);}if(b){a.setOptions(b).makeRequest();}}a.send();return this;});})();(function(){var a=function(d){var b=d.options.hideInputs;
if(window.OverText){var c=[null];OverText.each(function(e){c.include("."+e.options.labelClass);});if(c){b+=c.join(", ");}}return(b)?d.element.getElements(b):null;
};Fx.Reveal=new Class({Extends:Fx.Morph,options:{link:"cancel",styles:["padding","border","margin"],transitionOpacity:!Browser.ie6,mode:"vertical",display:function(){return this.element.get("tag")!="tr"?"block":"table-row";
},opacity:1,hideInputs:Browser.ie?"select, input, textarea, object, embed":null},dissolve:function(){if(!this.hiding&&!this.showing){if(this.element.getStyle("display")!="none"){this.hiding=true;
this.showing=false;this.hidden=true;this.cssText=this.element.style.cssText;var d=this.element.getComputedSize({styles:this.options.styles,mode:this.options.mode});
if(this.options.transitionOpacity){d.opacity=this.options.opacity;}var c={};Object.each(d,function(f,e){c[e]=[f,0];});this.element.setStyles({display:Function.from(this.options.display).call(this),overflow:"hidden"});
var b=a(this);if(b){b.setStyle("visibility","hidden");}this.$chain.unshift(function(){if(this.hidden){this.hiding=false;this.element.style.cssText=this.cssText;
this.element.setStyle("display","none");if(b){b.setStyle("visibility","visible");}}this.fireEvent("hide",this.element);this.callChain();}.bind(this));this.start(c);
}else{this.callChain.delay(10,this);this.fireEvent("complete",this.element);this.fireEvent("hide",this.element);}}else{if(this.options.link=="chain"){this.chain(this.dissolve.bind(this));
}else{if(this.options.link=="cancel"&&!this.hiding){this.cancel();this.dissolve();}}}return this;},reveal:function(){if(!this.showing&&!this.hiding){if(this.element.getStyle("display")=="none"){this.hiding=false;
this.showing=true;this.hidden=false;this.cssText=this.element.style.cssText;var d;this.element.measure(function(){d=this.element.getComputedSize({styles:this.options.styles,mode:this.options.mode});
}.bind(this));if(this.options.heightOverride!=null){d.height=this.options.heightOverride.toInt();}if(this.options.widthOverride!=null){d.width=this.options.widthOverride.toInt();
}if(this.options.transitionOpacity){this.element.setStyle("opacity",0);d.opacity=this.options.opacity;}var c={height:0,display:Function.from(this.options.display).call(this)};
Object.each(d,function(f,e){c[e]=0;});c.overflow="hidden";this.element.setStyles(c);var b=a(this);if(b){b.setStyle("visibility","hidden");}this.$chain.unshift(function(){this.element.style.cssText=this.cssText;
this.element.setStyle("display",Function.from(this.options.display).call(this));if(!this.hidden){this.showing=false;}if(b){b.setStyle("visibility","visible");
}this.callChain();this.fireEvent("show",this.element);}.bind(this));this.start(d);}else{this.callChain();this.fireEvent("complete",this.element);this.fireEvent("show",this.element);
}}else{if(this.options.link=="chain"){this.chain(this.reveal.bind(this));}else{if(this.options.link=="cancel"&&!this.showing){this.cancel();this.reveal();
}}}return this;},toggle:function(){if(this.element.getStyle("display")=="none"){this.reveal();}else{this.dissolve();}return this;},cancel:function(){this.parent.apply(this,arguments);
if(this.cssText!=null){this.element.style.cssText=this.cssText;}this.hiding=false;this.showing=false;return this;}});Element.Properties.reveal={set:function(b){this.get("reveal").cancel().setOptions(b);
return this;},get:function(){var b=this.retrieve("reveal");if(!b){b=new Fx.Reveal(this);this.store("reveal",b);}return b;}};Element.Properties.dissolve=Element.Properties.reveal;
Element.implement({reveal:function(b){this.get("reveal").setOptions(b).reveal();return this;},dissolve:function(b){this.get("reveal").setOptions(b).dissolve();
return this;},nix:function(b){var c=Array.link(arguments,{destroy:Type.isBoolean,options:Type.isObject});this.get("reveal").setOptions(b).dissolve().chain(function(){this[c.destroy?"destroy":"dispose"]();
}.bind(this));return this;},wink:function(){var c=Array.link(arguments,{duration:Type.isNumber,options:Type.isObject});var b=this.get("reveal").setOptions(c.options);
b.reveal().chain(function(){(function(){b.dissolve();}).delay(c.duration||2000);});}});})();Form.Request.Append=new Class({Extends:Form.Request,options:{useReveal:true,revealOptions:{},inject:"bottom"},makeRequest:function(){this.request=new Request.HTML(Object.merge({url:this.element.get("action"),method:this.element.get("method")||"post",spinnerTarget:this.element},this.options.requestOptions,{evalScripts:false})).addEvents({success:function(b,g,f,a){var c;
var d=Elements.from(f);if(d.length==1){c=d[0];}else{c=new Element("div",{styles:{display:"none"}}).adopt(d);}c.inject(this.target,this.options.inject);
if(this.options.requestOptions.evalScripts){Browser.exec(a);}this.fireEvent("beforeEffect",c);var e=function(){this.fireEvent("success",[c,this.target,b,g,f,a]);
}.bind(this);if(this.options.useReveal){c.set("reveal",this.options.revealOptions).get("reveal").chain(e);c.reveal();}else{e();}}.bind(this),failure:function(a){this.fireEvent("failure",a);
}.bind(this)});this.attachReset();}});Locale.define("en-US","FormValidator",{required:"This field is required.",length:"Please enter {length} characters (you entered {elLength} characters)",minLength:"Please enter at least {minLength} characters (you entered {length} characters).",maxLength:"Please enter no more than {maxLength} characters (you entered {length} characters).",integer:"Please enter an integer in this field. Numbers with decimals (e.g. 1.25) are not permitted.",numeric:'Please enter only numeric values in this field (i.e. "1" or "1.1" or "-1" or "-1.1").',digits:"Please use numbers and punctuation only in this field (for example, a phone number with dashes or dots is permitted).",alpha:"Please use only letters (a-z) within this field. No spaces or other characters are allowed.",alphanum:"Please use only letters (a-z) or numbers (0-9) in this field. No spaces or other characters are allowed.",dateSuchAs:"Please enter a valid date such as {date}",dateInFormatMDY:'Please enter a valid date such as MM/DD/YYYY (i.e. "12/31/1999")',email:'Please enter a valid email address. For example "fred@domain.com".',url:"Please enter a valid URL such as http://www.example.com.",currencyDollar:"Please enter a valid $ amount. For example $100.00 .",oneRequired:"Please enter something for at least one of these inputs.",errorPrefix:"Error: ",warningPrefix:"Warning: ",noSpace:"There can be no spaces in this input.",reqChkByNode:"No items are selected.",requiredChk:"This field is required.",reqChkByName:"Please select a {label}.",match:"This field needs to match the {matchName} field",startDate:"the start date",endDate:"the end date",currendDate:"the current date",afterDate:"The date should be the same or after {label}.",beforeDate:"The date should be the same or before {label}.",startMonth:"Please select a start month",sameMonth:"These two dates must be in the same month - you must change one or the other.",creditcard:"The credit card number entered is invalid. Please check the number and try again. {length} digits entered."});
if(!window.Form){window.Form={};}var InputValidator=this.InputValidator=new Class({Implements:[Options],options:{errorMsg:"Validation failed.",test:Function.from(true)},initialize:function(b,a){this.setOptions(a);
this.className=b;},test:function(b,a){b=document.id(b);return(b)?this.options.test(b,a||this.getProps(b)):false;},getError:function(c,a){c=document.id(c);
var b=this.options.errorMsg;if(typeOf(b)=="function"){b=b(c,a||this.getProps(c));}return b;},getProps:function(a){a=document.id(a);return(a)?a.get("validatorProps"):{};
}});Element.Properties.validators={get:function(){return(this.get("data-validators")||this.className).clean().split(" ");}};Element.Properties.validatorProps={set:function(a){return this.eliminate("$moo:validatorProps").store("$moo:validatorProps",a);
},get:function(a){if(a){this.set(a);}if(this.retrieve("$moo:validatorProps")){return this.retrieve("$moo:validatorProps");}if(this.getProperty("data-validator-properties")||this.getProperty("validatorProps")){try{this.store("$moo:validatorProps",JSON.decode(this.getProperty("validatorProps")||this.getProperty("data-validator-properties")));
}catch(c){return{};}}else{var b=this.get("validators").filter(function(d){return d.test(":");});if(!b.length){this.store("$moo:validatorProps",{});}else{a={};
b.each(function(d){var f=d.split(":");if(f[1]){try{a[f[0]]=JSON.decode(f[1]);}catch(g){}}});this.store("$moo:validatorProps",a);}}return this.retrieve("$moo:validatorProps");
}};Form.Validator=new Class({Implements:[Options,Events],Binds:["onSubmit"],options:{fieldSelectors:"input, select, textarea",ignoreHidden:true,ignoreDisabled:true,useTitles:false,evaluateOnSubmit:true,evaluateFieldsOnBlur:true,evaluateFieldsOnChange:true,serial:true,stopOnFailure:true,warningPrefix:function(){return Form.Validator.getMsg("warningPrefix")||"Warning: ";
},errorPrefix:function(){return Form.Validator.getMsg("errorPrefix")||"Error: ";}},initialize:function(b,a){this.setOptions(a);this.element=document.id(b);
this.element.store("validator",this);this.warningPrefix=Function.from(this.options.warningPrefix)();this.errorPrefix=Function.from(this.options.errorPrefix)();
if(this.options.evaluateOnSubmit){this.element.addEvent("submit",this.onSubmit);}if(this.options.evaluateFieldsOnBlur||this.options.evaluateFieldsOnChange){this.watchFields(this.getFields());
}},toElement:function(){return this.element;},getFields:function(){return(this.fields=this.element.getElements(this.options.fieldSelectors));},watchFields:function(a){a.each(function(b){if(this.options.evaluateFieldsOnBlur){b.addEvent("blur",this.validationMonitor.pass([b,false],this));
}if(this.options.evaluateFieldsOnChange){b.addEvent("change",this.validationMonitor.pass([b,true],this));}},this);},validationMonitor:function(){clearTimeout(this.timer);
this.timer=this.validateField.delay(50,this,arguments);},onSubmit:function(a){if(this.validate(a)){this.reset();}},reset:function(){this.getFields().each(this.resetField,this);
return this;},validate:function(b){var a=this.getFields().map(function(c){return this.validateField(c,true);},this).every(function(c){return c;});this.fireEvent("formValidate",[a,this.element,b]);
if(this.options.stopOnFailure&&!a&&b){b.preventDefault();}return a;},validateField:function(j,b){if(this.paused){return true;}j=document.id(j);var f=!j.hasClass("validation-failed");
var g,i;if(this.options.serial&&!b){g=this.element.getElement(".validation-failed");i=this.element.getElement(".warning");}if(j&&(!g||b||j.hasClass("validation-failed")||(g&&!this.options.serial))){var a=j.get("validators");
var d=a.some(function(k){return this.getValidator(k);},this);var h=[];a.each(function(k){if(k&&!this.test(k,j)){h.include(k);}},this);f=h.length===0;if(d&&!this.hasValidator(j,"warnOnly")){if(f){j.addClass("validation-passed").removeClass("validation-failed");
this.fireEvent("elementPass",[j]);}else{j.addClass("validation-failed").removeClass("validation-passed");this.fireEvent("elementFail",[j,h]);}}if(!i){var e=a.some(function(k){if(k.test("^warn")){return this.getValidator(k.replace(/^warn-/,""));
}else{return null;}},this);j.removeClass("warning");var c=a.map(function(k){if(k.test("^warn")){return this.test(k.replace(/^warn-/,""),j,true);}else{return null;
}},this);}}return f;},test:function(b,d,e){d=document.id(d);if((this.options.ignoreHidden&&!d.isVisible())||(this.options.ignoreDisabled&&d.get("disabled"))){return true;
}var a=this.getValidator(b);if(e!=null){e=false;}if(this.hasValidator(d,"warnOnly")){e=true;}var c=this.hasValidator(d,"ignoreValidation")||(a?a.test(d):true);
if(a&&d.isVisible()){this.fireEvent("elementValidate",[c,d,b,e]);}if(e){return true;}return c;},hasValidator:function(b,a){return b.get("validators").contains(a);
},resetField:function(a){a=document.id(a);if(a){a.get("validators").each(function(b){if(b.test("^warn-")){b=b.replace(/^warn-/,"");}a.removeClass("validation-failed");
a.removeClass("warning");a.removeClass("validation-passed");},this);}return this;},stop:function(){this.paused=true;return this;},start:function(){this.paused=false;
return this;},ignoreField:function(a,b){a=document.id(a);if(a){this.enforceField(a);if(b){a.addClass("warnOnly");}else{a.addClass("ignoreValidation");}}return this;
},enforceField:function(a){a=document.id(a);if(a){a.removeClass("warnOnly").removeClass("ignoreValidation");}return this;}});Form.Validator.getMsg=function(a){return Locale.get("FormValidator."+a);
};Form.Validator.adders={validators:{},add:function(b,a){this.validators[b]=new InputValidator(b,a);if(!this.initialize){this.implement({validators:this.validators});
}},addAllThese:function(a){Array.from(a).each(function(b){this.add(b[0],b[1]);},this);},getValidator:function(a){return this.validators[a.split(":")[0]];
}};Object.append(Form.Validator,Form.Validator.adders);Form.Validator.implement(Form.Validator.adders);Form.Validator.add("IsEmpty",{errorMsg:false,test:function(a){if(a.type=="select-one"||a.type=="select"){return !(a.selectedIndex>=0&&a.options[a.selectedIndex].value!="");
}else{return((a.get("value")==null)||(a.get("value").length==0));}}});Form.Validator.addAllThese([["required",{errorMsg:function(){return Form.Validator.getMsg("required");
},test:function(a){return !Form.Validator.getValidator("IsEmpty").test(a);}}],["length",{errorMsg:function(a,b){if(typeOf(b.length)!="null"){return Form.Validator.getMsg("length").substitute({length:b.length,elLength:a.get("value").length});
}else{return"";}},test:function(a,b){if(typeOf(b.length)!="null"){return(a.get("value").length==b.length||a.get("value").length==0);}else{return true;}}}],["minLength",{errorMsg:function(a,b){if(typeOf(b.minLength)!="null"){return Form.Validator.getMsg("minLength").substitute({minLength:b.minLength,length:a.get("value").length});
}else{return"";}},test:function(a,b){if(typeOf(b.minLength)!="null"){return(a.get("value").length>=(b.minLength||0));}else{return true;}}}],["maxLength",{errorMsg:function(a,b){if(typeOf(b.maxLength)!="null"){return Form.Validator.getMsg("maxLength").substitute({maxLength:b.maxLength,length:a.get("value").length});
}else{return"";}},test:function(a,b){return a.get("value").length<=(b.maxLength||10000);}}],["validate-integer",{errorMsg:Form.Validator.getMsg.pass("integer"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^(-?[1-9]\d*|0)$/).test(a.get("value"));
}}],["validate-numeric",{errorMsg:Form.Validator.getMsg.pass("numeric"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/).test(a.get("value"));
}}],["validate-digits",{errorMsg:Form.Validator.getMsg.pass("digits"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^[\d() .:\-\+#]+$/.test(a.get("value")));
}}],["validate-alpha",{errorMsg:Form.Validator.getMsg.pass("alpha"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^[a-zA-Z]+$/).test(a.get("value"));
}}],["validate-alphanum",{errorMsg:Form.Validator.getMsg.pass("alphanum"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||!(/\W/).test(a.get("value"));
}}],["validate-date",{errorMsg:function(a,b){if(Date.parse){var c=b.dateFormat||"%x";return Form.Validator.getMsg("dateSuchAs").substitute({date:new Date().format(c)});
}else{return Form.Validator.getMsg("dateInFormatMDY");}},test:function(e,g){if(Form.Validator.getValidator("IsEmpty").test(e)){return true;}var a=Locale.getCurrent().sets.Date,b=new RegExp([a.days,a.days_abbr,a.months,a.months_abbr].flatten().join("|"),"i"),i=e.get("value"),f=i.match(/[a-z]+/gi);
if(f&&!f.every(b.exec,b)){return false;}var c=Date.parse(i),h=g.dateFormat||"%x",d=c.format(h);if(d!="invalid date"){e.set("value",d);}return c.isValid();
}}],["validate-email",{errorMsg:Form.Validator.getMsg.pass("email"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]\.?){0,63}[a-z0-9!#$%&'*+\/=?^_`{|}~-]@(?:(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\])$/i).test(a.get("value"));
}}],["validate-url",{errorMsg:Form.Validator.getMsg.pass("url"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i).test(a.get("value"));
}}],["validate-currency-dollar",{errorMsg:Form.Validator.getMsg.pass("currencyDollar"),test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/).test(a.get("value"));
}}],["validate-one-required",{errorMsg:Form.Validator.getMsg.pass("oneRequired"),test:function(a,b){var c=document.id(b["validate-one-required"])||a.getParent(b["validate-one-required"]);
return c.getElements("input").some(function(d){if(["checkbox","radio"].contains(d.get("type"))){return d.get("checked");}return d.get("value");});}}]]);
Element.Properties.validator={set:function(a){this.get("validator").setOptions(a);},get:function(){var a=this.retrieve("validator");if(!a){a=new Form.Validator(this);
this.store("validator",a);}return a;}};Element.implement({validate:function(a){if(a){this.set("validator",a);}return this.get("validator").validate();}});
var FormValidator=Form.Validator;Form.Validator.Inline=new Class({Extends:Form.Validator,options:{showError:function(a){if(a.reveal){a.reveal();}else{a.setStyle("display","block");
}},hideError:function(a){if(a.dissolve){a.dissolve();}else{a.setStyle("display","none");}},scrollToErrorsOnSubmit:true,scrollToErrorsOnBlur:false,scrollToErrorsOnChange:false,scrollFxOptions:{transition:"quad:out",offset:{y:-20}}},initialize:function(b,a){this.parent(b,a);
this.addEvent("onElementValidate",function(g,f,e,h){var d=this.getValidator(e);if(!g&&d.getError(f)){if(h){f.addClass("warning");}var c=this.makeAdvice(e,f,d.getError(f),h);
this.insertAdvice(c,f);this.showAdvice(e,f);}else{this.hideAdvice(e,f);}});},makeAdvice:function(d,f,c,g){var e=(g)?this.warningPrefix:this.errorPrefix;
e+=(this.options.useTitles)?f.title||c:c;var a=(g)?"warning-advice":"validation-advice";var b=this.getAdvice(d,f);if(b){b=b.set("html",e);}else{b=new Element("div",{html:e,styles:{display:"none"},id:"advice-"+d.split(":")[0]+"-"+this.getFieldId(f)}).addClass(a);
}f.store("$moo:advice-"+d,b);return b;},getFieldId:function(a){return a.id?a.id:a.id="input_"+a.name;},showAdvice:function(b,c){var a=this.getAdvice(b,c);
if(a&&!c.retrieve("$moo:"+this.getPropName(b))&&(a.getStyle("display")=="none"||a.getStyle("visiblity")=="hidden"||a.getStyle("opacity")==0)){c.store("$moo:"+this.getPropName(b),true);
this.options.showError(a);this.fireEvent("showAdvice",[c,a,b]);}},hideAdvice:function(b,c){var a=this.getAdvice(b,c);if(a&&c.retrieve("$moo:"+this.getPropName(b))){c.store("$moo:"+this.getPropName(b),false);
this.options.hideError(a);this.fireEvent("hideAdvice",[c,a,b]);}},getPropName:function(a){return"advice"+a;},resetField:function(a){a=document.id(a);if(!a){return this;
}this.parent(a);a.get("validators").each(function(b){this.hideAdvice(b,a);},this);return this;},getAllAdviceMessages:function(d,c){var b=[];if(d.hasClass("ignoreValidation")&&!c){return b;
}var a=d.get("validators").some(function(g){var e=g.test("^warn-")||d.hasClass("warnOnly");if(e){g=g.replace(/^warn-/,"");}var f=this.getValidator(g);if(!f){return;
}b.push({message:f.getError(d),warnOnly:e,passed:f.test(),validator:f});},this);return b;},getAdvice:function(a,b){return b.retrieve("$moo:advice-"+a);
},insertAdvice:function(a,c){var b=c.get("validatorProps");if(!b.msgPos||!document.id(b.msgPos)){if(c.type&&c.type.toLowerCase()=="radio"){c.getParent().adopt(a);
}else{a.inject(document.id(c),"after");}}else{document.id(b.msgPos).grab(a);}},validateField:function(g,f,b){var a=this.parent(g,f);if(((this.options.scrollToErrorsOnSubmit&&b==null)||b)&&!a){var c=document.id(this).getElement(".validation-failed");
var d=document.id(this).getParent();while(d!=document.body&&d.getScrollSize().y==d.getSize().y){d=d.getParent();}var e=d.retrieve("$moo:fvScroller");if(!e&&window.Fx&&Fx.Scroll){e=new Fx.Scroll(d,this.options.scrollFxOptions);
d.store("$moo:fvScroller",e);}if(c){if(e){e.toElement(c);}else{d.scrollTo(d.getScroll().x,c.getPosition(d).y-20);}}}return a;},watchFields:function(a){a.each(function(b){if(this.options.evaluateFieldsOnBlur){b.addEvent("blur",this.validationMonitor.pass([b,false,this.options.scrollToErrorsOnBlur],this));
}if(this.options.evaluateFieldsOnChange){b.addEvent("change",this.validationMonitor.pass([b,true,this.options.scrollToErrorsOnChange],this));}},this);}});
Form.Validator.addAllThese([["validate-enforce-oncheck",{test:function(a,b){var c=a.getParent("form").retrieve("validator");if(!c){return true;}(b.toEnforce||document.id(b.enforceChildrenOf).getElements("input, select, textarea")).map(function(d){if(a.checked){c.enforceField(d);
}else{c.ignoreField(d);c.resetField(d);}});return true;}}],["validate-ignore-oncheck",{test:function(a,b){var c=a.getParent("form").retrieve("validator");
if(!c){return true;}(b.toIgnore||document.id(b.ignoreChildrenOf).getElements("input, select, textarea")).each(function(d){if(a.checked){c.ignoreField(d);
c.resetField(d);}else{c.enforceField(d);}});return true;}}],["validate-nospace",{errorMsg:function(){return Form.Validator.getMsg("noSpace");},test:function(a,b){return !a.get("value").test(/\s/);
}}],["validate-toggle-oncheck",{test:function(b,c){var d=b.getParent("form").retrieve("validator");if(!d){return true;}var a=c.toToggle||document.id(c.toToggleChildrenOf).getElements("input, select, textarea");
if(!b.checked){a.each(function(e){d.ignoreField(e);d.resetField(e);});}else{a.each(function(e){d.enforceField(e);});}return true;}}],["validate-reqchk-bynode",{errorMsg:function(){return Form.Validator.getMsg("reqChkByNode");
},test:function(a,b){return(document.id(b.nodeId).getElements(b.selector||"input[type=checkbox], input[type=radio]")).some(function(c){return c.checked;
});}}],["validate-required-check",{errorMsg:function(a,b){return b.useTitle?a.get("title"):Form.Validator.getMsg("requiredChk");},test:function(a,b){return !!a.checked;
}}],["validate-reqchk-byname",{errorMsg:function(a,b){return Form.Validator.getMsg("reqChkByName").substitute({label:b.label||a.get("type")});},test:function(b,d){var c=d.groupName||b.get("name");
var a=$$(document.getElementsByName(c)).some(function(g,f){return g.checked;});var e=b.getParent("form").retrieve("validator");if(a&&e){e.resetField(b);
}return a;}}],["validate-match",{errorMsg:function(a,b){return Form.Validator.getMsg("match").substitute({matchName:b.matchName||document.id(b.matchInput).get("name")});
},test:function(b,c){var d=b.get("value");var a=document.id(c.matchInput)&&document.id(c.matchInput).get("value");return d&&a?d==a:true;}}],["validate-after-date",{errorMsg:function(a,b){return Form.Validator.getMsg("afterDate").substitute({label:b.afterLabel||(b.afterElement?Form.Validator.getMsg("startDate"):Form.Validator.getMsg("currentDate"))});
},test:function(b,c){var d=document.id(c.afterElement)?Date.parse(document.id(c.afterElement).get("value")):new Date();var a=Date.parse(b.get("value"));
return a&&d?a>=d:true;}}],["validate-before-date",{errorMsg:function(a,b){return Form.Validator.getMsg("beforeDate").substitute({label:b.beforeLabel||(b.beforeElement?Form.Validator.getMsg("endDate"):Form.Validator.getMsg("currentDate"))});
},test:function(b,c){var d=Date.parse(b.get("value"));var a=document.id(c.beforeElement)?Date.parse(document.id(c.beforeElement).get("value")):new Date();
return a&&d?a>=d:true;}}],["validate-custom-required",{errorMsg:function(){return Form.Validator.getMsg("required");},test:function(a,b){return a.get("value")!=b.emptyValue;
}}],["validate-same-month",{errorMsg:function(a,b){var c=document.id(b.sameMonthAs)&&document.id(b.sameMonthAs).get("value");var d=a.get("value");if(d!=""){return Form.Validator.getMsg(c?"sameMonth":"startMonth");
}},test:function(a,b){var d=Date.parse(a.get("value"));var c=Date.parse(document.id(b.sameMonthAs)&&document.id(b.sameMonthAs).get("value"));return d&&c?d.format("%B")==c.format("%B"):true;
}}],["validate-cc-num",{errorMsg:function(a){var b=a.get("value").replace(/[^0-9]/g,"");return Form.Validator.getMsg("creditcard").substitute({length:b.length});
},test:function(c){if(Form.Validator.getValidator("IsEmpty").test(c)){return true;}var g=c.get("value");g=g.replace(/[^0-9]/g,"");var a=false;if(g.test(/^4[0-9]{12}([0-9]{3})?$/)){a="Visa";
}else{if(g.test(/^5[1-5]([0-9]{14})$/)){a="Master Card";}else{if(g.test(/^3[47][0-9]{13}$/)){a="American Express";}else{if(g.test(/^6011[0-9]{12}$/)){a="Discover";
}}}}if(a){var d=0;var e=0;for(var b=g.length-1;b>=0;--b){e=g.charAt(b).toInt();if(e==0){continue;}if((g.length-b)%2==0){e+=e;}if(e>9){e=e.toString().charAt(0).toInt()+e.toString().charAt(1).toInt();
}d+=e;}if((d%10)==0){return true;}}var f="";while(g!=""){f+=" "+g.substr(0,4);g=g.substr(4);}c.getParent("form").retrieve("validator").ignoreField(c);c.set("value",f.clean());
c.getParent("form").retrieve("validator").enforceField(c);return false;}}]]);var OverText=new Class({Implements:[Options,Events,Class.Occlude],Binds:["reposition","assert","focus","hide"],options:{element:"label",labelClass:"overTxtLabel",positionOptions:{position:"upperLeft",edge:"upperLeft",offset:{x:4,y:2}},poll:false,pollInterval:250,wrap:false},property:"OverText",initialize:function(b,a){b=this.element=document.id(b);
if(this.occlude()){return this.occluded;}this.setOptions(a);this.attach(b);OverText.instances.push(this);if(this.options.poll){this.poll();}},toElement:function(){return this.element;
},attach:function(){var b=this.element,a=this.options,c=a.textOverride||b.get("alt")||b.get("title");if(!c){return this;}var d=this.text=new Element(a.element,{"class":a.labelClass,styles:{lineHeight:"normal",position:"absolute",cursor:"text"},html:c,events:{click:this.hide.pass(a.element=="label",this)}}).inject(b,"after");
if(a.element=="label"){if(!b.get("id")){b.set("id","input_"+String.uniqueID());}d.set("for",b.get("id"));}if(a.wrap){this.textHolder=new Element("div.overTxtWrapper",{styles:{lineHeight:"normal",position:"relative"}}).grab(d).inject(b,"before");
}return this.enable();},destroy:function(){this.element.eliminate(this.property);this.disable();if(this.text){this.text.destroy();}if(this.textHolder){this.textHolder.destroy();
}return this;},disable:function(){this.element.removeEvents({focus:this.focus,blur:this.assert,change:this.assert});window.removeEvent("resize",this.reposition);
this.hide(true,true);return this;},enable:function(){this.element.addEvents({focus:this.focus,blur:this.assert,change:this.assert});window.addEvent("resize",this.reposition);
this.reposition();return this;},wrap:function(){if(this.options.element=="label"){if(!this.element.get("id")){this.element.set("id","input_"+String.uniqueID());
}this.text.set("for",this.element.get("id"));}},startPolling:function(){this.pollingPaused=false;return this.poll();},poll:function(a){if(this.poller&&!a){return this;
}if(a){clearInterval(this.poller);}else{this.poller=(function(){if(!this.pollingPaused){this.assert(true);}}).periodical(this.options.pollInterval,this);
}return this;},stopPolling:function(){this.pollingPaused=true;return this.poll(true);},focus:function(){if(this.text&&(!this.text.isDisplayed()||this.element.get("disabled"))){return this;
}return this.hide();},hide:function(c,a){if(this.text&&(this.text.isDisplayed()&&(!this.element.get("disabled")||a))){this.text.hide();this.fireEvent("textHide",[this.text,this.element]);
this.pollingPaused=true;if(!c){try{this.element.fireEvent("focus");this.element.focus();}catch(b){}}}return this;},show:function(){if(this.text&&!this.text.isDisplayed()){this.text.show();
this.reposition();this.fireEvent("textShow",[this.text,this.element]);this.pollingPaused=false;}return this;},test:function(){return !this.element.get("value");
},assert:function(a){return this[this.test()?"show":"hide"](a);},reposition:function(){this.assert(true);if(!this.element.isVisible()){return this.stopPolling().hide();
}if(this.text&&this.test()){this.text.position(Object.merge(this.options.positionOptions,{relativeTo:this.element}));}return this;}});OverText.instances=[];
Object.append(OverText,{each:function(a){return OverText.instances.each(function(c,b){if(c.element&&c.text){a.call(OverText,c,b);}});},update:function(){return OverText.each(function(a){return a.reposition();
});},hideAll:function(){return OverText.each(function(a){return a.hide(true,true);});},showAll:function(){return OverText.each(function(a){return a.show();
});}});Fx.Elements=new Class({Extends:Fx.CSS,initialize:function(b,a){this.elements=this.subject=$$(b);this.parent(a);},compute:function(g,h,j){var c={};
for(var d in g){var a=g[d],e=h[d],f=c[d]={};for(var b in a){f[b]=this.parent(a[b],e[b],j);}}return c;},set:function(b){for(var c in b){if(!this.elements[c]){continue;
}var a=b[c];for(var d in a){this.render(this.elements[c],d,a[d],this.options.unit);}}return this;},start:function(c){if(!this.check(c)){return this;}var h={},j={};
for(var d in c){if(!this.elements[d]){continue;}var f=c[d],a=h[d]={},g=j[d]={};for(var b in f){var e=this.prepare(this.elements[d],b,f[b]);a[b]=e.from;
g[b]=e.to;}}return this.parent(h,j);}});Fx.Accordion=new Class({Extends:Fx.Elements,options:{fixedHeight:false,fixedWidth:false,display:0,show:false,height:true,width:false,opacity:true,alwaysHide:false,trigger:"click",initialDisplayFx:true,resetHeight:true},initialize:function(){var g=function(h){return h!=null;
};var f=Array.link(arguments,{container:Type.isElement,options:Type.isObject,togglers:g,elements:g});this.parent(f.elements,f.options);var b=this.options,e=this.togglers=$$(f.togglers);
this.previous=-1;this.internalChain=new Chain();if(b.alwaysHide){this.options.link="chain";}if(b.show||this.options.show===0){b.display=false;this.previous=b.show;
}if(b.start){b.display=false;b.show=false;}var d=this.effects={};if(b.opacity){d.opacity="fullOpacity";}if(b.width){d.width=b.fixedWidth?"fullWidth":"offsetWidth";
}if(b.height){d.height=b.fixedHeight?"fullHeight":"scrollHeight";}for(var c=0,a=e.length;c<a;c++){this.addSection(e[c],this.elements[c]);}this.elements.each(function(j,h){if(b.show===h){this.fireEvent("active",[e[h],j]);
}else{for(var k in d){j.setStyle(k,0);}}},this);if(b.display||b.display===0||b.initialDisplayFx===false){this.display(b.display,b.initialDisplayFx);}if(b.fixedHeight!==false){b.resetHeight=false;
}this.addEvent("complete",this.internalChain.callChain.bind(this.internalChain));},addSection:function(g,d){g=document.id(g);d=document.id(d);this.togglers.include(g);
this.elements.include(d);var f=this.togglers,c=this.options,h=f.contains(g),a=f.indexOf(g),b=this.display.pass(a,this);g.store("accordion:display",b).addEvent(c.trigger,b);
if(c.height){d.setStyles({"padding-top":0,"border-top":"none","padding-bottom":0,"border-bottom":"none"});}if(c.width){d.setStyles({"padding-left":0,"border-left":"none","padding-right":0,"border-right":"none"});
}d.fullOpacity=1;if(c.fixedWidth){d.fullWidth=c.fixedWidth;}if(c.fixedHeight){d.fullHeight=c.fixedHeight;}d.setStyle("overflow","hidden");if(!h){for(var e in this.effects){d.setStyle(e,0);
}}return this;},removeSection:function(f,b){var e=this.togglers,a=e.indexOf(f),c=this.elements[a];var d=function(){e.erase(f);this.elements.erase(c);this.detach(f);
}.bind(this);if(this.now==a||b!=null){this.display(b!=null?b:(a-1>=0?a-1:0)).chain(d);}else{d();}return this;},detach:function(b){var a=function(c){c.removeEvent(this.options.trigger,c.retrieve("accordion:display"));
}.bind(this);if(!b){this.togglers.each(a);}else{a(b);}return this;},display:function(b,c){if(!this.check(b,c)){return this;}var h={},g=this.elements,a=this.options,f=this.effects;
if(c==null){c=true;}if(typeOf(b)=="element"){b=g.indexOf(b);}if(b==this.previous&&!a.alwaysHide){return this;}if(a.resetHeight){var e=g[this.previous];
if(e&&!this.selfHidden){for(var d in f){e.setStyle(d,e[f[d]]);}}}if((this.timer&&a.link=="chain")||(b===this.previous&&!a.alwaysHide)){return this;}this.previous=b;
this.selfHidden=false;g.each(function(l,k){h[k]={};var j;if(k!=b){j=true;}else{if(a.alwaysHide&&((l.offsetHeight>0&&a.height)||l.offsetWidth>0&&a.width)){j=true;
this.selfHidden=true;}}this.fireEvent(j?"background":"active",[this.togglers[k],l]);for(var m in f){h[k][m]=j?0:l[f[m]];}if(!c&&!j&&a.resetHeight){h[k].height="auto";
}},this);this.internalChain.clearChain();this.internalChain.chain(function(){if(a.resetHeight&&!this.selfHidden){var i=g[b];if(i){i.setStyle("height","auto");
}}}.bind(this));return c?this.start(h):this.set(h).internalChain.callChain();}});var Accordion=new Class({Extends:Fx.Accordion,initialize:function(){this.parent.apply(this,arguments);
var a=Array.link(arguments,{container:Type.isElement});this.container=a.container;},addSection:function(c,b,e){c=document.id(c);b=document.id(b);var d=this.togglers.contains(c);
var a=this.togglers.length;if(a&&(!d||e)){e=e!=null?e:a-1;c.inject(this.togglers[e],"before");b.inject(c,"after");}else{if(this.container&&!d){c.inject(this.container);
b.inject(this.container);}}return this.parent.apply(this,arguments);}});Fx.Move=new Class({Extends:Fx.Morph,options:{relativeTo:document.body,position:"center",edge:false,offset:{x:0,y:0}},start:function(a){var b=this.element,c=b.getStyles("top","left");
if(c.top=="auto"||c.left=="auto"){b.setPosition(b.getPosition(b.getOffsetParent()));}return this.parent(b.position(Object.merge({},this.options,a,{returnPos:true})));
}});Element.Properties.move={set:function(a){this.get("move").cancel().setOptions(a);return this;},get:function(){var a=this.retrieve("move");if(!a){a=new Fx.Move(this,{link:"cancel"});
this.store("move",a);}return a;}};Element.implement({move:function(a){this.get("move").start(a);return this;}});(function(){Fx.Scroll=new Class({Extends:Fx,options:{offset:{x:0,y:0},wheelStops:true},initialize:function(c,b){this.element=this.subject=document.id(c);
this.parent(b);if(typeOf(this.element)!="element"){this.element=document.id(this.element.getDocument().body);}if(this.options.wheelStops){var d=this.element,e=this.cancel.pass(false,this);
this.addEvent("start",function(){d.addEvent("mousewheel",e);},true);this.addEvent("complete",function(){d.removeEvent("mousewheel",e);},true);}},set:function(){var b=Array.flatten(arguments);
if(Browser.firefox){b=[Math.round(b[0]),Math.round(b[1])];}this.element.scrollTo(b[0],b[1]);return this;},compute:function(d,c,b){return[0,1].map(function(e){return Fx.compute(d[e],c[e],b);
});},start:function(c,d){if(!this.check(c,d)){return this;}var b=this.element.getScroll();return this.parent([b.x,b.y],[c,d]);},calculateScroll:function(g,f){var d=this.element,b=d.getScrollSize(),h=d.getScroll(),j=d.getSize(),c=this.options.offset,i={x:g,y:f};
for(var e in i){if(!i[e]&&i[e]!==0){i[e]=h[e];}if(typeOf(i[e])!="number"){i[e]=b[e]-j[e];}i[e]+=c[e];}return[i.x,i.y];},toTop:function(){return this.start.apply(this,this.calculateScroll(false,0));
},toLeft:function(){return this.start.apply(this,this.calculateScroll(0,false));},toRight:function(){return this.start.apply(this,this.calculateScroll("right",false));
},toBottom:function(){return this.start.apply(this,this.calculateScroll(false,"bottom"));},toElement:function(d,e){e=e?Array.from(e):["x","y"];var c=a(this.element)?{x:0,y:0}:this.element.getScroll();
var b=Object.map(document.id(d).getPosition(this.element),function(g,f){return e.contains(f)?g+c[f]:false;});return this.start.apply(this,this.calculateScroll(b.x,b.y));
},toElementEdge:function(d,g,e){g=g?Array.from(g):["x","y"];d=document.id(d);var i={},f=d.getPosition(this.element),j=d.getSize(),h=this.element.getScroll(),b=this.element.getSize(),c={x:f.x+j.x,y:f.y+j.y};
["x","y"].each(function(k){if(g.contains(k)){if(c[k]>h[k]+b[k]){i[k]=c[k]-b[k];}if(f[k]<h[k]){i[k]=f[k];}}if(i[k]==null){i[k]=h[k];}if(e&&e[k]){i[k]=i[k]+e[k];
}},this);if(i.x!=h.x||i.y!=h.y){this.start(i.x,i.y);}return this;},toElementCenter:function(e,f,h){f=f?Array.from(f):["x","y"];e=document.id(e);var i={},c=e.getPosition(this.element),d=e.getSize(),b=this.element.getScroll(),g=this.element.getSize();
["x","y"].each(function(j){if(f.contains(j)){i[j]=c[j]-(g[j]-d[j])/2;}if(i[j]==null){i[j]=b[j];}if(h&&h[j]){i[j]=i[j]+h[j];}},this);if(i.x!=b.x||i.y!=b.y){this.start(i.x,i.y);
}return this;}});Fx.Scroll.implement({scrollToCenter:function(){return this.toElementCenter.apply(this,arguments);},scrollIntoView:function(){return this.toElementEdge.apply(this,arguments);
}});function a(b){return(/^(?:body|html)$/i).test(b.tagName);}})();Fx.Slide=new Class({Extends:Fx,options:{mode:"vertical",wrapper:false,hideOverflow:true,resetHeight:false},initialize:function(b,a){b=this.element=this.subject=document.id(b);
this.parent(a);a=this.options;var d=b.retrieve("wrapper"),c=b.getStyles("margin","position","overflow");if(a.hideOverflow){c=Object.append(c,{overflow:"hidden"});
}if(a.wrapper){d=document.id(a.wrapper).setStyles(c);}if(!d){d=new Element("div",{styles:c}).wraps(b);}b.store("wrapper",d).setStyle("margin",0);if(b.getStyle("overflow")=="visible"){b.setStyle("overflow","hidden");
}this.now=[];this.open=true;this.wrapper=d;this.addEvent("complete",function(){this.open=(d["offset"+this.layout.capitalize()]!=0);if(this.open&&this.options.resetHeight){d.setStyle("height","");
}},true);},vertical:function(){this.margin="margin-top";this.layout="height";this.offset=this.element.offsetHeight;},horizontal:function(){this.margin="margin-left";
this.layout="width";this.offset=this.element.offsetWidth;},set:function(a){this.element.setStyle(this.margin,a[0]);this.wrapper.setStyle(this.layout,a[1]);
return this;},compute:function(c,b,a){return[0,1].map(function(d){return Fx.compute(c[d],b[d],a);});},start:function(b,e){if(!this.check(b,e)){return this;
}this[e||this.options.mode]();var d=this.element.getStyle(this.margin).toInt(),c=this.wrapper.getStyle(this.layout).toInt(),a=[[d,c],[0,this.offset]],g=[[d,c],[-this.offset,0]],f;
switch(b){case"in":f=a;break;case"out":f=g;break;case"toggle":f=(c==0)?a:g;}return this.parent(f[0],f[1]);},slideIn:function(a){return this.start("in",a);
},slideOut:function(a){return this.start("out",a);},hide:function(a){this[a||this.options.mode]();this.open=false;return this.set([-this.offset,0]);},show:function(a){this[a||this.options.mode]();
this.open=true;return this.set([0,this.offset]);},toggle:function(a){return this.start("toggle",a);}});Element.Properties.slide={set:function(a){this.get("slide").cancel().setOptions(a);
return this;},get:function(){var a=this.retrieve("slide");if(!a){a=new Fx.Slide(this,{link:"cancel"});this.store("slide",a);}return a;}};Element.implement({slide:function(d,e){d=d||"toggle";
var b=this.get("slide"),a;switch(d){case"hide":b.hide(e);break;case"show":b.show(e);break;case"toggle":var c=this.retrieve("slide:flag",b.open);b[c?"slideOut":"slideIn"](e);
this.store("slide:flag",!c);a=true;break;default:b.start(d,e);}if(!a){this.eliminate("slide:flag");}return this;}});var SmoothScroll=Fx.SmoothScroll=new Class({Extends:Fx.Scroll,options:{axes:["x","y"]},initialize:function(c,d){d=d||document;
this.doc=d.getDocument();this.parent(this.doc,c);var e=d.getWindow(),a=e.location.href.match(/^[^#]*/)[0]+"#",b=$$(this.options.links||this.doc.links);
b.each(function(g){if(g.href.indexOf(a)!=0){return;}var f=g.href.substr(a.length);if(f){this.useLink(g,f);}},this);this.addEvent("complete",function(){e.location.hash=this.anchor;
this.element.scrollTo(this.to[0],this.to[1]);},true);},useLink:function(b,a){b.addEvent("click",function(d){var c=document.id(a)||this.doc.getElement("a[name="+a+"]");
if(!c){return;}d.preventDefault();this.toElement(c,this.options.axes).chain(function(){this.fireEvent("scrolledTo",[b,c]);}.bind(this));this.anchor=a;}.bind(this));
return this;}});Fx.Sort=new Class({Extends:Fx.Elements,options:{mode:"vertical"},initialize:function(b,a){this.parent(b,a);this.elements.each(function(c){if(c.getStyle("position")=="static"){c.setStyle("position","relative");
}});this.setDefaultOrder();},setDefaultOrder:function(){this.currentOrder=this.elements.map(function(b,a){return a;});},sort:function(){if(!this.check(arguments)){return this;
}var e=Array.flatten(arguments);var i=0,a=0,c={},h={},d=this.options.mode=="vertical";var f=this.elements.map(function(m,k){var l=m.getComputedSize({styles:["border","padding","margin"]});
var n;if(d){n={top:i,margin:l["margin-top"],height:l.totalHeight};i+=n.height-l["margin-top"];}else{n={left:a,margin:l["margin-left"],width:l.totalWidth};
a+=n.width;}var j=d?"top":"left";h[k]={};var o=m.getStyle(j).toInt();h[k][j]=o||0;return n;},this);this.set(h);e=e.map(function(j){return j.toInt();});
if(e.length!=this.elements.length){this.currentOrder.each(function(j){if(!e.contains(j)){e.push(j);}});if(e.length>this.elements.length){e.splice(this.elements.length-1,e.length-this.elements.length);
}}var b=0;i=a=0;e.each(function(k){var j={};if(d){j.top=i-f[k].top-b;i+=f[k].height;}else{j.left=a-f[k].left;a+=f[k].width;}b=b+f[k].margin;c[k]=j;},this);
var g={};Array.clone(e).sort().each(function(j){g[j]=c[j];});this.start(g);this.currentOrder=e;return this;},rearrangeDOM:function(a){a=a||this.currentOrder;
var b=this.elements[0].getParent();var c=[];this.elements.setStyle("opacity",0);a.each(function(d){c.push(this.elements[d].inject(b).setStyles({top:0,left:0}));
},this);this.elements.setStyle("opacity",1);this.elements=$$(c);this.setDefaultOrder();return this;},getDefaultOrder:function(){return this.elements.map(function(b,a){return a;
});},getCurrentOrder:function(){return this.currentOrder;},forward:function(){return this.sort(this.getDefaultOrder());},backward:function(){return this.sort(this.getDefaultOrder().reverse());
},reverse:function(){return this.sort(this.currentOrder.reverse());},sortByElements:function(a){return this.sort(a.map(function(b){return this.elements.indexOf(b);
},this));},swap:function(c,b){if(typeOf(c)=="element"){c=this.elements.indexOf(c);}if(typeOf(b)=="element"){b=this.elements.indexOf(b);}var a=Array.clone(this.currentOrder);
a[this.currentOrder.indexOf(c)]=b;a[this.currentOrder.indexOf(b)]=c;return this.sort(a);}});var Drag=new Class({Implements:[Events,Options],options:{snap:6,unit:"px",grid:false,style:true,limit:false,handle:false,invert:false,preventDefault:false,stopPropagation:false,modifiers:{x:"left",y:"top"}},initialize:function(){var b=Array.link(arguments,{options:Type.isObject,element:function(c){return c!=null;
}});this.element=document.id(b.element);this.document=this.element.getDocument();this.setOptions(b.options||{});var a=typeOf(this.options.handle);this.handles=((a=="array"||a=="collection")?$$(this.options.handle):document.id(this.options.handle))||this.element;
this.mouse={now:{},pos:{}};this.value={start:{},now:{}};this.selection=(Browser.ie)?"selectstart":"mousedown";if(Browser.ie&&!Drag.ondragstartFixed){document.ondragstart=Function.from(false);
Drag.ondragstartFixed=true;}this.bound={start:this.start.bind(this),check:this.check.bind(this),drag:this.drag.bind(this),stop:this.stop.bind(this),cancel:this.cancel.bind(this),eventStop:Function.from(false)};
this.attach();},attach:function(){this.handles.addEvent("mousedown",this.bound.start);return this;},detach:function(){this.handles.removeEvent("mousedown",this.bound.start);
return this;},start:function(a){var j=this.options;if(a.rightClick){return;}if(j.preventDefault){a.preventDefault();}if(j.stopPropagation){a.stopPropagation();
}this.mouse.start=a.page;this.fireEvent("beforeStart",this.element);var c=j.limit;this.limit={x:[],y:[]};var e,g;for(e in j.modifiers){if(!j.modifiers[e]){continue;
}var b=this.element.getStyle(j.modifiers[e]);if(b&&!b.match(/px$/)){if(!g){g=this.element.getCoordinates(this.element.getOffsetParent());}b=g[j.modifiers[e]];
}if(j.style){this.value.now[e]=(b||0).toInt();}else{this.value.now[e]=this.element[j.modifiers[e]];}if(j.invert){this.value.now[e]*=-1;}this.mouse.pos[e]=a.page[e]-this.value.now[e];
if(c&&c[e]){var d=2;while(d--){var f=c[e][d];if(f||f===0){this.limit[e][d]=(typeof f=="function")?f():f;}}}}if(typeOf(this.options.grid)=="number"){this.options.grid={x:this.options.grid,y:this.options.grid};
}var h={mousemove:this.bound.check,mouseup:this.bound.cancel};h[this.selection]=this.bound.eventStop;this.document.addEvents(h);},check:function(a){if(this.options.preventDefault){a.preventDefault();
}var b=Math.round(Math.sqrt(Math.pow(a.page.x-this.mouse.start.x,2)+Math.pow(a.page.y-this.mouse.start.y,2)));if(b>this.options.snap){this.cancel();this.document.addEvents({mousemove:this.bound.drag,mouseup:this.bound.stop});
this.fireEvent("start",[this.element,a]).fireEvent("snap",this.element);}},drag:function(b){var a=this.options;if(a.preventDefault){b.preventDefault();
}this.mouse.now=b.page;for(var c in a.modifiers){if(!a.modifiers[c]){continue;}this.value.now[c]=this.mouse.now[c]-this.mouse.pos[c];if(a.invert){this.value.now[c]*=-1;
}if(a.limit&&this.limit[c]){if((this.limit[c][1]||this.limit[c][1]===0)&&(this.value.now[c]>this.limit[c][1])){this.value.now[c]=this.limit[c][1];}else{if((this.limit[c][0]||this.limit[c][0]===0)&&(this.value.now[c]<this.limit[c][0])){this.value.now[c]=this.limit[c][0];
}}}if(a.grid[c]){this.value.now[c]-=((this.value.now[c]-(this.limit[c][0]||0))%a.grid[c]);}if(a.style){this.element.setStyle(a.modifiers[c],this.value.now[c]+a.unit);
}else{this.element[a.modifiers[c]]=this.value.now[c];}}this.fireEvent("drag",[this.element,b]);},cancel:function(a){this.document.removeEvents({mousemove:this.bound.check,mouseup:this.bound.cancel});
if(a){this.document.removeEvent(this.selection,this.bound.eventStop);this.fireEvent("cancel",this.element);}},stop:function(b){var a={mousemove:this.bound.drag,mouseup:this.bound.stop};
a[this.selection]=this.bound.eventStop;this.document.removeEvents(a);if(b){this.fireEvent("complete",[this.element,b]);}}});Element.implement({makeResizable:function(a){var b=new Drag(this,Object.merge({modifiers:{x:"width",y:"height"}},a));
this.store("resizer",b);return b.addEvent("drag",function(){this.fireEvent("resize",b);}.bind(this));}});Drag.Move=new Class({Extends:Drag,options:{droppables:[],container:false,precalculate:false,includeMargins:true,checkDroppables:true},initialize:function(b,a){this.parent(b,a);
b=this.element;this.droppables=$$(this.options.droppables);this.container=document.id(this.options.container);if(this.container&&typeOf(this.container)!="element"){this.container=document.id(this.container.getDocument().body);
}if(this.options.style){if(this.options.modifiers.x=="left"&&this.options.modifiers.y=="top"){var c=b.getOffsetParent(),d=b.getStyles("left","top");if(c&&(d.left=="auto"||d.top=="auto")){b.setPosition(b.getPosition(c));
}}if(b.getStyle("position")=="static"){b.setStyle("position","absolute");}}this.addEvent("start",this.checkDroppables,true);this.overed=null;},start:function(a){if(this.container){this.options.limit=this.calculateLimit();
}if(this.options.precalculate){this.positions=this.droppables.map(function(b){return b.getCoordinates();});}this.parent(a);},calculateLimit:function(){var j=this.element,e=this.container,d=document.id(j.getOffsetParent())||document.body,h=e.getCoordinates(d),c={},b={},k={},g={},m={};
["top","right","bottom","left"].each(function(q){c[q]=j.getStyle("margin-"+q).toInt();b[q]=j.getStyle("border-"+q).toInt();k[q]=e.getStyle("margin-"+q).toInt();
g[q]=e.getStyle("border-"+q).toInt();m[q]=d.getStyle("padding-"+q).toInt();},this);var f=j.offsetWidth+c.left+c.right,p=j.offsetHeight+c.top+c.bottom,i=0,l=0,o=h.right-g.right-f,a=h.bottom-g.bottom-p;
if(this.options.includeMargins){i+=c.left;l+=c.top;}else{o+=c.right;a+=c.bottom;}if(j.getStyle("position")=="relative"){var n=j.getCoordinates(d);n.left-=j.getStyle("left").toInt();
n.top-=j.getStyle("top").toInt();i-=n.left;l-=n.top;if(e.getStyle("position")!="relative"){i+=g.left;l+=g.top;}o+=c.left-n.left;a+=c.top-n.top;if(e!=d){i+=k.left+m.left;
l+=((Browser.ie6||Browser.ie7)?0:k.top)+m.top;}}else{i-=c.left;l-=c.top;if(e!=d){i+=h.left+g.left;l+=h.top+g.top;}}return{x:[i,o],y:[l,a]};},getDroppableCoordinates:function(c){var b=c.getCoordinates();
if(c.getStyle("position")=="fixed"){var a=window.getScroll();b.left+=a.x;b.right+=a.x;b.top+=a.y;b.bottom+=a.y;}return b;},checkDroppables:function(){var a=this.droppables.filter(function(d,c){d=this.positions?this.positions[c]:this.getDroppableCoordinates(d);
var b=this.mouse.now;return(b.x>d.left&&b.x<d.right&&b.y<d.bottom&&b.y>d.top);},this).getLast();if(this.overed!=a){if(this.overed){this.fireEvent("leave",[this.element,this.overed]);
}if(a){this.fireEvent("enter",[this.element,a]);}this.overed=a;}},drag:function(a){this.parent(a);if(this.options.checkDroppables&&this.droppables.length){this.checkDroppables();
}},stop:function(a){this.checkDroppables();this.fireEvent("drop",[this.element,this.overed,a]);this.overed=null;return this.parent(a);}});Element.implement({makeDraggable:function(a){var b=new Drag.Move(this,a);
this.store("dragger",b);return b;}});var Slider=new Class({Implements:[Events,Options],Binds:["clickedElement","draggedKnob","scrolledElement"],options:{onTick:function(a){this.setKnobPosition(a);
},initialStep:0,snap:false,offset:0,range:false,wheel:false,steps:100,mode:"horizontal"},initialize:function(f,a,e){this.setOptions(e);e=this.options;this.element=document.id(f);
a=this.knob=document.id(a);this.previousChange=this.previousEnd=this.step=-1;var b={},d={x:false,y:false};switch(e.mode){case"vertical":this.axis="y";this.property="top";
this.offset="offsetHeight";break;case"horizontal":this.axis="x";this.property="left";this.offset="offsetWidth";}this.setSliderDimensions();this.setRange(e.range);
if(a.getStyle("position")=="static"){a.setStyle("position","relative");}a.setStyle(this.property,-e.offset);d[this.axis]=this.property;b[this.axis]=[-e.offset,this.full-e.offset];
var c={snap:0,limit:b,modifiers:d,onDrag:this.draggedKnob,onStart:this.draggedKnob,onBeforeStart:(function(){this.isDragging=true;}).bind(this),onCancel:function(){this.isDragging=false;
}.bind(this),onComplete:function(){this.isDragging=false;this.draggedKnob();this.end();}.bind(this)};if(e.snap){this.setSnap(c);}this.drag=new Drag(a,c);
this.attach();if(e.initialStep!=null){this.set(e.initialStep);}},attach:function(){this.element.addEvent("mousedown",this.clickedElement);if(this.options.wheel){this.element.addEvent("mousewheel",this.scrolledElement);
}this.drag.attach();return this;},detach:function(){this.element.removeEvent("mousedown",this.clickedElement).removeEvent("mousewheel",this.scrolledElement);
this.drag.detach();return this;},autosize:function(){this.setSliderDimensions().setKnobPosition(this.toPosition(this.step));this.drag.options.limit[this.axis]=[-this.options.offset,this.full-this.options.offset];
if(this.options.snap){this.setSnap();}return this;},setSnap:function(a){if(!a){a=this.drag.options;}a.grid=Math.ceil(this.stepWidth);a.limit[this.axis][1]=this.full;
return this;},setKnobPosition:function(a){if(this.options.snap){a=this.toPosition(this.step);}this.knob.setStyle(this.property,a);return this;},setSliderDimensions:function(){this.full=this.element.measure(function(){this.half=this.knob[this.offset]/2;
return this.element[this.offset]-this.knob[this.offset]+(this.options.offset*2);}.bind(this));return this;},set:function(a){if(!((this.range>0)^(a<this.min))){a=this.min;
}if(!((this.range>0)^(a>this.max))){a=this.max;}this.step=Math.round(a);return this.checkStep().fireEvent("tick",this.toPosition(this.step)).end();},setRange:function(a,b){this.min=Array.pick([a[0],0]);
this.max=Array.pick([a[1],this.options.steps]);this.range=this.max-this.min;this.steps=this.options.steps||this.full;this.stepSize=Math.abs(this.range)/this.steps;
this.stepWidth=this.stepSize*this.full/Math.abs(this.range);if(a){this.set(Array.pick([b,this.step]).floor(this.min).max(this.max));}return this;},clickedElement:function(c){if(this.isDragging||c.target==this.knob){return;
}var b=this.range<0?-1:1,a=c.page[this.axis]-this.element.getPosition()[this.axis]-this.half;a=a.limit(-this.options.offset,this.full-this.options.offset);
this.step=Math.round(this.min+b*this.toStep(a));this.checkStep().fireEvent("tick",a).end();},scrolledElement:function(a){var b=(this.options.mode=="horizontal")?(a.wheel<0):(a.wheel>0);
this.set(this.step+(b?-1:1)*this.stepSize);a.stop();},draggedKnob:function(){var b=this.range<0?-1:1,a=this.drag.value.now[this.axis];a=a.limit(-this.options.offset,this.full-this.options.offset);
this.step=Math.round(this.min+b*this.toStep(a));this.checkStep();},checkStep:function(){var a=this.step;if(this.previousChange!=a){this.previousChange=a;
this.fireEvent("change",a);}return this;},end:function(){var a=this.step;if(this.previousEnd!==a){this.previousEnd=a;this.fireEvent("complete",a+"");}return this;
},toStep:function(a){var b=(a+this.options.offset)*this.stepSize/this.full*this.steps;return this.options.steps?Math.round(b-=b%this.stepSize):b;},toPosition:function(a){return(this.full*Math.abs(this.min-a))/(this.steps*this.stepSize)-this.options.offset;
}});var Sortables=new Class({Implements:[Events,Options],options:{opacity:1,clone:false,revert:false,handle:false,dragOptions:{},snap:4,constrain:false,preventDefault:false},initialize:function(a,b){this.setOptions(b);
this.elements=[];this.lists=[];this.idle=true;this.addLists($$(document.id(a)||a));if(!this.options.clone){this.options.revert=false;}if(this.options.revert){this.effect=new Fx.Morph(null,Object.merge({duration:250,link:"cancel"},this.options.revert));
}},attach:function(){this.addLists(this.lists);return this;},detach:function(){this.lists=this.removeLists(this.lists);return this;},addItems:function(){Array.flatten(arguments).each(function(a){this.elements.push(a);
var b=a.retrieve("sortables:start",function(c){this.start.call(this,c,a);}.bind(this));(this.options.handle?a.getElement(this.options.handle)||a:a).addEvent("mousedown",b);
},this);return this;},addLists:function(){Array.flatten(arguments).each(function(a){this.lists.include(a);this.addItems(a.getChildren());},this);return this;
},removeItems:function(){return $$(Array.flatten(arguments).map(function(a){this.elements.erase(a);var b=a.retrieve("sortables:start");(this.options.handle?a.getElement(this.options.handle)||a:a).removeEvent("mousedown",b);
return a;},this));},removeLists:function(){return $$(Array.flatten(arguments).map(function(a){this.lists.erase(a);this.removeItems(a.getChildren());return a;
},this));},getClone:function(b,a){if(!this.options.clone){return new Element(a.tagName).inject(document.body);}if(typeOf(this.options.clone)=="function"){return this.options.clone.call(this,b,a,this.list);
}var c=a.clone(true).setStyles({margin:0,position:"absolute",visibility:"hidden",width:a.getStyle("width")}).addEvent("mousedown",function(d){a.fireEvent("mousedown",d);
});if(c.get("html").test("radio")){c.getElements("input[type=radio]").each(function(d,e){d.set("name","clone_"+e);if(d.get("checked")){a.getElements("input[type=radio]")[e].set("checked",true);
}});}return c.inject(this.list).setPosition(a.getPosition(a.getOffsetParent()));},getDroppables:function(){var a=this.list.getChildren().erase(this.clone).erase(this.element);
if(!this.options.constrain){a.append(this.lists).erase(this.list);}return a;},insert:function(c,b){var a="inside";if(this.lists.contains(b)){this.list=b;
this.drag.droppables=this.getDroppables();}else{a=this.element.getAllPrevious().contains(b)?"before":"after";}this.element.inject(b,a);this.fireEvent("sort",[this.element,this.clone]);
},start:function(b,a){if(!this.idle||b.rightClick||["button","input","a","textarea"].contains(b.target.get("tag"))){return;}this.idle=false;this.element=a;
this.opacity=a.getStyle("opacity");this.list=a.getParent();this.clone=this.getClone(b,a);this.drag=new Drag.Move(this.clone,Object.merge({preventDefault:this.options.preventDefault,snap:this.options.snap,container:this.options.constrain&&this.element.getParent(),droppables:this.getDroppables()},this.options.dragOptions)).addEvents({onSnap:function(){b.stop();
this.clone.setStyle("visibility","visible");this.element.setStyle("opacity",this.options.opacity||0);this.fireEvent("start",[this.element,this.clone]);
}.bind(this),onEnter:this.insert.bind(this),onCancel:this.end.bind(this),onComplete:this.end.bind(this)});this.clone.inject(this.element,"before");this.drag.start(b);
},end:function(){this.drag.detach();this.element.setStyle("opacity",this.opacity);if(this.effect){var b=this.element.getStyles("width","height"),d=this.clone,c=d.computePosition(this.element.getPosition(this.clone.getOffsetParent()));
var a=function(){this.removeEvent("cancel",a);d.destroy();};this.effect.element=d;this.effect.start({top:c.top,left:c.left,width:b.width,height:b.height,opacity:0.25}).addEvent("cancel",a).chain(a);
}else{this.clone.destroy();}this.reset();},reset:function(){this.idle=true;this.fireEvent("complete",this.element);},serialize:function(){var c=Array.link(arguments,{modifier:Type.isFunction,index:function(d){return d!=null;
}});var b=this.lists.map(function(d){return d.getChildren().map(c.modifier||function(e){return e.get("id");},this);},this);var a=c.index;if(this.lists.length==1){a=0;
}return(a||a===0)&&a>=0&&a<this.lists.length?b[a]:b;}});Request.JSONP=new Class({Implements:[Chain,Events,Options],options:{onRequest:function(a){if(this.options.log&&window.console&&console.log){console.log("JSONP retrieving script with url:"+a);
}},onError:function(a){if(this.options.log&&window.console&&console.warn){console.warn("JSONP "+a+" will fail in Internet Explorer, which enforces a 2083 bytes length limit on URIs");
}},url:"",callbackKey:"callback",injectScript:document.head,data:"",link:"ignore",timeout:0,log:false},initialize:function(a){this.setOptions(a);},send:function(c){if(!Request.prototype.check.call(this,c)){return this;
}this.running=true;var d=typeOf(c);if(d=="string"||d=="element"){c={data:c};}c=Object.merge(this.options,c||{});var e=c.data;switch(typeOf(e)){case"element":e=document.id(e).toQueryString();
break;case"object":case"hash":e=Object.toQueryString(e);}var b=this.index=Request.JSONP.counter++;var f=c.url+(c.url.test("\\?")?"&":"?")+(c.callbackKey)+"=Request.JSONP.request_map.request_"+b+(e?"&"+e:"");
if(f.length>2083){this.fireEvent("error",f);}Request.JSONP.request_map["request_"+b]=function(){this.success(arguments,b);}.bind(this);var a=this.getScript(f).inject(c.injectScript);
this.fireEvent("request",[f,a]);if(c.timeout){this.timeout.delay(c.timeout,this);}return this;},getScript:function(a){if(!this.script){this.script=new Element("script",{type:"text/javascript",async:true,src:a});
}return this.script;},success:function(b,a){if(!this.running){return;}this.clear().fireEvent("complete",b).fireEvent("success",b).callChain();},cancel:function(){if(this.running){this.clear().fireEvent("cancel");
}return this;},isRunning:function(){return !!this.running;},clear:function(){this.running=false;if(this.script){this.script.destroy();this.script=null;
}return this;},timeout:function(){if(this.running){this.running=false;this.fireEvent("timeout",[this.script.get("src"),this.script]).fireEvent("failure").cancel();
}return this;}});Request.JSONP.counter=0;Request.JSONP.request_map={};Request.Queue=new Class({Implements:[Options,Events],Binds:["attach","request","complete","cancel","success","failure","exception"],options:{stopOnFailure:true,autoAdvance:true,concurrent:1,requests:{}},initialize:function(a){var b;
if(a){b=a.requests;delete a.requests;}this.setOptions(a);this.requests={};this.queue=[];this.reqBinders={};if(b){this.addRequests(b);}},addRequest:function(a,b){this.requests[a]=b;
this.attach(a,b);return this;},addRequests:function(a){Object.each(a,function(c,b){this.addRequest(b,c);},this);return this;},getName:function(a){return Object.keyOf(this.requests,a);
},attach:function(a,b){if(b._groupSend){return this;}["request","complete","cancel","success","failure","exception"].each(function(c){if(!this.reqBinders[a]){this.reqBinders[a]={};
}this.reqBinders[a][c]=function(){this["on"+c.capitalize()].apply(this,[a,b].append(arguments));}.bind(this);b.addEvent(c,this.reqBinders[a][c]);},this);
b._groupSend=b.send;b.send=function(c){this.send(a,c);return b;}.bind(this);return this;},removeRequest:function(b){var a=typeOf(b)=="object"?this.getName(b):b;
if(!a&&typeOf(a)!="string"){return this;}b=this.requests[a];if(!b){return this;}["request","complete","cancel","success","failure","exception"].each(function(c){b.removeEvent(c,this.reqBinders[a][c]);
},this);b.send=b._groupSend;delete b._groupSend;return this;},getRunning:function(){return Object.filter(this.requests,function(a){return a.running;});
},isRunning:function(){return !!(Object.keys(this.getRunning()).length);},send:function(b,a){var c=function(){this.requests[b]._groupSend(a);this.queue.erase(c);
}.bind(this);c.name=b;if(Object.keys(this.getRunning()).length>=this.options.concurrent||(this.error&&this.options.stopOnFailure)){this.queue.push(c);}else{c();
}return this;},hasNext:function(a){return(!a)?!!this.queue.length:!!this.queue.filter(function(b){return b.name==a;}).length;},resume:function(){this.error=false;
(this.options.concurrent-Object.keys(this.getRunning()).length).times(this.runNext,this);return this;},runNext:function(a){if(!this.queue.length){return this;
}if(!a){this.queue[0]();}else{var b;this.queue.each(function(c){if(!b&&c.name==a){b=true;c();}});}return this;},runAll:function(){this.queue.each(function(a){a();
});return this;},clear:function(a){if(!a){this.queue.empty();}else{this.queue=this.queue.map(function(b){if(b.name!=a){return b;}else{return false;}}).filter(function(b){return b;
});}return this;},cancel:function(a){this.requests[a].cancel();return this;},onRequest:function(){this.fireEvent("request",arguments);},onComplete:function(){this.fireEvent("complete",arguments);
if(!this.queue.length){this.fireEvent("end");}},onCancel:function(){if(this.options.autoAdvance&&!this.error){this.runNext();}this.fireEvent("cancel",arguments);
},onSuccess:function(){if(this.options.autoAdvance&&!this.error){this.runNext();}this.fireEvent("success",arguments);},onFailure:function(){this.error=true;
if(!this.options.stopOnFailure&&this.options.autoAdvance){this.runNext();}this.fireEvent("failure",arguments);},onException:function(){this.error=true;
if(!this.options.stopOnFailure&&this.options.autoAdvance){this.runNext();}this.fireEvent("exception",arguments);}});Request.implement({options:{initialDelay:5000,delay:5000,limit:60000},startTimer:function(b){var a=function(){if(!this.running){this.send({data:b});
}};this.lastDelay=this.options.initialDelay;this.timer=a.delay(this.lastDelay,this);this.completeCheck=function(c){clearTimeout(this.timer);this.lastDelay=(c)?this.options.delay:(this.lastDelay+this.options.delay).min(this.options.limit);
this.timer=a.delay(this.lastDelay,this);};return this.addEvent("complete",this.completeCheck);},stopTimer:function(){clearTimeout(this.timer);return this.removeEvent("complete",this.completeCheck);
}});var Asset={javascript:function(d,b){if(!b){b={};}var a=new Element("script",{src:d,type:"text/javascript"}),e=b.document||document,c=b.onload||b.onLoad;
delete b.onload;delete b.onLoad;delete b.document;if(c){if(typeof a.onreadystatechange!="undefined"){a.addEvent("readystatechange",function(){if(["loaded","complete"].contains(this.readyState)){c.call(this);
}});}else{a.addEvent("load",c);}}return a.set(b).inject(e.head);},css:function(d,a){if(!a){a={};}var b=new Element("link",{rel:"stylesheet",media:"screen",type:"text/css",href:d});
var c=a.onload||a.onLoad,e=a.document||document;delete a.onload;delete a.onLoad;delete a.document;if(c){b.addEvent("load",c);}return b.set(a).inject(e.head);
},image:function(c,b){if(!b){b={};}var d=new Image(),a=document.id(d)||new Element("img");["load","abort","error"].each(function(e){var g="on"+e,f="on"+e.capitalize(),h=b[g]||b[f]||function(){};
delete b[f];delete b[g];d[g]=function(){if(!d){return;}if(!a.parentNode){a.width=d.width;a.height=d.height;}d=d.onload=d.onabort=d.onerror=null;h.delay(1,a,a);
a.fireEvent(e,a,1);};});d.src=a.src=c;if(d&&d.complete){d.onload.delay(1);}return a.set(b);},images:function(c,b){c=Array.from(c);var d=function(){},a=0;
b=Object.merge({onComplete:d,onProgress:d,onError:d,properties:{}},b);return new Elements(c.map(function(f,e){return Asset.image(f,Object.append(b.properties,{onload:function(){a++;
b.onProgress.call(this,a,e,f);if(a==c.length){b.onComplete();}},onerror:function(){a++;b.onError.call(this,a,e,f);if(a==c.length){b.onComplete();}}}));
}));}};(function(){var a=this.Color=new Type("Color",function(c,d){if(arguments.length>=3){d="rgb";c=Array.slice(arguments,0,3);}else{if(typeof c=="string"){if(c.match(/rgb/)){c=c.rgbToHex().hexToRgb(true);
}else{if(c.match(/hsb/)){c=c.hsbToRgb();}else{c=c.hexToRgb(true);}}}}d=d||"rgb";switch(d){case"hsb":var b=c;c=c.hsbToRgb();c.hsb=b;break;case"hex":c=c.hexToRgb(true);
break;}c.rgb=c.slice(0,3);c.hsb=c.hsb||c.rgbToHsb();c.hex=c.rgbToHex();return Object.append(c,this);});a.implement({mix:function(){var b=Array.slice(arguments);
var d=(typeOf(b.getLast())=="number")?b.pop():50;var c=this.slice();b.each(function(e){e=new a(e);for(var f=0;f<3;f++){c[f]=Math.round((c[f]/100*(100-d))+(e[f]/100*d));
}});return new a(c,"rgb");},invert:function(){return new a(this.map(function(b){return 255-b;}));},setHue:function(b){return new a([b,this.hsb[1],this.hsb[2]],"hsb");
},setSaturation:function(b){return new a([this.hsb[0],b,this.hsb[2]],"hsb");},setBrightness:function(b){return new a([this.hsb[0],this.hsb[1],b],"hsb");
}});this.$RGB=function(e,d,c){return new a([e,d,c],"rgb");};this.$HSB=function(e,d,c){return new a([e,d,c],"hsb");};this.$HEX=function(b){return new a(b,"hex");
};Array.implement({rgbToHsb:function(){var c=this[0],d=this[1],k=this[2],h=0;var j=Math.max(c,d,k),f=Math.min(c,d,k);var l=j-f;var i=j/255,g=(j!=0)?l/j:0;
if(g!=0){var e=(j-c)/l;var b=(j-d)/l;var m=(j-k)/l;if(c==j){h=m-b;}else{if(d==j){h=2+e-m;}else{h=4+b-e;}}h/=6;if(h<0){h++;}}return[Math.round(h*360),Math.round(g*100),Math.round(i*100)];
},hsbToRgb:function(){var d=Math.round(this[2]/100*255);if(this[1]==0){return[d,d,d];}else{var b=this[0]%360;var g=b%60;var h=Math.round((this[2]*(100-this[1]))/10000*255);
var e=Math.round((this[2]*(6000-this[1]*g))/600000*255);var c=Math.round((this[2]*(6000-this[1]*(60-g)))/600000*255);switch(Math.floor(b/60)){case 0:return[d,c,h];
case 1:return[e,d,h];case 2:return[h,d,c];case 3:return[h,e,d];case 4:return[c,h,d];case 5:return[d,h,e];}}return false;}});String.implement({rgbToHsb:function(){var b=this.match(/\d{1,3}/g);
return(b)?b.rgbToHsb():null;},hsbToRgb:function(){var b=this.match(/\d{1,3}/g);return(b)?b.hsbToRgb():null;}});})();(function(){this.Group=new Class({initialize:function(){this.instances=Array.flatten(arguments);
},addEvent:function(e,d){var g=this.instances,a=g.length,f=a,c=new Array(a),b=this;g.each(function(h,j){h.addEvent(e,function(){if(!c[j]){f--;}c[j]=arguments;
if(!f){d.call(b,g,h,c);f=a;c=new Array(a);}});});}});})();Hash.Cookie=new Class({Extends:Cookie,options:{autoSave:true},initialize:function(b,a){this.parent(b,a);
this.load();},save:function(){var a=JSON.encode(this.hash);if(!a||a.length>4096){return false;}if(a=="{}"){this.dispose();}else{this.write(a);}return true;
},load:function(){this.hash=new Hash(JSON.decode(this.read(),true));return this;}});Hash.each(Hash.prototype,function(b,a){if(typeof b=="function"){Hash.Cookie.implement(a,function(){var c=b.apply(this.hash,arguments);
if(this.options.autoSave){this.save();}return c;});}});(function(){var a=this.Table=function(){this.length=0;var c=[],b=[];this.set=function(e,g){var d=c.indexOf(e);
if(d==-1){var f=c.length;c[f]=e;b[f]=g;this.length++;}else{b[d]=g;}return this;};this.get=function(e){var d=c.indexOf(e);return(d==-1)?null:b[d];};this.erase=function(e){var d=c.indexOf(e);
if(d!=-1){this.length--;c.splice(d,1);return b.splice(d,1)[0];}return null;};this.each=this.forEach=function(f,g){for(var e=0,d=this.length;e<d;e++){f.call(g,c[e],b[e],this);
}};};if(this.Type){new Type("Table",a);}})();var HtmlTable=new Class({Implements:[Options,Events,Class.Occlude],options:{properties:{cellpadding:0,cellspacing:0,border:0},rows:[],headers:[],footers:[]},property:"HtmlTable",initialize:function(){var a=Array.link(arguments,{options:Type.isObject,table:Type.isElement,id:Type.isString});
this.setOptions(a.options);if(!a.table&&a.id){a.table=document.id(a.id);}this.element=a.table||new Element("table",this.options.properties);if(this.occlude()){return this.occluded;
}this.build();},build:function(){this.element.store("HtmlTable",this);this.body=document.id(this.element.tBodies[0])||new Element("tbody").inject(this.element);
$$(this.body.rows);if(this.options.headers.length){this.setHeaders(this.options.headers);}else{this.thead=document.id(this.element.tHead);}if(this.thead){this.head=this.getHead();
}if(this.options.footers.length){this.setFooters(this.options.footers);}this.tfoot=document.id(this.element.tFoot);if(this.tfoot){this.foot=document.id(this.tfoot.rows[0]);
}this.options.rows.each(function(a){this.push(a);},this);},toElement:function(){return this.element;},empty:function(){this.body.empty();return this;},set:function(e,a){var d=(e=="headers")?"tHead":"tFoot",b=d.toLowerCase();
this[b]=(document.id(this.element[d])||new Element(b).inject(this.element,"top")).empty();var c=this.push(a,{},this[b],e=="headers"?"th":"td");if(e=="headers"){this.head=this.getHead();
}else{this.foot=this.getHead();}return c;},getHead:function(){var a=this.thead.rows;return a.length>1?$$(a):a.length?document.id(a[0]):false;},setHeaders:function(a){this.set("headers",a);
return this;},setFooters:function(a){this.set("footers",a);return this;},update:function(d,e,a){var b=d.getChildren(a||"td"),c=b.length-1;e.each(function(i,f){var j=b[f]||new Element(a||"td").inject(d),h=(i?i.content:"")||i,g=typeOf(h);
if(i&&i.properties){j.set(i.properties);}if(/(element(s?)|array|collection)/.test(g)){j.empty().adopt(h);}else{j.set("html",h);}if(f>c){b.push(j);}else{b[f]=j;
}});return{tr:d,tds:b};},push:function(e,c,d,a,b){if(typeOf(e)=="element"&&e.get("tag")=="tr"){e.inject(d||this.body,b);return{tr:e,tds:e.getChildren("td")};
}return this.update(new Element("tr",c).inject(d||this.body,b),e,a);},pushMany:function(d,c,e,a,b){return d.map(function(f){return this.push(f,c,e,a,b);
},this);}});["adopt","inject","wraps","grab","replaces","dispose"].each(function(a){HtmlTable.implement(a,function(){this.element[a].apply(this.element,arguments);
return this;});});HtmlTable=Class.refactor(HtmlTable,{options:{classZebra:"table-tr-odd",zebra:true,zebraOnlyVisibleRows:true},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}if(this.options.zebra){this.updateZebras();}},updateZebras:function(){var a=0;Array.each(this.body.rows,function(b){if(!this.options.zebraOnlyVisibleRows||b.isDisplayed()){this.zebra(b,a++);
}},this);},setRowStyle:function(b,a){if(this.previous){this.previous(b,a);}this.zebra(b,a);},zebra:function(b,a){return b[((a%2)?"remove":"add")+"Class"](this.options.classZebra);
},push:function(){var a=this.previous.apply(this,arguments);if(this.options.zebra){this.updateZebras();}return a;}});HtmlTable=Class.refactor(HtmlTable,{options:{sortIndex:0,sortReverse:false,parsers:[],defaultParser:"string",classSortable:"table-sortable",classHeadSort:"table-th-sort",classHeadSortRev:"table-th-sort-rev",classNoSort:"table-th-nosort",classGroupHead:"table-tr-group-head",classGroup:"table-tr-group",classCellSort:"table-td-sort",classSortSpan:"table-th-sort-span",sortable:false,thSelector:"th"},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}this.sorted={index:null,dir:1};if(!this.bound){this.bound={};}this.bound.headClick=this.headClick.bind(this);this.sortSpans=new Elements();
if(this.options.sortable){this.enableSort();if(this.options.sortIndex!=null){this.sort(this.options.sortIndex,this.options.sortReverse);}}},attachSorts:function(a){this.detachSorts();
if(a!==false){this.element.addEvent("click:relay("+this.options.thSelector+")",this.bound.headClick);}},detachSorts:function(){this.element.removeEvents("click:relay("+this.options.thSelector+")");
},setHeaders:function(){this.previous.apply(this,arguments);if(this.sortEnabled){this.setParsers();}},setParsers:function(){this.parsers=this.detectParsers();
},detectParsers:function(){return this.head&&this.head.getElements(this.options.thSelector).flatten().map(this.detectParser,this);},detectParser:function(a,b){if(a.hasClass(this.options.classNoSort)||a.retrieve("htmltable-parser")){return a.retrieve("htmltable-parser");
}var c=new Element("div");c.adopt(a.childNodes).inject(a);var f=new Element("span",{"class":this.options.classSortSpan}).inject(c,"top");this.sortSpans.push(f);
var g=this.options.parsers[b],e=this.body.rows,d;switch(typeOf(g)){case"function":g={convert:g};d=true;break;case"string":g=g;d=true;break;}if(!d){HtmlTable.ParserPriority.some(function(k){var o=HtmlTable.Parsers[k],m=o.match;
if(!m){return false;}for(var n=0,l=e.length;n<l;n++){var h=document.id(e[n].cells[b]),p=h?h.get("html").clean():"";if(p&&m.test(p)){g=o;return true;}}});
}if(!g){g=this.options.defaultParser;}a.store("htmltable-parser",g);return g;},headClick:function(b,a){if(!this.head||a.hasClass(this.options.classNoSort)){return;
}return this.sort(Array.indexOf(this.head.getElements(this.options.thSelector).flatten(),a)%this.body.rows[0].cells.length);},serialize:function(){var a=this.previous.apply(this,arguments)||{};
if(this.options.sortable){a.sortIndex=this.sorted.index;a.sortReverse=this.sorted.reverse;}return a;},restore:function(a){if(this.options.sortable&&a.sortIndex){this.sort(a.sortIndex,a.sortReverse);
}this.previous.apply(this,arguments);},setSortedState:function(b,a){if(a!=null){this.sorted.reverse=a;}else{if(this.sorted.index==b){this.sorted.reverse=!this.sorted.reverse;
}else{this.sorted.reverse=this.sorted.index==null;}}if(b!=null){this.sorted.index=b;}},setHeadSort:function(a){var b=$$(!this.head.length?this.head.cells[this.sorted.index]:this.head.map(function(c){return c.getElements(this.options.thSelector)[this.sorted.index];
},this).clean());if(!b.length){return;}if(a){b.addClass(this.options.classHeadSort);if(this.sorted.reverse){b.addClass(this.options.classHeadSortRev);}else{b.removeClass(this.options.classHeadSortRev);
}}else{b.removeClass(this.options.classHeadSort).removeClass(this.options.classHeadSortRev);}},setRowSort:function(b,a){var e=b.length,d=this.body,g,f;
while(e){var h=b[--e],c=h.position,i=d.rows[c];if(i.disabled){continue;}if(!a){g=this.setGroupSort(g,i,h);this.setRowStyle(i,e);}d.appendChild(i);for(f=0;
f<e;f++){if(b[f].position>c){b[f].position--;}}}},setRowStyle:function(b,a){this.previous(b,a);b.cells[this.sorted.index].addClass(this.options.classCellSort);
},setGroupSort:function(b,c,a){if(b==a.value){c.removeClass(this.options.classGroupHead).addClass(this.options.classGroup);}else{c.removeClass(this.options.classGroup).addClass(this.options.classGroupHead);
}return a.value;},getParser:function(){var a=this.parsers[this.sorted.index];return typeOf(a)=="string"?HtmlTable.Parsers[a]:a;},sort:function(c,b,e){if(!this.head){return;
}if(!e){this.clearSort();this.setSortedState(c,b);this.setHeadSort(true);}var f=this.getParser();if(!f){return;}var a;if(!Browser.ie){a=this.body.getParent();
this.body.dispose();}var d=this.parseData(f).sort(function(h,g){if(h.value===g.value){return 0;}return h.value>g.value?1:-1;});if(this.sorted.reverse==(f==HtmlTable.Parsers["input-checked"])){d.reverse(true);
}this.setRowSort(d,e);if(a){a.grab(this.body);}this.fireEvent("stateChanged");return this.fireEvent("sort",[this.body,this.sorted.index]);},parseData:function(a){return Array.map(this.body.rows,function(d,b){var c=a.convert.call(document.id(d.cells[this.sorted.index]));
return{position:b,value:c};},this);},clearSort:function(){this.setHeadSort(false);this.body.getElements("td").removeClass(this.options.classCellSort);},reSort:function(){if(this.sortEnabled){this.sort.call(this,this.sorted.index,this.sorted.reverse);
}return this;},enableSort:function(){this.element.addClass(this.options.classSortable);this.attachSorts(true);this.setParsers();this.sortEnabled=true;return this;
},disableSort:function(){this.element.removeClass(this.options.classSortable);this.attachSorts(false);this.sortSpans.each(function(a){a.destroy();});this.sortSpans.empty();
this.sortEnabled=false;return this;}});HtmlTable.ParserPriority=["date","input-checked","input-value","float","number"];HtmlTable.Parsers={date:{match:/^\d{2}[-\/ ]\d{2}[-\/ ]\d{2,4}$/,convert:function(){var a=Date.parse(this.get("text").stripTags());
return(typeOf(a)=="date")?a.format("db"):"";},type:"date"},"input-checked":{match:/ type="(radio|checkbox)" /,convert:function(){return this.getElement("input").checked;
}},"input-value":{match:/<input/,convert:function(){return this.getElement("input").value;}},number:{match:/^\d+[^\d.,]*$/,convert:function(){return this.get("text").stripTags().toInt();
},number:true},numberLax:{match:/^[^\d]+\d+$/,convert:function(){return this.get("text").replace(/[^-?^0-9]/,"").stripTags().toInt();},number:true},"float":{match:/^[\d]+\.[\d]+/,convert:function(){return this.get("text").replace(/[^-?^\d.]/,"").stripTags().toFloat();
},number:true},floatLax:{match:/^[^\d]+[\d]+\.[\d]+$/,convert:function(){return this.get("text").replace(/[^-?^\d.]/,"").stripTags();},number:true},string:{match:null,convert:function(){return this.get("text").stripTags().toLowerCase();
}},title:{match:null,convert:function(){return this.title;}}};HtmlTable.Parsers=new Hash(HtmlTable.Parsers);HtmlTable.defineParsers=function(a){HtmlTable.Parsers=Object.append(HtmlTable.Parsers,a);
for(var b in a){HtmlTable.ParserPriority.unshift(b);}};(function(){var a=this.Keyboard=new Class({Extends:Events,Implements:[Options],options:{defaultEventType:"keydown",active:false,manager:null,events:{},nonParsedEvents:["activate","deactivate","onactivate","ondeactivate","changed","onchanged"]},initialize:function(f){if(f&&f.manager){this._manager=f.manager;
delete f.manager;}this.setOptions(f);this._setup();},addEvent:function(h,g,f){return this.parent(a.parse(h,this.options.defaultEventType,this.options.nonParsedEvents),g,f);
},removeEvent:function(g,f){return this.parent(a.parse(g,this.options.defaultEventType,this.options.nonParsedEvents),f);},toggleActive:function(){return this[this.isActive()?"deactivate":"activate"]();
},activate:function(f){if(f){if(f.isActive()){return this;}if(this._activeKB&&f!=this._activeKB){this.previous=this._activeKB;this.previous.fireEvent("deactivate");
}this._activeKB=f.fireEvent("activate");a.manager.fireEvent("changed");}else{if(this._manager){this._manager.activate(this);}}return this;},isActive:function(){return this._manager?(this._manager._activeKB==this):(a.manager==this);
},deactivate:function(f){if(f){if(f===this._activeKB){this._activeKB=null;f.fireEvent("deactivate");a.manager.fireEvent("changed");}}else{if(this._manager){this._manager.deactivate(this);
}}return this;},relinquish:function(){if(this.isActive()&&this._manager&&this._manager.previous){this._manager.activate(this._manager.previous);}else{this.deactivate();
}return this;},manage:function(f){if(f._manager){f._manager.drop(f);}this._instances.push(f);f._manager=this;if(!this._activeKB){this.activate(f);}return this;
},drop:function(f){f.relinquish();this._instances.erase(f);if(this._activeKB==f){if(this.previous&&this._instances.contains(this.previous)){this.activate(this.previous);
}else{this._activeKB=this._instances[0];}}return this;},trace:function(){a.trace(this);},each:function(f){a.each(this,f);},_instances:[],_disable:function(f){if(this._activeKB==f){this._activeKB=null;
}},_setup:function(){this.addEvents(this.options.events);if(a.manager&&!this._manager){a.manager.manage(this);}if(this.options.active){this.activate();
}else{this.relinquish();}},_handle:function(h,g){if(h.preventKeyboardPropagation){return;}var f=!!this._manager;if(f&&this._activeKB){this._activeKB._handle(h,g);
if(h.preventKeyboardPropagation){return;}}this.fireEvent(g,h);if(!f&&this._activeKB){this._activeKB._handle(h,g);}}});var b={};var c=["shift","control","alt","meta"];
var e=/^(?:shift|control|ctrl|alt|meta)$/;a.parse=function(h,g,k){if(k&&k.contains(h.toLowerCase())){return h;}h=h.toLowerCase().replace(/^(keyup|keydown):/,function(m,l){g=l;
return"";});if(!b[h]){var f,j={};h.split("+").each(function(l){if(e.test(l)){j[l]=true;}else{f=l;}});j.control=j.control||j.ctrl;var i=[];c.each(function(l){if(j[l]){i.push(l);
}});if(f){i.push(f);}b[h]=i.join("+");}return g+":keys("+b[h]+")";};a.each=function(f,g){var h=f||a.manager;while(h){g.run(h);h=h._activeKB;}};a.stop=function(f){f.preventKeyboardPropagation=true;
};a.manager=new a({active:true});a.trace=function(f){f=f||a.manager;var g=window.console&&console.log;if(g){console.log("the following items have focus: ");
}a.each(f,function(h){if(g){console.log(document.id(h.widget)||h.wiget||h);}});};var d=function(g){var f=[];c.each(function(h){if(g[h]){f.push(h);}});if(!e.test(g.key)){f.push(g.key);
}a.manager._handle(g,g.type+":keys("+f.join("+")+")");};document.addEvents({keyup:d,keydown:d});})();Keyboard.prototype.options.nonParsedEvents.combine(["rebound","onrebound"]);
Keyboard.implement({addShortcut:function(b,a){this._shortcuts=this._shortcuts||[];this._shortcutIndex=this._shortcutIndex||{};a.getKeyboard=Function.from(this);
a.name=b;this._shortcutIndex[b]=a;this._shortcuts.push(a);if(a.keys){this.addEvent(a.keys,a.handler);}return this;},addShortcuts:function(b){for(var a in b){this.addShortcut(a,b[a]);
}return this;},removeShortcut:function(b){var a=this.getShortcut(b);if(a&&a.keys){this.removeEvent(a.keys,a.handler);delete this._shortcutIndex[b];this._shortcuts.erase(a);
}return this;},removeShortcuts:function(a){a.each(this.removeShortcut,this);return this;},getShortcuts:function(){return this._shortcuts||[];},getShortcut:function(a){return(this._shortcutIndex||{})[a];
}});Keyboard.rebind=function(b,a){Array.from(a).each(function(c){c.getKeyboard().removeEvent(c.keys,c.handler);c.getKeyboard().addEvent(b,c.handler);c.keys=b;
c.getKeyboard().fireEvent("rebound");});};Keyboard.getActiveShortcuts=function(b){var a=[],c=[];Keyboard.each(b,[].push.bind(a));a.each(function(d){c.extend(d.getShortcuts());
});return c;};Keyboard.getShortcut=function(c,b,d){d=d||{};var a=d.many?[]:null,e=d.many?function(g){var f=g.getShortcut(c);if(f){a.push(f);}}:function(f){if(!a){a=f.getShortcut(c);
}};Keyboard.each(b,e);return a;};Keyboard.getShortcuts=function(b,a){return Keyboard.getShortcut(b,a,{many:true});};HtmlTable=Class.refactor(HtmlTable,{options:{useKeyboard:true,classRowSelected:"table-tr-selected",classRowHovered:"table-tr-hovered",classSelectable:"table-selectable",shiftForMultiSelect:true,allowMultiSelect:true,selectable:false,selectHiddenRows:false},initialize:function(){this.previous.apply(this,arguments);
if(this.occluded){return this.occluded;}this.selectedRows=new Elements();if(!this.bound){this.bound={};}this.bound.mouseleave=this.mouseleave.bind(this);
this.bound.clickRow=this.clickRow.bind(this);this.bound.activateKeyboard=function(){if(this.keyboard&&this.selectEnabled){this.keyboard.activate();}}.bind(this);
if(this.options.selectable){this.enableSelect();}},empty:function(){this.selectNone();return this.previous();},enableSelect:function(){this.selectEnabled=true;
this.attachSelects();this.element.addClass(this.options.classSelectable);return this;},disableSelect:function(){this.selectEnabled=false;this.attachSelects(false);
this.element.removeClass(this.options.classSelectable);return this;},push:function(){var a=this.previous.apply(this,arguments);this.updateSelects();return a;
},toggleRow:function(a){return this[(this.isSelected(a)?"de":"")+"selectRow"](a);},selectRow:function(b,a){if(this.isSelected(b)||(!a&&!this.body.getChildren().contains(b))){return;
}if(!this.options.allowMultiSelect){this.selectNone();}if(!this.isSelected(b)){this.selectedRows.push(b);b.addClass(this.options.classRowSelected);this.fireEvent("rowFocus",[b,this.selectedRows]);
this.fireEvent("stateChanged");}this.focused=b;document.clearSelection();return this;},isSelected:function(a){return this.selectedRows.contains(a);},getSelected:function(){return this.selectedRows;
},getSelected:function(){return this.selectedRows;},serialize:function(){var a=this.previous.apply(this,arguments)||{};if(this.options.selectable){a.selectedRows=this.selectedRows.map(function(b){return Array.indexOf(this.body.rows,b);
}.bind(this));}return a;},restore:function(a){if(this.options.selectable&&a.selectedRows){a.selectedRows.each(function(b){this.selectRow(this.body.rows[b]);
}.bind(this));}this.previous.apply(this,arguments);},deselectRow:function(b,a){if(!this.isSelected(b)||(!a&&!this.body.getChildren().contains(b))){return;
}this.selectedRows=new Elements(Array.from(this.selectedRows).erase(b));b.removeClass(this.options.classRowSelected);this.fireEvent("rowUnfocus",[b,this.selectedRows]);
this.fireEvent("stateChanged");return this;},selectAll:function(a){if(!a&&!this.options.allowMultiSelect){return;}this.selectRange(0,this.body.rows.length,a);
return this;},selectNone:function(){return this.selectAll(true);},selectRange:function(b,a,f){if(!this.options.allowMultiSelect&&!f){return;}var g=f?"deselectRow":"selectRow",e=Array.clone(this.body.rows);
if(typeOf(b)=="element"){b=e.indexOf(b);}if(typeOf(a)=="element"){a=e.indexOf(a);}a=a<e.length-1?a:e.length-1;if(a<b){var d=b;b=a;a=d;}for(var c=b;c<=a;
c++){if(this.options.selectHiddenRows||e[c].isDisplayed()){this[g](e[c],true);}}return this;},deselectRange:function(b,a){this.selectRange(b,a,true);},getSelected:function(){return this.selectedRows;
},enterRow:function(a){if(this.hovered){this.hovered=this.leaveRow(this.hovered);}this.hovered=a.addClass(this.options.classRowHovered);},leaveRow:function(a){a.removeClass(this.options.classRowHovered);
},updateSelects:function(){Array.each(this.body.rows,function(a){var b=a.retrieve("binders");if(!b&&!this.selectEnabled){return;}if(!b){b={mouseenter:this.enterRow.pass([a],this),mouseleave:this.leaveRow.pass([a],this)};
a.store("binders",b);}if(this.selectEnabled){a.addEvents(b);}else{a.removeEvents(b);}},this);},shiftFocus:function(b,a){if(!this.focused){return this.selectRow(this.body.rows[0],a);
}var c=this.getRowByOffset(b,this.options.selectHiddenRows);if(c===null||this.focused==this.body.rows[c]){return this;}this.toggleRow(this.body.rows[c],a);
},clickRow:function(a,b){var c=(a.shift||a.meta||a.control)&&this.options.shiftForMultiSelect;if(!c&&!(a.rightClick&&this.isSelected(b)&&this.options.allowMultiSelect)){this.selectNone();
}if(a.rightClick){this.selectRow(b);}else{this.toggleRow(b);}if(a.shift){this.selectRange(this.rangeStart||this.body.rows[0],b,this.rangeStart?!this.isSelected(b):true);
this.focused=b;}this.rangeStart=b;},getRowByOffset:function(e,d){if(!this.focused){return 0;}var b=Array.indexOf(this.body.rows,this.focused);if((b==0&&e<0)||(b==this.body.rows.length-1&&e>0)){return null;
}if(d){b+=e;}else{var a=0,c=0;if(e>0){while(c<e&&b<this.body.rows.length-1){if(this.body.rows[++b].isDisplayed()){c++;}}}else{while(c>e&&b>0){if(this.body.rows[--b].isDisplayed()){c--;
}}}}return b;},attachSelects:function(d){d=d!=null?d:true;var g=d?"addEvents":"removeEvents";this.element[g]({mouseleave:this.bound.mouseleave,click:this.bound.activateKeyboard});
this.body[g]({"click:relay(tr)":this.bound.clickRow,"contextmenu:relay(tr)":this.bound.clickRow});if(this.options.useKeyboard||this.keyboard){if(!this.keyboard){this.keyboard=new Keyboard();
}if(!this.selectKeysDefined){this.selectKeysDefined=true;var f,e;var c=function(i){var h=function(j){clearTimeout(f);j.preventDefault();var k=this.body.rows[this.getRowByOffset(i,this.options.selectHiddenRows)];
if(j.shift&&k&&this.isSelected(k)){this.deselectRow(this.focused);this.focused=k;}else{if(k&&(!this.options.allowMultiSelect||!j.shift)){this.selectNone();
}this.shiftFocus(i,j);}if(e){f=h.delay(100,this,j);}else{f=(function(){e=true;h(j);}).delay(400);}}.bind(this);return h;}.bind(this);var b=function(){clearTimeout(f);
e=false;};this.keyboard.addEvents({"keydown:shift+up":c(-1),"keydown:shift+down":c(1),"keyup:shift+up":b,"keyup:shift+down":b,"keyup:up":b,"keyup:down":b});
var a="";if(this.options.allowMultiSelect&&this.options.shiftForMultiSelect&&this.options.useKeyboard){a=" (Shift multi-selects).";}this.keyboard.addShortcuts({"Select Previous Row":{keys:"up",shortcut:"up arrow",handler:c(-1),description:"Select the previous row in the table."+a},"Select Next Row":{keys:"down",shortcut:"down arrow",handler:c(1),description:"Select the next row in the table."+a}});
}this.keyboard[d?"activate":"deactivate"]();}this.updateSelects();},mouseleave:function(){if(this.hovered){this.leaveRow(this.hovered);}}});var Scroller=new Class({Implements:[Events,Options],options:{area:20,velocity:1,onChange:function(a,b){this.element.scrollTo(a,b);
},fps:50},initialize:function(b,a){this.setOptions(a);this.element=document.id(b);this.docBody=document.id(this.element.getDocument().body);this.listener=(typeOf(this.element)!="element")?this.docBody:this.element;
this.timer=null;this.bound={attach:this.attach.bind(this),detach:this.detach.bind(this),getCoords:this.getCoords.bind(this)};},start:function(){this.listener.addEvents({mouseover:this.bound.attach,mouseleave:this.bound.detach});
return this;},stop:function(){this.listener.removeEvents({mouseover:this.bound.attach,mouseleave:this.bound.detach});this.detach();this.timer=clearInterval(this.timer);
return this;},attach:function(){this.listener.addEvent("mousemove",this.bound.getCoords);},detach:function(){this.listener.removeEvent("mousemove",this.bound.getCoords);
this.timer=clearInterval(this.timer);},getCoords:function(a){this.page=(this.listener.get("tag")=="body")?a.client:a.page;if(!this.timer){this.timer=this.scroll.periodical(Math.round(1000/this.options.fps),this);
}},scroll:function(){var c=this.element.getSize(),a=this.element.getScroll(),h=this.element!=this.docBody?this.element.getOffsets():{x:0,y:0},d=this.element.getScrollSize(),g={x:0,y:0},e=this.options.area.top||this.options.area,b=this.options.area.bottom||this.options.area;
for(var f in this.page){if(this.page[f]<(e+h[f])&&a[f]!=0){g[f]=(this.page[f]-e-h[f])*this.options.velocity;}else{if(this.page[f]+b>(c[f]+h[f])&&a[f]+c[f]!=d[f]){g[f]=(this.page[f]-c[f]+b-h[f])*this.options.velocity;
}}g[f]=g[f].round();}if(g.y||g.x){this.fireEvent("change",[a.x+g.x,a.y+g.y]);}}});(function(){var a=function(c,b){return(c)?(typeOf(c)=="function"?c(b):b.get(c)):"";
};this.Tips=new Class({Implements:[Events,Options],options:{onShow:function(){this.tip.setStyle("display","block");},onHide:function(){this.tip.setStyle("display","none");
},title:"title",text:function(b){return b.get("rel")||b.get("href");},showDelay:100,hideDelay:100,className:"tip-wrap",offset:{x:16,y:16},windowPadding:{x:0,y:0},fixed:false,waiAria:true},initialize:function(){var b=Array.link(arguments,{options:Type.isObject,elements:function(c){return c!=null;
}});this.setOptions(b.options);if(b.elements){this.attach(b.elements);}this.container=new Element("div",{"class":"tip"});if(this.options.id){this.container.set("id",this.options.id);
if(this.options.waiAria){this.attachWaiAria();}}},toElement:function(){if(this.tip){return this.tip;}this.tip=new Element("div",{"class":this.options.className,styles:{position:"absolute",top:0,left:0}}).adopt(new Element("div",{"class":"tip-top"}),this.container,new Element("div",{"class":"tip-bottom"}));
return this.tip;},attachWaiAria:function(){var b=this.options.id;this.container.set("role","tooltip");if(!this.waiAria){this.waiAria={show:function(c){if(b){c.set("aria-describedby",b);
}this.container.set("aria-hidden","false");},hide:function(c){if(b){c.erase("aria-describedby");}this.container.set("aria-hidden","true");}};}this.addEvents(this.waiAria);
},detachWaiAria:function(){if(this.waiAria){this.container.erase("role");this.container.erase("aria-hidden");this.removeEvents(this.waiAria);}},attach:function(b){$$(b).each(function(d){var f=a(this.options.title,d),e=a(this.options.text,d);
d.set("title","").store("tip:native",f).retrieve("tip:title",f);d.retrieve("tip:text",e);this.fireEvent("attach",[d]);var c=["enter","leave"];if(!this.options.fixed){c.push("move");
}c.each(function(h){var g=d.retrieve("tip:"+h);if(!g){g=function(i){this["element"+h.capitalize()].apply(this,[i,d]);}.bind(this);}d.store("tip:"+h,g).addEvent("mouse"+h,g);
},this);},this);return this;},detach:function(b){$$(b).each(function(d){["enter","leave","move"].each(function(e){d.removeEvent("mouse"+e,d.retrieve("tip:"+e)).eliminate("tip:"+e);
});this.fireEvent("detach",[d]);if(this.options.title=="title"){var c=d.retrieve("tip:native");if(c){d.set("title",c);}}},this);return this;},elementEnter:function(c,b){clearTimeout(this.timer);
this.timer=(function(){this.container.empty();["title","text"].each(function(e){var d=b.retrieve("tip:"+e);var f=this["_"+e+"Element"]=new Element("div",{"class":"tip-"+e}).inject(this.container);
if(d){this.fill(f,d);}},this);this.show(b);this.position((this.options.fixed)?{page:b.getPosition()}:c);}).delay(this.options.showDelay,this);},elementLeave:function(c,b){clearTimeout(this.timer);
this.timer=this.hide.delay(this.options.hideDelay,this,b);this.fireForParent(c,b);},setTitle:function(b){if(this._titleElement){this._titleElement.empty();
this.fill(this._titleElement,b);}return this;},setText:function(b){if(this._textElement){this._textElement.empty();this.fill(this._textElement,b);}return this;
},fireForParent:function(c,b){b=b.getParent();if(!b||b==document.body){return;}if(b.retrieve("tip:enter")){b.fireEvent("mouseenter",c);}else{this.fireForParent(c,b);
}},elementMove:function(c,b){this.position(c);},position:function(f){if(!this.tip){document.id(this);}var c=window.getSize(),b=window.getScroll(),g={x:this.tip.offsetWidth,y:this.tip.offsetHeight},d={x:"left",y:"top"},e={y:false,x2:false,y2:false,x:false},h={};
for(var i in d){h[d[i]]=f.page[i]+this.options.offset[i];if(h[d[i]]<0){e[i]=true;}if((h[d[i]]+g[i]-b[i])>c[i]-this.options.windowPadding[i]){h[d[i]]=f.page[i]-this.options.offset[i]-g[i];
e[i+"2"]=true;}}this.fireEvent("bound",e);this.tip.setStyles(h);},fill:function(b,c){if(typeof c=="string"){b.set("html",c);}else{b.adopt(c);}},show:function(b){if(!this.tip){document.id(this);
}if(!this.tip.getParent()){this.tip.inject(document.body);}this.fireEvent("show",[this.tip,b]);},hide:function(b){if(!this.tip){document.id(this);}this.fireEvent("hide",[this.tip,b]);
}});})();(function(){var a={json:JSON.decode};Locale.Set.defineParser=function(b,c){a[b]=c;};Locale.Set.from=function(d,c){if(instanceOf(d,Locale.Set)){return d;
}if(!c&&typeOf(d)=="string"){c="json";}if(a[c]){d=a[c](d);}var b=new Locale.Set;b.sets=d.sets||{};if(d.inherits){b.inherits.locales=Array.from(d.inherits.locales);
b.inherits.sets=d.inherits.sets||{};}return b;};})();Locale.define("ar","Date",{dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M"});
Locale.define("ar","FormValidator",{required:"Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ Ù…Ø·Ù„ÙˆØ¨.",minLength:"Ø±Ø¬Ø§Ø¡Ù‹ Ø¥Ø¯Ø®Ø§Ù„ {minLength} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„ (ØªÙ… Ø¥Ø¯Ø®Ø§Ù„ {length} Ø£Ø­Ø±Ù).",maxLength:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¹Ø¯Ù… Ø¥Ø¯Ø®Ø§Ù„ Ø£ÙƒØ«Ø± Ù…Ù† {maxLength} Ø£Ø­Ø±Ù (ØªÙ… Ø¥Ø¯Ø®Ø§Ù„ {length} Ø£Ø­Ø±Ù).",integer:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ø¯Ø¯ ØµØ­ÙŠØ­ ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„. Ø£ÙŠ Ø±Ù‚Ù… Ø°Ùˆ ÙƒØ³Ø± Ø¹Ø´Ø±ÙŠ Ø£Ùˆ Ù…Ø¦ÙˆÙŠ (Ù…Ø«Ø§Ù„ 1.25 ) ØºÙŠØ± Ù…Ø³Ù…ÙˆØ­.",numeric:'Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ù‚ÙŠÙ… Ø±Ù‚Ù…ÙŠØ© ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ (Ù…Ø«Ø§Ù„ "1" Ø£Ùˆ "1.1" Ø£Ùˆ "-1" Ø£Ùˆ "-1.1").',digits:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø£Ø³ØªØ®Ø¯Ø§Ù… Ù‚ÙŠÙ… Ø±Ù‚Ù…ÙŠØ© ÙˆØ¹Ù„Ø§Ù…Ø§Øª ØªØ±Ù‚ÙŠÙ…ÙŠØ© ÙÙ‚Ø· ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ (Ù…Ø«Ø§Ù„, Ø±Ù‚Ù… Ù‡Ø§ØªÙ Ù…Ø¹ Ù†Ù‚Ø·Ø© Ø£Ùˆ Ø´Ø­Ø·Ø©)",alpha:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø£Ø³ØªØ®Ø¯Ø§Ù… Ø£Ø­Ø±Ù ÙÙ‚Ø· (Ø§-ÙŠ) ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„. Ø£ÙŠ ÙØ±Ø§ØºØ§Øª Ø£Ùˆ Ø¹Ù„Ø§Ù…Ø§Øª ØºÙŠØ± Ù…Ø³Ù…ÙˆØ­Ø©.",alphanum:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø£Ø³ØªØ®Ø¯Ø§Ù… Ø£Ø­Ø±Ù ÙÙ‚Ø· (Ø§-ÙŠ) Ø£Ùˆ Ø£Ø±Ù‚Ø§Ù… (0-9) ÙÙ‚Ø· ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„. Ø£ÙŠ ÙØ±Ø§ØºØ§Øª Ø£Ùˆ Ø¹Ù„Ø§Ù…Ø§Øª ØºÙŠØ± Ù…Ø³Ù…ÙˆØ­Ø©.",dateSuchAs:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ ØªØ§Ø±ÙŠØ® ØµØ­ÙŠØ­ ÙƒØ§Ù„ØªØ§Ù„ÙŠ {date}",dateInFormatMDY:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ ØªØ§Ø±ÙŠØ® ØµØ­ÙŠØ­ (Ù…Ø«Ø§Ù„, 31-12-1999)",email:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ­ÙŠØ­.",url:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ø¹Ù†ÙˆØ§Ù† Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ­ÙŠØ­ Ù…Ø«Ù„ http://www.example.com",currencyDollar:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ù‚ÙŠÙ…Ø© $ ØµØ­ÙŠØ­Ø©. Ù…Ø«Ø§Ù„, 100.00$",oneRequired:"Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¯Ø®Ø§Ù„ Ù‚ÙŠÙ…Ø© ÙÙŠ Ø£Ø­Ø¯ Ù‡Ø°Ù‡ Ø§Ù„Ø­Ù‚ÙˆÙ„ Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„.",errorPrefix:"Ø®Ø·Ø£: ",warningPrefix:"ØªØ­Ø°ÙŠØ±: "});
Locale.define("ca-CA","Date",{months:["Gener","Febrer","MarÃ§","Abril","Maig","Juny","Juli","Agost","Setembre","Octubre","Novembre","Desembre"],months_abbr:["gen.","febr.","marÃ§","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],days:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],days_abbr:["dg","dl","dt","dc","dj","dv","ds"],dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:0,ordinal:"",lessThanMinuteAgo:"fa menys d`un minut",minuteAgo:"fa un minut",minutesAgo:"fa {delta} minuts",hourAgo:"fa un hora",hoursAgo:"fa unes {delta} hores",dayAgo:"fa un dia",daysAgo:"fa {delta} dies",lessThanMinuteUntil:"menys d`un minut des d`ara",minuteUntil:"un minut des d`ara",minutesUntil:"{delta} minuts des d`ara",hourUntil:"un hora des d`ara",hoursUntil:"unes {delta} hores des d`ara",dayUntil:"1 dia des d`ara",daysUntil:"{delta} dies des d`ara"});
Locale.define("ca-CA","FormValidator",{required:"Aquest camp es obligatori.",minLength:"Per favor introdueix al menys {minLength} caracters (has introduit {length} caracters).",maxLength:"Per favor introdueix no mes de {maxLength} caracters (has introduit {length} caracters).",integer:"Per favor introdueix un nombre enter en aquest camp. Nombres amb decimals (p.e. 1,25) no estan permesos.",numeric:'Per favor introdueix sols valors numerics en aquest camp (p.e. "1" o "1,1" o "-1" o "-1,1").',digits:"Per favor usa sols numeros i puntuacio en aquest camp (per exemple, un nombre de telefon amb guions i punts no esta permes).",alpha:"Per favor utilitza lletres nomes (a-z) en aquest camp. No sÂ´admiteixen espais ni altres caracters.",alphanum:"Per favor, utilitza nomes lletres (a-z) o numeros (0-9) en aquest camp. No sÂ´admiteixen espais ni altres caracters.",dateSuchAs:"Per favor introdueix una data valida com {date}",dateInFormatMDY:'Per favor introdueix una data valida com DD/MM/YYYY (p.e. "31/12/1999")',email:'Per favor, introdueix una adreÃ§a de correu electronic valida. Per exemple, "fred@domain.com".',url:"Per favor introdueix una URL valida com http://www.example.com.",currencyDollar:"Per favor introdueix una quantitat valida de â‚¬. Per exemple â‚¬100,00 .",oneRequired:"Per favor introdueix alguna cosa per al menys una dÂ´aquestes entrades.",errorPrefix:"Error: ",warningPrefix:"Avis: ",noSpace:"No poden haver espais en aquesta entrada.",reqChkByNode:"No hi han elements seleccionats.",requiredChk:"Aquest camp es obligatori.",reqChkByName:"Per favor selecciona una {label}.",match:"Aquest camp necessita coincidir amb el camp {matchName}",startDate:"la data de inici",endDate:"la data de fi",currendDate:"la data actual",afterDate:"La data deu ser igual o posterior a {label}.",beforeDate:"La data deu ser igual o anterior a {label}.",startMonth:"Per favor selecciona un mes dÂ´orige",sameMonth:"Aquestes dos dates deuen estar dins del mateix mes - deus canviar una o altra."});
(function(){var a=function(e,d,c,b){if(e==1){return d;}else{if(e==2||e==3||e==4){return c;}else{return b;}}};Locale.define("cs-CZ","Date",{months:["Leden","Ãšnor","BÅ™ezen","Duben","KvÄ›ten","ÄŒerven","ÄŒervenec","Srpen","ZÃ¡Å™Ã­","Å˜Ã­jen","Listopad","Prosinec"],months_abbr:["ledna","Ãºnora","bÅ™ezna","dubna","kvÄ›tna","Äervna","Äervence","srpna","zÃ¡Å™Ã­","Å™Ã­jna","listopadu","prosince"],days:["NedÄ›le","PondÄ›lÃ­","ÃšterÃ½","StÅ™eda","ÄŒtvrtek","PÃ¡tek","Sobota"],days_abbr:["ne","po","Ãºt","st","Ät","pÃ¡","so"],dateOrder:["date","month","year"],shortDate:"%d.%m.%Y",shortTime:"%H:%M",AM:"dop.",PM:"odp.",firstDayOfWeek:1,ordinal:".",lessThanMinuteAgo:"pÅ™ed chvÃ­lÃ­",minuteAgo:"pÅ™ibliÅ¾nÄ› pÅ™ed minutou",minutesAgo:function(b){return"pÅ™ed {delta} "+a(b,"minutou","minutami","minutami");
},hourAgo:"pÅ™ibliÅ¾nÄ› pÅ™ed hodinou",hoursAgo:function(b){return"pÅ™ed {delta} "+a(b,"hodinou","hodinami","hodinami");},dayAgo:"pÅ™ed dnem",daysAgo:function(b){return"pÅ™ed {delta} "+a(b,"dnem","dny","dny");
},weekAgo:"pÅ™ed tÃ½dnem",weeksAgo:function(b){return"pÅ™ed {delta} "+a(b,"tÃ½dnem","tÃ½dny","tÃ½dny");},monthAgo:"pÅ™ed mÄ›sÃ­cem",monthsAgo:function(b){return"pÅ™ed {delta} "+a(b,"mÄ›sÃ­cem","mÄ›sÃ­ci","mÄ›sÃ­ci");
},yearAgo:"pÅ™ed rokem",yearsAgo:function(b){return"pÅ™ed {delta} "+a(b,"rokem","lety","lety");},lessThanMinuteUntil:"za chvÃ­li",minuteUntil:"pÅ™ibliÅ¾nÄ› za minutu",minutesUntil:function(b){return"za {delta} "+a(b,"minutu","minuty","minut");
},hourUntil:"pÅ™ibliÅ¾nÄ› za hodinu",hoursUntil:function(b){return"za {delta} "+a(b,"hodinu","hodiny","hodin");},dayUntil:"za den",daysUntil:function(b){return"za {delta} "+a(b,"den","dny","dnÅ¯");
},weekUntil:"za tÃ½den",weeksUntil:function(b){return"za {delta} "+a(b,"tÃ½den","tÃ½dny","tÃ½dnÅ¯");},monthUntil:"za mÄ›sÃ­c",monthsUntil:function(b){return"za {delta} "+a(b,"mÄ›sÃ­c","mÄ›sÃ­ce","mÄ›sÃ­cÅ¯");
},yearUntil:"za rok",yearsUntil:function(b){return"za {delta} "+a(b,"rok","roky","let");}});})();Locale.define("cs-CZ","FormValidator",{required:"Tato poloÅ¾ka je povinnÃ¡.",minLength:"Zadejte prosÃ­m alespoÅˆ {minLength} znakÅ¯ (napsÃ¡no {length} znakÅ¯).",maxLength:"Zadejte prosÃ­m mÃ©nÄ› neÅ¾ {maxLength} znakÅ¯ (nÃ¡psÃ¡no {length} znakÅ¯).",integer:"Zadejte prosÃ­m celÃ© ÄÃ­slo. DesetinnÃ¡ ÄÃ­sla (napÅ™. 1.25) nejsou povolena.",numeric:'Zadejte jen ÄÃ­selnÃ© hodnoty (tj. "1" nebo "1.1" nebo "-1" nebo "-1.1").',digits:"Zadejte prosÃ­m pouze ÄÃ­sla a interpunkÄnÃ­ znamÃ©nka(napÅ™Ã­klad telefonnÃ­ ÄÃ­slo s pomlÄkami nebo teÄkami je povoleno).",alpha:"Zadejte prosÃ­m pouze pÃ­smena (a-z). Mezery nebo jinÃ© znaky nejsou povoleny.",alphanum:"Zadejte prosÃ­m pouze pÃ­smena (a-z) nebo ÄÃ­slice (0-9). Mezery nebo jinÃ© znaky nejsou povoleny.",dateSuchAs:"Zadejte prosÃ­m platnÃ© datum jako {date}",dateInFormatMDY:'Zadejte prosÃ­m platnÃ© datum jako MM / DD / RRRR (tj. "12/31/1999")',email:'Zadejte prosÃ­m platnou e-mailovou adresu. NapÅ™Ã­klad "fred@domain.com".',url:"Zadejte prosÃ­m platnou URL adresu jako http://www.example.com.",currencyDollar:"Zadejte prosÃ­m platnou ÄÃ¡stku. NapÅ™Ã­klad $100.00.",oneRequired:"Zadejte prosÃ­m alespoÅˆ jednu hodnotu pro tyto poloÅ¾ky.",errorPrefix:"Chyba: ",warningPrefix:"UpozornÄ›nÃ­: ",noSpace:"V tÃ©to poloÅ¾ce nejsou povoleny mezery",reqChkByNode:"Nejsou vybrÃ¡ny Å¾Ã¡dnÃ© poloÅ¾ky.",requiredChk:"Tato poloÅ¾ka je vyÅ¾adovÃ¡na.",reqChkByName:"ProsÃ­m vyberte {label}.",match:"Tato poloÅ¾ka se musÃ­ shodovat s poloÅ¾kou {matchName}",startDate:"datum zahÃ¡jenÃ­",endDate:"datum ukonÄenÃ­",currendDate:"aktuÃ¡lnÃ­ datum",afterDate:"Datum by mÄ›lo bÃ½t stejnÃ© nebo vÄ›tÅ¡Ã­ neÅ¾ {label}.",beforeDate:"Datum by mÄ›lo bÃ½t stejnÃ© nebo menÅ¡Ã­ neÅ¾ {label}.",startMonth:"Vyberte poÄÃ¡teÄnÃ­ mÄ›sÃ­c.",sameMonth:"Tyto dva datumy musÃ­ bÃ½t ve stejnÃ©m mÄ›sÃ­ci - zmÄ›Åˆte jeden z nich.",creditcard:"ZadanÃ© ÄÃ­slo kreditnÃ­ karty je neplatnÃ©. ProsÃ­m opravte ho. Bylo zadÃ¡no {length} ÄÃ­sel."});
Locale.define("da-DK","Date",{months:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],months_abbr:["jan.","feb.","mar.","apr.","maj.","jun.","jul.","aug.","sep.","okt.","nov.","dec."],days:["SÃ¸ndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","LÃ¸rdag"],days_abbr:["sÃ¸n","man","tir","ons","tor","fre","lÃ¸r"],dateOrder:["date","month","year"],shortDate:"%d-%m-%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:".",lessThanMinuteAgo:"mindre end et minut siden",minuteAgo:"omkring et minut siden",minutesAgo:"{delta} minutter siden",hourAgo:"omkring en time siden",hoursAgo:"omkring {delta} timer siden",dayAgo:"1 dag siden",daysAgo:"{delta} dage siden",weekAgo:"1 uge siden",weeksAgo:"{delta} uger siden",monthAgo:"1 mÃ¥ned siden",monthsAgo:"{delta} mÃ¥neder siden",yearAgo:"1 Ã¥r siden",yearsAgo:"{delta} Ã¥r siden",lessThanMinuteUntil:"mindre end et minut fra nu",minuteUntil:"omkring et minut fra nu",minutesUntil:"{delta} minutter fra nu",hourUntil:"omkring en time fra nu",hoursUntil:"omkring {delta} timer fra nu",dayUntil:"1 dag fra nu",daysUntil:"{delta} dage fra nu",weekUntil:"1 uge fra nu",weeksUntil:"{delta} uger fra nu",monthUntil:"1 mÃ¥ned fra nu",monthsUntil:"{delta} mÃ¥neder fra nu",yearUntil:"1 Ã¥r fra nu",yearsUntil:"{delta} Ã¥r fra nu"});
Locale.define("da-DK","FormValidator",{required:"Feltet skal udfyldes.",minLength:"Skriv mindst {minLength} tegn (du skrev {length} tegn).",maxLength:"Skriv maksimalt {maxLength} tegn (du skrev {length} tegn).",integer:"Skriv et tal i dette felt. Decimal tal (f.eks. 1.25) er ikke tilladt.",numeric:'Skriv kun tal i dette felt (i.e. "1" eller "1.1" eller "-1" eller "-1.1").',digits:"Skriv kun tal og tegnsÃ¦tning i dette felt (eksempel, et telefon nummer med bindestreg eller punktum er tilladt).",alpha:"Skriv kun bogstaver (a-z) i dette felt. Mellemrum og andre tegn er ikke tilladt.",alphanum:"Skriv kun bogstaver (a-z) eller tal (0-9) i dette felt. Mellemrum og andre tegn er ikke tilladt.",dateSuchAs:"Skriv en gyldig dato som {date}",dateInFormatMDY:'Skriv dato i formatet DD-MM-YYYY (f.eks. "31-12-1999")',email:'Skriv en gyldig e-mail adresse. F.eks "fred@domain.com".',url:'Skriv en gyldig URL adresse. F.eks "http://www.example.com".',currencyDollar:"Skriv et gldigt belÃ¸b. F.eks Kr.100.00 .",oneRequired:"Et eller flere af felterne i denne formular skal udfyldes.",errorPrefix:"Fejl: ",warningPrefix:"Advarsel: ",noSpace:"Der mÃ¥ ikke benyttes mellemrum i dette felt.",reqChkByNode:"Foretag et valg.",requiredChk:"Dette felt skal udfyldes.",reqChkByName:"VÃ¦lg en {label}.",match:"Dette felt skal matche {matchName} feltet",startDate:"start dato",endDate:"slut dato",currendDate:"dags dato",afterDate:"Datoen skal vÃ¦re stÃ¸rre end eller lig med {label}.",beforeDate:"Datoen skal vÃ¦re mindre end eller lig med {label}.",startMonth:"VÃ¦lg en start mÃ¥ned",sameMonth:"De valgte datoer skal vÃ¦re i samme mÃ¥ned - skift en af dem."});
Locale.define("de-DE","Date",{months:["Januar","Februar","MÃ¤rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],months_abbr:["Jan","Feb","MÃ¤r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],days_abbr:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],dateOrder:["date","month","year"],shortDate:"%d.%m.%Y",shortTime:"%H:%M",AM:"vormittags",PM:"nachmittags",firstDayOfWeek:1,ordinal:".",lessThanMinuteAgo:"vor weniger als einer Minute",minuteAgo:"vor einer Minute",minutesAgo:"vor {delta} Minuten",hourAgo:"vor einer Stunde",hoursAgo:"vor {delta} Stunden",dayAgo:"vor einem Tag",daysAgo:"vor {delta} Tagen",weekAgo:"vor einer Woche",weeksAgo:"vor {delta} Wochen",monthAgo:"vor einem Monat",monthsAgo:"vor {delta} Monaten",yearAgo:"vor einem Jahr",yearsAgo:"vor {delta} Jahren",lessThanMinuteUntil:"in weniger als einer Minute",minuteUntil:"in einer Minute",minutesUntil:"in {delta} Minuten",hourUntil:"in ca. einer Stunde",hoursUntil:"in ca. {delta} Stunden",dayUntil:"in einem Tag",daysUntil:"in {delta} Tagen",weekUntil:"in einer Woche",weeksUntil:"in {delta} Wochen",monthUntil:"in einem Monat",monthsUntil:"in {delta} Monaten",yearUntil:"in einem Jahr",yearsUntil:"in {delta} Jahren"});
Locale.define("de-CH").inherit("de-DE","Date");Locale.define("de-CH","FormValidator",{required:"Dieses Feld ist obligatorisch.",minLength:"Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).",maxLength:"Bitte geben Sie nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).",integer:"Geben Sie bitte eine ganze Zahl ein. Dezimalzahlen (z.B. 1.25) sind nicht erlaubt.",numeric:"Geben Sie bitte nur Zahlenwerte in dieses Eingabefeld ein (z.B. &quot;1&quot;, &quot;1.1&quot;, &quot;-1&quot; oder &quot;-1.1&quot;).",digits:"Benutzen Sie bitte nur Zahlen und Satzzeichen in diesem Eingabefeld (erlaubt ist z.B. eine Telefonnummer mit Bindestrichen und Punkten).",alpha:"Benutzen Sie bitte nur Buchstaben (a-z) in diesem Feld. Leerzeichen und andere Zeichen sind nicht erlaubt.",alphanum:"Benutzen Sie bitte nur Buchstaben (a-z) und Zahlen (0-9) in diesem Eingabefeld. Leerzeichen und andere Zeichen sind nicht erlaubt.",dateSuchAs:"Geben Sie bitte ein g&uuml;ltiges Datum ein. Wie zum Beispiel {date}",dateInFormatMDY:"Geben Sie bitte ein g&uuml;ltiges Datum ein. Wie zum Beispiel TT.MM.JJJJ (z.B. &quot;31.12.1999&quot;)",email:"Geben Sie bitte eine g&uuml;ltige E-Mail Adresse ein. Wie zum Beispiel &quot;maria@bernasconi.ch&quot;.",url:"Geben Sie bitte eine g&uuml;ltige URL ein. Wie zum Beispiel http://www.example.com.",currencyDollar:"Geben Sie bitte einen g&uuml;ltigen Betrag in Schweizer Franken ein. Wie zum Beispiel 100.00 CHF .",oneRequired:"Machen Sie f&uuml;r mindestens eines der Eingabefelder einen Eintrag.",errorPrefix:"Fehler: ",warningPrefix:"Warnung: ",noSpace:"In diesem Eingabefeld darf kein Leerzeichen sein.",reqChkByNode:"Es wurden keine Elemente gew&auml;hlt.",requiredChk:"Dieses Feld ist obligatorisch.",reqChkByName:"Bitte w&auml;hlen Sie ein {label}.",match:"Dieses Eingabefeld muss mit dem Feld {matchName} &uuml;bereinstimmen.",startDate:"Das Anfangsdatum",endDate:"Das Enddatum",currendDate:"Das aktuelle Datum",afterDate:"Das Datum sollte zur gleichen Zeit oder sp&auml;ter sein {label}.",beforeDate:"Das Datum sollte zur gleichen Zeit oder fr&uuml;her sein {label}.",startMonth:"W&auml;hlen Sie bitte einen Anfangsmonat",sameMonth:"Diese zwei Datumsangaben m&uuml;ssen im selben Monat sein - Sie m&uuml;ssen eine von beiden ver&auml;ndern.",creditcard:"Die eingegebene Kreditkartennummer ist ung&uuml;ltig. Bitte &uuml;berpr&uuml;fen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben."});
Locale.define("de-DE","FormValidator",{required:"Dieses Eingabefeld muss ausgefÃ¼llt werden.",minLength:"Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben nur {length} Zeichen eingegeben).",maxLength:"Geben Sie bitte nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).",integer:'Geben Sie in diesem Eingabefeld bitte eine ganze Zahl ein. Dezimalzahlen (z.B. "1.25") sind nicht erlaubt.',numeric:'Geben Sie in diesem Eingabefeld bitte nur Zahlenwerte (z.B. "1", "1.1", "-1" oder "-1.1") ein.',digits:"Geben Sie in diesem Eingabefeld bitte nur Zahlen und Satzzeichen ein (z.B. eine Telefonnummer mit Bindestrichen und Punkten ist erlaubt).",alpha:"Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) ein. Leerzeichen und andere Zeichen sind nicht erlaubt.",alphanum:"Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) und Zahlen (0-9) ein. Leerzeichen oder andere Zeichen sind nicht erlaubt.",dateSuchAs:'Geben Sie bitte ein gÃ¼ltiges Datum ein (z.B. "{date}").',dateInFormatMDY:'Geben Sie bitte ein gÃ¼ltiges Datum im Format TT.MM.JJJJ ein (z.B. "31.12.1999").',email:'Geben Sie bitte eine gÃ¼ltige E-Mail-Adresse ein (z.B. "max@mustermann.de").',url:'Geben Sie bitte eine gÃ¼ltige URL ein (z.B. "http://www.example.com").',currencyDollar:"Geben Sie bitte einen gÃ¼ltigen Betrag in EURO ein (z.B. 100.00â‚¬).",oneRequired:"Bitte fÃ¼llen Sie mindestens ein Eingabefeld aus.",errorPrefix:"Fehler: ",warningPrefix:"Warnung: ",noSpace:"Es darf kein Leerzeichen in diesem Eingabefeld sein.",reqChkByNode:"Es wurden keine Elemente gewÃ¤hlt.",requiredChk:"Dieses Feld muss ausgefÃ¼llt werden.",reqChkByName:"Bitte wÃ¤hlen Sie ein {label}.",match:"Dieses Eingabefeld muss mit dem {matchName} Eingabefeld Ã¼bereinstimmen.",startDate:"Das Anfangsdatum",endDate:"Das Enddatum",currendDate:"Das aktuelle Datum",afterDate:"Das Datum sollte zur gleichen Zeit oder spÃ¤ter sein als {label}.",beforeDate:"Das Datum sollte zur gleichen Zeit oder frÃ¼her sein als {label}.",startMonth:"WÃ¤hlen Sie bitte einen Anfangsmonat",sameMonth:"Diese zwei Datumsangaben mÃ¼ssen im selben Monat sein - Sie mÃ¼ssen eines von beiden verÃ¤ndern.",creditcard:"Die eingegebene Kreditkartennummer ist ungÃ¼ltig. Bitte Ã¼berprÃ¼fen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben."});
Locale.define("EU","Number",{decimal:",",group:".",currency:{prefix:"â‚¬ "}});Locale.define("de-DE").inherit("EU","Number");Locale.define("en-GB","Date",{dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M"}).inherit("en-US","Date");
Locale.define("es-ES","Date",{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],months_abbr:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],days:["Domingo","Lunes","Martes","MiÃ©rcoles","Jueves","Viernes","SÃ¡bado"],days_abbr:["dom","lun","mar","miÃ©","juv","vie","sÃ¡b"],dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"",lessThanMinuteAgo:"hace menos de un minuto",minuteAgo:"hace un minuto",minutesAgo:"hace {delta} minutos",hourAgo:"hace una hora",hoursAgo:"hace unas {delta} horas",dayAgo:"hace un dÃ­a",daysAgo:"hace {delta} dÃ­as",weekAgo:"hace una semana",weeksAgo:"hace unas {delta} semanas",monthAgo:"hace un mes",monthsAgo:"hace {delta} meses",yearAgo:"hace un aÃ±o",yearsAgo:"hace {delta} aÃ±os",lessThanMinuteUntil:"menos de un minuto desde ahora",minuteUntil:"un minuto desde ahora",minutesUntil:"{delta} minutos desde ahora",hourUntil:"una hora desde ahora",hoursUntil:"unas {delta} horas desde ahora",dayUntil:"un dÃ­a desde ahora",daysUntil:"{delta} dÃ­as desde ahora",weekUntil:"una semana desde ahora",weeksUntil:"unas {delta} semanas desde ahora",monthUntil:"un mes desde ahora",monthsUntil:"{delta} meses desde ahora",yearUntil:"un aÃ±o desde ahora",yearsUntil:"{delta} aÃ±os desde ahora"});
Locale.define("es-AR").inherit("es-ES","Date");Locale.define("es-AR","FormValidator",{required:"Este campo es obligatorio.",minLength:"Por favor ingrese al menos {minLength} caracteres (ha ingresado {length} caracteres).",maxLength:"Por favor no ingrese mÃ¡s de {maxLength} caracteres (ha ingresado {length} caracteres).",integer:"Por favor ingrese un nÃºmero entero en este campo. NÃºmeros con decimales (p.e. 1,25) no se permiten.",numeric:'Por favor ingrese solo valores numÃ©ricos en este campo (p.e. "1" o "1,1" o "-1" o "-1,1").',digits:"Por favor use sÃ³lo nÃºmeros y puntuaciÃ³n en este campo (por ejemplo, un nÃºmero de telÃ©fono con guiones y/o puntos no estÃ¡ permitido).",alpha:"Por favor use sÃ³lo letras (a-z) en este campo. No se permiten espacios ni otros caracteres.",alphanum:"Por favor, usa sÃ³lo letras (a-z) o nÃºmeros (0-9) en este campo. No se permiten espacios u otros caracteres.",dateSuchAs:"Por favor ingrese una fecha vÃ¡lida como {date}",dateInFormatMDY:'Por favor ingrese una fecha vÃ¡lida, utulizando el formato DD/MM/YYYY (p.e. "31/12/1999")',email:'Por favor, ingrese una direcciÃ³n de e-mail vÃ¡lida. Por ejemplo, "fred@dominio.com".',url:"Por favor ingrese una URL vÃ¡lida como http://www.example.com.",currencyDollar:"Por favor ingrese una cantidad vÃ¡lida de pesos. Por ejemplo $100,00 .",oneRequired:"Por favor ingrese algo para por lo menos una de estas entradas.",errorPrefix:"Error: ",warningPrefix:"Advertencia: ",noSpace:"No se permiten espacios en este campo.",reqChkByNode:"No hay elementos seleccionados.",requiredChk:"Este campo es obligatorio.",reqChkByName:"Por favor selecciona una {label}.",match:"Este campo necesita coincidir con el campo {matchName}",startDate:"la fecha de inicio",endDate:"la fecha de fin",currendDate:"la fecha actual",afterDate:"La fecha debe ser igual o posterior a {label}.",beforeDate:"La fecha debe ser igual o anterior a {label}.",startMonth:"Por favor selecciona un mes de origen",sameMonth:"Estas dos fechas deben estar en el mismo mes - debes cambiar una u otra."});
Locale.define("es-ES","FormValidator",{required:"Este campo es obligatorio.",minLength:"Por favor introduce al menos {minLength} caracteres (has introducido {length} caracteres).",maxLength:"Por favor introduce no m&aacute;s de {maxLength} caracteres (has introducido {length} caracteres).",integer:"Por favor introduce un n&uacute;mero entero en este campo. N&uacute;meros con decimales (p.e. 1,25) no se permiten.",numeric:'Por favor introduce solo valores num&eacute;ricos en este campo (p.e. "1" o "1,1" o "-1" o "-1,1").',digits:"Por favor usa solo n&uacute;meros y puntuaci&oacute;n en este campo (por ejemplo, un n&uacute;mero de tel&eacute;fono con guiones y puntos no esta permitido).",alpha:"Por favor usa letras solo (a-z) en este campo. No se admiten espacios ni otros caracteres.",alphanum:"Por favor, usa solo letras (a-z) o n&uacute;meros (0-9) en este campo. No se admiten espacios ni otros caracteres.",dateSuchAs:"Por favor introduce una fecha v&aacute;lida como {date}",dateInFormatMDY:'Por favor introduce una fecha v&aacute;lida como DD/MM/YYYY (p.e. "31/12/1999")',email:'Por favor, introduce una direcci&oacute;n de email v&aacute;lida. Por ejemplo, "fred@domain.com".',url:"Por favor introduce una URL v&aacute;lida como http://www.example.com.",currencyDollar:"Por favor introduce una cantidad v&aacute;lida de â‚¬. Por ejemplo â‚¬100,00 .",oneRequired:"Por favor introduce algo para por lo menos una de estas entradas.",errorPrefix:"Error: ",warningPrefix:"Aviso: ",noSpace:"No pueden haber espacios en esta entrada.",reqChkByNode:"No hay elementos seleccionados.",requiredChk:"Este campo es obligatorio.",reqChkByName:"Por favor selecciona una {label}.",match:"Este campo necesita coincidir con el campo {matchName}",startDate:"la fecha de inicio",endDate:"la fecha de fin",currendDate:"la fecha actual",afterDate:"La fecha debe ser igual o posterior a {label}.",beforeDate:"La fecha debe ser igual o anterior a {label}.",startMonth:"Por favor selecciona un mes de origen",sameMonth:"Estas dos fechas deben estar en el mismo mes - debes cambiar una u otra."});
Locale.define("et-EE","Date",{months:["jaanuar","veebruar","mÃ¤rts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"],months_abbr:["jaan","veebr","mÃ¤rts","apr","mai","juuni","juuli","aug","sept","okt","nov","dets"],days:["pÃ¼hapÃ¤ev","esmaspÃ¤ev","teisipÃ¤ev","kolmapÃ¤ev","neljapÃ¤ev","reede","laupÃ¤ev"],days_abbr:["pÃ¼hap","esmasp","teisip","kolmap","neljap","reede","laup"],dateOrder:["month","date","year"],shortDate:"%m.%d.%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"",lessThanMinuteAgo:"vÃ¤hem kui minut aega tagasi",minuteAgo:"umbes minut aega tagasi",minutesAgo:"{delta} minutit tagasi",hourAgo:"umbes tund aega tagasi",hoursAgo:"umbes {delta} tundi tagasi",dayAgo:"1 pÃ¤ev tagasi",daysAgo:"{delta} pÃ¤eva tagasi",weekAgo:"1 nÃ¤dal tagasi",weeksAgo:"{delta} nÃ¤dalat tagasi",monthAgo:"1 kuu tagasi",monthsAgo:"{delta} kuud tagasi",yearAgo:"1 aasta tagasi",yearsAgo:"{delta} aastat tagasi",lessThanMinuteUntil:"vÃ¤hem kui minuti aja pÃ¤rast",minuteUntil:"umbes minuti aja pÃ¤rast",minutesUntil:"{delta} minuti pÃ¤rast",hourUntil:"umbes tunni aja pÃ¤rast",hoursUntil:"umbes {delta} tunni pÃ¤rast",dayUntil:"1 pÃ¤eva pÃ¤rast",daysUntil:"{delta} pÃ¤eva pÃ¤rast",weekUntil:"1 nÃ¤dala pÃ¤rast",weeksUntil:"{delta} nÃ¤dala pÃ¤rast",monthUntil:"1 kuu pÃ¤rast",monthsUntil:"{delta} kuu pÃ¤rast",yearUntil:"1 aasta pÃ¤rast",yearsUntil:"{delta} aasta pÃ¤rast"});
Locale.define("et-EE","FormValidator",{required:"VÃ¤li peab olema tÃ¤idetud.",minLength:"Palun sisestage vÃ¤hemalt {minLength} tÃ¤hte (te sisestasite {length} tÃ¤hte).",maxLength:"Palun Ã¤rge sisestage rohkem kui {maxLength} tÃ¤hte (te sisestasite {length} tÃ¤hte).",integer:"Palun sisestage vÃ¤ljale tÃ¤isarv. KÃ¼mnendarvud (nÃ¤iteks 1.25) ei ole lubatud.",numeric:'Palun sisestage ainult numbreid vÃ¤ljale (nÃ¤iteks "1", "1.1", "-1" vÃµi "-1.1").',digits:"Palun kasutage ainult numbreid ja kirjavahemÃ¤rke (telefoninumbri sisestamisel on lubatud kasutada kriipse ja punkte).",alpha:"Palun kasutage ainult tÃ¤hti (a-z). TÃ¼hikud ja teised sÃ¼mbolid on keelatud.",alphanum:"Palun kasutage ainult tÃ¤hti (a-z) vÃµi numbreid (0-9). TÃ¼hikud ja teised sÃ¼mbolid on keelatud.",dateSuchAs:"Palun sisestage kehtiv kuupÃ¤ev kujul {date}",dateInFormatMDY:'Palun sisestage kehtiv kuupÃ¤ev kujul MM.DD.YYYY (nÃ¤iteks: "12.31.1999").',email:'Palun sisestage kehtiv e-maili aadress (nÃ¤iteks: "fred@domain.com").',url:"Palun sisestage kehtiv URL (nÃ¤iteks: http://www.example.com).",currencyDollar:"Palun sisestage kehtiv $ summa (nÃ¤iteks: $100.00).",oneRequired:"Palun sisestage midagi vÃ¤hemalt Ã¼hele antud vÃ¤ljadest.",errorPrefix:"Viga: ",warningPrefix:"Hoiatus: ",noSpace:"VÃ¤li ei tohi sisaldada tÃ¼hikuid.",reqChkByNode:"Ãœkski vÃ¤ljadest pole valitud.",requiredChk:"VÃ¤lja tÃ¤itmine on vajalik.",reqChkByName:"Palun valige Ã¼ks {label}.",match:"VÃ¤li peab sobima {matchName} vÃ¤ljaga",startDate:"algkuupÃ¤ev",endDate:"lÃµppkuupÃ¤ev",currendDate:"praegune kuupÃ¤ev",afterDate:"KuupÃ¤ev peab olema vÃµrdne vÃµi pÃ¤rast {label}.",beforeDate:"KuupÃ¤ev peab olema vÃµrdne vÃµi enne {label}.",startMonth:"Palun valige algkuupÃ¤ev.",sameMonth:"Antud kaks kuupÃ¤eva peavad olema samas kuus - peate muutma Ã¼hte kuupÃ¤eva."});
Locale.define("fa","Date",{months:["Ú˜Ø§Ù†ÙˆÛŒÙ‡","ÙÙˆØ±ÛŒÙ‡","Ù…Ø§Ø±Ø³","Ø¢Ù¾Ø±ÛŒÙ„","Ù…Ù‡","Ú˜ÙˆØ¦Ù†","Ú˜ÙˆØ¦ÛŒÙ‡","Ø¢Ú¯ÙˆØ³Øª","Ø³Ù¾ØªØ§Ù…Ø¨Ø±","Ø§Ú©ØªØ¨Ø±","Ù†ÙˆØ§Ù…Ø¨Ø±","Ø¯Ø³Ø§Ù…Ø¨Ø±"],months_abbr:["1","2","3","4","5","6","7","8","9","10","11","12"],days:["ÛŒÚ©Ø´Ù†Ø¨Ù‡","Ø¯ÙˆØ´Ù†Ø¨Ù‡","Ø³Ù‡ Ø´Ù†Ø¨Ù‡","Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡","Ù¾Ù†Ø¬Ø´Ù†Ø¨Ù‡","Ø¬Ù…Ø¹Ù‡","Ø´Ù†Ø¨Ù‡"],days_abbr:["ÙŠ","Ø¯","Ø³","Ú†","Ù¾","Ø¬","Ø´"],dateOrder:["month","date","year"],shortDate:"%m/%d/%Y",shortTime:"%I:%M%p",AM:"Ù‚.Ø¸",PM:"Ø¨.Ø¸",ordinal:"Ø§Ù…",lessThanMinuteAgo:"Ú©Ù…ØªØ± Ø§Ø² ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡ Ù¾ÛŒØ´",minuteAgo:"Ø­Ø¯ÙˆØ¯ ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡ Ù¾ÛŒØ´",minutesAgo:"{delta} Ø¯Ù‚ÛŒÙ‚Ù‡ Ù¾ÛŒØ´",hourAgo:"Ø­Ø¯ÙˆØ¯ ÛŒÚ© Ø³Ø§Ø¹Øª Ù¾ÛŒØ´",hoursAgo:"Ø­Ø¯ÙˆØ¯ {delta} Ø³Ø§Ø¹Øª Ù¾ÛŒØ´",dayAgo:"1 Ø±ÙˆØ² Ù¾ÛŒØ´",daysAgo:"{delta} Ø±ÙˆØ² Ù¾ÛŒØ´",weekAgo:"1 Ù‡ÙØªÙ‡ Ù¾ÛŒØ´",weeksAgo:"{delta} Ù‡ÙØªÙ‡ Ù¾ÛŒØ´",monthAgo:"1 Ù…Ø§Ù‡ Ù¾ÛŒØ´",monthsAgo:"{delta} Ù…Ø§Ù‡ Ù¾ÛŒØ´",yearAgo:"1 Ø³Ø§Ù„ Ù¾ÛŒØ´",yearsAgo:"{delta} Ø³Ø§Ù„ Ù¾ÛŒØ´",lessThanMinuteUntil:"Ú©Ù…ØªØ± Ø§Ø² ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡ Ø§Ø² Ø­Ø§Ù„Ø§",minuteUntil:"Ø­Ø¯ÙˆØ¯ ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡ Ø§Ø² Ø­Ø§Ù„Ø§",minutesUntil:"{delta} Ø¯Ù‚ÛŒÙ‚Ù‡ Ø§Ø² Ø­Ø§Ù„Ø§",hourUntil:"Ø­Ø¯ÙˆØ¯ ÛŒÚ© Ø³Ø§Ø¹Øª Ø§Ø² Ø­Ø§Ù„Ø§",hoursUntil:"Ø­Ø¯ÙˆØ¯ {delta} Ø³Ø§Ø¹Øª Ø§Ø² Ø­Ø§Ù„Ø§",dayUntil:"1 Ø±ÙˆØ² Ø§Ø² Ø­Ø§Ù„Ø§",daysUntil:"{delta} Ø±ÙˆØ² Ø§Ø² Ø­Ø§Ù„Ø§",weekUntil:"1 Ù‡ÙØªÙ‡ Ø§Ø² Ø­Ø§Ù„Ø§",weeksUntil:"{delta} Ù‡ÙØªÙ‡ Ø§Ø² Ø­Ø§Ù„Ø§",monthUntil:"1 Ù…Ø§Ù‡ Ø§Ø² Ø­Ø§Ù„Ø§",monthsUntil:"{delta} Ù…Ø§Ù‡ Ø§Ø² Ø­Ø§Ù„Ø§",yearUntil:"1 Ø³Ø§Ù„ Ø§Ø² Ø­Ø§Ù„Ø§",yearsUntil:"{delta} Ø³Ø§Ù„ Ø§Ø² Ø­Ø§Ù„Ø§"});
Locale.define("fa","FormValidator",{required:"Ø§ÛŒÙ† ÙÛŒÙ„Ø¯ Ø§Ù„Ø²Ø§Ù…ÛŒ Ø§Ø³Øª.",minLength:"Ø´Ù…Ø§ Ø¨Ø§ÛŒØ¯ Ø­Ø¯Ø§Ù‚Ù„ {minLength} Ø­Ø±Ù ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯ ({length} Ø­Ø±Ù ÙˆØ§Ø±Ø¯ Ú©Ø±Ø¯Ù‡ Ø§ÛŒØ¯).",maxLength:"Ù„Ø·ÙØ§ Ø­Ø¯Ø§Ú©Ø«Ø± {maxLength} Ø­Ø±Ù ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯ (Ø´Ù…Ø§ {length} Ø­Ø±Ù ÙˆØ§Ø±Ø¯ Ú©Ø±Ø¯Ù‡ Ø§ÛŒØ¯).",integer:"Ù„Ø·ÙØ§ Ø§Ø² Ø¹Ø¯Ø¯ ØµØ­ÛŒØ­ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯. Ø§Ø¹Ø¯Ø§Ø¯ Ø§Ø¹Ø´Ø§Ø±ÛŒ (Ù…Ø§Ù†Ù†Ø¯ 1.25) Ù…Ø¬Ø§Ø² Ù†ÛŒØ³ØªÙ†Ø¯.",numeric:'Ù„Ø·ÙØ§ ÙÙ‚Ø· Ø¯Ø§Ø¯Ù‡ Ø¹Ø¯Ø¯ÛŒ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯ (Ù…Ø§Ù†Ù†Ø¯ "1" ÛŒØ§ "1.1" ÛŒØ§ "1-" ÛŒØ§ "1.1-").',digits:"Ù„Ø·ÙØ§ ÙÙ‚Ø· Ø§Ø² Ø§Ø¹Ø¯Ø§Ø¯ Ùˆ Ø¹Ù„Ø§Ù…ØªÙ‡Ø§ Ø¯Ø± Ø§ÛŒÙ† ÙÛŒÙ„Ø¯ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯ (Ø¨Ø±Ø§ÛŒ Ù…Ø«Ø§Ù„ Ø´Ù…Ø§Ø±Ù‡ ØªÙ„ÙÙ† Ø¨Ø§ Ø®Ø· ØªÛŒØ±Ù‡ Ùˆ Ù†Ù‚Ø·Ù‡ Ù‚Ø§Ø¨Ù„ Ù‚Ø¨ÙˆÙ„ Ø§Ø³Øª).",alpha:"Ù„Ø·ÙØ§ ÙÙ‚Ø· Ø§Ø² Ø­Ø±ÙˆÙ Ø§Ù„ÙØ¨Ø§Ø¡ Ø¨Ø±Ø§ÛŒ Ø§ÛŒÙ† Ø¨Ø®Ø´ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯. Ú©Ø§Ø±Ø§Ú©ØªØ±Ù‡Ø§ÛŒ Ø¯ÛŒÚ¯Ø± Ùˆ ÙØ§ØµÙ„Ù‡ Ù…Ø¬Ø§Ø² Ù†ÛŒØ³ØªÙ†Ø¯.",alphanum:"Ù„Ø·ÙØ§ ÙÙ‚Ø· Ø§Ø² Ø­Ø±ÙˆÙ Ø§Ù„ÙØ¨Ø§Ø¡ Ùˆ Ø§Ø¹Ø¯Ø§Ø¯ Ø¯Ø± Ø§ÛŒÙ† Ø¨Ø®Ø´ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ú©Ù†ÛŒØ¯. Ú©Ø§Ø±Ø§Ú©ØªØ±Ù‡Ø§ÛŒ Ø¯ÛŒÚ¯Ø± Ùˆ ÙØ§ØµÙ„Ù‡ Ù…Ø¬Ø§Ø² Ù†ÛŒØ³ØªÙ†Ø¯.",dateSuchAs:"Ù„Ø·ÙØ§ ÛŒÚ© ØªØ§Ø±ÛŒØ® Ù…Ø¹ØªØ¨Ø± Ù…Ø§Ù†Ù†Ø¯ {date} ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯.",dateInFormatMDY:'Ù„Ø·ÙØ§ ÛŒÚ© ØªØ§Ø±ÛŒØ® Ù…Ø¹ØªØ¨Ø± Ø¨Ù‡ Ø´Ú©Ù„ MM/DD/YYYY ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯ (Ù…Ø§Ù†Ù†Ø¯ "12/31/1999").',email:'Ù„Ø·ÙØ§ ÛŒÚ© Ø¢Ø¯Ø±Ø³ Ø§ÛŒÙ…ÛŒÙ„ Ù…Ø¹ØªØ¨Ø± ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯. Ø¨Ø±Ø§ÛŒ Ù…Ø«Ø§Ù„ "fred@domain.com".',url:"Ù„Ø·ÙØ§ ÛŒÚ© URL Ù…Ø¹ØªØ¨Ø± Ù…Ø§Ù†Ù†Ø¯ http://www.example.com ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯.",currencyDollar:"Ù„Ø·ÙØ§ ÛŒÚ© Ù…Ø­Ø¯ÙˆØ¯Ù‡ Ù…Ø¹ØªØ¨Ø± Ø¨Ø±Ø§ÛŒ Ø§ÛŒÙ† Ø¨Ø®Ø´ ÙˆØ§Ø±Ø¯ Ú©Ù†ÛŒØ¯ Ù…Ø§Ù†Ù†Ø¯ 100.00$ .",oneRequired:"Ù„Ø·ÙØ§ Ø­Ø¯Ø§Ù‚Ù„ ÛŒÚ©ÛŒ Ø§Ø² ÙÛŒÙ„Ø¯Ù‡Ø§ Ø±Ø§ Ù¾Ø± Ú©Ù†ÛŒØ¯.",errorPrefix:"Ø®Ø·Ø§: ",warningPrefix:"Ù‡Ø´Ø¯Ø§Ø±: ",noSpace:"Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² ÙØ§ØµÙ„Ù‡ Ø¯Ø± Ø§ÛŒÙ† Ø¨Ø®Ø´ Ù…Ø¬Ø§Ø² Ù†ÛŒØ³Øª.",reqChkByNode:"Ù…ÙˆØ±Ø¯ÛŒ Ø§Ù†ØªØ®Ø§Ø¨ Ù†Ø´Ø¯Ù‡ Ø§Ø³Øª.",requiredChk:"Ø§ÛŒÙ† ÙÛŒÙ„Ø¯ Ø§Ù„Ø²Ø§Ù…ÛŒ Ø§Ø³Øª.",reqChkByName:"Ù„Ø·ÙØ§ ÛŒÚ© {label} Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯.",match:"Ø§ÛŒÙ† ÙÛŒÙ„Ø¯ Ø¨Ø§ÛŒØ¯ Ø¨Ø§ ÙÛŒÙ„Ø¯ {matchName} Ù…Ø·Ø§Ø¨Ù‚Øª Ø¯Ø§Ø´ØªÙ‡ Ø¨Ø§Ø´Ø¯.",startDate:"ØªØ§Ø±ÛŒØ® Ø´Ø±ÙˆØ¹",endDate:"ØªØ§Ø±ÛŒØ® Ù¾Ø§ÛŒØ§Ù†",currendDate:"ØªØ§Ø±ÛŒØ® Ú©Ù†ÙˆÙ†ÛŒ",afterDate:"ØªØ§Ø±ÛŒØ® Ù…ÛŒØ¨Ø§ÛŒØ³Øª Ø¨Ø±Ø§Ø¨Ø± ÛŒØ§ Ø¨Ø¹Ø¯ Ø§Ø² {label} Ø¨Ø§Ø´Ø¯",beforeDate:"ØªØ§Ø±ÛŒØ® Ù…ÛŒØ¨Ø§ÛŒØ³Øª Ø¨Ø±Ø§Ø¨Ø± ÛŒØ§ Ù‚Ø¨Ù„ Ø§Ø² {label} Ø¨Ø§Ø´Ø¯",startMonth:"Ù„Ø·ÙØ§ Ù…Ø§Ù‡ Ø´Ø±ÙˆØ¹ Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯",sameMonth:"Ø§ÛŒÙ† Ø¯Ùˆ ØªØ§Ø±ÛŒØ® Ø¨Ø§ÛŒØ¯ Ø¯Ø± ÛŒÚ© Ù…Ø§Ù‡ Ø¨Ø§Ø´Ù†Ø¯ - Ø´Ù…Ø§ Ø¨Ø§ÛŒØ¯ ÛŒÚ©ÛŒ ÛŒØ§ Ù‡Ø± Ø¯Ùˆ Ø±Ø§ ØªØºÛŒÛŒØ± Ø¯Ù‡ÛŒØ¯.",creditcard:"Ø´Ù…Ø§Ø±Ù‡ Ú©Ø§Ø±Øª Ø§Ø¹ØªØ¨Ø§Ø±ÛŒ Ú©Ù‡ ÙˆØ§Ø±Ø¯ Ú©Ø±Ø¯Ù‡ Ø§ÛŒØ¯ Ù…Ø¹ØªØ¨Ø± Ù†ÛŒØ³Øª. Ù„Ø·ÙØ§ Ø´Ù…Ø§Ø±Ù‡ Ø±Ø§ Ø¨Ø±Ø±Ø³ÛŒ Ú©Ù†ÛŒØ¯ Ùˆ Ù…Ø¬Ø¯Ø¯Ø§ ØªÙ„Ø§Ø´ Ú©Ù†ÛŒØ¯. {length} Ø±Ù‚Ù… ÙˆØ§Ø±Ø¯ Ø´Ø¯Ù‡ Ø§Ø³Øª."});
Locale.define("fi-FI","Date",{months:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesÃ¤kuu","heinÃ¤kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],months_abbr:["tammik.","helmik.","maalisk.","huhtik.","toukok.","kesÃ¤k.","heinÃ¤k.","elok.","syysk.","lokak.","marrask.","jouluk."],days:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],days_abbr:["su","ma","ti","ke","to","pe","la"],dateOrder:["date","month","year"],shortDate:"%d.%m.%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:".",lessThanMinuteAgo:"vajaa minuutti sitten",minuteAgo:"noin minuutti sitten",minutesAgo:"{delta} minuuttia sitten",hourAgo:"noin tunti sitten",hoursAgo:"noin {delta} tuntia sitten",dayAgo:"pÃ¤ivÃ¤ sitten",daysAgo:"{delta} pÃ¤ivÃ¤Ã¤ sitten",weekAgo:"viikko sitten",weeksAgo:"{delta} viikkoa sitten",monthAgo:"kuukausi sitten",monthsAgo:"{delta} kuukautta sitten",yearAgo:"vuosi sitten",yearsAgo:"{delta} vuotta sitten",lessThanMinuteUntil:"vajaan minuutin kuluttua",minuteUntil:"noin minuutin kuluttua",minutesUntil:"{delta} minuutin kuluttua",hourUntil:"noin tunnin kuluttua",hoursUntil:"noin {delta} tunnin kuluttua",dayUntil:"pÃ¤ivÃ¤n kuluttua",daysUntil:"{delta} pÃ¤ivÃ¤n kuluttua",weekUntil:"viikon kuluttua",weeksUntil:"{delta} viikon kuluttua",monthUntil:"kuukauden kuluttua",monthsUntil:"{delta} kuukauden kuluttua",yearUntil:"vuoden kuluttua",yearsUntil:"{delta} vuoden kuluttua"});
Locale.define("fi-FI","FormValidator",{required:"TÃ¤mÃ¤ kenttÃ¤ on pakollinen.",minLength:"Ole hyvÃ¤ ja anna vÃ¤hintÃ¤Ã¤n {minLength} merkkiÃ¤ (annoit {length} merkkiÃ¤).",maxLength:"Ã„lÃ¤ anna enempÃ¤Ã¤ kuin {maxLength} merkkiÃ¤ (annoit {length} merkkiÃ¤).",integer:"Ole hyvÃ¤ ja anna kokonaisluku. Luvut, joissa on desimaaleja (esim. 1.25) eivÃ¤t ole sallittuja.",numeric:'Anna tÃ¤hÃ¤n kenttÃ¤Ã¤n lukuarvo (kuten "1" tai "1.1" tai "-1" tai "-1.1").',digits:"KÃ¤ytÃ¤ pelkÃ¤stÃ¤Ã¤n numeroita ja vÃ¤limerkkejÃ¤ tÃ¤ssÃ¤ kentÃ¤ssÃ¤ (syÃ¶tteet, kuten esim. puhelinnumero, jossa on vÃ¤liviivoja, pilkkuja tai pisteitÃ¤, kelpaa).",alpha:"Anna tÃ¤hÃ¤n kenttÃ¤Ã¤n vain kirjaimia (a-z). VÃ¤lilyÃ¶nnit tai muut merkit eivÃ¤t ole sallittuja.",alphanum:"Anna tÃ¤hÃ¤n kenttÃ¤Ã¤n vain kirjaimia (a-z) tai numeroita (0-9). VÃ¤lilyÃ¶nnit tai muut merkit eivÃ¤t ole sallittuja.",dateSuchAs:"Ole hyvÃ¤ ja anna kelvollinen pÃ¤ivmÃ¤Ã¤rÃ¤, kuten esimerkiksi {date}",dateInFormatMDY:'Ole hyvÃ¤ ja anna kelvollinen pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤ muodossa pp/kk/vvvv (kuten "12/31/1999")',email:'Ole hyvÃ¤ ja anna kelvollinen sÃ¤hkÃ¶postiosoite (kuten esimerkiksi "matti@meikalainen.com").',url:"Ole hyvÃ¤ ja anna kelvollinen URL, kuten esimerkiksi http://www.example.com.",currencyDollar:"Ole hyvÃ¤ ja anna kelvollinen eurosumma (kuten esimerkiksi 100,00 EUR) .",oneRequired:"Ole hyvÃ¤ ja syÃ¶tÃ¤ jotakin ainakin johonkin nÃ¤istÃ¤ kentistÃ¤.",errorPrefix:"Virhe: ",warningPrefix:"Varoitus: ",noSpace:"TÃ¤ssÃ¤ syÃ¶tteessÃ¤ ei voi olla vÃ¤lilyÃ¶ntejÃ¤",reqChkByNode:"Ei valintoja.",requiredChk:"TÃ¤mÃ¤ kenttÃ¤ on pakollinen.",reqChkByName:"Ole hyvÃ¤ ja valitse {label}.",match:"TÃ¤mÃ¤n kentÃ¤n tulee vastata kenttÃ¤Ã¤ {matchName}",startDate:"alkupÃ¤ivÃ¤mÃ¤Ã¤rÃ¤",endDate:"loppupÃ¤ivÃ¤mÃ¤Ã¤rÃ¤",currendDate:"nykyinen pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤",afterDate:"PÃ¤ivÃ¤mÃ¤Ã¤rÃ¤n tulisi olla sama tai myÃ¶hÃ¤isempi ajankohta kuin {label}.",beforeDate:"PÃ¤ivÃ¤mÃ¤Ã¤rÃ¤n tulisi olla sama tai aikaisempi ajankohta kuin {label}.",startMonth:"Ole hyvÃ¤ ja valitse aloituskuukausi",sameMonth:"NÃ¤iden kahden pÃ¤ivÃ¤mÃ¤Ã¤rÃ¤n tulee olla saman kuun sisÃ¤llÃ¤ -- sinun pitÃ¤Ã¤ muuttaa jompaa kumpaa.",creditcard:"Annettu luottokortin numero ei kelpaa. Ole hyvÃ¤ ja tarkista numero sekÃ¤ yritÃ¤ uudelleen. {length} numeroa syÃ¶tetty."});
Locale.define("fi-FI","Number",{group:" "}).inherit("EU","Number");Locale.define("fr-FR","Date",{months:["Janvier","FÃ©vrier","Mars","Avril","Mai","Juin","Juillet","AoÃ»t","Septembre","Octobre","Novembre","DÃ©cembre"],months_abbr:["janv.","fÃ©vr.","mars","avr.","mai","juin","juil.","aoÃ»t","sept.","oct.","nov.","dÃ©c."],days:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],days_abbr:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:function(a){return(a>1)?"":"er";
},lessThanMinuteAgo:"il y a moins d'une minute",minuteAgo:"il y a une minute",minutesAgo:"il y a {delta} minutes",hourAgo:"il y a une heure",hoursAgo:"il y a {delta} heures",dayAgo:"il y a un jour",daysAgo:"il y a {delta} jours",weekAgo:"il y a une semaine",weeksAgo:"il y a {delta} semaines",monthAgo:"il y a 1 mois",monthsAgo:"il y a {delta} mois",yearthAgo:"il y a 1 an",yearsAgo:"il y a {delta} ans",lessThanMinuteUntil:"dans moins d'une minute",minuteUntil:"dans une minute",minutesUntil:"dans {delta} minutes",hourUntil:"dans une heure",hoursUntil:"dans {delta} heures",dayUntil:"dans un jour",daysUntil:"dans {delta} jours",weekUntil:"dans 1 semaine",weeksUntil:"dans {delta} semaines",monthUntil:"dans 1 mois",monthsUntil:"dans {delta} mois",yearUntil:"dans 1 an",yearsUntil:"dans {delta} ans"});
Locale.define("fr-FR","FormValidator",{required:"Ce champ est obligatoire.",length:"Veuillez saisir {length} caract&egrave;re(s) (vous avez saisi {elLength} caract&egrave;re(s)",minLength:"Veuillez saisir un minimum de {minLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).",maxLength:"Veuillez saisir un maximum de {maxLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).",integer:'Veuillez saisir un nombre entier dans ce champ. Les nombres d&eacute;cimaux (ex : "1,25") ne sont pas autoris&eacute;s.',numeric:'Veuillez saisir uniquement des chiffres dans ce champ (ex : "1" ou "1,1" ou "-1" ou "-1,1").',digits:"Veuillez saisir uniquement des chiffres et des signes de ponctuation dans ce champ (ex : un num&eacute;ro de t&eacute;l&eacute;phone avec des traits d'union est autoris&eacute;).",alpha:"Veuillez saisir uniquement des lettres (a-z) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.",alphanum:"Veuillez saisir uniquement des lettres (a-z) ou des chiffres (0-9) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.",dateSuchAs:"Veuillez saisir une date correcte comme {date}",dateInFormatMDY:'Veuillez saisir une date correcte, au format JJ/MM/AAAA (ex : "31/11/1999").',email:'Veuillez saisir une adresse de courrier &eacute;lectronique. Par example "fred@domaine.com".',url:"Veuillez saisir une URL, comme http://www.example.com.",currencyDollar:"Veuillez saisir une quantit&eacute; correcte. Par example 100,00&euro;.",oneRequired:"Veuillez s&eacute;lectionner au moins une de ces options.",errorPrefix:"Erreur : ",warningPrefix:"Attention : ",noSpace:"Ce champ n'accepte pas les espaces.",reqChkByNode:"Aucun &eacute;l&eacute;ment n'est s&eacute;lectionn&eacute;.",requiredChk:"Ce champ est obligatoire.",reqChkByName:"Veuillez s&eacute;lectionner un(e) {label}.",match:"Ce champ doit correspondre avec le champ {matchName}.",startDate:"date de d&eacute;but",endDate:"date de fin",currendDate:"date actuelle",afterDate:"La date doit &ecirc;tre identique ou post&eacute;rieure &agrave; {label}.",beforeDate:"La date doit &ecirc;tre identique ou ant&eacute;rieure &agrave; {label}.",startMonth:"Veuillez s&eacute;lectionner un mois de d&eacute;but.",sameMonth:"Ces deux dates doivent &ecirc;tre dans le m&ecirc;me mois - vous devez en modifier une.",creditcard:"Le num&eacute;ro de carte de cr&eacute;dit est invalide. Merci de v&eacute;rifier le num&eacute;ro et de r&eacute;essayer. Vous avez entr&eacute; {length} chiffre(s)."});
Locale.define("fr-FR","Number",{group:" "}).inherit("EU","Number");Locale.define("he-IL","Date",{months:["×™× ×•××¨","×¤×‘×¨×•××¨","×ž×¨×¥","××¤×¨×™×œ","×ž××™","×™×•× ×™","×™×•×œ×™","××•×’×•×¡×˜","×¡×¤×˜×ž×‘×¨","××•×§×˜×•×‘×¨","× ×•×‘×ž×‘×¨","×“×¦×ž×‘×¨"],months_abbr:["×™× ×•××¨","×¤×‘×¨×•××¨","×ž×¨×¥","××¤×¨×™×œ","×ž××™","×™×•× ×™","×™×•×œ×™","××•×’×•×¡×˜","×¡×¤×˜×ž×‘×¨","××•×§×˜×•×‘×¨","× ×•×‘×ž×‘×¨","×“×¦×ž×‘×¨"],days:["×¨××©×•×Ÿ","×©× ×™","×©×œ×™×©×™","×¨×‘×™×¢×™","×—×ž×™×©×™","×©×™×©×™","×©×‘×ª"],days_abbr:["×¨××©×•×Ÿ","×©× ×™","×©×œ×™×©×™","×¨×‘×™×¢×™","×—×ž×™×©×™","×©×™×©×™","×©×‘×ª"],dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:0,ordinal:"",lessThanMinuteAgo:"×œ×¤× ×™ ×¤×—×•×ª ×ž×“×§×”",minuteAgo:"×œ×¤× ×™ ×›×“×§×”",minutesAgo:"×œ×¤× ×™ {delta} ×“×§×•×ª",hourAgo:"×œ×¤× ×™ ×›×©×¢×”",hoursAgo:"×œ×¤× ×™ {delta} ×©×¢×•×ª",dayAgo:"×œ×¤× ×™ ×™×•×",daysAgo:"×œ×¤× ×™ {delta} ×™×ž×™×",weekAgo:"×œ×¤× ×™ ×©×‘×•×¢",weeksAgo:"×œ×¤× ×™ {delta} ×©×‘×•×¢×•×ª",monthAgo:"×œ×¤× ×™ ×—×•×“×©",monthsAgo:"×œ×¤× ×™ {delta} ×—×•×“×©×™×",yearAgo:"×œ×¤× ×™ ×©× ×”",yearsAgo:"×œ×¤× ×™ {delta} ×©× ×™×",lessThanMinuteUntil:"×‘×¢×•×“ ×¤×—×•×ª ×ž×“×§×”",minuteUntil:"×‘×¢×•×“ ×›×“×§×”",minutesUntil:"×‘×¢×•×“ {delta} ×“×§×•×ª",hourUntil:"×‘×¢×•×“ ×›×©×¢×”",hoursUntil:"×‘×¢×•×“ {delta} ×©×¢×•×ª",dayUntil:"×‘×¢×•×“ ×™×•×",daysUntil:"×‘×¢×•×“ {delta} ×™×ž×™×",weekUntil:"×‘×¢×•×“ ×©×‘×•×¢",weeksUntil:"×‘×¢×•×“ {delta} ×©×‘×•×¢×•×ª",monthUntil:"×‘×¢×•×“ ×—×•×“×©",monthsUntil:"×‘×¢×•×“ {delta} ×—×•×“×©×™×",yearUntil:"×‘×¢×•×“ ×©× ×”",yearsUntil:"×‘×¢×•×“ {delta} ×©× ×™×"});
Locale.define("he-IL","FormValidator",{required:"× × ×œ×ž×œ× ×©×“×” ×–×”.",minLength:"× × ×œ×”×–×™×Ÿ ×œ×¤×—×•×ª {minLength} ×ª×•×•×™× (×”×–× ×ª {length} ×ª×•×•×™×).",maxLength:"× × ×œ×”×–×™×Ÿ ×¢×“ {maxLength} ×ª×•×•×™× (×”×–× ×ª {length} ×ª×•×•×™×).",integer:"× × ×œ×”×–×™×Ÿ ×ž×¡×¤×¨ ×©×œ× ×œ×©×“×” ×–×”. ×ž×¡×¤×¨×™× ×¢×©×¨×•× ×™×™× (×›×ž×• 1.25) ××™× × ×—×•×§×™×™×.",numeric:'× × ×œ×”×–×™×Ÿ ×¢×¨×š ×ž×¡×¤×¨×™ ×‘×œ×‘×“ ×‘×©×“×” ×–×” (×›×ž×• "1", "1.1", "-1" ××• "-1.1").',digits:"× × ×œ×”×–×™×Ÿ ×¨×§ ×¡×¤×¨×•×ª ×•×¡×™×ž× ×™ ×”×¤×¨×“×” ×‘×©×“×” ×–×” (×œ×ž×©×œ, ×ž×¡×¤×¨ ×˜×œ×¤×•×Ÿ ×¢× ×ž×§×¤×™× ××• × ×§×•×“×•×ª ×”×•× ×—×•×§×™).",alpha:"× × ×œ×”×–×™×Ÿ ×¨×§ ××•×ª×™×•×ª ×‘×× ×’×œ×™×ª (a-z) ×‘×©×“×” ×–×”. ×¨×•×•×—×™× ××• ×ª×•×•×™× ××—×¨×™× ××™× × ×—×•×§×™×™×.",alphanum:"× × ×œ×”×–×™×Ÿ ×¨×§ ××•×ª×¨×™×•×ª ×‘×× ×’×œ×™×ª (a-z) ××• ×¡×¤×¨×•×ª (0-9) ×‘×©×“×” ×–×”. ××•×•×—×¨×™× ××• ×ª×•×•×™× ××—×¨×™× ××™× × ×—×•×§×™×™×.",dateSuchAs:"× × ×œ×”×–×™×Ÿ ×ª××¨×™×š ×—×•×§×™, ×›×ž×• {date}",dateInFormatMDY:'× × ×œ×”×–×™×Ÿ ×ª××¨×™×š ×—×•×§×™ ×‘×¤×•×¨×ž×˜ MM/DD/YYYY (×›×ž×• "12/31/1999")',email:'× × ×œ×”×–×™×Ÿ ×›×ª×•×‘×ª ××™×ž×™×™×œ ×—×•×§×™×ª. ×œ×“×•×’×ž×”: "fred@domain.com".',url:"× × ×œ×”×–×™×Ÿ ×›×ª×•×‘×ª ××ª×¨ ×—×•×§×™×ª, ×›×ž×• http://www.example.com.",currencyDollar:"× × ×œ×”×–×™×Ÿ ×¡×›×•× ×“×•×œ×¨×™ ×—×•×§×™. ×œ×“×•×’×ž×” $100.00.",oneRequired:"× × ×œ×‘×—×•×¨ ×œ×¤×—×•×ª ×‘×©×“×” ××—×“.",errorPrefix:"×©×’×™××”: ",warningPrefix:"××–×”×¨×”: ",noSpace:"××™×Ÿ ×œ×”×–×™×Ÿ ×¨×•×•×—×™× ×‘×©×“×” ×–×”.",reqChkByNode:"× × ×œ×‘×—×•×¨ ××—×ª ×ž×”××¤×©×¨×•×™×•×ª.",requiredChk:"×©×“×” ×–×” × ×“×¨×©.",reqChkByName:"× × ×œ×‘×—×•×¨ {label}.",match:"×©×“×” ×–×” ×¦×¨×™×š ×œ×”×ª××™× ×œ×©×“×” {matchName}",startDate:"×ª××¨×™×š ×”×”×ª×—×œ×”",endDate:"×ª××¨×™×š ×”×¡×™×•×",currendDate:"×”×ª××¨×™×š ×”× ×•×›×—×™",afterDate:"×”×ª××¨×™×š ×¦×¨×™×š ×œ×”×™×•×ª ×–×”×” ××• ××—×¨×™ {label}.",beforeDate:"×”×ª××¨×™×š ×¦×¨×™×š ×œ×”×™×•×ª ×–×”×” ××• ×œ×¤× ×™ {label}.",startMonth:"× × ×œ×‘×—×•×¨ ×—×•×“×© ×”×ª×—×œ×”",sameMonth:"×©× ×™ ×ª××¨×™×›×™× ××œ×” ×¦×¨×™×›×™× ×œ×”×™×•×ª ×‘××•×ª×• ×—×•×“×© - × × ×œ×©× ×•×ª ××—×“ ×”×ª××¨×™×›×™×.",creditcard:"×ž×¡×¤×¨ ×›×¨×˜×™×¡ ×”××©×¨××™ ×©×”×•×–×Ÿ ××™× ×• ×—×•×§×™. × × ×œ×‘×“×•×§ ×©× ×™×ª. ×”×•×–× ×• {length} ×¡×¤×¨×•×ª."});
Locale.define("he-IL","Number",{decimal:".",group:",",currency:{suffix:" â‚ª"}});Locale.define("hu-HU","Date",{months:["JanuÃ¡r","FebruÃ¡r","MÃ¡rcius","Ãprilis","MÃ¡jus","JÃºnius","JÃºlius","Augusztus","Szeptember","OktÃ³ber","November","December"],months_abbr:["jan.","febr.","mÃ¡rc.","Ã¡pr.","mÃ¡j.","jÃºn.","jÃºl.","aug.","szept.","okt.","nov.","dec."],days:["VasÃ¡rnap","HÃ©tfÅ‘","Kedd","Szerda","CsÃ¼tÃ¶rtÃ¶k","PÃ©ntek","Szombat"],days_abbr:["V","H","K","Sze","Cs","P","Szo"],dateOrder:["year","month","date"],shortDate:"%Y.%m.%d.",shortTime:"%I:%M",AM:"de.",PM:"du.",firstDayOfWeek:1,ordinal:".",lessThanMinuteAgo:"alig egy perce",minuteAgo:"egy perce",minutesAgo:"{delta} perce",hourAgo:"egy Ã³rÃ¡ja",hoursAgo:"{delta} Ã³rÃ¡ja",dayAgo:"1 napja",daysAgo:"{delta} napja",weekAgo:"1 hete",weeksAgo:"{delta} hete",monthAgo:"1 hÃ³napja",monthsAgo:"{delta} hÃ³napja",yearAgo:"1 Ã©ve",yearsAgo:"{delta} Ã©ve",lessThanMinuteUntil:"alig egy perc mÃºlva",minuteUntil:"egy perc mÃºlva",minutesUntil:"{delta} perc mÃºlva",hourUntil:"egy Ã³ra mÃºlva",hoursUntil:"{delta} Ã³ra mÃºlva",dayUntil:"1 nap mÃºlva",daysUntil:"{delta} nap mÃºlva",weekUntil:"1 hÃ©t mÃºlva",weeksUntil:"{delta} hÃ©t mÃºlva",monthUntil:"1 hÃ³nap mÃºlva",monthsUntil:"{delta} hÃ³nap mÃºlva",yearUntil:"1 Ã©v mÃºlva",yearsUntil:"{delta} Ã©v mÃºlva"});
Locale.define("hu-HU","FormValidator",{required:"A mezÅ‘ kitÃ¶ltÃ©se kÃ¶telezÅ‘.",minLength:"LegalÃ¡bb {minLength} karakter megadÃ¡sa szÃ¼ksÃ©ges (megadva {length} karakter).",maxLength:"Legfeljebb {maxLength} karakter megadÃ¡sa lehetsÃ©ges (megadva {length} karakter).",integer:"EgÃ©sz szÃ¡m megadÃ¡sa szÃ¼ksÃ©ges. A tizedesjegyek (pl. 1.25) nem engedÃ©lyezettek.",numeric:'SzÃ¡m megadÃ¡sa szÃ¼ksÃ©ges (pl. "1" vagy "1.1" vagy "-1" vagy "-1.1").',digits:"Csak szÃ¡mok Ã©s Ã­rÃ¡sjelek megadÃ¡sa lehetsÃ©ges (pl. telefonszÃ¡m kÃ¶tÅ‘jelek Ã©s/vagy perjelekkel).",alpha:"Csak betÅ±k (a-z) megadÃ¡sa lehetsÃ©ges. SzÃ³kÃ¶z Ã©s egyÃ©b karakterek nem engedÃ©lyezettek.",alphanum:"Csak betÅ±k (a-z) vagy szÃ¡mok (0-9) megadÃ¡sa lehetsÃ©ges. SzÃ³kÃ¶z Ã©s egyÃ©b karakterek nem engedÃ©lyezettek.",dateSuchAs:"ValÃ³s dÃ¡tum megadÃ¡sa szÃ¼ksÃ©ges (pl. {date}).",dateInFormatMDY:'ValÃ³s dÃ¡tum megadÃ¡sa szÃ¼ksÃ©ges Ã‰Ã‰Ã‰Ã‰.HH.NN. formÃ¡ban. (pl. "1999.12.31.")',email:'ValÃ³s e-mail cÃ­m megadÃ¡sa szÃ¼ksÃ©ges (pl. "fred@domain.hu").',url:"ValÃ³s URL megadÃ¡sa szÃ¼ksÃ©ges (pl. http://www.example.com).",currencyDollar:"ValÃ³s pÃ©nzÃ¶sszeg megadÃ¡sa szÃ¼ksÃ©ges (pl. 100.00 Ft.).",oneRequired:"Az alÃ¡bbi mezÅ‘k legalÃ¡bb egyikÃ©nek kitÃ¶ltÃ©se kÃ¶telezÅ‘.",errorPrefix:"Hiba: ",warningPrefix:"Figyelem: ",noSpace:"A mezÅ‘ nem tartalmazhat szÃ³kÃ¶zÃ¶ket.",reqChkByNode:"Nincs egyetlen kijelÃ¶lt elem sem.",requiredChk:"A mezÅ‘ kitÃ¶ltÃ©se kÃ¶telezÅ‘.",reqChkByName:"Egy {label} kivÃ¡lasztÃ¡sa szÃ¼ksÃ©ges.",match:"A mezÅ‘nek egyeznie kell a(z) {matchName} mezÅ‘vel.",startDate:"a kezdet dÃ¡tuma",endDate:"a vÃ©g dÃ¡tuma",currendDate:"jelenlegi dÃ¡tum",afterDate:"A dÃ¡tum nem lehet kisebb, mint {label}.",beforeDate:"A dÃ¡tum nem lehet nagyobb, mint {label}.",startMonth:"Kezdeti hÃ³nap megadÃ¡sa szÃ¼ksÃ©ges.",sameMonth:"A kÃ©t dÃ¡tumnak ugyanazon hÃ³napban kell lennie.",creditcard:"A megadott bankkÃ¡rtyaszÃ¡m nem valÃ³di (megadva {length} szÃ¡mjegy)."});
Locale.define("it-IT","Date",{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],months_abbr:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],days:["Domenica","LunedÃ¬","MartedÃ¬","MercoledÃ¬","GiovedÃ¬","VenerdÃ¬","Sabato"],days_abbr:["dom","lun","mar","mer","gio","ven","sab"],dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H.%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"Âº",lessThanMinuteAgo:"meno di un minuto fa",minuteAgo:"circa un minuto fa",minutesAgo:"circa {delta} minuti fa",hourAgo:"circa un'ora fa",hoursAgo:"circa {delta} ore fa",dayAgo:"circa 1 giorno fa",daysAgo:"circa {delta} giorni fa",weekAgo:"una settimana fa",weeksAgo:"{delta} settimane fa",monthAgo:"un mese fa",monthsAgo:"{delta} mesi fa",yearAgo:"un anno fa",yearsAgo:"{delta} anni fa",lessThanMinuteUntil:"tra meno di un minuto",minuteUntil:"tra circa un minuto",minutesUntil:"tra circa {delta} minuti",hourUntil:"tra circa un'ora",hoursUntil:"tra circa {delta} ore",dayUntil:"tra circa un giorno",daysUntil:"tra circa {delta} giorni",weekUntil:"tra una settimana",weeksUntil:"tra {delta} settimane",monthUntil:"tra un mese",monthsUntil:"tra {delta} mesi",yearUntil:"tra un anno",yearsUntil:"tra {delta} anni"});
Locale.define("it-IT","FormValidator",{required:"Il campo &egrave; obbligatorio.",minLength:"Inserire almeno {minLength} caratteri (ne sono stati inseriti {length}).",maxLength:"Inserire al massimo {maxLength} caratteri (ne sono stati inseriti {length}).",integer:"Inserire un numero intero. Non sono consentiti decimali (es.: 1.25).",numeric:'Inserire solo valori numerici (es.: "1" oppure "1.1" oppure "-1" oppure "-1.1").',digits:"Inserire solo numeri e caratteri di punteggiatura. Per esempio &egrave; consentito un numero telefonico con trattini o punti.",alpha:"Inserire solo lettere (a-z). Non sono consentiti spazi o altri caratteri.",alphanum:"Inserire solo lettere (a-z) o numeri (0-9). Non sono consentiti spazi o altri caratteri.",dateSuchAs:"Inserire una data valida del tipo {date}",dateInFormatMDY:'Inserire una data valida nel formato MM/GG/AAAA (es.: "12/31/1999")',email:'Inserire un indirizzo email valido. Per esempio "nome@dominio.com".',url:'Inserire un indirizzo valido. Per esempio "http://www.example.com".',currencyDollar:'Inserire un importo valido. Per esempio "$100.00".',oneRequired:"Completare almeno uno dei campi richiesti.",errorPrefix:"Errore: ",warningPrefix:"Attenzione: ",noSpace:"Non sono consentiti spazi.",reqChkByNode:"Nessuna voce selezionata.",requiredChk:"Il campo &egrave; obbligatorio.",reqChkByName:"Selezionare un(a) {label}.",match:"Il valore deve corrispondere al campo {matchName}",startDate:"data d'inizio",endDate:"data di fine",currendDate:"data attuale",afterDate:"La data deve corrispondere o essere successiva al {label}.",beforeDate:"La data deve corrispondere o essere precedente al {label}.",startMonth:"Selezionare un mese d'inizio",sameMonth:"Le due date devono essere dello stesso mese - occorre modificarne una."});
Locale.define("ja-JP","Date",{months:["1æœˆ","2æœˆ","3æœˆ","4æœˆ","5æœˆ","6æœˆ","7æœˆ","8æœˆ","9æœˆ","10æœˆ","11æœˆ","12æœˆ"],months_abbr:["1æœˆ","2æœˆ","3æœˆ","4æœˆ","5æœˆ","6æœˆ","7æœˆ","8æœˆ","9æœˆ","10æœˆ","11æœˆ","12æœˆ"],days:["æ—¥æ›œæ—¥","æœˆæ›œæ—¥","ç«æ›œæ—¥","æ°´æ›œæ—¥","æœ¨æ›œæ—¥","é‡‘æ›œæ—¥","åœŸæ›œæ—¥"],days_abbr:["æ—¥","æœˆ","ç«","æ°´","æœ¨","é‡‘","åœŸ"],dateOrder:["year","month","date"],shortDate:"%Y/%m/%d",shortTime:"%H:%M",AM:"åˆå‰",PM:"åˆå¾Œ",firstDayOfWeek:0,ordinal:"",lessThanMinuteAgo:"1åˆ†ä»¥å†…å‰",minuteAgo:"ç´„1åˆ†å‰",minutesAgo:"ç´„{delta}åˆ†å‰",hourAgo:"ç´„1æ™‚é–“å‰",hoursAgo:"ç´„{delta}æ™‚é–“å‰",dayAgo:"1æ—¥å‰",daysAgo:"{delta}æ—¥å‰",weekAgo:"1é€±é–“å‰",weeksAgo:"{delta}é€±é–“å‰",monthAgo:"1ãƒ¶æœˆå‰",monthsAgo:"{delta}ãƒ¶æœˆå‰",yearAgo:"1å¹´å‰",yearsAgo:"{delta}å¹´å‰",lessThanMinuteUntil:"ä»Šã‹ã‚‰ç´„1åˆ†ä»¥å†…",minuteUntil:"ä»Šã‹ã‚‰ç´„1åˆ†",minutesUntil:"ä»Šã‹ã‚‰ç´„{delta}åˆ†",hourUntil:"ä»Šã‹ã‚‰ç´„1æ™‚é–“",hoursUntil:"ä»Šã‹ã‚‰ç´„{delta}æ™‚é–“",dayUntil:"ä»Šã‹ã‚‰1æ—¥é–“",daysUntil:"ä»Šã‹ã‚‰{delta}æ—¥é–“",weekUntil:"ä»Šã‹ã‚‰1é€±é–“",weeksUntil:"ä»Šã‹ã‚‰{delta}é€±é–“",monthUntil:"ä»Šã‹ã‚‰1ãƒ¶æœˆ",monthsUntil:"ä»Šã‹ã‚‰{delta}ãƒ¶æœˆ",yearUntil:"ä»Šã‹ã‚‰1å¹´",yearsUntil:"ä»Šã‹ã‚‰{delta}å¹´"});
Locale.define("ja-JP","FormValidator",{required:"å…¥åŠ›ã¯å¿…é ˆã§ã™ã€‚",minLength:"å…¥åŠ›æ–‡å­—æ•°ã¯{minLength}ä»¥ä¸Šã«ã—ã¦ãã ã•ã„ã€‚({length}æ–‡å­—)",maxLength:"å…¥åŠ›æ–‡å­—æ•°ã¯{maxLength}ä»¥ä¸‹ã«ã—ã¦ãã ã•ã„ã€‚({length}æ–‡å­—)",integer:"æ•´æ•°ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",numeric:'å…¥åŠ›ã§ãã‚‹ã®ã¯æ•°å€¤ã ã‘ã§ã™ã€‚(ä¾‹: "1", "1.1", "-1", "-1.1"....)',digits:"å…¥åŠ›ã§ãã‚‹ã®ã¯æ•°å€¤ã¨å¥èª­è¨˜å·ã§ã™ã€‚ (ä¾‹: -ã‚„+ã‚’å«ã‚€é›»è©±ç•ªå·ãªã©).",alpha:"å…¥åŠ›ã§ãã‚‹ã®ã¯åŠè§’è‹±å­—ã ã‘ã§ã™ã€‚ãã‚Œä»¥å¤–ã®æ–‡å­—ã¯å…¥åŠ›ã§ãã¾ã›ã‚“ã€‚",alphanum:"å…¥åŠ›ã§ãã‚‹ã®ã¯åŠè§’è‹±æ•°å­—ã ã‘ã§ã™ã€‚ãã‚Œä»¥å¤–ã®æ–‡å­—ã¯å…¥åŠ›ã§ãã¾ã›ã‚“ã€‚",dateSuchAs:"æœ‰åŠ¹ãªæ—¥ä»˜ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚{date}",dateInFormatMDY:'æ—¥ä»˜ã®æ›¸å¼ã«èª¤ã‚ŠãŒã‚ã‚Šã¾ã™ã€‚YYYY/MM/DD (i.e. "1999/12/31")',email:"ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹ã«èª¤ã‚ŠãŒã‚ã‚Šã¾ã™ã€‚",url:"URLã‚¢ãƒ‰ãƒ¬ã‚¹ã«èª¤ã‚ŠãŒã‚ã‚Šã¾ã™ã€‚",currencyDollar:"é‡‘é¡ã«èª¤ã‚ŠãŒã‚ã‚Šã¾ã™ã€‚",oneRequired:"ã²ã¨ã¤ä»¥ä¸Šå…¥åŠ›ã—ã¦ãã ã•ã„ã€‚",errorPrefix:"ã‚¨ãƒ©ãƒ¼: ",warningPrefix:"è­¦å‘Š: ",noSpace:"ã‚¹ãƒšãƒ¼ã‚¹ã¯å…¥åŠ›ã§ãã¾ã›ã‚“ã€‚",reqChkByNode:"é¸æŠžã•ã‚Œã¦ã„ã¾ã›ã‚“ã€‚",requiredChk:"ã“ã®é …ç›®ã¯å¿…é ˆã§ã™ã€‚",reqChkByName:"{label}ã‚’é¸æŠžã—ã¦ãã ã•ã„ã€‚",match:"{matchName}ãŒå…¥åŠ›ã•ã‚Œã¦ã„ã‚‹å ´åˆå¿…é ˆã§ã™ã€‚",startDate:"é–‹å§‹æ—¥",endDate:"çµ‚äº†æ—¥",currendDate:"ä»Šæ—¥",afterDate:"{label}ä»¥é™ã®æ—¥ä»˜ã«ã—ã¦ãã ã•ã„ã€‚",beforeDate:"{label}ä»¥å‰ã®æ—¥ä»˜ã«ã—ã¦ãã ã•ã„ã€‚",startMonth:"é–‹å§‹æœˆã‚’é¸æŠžã—ã¦ãã ã•ã„ã€‚",sameMonth:"æ—¥ä»˜ãŒåŒä¸€ã§ã™ã€‚ã©ã¡ã‚‰ã‹ã‚’å¤‰æ›´ã—ã¦ãã ã•ã„ã€‚"});
Locale.define("ja-JP","Number",{decimal:".",group:",",currency:{decimals:0,prefix:"\\"}});Locale.define("nl-NL","Date",{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],months_abbr:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],days_abbr:["zo","ma","di","wo","do","vr","za"],dateOrder:["date","month","year"],shortDate:"%d-%m-%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"e",lessThanMinuteAgo:"minder dan een minuut geleden",minuteAgo:"ongeveer een minuut geleden",minutesAgo:"{delta} minuten geleden",hourAgo:"ongeveer een uur geleden",hoursAgo:"ongeveer {delta} uur geleden",dayAgo:"een dag geleden",daysAgo:"{delta} dagen geleden",weekAgo:"een week geleden",weeksAgo:"{delta} weken geleden",monthAgo:"een maand geleden",monthsAgo:"{delta} maanden geleden",yearAgo:"een jaar geleden",yearsAgo:"{delta} jaar geleden",lessThanMinuteUntil:"over minder dan een minuut",minuteUntil:"over ongeveer een minuut",minutesUntil:"over {delta} minuten",hourUntil:"over ongeveer een uur",hoursUntil:"over {delta} uur",dayUntil:"over ongeveer een dag",daysUntil:"over {delta} dagen",weekUntil:"over een week",weeksUntil:"over {delta} weken",monthUntil:"over een maand",monthsUntil:"over {delta} maanden",yearUntil:"over een jaar",yearsUntil:"over {delta} jaar"});
Locale.define("nl-NL","FormValidator",{required:"Dit veld is verplicht.",length:"Vul precies {length} karakters in (je hebt {elLength} karakters ingevoerd).",minLength:"Vul minimaal {minLength} karakters in (je hebt {length} karakters ingevoerd).",maxLength:"Vul niet meer dan {maxLength} karakters in (je hebt {length} karakters ingevoerd).",integer:"Vul een getal in. Getallen met decimalen (bijvoorbeeld 1.25) zijn niet toegestaan.",numeric:'Vul alleen numerieke waarden in (bijvoorbeeld "1" of "1.1" of "-1" of "-1.1").',digits:"Vul alleen nummers en leestekens in (bijvoorbeeld een telefoonnummer met streepjes is toegestaan).",alpha:"Vul alleen letters in (a-z). Spaties en andere karakters zijn niet toegestaan.",alphanum:"Vul alleen letters (a-z) of nummers (0-9) in. Spaties en andere karakters zijn niet toegestaan.",dateSuchAs:"Vul een geldige datum in, zoals {date}",dateInFormatMDY:'Vul een geldige datum, in het formaat MM/DD/YYYY (bijvoorbeeld "12/31/1999")',email:'Vul een geldig e-mailadres in. Bijvoorbeeld "fred@domein.nl".',url:"Vul een geldige URL in, zoals http://www.example.com.",currencyDollar:"Vul een geldig $ bedrag in. Bijvoorbeeld $100.00 .",oneRequired:"Vul iets in bij in ieder geval een van deze velden.",warningPrefix:"Waarschuwing: ",errorPrefix:"Fout: ",noSpace:"Spaties zijn niet toegestaan in dit veld.",reqChkByNode:"Er zijn geen items geselecteerd.",requiredChk:"Dit veld is verplicht.",reqChkByName:"Selecteer een {label}.",match:"Dit veld moet overeen komen met het {matchName} veld",startDate:"de begin datum",endDate:"de eind datum",currendDate:"de huidige datum",afterDate:"De datum moet hetzelfde of na {label} zijn.",beforeDate:"De datum moet hetzelfde of voor {label} zijn.",startMonth:"Selecteer een begin maand",sameMonth:"Deze twee data moeten in dezelfde maand zijn - u moet een van beide aanpassen.",creditcard:"Het ingevulde creditcardnummer is niet geldig. Controleer het nummer en probeer opnieuw. {length} getallen ingevuld."});
Locale.define("nl-NL").inherit("EU","Number");Locale.define("no-NO","Date",{dateOrder:["date","month","year"],shortDate:"%d.%m.%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,lessThanMinuteAgo:"kortere enn et minutt siden",minuteAgo:"omtrent et minutt siden",minutesAgo:"{delta} minutter siden",hourAgo:"omtrent en time siden",hoursAgo:"omtrent {delta} timer siden",dayAgo:"{delta} dag siden",daysAgo:"{delta} dager siden"});
Locale.define("no-NO","FormValidator",{required:"Dette feltet er pÃƒÂ¥krevd.",minLength:"Vennligst skriv inn minst {minLength} tegn (du skrev {length} tegn).",maxLength:"Vennligst skriv inn maksimalt {maxLength} tegn (du skrev {length} tegn).",integer:"Vennligst skriv inn et tall i dette feltet. Tall med desimaler (for eksempel 1,25) er ikke tillat.",numeric:'Vennligst skriv inn kun numeriske verdier i dette feltet (for eksempel "1", "1.1", "-1" eller "-1.1").',digits:"Vennligst bruk kun nummer og skilletegn i dette feltet.",alpha:"Vennligst bruk kun bokstaver (a-z) i dette feltet. Ingen mellomrom eller andre tegn er tillat.",alphanum:"Vennligst bruk kun bokstaver (a-z) eller nummer (0-9) i dette feltet. Ingen mellomrom eller andre tegn er tillat.",dateSuchAs:"Vennligst skriv inn en gyldig dato, som {date}",dateInFormatMDY:'Vennligst skriv inn en gyldig dato, i formatet MM/DD/YYYY (for eksempel "12/31/1999")',email:'Vennligst skriv inn en gyldig epost-adresse. For eksempel "espen@domene.no".',url:"Vennligst skriv inn en gyldig URL, for eksempel http://www.example.com.",currencyDollar:"Vennligst fyll ut et gyldig $ belÃƒÂ¸p. For eksempel $100.00 .",oneRequired:"Vennligst fyll ut noe i minst ett av disse feltene.",errorPrefix:"Feil: ",warningPrefix:"Advarsel: "});
Locale.define("pl-PL","Date",{months:["StyczeÅ„","Luty","Marzec","KwiecieÅ„","Maj","Czerwiec","Lipiec","SierpieÅ„","WrzesieÅ„","PaÅºdziernik","Listopad","GrudzieÅ„"],months_abbr:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paÅº","lis","gru"],days:["Niedziela","PoniedziaÅ‚ek","Wtorek","Åšroda","Czwartek","PiÄ…tek","Sobota"],days_abbr:["niedz.","pon.","wt.","Å›r.","czw.","pt.","sob."],dateOrder:["year","month","date"],shortDate:"%Y-%m-%d",shortTime:"%H:%M",AM:"nad ranem",PM:"po poÅ‚udniu",firstDayOfWeek:1,ordinal:function(a){return(a>3&&a<21)?"ty":["ty","szy","gi","ci","ty"][Math.min(a%10,4)];
},lessThanMinuteAgo:"mniej niÅ¼ minute temu",minuteAgo:"okoÅ‚o minutÄ™ temu",minutesAgo:"{delta} minut temu",hourAgo:"okoÅ‚o godzinÄ™ temu",hoursAgo:"okoÅ‚o {delta} godzin temu",dayAgo:"Wczoraj",daysAgo:"{delta} dni temu",lessThanMinuteUntil:"za niecaÅ‚Ä… minutÄ™",minuteUntil:"za okoÅ‚o minutÄ™",minutesUntil:"za {delta} minut",hourUntil:"za okoÅ‚o godzinÄ™",hoursUntil:"za okoÅ‚o {delta} godzin",dayUntil:"za 1 dzieÅ„",daysUntil:"za {delta} dni"});
Locale.define("pl-PL","FormValidator",{required:"To pole jest wymagane.",minLength:"Wymagane jest przynajmniej {minLength} znakÃ³w (wpisanych zostaÅ‚o tylko {length}).",maxLength:"Dozwolone jest nie wiÄ™cej niÅ¼ {maxLength} znakÃ³w (wpisanych zostaÅ‚o {length})",integer:"To pole wymaga liczb caÅ‚ych. Liczby dziesiÄ™tne (np. 1.25) sÄ… niedozwolone.",numeric:'Prosimy uÅ¼ywaÄ‡ tylko numerycznych wartoÅ›ci w tym polu (np. "1", "1.1", "-1" lub "-1.1").',digits:"Prosimy uÅ¼ywaÄ‡ liczb oraz zankow punktuacyjnych w typ polu (dla przykÅ‚adu, przy numerze telefonu myÅ›lniki i kropki sÄ… dozwolone).",alpha:"Prosimy uÅ¼ywaÄ‡ tylko liter (a-z) w tym polu. Spacje oraz inne znaki sÄ… niedozwolone.",alphanum:"Prosimy uÅ¼ywaÄ‡ tylko liter (a-z) lub liczb (0-9) w tym polu. Spacje oraz inne znaki sÄ… niedozwolone.",dateSuchAs:"Prosimy podaÄ‡ prawidÅ‚owÄ… datÄ™ w formacie: {date}",dateInFormatMDY:'Prosimy podaÄ‡ poprawnÄ… date w formacie DD.MM.RRRR (i.e. "12.01.2009")',email:'Prosimy podaÄ‡ prawidÅ‚owy adres e-mail, np. "jan@domena.pl".',url:"Prosimy podaÄ‡ prawidÅ‚owy adres URL, np. http://www.example.com.",currencyDollar:"Prosimy podaÄ‡ prawidÅ‚owÄ… sumÄ™ w PLN. Dla przykÅ‚adu: 100.00 PLN.",oneRequired:"Prosimy wypeÅ‚niÄ‡ chociaÅ¼ jedno z pÃ³l.",errorPrefix:"BÅ‚Ä…d: ",warningPrefix:"Uwaga: ",noSpace:"W tym polu nie mogÄ… znajdowaÄ‡ siÄ™ spacje.",reqChkByNode:"Brak zaznaczonych elementÃ³w.",requiredChk:"To pole jest wymagane.",reqChkByName:"Prosimy wybraÄ‡ z {label}.",match:"To pole musi byÄ‡ takie samo jak {matchName}",startDate:"data poczÄ…tkowa",endDate:"data koÅ„cowa",currendDate:"aktualna data",afterDate:"Podana data poinna byÄ‡ taka sama lub po {label}.",beforeDate:"Podana data poinna byÄ‡ taka sama lub przed {label}.",startMonth:"Prosimy wybraÄ‡ poczÄ…tkowy miesiÄ…c.",sameMonth:"Te dwie daty muszÄ… byÄ‡ w zakresie tego samego miesiÄ…ca - wymagana jest zmiana ktÃ³regoÅ› z pÃ³l."});
Locale.define("pt-PT","Date",{months:["Janeiro","Fevereiro","MarÃ§o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],months_abbr:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],days:["Domingo","Segunda-feira","TerÃ§a-feira","Quarta-feira","Quinta-feira","Sexta-feira","SÃ¡bado"],days_abbr:["Dom","Seg","Ter","Qua","Qui","Sex","SÃ¡b"],dateOrder:["date","month","year"],shortDate:"%d-%m-%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"Âº",lessThanMinuteAgo:"hÃ¡ menos de um minuto",minuteAgo:"hÃ¡ cerca de um minuto",minutesAgo:"hÃ¡ {delta} minutos",hourAgo:"hÃ¡ cerca de uma hora",hoursAgo:"hÃ¡ cerca de {delta} horas",dayAgo:"hÃ¡ um dia",daysAgo:"hÃ¡ {delta} dias",weekAgo:"hÃ¡ uma semana",weeksAgo:"hÃ¡ {delta} semanas",monthAgo:"hÃ¡ um mÃªs",monthsAgo:"hÃ¡ {delta} meses",yearAgo:"hÃ¡ um ano",yearsAgo:"hÃ¡ {delta} anos",lessThanMinuteUntil:"em menos de um minuto",minuteUntil:"em um minuto",minutesUntil:"em {delta} minutos",hourUntil:"em uma hora",hoursUntil:"em {delta} horas",dayUntil:"em um dia",daysUntil:"em {delta} dias",weekUntil:"em uma semana",weeksUntil:"em {delta} semanas",monthUntil:"em um mÃªs",monthsUntil:"em {delta} meses",yearUntil:"em um ano",yearsUntil:"em {delta} anos"});
Locale.define("pt-BR","Date",{shortDate:"%d/%m/%Y"}).inherit("pt-PT","Date");Locale.define("pt-BR","FormValidator",{required:"Este campo Ã© obrigatÃ³rio.",minLength:"Digite pelo menos {minLength} caracteres (tamanho atual: {length}).",maxLength:"NÃ£o digite mais de {maxLength} caracteres (tamanho atual: {length}).",integer:"Por favor digite apenas um nÃºmero inteiro neste campo. NÃ£o sÃ£o permitidos nÃºmeros decimais (por exemplo, 1,25).",numeric:'Por favor digite apenas valores numÃ©ricos neste campo (por exemplo, "1" ou "1.1" ou "-1" ou "-1,1").',digits:"Por favor use apenas nÃºmeros e pontuaÃ§Ã£o neste campo (por exemplo, um nÃºmero de telefone com traÃ§os ou pontos Ã© permitido).",alpha:"Por favor use somente letras (a-z). EspaÃ§o e outros caracteres nÃ£o sÃ£o permitidos.",alphanum:"Use somente letras (a-z) ou nÃºmeros (0-9) neste campo. EspaÃ§o e outros caracteres nÃ£o sÃ£o permitidos.",dateSuchAs:"Digite uma data vÃ¡lida, como {date}",dateInFormatMDY:'Digite uma data vÃ¡lida, como DD/MM/YYYY (por exemplo, "31/12/1999")',email:'Digite um endereÃ§o de email vÃ¡lido. Por exemplo "nome@dominio.com".',url:"Digite uma URL vÃ¡lida. Exemplo: http://www.example.com.",currencyDollar:"Digite um valor em dinheiro vÃ¡lido. Exemplo: R$100,00 .",oneRequired:"Digite algo para pelo menos um desses campos.",errorPrefix:"Erro: ",warningPrefix:"Aviso: ",noSpace:"NÃ£o Ã© possÃ­vel digitar espaÃ§os neste campo.",reqChkByNode:"NÃ£o foi selecionado nenhum item.",requiredChk:"Este campo Ã© obrigatÃ³rio.",reqChkByName:"Por favor digite um {label}.",match:"Este campo deve ser igual ao campo {matchName}.",startDate:"a data inicial",endDate:"a data final",currendDate:"a data atual",afterDate:"A data deve ser igual ou posterior a {label}.",beforeDate:"A data deve ser igual ou anterior a {label}.",startMonth:"Por favor selecione uma data inicial.",sameMonth:"Estas duas datas devem ter o mesmo mÃªs - vocÃª deve modificar uma das duas.",creditcard:"O nÃºmero do cartÃ£o de crÃ©dito informado Ã© invÃ¡lido. Por favor verifique o valor e tente novamente. {length} nÃºmeros informados."});
Locale.define("pt-PT","FormValidator",{required:"Este campo Ã© necessÃ¡rio.",minLength:"Digite pelo menos{minLength} caracteres (comprimento {length} caracteres).",maxLength:"NÃ£o insira mais de {maxLength} caracteres (comprimento {length} caracteres).",integer:"Digite um nÃºmero inteiro neste domÃ­nio. Com nÃºmeros decimais (por exemplo, 1,25), nÃ£o sÃ£o permitidas.",numeric:'Digite apenas valores numÃ©ricos neste domÃ­nio (p.ex., "1" ou "1.1" ou "-1" ou "-1,1").',digits:"Por favor, use nÃºmeros e pontuaÃ§Ã£o apenas neste campo (p.ex., um nÃºmero de telefone com traÃ§os ou pontos Ã© permitida).",alpha:"Por favor use somente letras (a-z), com nesta Ã¡rea. NÃ£o utilize espaÃ§os nem outros caracteres sÃ£o permitidos.",alphanum:"Use somente letras (a-z) ou nÃºmeros (0-9) neste campo. NÃ£o utilize espaÃ§os nem outros caracteres sÃ£o permitidos.",dateSuchAs:"Digite uma data vÃ¡lida, como {date}",dateInFormatMDY:'Digite uma data vÃ¡lida, como DD/MM/YYYY (p.ex. "31/12/1999")',email:'Digite um endereÃ§o de email vÃ¡lido. Por exemplo "fred@domain.com".',url:"Digite uma URL vÃ¡lida, como http://www.example.com.",currencyDollar:"Digite um valor vÃ¡lido $. Por exemplo $ 100,00. ",oneRequired:"Digite algo para pelo menos um desses insumos.",errorPrefix:"Erro: ",warningPrefix:"Aviso: "});
(function(){var a=function(h,e,d,g,b){var c=h%10,f=h%100;if(c==1&&f!=11){return e;}else{if((c==2||c==3||c==4)&&!(f==12||f==13||f==14)){return d;}else{if(c==0||(c==5||c==6||c==7||c==8||c==9)||(f==11||f==12||f==13||f==14)){return g;
}else{return b;}}}};Locale.define("ru-RU","Date",{months:["Ð¯Ð½Ð²Ð°Ñ€ÑŒ","Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ","ÐœÐ°Ñ€Ñ‚","ÐÐ¿Ñ€ÐµÐ»ÑŒ","ÐœÐ°Ð¹","Ð˜ÑŽÐ½ÑŒ","Ð˜ÑŽÐ»ÑŒ","ÐÐ²Ð³ÑƒÑÑ‚","Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ","ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ","ÐÐ¾ÑÐ±Ñ€ÑŒ","Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],months_abbr:["ÑÐ½Ð²","Ñ„ÐµÐ²Ñ€","Ð¼Ð°Ñ€Ñ‚","Ð°Ð¿Ñ€","Ð¼Ð°Ð¹","Ð¸ÑŽÐ½ÑŒ","Ð¸ÑŽÐ»ÑŒ","Ð°Ð²Ð³","ÑÐµÐ½Ñ‚","Ð¾ÐºÑ‚","Ð½Ð¾ÑÐ±","Ð´ÐµÐº"],days:["Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ","ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº","Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº","Ð¡Ñ€ÐµÐ´Ð°","Ð§ÐµÑ‚Ð²ÐµÑ€Ð³","ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°","Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°"],days_abbr:["Ð’Ñ","ÐŸÐ½","Ð’Ñ‚","Ð¡Ñ€","Ð§Ñ‚","ÐŸÑ‚","Ð¡Ð±"],dateOrder:["date","month","year"],shortDate:"%d.%m.%Y",shortTime:"%H:%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"",lessThanMinuteAgo:"Ð¼ÐµÐ½ÑŒÑˆÐµ Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹ Ð½Ð°Ð·Ð°Ð´",minuteAgo:"Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ Ð½Ð°Ð·Ð°Ð´",minutesAgo:function(b){return"{delta} "+a(b,"Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ","Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹","Ð¼Ð¸Ð½ÑƒÑ‚")+" Ð½Ð°Ð·Ð°Ð´";
},hourAgo:"Ñ‡Ð°Ñ Ð½Ð°Ð·Ð°Ð´",hoursAgo:function(b){return"{delta} "+a(b,"Ñ‡Ð°Ñ","Ñ‡Ð°ÑÐ°","Ñ‡Ð°ÑÐ¾Ð²")+" Ð½Ð°Ð·Ð°Ð´";},dayAgo:"Ð²Ñ‡ÐµÑ€Ð°",daysAgo:function(b){return"{delta} "+a(b,"Ð´ÐµÐ½ÑŒ","Ð´Ð½Ñ","Ð´Ð½ÐµÐ¹")+" Ð½Ð°Ð·Ð°Ð´";
},weekAgo:"Ð½ÐµÐ´ÐµÐ»ÑŽ Ð½Ð°Ð·Ð°Ð´",weeksAgo:function(b){return"{delta} "+a(b,"Ð½ÐµÐ´ÐµÐ»Ñ","Ð½ÐµÐ´ÐµÐ»Ð¸","Ð½ÐµÐ´ÐµÐ»ÑŒ")+" Ð½Ð°Ð·Ð°Ð´";},monthAgo:"Ð¼ÐµÑÑÑ† Ð½Ð°Ð·Ð°Ð´",monthsAgo:function(b){return"{delta} "+a(b,"Ð¼ÐµÑÑÑ†","Ð¼ÐµÑÑÑ†Ð°","Ð¼ÐµÑÐµÑ†ÐµÐ²")+" Ð½Ð°Ð·Ð°Ð´";
},yearAgo:"Ð³Ð¾Ð´ Ð½Ð°Ð·Ð°Ð´",yearsAgo:function(b){return"{delta} "+a(b,"Ð³Ð¾Ð´","Ð³Ð¾Ð´Ð°","Ð»ÐµÑ‚")+" Ð½Ð°Ð·Ð°Ð´";},lessThanMinuteUntil:"Ð¼ÐµÐ½ÑŒÑˆÐµ Ñ‡ÐµÐ¼ Ñ‡ÐµÑ€ÐµÐ· Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ",minuteUntil:"Ñ‡ÐµÑ€ÐµÐ· Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ",minutesUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ñ‡Ð°Ñ","Ñ‡Ð°ÑÐ°","Ñ‡Ð°ÑÐ¾Ð²")+"";
},hourUntil:"Ñ‡ÐµÑ€ÐµÐ· Ñ‡Ð°Ñ",hoursUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ñ‡Ð°Ñ","Ñ‡Ð°ÑÐ°","Ñ‡Ð°ÑÐ¾Ð²")+"";},dayUntil:"Ð·Ð°Ð²Ñ‚Ñ€Ð°",daysUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ð´ÐµÐ½ÑŒ","Ð´Ð½Ñ","Ð´Ð½ÐµÐ¹")+"";
},weekUntil:"Ñ‡ÐµÑ€ÐµÐ· Ð½ÐµÐ´ÐµÐ»ÑŽ",weeksUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ð½ÐµÐ´ÐµÐ»ÑŽ","Ð½ÐµÐ´ÐµÐ»Ð¸","Ð½ÐµÐ´ÐµÐ»ÑŒ")+"";},monthUntil:"Ñ‡ÐµÑ€ÐµÐ· Ð¼ÐµÑÑÑ†",monthsUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ð¼ÐµÑÑÑ†","Ð¼ÐµÑÑÑ†Ð°","Ð¼ÐµÑÐµÑ†ÐµÐ²")+"";
},yearUntil:"Ñ‡ÐµÑ€ÐµÐ·",yearsUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ð³Ð¾Ð´","Ð³Ð¾Ð´Ð°","Ð»ÐµÑ‚")+"";}});Locale.define("ru-RU-unicode").inherit("ru-RU","Date");
})();Locale.define("ru-RU","FormValidator",{required:"Ð­Ñ‚Ð¾ Ð¿Ð¾Ð»Ðµ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ðº Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸ÑŽ.",minLength:"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ {minLength} ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð² (Ð’Ñ‹ Ð²Ð²ÐµÐ»Ð¸ {length}).",maxLength:"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ðµ Ð±Ð¾Ð»ÑŒÑˆÐµ {maxLength} ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð² (Ð’Ñ‹ Ð²Ð²ÐµÐ»Ð¸ {length}).",integer:"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð² ÑÑ‚Ð¾ Ð¿Ð¾Ð»Ðµ Ñ‡Ð¸ÑÐ»Ð¾. Ð”Ñ€Ð¾Ð±Ð½Ñ‹Ðµ Ñ‡Ð¸ÑÐ»Ð° (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€ 1.25) Ñ‚ÑƒÑ‚ Ð½Ðµ Ñ€Ð°Ð·Ñ€ÐµÑˆÐµÐ½Ñ‹.",numeric:'ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð² ÑÑ‚Ð¾ Ð¿Ð¾Ð»Ðµ Ñ‡Ð¸ÑÐ»Ð¾ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€ "1" Ð¸Ð»Ð¸ "1.1", Ð¸Ð»Ð¸ "-1", Ð¸Ð»Ð¸ "-1.1").',digits:"Ð’ ÑÑ‚Ð¾Ð¼ Ð¿Ð¾Ð»Ðµ Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ñ†Ð¸Ñ„Ñ€Ñ‹ Ð¸ Ð·Ð½Ð°ÐºÐ¸ Ð¿ÑƒÐ½ÐºÑ‚ÑƒÐ°Ñ†Ð¸Ð¸ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð½Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€ ÑÐ¾ Ð·Ð½Ð°ÐºÐ°Ð¼Ð¸ Ð´ÐµÑ„Ð¸ÑÐ° Ð¸Ð»Ð¸ Ñ Ñ‚Ð¾Ñ‡ÐºÐ°Ð¼Ð¸).",alpha:"Ð’ ÑÑ‚Ð¾Ð¼ Ð¿Ð¾Ð»Ðµ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð»Ð°Ñ‚Ð¸Ð½ÑÐºÐ¸Ðµ Ð±ÑƒÐºÐ²Ñ‹ (a-z). ÐŸÑ€Ð¾Ð±ÐµÐ»Ñ‹ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸Ðµ ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ‹ Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ñ‹.",alphanum:"Ð’ ÑÑ‚Ð¾Ð¼ Ð¿Ð¾Ð»Ðµ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð»Ð°Ñ‚Ð¸Ð½ÑÐºÐ¸Ðµ Ð±ÑƒÐºÐ²Ñ‹ (a-z) Ð¸ Ñ†Ð¸Ñ„Ñ€Ñ‹ (0-9). ÐŸÑ€Ð¾Ð±ÐµÐ»Ñ‹ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸Ðµ ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ‹ Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ñ‹.",dateSuchAs:"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½ÑƒÑŽ Ð´Ð°Ñ‚Ñƒ {date}",dateInFormatMDY:'ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð´Ð°Ñ‚Ñƒ Ð² Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ðµ ÐœÐœ/Ð”Ð”/Ð“Ð“Ð“Ð“ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€ "12/31/1999")',email:'ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐºÐ¾Ñ€Ñ€ÐµÐºÑ‚Ð½Ñ‹Ð¹ ÐµÐ¼ÐµÐ¹Ð»-Ð°Ð´Ñ€ÐµÑ. Ð”Ð»Ñ Ð¿Ñ€Ð¸Ð¼ÐµÑ€Ð° "fred@domain.com".',url:"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½ÑƒÑŽ ÑÑÑ‹Ð»ÐºÑƒ Ð²Ð¸Ð´Ð° http://www.example.com.",currencyDollar:"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÑÑƒÐ¼Ð¼Ñƒ Ð² Ð´Ð¾Ð»Ð»Ð°Ñ€Ð°Ñ…. ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: $100.00 .",oneRequired:"ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ…Ð¾Ñ‚ÑŒ Ñ‡Ñ‚Ð¾-Ð½Ð¸Ð±ÑƒÐ´ÑŒ Ð² Ð¾Ð´Ð½Ð¾Ð¼ Ð¸Ð· ÑÑ‚Ð¸Ñ… Ð¿Ð¾Ð»ÐµÐ¹.",errorPrefix:"ÐžÑˆÐ¸Ð±ÐºÐ°: ",warningPrefix:"Ð’Ð½Ð¸Ð¼Ð°Ð½Ð¸Ðµ: "});
Locale.define("ru-RU-unicode").inherit("ru-RU","FormValidator");(function(){var a=function(f,d,c,e,b){return(f>=1&&f<=3)?arguments[f]:b;};Locale.define("si-SI","Date",{months:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],months_abbr:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],days:["nedelja","ponedeljek","torek","sreda","Äetrtek","petek","sobota"],days_abbr:["ned","pon","tor","sre","Äet","pet","sob"],dateOrder:["date","month","year"],shortDate:"%d.%m.%Y",shortTime:"%H.%M",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:".",lessThanMinuteAgo:"manj kot minuto nazaj",minuteAgo:"minuto nazaj",minutesAgo:function(b){return"{delta} "+a(b,"minuto","minuti","minute","minut")+" nazaj";
},hourAgo:"uro nazaj",hoursAgo:function(b){return"{delta} "+a(b,"uro","uri","ure","ur")+" nazaj";},dayAgo:"dan nazaj",daysAgo:function(b){return"{delta} "+a(b,"dan","dneva","dni","dni")+" nazaj";
},weekAgo:"teden nazaj",weeksAgo:function(b){return"{delta} "+a(b,"teden","tedna","tedne","tednov")+" nazaj";},monthAgo:"mesec nazaj",monthsAgo:function(b){return"{delta} "+a(b,"mesec","meseca","mesece","mesecov")+" nazaj";
},yearthAgo:"leto nazaj",yearsAgo:function(b){return"{delta} "+a(b,"leto","leti","leta","let")+" nazaj";},lessThanMinuteUntil:"Å¡e manj kot minuto",minuteUntil:"Å¡e minuta",minutesUntil:function(b){return"Å¡e {delta} "+a(b,"minuta","minuti","minute","minut");
},hourUntil:"Å¡e ura",hoursUntil:function(b){return"Å¡e {delta} "+a(b,"ura","uri","ure","ur");},dayUntil:"Å¡e dan",daysUntil:function(b){return"Å¡e {delta} "+a(b,"dan","dneva","dnevi","dni");
},weekUntil:"Å¡e tedn",weeksUntil:function(b){return"Å¡e {delta} "+a(b,"teden","tedna","tedni","tednov");},monthUntil:"Å¡e mesec",monthsUntil:function(b){return"Å¡e {delta} "+a(b,"mesec","meseca","meseci","mesecov");
},yearUntil:"Å¡e leto",yearsUntil:function(b){return"Å¡e {delta} "+a(b,"leto","leti","leta","let");}});})();Locale.define("si-SI","FormValidator",{required:"To polje je obvezno",minLength:"Prosim, vnesite vsaj {minLength} znakov (vnesli ste {length} znakov).",maxLength:"Prosim, ne vnesite veÄ kot {maxLength} znakov (vnesli ste {length} znakov).",integer:"Prosim, vnesite celo Å¡tevilo. Decimalna Å¡tevila (kot 1,25) niso dovoljena.",numeric:'Prosim, vnesite samo numeriÄne vrednosti (kot "1" ali "1.1" ali "-1" ali "-1.1").',digits:"Prosim, uporabite Å¡tevilke in loÄila le na tem polju (na primer, dovoljena je telefonska Å¡tevilka z pomiÅ¡laji ali pikami).",alpha:"Prosim, uporabite le Ärke v tem plju. Presledki in drugi znaki niso dovoljeni.",alphanum:"Prosim, uporabite samo Ärke ali Å¡tevilke v tem polju. Presledki in drugi znaki niso dovoljeni.",dateSuchAs:"Prosim, vnesite pravilen datum kot {date}",dateInFormatMDY:'Prosim, vnesite pravilen datum kot MM.DD.YYYY (primer "12.31.1999")',email:'Prosim, vnesite pravilen email naslov. Na primer "fred@domain.com".',url:"Prosim, vnesite pravilen URL kot http://www.example.com.",currencyDollar:"Prosim, vnesit epravilno vrednost â‚¬. Primer 100,00â‚¬ .",oneRequired:"Prosimo, vnesite nekaj za vsaj eno izmed teh polj.",errorPrefix:"Napaka: ",warningPrefix:"Opozorilo: ",noSpace:"To vnosno polje ne dopuÅ¡Äa presledkov.",reqChkByNode:"NiÄ niste izbrali.",requiredChk:"To polje je obvezno",reqChkByName:"Prosim, izberite {label}.",match:"To polje se mora ujemati z poljem {matchName}",startDate:"datum zaÄetka",endDate:"datum konca",currendDate:"trenuten datum",afterDate:"Datum bi moral biti isti ali po {label}.",beforeDate:"Datum bi moral biti isti ali pred {label}.",startMonth:"Prosim, vnesite zaÄetni datum",sameMonth:"Ta dva datuma morata biti v istem mesecu - premeniti morate eno ali drugo.",creditcard:"Å tevilka kreditne kartice ni pravilna. Preverite Å¡tevilko ali poskusite Å¡e enkrat. VneÅ¡enih {length} znakov."});
Locale.define("sv-SE","Date",{months:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"],months_abbr:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],days:["sÃ¶ndag","mÃ¥ndag","tisdag","onsdag","torsdag","fredag","lÃ¶rdag"],days_abbr:["sÃ¶n","mÃ¥n","tis","ons","tor","fre","lÃ¶r"],dateOrder:["year","month","date"],shortDate:"%Y-%m-%d",shortTime:"%H:%M",AM:"",PM:"",firstDayOfWeek:1,ordinal:"",lessThanMinuteAgo:"mindre Ã¤n en minut sedan",minuteAgo:"ungefÃ¤r en minut sedan",minutesAgo:"{delta} minuter sedan",hourAgo:"ungefÃ¤r en timme sedan",hoursAgo:"ungefÃ¤r {delta} timmar sedan",dayAgo:"1 dag sedan",daysAgo:"{delta} dagar sedan",lessThanMinuteUntil:"mindre Ã¤n en minut sedan",minuteUntil:"ungefÃ¤r en minut sedan",minutesUntil:"{delta} minuter sedan",hourUntil:"ungefÃ¤r en timme sedan",hoursUntil:"ungefÃ¤r {delta} timmar sedan",dayUntil:"1 dag sedan",daysUntil:"{delta} dagar sedan"});
Locale.define("sv-SE","FormValidator",{required:"FÃ¤ltet Ã¤r obligatoriskt.",minLength:"Ange minst {minLength} tecken (du angav {length} tecken).",maxLength:"Ange hÃ¶gst {maxLength} tecken (du angav {length} tecken). ",integer:"Ange ett heltal i fÃ¤ltet. Tal med decimaler (t.ex. 1,25) Ã¤r inte tillÃ¥tna.",numeric:'Ange endast numeriska vÃ¤rden i detta fÃ¤lt (t.ex. "1" eller "1.1" eller "-1" eller "-1,1").',digits:"AnvÃ¤nd endast siffror och skiljetecken i detta fÃ¤lt (till exempel ett telefonnummer med bindestreck tillÃ¥tet).",alpha:"AnvÃ¤nd endast bokstÃ¤ver (a-Ã¶) i detta fÃ¤lt. Inga mellanslag eller andra tecken Ã¤r tillÃ¥tna.",alphanum:"AnvÃ¤nd endast bokstÃ¤ver (a-Ã¶) och siffror (0-9) i detta fÃ¤lt. Inga mellanslag eller andra tecken Ã¤r tillÃ¥tna.",dateSuchAs:"Ange ett giltigt datum som t.ex. {date}",dateInFormatMDY:'Ange ett giltigt datum som t.ex. YYYY-MM-DD (i.e. "1999-12-31")',email:'Ange en giltig e-postadress. Till exempel "erik@domain.com".',url:"Ange en giltig webbadress som http://www.example.com.",currencyDollar:"Ange en giltig belopp. Exempelvis 100,00.",oneRequired:"VÃ¤nligen ange minst ett av dessa alternativ.",errorPrefix:"Fel: ",warningPrefix:"Varning: ",noSpace:"Det fÃ¥r inte finnas nÃ¥gra mellanslag i detta fÃ¤lt.",reqChkByNode:"Inga objekt Ã¤r valda.",requiredChk:"Detta Ã¤r ett obligatoriskt fÃ¤lt.",reqChkByName:"VÃ¤lj en {label}.",match:"Detta fÃ¤lt mÃ¥ste matcha {matchName}",startDate:"startdatumet",endDate:"slutdatum",currendDate:"dagens datum",afterDate:"Datumet bÃ¶r vara samma eller senare Ã¤n {label}.",beforeDate:"Datumet bÃ¶r vara samma eller tidigare Ã¤n {label}.",startMonth:"VÃ¤lj en start mÃ¥nad",sameMonth:"Dessa tvÃ¥ datum mÃ¥ste vara i samma mÃ¥nad - du mÃ¥ste Ã¤ndra det ena eller det andra."});
(function(){var a=function(j,e,c,i,b){var h=(j/10).toInt(),g=j%10,f=(j/100).toInt();if(h==1&&j>10){return i;}if(g==1){return e;}if(g>0&&g<5){return c;}return i;
};Locale.define("uk-UA","Date",{months:["Ð¡Ñ–Ñ‡ÐµÐ½ÑŒ","Ð›ÑŽÑ‚Ð¸Ð¹","Ð‘ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ","ÐšÐ²Ñ–Ñ‚ÐµÐ½ÑŒ","Ð¢Ñ€Ð°Ð²ÐµÐ½ÑŒ","Ð§ÐµÑ€Ð²ÐµÐ½ÑŒ","Ð›Ð¸Ð¿ÐµÐ½ÑŒ","Ð¡ÐµÑ€Ð¿ÐµÐ½ÑŒ","Ð’ÐµÑ€ÐµÑÐµÐ½ÑŒ","Ð–Ð¾Ð²Ñ‚ÐµÐ½ÑŒ","Ð›Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´","Ð“Ñ€ÑƒÐ´ÐµÐ½ÑŒ"],months_abbr:["Ð¡Ñ–Ñ‡","Ð›ÑŽÑ‚","Ð‘ÐµÑ€","ÐšÐ²Ñ–Ñ‚","Ð¢Ñ€Ð°Ð²","Ð§ÐµÑ€Ð²","Ð›Ð¸Ð¿","Ð¡ÐµÑ€Ð¿","Ð’ÐµÑ€","Ð–Ð¾Ð²Ñ‚","Ð›Ð¸ÑÑ‚","Ð“Ñ€ÑƒÐ´"],days:["ÐÐµÐ´Ñ–Ð»Ñ","ÐŸÐ¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº","Ð’Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº","Ð¡ÐµÑ€ÐµÐ´Ð°","Ð§ÐµÑ‚Ð²ÐµÑ€","ÐŸ'ÑÑ‚Ð½Ð¸Ñ†Ñ","Ð¡ÑƒÐ±Ð¾Ñ‚Ð°"],days_abbr:["ÐÐ´","ÐŸÐ½","Ð’Ñ‚","Ð¡Ñ€","Ð§Ñ‚","ÐŸÑ‚","Ð¡Ð±"],dateOrder:["date","month","year"],shortDate:"%d/%m/%Y",shortTime:"%H:%M",AM:"Ð´Ð¾ Ð¿Ð¾Ð»ÑƒÐ´Ð½Ñ",PM:"Ð¿Ð¾ Ð¿Ð¾Ð»ÑƒÐ´Ð½ÑŽ",firstDayOfWeek:1,ordinal:"",lessThanMinuteAgo:"Ð¼ÐµÐ½ÑŒÑˆÐµ Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸ Ñ‚Ð¾Ð¼Ñƒ",minuteAgo:"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ Ñ‚Ð¾Ð¼Ñƒ",minutesAgo:function(b){return"{delta} "+a(b,"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ","Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸","Ñ…Ð²Ð¸Ð»Ð¸Ð½")+" Ñ‚Ð¾Ð¼Ñƒ";
},hourAgo:"Ð³Ð¾Ð´Ð¸Ð½Ñƒ Ñ‚Ð¾Ð¼Ñƒ",hoursAgo:function(b){return"{delta} "+a(b,"Ð³Ð¾Ð´Ð¸Ð½Ñƒ","Ð³Ð¾Ð´Ð¸Ð½Ð¸","Ð³Ð¾Ð´Ð¸Ð½")+" Ñ‚Ð¾Ð¼Ñƒ";},dayAgo:"Ð²Ñ‡Ð¾Ñ€Ð°",daysAgo:function(b){return"{delta} "+a(b,"Ð´ÐµÐ½ÑŒ","Ð´Ð½Ñ","Ð´Ð½Ñ–Ð²")+" Ñ‚Ð¾Ð¼Ñƒ";
},weekAgo:"Ñ‚Ð¸Ð¶Ð´ÐµÐ½ÑŒ Ñ‚Ð¾Ð¼Ñƒ",weeksAgo:function(b){return"{delta} "+a(b,"Ñ‚Ð¸Ð¶Ð´ÐµÐ½ÑŒ","Ñ‚Ð¸Ð¶Ð½Ñ–","Ñ‚Ð¸Ð¶Ð½Ñ–Ð²")+" Ñ‚Ð¾Ð¼Ñƒ";},monthAgo:"Ð¼Ñ–ÑÑÑ†ÑŒ Ñ‚Ð¾Ð¼Ñƒ",monthsAgo:function(b){return"{delta} "+a(b,"Ð¼Ñ–ÑÑÑ†ÑŒ","Ð¼Ñ–ÑÑÑ†Ñ–","Ð¼Ñ–ÑÑÑ†Ñ–Ð²")+" Ñ‚Ð¾Ð¼Ñƒ";
},yearAgo:"Ñ€Ñ–Ðº Ñ‚Ð¾Ð¼Ñƒ",yearsAgo:function(b){return"{delta} "+a(b,"Ñ€Ñ–Ðº","Ñ€Ð¾ÐºÐ¸","Ñ€Ð¾ÐºÑ–Ð²")+" Ñ‚Ð¾Ð¼Ñƒ";},lessThanMinuteUntil:"Ð·Ð° Ð¼Ð¸Ñ‚ÑŒ",minuteUntil:"Ñ‡ÐµÑ€ÐµÐ· Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ",minutesUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ","Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸","Ñ…Ð²Ð¸Ð»Ð¸Ð½");
},hourUntil:"Ñ‡ÐµÑ€ÐµÐ· Ð³Ð¾Ð´Ð¸Ð½Ñƒ",hoursUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ð³Ð¾Ð´Ð¸Ð½Ñƒ","Ð³Ð¾Ð´Ð¸Ð½Ð¸","Ð³Ð¾Ð´Ð¸Ð½");},dayUntil:"Ð·Ð°Ð²Ñ‚Ñ€Ð°",daysUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ð´ÐµÐ½ÑŒ","Ð´Ð½Ñ","Ð´Ð½Ñ–Ð²");
},weekUntil:"Ñ‡ÐµÑ€ÐµÐ· Ñ‚Ð¸Ð¶Ð´ÐµÐ½ÑŒ",weeksUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ñ‚Ð¸Ð¶Ð´ÐµÐ½ÑŒ","Ñ‚Ð¸Ð¶Ð½Ñ–","Ñ‚Ð¸Ð¶Ð½Ñ–Ð²");},monthUntil:"Ñ‡ÐµÑ€ÐµÐ· Ð¼Ñ–ÑÑÑ†ÑŒ",monthesUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ð¼Ñ–ÑÑÑ†ÑŒ","Ð¼Ñ–ÑÑÑ†Ñ–","Ð¼Ñ–ÑÑÑ†Ñ–Ð²");
},yearUntil:"Ñ‡ÐµÑ€ÐµÐ· Ñ€Ñ–Ðº",yearsUntil:function(b){return"Ñ‡ÐµÑ€ÐµÐ· {delta} "+a(b,"Ñ€Ñ–Ðº","Ñ€Ð¾ÐºÐ¸","Ñ€Ð¾ÐºÑ–Ð²");}});})();Locale.define("uk-UA","FormValidator",{required:"Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ðµ Ð±ÑƒÑ‚Ð¸ Ð·Ð°Ð¿Ð¾Ð²Ð½ÐµÐ½Ð¸Ð¼.",minLength:"Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ Ñ…Ð¾Ñ‡Ð° Ð± {minLength} ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ–Ð² (Ð’Ð¸ Ð²Ð²ÐµÐ»Ð¸ {length}).",maxLength:"ÐšÑ–Ð»ÑŒÐºÑ–ÑÑ‚ÑŒ ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ–Ð² Ð½Ðµ Ð¼Ð¾Ð¶Ðµ Ð±ÑƒÑ‚Ð¸ Ð±Ñ–Ð»ÑŒÑˆÐµ {maxLength} (Ð’Ð¸ Ð²Ð²ÐµÐ»Ð¸ {length}).",integer:"Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ Ð² Ñ†Ðµ Ð¿Ð¾Ð»Ðµ Ñ‡Ð¸ÑÐ»Ð¾. Ð”Ñ€Ð¾Ð±Ð¾Ð²Ñ– Ñ‡Ð¸ÑÐ»Ð° (Ð½Ð°Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´ 1.25) Ð½Ðµ Ð´Ð¾Ð·Ð²Ð¾Ð»ÐµÐ½Ñ–.",numeric:'Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ Ð² Ñ†Ðµ Ð¿Ð¾Ð»Ðµ Ñ‡Ð¸ÑÐ»Ð¾ (Ð½Ð°Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´ "1" Ð°Ð±Ð¾ "1.1", Ð°Ð±Ð¾ "-1", Ð°Ð±Ð¾ "-1.1").',digits:"Ð’ Ñ†ÑŒÐ¾Ð¼Ñƒ Ð¿Ð¾Ð»Ñ– Ð²Ð¸ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð²Ð¸ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¾Ð²ÑƒÐ²Ð°Ñ‚Ð¸ Ð»Ð¸ÑˆÐµ Ñ†Ð¸Ñ„Ñ€Ð¸ Ñ– Ð·Ð½Ð°ÐºÐ¸ Ð¿ÑƒÐ½ÐºÑ‚Ñ–Ð°Ñ†Ñ–Ñ— (Ð½Ð°Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´, Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð½Ð¸Ð¹ Ð½Ð¾Ð¼ÐµÑ€ Ð· Ð·Ð½Ð°ÐºÐ°Ð¼Ð¸ Ð´ÐµÑ„Ñ–Ð·Ñƒ Ð°Ð±Ð¾ Ð· ÐºÑ€Ð°Ð¿ÐºÐ°Ð¼Ð¸).",alpha:"Ð’ Ñ†ÑŒÐ¾Ð¼Ñƒ Ð¿Ð¾Ð»Ñ– Ð¼Ð¾Ð¶Ð½Ð° Ð²Ð¸ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¾Ð²ÑƒÐ²Ð°Ñ‚Ð¸ Ð»Ð¸ÑˆÐµ Ð»Ð°Ñ‚Ð¸Ð½ÑÑŒÐºÑ– Ð»Ñ–Ñ‚ÐµÑ€Ð¸ (a-z). ÐŸÑ€Ð¾Ð±Ñ–Ð»Ð¸ Ñ– Ñ–Ð½ÑˆÑ– ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¸ Ð·Ð°Ð±Ð¾Ñ€Ð¾Ð½ÐµÐ½Ñ–.",alphanum:"Ð’ Ñ†ÑŒÐ¾Ð¼Ñƒ Ð¿Ð¾Ð»Ñ– Ð¼Ð¾Ð¶Ð½Ð° Ð²Ð¸ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¾Ð²ÑƒÐ²Ð°Ñ‚Ð¸ Ð»Ð¸ÑˆÐµ Ð»Ð°Ñ‚Ð¸Ð½ÑÑŒÐºÑ– Ð»Ñ–Ñ‚ÐµÑ€Ð¸ (a-z) Ñ– Ñ†Ð¸Ñ„Ñ€Ð¸ (0-9). ÐŸÑ€Ð¾Ð±Ñ–Ð»Ð¸ Ñ– Ñ–Ð½ÑˆÑ– ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¸ Ð·Ð°Ð±Ð¾Ñ€Ð¾Ð½ÐµÐ½Ñ–.",dateSuchAs:"Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ ÐºÐ¾Ñ€ÐµÐºÑ‚Ð½Ñƒ Ð´Ð°Ñ‚Ñƒ {date}.",dateInFormatMDY:'Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ Ð´Ð°Ñ‚Ñƒ Ð² Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ñ– ÐœÐœ/Ð”Ð”/Ð Ð Ð Ð  (Ð½Ð°Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´ "12/31/2009").',email:'Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ ÐºÐ¾Ñ€ÐµÐºÑ‚Ð½Ñƒ Ð°Ð´Ñ€ÐµÑÑƒ ÐµÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ñ— Ð¿Ð¾ÑˆÑ‚Ð¸ (Ð½Ð°Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´ "name@domain.com").',url:"Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ ÐºÐ¾Ñ€ÐµÐºÑ‚Ð½Ðµ Ñ–Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚-Ð¿Ð¾ÑÐ¸Ð»Ð°Ð½Ð½Ñ (Ð½Ð°Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´ http://www.example.com).",currencyDollar:'Ð’Ð²ÐµÐ´Ñ–Ñ‚ÑŒ ÑÑƒÐ¼Ñƒ Ð² Ð´Ð¾Ð»Ð°Ñ€Ð°Ñ… (Ð½Ð°Ð¿Ñ€Ð¸ÐºÐ»Ð°Ð´ "$100.00").',oneRequired:"Ð—Ð°Ð¿Ð¾Ð²Ð½Ñ–Ñ‚ÑŒ Ð¾Ð´Ð½Ðµ Ð· Ð¿Ð¾Ð»Ñ–Ð².",errorPrefix:"ÐŸÐ¾Ð¼Ð¸Ð»ÐºÐ°: ",warningPrefix:"Ð£Ð²Ð°Ð³Ð°: ",noSpace:"ÐŸÑ€Ð¾Ð±Ñ–Ð»Ð¸ Ð·Ð°Ð±Ð¾Ñ€Ð¾Ð½ÐµÐ½Ñ–.",reqChkByNode:"ÐÐµ Ð²Ñ–Ð´Ð¼Ñ–Ñ‡ÐµÐ½Ð¾ Ð¶Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð²Ð°Ñ€Ñ–Ð°Ð½Ñ‚Ñƒ.",requiredChk:"Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ðµ Ð±ÑƒÑ‚Ð¸ Ð²Ñ–Ð¼Ñ–Ñ‡ÐµÐ½Ð¸Ð¼.",reqChkByName:"Ð‘ÑƒÐ´ÑŒ Ð»Ð°ÑÐºÐ°, Ð²Ñ–Ð´Ð¼Ñ–Ñ‚ÑŒÑ‚Ðµ {label}.",match:"Ð¦Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð¾ Ð²Ñ–Ð´Ð¿Ð¾Ð²Ñ–Ð´Ð°Ñ‚Ð¸ {matchName}",startDate:"Ð¿Ð¾Ñ‡Ð°Ñ‚ÐºÐ¾Ð²Ð° Ð´Ð°Ñ‚Ð°",endDate:"ÐºÑ–Ð½Ñ†ÐµÐ²Ð° Ð´Ð°Ñ‚Ð°",currendDate:"ÑÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ–ÑˆÐ½Ñ Ð´Ð°Ñ‚Ð°",afterDate:"Ð¦Ñ Ð´Ð°Ñ‚Ð° Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð° Ð±ÑƒÑ‚Ð¸ Ñ‚Ð°ÐºÐ¾ÑŽ Ð¶, Ð°Ð±Ð¾ Ð¿Ñ–Ð·Ð½Ñ–ÑˆÐ¾ÑŽ Ð·Ð° {label}.",beforeDate:"Ð¦Ñ Ð´Ð°Ñ‚Ð° Ð¿Ð¾Ð²Ð¸Ð½Ð½Ð° Ð±ÑƒÑ‚Ð¸ Ñ‚Ð°ÐºÐ¾ÑŽ Ð¶, Ð°Ð±Ð¾ Ñ€Ð°Ð½Ñ–ÑˆÐ¾ÑŽ Ð·Ð° {label}.",startMonth:"Ð‘ÑƒÐ´ÑŒ Ð»Ð°ÑÐºÐ°, Ð²Ð¸Ð±ÐµÑ€Ñ–Ñ‚ÑŒ Ð¿Ð¾Ñ‡Ð°Ñ‚ÐºÐ¾Ð²Ð¸Ð¹ Ð¼Ñ–ÑÑÑ†ÑŒ",sameMonth:"Ð¦Ñ– Ð´Ð°Ñ‚Ð¸ Ð¿Ð¾Ð²Ð¸Ð½Ð½Ñ– Ð²Ñ–Ð´Ð½Ð¾ÑÐ¸Ñ‚Ð¸ÑÑŒ Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ñ– Ñ‚Ð¾Ð³Ð¾ Ð¶ Ð¼Ñ–ÑÑÑ†Ñ. Ð‘ÑƒÐ´ÑŒ Ð»Ð°ÑÐºÐ°, Ð·Ð¼Ñ–Ð½Ñ–Ñ‚ÑŒ Ð¾Ð´Ð½Ñƒ Ð· Ð½Ð¸Ñ….",creditcard:"ÐÐ¾Ð¼ÐµÑ€ ÐºÑ€ÐµÐ´Ð¸Ñ‚Ð½Ð¾Ñ— ÐºÐ°Ñ€Ñ‚Ð¸ Ð²Ð²ÐµÐ´ÐµÐ½Ð¸Ð¹ Ð½ÐµÐ¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾. Ð‘ÑƒÐ´ÑŒ Ð»Ð°ÑÐºÐ°, Ð¿ÐµÑ€ÐµÐ²Ñ–Ñ€Ñ‚Ðµ Ð¹Ð¾Ð³Ð¾. Ð’Ð²ÐµÐ´ÐµÐ½Ð¾ {length} ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ–Ð²."});
Locale.define("zh-CHS","Date",{months:["ä¸€æœˆ","äºŒæœˆ","ä¸‰æœˆ","å››æœˆ","äº”æœˆ","å…­æœˆ","ä¸ƒæœˆ","å…«æœˆ","ä¹æœˆ","åæœˆ","åä¸€æœˆ","åäºŒæœˆ"],months_abbr:["ä¸€","äºŒ","ä¸‰","å››","äº”","å…­","ä¸ƒ","å…«","ä¹","å","åä¸€","åäºŒ"],days:["æ˜ŸæœŸæ—¥","æ˜ŸæœŸä¸€","æ˜ŸæœŸäºŒ","æ˜ŸæœŸä¸‰","æ˜ŸæœŸå››","æ˜ŸæœŸäº”","æ˜ŸæœŸå…­"],days_abbr:["æ—¥","ä¸€","äºŒ","ä¸‰","å››","äº”","å…­"],dateOrder:["year","month","date"],shortDate:"%Y-%m-%d",shortTime:"%I:%M%p",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"",lessThanMinuteAgo:"ä¸åˆ°1åˆ†é’Ÿå‰",minuteAgo:"å¤§çº¦1åˆ†é’Ÿå‰",minutesAgo:"{delta}åˆ†é’Ÿä¹‹å‰",hourAgo:"å¤§çº¦1å°æ—¶å‰",hoursAgo:"å¤§çº¦{delta}å°æ—¶å‰",dayAgo:"1å¤©å‰",daysAgo:"{delta}å¤©å‰",weekAgo:"1æ˜ŸæœŸå‰",weeksAgo:"{delta}æ˜ŸæœŸå‰",monthAgo:"1ä¸ªæœˆå‰",monthsAgo:"{delta}ä¸ªæœˆå‰",yearAgo:"1å¹´å‰",yearsAgo:"{delta}å¹´å‰",lessThanMinuteUntil:"ä»ŽçŽ°åœ¨å¼€å§‹ä¸åˆ°1åˆ†é’Ÿ",minuteUntil:"ä»ŽçŽ°åœ¨å¼€å§‹ç´„1åˆ†é’Ÿ",minutesUntil:"ä»ŽçŽ°åœ¨å¼€å§‹çº¦{delta}åˆ†é’Ÿ",hourUntil:"ä»ŽçŽ°åœ¨å¼€å§‹1å°æ—¶",hoursUntil:"ä»ŽçŽ°åœ¨å¼€å§‹çº¦{delta}å°æ—¶",dayUntil:"ä»ŽçŽ°åœ¨å¼€å§‹1å¤©",daysUntil:"ä»ŽçŽ°åœ¨å¼€å§‹{delta}å¤©",weekUntil:"ä»ŽçŽ°åœ¨å¼€å§‹1æ˜ŸæœŸ",weeksUntil:"ä»ŽçŽ°åœ¨å¼€å§‹{delta}æ˜ŸæœŸ",monthUntil:"ä»ŽçŽ°åœ¨å¼€å§‹ä¸€ä¸ªæœˆ",monthsUntil:"ä»ŽçŽ°åœ¨å¼€å§‹{delta}ä¸ªæœˆ",yearUntil:"ä»ŽçŽ°åœ¨å¼€å§‹1å¹´",yearsUntil:"ä»ŽçŽ°åœ¨å¼€å§‹{delta}å¹´"});
Locale.define("zh-CHT","Date",{months:["ä¸€æœˆ","äºŒæœˆ","ä¸‰æœˆ","å››æœˆ","äº”æœˆ","å…­æœˆ","ä¸ƒæœˆ","å…«æœˆ","ä¹æœˆ","åæœˆ","åä¸€æœˆ","åäºŒæœˆ"],months_abbr:["ä¸€","äºŒ","ä¸‰","å››","äº”","å…­","ä¸ƒ","å…«","ä¹","å","åä¸€","åäºŒ"],days:["æ˜ŸæœŸæ—¥","æ˜ŸæœŸä¸€","æ˜ŸæœŸäºŒ","æ˜ŸæœŸä¸‰","æ˜ŸæœŸå››","æ˜ŸæœŸäº”","æ˜ŸæœŸå…­"],days_abbr:["æ—¥","ä¸€","äºŒ","ä¸‰","å››","äº”","å…­"],dateOrder:["year","month","date"],shortDate:"%Y-%m-%d",shortTime:"%I:%M%p",AM:"AM",PM:"PM",firstDayOfWeek:1,ordinal:"",lessThanMinuteAgo:"ä¸åˆ°1åˆ†é˜å‰",minuteAgo:"å¤§ç´„1åˆ†é˜å‰",minutesAgo:"{delta}åˆ†é˜ä¹‹å‰",hourAgo:"å¤§ç´„1å°æ™‚å‰",hoursAgo:"å¤§ç´„{delta}å°æ™‚å‰",dayAgo:"1å¤©å‰",daysAgo:"{delta}å¤©å‰",weekAgo:"1æ˜ŸæœŸå‰",weeksAgo:"{delta}æ˜ŸæœŸå‰",monthAgo:"1ä¸ªæœˆå‰",monthsAgo:"{delta}ä¸ªæœˆå‰",yearAgo:"1å¹´å‰",yearsAgo:"{delta}å¹´å‰",lessThanMinuteUntil:"å¾žç¾åœ¨é–‹å§‹ä¸åˆ°1åˆ†é˜",minuteUntil:"å¾žç¾åœ¨é–‹å§‹ç´„1åˆ†é˜",minutesUntil:"å¾žç¾åœ¨é–‹å§‹ç´„{delta}åˆ†é˜",hourUntil:"å¾žç¾åœ¨é–‹å§‹1å°æ™‚",hoursUntil:"å¾žç¾åœ¨é–‹å§‹ç´„{delta}å°æ™‚",dayUntil:"å¾žç¾åœ¨é–‹å§‹1å¤©",daysUntil:"å¾žç¾åœ¨é–‹å§‹{delta}å¤©",weekUntil:"å¾žç¾åœ¨é–‹å§‹1æ˜ŸæœŸ",weeksUntil:"å¾žç¾åœ¨é–‹å§‹{delta}æ˜ŸæœŸ",monthUntil:"å¾žç¾åœ¨é–‹å§‹ä¸€å€‹æœˆ",monthsUntil:"å¾žç¾åœ¨é–‹å§‹{delta}å€‹æœˆ",yearUntil:"å¾žç¾åœ¨é–‹å§‹1å¹´",yearsUntil:"å¾žç¾åœ¨é–‹å§‹{delta}å¹´"});
Locale.define("zh-CHS","FormValidator",{required:"æ­¤é¡¹å¿…å¡«ã€‚",minLength:"è¯·è‡³å°‘è¾“å…¥ {minLength} ä¸ªå­—ç¬¦ (å·²è¾“å…¥ {length} ä¸ª)ã€‚",maxLength:"æœ€å¤šåªèƒ½è¾“å…¥ {maxLength} ä¸ªå­—ç¬¦ (å·²è¾“å…¥ {length} ä¸ª)ã€‚",integer:'è¯·è¾“å…¥ä¸€ä¸ªæ•´æ•°ï¼Œä¸èƒ½åŒ…å«å°æ•°ç‚¹ã€‚ä¾‹å¦‚ï¼š"1", "200"ã€‚',numeric:'è¯·è¾“å…¥ä¸€ä¸ªæ•°å­—ï¼Œä¾‹å¦‚ï¼š"1", "1.1", "-1", "-1.1"ã€‚',digits:"è¯·è¾“å…¥ç”±æ•°å­—å’Œæ ‡ç‚¹ç¬¦å·ç»„æˆçš„å†…å®¹ã€‚ä¾‹å¦‚ç”µè¯å·ç ã€‚",alpha:"è¯·è¾“å…¥ A-Z çš„ 26 ä¸ªå­—æ¯ï¼Œä¸èƒ½åŒ…å«ç©ºæ ¼æˆ–ä»»ä½•å…¶ä»–å­—ç¬¦ã€‚",alphanum:"è¯·è¾“å…¥ A-Z çš„ 26 ä¸ªå­—æ¯æˆ– 0-9 çš„ 10 ä¸ªæ•°å­—ï¼Œä¸èƒ½åŒ…å«ç©ºæ ¼æˆ–ä»»ä½•å…¶ä»–å­—ç¬¦ã€‚",dateSuchAs:"è¯·è¾“å…¥åˆæ³•çš„æ—¥æœŸæ ¼å¼ï¼Œå¦‚ï¼š{date}ã€‚",dateInFormatMDY:'è¯·è¾“å…¥åˆæ³•çš„æ—¥æœŸæ ¼å¼ï¼Œä¾‹å¦‚ï¼šYYYY-MM-DD ("2010-12-31")ã€‚',email:'è¯·è¾“å…¥åˆæ³•çš„ç”µå­ä¿¡ç®±åœ°å€ï¼Œä¾‹å¦‚ï¼š"fred@domain.com"ã€‚',url:"è¯·è¾“å…¥åˆæ³•çš„ Url åœ°å€ï¼Œä¾‹å¦‚ï¼šhttp://www.example.comã€‚",currencyDollar:"è¯·è¾“å…¥åˆæ³•çš„è´§å¸ç¬¦å·ï¼Œä¾‹å¦‚ï¼šï¿¥100.0",oneRequired:"è¯·è‡³å°‘é€‰æ‹©ä¸€é¡¹ã€‚",errorPrefix:"é”™è¯¯ï¼š",warningPrefix:"è­¦å‘Šï¼š",noSpace:"ä¸èƒ½åŒ…å«ç©ºæ ¼ã€‚",reqChkByNode:"æœªé€‰æ‹©ä»»ä½•å†…å®¹ã€‚",requiredChk:"æ­¤é¡¹å¿…å¡«ã€‚",reqChkByName:"è¯·é€‰æ‹© {label}.",match:"å¿…é¡»ä¸Ž{matchName}ç›¸åŒ¹é…",startDate:"èµ·å§‹æ—¥æœŸ",endDate:"ç»“æŸæ—¥æœŸ",currendDate:"å½“å‰æ—¥æœŸ",afterDate:"æ—¥æœŸå¿…é¡»ç­‰äºŽæˆ–æ™šäºŽ {label}.",beforeDate:"æ—¥æœŸå¿…é¡»æ—©äºŽæˆ–ç­‰äºŽ {label}.",startMonth:"è¯·é€‰æ‹©èµ·å§‹æœˆä»½",sameMonth:"æ‚¨å¿…é¡»ä¿®æ”¹ä¸¤ä¸ªæ—¥æœŸä¸­çš„ä¸€ä¸ªï¼Œä»¥ç¡®ä¿å®ƒä»¬åœ¨åŒä¸€æœˆä»½ã€‚",creditcard:"æ‚¨è¾“å…¥çš„ä¿¡ç”¨å¡å·ç ä¸æ­£ç¡®ã€‚å½“å‰å·²è¾“å…¥{length}ä¸ªå­—ç¬¦ã€‚"});
Locale.define("zh-CHT","FormValidator",{required:"æ­¤é …å¿…å¡«ã€‚ ",minLength:"è«‹è‡³å°‘è¼¸å…¥{minLength} å€‹å­—ç¬¦(å·²è¼¸å…¥{length} å€‹)ã€‚ ",maxLength:"æœ€å¤šåªèƒ½è¼¸å…¥{maxLength} å€‹å­—ç¬¦(å·²è¼¸å…¥{length} å€‹)ã€‚ ",integer:'è«‹è¼¸å…¥ä¸€å€‹æ•´æ•¸ï¼Œä¸èƒ½åŒ…å«å°æ•¸é»žã€‚ä¾‹å¦‚ï¼š"1", "200"ã€‚ ',numeric:'è«‹è¼¸å…¥ä¸€å€‹æ•¸å­—ï¼Œä¾‹å¦‚ï¼š"1", "1.1", "-1", "-1.1"ã€‚ ',digits:"è«‹è¼¸å…¥ç”±æ•¸å­—å’Œæ¨™é»žç¬¦è™Ÿçµ„æˆçš„å…§å®¹ã€‚ä¾‹å¦‚é›»è©±è™Ÿç¢¼ã€‚ ",alpha:"è«‹è¼¸å…¥AZ çš„26 å€‹å­—æ¯ï¼Œä¸èƒ½åŒ…å«ç©ºæ ¼æˆ–ä»»ä½•å…¶ä»–å­—ç¬¦ã€‚ ",alphanum:"è«‹è¼¸å…¥AZ çš„26 å€‹å­—æ¯æˆ–0-9 çš„10 å€‹æ•¸å­—ï¼Œä¸èƒ½åŒ…å«ç©ºæ ¼æˆ–ä»»ä½•å…¶ä»–å­—ç¬¦ã€‚ ",dateSuchAs:"è«‹è¼¸å…¥åˆæ³•çš„æ—¥æœŸæ ¼å¼ï¼Œå¦‚ï¼š{date}ã€‚ ",dateInFormatMDY:'è«‹è¼¸å…¥åˆæ³•çš„æ—¥æœŸæ ¼å¼ï¼Œä¾‹å¦‚ï¼šYYYY-MM-DD ("2010-12-31")ã€‚ ',email:'è«‹è¼¸å…¥åˆæ³•çš„é›»å­ä¿¡ç®±åœ°å€ï¼Œä¾‹å¦‚ï¼š"fred@domain.com"ã€‚ ',url:"è«‹è¼¸å…¥åˆæ³•çš„Url åœ°å€ï¼Œä¾‹å¦‚ï¼šhttp://www.example.comã€‚ ",currencyDollar:"è«‹è¼¸å…¥åˆæ³•çš„è²¨å¹£ç¬¦è™Ÿï¼Œä¾‹å¦‚ï¼šï¿¥100.0",oneRequired:"è«‹è‡³å°‘é¸æ“‡ä¸€é …ã€‚ ",errorPrefix:"éŒ¯èª¤ï¼š",warningPrefix:"è­¦å‘Šï¼š",noSpace:"ä¸èƒ½åŒ…å«ç©ºæ ¼ã€‚ ",reqChkByNode:"æœªé¸æ“‡ä»»ä½•å…§å®¹ã€‚ ",requiredChk:"æ­¤é …å¿…å¡«ã€‚ ",reqChkByName:"è«‹é¸æ“‡ {label}.",match:"å¿…é ˆèˆ‡{matchName}ç›¸åŒ¹é…",startDate:"èµ·å§‹æ—¥æœŸ",endDate:"çµæŸæ—¥æœŸ",currendDate:"ç•¶å‰æ—¥æœŸ",afterDate:"æ—¥æœŸå¿…é ˆç­‰æ–¼æˆ–æ™šæ–¼{label}.",beforeDate:"æ—¥æœŸå¿…é ˆæ—©æ–¼æˆ–ç­‰æ–¼{label}.",startMonth:"è«‹é¸æ“‡èµ·å§‹æœˆä»½",sameMonth:"æ‚¨å¿…é ˆä¿®æ”¹å…©å€‹æ—¥æœŸä¸­çš„ä¸€å€‹ï¼Œä»¥ç¢ºä¿å®ƒå€‘åœ¨åŒä¸€æœˆä»½ã€‚ ",creditcard:"æ‚¨è¼¸å…¥çš„ä¿¡ç”¨å¡è™Ÿç¢¼ä¸æ­£ç¢ºã€‚ç•¶å‰å·²è¼¸å…¥{length}å€‹å­—ç¬¦ã€‚ "});
Form.Validator.add("validate-currency-yuan",{errorMsg:function(){return Form.Validator.getMsg("currencyYuan");},test:function(a){return Form.Validator.getValidator("IsEmpty").test(a)||(/^ï¿¥?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/).test(a.get("value"));
}});

/* FILE: /joomla25/university/media/system/js/modal.js */
/*
		MIT-style license
 @author		Harald Kirschner <mail [at] digitarald.de>
 @author		Rouven WeÃŸling <me [at] rouvenwessling.de>
 @copyright	Author
*/
var SqueezeBox={presets:{onOpen:function(){},onClose:function(){},onUpdate:function(){},onResize:function(){},onMove:function(){},onShow:function(){},onHide:function(){},size:{x:600,y:450},sizeLoading:{x:200,y:150},marginInner:{x:20,y:20},marginImage:{x:50,y:75},handler:!1,target:null,closable:!0,closeBtn:!0,zIndex:65555,overlayOpacity:0.7,classWindow:"",classOverlay:"",overlayFx:{},resizeFx:{},contentFx:{},parse:!1,parseSecure:!1,shadow:!0,overlay:!0,document:null,ajaxOptions:{}},initialize:function(a){if(this.options)return this;
this.presets=Object.merge(this.presets,a);this.doc=this.presets.document||document;this.options={};this.setOptions(this.presets).build();this.bound={window:this.reposition.bind(this,[null]),scroll:this.checkTarget.bind(this),close:this.close.bind(this),key:this.onKey.bind(this)};this.isOpen=this.isLoading=!1;return this},build:function(){this.overlay=new Element("div",{id:"sbox-overlay","aria-hidden":"true",styles:{zIndex:this.options.zIndex},tabindex:-1});this.win=new Element("div",{id:"sbox-window",
role:"dialog","aria-hidden":"true",styles:{zIndex:this.options.zIndex+2}});if(this.options.shadow)if(Browser.chrome||Browser.safari&&3<=Browser.version||Browser.opera&&10.5<=Browser.version||Browser.firefox&&3.5<=Browser.version||Browser.ie&&9<=Browser.version)this.win.addClass("shadow");else if(!Browser.ie6){var a=(new Element("div",{"class":"sbox-bg-wrap"})).inject(this.win),b=function(a){this.overlay.fireEvent("click",[a])}.bind(this);"n,ne,e,se,s,sw,w,nw".split(",").each(function(c){(new Element("div",
{"class":"sbox-bg sbox-bg-"+c})).inject(a).addEvent("click",b)})}this.content=(new Element("div",{id:"sbox-content"})).inject(this.win);this.closeBtn=(new Element("a",{id:"sbox-btn-close",href:"#",role:"button"})).inject(this.win);this.closeBtn.setProperty("aria-controls","sbox-window");this.fx={overlay:(new Fx.Tween(this.overlay,Object.merge({property:"opacity",onStart:Events.prototype.clearChain,duration:250,link:"cancel"},this.options.overlayFx))).set(0),win:new Fx.Morph(this.win,Object.merge({onStart:Events.prototype.clearChain,
unit:"px",duration:750,transition:Fx.Transitions.Quint.easeOut,link:"cancel",unit:"px"},this.options.resizeFx)),content:(new Fx.Tween(this.content,Object.merge({property:"opacity",duration:250,link:"cancel"},this.options.contentFx))).set(0)};document.id(this.doc.body).adopt(this.overlay,this.win)},assign:function(a,b){return(document.id(a)||$$(a)).addEvent("click",function(){return!SqueezeBox.fromElement(this,b)})},open:function(a,b){this.initialize();null!=this.element&&this.trash();this.element=
document.id(a)||!1;this.setOptions(Object.merge(this.presets,b||{}));if(this.element&&this.options.parse){var c=this.element.getProperty(this.options.parse);c&&(c=JSON.decode(c,this.options.parseSecure))&&this.setOptions(c)}this.url=(this.element?this.element.get("href"):a)||this.options.url||"";this.assignOptions();var d=d||this.options.handler;return d?this.setContent(d,this.parsers[d].call(this,!0)):this.parsers.some(function(a,b){var c=a.call(this);return c?(this.setContent(b,c),!0):!1},this)},
fromElement:function(a,b){return this.open(a,b)},assignOptions:function(){this.overlay.addClass(this.options.classOverlay);this.win.addClass(this.options.classWindow)},close:function(a){var b="domevent"==typeOf(a);b&&a.stop();if(!this.isOpen||b&&!Function.from(this.options.closable).call(this,a))return this;this.fx.overlay.start(0).chain(this.toggleOverlay.bind(this));this.win.setProperty("aria-hidden","true");this.fireEvent("onClose",[this.content]);this.trash();this.toggleListeners();this.isOpen=
!1;return this},trash:function(){this.element=this.asset=null;this.content.empty();this.options={};this.removeEvents().setOptions(this.presets).callChain()},onError:function(){this.asset=null;this.setContent("string",this.options.errorMsg||"An error occurred")},setContent:function(a,b){if(!this.handlers[a])return!1;this.content.className="sbox-content-"+a;this.applyTimer=this.applyContent.delay(this.fx.overlay.options.duration,this,this.handlers[a].call(this,b));if(this.overlay.retrieve("opacity"))return this;
this.toggleOverlay(!0);this.fx.overlay.start(this.options.overlayOpacity);return this.reposition()},applyContent:function(a,b){if(this.isOpen||this.applyTimer)this.applyTimer=clearTimeout(this.applyTimer),this.hideContent(),a?(this.isLoading&&this.toggleLoading(!1),this.fireEvent("onUpdate",[this.content],20)):this.toggleLoading(!0),a&&(["string","array"].contains(typeOf(a))?this.content.set("html",a):a!==this.content&&this.content.contains(a)||this.content.adopt(a)),this.callChain(),this.isOpen?
this.resize(b):(this.toggleListeners(!0),this.resize(b,!0),this.isOpen=!0,this.win.setProperty("aria-hidden","false"),this.fireEvent("onOpen",[this.content]))},resize:function(a,b){this.showTimer=clearTimeout(this.showTimer||null);var c=this.doc.getSize(),d=this.doc.getScroll();this.size=Object.merge(this.isLoading?this.options.sizeLoading:this.options.size,a);this.size.x==self.getSize().x&&(this.size.y-=50,this.size.x-=20);c={width:this.size.x,height:this.size.y,left:(d.x+(c.x-this.size.x-this.options.marginInner.x)/
2).toInt(),top:(d.y+(c.y-this.size.y-this.options.marginInner.y)/2).toInt()};this.hideContent();b?(this.win.setStyles(c),this.showTimer=this.showContent.delay(50,this)):this.fx.win.start(c).chain(this.showContent.bind(this));return this.reposition()},toggleListeners:function(a){a=a?"addEvent":"removeEvent";this.closeBtn[a]("click",this.bound.close);this.overlay[a]("click",this.bound.close);this.doc[a]("keydown",this.bound.key)[a]("mousewheel",this.bound.scroll);this.doc.getWindow()[a]("resize",this.bound.window)[a]("scroll",
this.bound.window)},toggleLoading:function(a){this.isLoading=a;this.win[a?"addClass":"removeClass"]("sbox-loading");a&&(this.win.setProperty("aria-busy",a),this.fireEvent("onLoading",[this.win]))},toggleOverlay:function(a){if(this.options.overlay){var b=this.doc.getSize().x;this.overlay.set("aria-hidden",a?"false":"true");this.doc.body[a?"addClass":"removeClass"]("body-overlayed");a?this.scrollOffset=this.doc.getWindow().getSize().x-b:this.doc.body.setStyle("margin-right","")}},showContent:function(){this.content.get("opacity")&&
this.fireEvent("onShow",[this.win]);this.fx.content.start(1)},hideContent:function(){this.content.get("opacity")||this.fireEvent("onHide",[this.win]);this.fx.content.cancel().set(0)},onKey:function(a){switch(a.key){case "esc":this.close(a);case "up":case "down":return!1}},checkTarget:function(a){return a.target!==this.content&&this.content.contains(a.target)},reposition:function(){var a=this.doc.getSize(),b=this.doc.getScroll(),c=this.doc.getScrollSize(),d=this.overlay.getStyles("height"),d=parseInt(d.height);
c.y>d&&a.y>=d&&(this.overlay.setStyles({width:c.x+"px",height:c.y+"px"}),this.win.setStyles({left:(b.x+(a.x-this.win.offsetWidth)/2-this.scrollOffset).toInt()+"px",top:(b.y+(a.y-this.win.offsetHeight)/2).toInt()+"px"}));return this.fireEvent("onMove",[this.overlay,this.win])},removeEvents:function(a){if(!this.$events)return this;a?this.$events[a]&&(this.$events[a]=null):this.$events=null;return this},extend:function(a){return Object.append(this,a)},handlers:new Hash,parsers:new Hash};SqueezeBox.extend(new Events(function(){})).extend(new Options(function(){})).extend(new Chain(function(){}));
SqueezeBox.parsers.extend({image:function(a){return a||/\.(?:jpg|png|gif)$/i.test(this.url)?this.url:!1},clone:function(a){if(document.id(this.options.target))return document.id(this.options.target);if(this.element&&!this.element.parentNode)return this.element;var b=this.url.match(/#([\w-]+)$/);return b?document.id(b[1]):a?this.element:!1},ajax:function(a){return a||this.url&&!/^(?:javascript|#)/i.test(this.url)?this.url:!1},iframe:function(a){return a||this.url?this.url:!1},string:function(){return!0}});
SqueezeBox.handlers.extend({image:function(a){var b,c=new Image;this.asset=null;c.onload=c.onabort=c.onerror=function(){c.onload=c.onabort=c.onerror=null;if(c.width){var a=this.doc.getSize();a.x-=this.options.marginImage.x;a.y-=this.options.marginImage.y;b={x:c.width,y:c.height};for(var e=2;e--;)if(b.x>a.x)b.y*=a.x/b.x,b.x=a.x;else if(b.y>a.y)b.x*=a.y/b.y,b.y=a.y;b.x=b.x.toInt();b.y=b.y.toInt();this.asset=document.id(c);c=null;this.asset.width=b.x;this.asset.height=b.y;this.applyContent(this.asset,
b)}else this.onError.delay(10,this)}.bind(this);c.src=a;if(c&&c.onload&&c.complete)c.onload();return this.asset?[this.asset,b]:null},clone:function(a){return a?a.clone():this.onError()},adopt:function(a){return a?a:this.onError()},ajax:function(a){var b=this.options.ajaxOptions||{};this.asset=(new Request.HTML(Object.merge({method:"get",evalScripts:!1},this.options.ajaxOptions))).addEvents({onSuccess:function(a){this.applyContent(a);null!==b.evalScripts&&!b.evalScripts&&Browser.exec(this.asset.response.javascript);
this.fireEvent("onAjax",[a,this.asset]);this.asset=null}.bind(this),onFailure:this.onError.bind(this)});this.asset.send.delay(10,this.asset,[{url:a}])},iframe:function(a){this.asset=new Element("iframe",Object.merge({src:a,frameBorder:0,width:this.options.size.x,height:this.options.size.y},this.options.iframeOptions));return this.options.iframePreload?(this.asset.addEvent("load",function(){this.applyContent(this.asset.setStyle("display",""))}.bind(this)),this.asset.setStyle("display","none").inject(this.content),
!1):this.asset},string:function(a){return a}});SqueezeBox.handlers.url=SqueezeBox.handlers.ajax;SqueezeBox.parsers.url=SqueezeBox.parsers.ajax;SqueezeBox.parsers.adopt=SqueezeBox.parsers.clone;

/* FILE: /joomla25/university/templates/gk_university/js/modernizr.js */
/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-cssgradients-csstransforms-csstransforms3d-csstransitions-canvas-inlinesvg-svg-svgclippaths-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.cssanimations=function(){return G("animationName")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return A((a+"-webkit- ".split(" ").join(b+a)+m.join(c+a)).slice(0,-a.length)),D(j.backgroundImage,"gradient")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/* FILE: /joomla25/university/templates/gk_university/js/gk.scripts.js */
// IE checker
function gkIsIE() {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
//
var page_loaded = false;
//
window.addEvent('load', function() {
	//
	page_loaded = true;
	// smooth anchor scrolling
	new SmoothScroll(); 
	// style area
	if(document.id('gkStyleArea')){
		document.id('gkStyleArea').getElements('a').each(function(element,i){
			element.addEvent('click',function(e){
	            e.stop();
				changeStyle(i+1);
			});
		});
	}
	// K2 font-size switcher fix
	if(document.id('fontIncrease') && document.getElement('.itemIntroText')) {
		document.id('fontIncrease').addEvent('click', function() {
			document.getElement('.itemIntroText').set('class', 'itemIntroText largerFontSize');
		});
		
		document.id('fontDecrease').addEvent('click', function() {
			document.getElement('.itemIntroText').set('class', 'itemIntroText smallerFontSize');
		});
	}
	// Event progress
	var gk_events = document.getElements('.gkEvent');
	
	if(gk_events.length) {
		gk_events.each(function(event, i) {
			var timezone_value = event.getElement('.gkEventTimeStart').getProperty('data-timezone') || 0;
			var date_timezone = -1 * parseInt(timezone_value, 10) * 60;
			
			var temp_date = new Date();
			var user_timezone = temp_date.getTimezoneOffset();
			var new_timezone_offset = 0;
			// if the timezones are equal - do nothing, in the other case we need calculations:
			if(date_timezone !== user_timezone) {
				new_timezone_offset = user_timezone - date_timezone;
				// calculate new timezone offset to miliseconds
				new_timezone_offset = new_timezone_offset * 60 * 1000;
			}
			
			var progress = event.getElement('.gkEventCounter');
			var progress_bar = new Element('div');
			progress_bar.inject(progress);
			var end = event.getElement('.gkEventDateStart').getProperty('datetime').split('-');
			var end_time = event.getElement('.gkEventTimeStart').getProperty('datetime').split(':');
			var end_date = Date.UTC(end[2], end[1]-1, end[0], end_time[0], end_time[1]);
			end_date = end_date + new_timezone_offset;
			
			var start = event.getElement('.gkEventCounter').getProperty('datetime').split('-');
			var start_date = Date.UTC(start[2], start[1]-1, start[0], 0, 0);
			start_date = start_date + new_timezone_offset;
			
			var diff = end_date - start_date;
			var current = new Date();
			var current_date = new Date(current.getFullYear(), current.getMonth(), current.getDate(), 0, 0);
			var progress = 1 - Math.round(((end_date - current_date) / diff) * 1000) / 1000;
			progress = Math.round(progress * 1000) / 1000;
			setTimeout(function() {
				progress_bar.setStyle('width', progress * 100 + "%");
			}, 1000);
		});
	}
	
	// login popup
	if(document.id('gkPopupLogin')) {
		var popup_overlay = document.id('gkPopupOverlay');
		popup_overlay.setStyles({'display': 'block', 'opacity': '0'});
		popup_overlay.fade('out');

		var opened_popup = null;
		var popup_login = null;
		var popup_login_h = null;
		var popup_login_fx = null;
		var popup_cart = null;
		var popup_cart_h = null;
		var popup_cart_fx = null;

		if(document.id('gkPopupLogin') && document.getElement('.gkLogin')) {
			popup_login = document.id('gkPopupLogin');
			popup_login_fx = new Fx.Morph(popup_login, {duration:500, transition: Fx.Transitions.Circ.easeInOut}).set({'opacity': 0 }); 
			document.getElement('.gkLogin').addEvent('click', function(e) {
				new Event(e).stop();
				popup_overlay.setOpacity(0.01);
				popup_login.setStyle('display', 'block');
				popup_overlay.setStyle('height', document.body.getScrollSize().y);
				popup_overlay.fade(0.45);

				setTimeout(function() {
					popup_login_fx.start({'opacity': 1});
					opened_popup = 'login';
				}, 50);

				(function() {
					if(document.id('modlgn-username')) {
						document.id('modlgn-username').focus();
					}
				}).delay(300);
			});
		}
		
		popup_overlay.addEvent('click', function() {
			if(opened_popup == 'login')	{
				popup_overlay.fade('out');
				popup_login_fx.start({
					'opacity' : 0
				});
				setTimeout(function() {
					popup_login.setStyle('display', 'none');
				}, 450);
			}
		});	
	}
});

// function to set cookie
function setCookie(c_name, value, expire) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expire);
	document.cookie=c_name+ "=" +escape(value) + ((expire==null) ? "" : ";expires=" + exdate.toUTCString());
}
// Function to change styles
function changeStyle(style){
	var file1 = $GK_TMPL_URL+'/css/style'+style+'.css';
	var file2 = $GK_TMPL_URL+'/css/typography/typography.style'+style+'.css';
	new Asset.css(file1);
	new Asset.css(file2);
	Cookie.write('gk_university_j25_style', style, { duration:365, path: '/' });
}

/* FILE: /joomla25/university/templates/gk_university/js/gk.menu.js */
window.addEvent('load', function() {	
    // Classic menu
    if(document.id('gkExtraMenu')) {
        // fix for the iOS devices     
        document.getElements('#gkExtraMenu ul li span').each(function(el) {
            el.setProperty('onmouseover', '');
        });

        document.getElements('#gkExtraMenu ul li a').each(function(el) {
            el.setProperty('onmouseover', '');

            if(el.getParent().hasClass('haschild') && document.getElement('body').getProperty('data-tablet') != null) {
                el.addEvent('click', function(e) {
                    if(el.retrieve("dblclick", 0) === 0) {
                        e.stop();
                        el.store("dblclick", new Date().getTime());
                    } else {
                    	if(el.getParent().getElements('div.childcontent')[0].getStyle('overflow') == 'visible') {
                    		window.location = el.getProperty('href');
                    	}
                        var now = new Date().getTime();
                        if(now - el.retrieve("dblclick", 0) < 500) {
                            window.location = el.getProperty('href');
                        } else {
                            e.stop();
                            el.store("dblclick", new Date().getTime());
                        }
                    }
                });
            }
        });

        var base = document.id('gkExtraMenu');
        
        base.getElements('.childcontent-inner').each(function(submenu, i) {
        	var cols = submenu.getChildren('.gkcol');
        	
        	if(cols.length > 1) {
        		var max = cols[0].getSize().y;
        		
        		for(var i = 0; i < cols.length; i++) {
        			max = cols[i].getSize().y > max ? cols[i].getSize().y : max;
        		}
        		
        		cols.setStyle('height', max + "px");
        	}
        });

        if($GKMenu && ($GKMenu.height || $GKMenu.width)) {     
            var gk_selector = 'li.haschild';
            base.getElements(gk_selector).each(function(el){     
                if(el.getElement('.childcontent')) {
                    var content = el.getElement('.childcontent');
                    var prevh = content.getSize().y;
                    var prevw = content.getSize().x;
                    // hide the menu till opened
                    if(content.getParent().getParent().hasClass('level0')) {
                    	content.setStyle('margin-left', "-999px");
                    }

                    var fxStart = { 'height' : $GKMenu.height ? 0 : prevh, 'width' : $GKMenu.width ? 0 : prevw, 'opacity' : 0 };
                    var fxEnd = { 'height' : prevh, 'width' : prevw, 'opacity' : 1 };

                    var fx = new Fx.Morph(content, {
                        duration: $GKMenu.duration,
                        link: 'cancel',
                        onComplete: function() {
                            if(content.getSize().y == 0){
                                content.setStyle('overflow', 'hidden');
                            } else if(content.getSize().y - prevh < 30 && content.getSize().y - prevh >= 0) {
                                content.setStyle('overflow', 'visible');
                            }
                        }
                    });

                    fx.set(fxStart);
                    content.setStyles({'left' : 'auto', 'overflow' : 'hidden' });

                    el.addEvents({
                        'mouseenter': function(){
                            var content = el.getElement('.childcontent');
							var basicMargin = (el.getParent().hasClass('level0')) ? -1 * ((prevw / 2) - (el.getSize().x / 2)) : 0;

							// helper variables
                            var pos = content.getCoordinates();
                            var winWidth = window.getCoordinates().width;
                            var winScroll = window.getScroll().x;

							// calculations
							var posStart = pos.left;
							var posEnd = pos.left + prevw;

							if(el.getParent().hasClass('level0')) {
								content.setStyle('margin-left', basicMargin + "px");
								pos = content.getCoordinates();
								posStart = pos.left;
								posEnd = pos.left + prevw;

								if(posStart < 0) {
									content.setStyle('margin-left', content.getStyle('margin-left').toInt() + (-1 * posStart) + 10);
								}

								if(posEnd > winWidth + winScroll) {
									var diff = (winWidth + winScroll) - posEnd;
									content.setStyle('margin-left', content.getStyle('margin-left').toInt() + diff - 24);
								}
							} else {
								var diff = (winWidth + winScroll) - posEnd;

								if(posEnd > winWidth + winScroll) {
									content.setStyle('margin-left', "-160px");
								}
							}

                            fx.start(fxEnd);
                        },

                        'mouseleave': function(){
                            content.setStyle('overflow', 'hidden');
                            fx.start(fxStart);
                        }
                    });
                }
            });
        }
    }
    
    // Aside menu
    if(document.id('aside-menu')) {
    	var staticToggler = document.id('static-aside-menu-toggler');
    	
    	staticToggler.addEvent('click', function() {
    		gkOpenAsideMenu();
    	});
    	
    	document.id('close-menu').addEvent('click', function() {
    		document.id('close-menu').toggleClass('menu-open');
    		document.id('gkBg').toggleClass('menu-open');
    		document.id('aside-menu').toggleClass('menu-open');
    	});
    }
    // detect android browser
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1 && !window.chrome;
    
    if(isAndroid) {
    	document.body.addClass('android-stock-browser')
    }
    // Android stock browser fix for the aside menu
    if(document.getElement('body').hasClass('android-stock-browser') && document.id('aside-menu')) {
    	document.id('static-aside-menu-toggler').addEvent('click', function() {
    		window.scrollTo(0, 0);
    	});
    	// menu dimensions
    	var asideMenu = document.id('aside-menu');
    	var menuHeight = document.id('aside-menu').getSize().y;
    	//
    	window.addEvent('scroll', function(e) {
    		if(asideMenu.hasClass('menu-open')) {
	    		// get the necessary values and positions
	    		var currentPosition = window.getScroll().y;
	    		var windowHeight = window.getSize().y;

    			// compare the values
	    		if(currentPosition > menuHeight - windowHeight) {
	    			document.id('close-menu').fireEvent('click');
	    		}
    		}
    	});
    }
    
    function gkOpenAsideMenu() {
    	document.id('gkBg').toggleClass('menu-open');
    	document.id('aside-menu').toggleClass('menu-open');
    
    	if(!document.id('close-menu').hasClass('menu-open')) {
    		setTimeout(function() {
    			document.id('close-menu').toggleClass('menu-open');
    		}, 300);
    	} else {
    		document.id('close-menu').removeClass('menu-open');
    	}
    }
}); 

/* FILE: /joomla25/university/templates/gk_university/js/scrollreveal.js */
/*
                       _ _ _____                      _   _
                      | | |  __ \                    | | (_)
    ___  ___ _ __ ___ | | | |__) |_____   _____  __ _| |  _ ___
   / __|/ __| '__/ _ \| | |  _  // _ \ \ / / _ \/ _` | | | / __|
   \__ \ (__| | | (_) | | | | \ \  __/\ V /  __/ (_| | |_| \__ \
   |___/\___|_|  \___/|_|_|_|  \_\___| \_/ \___|\__,_|_(_) |___/ v.0.1.2
                                                        _/ |
                                                       |__/

    "Declarative on-scroll reveal animations."

/*=============================================================================

    scrollReveal.js was inspired by cbpScroller.js (c) 2014 Codrops.

    Licensed under the MIT license.
    http://www.opensource.org/licenses/mit-license.php

=============================================================================*/

/*! scrollReveal.js v0.1.2 (c) 2014 Julian Lloyd | MIT license */

/*===========================================================================*/


window.scrollReveal = (function (window) {

  'use strict';

  function scrollReveal(options) {

      this.docElem = window.document.documentElement;
      this.options = this.extend(this.defaults, options);
      this.styleBank = [];

      if (this.options.init == true) this.init();
  }

  scrollReveal.prototype = {

    defaults: {
      after:  '0s',
      enter:  'bottom',
      move:   '24px',
      over:   '0.66s',
      easing: 'ease-in-out',

  //  if 0, the element is considered in the viewport as soon as it enters
  //  if 1, the element is considered in the viewport when it's fully visible
      viewportFactor: 0.33,

  // if false, animations occur only once
  // if true, animations occur each time an element enters the viewport
      reset: false,

  // if true, scrollReveal.init() is automaticaly called upon instantiation
      init: true
    },

    /*=============================================================================*/

    init: function () {

      this.scrolled = false;

      var self = this;

  //  Check DOM for the data-scrollReveal attribute
  //  and initialize all found elements.
      this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll('[data-scroll-reveal]'));
      this.elems.forEach(function (el, i) {

    //  Capture original style attribute
        if (!self.styleBank[el]) {
          self.styleBank[el] = el.getAttribute('style');
        }

        self.update(el);
      });

      var scrollHandler = function () {
        if (!self.scrolled) {
          self.scrolled = true;
          setTimeout(function () {
            self._scrollPage();
          }, 60);
        }
      };

      var resizeHandler = function () {

    //  If weâ€™re still waiting for settimeout, reset the timer.
        if (self.resizeTimeout) {
          clearTimeout(self.resizeTimeout);
        }
        function delayed() {
          self._scrollPage();
          self.resizeTimeout = null;
        }
        self.resizeTimeout = setTimeout(delayed, 200);
      };

      window.addEventListener('scroll', scrollHandler, false);
      window.addEventListener('resize', resizeHandler, false);
    },

    /*=============================================================================*/

    _scrollPage: function () {
        var self = this;

        this.elems.forEach(function (el, i) {
          self.update(el);
        });
        this.scrolled = false;
    },

    /*=============================================================================*/

    parseLanguage: function (el) {

  //  Splits on a sequence of one or more commas or spaces.
      var words = el.getAttribute('data-scroll-reveal').split(/[, ]+/),
          parsed = {};

      function filter (words) {
        var ret = [],

            blacklist = [
              "from",
              "the",
              "and",
              "then",
              "but",
              "with"
            ];

        words.forEach(function (word, i) {
          if (blacklist.indexOf(word) > -1) {
            return;
          }
          ret.push(word);
        });

        return ret;
      }

      words = filter(words);

      words.forEach(function (word, i) {

        switch (word) {
          case "enter":
            parsed.enter = words[i + 1];
            return;

          case "after":
            parsed.after = words[i + 1];
            return;

          case "wait":
            parsed.after = words[i + 1];
            return;

          case "move":
            parsed.move = words[i + 1];
            return;

          case "ease":
            parsed.move = words[i + 1];
            parsed.ease = "ease";
            return;

          case "ease-in":
            parsed.move = words[i + 1];
            parsed.easing = "ease-in";
            return;

          case "ease-in-out":
            parsed.move = words[i + 1];
            parsed.easing = "ease-in-out";
            return;

          case "ease-out":
            parsed.move = words[i + 1];
            parsed.easing = "ease-out";
            return;

          case "over":
            parsed.over = words[i + 1];
            return;

          default:
            return;
        }
      });

      return parsed;
    },


    /*=============================================================================*/

    update: function (el) {

      var css   = this.genCSS(el);
      var style = this.styleBank[el];

      if (style != null) style += ";"; else style = "";

      if (!el.getAttribute('data-scroll-reveal-initialized')) {
        el.setAttribute('style', style + css.initial);
        el.setAttribute('data-scroll-reveal-initialized', true);
      }

      if (!this.isElementInViewport(el, this.options.viewportFactor)) {
        if (this.options.reset) {
          el.setAttribute('style', style + css.initial + css.reset);
        }
        return;
      }

      if (el.getAttribute('data-scroll-reveal-complete')) return;

      if (this.isElementInViewport(el, this.options.viewportFactor)) {
        el.setAttribute('style', style + css.target + css.transition);
    //  Without reset enabled, we can safely remove the style tag
    //  to prevent CSS specificy wars with authored CSS.
        if (!this.options.reset) {
          setTimeout(function () {
            if (style != "") {
              el.setAttribute('style', style);
            } else {
              el.removeAttribute('style');
            }
            el.setAttribute('data-scroll-reveal-complete',true);
          }, css.totalDuration);
        }
      return;
      }
    },

    /*=============================================================================*/

    genCSS: function (el) {
      var parsed = this.parseLanguage(el),
          enter,
          axis;

      if (parsed.enter) {

        if (parsed.enter == "top" || parsed.enter == "bottom") {
          enter = parsed.enter;
          axis = "y";
        }

        if (parsed.enter == "left" || parsed.enter == "right") {
          enter = parsed.enter;
          axis = "x";
        }

      } else {

        if (this.options.enter == "top" || this.options.enter == "bottom") {
          enter = this.options.enter
          axis = "y";
        }

        if (this.options.enter == "left" || this.options.enter == "right") {
          enter = this.options.enter
          axis = "x";
        }
      }

  //  After all values are parsed, letâ€™s make sure our our
  //  pixel distance is negative for top and left entrances.
  //
  //  ie. "move 25px from top" starts at 'top: -25px' in CSS.

      if (enter == "top" || enter == "left") {
        if (parsed.move) {
          parsed.move = "-" + parsed.move;
        }
        else {
          parsed.move = "-" + this.options.move;
        }
      }

      var dist   = parsed.move    || this.options.move,
          dur    = parsed.over    || this.options.over,
          delay  = parsed.after   || this.options.after,
          easing = parsed.easing  || this.options.easing;

      var transition = "-webkit-transition: -webkit-transform " + dur + " " + easing + " " + delay + ",  opacity " + dur + " " + easing + " " + delay + ";" +
                               "transition: transform " + dur + " " + easing + " " + delay + ", opacity " + dur + " " + easing + " " + delay + ";" +
                      "-webkit-perspective: 1000;" +
              "-webkit-backface-visibility: hidden;";

  //  The same as transition, but removing the delay for elements fading out.
      var reset = "-webkit-transition: -webkit-transform " + dur + " " + easing + " 0s,  opacity " + dur + " " + easing + " " + delay + ";" +
                          "transition: transform " + dur + " " + easing + " 0s,  opacity " + dur + " " + easing + " " + delay + ";" +
                 "-webkit-perspective: 1000;" +
         "-webkit-backface-visibility: hidden;";

      var initial = "-webkit-transform: translate" + axis + "(" + dist + ");" +
                            "transform: translate" + axis + "(" + dist + ");" +
                              "opacity: 0;";

      var target = "-webkit-transform: translate" + axis + "(0);" +
                           "transform: translate" + axis + "(0);" +
                             "opacity: 1;";
      return {
        transition: transition,
        initial: initial,
        target: target,
        reset: reset,
        totalDuration: ((parseFloat(dur) + parseFloat(delay)) * 1000)
      };
    },

    getViewportH : function () {
      var client = this.docElem['clientHeight'],
        inner = window['innerHeight'];

      return (client < inner) ? inner : client;
    },

    getOffset : function(el) {
      var offsetTop = 0,
          offsetLeft = 0;

      do {
        if (!isNaN(el.offsetTop)) {
          offsetTop += el.offsetTop;
        }
        if (!isNaN(el.offsetLeft)) {
          offsetLeft += el.offsetLeft;
        }
      } while (el = el.offsetParent)

      return {
        top: offsetTop,
        left: offsetLeft
      }
    },

    isElementInViewport : function(el, h) {
      var scrolled = window.pageYOffset,
          viewed = scrolled + this.getViewportH(),
          elH = el.offsetHeight,
          elTop = this.getOffset(el).top,
          elBottom = elTop + elH,
          h = h || 0;

      return (elTop + elH * h) <= viewed
          && (elBottom) >= scrolled
          || (el.currentStyle? el.currentStyle : window.getComputedStyle(el, null)).position == 'fixed';
    },

    extend: function (a, b){
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }
  }; // end scrollReveal.prototype

  return scrollReveal;
})(window);

/* FILE: /joomla25/university/modules/mod_news_pro_gk5/portal_modes/jomsocial_photos/script.mootools.js */
window.addEvent('domready', function() {
	document.getElements('.gkNspPM-JomSocialPhotos').each(function(module) {
		if(!module.hasClass('active') && module.hasClass('animate')) {
			module.addClass('active');
			gkPortalModeJomSocialPhotosInit(module);
		}
	});
});

var gkPortalModeJomSocialPhotosInit = function(module) {
	var pause = false;
	var current = 0;
	var content = [];
	var items = module.getElements('figure');
	var count = items.length;
	
	if(count) {
		// prepare the content array
		items.each(function(item, i) {
			var img = item.getElement('img');
			var item_content = {
				"src": img.getProperty('src'),
				"alt": img.getProperty('alt'),
				"desc": item.getElement('figcaption').get('html') 
			};
			content.push(item_content);
			item.addEvent('mouseenter', function() {
				pause = true;
			});
			item.addEvent('mouseleave', function() {
				pause = false;
			});
		});
		// prepare animation 
		var animate = function() {
			if(!pause) {
				// modify the content array
				var first_item = content.pop();
				content.unshift(first_item);
				
				items.each(function(item, i) {	
					animate_slide(item, content, i);
				});
			} else {
				pause = false;
			}
			
			setTimeout(function() {
				animate();
			}, 3000 + (100 * count));
		};
		// helper function
		var animate_slide = function(item, content, i) {
			setTimeout(function() {
				var img = item.getElement('img');
				img.addClass('hide');
				setTimeout(function() {
					img.setProperty('src', content[i].src);
					img.setProperty('alt', content[i].alt);
					img.removeClass('hide');
				}, 500);
				item.getElement('figcaption').set('html', content[i].desc);
			}, 100 * i);
		};
		// run animation
		setTimeout(function() {
			animate();
		}, 3000);
	}
};

// EOF

/* FILE: /joomla25/university/modules/mod_news_pro_gk5/interface/scripts/engine.mootools.js */
/**
* Main script file
* @package News Show Pro GK5
* @Copyright (C) 2009-2012 Gavick.com
* @ All rights reserved
* @ Joomla! is Free Software
* @ Released under GNU/GPL License : http://www.gnu.org/copyleft/gpl.html
* @version $Revision: GK5 1.0 $
**/

var NSP5 = new Class({
	// class fields
	animation: true,
	anim_arts: false,
	anim_lists: false,
	arts: null,
	arts_block_width: 0,
	arts_current: 0,
	arts_pages: null,
	arts_per_page: null,
	arts_scroller: null,
	config: null,
	hover_anim: null,
	links: null,
	links_block_width: 0,
	links_pages: null,
	links_pages_amount: null,
	links_scroller: null,
	links_current: 0,
	modInterface: null,
	module: null,
	// touch events properties
	swipe_max_time: 500, // in ms
	swipe_min_move: 30, // in px
	//
	initialize: function(module) {
		// init class fields
		this.init_fields(module);
		// init the interface
		this.init_interface();
	},
	init_fields: function(module) {
		// the most important class field ;)
		this.module = module;
		this.module.addClass('activated');
		// rest of the fields
		this.config = JSON.decode(this.module.get('data-config'));
		this.config['animation_function'] = eval(this.config['animation_function']);
		this.arts = this.module.getElements('.nspArt');
		this.arts_pages = this.module.getElements('.nspArtPage');
		this.arts_per_page = this.config['news_column'] * this.config['news_rows'];
		this.hover_anim = this.module.hasClass('hover');
		this.links = (this.module.getElement('.nspLinkScroll1')) ? this.module.getElement('.nspLinkScroll1').getElements('li') : [];
		this.links_pages = this.module.getElements('.nspList');
		this.links_pages_amount = Math.ceil(Math.ceil(this.links.length / this.config['links_amount']) / this.config['links_columns_amount']);
		this.modInterface = { 
			top: this.module.getElement('.nspTopInterface'), 
			bottom: this.module.getElement('.nspBotInterface')
		};
		this.pages_amount = Math.ceil(this.arts.length / this.arts_per_page);
	},
	init_interface: function() {
		var $this = this;
		// arts
		if(this.arts.length > 0){
			this.arts_block_width = 100;
			
			this.arts_scroller = new Fx.Tween($this.module.getElement('.nspArtScroll2'), {
				duration: $this.config['animation_speed'], 
				wait:false, 
				property: 'margin-left', 
				unit: '%',
				transition: $this.config['animation_function']
			});
		}
		// events
		this.module.addEvents({
			'mouseenter': function() {
				if(!$this.module.hasClass('onhover')) $this.module.addClass('onhover');
			},
			'mouseleave': function() {
				if($this.module.hasClass('onhover')) $this.module.removeClass('onhover');
			}
		});
		// links
		if(this.links.length > 0){
			this.links_block_width = 100;
			
			this.links_scroller = new Fx.Tween($this.module.getElement('.nspLinkScroll2'), {
				duration:$this.config['animation_speed'], 
				wait:false, 
				property: 'margin-left',
				unit: '%',
				transition: $this.config['animation_function']
			});
		}
		// top interface
		this.nsp_art_list(0, 'top');
		this.nsp_art_list(0, 'bottom');
		//
		if(this.modInterface.top && this.modInterface.top.getElement('.nspPagination')){
			this.modInterface.top.getElement('.nspPagination').getElements('li').each(function(item,i){
				item.addEvent($this.hover_anim ? 'mouseenter' : 'click', function(){
					$this.arts_anim(i);
				});	
			});
		}
		//
		if(this.modInterface.top && this.modInterface.top.getElement('.nspPrev')){
			this.modInterface.top.getElement('.nspPrev').addEvent("click", function(){
				$this.arts_anim('prev');
			});
			
			this.modInterface.top.getElement('.nspNext').addEvent("click", function(){
				$this.arts_anim('next');
			});
		}
		// bottom interface
		if(this.modInterface.bottom && this.modInterface.bottom.getElement('.nspPagination')){
			this.modInterface.bottom.getElement('.nspPagination').getElements('li').each(function(item,i){
				item.addEvent($this.hover_anim ? 'mouseenter' : 'click', function(){	
					$this.lists_anim(i);
				});	
			});
		}
		//
		if(this.modInterface.bottom && this.modInterface.bottom.getElement('.nspPrev')){
			this.modInterface.bottom.getElement('.nspPrev').addEvent("click", function(){
				$this.lists_anim('prev');
			});
			
			this.modInterface.bottom.getElement('.nspNext').addEvent("click", function(){
				$this.lists_anim('next');
			});
		}
		//
		if(this.module.hasClass('autoanim')){
			(function(){
				$this.nsp_gk5_autoanim();
			}).delay($this.config['animation_interval']);
		}
		// Touch events for the articles
		var arts_wrap = this.module.getElement('.nspArts');
		if(arts_wrap) {		
			var arts_pos_start_x = 0;
			var arts_pos_start_y = 0;
			var arts_time_start = 0;
			var arts_swipe = false;
			
			arts_wrap.addEvent('touchstart', function(e) {
				arts_swipe = true;
				
				if(e.changedTouches.length > 0) {
					arts_pos_start_x = e.changedTouches[0].pageX;
					arts_pos_start_y = e.changedTouches[0].pageY;
					arts_time_start = new Date().getTime();
				}
			});
			
			arts_wrap.addEvent('touchmove', function(e) {
				if(e.changedTouches.length > 0 && arts_swipe) {
					if(
						Math.abs(e.changedTouches[0].pageX - arts_pos_start_x) > Math.abs(e.changedTouches[0].pageY - arts_pos_start_y)
					) {
						e.preventDefault();
					} else {
						arts_swipe = false;
					}
				}
			});
			
			arts_wrap.addEvent('touchend', function(e) {
				if(e.changedTouches.length > 0 && arts_swipe) {					
					if(
						Math.abs(e.changedTouches[0].pageX - arts_pos_start_x) >= $this.swipe_min_move && 
						new Date().getTime() - arts_time_start <= $this.swipe_max_time
					) {
						if(e.changedTouches[0].pageX - arts_pos_start_x > 0) {
							$this.arts_anim('prev');
						} else {
							$this.arts_anim('next');
						}
					}
				}
			});
		}
		// Touch events for the links
		var links_wrap = this.module.getElement('.nspLinksWrap');
		if(links_wrap) {
			var links_pos_start_x = 0;
			var links_pos_start_y = 0;
			var links_time_start = 0;
			var links_swipe = false;
			
			links_wrap.addEvent('touchstart', function(e) {
				links_swipe = true;
				
				if(e.changedTouches.length > 0) {
					links_pos_start_x = e.changedTouches[0].pageX;
					links_pos_start_y = e.changedTouches[0].pageY;
					links_time_start = new Date().getTime();
				}
			});
			
			links_wrap.addEvent('touchmove', function(e) {
				if(e.changedTouches.length > 0 && links_swipe) {
					if(
						Math.abs(e.changedTouches[0].pageX - links_pos_start_x) > Math.abs(e.changedTouches[0].pageY - links_pos_start_y)
					) {
						e.preventDefault();
					} else {
						links_swipe = false;
					}
				}
			});
			
			links_wrap.addEvent('touchend', function(e) {
				if(e.changedTouches.length > 0 && links_swipe) {					
					if(
						Math.abs(e.changedTouches[0].pageX - links_pos_start_x) >= $this.swipe_min_move && 
						new Date().getTime() - links_time_start <= $this.swipe_max_time
					) {
						if(e.changedTouches[0].pageX - links_pos_start_x > 0) {
							$this.lists_anim('prev');
						} else {
							$this.lists_anim('next');
						}
					}
				}
			});
		}
	},
	//
	nsp_art_list: function(i, pos){
		var num  = (i !== null) ? i : (pos == 'top') ? this.arts_current : this.links_current;
		
		if(this.modInterface[pos] && this.modInterface[pos].getElement('.nspPagination')){
			var pagination = this.modInterface[pos].getElement('.nspPagination');
			pagination.getElements('li').setProperty('class', '');
			pagination.getElements('li')[num].setProperty('class', 'active');
		}
	},
	//
	arts_anim: function(dir) {
		if(!this.anim_arts) {
			var $this = this;
			this.anim_arts = true;
			this.arts_pages[this.arts_current].removeClass('active');
			
			if(dir == 'next') {
				this.arts_current = (this.arts_current == this.pages_amount - 1) ? 0 : this.arts_current + 1;
			} else if(dir == 'prev') {
				this.arts_current = (this.arts_current == 0) ? this.pages_amount - 1 : this.arts_current - 1;
			} else {
				this.arts_current = dir;
			}
			
			this.arts_scroller.start(-1 * this.arts_current * this.arts_block_width);
			
			(function() {
				$this.arts_pages[$this.arts_current].addClass('active');
			}).delay(this.config['animation_speed'] * 0.5);
			
			(function() {
				$this.anim_arts = false;
			}).delay(this.config['animation_speed']);
			
			this.nsp_art_list(this.arts_current, 'top');
			this.animation = false;
			(function(){
				$this.animation = true;
			}).delay(this.config['animation_interval'] * 0.8);
		}
	},
	//
	lists_anim: function(dir) {
		if(!this.anim_lists) {
			var $this = this;
			this.anim_lists = true;
			
			for(var x = 0; x < this.config['links_columns_amount']; x++) {
				var item = this.links_pages[this.links_current * this.config['links_columns_amount'] + x];
				if(item) item.removeClass('active');
			}
			
			if(dir == 'next') {
				this.links_current = (this.links_current == this.links_pages_amount - 1) ? 0 : this.links_current + 1;
			} else if(dir == 'prev') {
				this.links_current = (this.links_current == 0) ? this.links_pages_amount - 1 : this.links_current - 1;
			} else {
				$this.links_current = dir;
			}
			
			(function() {
				$this.anim_lists = false;
			}).delay(this.config['animation_speed']);
			
			(function() {
				for(var x = 0; x < $this.config['links_columns_amount']; x++) {
					var item = $this.links_pages[$this.links_current * $this.config['links_columns_amount'] + x]; 
					if(item) item.addClass('active');
				}
			}).delay(this.config['animation_speed'] * 0.5);
			
			this.links_scroller.start(-1 * this.links_current * this.links_block_width);
			this.nsp_art_list(null, 'bottom');
		}
	},
	//
	nsp_gk5_autoanim: function() {
		var $this = this;
		//
		if(!this.module.hasClass('onhover')) {
			this.arts_anim('next');
		}
		//
		(function() {
			$this.nsp_gk5_autoanim();
		}).delay($this.config['animation_interval']);
	}
});
//
window.addEvent("load", function(){	
	$$('.nspMain').each(function(module){	
		if(!module.hasClass('activated')) {	
			new NSP5(module);
		}
	});
});

/* FILE: /joomla25/university/modules/mod_news_pro_gk5/portal_modes/events_list/script.mootools.js */
window.addEvent('domready', function() {
	document.getElements('.gkNspPM-EventsList').each(function(module) {
		if(!module.hasClass('active')) {
			module.addClass('active');
			gkPortalModeEventsListInit(module);
		}
	});
});

var gkPortalModeEventsListInit = function(module) {
	// add the basic events
	var gk_events = module.getElements('time');
	
	if(gk_events.length) {
		gk_events.each(function(event, i) {
			var progress = event.getParent().getElement('.gkEventsListProgress');
			var progress_bar = new Element('div');
			progress_bar.inject(progress)
			var end = event.getProperty('datetime').split('T')[0].split('-');
			var end_date = new Date(end[0], end[1]-1, end[2], 0, 0);
			
			var start = event.getProperty('data-start').split('T')[0].split('-');
			var start_date = new Date(start[0], start[1]-1, start[2], 0, 0);
					
			var diff = end_date - start_date;
			var current = new Date();
			var current_da