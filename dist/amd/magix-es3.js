/*!3.8.3 MIT kooboy_li@163.com*/define("magix",["$"],function(e){var n,t,r=e.isPlainObject,i=e.isArray,o=0,f="",a=[],u=",",c=window,h=document,s=e(h),d=c.setTimeout,v="changed",$="change",l="pageunload",p="value",g=function(){},m=JSON.stringify,b="\x1e",w="object",y="prototype",x="params",k="path",V="mx-view",I=/[#?].*$/,S=/([^=&?\/#]+)=?([^&#?]*)/g,q=/(?!^)=|&/,A=function(e){return(e||"mx_")+o++},T=A(),C={rootId:A(),defaultView:T,error:function(e){throw e}},O=function(e){return typeof e==w?e:h.getElementById(e)},U=function(e){return!e||typeof e!=w},j=function(e,n,t){if(e=O(e),n=O(n),e&&n&&!(t=e==n))try{t=16==(16&n.compareDocumentPosition(e))}catch(e){}return t},P=function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])B(n,i)&&(e[i]=n[i]);return e},Z=function(e,n,t){for(t in n=[],e)B(e,t)&&n.push(t);return n},E=C.hasOwnProperty,H=e("head"),N=function(e,n){n&&!N[e]&&(N[e]=1,H.append("<style>"+n))},z=function(e){return e.id||(e.$a=1,e.id=A())},L=function(e,n,t,r,o){n=n||a,i(e)||(e=[e]),i(n)||(n=[n]);for(var f=0,u=e;f<u.length;f++){o=u[f];try{r=o&&o.apply(t,n)}catch(e){C.error(e)}}return r},B=function(e,n){return e&&E.call(e,n)},M=function(e,n,t){var r,i;for(r in n)i=n[r],t[r]=(i+f)[0]==b?e[i]:i},R=function(e,n){return n.f-e.f||n.t-e.t},_=function(e,n,t,r){(r=this).c=[],r.b=n||5,r.x=r.b+(e||20),r.r=t};P(_[y],{get:function(e){var n=this.c[b+e];return n&&(n.f++,n.t=o++,n=n.v),n},each:function(e,n,t){for(var r=0,i=(t=this).c;r<i.length;r++)e(i[r].v,n,t)},set:function(e,n){var t=this.c,r=b+e,i=t[r],f=this.b;if(!i){if(t.length>=this.x)for(t.sort(R);f--;)(i=t.pop()).f>0&&this.del(i.o);i={o:e},t.push(i),t[r]=i}i.v=n,i.f=1,i.t=o++},del:function(e){e=b+e;var n=this.c,t=n[e],r=this.r;t&&(t.f=-1,t.v=f,delete n[e],r&&L(r,t.o))},has:function(e){return B(this.c,b+e)}});var D,F=function(e,n){if(e)if(T==e)t||(t=qn.extend()),n(t);else if(i(e))require(e,n);else try{n(require(e))}catch(t){require([e],n)}else n&&n()},J=function(){},Q=function(e,n,t,r,i){return J[y]=n[y],i=new J,P(i,t),P(e,r),i.constructor=e,e[y]=i,e},W=e.find||e.zepto,G=W.matchesSelector||W.matches,K=function(e,n){n=e.data,e.eventTarget=n.e,L(n.f,e,n.v)},X=function(n,t,r,i,o){o&&(t+="."+o.i),i?e(n).off(t,r):e(n).on(t,o,r)},Y=new _,ee=0,ne=function(e,n,t){try{t=decodeURIComponent(t)}catch(e){}D[n]=t},te=function(e){var n,t=Y.get(e);return t||(D={},e==(n=e.replace(I,f))&&q.test(n)&&(n=f),e.replace(n,f).replace(S,ne),Y.set(e,t={a:n,b:D})),{path:t.a,params:P({},t.b)}},re=function(e,n,t){var r,i,o,a=[];for(i in n)r=n[i]+f,(!t||r||B(t,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+a.join("&")),e},ie=function(e,n){var t,r={};if(e)for(var i=0,o=e;i<o.length;i++)t=o[i],r[n&&t?t[n]:t]=n?t:1+(0|r[t]);return r},oe={config:function(e,n){return n=C,e&&(n=r(e)?P(n,e):n[e]),n},boot:function(e){P(C,e),F(C.ini,function(n){P(C,n,e),F(C.exts,function(){Ee.on(v,Re),ve.on(v,Re),ee=1,Ue()})})},toMap:ie,toTry:L,toUrl:re,parseUrl:te,mix:P,has:B,keys:Z,inside:j,node:O,applyStyle:N,guid:A,use:F,Cache:_,nodeId:z},fe={fire:function(e,n,t,r){var i,o,a,u,c=this,h=c[b+e];if(n||(n={}),n.type||(n.type=e),h)for(o=(i=h.length)-1;i--;)(u=h[a=r?i:o-i]).f?(u.x=1,L(u.f,n,c),u.x=f):u.x||(h.splice(a,1),o--);(h=c["on"+e])&&L(h,n,c),t&&c.off(e)},on:function(e,n){var t=b+e;(this[t]||(this[t]=[])).push({f:n})},off:function(e,n){var t,r=b+e,i=this[r];if(n){if(i)for(var o=0,a=i;o<a.length;o++)if((t=a[o]).f==n){t.f=f;break}}else delete this[r],delete this["on"+e]}};oe.Event=fe;var ae={},ue={},ce={},he=0,se=function(e){for(var n=0,t=e=(e+f).split(",");n<t.length;n++){var r=t[n];B(ue,r)?ue[r]++:ue[r]=1}return e},de=function(e){for(var n,t=0,r=e;t<r.length;t++)n=r[t],B(ue,n)&&(--ue[n]||(delete ue[n],delete ae[n]))};var ve=P({get:function(e){var n=e?ae[e]:ae;return n},set:function(e){he=function(e,n,t){var r,i,o,f=0;for(o in e)r=e[o],i=n[o],U(r)&&i===r||(t[o]=1,f=1),n[o]=r;return f}(e,ae,ce)||he},digest:function(e){e&&ve.set(e),he&&(he=0,this.fire(v,{keys:ce}),ce={})},diff:function(){return ce},clean:function(e){return{ctor:function(){e=se(e),this.on("destroy",function(){return de(e)})}}}},fe);oe.State=ve;var $e,le,pe,ge,me,be,we,ye,xe="view",ke=new _,Ve=new _,Ie=c.location,Se=0,qe={query:{},params:{},href:f},Ae=/(?:^.*\/\/[^\/]+|#.*$)/gi,Te=/^[^#]*#?!?/,Ce=function(e){return this[x][e]||f},Oe=function(e,n){e="#!"+e,n?Ie.replace(e):Ie.hash=e},Ue=function(){var e,n,t=Pe().srcHash;X(c,"hashchange",function(r,i,o){n||(i=Pe(),(e=i.srcHash)!=t&&(o=function(){r.p=1,t=e,n=f,Oe(e),Ze()},r={reject:function(){r.p=1,n=f,Oe(t)},resolve:o,prevent:function(){n=1}},Ee.fire($,r),n||r.p||o()))}),c.onbeforeunload=function(e,n,t){if(e=e||c.event,n={},Ee.fire(l,n),t=n.msg)return e&&(e.returnValue=t),t},Ze()},je=h.title,Pe=function(e){e=e||Ie.href;var n,t,i,o,a,u=ke.get(e);return u||(n=e.replace(Ae,f),t=e.replace(Te,f),i=te(n),o=te(t),a=P({},i[x],o[x]),u={get:Ce,href:e,srcQuery:n,srcHash:t,query:i,hash:o,params:a},ee&&(!function(e,n){if(le||(le=C.routes||{},pe=C.unmatchView,ge=C.defaultView,me=C.defaultPath||"/",be=C.rewrite),!e[xe]){var t=e.hash[k]||me;be&&(t=be(t,e[x],le)),n=le[t]||pe||ge,e[k]=t,e[xe]=n,r(n)&&P(e,n)}}(u),ke.set(e,u))),u},Ze=function(){var e=Pe(),n=function(e,n){var t=e.href,r=n.href,i=t+b+r,o=Ve.get(i);if(!o){var f,a;o={params:a={},force:!t};for(var u=e[x],c=n[x],h=function(e){var n=u[e],t=c[e];n!=t&&(a[e]={from:n,to:t},f=1)},s=0,d=Z(u).concat(Z(c));s<d.length;s++)h(d[s]);u=e,c=n,a=o,h(k),h(xe),Ve.set(i,o={a:f,b:o})}return o}(qe,qe=e);return!Se&&n.a&&(($e=n.b)[k]&&(h.title=e.title||je),Ee.fire(v,$e)),Se=0,$e},Ee=P({parse:Pe,diff:Ze,to:function(e,n,t,i){!n&&r(e)&&(n=e,e=f);var o,a,u,c,h=te(e),s=h[x],d=h[k],v=qe[k],$=qe[x],l=qe.query[x];if(P(s,n),d)for(v in l)B(s,v)||(s[v]=f);else $&&(d=v,s=P({},$,s));a=qe,u=t,c=i,(o=re(o=d,s,l))!=a.srcHash&&(Se=c,Oe(o,u))}},fe);oe.Router=Ee;var He=function(e){if(!e.$a&&!e.$b&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));var n=void 0,t=e.id,r=e.pId;(n=ze[r])&&!B(n.$d,t)&&(n.$d[t]=1,n.$rc++,He(n))}},Ne=function(e,n){if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",n);var t=void 0,r=e.id,i=e.pId;(t=ze[i])&&B(t.$d,r)&&(t.$rc--,delete t.$d[r],Ne(t,n))}},ze={},Le=[],Be=0,Me=function(e,n,t){if(e&&e.$f!=Be&&(t=e.$v)&&t.$a>1){(n?function(e,n,t){var r,i=e.$os;if(i)for(var o=0,f=i;o<f.length&&(r=f[o],!(t=B(n,r)));o++);return t}(t,n):Sn(t))&&t.$b();for(var r=void 0,i=0,o=e.children();i<o.length;i++)r=o[i],Me(ze[r],n)}},Re=function(e){var t,r,i=(we||(n=h.body,O(r=C.rootId)||(n.id=r),we=new _e(r)),we);(t=e[xe])?i.mountView(t.to):(Be=o++,Me(i,e.keys))},_e=function(e,n,t){var r,i;(t=this).id=e,t.$c={},t.$cc=0,t.$rc=0,t.$g=1,t.$d={},t.$e=[],t.pId=n,i=t,B(ze,r=e)||(ze[r]=i,_e.fire("add",{vframe:i}),(r=O(r))&&(r.vframe=i))};P(_e,{all:function(){return ze},get:function(e){return ze[e]}},fe),P(_e[y],fe,{mountView:function(e,n){var t,r,i,o,f,a,u=this,c=u.id,h=u.pId,s=u.$g,d=O(c);!u.$h&&d&&(u.$h=1,u.$i=d.innerHTML),u.unmountView(),u.$a=0,d&&e&&(u[k]=e,t=te(e),i=t[k],r=++s,o=t[x],a=(a=(a=(a=ze[h])&&a.$v)&&a.$d)&&a.$a,e.indexOf(b)>0&&M(a,o,o),u.$n=t[k],P(o,n),F(i,function(e){if(r==u.$g){if(!e)return C.error(Error("id:"+c+" cannot load:"+i));f=In(e),i=new e(c,u,o,f),u.$v=i,u.$f=Be,xn(i),L(i.init,o,i),i.$b(),i.$e||(u.$h=0,i.$f||i.endUpdate())}}))},unmountView:function(){var n,t,r=this,i=r.$v,o=r.id;r.$e=[],i&&(ye||(t=1,ye={id:o}),r.$a=1,r.unmountZone(0,1),Ne(r,ye),r.$v=0,i.$a>0&&(i.$a=0,i.fire("destroy",0,1,1),wn(i,1),xn(i,1),i.owner=0),i.$a--,(n=O(o))&&r.$h&&e(n).html(r.$i),t&&(ye=0)),r.$g++},mountVframe:function(e,n,t){var r,i=this,o=i.id,f=i.$c;return Ne(i,{id:e}),(r=ze[e])||(B(f,e)||(i.$o=0,i.$cc++),f[e]=e,(r=Le.pop())?_e.call(r,e,o):r=new _e(e,o)),r.mountView(n,t),r},mountZone:function(n,t){var r,i,o=this,f=[];n=n||o.id;var a,u=e("#"+n+" ["+V+"]");o.$b=1;for(var c=0,h=u;c<h.length;c++)r=h[c],i=z(r),r.$b||(r.$b=1,f.push([i,r.getAttribute(V)]));for(var s=0,d=f;s<d.length;s++)i=(a=d[s])[0],r=a[1],f[i]?C.error(Error("vf.id duplicate:"+i+" at "+o[k])):o.mountVframe(f[i]=i,r);o.$b=0,t||He(o)},unmountVframe:function(e,n){var t,r,i,o;if(e=e?this.$c[e]:this.id,t=ze[e]){var f=t.$cr,a=t.pId;t.unmountView(),i=f,(o=ze[r=e])&&(delete ze[r],_e.fire("remove",{vframe:o,fcc:i}),(r=O(r))&&(r.$b=0),r&&(r.vframe=0),r&&(r.$d=0)),t.id=t.pId=t.$c=t.$d=0,t.$h=0,t.off("alter"),t.off("created"),Le.push(t),(t=ze[a])&&B(t.$c,e)&&(delete t.$c[e],t.$o=0,t.$cc--,n||He(t))}},unmountZone:function(e,n){var t;for(t in this.$c)(!e||t!=e&&j(t,e))&&this.unmountVframe(t,1);n||He(this)},parent:function(e,n){for(n=this,e=e>>>0||1;n&&e--;)n=ze[n.pId];return n},children:function(e){return(e=this).$o||(e.$o=Z(e.$c))},invoke:function(e,n){var t,r,i,o,f,a=this.$e;return(r=this.$v)&&r.$f?t=(i=r[e])&&L(i,n,r):((o=a[f=b+e])&&(o.r=n===o.a),o={n:e,a:n,k:f},a.push(o),a[f]=o),t}}),oe.Vframe=_e,e.fn.invokeView=function(e,n){if(this.length){var t=this[0].vframe;if(void 0===n)return t&&t.invoke(e);for(var r=0;r<this.length;r++){(t=this[r].vframe)&&t.invoke(e,n)}}};var De=new _(30,10),Fe=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,Je={},Qe={},We=function(e,t){var r,i,o,f,u,c,h=[],s=e,d=e.getAttribute("mx-"+t),v=[],$=0;if(d&&((f=De.get(d))||((f={v:(f=d.match(Fe)||a)[1],n:f[2],i:f[3]}).p=f.i&&L(Function("return "+f.i),a,e),De.set(d,f)),f=P({},f,{r:d}),h.push(f)),f&&!f.v||Qe[t]){if(!(c=e.$a))for(v.push(s);s!=n&&(s=s.parentNode);){if(ze[i=s.id]||(i=s.$v)){c=i;break}v.push(s)}if(c){for(var l=0,p=v;l<p.length;l++)(d=p[l]).$a=c;s=e.id,ze[s]&&($=c=s);do{if((r=ze[c])&&(u=r.$v)){for(i in(o=u.$so)[t])o={r:i,v:c,n:i},i?G(e,i)&&h.push(o):$&&h.unshift(o);if(u.$e&&!$){f&&!f.v&&(f.v=c);break}$=0}}while(r&&(c=r.pId))}}return h},Ge=function(e){for(var t,r,i,o,f,a,u,c=e.target,h=e.type,s=[];c!=n;){if((t=We(c,h)).length){s=[];for(var d=0,v=t;d<v.length;d++){var $=v[d],l=$.v,p=($.r,$.n),g=$.p,m=$.i;if(a!=l){if(a&&e.isPropagationStopped())break;a=l}if(o=(i=ze[l])&&i.$v){if((f=o[p+b+h])&&(e.eventTarget=c,u=g||{},m&&m.indexOf(b)>0&&M(o.$d.$a,u,u={}),e[x]=u,L(f,e,o),e.isImmediatePropagationStopped()))break;0}else e.stopPropagation();0}}if((r=c.$)&&r[h]||e.isPropagationStopped())break;s.push(c),c=c.parentNode||n}for(var w=0,y=s;w<y.length;w++)(r=(c=y[w]).$||(c.$={}))[h]=1},Ke={input:1,br:1,hr:1,img:1,embed:1,source:1,area:1,param:1,col:1,track:1,wbr:1},Xe={input:[p,"checked"],textarea:[p],option:["selected"]},Ye="#text";var en=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,nn=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,tn=/^<\/[a-z\d+]+>/,rn={},on=/&#?[^\W]+;?/g,fn=h.createElement("div"),an=function(e){return B(rn,e)||(fn.innerHTML=e,rn[e]=fn.innerText),rn[e]},un=function(e){return e.replace(on,an)},cn=function(e,n){var t=z(n);e.$c[t]?e.unmountVframe(t,1):e.unmountZone(t,1)},hn=function(e,n,t,r){var i,o,a,u,c=n.d,h=e.attributes,s=n.h;for(u=h.length;u--;)o=h[u].name,B(s,o)||("id"==o?r||t.d.push([e,f]):(t.c=1,e.removeAttribute(o)));for(var d=0,v=n.e;d<v.length;d++)o=(i=v[d]).f,a=un(i.g),"id"==o?t.d.push([e,a]):e.getAttribute(o)!=a&&(t.c=1,e.setAttribute(o,a));var $=Xe[c];if($)for(var l=0,g=$;l<g.length;l++)e[i=g[l]]=B(s,i)?i!=p||s[i]:i==p&&f},sn=function(e,n,t,r,i){return(i=e.d)==Ye?h.createTextNode(e.b):(r=h.createElementNS("svg"==i?"http://www.w3.org/2000/svg":n.namespaceURI,i),hn(r,e,t),r.innerHTML=e.b,r)},dn=function(e,n,t,r,i){var o,f,a,u,c,h,s,d,v,$,l={};for(o=(u=e.childNodes).length,f=(c=n.a).length,a=0;a<o;a++)v=(h=u[a]).id,h.$a&&(v=($=ze[v])&&$.$n),v&&(v=l[v]||(l[v]=[])).push(h);for(a=0;a<f;a++)h=u[a],(v=l[(s=c[a]).i])&&(v=v.shift())?(v!=h&&e.insertBefore(v,h),vn(v,e,s,t,r,i)):h?l[h.i]?(o++,t.c=1,e.insertBefore(sn(s,e,t),h)):vn(h,e,s,t,r,i):(e.appendChild(sn(s,e,t)),t.c=1);for(a=f;a<o;a++)d=e.lastChild,cn(r,d),e.removeChild(d),t.c=1},vn=function(e,n,t,r,i,o){var f=e.nodeName.toLowerCase();if(f==t.d)if(f==Ye)e.nodeValue!=t.b&&(e.nodeValue=un(t.b));else{var a=t.h[V],u=t.b,c=void 0,h=void 0,s=void 0,d=ze[e.id],v=void 0,$=void 0,l=void 0,p=void 0,g=void 0,m=void 0;a&&d&&(v=(l=d.$v).$g,p=te(a),m=u!=d.$i,$=a.indexOf("?")>0||m),a&&d&&d.$n==p[k]?$&&(v?(g=p[x],a.indexOf(b)>-1&&M(o,g,g),d.$i=u,d[k]=a,p={inner:u,deep:!l.$e,html:m},hn(e,t,r,1),L(v,[g,p],l)&&l.$b(),h=p.deep):(s=1,h=1,c=1)):(c=1,h=1,s=d),s&&d.unmountVframe(0,1),c&&hn(e,t,r,d&&a),h&&dn(e,t,r,i,o)}else cn(i,e),n.replaceChild(sn(t,n,r),e),r.c=1},$n=function(e){var n,t,r,i=e.$b,o=ze[i],u=e.$a,c=o&&o.$v,h={d:[]},d=O(i);if(c&&c.$a>0&&(n=c.$e)){r=function(e){for(var n,t,r,i,o,u,c,h,s,d,v,$=e.length,l=0,g={a:[],b:e},m=[g];l<$;)n=1,"<"==(r=e.slice(l))[0]&&("/"==r[1]?(i=r.match(tn))&&(c=m.pop(),u=e.slice(c.c,l),"textarea"==c.d?(c.e.push({f:p,g:u}),c.h[p]=u,c.a=a):c.b=u,g=m[m.length-1],l+=i[0].length,n=0):(i=r.match(en))&&(o=i[1],u=[],h={},v=f,i[2].replace(nn,function(e,n,t){t=t||f,"id"==n?v=t:n==V&&t&&!v&&(v=te(t)[k]),u.push({f:n,g:t}),h[n]=t}),l+=i[0].length,d=i[3]||B(Ke,o),c={i:v,d:o,e:u,h:h,a:[],c:l},g.a.push(c),d?c.j=1:(m.push(c),g=c),n=0)),n&&(l+=(s=(t=r.indexOf("<"))<0?r:r.substring(0,t)).length,c={d:Ye,b:s},g.a.push(c));return g}(mn(n(u),i)),dn(d,r,h,o,u);for(var v=0,$=h.d;v<$.length;v++)(t=$[v])[0].id=t[1];h.c&&(c.endUpdate(i),s.trigger({type:"htmlchanged",vId:i}))}c.fire("domready")},ln=function(e){var n;this.$b=e,this.$a=((n={vId:e})[b]=1,n)};P(ln[y],{get:function(e,n){return n=this.$a,e&&(n=n[e]),n},set:function(e){return P(this.$a,e),this},digest:function(e){return this.set(e),$n(this),this},snapshot:function(){return this.$d=m(this.$a),this},altered:function(){if(this.$d)return this.$d!=m(this.$a)}});var pn=/^(\$?)([^<]*)<([^>]+)>$/,gn=/\x1f/g,mn=function(e,n){return(e+f).replace(gn,n)},bn=function(e,n,t){return e.$h?t=e:((t=function(e){L(t.$h,e,this)}).$h=[e],t.$i=1),t.$h=t.$h.concat(n.$h||n),t},wn=function(e,n){var t,r,i=e.$r;for(t in i)r=i[t],(n||r.x)&&yn(i,t,1)},yn=function(e,n,t,r){var i,o,f=e[n];return f&&f!=r&&((i=(o=f.e).destroy)&&t&&L(i,a,o),delete e[n]),o},xn=function(e,t){var r,i,o,f,a,u,c=e.$eo,h=e.$so,s=e.$el,d=e.id;for(r in c)i=r,o=h[r],f=t,void 0,void 0,a=0|Je[i],u=f?-1:1,a&&f!==a||X(n,i,Ge,f),Je[i]=a+u,o&&(Qe[i]=(0|Qe[i])+u);for(var v=0,$=s;v<$.length;v++)r=$[v],X(r.e,r.n,K,t,{i:d,v:e,f:r.f,e:r.e})},kn=[],Vn={win:c,doc:h},In=function(e){if(!e[b]){e[b]=[];var n=e[y],t=void 0,r=void 0,i=void 0,o={},f=[],a={},c=void 0,h=void 0,s=void 0,d=void 0,v=void 0,$={};if(r=n.mixins){for(var l=0,p=r;l<p.length;l++)for(s in c=p[l])t=c[s],i=$[s],"ctor"!=s?(pn.test(s)&&(i?t=bn(i,t):t.$i=1),$[s]=t):e[b].push(t);for(s in $)B(n,s)||(n[s]=$[s])}for(s in n)if(t=n[s],r=s.match(pn)){h=r[1],i=r[2];for(var g=0,m=r[3].split(u);g<m.length;g++){if(d=m[g],c=Vn[i],v=1,h){if(c){f.push({f:t,e:c,n:d});continue}v=2,(c=a[d])||(c=a[d]={}),c[i]=1}o[d]=o[d]|v,(c=n[d=i+b+d])?c.$i&&(t.$i?n[d]=bn(c,t):B(n,s)&&(n[d]=t)):n[d]=t}}k="$b",V=(w=n)[x="render"],w[x]=w[k]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];(I=this).$a>0&&(I.$a++,I.fire("rendercall"),wn(I),L(V,e,I))},n.$eo=o,n.$el=f,n.$so=a,n.$e=n.tmpl,n.$g=n.assign}var w,x,k,V,I;return e[b]},Sn=function(e){var n,t,r,i=e.$l;if(i.f&&(i.p&&(n=$e[k]),!n&&i.k)){r=$e[x];for(var o=0,f=i.k;o<f.length&&(t=f[o],!(n=B(r,t)));o++);}return n},qn=function(e,n,t,r){(r=this).owner=n,r.id=e,r.$l={k:[]},r.$r={},r.$a=1,r.updater=r.$d=new ln(r.id),L(kn,t,r)},An=qn[y];P(qn,{merge:function(){for(var e,n,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,o=t;i<o.length;i++)(n=(e=o[i])&&e.ctor)&&kn.push(n),P(An,e)},extend:function(e,n){var t=this,r=(e=e||{}).ctor,i=[];r&&i.push(r);var o=function(e,n,r,o){t.call(this,e,n,r),L(i.concat(o),r,this)};return o.extend=t.extend,Q(o,t,e,n)}}),P(An,fe,{init:g,wrapEvent:function(e){return mn(e,this.id)},beginUpdate:function(e,n){(n=this).$a>0&&n.$f&&n.owner.unmountZone(e,1)},endUpdate:function(e,n,t,r,i){(t=this).$a>0&&(e=e||t.id,n?i=n:(i=t.$f,t.$f=1),(r=t.owner).mountZone(e,n),i||d(t.wrapAsync(function(){!function(e,n,t){for(n=e.$e;n.length;)(t=n.shift()).r||e.invoke(t.n,t.a),delete n[t.k]}(r)}),0))},wrapAsync:function(e,n){var t=this,r=t.$a;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(r>0&&r==t.$a)return e.apply(n||t,i)}},observeLocation:function(e,n){var t;(t=this.$l).f=1,r(e)&&(n=e[k],e=e[x]),t.p=n,e&&(t.k=(e+f).split(u))},observeState:function(e){this.$os=(e+f).split(u)},capture:function(e,n,t,r){return r=this.$r,n?(yn(r,e,1,n),r[e]={e:n,x:t}):n=(r=r[e])&&r.e,n},release:function(e,n){return yn(this.$r,e,n)},leaveTip:function(e,n){var t=this,r=function(i){var o="a",f="b";i.type!=$&&(o="b",f="a"),r[o]?(i.prevent(),i.reject()):n()?(i.prevent(),r[f]=1,t.leaveConfirm(e,function(){r[f]=0,i.resolve()},function(){r[f]=0,i.reject()})):i.resolve()},i=function(t){n()&&(t.msg=e)};Ee.on($,r),Ee.on(l,i),t.on("unload",r),t.on("destroy",function(){Ee.off($,r),Ee.off(l,i)})},render:g}),oe.View=qn;var Tn=e.type,Cn=e.now||Date.now,On=function(){this.id=A("b"),this.$={}};P(On[y],{get:function(e,n,t){var r=n!=t,o=this.$;if(e){for(var a=i(e)?e.slice():(e+f).split("."),u=void 0;(u=a.shift())&&o;)o=o[u];u&&(o=t)}return r&&Tn(n)!=Tn(o)&&(o=n),o},set:function(e,n){var t;r(e)||((t={})[e]=n,e=t),P(this.$,e)}});var Un=function(e,n,t){(t=this[e])&&(delete this[e],L(t,n,t.e))},jn=function(e,n,t,r,o){if(e.$d)return e;if(e.$e)return e.enqueue(jn.bind(e,e,n,t,r,o));e.$e=1,i(n)||(n=[n]);for(var f,a,u,c,h,s,d,v,$,l=e.constructor,p=0,g=l.$f,m=(f=t,a=l,u=e,c=n.length,h=r,s=l.$c,d=[],v=0,$=0,function(e,n){var t,r=this;$++;var i=r.$b,o=i.k;d[e+1]=r;var l,p={bag:r,error:n};if(n?(v=n,a.fire("fail",p),t=1):s.has(o)||(o&&s.set(o,r),i.t=Cn(),(l=i.a)&&L(l,r,r),(l=i.x)&&a.clear(l),a.fire("done",p),t=1),!u.$d){var g=$==c;g&&(u.$e=0,2==h&&(d[0]=v,L(f,d,u))),1==h&&L(f,[n||null,r,g,e],u)}t&&a.fire("end",p)}),b=0,w=n;b<w.length;b++){var y=w[b];if(y){var x=l.get(y,o),k=x.e,V=k.$b.k,I=m.bind(k,p++),S=void 0;V&&g[V]?g[V].push(I):x.u?(V&&((S=[I]).e=k,g[V]=S,I=Un.bind(g,V)),l.$s(k,I)):I()}}return e},Pn=function(){var e=this;e.id=A("s"),e.$g=[]};P(Pn[y],{all:function(e,n){return jn(this,e,n,2)},save:function(e,n){return jn(this,e,n,2,1)},one:function(e,n){return jn(this,e,n,1)},enqueue:function(e){var n=this;return n.$d||(n.$g.push(e),n.dequeue(n.$h)),n},dequeue:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t,r=this;r.$e||r.$d||(r.$e=1,d(function(){r.$e=0,r.$d||(t=r.$g.shift())&&L(t,r.$h=e)},0))},destroy:function(e){(e=this).$d=1,e.$g=0}});var Zn=function(e,n){return[m(n),m(e)].join(b)},En=function(e,n,t,r){(r=e&&e.$b)&&n[r.n]&&t.del(r.k)},Hn=P({add:function(e){var n,t=this.$b;i(e)||(e=[e]);for(var r=0,o=e;r<o.length;r++)if(n=o[r]){var f=n.name,a=n.cache;n.cache=0|a,t[f]=n}},create:function(e){var n=this.meta(e),t=0|e.cache||n.cache,i=new On;i.set(n),i.$b={n:n.name,a:n.after,x:n.cleans,k:t&&Zn(n,e)},r(e)&&i.set(e);var o=n.before;return o&&L(o,i,i),this.fire("begin",{bag:i}),i},meta:function(e){return this.$b[e.name||e]||e},get:function(e,n){var t,r;return n||(t=this.cached(e)),t||(t=this.create(e),r=1),{e:t,u:r}},clear:function(e){this.$c.each(En,ie((e+f).split(u)))},cached:function(e){var n,t,r=this.$c,i=this.meta(e),o=0|e.cache||i.cache;if(o&&(t=Zn(i,e)),t){var f=this.$f[t];f?n=f.e:(n=r.get(t))&&Cn()-n.$b.t>o&&(r.del(t),n=0)}return n}},fe);return Pn.extend=function(e,n,t){var r=function(){Pn.call(this)};return r.$s=e,r.$c=new _(n,t),r.$f={},r.$b={},Q(r,Pn,null,Hn)},oe.Service=Pn,P(g[y],fe),g.extend=function e(n,t){var r=this,i=n&&n.ctor,o=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];r.apply(this,e),i&&i.apply(this,e)};return o.extend=e,Q(o,r,n,t)},oe.Base=g,oe});