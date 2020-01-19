/**
 * telegram-api v1.2.7
 * Infinnity Solutions
 */
(function(){
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';function n(e){throw e;}var q=void 0,aa=this;function r(e,c){var d=e.split("."),b=aa;!(d[0]in b)&&b.execScript&&b.execScript("var "+d[0]);for(var a;d.length&&(a=d.shift());)!d.length&&c!==q?b[a]=c:b=b[a]?b[a]:b[a]={}};var u="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;new (u?Uint8Array:Array)(256);var v;for(v=0;256>v;++v)for(var w=v,ba=7,w=w>>>1;w;w>>>=1)--ba;function x(e,c,d){var b,a="number"===typeof c?c:c=0,f="number"===typeof d?d:e.length;b=-1;for(a=f&7;a--;++c)b=b>>>8^z[(b^e[c])&255];for(a=f>>3;a--;c+=8)b=b>>>8^z[(b^e[c])&255],b=b>>>8^z[(b^e[c+1])&255],b=b>>>8^z[(b^e[c+2])&255],b=b>>>8^z[(b^e[c+3])&255],b=b>>>8^z[(b^e[c+4])&255],b=b>>>8^z[(b^e[c+5])&255],b=b>>>8^z[(b^e[c+6])&255],b=b>>>8^z[(b^e[c+7])&255];return(b^4294967295)>>>0}
var A=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],z=u?new Uint32Array(A):A;function B(){}B.prototype.getName=function(){return this.name};B.prototype.getData=function(){return this.data};B.prototype.H=function(){return this.I};r("Zlib.GunzipMember",B);r("Zlib.GunzipMember.prototype.getName",B.prototype.getName);r("Zlib.GunzipMember.prototype.getData",B.prototype.getData);r("Zlib.GunzipMember.prototype.getMtime",B.prototype.H);function D(e){var c=e.length,d=0,b=Number.POSITIVE_INFINITY,a,f,g,k,m,p,t,h,l,y;for(h=0;h<c;++h)e[h]>d&&(d=e[h]),e[h]<b&&(b=e[h]);a=1<<d;f=new (u?Uint32Array:Array)(a);g=1;k=0;for(m=2;g<=d;){for(h=0;h<c;++h)if(e[h]===g){p=0;t=k;for(l=0;l<g;++l)p=p<<1|t&1,t>>=1;y=g<<16|h;for(l=p;l<a;l+=m)f[l]=y;++k}++g;k<<=1;m<<=1}return[f,d,b]};var E=[],F;for(F=0;288>F;F++)switch(!0){case 143>=F:E.push([F+48,8]);break;case 255>=F:E.push([F-144+400,9]);break;case 279>=F:E.push([F-256+0,7]);break;case 287>=F:E.push([F-280+192,8]);break;default:n("invalid literal: "+F)}
var ca=function(){function e(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:n("invalid length: "+a)}}var c=[],d,b;for(d=3;258>=d;d++)b=e(d),c[d]=b[2]<<24|b[1]<<
16|b[0];return c}();u&&new Uint32Array(ca);function G(e,c){this.i=[];this.j=32768;this.d=this.f=this.c=this.n=0;this.input=u?new Uint8Array(e):e;this.o=!1;this.k=H;this.z=!1;if(c||!(c={}))c.index&&(this.c=c.index),c.bufferSize&&(this.j=c.bufferSize),c.bufferType&&(this.k=c.bufferType),c.resize&&(this.z=c.resize);switch(this.k){case I:this.a=32768;this.b=new (u?Uint8Array:Array)(32768+this.j+258);break;case H:this.a=0;this.b=new (u?Uint8Array:Array)(this.j);this.e=this.F;this.q=this.B;this.l=this.D;break;default:n(Error("invalid inflate mode"))}}
var I=0,H=1;
G.prototype.g=function(){for(;!this.o;){var e=J(this,3);e&1&&(this.o=!0);e>>>=1;switch(e){case 0:var c=this.input,d=this.c,b=this.b,a=this.a,f=c.length,g=q,k=q,m=b.length,p=q;this.d=this.f=0;d+1>=f&&n(Error("invalid uncompressed block header: LEN"));g=c[d++]|c[d++]<<8;d+1>=f&&n(Error("invalid uncompressed block header: NLEN"));k=c[d++]|c[d++]<<8;g===~k&&n(Error("invalid uncompressed block header: length verify"));d+g>c.length&&n(Error("input buffer is broken"));switch(this.k){case I:for(;a+g>b.length;){p=
m-a;g-=p;if(u)b.set(c.subarray(d,d+p),a),a+=p,d+=p;else for(;p--;)b[a++]=c[d++];this.a=a;b=this.e();a=this.a}break;case H:for(;a+g>b.length;)b=this.e({t:2});break;default:n(Error("invalid inflate mode"))}if(u)b.set(c.subarray(d,d+g),a),a+=g,d+=g;else for(;g--;)b[a++]=c[d++];this.c=d;this.a=a;this.b=b;break;case 1:this.l(da,ea);break;case 2:fa(this);break;default:n(Error("unknown BTYPE: "+e))}}return this.q()};
var K=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=u?new Uint16Array(K):K,N=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],O=u?new Uint16Array(N):N,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],Q=u?new Uint8Array(P):P,R=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],ga=u?new Uint16Array(R):R,ha=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,
13,13],U=u?new Uint8Array(ha):ha,V=new (u?Uint8Array:Array)(288),W,ia;W=0;for(ia=V.length;W<ia;++W)V[W]=143>=W?8:255>=W?9:279>=W?7:8;var da=D(V),X=new (u?Uint8Array:Array)(30),Y,ja;Y=0;for(ja=X.length;Y<ja;++Y)X[Y]=5;var ea=D(X);function J(e,c){for(var d=e.f,b=e.d,a=e.input,f=e.c,g=a.length,k;b<c;)f>=g&&n(Error("input buffer is broken")),d|=a[f++]<<b,b+=8;k=d&(1<<c)-1;e.f=d>>>c;e.d=b-c;e.c=f;return k}
function Z(e,c){for(var d=e.f,b=e.d,a=e.input,f=e.c,g=a.length,k=c[0],m=c[1],p,t;b<m&&!(f>=g);)d|=a[f++]<<b,b+=8;p=k[d&(1<<m)-1];t=p>>>16;e.f=d>>t;e.d=b-t;e.c=f;return p&65535}
function fa(e){function c(a,c,b){var d,e=this.w,f,g;for(g=0;g<a;)switch(d=Z(this,c),d){case 16:for(f=3+J(this,2);f--;)b[g++]=e;break;case 17:for(f=3+J(this,3);f--;)b[g++]=0;e=0;break;case 18:for(f=11+J(this,7);f--;)b[g++]=0;e=0;break;default:e=b[g++]=d}this.w=e;return b}var d=J(e,5)+257,b=J(e,5)+1,a=J(e,4)+4,f=new (u?Uint8Array:Array)(L.length),g,k,m,p;for(p=0;p<a;++p)f[L[p]]=J(e,3);if(!u){p=a;for(a=f.length;p<a;++p)f[L[p]]=0}g=D(f);k=new (u?Uint8Array:Array)(d);m=new (u?Uint8Array:Array)(b);e.w=
0;e.l(D(c.call(e,d,g,k)),D(c.call(e,b,g,m)))}G.prototype.l=function(e,c){var d=this.b,b=this.a;this.r=e;for(var a=d.length-258,f,g,k,m;256!==(f=Z(this,e));)if(256>f)b>=a&&(this.a=b,d=this.e(),b=this.a),d[b++]=f;else{g=f-257;m=O[g];0<Q[g]&&(m+=J(this,Q[g]));f=Z(this,c);k=ga[f];0<U[f]&&(k+=J(this,U[f]));b>=a&&(this.a=b,d=this.e(),b=this.a);for(;m--;)d[b]=d[b++-k]}for(;8<=this.d;)this.d-=8,this.c--;this.a=b};
G.prototype.D=function(e,c){var d=this.b,b=this.a;this.r=e;for(var a=d.length,f,g,k,m;256!==(f=Z(this,e));)if(256>f)b>=a&&(d=this.e(),a=d.length),d[b++]=f;else{g=f-257;m=O[g];0<Q[g]&&(m+=J(this,Q[g]));f=Z(this,c);k=ga[f];0<U[f]&&(k+=J(this,U[f]));b+m>a&&(d=this.e(),a=d.length);for(;m--;)d[b]=d[b++-k]}for(;8<=this.d;)this.d-=8,this.c--;this.a=b};
G.prototype.e=function(){var e=new (u?Uint8Array:Array)(this.a-32768),c=this.a-32768,d,b,a=this.b;if(u)e.set(a.subarray(32768,e.length));else{d=0;for(b=e.length;d<b;++d)e[d]=a[d+32768]}this.i.push(e);this.n+=e.length;if(u)a.set(a.subarray(c,c+32768));else for(d=0;32768>d;++d)a[d]=a[c+d];this.a=32768;return a};
G.prototype.F=function(e){var c,d=this.input.length/this.c+1|0,b,a,f,g=this.input,k=this.b;e&&("number"===typeof e.t&&(d=e.t),"number"===typeof e.A&&(d+=e.A));2>d?(b=(g.length-this.c)/this.r[2],f=258*(b/2)|0,a=f<k.length?k.length+f:k.length<<1):a=k.length*d;u?(c=new Uint8Array(a),c.set(k)):c=k;return this.b=c};
G.prototype.q=function(){var e=0,c=this.b,d=this.i,b,a=new (u?Uint8Array:Array)(this.n+(this.a-32768)),f,g,k,m;if(0===d.length)return u?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);f=0;for(g=d.length;f<g;++f){b=d[f];k=0;for(m=b.length;k<m;++k)a[e++]=b[k]}f=32768;for(g=this.a;f<g;++f)a[e++]=c[f];this.i=[];return this.buffer=a};
G.prototype.B=function(){var e,c=this.a;u?this.z?(e=new Uint8Array(c),e.set(this.b.subarray(0,c))):e=this.b.subarray(0,c):(this.b.length>c&&(this.b.length=c),e=this.b);return this.buffer=e};function $(e){this.input=e;this.c=0;this.m=[];this.s=!1}$.prototype.G=function(){this.s||this.g();return this.m.slice()};
$.prototype.g=function(){for(var e=this.input.length;this.c<e;){var c=new B,d=q,b=q,a=q,f=q,g=q,k=q,m=q,p=q,t=q,h=this.input,l=this.c;c.u=h[l++];c.v=h[l++];(31!==c.u||139!==c.v)&&n(Error("invalid file signature:"+c.u+","+c.v));c.p=h[l++];switch(c.p){case 8:break;default:n(Error("unknown compression method: "+c.p))}c.h=h[l++];p=h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24;c.I=new Date(1E3*p);c.O=h[l++];c.N=h[l++];0<(c.h&4)&&(c.J=h[l++]|h[l++]<<8,l+=c.J);if(0<(c.h&8)){m=[];for(k=0;0<(g=h[l++]);)m[k++]=String.fromCharCode(g);
c.name=m.join("")}if(0<(c.h&16)){m=[];for(k=0;0<(g=h[l++]);)m[k++]=String.fromCharCode(g);c.K=m.join("")}0<(c.h&2)&&(c.C=x(h,0,l)&65535,c.C!==(h[l++]|h[l++]<<8)&&n(Error("invalid header crc16")));d=h[h.length-4]|h[h.length-3]<<8|h[h.length-2]<<16|h[h.length-1]<<24;h.length-l-4-4<512*d&&(f=d);b=new G(h,{index:l,bufferSize:f});c.data=a=b.g();l=b.c;c.L=t=(h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24)>>>0;x(a,q,q)!==t&&n(Error("invalid CRC-32 checksum: 0x"+x(a,q,q).toString(16)+" / 0x"+t.toString(16)));c.M=
d=(h[l++]|h[l++]<<8|h[l++]<<16|h[l++]<<24)>>>0;(a.length&4294967295)!==d&&n(Error("invalid input size: "+(a.length&4294967295)+" / "+d));this.m.push(c);this.c=l}this.s=!0;var y=this.m,s,M,S=0,T=0,C;s=0;for(M=y.length;s<M;++s)T+=y[s].data.length;if(u){C=new Uint8Array(T);for(s=0;s<M;++s)C.set(y[s].data,S),S+=y[s].data.length}else{C=[];for(s=0;s<M;++s)C[s]=y[s].data;C=Array.prototype.concat.apply([],C)}return C};r("Zlib.Gunzip",$);r("Zlib.Gunzip.prototype.decompress",$.prototype.g);r("Zlib.Gunzip.prototype.getMembers",$.prototype.G);}).call(this); //@ sourceMappingURL=gunzip.min.js.map

var CryptoJS=CryptoJS||function(a,b){var c={},d=c.lib={},e=d.Base=function(){function a(){}return{extend:function(b){a.prototype=this;var c=new a;return b&&c.mixIn(b),c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)}),c.init.prototype=c,c.$super=this,c},create:function(){var a=this.extend();return a.init.apply(a,arguments),a},init:function(){},mixIn:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=d.WordArray=e.extend({init:function(a,c){a=this.words=a||[],c!=b?this.sigBytes=c:this.sigBytes=4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var b=this.words,c=a.words,d=this.sigBytes,e=a.sigBytes;if(this.clamp(),d%4)for(var f=0;e>f;f++){var g=c[f>>>2]>>>24-f%4*8&255;b[d+f>>>2]|=g<<24-(d+f)%4*8}else if(c.length>65535)for(var f=0;e>f;f+=4)b[d+f>>>2]=c[f>>>2];else for(var f=0;f<c.length;f++)b.push(c[f]);return this.sigBytes+=e,this},clamp:function(){var b=this.words,c=this.sigBytes;b[c>>>2]&=4294967295<<32-c%4*8,b.length=a.ceil(c/4)},clone:function(){var a=e.clone.call(this);return a.words=this.words.slice(0),a},random:function(b){for(var c=[],d=0;b>d;d+=4)c.push(4294967296*a.random()|0);return new f.init(c,b)}}),g=c.enc={},h=g.Hex={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=b[e>>>2]>>>24-e%4*8&255;d.push((f>>>4).toString(16)),d.push((15&f).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-d%8*4;return new f.init(c,b/2)}},i=g.Latin1={stringify:function(a){for(var b=a.words,c=a.sigBytes,d=[],e=0;c>e;e++){var f=b[e>>>2]>>>24-e%4*8&255;d.push(String.fromCharCode(f))}return d.join("")},parse:function(a){for(var b=a.length,c=[],d=0;b>d;d++)c[d>>>2]|=(255&a.charCodeAt(d))<<24-d%4*8;return new f.init(c,b)}},j=g.Utf8={stringify:function(a){try{return decodeURIComponent(escape(i.stringify(a)))}catch(b){throw new Error("Malformed UTF-8 data")}},parse:function(a){return i.parse(unescape(encodeURIComponent(a)))}},k=d.BufferedBlockAlgorithm=e.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes},_process:function(b){var c=this._data,d=c.words,e=c.sigBytes,g=this.blockSize,h=4*g,i=e/h;i=b?a.ceil(i):a.max((0|i)-this._minBufferSize,0);var j=i*g,k=a.min(4*j,e);if(j){for(var l=0;j>l;l+=g)this._doProcessBlock(d,l);var m=d.splice(0,j);c.sigBytes-=k}return new f.init(m,k)},clone:function(){var a=e.clone.call(this);return a._data=this._data.clone(),a},_minBufferSize:0}),l=(d.Hasher=k.extend({cfg:e.extend(),init:function(a){this.cfg=this.cfg.extend(a),this.reset()},reset:function(){k.reset.call(this),this._doReset()},update:function(a){return this._append(a),this._process(),this},finalize:function(a){a&&this._append(a);var b=this._doFinalize();return b},blockSize:16,_createHelper:function(a){return function(b,c){return new a.init(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return new l.HMAC.init(a,c).finalize(b)}}}),c.algo={});return c}(Math);CryptoJS.lib.Cipher||function(a){var b=CryptoJS,c=b.lib,d=c.Base,e=c.WordArray,f=c.BufferedBlockAlgorithm,g=b.enc,h=(g.Utf8,g.Base64),i=b.algo,j=i.EvpKDF,k=c.Cipher=f.extend({cfg:d.extend(),createEncryptor:function(a,b){return this.create(this._ENC_XFORM_MODE,a,b)},createDecryptor:function(a,b){return this.create(this._DEC_XFORM_MODE,a,b)},init:function(a,b,c){this.cfg=this.cfg.extend(c),this._xformMode=a,this._key=b,this.reset()},reset:function(){f.reset.call(this),this._doReset()},process:function(a){return this._append(a),this._process()},finalize:function(a){a&&this._append(a);var b=this._doFinalize();return b},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function a(a){return"string"==typeof a?w:t}return function(b){return{encrypt:function(c,d,e){return a(d).encrypt(b,c,d,e)},decrypt:function(c,d,e){return a(d).decrypt(b,c,d,e)}}}}()}),l=(c.StreamCipher=k.extend({_doFinalize:function(){var a=this._process(!0);return a},blockSize:1}),b.mode={}),m=c.BlockCipherMode=d.extend({createEncryptor:function(a,b){return this.Encryptor.create(a,b)},createDecryptor:function(a,b){return this.Decryptor.create(a,b)},init:function(a,b){this._cipher=a,this._iv=b}}),n=l.CBC=function(){function b(b,c,d){var e=this._iv;if(e){var f=e;this._iv=a}else var f=this._prevBlock;for(var g=0;d>g;g++)b[c+g]^=f[g]}var c=m.extend();return c.Encryptor=c.extend({processBlock:function(a,c){var d=this._cipher,e=d.blockSize;b.call(this,a,c,e),d.encryptBlock(a,c),this._prevBlock=a.slice(c,c+e)}}),c.Decryptor=c.extend({processBlock:function(a,c){var d=this._cipher,e=d.blockSize,f=a.slice(c,c+e);d.decryptBlock(a,c),b.call(this,a,c,e),this._prevBlock=f}}),c}(),o=(l.IGE=function(){function b(a,b,c,d){for(var e=0;d>e;e++)a[c+e]^=b[e]}var c=m.extend();return c.Encryptor=c.extend({processBlock:function(c,d){var e=this._cipher,f=e.blockSize;this._ivp===a&&(this._ivp=this._iv.slice(0,f),this._iv2p=this._iv.slice(f,f+f));var g=c.slice(d,d+f);b(c,this._ivp,d,f),e.encryptBlock(c,d),b(c,this._iv2p,d,f),this._ivp=c.slice(d,d+f),this._iv2p=g}}),c.Decryptor=c.extend({processBlock:function(c,d){var e=this._cipher,f=e.blockSize;this._ivp===a&&(this._ivp=this._iv.slice(0,f),this._iv2p=this._iv.slice(f,2*f));var g=c.slice(d,d+f);b(c,this._iv2p,d,f),e.decryptBlock(c,d),b(c,this._ivp,d,f),this._ivp=g,this._iv2p=c.slice(d,d+f)}}),c}(),b.pad={}),p=o.Pkcs7={pad:function(a,b){for(var c=4*b,d=c-a.sigBytes%c,f=d<<24|d<<16|d<<8|d,g=[],h=0;d>h;h+=4)g.push(f);var i=e.create(g,d);a.concat(i)},unpad:function(a){var b=255&a.words[a.sigBytes-1>>>2];a.sigBytes-=b}},q=(o.NoPadding={pad:function(){},unpad:function(){}},c.BlockCipher=k.extend({cfg:k.cfg.extend({mode:n,padding:p}),reset:function(){k.reset.call(this);var a=this.cfg,b=a.iv,c=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var d=c.createEncryptor;else{var d=c.createDecryptor;this._minBufferSize=1}this._mode=d.call(c,this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else{var b=this._process(!0);a.unpad(b)}return b},blockSize:4}),c.CipherParams=d.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}})),r=b.format={},s=r.OpenSSL={stringify:function(a){var b=a.ciphertext,c=a.salt;if(c)var d=e.create([1398893684,1701076831]).concat(c).concat(b);else var d=b;return d.toString(h)},parse:function(a){var b=h.parse(a),c=b.words;if(1398893684==c[0]&&1701076831==c[1]){var d=e.create(c.slice(2,4));c.splice(0,4),b.sigBytes-=16}return q.create({ciphertext:b,salt:d})}},t=c.SerializableCipher=d.extend({cfg:d.extend({format:s}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=a.createEncryptor(c,d),f=e.finalize(b),g=e.cfg;return q.create({ciphertext:f,key:c,iv:g.iv,algorithm:a,mode:g.mode,padding:g.padding,blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d),b=this._parse(b,d.format);var e=a.createDecryptor(c,d).finalize(b.ciphertext);return e},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),u=b.kdf={},v=u.OpenSSL={execute:function(a,b,c,d){d||(d=e.random(8));var f=j.create({keySize:b+c}).compute(a,d),g=e.create(f.words.slice(b),4*c);return f.sigBytes=4*b,q.create({key:f,iv:g,salt:d})}},w=c.PasswordBasedCipher=t.extend({cfg:t.cfg.extend({kdf:v}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=d.kdf.execute(c,a.keySize,a.ivSize);d.iv=e.iv;var f=t.encrypt.call(this,a,b,e.key,d);return f.mixIn(e),f},decrypt:function(a,b,c,d){d=this.cfg.extend(d),b=this._parse(b,d.format);var e=d.kdf.execute(c,a.keySize,a.ivSize,b.salt);d.iv=e.iv;var f=t.decrypt.call(this,a,b,e.key,d);return f}})}(),function(){var a=CryptoJS,b=a.lib,c=b.BlockCipher,d=a.algo,e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[],n=[];!function(){for(var a=[],b=0;256>b;b++)128>b?a[b]=b<<1:a[b]=b<<1^283;for(var c=0,d=0,b=0;256>b;b++){var o=d^d<<1^d<<2^d<<3^d<<4;o=o>>>8^255&o^99,e[c]=o,f[o]=c;var p=a[c],q=a[p],r=a[q],s=257*a[o]^16843008*o;g[c]=s<<24|s>>>8,h[c]=s<<16|s>>>16,i[c]=s<<8|s>>>24,j[c]=s;var s=16843009*r^65537*q^257*p^16843008*c;k[o]=s<<24|s>>>8,l[o]=s<<16|s>>>16,m[o]=s<<8|s>>>24,n[o]=s,c?(c=p^a[a[a[r^p]]],d^=a[a[d]]):c=d=1}}();var o=[0,1,2,4,8,16,32,64,128,27,54],p=d.AES=c.extend({_doReset:function(){for(var a=this._key,b=a.words,c=a.sigBytes/4,d=this._nRounds=c+6,f=4*(d+1),g=this._keySchedule=[],h=0;f>h;h++)if(c>h)g[h]=b[h];else{var i=g[h-1];h%c?c>6&&h%c==4&&(i=e[i>>>24]<<24|e[i>>>16&255]<<16|e[i>>>8&255]<<8|e[255&i]):(i=i<<8|i>>>24,i=e[i>>>24]<<24|e[i>>>16&255]<<16|e[i>>>8&255]<<8|e[255&i],i^=o[h/c|0]<<24),g[h]=g[h-c]^i}for(var j=this._invKeySchedule=[],p=0;f>p;p++){var h=f-p;if(p%4)var i=g[h];else var i=g[h-4];4>p||4>=h?j[p]=i:j[p]=k[e[i>>>24]]^l[e[i>>>16&255]]^m[e[i>>>8&255]]^n[e[255&i]]}},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,g,h,i,j,e)},decryptBlock:function(a,b){var c=a[b+1];a[b+1]=a[b+3],a[b+3]=c,this._doCryptBlock(a,b,this._invKeySchedule,k,l,m,n,f);var c=a[b+1];a[b+1]=a[b+3],a[b+3]=c},_doCryptBlock:function(a,b,c,d,e,f,g,h){for(var i=this._nRounds,j=a[b]^c[0],k=a[b+1]^c[1],l=a[b+2]^c[2],m=a[b+3]^c[3],n=4,o=1;i>o;o++){var p=d[j>>>24]^e[k>>>16&255]^f[l>>>8&255]^g[255&m]^c[n++],q=d[k>>>24]^e[l>>>16&255]^f[m>>>8&255]^g[255&j]^c[n++],r=d[l>>>24]^e[m>>>16&255]^f[j>>>8&255]^g[255&k]^c[n++],s=d[m>>>24]^e[j>>>16&255]^f[k>>>8&255]^g[255&l]^c[n++];j=p,k=q,l=r,m=s}var p=(h[j>>>24]<<24|h[k>>>16&255]<<16|h[l>>>8&255]<<8|h[255&m])^c[n++],q=(h[k>>>24]<<24|h[l>>>16&255]<<16|h[m>>>8&255]<<8|h[255&j])^c[n++],r=(h[l>>>24]<<24|h[m>>>16&255]<<16|h[j>>>8&255]<<8|h[255&k])^c[n++],s=(h[m>>>24]<<24|h[j>>>16&255]<<16|h[k>>>8&255]<<8|h[255&l])^c[n++];a[b]=p,a[b+1]=q,a[b+2]=r,a[b+3]=s},keySize:8});a.AES=c._createHelper(p)}(),function(a){var b=CryptoJS,c=b.lib,d=c.WordArray,e=c.Hasher,f=b.algo,g=[],h=[];!function(){function b(b){for(var c=a.sqrt(b),d=2;c>=d;d++)if(!(b%d))return!1;return!0}function c(a){return 4294967296*(a-(0|a))|0}for(var d=2,e=0;64>e;)b(d)&&(8>e&&(g[e]=c(a.pow(d,.5))),h[e]=c(a.pow(d,1/3)),e++),d++}();var i=[],j=f.SHA256=e.extend({_doReset:function(){this._hash=new d.init(g.slice(0))},_doProcessBlock:function(a,b){for(var c=this._hash.words,d=c[0],e=c[1],f=c[2],g=c[3],j=c[4],k=c[5],l=c[6],m=c[7],n=0;64>n;n++){if(16>n)i[n]=0|a[b+n];else{var o=i[n-15],p=(o<<25|o>>>7)^(o<<14|o>>>18)^o>>>3,q=i[n-2],r=(q<<15|q>>>17)^(q<<13|q>>>19)^q>>>10;i[n]=p+i[n-7]+r+i[n-16]}var s=j&k^~j&l,t=d&e^d&f^e&f,u=(d<<30|d>>>2)^(d<<19|d>>>13)^(d<<10|d>>>22),v=(j<<26|j>>>6)^(j<<21|j>>>11)^(j<<7|j>>>25),w=m+v+s+h[n]+i[n],x=u+t;m=l,l=k,k=j,j=g+w|0,g=f,f=e,e=d,d=w+x|0}c[0]=c[0]+d|0,c[1]=c[1]+e|0,c[2]=c[2]+f|0,c[3]=c[3]+g|0,c[4]=c[4]+j|0,c[5]=c[5]+k|0,c[6]=c[6]+l|0,c[7]=c[7]+m|0},_doFinalize:function(){var b=this._data,c=b.words,d=8*this._nDataBytes,e=8*b.sigBytes;return c[e>>>5]|=128<<24-e%32,c[(e+64>>>9<<4)+14]=a.floor(d/4294967296),c[(e+64>>>9<<4)+15]=d,b.sigBytes=4*c.length,this._process(),this._hash},clone:function(){var a=e.clone.call(this);return a._hash=this._hash.clone(),a}});b.SHA256=e._createHelper(j),b.HmacSHA256=e._createHmacHelper(j)}(Math);
function isString(i){return"string"==typeof i}function isFunction(i){return"function"==typeof i}function isArray(i){return Array.isArray(i)}function isDefined(i){return void 0!==i}function format(i,t){return i.replace(/\{(\d+)}/g,function(i,r){return t[parseInt(r)]})}function extend(){for(var i=Array.prototype.slice.call(arguments),t=i[0],r=1;r<i.length;r++){var n=i[r];for(var e in n)n.hasOwnProperty(e)&&isDefined(n[e])&&(t[e]=n[e])}return t}function union(){for(var i=Array.prototype.slice.call(arguments),t=[],r=0;r<i.length;r++){var n=i[r];if(!isArray(n))throw new Error(format("Argument {0} is not array",[r+1]));for(var e=0;e<n.length;e++)t.push(n[e])}return t}function Module(i,t,r){this._name=i,this._deps=t,this._ctor=r}function ContainerModule(){this._modules={}}function buildModule(i,t,r){if(!i.isReady()){if(-1!==t.indexOf(i._name))throw new Error(utils.format(strings.ERROR_CIRCULAR_DEPENDENCY,[i._name]));var n=[];i._deps.forEach(function(e){var s=r[e];if(!utils.isDefined(s))throw new Error(utils.format(strings.ERROR_MODULE_NOT_FOUND,[e]));s.isReady()||(t.push(i._name),buildModule(s,t,r),t.pop()),n.push(s.getInstance())}),i.build(n)}}var strings={ERROR_CIRCULAR_DEPENDENCY:"{0}: Circular dependency",ERROR_MODULE_ALREADY_DEFINED:"{0}: Module is already defined",ERROR_MODULE_ALREADY_INITIALIZED:"{0}: Module is already initialized",ERROR_MODULE_INITIALIZE:"{0}: Module return empty result",ERROR_MODULE_NAME_INCORRECT:"Incorrect module name",ERROR_MODULE_NOT_INITIALIZED:"{0}: Module is not initialized",ERROR_MODULE_NOT_FOUND:"{0}: Module not found",ERROR_PARAMETERS_INCORRECT:"Incorrect parameters"},utils={isString:isString,isFunction:isFunction,isArray:isArray,isDefined:isDefined,format:format,extend:extend,union:union};Module.prototype.isReady=function(){return utils.isDefined(this._instance)},Module.prototype.build=function(i){if(this.isReady())throw new Error(utils.format(strings.ERROR_MODULE_ALREADY_INITIALIZED,[this._name]));if(this._instance=this._ctor.apply(null,i),!this.isReady())throw new Error(utils.format(strings.ERROR_MODULE_INITIALIZE,[this._name]))},Module.prototype.getInstance=function(){if(!this.isReady())throw new Error(utils.format(strings.ERROR_MODULE_NOT_INITIALIZED,[this._name]));return this._instance},ContainerModule.prototype.register=function(i,t,r){if(!utils.isString(i))throw new Error(strings.ERROR_MODULE_NAME_INCORRECT);if(utils.isDefined(this._modules[i]))throw new Error(utils.format(strings.ERROR_MODULE_ALREADY_DEFINED,[i]));if(utils.isFunction(t)&&(r=t,t=[]),!utils.isArray(t)||!utils.isFunction(r))throw new Error(strings.ERROR_PARAMETERS_INCORRECT);return utils.isArray(r.dependencies)&&(t=utils.union(t,r.dependencies)),this._modules[i]=new Module(i,t,r),this},ContainerModule.prototype.resolve=function(i){if(!utils.isDefined(this._modules[i]))throw new Error(utils.format(strings.ERROR_MODULE_NOT_FOUND,[i]));return this._modules[i].getInstance()},ContainerModule.prototype.init=function(){for(var i in this._modules)this._modules.hasOwnProperty(i)&&buildModule(this._modules[i],[],this._modules);return this};
function BigInteger(a,b,c){null!=a&&("number"==typeof a?this.fromNumber(a,b,c):null==b&&"string"!=typeof a?this.fromString(a,256):this.fromString(a,b))}function nbi(){return new BigInteger(null)}function am1(a,b,c,d,e,f){for(;--f>=0;){var g=b*this[a++]+c[d]+e;e=Math.floor(g/67108864),c[d++]=67108863&g}return e}function am2(a,b,c,d,e,f){for(var g=32767&b,h=b>>15;--f>=0;){var i=32767&this[a],j=this[a++]>>15,k=h*i+j*g;i=g*i+((32767&k)<<15)+c[d]+(1073741823&e),e=(i>>>30)+(k>>>15)+h*j+(e>>>30),c[d++]=1073741823&i}return e}function am3(a,b,c,d,e,f){for(var g=16383&b,h=b>>14;--f>=0;){var i=16383&this[a],j=this[a++]>>14,k=h*i+j*g;i=g*i+((16383&k)<<14)+c[d]+e,e=(i>>28)+(k>>14)+h*j,c[d++]=268435455&i}return e}function int2char(a){return BI_RM.charAt(a)}function intAt(a,b){var c=BI_RC[a.charCodeAt(b)];return null==c?-1:c}function bnpCopyTo(a){for(var b=this.t-1;b>=0;--b)a[b]=this[b];a.t=this.t,a.s=this.s}function bnpFromInt(a){this.t=1,this.s=0>a?-1:0,a>0?this[0]=a:-1>a?this[0]=a+this.DV:this.t=0}function nbv(a){var b=nbi();return b.fromInt(a),b}function bnpFromString(a,b,c){var d;if(16==b)d=4;else if(8==b)d=3;else if(256==b)d=8;else if(2==b)d=1;else if(32==b)d=5;else{if(4!=b)return void this.fromRadix(a,b);d=2}this.t=0,this.s=0;for(var e=a.length,f=!1,g=0;--e>=0;){var h=8==d?255&a[e]:intAt(a,e);0>h?"-"==a.charAt(e)&&(f=!0):(f=!1,0==g?this[this.t++]=h:g+d>this.DB?(this[this.t-1]|=(h&(1<<this.DB-g)-1)<<g,this[this.t++]=h>>this.DB-g):this[this.t-1]|=h<<g,g+=d,g>=this.DB&&(g-=this.DB))}8==d&&0!=(128&a[0])&&c&&(this.s=-1,g>0&&(this[this.t-1]|=(1<<this.DB-g)-1<<g)),this.clamp(),f&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var a=this.s&this.DM;this.t>0&&this[this.t-1]==a;)--this.t}function bnToString(a){if(this.s<0)return"-"+this.negate().toString(a);var b;if(16==a)b=4;else if(8==a)b=3;else if(2==a)b=1;else if(32==a)b=5;else{if(4!=a)return this.toRadix(a);b=2}var c,d=(1<<b)-1,e=!1,f="",g=this.t,h=this.DB-g*this.DB%b;if(g-- >0)for(h<this.DB&&(c=this[g]>>h)>0&&(e=!0,f=int2char(c));g>=0;)b>h?(c=(this[g]&(1<<h)-1)<<b-h,c|=this[--g]>>(h+=this.DB-b)):(c=this[g]>>(h-=b)&d,0>=h&&(h+=this.DB,--g)),c>0&&(e=!0),e&&(f+=int2char(c));return e?f:"0"}function bnNegate(){var a=nbi();return BigInteger.ZERO.subTo(this,a),a}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(a){var b=this.s-a.s;if(0!=b)return b;var c=this.t;if(b=c-a.t,0!=b)return this.s<0?-b:b;for(;--c>=0;)if(0!=(b=this[c]-a[c]))return b;return 0}function nbits(a){var b,c=1;return 0!=(b=a>>>16)&&(a=b,c+=16),0!=(b=a>>8)&&(a=b,c+=8),0!=(b=a>>4)&&(a=b,c+=4),0!=(b=a>>2)&&(a=b,c+=2),0!=(b=a>>1)&&(a=b,c+=1),c}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(a,b){var c;for(c=this.t-1;c>=0;--c)b[c+a]=this[c];for(c=a-1;c>=0;--c)b[c]=0;b.t=this.t+a,b.s=this.s}function bnpDRShiftTo(a,b){for(var c=a;c<this.t;++c)b[c-a]=this[c];b.t=Math.max(this.t-a,0),b.s=this.s}function bnpLShiftTo(a,b){var c,d=a%this.DB,e=this.DB-d,f=(1<<e)-1,g=Math.floor(a/this.DB),h=this.s<<d&this.DM;for(c=this.t-1;c>=0;--c)b[c+g+1]=this[c]>>e|h,h=(this[c]&f)<<d;for(c=g-1;c>=0;--c)b[c]=0;b[g]=h,b.t=this.t+g+1,b.s=this.s,b.clamp()}function bnpRShiftTo(a,b){b.s=this.s;var c=Math.floor(a/this.DB);if(c>=this.t)return void(b.t=0);var d=a%this.DB,e=this.DB-d,f=(1<<d)-1;b[0]=this[c]>>d;for(var g=c+1;g<this.t;++g)b[g-c-1]|=(this[g]&f)<<e,b[g-c]=this[g]>>d;d>0&&(b[this.t-c-1]|=(this.s&f)<<e),b.t=this.t-c,b.clamp()}function bnpSubTo(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);e>c;)d+=this[c]-a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d-=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d-=a[c],b[c++]=d&this.DM,d>>=this.DB;d-=a.s}b.s=0>d?-1:0,-1>d?b[c++]=this.DV+d:d>0&&(b[c++]=d),b.t=c,b.clamp()}function bnpMultiplyTo(a,b){var c=this.abs(),d=a.abs(),e=c.t;for(b.t=e+d.t;--e>=0;)b[e]=0;for(e=0;e<d.t;++e)b[e+c.t]=c.am(0,d[e],b,e,0,c.t);b.s=0,b.clamp(),this.s!=a.s&&BigInteger.ZERO.subTo(b,b)}function bnpSquareTo(a){for(var b=this.abs(),c=a.t=2*b.t;--c>=0;)a[c]=0;for(c=0;c<b.t-1;++c){var d=b.am(c,b[c],a,2*c,0,1);(a[c+b.t]+=b.am(c+1,2*b[c],a,2*c+1,d,b.t-c-1))>=b.DV&&(a[c+b.t]-=b.DV,a[c+b.t+1]=1)}a.t>0&&(a[a.t-1]+=b.am(c,b[c],a,2*c,0,1)),a.s=0,a.clamp()}function bnpDivRemTo(a,b,c){var d=a.abs();if(!(d.t<=0)){var e=this.abs();if(e.t<d.t)return null!=b&&b.fromInt(0),void(null!=c&&this.copyTo(c));null==c&&(c=nbi());var f=nbi(),g=this.s,h=a.s,i=this.DB-nbits(d[d.t-1]);i>0?(d.lShiftTo(i,f),e.lShiftTo(i,c)):(d.copyTo(f),e.copyTo(c));var j=f.t,k=f[j-1];if(0!=k){var l=k*(1<<this.F1)+(j>1?f[j-2]>>this.F2:0),m=this.FV/l,n=(1<<this.F1)/l,o=1<<this.F2,p=c.t,q=p-j,r=null==b?nbi():b;for(f.dlShiftTo(q,r),c.compareTo(r)>=0&&(c[c.t++]=1,c.subTo(r,c)),BigInteger.ONE.dlShiftTo(j,r),r.subTo(f,f);f.t<j;)f[f.t++]=0;for(;--q>=0;){var s=c[--p]==k?this.DM:Math.floor(c[p]*m+(c[p-1]+o)*n);if((c[p]+=f.am(0,s,c,q,0,j))<s)for(f.dlShiftTo(q,r),c.subTo(r,c);c[p]<--s;)c.subTo(r,c)}null!=b&&(c.drShiftTo(j,b),g!=h&&BigInteger.ZERO.subTo(b,b)),c.t=j,c.clamp(),i>0&&c.rShiftTo(i,c),0>g&&BigInteger.ZERO.subTo(c,c)}}}function bnMod(a){var b=nbi();return this.abs().divRemTo(a,null,b),this.s<0&&b.compareTo(BigInteger.ZERO)>0&&a.subTo(b,b),b}function Classic(a){this.m=a}function cConvert(a){return a.s<0||a.compareTo(this.m)>=0?a.mod(this.m):a}function cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function cMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function cSqrTo(a,b){a.squareTo(b),this.reduce(b)}function bnpInvDigit(){if(this.t<1)return 0;var a=this[0];if(0==(1&a))return 0;var b=3&a;return b=b*(2-(15&a)*b)&15,b=b*(2-(255&a)*b)&255,b=b*(2-((65535&a)*b&65535))&65535,b=b*(2-a*b%this.DV)%this.DV,b>0?this.DV-b:-b}function Montgomery(a){this.m=a,this.mp=a.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<a.DB-15)-1,this.mt2=2*a.t}function montConvert(a){var b=nbi();return a.abs().dlShiftTo(this.m.t,b),b.divRemTo(this.m,null,b),a.s<0&&b.compareTo(BigInteger.ZERO)>0&&this.m.subTo(b,b),b}function montRevert(a){var b=nbi();return a.copyTo(b),this.reduce(b),b}function montReduce(a){for(;a.t<=this.mt2;)a[a.t++]=0;for(var b=0;b<this.m.t;++b){var c=32767&a[b],d=c*this.mpl+((c*this.mph+(a[b]>>15)*this.mpl&this.um)<<15)&a.DM;for(c=b+this.m.t,a[c]+=this.m.am(0,d,a,b,0,this.m.t);a[c]>=a.DV;)a[c]-=a.DV,a[++c]++}a.clamp(),a.drShiftTo(this.m.t,a),a.compareTo(this.m)>=0&&a.subTo(this.m,a)}function montSqrTo(a,b){a.squareTo(b),this.reduce(b)}function montMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function bnpIsEven(){return 0==(this.t>0?1&this[0]:this.s)}function bnpExp(a,b){if(a>4294967295||1>a)return BigInteger.ONE;var c=nbi(),d=nbi(),e=b.convert(this),f=nbits(a)-1;for(e.copyTo(c);--f>=0;)if(b.sqrTo(c,d),(a&1<<f)>0)b.mulTo(d,e,c);else{var g=c;c=d,d=g}return b.revert(c)}function bnModPowInt(a,b){var c;return c=256>a||b.isEven()?new Classic(b):new Montgomery(b),this.exp(a,c)}function bnClone(){var a=nbi();return this.copyTo(a),a}function bnIntValue(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(a){return Math.floor(Math.LN2*this.DB/Math.log(a))}function bnSigNum(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function bnpToRadix(a){if(null==a&&(a=10),0==this.signum()||2>a||a>36)return"0";var b=this.chunkSize(a),c=Math.pow(a,b),d=nbv(c),e=nbi(),f=nbi(),g="";for(this.divRemTo(d,e,f);e.signum()>0;)g=(c+f.intValue()).toString(a).substr(1)+g,e.divRemTo(d,e,f);return f.intValue().toString(a)+g}function bnpFromRadix(a,b){this.fromInt(0),null==b&&(b=10);for(var c=this.chunkSize(b),d=Math.pow(b,c),e=!1,f=0,g=0,h=0;h<a.length;++h){var i=intAt(a,h);0>i?"-"==a.charAt(h)&&0==this.signum()&&(e=!0):(g=b*g+i,++f>=c&&(this.dMultiply(d),this.dAddOffset(g,0),f=0,g=0))}f>0&&(this.dMultiply(Math.pow(b,f)),this.dAddOffset(g,0)),e&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(a,b,c){if("number"==typeof b)if(2>a)this.fromInt(1);else for(this.fromNumber(a,c),this.testBit(a-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(b);)this.dAddOffset(2,0),this.bitLength()>a&&this.subTo(BigInteger.ONE.shiftLeft(a-1),this);else{var d=new Array,e=7&a;d.length=(a>>3)+1,b.nextBytes(d),e>0?d[0]&=(1<<e)-1:d[0]=0,this.fromString(d,256)}}function bnToByteArray(a){var b=this.t,c=new Array;c[0]=this.s;var d,e=this.DB-b*this.DB%8,f=0;if(b-- >0)for(e<this.DB&&(d=this[b]>>e)!=(this.s&this.DM)>>e&&(c[f++]=d|this.s<<this.DB-e);b>=0;)8>e?(d=(this[b]&(1<<e)-1)<<8-e,d|=this[--b]>>(e+=this.DB-8)):(d=this[b]>>(e-=8)&255,0>=e&&(e+=this.DB,--b)),a&&0!=(128&d)&&(d|=-256),0==f&&(128&this.s)!=(128&d)&&++f,(f>0||d!=this.s)&&(c[f++]=d);return c}function bnEquals(a){return 0==this.compareTo(a)}function bnMin(a){return this.compareTo(a)<0?this:a}function bnMax(a){return this.compareTo(a)>0?this:a}function bnpBitwiseTo(a,b,c){var d,e,f=Math.min(a.t,this.t);for(d=0;f>d;++d)c[d]=b(this[d],a[d]);if(a.t<this.t){for(e=a.s&this.DM,d=f;d<this.t;++d)c[d]=b(this[d],e);c.t=this.t}else{for(e=this.s&this.DM,d=f;d<a.t;++d)c[d]=b(e,a[d]);c.t=a.t}c.s=b(this.s,a.s),c.clamp()}function op_and(a,b){return a&b}function bnAnd(a){var b=nbi();return this.bitwiseTo(a,op_and,b),b}function op_or(a,b){return a|b}function bnOr(a){var b=nbi();return this.bitwiseTo(a,op_or,b),b}function op_xor(a,b){return a^b}function bnXor(a){var b=nbi();return this.bitwiseTo(a,op_xor,b),b}function op_andnot(a,b){return a&~b}function bnAndNot(a){var b=nbi();return this.bitwiseTo(a,op_andnot,b),b}function bnNot(){for(var a=nbi(),b=0;b<this.t;++b)a[b]=this.DM&~this[b];return a.t=this.t,a.s=~this.s,a}function bnShiftLeft(a){var b=nbi();return 0>a?this.rShiftTo(-a,b):this.lShiftTo(a,b),b}function bnShiftRight(a){var b=nbi();return 0>a?this.lShiftTo(-a,b):this.rShiftTo(a,b),b}function lbit(a){if(0==a)return-1;var b=0;return 0==(65535&a)&&(a>>=16,b+=16),0==(255&a)&&(a>>=8,b+=8),0==(15&a)&&(a>>=4,b+=4),0==(3&a)&&(a>>=2,b+=2),0==(1&a)&&++b,b}function bnGetLowestSetBit(){for(var a=0;a<this.t;++a)if(0!=this[a])return a*this.DB+lbit(this[a]);return this.s<0?this.t*this.DB:-1}function cbit(a){for(var b=0;0!=a;)a&=a-1,++b;return b}function bnBitCount(){for(var a=0,b=this.s&this.DM,c=0;c<this.t;++c)a+=cbit(this[c]^b);return a}function bnTestBit(a){var b=Math.floor(a/this.DB);return b>=this.t?0!=this.s:0!=(this[b]&1<<a%this.DB)}function bnpChangeBit(a,b){var c=BigInteger.ONE.shiftLeft(a);return this.bitwiseTo(c,b,c),c}function bnSetBit(a){return this.changeBit(a,op_or)}function bnClearBit(a){return this.changeBit(a,op_andnot)}function bnFlipBit(a){return this.changeBit(a,op_xor)}function bnpAddTo(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);e>c;)d+=this[c]+a[c],b[c++]=d&this.DM,d>>=this.DB;if(a.t<this.t){for(d+=a.s;c<this.t;)d+=this[c],b[c++]=d&this.DM,d>>=this.DB;d+=this.s}else{for(d+=this.s;c<a.t;)d+=a[c],b[c++]=d&this.DM,d>>=this.DB;d+=a.s}b.s=0>d?-1:0,d>0?b[c++]=d:-1>d&&(b[c++]=this.DV+d),b.t=c,b.clamp()}function bnAdd(a){var b=nbi();return this.addTo(a,b),b}function bnSubtract(a){var b=nbi();return this.subTo(a,b),b}function bnMultiply(a){var b=nbi();return this.multiplyTo(a,b),b}function bnSquare(){var a=nbi();return this.squareTo(a),a}function bnDivide(a){var b=nbi();return this.divRemTo(a,b,null),b}function bnRemainder(a){var b=nbi();return this.divRemTo(a,null,b),b}function bnDivideAndRemainder(a){var b=nbi(),c=nbi();return this.divRemTo(a,b,c),new Array(b,c)}function bnpDMultiply(a){this[this.t]=this.am(0,a-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(a,b){if(0!=a){for(;this.t<=b;)this[this.t++]=0;for(this[b]+=a;this[b]>=this.DV;)this[b]-=this.DV,++b>=this.t&&(this[this.t++]=0),++this[b]}}function NullExp(){}function nNop(a){return a}function nMulTo(a,b,c){a.multiplyTo(b,c)}function nSqrTo(a,b){a.squareTo(b)}function bnPow(a){return this.exp(a,new NullExp)}function bnpMultiplyLowerTo(a,b,c){var d=Math.min(this.t+a.t,b);for(c.s=0,c.t=d;d>0;)c[--d]=0;var e;for(e=c.t-this.t;e>d;++d)c[d+this.t]=this.am(0,a[d],c,d,0,this.t);for(e=Math.min(a.t,b);e>d;++d)this.am(0,a[d],c,d,0,b-d);c.clamp()}function bnpMultiplyUpperTo(a,b,c){--b;var d=c.t=this.t+a.t-b;for(c.s=0;--d>=0;)c[d]=0;for(d=Math.max(b-this.t,0);d<a.t;++d)c[this.t+d-b]=this.am(b-d,a[d],c,0,0,this.t+d-b);c.clamp(),c.drShiftTo(1,c)}function Barrett(a){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*a.t,this.r2),this.mu=this.r2.divide(a),this.m=a}function barrettConvert(a){if(a.s<0||a.t>2*this.m.t)return a.mod(this.m);if(a.compareTo(this.m)<0)return a;var b=nbi();return a.copyTo(b),this.reduce(b),b}function barrettRevert(a){return a}function barrettReduce(a){for(a.drShiftTo(this.m.t-1,this.r2),a.t>this.m.t+1&&(a.t=this.m.t+1,a.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);a.compareTo(this.r2)<0;)a.dAddOffset(1,this.m.t+1);for(a.subTo(this.r2,a);a.compareTo(this.m)>=0;)a.subTo(this.m,a)}function barrettSqrTo(a,b){a.squareTo(b),this.reduce(b)}function barrettMulTo(a,b,c){a.multiplyTo(b,c),this.reduce(c)}function bnModPow(a,b){var c,d,e=a.bitLength(),f=nbv(1);if(0>=e)return f;c=18>e?1:48>e?3:144>e?4:768>e?5:6,d=8>e?new Classic(b):b.isEven()?new Barrett(b):new Montgomery(b);var g=new Array,h=3,i=c-1,j=(1<<c)-1;if(g[1]=d.convert(this),c>1){var k=nbi();for(d.sqrTo(g[1],k);j>=h;)g[h]=nbi(),d.mulTo(k,g[h-2],g[h]),h+=2}var l,m,n=a.t-1,o=!0,p=nbi();for(e=nbits(a[n])-1;n>=0;){for(e>=i?l=a[n]>>e-i&j:(l=(a[n]&(1<<e+1)-1)<<i-e,n>0&&(l|=a[n-1]>>this.DB+e-i)),h=c;0==(1&l);)l>>=1,--h;if((e-=h)<0&&(e+=this.DB,--n),o)g[l].copyTo(f),o=!1;else{for(;h>1;)d.sqrTo(f,p),d.sqrTo(p,f),h-=2;h>0?d.sqrTo(f,p):(m=f,f=p,p=m),d.mulTo(p,g[l],f)}for(;n>=0&&0==(a[n]&1<<e);)d.sqrTo(f,p),m=f,f=p,p=m,--e<0&&(e=this.DB-1,--n)}return d.revert(f)}function bnGCD(a){var b=this.s<0?this.negate():this.clone(),c=a.s<0?a.negate():a.clone();if(b.compareTo(c)<0){var d=b;b=c,c=d}var e=b.getLowestSetBit(),f=c.getLowestSetBit();if(0>f)return b;for(f>e&&(f=e),f>0&&(b.rShiftTo(f,b),c.rShiftTo(f,c));b.signum()>0;)(e=b.getLowestSetBit())>0&&b.rShiftTo(e,b),(e=c.getLowestSetBit())>0&&c.rShiftTo(e,c),b.compareTo(c)>=0?(b.subTo(c,b),b.rShiftTo(1,b)):(c.subTo(b,c),c.rShiftTo(1,c));return f>0&&c.lShiftTo(f,c),c}function bnpModInt(a){if(0>=a)return 0;var b=this.DV%a,c=this.s<0?a-1:0;if(this.t>0)if(0==b)c=this[0]%a;else for(var d=this.t-1;d>=0;--d)c=(b*c+this[d])%a;return c}function bnModInverse(a){var b=a.isEven();if(this.isEven()&&b||0==a.signum())return BigInteger.ZERO;for(var c=a.clone(),d=this.clone(),e=nbv(1),f=nbv(0),g=nbv(0),h=nbv(1);0!=c.signum();){for(;c.isEven();)c.rShiftTo(1,c),b?(e.isEven()&&f.isEven()||(e.addTo(this,e),f.subTo(a,f)),e.rShiftTo(1,e)):f.isEven()||f.subTo(a,f),f.rShiftTo(1,f);for(;d.isEven();)d.rShiftTo(1,d),b?(g.isEven()&&h.isEven()||(g.addTo(this,g),h.subTo(a,h)),g.rShiftTo(1,g)):h.isEven()||h.subTo(a,h),h.rShiftTo(1,h);c.compareTo(d)>=0?(c.subTo(d,c),b&&e.subTo(g,e),f.subTo(h,f)):(d.subTo(c,d),b&&g.subTo(e,g),h.subTo(f,h))}return 0!=d.compareTo(BigInteger.ONE)?BigInteger.ZERO:h.compareTo(a)>=0?h.subtract(a):h.signum()<0?(h.addTo(a,h),h.signum()<0?h.add(a):h):h}function bnIsProbablePrime(a){var b,c=this.abs();if(1==c.t&&c[0]<=lowprimes[lowprimes.length-1]){for(b=0;b<lowprimes.length;++b)if(c[0]==lowprimes[b])return!0;return!1}if(c.isEven())return!1;for(b=1;b<lowprimes.length;){for(var d=lowprimes[b],e=b+1;e<lowprimes.length&&lplim>d;)d*=lowprimes[e++];for(d=c.modInt(d);e>b;)if(d%lowprimes[b++]==0)return!1}return c.millerRabin(a)}function bnpMillerRabin(a){var b=this.subtract(BigInteger.ONE),c=b.getLowestSetBit();if(0>=c)return!1;var d=b.shiftRight(c);a=a+1>>1,a>lowprimes.length&&(a=lowprimes.length);for(var e=nbi(),f=0;a>f;++f){e.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var g=e.modPow(d,this);if(0!=g.compareTo(BigInteger.ONE)&&0!=g.compareTo(b)){for(var h=1;h++<c&&0!=g.compareTo(b);)if(g=g.modPowInt(2,this),0==g.compareTo(BigInteger.ONE))return!1;if(0!=g.compareTo(b))return!1}}return!0}function rng_seed_int(a){rng_pool[rng_pptr++]^=255&a,rng_pool[rng_pptr++]^=a>>8&255,rng_pool[rng_pptr++]^=a>>16&255,rng_pool[rng_pptr++]^=a>>24&255,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}function rng_get_byte(){if(null==rng_state){for(rng_seed_time(),rng_state=prng_newstate(),rng_state.init(rng_pool),rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(a){var b;for(b=0;b<a.length;++b)a[b]=rng_get_byte()}function SecureRandom(){}function Arcfour(){this.i=0,this.j=0,this.S=new Array}function ARC4init(a){var b,c,d;for(b=0;256>b;++b)this.S[b]=b;for(c=0,b=0;256>b;++b)c=c+this.S[b]+a[b%a.length]&255,d=this.S[b],this.S[b]=this.S[c],this.S[c]=d;this.i=0,this.j=0}function ARC4next(){var a;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,a=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=a,this.S[a+this.S[this.i]&255]}function prng_newstate(){return new Arcfour}var dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;for(rr="0".charCodeAt(0),vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,BigInteger.prototype.square=bnSquare;var rng_state,rng_pool,rng_pptr;if(null==rng_pool){rng_pool=new Array,rng_pptr=0;var global="undefined"!=typeof window?window:this,t;if(global&&global.crypto&&global.crypto.getRandomValues){var ua=new Uint8Array(32);for(global.crypto.getRandomValues(ua),t=0;32>t;++t)rng_pool[rng_pptr++]=ua[t]}if("Netscape"==navigator.appName&&navigator.appVersion<"5"&&global&&global.crypto){var z=global.crypto.random(32);for(t=0;t<z.length;++t)rng_pool[rng_pptr++]=255&z.charCodeAt(t)}for(;rng_psize>rng_pptr;)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=255&t;rng_pptr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes,Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256;
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
/*
 long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 Released under the Apache License, Version 2.0
 see: https://github.com/dcodeIO/long.js for details
*/
(function(d,g){"function"===typeof define&&define.amd?define([],g):"function"===typeof require&&"object"===typeof module&&module&&module.exports?module.exports=g():(d.dcodeIO=d.dcodeIO||{}).Long=g()})(this,function(){function d(a,b,c){this.low=a|0;this.high=b|0;this.unsigned=!!c}function g(a){return!0===(a&&a.__isLong__)}function m(a,b){var c,t;if(b){a>>>=0;if(t=0<=a&&256>a)if(c=z[a])return c;c=e(a,0>(a|0)?-1:0,!0);t&&(z[a]=c)}else{a|=0;if(t=-128<=a&&128>a)if(c=A[a])return c;c=e(a,0>a?-1:0,!1);t&&
(A[a]=c)}return c}function n(a,b){if(isNaN(a)||!isFinite(a))return b?p:k;if(b){if(0>a)return p;if(a>=B)return C}else{if(a<=-D)return l;if(a+1>=D)return E}return 0>a?n(-a,b).neg():e(a%4294967296|0,a/4294967296|0,b)}function e(a,b,c){return new d(a,b,c)}function x(a,b,c){if(0===a.length)throw Error("empty string");if("NaN"===a||"Infinity"===a||"+Infinity"===a||"-Infinity"===a)return k;"number"===typeof b?(c=b,b=!1):b=!!b;c=c||10;if(2>c||36<c)throw RangeError("radix");var t;if(0<(t=a.indexOf("-")))throw Error("interior hyphen");
if(0===t)return x(a.substring(1),b,c).neg();t=n(v(c,8));for(var e=k,f=0;f<a.length;f+=8){var d=Math.min(8,a.length-f),g=parseInt(a.substring(f,f+d),c);8>d?(d=n(v(c,d)),e=e.mul(d).add(n(g))):(e=e.mul(t),e=e.add(n(g)))}e.unsigned=b;return e}function q(a){return a instanceof d?a:"number"===typeof a?n(a):"string"===typeof a?x(a):e(a.low,a.high,a.unsigned)}Object.defineProperty(d.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1});d.isLong=g;var A={},z={};d.fromInt=m;d.fromNumber=n;d.fromBits=
e;var v=Math.pow;d.fromString=x;d.fromValue=q;var B=4294967296*4294967296,D=B/2,F=m(16777216),k=m(0);d.ZERO=k;var p=m(0,!0);d.UZERO=p;var r=m(1);d.ONE=r;var G=m(1,!0);d.UONE=G;var y=m(-1);d.NEG_ONE=y;var E=e(-1,2147483647,!1);d.MAX_VALUE=E;var C=e(-1,-1,!0);d.MAX_UNSIGNED_VALUE=C;var l=e(0,-2147483648,!1);d.MIN_VALUE=l;var b=d.prototype;b.toInt=function(){return this.unsigned?this.low>>>0:this.low};b.toNumber=function(){return this.unsigned?4294967296*(this.high>>>0)+(this.low>>>0):4294967296*this.high+
(this.low>>>0)};b.toString=function(a){a=a||10;if(2>a||36<a)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(l)){var b=n(a),c=this.div(b),b=c.mul(b).sub(this);return c.toString(a)+b.toInt().toString(a)}return"-"+this.neg().toString(a)}for(var c=n(v(a,6),this.unsigned),b=this,e="";;){var d=b.div(c),f=(b.sub(d.mul(c)).toInt()>>>0).toString(a),b=d;if(b.isZero())return f+e;for(;6>f.length;)f="0"+f;e=""+f+e}};b.getHighBits=function(){return this.high};b.getHighBitsUnsigned=
function(){return this.high>>>0};b.getLowBits=function(){return this.low};b.getLowBitsUnsigned=function(){return this.low>>>0};b.getNumBitsAbs=function(){if(this.isNegative())return this.eq(l)?64:this.neg().getNumBitsAbs();for(var a=0!=this.high?this.high:this.low,b=31;0<b&&0==(a&1<<b);b--);return 0!=this.high?b+33:b+1};b.isZero=function(){return 0===this.high&&0===this.low};b.isNegative=function(){return!this.unsigned&&0>this.high};b.isPositive=function(){return this.unsigned||0<=this.high};b.isOdd=
function(){return 1===(this.low&1)};b.isEven=function(){return 0===(this.low&1)};b.equals=function(a){g(a)||(a=q(a));return this.unsigned!==a.unsigned&&1===this.high>>>31&&1===a.high>>>31?!1:this.high===a.high&&this.low===a.low};b.eq=b.equals;b.notEquals=function(a){return!this.eq(a)};b.neq=b.notEquals;b.lessThan=function(a){return 0>this.comp(a)};b.lt=b.lessThan;b.lessThanOrEqual=function(a){return 0>=this.comp(a)};b.lte=b.lessThanOrEqual;b.greaterThan=function(a){return 0<this.comp(a)};b.gt=b.greaterThan;
b.greaterThanOrEqual=function(a){return 0<=this.comp(a)};b.gte=b.greaterThanOrEqual;b.compare=function(a){g(a)||(a=q(a));if(this.eq(a))return 0;var b=this.isNegative(),c=a.isNegative();return b&&!c?-1:!b&&c?1:this.unsigned?a.high>>>0>this.high>>>0||a.high===this.high&&a.low>>>0>this.low>>>0?-1:1:this.sub(a).isNegative()?-1:1};b.comp=b.compare;b.negate=function(){return!this.unsigned&&this.eq(l)?l:this.not().add(r)};b.neg=b.negate;b.add=function(a){g(a)||(a=q(a));var b=this.high>>>16,c=this.high&65535,
d=this.low>>>16,l=a.high>>>16,f=a.high&65535,n=a.low>>>16,k;k=0+((this.low&65535)+(a.low&65535));a=0+(k>>>16);a+=d+n;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+l)&65535;return e((a&65535)<<16|k&65535,c<<16|d&65535,this.unsigned)};b.subtract=function(a){g(a)||(a=q(a));return this.add(a.neg())};b.sub=b.subtract;b.multiply=function(a){if(this.isZero())return k;g(a)||(a=q(a));if(a.isZero())return k;if(this.eq(l))return a.isOdd()?l:k;if(a.eq(l))return this.isOdd()?l:k;if(this.isNegative())return a.isNegative()?
this.neg().mul(a.neg()):this.neg().mul(a).neg();if(a.isNegative())return this.mul(a.neg()).neg();if(this.lt(F)&&a.lt(F))return n(this.toNumber()*a.toNumber(),this.unsigned);var b=this.high>>>16,c=this.high&65535,d=this.low>>>16,w=this.low&65535,f=a.high>>>16,m=a.high&65535,p=a.low>>>16;a=a.low&65535;var u,h,s,r;r=0+w*a;s=0+(r>>>16);s+=d*a;h=0+(s>>>16);s=(s&65535)+w*p;h+=s>>>16;s&=65535;h+=c*a;u=0+(h>>>16);h=(h&65535)+d*p;u+=h>>>16;h&=65535;h+=w*m;u+=h>>>16;h&=65535;u=u+(b*a+c*p+d*m+w*f)&65535;return e(s<<
16|r&65535,u<<16|h,this.unsigned)};b.mul=b.multiply;b.divide=function(a){g(a)||(a=q(a));if(a.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?p:k;var b,c,d;if(this.unsigned){a.unsigned||(a=a.toUnsigned());if(a.gt(this))return p;if(a.gt(this.shru(1)))return G;d=p}else{if(this.eq(l)){if(a.eq(r)||a.eq(y))return l;if(a.eq(l))return r;b=this.shr(1).div(a).shl(1);if(b.eq(k))return a.isNegative()?r:y;c=this.sub(a.mul(b));return d=b.add(c.div(a))}if(a.eq(l))return this.unsigned?
p:k;if(this.isNegative())return a.isNegative()?this.neg().div(a.neg()):this.neg().div(a).neg();if(a.isNegative())return this.div(a.neg()).neg();d=k}for(c=this;c.gte(a);){b=Math.max(1,Math.floor(c.toNumber()/a.toNumber()));for(var e=Math.ceil(Math.log(b)/Math.LN2),e=48>=e?1:v(2,e-48),f=n(b),m=f.mul(a);m.isNegative()||m.gt(c);)b-=e,f=n(b,this.unsigned),m=f.mul(a);f.isZero()&&(f=r);d=d.add(f);c=c.sub(m)}return d};b.div=b.divide;b.modulo=function(a){g(a)||(a=q(a));return this.sub(this.div(a).mul(a))};
b.mod=b.modulo;b.not=function(){return e(~this.low,~this.high,this.unsigned)};b.and=function(a){g(a)||(a=q(a));return e(this.low&a.low,this.high&a.high,this.unsigned)};b.or=function(a){g(a)||(a=q(a));return e(this.low|a.low,this.high|a.high,this.unsigned)};b.xor=function(a){g(a)||(a=q(a));return e(this.low^a.low,this.high^a.high,this.unsigned)};b.shiftLeft=function(a){g(a)&&(a=a.toInt());return 0===(a&=63)?this:32>a?e(this.low<<a,this.high<<a|this.low>>>32-a,this.unsigned):e(0,this.low<<a-32,this.unsigned)};
b.shl=b.shiftLeft;b.shiftRight=function(a){g(a)&&(a=a.toInt());return 0===(a&=63)?this:32>a?e(this.low>>>a|this.high<<32-a,this.high>>a,this.unsigned):e(this.high>>a-32,0<=this.high?0:-1,this.unsigned)};b.shr=b.shiftRight;b.shiftRightUnsigned=function(a){g(a)&&(a=a.toInt());a&=63;if(0===a)return this;var b=this.high;return 32>a?e(this.low>>>a|b<<32-a,b>>>a,this.unsigned):32===a?e(b,0,this.unsigned):e(b>>>a-32,0,this.unsigned)};b.shru=b.shiftRightUnsigned;b.toSigned=function(){return this.unsigned?
e(this.low,this.high,!1):this};b.toUnsigned=function(){return this.unsigned?this:e(this.low,this.high,!0)};b.toBytes=function(a){return a?this.toBytesLE():this.toBytesBE()};b.toBytesLE=function(){var a=this.high,b=this.low;return[b&255,b>>>8&255,b>>>16&255,b>>>24&255,a&255,a>>>8&255,a>>>16&255,a>>>24&255]};b.toBytesBE=function(){var a=this.high,b=this.low;return[a>>>24&255,a>>>16&255,a>>>8&255,a&255,b>>>24&255,b>>>16&255,b>>>8&255,b&255]};return d});

/*! rusha 2020-01-05 */
var util={getDataType:function(a){if(typeof a==="string"){return"string"}if(a instanceof Array){return"array"}if(typeof global!=="undefined"&&global.Buffer&&global.Buffer.isBuffer(a)){return"buffer"}if(a instanceof ArrayBuffer){return"arraybuffer"}if(a.buffer instanceof ArrayBuffer){return"view"}if(a instanceof Blob){return"blob"}throw new Error("Unsupported data type.")}};function Rusha(a){"use strict";var b={fill:0};var c=function(a){for(a+=9;a%64>0;a+=1);return a};var d=function(a,b){for(var c=b>>2;c<a.length;c++)a[c]=0};var e=function(a,b,c){a[b>>2]|=128<<24-(b%4<<3);a[((b>>2)+2&~15)+14]=c/(1<<29)|0;a[((b>>2)+2&~15)+15]=c<<3};var f=function(a,b,c,d,e){var f=this,g,h=e%4,i=d%4,j=d-i;if(j>0){switch(h){case 0:a[e+3|0]=f.charCodeAt(c);case 1:a[e+2|0]=f.charCodeAt(c+1);case 2:a[e+1|0]=f.charCodeAt(c+2);case 3:a[e|0]=f.charCodeAt(c+3)}}for(g=h;g<j;g=g+4|0){b[e+g>>2]=f.charCodeAt(c+g)<<24|f.charCodeAt(c+g+1)<<16|f.charCodeAt(c+g+2)<<8|f.charCodeAt(c+g+3)}switch(i){case 3:a[e+j+1|0]=f.charCodeAt(c+j+2);case 2:a[e+j+2|0]=f.charCodeAt(c+j+1);case 1:a[e+j+3|0]=f.charCodeAt(c+j)}};var g=function(a,b,c,d,e){var f=this,g,h=e%4,i=d%4,j=d-i;if(j>0){switch(h){case 0:a[e+3|0]=f[c];case 1:a[e+2|0]=f[c+1];case 2:a[e+1|0]=f[c+2];case 3:a[e|0]=f[c+3]}}for(g=4-h;g<j;g=g+=4|0){b[e+g>>2]=f[c+g]<<24|f[c+g+1]<<16|f[c+g+2]<<8|f[c+g+3]}switch(i){case 3:a[e+j+1|0]=f[c+j+2];case 2:a[e+j+2|0]=f[c+j+1];case 1:a[e+j+3|0]=f[c+j]}};var h=function(a,b,c,d,e){var f=this,g,h=e%4,i=d%4,j=d-i;var k=new Uint8Array(reader.readAsArrayBuffer(f.slice(c,c+d)));if(j>0){switch(h){case 0:a[e+3|0]=k[0];case 1:a[e+2|0]=k[1];case 2:a[e+1|0]=k[2];case 3:a[e|0]=k[3]}}for(g=4-h;g<j;g=g+=4|0){b[e+g>>2]=k[g]<<24|k[g+1]<<16|k[g+2]<<8|k[g+3]}switch(i){case 3:a[e+j+1|0]=k[j+2];case 2:a[e+j+2|0]=k[j+1];case 1:a[e+j+3|0]=k[j]}};var i=function(a){switch(util.getDataType(a)){case"string":return f.bind(a);case"array":return g.bind(a);case"buffer":return g.bind(a);case"arraybuffer":return g.bind(new Uint8Array(a));case"view":return g.bind(new Uint8Array(a.buffer,a.byteOffset,a.byteLength));case"blob":return h.bind(a)}};var j=function(a,b){switch(util.getDataType(a)){case"string":return a.slice(b);case"array":return a.slice(b);case"buffer":return a.slice(b);case"arraybuffer":return a.slice(b);case"view":return a.buffer.slice(b)}};var k=new Array(256);for(var l=0;l<256;l++){k[l]=(l<16?"0":"")+l.toString(16)}var m=function(a){var b=new Uint8Array(a);var c=new Array(a.byteLength);for(var d=0;d<c.length;d++){c[d]=k[b[d]]}return c.join("")};var n=function(a){var b;if(a<=65536)return 65536;if(a<16777216){for(b=1;b<a;b=b<<1);}else{for(b=16777216;b<a;b+=16777216);}return b};var o=function(a){if(a%64>0){throw new Error("Chunk size must be a multiple of 128 bit")}b.maxChunkLen=a;b.padMaxChunkLen=c(a);b.heap=new ArrayBuffer(n(b.padMaxChunkLen+320+20));b.h32=new Int32Array(b.heap);b.h8=new Int8Array(b.heap);b.core=new Rusha._core({Int32Array:Int32Array,DataView:DataView},{},b.heap);b.buffer=null};o(a||64*1024);var p=function(a,b){var c=new Int32Array(a,b+320,5);c[0]=1732584193;c[1]=-271733879;c[2]=-1732584194;c[3]=271733878;c[4]=-1009589776};var q=function(a,f){var g=c(a);var h=new Int32Array(b.heap,0,g>>2);d(h,a);e(h,a,f);return g};var r=function(a,c,d){i(a)(b.h8,b.h32,c,d,0)};var s=function(a,c,d,e,f){var g=d;if(f){g=q(d,e)}r(a,c,d);b.core.hash(g,b.padMaxChunkLen)};var t=function(a,b){var c=new Int32Array(a,b+320,5);var d=new Int32Array(5);var e=new DataView(d.buffer);e.setInt32(0,c[0],false);e.setInt32(4,c[1],false);e.setInt32(8,c[2],false);e.setInt32(12,c[3],false);e.setInt32(16,c[4],false);return d};var u=this.rawDigest=function(a){var c=a.byteLength||a.length||a.size||0;p(b.heap,b.padMaxChunkLen);var d=0,e=b.maxChunkLen,f;for(d=0;c>d+e;d+=e){s(a,d,e,c,false)}s(a,d,c-d,c,true);return t(b.heap,b.padMaxChunkLen)};this.digest=this.digestFromString=this.digestFromBuffer=this.digestFromArrayBuffer=function(a){return m(u(a).buffer)}}Rusha._core=function a(b,c,d){"use asm";var e=new b.Int32Array(d);function f(a,b){a=a|0;b=b|0;var c=0,d=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;f=e[b+320>>2]|0;h=e[b+324>>2]|0;j=e[b+328>>2]|0;l=e[b+332>>2]|0;n=e[b+336>>2]|0;for(c=0;(c|0)<(a|0);c=c+64|0){g=f;i=h;k=j;m=l;o=n;for(d=0;(d|0)<64;d=d+4|0){q=e[c+d>>2]|0;p=((f<<5|f>>>27)+(h&j|~h&l)|0)+((q+n|0)+1518500249|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;e[a+d>>2]=q}for(d=a+64|0;(d|0)<(a+80|0);d=d+4|0){q=(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])<<1|(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])>>>31;p=((f<<5|f>>>27)+(h&j|~h&l)|0)+((q+n|0)+1518500249|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;e[d>>2]=q}for(d=a+80|0;(d|0)<(a+160|0);d=d+4|0){q=(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])<<1|(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])>>>31;p=((f<<5|f>>>27)+(h^j^l)|0)+((q+n|0)+1859775393|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;e[d>>2]=q}for(d=a+160|0;(d|0)<(a+240|0);d=d+4|0){q=(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])<<1|(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])>>>31;p=((f<<5|f>>>27)+(h&j|h&l|j&l)|0)+((q+n|0)-1894007588|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;e[d>>2]=q}for(d=a+240|0;(d|0)<(a+320|0);d=d+4|0){q=(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])<<1|(e[d-12>>2]^e[d-32>>2]^e[d-56>>2]^e[d-64>>2])>>>31;p=((f<<5|f>>>27)+(h^j^l)|0)+((q+n|0)-899497514|0)|0;n=l;l=j;j=h<<30|h>>>2;h=f;f=p;e[d>>2]=q}f=f+g|0;h=h+i|0;j=j+k|0;l=l+m|0;n=n+o|0}e[b+320>>2]=f;e[b+324>>2]=h;e[b+328>>2]=j;e[b+332>>2]=l;e[b+336>>2]=n}return{hash:f}};if(typeof module!=="undefined"){module.exports=Rusha}else if(typeof window!=="undefined"){window.Rusha=Rusha}if(typeof FileReaderSync!=="undefined"){var reader=new FileReaderSync,hasher=new Rusha(4*1024*1024);self.onmessage=function a(b){var c,d=b.data.data;try{c=hasher.digest(d);self.postMessage({id:b.data.id,hash:c})}catch(a){self.postMessage({id:b.data.id,error:a.name})}}}
function $httpModule($q) {
    return {
        post: function (url, data) {
            var defer = $q.defer();
            var xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function () {
                var result = {data: xhr.response};
                xhr.status == 200
                    ? defer.resolve(result)
                    : defer.reject(result);
            };
            xhr.onerror = xhr.onabort = function () {
                defer.reject({status: xhr.status});
            };
            xhr.send(data);

            return defer.promise;
        }
    };
}

$httpModule.dependencies = [
    '$q'
];

function $intervalModule() {
    return setInterval;
}

$intervalModule.dependencies = [];

function $qModule($) {
    return {
        defer: function () {
            var deferred = $.Deferred();
            deferred.promise = deferred.promise();
            return deferred;
        },
        when: $.when,
        reject: function (result) {
            return this.defer().reject(result);
        },
        all: function (promises) {
            if (isArray(promises)) {
                return this.when.apply($, promises);
            }

            var p = [];
            var keys = Object.keys(promises);
            
            forEach(keys, function (key) {
                p.push(promises[key]);
            });

            return this.all(p).then(function () {
                var objects = toArray(arguments);
                var result = {};
                
                forEach(keys, function (key, i) {
                    result[key] = objects[i];
                });

                return result;
            });
        }
    };
}

$qModule.dependencies = [
    'jQuery'
];

function $rootScopeModule() {
    return {};
}

$rootScopeModule.dependencies = [];

function $timeoutModule($q) {
    var timeout = function (cb, t) {
        var defer = $q.defer();
        var promise = defer.promise;

        promise.__timeoutID = setTimeout(function () {
            defer.resolve(cb());
        }, t || 0);

        return promise;
    };

    timeout.cancel = function (promise) {
        if (!promise) {
            return;
        }

        clearTimeout(promise.__timeoutID);
    };

    return timeout;
}

$timeoutModule.dependencies = [
    '$q'
];

function AppChatsManagerModule() {
    var chats = {},
        channelAccess = {};

    function saveApiChats(apiChats) {
        forEach(apiChats, saveApiChat);
    }

    function saveApiChat(apiChat) {
        if (!isObject(apiChat)) {
            return;
        }

        apiChat.num = (Math.abs(apiChat.id >> 1) % 8) + 1;

        if (apiChat.pFlags === undefined) {
            apiChat.pFlags = {};
        }

        if (chats[apiChat.id] === undefined) {
            chats[apiChat.id] = apiChat;
        } else {
            safeReplaceObject(chats[apiChat.id], apiChat);
        }
    }

    function getChat(id) {
        return chats[id] || {id: id, deleted: true, access_hash: channelAccess[id]};
    }

    function isChannel(id) {
        var chat = chats[id];

        return chat && (chat._ == 'channel' || chat._ == 'channelForbidden') || channelAccess[id];
    }

    function getChatInput(id) {
        return id || 0;
    }

    function getChannelInput(id) {
        if (!id) {
            return {_: 'inputChannelEmpty'};
        }
        return {
            _: 'inputChannel',
            channel_id: id,
            access_hash: getChat(id).access_hash || channelAccess[id] || 0
        }
    }

    return {
        saveApiChats: saveApiChats,
        saveApiChat: saveApiChat,
        getChat: getChat,
        isChannel: isChannel,
        getChatInput: getChatInput,
        getChannelInput: getChannelInput
    };
}

AppChatsManagerModule.dependencies = [];

function AppPeersManagerModule(AppChatsManager, AppUsersManager) {
    function getInputPeerByID(peerID) {
        if (!peerID) {
            return {_: 'inputPeerEmpty'};
        }
        if (peerID < 0) {
            var chatID = -peerID;
            if (!AppChatsManager.isChannel(chatID)) {
                return {
                    _: 'inputPeerChat',
                    chat_id: chatID
                };
            } else {
                return {
                    _: 'inputPeerChannel',
                    channel_id: chatID,
                    access_hash: AppChatsManager.getChat(chatID).access_hash || 0
                }
            }
        }
        return {
            _: 'inputPeerUser',
            user_id: peerID,
            access_hash: AppUsersManager.getUser(peerID).access_hash || 0
        };
    }

    function getPeerID(peerString) {
        if (isObject(peerString)) {
            return peerString.user_id
                ? peerString.user_id
                : -(peerString.channel_id || peerString.chat_id);
        }
        var isUser = peerString.charAt(0) == 'u',
            peerParams = peerString.substr(1).split('_');

        return isUser ? peerParams[0] : -peerParams[0] || 0;
    }

    function getPeer(peerID) {
        return peerID > 0
            ? AppUsersManager.getUser(peerID)
            : AppChatsManager.getChat(-peerID);
    }

    function isChannel(peerID) {
        return (peerID < 0) && AppChatsManager.isChannel(-peerID);
    }

    return {
        getInputPeerByID: getInputPeerByID,
        getPeerID: getPeerID,
        getPeer: getPeer,
        isChannel: isChannel
    };
}

AppPeersManagerModule.dependencies = [
    'AppChatsManager', 
    'AppUsersManager'
];

function AppProfileManagerModule(AppChatsManager, AppUsersManager, MtpApiManager, $q) {
    var chatsFull = {};
    var chatFullPromises = {};

    function getChatFull(id) {
        if (AppChatsManager.isChannel(id)) {
            return getChannelFull(id);
        }
        if (chatsFull[id] !== undefined) {
            var chat = AppChatsManager.getChat(id);
            if (chat.version == chatsFull[id].participants.version ||
                chat.pFlags.left) {
                return $q.when(chatsFull[id]);
            }
        }
        if (chatFullPromises[id] !== undefined) {
            return chatFullPromises[id];
        }
        console.trace(dT(), 'Get chat full', id, AppChatsManager.getChat(id));
        return chatFullPromises[id] = MtpApiManager.invokeApi('messages.getFullChat', {
            chat_id: AppChatsManager.getChatInput(id)
        }).then(function (result) {
            AppChatsManager.saveApiChats(result.chats);
            AppUsersManager.saveApiUsers(result.users);
            var fullChat = result.full_chat;
            delete chatFullPromises[id];
            chatsFull[id] = fullChat;

            return fullChat;
        });
    }

    function getChatInviteLink(id, force) {
        return getChatFull(id).then(function (chatFull) {
            if (!force &&
                chatFull.exported_invite &&
                chatFull.exported_invite._ == 'chatInviteExported') {
                return chatFull.exported_invite.link;
            }
            var promise;
            if (AppChatsManager.isChannel(id)) {
                promise = MtpApiManager.invokeApi('channels.exportInvite', {
                    channel: AppChatsManager.getChannelInput(id)
                });
            } else {
                promise = MtpApiManager.invokeApi('messages.exportChatInvite', {
                    chat_id: AppChatsManager.getChatInput(id)
                });
            }
            return promise.then(function (exportedInvite) {
                if (chatsFull[id] !== undefined) {
                    chatsFull[id].exported_invite = exportedInvite;
                }
                return exportedInvite.link;
            });
        });
    }

    function getChannelParticipants(id) {
        return MtpApiManager.invokeApi('channels.getParticipants', {
            channel: AppChatsManager.getChannelInput(id),
            filter: {_: 'channelParticipantsRecent'},
            offset: 0,
            limit: 200
        }).then(function (result) {
            AppUsersManager.saveApiUsers(result.users);
            var participants = result.participants;

            var chat = AppChatsManager.getChat(id);
            if (!chat.pFlags.kicked && !chat.pFlags.left) {
                var myID = AppUsersManager.getSelf().id;
                var myIndex = false;
                var myParticipant;
                for (var i = 0, len = participants.length; i < len; i++) {
                    if (participants[i].user_id == myID) {
                        myIndex = i;
                        break;
                    }
                }
                if (myIndex !== false) {
                    myParticipant = participants[i];
                    participants.splice(i, 1);
                } else {
                    myParticipant = {_: 'channelParticipantSelf', user_id: myID};
                }
                participants.unshift(myParticipant);
            }

            return participants;
        });
    }

    function getChannelFull(id, force) {
        if (chatsFull[id] !== undefined && !force) {
            return $q.when(chatsFull[id]);
        }
        if (chatFullPromises[id] !== undefined) {
            return chatFullPromises[id];
        }

        return chatFullPromises[id] = MtpApiManager.invokeApi('channels.getFullChannel', {
            channel: AppChatsManager.getChannelInput(id)
        }).then(function (result) {
            AppChatsManager.saveApiChats(result.chats);
            AppUsersManager.saveApiUsers(result.users);
            var fullChannel = result.full_chat;
            var chat = AppChatsManager.getChat(id);
            var participantsPromise;
            if (fullChannel.flags & 8) {
                participantsPromise = getChannelParticipants(id).then(function (participants) {
                    delete chatFullPromises[id];
                    fullChannel.participants = {
                        _: 'channelParticipants',
                        participants: participants
                    };
                }, function (error) {
                    error.handled = true;
                });
            } else {
                participantsPromise = $q.when();
            }
            return participantsPromise.then(function () {
                delete chatFullPromises[id];
                chatsFull[id] = fullChannel;

                return fullChannel;
            });
        }, function (error) {
            return $q.reject(error);
        });
    }

    return {
        getChatInviteLink: getChatInviteLink
    };
}

AppProfileManagerModule.dependencies = [
    'AppChatsManager',
    'AppUsersManager',
    'MtpApiManager',
    '$q'
];

function AppUsersManagerModule(Storage, MtpApiManager) {
    var users = {},
        userAccess = {},
        myID,
        serverTimeOffset = 0;

    Storage.get('server_time_offset').then(function (to) {
        if (to) {
            serverTimeOffset = to;
        }
    });

    MtpApiManager.getUserID().then(function (id) {
        myID = id;
    });

    function saveApiUsers(apiUsers) {
        forEach(apiUsers, saveApiUser);
    }

    function saveApiUser(apiUser, noReplace) {
        if (!isObject(apiUser) || noReplace && isObject(users[apiUser.id]) && users[apiUser.id].first_name) {
            return;
        }

        var userID = apiUser.id;

        apiUser.num = (Math.abs(userID) % 8) + 1;

        if (apiUser.pFlags === undefined) {
            apiUser.pFlags = {};
        }

        if (apiUser.status) {
            if (apiUser.status.expires) {
                apiUser.status.expires -= serverTimeOffset;
            }
            if (apiUser.status.was_online) {
                apiUser.status.was_online -= serverTimeOffset;
            }
        }
        if (apiUser.pFlags.bot) {
            apiUser.sortStatus = -1;
        } else {
            apiUser.sortStatus = getUserStatusForSort(apiUser.status);
        }

        var result = users[userID];

        if (result === undefined) {
            result = users[userID] = apiUser;
        } else {
            safeReplaceObject(result, apiUser);
        }
    }

    function getUserStatusForSort(status) {
        if (status) {
            var expires = status.expires || status.was_online;
            if (expires) {
                return expires;
            }
            var timeNow = tsNow(true);
            switch (status._) {
                case 'userStatusRecently':
                    return timeNow - 86400 * 3;
                case 'userStatusLastWeek':
                    return timeNow - 86400 * 7;
                case 'userStatusLastMonth':
                    return timeNow - 86400 * 30;
            }
        }

        return 0;
    }

    function getUser(id) {
        if (isObject(id)) {
            return id;
        }
        return users[id] || {id: id, deleted: true, num: 1, access_hash: userAccess[id]};
    }

    function getSelf() {
        return getUser(myID);
    }

    function getUserInput(id) {
        var user = getUser(id);
        if (user.pFlags.self) {
            return {_: 'inputUserSelf'};
        }
        return {
            _: 'inputUser',
            user_id: id,
            access_hash: user.access_hash || 0
        };
    }

    return {
        saveApiUsers: saveApiUsers,
        saveApiUser: saveApiUser,
        getUser: getUser,
        getSelf: getSelf,
        getUserInput: getUserInput
    };
}

AppUsersManagerModule.dependencies = [
    'Storage', 
    'MtpApiManager'
];

function CryptoWorkerModule($timeout) {
    return {
        sha1Hash: function (bytes) {
            return $timeout(function () {
                return sha1HashSync(bytes);
            });
        },
        sha256Hash: function (bytes) {
            return $timeout(function () {
                return sha256HashSync(bytes);
            });
        },
        aesEncrypt: function (bytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesEncryptSync(bytes, keyBytes, ivBytes));
            });
        },
        aesDecrypt: function (encryptedBytes, keyBytes, ivBytes) {
            return $timeout(function () {
                return convertToArrayBuffer(aesDecryptSync(encryptedBytes, keyBytes, ivBytes));
            });
        },
        factorize: function (bytes) {
            bytes = convertToByteArray(bytes);

            return $timeout(function () {
                return pqPrimeFactorization(bytes);
            });
        },
        modPow: function (x, y, m) {
            return $timeout(function () {
                return bytesModPow(x, y, m);
            });
        }
    };
}

CryptoWorkerModule.dependencies = [
    '$timeout'
];

function FileSaverModule($timeout) {
    function save(bytes, fileName) {
        // TODO: Improve
        var a = document.createElement('a');
        var blob = new Blob(bytes, {type: 'octet/stream'});

        if (window.navigator && window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(blob, fileName);
            return;
        }

        document.body.appendChild(a);

        a.style = 'display: none';
        a.href = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.click();

        $timeout(function() {
            window.URL.revokeObjectURL(a.href);
            a.remove();
        }, 100);
    }

    return {
        save: save
    };
}

FileSaverModule.dependencies = [
    '$timeout'
];

function forEach(obj, iterator, context) {
    if (!obj) {
        return;
    }

    if (isArray(obj)) {
        if (obj.forEach) {
            obj.forEach(iterator, context, obj);
        } else {
            for (var i = 0; i < obj.length; i++) {
                iterator.call(context, obj[i], i, obj);
            }
        }
    } else if (isObject(obj)) {
        for (var key in obj) {
            iterator.call(context, obj[key], key, obj);
        }
    }
}

function isObject(value) {
    return value !== null && typeof value === 'object';
}

function isString(value) {
    return typeof value == 'string';
}

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value == 'function';
}

function extend() {
    var objects = toArray(arguments);
    var obj = objects[0];

    for (var i = 1; i < objects.length; i++) {
        for (var key in objects[i]) {
            obj[key] = objects[i][key];
        }
    }

    return obj;
}

function map(array, iterator) {
    var result = [];

    forEach(array, function (obj) {
        result.push(iterator(obj));
    });

    return result;
}

function min(array) {
    var min = array[0];

    forEach(array, function (obj) {
        if (obj < min) {
            min = obj;
        }
    });

    return min;
}
function toArray(obj) {
    return Array.prototype.slice.call(obj);
}

function noop() {

}

function IdleManagerModule($rootScope, $timeout, $) {
    $rootScope.idle = {isIDLE: false};

    var toPromise, started = false;
    var hidden = 'hidden';
    var visibilityChange = 'visibilitychange';

    if (typeof document.hidden !== 'undefined') {
        // default
    } else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
    }

    return {
        start: start
    };

    function start() {
        if (!started) {
            started = true;
            $(window).on(visibilityChange + ' blur focus keydown mousedown touchstart', onEvent);

            setTimeout(function () {
                onEvent({type: 'blur'});
            }, 0);
        }
    }

    function onEvent(e) {
        // console.log('event', e.type);
        if (e.type == 'mousemove') {
            var e = e.originalEvent || e;
            if (e && e.movementX === 0 && e.movementY === 0) {
                return;
            }
            $(window).off('mousemove', onEvent);
        }

        var isIDLE = e.type == 'blur' || e.type == 'timeout' ? true : false;
        if (hidden && document[hidden]) {
            isIDLE = true;
        }

        $timeout.cancel(toPromise);
        if (!isIDLE) {
            // console.log('update timeout');
            toPromise = $timeout(function () {
                onEvent({type: 'timeout'});
            }, 30000);
        }

        if (isIDLE && e.type == 'timeout') {
            $(window).on('mousemove', onEvent);
        }
    }
}

IdleManagerModule.dependencies = [
    '$rootScope', 
    '$timeout',
    'jQuery'
];

function jQueryModule() {
    /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
    !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

    if (typeof window.jQuery == 'undefined') {
        throw new Error('TelegramApi requires jQuery');
    }

    return window.jQuery;
}

jQueryModule.dependencies = [];

function qSyncModule() {
    return {
        when: function (result) {
            return {
                then: function (cb) {
                    return cb(result);
                }
            };
        },
        reject: function (result) {
            return {
                then: function (cb, badcb) {
                    if (badcb) {
                        return badcb(result);
                    }
                }
            };
        }
    };
}

qSyncModule.dependencies = [];

function StorageModule($q) {
    var methods = {};

    forEach(['get', 'set', 'remove'], function (methodName) {
        methods[methodName] = function () {
            var deferred = $q.defer(),
                args = toArray(arguments);

            args.push(function (result) {
                deferred.resolve(result);
            });

            ConfigStorage[methodName].apply(ConfigStorage, args);

            return deferred.promise;
        };
    });

    return methods;
}

StorageModule.dependencies = [
    '$q'
];

function TelegramMeWebServiceModule(Storage, $) {
    var disabled = location.protocol != 'http:' && location.protocol != 'https:';

    function sendAsyncRequest(canRedirect) {
        if (disabled) {
            return false;
        }

        Storage.get('tgme_sync').then(function (curValue) {
            var ts = tsNow(true);
            if (canRedirect &&
                curValue &&
                curValue.canRedirect == canRedirect &&
                curValue.ts + 86400 > ts) {
                return false;
            }
            Storage.set({tgme_sync: {canRedirect: canRedirect, ts: ts}});

            var script = $('<script>').appendTo('body')
                .on('load error', function () {
                    script.remove();
                })
                .attr('src', '//telegram.me/_websync_?authed=' + (canRedirect ? '1' : '0'));
        });
    }

    return {
        setAuthorized: sendAsyncRequest
    };
}

TelegramMeWebServiceModule.dependencies = [
    'Storage',
    'jQuery'
];

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

function bigint (num) {
  return new BigInteger(num.toString(16), 16);
}

function bigStringInt (strNum) {
  return new BigInteger(strNum, 10);
}

function bytesToHex (bytes) {
  bytes = bytes || [];
  var arr = [];
  for (var i = 0; i < bytes.length; i++) {
    arr.push((bytes[i] < 16 ? '0' : '') + (bytes[i] || 0).toString(16));
  }
  return arr.join('');
}

function bytesFromHex (hexString) {
  var len = hexString.length,
      i,
      start = 0,
      bytes = [];

  if (hexString.length % 2) {
    bytes.push(parseInt(hexString.charAt(0), 16));
    start++;
  }

  for (i = start; i < len; i += 2) {
    bytes.push(parseInt(hexString.substr(i, 2), 16));
  }

  return bytes;
}

function bytesCmp (bytes1, bytes2) {
  var len = bytes1.length;
  if (len != bytes2.length) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (bytes1[i] != bytes2[i]) {
      return false;
    }
  }
  return true;
}

function bytesXor (bytes1, bytes2) {
  var len = bytes1.length,
      bytes = [];

  for (var i = 0; i < len; ++i) {
      bytes[i] = bytes1[i] ^ bytes2[i];
  }

  return bytes;
}

function bytesToWords (bytes) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var len = bytes.length,
      words = [], i;
  for (i = 0; i < len; i++) {
    words[i >>> 2] |= bytes[i] << (24 - (i % 4) * 8);
  }

  return new CryptoJS.lib.WordArray.init(words, len);
}

function bytesFromWords (wordArray) {
  var words = wordArray.words,
      sigBytes = wordArray.sigBytes,
      bytes = [];

  for (var i = 0; i < sigBytes; i++) {
    bytes.push((words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff);
  }

  return bytes;
}

function bytesFromBigInt (bigInt, len) {
  var bytes = bigInt.toByteArray();

  if (len && bytes.length < len) {
    var padding = [];
    for (var i = 0, needPadding = len - bytes.length; i < needPadding; i++) {
      padding[i] = 0;
    }
    if (bytes instanceof ArrayBuffer) {
      bytes = bufferConcat(padding, bytes);
    } else {
      bytes = padding.concat(bytes);
    }
  }
  else {
    while (!bytes[0] && (!len || bytes.length > len)) {
      bytes = bytes.slice(1);
    }
  }

  return bytes;
}

function bytesFromLeemonBigInt (bigInt, len) {
  var str = bigInt2str(bigInt, 16);
  return bytesFromHex(str);
}


function bytesToArrayBuffer (b) {
  return (new Uint8Array(b)).buffer;
}

function convertToArrayBuffer(bytes) {
  // Be careful with converting subarrays!!
  if (bytes instanceof ArrayBuffer) {
    return bytes;
  }
  if (bytes.buffer !== undefined &&
      bytes.buffer.byteLength == bytes.length * bytes.BYTES_PER_ELEMENT) {
    return bytes.buffer;
  }
  return bytesToArrayBuffer(bytes);
}

function convertToUint8Array(bytes) {
  if (bytes.buffer !== undefined) {
    return bytes;
  }
  return new Uint8Array(bytes);
}

function convertToByteArray(bytes) {
  if (Array.isArray(bytes)) {
    return bytes;
  }
  bytes = convertToUint8Array(bytes);
  var newBytes = [];
  for (var i = 0, len = bytes.length; i < len; i++) {
    newBytes.push(bytes[i]);
  }
  return newBytes;
}

function bytesFromArrayBuffer (buffer) {
  var len = buffer.byteLength,
      byteView = new Uint8Array(buffer),
      bytes = [];

  for (var i = 0; i < len; ++i) {
    bytes[i] = byteView[i];
  }

  return bytes;
}

function bufferConcat(buffer1, buffer2) {
  var l1 = buffer1.byteLength || buffer1.length,
      l2 = buffer2.byteLength || buffer2.length;
  var tmp = new Uint8Array(l1 + l2);
  tmp.set(buffer1 instanceof ArrayBuffer ? new Uint8Array(buffer1) : buffer1, 0);
  tmp.set(buffer2 instanceof ArrayBuffer ? new Uint8Array(buffer2) : buffer2, l1);

  return tmp.buffer;
}

function longToInts (sLong) {
  var divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000));

  return [divRem[0].intValue(), divRem[1].intValue()];
}

function longToBytes (sLong) {
  return bytesFromWords({words: longToInts(sLong), sigBytes: 8}).reverse();
}

function longFromInts (high, low) {
  return bigint(high).shiftLeft(32).add(bigint(low)).toString(10);
}

function intToUint (val) {
  val = parseInt(val);
  if (val < 0) {
    val = val + 4294967296;
  }
  return val;
}

function uintToInt (val) {
  if (val > 2147483647) {
    val = val - 4294967296;
  }
  return val;
}

function sha1HashSync (bytes) {
  this.rushaInstance = this.rushaInstance || new Rusha(1024 * 1024);
  return rushaInstance.rawDigest(bytes).buffer;
}

function sha1BytesSync (bytes) {
  return bytesFromArrayBuffer(sha1HashSync(bytes));
}

function sha256HashSync (bytes) {
  // console.log(dT(), 'SHA-2 hash start', bytes.byteLength || bytes.length);
  var hashWords = CryptoJS.SHA256(bytesToWords(bytes));
  // console.log(dT(), 'SHA-2 hash finish');

  return bytesFromWords(hashWords);
}

function rsaEncrypt (publicKey, bytes) {
  bytes = addPadding(bytes, 255);

  // console.log('RSA encrypt start');
  var N = new BigInteger(publicKey.modulus, 16),
      E = new BigInteger(publicKey.exponent, 16),
      X = new BigInteger(bytes),
      encryptedBigInt = X.modPowInt(E, N),
      encryptedBytes  = bytesFromBigInt(encryptedBigInt, 256);
  // console.log('RSA encrypt finish');

  return encryptedBytes;
}

function addPadding(bytes, blockSize, zeroes) {
  blockSize = blockSize || 16;
  var len = bytes.byteLength || bytes.length;
  var needPadding = blockSize - (len % blockSize);
  if (needPadding > 0 && needPadding < blockSize) {
    var padding = new Array(needPadding);
    if (zeroes) {
      for (var i = 0; i < needPadding; i++) {
        padding[i] = 0
      }
    } else {
      (new SecureRandom()).nextBytes(padding);
    }

    if (bytes instanceof ArrayBuffer) {
      bytes = bufferConcat(bytes, padding);
    } else {
      bytes = bytes.concat(padding);
    }
  }

  return bytes;
}

function aesEncryptSync (bytes, keyBytes, ivBytes) {
  var len = bytes.byteLength || bytes.length;

  // console.log(dT(), 'AES encrypt start', len/*, bytesToHex(keyBytes), bytesToHex(ivBytes)*/);
  bytes = addPadding(bytes);

  var encryptedWords = CryptoJS.AES.encrypt(bytesToWords(bytes), bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  }).ciphertext;

  var encryptedBytes = bytesFromWords(encryptedWords);
  // console.log(dT(), 'AES encrypt finish');

  return encryptedBytes;
}

function aesDecryptSync (encryptedBytes, keyBytes, ivBytes) {

  // console.log(dT(), 'AES decrypt start', encryptedBytes.length);
  var decryptedWords = CryptoJS.AES.decrypt({ciphertext: bytesToWords(encryptedBytes)}, bytesToWords(keyBytes), {
    iv: bytesToWords(ivBytes),
    padding: CryptoJS.pad.NoPadding,
    mode: CryptoJS.mode.IGE
  });

  var bytes = bytesFromWords(decryptedWords);
  // console.log(dT(), 'AES decrypt finish');

  return bytes;
}

function gzipUncompress (bytes) {
  return (new Zlib.Gunzip(bytes)).decompress();
}

function nextRandomInt (maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function pqPrimeFactorization (pqBytes) {
  var what = new BigInteger(pqBytes),
      result = false;

  // console.log(dT(), 'PQ start', pqBytes, what.toString(16), what.bitLength());

  try {
    result = pqPrimeLeemon(str2bigInt(what.toString(16), 16, Math.ceil(64 / bpe) + 1))
  } catch (e) {
    console.error('Pq leemon Exception', e);
  }

  if (result === false && what.bitLength() <= 64) {
    // console.time('PQ long');
    try {
      result = pqPrimeLong(goog.math.Long.fromString(what.toString(16), 16));
    } catch (e) {
      console.error('Pq long Exception', e);
    }
    // console.timeEnd('PQ long');
  }
  // console.log(result);

  if (result === false) {
    // console.time('pq BigInt');
    result = pqPrimeBigInteger(what);
    // console.timeEnd('pq BigInt');
  }

  // console.log(dT(), 'PQ finish');

  return result;
}

function pqPrimeBigInteger (what) {
  var it = 0,
      g;
  for (var i = 0; i < 3; i++) {
    var q = (nextRandomInt(128) & 15) + 17,
        x = bigint(nextRandomInt(1000000000) + 1),
        y = x.clone(),
        lim = 1 << (i + 18);

    for (var j = 1; j < lim; j++) {
      ++it;
      var a = x.clone(),
          b = x.clone(),
          c = bigint(q);

      while (!b.equals(BigInteger.ZERO)) {
        if (!b.and(BigInteger.ONE).equals(BigInteger.ZERO)) {
          c = c.add(a);
          if (c.compareTo(what) > 0) {
            c = c.subtract(what);
          }
        }
        a = a.add(a);
        if (a.compareTo(what) > 0) {
          a = a.subtract(what);
        }
        b = b.shiftRight(1);
      }

      x = c.clone();
      var z = x.compareTo(y) < 0 ? y.subtract(x) : x.subtract(y);
      g = z.gcd(what);
      if (!g.equals(BigInteger.ONE)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        y = x.clone();
      }
    }
    if (g.compareTo(BigInteger.ONE) > 0) {
      break;
    }
  }

  var f = what.divide(g), P, Q;

  if (g.compareTo(f) > 0) {
    P = f;
    Q = g;
  } else {
    P = g;
    Q = f;
  }

  return [bytesFromBigInt(P), bytesFromBigInt(Q), it];
}

function gcdLong(a, b) {
  while (a.notEquals(goog.math.Long.ZERO) && b.notEquals(goog.math.Long.ZERO)) {
    while (b.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      b = b.shiftRight(1);
    }
    while (a.and(goog.math.Long.ONE).equals(goog.math.Long.ZERO)) {
      a = a.shiftRight(1);
    }
    if (a.compare(b) > 0) {
      a = a.subtract(b);
    } else {
      b = b.subtract(a);
    }
  }
  return b.equals(goog.math.Long.ZERO) ? a : b;
}

function pqPrimeLong(what) {
  var it = 0,
      g;
  for (var i = 0; i < 3; i++) {
    var q = goog.math.Long.fromInt((nextRandomInt(128) & 15) + 17),
        x = goog.math.Long.fromInt(nextRandomInt(1000000000) + 1),
        y = x,
        lim = 1 << (i + 18);

    for (var j = 1; j < lim; j++) {
      ++it;
      var a = x,
          b = x,
          c = q;

      while (b.notEquals(goog.math.Long.ZERO)) {
        if (b.and(goog.math.Long.ONE).notEquals(goog.math.Long.ZERO)) {
          c = c.add(a);
          if (c.compare(what) > 0) {
            c = c.subtract(what);
          }
        }
        a = a.add(a);
        if (a.compare(what) > 0) {
          a = a.subtract(what);
        }
        b = b.shiftRight(1);
      }

      x = c;
      var z = x.compare(y) < 0 ? y.subtract(x) : x.subtract(y);
      g = gcdLong(z, what);
      if (g.notEquals(goog.math.Long.ONE)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        y = x;
      }
    }
    if (g.compare(goog.math.Long.ONE) > 0) {
      break;
    }
  }

  var f = what.div(g), P, Q;

  if (g.compare(f) > 0) {
    P = f;
    Q = g;
  } else {
    P = g;
    Q = f;
  }

  return [bytesFromHex(P.toString(16)), bytesFromHex(Q.toString(16)), it];
}


function pqPrimeLeemon (what) {
  var minBits = 64,
      minLen = Math.ceil(minBits / bpe) + 1,
      it = 0, i, q, j, lim, g, P, Q,
      a = new Array(minLen),
      b = new Array(minLen),
      c = new Array(minLen),
      g = new Array(minLen),
      z = new Array(minLen),
      x = new Array(minLen),
      y = new Array(minLen);

  for (i = 0; i < 3; i++) {
    q = (nextRandomInt(128) & 15) + 17;
    copyInt_(x, nextRandomInt(1000000000) + 1);
    copy_(y, x);
    lim = 1 << (i + 18);

    for (j = 1; j < lim; j++) {
      ++it;
      copy_(a, x);
      copy_(b, x);
      copyInt_(c, q);

      while (!isZero(b)) {
        if (b[0] & 1) {
          add_(c, a);
          if (greater(c, what)) {
            sub_(c, what);
          }
        }
        add_(a, a);
        if (greater(a, what)) {
          sub_(a, what);
        }
        rightShift_(b, 1);
      }

      copy_(x, c);
      if (greater(x,y)) {
        copy_(z, x);
        sub_(z, y);
      } else {
        copy_(z, y);
        sub_(z, x);
      }
      eGCD_(z, what, g, a, b);
      if (!equalsInt(g, 1)) {
        break;
      }
      if ((j & (j - 1)) == 0) {
        copy_(y, x);
      }
    }
    if (greater(g, one)) {
      break;
    }
  }

  divide_(what, g, x, y);

  if (greater(g, x)) {
    P = x;
    Q = g;
  } else {
    P = g;
    Q = x;
  }

  // console.log(dT(), 'done', bigInt2str(what, 10), bigInt2str(P, 10), bigInt2str(Q, 10));

  return [bytesFromLeemonBigInt(P), bytesFromLeemonBigInt(Q), it];
}


function bytesModPow (x, y, m) {
  try {
    var xBigInt = str2bigInt(bytesToHex(x), 16),
        yBigInt = str2bigInt(bytesToHex(y), 16),
        mBigInt = str2bigInt(bytesToHex(m), 16),
        resBigInt = powMod(xBigInt, yBigInt, mBigInt);

    return bytesFromHex(bigInt2str(resBigInt, 16));
  } catch (e) {
    console.error('mod pow error', e);
  }

  return bytesFromBigInt(new BigInteger(x).modPow(new BigInteger(y), new BigInteger(m)), 256);
}

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */


Config = window.Config || {};

/*

  IMPORTANT NOTICE
  ================

  Do not publish your Webogram fork with my app credentials (below), or your application may be blocked.
  You can get your own api_id, api_hash at https://my.telegram.org, see manual at https://core.telegram.org/api/obtaining_api_id.

*/

Config.App = {
  version: '0.0.0'
};

Config.Server = {};

Config.Modes = {
  debug: location.search.indexOf('debug=1') > 0,
  test: location.search.indexOf('test=1') > 0
};

Config.Navigator = {
  mobile: screen.width && screen.width < 480 || navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i) != -1
};

Config.Schema = Config.Schema || {};

Config.Schema.MTProto = {"constructors":[{"id":"481674261","predicate":"vector","params":[],"type":"Vector t"},{"id":"85337187","predicate":"resPQ","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"pq","type":"bytes"},{"name":"server_public_key_fingerprints","type":"Vector<long>"}],"type":"ResPQ"},{"id":"-2083955988","predicate":"p_q_inner_data","params":[{"name":"pq","type":"bytes"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce","type":"int256"}],"type":"P_Q_inner_data"},{"id":"-1443537003","predicate":"p_q_inner_data_dc","params":[{"name":"pq","type":"bytes"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce","type":"int256"},{"name":"dc","type":"int"}],"type":"P_Q_inner_data"},{"id":"1013613780","predicate":"p_q_inner_data_temp","params":[{"name":"pq","type":"bytes"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce","type":"int256"},{"name":"expires_in","type":"int"}],"type":"P_Q_inner_data"},{"id":"1459478408","predicate":"p_q_inner_data_temp_dc","params":[{"name":"pq","type":"bytes"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce","type":"int256"},{"name":"dc","type":"int"},{"name":"expires_in","type":"int"}],"type":"P_Q_inner_d"},{"id":"2043348061","predicate":"server_DH_params_fail","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash","type":"int128"}],"type":"Server_DH_Params"},{"id":"-790100132","predicate":"server_DH_params_ok","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"encrypted_answer","type":"bytes"}],"type":"Server_DH_Params"},{"id":"-1249309254","predicate":"server_DH_inner_data","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"g","type":"int"},{"name":"dh_prime","type":"bytes"},{"name":"g_a","type":"bytes"},{"name":"server_time","type":"int"}],"type":"Server_DH_inner_data"},{"id":"1715713620","predicate":"client_DH_inner_data","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"retry_id","type":"long"},{"name":"g_b","type":"bytes"}],"type":"Client_DH_Inner_Data"},{"id":"1003222836","predicate":"dh_gen_ok","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash1","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"1188831161","predicate":"dh_gen_retry","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash2","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"-1499615742","predicate":"dh_gen_fail","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"new_nonce_hash3","type":"int128"}],"type":"Set_client_DH_params_answer"},{"id":"-212046591","predicate":"rpc_result","params":[{"name":"req_msg_id","type":"long"},{"name":"result","type":"Object"}],"type":"RpcResult"},{"id":"558156313","predicate":"rpc_error","params":[{"name":"error_code","type":"int"},{"name":"error_message","type":"string"}],"type":"RpcError"},{"id":"1579864942","predicate":"rpc_answer_unknown","params":[],"type":"RpcDropAnswer"},{"id":"-847714938","predicate":"rpc_answer_dropped_running","params":[],"type":"RpcDropAnswer"},{"id":"-1539647305","predicate":"rpc_answer_dropped","params":[{"name":"msg_id","type":"long"},{"name":"seq_no","type":"int"},{"name":"bytes","type":"int"}],"type":"RpcDropAnswer"},{"id":"155834844","predicate":"future_salt","params":[{"name":"valid_since","type":"int"},{"name":"valid_until","type":"int"},{"name":"salt","type":"long"}],"type":"FutureSalt"},{"id":"-1370486635","predicate":"future_salts","params":[{"name":"req_msg_id","type":"long"},{"name":"now","type":"int"},{"name":"salts","type":"vector<future_salt>"}],"type":"FutureSalts"},{"id":"880243653","predicate":"pong","params":[{"name":"msg_id","type":"long"},{"name":"ping_id","type":"long"}],"type":"Pong"},{"id":"-1631450872","predicate":"new_session_created","params":[{"name":"first_msg_id","type":"long"},{"name":"unique_id","type":"long"},{"name":"server_salt","type":"long"}],"type":"NewSession"},{"id":"1945237724","predicate":"msg_container","params":[{"name":"messages","type":"vector<%Message>"}],"type":"MessageContainer"},{"id":"1538843921","predicate":"message","params":[{"name":"msg_id","type":"long"},{"name":"seqno","type":"int"},{"name":"bytes","type":"int"},{"name":"body","type":"Object"}],"type":"Message"},{"id":"-530561358","predicate":"msg_copy","params":[{"name":"orig_message","type":"Message"}],"type":"MessageCopy"},{"id":"812830625","predicate":"gzip_packed","params":[{"name":"packed_data","type":"bytes"}],"type":"Object"},{"id":"1658238041","predicate":"msgs_ack","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgsAck"},{"id":"-1477445615","predicate":"bad_msg_notification","params":[{"name":"bad_msg_id","type":"long"},{"name":"bad_msg_seqno","type":"int"},{"name":"error_code","type":"int"}],"type":"BadMsgNotification"},{"id":"-307542917","predicate":"bad_server_salt","params":[{"name":"bad_msg_id","type":"long"},{"name":"bad_msg_seqno","type":"int"},{"name":"error_code","type":"int"},{"name":"new_server_salt","type":"long"}],"type":"BadMsgNotification"},{"id":"2105940488","predicate":"msg_resend_req","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgResendReq"},{"id":"-2045723925","predicate":"msg_resend_ans_req","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgResendReq"},{"id":"-630588590","predicate":"msgs_state_req","params":[{"name":"msg_ids","type":"Vector<long>"}],"type":"MsgsStateReq"},{"id":"81704317","predicate":"msgs_state_info","params":[{"name":"req_msg_id","type":"long"},{"name":"info","type":"bytes"}],"type":"MsgsStateInfo"},{"id":"-1933520591","predicate":"msgs_all_info","params":[{"name":"msg_ids","type":"Vector<long>"},{"name":"info","type":"bytes"}],"type":"MsgsAllInfo"},{"id":"661470918","predicate":"msg_detailed_info","params":[{"name":"msg_id","type":"long"},{"name":"answer_msg_id","type":"long"},{"name":"bytes","type":"int"},{"name":"status","type":"int"}],"type":"MsgDetailedInfo"},{"id":"-2137147681","predicate":"msg_new_detailed_info","params":[{"name":"answer_msg_id","type":"long"},{"name":"bytes","type":"int"},{"name":"status","type":"int"}],"type":"MsgDetailedInfo"},{"id":"1973679973","predicate":"bind_auth_key_inner","params":[{"name":"nonce","type":"long"},{"name":"temp_auth_key_id","type":"long"},{"name":"perm_auth_key_id","type":"long"},{"name":"temp_session_id","type":"long"},{"name":"expires_at","type":"int"}],"type":"BindAuthKeyInner"},{"id":"-161422892","predicate":"destroy_auth_key_ok","params":[],"type":"DestroyAuthKeyRes"},{"id":"178201177","predicate":"destroy_auth_key_none","params":[],"type":"DestroyAuthKeyRes"},{"id":"-368010477","predicate":"destroy_auth_key_fail","params":[],"type":"DestroyAuthKeyRes"},{"id":"-501201412","predicate":"destroy_session_ok","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"},{"id":"1658015945","predicate":"destroy_session_none","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"}],"methods":[{"id":"1615239032","method":"req_pq","params":[{"name":"nonce","type":"int128"}],"type":"ResPQ"},{"id":"-1099002127","method":"req_pq_multi","params":[{"name":"nonce","type":"int128"}],"type":"ResPQ"},{"id":"-686627650","method":"req_DH_params","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"p","type":"bytes"},{"name":"q","type":"bytes"},{"name":"public_key_fingerprint","type":"long"},{"name":"encrypted_data","type":"bytes"}],"type":"Server_DH_Params"},{"id":"-184262881","method":"set_client_DH_params","params":[{"name":"nonce","type":"int128"},{"name":"server_nonce","type":"int128"},{"name":"encrypted_data","type":"bytes"}],"type":"Set_client_DH_params_answer"},{"id":"1491380032","method":"rpc_drop_answer","params":[{"name":"req_msg_id","type":"long"}],"type":"RpcDropAnswer"},{"id":"-1188971260","method":"get_future_salts","params":[{"name":"num","type":"int"}],"type":"FutureSalts"},{"id":"2059302892","method":"ping","params":[{"name":"ping_id","type":"long"}],"type":"Pong"},{"id":"-213746804","method":"ping_delay_disconnect","params":[{"name":"ping_id","type":"long"},{"name":"disconnect_delay","type":"int"}],"type":"Pong"},{"id":"-1835453025","method":"http_wait","params":[{"name":"max_delay","type":"int"},{"name":"wait_after","type":"int"},{"name":"max_wait","type":"int"}],"type":"HttpWait"},{"id":"-784117408","method":"destroy_auth_key","params":[],"type":"DestroyAuthKeyRes"},{"id":"-414113498","method":"destroy_session","params":[{"name":"session_id","type":"long"}],"type":"DestroySessionRes"}]};

Config.Schema.API = {"constructors":[{"id":"-1132882121","predicate":"boolFalse","params":[],"type":"Bool"},{"id":"-1720552011","predicate":"boolTrue","params":[],"type":"Bool"},{"id":"1072550713","predicate":"true","params":[],"type":"True"},{"id":"481674261","predicate":"vector","params":[],"type":"Vector t"},{"id":"-994444869","predicate":"error","params":[{"name":"code","type":"int"},{"name":"text","type":"string"}],"type":"Error"},{"id":"1450380236","predicate":"null","params":[],"type":"Null"},{"id":"2134579434","predicate":"inputPeerEmpty","params":[],"type":"InputPeer"},{"id":"2107670217","predicate":"inputPeerSelf","params":[],"type":"InputPeer"},{"id":"396093539","predicate":"inputPeerChat","params":[{"name":"chat_id","type":"int"}],"type":"InputPeer"},{"id":"-1182234929","predicate":"inputUserEmpty","params":[],"type":"InputUser"},{"id":"-138301121","predicate":"inputUserSelf","params":[],"type":"InputUser"},{"id":"-208488460","predicate":"inputPhoneContact","params":[{"name":"client_id","type":"long"},{"name":"phone","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"InputContact"},{"id":"-181407105","predicate":"inputFile","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"},{"name":"md5_checksum","type":"string"}],"type":"InputFile"},{"id":"-1771768449","predicate":"inputMediaEmpty","params":[],"type":"InputMedia"},{"id":"505969924","predicate":"inputMediaUploadedPhoto","params":[{"name":"flags","type":"#"},{"name":"file","type":"InputFile"},{"name":"stickers","type":"flags.0?Vector<InputDocument>"},{"name":"ttl_seconds","type":"flags.1?int"}],"type":"InputMedia"},{"id":"-1279654347","predicate":"inputMediaPhoto","params":[{"name":"flags","type":"#"},{"name":"id","type":"InputPhoto"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"-104578748","predicate":"inputMediaGeoPoint","params":[{"name":"geo_point","type":"InputGeoPoint"}],"type":"InputMedia"},{"id":"-122978821","predicate":"inputMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"vcard","type":"string"}],"type":"InputMedia"},{"id":"480546647","predicate":"inputChatPhotoEmpty","params":[],"type":"InputChatPhoto"},{"id":"-1837345356","predicate":"inputChatUploadedPhoto","params":[{"name":"file","type":"InputFile"}],"type":"InputChatPhoto"},{"id":"-1991004873","predicate":"inputChatPhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"InputChatPhoto"},{"id":"-457104426","predicate":"inputGeoPointEmpty","params":[],"type":"InputGeoPoint"},{"id":"-206066487","predicate":"inputGeoPoint","params":[{"name":"lat","type":"double"},{"name":"long","type":"double"}],"type":"InputGeoPoint"},{"id":"483901197","predicate":"inputPhotoEmpty","params":[],"type":"InputPhoto"},{"id":"1001634122","predicate":"inputPhoto","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"file_reference","type":"bytes"}],"type":"InputPhoto"},{"id":"-539317279","predicate":"inputFileLocation","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"},{"name":"file_reference","type":"bytes"}],"type":"InputFileLocation"},{"id":"-1649296275","predicate":"peerUser","params":[{"name":"user_id","type":"int"}],"type":"Peer"},{"id":"-1160714821","predicate":"peerChat","params":[{"name":"chat_id","type":"int"}],"type":"Peer"},{"id":"-1432995067","predicate":"storage.fileUnknown","params":[],"type":"storage.FileType"},{"id":"1086091090","predicate":"storage.filePartial","params":[],"type":"storage.FileType"},{"id":"8322574","predicate":"storage.fileJpeg","params":[],"type":"storage.FileType"},{"id":"-891180321","predicate":"storage.fileGif","params":[],"type":"storage.FileType"},{"id":"172975040","predicate":"storage.filePng","params":[],"type":"storage.FileType"},{"id":"-1373745011","predicate":"storage.filePdf","params":[],"type":"storage.FileType"},{"id":"1384777335","predicate":"storage.fileMp3","params":[],"type":"storage.FileType"},{"id":"1258941372","predicate":"storage.fileMov","params":[],"type":"storage.FileType"},{"id":"-1278304028","predicate":"storage.fileMp4","params":[],"type":"storage.FileType"},{"id":"276907596","predicate":"storage.fileWebp","params":[],"type":"storage.FileType"},{"id":"537022650","predicate":"userEmpty","params":[{"name":"id","type":"int"}],"type":"User"},{"id":"1326562017","predicate":"userProfilePhotoEmpty","params":[],"type":"UserProfilePhoto"},{"id":"-321430132","predicate":"userProfilePhoto","params":[{"name":"photo_id","type":"long"},{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"},{"name":"dc_id","type":"int"}],"type":"UserProfilePhoto"},{"id":"164646985","predicate":"userStatusEmpty","params":[],"type":"UserStatus"},{"id":"-306628279","predicate":"userStatusOnline","params":[{"name":"expires","type":"int"}],"type":"UserStatus"},{"id":"9203775","predicate":"userStatusOffline","params":[{"name":"was_online","type":"int"}],"type":"UserStatus"},{"id":"-1683826688","predicate":"chatEmpty","params":[{"name":"id","type":"int"}],"type":"Chat"},{"id":"1004149726","predicate":"chat","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"kicked","type":"flags.1?true"},{"name":"left","type":"flags.2?true"},{"name":"deactivated","type":"flags.5?true"},{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"photo","type":"ChatPhoto"},{"name":"participants_count","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"migrated_to","type":"flags.6?InputChannel"},{"name":"admin_rights","type":"flags.14?ChatAdminRights"},{"name":"default_banned_rights","type":"flags.18?ChatBannedRights"}],"type":"Chat"},{"id":"120753115","predicate":"chatForbidden","params":[{"name":"id","type":"int"},{"name":"title","type":"string"}],"type":"Chat"},{"id":"461151667","predicate":"chatFull","params":[{"name":"flags","type":"#"},{"name":"can_set_username","type":"flags.7?true"},{"name":"has_scheduled","type":"flags.8?true"},{"name":"id","type":"int"},{"name":"about","type":"string"},{"name":"participants","type":"ChatParticipants"},{"name":"chat_photo","type":"flags.2?Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"flags.3?Vector<BotInfo>"},{"name":"pinned_msg_id","type":"flags.6?int"},{"name":"folder_id","type":"flags.11?int"}],"type":"ChatFull"},{"id":"-925415106","predicate":"chatParticipant","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"-57668565","predicate":"chatParticipantsForbidden","params":[{"name":"flags","type":"#"},{"name":"chat_id","type":"int"},{"name":"self_participant","type":"flags.0?ChatParticipant"}],"type":"ChatParticipants"},{"id":"1061556205","predicate":"chatParticipants","params":[{"name":"chat_id","type":"int"},{"name":"participants","type":"Vector<ChatParticipant>"},{"name":"version","type":"int"}],"type":"ChatParticipants"},{"id":"935395612","predicate":"chatPhotoEmpty","params":[],"type":"ChatPhoto"},{"id":"1197267925","predicate":"chatPhoto","params":[{"name":"photo_small","type":"FileLocation"},{"name":"photo_big","type":"FileLocation"},{"name":"dc_id","type":"int"}],"type":"ChatPhoto"},{"id":"-2082087340","predicate":"messageEmpty","params":[{"name":"id","type":"int"}],"type":"Message"},{"id":"1160515173","predicate":"message","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"post","type":"flags.14?true"},{"name":"from_scheduled","type":"flags.18?true"},{"name":"legacy","type":"flags.19?true"},{"name":"edit_hide","type":"flags.21?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"date","type":"int"},{"name":"message","type":"string"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"reply_markup","type":"flags.6?ReplyMarkup"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"},{"name":"views","type":"flags.10?int"},{"name":"edit_date","type":"flags.15?int"},{"name":"post_author","type":"flags.16?string"},{"name":"grouped_id","type":"flags.17?long"},{"name":"restriction_reason","type":"flags.22?Vector<RestrictionReason>"}],"type":"Message"},{"id":"-1642487306","predicate":"messageService","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"post","type":"flags.14?true"},{"name":"legacy","type":"flags.19?true"},{"name":"id","type":"int"},{"name":"from_id","type":"flags.8?int"},{"name":"to_id","type":"Peer"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"date","type":"int"},{"name":"action","type":"MessageAction"}],"type":"Message"},{"id":"1038967584","predicate":"messageMediaEmpty","params":[],"type":"MessageMedia"},{"id":"1766936791","predicate":"messageMediaPhoto","params":[{"name":"flags","type":"#"},{"name":"photo","type":"flags.0?Photo"},{"name":"ttl_seconds","type":"flags.2?int"}],"type":"MessageMedia"},{"id":"1457575028","predicate":"messageMediaGeo","params":[{"name":"geo","type":"GeoPoint"}],"type":"MessageMedia"},{"id":"-873313984","predicate":"messageMediaContact","params":[{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"vcard","type":"string"},{"name":"user_id","type":"int"}],"type":"MessageMedia"},{"id":"-1618676578","predicate":"messageMediaUnsupported","params":[],"type":"MessageMedia"},{"id":"-1230047312","predicate":"messageActionEmpty","params":[],"type":"MessageAction"},{"id":"-1503425638","predicate":"messageActionChatCreate","params":[{"name":"title","type":"string"},{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1247687078","predicate":"messageActionChatEditTitle","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"2144015272","predicate":"messageActionChatEditPhoto","params":[{"name":"photo","type":"Photo"}],"type":"MessageAction"},{"id":"-1780220945","predicate":"messageActionChatDeletePhoto","params":[],"type":"MessageAction"},{"id":"1217033015","predicate":"messageActionChatAddUser","params":[{"name":"users","type":"Vector<int>"}],"type":"MessageAction"},{"id":"-1297179892","predicate":"messageActionChatDeleteUser","params":[{"name":"user_id","type":"int"}],"type":"MessageAction"},{"id":"739712882","predicate":"dialog","params":[{"name":"flags","type":"#"},{"name":"pinned","type":"flags.2?true"},{"name":"unread_mark","type":"flags.3?true"},{"name":"peer","type":"Peer"},{"name":"top_message","type":"int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"unread_mentions_count","type":"int"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"pts","type":"flags.0?int"},{"name":"draft","type":"flags.1?DraftMessage"},{"name":"folder_id","type":"flags.4?int"}],"type":"Dialog"},{"id":"590459437","predicate":"photoEmpty","params":[{"name":"id","type":"long"}],"type":"Photo"},{"id":"-797637467","predicate":"photo","params":[{"name":"flags","type":"#"},{"name":"has_stickers","type":"flags.0?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"file_reference","type":"bytes"},{"name":"date","type":"int"},{"name":"sizes","type":"Vector<PhotoSize>"},{"name":"dc_id","type":"int"}],"type":"Photo"},{"id":"236446268","predicate":"photoSizeEmpty","params":[{"name":"type","type":"string"}],"type":"PhotoSize"},{"id":"2009052699","predicate":"photoSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"size","type":"int"}],"type":"PhotoSize"},{"id":"-374917894","predicate":"photoCachedSize","params":[{"name":"type","type":"string"},{"name":"location","type":"FileLocation"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"bytes","type":"bytes"}],"type":"PhotoSize"},{"id":"286776671","predicate":"geoPointEmpty","params":[],"type":"GeoPoint"},{"id":"43446532","predicate":"geoPoint","params":[{"name":"long","type":"double"},{"name":"lat","type":"double"},{"name":"access_hash","type":"long"}],"type":"GeoPoint"},{"id":"1577067778","predicate":"auth.sentCode","params":[{"name":"flags","type":"#"},{"name":"type","type":"auth.SentCodeType"},{"name":"phone_code_hash","type":"string"},{"name":"next_type","type":"flags.1?auth.CodeType"},{"name":"timeout","type":"flags.2?int"}],"type":"auth.SentCode"},{"id":"-855308010","predicate":"auth.authorization","params":[{"name":"flags","type":"#"},{"name":"tmp_sessions","type":"flags.0?int"},{"name":"user","type":"User"}],"type":"auth.Authorization"},{"id":"-543777747","predicate":"auth.exportedAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.ExportedAuthorization"},{"id":"-1195615476","predicate":"inputNotifyPeer","params":[{"name":"peer","type":"InputPeer"}],"type":"InputNotifyPeer"},{"id":"423314455","predicate":"inputNotifyUsers","params":[],"type":"InputNotifyPeer"},{"id":"1251338318","predicate":"inputNotifyChats","params":[],"type":"InputNotifyPeer"},{"id":"-1673717362","predicate":"inputPeerNotifySettings","params":[{"name":"flags","type":"#"},{"name":"show_previews","type":"flags.0?Bool"},{"name":"silent","type":"flags.1?Bool"},{"name":"mute_until","type":"flags.2?int"},{"name":"sound","type":"flags.3?string"}],"type":"InputPeerNotifySettings"},{"id":"-1353671392","predicate":"peerNotifySettings","params":[{"name":"flags","type":"#"},{"name":"show_previews","type":"flags.0?Bool"},{"name":"silent","type":"flags.1?Bool"},{"name":"mute_until","type":"flags.2?int"},{"name":"sound","type":"flags.3?string"}],"type":"PeerNotifySettings"},{"id":"-2122045747","predicate":"peerSettings","params":[{"name":"flags","type":"#"},{"name":"report_spam","type":"flags.0?true"},{"name":"add_contact","type":"flags.1?true"},{"name":"block_contact","type":"flags.2?true"},{"name":"share_contact","type":"flags.3?true"},{"name":"need_contacts_exception","type":"flags.4?true"},{"name":"report_geo","type":"flags.5?true"}],"type":"PeerSettings"},{"id":"-1539849235","predicate":"wallPaper","params":[{"name":"id","type":"long"},{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"default","type":"flags.1?true"},{"name":"pattern","type":"flags.3?true"},{"name":"dark","type":"flags.4?true"},{"name":"access_hash","type":"long"},{"name":"slug","type":"string"},{"name":"document","type":"Document"},{"name":"settings","type":"flags.2?WallPaperSettings"}],"type":"WallPaper"},{"id":"1490799288","predicate":"inputReportReasonSpam","params":[],"type":"ReportReason"},{"id":"505595789","predicate":"inputReportReasonViolence","params":[],"type":"ReportReason"},{"id":"777640226","predicate":"inputReportReasonPornography","params":[],"type":"ReportReason"},{"id":"-1376497949","predicate":"inputReportReasonChildAbuse","params":[],"type":"ReportReason"},{"id":"-512463606","predicate":"inputReportReasonOther","params":[{"name":"text","type":"string"}],"type":"ReportReason"},{"id":"-302941166","predicate":"userFull","params":[{"name":"flags","type":"#"},{"name":"blocked","type":"flags.0?true"},{"name":"phone_calls_available","type":"flags.4?true"},{"name":"phone_calls_private","type":"flags.5?true"},{"name":"can_pin_message","type":"flags.7?true"},{"name":"has_scheduled","type":"flags.12?true"},{"name":"user","type":"User"},{"name":"about","type":"flags.1?string"},{"name":"settings","type":"PeerSettings"},{"name":"profile_photo","type":"flags.2?Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"bot_info","type":"flags.3?BotInfo"},{"name":"pinned_msg_id","type":"flags.6?int"},{"name":"common_chats_count","type":"int"},{"name":"folder_id","type":"flags.11?int"}],"type":"UserFull"},{"id":"-116274796","predicate":"contact","params":[{"name":"user_id","type":"int"},{"name":"mutual","type":"Bool"}],"type":"Contact"},{"id":"-805141448","predicate":"importedContact","params":[{"name":"user_id","type":"int"},{"name":"client_id","type":"long"}],"type":"ImportedContact"},{"id":"1444661369","predicate":"contactBlocked","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ContactBlocked"},{"id":"-748155807","predicate":"contactStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"ContactStatus"},{"id":"-1219778094","predicate":"contacts.contactsNotModified","params":[],"type":"contacts.Contacts"},{"id":"-353862078","predicate":"contacts.contacts","params":[{"name":"contacts","type":"Vector<Contact>"},{"name":"saved_count","type":"int"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Contacts"},{"id":"2010127419","predicate":"contacts.importedContacts","params":[{"name":"imported","type":"Vector<ImportedContact>"},{"name":"popular_invites","type":"Vector<PopularContact>"},{"name":"retry_contacts","type":"Vector<long>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ImportedContacts"},{"id":"471043349","predicate":"contacts.blocked","params":[{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"-1878523231","predicate":"contacts.blockedSlice","params":[{"name":"count","type":"int"},{"name":"blocked","type":"Vector<ContactBlocked>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Blocked"},{"id":"364538944","predicate":"messages.dialogs","params":[{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"1910543603","predicate":"messages.dialogsSlice","params":[{"name":"count","type":"int"},{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Dialogs"},{"id":"-1938715001","predicate":"messages.messages","params":[{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"-923939298","predicate":"messages.messagesSlice","params":[{"name":"flags","type":"#"},{"name":"inexact","type":"flags.1?true"},{"name":"count","type":"int"},{"name":"next_rate","type":"flags.0?int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"1694474197","predicate":"messages.chats","params":[{"name":"chats","type":"Vector<Chat>"}],"type":"messages.Chats"},{"id":"-438840932","predicate":"messages.chatFull","params":[{"name":"full_chat","type":"ChatFull"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.ChatFull"},{"id":"-1269012015","predicate":"messages.affectedHistory","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"offset","type":"int"}],"type":"messages.AffectedHistory"},{"id":"1474492012","predicate":"inputMessagesFilterEmpty","params":[],"type":"MessagesFilter"},{"id":"-1777752804","predicate":"inputMessagesFilterPhotos","params":[],"type":"MessagesFilter"},{"id":"-1614803355","predicate":"inputMessagesFilterVideo","params":[],"type":"MessagesFilter"},{"id":"1458172132","predicate":"inputMessagesFilterPhotoVideo","params":[],"type":"MessagesFilter"},{"id":"-1629621880","predicate":"inputMessagesFilterDocument","params":[],"type":"MessagesFilter"},{"id":"2129714567","predicate":"inputMessagesFilterUrl","params":[],"type":"MessagesFilter"},{"id":"-3644025","predicate":"inputMessagesFilterGif","params":[],"type":"MessagesFilter"},{"id":"522914557","predicate":"updateNewMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1318109142","predicate":"updateMessageID","params":[{"name":"id","type":"int"},{"name":"random_id","type":"long"}],"type":"Update"},{"id":"-1576161051","predicate":"updateDeleteMessages","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"1548249383","predicate":"updateUserTyping","params":[{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"-1704596961","predicate":"updateChatUserTyping","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"action","type":"SendMessageAction"}],"type":"Update"},{"id":"125178264","predicate":"updateChatParticipants","params":[{"name":"participants","type":"ChatParticipants"}],"type":"Update"},{"id":"469489699","predicate":"updateUserStatus","params":[{"name":"user_id","type":"int"},{"name":"status","type":"UserStatus"}],"type":"Update"},{"id":"-1489818765","predicate":"updateUserName","params":[{"name":"user_id","type":"int"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"username","type":"string"}],"type":"Update"},{"id":"-1791935732","predicate":"updateUserPhoto","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"},{"name":"photo","type":"UserProfilePhoto"},{"name":"previous","type":"Bool"}],"type":"Update"},{"id":"-1519637954","predicate":"updates.state","params":[{"name":"pts","type":"int"},{"name":"qts","type":"int"},{"name":"date","type":"int"},{"name":"seq","type":"int"},{"name":"unread_count","type":"int"}],"type":"updates.State"},{"id":"1567990072","predicate":"updates.differenceEmpty","params":[{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"updates.Difference"},{"id":"16030880","predicate":"updates.difference","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-1459938943","predicate":"updates.differenceSlice","params":[{"name":"new_messages","type":"Vector<Message>"},{"name":"new_encrypted_messages","type":"Vector<EncryptedMessage>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"intermediate_state","type":"updates.State"}],"type":"updates.Difference"},{"id":"-484987010","predicate":"updatesTooLong","params":[],"type":"Updates"},{"id":"-1857044719","predicate":"updateShortMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"id","type":"int"},{"name":"user_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"377562760","predicate":"updateShortChatMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"mentioned","type":"flags.4?true"},{"name":"media_unread","type":"flags.5?true"},{"name":"silent","type":"flags.13?true"},{"name":"id","type":"int"},{"name":"from_id","type":"int"},{"name":"chat_id","type":"int"},{"name":"message","type":"string"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"fwd_from","type":"flags.2?MessageFwdHeader"},{"name":"via_bot_id","type":"flags.11?int"},{"name":"reply_to_msg_id","type":"flags.3?int"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"2027216577","predicate":"updateShort","params":[{"name":"update","type":"Update"},{"name":"date","type":"int"}],"type":"Updates"},{"id":"1918567619","predicate":"updatesCombined","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq_start","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"1957577280","predicate":"updates","params":[{"name":"updates","type":"Vector<Update>"},{"name":"users","type":"Vector<User>"},{"name":"chats","type":"Vector<Chat>"},{"name":"date","type":"int"},{"name":"seq","type":"int"}],"type":"Updates"},{"id":"-1916114267","predicate":"photos.photos","params":[{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"352657236","predicate":"photos.photosSlice","params":[{"name":"count","type":"int"},{"name":"photos","type":"Vector<Photo>"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photos"},{"id":"539045032","predicate":"photos.photo","params":[{"name":"photo","type":"Photo"},{"name":"users","type":"Vector<User>"}],"type":"photos.Photo"},{"id":"157948117","predicate":"upload.file","params":[{"name":"type","type":"storage.FileType"},{"name":"mtime","type":"int"},{"name":"bytes","type":"bytes"}],"type":"upload.File"},{"id":"414687501","predicate":"dcOption","params":[{"name":"flags","type":"#"},{"name":"ipv6","type":"flags.0?true"},{"name":"media_only","type":"flags.1?true"},{"name":"tcpo_only","type":"flags.2?true"},{"name":"cdn","type":"flags.3?true"},{"name":"static","type":"flags.4?true"},{"name":"id","type":"int"},{"name":"ip_address","type":"string"},{"name":"port","type":"int"},{"name":"secret","type":"flags.10?bytes"}],"type":"DcOption"},{"id":"856375399","predicate":"config","params":[{"name":"flags","type":"#"},{"name":"phonecalls_enabled","type":"flags.1?true"},{"name":"default_p2p_contacts","type":"flags.3?true"},{"name":"preload_featured_stickers","type":"flags.4?true"},{"name":"ignore_phone_entities","type":"flags.5?true"},{"name":"revoke_pm_inbox","type":"flags.6?true"},{"name":"blocked_mode","type":"flags.8?true"},{"name":"pfs_enabled","type":"flags.13?true"},{"name":"date","type":"int"},{"name":"expires","type":"int"},{"name":"test_mode","type":"Bool"},{"name":"this_dc","type":"int"},{"name":"dc_options","type":"Vector<DcOption>"},{"name":"dc_txt_domain_name","type":"string"},{"name":"chat_size_max","type":"int"},{"name":"megagroup_size_max","type":"int"},{"name":"forwarded_count_max","type":"int"},{"name":"online_update_period_ms","type":"int"},{"name":"offline_blur_timeout_ms","type":"int"},{"name":"offline_idle_timeout_ms","type":"int"},{"name":"online_cloud_timeout_ms","type":"int"},{"name":"notify_cloud_delay_ms","type":"int"},{"name":"notify_default_delay_ms","type":"int"},{"name":"push_chat_period_ms","type":"int"},{"name":"push_chat_limit","type":"int"},{"name":"saved_gifs_limit","type":"int"},{"name":"edit_time_limit","type":"int"},{"name":"revoke_time_limit","type":"int"},{"name":"revoke_pm_time_limit","type":"int"},{"name":"rating_e_decay","type":"int"},{"name":"stickers_recent_limit","type":"int"},{"name":"stickers_faved_limit","type":"int"},{"name":"channels_read_media_period","type":"int"},{"name":"tmp_sessions","type":"flags.0?int"},{"name":"pinned_dialogs_count_max","type":"int"},{"name":"pinned_infolder_count_max","type":"int"},{"name":"call_receive_timeout_ms","type":"int"},{"name":"call_ring_timeout_ms","type":"int"},{"name":"call_connect_timeout_ms","type":"int"},{"name":"call_packet_timeout_ms","type":"int"},{"name":"me_url_prefix","type":"string"},{"name":"autoupdate_url_prefix","type":"flags.7?string"},{"name":"gif_search_username","type":"flags.9?string"},{"name":"venue_search_username","type":"flags.10?string"},{"name":"img_search_username","type":"flags.11?string"},{"name":"static_maps_provider","type":"flags.12?string"},{"name":"caption_length_max","type":"int"},{"name":"message_length_max","type":"int"},{"name":"webfile_dc_id","type":"int"},{"name":"suggested_lang_code","type":"flags.2?string"},{"name":"lang_pack_version","type":"flags.2?int"},{"name":"base_lang_pack_version","type":"flags.2?int"}],"type":"Config"},{"id":"-1910892683","predicate":"nearestDc","params":[{"name":"country","type":"string"},{"name":"this_dc","type":"int"},{"name":"nearest_dc","type":"int"}],"type":"NearestDc"},{"id":"497489295","predicate":"help.appUpdate","params":[{"name":"flags","type":"#"},{"name":"can_not_skip","type":"flags.0?true"},{"name":"id","type":"int"},{"name":"version","type":"string"},{"name":"text","type":"string"},{"name":"entities","type":"Vector<MessageEntity>"},{"name":"document","type":"flags.1?Document"},{"name":"url","type":"flags.2?string"}],"type":"help.AppUpdate"},{"id":"-1000708810","predicate":"help.noAppUpdate","params":[],"type":"help.AppUpdate"},{"id":"415997816","predicate":"help.inviteText","params":[{"name":"message","type":"string"}],"type":"help.InviteText"},{"id":"314359194","predicate":"updateNewEncryptedMessage","params":[{"name":"message","type":"EncryptedMessage"},{"name":"qts","type":"int"}],"type":"Update"},{"id":"386986326","predicate":"updateEncryptedChatTyping","params":[{"name":"chat_id","type":"int"}],"type":"Update"},{"id":"-1264392051","predicate":"updateEncryption","params":[{"name":"chat","type":"EncryptedChat"},{"name":"date","type":"int"}],"type":"Update"},{"id":"956179895","predicate":"updateEncryptedMessagesRead","params":[{"name":"chat_id","type":"int"},{"name":"max_date","type":"int"},{"name":"date","type":"int"}],"type":"Update"},{"id":"-1417756512","predicate":"encryptedChatEmpty","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"1006044124","predicate":"encryptedChatWaiting","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"}],"type":"EncryptedChat"},{"id":"-931638658","predicate":"encryptedChatRequested","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"-94974410","predicate":"encryptedChat","params":[{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_or_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"332848423","predicate":"encryptedChatDiscarded","params":[{"name":"id","type":"int"}],"type":"EncryptedChat"},{"id":"-247351839","predicate":"inputEncryptedChat","params":[{"name":"chat_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedChat"},{"id":"-1038136962","predicate":"encryptedFileEmpty","params":[],"type":"EncryptedFile"},{"id":"1248893260","predicate":"encryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"size","type":"int"},{"name":"dc_id","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"EncryptedFile"},{"id":"406307684","predicate":"inputEncryptedFileEmpty","params":[],"type":"InputEncryptedFile"},{"id":"1690108678","predicate":"inputEncryptedFileUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"md5_checksum","type":"string"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"1511503333","predicate":"inputEncryptedFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputEncryptedFile"},{"id":"-182231723","predicate":"inputEncryptedFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"-317144808","predicate":"encryptedMessage","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"},{"name":"file","type":"EncryptedFile"}],"type":"EncryptedMessage"},{"id":"594758406","predicate":"encryptedMessageService","params":[{"name":"random_id","type":"long"},{"name":"chat_id","type":"int"},{"name":"date","type":"int"},{"name":"bytes","type":"bytes"}],"type":"EncryptedMessage"},{"id":"-1058912715","predicate":"messages.dhConfigNotModified","params":[{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"740433629","predicate":"messages.dhConfig","params":[{"name":"g","type":"int"},{"name":"p","type":"bytes"},{"name":"version","type":"int"},{"name":"random","type":"bytes"}],"type":"messages.DhConfig"},{"id":"1443858741","predicate":"messages.sentEncryptedMessage","params":[{"name":"date","type":"int"}],"type":"messages.SentEncryptedMessage"},{"id":"-1802240206","predicate":"messages.sentEncryptedFile","params":[{"name":"date","type":"int"},{"name":"file","type":"EncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"-95482955","predicate":"inputFileBig","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"name","type":"string"}],"type":"InputFile"},{"id":"767652808","predicate":"inputEncryptedFileBigUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"key_fingerprint","type":"int"}],"type":"InputEncryptedFile"},{"id":"-364179876","predicate":"updateChatParticipantAdd","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1851755554","predicate":"updateChatParticipantDelete","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1906403213","predicate":"updateDcOptions","params":[{"name":"dc_options","type":"Vector<DcOption>"}],"type":"Update"},{"id":"1530447553","predicate":"inputMediaUploadedDocument","params":[{"name":"flags","type":"#"},{"name":"nosound_video","type":"flags.3?true"},{"name":"file","type":"InputFile"},{"name":"thumb","type":"flags.2?InputFile"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"},{"name":"stickers","type":"flags.0?Vector<InputDocument>"},{"name":"ttl_seconds","type":"flags.1?int"}],"type":"InputMedia"},{"id":"598418386","predicate":"inputMediaDocument","params":[{"name":"flags","type":"#"},{"name":"id","type":"InputDocument"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"-1666158377","predicate":"messageMediaDocument","params":[{"name":"flags","type":"#"},{"name":"document","type":"flags.0?Document"},{"name":"ttl_seconds","type":"flags.2?int"}],"type":"MessageMedia"},{"id":"1928391342","predicate":"inputDocumentEmpty","params":[],"type":"InputDocument"},{"id":"448771445","predicate":"inputDocument","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"file_reference","type":"bytes"}],"type":"InputDocument"},{"id":"-1160743548","predicate":"inputDocumentFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"file_reference","type":"bytes"},{"name":"thumb_size","type":"string"}],"type":"InputFileLocation"},{"id":"922273905","predicate":"documentEmpty","params":[{"name":"id","type":"long"}],"type":"Document"},{"id":"-1683841855","predicate":"document","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"file_reference","type":"bytes"},{"name":"date","type":"int"},{"name":"mime_type","type":"string"},{"name":"size","type":"int"},{"name":"thumbs","type":"flags.0?Vector<PhotoSize>"},{"name":"dc_id","type":"int"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"Document"},{"id":"398898678","predicate":"help.support","params":[{"name":"phone_number","type":"string"},{"name":"user","type":"User"}],"type":"help.Support"},{"id":"-1613493288","predicate":"notifyPeer","params":[{"name":"peer","type":"Peer"}],"type":"NotifyPeer"},{"id":"-1261946036","predicate":"notifyUsers","params":[],"type":"NotifyPeer"},{"id":"-1073230141","predicate":"notifyChats","params":[],"type":"NotifyPeer"},{"id":"-2131957734","predicate":"updateUserBlocked","params":[{"name":"user_id","type":"int"},{"name":"blocked","type":"Bool"}],"type":"Update"},{"id":"-1094555409","predicate":"updateNotifySettings","params":[{"name":"peer","type":"NotifyPeer"},{"name":"notify_settings","type":"PeerNotifySettings"}],"type":"Update"},{"id":"381645902","predicate":"sendMessageTypingAction","params":[],"type":"SendMessageAction"},{"id":"-44119819","predicate":"sendMessageCancelAction","params":[],"type":"SendMessageAction"},{"id":"-1584933265","predicate":"sendMessageRecordVideoAction","params":[],"type":"SendMessageAction"},{"id":"-378127636","predicate":"sendMessageUploadVideoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-718310409","predicate":"sendMessageRecordAudioAction","params":[],"type":"SendMessageAction"},{"id":"-212740181","predicate":"sendMessageUploadAudioAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-774682074","predicate":"sendMessageUploadPhotoAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-1441998364","predicate":"sendMessageUploadDocumentAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"393186209","predicate":"sendMessageGeoLocationAction","params":[],"type":"SendMessageAction"},{"id":"1653390447","predicate":"sendMessageChooseContactAction","params":[],"type":"SendMessageAction"},{"id":"-1290580579","predicate":"contacts.found","params":[{"name":"my_results","type":"Vector<Peer>"},{"name":"results","type":"Vector<Peer>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.Found"},{"id":"-337352679","predicate":"updateServiceNotification","params":[{"name":"flags","type":"#"},{"name":"popup","type":"flags.0?true"},{"name":"inbox_date","type":"flags.1?int"},{"name":"type","type":"string"},{"name":"message","type":"string"},{"name":"media","type":"MessageMedia"},{"name":"entities","type":"Vector<MessageEntity>"}],"type":"Update"},{"id":"-496024847","predicate":"userStatusRecently","params":[],"type":"UserStatus"},{"id":"129960444","predicate":"userStatusLastWeek","params":[],"type":"UserStatus"},{"id":"2011940674","predicate":"userStatusLastMonth","params":[],"type":"UserStatus"},{"id":"-298113238","predicate":"updatePrivacy","params":[{"name":"key","type":"PrivacyKey"},{"name":"rules","type":"Vector<PrivacyRule>"}],"type":"Update"},{"id":"1335282456","predicate":"inputPrivacyKeyStatusTimestamp","params":[],"type":"InputPrivacyKey"},{"id":"-1137792208","predicate":"privacyKeyStatusTimestamp","params":[],"type":"PrivacyKey"},{"id":"218751099","predicate":"inputPrivacyValueAllowContacts","params":[],"type":"InputPrivacyRule"},{"id":"407582158","predicate":"inputPrivacyValueAllowAll","params":[],"type":"InputPrivacyRule"},{"id":"320652927","predicate":"inputPrivacyValueAllowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"195371015","predicate":"inputPrivacyValueDisallowContacts","params":[],"type":"InputPrivacyRule"},{"id":"-697604407","predicate":"inputPrivacyValueDisallowAll","params":[],"type":"InputPrivacyRule"},{"id":"-1877932953","predicate":"inputPrivacyValueDisallowUsers","params":[{"name":"users","type":"Vector<InputUser>"}],"type":"InputPrivacyRule"},{"id":"-123988","predicate":"privacyValueAllowContacts","params":[],"type":"PrivacyRule"},{"id":"1698855810","predicate":"privacyValueAllowAll","params":[],"type":"PrivacyRule"},{"id":"1297858060","predicate":"privacyValueAllowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"-125240806","predicate":"privacyValueDisallowContacts","params":[],"type":"PrivacyRule"},{"id":"-1955338397","predicate":"privacyValueDisallowAll","params":[],"type":"PrivacyRule"},{"id":"209668535","predicate":"privacyValueDisallowUsers","params":[{"name":"users","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"1352683077","predicate":"account.privacyRules","params":[{"name":"rules","type":"Vector<PrivacyRule>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"account.PrivacyRules"},{"id":"-1194283041","predicate":"accountDaysTTL","params":[{"name":"days","type":"int"}],"type":"AccountDaysTTL"},{"id":"314130811","predicate":"updateUserPhone","params":[{"name":"user_id","type":"int"},{"name":"phone","type":"string"}],"type":"Update"},{"id":"1815593308","predicate":"documentAttributeImageSize","params":[{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"297109817","predicate":"documentAttributeAnimated","params":[],"type":"DocumentAttribute"},{"id":"1662637586","predicate":"documentAttributeSticker","params":[{"name":"flags","type":"#"},{"name":"mask","type":"flags.1?true"},{"name":"alt","type":"string"},{"name":"stickerset","type":"InputStickerSet"},{"name":"mask_coords","type":"flags.0?MaskCoords"}],"type":"DocumentAttribute"},{"id":"250621158","predicate":"documentAttributeVideo","params":[{"name":"flags","type":"#"},{"name":"round_message","type":"flags.0?true"},{"name":"supports_streaming","type":"flags.1?true"},{"name":"duration","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"DocumentAttribute"},{"id":"-1739392570","predicate":"documentAttributeAudio","params":[{"name":"flags","type":"#"},{"name":"voice","type":"flags.10?true"},{"name":"duration","type":"int"},{"name":"title","type":"flags.0?string"},{"name":"performer","type":"flags.1?string"},{"name":"waveform","type":"flags.2?bytes"}],"type":"DocumentAttribute"},{"id":"358154344","predicate":"documentAttributeFilename","params":[{"name":"file_name","type":"string"}],"type":"DocumentAttribute"},{"id":"-244016606","predicate":"messages.stickersNotModified","params":[],"type":"messages.Stickers"},{"id":"-463889475","predicate":"messages.stickers","params":[{"name":"hash","type":"int"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.Stickers"},{"id":"313694676","predicate":"stickerPack","params":[{"name":"emoticon","type":"string"},{"name":"documents","type":"Vector<long>"}],"type":"StickerPack"},{"id":"-395967805","predicate":"messages.allStickersNotModified","params":[],"type":"messages.AllStickers"},{"id":"-302170017","predicate":"messages.allStickers","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSet>"}],"type":"messages.AllStickers"},{"id":"-1667805217","predicate":"updateReadHistoryInbox","params":[{"name":"flags","type":"#"},{"name":"folder_id","type":"flags.0?int"},{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"still_unread_count","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"791617983","predicate":"updateReadHistoryOutbox","params":[{"name":"peer","type":"Peer"},{"name":"max_id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-2066640507","predicate":"messages.affectedMessages","params":[{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"messages.AffectedMessages"},{"id":"2139689491","predicate":"updateWebPage","params":[{"name":"webpage","type":"WebPage"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-350980120","predicate":"webPageEmpty","params":[{"name":"id","type":"long"}],"type":"WebPage"},{"id":"-981018084","predicate":"webPagePending","params":[{"name":"id","type":"long"},{"name":"date","type":"int"}],"type":"WebPage"},{"id":"-392411726","predicate":"webPage","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"url","type":"string"},{"name":"display_url","type":"string"},{"name":"hash","type":"int"},{"name":"type","type":"flags.0?string"},{"name":"site_name","type":"flags.1?string"},{"name":"title","type":"flags.2?string"},{"name":"description","type":"flags.3?string"},{"name":"photo","type":"flags.4?Photo"},{"name":"embed_url","type":"flags.5?string"},{"name":"embed_type","type":"flags.5?string"},{"name":"embed_width","type":"flags.6?int"},{"name":"embed_height","type":"flags.6?int"},{"name":"duration","type":"flags.7?int"},{"name":"author","type":"flags.8?string"},{"name":"document","type":"flags.9?Document"},{"name":"cached_page","type":"flags.10?Page"},{"name":"attributes","type":"flags.12?Vector<WebPageAttribute>"}],"type":"WebPage"},{"id":"-1557277184","predicate":"messageMediaWebPage","params":[{"name":"webpage","type":"WebPage"}],"type":"MessageMedia"},{"id":"-1392388579","predicate":"authorization","params":[{"name":"flags","type":"#"},{"name":"current","type":"flags.0?true"},{"name":"official_app","type":"flags.1?true"},{"name":"password_pending","type":"flags.2?true"},{"name":"hash","type":"long"},{"name":"device_model","type":"string"},{"name":"platform","type":"string"},{"name":"system_version","type":"string"},{"name":"api_id","type":"int"},{"name":"app_name","type":"string"},{"name":"app_version","type":"string"},{"name":"date_created","type":"int"},{"name":"date_active","type":"int"},{"name":"ip","type":"string"},{"name":"country","type":"string"},{"name":"region","type":"string"}],"type":"Authorization"},{"id":"307276766","predicate":"account.authorizations","params":[{"name":"authorizations","type":"Vector<Authorization>"}],"type":"account.Authorizations"},{"id":"-1390001672","predicate":"account.password","params":[{"name":"flags","type":"#"},{"name":"has_recovery","type":"flags.0?true"},{"name":"has_secure_values","type":"flags.1?true"},{"name":"has_password","type":"flags.2?true"},{"name":"current_algo","type":"flags.2?PasswordKdfAlgo"},{"name":"srp_B","type":"flags.2?bytes"},{"name":"srp_id","type":"flags.2?long"},{"name":"hint","type":"flags.3?string"},{"name":"email_unconfirmed_pattern","type":"flags.4?string"},{"name":"new_algo","type":"PasswordKdfAlgo"},{"name":"new_secure_algo","type":"SecurePasswordKdfAlgo"},{"name":"secure_random","type":"bytes"}],"type":"account.Password"},{"id":"-1705233435","predicate":"account.passwordSettings","params":[{"name":"flags","type":"#"},{"name":"email","type":"flags.0?string"},{"name":"secure_settings","type":"flags.1?SecureSecretSettings"}],"type":"account.PasswordSettings"},{"id":"-1036572727","predicate":"account.passwordInputSettings","params":[{"name":"flags","type":"#"},{"name":"new_algo","type":"flags.0?PasswordKdfAlgo"},{"name":"new_password_hash","type":"flags.0?bytes"},{"name":"hint","type":"flags.0?string"},{"name":"email","type":"flags.1?string"},{"name":"new_secure_settings","type":"flags.2?SecureSecretSettings"}],"type":"account.PasswordInputSettings"},{"id":"326715557","predicate":"auth.passwordRecovery","params":[{"name":"email_pattern","type":"string"}],"type":"auth.PasswordRecovery"},{"id":"-1052959727","predicate":"inputMediaVenue","params":[{"name":"geo_point","type":"InputGeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"venue_type","type":"string"}],"type":"InputMedia"},{"id":"784356159","predicate":"messageMediaVenue","params":[{"name":"geo","type":"GeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"venue_type","type":"string"}],"type":"MessageMedia"},{"id":"-1551583367","predicate":"receivedNotifyMessage","params":[{"name":"id","type":"int"},{"name":"flags","type":"int"}],"type":"ReceivedNotifyMessage"},{"id":"1776236393","predicate":"chatInviteEmpty","params":[],"type":"ExportedChatInvite"},{"id":"-64092740","predicate":"chatInviteExported","params":[{"name":"link","type":"string"}],"type":"ExportedChatInvite"},{"id":"1516793212","predicate":"chatInviteAlready","params":[{"name":"chat","type":"Chat"}],"type":"ChatInvite"},{"id":"-540871282","predicate":"chatInvite","params":[{"name":"flags","type":"#"},{"name":"channel","type":"flags.0?true"},{"name":"broadcast","type":"flags.1?true"},{"name":"public","type":"flags.2?true"},{"name":"megagroup","type":"flags.3?true"},{"name":"title","type":"string"},{"name":"photo","type":"Photo"},{"name":"participants_count","type":"int"},{"name":"participants","type":"flags.4?Vector<User>"}],"type":"ChatInvite"},{"id":"-123931160","predicate":"messageActionChatJoinedByLink","params":[{"name":"inviter_id","type":"int"}],"type":"MessageAction"},{"id":"1757493555","predicate":"updateReadMessagesContents","params":[{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-4838507","predicate":"inputStickerSetEmpty","params":[],"type":"InputStickerSet"},{"id":"-1645763991","predicate":"inputStickerSetID","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputStickerSet"},{"id":"-2044933984","predicate":"inputStickerSetShortName","params":[{"name":"short_name","type":"string"}],"type":"InputStickerSet"},{"id":"-290164953","predicate":"stickerSet","params":[{"name":"flags","type":"#"},{"name":"archived","type":"flags.1?true"},{"name":"official","type":"flags.2?true"},{"name":"masks","type":"flags.3?true"},{"name":"animated","type":"flags.5?true"},{"name":"installed_date","type":"flags.0?int"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"},{"name":"short_name","type":"string"},{"name":"thumb","type":"flags.4?PhotoSize"},{"name":"thumb_dc_id","type":"flags.4?int"},{"name":"count","type":"int"},{"name":"hash","type":"int"}],"type":"StickerSet"},{"id":"-1240849242","predicate":"messages.stickerSet","params":[{"name":"set","type":"StickerSet"},{"name":"packs","type":"Vector<StickerPack>"},{"name":"documents","type":"Vector<Document>"}],"type":"messages.StickerSet"},{"id":"-1820043071","predicate":"user","params":[{"name":"flags","type":"#"},{"name":"self","type":"flags.10?true"},{"name":"contact","type":"flags.11?true"},{"name":"mutual_contact","type":"flags.12?true"},{"name":"deleted","type":"flags.13?true"},{"name":"bot","type":"flags.14?true"},{"name":"bot_chat_history","type":"flags.15?true"},{"name":"bot_nochats","type":"flags.16?true"},{"name":"verified","type":"flags.17?true"},{"name":"restricted","type":"flags.18?true"},{"name":"min","type":"flags.20?true"},{"name":"bot_inline_geo","type":"flags.21?true"},{"name":"support","type":"flags.23?true"},{"name":"scam","type":"flags.24?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"flags.0?long"},{"name":"first_name","type":"flags.1?string"},{"name":"last_name","type":"flags.2?string"},{"name":"username","type":"flags.3?string"},{"name":"phone","type":"flags.4?string"},{"name":"photo","type":"flags.5?UserProfilePhoto"},{"name":"status","type":"flags.6?UserStatus"},{"name":"bot_info_version","type":"flags.14?int"},{"name":"restriction_reason","type":"flags.18?Vector<RestrictionReason>"},{"name":"bot_inline_placeholder","type":"flags.19?string"},{"name":"lang_code","type":"flags.22?string"}],"type":"User"},{"id":"-1032140601","predicate":"botCommand","params":[{"name":"command","type":"string"},{"name":"description","type":"string"}],"type":"BotCommand"},{"id":"-1729618630","predicate":"botInfo","params":[{"name":"user_id","type":"int"},{"name":"description","type":"string"},{"name":"commands","type":"Vector<BotCommand>"}],"type":"BotInfo"},{"id":"-1560655744","predicate":"keyboardButton","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"2002815875","predicate":"keyboardButtonRow","params":[{"name":"buttons","type":"Vector<KeyboardButton>"}],"type":"KeyboardButtonRow"},{"id":"-1606526075","predicate":"replyKeyboardHide","params":[{"name":"flags","type":"#"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"-200242528","predicate":"replyKeyboardForceReply","params":[{"name":"flags","type":"#"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"}],"type":"ReplyMarkup"},{"id":"889353612","predicate":"replyKeyboardMarkup","params":[{"name":"flags","type":"#"},{"name":"resize","type":"flags.0?true"},{"name":"single_use","type":"flags.1?true"},{"name":"selective","type":"flags.2?true"},{"name":"rows","type":"Vector<KeyboardButtonRow>"}],"type":"ReplyMarkup"},{"id":"2072935910","predicate":"inputPeerUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"-668391402","predicate":"inputUser","params":[{"name":"user_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputUser"},{"id":"-1148011883","predicate":"messageEntityUnknown","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-100378723","predicate":"messageEntityMention","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1868782349","predicate":"messageEntityHashtag","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1827637959","predicate":"messageEntityBotCommand","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1859134776","predicate":"messageEntityUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1692693954","predicate":"messageEntityEmail","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-1117713463","predicate":"messageEntityBold","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-2106619040","predicate":"messageEntityItalic","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"681706865","predicate":"messageEntityCode","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1938967520","predicate":"messageEntityPre","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"language","type":"string"}],"type":"MessageEntity"},{"id":"1990644519","predicate":"messageEntityTextUrl","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"url","type":"string"}],"type":"MessageEntity"},{"id":"301019932","predicate":"updateShortSentMessage","params":[{"name":"flags","type":"#"},{"name":"out","type":"flags.1?true"},{"name":"id","type":"int"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"},{"name":"date","type":"int"},{"name":"media","type":"flags.9?MessageMedia"},{"name":"entities","type":"flags.7?Vector<MessageEntity>"}],"type":"Updates"},{"id":"-292807034","predicate":"inputChannelEmpty","params":[],"type":"InputChannel"},{"id":"-1343524562","predicate":"inputChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputChannel"},{"id":"-1109531342","predicate":"peerChannel","params":[{"name":"channel_id","type":"int"}],"type":"Peer"},{"id":"548253432","predicate":"inputPeerChannel","params":[{"name":"channel_id","type":"int"},{"name":"access_hash","type":"long"}],"type":"InputPeer"},{"id":"-753232354","predicate":"channel","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"left","type":"flags.2?true"},{"name":"broadcast","type":"flags.5?true"},{"name":"verified","type":"flags.7?true"},{"name":"megagroup","type":"flags.8?true"},{"name":"restricted","type":"flags.9?true"},{"name":"signatures","type":"flags.11?true"},{"name":"min","type":"flags.12?true"},{"name":"scam","type":"flags.19?true"},{"name":"has_link","type":"flags.20?true"},{"name":"has_geo","type":"flags.21?true"},{"name":"slowmode_enabled","type":"flags.22?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"flags.13?long"},{"name":"title","type":"string"},{"name":"username","type":"flags.6?string"},{"name":"photo","type":"ChatPhoto"},{"name":"date","type":"int"},{"name":"version","type":"int"},{"name":"restriction_reason","type":"flags.9?Vector<RestrictionReason>"},{"name":"admin_rights","type":"flags.14?ChatAdminRights"},{"name":"banned_rights","type":"flags.15?ChatBannedRights"},{"name":"default_banned_rights","type":"flags.18?ChatBannedRights"},{"name":"participants_count","type":"flags.17?int"}],"type":"Chat"},{"id":"681420594","predicate":"channelForbidden","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.5?true"},{"name":"megagroup","type":"flags.8?true"},{"name":"id","type":"int"},{"name":"access_hash","type":"long"},{"name":"title","type":"string"},{"name":"until_date","type":"flags.16?int"}],"type":"Chat"},{"id":"2131196633","predicate":"contacts.resolvedPeer","params":[{"name":"peer","type":"Peer"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.ResolvedPeer"},{"id":"763976820","predicate":"channelFull","params":[{"name":"flags","type":"#"},{"name":"can_view_participants","type":"flags.3?true"},{"name":"can_set_username","type":"flags.6?true"},{"name":"can_set_stickers","type":"flags.7?true"},{"name":"hidden_prehistory","type":"flags.10?true"},{"name":"can_view_stats","type":"flags.12?true"},{"name":"can_set_location","type":"flags.16?true"},{"name":"has_scheduled","type":"flags.19?true"},{"name":"id","type":"int"},{"name":"about","type":"string"},{"name":"participants_count","type":"flags.0?int"},{"name":"admins_count","type":"flags.1?int"},{"name":"kicked_count","type":"flags.2?int"},{"name":"banned_count","type":"flags.2?int"},{"name":"online_count","type":"flags.13?int"},{"name":"read_inbox_max_id","type":"int"},{"name":"read_outbox_max_id","type":"int"},{"name":"unread_count","type":"int"},{"name":"chat_photo","type":"Photo"},{"name":"notify_settings","type":"PeerNotifySettings"},{"name":"exported_invite","type":"ExportedChatInvite"},{"name":"bot_info","type":"Vector<BotInfo>"},{"name":"migrated_from_chat_id","type":"flags.4?int"},{"name":"migrated_from_max_id","type":"flags.4?int"},{"name":"pinned_msg_id","type":"flags.5?int"},{"name":"stickerset","type":"flags.8?StickerSet"},{"name":"available_min_id","type":"flags.9?int"},{"name":"folder_id","type":"flags.11?int"},{"name":"linked_chat_id","type":"flags.14?int"},{"name":"location","type":"flags.15?ChannelLocation"},{"name":"slowmode_seconds","type":"flags.17?int"},{"name":"slowmode_next_send_date","type":"flags.18?int"},{"name":"pts","type":"int"}],"type":"ChatFull"},{"id":"182649427","predicate":"messageRange","params":[{"name":"min_id","type":"int"},{"name":"max_id","type":"int"}],"type":"MessageRange"},{"id":"-1725551049","predicate":"messages.channelMessages","params":[{"name":"flags","type":"#"},{"name":"inexact","type":"flags.1?true"},{"name":"pts","type":"int"},{"name":"count","type":"int"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.Messages"},{"id":"-1781355374","predicate":"messageActionChannelCreate","params":[{"name":"title","type":"string"}],"type":"MessageAction"},{"id":"-352032773","predicate":"updateChannelTooLong","params":[{"name":"flags","type":"#"},{"name":"channel_id","type":"int"},{"name":"pts","type":"flags.0?int"}],"type":"Update"},{"id":"-1227598250","predicate":"updateChannel","params":[{"name":"channel_id","type":"int"}],"type":"Update"},{"id":"1656358105","predicate":"updateNewChannelMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"856380452","predicate":"updateReadChannelInbox","params":[{"name":"flags","type":"#"},{"name":"folder_id","type":"flags.0?int"},{"name":"channel_id","type":"int"},{"name":"max_id","type":"int"},{"name":"still_unread_count","type":"int"},{"name":"pts","type":"int"}],"type":"Update"},{"id":"-1015733815","predicate":"updateDeleteChannelMessages","params":[{"name":"channel_id","type":"int"},{"name":"messages","type":"Vector<int>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1734268085","predicate":"updateChannelMessageViews","params":[{"name":"channel_id","type":"int"},{"name":"id","type":"int"},{"name":"views","type":"int"}],"type":"Update"},{"id":"1041346555","predicate":"updates.channelDifferenceEmpty","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"}],"type":"updates.ChannelDifference"},{"id":"-1531132162","predicate":"updates.channelDifferenceTooLong","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"timeout","type":"flags.1?int"},{"name":"dialog","type":"Dialog"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"543450958","predicate":"updates.channelDifference","params":[{"name":"flags","type":"#"},{"name":"final","type":"flags.0?true"},{"name":"pts","type":"int"},{"name":"timeout","type":"flags.1?int"},{"name":"new_messages","type":"Vector<Message>"},{"name":"other_updates","type":"Vector<Update>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"updates.ChannelDifference"},{"id":"-1798033689","predicate":"channelMessagesFilterEmpty","params":[],"type":"ChannelMessagesFilter"},{"id":"-847783593","predicate":"channelMessagesFilter","params":[{"name":"flags","type":"#"},{"name":"exclude_new_messages","type":"flags.1?true"},{"name":"ranges","type":"Vector<MessageRange>"}],"type":"ChannelMessagesFilter"},{"id":"367766557","predicate":"channelParticipant","params":[{"name":"user_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-1557620115","predicate":"channelParticipantSelf","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChannelParticipant"},{"id":"-2138237532","predicate":"channelParticipantCreator","params":[{"name":"flags","type":"#"},{"name":"user_id","type":"int"},{"name":"rank","type":"flags.0?string"}],"type":"ChannelParticipant"},{"id":"-566281095","predicate":"channelParticipantsRecent","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1268741783","predicate":"channelParticipantsAdmins","params":[],"type":"ChannelParticipantsFilter"},{"id":"-1548400251","predicate":"channelParticipantsKicked","params":[{"name":"q","type":"string"}],"type":"ChannelParticipantsFilter"},{"id":"-177282392","predicate":"channels.channelParticipants","params":[{"name":"count","type":"int"},{"name":"participants","type":"Vector<ChannelParticipant>"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipants"},{"id":"-791039645","predicate":"channels.channelParticipant","params":[{"name":"participant","type":"ChannelParticipant"},{"name":"users","type":"Vector<User>"}],"type":"channels.ChannelParticipant"},{"id":"-636267638","predicate":"chatParticipantCreator","params":[{"name":"user_id","type":"int"}],"type":"ChatParticipant"},{"id":"-489233354","predicate":"chatParticipantAdmin","params":[{"name":"user_id","type":"int"},{"name":"inviter_id","type":"int"},{"name":"date","type":"int"}],"type":"ChatParticipant"},{"id":"-1232070311","predicate":"updateChatParticipantAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"int"},{"name":"is_admin","type":"Bool"},{"name":"version","type":"int"}],"type":"Update"},{"id":"1371385889","predicate":"messageActionChatMigrateTo","params":[{"name":"channel_id","type":"int"}],"type":"MessageAction"},{"id":"-1336546578","predicate":"messageActionChannelMigrateFrom","params":[{"name":"title","type":"string"},{"name":"chat_id","type":"int"}],"type":"MessageAction"},{"id":"-1328445861","predicate":"channelParticipantsBots","params":[],"type":"ChannelParticipantsFilter"},{"id":"2013922064","predicate":"help.termsOfService","params":[{"name":"flags","type":"#"},{"name":"popup","type":"flags.0?true"},{"name":"id","type":"DataJSON"},{"name":"text","type":"string"},{"name":"entities","type":"Vector<MessageEntity>"},{"name":"min_age_confirm","type":"flags.1?int"}],"type":"help.TermsOfService"},{"id":"1753886890","predicate":"updateNewStickerSet","params":[{"name":"stickerset","type":"messages.StickerSet"}],"type":"Update"},{"id":"196268545","predicate":"updateStickerSetsOrder","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"order","type":"Vector<long>"}],"type":"Update"},{"id":"1135492588","predicate":"updateStickerSets","params":[],"type":"Update"},{"id":"372165663","predicate":"foundGif","params":[{"name":"url","type":"string"},{"name":"thumb_url","type":"string"},{"name":"content_url","type":"string"},{"name":"content_type","type":"string"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"FoundGif"},{"id":"-1670052855","predicate":"foundGifCached","params":[{"name":"url","type":"string"},{"name":"photo","type":"Photo"},{"name":"document","type":"Document"}],"type":"FoundGif"},{"id":"1212395773","predicate":"inputMediaGifExternal","params":[{"name":"url","type":"string"},{"name":"q","type":"string"}],"type":"InputMedia"},{"id":"1158290442","predicate":"messages.foundGifs","params":[{"name":"next_offset","type":"int"},{"name":"results","type":"Vector<FoundGif>"}],"type":"messages.FoundGifs"},{"id":"-402498398","predicate":"messages.savedGifsNotModified","params":[],"type":"messages.SavedGifs"},{"id":"772213157","predicate":"messages.savedGifs","params":[{"name":"hash","type":"int"},{"name":"gifs","type":"Vector<Document>"}],"type":"messages.SavedGifs"},{"id":"-1821035490","predicate":"updateSavedGifs","params":[],"type":"Update"},{"id":"864077702","predicate":"inputBotInlineMessageMediaAuto","params":[{"name":"flags","type":"#"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"1036876423","predicate":"inputBotInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-2000710887","predicate":"inputBotInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb","type":"flags.4?InputWebDocument"},{"name":"content","type":"flags.5?InputWebDocument"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"1984755728","predicate":"botInlineMessageMediaAuto","params":[{"name":"flags","type":"#"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1937807902","predicate":"botInlineMessageText","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"295067450","predicate":"botInlineResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"url","type":"flags.3?string"},{"name":"thumb","type":"flags.4?WebDocument"},{"name":"content","type":"flags.5?WebDocument"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"-1803769784","predicate":"messages.botResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"query_id","type":"long"},{"name":"next_offset","type":"flags.1?string"},{"name":"switch_pm","type":"flags.2?InlineBotSwitchPM"},{"name":"results","type":"Vector<BotInlineResult>"},{"name":"cache_time","type":"int"},{"name":"users","type":"Vector<User>"}],"type":"messages.BotResults"},{"id":"1417832080","predicate":"updateBotInlineQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"geo","type":"flags.0?GeoPoint"},{"name":"offset","type":"string"}],"type":"Update"},{"id":"239663460","predicate":"updateBotInlineSend","params":[{"name":"flags","type":"#"},{"name":"user_id","type":"int"},{"name":"query","type":"string"},{"name":"geo","type":"flags.0?GeoPoint"},{"name":"id","type":"string"},{"name":"msg_id","type":"flags.1?InputBotInlineMessageID"}],"type":"Update"},{"id":"1358283666","predicate":"inputMessagesFilterVoice","params":[],"type":"MessagesFilter"},{"id":"928101534","predicate":"inputMessagesFilterMusic","params":[],"type":"MessagesFilter"},{"id":"-1107622874","predicate":"inputPrivacyKeyChatInvite","params":[],"type":"InputPrivacyKey"},{"id":"1343122938","predicate":"privacyKeyChatInvite","params":[],"type":"PrivacyKey"},{"id":"1571494644","predicate":"exportedMessageLink","params":[{"name":"link","type":"string"},{"name":"html","type":"string"}],"type":"ExportedMessageLink"},{"id":"-332168592","predicate":"messageFwdHeader","params":[{"name":"flags","type":"#"},{"name":"from_id","type":"flags.0?int"},{"name":"from_name","type":"flags.5?string"},{"name":"date","type":"int"},{"name":"channel_id","type":"flags.1?int"},{"name":"channel_post","type":"flags.2?int"},{"name":"post_author","type":"flags.3?string"},{"name":"saved_from_peer","type":"flags.4?Peer"},{"name":"saved_from_msg_id","type":"flags.4?int"}],"type":"MessageFwdHeader"},{"id":"457133559","predicate":"updateEditChannelMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1738988427","predicate":"updateChannelPinnedMessage","params":[{"name":"channel_id","type":"int"},{"name":"id","type":"int"}],"type":"Update"},{"id":"-1799538451","predicate":"messageActionPinMessage","params":[],"type":"MessageAction"},{"id":"1923290508","predicate":"auth.codeTypeSms","params":[],"type":"auth.CodeType"},{"id":"1948046307","predicate":"auth.codeTypeCall","params":[],"type":"auth.CodeType"},{"id":"577556219","predicate":"auth.codeTypeFlashCall","params":[],"type":"auth.CodeType"},{"id":"1035688326","predicate":"auth.sentCodeTypeApp","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"-1073693790","predicate":"auth.sentCodeTypeSms","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"1398007207","predicate":"auth.sentCodeTypeCall","params":[{"name":"length","type":"int"}],"type":"auth.SentCodeType"},{"id":"-1425815847","predicate":"auth.sentCodeTypeFlashCall","params":[{"name":"pattern","type":"string"}],"type":"auth.SentCodeType"},{"id":"629866245","predicate":"keyboardButtonUrl","params":[{"name":"text","type":"string"},{"name":"url","type":"string"}],"type":"KeyboardButton"},{"id":"1748655686","predicate":"keyboardButtonCallback","params":[{"name":"text","type":"string"},{"name":"data","type":"bytes"}],"type":"KeyboardButton"},{"id":"-1318425559","predicate":"keyboardButtonRequestPhone","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"-59151553","predicate":"keyboardButtonRequestGeoLocation","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"90744648","predicate":"keyboardButtonSwitchInline","params":[{"name":"flags","type":"#"},{"name":"same_peer","type":"flags.0?true"},{"name":"text","type":"string"},{"name":"query","type":"string"}],"type":"KeyboardButton"},{"id":"1218642516","predicate":"replyInlineMarkup","params":[{"name":"rows","type":"Vector<KeyboardButtonRow>"}],"type":"ReplyMarkup"},{"id":"911761060","predicate":"messages.botCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"alert","type":"flags.1?true"},{"name":"has_url","type":"flags.3?true"},{"name":"native_ui","type":"flags.4?true"},{"name":"message","type":"flags.0?string"},{"name":"url","type":"flags.2?string"},{"name":"cache_time","type":"int"}],"type":"messages.BotCallbackAnswer"},{"id":"-415938591","predicate":"updateBotCallbackQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"peer","type":"Peer"},{"name":"msg_id","type":"int"},{"name":"chat_instance","type":"long"},{"name":"data","type":"flags.0?bytes"},{"name":"game_short_name","type":"flags.1?string"}],"type":"Update"},{"id":"649453030","predicate":"messages.messageEditData","params":[{"name":"flags","type":"#"},{"name":"caption","type":"flags.0?true"}],"type":"messages.MessageEditData"},{"id":"-469536605","predicate":"updateEditMessage","params":[{"name":"message","type":"Message"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1045340827","predicate":"inputBotInlineMessageMediaGeo","params":[{"name":"flags","type":"#"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"period","type":"int"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"1098628881","predicate":"inputBotInlineMessageMediaVenue","params":[{"name":"flags","type":"#"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"venue_type","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-1494368259","predicate":"inputBotInlineMessageMediaContact","params":[{"name":"flags","type":"#"},{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"vcard","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-1222451611","predicate":"botInlineMessageMediaGeo","params":[{"name":"flags","type":"#"},{"name":"geo","type":"GeoPoint"},{"name":"period","type":"int"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1970903652","predicate":"botInlineMessageMediaVenue","params":[{"name":"flags","type":"#"},{"name":"geo","type":"GeoPoint"},{"name":"title","type":"string"},{"name":"address","type":"string"},{"name":"provider","type":"string"},{"name":"venue_id","type":"string"},{"name":"venue_type","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"416402882","predicate":"botInlineMessageMediaContact","params":[{"name":"flags","type":"#"},{"name":"phone_number","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"vcard","type":"string"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"BotInlineMessage"},{"id":"-1462213465","predicate":"inputBotInlineResultPhoto","params":[{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"photo","type":"InputPhoto"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"-459324","predicate":"inputBotInlineResultDocument","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"title","type":"flags.1?string"},{"name":"description","type":"flags.2?string"},{"name":"document","type":"InputDocument"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"400266251","predicate":"botInlineMediaResult","params":[{"name":"flags","type":"#"},{"name":"id","type":"string"},{"name":"type","type":"string"},{"name":"photo","type":"flags.0?Photo"},{"name":"document","type":"flags.1?Document"},{"name":"title","type":"flags.2?string"},{"name":"description","type":"flags.3?string"},{"name":"send_message","type":"BotInlineMessage"}],"type":"BotInlineResult"},{"id":"-1995686519","predicate":"inputBotInlineMessageID","params":[{"name":"dc_id","type":"int"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputBotInlineMessageID"},{"id":"-103646630","predicate":"updateInlineBotCallbackQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"msg_id","type":"InputBotInlineMessageID"},{"name":"chat_instance","type":"long"},{"name":"data","type":"flags.0?bytes"},{"name":"game_short_name","type":"flags.1?string"}],"type":"Update"},{"id":"1008755359","predicate":"inlineBotSwitchPM","params":[{"name":"text","type":"string"},{"name":"start_param","type":"string"}],"type":"InlineBotSwitchPM"},{"id":"863093588","predicate":"messages.peerDialogs","params":[{"name":"dialogs","type":"Vector<Dialog>"},{"name":"messages","type":"Vector<Message>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"},{"name":"state","type":"updates.State"}],"type":"messages.PeerDialogs"},{"id":"-305282981","predicate":"topPeer","params":[{"name":"peer","type":"Peer"},{"name":"rating","type":"double"}],"type":"TopPeer"},{"id":"-1419371685","predicate":"topPeerCategoryBotsPM","params":[],"type":"TopPeerCategory"},{"id":"344356834","predicate":"topPeerCategoryBotsInline","params":[],"type":"TopPeerCategory"},{"id":"104314861","predicate":"topPeerCategoryCorrespondents","params":[],"type":"TopPeerCategory"},{"id":"-1122524854","predicate":"topPeerCategoryGroups","params":[],"type":"TopPeerCategory"},{"id":"371037736","predicate":"topPeerCategoryChannels","params":[],"type":"TopPeerCategory"},{"id":"-75283823","predicate":"topPeerCategoryPeers","params":[{"name":"category","type":"TopPeerCategory"},{"name":"count","type":"int"},{"name":"peers","type":"Vector<TopPeer>"}],"type":"TopPeerCategoryPeers"},{"id":"-567906571","predicate":"contacts.topPeersNotModified","params":[],"type":"contacts.TopPeers"},{"id":"1891070632","predicate":"contacts.topPeers","params":[{"name":"categories","type":"Vector<TopPeerCategoryPeers>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"contacts.TopPeers"},{"id":"892193368","predicate":"messageEntityMentionName","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"user_id","type":"int"}],"type":"MessageEntity"},{"id":"546203849","predicate":"inputMessageEntityMentionName","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"MessageEntity"},{"id":"975236280","predicate":"inputMessagesFilterChatPhotos","params":[],"type":"MessagesFilter"},{"id":"634833351","predicate":"updateReadChannelOutbox","params":[{"name":"channel_id","type":"int"},{"name":"max_id","type":"int"}],"type":"Update"},{"id":"-299124375","predicate":"updateDraftMessage","params":[{"name":"peer","type":"Peer"},{"name":"draft","type":"DraftMessage"}],"type":"Update"},{"id":"453805082","predicate":"draftMessageEmpty","params":[{"name":"flags","type":"#"},{"name":"date","type":"flags.0?int"}],"type":"DraftMessage"},{"id":"-40996577","predicate":"draftMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"message","type":"string"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"date","type":"int"}],"type":"DraftMessage"},{"id":"-1615153660","predicate":"messageActionHistoryClear","params":[],"type":"MessageAction"},{"id":"82699215","predicate":"messages.featuredStickersNotModified","params":[],"type":"messages.FeaturedStickers"},{"id":"-123893531","predicate":"messages.featuredStickers","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSetCovered>"},{"name":"unread","type":"Vector<long>"}],"type":"messages.FeaturedStickers"},{"id":"1461528386","predicate":"updateReadFeaturedStickers","params":[],"type":"Update"},{"id":"186120336","predicate":"messages.recentStickersNotModified","params":[],"type":"messages.RecentStickers"},{"id":"586395571","predicate":"messages.recentStickers","params":[{"name":"hash","type":"int"},{"name":"packs","type":"Vector<StickerPack>"},{"name":"stickers","type":"Vector<Document>"},{"name":"dates","type":"Vector<int>"}],"type":"messages.RecentStickers"},{"id":"-1706939360","predicate":"updateRecentStickers","params":[],"type":"Update"},{"id":"1338747336","predicate":"messages.archivedStickers","params":[{"name":"count","type":"int"},{"name":"sets","type":"Vector<StickerSetCovered>"}],"type":"messages.ArchivedStickers"},{"id":"946083368","predicate":"messages.stickerSetInstallResultSuccess","params":[],"type":"messages.StickerSetInstallResult"},{"id":"904138920","predicate":"messages.stickerSetInstallResultArchive","params":[{"name":"sets","type":"Vector<StickerSetCovered>"}],"type":"messages.StickerSetInstallResult"},{"id":"1678812626","predicate":"stickerSetCovered","params":[{"name":"set","type":"StickerSet"},{"name":"cover","type":"Document"}],"type":"StickerSetCovered"},{"id":"-1574314746","predicate":"updateConfig","params":[],"type":"Update"},{"id":"861169551","predicate":"updatePtsChanged","params":[],"type":"Update"},{"id":"-440664550","predicate":"inputMediaPhotoExternal","params":[{"name":"flags","type":"#"},{"name":"url","type":"string"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"-78455655","predicate":"inputMediaDocumentExternal","params":[{"name":"flags","type":"#"},{"name":"url","type":"string"},{"name":"ttl_seconds","type":"flags.0?int"}],"type":"InputMedia"},{"id":"872932635","predicate":"stickerSetMultiCovered","params":[{"name":"set","type":"StickerSet"},{"name":"covers","type":"Vector<Document>"}],"type":"StickerSetCovered"},{"id":"-1361650766","predicate":"maskCoords","params":[{"name":"n","type":"int"},{"name":"x","type":"double"},{"name":"y","type":"double"},{"name":"zoom","type":"double"}],"type":"MaskCoords"},{"id":"-1744710921","predicate":"documentAttributeHasStickers","params":[],"type":"DocumentAttribute"},{"id":"1251549527","predicate":"inputStickeredMediaPhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"InputStickeredMedia"},{"id":"70813275","predicate":"inputStickeredMediaDocument","params":[{"name":"id","type":"InputDocument"}],"type":"InputStickeredMedia"},{"id":"-1107729093","predicate":"game","params":[{"name":"flags","type":"#"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"short_name","type":"string"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"photo","type":"Photo"},{"name":"document","type":"flags.0?Document"}],"type":"Game"},{"id":"1336154098","predicate":"inputBotInlineResultGame","params":[{"name":"id","type":"string"},{"name":"short_name","type":"string"},{"name":"send_message","type":"InputBotInlineMessage"}],"type":"InputBotInlineResult"},{"id":"1262639204","predicate":"inputBotInlineMessageGame","params":[{"name":"flags","type":"#"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"}],"type":"InputBotInlineMessage"},{"id":"-38694904","predicate":"messageMediaGame","params":[{"name":"game","type":"Game"}],"type":"MessageMedia"},{"id":"-750828557","predicate":"inputMediaGame","params":[{"name":"id","type":"InputGame"}],"type":"InputMedia"},{"id":"53231223","predicate":"inputGameID","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputGame"},{"id":"-1020139510","predicate":"inputGameShortName","params":[{"name":"bot_id","type":"InputUser"},{"name":"short_name","type":"string"}],"type":"InputGame"},{"id":"1358175439","predicate":"keyboardButtonGame","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"-1834538890","predicate":"messageActionGameScore","params":[{"name":"game_id","type":"long"},{"name":"score","type":"int"}],"type":"MessageAction"},{"id":"1493171408","predicate":"highScore","params":[{"name":"pos","type":"int"},{"name":"user_id","type":"int"},{"name":"score","type":"int"}],"type":"HighScore"},{"id":"-1707344487","predicate":"messages.highScores","params":[{"name":"scores","type":"Vector<HighScore>"},{"name":"users","type":"Vector<User>"}],"type":"messages.HighScores"},{"id":"1258196845","predicate":"updates.differenceTooLong","params":[{"name":"pts","type":"int"}],"type":"updates.Difference"},{"id":"1081547008","predicate":"updateChannelWebPage","params":[{"name":"channel_id","type":"int"},{"name":"webpage","type":"WebPage"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"-1663561404","predicate":"messages.chatsSlice","params":[{"name":"count","type":"int"},{"name":"chats","type":"Vector<Chat>"}],"type":"messages.Chats"},{"id":"-599948721","predicate":"textEmpty","params":[],"type":"RichText"},{"id":"1950782688","predicate":"textPlain","params":[{"name":"text","type":"string"}],"type":"RichText"},{"id":"1730456516","predicate":"textBold","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"-653089380","predicate":"textItalic","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"-1054465340","predicate":"textUnderline","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"-1678197867","predicate":"textStrike","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"1816074681","predicate":"textFixed","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"1009288385","predicate":"textUrl","params":[{"name":"text","type":"RichText"},{"name":"url","type":"string"},{"name":"webpage_id","type":"long"}],"type":"RichText"},{"id":"-564523562","predicate":"textEmail","params":[{"name":"text","type":"RichText"},{"name":"email","type":"string"}],"type":"RichText"},{"id":"2120376535","predicate":"textConcat","params":[{"name":"texts","type":"Vector<RichText>"}],"type":"RichText"},{"id":"324435594","predicate":"pageBlockUnsupported","params":[],"type":"PageBlock"},{"id":"1890305021","predicate":"pageBlockTitle","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-1879401953","predicate":"pageBlockSubtitle","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-1162877472","predicate":"pageBlockAuthorDate","params":[{"name":"author","type":"RichText"},{"name":"published_date","type":"int"}],"type":"PageBlock"},{"id":"-1076861716","predicate":"pageBlockHeader","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-248793375","predicate":"pageBlockSubheader","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"1182402406","predicate":"pageBlockParagraph","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-1066346178","predicate":"pageBlockPreformatted","params":[{"name":"text","type":"RichText"},{"name":"language","type":"string"}],"type":"PageBlock"},{"id":"1216809369","predicate":"pageBlockFooter","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"-618614392","predicate":"pageBlockDivider","params":[],"type":"PageBlock"},{"id":"-837994576","predicate":"pageBlockAnchor","params":[{"name":"name","type":"string"}],"type":"PageBlock"},{"id":"-454524911","predicate":"pageBlockList","params":[{"name":"items","type":"Vector<PageListItem>"}],"type":"PageBlock"},{"id":"641563686","predicate":"pageBlockBlockquote","params":[{"name":"text","type":"RichText"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"1329878739","predicate":"pageBlockPullquote","params":[{"name":"text","type":"RichText"},{"name":"caption","type":"RichText"}],"type":"PageBlock"},{"id":"391759200","predicate":"pageBlockPhoto","params":[{"name":"flags","type":"#"},{"name":"photo_id","type":"long"},{"name":"caption","type":"PageCaption"},{"name":"url","type":"flags.0?string"},{"name":"webpage_id","type":"flags.0?long"}],"type":"PageBlock"},{"id":"2089805750","predicate":"pageBlockVideo","params":[{"name":"flags","type":"#"},{"name":"autoplay","type":"flags.0?true"},{"name":"loop","type":"flags.1?true"},{"name":"video_id","type":"long"},{"name":"caption","type":"PageCaption"}],"type":"PageBlock"},{"id":"972174080","predicate":"pageBlockCover","params":[{"name":"cover","type":"PageBlock"}],"type":"PageBlock"},{"id":"-1468953147","predicate":"pageBlockEmbed","params":[{"name":"flags","type":"#"},{"name":"full_width","type":"flags.0?true"},{"name":"allow_scrolling","type":"flags.3?true"},{"name":"url","type":"flags.1?string"},{"name":"html","type":"flags.2?string"},{"name":"poster_photo_id","type":"flags.4?long"},{"name":"w","type":"flags.5?int"},{"name":"h","type":"flags.5?int"},{"name":"caption","type":"PageCaption"}],"type":"PageBlock"},{"id":"-229005301","predicate":"pageBlockEmbedPost","params":[{"name":"url","type":"string"},{"name":"webpage_id","type":"long"},{"name":"author_photo_id","type":"long"},{"name":"author","type":"string"},{"name":"date","type":"int"},{"name":"blocks","type":"Vector<PageBlock>"},{"name":"caption","type":"PageCaption"}],"type":"PageBlock"},{"id":"1705048653","predicate":"pageBlockCollage","params":[{"name":"items","type":"Vector<PageBlock>"},{"name":"caption","type":"PageCaption"}],"type":"PageBlock"},{"id":"52401552","predicate":"pageBlockSlideshow","params":[{"name":"items","type":"Vector<PageBlock>"},{"name":"caption","type":"PageCaption"}],"type":"PageBlock"},{"id":"-2054908813","predicate":"webPageNotModified","params":[],"type":"WebPage"},{"id":"-88417185","predicate":"inputPrivacyKeyPhoneCall","params":[],"type":"InputPrivacyKey"},{"id":"1030105979","predicate":"privacyKeyPhoneCall","params":[],"type":"PrivacyKey"},{"id":"-580219064","predicate":"sendMessageGamePlayAction","params":[],"type":"SendMessageAction"},{"id":"-2048646399","predicate":"phoneCallDiscardReasonMissed","params":[],"type":"PhoneCallDiscardReason"},{"id":"-527056480","predicate":"phoneCallDiscardReasonDisconnect","params":[],"type":"PhoneCallDiscardReason"},{"id":"1471006352","predicate":"phoneCallDiscardReasonHangup","params":[],"type":"PhoneCallDiscardReason"},{"id":"-84416311","predicate":"phoneCallDiscardReasonBusy","params":[],"type":"PhoneCallDiscardReason"},{"id":"1852826908","predicate":"updateDialogPinned","params":[{"name":"flags","type":"#"},{"name":"pinned","type":"flags.0?true"},{"name":"folder_id","type":"flags.1?int"},{"name":"peer","type":"DialogPeer"}],"type":"Update"},{"id":"-99664734","predicate":"updatePinnedDialogs","params":[{"name":"flags","type":"#"},{"name":"folder_id","type":"flags.1?int"},{"name":"order","type":"flags.0?Vector<DialogPeer>"}],"type":"Update"},{"id":"2104790276","predicate":"dataJSON","params":[{"name":"data","type":"string"}],"type":"DataJSON"},{"id":"-2095595325","predicate":"updateBotWebhookJSON","params":[{"name":"data","type":"DataJSON"}],"type":"Update"},{"id":"-1684914010","predicate":"updateBotWebhookJSONQuery","params":[{"name":"query_id","type":"long"},{"name":"data","type":"DataJSON"},{"name":"timeout","type":"int"}],"type":"Update"},{"id":"-886477832","predicate":"labeledPrice","params":[{"name":"label","type":"string"},{"name":"amount","type":"long"}],"type":"LabeledPrice"},{"id":"-1022713000","predicate":"invoice","params":[{"name":"flags","type":"#"},{"name":"test","type":"flags.0?true"},{"name":"name_requested","type":"flags.1?true"},{"name":"phone_requested","type":"flags.2?true"},{"name":"email_requested","type":"flags.3?true"},{"name":"shipping_address_requested","type":"flags.4?true"},{"name":"flexible","type":"flags.5?true"},{"name":"phone_to_provider","type":"flags.6?true"},{"name":"email_to_provider","type":"flags.7?true"},{"name":"currency","type":"string"},{"name":"prices","type":"Vector<LabeledPrice>"}],"type":"Invoice"},{"id":"-186607933","predicate":"inputMediaInvoice","params":[{"name":"flags","type":"#"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"photo","type":"flags.0?InputWebDocument"},{"name":"invoice","type":"Invoice"},{"name":"payload","type":"bytes"},{"name":"provider","type":"string"},{"name":"provider_data","type":"DataJSON"},{"name":"start_param","type":"string"}],"type":"InputMedia"},{"id":"-368917890","predicate":"paymentCharge","params":[{"name":"id","type":"string"},{"name":"provider_charge_id","type":"string"}],"type":"PaymentCharge"},{"id":"-1892568281","predicate":"messageActionPaymentSentMe","params":[{"name":"flags","type":"#"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"},{"name":"payload","type":"bytes"},{"name":"info","type":"flags.0?PaymentRequestedInfo"},{"name":"shipping_option_id","type":"flags.1?string"},{"name":"charge","type":"PaymentCharge"}],"type":"MessageAction"},{"id":"-2074799289","predicate":"messageMediaInvoice","params":[{"name":"flags","type":"#"},{"name":"shipping_address_requested","type":"flags.1?true"},{"name":"test","type":"flags.3?true"},{"name":"title","type":"string"},{"name":"description","type":"string"},{"name":"photo","type":"flags.0?WebDocument"},{"name":"receipt_msg_id","type":"flags.2?int"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"},{"name":"start_param","type":"string"}],"type":"MessageMedia"},{"id":"512535275","predicate":"postAddress","params":[{"name":"street_line1","type":"string"},{"name":"street_line2","type":"string"},{"name":"city","type":"string"},{"name":"state","type":"string"},{"name":"country_iso2","type":"string"},{"name":"post_code","type":"string"}],"type":"PostAddress"},{"id":"-1868808300","predicate":"paymentRequestedInfo","params":[{"name":"flags","type":"#"},{"name":"name","type":"flags.0?string"},{"name":"phone","type":"flags.1?string"},{"name":"email","type":"flags.2?string"},{"name":"shipping_address","type":"flags.3?PostAddress"}],"type":"PaymentRequestedInfo"},{"id":"-1344716869","predicate":"keyboardButtonBuy","params":[{"name":"text","type":"string"}],"type":"KeyboardButton"},{"id":"1080663248","predicate":"messageActionPaymentSent","params":[{"name":"currency","type":"string"},{"name":"total_amount","type":"long"}],"type":"MessageAction"},{"id":"-842892769","predicate":"paymentSavedCredentialsCard","params":[{"name":"id","type":"string"},{"name":"title","type":"string"}],"type":"PaymentSavedCredentials"},{"id":"475467473","predicate":"webDocument","params":[{"name":"url","type":"string"},{"name":"access_hash","type":"long"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"WebDocument"},{"id":"-1678949555","predicate":"inputWebDocument","params":[{"name":"url","type":"string"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"InputWebDocument"},{"id":"-1036396922","predicate":"inputWebFileLocation","params":[{"name":"url","type":"string"},{"name":"access_hash","type":"long"}],"type":"InputWebFileLocation"},{"id":"568808380","predicate":"upload.webFile","params":[{"name":"size","type":"int"},{"name":"mime_type","type":"string"},{"name":"file_type","type":"storage.FileType"},{"name":"mtime","type":"int"},{"name":"bytes","type":"bytes"}],"type":"upload.WebFile"},{"id":"1062645411","predicate":"payments.paymentForm","params":[{"name":"flags","type":"#"},{"name":"can_save_credentials","type":"flags.2?true"},{"name":"password_missing","type":"flags.3?true"},{"name":"bot_id","type":"int"},{"name":"invoice","type":"Invoice"},{"name":"provider_id","type":"int"},{"name":"url","type":"string"},{"name":"native_provider","type":"flags.4?string"},{"name":"native_params","type":"flags.4?DataJSON"},{"name":"saved_info","type":"flags.0?PaymentRequestedInfo"},{"name":"saved_credentials","type":"flags.1?PaymentSavedCredentials"},{"name":"users","type":"Vector<User>"}],"type":"payments.PaymentForm"},{"id":"-784000893","predicate":"payments.validatedRequestedInfo","params":[{"name":"flags","type":"#"},{"name":"id","type":"flags.0?string"},{"name":"shipping_options","type":"flags.1?Vector<ShippingOption>"}],"type":"payments.ValidatedRequestedInfo"},{"id":"1314881805","predicate":"payments.paymentResult","params":[{"name":"updates","type":"Updates"}],"type":"payments.PaymentResult"},{"id":"1342771681","predicate":"payments.paymentReceipt","params":[{"name":"flags","type":"#"},{"name":"date","type":"int"},{"name":"bot_id","type":"int"},{"name":"invoice","type":"Invoice"},{"name":"provider_id","type":"int"},{"name":"info","type":"flags.0?PaymentRequestedInfo"},{"name":"shipping","type":"flags.1?ShippingOption"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"},{"name":"credentials_title","type":"string"},{"name":"users","type":"Vector<User>"}],"type":"payments.PaymentReceipt"},{"id":"-74456004","predicate":"payments.savedInfo","params":[{"name":"flags","type":"#"},{"name":"has_saved_credentials","type":"flags.1?true"},{"name":"saved_info","type":"flags.0?PaymentRequestedInfo"}],"type":"payments.SavedInfo"},{"id":"-1056001329","predicate":"inputPaymentCredentialsSaved","params":[{"name":"id","type":"string"},{"name":"tmp_password","type":"bytes"}],"type":"InputPaymentCredentials"},{"id":"873977640","predicate":"inputPaymentCredentials","params":[{"name":"flags","type":"#"},{"name":"save","type":"flags.0?true"},{"name":"data","type":"DataJSON"}],"type":"InputPaymentCredentials"},{"id":"-614138572","predicate":"account.tmpPassword","params":[{"name":"tmp_password","type":"bytes"},{"name":"valid_until","type":"int"}],"type":"account.TmpPassword"},{"id":"-1239335713","predicate":"shippingOption","params":[{"name":"id","type":"string"},{"name":"title","type":"string"},{"name":"prices","type":"Vector<LabeledPrice>"}],"type":"ShippingOption"},{"id":"-523384512","predicate":"updateBotShippingQuery","params":[{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"payload","type":"bytes"},{"name":"shipping_address","type":"PostAddress"}],"type":"Update"},{"id":"1563376297","predicate":"updateBotPrecheckoutQuery","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"user_id","type":"int"},{"name":"payload","type":"bytes"},{"name":"info","type":"flags.0?PaymentRequestedInfo"},{"name":"shipping_option_id","type":"flags.1?string"},{"name":"currency","type":"string"},{"name":"total_amount","type":"long"}],"type":"Update"},{"id":"-6249322","predicate":"inputStickerSetItem","params":[{"name":"flags","type":"#"},{"name":"document","type":"InputDocument"},{"name":"emoji","type":"string"},{"name":"mask_coords","type":"flags.0?MaskCoords"}],"type":"InputStickerSetItem"},{"id":"-1425052898","predicate":"updatePhoneCall","params":[{"name":"phone_call","type":"PhoneCall"}],"type":"Update"},{"id":"506920429","predicate":"inputPhoneCall","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputPhoneCall"},{"id":"1399245077","predicate":"phoneCallEmpty","params":[{"name":"id","type":"long"}],"type":"PhoneCall"},{"id":"462375633","predicate":"phoneCallWaiting","params":[{"name":"flags","type":"#"},{"name":"video","type":"flags.5?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"protocol","type":"PhoneCallProtocol"},{"name":"receive_date","type":"flags.0?int"}],"type":"PhoneCall"},{"id":"-2014659757","predicate":"phoneCallRequested","params":[{"name":"flags","type":"#"},{"name":"video","type":"flags.5?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_hash","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"PhoneCall"},{"id":"-1719909046","predicate":"phoneCallAccepted","params":[{"name":"flags","type":"#"},{"name":"video","type":"flags.5?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_b","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"PhoneCall"},{"id":"-2025673089","predicate":"phoneCall","params":[{"name":"flags","type":"#"},{"name":"p2p_allowed","type":"flags.5?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"date","type":"int"},{"name":"admin_id","type":"int"},{"name":"participant_id","type":"int"},{"name":"g_a_or_b","type":"bytes"},{"name":"key_fingerprint","type":"long"},{"name":"protocol","type":"PhoneCallProtocol"},{"name":"connections","type":"Vector<PhoneConnection>"},{"name":"start_date","type":"int"}],"type":"PhoneCall"},{"id":"1355435489","predicate":"phoneCallDiscarded","params":[{"name":"flags","type":"#"},{"name":"need_rating","type":"flags.2?true"},{"name":"need_debug","type":"flags.3?true"},{"name":"video","type":"flags.5?true"},{"name":"id","type":"long"},{"name":"reason","type":"flags.0?PhoneCallDiscardReason"},{"name":"duration","type":"flags.1?int"}],"type":"PhoneCall"},{"id":"-1655957568","predicate":"phoneConnection","params":[{"name":"id","type":"long"},{"name":"ip","type":"string"},{"name":"ipv6","type":"string"},{"name":"port","type":"int"},{"name":"peer_tag","type":"bytes"}],"type":"PhoneConnection"},{"id":"-1564789301","predicate":"phoneCallProtocol","params":[{"name":"flags","type":"#"},{"name":"udp_p2p","type":"flags.0?true"},{"name":"udp_reflector","type":"flags.1?true"},{"name":"min_layer","type":"int"},{"name":"max_layer","type":"int"}],"type":"PhoneCallProtocol"},{"id":"-326966976","predicate":"phone.phoneCall","params":[{"name":"phone_call","type":"PhoneCall"},{"name":"users","type":"Vector<User>"}],"type":"phone.PhoneCall"},{"id":"-2134272152","predicate":"inputMessagesFilterPhoneCalls","params":[{"name":"flags","type":"#"},{"name":"missed","type":"flags.0?true"}],"type":"MessagesFilter"},{"id":"-2132731265","predicate":"messageActionPhoneCall","params":[{"name":"flags","type":"#"},{"name":"video","type":"flags.2?true"},{"name":"call_id","type":"long"},{"name":"reason","type":"flags.0?PhoneCallDiscardReason"},{"name":"duration","type":"flags.1?int"}],"type":"MessageAction"},{"id":"2054952868","predicate":"inputMessagesFilterRoundVoice","params":[],"type":"MessagesFilter"},{"id":"-1253451181","predicate":"inputMessagesFilterRoundVideo","params":[],"type":"MessagesFilter"},{"id":"-1997373508","predicate":"sendMessageRecordRoundAction","params":[],"type":"SendMessageAction"},{"id":"608050278","predicate":"sendMessageUploadRoundAction","params":[{"name":"progress","type":"int"}],"type":"SendMessageAction"},{"id":"-242427324","predicate":"upload.fileCdnRedirect","params":[{"name":"dc_id","type":"int"},{"name":"file_token","type":"bytes"},{"name":"encryption_key","type":"bytes"},{"name":"encryption_iv","type":"bytes"},{"name":"file_hashes","type":"Vector<FileHash>"}],"type":"upload.File"},{"id":"-290921362","predicate":"upload.cdnFileReuploadNeeded","params":[{"name":"request_token","type":"bytes"}],"type":"upload.CdnFile"},{"id":"-1449145777","predicate":"upload.cdnFile","params":[{"name":"bytes","type":"bytes"}],"type":"upload.CdnFile"},{"id":"-914167110","predicate":"cdnPublicKey","params":[{"name":"dc_id","type":"int"},{"name":"public_key","type":"string"}],"type":"CdnPublicKey"},{"id":"1462101002","predicate":"cdnConfig","params":[{"name":"public_keys","type":"Vector<CdnPublicKey>"}],"type":"CdnConfig"},{"id":"-283684427","predicate":"pageBlockChannel","params":[{"name":"channel","type":"Chat"}],"type":"PageBlock"},{"id":"-892239370","predicate":"langPackString","params":[{"name":"key","type":"string"},{"name":"value","type":"string"}],"type":"LangPackString"},{"id":"1816636575","predicate":"langPackStringPluralized","params":[{"name":"flags","type":"#"},{"name":"key","type":"string"},{"name":"zero_value","type":"flags.0?string"},{"name":"one_value","type":"flags.1?string"},{"name":"two_value","type":"flags.2?string"},{"name":"few_value","type":"flags.3?string"},{"name":"many_value","type":"flags.4?string"},{"name":"other_value","type":"string"}],"type":"LangPackString"},{"id":"695856818","predicate":"langPackStringDeleted","params":[{"name":"key","type":"string"}],"type":"LangPackString"},{"id":"-209337866","predicate":"langPackDifference","params":[{"name":"lang_code","type":"string"},{"name":"from_version","type":"int"},{"name":"version","type":"int"},{"name":"strings","type":"Vector<LangPackString>"}],"type":"LangPackDifference"},{"id":"-288727837","predicate":"langPackLanguage","params":[{"name":"flags","type":"#"},{"name":"official","type":"flags.0?true"},{"name":"rtl","type":"flags.2?true"},{"name":"beta","type":"flags.3?true"},{"name":"name","type":"string"},{"name":"native_name","type":"string"},{"name":"lang_code","type":"string"},{"name":"base_lang_code","type":"flags.1?string"},{"name":"plural_code","type":"string"},{"name":"strings_count","type":"int"},{"name":"translated_count","type":"int"},{"name":"translations_url","type":"string"}],"type":"LangPackLanguage"},{"id":"1180041828","predicate":"updateLangPackTooLong","params":[{"name":"lang_code","type":"string"}],"type":"Update"},{"id":"1442983757","predicate":"updateLangPack","params":[{"name":"difference","type":"LangPackDifference"}],"type":"Update"},{"id":"-859915345","predicate":"channelParticipantAdmin","params":[{"name":"flags","type":"#"},{"name":"can_edit","type":"flags.0?true"},{"name":"self","type":"flags.1?true"},{"name":"user_id","type":"int"},{"name":"inviter_id","type":"flags.1?int"},{"name":"promoted_by","type":"int"},{"name":"date","type":"int"},{"name":"admin_rights","type":"ChatAdminRights"},{"name":"rank","type":"flags.2?string"}],"type":"ChannelParticipant"},{"id":"470789295","predicate":"channelParticipantBanned","params":[{"name":"flags","type":"#"},{"name":"left","type":"flags.0?true"},{"name":"user_id","type":"int"},{"name":"kicked_by","type":"int"},{"name":"date","type":"int"},{"name":"banned_rights","type":"ChatBannedRights"}],"type":"ChannelParticipant"},{"id":"338142689","predicate":"channelParticipantsBanned","params":[{"name":"q","type":"string"}],"type":"ChannelParticipantsFilter"},{"id":"106343499","predicate":"channelParticipantsSearch","params":[{"name":"q","type":"string"}],"type":"ChannelParticipantsFilter"},{"id":"-421545947","predicate":"channelAdminLogEventActionChangeTitle","params":[{"name":"prev_value","type":"string"},{"name":"new_value","type":"string"}],"type":"ChannelAdminLogEventAction"},{"id":"1427671598","predicate":"channelAdminLogEventActionChangeAbout","params":[{"name":"prev_value","type":"string"},{"name":"new_value","type":"string"}],"type":"ChannelAdminLogEventAction"},{"id":"1783299128","predicate":"channelAdminLogEventActionChangeUsername","params":[{"name":"prev_value","type":"string"},{"name":"new_value","type":"string"}],"type":"ChannelAdminLogEventAction"},{"id":"1129042607","predicate":"channelAdminLogEventActionChangePhoto","params":[{"name":"prev_photo","type":"Photo"},{"name":"new_photo","type":"Photo"}],"type":"ChannelAdminLogEventAction"},{"id":"460916654","predicate":"channelAdminLogEventActionToggleInvites","params":[{"name":"new_value","type":"Bool"}],"type":"ChannelAdminLogEventAction"},{"id":"648939889","predicate":"channelAdminLogEventActionToggleSignatures","params":[{"name":"new_value","type":"Bool"}],"type":"ChannelAdminLogEventAction"},{"id":"-370660328","predicate":"channelAdminLogEventActionUpdatePinned","params":[{"name":"message","type":"Message"}],"type":"ChannelAdminLogEventAction"},{"id":"1889215493","predicate":"channelAdminLogEventActionEditMessage","params":[{"name":"prev_message","type":"Message"},{"name":"new_message","type":"Message"}],"type":"ChannelAdminLogEventAction"},{"id":"1121994683","predicate":"channelAdminLogEventActionDeleteMessage","params":[{"name":"message","type":"Message"}],"type":"ChannelAdminLogEventAction"},{"id":"405815507","predicate":"channelAdminLogEventActionParticipantJoin","params":[],"type":"ChannelAdminLogEventAction"},{"id":"-124291086","predicate":"channelAdminLogEventActionParticipantLeave","params":[],"type":"ChannelAdminLogEventAction"},{"id":"-484690728","predicate":"channelAdminLogEventActionParticipantInvite","params":[{"name":"participant","type":"ChannelParticipant"}],"type":"ChannelAdminLogEventAction"},{"id":"-422036098","predicate":"channelAdminLogEventActionParticipantToggleBan","params":[{"name":"prev_participant","type":"ChannelParticipant"},{"name":"new_participant","type":"ChannelParticipant"}],"type":"ChannelAdminLogEventAction"},{"id":"-714643696","predicate":"channelAdminLogEventActionParticipantToggleAdmin","params":[{"name":"prev_participant","type":"ChannelParticipant"},{"name":"new_participant","type":"ChannelParticipant"}],"type":"ChannelAdminLogEventAction"},{"id":"995769920","predicate":"channelAdminLogEvent","params":[{"name":"id","type":"long"},{"name":"date","type":"int"},{"name":"user_id","type":"int"},{"name":"action","type":"ChannelAdminLogEventAction"}],"type":"ChannelAdminLogEvent"},{"id":"-309659827","predicate":"channels.adminLogResults","params":[{"name":"events","type":"Vector<ChannelAdminLogEvent>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"channels.AdminLogResults"},{"id":"-368018716","predicate":"channelAdminLogEventsFilter","params":[{"name":"flags","type":"#"},{"name":"join","type":"flags.0?true"},{"name":"leave","type":"flags.1?true"},{"name":"invite","type":"flags.2?true"},{"name":"ban","type":"flags.3?true"},{"name":"unban","type":"flags.4?true"},{"name":"kick","type":"flags.5?true"},{"name":"unkick","type":"flags.6?true"},{"name":"promote","type":"flags.7?true"},{"name":"demote","type":"flags.8?true"},{"name":"info","type":"flags.9?true"},{"name":"settings","type":"flags.10?true"},{"name":"pinned","type":"flags.11?true"},{"name":"edit","type":"flags.12?true"},{"name":"delete","type":"flags.13?true"}],"type":"ChannelAdminLogEventsFilter"},{"id":"511092620","predicate":"topPeerCategoryPhoneCalls","params":[],"type":"TopPeerCategory"},{"id":"-2143067670","predicate":"pageBlockAudio","params":[{"name":"audio_id","type":"long"},{"name":"caption","type":"PageCaption"}],"type":"PageBlock"},{"id":"1558266229","predicate":"popularContact","params":[{"name":"client_id","type":"long"},{"name":"importers","type":"int"}],"type":"PopularContact"},{"id":"1200788123","predicate":"messageActionScreenshotTaken","params":[],"type":"MessageAction"},{"id":"-1634752813","predicate":"messages.favedStickersNotModified","params":[],"type":"messages.FavedStickers"},{"id":"-209768682","predicate":"messages.favedStickers","params":[{"name":"hash","type":"int"},{"name":"packs","type":"Vector<StickerPack>"},{"name":"stickers","type":"Vector<Document>"}],"type":"messages.FavedStickers"},{"id":"-451831443","predicate":"updateFavedStickers","params":[],"type":"Update"},{"id":"-1987495099","predicate":"updateChannelReadMessagesContents","params":[{"name":"channel_id","type":"int"},{"name":"messages","type":"Vector<int>"}],"type":"Update"},{"id":"-1040652646","predicate":"inputMessagesFilterMyMentions","params":[],"type":"MessagesFilter"},{"id":"1887741886","predicate":"updateContactsReset","params":[],"type":"Update"},{"id":"-1312568665","predicate":"channelAdminLogEventActionChangeStickerSet","params":[{"name":"prev_stickerset","type":"InputStickerSet"},{"name":"new_stickerset","type":"InputStickerSet"}],"type":"ChannelAdminLogEventAction"},{"id":"-85549226","predicate":"messageActionCustomAction","params":[{"name":"message","type":"string"}],"type":"MessageAction"},{"id":"178373535","predicate":"inputPaymentCredentialsApplePay","params":[{"name":"payment_data","type":"DataJSON"}],"type":"InputPaymentCredentials"},{"id":"-905587442","predicate":"inputPaymentCredentialsAndroidPay","params":[{"name":"payment_token","type":"DataJSON"},{"name":"google_transaction_id","type":"string"}],"type":"InputPaymentCredentials"},{"id":"-419271411","predicate":"inputMessagesFilterGeo","params":[],"type":"MessagesFilter"},{"id":"-530392189","predicate":"inputMessagesFilterContacts","params":[],"type":"MessagesFilter"},{"id":"1893427255","predicate":"updateChannelAvailableMessages","params":[{"name":"channel_id","type":"int"},{"name":"available_min_id","type":"int"}],"type":"Update"},{"id":"1599903217","predicate":"channelAdminLogEventActionTogglePreHistoryHidden","params":[{"name":"new_value","type":"Bool"}],"type":"ChannelAdminLogEventAction"},{"id":"-833715459","predicate":"inputMediaGeoLive","params":[{"name":"flags","type":"#"},{"name":"stopped","type":"flags.0?true"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"period","type":"flags.1?int"}],"type":"InputMedia"},{"id":"2084316681","predicate":"messageMediaGeoLive","params":[{"name":"geo","type":"GeoPoint"},{"name":"period","type":"int"}],"type":"MessageMedia"},{"id":"1189204285","predicate":"recentMeUrlUnknown","params":[{"name":"url","type":"string"}],"type":"RecentMeUrl"},{"id":"-1917045962","predicate":"recentMeUrlUser","params":[{"name":"url","type":"string"},{"name":"user_id","type":"int"}],"type":"RecentMeUrl"},{"id":"-1608834311","predicate":"recentMeUrlChat","params":[{"name":"url","type":"string"},{"name":"chat_id","type":"int"}],"type":"RecentMeUrl"},{"id":"-347535331","predicate":"recentMeUrlChatInvite","params":[{"name":"url","type":"string"},{"name":"chat_invite","type":"ChatInvite"}],"type":"RecentMeUrl"},{"id":"-1140172836","predicate":"recentMeUrlStickerSet","params":[{"name":"url","type":"string"},{"name":"set","type":"StickerSetCovered"}],"type":"RecentMeUrl"},{"id":"235081943","predicate":"help.recentMeUrls","params":[{"name":"urls","type":"Vector<RecentMeUrl>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"help.RecentMeUrls"},{"id":"-266911767","predicate":"channels.channelParticipantsNotModified","params":[],"type":"channels.ChannelParticipants"},{"id":"1951620897","predicate":"messages.messagesNotModified","params":[{"name":"count","type":"int"}],"type":"messages.Messages"},{"id":"482797855","predicate":"inputSingleMedia","params":[{"name":"flags","type":"#"},{"name":"media","type":"InputMedia"},{"name":"random_id","type":"long"},{"name":"message","type":"string"},{"name":"entities","type":"flags.0?Vector<MessageEntity>"}],"type":"InputSingleMedia"},{"id":"-892779534","predicate":"webAuthorization","params":[{"name":"hash","type":"long"},{"name":"bot_id","type":"int"},{"name":"domain","type":"string"},{"name":"browser","type":"string"},{"name":"platform","type":"string"},{"name":"date_created","type":"int"},{"name":"date_active","type":"int"},{"name":"ip","type":"string"},{"name":"region","type":"string"}],"type":"WebAuthorization"},{"id":"-313079300","predicate":"account.webAuthorizations","params":[{"name":"authorizations","type":"Vector<WebAuthorization>"},{"name":"users","type":"Vector<User>"}],"type":"account.WebAuthorizations"},{"id":"-1502174430","predicate":"inputMessageID","params":[{"name":"id","type":"int"}],"type":"InputMessage"},{"id":"-1160215659","predicate":"inputMessageReplyTo","params":[{"name":"id","type":"int"}],"type":"InputMessage"},{"id":"-2037963464","predicate":"inputMessagePinned","params":[],"type":"InputMessage"},{"id":"-1687559349","predicate":"messageEntityPhone","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1280209983","predicate":"messageEntityCashtag","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-1410748418","predicate":"messageActionBotAllowed","params":[{"name":"domain","type":"string"}],"type":"MessageAction"},{"id":"-55902537","predicate":"inputDialogPeer","params":[{"name":"peer","type":"InputPeer"}],"type":"InputDialogPeer"},{"id":"-445792507","predicate":"dialogPeer","params":[{"name":"peer","type":"Peer"}],"type":"DialogPeer"},{"id":"223655517","predicate":"messages.foundStickerSetsNotModified","params":[],"type":"messages.FoundStickerSets"},{"id":"1359533640","predicate":"messages.foundStickerSets","params":[{"name":"hash","type":"int"},{"name":"sets","type":"Vector<StickerSetCovered>"}],"type":"messages.FoundStickerSets"},{"id":"1648543603","predicate":"fileHash","params":[{"name":"offset","type":"int"},{"name":"limit","type":"int"},{"name":"hash","type":"bytes"}],"type":"FileHash"},{"id":"-104284986","predicate":"webDocumentNoProxy","params":[{"name":"url","type":"string"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"},{"name":"attributes","type":"Vector<DocumentAttribute>"}],"type":"WebDocument"},{"id":"1968737087","predicate":"inputClientProxy","params":[{"name":"address","type":"string"},{"name":"port","type":"int"}],"type":"InputClientProxy"},{"id":"-526508104","predicate":"help.proxyDataEmpty","params":[{"name":"expires","type":"int"}],"type":"help.ProxyData"},{"id":"737668643","predicate":"help.proxyDataPromo","params":[{"name":"expires","type":"int"},{"name":"peer","type":"Peer"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"help.ProxyData"},{"id":"-483352705","predicate":"help.termsOfServiceUpdateEmpty","params":[{"name":"expires","type":"int"}],"type":"help.TermsOfServiceUpdate"},{"id":"686618977","predicate":"help.termsOfServiceUpdate","params":[{"name":"expires","type":"int"},{"name":"terms_of_service","type":"help.TermsOfService"}],"type":"help.TermsOfServiceUpdate"},{"id":"859091184","predicate":"inputSecureFileUploaded","params":[{"name":"id","type":"long"},{"name":"parts","type":"int"},{"name":"md5_checksum","type":"string"},{"name":"file_hash","type":"bytes"},{"name":"secret","type":"bytes"}],"type":"InputSecureFile"},{"id":"1399317950","predicate":"inputSecureFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputSecureFile"},{"id":"-876089816","predicate":"inputSecureFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputFileLocation"},{"id":"1679398724","predicate":"secureFileEmpty","params":[],"type":"SecureFile"},{"id":"-534283678","predicate":"secureFile","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"size","type":"int"},{"name":"dc_id","type":"int"},{"name":"date","type":"int"},{"name":"file_hash","type":"bytes"},{"name":"secret","type":"bytes"}],"type":"SecureFile"},{"id":"-1964327229","predicate":"secureData","params":[{"name":"data","type":"bytes"},{"name":"data_hash","type":"bytes"},{"name":"secret","type":"bytes"}],"type":"SecureData"},{"id":"2103482845","predicate":"securePlainPhone","params":[{"name":"phone","type":"string"}],"type":"SecurePlainData"},{"id":"569137759","predicate":"securePlainEmail","params":[{"name":"email","type":"string"}],"type":"SecurePlainData"},{"id":"-1658158621","predicate":"secureValueTypePersonalDetails","params":[],"type":"SecureValueType"},{"id":"1034709504","predicate":"secureValueTypePassport","params":[],"type":"SecureValueType"},{"id":"115615172","predicate":"secureValueTypeDriverLicense","params":[],"type":"SecureValueType"},{"id":"-1596951477","predicate":"secureValueTypeIdentityCard","params":[],"type":"SecureValueType"},{"id":"-1717268701","predicate":"secureValueTypeInternalPassport","params":[],"type":"SecureValueType"},{"id":"-874308058","predicate":"secureValueTypeAddress","params":[],"type":"SecureValueType"},{"id":"-63531698","predicate":"secureValueTypeUtilityBill","params":[],"type":"SecureValueType"},{"id":"-1995211763","predicate":"secureValueTypeBankStatement","params":[],"type":"SecureValueType"},{"id":"-1954007928","predicate":"secureValueTypeRentalAgreement","params":[],"type":"SecureValueType"},{"id":"-1713143702","predicate":"secureValueTypePassportRegistration","params":[],"type":"SecureValueType"},{"id":"-368907213","predicate":"secureValueTypeTemporaryRegistration","params":[],"type":"SecureValueType"},{"id":"-1289704741","predicate":"secureValueTypePhone","params":[],"type":"SecureValueType"},{"id":"-1908627474","predicate":"secureValueTypeEmail","params":[],"type":"SecureValueType"},{"id":"411017418","predicate":"secureValue","params":[{"name":"flags","type":"#"},{"name":"type","type":"SecureValueType"},{"name":"data","type":"flags.0?SecureData"},{"name":"front_side","type":"flags.1?SecureFile"},{"name":"reverse_side","type":"flags.2?SecureFile"},{"name":"selfie","type":"flags.3?SecureFile"},{"name":"translation","type":"flags.6?Vector<SecureFile>"},{"name":"files","type":"flags.4?Vector<SecureFile>"},{"name":"plain_data","type":"flags.5?SecurePlainData"},{"name":"hash","type":"bytes"}],"type":"SecureValue"},{"id":"-618540889","predicate":"inputSecureValue","params":[{"name":"flags","type":"#"},{"name":"type","type":"SecureValueType"},{"name":"data","type":"flags.0?SecureData"},{"name":"front_side","type":"flags.1?InputSecureFile"},{"name":"reverse_side","type":"flags.2?InputSecureFile"},{"name":"selfie","type":"flags.3?InputSecureFile"},{"name":"translation","type":"flags.6?Vector<InputSecureFile>"},{"name":"files","type":"flags.4?Vector<InputSecureFile>"},{"name":"plain_data","type":"flags.5?SecurePlainData"}],"type":"InputSecureValue"},{"id":"-316748368","predicate":"secureValueHash","params":[{"name":"type","type":"SecureValueType"},{"name":"hash","type":"bytes"}],"type":"SecureValueHash"},{"id":"-391902247","predicate":"secureValueErrorData","params":[{"name":"type","type":"SecureValueType"},{"name":"data_hash","type":"bytes"},{"name":"field","type":"string"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"12467706","predicate":"secureValueErrorFrontSide","params":[{"name":"type","type":"SecureValueType"},{"name":"file_hash","type":"bytes"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"-2037765467","predicate":"secureValueErrorReverseSide","params":[{"name":"type","type":"SecureValueType"},{"name":"file_hash","type":"bytes"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"-449327402","predicate":"secureValueErrorSelfie","params":[{"name":"type","type":"SecureValueType"},{"name":"file_hash","type":"bytes"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"2054162547","predicate":"secureValueErrorFile","params":[{"name":"type","type":"SecureValueType"},{"name":"file_hash","type":"bytes"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"1717706985","predicate":"secureValueErrorFiles","params":[{"name":"type","type":"SecureValueType"},{"name":"file_hash","type":"Vector<bytes>"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"871426631","predicate":"secureCredentialsEncrypted","params":[{"name":"data","type":"bytes"},{"name":"hash","type":"bytes"},{"name":"secret","type":"bytes"}],"type":"SecureCredentialsEncrypted"},{"id":"-1389486888","predicate":"account.authorizationForm","params":[{"name":"flags","type":"#"},{"name":"required_types","type":"Vector<SecureRequiredType>"},{"name":"values","type":"Vector<SecureValue>"},{"name":"errors","type":"Vector<SecureValueError>"},{"name":"users","type":"Vector<User>"},{"name":"privacy_policy_url","type":"flags.0?string"}],"type":"account.AuthorizationForm"},{"id":"-2128640689","predicate":"account.sentEmailCode","params":[{"name":"email_pattern","type":"string"},{"name":"length","type":"int"}],"type":"account.SentEmailCode"},{"id":"455635795","predicate":"messageActionSecureValuesSentMe","params":[{"name":"values","type":"Vector<SecureValue>"},{"name":"credentials","type":"SecureCredentialsEncrypted"}],"type":"MessageAction"},{"id":"-648257196","predicate":"messageActionSecureValuesSent","params":[{"name":"types","type":"Vector<SecureValueType>"}],"type":"MessageAction"},{"id":"1722786150","predicate":"help.deepLinkInfoEmpty","params":[],"type":"help.DeepLinkInfo"},{"id":"1783556146","predicate":"help.deepLinkInfo","params":[{"name":"flags","type":"#"},{"name":"update_app","type":"flags.0?true"},{"name":"message","type":"string"},{"name":"entities","type":"flags.1?Vector<MessageEntity>"}],"type":"help.DeepLinkInfo"},{"id":"289586518","predicate":"savedPhoneContact","params":[{"name":"phone","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"date","type":"int"}],"type":"SavedContact"},{"id":"1304052993","predicate":"account.takeout","params":[{"name":"id","type":"long"}],"type":"account.Takeout"},{"id":"700340377","predicate":"inputTakeoutFileLocation","params":[],"type":"InputFileLocation"},{"id":"-513517117","predicate":"updateDialogUnreadMark","params":[{"name":"flags","type":"#"},{"name":"unread","type":"flags.0?true"},{"name":"peer","type":"DialogPeer"}],"type":"Update"},{"id":"-253500010","predicate":"messages.dialogsNotModified","params":[{"name":"count","type":"int"}],"type":"messages.Dialogs"},{"id":"-1625153079","predicate":"inputWebFileGeoPointLocation","params":[{"name":"geo_point","type":"InputGeoPoint"},{"name":"access_hash","type":"long"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"zoom","type":"int"},{"name":"scale","type":"int"}],"type":"InputWebFileLocation"},{"id":"-1255369827","predicate":"contacts.topPeersDisabled","params":[],"type":"contacts.TopPeers"},{"id":"-1685456582","predicate":"inputReportReasonCopyright","params":[],"type":"ReportReason"},{"id":"-732254058","predicate":"passwordKdfAlgoUnknown","params":[],"type":"PasswordKdfAlgo"},{"id":"4883767","predicate":"securePasswordKdfAlgoUnknown","params":[],"type":"SecurePasswordKdfAlgo"},{"id":"-1141711456","predicate":"securePasswordKdfAlgoPBKDF2HMACSHA512iter100000","params":[{"name":"salt","type":"bytes"}],"type":"SecurePasswordKdfAlgo"},{"id":"-2042159726","predicate":"securePasswordKdfAlgoSHA512","params":[{"name":"salt","type":"bytes"}],"type":"SecurePasswordKdfAlgo"},{"id":"354925740","predicate":"secureSecretSettings","params":[{"name":"secure_algo","type":"SecurePasswordKdfAlgo"},{"name":"secure_secret","type":"bytes"},{"name":"secure_secret_id","type":"long"}],"type":"SecureSecretSettings"},{"id":"982592842","predicate":"passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow","params":[{"name":"salt1","type":"bytes"},{"name":"salt2","type":"bytes"},{"name":"g","type":"int"},{"name":"p","type":"bytes"}],"type":"PasswordKdfAlgo"},{"id":"-1736378792","predicate":"inputCheckPasswordEmpty","params":[],"type":"InputCheckPasswordSRP"},{"id":"-763367294","predicate":"inputCheckPasswordSRP","params":[{"name":"srp_id","type":"long"},{"name":"A","type":"bytes"},{"name":"M1","type":"bytes"}],"type":"InputCheckPasswordSRP"},{"id":"-2036501105","predicate":"secureValueError","params":[{"name":"type","type":"SecureValueType"},{"name":"hash","type":"bytes"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"-1592506512","predicate":"secureValueErrorTranslationFile","params":[{"name":"type","type":"SecureValueType"},{"name":"file_hash","type":"bytes"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"878931416","predicate":"secureValueErrorTranslationFiles","params":[{"name":"type","type":"SecureValueType"},{"name":"file_hash","type":"Vector<bytes>"},{"name":"text","type":"string"}],"type":"SecureValueError"},{"id":"-2103600678","predicate":"secureRequiredType","params":[{"name":"flags","type":"#"},{"name":"native_names","type":"flags.0?true"},{"name":"selfie_required","type":"flags.1?true"},{"name":"translation_required","type":"flags.2?true"},{"name":"type","type":"SecureValueType"}],"type":"SecureRequiredType"},{"id":"41187252","predicate":"secureRequiredTypeOneOf","params":[{"name":"types","type":"Vector<SecureRequiredType>"}],"type":"SecureRequiredType"},{"id":"-1078332329","predicate":"help.passportConfigNotModified","params":[],"type":"help.PassportConfig"},{"id":"-1600596305","predicate":"help.passportConfig","params":[{"name":"hash","type":"int"},{"name":"countries_langs","type":"DataJSON"}],"type":"help.PassportConfig"},{"id":"488313413","predicate":"inputAppEvent","params":[{"name":"time","type":"double"},{"name":"type","type":"string"},{"name":"peer","type":"long"},{"name":"data","type":"JSONValue"}],"type":"InputAppEvent"},{"id":"-1059185703","predicate":"jsonObjectValue","params":[{"name":"key","type":"string"},{"name":"value","type":"JSONValue"}],"type":"JSONObjectValue"},{"id":"1064139624","predicate":"jsonNull","params":[],"type":"JSONValue"},{"id":"-952869270","predicate":"jsonBool","params":[{"name":"value","type":"Bool"}],"type":"JSONValue"},{"id":"736157604","predicate":"jsonNumber","params":[{"name":"value","type":"double"}],"type":"JSONValue"},{"id":"-1222740358","predicate":"jsonString","params":[{"name":"value","type":"string"}],"type":"JSONValue"},{"id":"-146520221","predicate":"jsonArray","params":[{"name":"value","type":"Vector<JSONValue>"}],"type":"JSONValue"},{"id":"-1715350371","predicate":"jsonObject","params":[{"name":"value","type":"Vector<JSONObjectValue>"}],"type":"JSONValue"},{"id":"1279515160","predicate":"updateUserPinnedMessage","params":[{"name":"user_id","type":"int"},{"name":"id","type":"int"}],"type":"Update"},{"id":"-519195831","predicate":"updateChatPinnedMessage","params":[{"name":"chat_id","type":"int"},{"name":"id","type":"int"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-1311015810","predicate":"inputNotifyBroadcasts","params":[],"type":"InputNotifyPeer"},{"id":"-703403793","predicate":"notifyBroadcasts","params":[],"type":"NotifyPeer"},{"id":"-311786236","predicate":"textSubscript","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"-939827711","predicate":"textSuperscript","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"55281185","predicate":"textMarked","params":[{"name":"text","type":"RichText"}],"type":"RichText"},{"id":"483104362","predicate":"textPhone","params":[{"name":"text","type":"RichText"},{"name":"phone","type":"string"}],"type":"RichText"},{"id":"136105807","predicate":"textImage","params":[{"name":"document_id","type":"long"},{"name":"w","type":"int"},{"name":"h","type":"int"}],"type":"RichText"},{"id":"504660880","predicate":"pageBlockKicker","params":[{"name":"text","type":"RichText"}],"type":"PageBlock"},{"id":"878078826","predicate":"pageTableCell","params":[{"name":"flags","type":"#"},{"name":"header","type":"flags.0?true"},{"name":"align_center","type":"flags.3?true"},{"name":"align_right","type":"flags.4?true"},{"name":"valign_middle","type":"flags.5?true"},{"name":"valign_bottom","type":"flags.6?true"},{"name":"text","type":"flags.7?RichText"},{"name":"colspan","type":"flags.1?int"},{"name":"rowspan","type":"flags.2?int"}],"type":"PageTableCell"},{"id":"-524237339","predicate":"pageTableRow","params":[{"name":"cells","type":"Vector<PageTableCell>"}],"type":"PageTableRow"},{"id":"-1085412734","predicate":"pageBlockTable","params":[{"name":"flags","type":"#"},{"name":"bordered","type":"flags.0?true"},{"name":"striped","type":"flags.1?true"},{"name":"title","type":"RichText"},{"name":"rows","type":"Vector<PageTableRow>"}],"type":"PageBlock"},{"id":"1869903447","predicate":"pageCaption","params":[{"name":"text","type":"RichText"},{"name":"credit","type":"RichText"}],"type":"PageCaption"},{"id":"-1188055347","predicate":"pageListItemText","params":[{"name":"text","type":"RichText"}],"type":"PageListItem"},{"id":"635466748","predicate":"pageListItemBlocks","params":[{"name":"blocks","type":"Vector<PageBlock>"}],"type":"PageListItem"},{"id":"1577484359","predicate":"pageListOrderedItemText","params":[{"name":"num","type":"string"},{"name":"text","type":"RichText"}],"type":"PageListOrderedItem"},{"id":"-1730311882","predicate":"pageListOrderedItemBlocks","params":[{"name":"num","type":"string"},{"name":"blocks","type":"Vector<PageBlock>"}],"type":"PageListOrderedItem"},{"id":"-1702174239","predicate":"pageBlockOrderedList","params":[{"name":"items","type":"Vector<PageListOrderedItem>"}],"type":"PageBlock"},{"id":"1987480557","predicate":"pageBlockDetails","params":[{"name":"flags","type":"#"},{"name":"open","type":"flags.0?true"},{"name":"blocks","type":"Vector<PageBlock>"},{"name":"title","type":"RichText"}],"type":"PageBlock"},{"id":"-1282352120","predicate":"pageRelatedArticle","params":[{"name":"flags","type":"#"},{"name":"url","type":"string"},{"name":"webpage_id","type":"long"},{"name":"title","type":"flags.0?string"},{"name":"description","type":"flags.1?string"},{"name":"photo_id","type":"flags.2?long"},{"name":"author","type":"flags.3?string"},{"name":"published_date","type":"flags.4?int"}],"type":"PageRelatedArticle"},{"id":"370236054","predicate":"pageBlockRelatedArticles","params":[{"name":"title","type":"RichText"},{"name":"articles","type":"Vector<PageRelatedArticle>"}],"type":"PageBlock"},{"id":"-1538310410","predicate":"pageBlockMap","params":[{"name":"geo","type":"GeoPoint"},{"name":"zoom","type":"int"},{"name":"w","type":"int"},{"name":"h","type":"int"},{"name":"caption","type":"PageCaption"}],"type":"PageBlock"},{"id":"-1366746132","predicate":"page","params":[{"name":"flags","type":"#"},{"name":"part","type":"flags.0?true"},{"name":"rtl","type":"flags.1?true"},{"name":"v2","type":"flags.2?true"},{"name":"url","type":"string"},{"name":"blocks","type":"Vector<PageBlock>"},{"name":"photos","type":"Vector<Photo>"},{"name":"documents","type":"Vector<Document>"}],"type":"Page"},{"id":"-610373422","predicate":"inputPrivacyKeyPhoneP2P","params":[],"type":"InputPrivacyKey"},{"id":"961092808","predicate":"privacyKeyPhoneP2P","params":[],"type":"PrivacyKey"},{"id":"894777186","predicate":"textAnchor","params":[{"name":"text","type":"RichText"},{"name":"name","type":"string"}],"type":"RichText"},{"id":"-1945767479","predicate":"help.supportName","params":[{"name":"name","type":"string"}],"type":"help.SupportName"},{"id":"-206688531","predicate":"help.userInfoEmpty","params":[],"type":"help.UserInfo"},{"id":"32192344","predicate":"help.userInfo","params":[{"name":"message","type":"string"},{"name":"entities","type":"Vector<MessageEntity>"},{"name":"author","type":"string"},{"name":"date","type":"int"}],"type":"help.UserInfo"},{"id":"-202219658","predicate":"messageActionContactSignUp","params":[],"type":"MessageAction"},{"id":"-1398708869","predicate":"updateMessagePoll","params":[{"name":"flags","type":"#"},{"name":"poll_id","type":"long"},{"name":"poll","type":"flags.0?Poll"},{"name":"results","type":"PollResults"}],"type":"Update"},{"id":"1823064809","predicate":"pollAnswer","params":[{"name":"text","type":"string"},{"name":"option","type":"bytes"}],"type":"PollAnswer"},{"id":"-716006138","predicate":"poll","params":[{"name":"id","type":"long"},{"name":"flags","type":"#"},{"name":"closed","type":"flags.0?true"},{"name":"public_voters","type":"flags.1?true"},{"name":"multiple_choice","type":"flags.2?true"},{"name":"quiz","type":"flags.3?true"},{"name":"question","type":"string"},{"name":"answers","type":"Vector<PollAnswer>"}],"type":"Poll"},{"id":"997055186","predicate":"pollAnswerVoters","params":[{"name":"flags","type":"#"},{"name":"chosen","type":"flags.0?true"},{"name":"correct","type":"flags.1?true"},{"name":"option","type":"bytes"},{"name":"voters","type":"int"}],"type":"PollAnswerVoters"},{"id":"1465219162","predicate":"pollResults","params":[{"name":"flags","type":"#"},{"name":"min","type":"flags.0?true"},{"name":"results","type":"flags.1?Vector<PollAnswerVoters>"},{"name":"total_voters","type":"flags.2?int"}],"type":"PollResults"},{"id":"112424539","predicate":"inputMediaPoll","params":[{"name":"poll","type":"Poll"}],"type":"InputMedia"},{"id":"1272375192","predicate":"messageMediaPoll","params":[{"name":"poll","type":"Poll"},{"name":"results","type":"PollResults"}],"type":"MessageMedia"},{"id":"-264117680","predicate":"chatOnlines","params":[{"name":"onlines","type":"int"}],"type":"ChatOnlines"},{"id":"1202287072","predicate":"statsURL","params":[{"name":"url","type":"string"}],"type":"StatsURL"},{"id":"-525288402","predicate":"photoStrippedSize","params":[{"name":"type","type":"string"},{"name":"bytes","type":"bytes"}],"type":"PhotoSize"},{"id":"1605510357","predicate":"chatAdminRights","params":[{"name":"flags","type":"#"},{"name":"change_info","type":"flags.0?true"},{"name":"post_messages","type":"flags.1?true"},{"name":"edit_messages","type":"flags.2?true"},{"name":"delete_messages","type":"flags.3?true"},{"name":"ban_users","type":"flags.4?true"},{"name":"invite_users","type":"flags.5?true"},{"name":"pin_messages","type":"flags.7?true"},{"name":"add_admins","type":"flags.9?true"}],"type":"ChatAdminRights"},{"id":"-1626209256","predicate":"chatBannedRights","params":[{"name":"flags","type":"#"},{"name":"view_messages","type":"flags.0?true"},{"name":"send_messages","type":"flags.1?true"},{"name":"send_media","type":"flags.2?true"},{"name":"send_stickers","type":"flags.3?true"},{"name":"send_gifs","type":"flags.4?true"},{"name":"send_games","type":"flags.5?true"},{"name":"send_inline","type":"flags.6?true"},{"name":"embed_links","type":"flags.7?true"},{"name":"send_polls","type":"flags.8?true"},{"name":"change_info","type":"flags.10?true"},{"name":"invite_users","type":"flags.15?true"},{"name":"pin_messages","type":"flags.17?true"},{"name":"until_date","type":"int"}],"type":"ChatBannedRights"},{"id":"1421875280","predicate":"updateChatDefaultBannedRights","params":[{"name":"peer","type":"Peer"},{"name":"default_banned_rights","type":"ChatBannedRights"},{"name":"version","type":"int"}],"type":"Update"},{"id":"-433014407","predicate":"inputWallPaper","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputWallPaper"},{"id":"1913199744","predicate":"inputWallPaperSlug","params":[{"name":"slug","type":"string"}],"type":"InputWallPaper"},{"id":"-1150621555","predicate":"channelParticipantsContacts","params":[{"name":"q","type":"string"}],"type":"ChannelParticipantsFilter"},{"id":"771095562","predicate":"channelAdminLogEventActionDefaultBannedRights","params":[{"name":"prev_banned_rights","type":"ChatBannedRights"},{"name":"new_banned_rights","type":"ChatBannedRights"}],"type":"ChannelAdminLogEventAction"},{"id":"-1895328189","predicate":"channelAdminLogEventActionStopPoll","params":[{"name":"message","type":"Message"}],"type":"ChannelAdminLogEventAction"},{"id":"471437699","predicate":"account.wallPapersNotModified","params":[],"type":"account.WallPapers"},{"id":"1881892265","predicate":"account.wallPapers","params":[{"name":"hash","type":"int"},{"name":"wallpapers","type":"Vector<WallPaper>"}],"type":"account.WallPapers"},{"id":"-557924733","predicate":"codeSettings","params":[{"name":"flags","type":"#"},{"name":"allow_flashcall","type":"flags.0?true"},{"name":"current_number","type":"flags.1?true"},{"name":"allow_app_hash","type":"flags.4?true"}],"type":"CodeSettings"},{"id":"84438264","predicate":"wallPaperSettings","params":[{"name":"flags","type":"#"},{"name":"blur","type":"flags.1?true"},{"name":"motion","type":"flags.2?true"},{"name":"background_color","type":"flags.0?int"},{"name":"second_background_color","type":"flags.4?int"},{"name":"intensity","type":"flags.3?int"},{"name":"rotation","type":"flags.4?int"}],"type":"WallPaperSettings"},{"id":"-532532493","predicate":"autoDownloadSettings","params":[{"name":"flags","type":"#"},{"name":"disabled","type":"flags.0?true"},{"name":"video_preload_large","type":"flags.1?true"},{"name":"audio_preload_next","type":"flags.2?true"},{"name":"phonecalls_less_data","type":"flags.3?true"},{"name":"photo_size_max","type":"int"},{"name":"video_size_max","type":"int"},{"name":"file_size_max","type":"int"},{"name":"video_upload_maxbitrate","type":"int"}],"type":"AutoDownloadSettings"},{"id":"1674235686","predicate":"account.autoDownloadSettings","params":[{"name":"low","type":"AutoDownloadSettings"},{"name":"medium","type":"AutoDownloadSettings"},{"name":"high","type":"AutoDownloadSettings"}],"type":"account.AutoDownloadSettings"},{"id":"-709641735","predicate":"emojiKeyword","params":[{"name":"keyword","type":"string"},{"name":"emoticons","type":"Vector<string>"}],"type":"EmojiKeyword"},{"id":"594408994","predicate":"emojiKeywordDeleted","params":[{"name":"keyword","type":"string"},{"name":"emoticons","type":"Vector<string>"}],"type":"EmojiKeyword"},{"id":"1556570557","predicate":"emojiKeywordsDifference","params":[{"name":"lang_code","type":"string"},{"name":"from_version","type":"int"},{"name":"version","type":"int"},{"name":"keywords","type":"Vector<EmojiKeyword>"}],"type":"EmojiKeywordsDifference"},{"id":"-1519029347","predicate":"emojiURL","params":[{"name":"url","type":"string"}],"type":"EmojiURL"},{"id":"-1275374751","predicate":"emojiLanguage","params":[{"name":"lang_code","type":"string"}],"type":"EmojiLanguage"},{"id":"-1529000952","predicate":"inputPrivacyKeyForwards","params":[],"type":"InputPrivacyKey"},{"id":"1777096355","predicate":"privacyKeyForwards","params":[],"type":"PrivacyKey"},{"id":"1461304012","predicate":"inputPrivacyKeyProfilePhoto","params":[],"type":"InputPrivacyKey"},{"id":"-1777000467","predicate":"privacyKeyProfilePhoto","params":[],"type":"PrivacyKey"},{"id":"-1132476723","predicate":"fileLocationToBeDeprecated","params":[{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"}],"type":"FileLocation"},{"id":"1075322878","predicate":"inputPhotoFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"file_reference","type":"bytes"},{"name":"thumb_size","type":"string"}],"type":"InputFileLocation"},{"id":"-667654413","predicate":"inputPhotoLegacyFileLocation","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"file_reference","type":"bytes"},{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"},{"name":"secret","type":"long"}],"type":"InputFileLocation"},{"id":"668375447","predicate":"inputPeerPhotoFileLocation","params":[{"name":"flags","type":"#"},{"name":"big","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"}],"type":"InputFileLocation"},{"id":"230353641","predicate":"inputStickerSetThumb","params":[{"name":"stickerset","type":"InputStickerSet"},{"name":"volume_id","type":"long"},{"name":"local_id","type":"int"}],"type":"InputFileLocation"},{"id":"-11252123","predicate":"folder","params":[{"name":"flags","type":"#"},{"name":"autofill_new_broadcasts","type":"flags.0?true"},{"name":"autofill_public_groups","type":"flags.1?true"},{"name":"autofill_new_correspondents","type":"flags.2?true"},{"name":"id","type":"int"},{"name":"title","type":"string"},{"name":"photo","type":"flags.3?ChatPhoto"}],"type":"Folder"},{"id":"1908216652","predicate":"dialogFolder","params":[{"name":"flags","type":"#"},{"name":"pinned","type":"flags.2?true"},{"name":"folder","type":"Folder"},{"name":"peer","type":"Peer"},{"name":"top_message","type":"int"},{"name":"unread_muted_peers_count","type":"int"},{"name":"unread_unmuted_peers_count","type":"int"},{"name":"unread_muted_messages_count","type":"int"},{"name":"unread_unmuted_messages_count","type":"int"}],"type":"Dialog"},{"id":"1684014375","predicate":"inputDialogPeerFolder","params":[{"name":"folder_id","type":"int"}],"type":"InputDialogPeer"},{"id":"1363483106","predicate":"dialogPeerFolder","params":[{"name":"folder_id","type":"int"}],"type":"DialogPeer"},{"id":"-70073706","predicate":"inputFolderPeer","params":[{"name":"peer","type":"InputPeer"},{"name":"folder_id","type":"int"}],"type":"InputFolderPeer"},{"id":"-373643672","predicate":"folderPeer","params":[{"name":"peer","type":"Peer"},{"name":"folder_id","type":"int"}],"type":"FolderPeer"},{"id":"422972864","predicate":"updateFolderPeers","params":[{"name":"folder_peers","type":"Vector<FolderPeer>"},{"name":"pts","type":"int"},{"name":"pts_count","type":"int"}],"type":"Update"},{"id":"756118935","predicate":"inputUserFromMessage","params":[{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"user_id","type":"int"}],"type":"InputUser"},{"id":"707290417","predicate":"inputChannelFromMessage","params":[{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"channel_id","type":"int"}],"type":"InputChannel"},{"id":"398123750","predicate":"inputPeerUserFromMessage","params":[{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"user_id","type":"int"}],"type":"InputPeer"},{"id":"-1667893317","predicate":"inputPeerChannelFromMessage","params":[{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"channel_id","type":"int"}],"type":"InputPeer"},{"id":"55761658","predicate":"inputPrivacyKeyPhoneNumber","params":[],"type":"InputPrivacyKey"},{"id":"-778378131","predicate":"privacyKeyPhoneNumber","params":[],"type":"PrivacyKey"},{"id":"-1472172887","predicate":"topPeerCategoryForwardUsers","params":[],"type":"TopPeerCategory"},{"id":"-68239120","predicate":"topPeerCategoryForwardChats","params":[],"type":"TopPeerCategory"},{"id":"-1569748965","predicate":"channelAdminLogEventActionChangeLinkedChat","params":[{"name":"prev_value","type":"int"},{"name":"new_value","type":"int"}],"type":"ChannelAdminLogEventAction"},{"id":"-398136321","predicate":"messages.searchCounter","params":[{"name":"flags","type":"#"},{"name":"inexact","type":"flags.1?true"},{"name":"filter","type":"MessagesFilter"},{"name":"count","type":"int"}],"type":"messages.SearchCounter"},{"id":"280464681","predicate":"keyboardButtonUrlAuth","params":[{"name":"flags","type":"#"},{"name":"text","type":"string"},{"name":"fwd_text","type":"flags.0?string"},{"name":"url","type":"string"},{"name":"button_id","type":"int"}],"type":"KeyboardButton"},{"id":"-802258988","predicate":"inputKeyboardButtonUrlAuth","params":[{"name":"flags","type":"#"},{"name":"request_write_access","type":"flags.0?true"},{"name":"text","type":"string"},{"name":"fwd_text","type":"flags.1?string"},{"name":"url","type":"string"},{"name":"bot","type":"InputUser"}],"type":"KeyboardButton"},{"id":"-1831650802","predicate":"urlAuthResultRequest","params":[{"name":"flags","type":"#"},{"name":"request_write_access","type":"flags.0?true"},{"name":"bot","type":"User"},{"name":"domain","type":"string"}],"type":"UrlAuthResult"},{"id":"-1886646706","predicate":"urlAuthResultAccepted","params":[{"name":"url","type":"string"}],"type":"UrlAuthResult"},{"id":"-1445536993","predicate":"urlAuthResultDefault","params":[],"type":"UrlAuthResult"},{"id":"1283572154","predicate":"inputPrivacyValueAllowChatParticipants","params":[{"name":"chats","type":"Vector<int>"}],"type":"InputPrivacyRule"},{"id":"-668769361","predicate":"inputPrivacyValueDisallowChatParticipants","params":[{"name":"chats","type":"Vector<int>"}],"type":"InputPrivacyRule"},{"id":"415136107","predicate":"privacyValueAllowChatParticipants","params":[{"name":"chats","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"-1397881200","predicate":"privacyValueDisallowChatParticipants","params":[{"name":"chats","type":"Vector<int>"}],"type":"PrivacyRule"},{"id":"-1672577397","predicate":"messageEntityUnderline","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"-1090087980","predicate":"messageEntityStrike","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"34469328","predicate":"messageEntityBlockquote","params":[{"name":"offset","type":"int"},{"name":"length","type":"int"}],"type":"MessageEntity"},{"id":"1786671974","predicate":"updatePeerSettings","params":[{"name":"peer","type":"Peer"},{"name":"settings","type":"PeerSettings"}],"type":"Update"},{"id":"-1078612597","predicate":"channelLocationEmpty","params":[],"type":"ChannelLocation"},{"id":"547062491","predicate":"channelLocation","params":[{"name":"geo_point","type":"GeoPoint"},{"name":"address","type":"string"}],"type":"ChannelLocation"},{"id":"-901375139","predicate":"peerLocated","params":[{"name":"peer","type":"Peer"},{"name":"expires","type":"int"},{"name":"distance","type":"int"}],"type":"PeerLocated"},{"id":"-1263546448","predicate":"updatePeerLocated","params":[{"name":"peers","type":"Vector<PeerLocated>"}],"type":"Update"},{"id":"241923758","predicate":"channelAdminLogEventActionChangeLocation","params":[{"name":"prev_value","type":"ChannelLocation"},{"name":"new_value","type":"ChannelLocation"}],"type":"ChannelAdminLogEventAction"},{"id":"-606798099","predicate":"inputReportReasonGeoIrrelevant","params":[],"type":"ReportReason"},{"id":"1401984889","predicate":"channelAdminLogEventActionToggleSlowMode","params":[{"name":"prev_value","type":"int"},{"name":"new_value","type":"int"}],"type":"ChannelAdminLogEventAction"},{"id":"1148485274","predicate":"auth.authorizationSignUpRequired","params":[{"name":"flags","type":"#"},{"name":"terms_of_service","type":"flags.0?help.TermsOfService"}],"type":"auth.Authorization"},{"id":"-666824391","predicate":"payments.paymentVerificationNeeded","params":[{"name":"url","type":"string"}],"type":"payments.PaymentResult"},{"id":"42402760","predicate":"inputStickerSetAnimatedEmoji","params":[],"type":"InputStickerSet"},{"id":"967122427","predicate":"updateNewScheduledMessage","params":[{"name":"message","type":"Message"}],"type":"Update"},{"id":"-1870238482","predicate":"updateDeleteScheduledMessages","params":[{"name":"peer","type":"Peer"},{"name":"messages","type":"Vector<int>"}],"type":"Update"},{"id":"-797791052","predicate":"restrictionReason","params":[{"name":"platform","type":"string"},{"name":"reason","type":"string"},{"name":"text","type":"string"}],"type":"RestrictionReason"},{"id":"1012306921","predicate":"inputTheme","params":[{"name":"id","type":"long"},{"name":"access_hash","type":"long"}],"type":"InputTheme"},{"id":"-175567375","predicate":"inputThemeSlug","params":[{"name":"slug","type":"string"}],"type":"InputTheme"},{"id":"42930452","predicate":"theme","params":[{"name":"flags","type":"#"},{"name":"creator","type":"flags.0?true"},{"name":"default","type":"flags.1?true"},{"name":"id","type":"long"},{"name":"access_hash","type":"long"},{"name":"slug","type":"string"},{"name":"title","type":"string"},{"name":"document","type":"flags.2?Document"},{"name":"settings","type":"flags.3?ThemeSettings"},{"name":"installs_count","type":"int"}],"type":"Theme"},{"id":"-199313886","predicate":"account.themesNotModified","params":[],"type":"account.Themes"},{"id":"2137482273","predicate":"account.themes","params":[{"name":"hash","type":"int"},{"name":"themes","type":"Vector<Theme>"}],"type":"account.Themes"},{"id":"-2112423005","predicate":"updateTheme","params":[{"name":"theme","type":"Theme"}],"type":"Update"},{"id":"-786326563","predicate":"inputPrivacyKeyAddedByPhone","params":[],"type":"InputPrivacyKey"},{"id":"1124062251","predicate":"privacyKeyAddedByPhone","params":[],"type":"PrivacyKey"},{"id":"-2027964103","predicate":"updateGeoLiveViewed","params":[{"name":"peer","type":"Peer"},{"name":"msg_id","type":"int"}],"type":"Update"},{"id":"1448076945","predicate":"updateLoginToken","params":[],"type":"Update"},{"id":"1654593920","predicate":"auth.loginToken","params":[{"name":"expires","type":"int"},{"name":"token","type":"bytes"}],"type":"auth.LoginToken"},{"id":"110008598","predicate":"auth.loginTokenMigrateTo","params":[{"name":"dc_id","type":"int"},{"name":"token","type":"bytes"}],"type":"auth.LoginToken"},{"id":"957176926","predicate":"auth.loginTokenSuccess","params":[{"name":"authorization","type":"auth.Authorization"}],"type":"auth.LoginToken"},{"id":"1474462241","predicate":"account.contentSettings","params":[{"name":"flags","type":"#"},{"name":"sensitive_enabled","type":"flags.0?true"},{"name":"sensitive_can_change","type":"flags.1?true"}],"type":"account.ContentSettings"},{"id":"-1456996667","predicate":"messages.inactiveChats","params":[{"name":"dates","type":"Vector<int>"},{"name":"chats","type":"Vector<Chat>"},{"name":"users","type":"Vector<User>"}],"type":"messages.InactiveChats"},{"id":"-1012849566","predicate":"baseThemeClassic","params":[],"type":"BaseTheme"},{"id":"-69724536","predicate":"baseThemeDay","params":[],"type":"BaseTheme"},{"id":"-1212997976","predicate":"baseThemeNight","params":[],"type":"BaseTheme"},{"id":"1834973166","predicate":"baseThemeTinted","params":[],"type":"BaseTheme"},{"id":"1527845466","predicate":"baseThemeArctic","params":[],"type":"BaseTheme"},{"id":"-2077770836","predicate":"inputWallPaperNoFile","params":[],"type":"InputWallPaper"},{"id":"-1963717851","predicate":"wallPaperNoFile","params":[{"name":"flags","type":"#"},{"name":"default","type":"flags.1?true"},{"name":"dark","type":"flags.4?true"},{"name":"settings","type":"flags.2?WallPaperSettings"}],"type":"WallPaper"},{"id":"-1118798639","predicate":"inputThemeSettings","params":[{"name":"flags","type":"#"},{"name":"base_theme","type":"BaseTheme"},{"name":"accent_color","type":"int"},{"name":"message_top_color","type":"flags.0?int"},{"name":"message_bottom_color","type":"flags.0?int"},{"name":"wallpaper","type":"flags.1?InputWallPaper"},{"name":"wallpaper_settings","type":"flags.1?WallPaperSettings"}],"type":"InputThemeSettings"},{"id":"-1676371894","predicate":"themeSettings","params":[{"name":"flags","type":"#"},{"name":"base_theme","type":"BaseTheme"},{"name":"accent_color","type":"int"},{"name":"message_top_color","type":"flags.0?int"},{"name":"message_bottom_color","type":"flags.0?int"},{"name":"wallpaper","type":"flags.1?WallPaper"}],"type":"ThemeSettings"},{"id":"1421174295","predicate":"webPageAttributeTheme","params":[{"name":"flags","type":"#"},{"name":"documents","type":"flags.0?Vector<Document>"},{"name":"settings","type":"flags.1?ThemeSettings"}],"type":"WebPageAttribute"}],"methods":[{"id":"-878758099","method":"invokeAfterMsg","params":[{"name":"msg_id","type":"long"},{"name":"query","type":"!X"}],"type":"X"},{"id":"1036301552","method":"invokeAfterMsgs","params":[{"name":"msg_ids","type":"Vector<long>"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-1502141361","method":"auth.sendCode","params":[{"name":"phone_number","type":"string"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"},{"name":"settings","type":"CodeSettings"}],"type":"auth.SentCode"},{"id":"-2131827673","method":"auth.signUp","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"}],"type":"auth.Authorization"},{"id":"-1126886015","method":"auth.signIn","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"auth.Authorization"},{"id":"1461180992","method":"auth.logOut","params":[],"type":"Bool"},{"id":"-1616179942","method":"auth.resetAuthorizations","params":[],"type":"Bool"},{"id":"-440401971","method":"auth.exportAuthorization","params":[{"name":"dc_id","type":"int"}],"type":"auth.ExportedAuthorization"},{"id":"-470837741","method":"auth.importAuthorization","params":[{"name":"id","type":"int"},{"name":"bytes","type":"bytes"}],"type":"auth.Authorization"},{"id":"-841733627","method":"auth.bindTempAuthKey","params":[{"name":"perm_auth_key_id","type":"long"},{"name":"nonce","type":"long"},{"name":"expires_at","type":"int"},{"name":"encrypted_message","type":"bytes"}],"type":"Bool"},{"id":"1754754159","method":"account.registerDevice","params":[{"name":"flags","type":"#"},{"name":"no_muted","type":"flags.0?true"},{"name":"token_type","type":"int"},{"name":"token","type":"string"},{"name":"app_sandbox","type":"Bool"},{"name":"secret","type":"bytes"},{"name":"other_uids","type":"Vector<int>"}],"type":"Bool"},{"id":"813089983","method":"account.unregisterDevice","params":[{"name":"token_type","type":"int"},{"name":"token","type":"string"},{"name":"other_uids","type":"Vector<int>"}],"type":"Bool"},{"id":"-2067899501","method":"account.updateNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"},{"name":"settings","type":"InputPeerNotifySettings"}],"type":"Bool"},{"id":"313765169","method":"account.getNotifySettings","params":[{"name":"peer","type":"InputNotifyPeer"}],"type":"PeerNotifySettings"},{"id":"-612493497","method":"account.resetNotifySettings","params":[],"type":"Bool"},{"id":"2018596725","method":"account.updateProfile","params":[{"name":"flags","type":"#"},{"name":"first_name","type":"flags.0?string"},{"name":"last_name","type":"flags.1?string"},{"name":"about","type":"flags.2?string"}],"type":"User"},{"id":"1713919532","method":"account.updateStatus","params":[{"name":"offline","type":"Bool"}],"type":"Bool"},{"id":"-1430579357","method":"account.getWallPapers","params":[{"name":"hash","type":"int"}],"type":"account.WallPapers"},{"id":"-1374118561","method":"account.reportPeer","params":[{"name":"peer","type":"InputPeer"},{"name":"reason","type":"ReportReason"}],"type":"Bool"},{"id":"227648840","method":"users.getUsers","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Vector<User>"},{"id":"-902781519","method":"users.getFullUser","params":[{"name":"id","type":"InputUser"}],"type":"UserFull"},{"id":"749357634","method":"contacts.getContactIDs","params":[{"name":"hash","type":"int"}],"type":"Vector<int>"},{"id":"-995929106","method":"contacts.getStatuses","params":[],"type":"Vector<ContactStatus>"},{"id":"-1071414113","method":"contacts.getContacts","params":[{"name":"hash","type":"int"}],"type":"contacts.Contacts"},{"id":"746589157","method":"contacts.importContacts","params":[{"name":"contacts","type":"Vector<InputContact>"}],"type":"contacts.ImportedContacts"},{"id":"157945344","method":"contacts.deleteContacts","params":[{"name":"id","type":"Vector<InputUser>"}],"type":"Updates"},{"id":"269745566","method":"contacts.deleteByPhones","params":[{"name":"phones","type":"Vector<string>"}],"type":"Bool"},{"id":"858475004","method":"contacts.block","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-448724803","method":"contacts.unblock","params":[{"name":"id","type":"InputUser"}],"type":"Bool"},{"id":"-176409329","method":"contacts.getBlocked","params":[{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"contacts.Blocked"},{"id":"1673946374","method":"messages.getMessages","params":[{"name":"id","type":"Vector<InputMessage>"}],"type":"messages.Messages"},{"id":"-1594999949","method":"messages.getDialogs","params":[{"name":"flags","type":"#"},{"name":"exclude_pinned","type":"flags.0?true"},{"name":"folder_id","type":"flags.1?int"},{"name":"offset_date","type":"int"},{"name":"offset_id","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"limit","type":"int"},{"name":"hash","type":"int"}],"type":"messages.Dialogs"},{"id":"-591691168","method":"messages.getHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"offset_date","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"},{"name":"hash","type":"int"}],"type":"messages.Messages"},{"id":"-2045448344","method":"messages.search","params":[{"name":"flags","type":"#"},{"name":"peer","type":"InputPeer"},{"name":"q","type":"string"},{"name":"from_id","type":"flags.0?InputUser"},{"name":"filter","type":"MessagesFilter"},{"name":"min_date","type":"int"},{"name":"max_date","type":"int"},{"name":"offset_id","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"},{"name":"hash","type":"int"}],"type":"messages.Messages"},{"id":"238054714","method":"messages.readHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedMessages"},{"id":"469850889","method":"messages.deleteHistory","params":[{"name":"flags","type":"#"},{"name":"just_clear","type":"flags.0?true"},{"name":"revoke","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"max_id","type":"int"}],"type":"messages.AffectedHistory"},{"id":"-443640366","method":"messages.deleteMessages","params":[{"name":"flags","type":"#"},{"name":"revoke","type":"flags.0?true"},{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"94983360","method":"messages.receivedMessages","params":[{"name":"max_id","type":"int"}],"type":"Vector<ReceivedNotifyMessage>"},{"id":"-1551737264","method":"messages.setTyping","params":[{"name":"peer","type":"InputPeer"},{"name":"action","type":"SendMessageAction"}],"type":"Bool"},{"id":"1376532592","method":"messages.sendMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"message","type":"string"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"schedule_date","type":"flags.10?int"}],"type":"Updates"},{"id":"881978281","method":"messages.sendMedia","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"media","type":"InputMedia"},{"name":"message","type":"string"},{"name":"random_id","type":"long"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"schedule_date","type":"flags.10?int"}],"type":"Updates"},{"id":"-637606386","method":"messages.forwardMessages","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"with_my_score","type":"flags.8?true"},{"name":"grouped","type":"flags.9?true"},{"name":"from_peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"random_id","type":"Vector<long>"},{"name":"to_peer","type":"InputPeer"},{"name":"schedule_date","type":"flags.10?int"}],"type":"Updates"},{"id":"-820669733","method":"messages.reportSpam","params":[{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"913498268","method":"messages.getPeerSettings","params":[{"name":"peer","type":"InputPeer"}],"type":"PeerSettings"},{"id":"-1115507112","method":"messages.report","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"reason","type":"ReportReason"}],"type":"Bool"},{"id":"1013621127","method":"messages.getChats","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.Chats"},{"id":"998448230","method":"messages.getFullChat","params":[{"name":"chat_id","type":"int"}],"type":"messages.ChatFull"},{"id":"-599447467","method":"messages.editChatTitle","params":[{"name":"chat_id","type":"int"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-900957736","method":"messages.editChatPhoto","params":[{"name":"chat_id","type":"int"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"-106911223","method":"messages.addChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"fwd_limit","type":"int"}],"type":"Updates"},{"id":"-530505962","method":"messages.deleteChatUser","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"Updates"},{"id":"164303470","method":"messages.createChat","params":[{"name":"users","type":"Vector<InputUser>"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-304838614","method":"updates.getState","params":[],"type":"updates.State"},{"id":"630429265","method":"updates.getDifference","params":[{"name":"flags","type":"#"},{"name":"pts","type":"int"},{"name":"pts_total_limit","type":"flags.0?int"},{"name":"date","type":"int"},{"name":"qts","type":"int"}],"type":"updates.Difference"},{"id":"-256159406","method":"photos.updateProfilePhoto","params":[{"name":"id","type":"InputPhoto"}],"type":"UserProfilePhoto"},{"id":"1328726168","method":"photos.uploadProfilePhoto","params":[{"name":"file","type":"InputFile"}],"type":"photos.Photo"},{"id":"-2016444625","method":"photos.deletePhotos","params":[{"name":"id","type":"Vector<InputPhoto>"}],"type":"Vector<long>"},{"id":"-1291540959","method":"upload.saveFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"-1319462148","method":"upload.getFile","params":[{"name":"flags","type":"#"},{"name":"precise","type":"flags.0?true"},{"name":"cdn_supported","type":"flags.1?true"},{"name":"location","type":"InputFileLocation"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.File"},{"id":"-990308245","method":"help.getConfig","params":[],"type":"Config"},{"id":"531836966","method":"help.getNearestDc","params":[],"type":"NearestDc"},{"id":"1378703997","method":"help.getAppUpdate","params":[{"name":"source","type":"string"}],"type":"help.AppUpdate"},{"id":"1295590211","method":"help.getInviteText","params":[],"type":"help.InviteText"},{"id":"-1848823128","method":"photos.getUserPhotos","params":[{"name":"user_id","type":"InputUser"},{"name":"offset","type":"int"},{"name":"max_id","type":"long"},{"name":"limit","type":"int"}],"type":"photos.Photos"},{"id":"651135312","method":"messages.getDhConfig","params":[{"name":"version","type":"int"},{"name":"random_length","type":"int"}],"type":"messages.DhConfig"},{"id":"-162681021","method":"messages.requestEncryption","params":[{"name":"user_id","type":"InputUser"},{"name":"random_id","type":"int"},{"name":"g_a","type":"bytes"}],"type":"EncryptedChat"},{"id":"1035731989","method":"messages.acceptEncryption","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"g_b","type":"bytes"},{"name":"key_fingerprint","type":"long"}],"type":"EncryptedChat"},{"id":"-304536635","method":"messages.discardEncryption","params":[{"name":"chat_id","type":"int"}],"type":"Bool"},{"id":"2031374829","method":"messages.setEncryptedTyping","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"typing","type":"Bool"}],"type":"Bool"},{"id":"2135648522","method":"messages.readEncryptedHistory","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"max_date","type":"int"}],"type":"Bool"},{"id":"-1451792525","method":"messages.sendEncrypted","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"-1701831834","method":"messages.sendEncryptedFile","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"},{"name":"file","type":"InputEncryptedFile"}],"type":"messages.SentEncryptedMessage"},{"id":"852769188","method":"messages.sendEncryptedService","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"random_id","type":"long"},{"name":"data","type":"bytes"}],"type":"messages.SentEncryptedMessage"},{"id":"1436924774","method":"messages.receivedQueue","params":[{"name":"max_qts","type":"int"}],"type":"Vector<long>"},{"id":"1259113487","method":"messages.reportEncryptedSpam","params":[{"name":"peer","type":"InputEncryptedChat"}],"type":"Bool"},{"id":"-562337987","method":"upload.saveBigFilePart","params":[{"name":"file_id","type":"long"},{"name":"file_part","type":"int"},{"name":"file_total_parts","type":"int"},{"name":"bytes","type":"bytes"}],"type":"Bool"},{"id":"2018609336","method":"initConnection","params":[{"name":"flags","type":"#"},{"name":"api_id","type":"int"},{"name":"device_model","type":"string"},{"name":"system_version","type":"string"},{"name":"app_version","type":"string"},{"name":"system_lang_code","type":"string"},{"name":"lang_pack","type":"string"},{"name":"lang_code","type":"string"},{"name":"proxy","type":"flags.0?InputClientProxy"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-1663104819","method":"help.getSupport","params":[],"type":"help.Support"},{"id":"916930423","method":"messages.readMessageContents","params":[{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"655677548","method":"account.checkUsername","params":[{"name":"username","type":"string"}],"type":"Bool"},{"id":"1040964988","method":"account.updateUsername","params":[{"name":"username","type":"string"}],"type":"User"},{"id":"301470424","method":"contacts.search","params":[{"name":"q","type":"string"},{"name":"limit","type":"int"}],"type":"contacts.Found"},{"id":"-623130288","method":"account.getPrivacy","params":[{"name":"key","type":"InputPrivacyKey"}],"type":"account.PrivacyRules"},{"id":"-906486552","method":"account.setPrivacy","params":[{"name":"key","type":"InputPrivacyKey"},{"name":"rules","type":"Vector<InputPrivacyRule>"}],"type":"account.PrivacyRules"},{"id":"1099779595","method":"account.deleteAccount","params":[{"name":"reason","type":"string"}],"type":"Bool"},{"id":"150761757","method":"account.getAccountTTL","params":[],"type":"AccountDaysTTL"},{"id":"608323678","method":"account.setAccountTTL","params":[{"name":"ttl","type":"AccountDaysTTL"}],"type":"Bool"},{"id":"-627372787","method":"invokeWithLayer","params":[{"name":"layer","type":"int"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-113456221","method":"contacts.resolveUsername","params":[{"name":"username","type":"string"}],"type":"contacts.ResolvedPeer"},{"id":"-2108208411","method":"account.sendChangePhoneCode","params":[{"name":"phone_number","type":"string"},{"name":"settings","type":"CodeSettings"}],"type":"auth.SentCode"},{"id":"1891839707","method":"account.changePhone","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"User"},{"id":"71126828","method":"messages.getStickers","params":[{"name":"emoticon","type":"string"},{"name":"hash","type":"int"}],"type":"messages.Stickers"},{"id":"479598769","method":"messages.getAllStickers","params":[{"name":"hash","type":"int"}],"type":"messages.AllStickers"},{"id":"954152242","method":"account.updateDeviceLocked","params":[{"name":"period","type":"int"}],"type":"Bool"},{"id":"1738800940","method":"auth.importBotAuthorization","params":[{"name":"flags","type":"int"},{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"},{"name":"bot_auth_token","type":"string"}],"type":"auth.Authorization"},{"id":"-1956073268","method":"messages.getWebPagePreview","params":[{"name":"flags","type":"#"},{"name":"message","type":"string"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"MessageMedia"},{"id":"-484392616","method":"account.getAuthorizations","params":[],"type":"account.Authorizations"},{"id":"-545786948","method":"account.resetAuthorization","params":[{"name":"hash","type":"long"}],"type":"Bool"},{"id":"1418342645","method":"account.getPassword","params":[],"type":"account.Password"},{"id":"-1663767815","method":"account.getPasswordSettings","params":[{"name":"password","type":"InputCheckPasswordSRP"}],"type":"account.PasswordSettings"},{"id":"-1516564433","method":"account.updatePasswordSettings","params":[{"name":"password","type":"InputCheckPasswordSRP"},{"name":"new_settings","type":"account.PasswordInputSettings"}],"type":"Bool"},{"id":"-779399914","method":"auth.checkPassword","params":[{"name":"password","type":"InputCheckPasswordSRP"}],"type":"auth.Authorization"},{"id":"-661144474","method":"auth.requestPasswordRecovery","params":[],"type":"auth.PasswordRecovery"},{"id":"1319464594","method":"auth.recoverPassword","params":[{"name":"code","type":"string"}],"type":"auth.Authorization"},{"id":"-1080796745","method":"invokeWithoutUpdates","params":[{"name":"query","type":"!X"}],"type":"X"},{"id":"234312524","method":"messages.exportChatInvite","params":[{"name":"peer","type":"InputPeer"}],"type":"ExportedChatInvite"},{"id":"1051570619","method":"messages.checkChatInvite","params":[{"name":"hash","type":"string"}],"type":"ChatInvite"},{"id":"1817183516","method":"messages.importChatInvite","params":[{"name":"hash","type":"string"}],"type":"Updates"},{"id":"639215886","method":"messages.getStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"messages.StickerSet"},{"id":"-946871200","method":"messages.installStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"},{"name":"archived","type":"Bool"}],"type":"messages.StickerSetInstallResult"},{"id":"-110209570","method":"messages.uninstallStickerSet","params":[{"name":"stickerset","type":"InputStickerSet"}],"type":"Bool"},{"id":"-421563528","method":"messages.startBot","params":[{"name":"bot","type":"InputUser"},{"name":"peer","type":"InputPeer"},{"name":"random_id","type":"long"},{"name":"start_param","type":"string"}],"type":"Updates"},{"id":"-1877938321","method":"help.getAppChangelog","params":[{"name":"prev_app_version","type":"string"}],"type":"Updates"},{"id":"-993483427","method":"messages.getMessagesViews","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"},{"name":"increment","type":"Bool"}],"type":"Vector<int>"},{"id":"-871347913","method":"channels.readHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"max_id","type":"int"}],"type":"Bool"},{"id":"-2067661490","method":"channels.deleteMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"messages.AffectedMessages"},{"id":"-787622117","method":"channels.deleteUserHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"messages.AffectedHistory"},{"id":"-32999408","method":"channels.reportSpam","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"id","type":"Vector<int>"}],"type":"Bool"},{"id":"-1383294429","method":"channels.getMessages","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<InputMessage>"}],"type":"messages.Messages"},{"id":"306054633","method":"channels.getParticipants","params":[{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelParticipantsFilter"},{"name":"offset","type":"int"},{"name":"limit","type":"int"},{"name":"hash","type":"int"}],"type":"channels.ChannelParticipants"},{"id":"1416484774","method":"channels.getParticipant","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"}],"type":"channels.ChannelParticipant"},{"id":"176122811","method":"channels.getChannels","params":[{"name":"id","type":"Vector<InputChannel>"}],"type":"messages.Chats"},{"id":"141781513","method":"channels.getFullChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"messages.ChatFull"},{"id":"1029681423","method":"channels.createChannel","params":[{"name":"flags","type":"#"},{"name":"broadcast","type":"flags.0?true"},{"name":"megagroup","type":"flags.1?true"},{"name":"title","type":"string"},{"name":"about","type":"string"},{"name":"geo_point","type":"flags.2?InputGeoPoint"},{"name":"address","type":"flags.2?string"}],"type":"Updates"},{"id":"-751007486","method":"channels.editAdmin","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"admin_rights","type":"ChatAdminRights"},{"name":"rank","type":"string"}],"type":"Updates"},{"id":"1450044624","method":"channels.editTitle","params":[{"name":"channel","type":"InputChannel"},{"name":"title","type":"string"}],"type":"Updates"},{"id":"-248621111","method":"channels.editPhoto","params":[{"name":"channel","type":"InputChannel"},{"name":"photo","type":"InputChatPhoto"}],"type":"Updates"},{"id":"283557164","method":"channels.checkUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"890549214","method":"channels.updateUsername","params":[{"name":"channel","type":"InputChannel"},{"name":"username","type":"string"}],"type":"Bool"},{"id":"615851205","method":"channels.joinChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"-130635115","method":"channels.leaveChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"429865580","method":"channels.inviteToChannel","params":[{"name":"channel","type":"InputChannel"},{"name":"users","type":"Vector<InputUser>"}],"type":"Updates"},{"id":"-1072619549","method":"channels.deleteChannel","params":[{"name":"channel","type":"InputChannel"}],"type":"Updates"},{"id":"51854712","method":"updates.getChannelDifference","params":[{"name":"flags","type":"#"},{"name":"force","type":"flags.0?true"},{"name":"channel","type":"InputChannel"},{"name":"filter","type":"ChannelMessagesFilter"},{"name":"pts","type":"int"},{"name":"limit","type":"int"}],"type":"updates.ChannelDifference"},{"id":"-1444503762","method":"messages.editChatAdmin","params":[{"name":"chat_id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"is_admin","type":"Bool"}],"type":"Bool"},{"id":"363051235","method":"messages.migrateChat","params":[{"name":"chat_id","type":"int"}],"type":"Updates"},{"id":"-1083038300","method":"messages.searchGlobal","params":[{"name":"flags","type":"#"},{"name":"folder_id","type":"flags.0?int"},{"name":"q","type":"string"},{"name":"offset_rate","type":"int"},{"name":"offset_peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Messages"},{"id":"2016638777","method":"messages.reorderStickerSets","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"order","type":"Vector<long>"}],"type":"Bool"},{"id":"864953444","method":"messages.getDocumentByHash","params":[{"name":"sha256","type":"bytes"},{"name":"size","type":"int"},{"name":"mime_type","type":"string"}],"type":"Document"},{"id":"-1080395925","method":"messages.searchGifs","params":[{"name":"q","type":"string"},{"name":"offset","type":"int"}],"type":"messages.FoundGifs"},{"id":"-2084618926","method":"messages.getSavedGifs","params":[{"name":"hash","type":"int"}],"type":"messages.SavedGifs"},{"id":"846868683","method":"messages.saveGif","params":[{"name":"id","type":"InputDocument"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"1364105629","method":"messages.getInlineBotResults","params":[{"name":"flags","type":"#"},{"name":"bot","type":"InputUser"},{"name":"peer","type":"InputPeer"},{"name":"geo_point","type":"flags.0?InputGeoPoint"},{"name":"query","type":"string"},{"name":"offset","type":"string"}],"type":"messages.BotResults"},{"id":"-346119674","method":"messages.setInlineBotResults","params":[{"name":"flags","type":"#"},{"name":"gallery","type":"flags.0?true"},{"name":"private","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"results","type":"Vector<InputBotInlineResult>"},{"name":"cache_time","type":"int"},{"name":"next_offset","type":"flags.2?string"},{"name":"switch_pm","type":"flags.3?InlineBotSwitchPM"}],"type":"Bool"},{"id":"570955184","method":"messages.sendInlineBotResult","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"hide_via","type":"flags.11?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"random_id","type":"long"},{"name":"query_id","type":"long"},{"name":"id","type":"string"},{"name":"schedule_date","type":"flags.10?int"}],"type":"Updates"},{"id":"-826838685","method":"channels.exportMessageLink","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"int"},{"name":"grouped","type":"Bool"}],"type":"ExportedMessageLink"},{"id":"527021574","method":"channels.toggleSignatures","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"1056025023","method":"auth.resendCode","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"auth.SentCode"},{"id":"520357240","method":"auth.cancelCode","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"}],"type":"Bool"},{"id":"-39416522","method":"messages.getMessageEditData","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"}],"type":"messages.MessageEditData"},{"id":"1224152952","method":"messages.editMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"message","type":"flags.11?string"},{"name":"media","type":"flags.14?InputMedia"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"},{"name":"schedule_date","type":"flags.15?int"}],"type":"Updates"},{"id":"-2091549254","method":"messages.editInlineBotMessage","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"id","type":"InputBotInlineMessageID"},{"name":"message","type":"flags.11?string"},{"name":"media","type":"flags.14?InputMedia"},{"name":"reply_markup","type":"flags.2?ReplyMarkup"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Bool"},{"id":"-2130010132","method":"messages.getBotCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"game","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"data","type":"flags.0?bytes"}],"type":"messages.BotCallbackAnswer"},{"id":"-712043766","method":"messages.setBotCallbackAnswer","params":[{"name":"flags","type":"#"},{"name":"alert","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"message","type":"flags.0?string"},{"name":"url","type":"flags.2?string"},{"name":"cache_time","type":"int"}],"type":"Bool"},{"id":"-728224331","method":"contacts.getTopPeers","params":[{"name":"flags","type":"#"},{"name":"correspondents","type":"flags.0?true"},{"name":"bots_pm","type":"flags.1?true"},{"name":"bots_inline","type":"flags.2?true"},{"name":"phone_calls","type":"flags.3?true"},{"name":"forward_users","type":"flags.4?true"},{"name":"forward_chats","type":"flags.5?true"},{"name":"groups","type":"flags.10?true"},{"name":"channels","type":"flags.15?true"},{"name":"offset","type":"int"},{"name":"limit","type":"int"},{"name":"hash","type":"int"}],"type":"contacts.TopPeers"},{"id":"451113900","method":"contacts.resetTopPeerRating","params":[{"name":"category","type":"TopPeerCategory"},{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"-462373635","method":"messages.getPeerDialogs","params":[{"name":"peers","type":"Vector<InputDialogPeer>"}],"type":"messages.PeerDialogs"},{"id":"-1137057461","method":"messages.saveDraft","params":[{"name":"flags","type":"#"},{"name":"no_webpage","type":"flags.1?true"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"peer","type":"InputPeer"},{"name":"message","type":"string"},{"name":"entities","type":"flags.3?Vector<MessageEntity>"}],"type":"Bool"},{"id":"1782549861","method":"messages.getAllDrafts","params":[],"type":"Updates"},{"id":"766298703","method":"messages.getFeaturedStickers","params":[{"name":"hash","type":"int"}],"type":"messages.FeaturedStickers"},{"id":"1527873830","method":"messages.readFeaturedStickers","params":[{"name":"id","type":"Vector<long>"}],"type":"Bool"},{"id":"1587647177","method":"messages.getRecentStickers","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"},{"name":"hash","type":"int"}],"type":"messages.RecentStickers"},{"id":"958863608","method":"messages.saveRecentSticker","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"},{"name":"id","type":"InputDocument"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"-1986437075","method":"messages.clearRecentStickers","params":[{"name":"flags","type":"#"},{"name":"attached","type":"flags.0?true"}],"type":"Bool"},{"id":"1475442322","method":"messages.getArchivedStickers","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"offset_id","type":"long"},{"name":"limit","type":"int"}],"type":"messages.ArchivedStickers"},{"id":"457157256","method":"account.sendConfirmPhoneCode","params":[{"name":"hash","type":"string"},{"name":"settings","type":"CodeSettings"}],"type":"auth.SentCode"},{"id":"1596029123","method":"account.confirmPhone","params":[{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"Bool"},{"id":"-122669393","method":"channels.getAdminedPublicChannels","params":[{"name":"flags","type":"#"},{"name":"by_location","type":"flags.0?true"},{"name":"check_limit","type":"flags.1?true"}],"type":"messages.Chats"},{"id":"1706608543","method":"messages.getMaskStickers","params":[{"name":"hash","type":"int"}],"type":"messages.AllStickers"},{"id":"-866424884","method":"messages.getAttachedStickers","params":[{"name":"media","type":"InputStickeredMedia"}],"type":"Vector<StickerSetCovered>"},{"id":"-1907842680","method":"auth.dropTempAuthKeys","params":[{"name":"except_auth_keys","type":"Vector<long>"}],"type":"Bool"},{"id":"-1896289088","method":"messages.setGameScore","params":[{"name":"flags","type":"#"},{"name":"edit_message","type":"flags.0?true"},{"name":"force","type":"flags.1?true"},{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"user_id","type":"InputUser"},{"name":"score","type":"int"}],"type":"Updates"},{"id":"363700068","method":"messages.setInlineGameScore","params":[{"name":"flags","type":"#"},{"name":"edit_message","type":"flags.0?true"},{"name":"force","type":"flags.1?true"},{"name":"id","type":"InputBotInlineMessageID"},{"name":"user_id","type":"InputUser"},{"name":"score","type":"int"}],"type":"Bool"},{"id":"-400399203","method":"messages.getGameHighScores","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"},{"name":"user_id","type":"InputUser"}],"type":"messages.HighScores"},{"id":"258170395","method":"messages.getInlineGameHighScores","params":[{"name":"id","type":"InputBotInlineMessageID"},{"name":"user_id","type":"InputUser"}],"type":"messages.HighScores"},{"id":"218777796","method":"messages.getCommonChats","params":[{"name":"user_id","type":"InputUser"},{"name":"max_id","type":"int"},{"name":"limit","type":"int"}],"type":"messages.Chats"},{"id":"-341307408","method":"messages.getAllChats","params":[{"name":"except_ids","type":"Vector<int>"}],"type":"messages.Chats"},{"id":"-333262899","method":"help.setBotUpdatesStatus","params":[{"name":"pending_updates_count","type":"int"},{"name":"message","type":"string"}],"type":"Bool"},{"id":"852135825","method":"messages.getWebPage","params":[{"name":"url","type":"string"},{"name":"hash","type":"int"}],"type":"WebPage"},{"id":"-1489903017","method":"messages.toggleDialogPin","params":[{"name":"flags","type":"#"},{"name":"pinned","type":"flags.0?true"},{"name":"peer","type":"InputDialogPeer"}],"type":"Bool"},{"id":"991616823","method":"messages.reorderPinnedDialogs","params":[{"name":"flags","type":"#"},{"name":"force","type":"flags.0?true"},{"name":"folder_id","type":"int"},{"name":"order","type":"Vector<InputDialogPeer>"}],"type":"Bool"},{"id":"-692498958","method":"messages.getPinnedDialogs","params":[{"name":"folder_id","type":"int"}],"type":"messages.PeerDialogs"},{"id":"-1440257555","method":"bots.sendCustomRequest","params":[{"name":"custom_method","type":"string"},{"name":"params","type":"DataJSON"}],"type":"DataJSON"},{"id":"-434028723","method":"bots.answerWebhookJSONQuery","params":[{"name":"query_id","type":"long"},{"name":"data","type":"DataJSON"}],"type":"Bool"},{"id":"619086221","method":"upload.getWebFile","params":[{"name":"location","type":"InputWebFileLocation"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.WebFile"},{"id":"-1712285883","method":"payments.getPaymentForm","params":[{"name":"msg_id","type":"int"}],"type":"payments.PaymentForm"},{"id":"-1601001088","method":"payments.getPaymentReceipt","params":[{"name":"msg_id","type":"int"}],"type":"payments.PaymentReceipt"},{"id":"1997180532","method":"payments.validateRequestedInfo","params":[{"name":"flags","type":"#"},{"name":"save","type":"flags.0?true"},{"name":"msg_id","type":"int"},{"name":"info","type":"PaymentRequestedInfo"}],"type":"payments.ValidatedRequestedInfo"},{"id":"730364339","method":"payments.sendPaymentForm","params":[{"name":"flags","type":"#"},{"name":"msg_id","type":"int"},{"name":"requested_info_id","type":"flags.0?string"},{"name":"shipping_option_id","type":"flags.1?string"},{"name":"credentials","type":"InputPaymentCredentials"}],"type":"payments.PaymentResult"},{"id":"1151208273","method":"account.getTmpPassword","params":[{"name":"password","type":"InputCheckPasswordSRP"},{"name":"period","type":"int"}],"type":"account.TmpPassword"},{"id":"578650699","method":"payments.getSavedInfo","params":[],"type":"payments.SavedInfo"},{"id":"-667062079","method":"payments.clearSavedInfo","params":[{"name":"flags","type":"#"},{"name":"credentials","type":"flags.0?true"},{"name":"info","type":"flags.1?true"}],"type":"Bool"},{"id":"-436833542","method":"messages.setBotShippingResults","params":[{"name":"flags","type":"#"},{"name":"query_id","type":"long"},{"name":"error","type":"flags.0?string"},{"name":"shipping_options","type":"flags.1?Vector<ShippingOption>"}],"type":"Bool"},{"id":"163765653","method":"messages.setBotPrecheckoutResults","params":[{"name":"flags","type":"#"},{"name":"success","type":"flags.1?true"},{"name":"query_id","type":"long"},{"name":"error","type":"flags.0?string"}],"type":"Bool"},{"id":"-1680314774","method":"stickers.createStickerSet","params":[{"name":"flags","type":"#"},{"name":"masks","type":"flags.0?true"},{"name":"user_id","type":"InputUser"},{"name":"title","type":"string"},{"name":"short_name","type":"string"},{"name":"stickers","type":"Vector<InputStickerSetItem>"}],"type":"messages.StickerSet"},{"id":"-143257775","method":"stickers.removeStickerFromSet","params":[{"name":"sticker","type":"InputDocument"}],"type":"messages.StickerSet"},{"id":"-4795190","method":"stickers.changeStickerPosition","params":[{"name":"sticker","type":"InputDocument"},{"name":"position","type":"int"}],"type":"messages.StickerSet"},{"id":"-2041315650","method":"stickers.addStickerToSet","params":[{"name":"stickerset","type":"InputStickerSet"},{"name":"sticker","type":"InputStickerSetItem"}],"type":"messages.StickerSet"},{"id":"1369162417","method":"messages.uploadMedia","params":[{"name":"peer","type":"InputPeer"},{"name":"media","type":"InputMedia"}],"type":"MessageMedia"},{"id":"1430593449","method":"phone.getCallConfig","params":[],"type":"DataJSON"},{"id":"1124046573","method":"phone.requestCall","params":[{"name":"flags","type":"#"},{"name":"video","type":"flags.0?true"},{"name":"user_id","type":"InputUser"},{"name":"random_id","type":"int"},{"name":"g_a_hash","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"phone.PhoneCall"},{"id":"1003664544","method":"phone.acceptCall","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"g_b","type":"bytes"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"phone.PhoneCall"},{"id":"788404002","method":"phone.confirmCall","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"g_a","type":"bytes"},{"name":"key_fingerprint","type":"long"},{"name":"protocol","type":"PhoneCallProtocol"}],"type":"phone.PhoneCall"},{"id":"399855457","method":"phone.receivedCall","params":[{"name":"peer","type":"InputPhoneCall"}],"type":"Bool"},{"id":"-1295269440","method":"phone.discardCall","params":[{"name":"flags","type":"#"},{"name":"video","type":"flags.0?true"},{"name":"peer","type":"InputPhoneCall"},{"name":"duration","type":"int"},{"name":"reason","type":"PhoneCallDiscardReason"},{"name":"connection_id","type":"long"}],"type":"Updates"},{"id":"1508562471","method":"phone.setCallRating","params":[{"name":"flags","type":"#"},{"name":"user_initiative","type":"flags.0?true"},{"name":"peer","type":"InputPhoneCall"},{"name":"rating","type":"int"},{"name":"comment","type":"string"}],"type":"Updates"},{"id":"662363518","method":"phone.saveCallDebug","params":[{"name":"peer","type":"InputPhoneCall"},{"name":"debug","type":"DataJSON"}],"type":"Bool"},{"id":"536919235","method":"upload.getCdnFile","params":[{"name":"file_token","type":"bytes"},{"name":"offset","type":"int"},{"name":"limit","type":"int"}],"type":"upload.CdnFile"},{"id":"-1691921240","method":"upload.reuploadCdnFile","params":[{"name":"file_token","type":"bytes"},{"name":"request_token","type":"bytes"}],"type":"Vector<FileHash>"},{"id":"1375900482","method":"help.getCdnConfig","params":[],"type":"CdnConfig"},{"id":"-219008246","method":"langpack.getLangPack","params":[{"name":"lang_pack","type":"string"},{"name":"lang_code","type":"string"}],"type":"LangPackDifference"},{"id":"-269862909","method":"langpack.getStrings","params":[{"name":"lang_pack","type":"string"},{"name":"lang_code","type":"string"},{"name":"keys","type":"Vector<string>"}],"type":"Vector<LangPackString>"},{"id":"-845657435","method":"langpack.getDifference","params":[{"name":"lang_pack","type":"string"},{"name":"lang_code","type":"string"},{"name":"from_version","type":"int"}],"type":"LangPackDifference"},{"id":"1120311183","method":"langpack.getLanguages","params":[{"name":"lang_pack","type":"string"}],"type":"Vector<LangPackLanguage>"},{"id":"1920559378","method":"channels.editBanned","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"banned_rights","type":"ChatBannedRights"}],"type":"Updates"},{"id":"870184064","method":"channels.getAdminLog","params":[{"name":"flags","type":"#"},{"name":"channel","type":"InputChannel"},{"name":"q","type":"string"},{"name":"events_filter","type":"flags.0?ChannelAdminLogEventsFilter"},{"name":"admins","type":"flags.1?Vector<InputUser>"},{"name":"max_id","type":"long"},{"name":"min_id","type":"long"},{"name":"limit","type":"int"}],"type":"channels.AdminLogResults"},{"id":"1302676017","method":"upload.getCdnFileHashes","params":[{"name":"file_token","type":"bytes"},{"name":"offset","type":"int"}],"type":"Vector<FileHash>"},{"id":"-914493408","method":"messages.sendScreenshotNotification","params":[{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"int"},{"name":"random_id","type":"long"}],"type":"Updates"},{"id":"-359881479","method":"channels.setStickers","params":[{"name":"channel","type":"InputChannel"},{"name":"stickerset","type":"InputStickerSet"}],"type":"Bool"},{"id":"567151374","method":"messages.getFavedStickers","params":[{"name":"hash","type":"int"}],"type":"messages.FavedStickers"},{"id":"-1174420133","method":"messages.faveSticker","params":[{"name":"id","type":"InputDocument"},{"name":"unfave","type":"Bool"}],"type":"Bool"},{"id":"-357180360","method":"channels.readMessageContents","params":[{"name":"channel","type":"InputChannel"},{"name":"id","type":"Vector<int>"}],"type":"Bool"},{"id":"-2020263951","method":"contacts.resetSaved","params":[],"type":"Bool"},{"id":"1180140658","method":"messages.getUnreadMentions","params":[{"name":"peer","type":"InputPeer"},{"name":"offset_id","type":"int"},{"name":"add_offset","type":"int"},{"name":"limit","type":"int"},{"name":"max_id","type":"int"},{"name":"min_id","type":"int"}],"type":"messages.Messages"},{"id":"-1355375294","method":"channels.deleteHistory","params":[{"name":"channel","type":"InputChannel"},{"name":"max_id","type":"int"}],"type":"Bool"},{"id":"1036054804","method":"help.getRecentMeUrls","params":[{"name":"referer","type":"string"}],"type":"help.RecentMeUrls"},{"id":"-356796084","method":"channels.togglePreHistoryHidden","params":[{"name":"channel","type":"InputChannel"},{"name":"enabled","type":"Bool"}],"type":"Updates"},{"id":"251759059","method":"messages.readMentions","params":[{"name":"peer","type":"InputPeer"}],"type":"messages.AffectedHistory"},{"id":"-1144759543","method":"messages.getRecentLocations","params":[{"name":"peer","type":"InputPeer"},{"name":"limit","type":"int"},{"name":"hash","type":"int"}],"type":"messages.Messages"},{"id":"-872345397","method":"messages.sendMultiMedia","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.5?true"},{"name":"background","type":"flags.6?true"},{"name":"clear_draft","type":"flags.7?true"},{"name":"peer","type":"InputPeer"},{"name":"reply_to_msg_id","type":"flags.0?int"},{"name":"multi_media","type":"Vector<InputSingleMedia>"},{"name":"schedule_date","type":"flags.10?int"}],"type":"Updates"},{"id":"1347929239","method":"messages.uploadEncryptedFile","params":[{"name":"peer","type":"InputEncryptedChat"},{"name":"file","type":"InputEncryptedFile"}],"type":"EncryptedFile"},{"id":"405695855","method":"account.getWebAuthorizations","params":[],"type":"account.WebAuthorizations"},{"id":"755087855","method":"account.resetWebAuthorization","params":[{"name":"hash","type":"long"}],"type":"Bool"},{"id":"1747789204","method":"account.resetWebAuthorizations","params":[],"type":"Bool"},{"id":"-1028140917","method":"messages.searchStickerSets","params":[{"name":"flags","type":"#"},{"name":"exclude_featured","type":"flags.0?true"},{"name":"q","type":"string"},{"name":"hash","type":"int"}],"type":"messages.FoundStickerSets"},{"id":"-956147407","method":"upload.getFileHashes","params":[{"name":"location","type":"InputFileLocation"},{"name":"offset","type":"int"}],"type":"Vector<FileHash>"},{"id":"1031231713","method":"help.getProxyData","params":[],"type":"help.ProxyData"},{"id":"749019089","method":"help.getTermsOfServiceUpdate","params":[],"type":"help.TermsOfServiceUpdate"},{"id":"-294455398","method":"help.acceptTermsOfService","params":[{"name":"id","type":"DataJSON"}],"type":"Bool"},{"id":"-1299661699","method":"account.getAllSecureValues","params":[],"type":"Vector<SecureValue>"},{"id":"1936088002","method":"account.getSecureValue","params":[{"name":"types","type":"Vector<SecureValueType>"}],"type":"Vector<SecureValue>"},{"id":"-1986010339","method":"account.saveSecureValue","params":[{"name":"value","type":"InputSecureValue"},{"name":"secure_secret_id","type":"long"}],"type":"SecureValue"},{"id":"-1199522741","method":"account.deleteSecureValue","params":[{"name":"types","type":"Vector<SecureValueType>"}],"type":"Bool"},{"id":"-1865902923","method":"users.setSecureValueErrors","params":[{"name":"id","type":"InputUser"},{"name":"errors","type":"Vector<SecureValueError>"}],"type":"Bool"},{"id":"-1200903967","method":"account.getAuthorizationForm","params":[{"name":"bot_id","type":"int"},{"name":"scope","type":"string"},{"name":"public_key","type":"string"}],"type":"account.AuthorizationForm"},{"id":"-419267436","method":"account.acceptAuthorization","params":[{"name":"bot_id","type":"int"},{"name":"scope","type":"string"},{"name":"public_key","type":"string"},{"name":"value_hashes","type":"Vector<SecureValueHash>"},{"name":"credentials","type":"SecureCredentialsEncrypted"}],"type":"Bool"},{"id":"-1516022023","method":"account.sendVerifyPhoneCode","params":[{"name":"phone_number","type":"string"},{"name":"settings","type":"CodeSettings"}],"type":"auth.SentCode"},{"id":"1305716726","method":"account.verifyPhone","params":[{"name":"phone_number","type":"string"},{"name":"phone_code_hash","type":"string"},{"name":"phone_code","type":"string"}],"type":"Bool"},{"id":"1880182943","method":"account.sendVerifyEmailCode","params":[{"name":"email","type":"string"}],"type":"account.SentEmailCode"},{"id":"-323339813","method":"account.verifyEmail","params":[{"name":"email","type":"string"},{"name":"code","type":"string"}],"type":"Bool"},{"id":"1072547679","method":"help.getDeepLinkInfo","params":[{"name":"path","type":"string"}],"type":"help.DeepLinkInfo"},{"id":"-2098076769","method":"contacts.getSaved","params":[],"type":"Vector<SavedContact>"},{"id":"-2092831552","method":"channels.getLeftChannels","params":[{"name":"offset","type":"int"}],"type":"messages.Chats"},{"id":"-262453244","method":"account.initTakeoutSession","params":[{"name":"flags","type":"#"},{"name":"contacts","type":"flags.0?true"},{"name":"message_users","type":"flags.1?true"},{"name":"message_chats","type":"flags.2?true"},{"name":"message_megagroups","type":"flags.3?true"},{"name":"message_channels","type":"flags.4?true"},{"name":"files","type":"flags.5?true"},{"name":"file_max_size","type":"flags.5?int"}],"type":"account.Takeout"},{"id":"489050862","method":"account.finishTakeoutSession","params":[{"name":"flags","type":"#"},{"name":"success","type":"flags.0?true"}],"type":"Bool"},{"id":"486505992","method":"messages.getSplitRanges","params":[],"type":"Vector<MessageRange>"},{"id":"911373810","method":"invokeWithMessagesRange","params":[{"name":"range","type":"MessageRange"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-1398145746","method":"invokeWithTakeout","params":[{"name":"takeout_id","type":"long"},{"name":"query","type":"!X"}],"type":"X"},{"id":"-1031349873","method":"messages.markDialogUnread","params":[{"name":"flags","type":"#"},{"name":"unread","type":"flags.0?true"},{"name":"peer","type":"InputDialogPeer"}],"type":"Bool"},{"id":"585256482","method":"messages.getDialogUnreadMarks","params":[],"type":"Vector<DialogPeer>"},{"id":"-2062238246","method":"contacts.toggleTopPeers","params":[{"name":"enabled","type":"Bool"}],"type":"Bool"},{"id":"2119757468","method":"messages.clearAllDrafts","params":[],"type":"Bool"},{"id":"-1735311088","method":"help.getAppConfig","params":[],"type":"JSONValue"},{"id":"1862465352","method":"help.saveAppLog","params":[{"name":"events","type":"Vector<InputAppEvent>"}],"type":"Bool"},{"id":"-966677240","method":"help.getPassportConfig","params":[{"name":"hash","type":"int"}],"type":"help.PassportConfig"},{"id":"1784243458","method":"langpack.getLanguage","params":[{"name":"lang_pack","type":"string"},{"name":"lang_code","type":"string"}],"type":"LangPackLanguage"},{"id":"-760547348","method":"messages.updatePinnedMessage","params":[{"name":"flags","type":"#"},{"name":"silent","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"id","type":"int"}],"type":"Updates"},{"id":"-1881204448","method":"account.confirmPasswordEmail","params":[{"name":"code","type":"string"}],"type":"Bool"},{"id":"2055154197","method":"account.resendPasswordEmail","params":[],"type":"Bool"},{"id":"-1043606090","method":"account.cancelPasswordEmail","params":[],"type":"Bool"},{"id":"-748624084","method":"help.getSupportName","params":[],"type":"help.SupportName"},{"id":"59377875","method":"help.getUserInfo","params":[{"name":"user_id","type":"InputUser"}],"type":"help.UserInfo"},{"id":"1723407216","method":"help.editUserInfo","params":[{"name":"user_id","type":"InputUser"},{"name":"message","type":"string"},{"name":"entities","type":"Vector<MessageEntity>"}],"type":"help.UserInfo"},{"id":"-1626880216","method":"account.getContactSignUpNotification","params":[],"type":"Bool"},{"id":"-806076575","method":"account.setContactSignUpNotification","params":[{"name":"silent","type":"Bool"}],"type":"Bool"},{"id":"1398240377","method":"account.getNotifyExceptions","params":[{"name":"flags","type":"#"},{"name":"compare_sound","type":"flags.1?true"},{"name":"peer","type":"flags.0?InputNotifyPeer"}],"type":"Updates"},{"id":"283795844","method":"messages.sendVote","params":[{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"options","type":"Vector<bytes>"}],"type":"Updates"},{"id":"1941660731","method":"messages.getPollResults","params":[{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"}],"type":"Updates"},{"id":"1848369232","method":"messages.getOnlines","params":[{"name":"peer","type":"InputPeer"}],"type":"ChatOnlines"},{"id":"-2127811866","method":"messages.getStatsURL","params":[{"name":"flags","type":"#"},{"name":"dark","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"params","type":"string"}],"type":"StatsURL"},{"id":"-554301545","method":"messages.editChatAbout","params":[{"name":"peer","type":"InputPeer"},{"name":"about","type":"string"}],"type":"Bool"},{"id":"-1517917375","method":"messages.editChatDefaultBannedRights","params":[{"name":"peer","type":"InputPeer"},{"name":"banned_rights","type":"ChatBannedRights"}],"type":"Updates"},{"id":"-57811990","method":"account.getWallPaper","params":[{"name":"wallpaper","type":"InputWallPaper"}],"type":"WallPaper"},{"id":"-578472351","method":"account.uploadWallPaper","params":[{"name":"file","type":"InputFile"},{"name":"mime_type","type":"string"},{"name":"settings","type":"WallPaperSettings"}],"type":"WallPaper"},{"id":"1817860919","method":"account.saveWallPaper","params":[{"name":"wallpaper","type":"InputWallPaper"},{"name":"unsave","type":"Bool"},{"name":"settings","type":"WallPaperSettings"}],"type":"Bool"},{"id":"-18000023","method":"account.installWallPaper","params":[{"name":"wallpaper","type":"InputWallPaper"},{"name":"settings","type":"WallPaperSettings"}],"type":"Bool"},{"id":"-1153722364","method":"account.resetWallPapers","params":[],"type":"Bool"},{"id":"1457130303","method":"account.getAutoDownloadSettings","params":[],"type":"account.AutoDownloadSettings"},{"id":"1995661875","method":"account.saveAutoDownloadSettings","params":[{"name":"flags","type":"#"},{"name":"low","type":"flags.0?true"},{"name":"high","type":"flags.1?true"},{"name":"settings","type":"AutoDownloadSettings"}],"type":"Bool"},{"id":"899735650","method":"messages.getEmojiKeywords","params":[{"name":"lang_code","type":"string"}],"type":"EmojiKeywordsDifference"},{"id":"352892591","method":"messages.getEmojiKeywordsDifference","params":[{"name":"lang_code","type":"string"},{"name":"from_version","type":"int"}],"type":"EmojiKeywordsDifference"},{"id":"1318675378","method":"messages.getEmojiKeywordsLanguages","params":[{"name":"lang_codes","type":"Vector<string>"}],"type":"Vector<EmojiLanguage>"},{"id":"-709817306","method":"messages.getEmojiURL","params":[{"name":"lang_code","type":"string"}],"type":"EmojiURL"},{"id":"1749536939","method":"folders.editPeerFolders","params":[{"name":"folder_peers","type":"Vector<InputFolderPeer>"}],"type":"Updates"},{"id":"472471681","method":"folders.deleteFolder","params":[{"name":"folder_id","type":"int"}],"type":"Updates"},{"id":"1932455680","method":"messages.getSearchCounters","params":[{"name":"peer","type":"InputPeer"},{"name":"filters","type":"Vector<MessagesFilter>"}],"type":"Vector<messages.SearchCounter>"},{"id":"-170208392","method":"channels.getGroupsForDiscussion","params":[],"type":"messages.Chats"},{"id":"1079520178","method":"channels.setDiscussionGroup","params":[{"name":"broadcast","type":"InputChannel"},{"name":"group","type":"InputChannel"}],"type":"Bool"},{"id":"-482388461","method":"messages.requestUrlAuth","params":[{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"button_id","type":"int"}],"type":"UrlAuthResult"},{"id":"-148247912","method":"messages.acceptUrlAuth","params":[{"name":"flags","type":"#"},{"name":"write_allowed","type":"flags.0?true"},{"name":"peer","type":"InputPeer"},{"name":"msg_id","type":"int"},{"name":"button_id","type":"int"}],"type":"UrlAuthResult"},{"id":"1336717624","method":"messages.hidePeerSettingsBar","params":[{"name":"peer","type":"InputPeer"}],"type":"Bool"},{"id":"-386636848","method":"contacts.addContact","params":[{"name":"flags","type":"#"},{"name":"add_phone_privacy_exception","type":"flags.0?true"},{"name":"id","type":"InputUser"},{"name":"first_name","type":"string"},{"name":"last_name","type":"string"},{"name":"phone","type":"string"}],"type":"Updates"},{"id":"-130964977","method":"contacts.acceptContact","params":[{"name":"id","type":"InputUser"}],"type":"Updates"},{"id":"-1892102881","method":"channels.editCreator","params":[{"name":"channel","type":"InputChannel"},{"name":"user_id","type":"InputUser"},{"name":"password","type":"InputCheckPasswordSRP"}],"type":"Updates"},{"id":"171270230","method":"contacts.getLocated","params":[{"name":"geo_point","type":"InputGeoPoint"}],"type":"Updates"},{"id":"1491484525","method":"channels.editLocation","params":[{"name":"channel","type":"InputChannel"},{"name":"geo_point","type":"InputGeoPoint"},{"name":"address","type":"string"}],"type":"Bool"},{"id":"-304832784","method":"channels.toggleSlowMode","params":[{"name":"channel","type":"InputChannel"},{"name":"seconds","type":"int"}],"type":"Updates"},{"id":"-490575781","method":"messages.getScheduledHistory","params":[{"name":"peer","type":"InputPeer"},{"name":"hash","type":"int"}],"type":"messages.Messages"},{"id":"-1111817116","method":"messages.getScheduledMessages","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"}],"type":"messages.Messages"},{"id":"-1120369398","method":"messages.sendScheduledMessages","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"}],"type":"Updates"},{"id":"1504586518","method":"messages.deleteScheduledMessages","params":[{"name":"peer","type":"InputPeer"},{"name":"id","type":"Vector<int>"}],"type":"Updates"},{"id":"473805619","method":"account.uploadTheme","params":[{"name":"flags","type":"#"},{"name":"file","type":"InputFile"},{"name":"thumb","type":"flags.0?InputFile"},{"name":"file_name","type":"string"},{"name":"mime_type","type":"string"}],"type":"Document"},{"id":"-2077048289","method":"account.createTheme","params":[{"name":"flags","type":"#"},{"name":"slug","type":"string"},{"name":"title","type":"string"},{"name":"document","type":"flags.2?InputDocument"},{"name":"settings","type":"flags.3?InputThemeSettings"}],"type":"Theme"},{"id":"1555261397","method":"account.updateTheme","params":[{"name":"flags","type":"#"},{"name":"format","type":"string"},{"name":"theme","type":"InputTheme"},{"name":"slug","type":"flags.0?string"},{"name":"title","type":"flags.1?string"},{"name":"document","type":"flags.2?InputDocument"},{"name":"settings","type":"flags.3?InputThemeSettings"}],"type":"Theme"},{"id":"-229175188","method":"account.saveTheme","params":[{"name":"theme","type":"InputTheme"},{"name":"unsave","type":"Bool"}],"type":"Bool"},{"id":"2061776695","method":"account.installTheme","params":[{"name":"flags","type":"#"},{"name":"dark","type":"flags.0?true"},{"name":"format","type":"flags.1?string"},{"name":"theme","type":"flags.1?InputTheme"}],"type":"Bool"},{"id":"-1919060949","method":"account.getTheme","params":[{"name":"format","type":"string"},{"name":"theme","type":"InputTheme"},{"name":"document_id","type":"long"}],"type":"Theme"},{"id":"676939512","method":"account.getThemes","params":[{"name":"format","type":"string"},{"name":"hash","type":"int"}],"type":"account.Themes"},{"id":"-1313598185","method":"auth.exportLoginToken","params":[{"name":"api_id","type":"int"},{"name":"api_hash","type":"string"},{"name":"except_ids","type":"Vector<int>"}],"type":"auth.LoginToken"},{"id":"-1783866140","method":"auth.importLoginToken","params":[{"name":"token","type":"bytes"}],"type":"auth.LoginToken"},{"id":"-392909491","method":"auth.acceptLoginToken","params":[{"name":"token","type":"bytes"}],"type":"Authorization"},{"id":"-1250643605","method":"account.setContentSettings","params":[{"name":"flags","type":"#"},{"name":"sensitive_enabled","type":"flags.0?true"}],"type":"Bool"},{"id":"-1952756306","method":"account.getContentSettings","params":[],"type":"account.ContentSettings"},{"id":"300429806","method":"channels.getInactiveChannels","params":[],"type":"messages.InactiveChats"},{"id":"1705865692","method":"account.getMultiWallPapers","params":[{"name":"wallpapers","type":"Vector<InputWallPaper>"}],"type":"Vector<WallPaper>"}]};

Config.Schema.API.layer = 108;

// ConfigStorage
(function (window) {
  var keyPrefix = '';
  var noPrefix = false;
  var cache = {};
  var useCs = !!(window.chrome && chrome.storage && chrome.storage.local);
  var useLs = !useCs && !!window.localStorage;

  function storageSetPrefix (newPrefix) {
    keyPrefix = newPrefix;
  }

  function storageSetNoPrefix() {
    noPrefix = true;
  }

  function storageGetPrefix () {
    if (noPrefix) {
      noPrefix = false;
      return '';
    }
    return keyPrefix;
  }

  function storageGetValue() {
    var keys = Array.prototype.slice.call(arguments),
        callback = keys.pop(),
        result = [],
        single = keys.length == 1,
        value,
        allFound = true,
        prefix = storageGetPrefix(),
        i, key;

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i];
      if (key.substr(0, 3) != 'xt_' && cache[key] !== undefined) {
        result.push(cache[key]);
      }
      else if (useLs) {
        try {
          value = localStorage.getItem(key);
        } catch (e) {
          useLs = false;
        }
        try {
          value = (value === undefined || value === null) ? false : JSON.parse(value);
        } catch (e) {
          value = false;
        }
        result.push(cache[key] = value);
      }
      else if (!useCs) {
        result.push(cache[key] = false);
      }
      else {
        allFound = false;
      }
    }

    if (allFound) {
      return callback(single ? result[0] : result);
    }

    chrome.storage.local.get(keys, function (resultObj) {
      var value;
      result = [];
      for (i = 0; i < keys.length; i++) {
        key = keys[i];
        value = resultObj[key];
        value = value === undefined || value === null ? false : JSON.parse(value);
        result.push(cache[key] = value);
      }

      callback(single ? result[0] : result);
    });
  }

  function storageSetValue(obj, callback) {
    var keyValues = {},
        prefix = storageGetPrefix(),
        key, value;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        value = obj[key];
        key = prefix + key;
        cache[key] = value;
        value = JSON.stringify(value);
        if (useLs) {
          try {
            localStorage.setItem(key, value);
          } catch (e) {
            useLs = false;
          }
        } else {
          keyValues[key] = value;
        }
      }
    }

    if (useLs || !useCs) {
      if (callback) {
        callback();
      }
      return;
    }

    chrome.storage.local.set(keyValues, callback);
  }

  function storageRemoveValue () {
    var keys = Array.prototype.slice.call(arguments),
        prefix = storageGetPrefix(),
        i, key, callback;

    if (typeof keys[keys.length - 1] === 'function') {
      callback = keys.pop();
    }

    for (i = 0; i < keys.length; i++) {
      key = keys[i] = prefix + keys[i];
      delete cache[key];
      if (useLs) {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          useLs = false;
        }
      }
    }
    if (useCs) {
      chrome.storage.local.remove(keys, callback);
    }
    else if (callback) {
      callback();
    }
  }

  window.ConfigStorage = {
    prefix: storageSetPrefix,
    noPrefix: storageSetNoPrefix,
    get: storageGetValue,
    set: storageSetValue,
    remove: storageRemoveValue
  };

})(this);

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
;(function(global) {
  'use strict';
  global.console = global.console || {};
  var con = global.console;
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
})(typeof window === 'undefined' ? this : window);
// Using `this` for web workers while maintaining compatibility with browser
// targeted script loaders such as Browserify or Webpack where the only way to
// get to the global object is via `window`.

/* Array.indexOf polyfill */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    var k;
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;
    if (len === 0) {
      return -1;
    }
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }
    if (n >= len) {
      return -1;
    }
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}

/* Array.isArray polyfill */
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

/* Object.create polyfill */
if (typeof Object.create != 'function') {
  Object.create = (function() {
    var Object = function() {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported');
      }
      if (typeof prototype != 'object') {
        throw TypeError('Argument must be an object');
      }
      Object.prototype = prototype;
      var result = new Object();
      Object.prototype = null;
      return result;
    };
  })();
}

/* Function.bind polyfill */
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

/* setZeroTimeout polyfill, from http://dbaron.org/log/20100309-faster-timeouts */
(function(global) {
  var timeouts = [];
  var messageName = 'zero-timeout-message';

  function setZeroTimeout(fn) {
    timeouts.push(fn);
    global.postMessage(messageName, '*');
  }

  function handleMessage(event) {
    if (event.source == global && event.data == messageName) {
      event.stopPropagation();
      if (timeouts.length > 0) {
        var fn = timeouts.shift();
        fn();
      }
    }
  }

  global.addEventListener('message', handleMessage, true);

  var originalSetTimeout = global.setTimeout;
  global.setTimeout = function (callback, delay) {
    if (!delay || delay <= 5) {
      return setZeroTimeout(callback);
    }
    return originalSetTimeout(callback, delay);
  };

  global.setZeroTimeout = setZeroTimeout;
})(this);

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

 function TLSerialization (options) {
  options = options || {};
  this.maxLength = options.startMaxLength || 2048; // 2Kb
  this.offset = 0; // in bytes

  this.createBuffer();

  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug;
  this.mtproto = options.mtproto || false;
  return this;
}

TLSerialization.prototype.createBuffer = function () {
  this.buffer   = new ArrayBuffer(this.maxLength);
  this.intView  = new Int32Array(this.buffer);
  this.byteView = new Uint8Array(this.buffer);
};

TLSerialization.prototype.getArray = function () {
  var resultBuffer = new ArrayBuffer(this.offset);
  var resultArray  = new Int32Array(resultBuffer);

  resultArray.set(this.intView.subarray(0, this.offset / 4));

  return resultArray;
};

TLSerialization.prototype.getBuffer = function () {
  return this.getArray().buffer;
};

TLSerialization.prototype.getBytes = function (typed) {
  if (typed) {
    var resultBuffer = new ArrayBuffer(this.offset);
    var resultArray  = new Uint8Array(resultBuffer);

    resultArray.set(this.byteView.subarray(0, this.offset));

    return resultArray;
  }

  var bytes = [];
  for (var i = 0; i < this.offset; i++) {
    bytes.push(this.byteView[i]);
  }
  return bytes;
};

TLSerialization.prototype.checkLength = function (needBytes) {
  if (this.offset + needBytes < this.maxLength) {
    return;
  }

  console.trace('Increase buffer', this.offset, needBytes, this.maxLength);
  this.maxLength = Math.ceil(Math.max(this.maxLength * 2, this.offset + needBytes + 16) / 4) * 4;
  var previousBuffer = this.buffer,
      previousArray = new Int32Array(previousBuffer);

  this.createBuffer();

  new Int32Array(this.buffer).set(previousArray);
};

TLSerialization.prototype.writeInt = function (i, field) {
  this.debug && console.log('>>>', i.toString(16), i, field);

  this.checkLength(4);
  this.intView[this.offset / 4] = i;
  this.offset += 4;
};

TLSerialization.prototype.storeInt = function (i, field) {
  this.writeInt(i, (field || '') + ':int');
};

TLSerialization.prototype.storeBool = function (i, field) {
  if (i) {
    this.writeInt(0x997275b5, (field || '') + ':bool');
  } else {
    this.writeInt(0xbc799737, (field || '') + ':bool');
  }
};

TLSerialization.prototype.storeLongP = function (iHigh, iLow, field) {
  this.writeInt(iLow, (field || '') + ':long[low]');
  this.writeInt(iHigh, (field || '') + ':long[high]');
};

TLSerialization.prototype.storeLong = function (sLong, field) {
  if (isArray(sLong)) {
    if (sLong.length == 2) {
      return this.storeLongP(sLong[0], sLong[1], field);
    } else {
      return this.storeIntBytes(sLong, 64, field);
    }
  }

  if (typeof sLong != 'string') {
    sLong = sLong ? sLong.toString() : '0';
  }
  var divRem = bigStringInt(sLong).divideAndRemainder(bigint(0x100000000));

  this.writeInt(intToUint(divRem[1].intValue()), (field || '') + ':long[low]');
  this.writeInt(intToUint(divRem[0].intValue()), (field || '') + ':long[high]');
};

TLSerialization.prototype.storeDouble = function (f) {
  var buffer     = new ArrayBuffer(8);
  var intView    = new Int32Array(buffer);
  var doubleView = new Float64Array(buffer);

  doubleView[0] = f;

  this.writeInt(intView[0], (field || '') + ':double[low]');
  this.writeInt(intView[1], (field || '') + ':double[high]');
};

TLSerialization.prototype.storeString = function (s, field) {
  this.debug && console.log('>>>', s, (field || '') + ':string');

  if (s === undefined) {
    s = '';
  }
  var sUTF8 = unescape(encodeURIComponent(s));

  this.checkLength(sUTF8.length + 8);


  var len = sUTF8.length;
  if (len <= 253) {
    this.byteView[this.offset++] = len;
  } else {
    this.byteView[this.offset++] = 254;
    this.byteView[this.offset++] = len & 0xFF;
    this.byteView[this.offset++] = (len & 0xFF00) >> 8;
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16;
  }
  for (var i = 0; i < len; i++) {
    this.byteView[this.offset++] = sUTF8.charCodeAt(i);
  }

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0;
  }
}


TLSerialization.prototype.storeBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  else if (bytes === undefined) {
    bytes = [];
  }
  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':bytes');

  var len = bytes.byteLength || bytes.length;
  this.checkLength(len + 8);
  if (len <= 253) {
    this.byteView[this.offset++] = len;
  } else {
    this.byteView[this.offset++] = 254;
    this.byteView[this.offset++] = len & 0xFF;
    this.byteView[this.offset++] = (len & 0xFF00) >> 8;
    this.byteView[this.offset++] = (len & 0xFF0000) >> 16;
  }

  this.byteView.set(bytes, this.offset);
  this.offset += len;

  // Padding
  while (this.offset % 4) {
    this.byteView[this.offset++] = 0;
  }
}

TLSerialization.prototype.storeIntBytes = function (bytes, bits, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var len = bytes.length;
  if ((bits % 32) || (len * 8) != bits) {
    throw new Error('Invalid bits: ' + bits + ', ' + bytes.length);
  }

  this.debug && console.log('>>>', bytesToHex(bytes), (field || '') + ':int' + bits);
  this.checkLength(len);

  this.byteView.set(bytes, this.offset);
  this.offset += len;
};

TLSerialization.prototype.storeRawBytes = function (bytes, field) {
  if (bytes instanceof ArrayBuffer) {
    bytes = new Uint8Array(bytes);
  }
  var len = bytes.length;

  this.debug && console.log('>>>', bytesToHex(bytes), (field || ''));
  this.checkLength(len);

  this.byteView.set(bytes, this.offset);
  this.offset += len;
};


TLSerialization.prototype.storeMethod = function (methodName, params) {
  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API,
      methodData = false,
      i;

  for (i = 0; i < schema.methods.length; i++) {
    if (schema.methods[i].method == methodName) {
      methodData = schema.methods[i];
      break
    }
  }
  if (!methodData) {
    throw new Error('No method ' + methodName + ' found');
  }

  this.storeInt(intToUint(methodData.id), methodName + '[id]');

  var param, type, i, condType, fieldBit;
  var len = methodData.params.length;
  for (i = 0; i < len; i++) {
    param = methodData.params[i];
    type = param.type;
    if (type.indexOf('?') !== -1) {
      condType = type.split('?');
      fieldBit = condType[0].split('.');
      if (!(params[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue;
      }
      type = condType[1];
    }

    this.storeObject(params[param.name], type, methodName + '[' + param.name + ']');
  }

  return methodData.type;
};

TLSerialization.prototype.storeObject = function (obj, type, field) {
  switch (type) {
    case '#':
    case 'int':    return this.storeInt(obj,  field);
    case 'long':   return this.storeLong(obj,  field);
    case 'int128': return this.storeIntBytes(obj, 128, field);
    case 'int256': return this.storeIntBytes(obj, 256, field);
    case 'int512': return this.storeIntBytes(obj, 512, field);
    case 'string': return this.storeString(obj,   field);
    case 'bytes':  return this.storeBytes(obj,  field);
    case 'double': return this.storeDouble(obj,   field);
    case 'Bool':   return this.storeBool(obj,   field);
    case 'true':   return;
  }

  if (isArray(obj)) {
    if (type.substr(0, 6) == 'Vector') {
      this.writeInt(0x1cb5c415, field + '[id]');
    }
    else if (type.substr(0, 6) != 'vector') {
      throw new Error('Invalid vector type ' + type);
    }
    var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
    this.writeInt(obj.length, field + '[count]');
    for (var i = 0; i < obj.length; i++) {
      this.storeObject(obj[i], itemType, field + '[' + i + ']');
    }
    return true;
  }
  else if (type.substr(0, 6).toLowerCase() == 'vector') {
    throw new Error('Invalid vector object');
  }

  if (!isObject(obj)) {
    throw new Error('Invalid object for type ' + type);
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API,
      predicate = obj['_'],
      isBare = false,
      constructorData = false,
      i;

  if (isBare = (type.charAt(0) == '%')) {
    type = type.substr(1);
  }

  for (i = 0; i < schema.constructors.length; i++) {
    if (schema.constructors[i].predicate == predicate) {
      constructorData = schema.constructors[i];
      break
    }
  }
  if (!constructorData) {
    throw new Error('No predicate ' + predicate + ' found');
  }

  if (predicate == type) {
    isBare = true;
  }

  if (!isBare) {
    this.writeInt(intToUint(constructorData.id), field + '[' + predicate + '][id]');
  }

  var param, type, i, condType, fieldBit;
  var len = constructorData.params.length;
  for (i = 0; i < len; i++) {
    param = constructorData.params[i];
    type = param.type;
    if (type.indexOf('?') !== -1) {
      condType = type.split('?');
      fieldBit = condType[0].split('.');
      if (!(obj[fieldBit[0]] & (1 << fieldBit[1]))) {
        continue;
      }
      type = condType[1];
    }

    this.storeObject(obj[param.name], type, field + '[' + predicate + '][' + param.name + ']');
  }
  return constructorData.type;
};



function TLDeserialization (buffer, options) {
  options = options || {};

  this.offset = 0; // in bytes
  this.override = options.override || {};

  this.buffer = buffer;
  this.intView  = new Uint32Array(this.buffer);
  this.byteView = new Uint8Array(this.buffer);

  // this.debug = options.debug !== undefined ? options.debug : Config.Modes.debug;
  this.mtproto = options.mtproto || false;
  return this;
}

TLDeserialization.prototype.readInt = function (field) {
  if (this.offset >= this.intView.length * 4) {
    throw new Error('Nothing to fetch: ' + field);
  }

  var i = this.intView[this.offset / 4];

  this.debug && console.log('<<<', i.toString(16), i, field);

  this.offset += 4;

  return i;
};

TLDeserialization.prototype.fetchInt = function (field) {
  return this.readInt((field || '') + ':int');
}

TLDeserialization.prototype.fetchDouble = function (field) {
  var buffer     = new ArrayBuffer(8);
  var intView    = new Int32Array(buffer);
  var doubleView = new Float64Array(buffer);

  intView[0] = this.readInt((field || '') + ':double[low]'),
  intView[1] = this.readInt((field || '') + ':double[high]');

  return doubleView[0];
};

TLDeserialization.prototype.fetchLong = function (field) {
  var iLow = this.readInt((field || '') + ':long[low]'),
      iHigh = this.readInt((field || '') + ':long[high]');

  var longDec = bigint(iHigh).shiftLeft(32).add(bigint(iLow)).toString();

  return longDec;
}

TLDeserialization.prototype.fetchBool = function (field) {
  var i = this.readInt((field || '') + ':bool');
  if (i == 0x997275b5) {
    return true;
  } else if (i == 0xbc799737) {
    return false
  }

  this.offset -= 4;
  return this.fetchObject('Object', field);
}

TLDeserialization.prototype.fetchString = function (field) {
  var len = this.byteView[this.offset++];

  if (len == 254) {
    var len = this.byteView[this.offset++] |
              (this.byteView[this.offset++] << 8) |
              (this.byteView[this.offset++] << 16);
  }

  var sUTF8 = '';
  for (var i = 0; i < len; i++) {
    sUTF8 += String.fromCharCode(this.byteView[this.offset++]);
  }

  // Padding
  while (this.offset % 4) {
    this.offset++;
  }

  try {
    var s = decodeURIComponent(escape(sUTF8));
  } catch (e) {
    var s = sUTF8;
  }

  this.debug && console.log('<<<', s, (field || '') + ':string');

  return s;
}


TLDeserialization.prototype.fetchBytes = function (field) {
  var len = this.byteView[this.offset++];

  if (len == 254) {
    var len = this.byteView[this.offset++] |
              (this.byteView[this.offset++] << 8) |
              (this.byteView[this.offset++] << 16);
  }

  var bytes = this.byteView.subarray(this.offset, this.offset + len);
  this.offset += len;

  // Padding
  while (this.offset % 4) {
    this.offset++;
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':bytes');

  return bytes;
}

TLDeserialization.prototype.fetchIntBytes = function (bits, typed, field) {
  if (bits % 32) {
    throw new Error('Invalid bits: ' + bits);
  }

  var len = bits / 8;
  if (typed) {
    var result = this.byteView.subarray(this.offset, this.offset + len);
    this.offset += len;
    return result;
  }

  var bytes = [];
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++]);
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || '') + ':int' + bits);

  return bytes;
};


TLDeserialization.prototype.fetchRawBytes = function (len, typed, field) {
  if (len === false) {
    len = this.readInt((field || '') + '_length');
  }

  if (typed) {
    var bytes = new Uint8Array(len);
    bytes.set(this.byteView.subarray(this.offset, this.offset + len));
    this.offset += len;
    return bytes;
  }

  var bytes = [];
  for (var i = 0; i < len; i++) {
    bytes.push(this.byteView[this.offset++]);
  }

  this.debug && console.log('<<<', bytesToHex(bytes), (field || ''));

  return bytes;
};

TLDeserialization.prototype.fetchObject = function (type, field) {
  switch (type) {
    case '#':
    case 'int':    return this.fetchInt(field);
    case 'long':   return this.fetchLong(field);
    case 'int128': return this.fetchIntBytes(128, false, field);
    case 'int256': return this.fetchIntBytes(256, false, field);
    case 'int512': return this.fetchIntBytes(512, false, field);
    case 'string': return this.fetchString(field);
    case 'bytes':  return this.fetchBytes(field);
    case 'double': return this.fetchDouble(field);
    case 'Bool':   return this.fetchBool(field);
    case 'true':   return true;
  }

  field = field || type || 'Object';

  if (type.substr(0, 6) == 'Vector' || type.substr(0, 6) == 'vector') {
    if (type.charAt(0) == 'V') {
      var constructor = this.readInt(field + '[id]'),
          constructorCmp = uintToInt(constructor);

      if (constructorCmp == 0x3072cfa1) { // Gzip packed
        var compressed = this.fetchBytes(field + '[packed_string]'),
            uncompressed = gzipUncompress(compressed),
            buffer = bytesToArrayBuffer(uncompressed),
            newDeserializer = (new TLDeserialization(buffer));

        return newDeserializer.fetchObject(type, field);
      }
      if (constructorCmp != 0x1cb5c415) {
        throw new Error('Invalid vector constructor ' + constructor);
      }
    }
    var len = this.readInt(field + '[count]');
    var result = [];
    if (len > 0) {
      var itemType = type.substr(7, type.length - 8); // for "Vector<itemType>"
      for (var i = 0; i < len; i++) {
        result.push(this.fetchObject(itemType, field + '[' + i + ']'))
      }
    }

    return result;
  }

  var schema = this.mtproto ? Config.Schema.MTProto : Config.Schema.API,
      predicate = false,
      constructorData = false;

  if (type.charAt(0) == '%') {
    var checkType = type.substr(1);
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].type == checkType) {
        constructorData = schema.constructors[i];
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for type: ' + type);
    }
  }
  else if (type.charAt(0) >= 97 && type.charAt(0) <= 122) {
    for (var i = 0; i < schema.constructors.length; i++) {
      if (schema.constructors[i].predicate == type) {
        constructorData = schema.constructors[i];
        break
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found for predicate: ' + type);
    }
  }
  else {
    var constructor = this.readInt(field + '[id]'),
        constructorCmp = uintToInt(constructor);

    if (constructorCmp == 0x3072cfa1) { // Gzip packed
      var compressed = this.fetchBytes(field + '[packed_string]'),
          uncompressed = gzipUncompress(compressed),
          buffer = bytesToArrayBuffer(uncompressed),
          newDeserializer = (new TLDeserialization(buffer));

      return newDeserializer.fetchObject(type, field);
    }

    var index = schema.constructorsIndex;
    if (!index) {
      schema.constructorsIndex = index = {};
      for (var i = 0; i < schema.constructors.length; i++) {
        index[schema.constructors[i].id] = i;
      }
    }
    var i = index[constructorCmp];
    if (i) {
      constructorData = schema.constructors[i];
    }

    var fallback = false;
    if (!constructorData && this.mtproto) {
      var schemaFallback = Config.Schema.API;
      for (i = 0; i < schemaFallback.constructors.length; i++) {
        if (schemaFallback.constructors[i].id == constructorCmp) {
          constructorData = schemaFallback.constructors[i];

          delete this.mtproto;
          fallback = true;
          break;
        }
      }
    }
    if (!constructorData) {
      throw new Error('Constructor not found: ' + constructor +' '+ this.fetchInt()+' '+ this.fetchInt());
    }
  }

  predicate = constructorData.predicate;

  var result = {'_': predicate},
      overrideKey = (this.mtproto ? 'mt_' : '') + predicate,
      self = this;


  if (this.override[overrideKey]) {
    this.override[overrideKey].apply(this, [result, field + '[' + predicate + ']']);
  } else {
    var i, param, type, isCond, condType, fieldBit, value;
    var len = constructorData.params.length;
    for (i = 0; i < len; i++) {
      param = constructorData.params[i];
      type = param.type;
      if (type == '#' && result.pFlags === undefined) {
        result.pFlags = {};
      }
      if (isCond = (type.indexOf('?') !== -1)) {
        condType = type.split('?');
        fieldBit = condType[0].split('.');
        if (!(result[fieldBit[0]] & (1 << fieldBit[1]))) {
          continue;
        }
        type = condType[1];
      }

      value = self.fetchObject(type, field + '[' + predicate + '][' + param.name + ']');

      if (isCond && type === 'true') {
        result.pFlags[param.name] = value;
      } else {
        result[param.name] = value;
      }
    }
  }

  if (fallback) {
    this.mtproto = true;
  }

  return result;
};

TLDeserialization.prototype.getOffset = function () {
  return this.offset;
};

TLDeserialization.prototype.fetchEnd = function () {
  if (this.offset != this.byteView.length) {
    throw new Error('Fetch end with non-empty buffer');
  }
  return true;
};

/*!
 * Webogram v0.5.3 - messaging web application for MTProto
 * https://github.com/zhukov/webogram
 * Copyright (C) 2014 Igor Zhukov <igor.beatle@gmail.com>
 * https://github.com/zhukov/webogram/blob/master/LICENSE
 */

var _logTimer = (new Date()).getTime();

function dT () {
  return '[' + (((new Date()).getTime() - _logTimer) / 1000).toFixed(3) + ']';
}

function tsNow (seconds) {
  var t = +new Date() + (window.tsOffset || 0);
  return seconds ? Math.floor(t / 1000) : t;
}

function safeReplaceObject (wasObject, newObject) {
  for (var key in wasObject) {
    if (!newObject.hasOwnProperty(key) && key.charAt(0) != '$') {
      delete wasObject[key];
    }
  }
  for (var key in newObject) {
    if (newObject.hasOwnProperty(key)) {
      wasObject[key] = newObject[key];
    }
  }
}

function MtpApiFileManagerModule(MtpApiManager, $q) {
    var cachedFs = false;
    var cachedFsPromise = false;
    var cachedSavePromises = {};
    var cachedDownloadPromises = {};
    var cachedDownloads = {};

    var downloadPulls = {};
    var downloadActives = {};

    function downloadRequest(dcID, cb, activeDelta) {
        if (downloadPulls[dcID] === undefined) {
            downloadPulls[dcID] = [];
            downloadActives[dcID] = 0
        }
        var downloadPull = downloadPulls[dcID];
        var deferred = $q.defer();
        downloadPull.push({cb: cb, deferred: deferred, activeDelta: activeDelta});
        setZeroTimeout(function () {
            downloadCheck(dcID);
        });

        return deferred.promise;
    }

    var index = 0;

    function downloadCheck(dcID) {
        var downloadPull = downloadPulls[dcID];
        var downloadLimit = dcID == 'upload' ? 11 : 5;

        if (downloadActives[dcID] >= downloadLimit || !downloadPull || !downloadPull.length) {
            return false;
        }

        var data = downloadPull.shift(),
            activeDelta = data.activeDelta || 1;

        downloadActives[dcID] += activeDelta;

        var a = index++;
        data.cb()
            .then(function (result) {
                downloadActives[dcID] -= activeDelta;
                downloadCheck(dcID);

                data.deferred.resolve(result);

            }, function (error) {
                downloadActives[dcID] -= activeDelta;
                downloadCheck(dcID);

                data.deferred.reject(error);
            })
    }

    function uploadFile(file) {
        var fileSize = file.size,
            isBigFile = fileSize >= 10485760,
            canceled = false,
            resolved = false,
            doneParts = 0,
            partSize = 262144, // 256 Kb
            activeDelta = 2;

        if (!fileSize) {
            return $q.reject({type: 'EMPTY_FILE'});
        }

        if (fileSize > 67108864) {
            partSize = 524288;
            activeDelta = 4;
        }
        else if (fileSize < 102400) {
            partSize = 32768;
            activeDelta = 1;
        }
        var totalParts = Math.ceil(fileSize / partSize);

        if (totalParts > 3000) {
            return $q.reject({type: 'FILE_TOO_BIG'});
        }

        var fileID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            deferred = $q.defer(),
            errorHandler = function (error) {
                // console.error('Up Error', error);
                deferred.reject(error);
                canceled = true;
                errorHandler = noop;
            },
            part = 0,
            offset,
            resultInputFile = {
                _: isBigFile ? 'inputFileBig' : 'inputFile',
                id: fileID,
                parts: totalParts,
                name: file.name,
                md5_checksum: ''
            };


        for (offset = 0; offset < fileSize; offset += partSize) {
            (function (offset, part) {
                downloadRequest('upload', function () {
                    var uploadDeferred = $q.defer();

                    var reader = new FileReader();
                    var blob = file.slice(offset, offset + partSize);

                    reader.onloadend = function (e) {
                        if (canceled) {
                            uploadDeferred.reject();
                            return;
                        }
                        if (e.target.readyState != FileReader.DONE) {
                            return;
                        }
                        MtpApiManager.invokeApi(isBigFile ? 'upload.saveBigFilePart' : 'upload.saveFilePart', {
                            file_id: fileID,
                            file_part: part,
                            file_total_parts: totalParts,
                            bytes: e.target.result
                        }, {
                            startMaxLength: partSize + 256,
                            fileUpload: true,
                            singleInRequest: true
                        }).then(function (result) {
                            doneParts++;
                            uploadDeferred.resolve();
                            if (doneParts >= totalParts) {
                                deferred.resolve(resultInputFile);
                                resolved = true;
                            } else {
                                console.log(dT(), 'Progress', doneParts * partSize / fileSize);
                                deferred.notify({done: doneParts * partSize, total: fileSize});
                            }
                        }, errorHandler);
                    };

                    reader.readAsArrayBuffer(blob);

                    return uploadDeferred.promise;
                }, activeDelta);
            })(offset, part++);
        }

        deferred.promise.cancel = function () {
            console.log('cancel upload', canceled, resolved);
            if (!canceled && !resolved) {
                canceled = true;
                errorHandler({type: 'UPLOAD_CANCELED'});
            }
        };

        return deferred.promise;
    }

    return {
        uploadFile: uploadFile
    };
}

MtpApiFileManagerModule.dependencies = [
    'MtpApiManager', 
    '$q'
];

function MtpApiManagerModule(MtpSingleInstanceService, MtpNetworkerFactory, MtpAuthorizer, Storage, TelegramMeWebService, qSync, $q) {
    var cachedNetworkers = {},
        cachedUploadNetworkers = {},
        cachedExportPromise = {},
        baseDcID = false;

    var telegramMeNotified;

    MtpSingleInstanceService.start();

    Storage.get('dc').then(function (dcID) {
        if (dcID) {
            baseDcID = dcID;
        }
    });

    function telegramMeNotify(newValue) {
        if (telegramMeNotified !== newValue) {
            telegramMeNotified = newValue;
            TelegramMeWebService.setAuthorized(telegramMeNotified);
        }
    }

    function mtpSetUserAuth(dcID, userAuth) {
        var fullUserAuth = extend({dcID: dcID}, userAuth);
        Storage.set({
            dc: dcID,
            user_auth: fullUserAuth
        });
        telegramMeNotify(true);

        baseDcID = dcID;
    }

    function mtpLogOut() {
        var storageKeys = [];
        for (var dcID = 1; dcID <= 5; dcID++) {
            storageKeys.push('dc' + dcID + '_auth_key');
        }
        return Storage.get.apply(Storage, storageKeys).then(function (storageResult) {
            var logoutPromises = [];
            for (var i = 0; i < storageResult.length; i++) {
                if (storageResult[i]) {
                    logoutPromises.push(mtpInvokeApi('auth.logOut', {}, {dcID: i + 1}));
                }
            }
            return $q.all(logoutPromises).then(function () {
                Storage.remove('dc', 'user_auth');
                baseDcID = false;
                telegramMeNotify(false);
            }, function (error) {
                Storage.remove.apply(storageKeys);
                Storage.remove('dc', 'user_auth');
                baseDcID = false;
                error.handled = true;
                telegramMeNotify(false);
            });
        });
    }

    function mtpGetNetworker(dcID, options) {
        options = options || {};

        var cache = (options.fileUpload || options.fileDownload)
            ? cachedUploadNetworkers
            : cachedNetworkers;
        if (!dcID) {
            throw new Exception('get Networker without dcID');
        }

        if (cache[dcID] !== undefined) {
            return qSync.when(cache[dcID]);
        }

        var akk = 'dc' + dcID + '_auth_key',
            ssk = 'dc' + dcID + '_server_salt';

        return Storage.get(akk, ssk).then(function (result) {

            if (cache[dcID] !== undefined) {
                return cache[dcID];
            }

            var authKeyHex = result[0],
                serverSaltHex = result[1];
            // console.log('ass', dcID, authKeyHex, serverSaltHex);
            if (authKeyHex && authKeyHex.length == 512) {
                var authKey = bytesFromHex(authKeyHex);
                var serverSalt = bytesFromHex(serverSaltHex);

                return cache[dcID] = MtpNetworkerFactory.getNetworker(dcID, authKey, serverSalt, options);
            }

            if (!options.createNetworker) {
                return $q.reject({type: 'AUTH_KEY_EMPTY', code: 401});
            }

            return MtpAuthorizer.auth(dcID).then(function (auth) {
                var storeObj = {};
                storeObj[akk] = bytesToHex(auth.authKey);
                storeObj[ssk] = bytesToHex(auth.serverSalt);
                Storage.set(storeObj);

                return cache[dcID] = MtpNetworkerFactory.getNetworker(dcID, auth.authKey, auth.serverSalt, options);
            }, function (error) {
                console.log('Get networker error', error, error.stack);
                return $q.reject(error);
            });
        });
    }

    function mtpInvokeApi(method, params, options) {
        options = options || {};

        var deferred = $q.defer(),
            rejectPromise = function (error) {
                if (!error) {
                    error = {type: 'ERROR_EMPTY'};
                } else if (!isObject(error)) {
                    error = {message: error};
                }
                deferred.reject(error);

                if (!options.noErrorBox) {
                    error.input = method;
                    error.stack = error.originalError && error.originalError.stack || error.stack || (new Error()).stack;
                    setTimeout(function () {
                        if (!error.handled) {
                            if (error.code == 401) {
                                mtpLogOut();
                            }
                            error.handled = true;
                        }
                    }, 100);
                }
            },
            dcID,
            networkerPromise;

        var cachedNetworker;
        var stack = (new Error()).stack;
        if (!stack) {
            try {
                window.unexistingFunction();
            } catch (e) {
                stack = e.stack || '';
            }
        }
        var performRequest = function (networker) {
            return (cachedNetworker = networker).wrapApiCall(method, params, options).then(
                function (result) {
                    deferred.resolve(result);
                },
                function (error) {
                    console.error(dT(), 'Error', error.code, error.type, baseDcID, dcID);
                    if (error.code == 401 && baseDcID == dcID) {
                        Storage.remove('dc', 'user_auth');
                        telegramMeNotify(false);
                        rejectPromise(error);
                    }
                    else if (error.code == 401 && baseDcID && dcID != baseDcID) {
                        if (cachedExportPromise[dcID] === undefined) {
                            var exportDeferred = $q.defer();

                            mtpInvokeApi('auth.exportAuthorization', {dc_id: dcID}, {noErrorBox: true}).then(function (exportedAuth) {
                                mtpInvokeApi('auth.importAuthorization', {
                                    id: exportedAuth.id,
                                    bytes: exportedAuth.bytes
                                }, {dcID: dcID, noErrorBox: true}).then(function () {
                                    exportDeferred.resolve();
                                }, function (e) {
                                    exportDeferred.reject(e);
                                })
                            }, function (e) {
                                exportDeferred.reject(e)
                            });

                            cachedExportPromise[dcID] = exportDeferred.promise;
                        }

                        cachedExportPromise[dcID].then(function () {
                            (cachedNetworker = networker).wrapApiCall(method, params, options).then(function (result) {
                                deferred.resolve(result);
                            }, rejectPromise);
                        }, rejectPromise);
                    }
                    else if (error.code == 303) {
                        var newDcID = error.type.match(/^(PHONE_MIGRATE_|NETWORK_MIGRATE_|USER_MIGRATE_)(\d+)/)[2];
                        if (newDcID != dcID) {
                            if (options.dcID) {
                                options.dcID = newDcID;
                            } else {
                                Storage.set({dc: baseDcID = newDcID});
                            }

                            mtpGetNetworker(newDcID, options).then(function (networker) {
                                networker.wrapApiCall(method, params, options).then(function (result) {
                                    deferred.resolve(result);
                                }, rejectPromise);
                            }, rejectPromise);
                        }
                    }
                    else if (!options.rawError && error.code == 420) {
                        var waitTime = error.type.match(/^FLOOD_WAIT_(\d+)/)[1] || 10;
                        if (waitTime > (options.timeout || 60)) {
                            return rejectPromise(error);
                        }
                        setTimeout(function () {
                            performRequest(cachedNetworker);
                        }, waitTime * 1000);
                    }
                    else if (!options.rawError && (error.code == 500 || error.type == 'MSG_WAIT_FAILED')) {
                        var now = tsNow();
                        if (options.stopTime) {
                            if (now >= options.stopTime) {
                                return rejectPromise(error);
                            }
                        } else {
                            options.stopTime = now + (options.timeout !== undefined ? options.timeout : 10) * 1000;
                        }
                        options.waitTime = options.waitTime ? Math.min(60, options.waitTime * 1.5) : 1;
                        setTimeout(function () {
                            performRequest(cachedNetworker);
                        }, options.waitTime * 1000);
                    }
                    else {
                        rejectPromise(error);
                    }
                });
        };

        if (dcID = (options.dcID || baseDcID)) {
            mtpGetNetworker(dcID, options).then(performRequest, rejectPromise);
        } else {
            Storage.get('dc').then(function (baseDcID) {
                mtpGetNetworker(dcID = baseDcID || 2, options).then(performRequest, rejectPromise);
            });
        }

        return deferred.promise;
    }

    function mtpGetUserID() {
        return Storage.get('user_auth').then(function (auth) {
            telegramMeNotify(auth && auth.id > 0 || false);
            return auth.id || 0;
        });
    }

    function getBaseDcID() {
        return baseDcID || false;
    }

    return {
        getBaseDcID: getBaseDcID,
        getUserID: mtpGetUserID,
        invokeApi: mtpInvokeApi,
        getNetworker: mtpGetNetworker,
        setUserAuth: mtpSetUserAuth,
        logOut: mtpLogOut
    };
}

MtpApiManagerModule.dependencies = [
    'MtpSingleInstanceService', 
    'MtpNetworkerFactory', 
    'MtpAuthorizer', 
    'Storage', 
    'TelegramMeWebService', 
    'qSync', 
    '$q'
];

function MtpAuthorizerModule(MtpTimeManager, MtpDcConfigurator, MtpRsaKeysManager, CryptoWorker, MtpSecureRandom, $q, $timeout, $http) {
    var chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/),
        chromeVersion = chromeMatches && parseFloat(chromeMatches[1]) || false,
        xhrSendBuffer = !('ArrayBufferView' in window) && (!chromeVersion || chromeVersion < 30);

    function mtpSendPlainRequest(dcID, requestBuffer) {
        var requestLength = requestBuffer.byteLength,
            requestArray = new Int32Array(requestBuffer);

        var header = new TLSerialization();
        header.storeLongP(0, 0, 'auth_key_id'); // Auth key
        header.storeLong(MtpTimeManager.generateID(), 'msg_id'); // Msg_id
        header.storeInt(requestLength, 'request_length');

        var headerBuffer = header.getBuffer(),
            headerArray = new Int32Array(headerBuffer),
            headerLength = headerBuffer.byteLength;

        var resultBuffer = new ArrayBuffer(headerLength + requestLength),
            resultArray = new Int32Array(resultBuffer);

        resultArray.set(headerArray);
        resultArray.set(requestArray, headerArray.length);

        var requestData = xhrSendBuffer ? resultBuffer : resultArray,
            requestPromise;
        var url = MtpDcConfigurator.chooseServer(dcID);
        var baseError = {code: 406, type: 'NETWORK_BAD_RESPONSE', url: url};
        try {
            requestPromise = $http.post(url, requestData, {
                responseType: 'arraybuffer',
                transformRequest: null
            });
        } catch (e) {
            requestPromise = $q.reject(extend(baseError, {originalError: e}));
        }
        return requestPromise.then(
            function (result) {
                if (!result.data || !result.data.byteLength) {
                    return $q.reject(baseError);
                }

                try {
                    var deserializer = new TLDeserialization(result.data, {mtproto: true});
                    var auth_key_id = deserializer.fetchLong('auth_key_id');
                    var msg_id = deserializer.fetchLong('msg_id');
                    var msg_len = deserializer.fetchInt('msg_len');

                } catch (e) {
                    return $q.reject(extend(baseError, {originalError: e}));
                }

                return deserializer;
            },
            function (error) {
                if (!error.message && !error.type) {
                    error = extend(baseError, {originalError: error});
                }
                return $q.reject(error);
            }
        );
    }

    function mtpSendReqPQ(auth) {
        var deferred = auth.deferred;

        var request = new TLSerialization({mtproto: true});

        request.storeMethod('req_pq', {nonce: auth.nonce});

        console.log(dT(), 'Send req_pq', bytesToHex(auth.nonce));
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('ResPQ');

            if (response._ != 'resPQ') {
                throw new Error('resPQ response invalid: ' + response._);
            }

            if (!bytesCmp(auth.nonce, response.nonce)) {
                throw new Error('resPQ nonce mismatch');
            }

            auth.serverNonce = response.server_nonce;
            auth.pq = response.pq;
            auth.fingerprints = response.server_public_key_fingerprints;

            console.log(dT(), 'Got ResPQ', bytesToHex(auth.serverNonce), bytesToHex(auth.pq), auth.fingerprints);

            auth.publicKey = MtpRsaKeysManager.select(auth.fingerprints);

            if (!auth.publicKey) {
                throw new Error('No public key found');
            }

            console.log(dT(), 'PQ factorization start', auth.pq);
            CryptoWorker.factorize(auth.pq).then(function (pAndQ) {
                auth.p = pAndQ[0];
                auth.q = pAndQ[1];
                console.log(dT(), 'PQ factorization done', pAndQ[2]);
                mtpSendReqDhParams(auth);
            }, function (error) {
                console.log('Worker error', error, error.stack);
                deferred.reject(error);
            });
        }, function (error) {
            console.error(dT(), 'req_pq error', error.message);
            deferred.reject(error);
        });

        $timeout(function () {
            MtpRsaKeysManager.prepare();
        });
    }

    function mtpSendReqDhParams(auth) {
        var deferred = auth.deferred;

        auth.newNonce = new Array(32);
        MtpSecureRandom.nextBytes(auth.newNonce);

        var data = new TLSerialization({mtproto: true});
        data.storeObject({
            _: 'p_q_inner_data',
            pq: auth.pq,
            p: auth.p,
            q: auth.q,
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            new_nonce: auth.newNonce
        }, 'P_Q_inner_data', 'DECRYPTED_DATA');

        var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes());

        var request = new TLSerialization({mtproto: true});
        request.storeMethod('req_DH_params', {
            nonce: auth.nonce,
            server_nonce: auth.serverNonce,
            p: auth.p,
            q: auth.q,
            public_key_fingerprint: auth.publicKey.fingerprint,
            encrypted_data: rsaEncrypt(auth.publicKey, dataWithHash)
        });

        console.log(dT(), 'Send req_DH_params');
        mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
            var response = deserializer.fetchObject('Server_DH_Params', 'RESPONSE');

            if (response._ != 'server_DH_params_fail' && response._ != 'server_DH_params_ok') {
                deferred.reject(new Error('Server_DH_Params response invalid: ' + response._));
                return false;
            }

            if (!bytesCmp(auth.nonce, response.nonce)) {
                deferred.reject(new Error('Server_DH_Params nonce mismatch'));
                return false;
            }

            if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
                deferred.reject(new Error('Server_DH_Params server_nonce mismatch'));
                return false;
            }

            if (response._ == 'server_DH_params_fail') {
                var newNonceHash = sha1BytesSync(auth.newNonce).slice(-16);
                if (!bytesCmp(newNonceHash, response.new_nonce_hash)) {
                    deferred.reject(new Error('server_DH_params_fail new_nonce_hash mismatch'));
                    return false;
                }
                deferred.reject(new Error('server_DH_params_fail'));
                return false;
            }

            try {
                mtpDecryptServerDhDataAnswer(auth, response.encrypted_answer);
            } catch (e) {
                deferred.reject(e);
                return false;
            }

            mtpSendSetClientDhParams(auth);
        }, function (error) {
            deferred.reject(error);
        });
    }

    function mtpDecryptServerDhDataAnswer(auth, encryptedAnswer) {
        auth.localTime = tsNow();

        auth.tmpAesKey = sha1BytesSync(auth.newNonce.concat(auth.serverNonce)).concat(sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(0, 12));
        auth.tmpAesIv = sha1BytesSync(auth.serverNonce.concat(auth.newNonce)).slice(12).concat(sha1BytesSync([].concat(auth.newNonce, auth.newNonce)), auth.newNonce.slice(0, 4));

        var answerWithHash = aesDecryptSync(encryptedAnswer, auth.tmpAesKey, auth.tmpAesIv);

        var hash = answerWithHash.slice(0, 20);
        var answerWithPadding = answerWithHash.slice(20);
        var buffer = bytesToArrayBuffer(answerWithPadding);

        var deserializer = new TLDeserialization(buffer, {mtproto: true});
        var response = deserializer.fetchObject('Server_DH_inner_data');

        if (response._ != 'server_DH_inner_data') {
            throw new Error('server_DH_inner_data response invalid: ' + constructor);
        }

        if (!bytesCmp(auth.nonce, response.nonce)) {
            throw new Error('server_DH_inner_data nonce mismatch');
        }

        if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
            throw new Error('server_DH_inner_data serverNonce mismatch');
        }

        console.log(dT(), 'Done decrypting answer');
        auth.g = response.g;
        auth.dhPrime = response.dh_prime;
        auth.gA = response.g_a;
        auth.serverTime = response.server_time;
        auth.retry = 0;

        var offset = deserializer.getOffset();

        if (!bytesCmp(hash, sha1BytesSync(answerWithPadding.slice(0, offset)))) {
            throw new Error('server_DH_inner_data SHA1-hash mismatch');
        }

        MtpTimeManager.applyServerTime(auth.serverTime, auth.localTime);
    }

    function mtpSendSetClientDhParams(auth) {
        var deferred = auth.deferred,
            gBytes = bytesFromHex(auth.g.toString(16));

        auth.b = new Array(256);
        MtpSecureRandom.nextBytes(auth.b);

        CryptoWorker.modPow(gBytes, auth.b, auth.dhPrime).then(function (gB) {
            var data = new TLSerialization({mtproto: true});
            data.storeObject({
                _: 'client_DH_inner_data',
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                retry_id: [0, auth.retry++],
                g_b: gB,
            }, 'Client_DH_Inner_Data');

            var dataWithHash = sha1BytesSync(data.getBuffer()).concat(data.getBytes());

            var encryptedData = aesEncryptSync(dataWithHash, auth.tmpAesKey, auth.tmpAesIv);

            var request = new TLSerialization({mtproto: true});
            request.storeMethod('set_client_DH_params', {
                nonce: auth.nonce,
                server_nonce: auth.serverNonce,
                encrypted_data: encryptedData
            });

            console.log(dT(), 'Send set_client_DH_params');
            mtpSendPlainRequest(auth.dcID, request.getBuffer()).then(function (deserializer) {
                var response = deserializer.fetchObject('Set_client_DH_params_answer');

                if (response._ != 'dh_gen_ok' && response._ != 'dh_gen_retry' && response._ != 'dh_gen_fail') {
                    deferred.reject(new Error('Set_client_DH_params_answer response invalid: ' + response._));
                    return false;
                }

                if (!bytesCmp(auth.nonce, response.nonce)) {
                    deferred.reject(new Error('Set_client_DH_params_answer nonce mismatch'));
                    return false
                }

                if (!bytesCmp(auth.serverNonce, response.server_nonce)) {
                    deferred.reject(new Error('Set_client_DH_params_answer server_nonce mismatch'));
                    return false;
                }

                CryptoWorker.modPow(auth.gA, auth.b, auth.dhPrime).then(function (authKey) {
                    var authKeyHash = sha1BytesSync(authKey),
                        authKeyAux = authKeyHash.slice(0, 8),
                        authKeyID = authKeyHash.slice(-8);

                    console.log(dT(), 'Got Set_client_DH_params_answer', response._);
                    switch (response._) {
                        case 'dh_gen_ok':
                            var newNonceHash1 = sha1BytesSync(auth.newNonce.concat([1], authKeyAux)).slice(-16);

                            if (!bytesCmp(newNonceHash1, response.new_nonce_hash1)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash1 mismatch'));
                                return false;
                            }

                            var serverSalt = bytesXor(auth.newNonce.slice(0, 8), auth.serverNonce.slice(0, 8));
                            // console.log('Auth successfull!', authKeyID, authKey, serverSalt);

                            auth.authKeyID = authKeyID;
                            auth.authKey = authKey;
                            auth.serverSalt = serverSalt;

                            deferred.resolve(auth);
                            break;

                        case 'dh_gen_retry':
                            var newNonceHash2 = sha1BytesSync(auth.newNonce.concat([2], authKeyAux)).slice(-16);
                            if (!bytesCmp(newNonceHash2, response.new_nonce_hash2)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash2 mismatch'));
                                return false;
                            }

                            return mtpSendSetClientDhParams(auth);

                        case 'dh_gen_fail':
                            var newNonceHash3 = sha1BytesSync(auth.newNonce.concat([3], authKeyAux)).slice(-16);
                            if (!bytesCmp(newNonceHash3, response.new_nonce_hash3)) {
                                deferred.reject(new Error('Set_client_DH_params_answer new_nonce_hash3 mismatch'));
                                return false;
                            }

                            deferred.reject(new Error('Set_client_DH_params_answer fail'));
                            return false;
                    }
                }, function (error) {
                    deferred.reject(error);
                })
            }, function (error) {
                deferred.reject(error);
            });
        }, function (error) {
            deferred.reject(error);
        })
    }

    var cached = {};

    function mtpAuth(dcID) {
        if (cached[dcID] !== undefined) {
            return cached[dcID];
        }

        var nonce = [];
        for (var i = 0; i < 16; i++) {
            nonce.push(nextRandomInt(0xFF));
        }

        if (!MtpDcConfigurator.chooseServer(dcID)) {
            return $q.reject(new Error('No server found for dc ' + dcID));
        }

        var auth = {
            dcID: dcID,
            nonce: nonce,
            deferred: $q.defer()
        };

        $timeout(function () {
            mtpSendReqPQ(auth);
        });

        cached[dcID] = auth.deferred.promise;

        cached[dcID]['fail'](function () {
            delete cached[dcID];
        });

        return cached[dcID];
    }

    return {
        auth: mtpAuth
    };
}

MtpAuthorizerModule.dependencies = [
    'MtpTimeManager', 
    'MtpDcConfigurator', 
    'MtpRsaKeysManager', 
    'CryptoWorker', 
    'MtpSecureRandom', 
    '$q', 
    '$timeout', 
    '$http'
];

function MtpDcConfiguratorModule() {
    var chosenServers = {};

    function chooseServer(dcID, upload) {
        var dcOptions = Config.Modes.test ? Config.Server.Test : Config.Server.Production;

        if (chosenServers[dcID] === undefined) {
            var chosenServer = false,
                i, dcOption;

            for (i = 0; i < dcOptions.length; i++) {
                dcOption = dcOptions[i];
                if (dcOption.id == dcID) {
                    chosenServer = chooseProtocol() + '//' + dcOption.host + (dcOption.port != 80 ? ':' + dcOption.port : '') + '/apiw1';
                    break;
                }
            }
            chosenServers[dcID] = chosenServer;
        }

        return chosenServers[dcID];
    }

    function chooseProtocol() {
        if (location.protocol.indexOf('http') != -1) {
            return location.protocol;
        }

        return 'http:';
    }

    return {
        chooseServer: chooseServer
    };
}

MtpDcConfiguratorModule.dependencies = [];

function MtpNetworkerFactoryModule(MtpSecureRandom, MtpTimeManager, Storage, CryptoWorker, MtpDcConfigurator, $timeout, $interval, $q, $http) {
    var updatesProcessor,
        akStopped = false,
        chromeMatches = navigator.userAgent.match(/Chrome\/(\d+(\.\d+)?)/),
        chromeVersion = chromeMatches && parseFloat(chromeMatches[1]) || false,
        xhrSendBuffer = !('ArrayBufferView' in window) && (!chromeVersion || chromeVersion < 30);

    var subscriptions = {};

    function subscribe(id, handler) {
        if (typeof handler == 'function') {
            subscriptions[id] = handler;
        }
    }

    function unSubscribe(id) {
        delete subscriptions[id];
    }

    function MtpNetworker(dcID, authKey, serverSalt, options) {
        options = options || {};

        this.dcID = dcID;

        this.authKey = authKey;
        this.authKeyUint8 = convertToUint8Array(authKey);
        this.authKeyID = sha1BytesSync(authKey).slice(-8);

        this.serverSalt = serverSalt;

        this.upload = options.fileUpload || options.fileDownload || false;

        this.updateSession();

        this.checkConnectionPeriod = 0;

        this.sentMessages = {};
        this.serverMessages = [];

        this.pendingMessages = {};
        this.pendingAcks = [];
        this.pendingResends = [];
        this.connectionInited = false;

        $interval(this.checkLongPoll.bind(this), 10000);

        this.checkLongPoll();
    }

    MtpNetworker.prototype.updateSession = function () {
        this.seqNo = 0;
        this.sessionID = new Array(8);
        MtpSecureRandom.nextBytes(this.sessionID);
    };

    MtpNetworker.prototype.updateSentMessage = function (sentMessageID) {
        var sentMessage = this.sentMessages[sentMessageID];
        if (!sentMessage) {
            return false;
        }
        var self = this;
        if (sentMessage.container) {
            var newInner = [];
            forEach(sentMessage.inner, function (innerSentMessageID) {
                var innerSentMessage = self.updateSentMessage(innerSentMessageID);
                if (innerSentMessage) {
                    newInner.push(innerSentMessage.msg_id);
                }
            });
            sentMessage.inner = newInner;
        }

        sentMessage.msg_id = MtpTimeManager.generateID();
        sentMessage.seq_no = this.generateSeqNo(
            sentMessage.notContentRelated ||
            sentMessage.container
        );
        this.sentMessages[sentMessage.msg_id] = sentMessage;
        delete self.sentMessages[sentMessageID];

        return sentMessage;
    };

    MtpNetworker.prototype.generateSeqNo = function (notContentRelated) {
        var seqNo = this.seqNo * 2;

        if (!notContentRelated) {
            seqNo++;
            this.seqNo++;
        }

        return seqNo;
    };

    MtpNetworker.prototype.wrapMtpCall = function (method, params, options) {
        var serializer = new TLSerialization({mtproto: true});

        serializer.storeMethod(method, params);

        var messageID = MtpTimeManager.generateID(),
            seqNo = this.generateSeqNo(),
            message = {
                msg_id: messageID,
                seq_no: seqNo,
                body: serializer.getBytes()
            };

        if (Config.Modes.debug) {
            console.log(dT(), 'MT call', method, params, messageID, seqNo);
        }

        return this.pushMessage(message, options);
    };

    MtpNetworker.prototype.wrapMtpMessage = function (object, options) {
        options = options || {};

        var serializer = new TLSerialization({mtproto: true});
        serializer.storeObject(object, 'Object');

        var messageID = MtpTimeManager.generateID(),
            seqNo = this.generateSeqNo(options.notContentRelated),
            message = {
                msg_id: messageID,
                seq_no: seqNo,
                body: serializer.getBytes()
            };

        if (Config.Modes.debug) {
            console.log(dT(), 'MT message', object, messageID, seqNo);
        }

        return this.pushMessage(message, options);
    };

    MtpNetworker.prototype.wrapApiCall = function (method, params, options) {
        var serializer = new TLSerialization(options);

        if (!this.connectionInited) {
            serializer.storeInt(0xda9b0d0d, 'invokeWithLayer');
            serializer.storeInt(Config.Schema.API.layer, 'layer');
            serializer.storeInt(0x69796de9, 'initConnection');
            serializer.storeInt(Config.App.id, 'api_id');
            serializer.storeString(navigator.userAgent || 'Unknown UserAgent', 'device_model');
            serializer.storeString(navigator.platform || 'Unknown Platform', 'system_version');
            serializer.storeString(Config.App.version, 'app_version');
            serializer.storeString(navigator.language || 'en', 'lang_code');
        }

        if (options.afterMessageID) {
            serializer.storeInt(0xcb9f372d, 'invokeAfterMsg');
            serializer.storeLong(options.afterMessageID, 'msg_id');
        }

        options.resultType = serializer.storeMethod(method, params);

        var messageID = MtpTimeManager.generateID(),
            seqNo = this.generateSeqNo(),
            message = {
                msg_id: messageID,
                seq_no: seqNo,
                body: serializer.getBytes(true),
                isAPI: true
            };

        if (Config.Modes.debug) {
            console.log(dT(), 'Api call', method, params, messageID, seqNo, options);
        } else {
            console.log(dT(), 'Api call', method);
        }

        return this.pushMessage(message, options);
    };

    MtpNetworker.prototype.checkLongPoll = function (force) {
        var isClean = this.cleanupSent();
        // console.log('Check lp', this.longPollPending, tsNow(), this.dcID, isClean);
        if (this.longPollPending && tsNow() < this.longPollPending ||
            this.offline ||
            akStopped) {
            return false;
        }
        var self = this;
        Storage.get('dc').then(function (baseDcID) {
            if (isClean && (
                    baseDcID != self.dcID ||
                    self.upload ||
                    self.sleepAfter && tsNow() > self.sleepAfter
                )) {
                // console.warn(dT(), 'Send long-poll for DC is delayed', self.dcID, self.sleepAfter);
                return;
            }
            self.sendLongPoll();
        });
    };

    MtpNetworker.prototype.sendLongPoll = function () {
        var maxWait = 25000,
            self = this;

        this.longPollPending = tsNow() + maxWait;
        // console.log('Set lp', this.longPollPending, tsNow());

        this.wrapMtpCall('http_wait', {
            max_delay: 500,
            wait_after: 150,
            max_wait: maxWait
        }, {
            noResponse: true,
            longPoll: true
        }).then(function () {
            delete self.longPollPending;
            setZeroTimeout(self.checkLongPoll.bind(self));
        }, function () {
            console.log('Long-poll failed');
        });

    };

    MtpNetworker.prototype.pushMessage = function (message, options) {
        var deferred = $q.defer();

        this.sentMessages[message.msg_id] = extend(message, options || {}, {deferred: deferred});
        this.pendingMessages[message.msg_id] = 0;

        if (!options || !options.noShedule) {
            this.sheduleRequest();
        }
        if (isObject(options)) {
            options.messageID = message.msg_id;
        }

        return deferred.promise;
    };

    MtpNetworker.prototype.pushResend = function (messageID, delay) {
        var value = delay ? tsNow() + delay : 0;
        var sentMessage = this.sentMessages[messageID];
        if (sentMessage.container) {
            for (var i = 0; i < sentMessage.inner.length; i++) {
                this.pendingMessages[sentMessage.inner[i]] = value;
            }
        } else {
            this.pendingMessages[messageID] = value;
        }

        // console.log('Resend due', messageID, this.pendingMessages);

        this.sheduleRequest(delay);
    };

    MtpNetworker.prototype.getMsgKeyIv = function (msgKey, isOut) {
        var authKey = this.authKeyUint8,
            x = isOut ? 0 : 8,
            sha1aText = new Uint8Array(48),
            sha1bText = new Uint8Array(48),
            sha1cText = new Uint8Array(48),
            sha1dText = new Uint8Array(48),
            promises = {};

        sha1aText.set(msgKey, 0);
        sha1aText.set(authKey.subarray(x, x + 32), 16);
        promises.sha1a = CryptoWorker.sha1Hash(sha1aText);

        sha1bText.set(authKey.subarray(x + 32, x + 48), 0);
        sha1bText.set(msgKey, 16);
        sha1bText.set(authKey.subarray(x + 48, x + 64), 32);
        promises.sha1b = CryptoWorker.sha1Hash(sha1bText);

        sha1cText.set(authKey.subarray(x + 64, x + 96), 0);
        sha1cText.set(msgKey, 32);
        promises.sha1c = CryptoWorker.sha1Hash(sha1cText);

        sha1dText.set(msgKey, 0);
        sha1dText.set(authKey.subarray(x + 96, x + 128), 16);
        promises.sha1d = CryptoWorker.sha1Hash(sha1dText);

        return $q.all(promises).then(function (result) {
            var aesKey = new Uint8Array(32),
                aesIv = new Uint8Array(32),
                sha1a = new Uint8Array(result.sha1a),
                sha1b = new Uint8Array(result.sha1b),
                sha1c = new Uint8Array(result.sha1c),
                sha1d = new Uint8Array(result.sha1d);

            aesKey.set(sha1a.subarray(0, 8));
            aesKey.set(sha1b.subarray(8, 20), 8);
            aesKey.set(sha1c.subarray(4, 16), 20);

            aesIv.set(sha1a.subarray(8, 20));
            aesIv.set(sha1b.subarray(0, 8), 12);
            aesIv.set(sha1c.subarray(16, 20), 20);
            aesIv.set(sha1d.subarray(0, 8), 24);

            return [aesKey, aesIv];
        });
    };

    MtpNetworker.prototype.checkConnection = function (event) {
        console.log(dT(), 'Check connection', event);
        $timeout.cancel(this.checkConnectionPromise);

        var serializer = new TLSerialization({mtproto: true}),
            pingID = [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)];

        serializer.storeMethod('ping', {ping_id: pingID});

        var pingMessage = {
            msg_id: MtpTimeManager.generateID(),
            seq_no: this.generateSeqNo(true),
            body: serializer.getBytes()
        };

        var self = this;
        this.sendEncryptedRequest(pingMessage, {timeout: 15000}).then(function (result) {
            self.toggleOffline(false);
        }, function () {
            console.log(dT(), 'Delay ', self.checkConnectionPeriod * 1000);
            self.checkConnectionPromise = $timeout(self.checkConnection.bind(self), parseInt(self.checkConnectionPeriod * 1000));
            self.checkConnectionPeriod = Math.min(60, self.checkConnectionPeriod * 1.5);
        })
    };

    MtpNetworker.prototype.toggleOffline = function (enabled) {
        // console.log('toggle ', enabled, this.dcID, this.iii);
        if (this.offline !== undefined && this.offline == enabled) {
            return false;
        }

        this.offline = enabled;

        if (this.offline) {
            $timeout.cancel(this.nextReqPromise);
            delete this.nextReq;

            if (this.checkConnectionPeriod < 1.5) {
                this.checkConnectionPeriod = 0;
            }

            this.checkConnectionPromise = $timeout(this.checkConnection.bind(this), parseInt(this.checkConnectionPeriod * 1000));
            this.checkConnectionPeriod = Math.min(30, (1 + this.checkConnectionPeriod) * 1.5);

            this.onOnlineCb = this.checkConnection.bind(this);

            $(document.body).on('online focus', this.onOnlineCb);
        } else {
            delete this.longPollPending;
            this.checkLongPoll();
            this.sheduleRequest();

            if (this.onOnlineCb) {
                $(document.body).off('online focus', this.onOnlineCb);
            }
            $timeout.cancel(this.checkConnectionPromise);
        }

    };

    MtpNetworker.prototype.performSheduledRequest = function () {
        // console.log(dT(), 'sheduled', this.dcID, this.iii);
        if (this.offline || akStopped) {
            console.log(dT(), 'Cancel sheduled');
            return false;
        }
        delete this.nextReq;
        if (this.pendingAcks.length) {
            var ackMsgIDs = [];
            for (var i = 0; i < this.pendingAcks.length; i++) {
                ackMsgIDs.push(this.pendingAcks[i]);
            }
            // console.log('acking messages', ackMsgIDs);
            this.wrapMtpMessage({_: 'msgs_ack', msg_ids: ackMsgIDs}, {notContentRelated: true, noShedule: true});
        }

        if (this.pendingResends.length) {
            var resendMsgIDs = [],
                resendOpts = {noShedule: true, notContentRelated: true};
            for (var i = 0; i < this.pendingResends.length; i++) {
                resendMsgIDs.push(this.pendingResends[i]);
            }
            // console.log('resendReq messages', resendMsgIDs);
            this.wrapMtpMessage({_: 'msg_resend_req', msg_ids: resendMsgIDs}, resendOpts);
            this.lastResendReq = {req_msg_id: resendOpts.messageID, resend_msg_ids: resendMsgIDs};
        }

        var messages = [],
            message,
            messagesByteLen = 0,
            currentTime = tsNow(),
            hasApiCall = false,
            hasHttpWait = false,
            lengthOverflow = false,
            singlesCount = 0,
            self = this;

        forEach(this.pendingMessages, function (value, messageID) {
            if (!value || value >= currentTime) {
                if (message = self.sentMessages[messageID]) {
                    var messageByteLength = (message.body.byteLength || message.body.length) + 32;
                    if (!message.notContentRelated &&
                        lengthOverflow) {
                        return;
                    }
                    if (!message.notContentRelated &&
                        messagesByteLen &&
                        messagesByteLen + messageByteLength > 655360) { // 640 Kb
                        lengthOverflow = true;
                        return;
                    }
                    if (message.singleInRequest) {
                        singlesCount++;
                        if (singlesCount > 1) {
                            return;
                        }
                    }
                    messages.push(message);
                    messagesByteLen += messageByteLength;
                    if (message.isAPI) {
                        hasApiCall = true;
                    }
                    else if (message.longPoll) {
                        hasHttpWait = true;
                    }
                } else {
                    // console.log(message, messageID);
                }
                delete self.pendingMessages[messageID];
            }
        });

        if (hasApiCall && !hasHttpWait) {
            var serializer = new TLSerialization({mtproto: true});
            serializer.storeMethod('http_wait', {
                max_delay: 500,
                wait_after: 150,
                max_wait: 3000
            });
            messages.push({
                msg_id: MtpTimeManager.generateID(),
                seq_no: this.generateSeqNo(),
                body: serializer.getBytes()
            });
        }

        if (!messages.length) {
            // console.log('no sheduled messages');
            return;
        }

        var noResponseMsgs = [];

        if (messages.length > 1) {
            var container = new TLSerialization({mtproto: true, startMaxLength: messagesByteLen + 64});
            container.storeInt(0x73f1f8dc, 'CONTAINER[id]');
            container.storeInt(messages.length, 'CONTAINER[count]');
            var onloads = [];
            var innerMessages = [];
            for (var i = 0; i < messages.length; i++) {
                container.storeLong(messages[i].msg_id, 'CONTAINER[' + i + '][msg_id]');
                innerMessages.push(messages[i].msg_id);
                container.storeInt(messages[i].seq_no, 'CONTAINER[' + i + '][seq_no]');
                container.storeInt(messages[i].body.length, 'CONTAINER[' + i + '][bytes]');
                container.storeRawBytes(messages[i].body, 'CONTAINER[' + i + '][body]');
                if (messages[i].noResponse) {
                    noResponseMsgs.push(messages[i].msg_id);
                }
            }

            var containerSentMessage = {
                msg_id: MtpTimeManager.generateID(),
                seq_no: this.generateSeqNo(true),
                container: true,
                inner: innerMessages
            };

            message = extend({body: container.getBytes(true)}, containerSentMessage);

            this.sentMessages[message.msg_id] = containerSentMessage;

            if (Config.Modes.debug) {
                console.log(dT(), 'Container', innerMessages, message.msg_id, message.seq_no);
            }
        } else {
            if (message.noResponse) {
                noResponseMsgs.push(message.msg_id);
            }
            this.sentMessages[message.msg_id] = message;
        }

        this.pendingAcks = [];

        var self = this;
        this.sendEncryptedRequest(message).then(function (result) {
            self.toggleOffline(false);
            // console.log('parse for', message);
            self.parseResponse(result.data).then(function (response) {
                if (Config.Modes.debug) {
                    console.log(dT(), 'Server response', self.dcID, response);
                }

                self.processMessage(response.response, response.messageID, response.sessionID);

                for (var k in subscriptions) {
                    subscriptions[k](response.response);
                }

                forEach(noResponseMsgs, function (msgID) {
                    if (self.sentMessages[msgID]) {
                        var deferred = self.sentMessages[msgID].deferred;
                        delete self.sentMessages[msgID];
                        deferred.resolve();
                    }
                });

                self.checkLongPoll();

                this.checkConnectionPeriod = Math.max(1.1, Math.sqrt(this.checkConnectionPeriod));

            });
        }, function (error) {
            console.log('Encrypted request failed', error);

            if (message.container) {
                forEach(message.inner, function (msgID) {
                    self.pendingMessages[msgID] = 0;
                });
                delete self.sentMessages[message.msg_id];
            } else {
                self.pendingMessages[message.msg_id] = 0;
            }

            forEach(noResponseMsgs, function (msgID) {
                if (self.sentMessages[msgID]) {
                    var deferred = self.sentMessages[msgID].deferred;
                    delete self.sentMessages[msgID];
                    delete self.pendingMessages[msgID];
                    deferred.reject();
                }
            });

            self.toggleOffline(true);
        });

        if (lengthOverflow || singlesCount > 1) {
            this.sheduleRequest()
        }
    };

    MtpNetworker.prototype.getEncryptedMessage = function (bytes) {
        var self = this;

        // console.log(dT(), 'Start encrypt', bytes.byteLength);
        return CryptoWorker.sha1Hash(bytes).then(function (bytesHash) {
            // console.log(dT(), 'after hash');
            var msgKey = new Uint8Array(bytesHash).subarray(4, 20);
            return self.getMsgKeyIv(msgKey, true).then(function (keyIv) {
                // console.log(dT(), 'after msg key iv');
                return CryptoWorker.aesEncrypt(bytes, keyIv[0], keyIv[1]).then(function (encryptedBytes) {
                    // console.log(dT(), 'Finish encrypt');
                    return {
                        bytes: encryptedBytes,
                        msgKey: msgKey
                    };
                })
            })
        })
    };

    MtpNetworker.prototype.getDecryptedMessage = function (msgKey, encryptedData) {
        // console.log(dT(), 'get decrypted start');
        return this.getMsgKeyIv(msgKey, false).then(function (keyIv) {
            // console.log(dT(), 'after msg key iv');
            return CryptoWorker.aesDecrypt(encryptedData, keyIv[0], keyIv[1]);
        });
    };

    MtpNetworker.prototype.sendEncryptedRequest = function (message, options) {
        var self = this;
        options = options || {};
        // console.log(dT(), 'Send encrypted'/*, message*/);
        // console.trace();
        var data = new TLSerialization({startMaxLength: message.body.length + 64});

        data.storeIntBytes(this.serverSalt, 64, 'salt');
        data.storeIntBytes(this.sessionID, 64, 'session_id');

        data.storeLong(message.msg_id, 'message_id');
        data.storeInt(message.seq_no, 'seq_no');

        data.storeInt(message.body.length, 'message_data_length');
        data.storeRawBytes(message.body, 'message_data');

        return this.getEncryptedMessage(data.getBuffer()).then(function (encryptedResult) {
            // console.log(dT(), 'Got encrypted out message'/*, encryptedResult*/);
            var request = new TLSerialization({startMaxLength: encryptedResult.bytes.byteLength + 256});
            request.storeIntBytes(self.authKeyID, 64, 'auth_key_id');
            request.storeIntBytes(encryptedResult.msgKey, 128, 'msg_key');
            request.storeRawBytes(encryptedResult.bytes, 'encrypted_data');

            var requestData = xhrSendBuffer ? request.getBuffer() : request.getArray();

            var requestPromise;
            var url = MtpDcConfigurator.chooseServer(self.dcID, self.upload);
            var baseError = {code: 406, type: 'NETWORK_BAD_RESPONSE', url: url};

            try {
                options = extend(options || {}, {
                    responseType: 'arraybuffer',
                    transformRequest: null
                });
                requestPromise = $http.post(url, requestData, options);
            } catch (e) {
                requestPromise = $q.reject(e);
            }
            return requestPromise.then(
                function (result) {
                    if (!result.data || !result.data.byteLength) {
                        return $q.reject(baseError);
                    }
                    return result;
                },
                function (error) {
                    if (error.status == 404 &&
                        (error.data || '').indexOf('nginx/0.3.33') != -1) {
                        Storage.remove(
                            'dc' + self.dcID + '_server_salt',
                            'dc' + self.dcID + '_auth_key'
                        ).then(function () {
                            window.location.reload();
                        });
                    }
                    if (!error.message && !error.type) {
                        error = extend(baseError, {type: 'NETWORK_BAD_REQUEST', originalError: error});
                    }
                    return $q.reject(error);
                }
            );
        });
    };

    MtpNetworker.prototype.parseResponse = function (responseBuffer) {
        // console.log(dT(), 'Start parsing response');
        var self = this;

        var deserializer = new TLDeserialization(responseBuffer);

        var authKeyID = deserializer.fetchIntBytes(64, false, 'auth_key_id');
        if (!bytesCmp(authKeyID, this.authKeyID)) {
            throw new Error('Invalid server auth_key_id: ' + bytesToHex(authKeyID));
        }
        var msgKey = deserializer.fetchIntBytes(128, true, 'msg_key'),
            encryptedData = deserializer.fetchRawBytes(responseBuffer.byteLength - deserializer.getOffset(), true, 'encrypted_data');

        return this.getDecryptedMessage(msgKey, encryptedData).then(function (dataWithPadding) {
            // console.log(dT(), 'after decrypt');
            var deserializer = new TLDeserialization(dataWithPadding, {mtproto: true});

            var salt = deserializer.fetchIntBytes(64, false, 'salt');
            var sessionID = deserializer.fetchIntBytes(64, false, 'session_id');
            var messageID = deserializer.fetchLong('message_id');

            var seqNo = deserializer.fetchInt('seq_no');

            var messageBody = deserializer.fetchRawBytes(false, true, 'message_data');

            // console.log(dT(), 'before hash');
            var hashData = convertToUint8Array(dataWithPadding).subarray(0, deserializer.getOffset());

            return CryptoWorker.sha1Hash(hashData).then(function (dataHash) {
                if (!bytesCmp(msgKey, bytesFromArrayBuffer(dataHash).slice(-16))) {
                    console.warn(msgKey, bytesFromArrayBuffer(dataHash));
                    throw new Error('server msgKey mismatch');
                }

                var buffer = bytesToArrayBuffer(messageBody);
                var deserializerOptions = {
                    mtproto: true,
                    override: {
                        mt_message: function (result, field) {
                            result.msg_id = this.fetchLong(field + '[msg_id]');
                            result.seqno = this.fetchInt(field + '[seqno]');
                            result.bytes = this.fetchInt(field + '[bytes]');

                            var offset = this.getOffset();

                            try {
                                result.body = this.fetchObject('Object', field + '[body]');
                            } catch (e) {
                                console.error(dT(), 'parse error', e.message, e.stack);
                                result.body = {_: 'parse_error', error: e};
                            }
                            if (this.offset != offset + result.bytes) {
                                // console.warn(dT(), 'set offset', this.offset, offset, result.bytes);
                                // console.log(dT(), result);
                                this.offset = offset + result.bytes;
                            }
                            // console.log(dT(), 'override message', result);
                        },
                        mt_rpc_result: function (result, field) {
                            result.req_msg_id = this.fetchLong(field + '[req_msg_id]');

                            var sentMessage = self.sentMessages[result.req_msg_id],
                                type = sentMessage && sentMessage.resultType || 'Object';

                            if (result.req_msg_id && !sentMessage) {
                                // console.warn(dT(), 'Result for unknown message', result);
                                return;
                            }
                            result.result = this.fetchObject(type, field + '[result]');
                            // console.log(dT(), 'override rpc_result', sentMessage, type, result);
                        }
                    }
                };
                var deserializer = new TLDeserialization(buffer, deserializerOptions);
                var response = deserializer.fetchObject('', 'INPUT');

                return {
                    response: response,
                    messageID: messageID,
                    sessionID: sessionID,
                    seqNo: seqNo
                };
            });
        });
    };

    MtpNetworker.prototype.applyServerSalt = function (newServerSalt) {
        var serverSalt = longToBytes(newServerSalt);

        var storeObj = {};
        storeObj['dc' + this.dcID + '_server_salt'] = bytesToHex(serverSalt);
        Storage.set(storeObj);

        this.serverSalt = serverSalt;
        return true;
    };

    MtpNetworker.prototype.sheduleRequest = function (delay) {
        if (this.offline) {
            this.checkConnection('forced shedule');
        }
        var nextReq = tsNow() + delay;

        if (delay && this.nextReq && this.nextReq <= nextReq) {
            return false;
        }

        // console.log(dT(), 'shedule req', delay);
        // console.trace();

        $timeout.cancel(this.nextReqPromise);
        if (delay > 0) {
            this.nextReqPromise = $timeout(this.performSheduledRequest.bind(this), delay || 0);
        } else {
            setZeroTimeout(this.performSheduledRequest.bind(this))
        }

        this.nextReq = nextReq;
    };

    MtpNetworker.prototype.ackMessage = function (msgID) {
        // console.log('ack message', msgID);
        this.pendingAcks.push(msgID);
        this.sheduleRequest(30000);
    };

    MtpNetworker.prototype.reqResendMessage = function (msgID) {
        console.log(dT(), 'Req resend', msgID);
        this.pendingResends.push(msgID);
        this.sheduleRequest(100);
    };

    MtpNetworker.prototype.cleanupSent = function () {
        var self = this;
        var notEmpty = false;
        // console.log('clean start', this.dcID/*, this.sentMessages*/);
        forEach(this.sentMessages, function (message, msgID) {
            // console.log('clean iter', msgID, message);
            if (message.notContentRelated && self.pendingMessages[msgID] === undefined) {
                // console.log('clean notContentRelated', msgID);
                delete self.sentMessages[msgID];
            }
            else if (message.container) {
                for (var i = 0; i < message.inner.length; i++) {
                    if (self.sentMessages[message.inner[i]] !== undefined) {
                        // console.log('clean failed, found', msgID, message.inner[i], self.sentMessages[message.inner[i]].seq_no);
                        notEmpty = true;
                        return;
                    }
                }
                // console.log('clean container', msgID);
                delete self.sentMessages[msgID];
            } else {
                notEmpty = true;
            }
        });

        return !notEmpty;
    };


    MtpNetworker.prototype.processMessageAck = function (messageID) {
        var sentMessage = this.sentMessages[messageID];
        if (sentMessage && !sentMessage.acked) {
            delete sentMessage.body;
            sentMessage.acked = true;

            return true;
        }

        return false;
    };

    MtpNetworker.prototype.processError = function (rawError) {
        var matches = (rawError.error_message || '').match(/^([A-Z_0-9]+\b)(: (.+))?/) || [];
        rawError.error_code = uintToInt(rawError.error_code);

        return {
            code: !rawError.error_code || rawError.error_code <= 0 ? 500 : rawError.error_code,
            type: matches[1] || 'UNKNOWN',
            description: matches[3] || ('CODE#' + rawError.error_code + ' ' + rawError.error_message),
            originalError: rawError
        };
    };


    MtpNetworker.prototype.processMessage = function (message, messageID, sessionID) {
        // console.log('process message', message, messageID, sessionID);
        switch (message._) {
            case 'msg_container':
                var len = message.messages.length;
                for (var i = 0; i < len; i++) {
                    this.processMessage(message.messages[i], messageID, sessionID);
                }
                break;

            case 'bad_server_salt':
                console.log(dT(), 'Bad server salt', message);
                var sentMessage = this.sentMessages[message.bad_msg_id];
                if (!sentMessage || sentMessage.seq_no != message.bad_msg_seqno) {
                    console.log(message.bad_msg_id, message.bad_msg_seqno);
                    throw new Error('Bad server salt for invalid message');
                }

                this.applyServerSalt(message.new_server_salt);
                this.pushResend(message.bad_msg_id);
                this.ackMessage(messageID);
                break;

            case 'bad_msg_notification':
                console.log(dT(), 'Bad msg notification', message);
                var sentMessage = this.sentMessages[message.bad_msg_id];
                if (!sentMessage || sentMessage.seq_no != message.bad_msg_seqno) {
                    console.log(message.bad_msg_id, message.bad_msg_seqno);
                    throw new Error('Bad msg notification for invalid message');
                }

                if (message.error_code == 16 || message.error_code == 17) {
                    if (MtpTimeManager.applyServerTime(
                            bigStringInt(messageID).shiftRight(32).toString(10)
                        )) {
                        console.log(dT(), 'Update session');
                        this.updateSession();
                    }
                    var badMessage = this.updateSentMessage(message.bad_msg_id);
                    this.pushResend(badMessage.msg_id);
                    this.ackMessage(messageID);
                }
                break;

            case 'message':
                this.serverMessages.push(message.msg_id);
                this.processMessage(message.body, message.msg_id, sessionID);
                break;

            case 'new_session_created':
                this.ackMessage(messageID);

                this.processMessageAck(message.first_msg_id);
                this.applyServerSalt(message.server_salt);

                var self = this;
                Storage.get('dc').then(function (baseDcID) {
                    if (baseDcID == self.dcID && !self.upload && updatesProcessor) {
                        updatesProcessor(message);
                    }
                });
                break;

            case 'msgs_ack':
                for (var i = 0; i < message.msg_ids.length; i++) {
                    this.processMessageAck(message.msg_ids[i]);
                }
                break;

            case 'msg_detailed_info':
                if (!this.sentMessages[message.msg_id]) {
                    this.ackMessage(message.answer_msg_id);
                    break;
                }
            case 'msg_new_detailed_info':
                // this.ackMessage(message.answer_msg_id);
                this.reqResendMessage(message.answer_msg_id);
                break;

            case 'msgs_state_info':
                this.ackMessage(message.answer_msg_id);
                if (this.lastResendReq && this.lastResendReq.req_msg_id == message.req_msg_id && this.pendingResends.length) {
                    var i, badMsgID, pos;
                    for (i = 0; i < this.lastResendReq.resend_msg_ids.length; i++) {
                        badMsgID = this.lastResendReq.resend_msg_ids[i];
                        pos = this.pendingResends.indexOf(badMsgID);
                        if (pos != -1) {
                            this.pendingResends.splice(pos, 1);
                        }
                    }
                }
                break;

            case 'rpc_result':
                this.ackMessage(messageID);

                var sentMessageID = message.req_msg_id,
                    sentMessage = this.sentMessages[sentMessageID];

                this.processMessageAck(sentMessageID);
                if (sentMessage) {
                    var deferred = sentMessage.deferred;
                    if (message.result._ == 'rpc_error') {
                        var error = this.processError(message.result);
                        console.log(dT(), 'Rpc error', error)
                        if (deferred) {
                            deferred.reject(error)
                        }
                    } else {
                        if (deferred) {
                            if (Config.Modes.debug) {
                                console.log(dT(), 'Rpc response', message.result);
                            } else {
                                var dRes = message.result._;
                                if (!dRes) {
                                    if (message.result.length > 5) {
                                        dRes = '[..' + message.result.length + '..]';
                                    } else {
                                        dRes = message.result;
                                    }
                                }
                                console.log(dT(), 'Rpc response', dRes);
                            }
                            sentMessage.deferred.resolve(message.result);
                        }
                        if (sentMessage.isAPI) {
                            this.connectionInited = true;
                        }
                    }

                    delete this.sentMessages[sentMessageID];
                }
                break;

            default:
                this.ackMessage(messageID);

                // console.log('Update', message);
                if (updatesProcessor) {
                    updatesProcessor(message);
                }
                break;

        }
    };

    function startAll() {
        if (akStopped) {
            akStopped = false;
            updatesProcessor({_: 'new_session_created'});
        }
    }

    function stopAll() {
        akStopped = true;
    }

    return {
        getNetworker: function (dcID, authKey, serverSalt, options) {
            return new MtpNetworker(dcID, authKey, serverSalt, options);
        },
        setUpdatesProcessor: function (callback) {
            updatesProcessor = callback;
        },
        stopAll: stopAll,
        startAll: startAll,

        subscribe: subscribe,
        unSubscribe: unSubscribe
    };
}

MtpNetworkerFactoryModule.dependencies = [
    'MtpSecureRandom',
    'MtpTimeManager',
    'Storage',
    'CryptoWorker',
    'MtpDcConfigurator',
    '$timeout',
    '$interval',
    '$q',
    '$http'
];

function MtpRsaKeysManagerModule() {
    /**
     *  Server public key, obtained from here: https://core.telegram.org/api/obtaining_api_id
     *
     * -----BEGIN RSA PUBLIC KEY-----
     * MIIBCgKCAQEAwVACPi9w23mF3tBkdZz+zwrzKOaaQdr01vAbU4E1pvkfj4sqDsm6
     * lyDONS789sVoD/xCS9Y0hkkC3gtL1tSfTlgCMOOul9lcixlEKzwKENj1Yz/s7daS
     * an9tqw3bfUV/nqgbhGX81v/+7RFAEd+RwFnK7a+XYl9sluzHRyVVaTTveB2GazTw
     * Efzk2DWgkBluml8OREmvfraX3bkHZJTKX4EQSjBbbdJ2ZXIsRrYOXfaA+xayEGB+
     * 8hdlLmAjbCVfaigxX0CDqWeR1yFL9kwd9P0NsZRPsmoqVwMbMu7mStFai6aIhc3n
     * Slv8kg9qv1m6XHVQY3PnEw+QQtqSIXklHwIDAQAB
     * -----END RSA PUBLIC KEY-----
     */

    var publisKeysHex = [{
        modulus: 'c150023e2f70db7985ded064759cfecf0af328e69a41daf4d6f01b538135a6f91f8f8b2a0ec9ba9720ce352efcf6c5680ffc424bd634864902de0b4bd6d49f4e580230e3ae97d95c8b19442b3c0a10d8f5633fecedd6926a7f6dab0ddb7d457f9ea81b8465fcd6fffeed114011df91c059caedaf97625f6c96ecc74725556934ef781d866b34f011fce4d835a090196e9a5f0e4449af7eb697ddb9076494ca5f81104a305b6dd27665722c46b60e5df680fb16b210607ef217652e60236c255f6a28315f4083a96791d7214bf64c1df4fd0db1944fb26a2a57031b32eee64ad15a8ba68885cde74a5bfc920f6abf59ba5c75506373e7130f9042da922179251f',
        exponent: '010001'
    }];

    var publicKeysParsed = {};
    var prepared = false;

    function prepareRsaKeys() {
        if (prepared) {
            return;
        }

        for (var i = 0; i < publisKeysHex.length; i++) {
            var keyParsed = publisKeysHex[i];

            var RSAPublicKey = new TLSerialization();
            RSAPublicKey.storeBytes(bytesFromHex(keyParsed.modulus), 'n');
            RSAPublicKey.storeBytes(bytesFromHex(keyParsed.exponent), 'e');

            var buffer = RSAPublicKey.getBuffer();

            var fingerprintBytes = sha1BytesSync(buffer).slice(-8);
            fingerprintBytes.reverse();

            publicKeysParsed[bytesToHex(fingerprintBytes)] = {
                modulus: keyParsed.modulus,
                exponent: keyParsed.exponent
            };
        }

        prepared = true;
    }

    function selectRsaKeyByFingerPrint(fingerprints) {
        prepareRsaKeys();

        var fingerprintHex, foundKey, i;
        for (i = 0; i < fingerprints.length; i++) {
            fingerprintHex = bigStringInt(fingerprints[i]).toString(16);
            if (foundKey = publicKeysParsed[fingerprintHex]) {
                return extend({fingerprint: fingerprints[i]}, foundKey);
            }
        }

        return false;
    }

    return {
        prepare: prepareRsaKeys,
        select: selectRsaKeyByFingerPrint
    };
}

MtpRsaKeysManagerModule.dependencies = [];

function MtpSecureRandomModule($) {
    $(window).on('click keydown', rng_seed_time);
    return new SecureRandom();
}

MtpSecureRandomModule.dependencies = [
    'jQuery'
];

function MtpSingleInstanceServiceModule(IdleManager, Storage, MtpNetworkerFactory, $interval, $rootScope, $timeout, $) {
    var instanceID = nextRandomInt(0xFFFFFFFF);
    var started = false;
    var masterInstance = false;
    var deactivatePromise = false;
    var deactivated = false;

    function start() {
        if (!started && !Config.Navigator.mobile) {
            started = true;

            IdleManager.start();

            $interval(checkInstance, 5000);
            checkInstance();

            try {
                $(window).on('beforeunload', clearInstance);
            } catch (e) {
            }
        }
    }

    function clearInstance() {
        Storage.remove(masterInstance ? 'xt_instance' : 'xt_idle_instance');
    }

    function deactivateInstance() {
        if (masterInstance || deactivated) {
            return false;
        }
        console.log(dT(), 'deactivate');
        deactivatePromise = false;
        deactivated = true;
        clearInstance();

        $rootScope.idle.deactivated = true;
    }

    function checkInstance() {
        if (deactivated) {
            return false;
        }
        var time = tsNow();
        var idle = $rootScope.idle && $rootScope.idle.isIDLE;
        var newInstance = {id: instanceID, idle: idle, time: time};

        Storage.get('xt_instance', 'xt_idle_instance').then(function (result) {
            var curInstance = result[0],
                idleInstance = result[1];

            // console.log(dT(), 'check instance', newInstance, curInstance, idleInstance);
            if (!idle || !curInstance ||
                curInstance.id == instanceID ||
                curInstance.time < time - 60000) {

                if (idleInstance &&
                    idleInstance.id == instanceID) {
                    Storage.remove('xt_idle_instance');
                }
                Storage.set({xt_instance: newInstance});
                if (!masterInstance) {
                    MtpNetworkerFactory.startAll();
                    console.warn(dT(), 'now master instance', newInstance);
                }
                masterInstance = true;
                if (deactivatePromise) {
                    $timeout.cancel(deactivatePromise);
                    deactivatePromise = false;
                }
            } else {
                Storage.set({xt_idle_instance: newInstance});
                if (masterInstance) {
                    MtpNetworkerFactory.stopAll();
                    console.warn(dT(), 'now idle instance', newInstance);
                    if (!deactivatePromise) {
                        deactivatePromise = $timeout(deactivateInstance, 30000);
                    }
                }
                masterInstance = false;
            }
        });
    }

    return {
        start: start
    };
}

MtpSingleInstanceServiceModule.dependencies = [
    'IdleManager', 
    'Storage',
    'MtpNetworkerFactory',
    '$interval', 
    '$rootScope', 
    '$timeout',
    'jQuery'
];

function MtpTimeManagerModule(Storage) {
    var lastMessageID = [0, 0],
        timeOffset = 0;

    Storage.get('server_time_offset').then(function (to) {
        if (to) {
            timeOffset = to;
        }
    });

    function generateMessageID() {
        var timeTicks = tsNow(),
            timeSec = Math.floor(timeTicks / 1000) + timeOffset,
            timeMSec = timeTicks % 1000,
            random = nextRandomInt(0xFFFF);

        var messageID = [timeSec, (timeMSec << 21) | (random << 3) | 4];
        if (lastMessageID[0] > messageID[0] ||
            lastMessageID[0] == messageID[0] && lastMessageID[1] >= messageID[1]) {

            messageID = [lastMessageID[0], lastMessageID[1] + 4];
        }

        lastMessageID = messageID;

        return longFromInts(messageID[0], messageID[1]);
    }

    function applyServerTime(serverTime, localTime) {
        var newTimeOffset = serverTime - Math.floor((localTime || tsNow()) / 1000),
            changed = Math.abs(timeOffset - newTimeOffset) > 10;
        Storage.set({server_time_offset: newTimeOffset});

        lastMessageID = [0, 0];
        timeOffset = newTimeOffset;
        console.log(dT(), 'Apply server time', serverTime, localTime, newTimeOffset, changed);

        return changed;
    }

    return {
        generateID: generateMessageID,
        applyServerTime: applyServerTime
    };
}

MtpTimeManagerModule.dependencies = [
    'Storage'
];

function TelegramApiModule(MtpApiManager, AppPeersManager, MtpApiFileManager, AppUsersManager, AppProfileManager, AppChatsManager, MtpNetworkerFactory, FileSaver, $q, $timeout) {
    var options = {dcID: 2, createNetworker: true};

    MtpNetworkerFactory.setUpdatesProcessor(function (message) {
        switch (message._) {
            case 'updates':
                AppChatsManager.saveApiChats(message.chats);
                AppUsersManager.saveApiUsers(message.users);
                break;
        }
    });

    return {
        checkPhone: checkPhone,
        createChat: createChat,
        createChannel: createChannel,
        deleteMessages: deleteMessages,
        downloadDocument: downloadDocument,
        downloadPhoto: downloadPhoto,
        editChannelAdmin: editChannelAdmin,
        editChannelTitle: editChannelTitle,
        editChannelPhoto: editChannelPhoto,
        editChatAdmin: editChatAdmin,
        editChatTitle: editChatTitle,
        editChatPhoto: editChatPhoto,
        getChatLink: getChatLink,
        getDialogs: getDialogs,
        getDocumentPreview: getDocumentPreview,
        getFullChat: getFullChat,
        getHistory: getHistory,
        getMessages: getMessages,
        getPeerByID: getPeerByID,
        getUserInfo: getUserInfo,
        getUserPhoto: getUserPhoto,
        joinChat: joinChat,
        sendCode: sendCode,
        sendFile: sendFile,
        sendMessage: sendMessage,
        sendSms: sendSms,
        setConfig: setConfig,
        signIn: signIn,
        signUp: signUp,
        startBot: startBot,
        subscribe: subscribe,
        unSubscribe: unSubscribe,
        logOut: logOut,

        invokeApi: invokeApi,
        dT: dT,

        VERSION: '1.2.7'
    };

    /**
     * @function invokeApi
     * @description Invoke any method from .files/schema.txt
     * @param {String} method - Method name
     * @param {Object} [params] - Parameters
     * @example <%example:invokeApi.js%>
     */
    function invokeApi(method, params) {
        return MtpApiManager.invokeApi(method, params);
    }

    /**
     * @function sendCode
     * @description Send code by phone number
     * @param {String} phone_number - Phone number
     * @example <%example:sendCode.js%>
     */
    function sendCode(phone_number) {
        return MtpApiManager.invokeApi('auth.sendCode', {
            phone_number: phone_number,
            sms_type: 5,
            api_id: Config.App.id,
            api_hash: Config.App.hash,
            lang_code: navigator.language || 'en'
        }, options);
    }

    /**
     * @function signIn
     * @description Sign in
     * @param {String} phone_number - Phone number
     * @param {String} phone_code_hash - Code hash (was received in sendCode method)
     * @param {String} phone_code - Code by Telegram
     * @example <%example:signIn.js%>
     */
    function signIn(phone_number, phone_code_hash, phone_code) {
        return MtpApiManager.invokeApi('auth.signIn', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code
        }, options).then(function (result) {
            MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        });
    }

    /**
     * @function signUp
     * @description Sign up
     * @param {String} phone_number - Phone number
     * @param {String} phone_code_hash - Code hash (was received in sendCode method)
     * @param {String} phone_code - Code by Telegram
     * @param {String} first_name - User first name
     * @param {String} [last_name] - User last name
     * @example <%example:signUp.js%>
     */
    function signUp(phone_number, phone_code_hash, phone_code, first_name, last_name) {
        return MtpApiManager.invokeApi('auth.signUp', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash,
            phone_code: phone_code,
            first_name: first_name || '',
            last_name: last_name || ''
        }, options).then(function (result) {
            MtpApiManager.setUserAuth(options.dcID, {
                id: result.user.id
            });
        });
    }

    /**
     * @function sendMessage
     * @description Send message
     * @param {Number} id - Peer ID
     * @param {String} message - Message text
     * @example <%example:sendMessage.js%>
     */
    function sendMessage(id, message) {
        return MtpApiManager.invokeApi('messages.sendMessage', {
            flags: 0,
            peer: AppPeersManager.getInputPeerByID(id),
            message: message,
            random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)],
            reply_to_msg_id: 0,
            entities: []
        });
    }

    /**
     * @function startBot
     * @description Send bot command /start
     * @param {String} botName - Bot name
     * @example <%example:startBot.js%>
     */
    function startBot(botName) {
        return MtpApiManager.invokeApi('contacts.search', {q: botName, limit: 1}).then(function (result) {
            AppUsersManager.saveApiUsers(result.users);
            return sendMessage(result.users[0].id, '/start');
        });
    }

    /**
     * @function sendSms
     * @description Send code via SMS
     * @param {String} phone_number - Phone number
     * @param {String} phone_code_hash - Code hash (was received in sendCode method)
     * @example <%example:sendSms.js%>
     */
    function sendSms(phone_number, phone_code_hash) {
        return MtpApiManager.invokeApi('auth.sendSms', {
            phone_number: phone_number,
            phone_code_hash: phone_code_hash
        }, options);
    }

    /**
     * @function setConfig
     * @description Configure your application
     * @param {Object} config - Configuration object
     * @param {Number} config.app.id - Application ID
     * @param {String} config.app.hash - App hash
     * @param {String} config.app.version - App version
     * @param {Array<Object>} config.server.test - List test servers
     * @param {Array<Object>} config.server.production - List production servers
     * @example <%example:setConfig.js%>
     */
    function setConfig(config) {
        config = config || {};

        config.app = config.app || {};
        config.server = config.server || {};

        config.server.test = config.server.test || [];
        config.server.production = config.server.production || [];

        Config.Modes.debug = config.modes.debug || false;
        Config.Modes.test = config.modes.test || false;

        Config.App.id = config.app.id;
        Config.App.hash = config.app.hash;
        Config.App.version = config.app.version || Config.App.version;

        Config.Server.Test = config.server.test;
        Config.Server.Production = config.server.production;

        MtpApiManager.invokeApi('help.getNearestDc', {}, options).then(function (nearestDcResult) {
            if (nearestDcResult.nearest_dc != nearestDcResult.this_dc) {
                MtpApiManager.getNetworker(nearestDcResult.nearest_dc, {createNetworker: true});
            }
        });
    }

    /**
     * @function createChat
     * @description Create telegram chat (By default only creator will admin. In the future it will be changed)
     * @param {String} title - Chat title
     * @param {Array<Number>} userIDs - User ids list
     * @example <%example:createChat.js%>
     */
    function createChat(title, userIDs) {
        title = title || '';
        userIDs = userIDs || [];

        if (!isArray(userIDs)) {
            throw new Error('[userIDs] is not array');
        }

        var inputUsers = [];

        for (var i = 0; i < userIDs.length; i++) {
            inputUsers.push(AppUsersManager.getUserInput(userIDs[i]))
        }

        return MtpApiManager.invokeApi('messages.createChat', {
            title: title,
            users: inputUsers
        }).then(function (updates) {
            // TODO: Remove
            if (updates.chats && updates.chats[0]) {
                return MtpApiManager.invokeApi('messages.toggleChatAdmins', {
                    chat_id: updates.chats[0].id,
                    enabled: true
                });
            } else {
                return updates;
            }
        });
    }

    /**
     * @function getChatLink
     * @description Get chat invite link
     * @param {Number|String} chatID - Chat id
     * @param {Boolean} [force] - Force generate
     * @example <%example:getChatLink.js%>
     */
    function getChatLink(chatID, force) {
        return AppProfileManager.getChatInviteLink(chatID, force);
    }

    /**
     * @function getUserInfo
     * @description Get self information
     * @example <%example:getUserInfo.js%>
     */
    function getUserInfo() {
        return MtpApiManager.getUserID().then(function (id) {
            var user = AppUsersManager.getUser(id);

            if (!user.id || !user.deleted) {
                return user;
            } else {
                return MtpApiManager.invokeApi('users.getFullUser', {
                    id: {_: 'inputUserSelf'}
                }).then(function (userInfoFull) {
                    AppUsersManager.saveApiUser(userInfoFull.user);
                    return AppUsersManager.getUser(id);
                });
            }
        });
    }

    /**
     * @function getUserPhoto
     * @description Get user photo
     * @param {String} [type] - Photo type (values: byteArray (default), base64, blob)
     * @param {String} [size] - Photo size (values: big (default), small)
     * @example <%example:getUserPhoto.js%>
     */
    function getUserPhoto(type, size) {
        return getUserInfo().then(function (user) {
            if (!user.photo) {
                return null;
            }

            var photo = size === 'small'
                ? user.photo.photo_small
                : user.photo.photo_big;
            var location = {
                _: "inputFileLocation",
                local_id: photo.local_id,
                secret: photo.secret,
                volume_id: photo.volume_id
            };
            var params = {
                dcID: options.dcID,
                fileDownload: true,
                singleInRequest: window.safari !== undefined,
                createNetworker: true
            };

            return MtpApiManager.invokeApi('upload.getFile', {
                location: location,
                offset: 0,
                limit: 524288
            }, params).then(function (result) {
                switch (type) {
                    case 'byteArray':
                        return result.bytes;
                    case 'base64':
                        return "data:image/jpeg;base64," + btoa(String.fromCharCode.apply(null, result.bytes));
                    case 'blob':
                        return new Blob([result.bytes], {type: 'image/jpeg'});
                    default:
                        return result.bytes;
                }
            });
        });
    }

    /**
     * @function logOut
     * @description Logout from Telegram
     * @example <%example:logOut.js%>
     */
    function logOut() {
        return MtpApiManager.logOut();
    }

    /**
     * @function createChannel
     * @description Create channel (use carefully)
     * @param {String} title - Channel title
     * @param {String} [about] - About text
     * @example <%example:createChannel.js%>
     */
    function createChannel(title, about) {
        return MtpApiManager.invokeApi('channels.createChannel', {
            title: title || '',
            flags: 0,
            about: about || ''
        }, options).then(function (data) {
            AppChatsManager.saveApiChats(data.chats);
            return data;
        });
    }

    /**
     * @function getHistory
     * @description Get chat messages
     * @param {Object} params - Parameters
     * @param {Number} params.id - Chat ID
     * @param {Number} [params.take] - How much messages you will receive (default: 15)
     * @param {Number} [params.skip] - How much messages you will skip (default: 0)
     * @param {String} [params.type] - Chat type (for chat and channel use 'chat' (default))
     * @example <%example:getHistory.js%>
     */
    function getHistory(params) {
        params = params || {};
        params.id = params.id || 0;
        params.take = params.take || 15;
        params.skip = params.skip || 0;
        params.type = params.type || 'chat';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        return MtpApiManager.invokeApi('messages.getHistory', {
            peer: AppPeersManager.getInputPeerByID(params.id),
            offset_id: 0,
            add_offset: params.skip,
            limit: params.take
        });
    }

    /**
     * @function sendFile
     * @description Send file
     * @param {Object} params - Parameters
     * @param {Number} params.id - Peer ID
     * @param {String} params.type - Chat type (for chat and channel use 'chat' (default))
     * @param {File} params.file - File
     * @param {String} [params.caption] - File caption
     * @example <%example:sendFile.js%>
     */
    function sendFile(params) {
        params = params || {};
        params.id = params.id || 0;
        params.type = params.type || 'chat';
        params.file = params.file || {};
        params.caption = params.caption || '';

        if (params.type == 'chat' && params.id > 0) {
            params.id = params.id * -1;
        }

        return MtpApiFileManager.uploadFile(params.file).then(function (inputFile) {
            var file = params.file;

            inputFile.name = file.name;

            var inputMedia = {
                _: 'inputMediaUploadedDocument',
                file: inputFile,
                mime_type: file.type,
                caption: params.caption,
                attributes: [
                    {_: 'documentAttributeFilename', file_name: file.name}
                ]
            };

            return MtpApiManager.invokeApi('messages.sendMedia', {
                peer: AppPeersManager.getInputPeerByID(params.id),
                media: inputMedia,
                random_id: [nextRandomInt(0xFFFFFFFF), nextRandomInt(0xFFFFFFFF)]
            });
        });
    }

    /**
     * @function downloadDocument
     * @description Download Telegram document
     * @param {Object} doc - Telegram document
     * @param {Function} [progress] - Progress callback
     * @param {Boolean} [autosave] - Save file on device
     * @example <%example:downloadDocument.js%>
     */
    function downloadDocument(doc, progress, autosave) {
        doc = doc || {};
        doc.id = doc.id || 0;
        doc.access_hash = doc.access_hash || 0;
        doc.attributes = doc.attributes || [];
        doc.size = doc.size || 0;

        if (!isFunction(progress)) {
            progress = noop;
        }

        var location = {
            _: 'inputDocumentFileLocation',
            id: doc.id,
            access_hash: doc.access_hash
        };
        var fileName = 'FILE';
        var size = 15728640;
        var limit = 524288;
        var offset = 0;
        var done = $q.defer();
        var bytes = [];

        if (doc.size > size) {
            throw new Error('Big file not supported');
        }

        size = doc.size;

        forEach(doc.attributes, function (attr) {
            if (attr._ == 'documentAttributeFilename') {
                fileName = attr.file_name;
            }
        });

        function download() {
            if (offset < size) {
                MtpApiManager.invokeApi('upload.getFile', {
                    location: location,
                    offset: offset,
                    limit: limit
                }).then(function (result) {
                    bytes.push(result.bytes);
                    offset += limit;
                    progress(offset < size ? offset : size, size);
                    download();
                });
            } else {
                if (autosave) {
                    FileSaver.save(bytes, fileName);
                }
                done.resolve({
                    bytes: bytes,
                    fileName: fileName,
                    type: doc.mime_type
                });
            }
        }

        $timeout(download);

        return done.promise;
    }

    /**
     * @function joinChat
     * @description Join to chat by link or hash
     * @param {String} link - Chat invite link or hash
     * @example <%example:joinChat.js%>
     */
    function joinChat(link) {
        var regex;
        var hash;

        if (regex = link.match(/^https:\/\/telegram.me\/joinchat\/([\s\S]*)/)) {
            hash = regex[1];
        } else {
            hash = link;
        }

        return MtpApiManager.invokeApi('messages.importChatInvite', {hash: hash}).then(function (updates) {
            AppChatsManager.saveApiChats(updates.chats);
            AppUsersManager.saveApiUsers(updates.users);
        });
    }

    /**
     * @function editChatAdmin
     * @description Edit chat administrator
     * @param {Number} chatID - Chat ID
     * @param {Number} userID - User ID
     * @param {Boolean} [isAdmin] - Admin status (default: true)
     * @example <%example:editChatAdmin.js%>
     */
    function editChatAdmin(chatID, userID, isAdmin) {
        if (typeof isAdmin == 'undefined') {
            isAdmin = true;
        }

        isAdmin = !!isAdmin;
        chatID = AppChatsManager.getChatInput(chatID);
        userID = AppUsersManager.getUserInput(userID);

        return MtpApiManager.invokeApi('messages.editChatAdmin', {
            chat_id: chatID,
            user_id: userID,
            is_admin: isAdmin
        });
    }

    /**
     * @function editChatTitle
     * @description Edit chat title
     * @param {Number} chat_id - Chat ID
     * @param {String} title - New title
     * @example <%example:editChatTitle.js%>
     */
    function editChatTitle(chat_id, title) {
        return MtpApiManager.invokeApi('messages.editChatTitle', {
            chat_id: chat_id,
            title: title
        });
    }

    function editChannelAdmin(channel_id, user_id) {
        return MtpApiManager.invokeApi('channels.editAdmin', {
            channel: AppChatsManager.getChannelInput(channel_id),
            user_id: AppUsersManager.getUserInput(user_id),
            role: {_: 'channelRoleEditor'}
        });
    }

    function getFullChat(chat_id) {
        return MtpApiManager.invokeApi('messages.getFullChat', {chat_id: chat_id});
    }

    function downloadPhoto(photo, progress, autosave) {
        var photoSize = photo.sizes[photo.sizes.length - 1];
        var location = {
            _: 'inputFileLocation',
            local_id: photoSize.location.local_id,
            secret: photoSize.location.secret,
            volume_id: photoSize.location.volume_id
        };

        if (!isFunction(progress)) {
            progress = noop;
        }

        var fileName = photo.id + '.jpg';
        var size = 15728640;
        var limit = 524288;
        var offset = 0;
        var done = $q.defer();
        var bytes = [];

        if (photoSize.size > size) {
            throw new Error('Big file not supported');
        }

        size = photoSize.size;

        function download() {
            if (offset < size) {
                MtpApiManager.invokeApi('upload.getFile', {
                    location: location,
                    offset: offset,
                    limit: limit
                }).then(function (result) {
                    bytes.push(result.bytes);
                    offset += limit;
                    progress(offset < size ? offset : size, size);
                    download();
                });
            } else {
                if (autosave) {
                    FileSaver.save(bytes, fileName);
                }
                done.resolve({
                    bytes: bytes,
                    fileName: fileName,
                    type: 'image/jpeg'
                });
            }
        }

        $timeout(download);

        return done.promise;
    }

    function editChannelTitle(channel_id, title) {
        return MtpApiManager.invokeApi('channels.editTitle', {
            channel: AppChatsManager.getChannelInput(channel_id),
            title: title
        });
    }

    function deleteMessages(ids) {
        if (!isArray(ids)) {
            ids = [ids];
        }

        return MtpApiManager.invokeApi('messages.deleteMessages', {id: ids});
    }

    function subscribe(id, handler) {
        MtpNetworkerFactory.subscribe(id, handler);
    }

    function unSubscribe(id) {
        MtpNetworkerFactory.unSubscribe(id);
    }

    function getPeerByID(id, type) {
        type = type || 'user';

        if ((type == 'chat' || type == 'channel') && id > 0) {
            id = -id;
        }

        var peer = AppPeersManager.getPeer(id);
        var defer = $q.defer();

        if (!peer.deleted) {
            return defer.resolve(peer).promise;
        }

        var offsetDate = 0;
        var dialogsLoaded = 0;
        var totalCount = 0;

        (function load() {
            MtpApiManager.invokeApi('messages.getDialogs', {
                offset_peer: AppPeersManager.getInputPeerByID(0),
                limit: 100,
                offset_date: offsetDate
            }).then(function (result) {
                AppChatsManager.saveApiChats(result.chats);
                AppUsersManager.saveApiUsers(result.users);

                dialogsLoaded += result.dialogs.length;
                totalCount = result.count;

                var peer = AppPeersManager.getPeer(id);

                if (!peer.deleted) {
                    defer.resolve(peer);
                    return;
                }

                if (totalCount && dialogsLoaded < totalCount) {
                    var dates = map(result.messages, function (msg) {
                        return msg.date;
                    });
                    offsetDate = min(dates);
                    load();
                    return;
                }

                defer.reject({type: 'PEER_NOT_FOUND'});
            }, function (err) {
                defer.reject(err);
            });
        })();

        return defer.promise;
    }

    function getDocumentPreview(doc) {
        var location = doc.thumb.location;
        var limit = 524288;

        location._ = 'inputFileLocation';

        if (doc.thumb.size > limit) {
            throw new Error('Size of document exceed limit');
        }

        return MtpApiManager.invokeApi('upload.getFile', {
            location: location,
            offset: 0,
            limit: limit
        });
    }

    function editChatPhoto(chat_id, photo) {
        return MtpApiFileManager.uploadFile(photo).then(function (inputFile) {
            return MtpApiManager.invokeApi('messages.editChatPhoto', {
                chat_id: chat_id,
                photo: {
                    _: 'inputChatUploadedPhoto',
                    file: inputFile,
                    crop: {
                        _: 'inputPhotoCropAuto'
                    }
                }
            });
        });
    }

    function editChannelPhoto(channel_id, photo) {
        return MtpApiFileManager.uploadFile(photo).then(function (inputFile) {
            return MtpApiManager.invokeApi('channels.editPhoto', {
                channel: AppChatsManager.getChannelInput(channel_id),
                photo: {
                    _: 'inputChatUploadedPhoto',
                    file: inputFile,
                    crop: {
                        _: 'inputPhotoCropAuto'
                    }
                }
            });
        });
    }

    function checkPhone(phone_number) {
        return MtpApiManager.invokeApi('auth.checkPhone', {phone_number: phone_number});
    }

    function getDialogs(offset, limit) {
        offset = offset || 0;
        limit = limit || 50;

        return MtpApiManager.invokeApi('messages.getDialogs', {
            offset_peer: AppPeersManager.getInputPeerByID(0),
            offset_date: offset,
            limit: limit
        }).then(function (dialogsResult) {
            AppUsersManager.saveApiUsers(dialogsResult.users);
            AppChatsManager.saveApiChats(dialogsResult.chats);

            var dates = map(dialogsResult.messages, function (msg) {
                return msg.date;
            });

            return {
                result: dialogsResult,
                offset: min(dates)
            };
        });
    }

    function getMessages(ids) {
        if (!isArray(ids)) {
            ids = [ids];
        }

        return MtpApiManager.invokeApi('messages.getMessages', {
            id: [{
                _: 'inputMessageID',
                id: ids
            }]
        }).then(function (updates) {
            AppUsersManager.saveApiUsers(updates.users);
            AppChatsManager.saveApiChats(updates.chats);

            return updates;
        });
    }
}

TelegramApiModule.dependencies = [
    'MtpApiManager',
    'AppPeersManager',
    'MtpApiFileManager',
    'AppUsersManager',
    'AppProfileManager',
    'AppChatsManager',
    'MtpNetworkerFactory',
    'FileSaver',
    '$q',
    '$timeout'
];

// Create container
var builder = new ContainerModule();

// Register App modules
builder.register('AppChatsManager', AppChatsManagerModule);
builder.register('AppPeersManager', AppPeersManagerModule);
builder.register('AppProfileManager', AppProfileManagerModule);
builder.register('AppUsersManager', AppUsersManagerModule);

// Register Mtp modules
builder.register('MtpApiFileManager', MtpApiFileManagerModule);
builder.register('MtpApiManager', MtpApiManagerModule);
builder.register('MtpAuthorizer', MtpAuthorizerModule);
builder.register('MtpDcConfigurator', MtpDcConfiguratorModule);
builder.register('MtpNetworkerFactory', MtpNetworkerFactoryModule);
builder.register('MtpRsaKeysManager', MtpRsaKeysManagerModule);
builder.register('MtpSecureRandom', MtpSecureRandomModule);
builder.register('MtpSingleInstanceService', MtpSingleInstanceServiceModule);
builder.register('MtpTimeManager', MtpTimeManagerModule);

// Register Helpers modules
builder.register('$http', $httpModule);
builder.register('$interval', $intervalModule);
builder.register('$q', $qModule);
builder.register('$rootScope', $rootScopeModule);
builder.register('$timeout', $timeoutModule);

// Register other modules
builder.register('CryptoWorker', CryptoWorkerModule);
builder.register('IdleManager', IdleManagerModule);
builder.register('qSync', qSyncModule);
builder.register('Storage', StorageModule);
builder.register('TelegramMeWebService', TelegramMeWebServiceModule);
builder.register('jQuery', jQueryModule);
builder.register('FileSaver', FileSaverModule);

// Register TelegramApi module
builder.register('TelegramApi', TelegramApiModule);

// Initialize modules
builder.init();

// Resolve TelegramApi
var telegramApi = builder.resolve('TelegramApi');

window.telegramApi = telegramApi;

})();