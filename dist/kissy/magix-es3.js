/*!3.8.3 MIT kooboy_li@163.com*/KISSY.add("magix",function(n,t,e){var r,i=n.all,o=n.isObject,a=n.isArray,f=0,u="",c=[],h=",",s=window,d=document,v=i(d),$=s.setTimeout,l="changed",p="change",g="pageunload",m="value",b=function(){},w=JSON.stringify,y="\x1e",x="object",k="prototype",V="params",I="path",S="mx-view",A=/[#?].*$/,T=/([^=&?\/#]+)=?([^&#?]*)/g,C=/(?!^)=|&/,O=function(n){return(n||"mx_")+f++},U=O(),j={rootId:O(),defaultView:U,error:function(n){throw n}},q=function(n){return typeof n==x?n:d.getElementById(n)},Z=function(n){return!n||typeof n!=x},E=function(n,t,e){if(n=q(n),t=q(t),n&&t&&!(e=n==t))try{e=16==(16&t.compareDocumentPosition(n))}catch(n){}return e},H=function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])R(t,i)&&(n[i]=t[i]);return n},N=function(n,t,e){for(e in t=[],n)R(n,e)&&t.push(e);return t},P=j.hasOwnProperty,L=i("head"),z=function(n,t){t&&!z[n]&&(z[n]=1,L.append("<style>"+t))},B=function(n){return n.id||(n.$a=1,n.id=O())},M=function(n,t,e,r,i){t=t||c,a(n)||(n=[n]),a(t)||(t=[t]);for(var o=0,f=n;o<f.length;o++){i=f[o];try{r=i&&i.apply(e,t)}catch(n){j.error(n)}}return r},R=function(n,t){return n&&P.call(n,t)},_=function(n,t,e){var r,i;for(r in t)i=t[r],e[r]=(i+u)[0]==y?n[i]:i},D=function(n,t){return t.f-n.f||t.t-n.t},F=function(n,t,e,r){(r=this).c=[],r.b=t||5,r.x=r.b+(n||20),r.r=e};H(F[k],{get:function(n){var t=this.c[y+n];return t&&(t.f++,t.t=f++,t=t.v),t},each:function(n,t,e){for(var r=0,i=(e=this).c;r<i.length;r++)n(i[r].v,t,e)},set:function(n,t){var e=this.c,r=y+n,i=e[r],o=this.b;if(!i){if(e.length>=this.x)for(e.sort(D);o--;)(i=e.pop()).f>0&&this.del(i.o);i={o:n},e.push(i),e[r]=i}i.v=t,i.f=1,i.t=f++},del:function(n){n=y+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=u,delete t[n],r&&M(r,e.o))},has:function(n){return R(this.c,y+n)}});var J,K=function(t,e){n.use(t&&t+u,function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.apply(n,t)})},Q=n.extend,W=e.test,Y=function(n,t){t=this,n.eventTarget=t.e,M(t.f,n,t.v)},G=function(n,e,r,i,o){o?t[(i?"un":u)+"delegate"](n,e,r,o):t[i?"detach":"on"](n,e,r,o)},X=new F,nn=0,tn=function(n,t,e){try{e=decodeURIComponent(e)}catch(n){}J[t]=e},en=function(n){var t,e=X.get(n);return e||(J={},n==(t=n.replace(A,u))&&C.test(t)&&(t=u),n.replace(t,u).replace(T,tn),X.set(n,e={a:t,b:J})),{path:e.a,params:H({},e.b)}},rn=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+u,(!e||r||R(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},on=function(n,t){var e,r={};if(n)for(var i=0,o=n;i<o.length;i++)e=o[i],r[t&&e?e[t]:e]=t?e:1+(0|r[e]);return r},an={config:function(n,t){return t=j,n&&(t=o(n)?H(t,n):t[n]),t},boot:function(n){H(j,n),K(j.ini,function(t){H(j,t,n),K(j.exts,function(){Nn.on(l,_n),$n.on(l,_n),nn=1,qn()})})},toMap:on,toTry:M,toUrl:rn,parseUrl:en,mix:H,has:R,keys:N,inside:E,node:q,applyStyle:z,guid:O,use:K,Cache:F,nodeId:B},fn={fire:function(n,t,e,r){var i,o,a,f,c=this,h=c[y+n];if(t||(t={}),t.type||(t.type=n),h)for(o=(i=h.length)-1;i--;)(f=h[a=r?i:o-i]).f?(f.x=1,M(f.f,t,c),f.x=u):f.x||(h.splice(a,1),o--);(h=c["on"+n])&&M(h,t,c),e&&c.off(n)},on:function(n,t){var e=y+n;(this[e]||(this[e]=[])).push({f:t})},off:function(n,t){var e,r=y+n,i=this[r];if(t){if(i)for(var o=0,a=i;o<a.length;o++)if((e=a[o]).f==t){e.f=u;break}}else delete this[r],delete this["on"+n]}};an.Event=fn;var un={},cn={},hn={},sn=0,dn=function(n){for(var t=0,e=n=(n+u).split(",");t<e.length;t++){var r=e[t];R(cn,r)?cn[r]++:cn[r]=1}return n},vn=function(n){for(var t,e=0,r=n;e<r.length;e++)t=r[e],R(cn,t)&&(--cn[t]||(delete cn[t],delete un[t]))};var $n=H({get:function(n){var t=n?un[n]:un;return t},set:function(n){sn=function(n,t,e){var r,i,o,a=0;for(o in n)r=n[o],i=t[o],Z(r)&&i===r||(e[o]=1,a=1),t[o]=r;return a}(n,un,hn)||sn},digest:function(n){n&&$n.set(n),sn&&(sn=0,this.fire(l,{keys:hn}),hn={})},diff:function(){return hn},clean:function(n){return{ctor:function(){n=dn(n),this.on("destroy",function(){return vn(n)})}}}},fn);an.State=$n;var ln,pn,gn,mn,bn,wn,yn,xn,kn="view",Vn=new F,In=new F,Sn=s.location,An=0,Tn={query:{},params:{},href:u},Cn=/(?:^.*\/\/[^\/]+|#.*$)/gi,On=/^[^#]*#?!?/,Un=function(n){return this[V][n]||u},jn=function(n,t){n="#!"+n,t?Sn.replace(n):Sn.hash=n},qn=function(){var n,t,e=En().srcHash;G(s,"hashchange",function(r,i,o){t||(i=En(),(n=i.srcHash)!=e&&(o=function(){r.p=1,e=n,t=u,jn(n),Hn()},r={reject:function(){r.p=1,t=u,jn(e)},resolve:o,prevent:function(){t=1}},Nn.fire(p,r),t||r.p||o()))}),s.onbeforeunload=function(n,t,e){if(n=n||s.event,t={},Nn.fire(g,t),e=t.msg)return n&&(n.returnValue=e),e},Hn()},Zn=d.title,En=function(n){n=n||Sn.href;var t,e,r,i,a,f=Vn.get(n);return f||(t=n.replace(Cn,u),e=n.replace(On,u),r=en(t),i=en(e),a=H({},r[V],i[V]),f={get:Un,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:a},nn&&(!function(n,t){if(pn||(pn=j.routes||{},gn=j.unmatchView,mn=j.defaultView,bn=j.defaultPath||"/",wn=j.rewrite),!n[kn]){var e=n.hash[I]||bn;wn&&(e=wn(e,n[V],pn)),t=pn[e]||gn||mn,n[I]=e,n[kn]=t,o(t)&&H(n,t)}}(f),Vn.set(n,f))),f},Hn=function(){var n=En(),t=function(n,t){var e=n.href,r=t.href,i=e+y+r,o=In.get(i);if(!o){var a,f;o={params:f={},force:!e};for(var u=n[V],c=t[V],h=function(n){var t=u[n],e=c[n];t!=e&&(f[n]={from:t,to:e},a=1)},s=0,d=N(u).concat(N(c));s<d.length;s++)h(d[s]);u=n,c=t,f=o,h(I),h(kn),In.set(i,o={a:a,b:o})}return o}(Tn,Tn=n);return!An&&t.a&&((ln=t.b)[I]&&(d.title=n.title||Zn),Nn.fire(l,ln)),An=0,ln},Nn=H({parse:En,diff:Hn,to:function(n,t,e,r){!t&&o(n)&&(t=n,n=u);var i,a,f,c,h=en(n),s=h[V],d=h[I],v=Tn[I],$=Tn[V],l=Tn.query[V];if(H(s,t),d)for(v in l)R(s,v)||(s[v]=u);else $&&(d=v,s=H({},$,s));a=Tn,f=e,c=r,(i=rn(i=d,s,l))!=a.srcHash&&(An=c,jn(i,f))}},fn);an.Router=Nn;var Pn=function(n){if(!n.$a&&!n.$b&&n.$cc==n.$rc){n.$cr||(n.$cr=1,n.$ca=0,n.fire("created"));var t=void 0,e=n.id,r=n.pId;(t=zn[r])&&!R(t.$d,e)&&(t.$d[e]=1,t.$rc++,Pn(t))}},Ln=function(n,t){if(!n.$ca&&n.$cr){n.$cr=0,n.$ca=1,n.fire("alter",t);var e=void 0,r=n.id,i=n.pId;(e=zn[i])&&R(e.$d,r)&&(e.$rc--,delete e.$d[r],Ln(e,t))}},zn={},Bn=[],Mn=0,Rn=function(n,t,e){if(n&&n.$f!=Mn&&(e=n.$v)&&e.$a>1){(t?function(n,t,e){var r,i=n.$os;if(i)for(var o=0,a=i;o<a.length&&(r=a[o],!(e=R(t,r)));o++);return e}(e,t):St(e))&&e.$b();for(var r=void 0,i=0,o=n.children();i<o.length;i++)r=o[i],Rn(zn[r],t)}},_n=function(n){var t,e,i=(yn||(r=d.body,q(e=j.rootId)||(r.id=e),yn=new Dn(e)),yn);(t=n[kn])?i.mountView(t.to):(Mn=f++,Rn(i,n.keys))},Dn=function(n,t,e){var r,i;(e=this).id=n,e.$c={},e.$cc=0,e.$rc=0,e.$g=1,e.$d={},e.$e=[],e.pId=t,i=e,R(zn,r=n)||(zn[r]=i,Dn.fire("add",{vframe:i}),(r=q(r))&&(r.vframe=i))};H(Dn,{all:function(){return zn},get:function(n){return zn[n]}},fn),H(Dn[k],fn,{mountView:function(n,t){var e,r,i,o,a,f,u=this,c=u.id,h=u.pId,s=u.$g,d=q(c);!u.$h&&d&&(u.$h=1,u.$i=d.innerHTML),u.unmountView(),u.$a=0,d&&n&&(u[I]=n,e=en(n),i=e[I],r=++s,o=e[V],f=(f=(f=(f=zn[h])&&f.$v)&&f.$d)&&f.$a,n.indexOf(y)>0&&_(f,o,o),u.$n=e[I],H(o,t),K(i,function(n){if(r==u.$g){if(!n)return j.error(Error("id:"+c+" cannot load:"+i));a=It(n),i=new n(c,u,o,a),u.$v=i,u.$f=Mn,xt(i),M(i.init,o,i),i.$b(),i.$e||(u.$h=0,i.$f||i.endUpdate())}}))},unmountView:function(){var n,t,e=this,r=e.$v,o=e.id;e.$e=[],r&&(xn||(t=1,xn={id:o}),e.$a=1,e.unmountZone(0,1),Ln(e,xn),e.$v=0,r.$a>0&&(r.$a=0,r.fire("destroy",0,1,1),wt(r,1),xt(r,1),r.owner=0),r.$a--,(n=q(o))&&e.$h&&i(n).html(e.$i),t&&(xn=0)),e.$g++},mountVframe:function(n,t,e){var r,i=this,o=i.id,a=i.$c;return Ln(i,{id:n}),(r=zn[n])||(R(a,n)||(i.$o=0,i.$cc++),a[n]=n,(r=Bn.pop())?Dn.call(r,n,o):r=new Dn(n,o)),r.mountView(t,e),r},mountZone:function(n,t){var e,r,o=this,a=[];n=n||o.id;var f,u=i("#"+n+" ["+S+"]");o.$b=1;for(var c=0,h=u;c<h.length;c++)e=h[c],r=B(e),e.$b||(e.$b=1,a.push([r,e.getAttribute(S)]));for(var s=0,d=a;s<d.length;s++)r=(f=d[s])[0],e=f[1],a[r]?j.error(Error("vf.id duplicate:"+r+" at "+o[I])):o.mountVframe(a[r]=r,e);o.$b=0,t||Pn(o)},unmountVframe:function(n,t){var e,r,i,o;if(n=n?this.$c[n]:this.id,e=zn[n]){var a=e.$cr,f=e.pId;e.unmountView(),i=a,(o=zn[r=n])&&(delete zn[r],Dn.fire("remove",{vframe:o,fcc:i}),(r=q(r))&&(r.$b=0),r&&(r.vframe=0),r&&(r.$d=0)),e.id=e.pId=e.$c=e.$d=0,e.$h=0,e.off("alter"),e.off("created"),Bn.push(e),(e=zn[f])&&R(e.$c,n)&&(delete e.$c[n],e.$o=0,e.$cc--,t||Pn(e))}},unmountZone:function(n,t){var e;for(e in this.$c)(!n||e!=n&&E(e,n))&&this.unmountVframe(e,1);t||Pn(this)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=zn[t.pId];return t},children:function(n){return(n=this).$o||(n.$o=N(n.$c))},invoke:function(n,t){var e,r,i,o,a,f=this.$e;return(r=this.$v)&&r.$f?e=(i=r[n])&&M(i,t,r):((o=f[a=y+n])&&(o.r=t===o.a),o={n:n,a:t,k:a},f.push(o),f[a]=o),e}}),an.Vframe=Dn,e[k].invokeView=function(n,t){if(this.length){var e=this[0],r=e.vframe;if(void 0===t)return r&&r.invoke(n);for(var i=0;i<this.length;i++)(r=(e=this[i]).vframe)&&r.invoke(n,t)}};var Fn=new F(30,10),Jn=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,Kn={},Qn={},Wn=function(n,t){var e,i,o,a,f,u,h=[],s=n,d=n.getAttribute("mx-"+t),v=[],$=0;if(d&&((a=Fn.get(d))||((a={v:(a=d.match(Jn)||c)[1],n:a[2],i:a[3]}).p=a.i&&M(Function("return "+a.i),c,n),Fn.set(d,a)),a=H({},a,{r:d}),h.push(a)),a&&!a.v||Qn[t]){if(!(u=n.$a))for(v.push(s);s!=r&&(s=s.parentNode);){if(zn[i=s.id]||(i=s.$v)){u=i;break}v.push(s)}if(u){for(var l=0,p=v;l<p.length;l++)(d=p[l]).$a=u;s=n.id,zn[s]&&($=u=s);do{if((e=zn[u])&&(f=e.$v)){for(i in(o=f.$so)[t])o={r:i,v:u,n:i},i?W(n,i)&&h.push(o):$&&h.unshift(o);if(f.$e&&!$){a&&!a.v&&(a.v=u);break}$=0}}while(e&&(u=e.pId))}}return h},Yn=function(n){for(var t,e,i,o,a,f,u,c=n.target,h=n.type,s=[];c!=r;){if((t=Wn(c,h)).length){s=[];for(var d=0,v=t;d<v.length;d++){var $=v[d],l=$.v,p=($.r,$.n),g=$.p,m=$.i;if(f!=l){if(f&&n.isPropagationStopped())break;f=l}if(o=(i=zn[l])&&i.$v){if((a=o[p+y+h])&&(n.eventTarget=c,u=g||{},m&&m.indexOf(y)>0&&_(o.$d.$a,u,u={}),n[V]=u,M(a,n,o),n.isImmediatePropagationStopped()))break;0}else n.stopPropagation();0}}if((e=c.$)&&e[h]||n.isPropagationStopped())break;s.push(c),c=c.parentNode||r}for(var b=0,w=s;b<w.length;b++)(e=(c=w[b]).$||(c.$={}))[h]=1},Gn={input:1,br:1,hr:1,img:1,embed:1,source:1,area:1,param:1,col:1,track:1,wbr:1},Xn={input:[m,"checked"],textarea:[m],option:["selected"]},nt="#text";var tt=/^<([a-z\d]+)((?:\s+[-A-Za-z\d_]+(?:="[^"]*")?)*)\s*(\/?)>/,et=/([-A-Za-z\d_]+)(?:="([^"]*)")?/g,rt=/^<\/[a-z\d+]+>/,it={},ot=/&#?[^\W]+;?/g,at=d.createElement("div"),ft=function(n){return R(it,n)||(at.innerHTML=n,it[n]=at.innerText),it[n]},ut=function(n){return n.replace(ot,ft)},ct=function(n,t){var e=B(t);n.$c[e]?n.unmountVframe(e,1):n.unmountZone(e,1)},ht=function(n,t,e,r){var i,o,a,f,c=t.d,h=n.attributes,s=t.h;for(f=h.length;f--;)o=h[f].name,R(s,o)||("id"==o?r||e.d.push([n,u]):(e.c=1,n.removeAttribute(o)));for(var d=0,v=t.e;d<v.length;d++)o=(i=v[d]).f,a=ut(i.g),"id"==o?e.d.push([n,a]):n.getAttribute(o)!=a&&(e.c=1,n.setAttribute(o,a));var $=Xn[c];if($)for(var l=0,p=$;l<p.length;l++)n[i=p[l]]=R(s,i)?i!=m||s[i]:i==m&&u},st=function(n,t,e,r,i){return(i=n.d)==nt?d.createTextNode(n.b):(r=d.createElementNS("svg"==i?"http://www.w3.org/2000/svg":t.namespaceURI,i),ht(r,n,e),r.innerHTML=n.b,r)},dt=function(n,t,e,r,i){var o,a,f,u,c,h,s,d,v,$,l={};for(o=(u=n.childNodes).length,a=(c=t.a).length,f=0;f<o;f++)v=(h=u[f]).id,h.$a&&(v=($=zn[v])&&$.$n),v&&(v=l[v]||(l[v]=[])).push(h);for(f=0;f<a;f++)h=u[f],(v=l[(s=c[f]).i])&&(v=v.shift())?(v!=h&&n.insertBefore(v,h),vt(v,n,s,e,r,i)):h?l[h.i]?(o++,e.c=1,n.insertBefore(st(s,n,e),h)):vt(h,n,s,e,r,i):(n.appendChild(st(s,n,e)),e.c=1);for(f=a;f<o;f++)d=n.lastChild,ct(r,d),n.removeChild(d),e.c=1},vt=function(n,t,e,r,i,o){var a=n.nodeName.toLowerCase();if(a==e.d)if(a==nt)n.nodeValue!=e.b&&(n.nodeValue=ut(e.b));else{var f=e.h[S],u=e.b,c=void 0,h=void 0,s=void 0,d=zn[n.id],v=void 0,$=void 0,l=void 0,p=void 0,g=void 0,m=void 0;f&&d&&(v=(l=d.$v).$g,p=en(f),m=u!=d.$i,$=f.indexOf("?")>0||m),f&&d&&d.$n==p[I]?$&&(v?(g=p[V],f.indexOf(y)>-1&&_(o,g,g),d.$i=u,d[I]=f,p={inner:u,deep:!l.$e,html:m},ht(n,e,r,1),M(v,[g,p],l)&&l.$b(),h=p.deep):(s=1,h=1,c=1)):(c=1,h=1,s=d),s&&d.unmountVframe(0,1),c&&ht(n,e,r,d&&f),h&&dt(n,e,r,i,o)}else ct(i,n),t.replaceChild(st(e,t,r),n),r.c=1},$t=function(n){var t,e,r,i=n.$b,o=zn[i],a=n.$a,f=o&&o.$v,h={d:[]},s=q(i);if(f&&f.$a>0&&(t=f.$e)){r=function(n){for(var t,e,r,i,o,a,f,h,s,d,v,$=n.length,l=0,p={a:[],b:n},g=[p];l<$;)t=1,"<"==(r=n.slice(l))[0]&&("/"==r[1]?(i=r.match(rt))&&(f=g.pop(),a=n.slice(f.c,l),"textarea"==f.d?(f.e.push({f:m,g:a}),f.h[m]=a,f.a=c):f.b=a,p=g[g.length-1],l+=i[0].length,t=0):(i=r.match(tt))&&(o=i[1],a=[],h={},v=u,i[2].replace(et,function(n,t,e){e=e||u,"id"==t?v=e:t==S&&e&&!v&&(v=en(e)[I]),a.push({f:t,g:e}),h[t]=e}),l+=i[0].length,d=i[3]||R(Gn,o),f={i:v,d:o,e:a,h:h,a:[],c:l},p.a.push(f),d?f.j=1:(g.push(f),p=f),t=0)),t&&(l+=(s=(e=r.indexOf("<"))<0?r:r.substring(0,e)).length,f={d:nt,b:s},p.a.push(f));return p}(mt(t(a),i)),dt(s,r,h,o,a);for(var d=0,$=h.d;d<$.length;d++)(e=$[d])[0].id=e[1];h.c&&(f.endUpdate(i),v.fire("htmlchanged",{vId:i}))}f.fire("domready")},lt=function(n){var t;this.$b=n,this.$a=((t={vId:n})[y]=1,t)};H(lt[k],{get:function(n,t){return t=this.$a,n&&(t=t[n]),t},set:function(n){return H(this.$a,n),this},digest:function(n){return this.set(n),$t(this),this},snapshot:function(){return this.$d=w(this.$a),this},altered:function(){if(this.$d)return this.$d!=w(this.$a)}});var pt=/^(\$?)([^<]*)<([^>]+)>$/,gt=/\x1f/g,mt=function(n,t){return(n+u).replace(gt,t)},bt=function(n,t,e){return n.$h?e=n:((e=function(n){M(e.$h,n,this)}).$h=[n],e.$i=1),e.$h=e.$h.concat(t.$h||t),e},wt=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&yt(i,e,1)},yt=function(n,t,e,r){var i,o,a=n[t];return a&&a!=r&&((i=(o=a.e).destroy)&&e&&M(i,c,o),delete n[t]),o},xt=function(n,t){var e,i,o,a,f,u,c=n.$eo,h=n.$so,s=n.$el,d=n.id;for(e in c)i=e,o=h[e],a=t,void 0,void 0,f=0|Kn[i],u=a?-1:1,f&&a!==f||G(r,i,Yn,a),Kn[i]=f+u,o&&(Qn[i]=(0|Qn[i])+u);for(var v=0,$=s;v<$.length;v++)e=$[v],G(e.e,e.n,Y,t,{i:d,v:n,f:e.f,e:e.e})},kt=[],Vt={win:s,doc:d},It=function(n){if(!n[y]){n[y]=[];var t=n[k],e=void 0,r=void 0,i=void 0,o={},a=[],f={},u=void 0,c=void 0,s=void 0,d=void 0,v=void 0,$={};if(r=t.mixins){for(var l=0,p=r;l<p.length;l++)for(s in u=p[l])e=u[s],i=$[s],"ctor"!=s?(pt.test(s)&&(i?e=bt(i,e):e.$i=1),$[s]=e):n[y].push(e);for(s in $)R(t,s)||(t[s]=$[s])}for(s in t)if(e=t[s],r=s.match(pt)){c=r[1],i=r[2];for(var g=0,m=r[3].split(h);g<m.length;g++){if(d=m[g],u=Vt[i],v=1,c){if(u){a.push({f:e,e:u,n:d});continue}v=2,(u=f[d])||(u=f[d]={}),u[i]=1}o[d]=o[d]|v,(u=t[d=i+y+d])?u.$i&&(e.$i?t[d]=bt(u,e):R(t,s)&&(t[d]=e)):t[d]=e}}x="$b",V=(b=t)[w="render"],b[w]=b[x]=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];(I=this).$a>0&&(I.$a++,I.fire("rendercall"),wt(I),M(V,n,I))},t.$eo=o,t.$el=a,t.$so=f,t.$e=t.tmpl,t.$g=t.assign}var b,w,x,V,I;return n[y]},St=function(n){var t,e,r,i=n.$l;if(i.f&&(i.p&&(t=ln[I]),!t&&i.k)){r=ln[V];for(var o=0,a=i.k;o<a.length&&(e=a[o],!(t=R(r,e)));o++);}return t},At=function(n,t,e,r){(r=this).owner=t,r.id=n,r.$l={k:[]},r.$r={},r.$a=1,r.updater=r.$d=new lt(r.id),M(kt,e,r)},Tt=At[k];H(At,{merge:function(){for(var n,t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var i=0,o=e;i<o.length;i++)(t=(n=o[i])&&n.ctor)&&kt.push(t),H(Tt,n)},extend:function(n,t){var e=this,r=(n=n||{}).ctor,i=[];r&&i.push(r);var o=function(n,t,r,o){e.call(this,n,t,r),M(i.concat(o),r,this)};return o.extend=e.extend,Q(o,e,n,t)}}),H(Tt,fn,{init:b,wrapEvent:function(n){return mt(n,this.id)},beginUpdate:function(n,t){(t=this).$a>0&&t.$f&&t.owner.unmountZone(n,1)},endUpdate:function(n,t,e,r,i){(e=this).$a>0&&(n=n||e.id,t?i=t:(i=e.$f,e.$f=1),(r=e.owner).mountZone(n,t),i||$(e.wrapAsync(function(){!function(n,t,e){for(t=n.$e;t.length;)(e=t.shift()).r||n.invoke(e.n,e.a),delete t[e.k]}(r)}),0))},wrapAsync:function(n,t){var e=this,r=e.$a;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(r>0&&r==e.$a)return n.apply(t||e,i)}},observeLocation:function(n,t){var e;(e=this.$l).f=1,o(n)&&(t=n[I],n=n[V]),e.p=t,n&&(e.k=(n+u).split(h))},observeState:function(n){this.$os=(n+u).split(h)},capture:function(n,t,e,r){return r=this.$r,t?(yt(r,n,1,t),r[n]={e:t,x:e}):t=(r=r[n])&&r.e,t},release:function(n,t){return yt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",a="b";i.type!=p&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[a]=1,e.leaveConfirm(n,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};Nn.on(p,r),Nn.on(g,i),e.on("unload",r),e.on("destroy",function(){Nn.off(p,r),Nn.off(g,i)})},render:b}),an.View=At;var Ct=n.type,Ot=n.now,Ut=function(){this.id=O("b"),this.$={}};H(Ut[k],{get:function(n,t,e){var r=t!=e,i=this.$;if(n){for(var o=a(n)?n.slice():(n+u).split("."),f=void 0;(f=o.shift())&&i;)i=i[f];f&&(i=e)}return r&&Ct(t)!=Ct(i)&&(i=t),i},set:function(n,t){var e;o(n)||((e={})[n]=t,n=e),H(this.$,n)}});var jt=function(n,t,e){(e=this[n])&&(delete this[n],M(e,t,e.e))},qt=function(n,t,e,r,i){if(n.$d)return n;if(n.$e)return n.enqueue(qt.bind(n,n,t,e,r,i));n.$e=1,a(t)||(t=[t]);for(var o,f,u,c,h,s,d,v,$,l=n.constructor,p=0,g=l.$f,m=(o=e,f=l,u=n,c=t.length,h=r,s=l.$c,d=[],v=0,$=0,function(n,t){var e,r=this;$++;var i=r.$b,a=i.k;d[n+1]=r;var l,p={bag:r,error:t};if(t?(v=t,f.fire("fail",p),e=1):s.has(a)||(a&&s.set(a,r),i.t=Ot(),(l=i.a)&&M(l,r,r),(l=i.x)&&f.clear(l),f.fire("done",p),e=1),!u.$d){var g=$==c;g&&(u.$e=0,2==h&&(d[0]=v,M(o,d,u))),1==h&&M(o,[t||null,r,g,n],u)}e&&f.fire("end",p)}),b=0,w=t;b<w.length;b++){var y=w[b];if(y){var x=l.get(y,i),k=x.e,V=k.$b.k,I=m.bind(k,p++),S=void 0;V&&g[V]?g[V].push(I):x.u?(V&&((S=[I]).e=k,g[V]=S,I=jt.bind(g,V)),l.$s(k,I)):I()}}return n},Zt=function(){var n=this;n.id=O("s"),n.$g=[]};H(Zt[k],{all:function(n,t){return qt(this,n,t,2)},save:function(n,t){return qt(this,n,t,2,1)},one:function(n,t){return qt(this,n,t,1)},enqueue:function(n){var t=this;return t.$d||(t.$g.push(n),t.dequeue(t.$h)),t},dequeue:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e,r=this;r.$e||r.$d||(r.$e=1,$(function(){r.$e=0,r.$d||(e=r.$g.shift())&&M(e,r.$h=n)},0))},destroy:function(n){(n=this).$d=1,n.$g=0}});var Et=function(n,t){return[w(t),w(n)].join(y)},Ht=function(n,t,e,r){(r=n&&n.$b)&&t[r.n]&&e.del(r.k)},Nt=H({add:function(n){var t,e=this.$b;a(n)||(n=[n]);for(var r=0,i=n;r<i.length;r++)if(t=i[r]){var o=t.name,f=t.cache;t.cache=0|f,e[o]=t}},create:function(n){var t=this.meta(n),e=0|n.cache||t.cache,r=new Ut;r.set(t),r.$b={n:t.name,a:t.after,x:t.cleans,k:e&&Et(t,n)},o(n)&&r.set(n);var i=t.before;return i&&M(i,r,r),this.fire("begin",{bag:r}),r},meta:function(n){return this.$b[n.name||n]||n},get:function(n,t){var e,r;return t||(e=this.cached(n)),e||(e=this.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(Ht,on((n+u).split(h)))},cached:function(n){var t,e,r=this.$c,i=this.meta(n),o=0|n.cache||i.cache;if(o&&(e=Et(i,n)),e){var a=this.$f[e];a?t=a.e:(t=r.get(e))&&Ot()-t.$b.t>o&&(r.del(e),t=0)}return t}},fn);return Zt.extend=function(n,t,e){var r=function(){Zt.call(this)};return r.$s=n,r.$c=new F(t,e),r.$f={},r.$b={},Q(r,Zt,null,Nt)},an.Service=Zt,H(b[k],fn),b.extend=function n(t,e){var r=this,i=t&&t.ctor,o=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];r.apply(this,n),i&&i.apply(this,n)};return o.extend=n,Q(o,r,t,e)},an.Base=b,n.add(U,function(){return At.extend()}),an},{requires:["event","node","dom"]});