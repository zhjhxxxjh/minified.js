!/^u/.test(typeof define)&&define.a||function(a){var b=this.require=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function a(a){return null!=a?""+a:""}function b(a,b){return b.test(typeof a)}function c(a){return b(a,/^str/)}function d(a){return a&&a.nodeType}function e(a){return a}function f(a,b){k(a,function(a){a(b)})}function g(a,b){for(var c in a)b(c,a[c])}function h(a,b){var c=[];return k(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function i(a,b,c){var d=[];return a(b,function(a,e){k(c.call(b,a,e),function(a){d.push(a)})}),d}function j(b,c,d){return a(b).replace(c,d||"")}function k(a,b){if(m(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else null!=a&&b(a,0);return a}function l(a){return"function"==typeof a&&!a.item}function m(a){return a&&null!=a.length&&!c(a)&&!d(a)&&!l(a)&&a!==A}function n(a){return parseFloat(j(a,/^[^\d-]+/))}function o(a){return a.Nia=a.Nia||++D}function p(a,b){var c,d=[],e={};return k(a,function(a){k(b(a),function(a){e[c=o(a)]||(d.push(a),e[c]=!0)})}),d}function q(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:null},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function r(a){E?E.push(a):setTimeout(a,0)}function s(a){return i(k,a,function(a){return m(a)?s(a):(d(a)&&(a=a.cloneNode(!0),a.removeAttribute&&a.removeAttribute("id")),a)})}function t(a,b,c){return l(a)?r(a):new y(u(a,b,c))}function u(a,b,e){function f(a){return m(a)?i(k,a,f):a}function g(a){return h(i(k,a,f),function(a){for(;a=a.parentNode;)if(a==b[0]||e)return a==b[0]})}return b?1!=(b=u(b)).length?p(b,function(b){return u(a,b,e)}):c(a)?1!=d(b[0])?[]:e?g(b[0].querySelectorAll(a)):b[0].querySelectorAll(a):g(a):c(a)?document.querySelectorAll(a):i(k,a,f)}function v(a,e){function f(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var g,h,i={},j=i;return l(a)?a:b(a,/^num/)?function(b,c){return c==a}:!a||"*"==a||c(a)&&(j=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(g=f(j[1],"tagName"),h=f(j[2],"className"),function(a){return 1==d(a)&&g(a)&&h(a)}):e?function(b){return null!=t(a,e).find(b)}:(t(a).each(function(a){i[o(a)]=!0}),function(a){return i[o(a)]})}function w(a){var b=v(a);return function(a){return b(a)?null:!0}}function x(){function a(a,e){function f(){var d=b?a:e;l(d)?(d=d.apply(z,c))&&d.then?d.then(function(a){g.fire(!0,[a])},function(a){g.fire(!1,[a])}):g.fire(!0,[d]):g.fire(b,c)}var g=x();return null==b?d.push(f):setTimeout(f,0),g}var b,c,d=[];return{fire:function(a,e){null==b&&(b=a,c=e,setTimeout(function(){f(d)},0))},then:a,error:function(b){return a(0,b)},"catch":function(b){return a(0,b)}}}function y(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var z,A=window,B={},C={},D=1,E=/^[ic]/.test(document.readyState)?null:[],F={},G=0;return g({each:function(a){return k(this,a)},filter:function(a){return new y(h(this,a))},collect:function(a){return new y(i(k,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new y(h(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=l(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if(null!=(c=d.call(this,this[e],e)))return c},remove:function(){k(this,function(a){a.parentNode.removeChild(a)})},text:function(){return i(k,this,function(a){return a.textContent}).join("")},trav:function(a,c,d){var e=b(c,/^num/),f=v(e?null:c),g=e?c:d;return new y(p(this,function(b){for(var c=[];(b=b[a])&&c.length!=g;)f(b)&&c.push(b);return c}))},next:function(a,b){return this.trav("nextSibling",a,b||1)},up:function(a,b){return this.trav("parentNode",a,b||1)},select:function(a,b){return t(a,this,b)},is:function(a){return!this.find(w(a))},only:function(a){return new y(h(this,v(a)))},not:function(a){return new y(h(this,w(a)))},get:function(a,b){var d,e,f,h,i=this,l=i[0];return l?c(a)?(d=/^(\W*)(.*)/.exec(j(a,/^%/,"@data-")),e=d[1],f=C[e]?C[e](this,d[2]):"$"==a?i.get("className"):"$$"==a?i.get("@style"):"$$slide"==a?i.get("$height"):"$$fade"==a||"$$show"==a?"hidden"==i.get("$visibility")||"none"==i.get("$display")?0:"$$fade"==a?isNaN(i.get("$opacity",!0))?1:i.get("$opacity",!0):1:"$"==e?A.getComputedStyle(l,null).getPropertyValue(j(d[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):"@"==e?l.getAttribute(d[2]):l[d[2]],b?n(f):f):(h={},(m(a)?k:g)(a,function(a){h[a]=i.get(a,b)}),h):void 0},set:function(a,b){var d,e,f=this;return b!==z?(d=/^(\W*)(.*)/.exec(j(j(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),e=d[1],B[e]?B[e](this,d[2],b):"$$fade"==a?this.set({$visibility:b?"visible":"hidden",$opacity:b}):"$$slide"==a?f.set({$visibility:b?"visible":"hidden",$overflow:"hidden",$height:/px/.test(b)?b:function(a,c,d){return q(t(d),b)}}):"$$show"==a?b?f.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):f.set({$display:"none"}):"$$"==a?f.set("@style",b):k(this,function(c,f){var g=l(b)?b(t(c).get(a),f,c):b;"$"==e?d[2]?c.style[d[2]]=g:k(g&&g.split(/\s+/),function(a){var b=j(a,/^[+-]/),d=c.className||"",e=j(d,RegExp("(^|\\s+)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&d==e)&&(e+=" "+b),c.className=j(e,/^\s+/g)}):"$$scrollX"==a?c.scroll(g,t(c).get("$$scrollY")):"$$scrollY"==a?c.scroll(t(c).get("$$scrollX"),g):"@"==e?null==g?c.removeAttribute(d[2]):c.setAttribute(d[2],g):c[d[2]]=g})):c(a)||l(a)?f.set("$",a):g(a,function(a,b){f.set(a,b)}),f},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,e){function f(a){m(a)?k(a,f):l(a)?f(a(c,e)):null!=a&&(a=d(a)?a:document.createTextNode(a),g?g.parentNode.insertBefore(a,g.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),g=a)}var g;f(e&&!l(a)?s(a):a)})},fill:function(a){return this.each(function(a){t(a.childNodes).remove()}).add(a)},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new y(s(this))},animate:function(a,b,c){var d,e=x(),h=this,j=i(k,this,function(b,d){var e,f=t(b),h={};return g(e=f.get(a),function(c,e){var g=a[c];h[c]=l(g)?g(e,d,b):"$$slide"==c?q(f,g):g}),f.dial(e,h,c)}),m=b||500;return e.stop=function(){return e.fire(!1),d()},d=t.loop(function(a){f(j,a/m),a>=m&&(d(),e.fire(!0,[h]))}),e},dial:function(b,c,d){function e(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(2*b+1,2):(a=a.charAt(b+1))+a,16):n(a.split(",")[b])}var f=this,h=d||0,i=l(h)?h:function(a,b,c){return c*(b-a)*(h+(1-h)*c*(3-2*c))+a};return function(d){g(b,function(b,g){var h=c[b],k=0;f.set(b,0>=d?g:d>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(i(e(g,k),e(h,k++),d))+","+Math.round(i(e(g,k),e(h,k++),d))+","+Math.round(i(e(g,k),e(h,k++),d))+")":j(h,/-?[\d.]+/,a(i(n(g),n(h),d))))})}},toggle:function(a,b,c,d){var e,f,g=this,h=!1;return b?(g.set(a),function(i){i!==h&&(f=(h=!0===i||!1===i?i:!h)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).then(function(){e=null}):g.set(f))}):g.toggle(j(a,/\b(?=\w)/g,"-"),j(a,/\b(?=\w)/g,"+"))},values:function(b){var c=b||{};return this.each(function(b){var d=b.name||b.id,f=a(b.value);if(/form/i.test(b.tagName))for(d=0;d<b.elements.length;d++)t(b.elements[d]).values(c);else!d||/ox|io/i.test(b.type)&&!b.checked||(c[d]=null==c[d]?f:i(k,[c[d],f],e))}),c},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(b,d,f,g,h){return l(d)?this.on(null,b,d,f,g):c(g)?this.on(b,d,f,null,g):this.each(function(c,l){k(b?u(b,c):c,function(b){k(a(d).split(/\s/),function(a){function c(a,c,d){var e,i=!h;if(d=h?d:b,h)for(e=v(h,b);d&&d!=b&&!(i=e(d));)d=d.parentNode;return!i||m!=a||f.apply(t(d),g||[c,l])&&"?"==n||"|"==n}function d(a){c(m,a,a.target)||(a.preventDefault(),a.stopPropagation())}var m=j(a,/[?|]/g),n=j(a,/[^?|]/g),o=("blur"==m||"focus"==m)&&!!h,p=D++;b.addEventListener(m,d,o),b.M||(b.M={}),b.M[p]=c,f.M=i(k,[f.M,function(){b.removeEventListener(m,d,o),delete b.M[p]}],e)})})})},onOver:function(a,b){var c=this,d=[];return l(b)?this.on(a,"|mouseover |mouseout",function(a,e){var f=a.relatedTarget||a.toElement,g="mouseout"!=a.type;d[e]===g||!g&&f&&(f==c[e]||t(f).up(c[e]).length)||(d[e]=g,b.call(this,g,a))}):this.onOver(null,a)},onFocus:function(a,b,c){return l(b)?this.on(a,"|blur",b,[!1],c).on(a,"|focus",b,[!0],c):this.onFocus(null,a,b)},onChange:function(a,b,c){return l(b)?this.on(a,"|input |change |click",function(a,c){var d=this[0],e=/ox|io/i.test(d.type)?d.checked:d.value;d.NiaP!=e&&b.call(this,d.NiaP=e,c)},c):this.onChange(null,a,b)},onClick:function(a,b,c,d){return l(b)?this.on(a,"click",b,c,d):this.onClick(null,a,b,c)},trigger:function(a,b){return this.each(function(c){for(var d=!0,e=c;e&&d;)g(e.M,function(e,f){d=d&&f(a,b,c)}),e=e.parentNode})}},function(a,b){y.prototype[a]=b}),g({request:function(b,c,d,e){e=e||{};var f,h=0,j=x(),l=d&&d.constructor==e.constructor,m=/post|put/i.test(b);try{j.xhr=f=new XMLHttpRequest,j.stop=function(){f.abort()},l&&(d=i(g,d,function(a,b){return i(k,b,function(b){return encodeURIComponent(a)+(null!=b?"="+encodeURIComponent(b):"")})}).join("&")),null==d||m||(c+="?"+d,d=null),f.open(b,c,!0,e.user,e.pass),l&&m&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),g(e.headers,function(a,b){f.setRequestHeader(a,b)}),g(e.xhr,function(a,b){f[a]=b}),f.onreadystatechange=function(){4!=f.readyState||h++||(200<=f.status&&300>f.status?j.fire(!0,[f.responseText,f]):j.fire(!1,[f.status,f.responseText,f]))},f.send(d)}catch(n){h||j.fire(!1,[0,null,a(n)])}return j},toJSON:JSON.stringify,parseJSON:JSON.parse,ready:r,loop:function(a){function b(a){g(F,function(b,c){c(a)}),G&&h(b)}function c(){return F[f]&&(delete F[f],G--),e}var d,e=0,f=D++,h=A.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return F[f]=function(b){d=d||b,a(e=b-d,c)},G++||h(b),c},off:function(a){f(a.M),a.M=null}},function(a,b){t[a]=b}),document.addEventListener("DOMContentLoaded",function(){f(E),E=null},!1),{$:t,$$:function(a,b,c){return u(a,b,c)[0]},EE:function(a,c,d){return a=t(document.createElement(a)),m(c)||!b(c,/^ob/)?a.add(c):a.set(c).add(d)},M:y,getter:C,setter:B}});