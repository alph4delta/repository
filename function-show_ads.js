(function(){var n=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},p=function(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return p.apply(null,arguments)};var v=(new Date).getTime();var x=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},da=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},A=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},ea=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,fa=function(a,b){if(!a)return b;var c=a.match(ea);return c?c[0]:b};var ga=x("0.15"),ha=x("0.01"),ia=x("0.001"),ja=da("101",-1),ka=da("10",0),la=x("0.05"),ma=x("0.001"),na=x("0"),oa=x(""),pa=x("0.001"),
qa=x("0.2"),ra=A("true",!0),sa=x("0.01"),ta=x("0.03"),ua=x("0.001");var va=function(){return"r20150908"},wa=A("false",!1),xa=A("false",!1),ya=A("true",!1),za=ya||!xa;var Aa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ba=/&/g,Ca=/</g,Da=/>/g,Ea=/"/g,Fa=/'/g,Ga=/\x00/g,Ha={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},B={"'":"\\'"},Ia=function(a,b){return a<b?-1:a>b?1:0};var C=function(a){C[" "](a);return a};C[" "]=function(){};var D;a:{var Ja=n.navigator;if(Ja){var Ka=Ja.userAgent;if(Ka){D=Ka;break a}}D=""};var La=-1!=D.indexOf("Opera")||-1!=D.indexOf("OPR"),E=-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"),Ma=-1!=D.indexOf("Edge"),H=-1!=D.indexOf("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&-1==D.indexOf("Edge"))&&!(-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"))&&-1==D.indexOf("Edge"),Na=-1!=D.toLowerCase().indexOf("webkit")&&-1==D.indexOf("Edge"),Oa=function(){var a=D;if(H)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ma)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
if(Na)return/WebKit\/(\S+)/.exec(a)},Pa=function(){var a=n.document;return a?a.documentMode:void 0},Qa=function(){if(La&&n.opera){var a=n.opera.version;return"function"==aa(a)?a():a}var a="",b=Oa();b&&(a=b?b[1]:"");return E&&(b=Pa(),b>parseFloat(a))?String(b):a}(),Ra={},Sa=function(a){if(!Ra[a]){for(var b=0,c=Aa(String(Qa)).split("."),d=Aa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",m=d[f]||"",h=RegExp("(\\d*)(\\D*)","g"),t=RegExp("(\\d*)(\\D*)","g");do{var k=
h.exec(g)||["","",""],l=t.exec(m)||["","",""];if(0==k[0].length&&0==l[0].length)break;b=Ia(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Ia(0==k[2].length,0==l[2].length)||Ia(k[2],l[2])}while(0==b)}Ra[a]=0<=b}},Ta=n.document,Ua=Ta&&E?Pa()||("CSS1Compat"==Ta.compatMode?parseInt(Qa,10):5):void 0;var Va;if(!(Va=!H&&!E)){var Wa;if(Wa=E)Wa=9<=Ua;Va=Wa}Va||H&&Sa("1.9.1");E&&Sa("9");var I=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var J=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{C(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(d){return!1}},K=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=Xa(window),a[Math.floor(c*a.length)]}return null},Xa=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},Ya=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var ab=function(a,b,c,d,e,f){try{if((d?a.V:Math.random())<(e||a.M)){var g=a.L+b+Za(c),g=g.substring(0,2E3);"undefined"===typeof f?$a(g):$a(g,f)}}catch(m){}},Za=function(a){var b="";Ya(a,function(a,d){if(0===a||a)b+="&"+d+"="+encodeURIComponent(String(a))});return b},$a=function(a,b){n.google_image_requests||(n.google_image_requests=[]);var c=n.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",
a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};I(c,"load",d);I(c,"error",d)}c.src=a;n.google_image_requests.push(c)};var L=window,bb,cb=null,P=document.getElementsByTagName("script");P&&P.length&&(cb=P[P.length-1]);bb=cb;var db=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},Q=function(a){return!!a&&"function"==typeof a&&!!a.call},eb=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},fb=function(a,b){I(a,"load",b)},gb=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,fb(a,function(){a.google_onload_fired=!0}))},hb=function(){var a=L.google_unique_id;return"number"==typeof a?a:0},ib=function(a){var b=a.length;
if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},jb=!!window.google_async_iframe_id;var kb=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var lb=function(a,b,c){this.T=a;this.O=b;this.w=c;this.v=null;this.N=this.o;this.aa=!1},mb=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},rb=function(a,b,c,d){var e;try{e=c()}catch(f){var g=a.w;try{var m=nb(f),g=(d||a.N).call(a,b,m,void 0,void 0)}catch(h){a.o("pAR",h)}if(!g)throw f;}finally{}return e},sb=function(a,b){var c=R;return function(){var d=arguments;return rb(c,a,function(){return b.apply(void 0,d)})}};
lb.prototype.o=function(a,b,c,d,e){var f={};f.context=a;b instanceof mb||(b=nb(b));f.msg=b.message.substring(0,512);b.fileName&&(f.file=b.fileName);0<b.lineNumber&&(f.line=b.lineNumber.toString());a=n.document;f.url=a.URL.substring(0,512);f.ref=a.referrer.substring(0,512);if(this.v)try{this.v(f)}catch(g){}if(d)try{d(f)}catch(m){}ab(this.T,e||this.O,f,this.aa,c);return this.w};
var nb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var e;c!=e;)e=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(f){b=d}}return new mb(b,a.fileName,a.lineNumber)};var tb,R,ub="http"+("http:"==L.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";tb=new function(){this.L=ub;this.M=.01;this.V=Math.random()};R=new lb(tb,"jserror",!0);var wb=function(a,b){rb(R,a,b,vb)},vb=R.o,xb=function(a,b){return sb(a,b)};var yb={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};R.w=!wa;R.v=function(a){a.shv=va();Ya(yb,function(b,c){try{null!=n[b]&&(a[c]=n[b])}catch(d){}})};var zb=null,Ab=function(){if(!zb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,J(a))b=a;else break;zb=b}return zb};var S={ca:{i:"17415661",j:"17415662"},Aa:{i:"453848100",j:"453848101"},ma:{i:"828064124",j:"828064125"},la:{i:"828064127",j:"828064128"},na:{i:"828064170",j:"828064171"},ea:{i:"453848130",j:"453848131",ya:"453848132",za:"453848133"},qa:{i:"24819308",j:"24819309",da:"24819320"},pa:{i:"24819330",j:"24819331"},fa:{ja:"828064119"},sa:{i:"828064162",j:"828064163"},ra:{i:"828064164",j:"828064165",ha:"828064166"},ka:{i:"828064190",j:"828064191"},ua:{i:"10573503",j:"10573504"},I:{i:"10573593",j:"10573594"},
xa:{i:"10573511",j:"10573512"},K:{i:"10573581",j:"10573582"},ia:{i:"10573521",j:"10573522"},G:{i:"10573571",j:"10573572"},va:{i:"10573531",j:"10573532"},J:{i:"10573561",j:"10573562"},wa:{i:"10573551",j:"10573552"},oa:{i:24819400,j:24819401},ta:{i:"312815000",j:"312815001"},H:{i:"312815100",j:"312815101"},ga:{i:"26835101",j:"26835102"}};var T=function(a,b){b&&a.push(b);return b},U=function(a,b,c,d){return a.location&&a.location.hash=="#google_plle_"+d?d:K([c,d],b)};var Bb=function(a,b,c){wb("files::getSrc",function(){if("https:"==L.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Cb=function(a,b,c){c||(c=za?"https":"http");return Bb(a,b,c)};var Db=function(){},Fb=function(a,b,c){switch(typeof b){case "string":Eb(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Fb(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),Eb(e,
c),c.push(":"),Fb(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Gb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Hb=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Eb=function(a,b){b.push('"');b.push(a.replace(Hb,function(a){if(a in Gb)return Gb[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Gb[a]=e+b.toString(16)}));
b.push('"')};var V=null,Ib=H||Na||La||"function"==typeof n.atob;var W="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_ember_h google_ember_w google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_nofo google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_tdsma google_tfs google_tl google_ui_features google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Jb={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Kb=function(a){return(a=a.innerText||a.innerHTML)&&(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/))&&/google_ad_client/.test(a[1])?a[1]:null},Lb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+/,"").split(/\r?\n/,1)[0],(a=a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?\s*$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},
Mb=function(a){if(a=a.innerText||a.innerHTML)if(a=a.replace(/^\s+|\s+$/g,"").replace(/\s*(\r?\n)+\s*/g,";"),(a=a.match(/^\x3c!--+(.*?)(?:--+>)?$/)||a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i))&&/google_ad_client/.test(a[1]))return a[1];return null},Pb=function(a,b){var c;try{a:{var d=a.document.getElementsByTagName("script"),e=Kb,f;"undefined"!=typeof a.google_pubvars_recovery_regexp_experiment?f=a.google_pubvars_recovery_regexp_experiment:(f=K(["C","E","EM"],ta),a.google_pubvars_recovery_regexp_experiment=
f);b.google_pubvars_recovery_regexp_experiment=f;switch(f){case "E":e=Lb;break;case "EM":e=Mb}for(var g=d.length-1;0<=g;g--){var m=d[g];if(!m.google_parsed_script){m.google_parsed_script=!0;var h=e(m);if(h){c=h;break a}}}c=null}}catch(t){return!1}if(!c)return!1;try{for(var d=/(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm,e={},k;k=d.exec(c);)e[k[1]]=Nb(k[2]);Ob(e,a)}catch(l){return!1}return!!a.google_ad_client},Qb=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=
[];db(a,function(a,d){if(null!=a){var e;try{var f=[];Fb(new Db,a,f);e=f.join("")}catch(g){}e&&(e=e.replace(/\//g,"\\$&"),eb(b,d,"=",e,";"))}});return b.join("")},Rb=function(a){for(var b=0,c=W.length;b<c;b++){var d=W[b];Jb[d]||(a[d]=null)}},Nb=function(a){switch(a){case "true":return!0;case "false":return!1;case "null":return null;case "undefined":break;default:try{var b=a.match(/^(?:'(.*)'|"(.*)")$/);if(b)return b[1]||b[2]||"";if(/^[-+]?\d*(\.\d+)?$/.test(a)){var c=parseFloat(a);return c===c?c:void 0}}catch(d){}}},
Ob=function(a,b){for(var c=0;c<W.length;c++){var d=W[c];null==b[d]&&null!=a[d]&&(b[d]=a[d])}};var Sb=null;var Tb=function(a){this.m=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:p(this.$,this)});this.X=a.google_iframe_oncopy},Ub;var X="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(X)&&(-1!=X.indexOf("&")&&(X=X.replace(Ba,"&amp;")),-1!=X.indexOf("<")&&(X=X.replace(Ca,"&lt;")),-1!=X.indexOf(">")&&(X=X.replace(Da,"&gt;")),-1!=X.indexOf('"')&&(X=X.replace(Ea,"&quot;")),-1!=X.indexOf("'")&&(X=X.replace(Fa,"&#39;")),-1!=X.indexOf("\x00")&&(X=X.replace(Ga,"&#0;")));Ub=X;Tb.prototype.set=function(a,b){this.X.handlers[a]=b;this.m.addEventListener&&this.m.addEventListener("load",p(this.P,this,a),!1)};
Tb.prototype.P=function(a){a=this.m.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};Tb.prototype.$=function(a,b){var c=Vb("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var Vb=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var Wb=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Xb=/Android/;var Yb=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Zb={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var $b="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),ac=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var Y,Z=function(a){this.u=[];this.m=a||window;this.l=0;this.s=null;this.F=0},bc=function(a,b){this.R=a;this.ba=b};Z.prototype.enqueue=function(a,b){0!=this.l||0!=this.u.length||b&&b!=window?this.B(a,b):(this.l=2,this.D(new bc(a,window)))};Z.prototype.B=function(a,b){this.u.push(new bc(a,b||this.m));cc(this)};Z.prototype.S=function(a){this.l=1;if(a){var b=xb("sjr::timeout",p(this.C,this,!0));this.s=this.m.setTimeout(b,a)}};
Z.prototype.C=function(a){a&&++this.F;1==this.l&&(null!=this.s&&(this.m.clearTimeout(this.s),this.s=null),this.l=0);cc(this)};Z.prototype.W=function(){return!(!window||!Array)};Z.prototype.Y=function(){return this.F};Z.prototype.nq=Z.prototype.enqueue;Z.prototype.nqa=Z.prototype.B;Z.prototype.al=Z.prototype.S;Z.prototype.rl=Z.prototype.C;Z.prototype.sz=Z.prototype.W;Z.prototype.tc=Z.prototype.Y;var cc=function(a){var b=xb("sjr::tryrun",p(a.Z,a));a.m.setTimeout(b,0)};
Z.prototype.Z=function(){if(0==this.l&&this.u.length){var a=this.u.shift();this.l=2;var b=xb("sjr::run",p(this.D,this,a));a.ba.setTimeout(b,0);cc(this)}};Z.prototype.D=function(a){this.l=0;a.R()};
var dc=function(a){try{return a.sz()}catch(b){return!1}},ec=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&dc(a)&&Q(a.nq)&&Q(a.nqa)&&Q(a.al)&&Q(a.rl)},fc=function(){if(Y&&dc(Y))return Y;var a=Ab(),b=a.google_jobrunner;return ec(b)?Y=b:a.google_jobrunner=Y=new Z(a)},gc=function(a,b){fc().nq(a,b)},hc=function(a,b){fc().nqa(a,b)};var ic=jb?1==hb():!hb(),jc=function(){var a=ya?"https":"http",b=C("script"),c;c=fa("","pagead2.googlesyndication.com");return["<",b,' src="',Cb(c,["/pagead/js/",va(),"/r20150820/show_ads_impl.js"].join(""),a),'"></',b,">"].join("")},kc=function(a,b,c,d){return function(){var e=!1;d&&fc().al(3E4);var f=a.document.getElementById(b);f&&!J(f.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var g=a.document.getElementById(b).contentWindow;if(J(g)){var m=a.document.getElementById(b).contentWindow,h=m.document;h.body&&h.body.firstChild||(h.open(),m.google_async_iframe_close=!0,h.write(c))}else{var t=a.document.getElementById(b).contentWindow,k;f=c;f=String(f);if(f.quote)k=f.quote();else{g=['"'];for(m=0;m<f.length;m++){var l=f.charAt(m),F=l.charCodeAt(0),h=g,y=m+1,u;if(!(u=Ha[l])){var z;if(31<F&&127>F)z=l;else{var w=l;if(w in B)z=
B[w];else if(w in Ha)z=B[w]=Ha[w];else{var q=w,r=w.charCodeAt(0);if(31<r&&127>r)q=w;else{if(256>r){if(q="\\x",16>r||256<r)q+="0"}else q="\\u",4096>r&&(q+="0");q+=r.toString(16).toUpperCase()}z=B[w]=q}}u=z}h[y]=u}g.push('"');k=g.join("")}t.location.replace("javascript:"+k)}e=!0}catch(G){t=Ab().google_jobrunner,ec(t)&&t.rl()}e&&(e=Vb("google_async_rrc",c),(new Tb(a)).set(b,kc(a,b,e,!1)))}},lc=function(a){var b=["<iframe"];db(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");return b.join("")},
mc=function(a){var b;if(b=ic){if(!Sb)a:{var c=[L.top];b=[];for(var d=0,e;e=c[d++];){b.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>c.length;++g)c.push(e.frames[g])}catch(m){}}for(f=0;f<b.length;f++)try{var h=b[f].frames.google_esf;if(h){Sb=h;break a}}catch(t){}Sb=null}b=!Sb}return b?(h={style:"display:none"},h["data-ad-client"]=Yb(a),h.id="google_esf",h.name="google_esf",a=Cb(fa("","googleads.g.doubleclick.net"),["/pagead/html/",va(),"/r20150820/zrt_lookup.html"].join("")),
h.src=a,lc(h)):""},oc=function(a,b,c){var d=b.google_ad_output,e=b.google_ad_format;e||"html"!=d&&null!=d||(e=b.google_ad_width+"x"+b.google_ad_height,c&&(e+="_as"));c=!b.google_ad_slot||nc(b);e=e&&c?e.toLowerCase():"";b.google_ad_format=e;e=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];c=[];for(var d=0,f=bb.parentElement;f&&25>d;f=f.parentNode,++d)c.push(9!=f.nodeType&&f.id||"");(c=c.join())&&e.push(c);b.google_ad_unit_key=ib(e.join(":")).toString();
e=a.google_adk2_experiment=a.google_adk2_experiment||K(["C","E"],pa)||"N";if("E"==e){e=bb;c=[];for(d=0;e&&25>d;++d){var f="",f=(f=9!=e.nodeType&&e.id)?"/"+f:"",g;a:{if(e&&e.nodeName&&e.parentElement){g=e.nodeName.toString().toLowerCase();for(var m=e.parentElement.childNodes,h=0,t=0;t<m.length;++t){var k=m[t];if(k.nodeName&&k.nodeName.toString().toLowerCase()==g){if(e==k){g="."+h;break a}++h}}}g=""}c.push((e.nodeName&&e.nodeName.toString().toLowerCase())+f+g);e=e.parentElement}e=c.join()+":";c=[];
if(a)try{for(var l=a.parent,d=0;l&&l!=a&&25>d;++d){for(var F=l.frames,f=0;f<F.length;++f)if(a==F[f]){c.push(f);break}a=l;l=a.parent}}catch(y){}b.google_ad_unit_key_2=ib(e+c.join()).toString()}else"C"==e&&(b.google_ad_unit_key_2="ctrl")},pc=Math.floor(1E6*Math.random()),qc=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");-1!=e&&(b[c[d].substr(0,e)]=c[d].substr(e+1))}}catch(f){}c=b[3];if(b[1]==pc&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&
(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},nc=function(a){return a.google_override_format||!Zb[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used};wb("sa::main",function(){var a=window,b=a.google_ad_modifications=a.google_ad_modifications||{};if(!b.plle){b.plle=!0;var b=b.loeids=b.loeids||[],c=S.I,d;d=c.i;c=c.j;if(a.location&&a.location.hash=="#google_plle_"+c)d=c;else{var e;b:{try{e=parseInt(a.localStorage.getItem("google_experiment_mod"),10)}catch(f){e=null;break b}0<=e&&1E3>e||(e=Math.floor(1E3*Xa(a)),a.localStorage.setItem("google_experiment_mod",""+e))}d=null===e||e<ja||e>=ja+ka?null:e&1?c:d}T(b,d)||(c=S.H,T(b,U(a,la,c.i,c.j)));c=S.K;T(b,
U(a,ma,c.i,c.j));c=S.G;T(b,U(a,na,c.i,c.j));c=S.J;T(b,U(a,oa,c.i,c.j))}e=a.google_ad_slot;b=a.google_ad_modifications;!b||kb(b.ad_whitelist,e,void 0)?b=null:(d=b.space_collapsing||"none",b=(e=kb(b.ad_blacklist,e))?{A:!0,U:e.space_collapsing||d}:b.remove_ads_by_default?{A:!0,U:d}:null);if(b&&b.A)Rb(a);else{gb(a);if(!window.google_top_experiment&&!window.google_top_js_status)if(b=window,2!==(b.top==b?0:J(b.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var g;try{g=L.top.frames.google_top_static_frame?
!0:!1}catch(m){g=!1}if(g){if(window.google_top_experiment=K(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],ga),"jp_c"!==window.google_top_experiment){I(window,"message",qc);window.google_top_js_status=3;g={0:"google_loc_request",1:pc};var b=[],h;for(h in g)b.push(h+"="+g[h]);top.postMessage(b.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1;h=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||h&&"html"!=h||(window.google_always_use_delayed_impressions_experiment=
K(["C","E"],ia));(h=!1===window.google_enable_async)||(h=navigator.userAgent,Wb.test(h)?h=!1:(void 0!==window.google_async_for_oa_experiment||!Xb.test(navigator.userAgent)||Wb.test(navigator.userAgent)||(window.google_async_for_oa_experiment=K(["E","C"],ha)),h=Xb.test(h)?"E"===window.google_async_for_oa_experiment:!0),h=!h||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output);if(h)a.google_loader_used="sb",a.google_start_time=v,oc(a,a),document.write(mc(a.google_ad_client)+
jc());else{ic&&(g=a.google_ad_client,h=navigator,ra&&a&&g&&h&&(b=a.document,h=b.createElement("script"),g=Yb(g),h.async=!0,h.type="text/javascript",h.src=Cb("pagead2.googlesyndication.com","/pub-config/"+g+".js"),g=b.getElementsByTagName("script")[0],g.parentNode.insertBefore(h,g)));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;g={};null==a.google_ad_client&&Pb(a,g)&&(g.google_loader_features_used=2048);Ob(a,g);g.google_loader_used="sa";Rb(a);h=C("script");var t,k;a:{try{var l=a.top.google_pubvars_reuse_experiment;
if("undefined"!==typeof l){k=l;break a}l=K(["C","E"],sa)||null;a.top.google_pubvars_reuse_experiment=l;if(a.top.google_pubvars_reuse_experiment===l){k=l;break a}}catch(F){}k=null}if("E"===k){t=null!=g.google_ad_client;k=null!=g.google_ad_width;l=null!=g.google_ad_height;if(b=ac(a)){for(d=0;d<$b.length;d++)e=$b[d],null!=g[e]&&(b[e]=g[e]);if(b=ac(a))d=b.google_ad_width,e=b.google_ad_height,c=b.google_ad_format,d&&e&&c&&(c=(c=c&&c.match(/(\d+)x(\d+)/))?{width:c[1],height:c[2]}:null,!c||c.width==d&&c.height==
e||delete b.google_ad_format)}if(b=ac(a))for(d=0;d<$b.length;d++)e=$b[d],null==g[e]&&null!=b[e]&&(g[e]=b[e]);b=null!=g.google_ad_client;d=null!=g.google_ad_width;e=null!=g.google_ad_height;t=[t?"c2":b?"c1":"c0",k?"w2":d?"w1":"w0",l?"h2":e?"h1":"h0"].join()}k={};l=g.google_ad_height;k.width='"'+g.google_ad_width+'"';k.height='"'+l+'"';k.frameborder='"0"';k.marginwidth='"0"';k.marginheight='"0"';k.vspace='"0"';k.hspace='"0"';k.allowtransparency='"true"';k.scrolling='"no"';k.allowfullscreen='"true"';
k.onload='"'+Ub+'"';var y,l=a.document,b=k.id;for(d=0;!b||l.getElementById(b);)b="aswift_"+d++;k.id=b;k.name=b;d=g.google_ad_width;e=g.google_ad_height;b=["<iframe"];for(y in k)k.hasOwnProperty(y)&&eb(b,y+"="+k[y]);b.push('style="left:0;position:absolute;top:0;"');b.push("></iframe>");y=k.id;d="border:none;height:"+e+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+d+"px;background-color:transparent";l.write(['<ins id="',y+"_expand",'" style="display:inline-table;',d,'"><ins id="',
y+"_anchor",'" style="display:block;',d,'">',b.join(" "),"</ins></ins>"].join(""));y=k.id;k=nc(g)?K(["c","e"],qa):null;oc(a,g,"e"==k);l=Qb(g);b=null;d=K(["C","E"],ua);if("E"==d){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var u=encodeURIComponent(window.JSON.stringify(g)),z;if(Ib)z=n.btoa(u);else{e=[];for(var w=c=0;w<u.length;w++){for(var q=u.charCodeAt(w);255<q;)e[c++]=q&255,q>>=8;e[c++]=q}var r=aa(e);if("array"!=r&&("object"!=r||"number"!=typeof e.length))throw Error("encodeByteArray takes an array as a parameter");
if(!V)for(V={},u=0;65>u;u++)V[u]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(u);u=V;q=[];for(r=0;r<e.length;r+=3){var G=e[r],M=r+1<e.length,N=M?e[r+1]:0,O=r+2<e.length,ob=O?e[r+2]:0,c=G>>2,w=(G&3)<<4|N>>4,pb=(N&15)<<2|ob>>6,qb=ob&63;O||(qb=64,M||(pb=64));q.push(u[c],u[w],u[pb],u[qb])}z=q.join("")}b=z;break a}ab(tb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(rc){R.o("sblob",rc,void 0,void 0)}b=""}b||(b="{X}")}else"C"==d&&
(b="{C}");z=mc(g.google_ad_client);G=(new Date).getTime();M=a.google_top_experiment;if(N=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;O=a.google_always_use_delayed_impressions_experiment;z=["<!doctype html><html><body>",z,"<",h,">",l,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',y,'";google_start_time=',v,";",d?'google_pub_vars = "'+b+'";':"",t?'google_pubvars_reuse_experiment_result = "'+t+'";':"",M?'google_top_experiment="'+
M+'";':"",N?'google_async_for_oa_experiment="'+N+'";':"",O?'google_always_use_delayed_impressions_experiment="'+O+'";':"",k?'google_append_as_for_format_override="'+k+'";':"","google_bpp=",G>v?G-v:1,";google_async_rrc=0;</",h,">",jc(),"</body></html>"].join("");(a.document.getElementById(y)?gc:hc)(kc(a,y,z,!0))}}});}).call(this);
