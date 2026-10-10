(()=>{var Ah=0,Hl=1,Rh=2;var yr=1,Ch=2,gs=3,hi=0,Fe=1,sn=2,Un=0,_s=1,Vl=2,Wl=3,Xl=4,Ih=5;var Ti=100,Ph=101,Lh=102,Nh=103,Uh=104,Dh=200,Fh=201,qh=202,Oh=203,Yl=204,$l=205,Bh=206,kh=207,zh=208,Gh=209,Hh=210,Vh=211,Wh=212,Xh=213,Yh=214,ma=0,ga=1,_a=2,ts=3,xa=4,va=5,ya=6,Ma=7,eo=0,$h=1,Zh=2,yn=0,Zl=1,Kl=2,Jl=3,Ql=4,jl=5,tc=6,Mr=7;var ec=300,ui=301,wi=302,no=303,io=304,Sr=306,Sa=1e3,wn=1001,ba=1002,Ie=1003,Kh=1004;var br=1005;var Ne=1006,so=1007;var di=1008;var $e=1009,nc=1010,ic=1011,xs=1012,ro=1013,Mn=1014,rn=1015,Sn=1016,ao=1017,oo=1018,vs=1020,sc=35902,rc=35899,ac=1021,oc=1022,an=1023,Rn=1026,fi=1027,lo=1028,co=1029,pi=1030,ho=1031;var uo=1033,Er=33776,Tr=33777,wr=33778,Ar=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,xo=37492,vo=37496,yo=37488,Mo=37489,Rr=37490,So=37491,bo=37808,Eo=37809,To=37810,wo=37811,Ao=37812,Ro=37813,Co=37814,Io=37815,Po=37816,Lo=37817,No=37818,Uo=37819,Do=37820,Fo=37821,qo=36492,Oo=36494,Bo=36495,ko=36283,zo=36284,Cr=36285,Go=36286;var Gs=2300,Ea=2301,fa=2302,Il=2303,Pl=2400,Ll=2401,Nl=2402;var Jh=3200;var Ir=0,Qh=1,Zn="",Ce="srgb",Hs="srgb-linear",Vs="linear",ae="srgb";var pa=7680;var jh=519,tu=512,eu=513,nu=514,Ho=515,iu=516,su=517,Vo=518,ru=519,lc=35044;var cc="300 es",mn=2e3,es=2001;function xd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){let i=ns("canvas");return i.style.display="block",i}var Yc={},is=null;function Ws(...i){let t="THREE."+i.shift();is?is("log",t,...i):console.log(t,...i)}function ou(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=ou(i);let t="THREE."+i.shift();if(is)is("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=ou(i);let t="THREE."+i.shift();if(is)is("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function yi(...i){let t=i.join(" ");t in Yc||(Yc[t]=!0,Ft(...i))}function lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var cu={[ma]:ga,[_a]:ya,[xa]:Ma,[ts]:va,[ga]:ma,[ya]:_a,[Ma]:xa,[va]:ts},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=1234567,Os=Math.PI/180,ss=180/Math.PI;function An(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function hc(i,t){return(i%t+t)%t}function yd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Md(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function Sd(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function bd(i,t=1){return t-Math.abs(hc(i,t*2)-t)}function Ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ad(i,t){return i+Math.random()*(t-i)}function Rd(i){return i*(.5-Math.random())}function Cd(i){i!==void 0&&($c=i);let t=$c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(i){return i*Os}function Pd(i){return i*ss}function Ld(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Nd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var uc={DEG2RAD:Os,RAD2DEG:ss,generateUUID:An,clamp:Kt,euclideanModulo:hc,mapLinear:yd,inverseLerp:Md,lerp:Bs,damp:Sd,pingpong:bd,smoothstep:Ed,smootherstep:Td,randInt:wd,randFloat:Ad,randFloatSpread:Rd,seededRandom:Cd,degToRad:Id,radToDeg:Pd,isPowerOfTwo:Ld,ceilPowerOfTwo:Nd,floorPowerOfTwo:Ud,setQuaternionFromProperEuler:Dd,normalize:le,denormalize:pn},_c=class _c{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_c.prototype.isVector2=!0;var rt=_c,In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o;let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xc=class xc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;var I=xc,rl=new I,Zc=new In,vc=class vc{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],S=s[1],w=s[4],y=s[7],E=s[2],b=s[5],C=s[8];return r[0]=a*v+o*S+c*E,r[3]=a*m+o*w+c*b,r[6]=a*p+o*y+c*C,r[1]=l*v+h*S+d*E,r[4]=l*m+h*w+d*b,r[7]=l*p+h*y+d*C,r[2]=u*v+f*S+g*E,r[5]=u*m+f*w+g*b,r[8]=u*p+f*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*l-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(t,e)),this}rotate(t){return yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-t)),this}translate(t,e){return yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vc.prototype.isMatrix3=!0;var Vt=vc,al=new Vt,Kc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:t,whitePoint:n,transfer:Vs,toXYZ:Kc,fromXYZ:Jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Kc,fromXYZ:Jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var te=Fd();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=ns("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ns("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,rs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var Od=0,ll=new I,Ge=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=Ne,a=di,o=an,c=$e,l=i.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=An(),this.name="",this.source=new rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sa:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sa:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=ec;Ge.DEFAULT_ANISOTROPY=1;var yc=class yc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,y=(f+1)/2,E=(p+1)/2,b=(h+u)/4,C=(d+v)/4,x=(g+m)/4;return w>y&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=x/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;var ve=yc,wa=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ge(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new rs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends wa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xs=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var to=class to{constructor(t,e,n,s,r,a,o,c,l,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,u,f,g,v,m)}set(t,e,n,s,r,a,o,c,l,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new to().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,v=l*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*c,f=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,kd)}lookAt(t,e,n){let s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),jn.crossVectors(n,Ze),jn.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),jn.crossVectors(n,Ze)),jn.normalize(),Gr.crossVectors(Ze,jn),s[0]=jn.x,s[4]=Gr.x,s[8]=Ze.x,s[1]=jn.y,s[5]=Gr.y,s[9]=Ze.y,s[2]=jn.z,s[6]=Gr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],w=n[7],y=n[11],E=n[15],b=s[0],C=s[4],x=s[8],T=s[12],R=s[1],L=s[5],D=s[9],G=s[13],N=s[2],O=s[6],X=s[10],W=s[14],Y=s[3],B=s[7],J=s[11],j=s[15];return r[0]=a*b+o*R+c*N+l*Y,r[4]=a*C+o*L+c*O+l*B,r[8]=a*x+o*D+c*X+l*J,r[12]=a*T+o*G+c*W+l*j,r[1]=h*b+d*R+u*N+f*Y,r[5]=h*C+d*L+u*O+f*B,r[9]=h*x+d*D+u*X+f*J,r[13]=h*T+d*G+u*W+f*j,r[2]=g*b+v*R+m*N+p*Y,r[6]=g*C+v*L+m*O+p*B,r[10]=g*x+v*D+m*X+p*J,r[14]=g*T+v*G+m*W+p*j,r[3]=S*b+w*R+y*N+E*Y,r[7]=S*C+w*L+y*O+E*B,r[11]=S*x+w*D+y*X+E*J,r[15]=S*T+w*G+y*W+E*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],S=c*f-l*u,w=o*f-l*d,y=o*u-c*d,E=a*f-l*h,b=a*u-c*h,C=a*d-o*h;return e*(v*S-m*w+p*y)-n*(g*S-m*E+p*b)+s*(g*w-v*E+p*C)-r*(g*y-v*b+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],S=e*o-n*a,w=e*c-s*a,y=e*l-r*a,E=n*c-s*o,b=n*l-r*o,C=s*l-r*c,x=h*v-d*g,T=h*m-u*g,R=h*p-f*g,L=d*m-u*v,D=d*p-f*v,G=u*p-f*m,N=S*G-w*D+y*L+E*R-b*T+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(o*G-c*D+l*L)*O,t[1]=(s*D-n*G-r*L)*O,t[2]=(v*C-m*b+p*E)*O,t[3]=(u*b-d*C-f*E)*O,t[4]=(c*R-a*G-l*T)*O,t[5]=(e*G-s*R+r*T)*O,t[6]=(m*y-g*C-p*w)*O,t[7]=(h*C-u*y+f*w)*O,t[8]=(a*D-o*R+l*x)*O,t[9]=(n*R-e*D-r*x)*O,t[10]=(g*b-v*y+p*S)*O,t[11]=(d*y-h*b-f*S)*O,t[12]=(o*T-a*L-c*x)*O,t[13]=(e*L-n*T+s*x)*O,t[14]=(v*w-g*E-m*S)*O,t[15]=(h*E-d*w+u*S)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,S=c*l,w=c*h,y=c*d,E=n.x,b=n.y,C=n.z;return s[0]=(1-(v+p))*E,s[1]=(f+y)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(u+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+w)*C,s[9]=(m-S)*C,s[10]=(1-(u+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length(),o=Ui.set(s[4],s[5],s[6]).length(),c=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);let l=1/a,h=1/o,d=1/c;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===mn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===es)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===mn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===es)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};to.prototype.isMatrix4=!0;var ue=to,Ui=new I,hn=new ue,Bd=new I(0,0,0),kd=new I(1,1,1),jn=new I,Gr=new I,Ze=new I,Qc=new ue,jc=new In,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jc.setFromEuler(this),this.setFromQuaternion(jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,th=new I,Di=new In,Bn=new ue,Hr=new I,Rs=new I,Gd=new I,Hd=new In,eh=new I(1,0,0),nh=new I(0,1,0),ih=new I(0,0,1),sh={type:"added"},Vd={type:"removed"},Fi={type:"childadded",child:null},cl={type:"childremoved",child:null},Pe=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Pn,n=new In,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Vt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Rs,Hr,this.up):Bn.lookAt(Hr,Rs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(Bn),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new I(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var re=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wd={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=hc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return te.workingToColorSpace(ke.copy(this),t),Math.round(Kt(ke.r*255,0,255))*65536+Math.round(Kt(ke.g*255,0,255))*256+Math.round(Kt(ke.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ce){te.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Vr);let n=Bs(ti.h,Vr.h,e),s=Bs(ti.s,Vr.s,e),r=Bs(ti.l,Vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Ht;Ht.NAMES=hu;var Je=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},un=new I,kn=new I,ul=new I,zn=new I,qi=new I,Oi=new I,rh=new I,dl=new I,fl=new I,pl=new I,ml=new ve,gl=new ve,_l=new ve,Wn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),kn.subVectors(n,e),ul.subVectors(t,e);let a=un.dot(un),o=un.dot(kn),c=un.dot(ul),l=kn.dot(kn),h=kn.dot(ul),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),kn.subVectors(t,e),un.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),un.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;qi.subVectors(s,n),Oi.subVectors(r,n),dl.subVectors(t,n);let c=qi.dot(dl),l=Oi.dot(dl);if(c<=0&&l<=0)return e.copy(n);fl.subVectors(t,s);let h=qi.dot(fl),d=Oi.dot(fl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(qi,a);pl.subVectors(t,r);let f=qi.dot(pl),g=Oi.dot(pl);if(g>=0&&f<=g)return e.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Oi,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return rh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(rh,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(qi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ln=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),Xr.subVectors(this.max,Cs),Bi.subVectors(t.a,Cs),ki.subVectors(t.b,Cs),zi.subVectors(t.c,Cs),ei.subVectors(ki,Bi),ni.subVectors(zi,ki),gi.subVectors(Bi,zi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-gi.z,gi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,gi.z,0,-gi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-gi.y,gi.x,0];return!xl(e,Bi,ki,zi,Xr)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,Bi,ki,zi,Xr))?!1:(Yr.crossVectors(ei,ni),e=[Yr.x,Yr.y,Yr.z],xl(e,Bi,ki,zi,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gn=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,Wr=new Ln,Bi=new I,ki=new I,zi=new I,ei=new I,ni=new I,gi=new I,Cs=new I,Xr=new I,Yr=new I,_i=new I;function xl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);let o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=t.dot(_i),l=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Te=new I,$r=new rt,Xd=0,ze=class extends Cn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var $s=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zs=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yd=new Ln,Is=new I,vl=new I,ri=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);let e=Is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(vl)),this.expandByPoint(Is.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$d=0,nn=new ue,yl=new Pe,Gi=new I,Ke=new Ln,Ps=new Ln,Re=new I,Ue=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xd(t)?Zs:$s)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Ke.min,Ps.min),Ke.expandByPoint(Re),Re.addVectors(Ke.max,Ps.max),Ke.expandByPoint(Re)):(Ke.expandByPoint(Ps.min),Ke.expandByPoint(Ps.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(Gi.fromBufferAttribute(t,l),Re.add(Gi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new I,c[x]=new I;let l=new I,h=new I,d=new I,u=new rt,f=new rt,g=new rt,v=new I,m=new I;function p(x,T,R){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[x].add(v),o[T].add(v),o[R].add(v),c[x].add(m),c[T].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){let R=S[x],L=R.start,D=R.count;for(let G=L,N=L+D;G<N;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let w=new I,y=new I,E=new I,b=new I;function C(x){E.fromBufferAttribute(s,x),b.copy(E);let T=o[x];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(b,T);let L=y.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,L)}for(let x=0,T=S.length;x<T;++x){let R=S[x],L=R.start,D=R.count;for(let G=L,N=L+D;G<N;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new ze(u,h,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ra=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Xe=new I,Ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ws("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ws("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ml=new I,Zd=new I,Kd=new Vt,fn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(Zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Jd=0,Nn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=An(),this.name="",this.type="Material",this.blending=_s,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=$l,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mi=class extends Nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hi,Ls=new I,Vi=new I,Wi=new I,Xi=new rt,Ns=new rt,uu=new ue,Zr=new I,Us=new I,Kr=new I,ah=new rt,Sl=new rt,oh=new rt,os=class extends Pe{constructor(t=new Mi){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ra(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Ks(n,3,0,!1)),Hi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Wi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Jr(Zr.set(-.5,-.5,0),Wi,a,Vi,s,r),Jr(Us.set(.5,-.5,0),Wi,a,Vi,s,r),Jr(Kr.set(.5,.5,0),Wi,a,Vi,s,r),ah.set(0,0),Sl.set(1,0),oh.set(1,1);let o=t.ray.intersectTriangle(Zr,Us,Kr,!1,Ls);if(o===null&&(Jr(Us.set(-.5,.5,0),Wi,a,Vi,s,r),Sl.set(0,1),o=t.ray.intersectTriangle(Zr,Kr,Us,!1,Ls),o===null))return;let c=t.ray.origin.distanceTo(Ls);c<t.near||c>t.far||e.push({distance:c,point:Ls.clone(),uv:Wn.getInterpolation(Ls,Zr,Us,Kr,ah,Sl,oh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Jr(i,t,e,n,s,r){Xi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ns.x=r*Xi.x-s*Xi.y,Ns.y=s*Xi.x+r*Xi.y):Ns.copy(Xi),i.copy(t),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(uu)}var Hn=new I,bl=new I,Qr=new I,jr=new I,Ca=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bl.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),jr.copy(this.origin).sub(bl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Qr),o=jr.dot(this.direction),c=-jr.dot(Qr),l=jr.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(bl).addScaledVector(Qr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,y=Math.abs(c),E=Math.abs(l),b=Math.abs(h),C,x,T,R,L,D,G,N,O,X,W,Y;if(y>=E&&y>=b?(T=c,D=d,O=g,Y=p,c>=0?(C=l,x=h,R=u,L=f,G=v,N=m,X=S,W=w):(C=h,x=l,R=f,L=u,G=m,N=v,X=w,W=S)):E>=b?(T=l,D=u,O=v,Y=S,l>=0?(C=h,x=c,R=f,L=d,G=m,N=g,X=w,W=p):(C=c,x=h,R=d,L=f,G=g,N=m,X=p,W=w)):(T=h,D=f,O=m,Y=w,h>=0?(C=c,x=l,R=d,L=u,G=g,N=v,X=p,W=S):(C=l,x=c,R=u,L=d,G=v,N=g,X=S,W=p)),T===0)return null;let B=C/T,J=x/T,j=1/T,gt=R-B*D,Mt=L-J*D,jt=G-B*O,Yt=N-J*O,Et=X-B*Y,$=W-J*Y,Q=Et*Yt-$*jt,mt=gt*$-Mt*Et,kt=jt*Mt-Yt*gt;if(s){if(Q<0||mt<0||kt<0)return null}else if((Q<0||mt<0||kt<0)&&(Q>0||mt>0||kt>0))return null;let Tt=Q+mt+kt;if(Tt===0)return null;let zt=j*(Q*D+mt*O+kt*Y);return(Tt>0?zt<0:zt>0)?null:this.at(zt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Si=class extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lh=new ue,xi=new Ca,ta=new ri,ch=new I,ea=new I,na=new I,ia=new I,El=new I,sa=new I,hh=new I,ra=new I,bt=class extends Pe{constructor(t=new Ue,e=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(El.fromBufferAttribute(d,t),a?sa.addScaledVector(El,h):sa.addScaledVector(El.sub(e),h))}e.add(sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(ta.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ta,ch)===null||xi.origin.distanceToSquared(ch)>(t.far-t.near)**2))&&(lh.copy(r).invert(),xi.copy(t.ray).applyMatrix4(lh),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,E=w;y<E;y+=3){let b=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);s=aa(this,p,t,n,l,h,d,b,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=aa(this,a,t,n,l,h,d,S,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,E=w;y<E;y+=3){let b=y,C=y+1,x=y+2;s=aa(this,p,t,n,l,h,d,b,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let S=m,w=m+1,y=m+2;s=aa(this,a,t,n,l,h,d,S,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Qd(i,t,e,n,s,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===hi,o),c===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ra);return l<e.near||l>e.far?null:{distance:l,point:ra.clone(),object:i}}function aa(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ea),i.getVertexPosition(c,na),i.getVertexPosition(l,ia);let h=Qd(i,t,e,n,ea,na,ia,hh);if(h){let d=new I;Wn.getBarycoord(hh,ea,na,ia,d),s&&(h.uv=Wn.getInterpolatedAttribute(s,o,c,l,d,new rt)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,o,c,l,d,new rt)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new I,materialIndex:0};Wn.getNormal(ea,na,ia,u.normal),h.face=u,h.barycoord=d}return h}var Js=class extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ie,h=Ie,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Yi=new ue,uh=new ue,oa=[],dh=new Ln,jd=new ue,Ds=new bt,Fs=new ri,js=class extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),dh.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(dh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Fs.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),uh.multiplyMatrices(n,Yi),Ds.matrixWorld=uh,Ds.raycast(t,oa);for(let a=0,o=oa.length;a<o;a++){let c=oa[a];c.instanceId=r,c.object=this,e.push(c)}oa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Js(new Float32Array(s*this.count),s,this.count,lo,rn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vi=new ri,tf=new rt(.5,.5),la=new I,ls=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],w=r[13],y=r[14],E=r[15];if(s[0].setComponents(l-a,f-h,p-g,E-S).normalize(),s[1].setComponents(l+a,f+h,p+g,E+S).normalize(),s[2].setComponents(l+o,f+d,p+v,E+w).normalize(),s[3].setComponents(l-o,f-d,p-v,E-w).normalize(),n)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(l-c,f-u,p-m,E-y).normalize();else if(s[4].setComponents(l-c,f-u,p-m,E-y).normalize(),e===mn)s[5].setComponents(l+c,f+u,p+m,E+y).normalize();else if(e===es)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=tf.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(la.x=s.normal.x>0?t.max.x:t.min.x,la.y=s.normal.y>0?t.max.y:t.min.y,la.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tr=class extends Ge{constructor(t=[],e=ui,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cs=class extends Ge{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends Ge{constructor(t,e,n=Mn,s,r,a,o=Ie,c=Ie,l,h=Rn,d=1){if(h!==Rn&&h!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ia=class extends ai{constructor(t,e=Mn,n=ui,s,r,a=Ie,o=Ie,c,l=Rn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},er=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},be=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(v,m,p,S,w,y,E,b,C,x,T){let R=y/C,L=E/x,D=y/2,G=E/2,N=b/2,O=C+1,X=x+1,W=0,Y=0,B=new I;for(let J=0;J<X;J++){let j=J*L-G;for(let gt=0;gt<O;gt++){let Mt=gt*R-D;B[v]=Mt*S,B[m]=j*w,B[p]=N,l.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[p]=b>0?1:-1,h.push(B.x,B.y,B.z),d.push(gt/C),d.push(1-J/x),W+=1}}for(let J=0;J<x;J++)for(let j=0;j<C;j++){let gt=u+j+O*J,Mt=u+j+O*(J+1),jt=u+(j+1)+O*(J+1),Yt=u+(j+1)+O*J;c.push(gt,Mt,Yt),c.push(Mt,jt,Yt),Y+=6}o.addGroup(f,Y,T),f+=Y,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hs=class i extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new rt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},De=class i extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=n/2,p=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function S(){let y=new I,E=new I,b=0,C=(e-t)/n;for(let x=0;x<=r;x++){let T=[],R=x/r,L=R*(e-t)+t;for(let D=0;D<=s;D++){let G=D/s,N=G*c+o,O=Math.sin(N),X=Math.cos(N);E.x=L*O,E.y=-R*n+m,E.z=L*X,d.push(E.x,E.y,E.z),y.set(O,C,X).normalize(),u.push(y.x,y.y,y.z),f.push(G,1-R),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let R=v[T][x],L=v[T+1][x],D=v[T+1][x+1],G=v[T][x+1];(t>0||T!==0)&&(h.push(R,L,G),b+=3),(e>0||T!==r-1)&&(h.push(L,D,G),b+=3)}l.addGroup(p,b,0),p+=b}function w(y){let E=g,b=new rt,C=new I,x=0,T=y===!0?t:e,R=y===!0?1:-1;for(let D=1;D<=s;D++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let L=g;for(let D=0;D<=s;D++){let N=D/s*c+o,O=Math.cos(N),X=Math.sin(N);C.x=T*X,C.y=m*R,C.z=T*O,d.push(C.x,C.y,C.z),u.push(0,R,0),b.x=O*.5+.5,b.y=X*.5*R+.5,f.push(b.x,b.y),g++}for(let D=0;D<s;D++){let G=E+D,N=L+D;y===!0?h.push(N,N+1,G):h.push(N+1,N,G),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},us=class i extends De{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pa=class i extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let w=new I,y=new I,E=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],y),f(e[b+2],E),c(w,y,E,S)}function c(S,w,y,E){let b=E+1,C=[];for(let x=0;x<=b;x++){C[x]=[];let T=S.clone().lerp(y,x/b),R=w.clone().lerp(y,x/b),L=b-x;for(let D=0;D<=L;D++)D===0&&x===b?C[x][D]=T:C[x][D]=T.clone().lerp(R,D/L)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){let R=Math.floor(T/2);T%2===0?(u(C[x][R+1]),u(C[x+1][R]),u(C[x][R])):(u(C[x][R+1]),u(C[x+1][R+1]),u(C[x+1][R]))}}function l(S){let w=new I;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(S),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let S=new I;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];let y=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(y,1-E)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let w=a[S+0],y=a[S+2],E=a[S+4],b=Math.max(w,y,E),C=Math.min(w,y,E);b>.9&&C<.1&&(w<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,w){let y=S*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function g(){let S=new I,w=new I,y=new I,E=new I,b=new rt,C=new rt,x=new rt;for(let T=0,R=0;T<r.length;T+=9,R+=6){S.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),b.set(a[R+0],a[R+1]),C.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),E.copy(S).add(w).add(y).divideScalar(3);let L=m(E);v(b,R+0,S,L),v(C,R+2,w,L),v(x,R+4,y,L)}}function v(S,w,y,E){E<0&&S.x===1&&(a[w]=S.x-1),y.x===0&&y.z===0&&(a[w]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new rt:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new ue;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ds=class extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},La=class extends ds{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var fh=new I,ph=new I,Tl=new dc,wl=new dc,Al=new dc,Na=class extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ph.subVectors(s[0],s[1]).add(s[0]),l=ph);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Tl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),wl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),Al.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),wl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Al.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Tl.calc(c),wl.calc(c),Al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ef(i,t){let e=1-i;return e*e*t}function nf(i,t){return 2*(1-i)*i*t}function sf(i,t){return i*i*t}function ks(i,t,e,n){return ef(i,t)+nf(i,e)+sf(i,n)}function rf(i,t){let e=1-i;return e*e*e*t}function af(i,t){let e=1-i;return 3*e*e*i*t}function of(i,t){return 3*(1-i)*i*i*t}function lf(i,t){return i*i*i*t}function zs(i,t,e,n,s){return rf(i,t)+af(i,e)+of(i,n)+lf(i,s)}var nr=class extends Qe{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ua=class extends Qe{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y),zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ir=class extends Qe{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Da=class extends Qe{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sr=class extends Qe{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ks(t,s.x,r.x,a.x),ks(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fa=class extends Qe{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ks(t,s.x,r.x,a.x),ks(t,s.y,r.y,a.y),ks(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rr=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(mh(o,c.x,l.x,h.x,d.x),mh(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},Ul=Object.freeze({__proto__:null,ArcCurve:La,CatmullRomCurve3:Na,CubicBezierCurve:nr,CubicBezierCurve3:Ua,EllipseCurve:ds,LineCurve:ir,LineCurve3:Da,QuadraticBezierCurve:sr,QuadraticBezierCurve3:Fa,SplineCurve:rr}),qa=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ul[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ul[s.type]().fromJSON(s))}return this}},Yn=class extends qa{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ir(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new sr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new nr(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new ds(t,e,n,s,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gn=class extends Yn{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Yn().fromJSON(s))}return this}};function cf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=du(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=pf(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,d=c;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return ar(r,a,e,o,c,l,0),a}function du(i,t,e,n,s){let r;if(s===Tf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=gh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=gh(a/n|0,i[a],i[a+1],r);return r&&fs(r,r.next)&&(lr(r),r=r.next),r}function bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fs(e,e.next)||Me(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ar(i,t,e,n,s,r,a){if(!i)return;!a&&r&&vf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?uf(i,n,s,r):hf(i)){t.push(c.i,i.i,l.i),lr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=df(bi(i),t),ar(i,t,e,n,s,r,2)):a===2&&ff(i,t,e,n,s,r):ar(bi(i),t,e,n,s,r,1);break}}}function hf(i){let t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),d=Math.min(o,c,l),u=Math.max(s,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&qs(s,o,r,c,a,l,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),v=Math.max(o,c,l),m=Math.max(h,d,u),p=Dl(f,g,t,e,n),S=Dl(v,m,t,e,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=p&&y&&y.z<=S;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&qs(o,h,c,d,l,u,w.x,w.y)&&Me(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&qs(o,h,c,d,l,u,y.x,y.y)&&Me(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&qs(o,h,c,d,l,u,w.x,w.y)&&Me(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&qs(o,h,c,d,l,u,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function df(i,t){let e=i;do{let n=e.prev,s=e.next.next;!fs(n,s)&&pu(n,e,e.next,s)&&or(n,s)&&or(s,n)&&(t.push(n.i,e.i,s.i),lr(e),lr(e.next),e=i=s),e=e.next}while(e!==i);return bi(e)}function ff(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sf(a,o)){let c=mu(a,o);a=bi(a,a.next),c=bi(c,c.next),ar(a,t,e,n,s,r,0),ar(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function pf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=du(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Mf(l))}s.sort(mf);for(let r=0;r<s.length;r++)e=gf(s[r],e);return e}function mf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function gf(i,t){let e=_f(i,t);if(!e)return t;let n=mu(e,i);return bi(n,n.next),bi(e,e.next)}function _f(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(fs(i,e))return e;do{if(fs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&fu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);or(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&xf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function xf(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function vf(i,t,e,n){let s=i;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yf(s)}function yf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Dl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function qs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&fu(i,t,e,n,s,r,a,o)}function Sf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bf(i,t)&&(or(i,t)&&or(t,i)&&Ef(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||fs(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fs(i,t){return i.x===t.x&&i.y===t.y}function pu(i,t,e,n){let s=ha(Me(i,t,e)),r=ha(Me(i,t,n)),a=ha(Me(e,n,i)),o=ha(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&ca(i,e,t)||r===0&&ca(i,n,t)||a===0&&ca(e,i,n)||o===0&&ca(e,t,n))}function ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ha(i){return i>0?1:i<0?-1:0}function bf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function or(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Ef(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mu(i,t){let e=Fl(i.i,i.x,i.y),n=Fl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gh(i,t,e,n){let s=Fl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ql=class{static triangulate(t,e,n=2){return cf(t,e,n)}},si=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];_h(t),xh(n,t);let a=t.length;e.forEach(_h);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,xh(n,e[c]);let o=ql.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function _h(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var _n=class i extends Ue{constructor(t=new gn([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:wf,w,y=!1,E,b,C,x;if(p){w=p.getSpacedPoints(h),y=!0,u=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,nt),b=new I,C=new I,x=new I}u||(m=0,f=0,g=0,v=0);let T=o.extractPoints(l),R=T.shape,L=T.holes;if(!si.isClockWise(R)){R=R.reverse();for(let nt=0,st=L.length;nt<st;nt++){let at=L[nt];si.isClockWise(at)&&(L[nt]=at.reverse())}}function G(nt){let at=10000000000000001e-36,ot=nt[0];for(let ht=1;ht<=nt.length;ht++){let qt=ht%nt.length,Dt=nt[qt],Gt=Dt.x-ot.x,Wt=Dt.y-ot.y,P=Gt*Gt+Wt*Wt,ne=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(ot.x),Math.abs(ot.y)),Jt=at*ne*ne;if(P<=Jt){nt.splice(qt,1),ht--;continue}ot=Dt}}G(R),L.forEach(G);let N=L.length,O=R;for(let nt=0;nt<N;nt++){let st=L[nt];R=R.concat(st)}function X(nt,st,at){return st||Bt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(st,at)}let W=R.length;function Y(nt,st,at){let ot,ht,qt,Dt=nt.x-st.x,Gt=nt.y-st.y,Wt=at.x-nt.x,P=at.y-nt.y,ne=Dt*Dt+Gt*Gt,Jt=Dt*P-Gt*Wt;if(Math.abs(Jt)>Number.EPSILON){let A=Math.sqrt(ne),_=Math.sqrt(Wt*Wt+P*P),q=st.x-Gt/A,H=st.y+Dt/A,Z=at.x-P/_,lt=at.y+Wt/_,ct=((Z-q)*P-(lt-H)*Wt)/(Dt*P-Gt*Wt);ot=q+Dt*ct-nt.x,ht=H+Gt*ct-nt.y;let K=ot*ot+ht*ht;if(K<=2)return new rt(ot,ht);qt=Math.sqrt(K/2)}else{let A=!1;Dt>Number.EPSILON?Wt>Number.EPSILON&&(A=!0):Dt<-Number.EPSILON?Wt<-Number.EPSILON&&(A=!0):Math.sign(Gt)===Math.sign(P)&&(A=!0),A?(ot=-Gt,ht=Dt,qt=Math.sqrt(ne)):(ot=Dt,ht=Gt,qt=Math.sqrt(ne/2))}return new rt(ot/qt,ht/qt)}let B=[];for(let nt=0,st=O.length,at=st-1,ot=nt+1;nt<st;nt++,at++,ot++)at===st&&(at=0),ot===st&&(ot=0),B[nt]=Y(O[nt],O[at],O[ot]);let J=[],j,gt=B.concat();for(let nt=0,st=N;nt<st;nt++){let at=L[nt];j=[];for(let ot=0,ht=at.length,qt=ht-1,Dt=ot+1;ot<ht;ot++,qt++,Dt++)qt===ht&&(qt=0),Dt===ht&&(Dt=0),j[ot]=Y(at[ot],at[qt],at[Dt]);J.push(j),gt=gt.concat(j)}let Mt;if(m===0)Mt=si.triangulateShape(O,L);else{let nt=[],st=[];for(let at=0;at<m;at++){let ot=at/m,ht=f*Math.cos(ot*Math.PI/2),qt=g*Math.sin(ot*Math.PI/2)+v;for(let Dt=0,Gt=O.length;Dt<Gt;Dt++){let Wt=X(O[Dt],B[Dt],qt);mt(Wt.x,Wt.y,-ht),ot===0&&nt.push(Wt)}for(let Dt=0,Gt=N;Dt<Gt;Dt++){let Wt=L[Dt];j=J[Dt];let P=[];for(let ne=0,Jt=Wt.length;ne<Jt;ne++){let A=X(Wt[ne],j[ne],qt);mt(A.x,A.y,-ht),ot===0&&P.push(A)}ot===0&&st.push(P)}}Mt=si.triangulateShape(nt,st)}let jt=Mt.length,Yt=g+v;for(let nt=0;nt<W;nt++){let st=u?X(R[nt],gt[nt],Yt):R[nt];y?(C.copy(E.normals[0]).multiplyScalar(st.x),b.copy(E.binormals[0]).multiplyScalar(st.y),x.copy(w[0]).add(C).add(b),mt(x.x,x.y,x.z)):mt(st.x,st.y,0)}for(let nt=1;nt<=h;nt++)for(let st=0;st<W;st++){let at=u?X(R[st],gt[st],Yt):R[st];y?(C.copy(E.normals[nt]).multiplyScalar(at.x),b.copy(E.binormals[nt]).multiplyScalar(at.y),x.copy(w[nt]).add(C).add(b),mt(x.x,x.y,x.z)):mt(at.x,at.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){let st=nt/m,at=f*Math.cos(st*Math.PI/2),ot=g*Math.sin(st*Math.PI/2)+v;for(let ht=0,qt=O.length;ht<qt;ht++){let Dt=X(O[ht],B[ht],ot);mt(Dt.x,Dt.y,d+at)}for(let ht=0,qt=L.length;ht<qt;ht++){let Dt=L[ht];j=J[ht];for(let Gt=0,Wt=Dt.length;Gt<Wt;Gt++){let P=X(Dt[Gt],j[Gt],ot);y?mt(P.x,P.y+w[h-1].y,w[h-1].x+at):mt(P.x,P.y,d+at)}}}Et(),$();function Et(){let nt=s.length/3;if(u){let st=0,at=W*st;for(let ot=0;ot<jt;ot++){let ht=Mt[ot];kt(ht[2]+at,ht[1]+at,ht[0]+at)}st=h+m*2,at=W*st;for(let ot=0;ot<jt;ot++){let ht=Mt[ot];kt(ht[0]+at,ht[1]+at,ht[2]+at)}}else{for(let st=0;st<jt;st++){let at=Mt[st];kt(at[2],at[1],at[0])}for(let st=0;st<jt;st++){let at=Mt[st];kt(at[0]+W*h,at[1]+W*h,at[2]+W*h)}}n.addGroup(nt,s.length/3-nt,0)}function $(){let nt=s.length/3,st=0;Q(O,st),st+=O.length;for(let at=0,ot=L.length;at<ot;at++){let ht=L[at];Q(ht,st),st+=ht.length}n.addGroup(nt,s.length/3-nt,1)}function Q(nt,st){let at=nt.length;for(;--at>=0;){let ot=at,ht=at-1;ht<0&&(ht=nt.length-1);for(let qt=0,Dt=h+m*2;qt<Dt;qt++){let Gt=W*qt,Wt=W*(qt+1),P=st+ot+Gt,ne=st+ht+Gt,Jt=st+ht+Wt,A=st+ot+Wt;Tt(P,ne,Jt,A)}}}function mt(nt,st,at){c.push(nt),c.push(st),c.push(at)}function kt(nt,st,at){zt(nt),zt(st),zt(at);let ot=s.length/3,ht=S.generateTopUV(n,s,ot-3,ot-2,ot-1);oe(ht[0]),oe(ht[1]),oe(ht[2])}function Tt(nt,st,at,ot){zt(nt),zt(st),zt(ot),zt(st),zt(at),zt(ot);let ht=s.length/3,qt=S.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);oe(qt[0]),oe(qt[1]),oe(qt[3]),oe(qt[1]),oe(qt[2]),oe(qt[3])}function zt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function oe(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Af(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ul[s.type]().fromJSON(s)),new i(n,t.options)}},wf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,c),new rt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new rt(a,1-c),new rt(l,1-d),new rt(u,1-g),new rt(v,1-p)]:[new rt(o,1-c),new rt(h,1-d),new rt(f,1-g),new rt(m,1-p)]}};function Af(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var cr=class i extends Pa{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},hr=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let w=0;w<l;w++){let y=w*d-r;g.push(y,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let w=S+l*p,y=S+l*(p+1),E=S+1+l*(p+1),b=S+1+l*p;f.push(w,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ei=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new I,u=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let S=[],w=p/n,y=a+w*o,E=t*Math.cos(y),b=Math.sqrt(t*t-E*E),C=0;p===0&&a===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let T=x/e,R=s+T*r;d.x=-b*Math.cos(R),d.y=E,d.z=b*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(T+C,1-w),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let w=h[p][S+1],y=h[p][S],E=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&f.push(w,y,b),(p!==n-1||c<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xn=class i extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new I,f=new I,g=new I;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,S=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,y=(s+1)*v+m;c.push(p,S,y),c.push(S,w,y)}this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ai(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(vh(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(vh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Ai(i[e]);for(let s in n)t[s]=n[s]}return t}function vh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var gu={clone:Ai,merge:He},Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ai(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Oa=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},de=class extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Le=class extends de{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ur=class extends Nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ba=class extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ka=class extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $i(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},za=class extends oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ll:r=t,o=2*e-n;break;case Nl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ll:a=t,c=2*n-e;break;case Nl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+S*a[l+E]+w*a[c+E]+y*a[d+E];return r}},Ga=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},Ha=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Va=class extends oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=f*u+g*2,S=d[p],w=d[p+1],y=t*u+g*2,E=h[y],b=h[y+1],C=Lf(n,e,S,E,s);r[g]=_u(C,v,w,b,m)}return r}};function _u(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Pf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=_u(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Pf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$i(e,this.TimeBufferType),this.values=$i(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$i(t.times,Array),values:$i(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Rl(t.settings)&&(n.settings={inTangents:$i(t.settings.inTangents,Array),outTangents:$i(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Va(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gs:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break;case Il:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Rl(this.settings)&&(yh(this.settings.inTangents,t),yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Bt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Bt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&vd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Ea;var li=class extends tn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Gs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};Wa.prototype.ValueTypeName="color";var Xa=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="number";var Ya=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)In.slerpFlat(r,0,a,l-o,a,l,c);return r}},dr=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}};dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends tn{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Gs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="vector";var ji={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Mh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Mh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Za=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xu=new Za,$n=class{constructor(t){this.manager=t!==void 0?t:xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$n.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vn={},Ol=class extends Error{constructor(t,e){super(t),this.response=e}},fr=class extends $n{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ji.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Vn[t]!==void 0){Vn[t].push({onLoad:e,onProgress:n,onError:s});return}Vn[t]=[],Vn[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Vn[t],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,v=0,m=new ReadableStream({start(p){S();function S(){d.read().then(({done:w,value:y})=>{if(w)p.close();else{v+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,C=h.length;b<C;b++){let x=h[b];x.onProgress&&x.onProgress(E)}p.enqueue(y),S()}},w=>{p.error(w)})}}});return new Response(m)}else throw new Ol(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ji.add(`file:${t}`,l);let h=Vn[t];delete Vn[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Vn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Vn[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zi=new WeakMap,Ka=class extends $n{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=ji.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Zi.get(a);d===void 0&&(d=[],Zi.set(a,d)),d.push({onLoad:e,onError:s})}return a}let o=ns("img");function c(){h(),e&&e(this);let d=Zi.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Zi.delete(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),ji.remove(`image:${t}`);let u=Zi.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Zi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ji.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var pr=class extends $n{constructor(t){super(t)}load(t,e,n,s){let r=new Ge,a=new Ka(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ps=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Cl=new ue,Sh=new I,bh=new I,mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===es||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ua=new I,da=new In,Tn=new I,gr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,da,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,da,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new I,Eh=new rt,Th=new rt,ye=class extends gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,Th),e.subVectors(Th,Eh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Bl=class extends mr{constructor(){super(new ye(90,1,.5,500)),this.isPointLightShadow=!0}},vn=class extends ps{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ms=class extends gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kl=class extends mr{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_r=class extends ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new kl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},xr=class extends ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ki=-90,Ji=1,Ja=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(Ki,Ji,t,e);s.layers=this.layers,this.add(s);let r=new ye(Ki,Ji,t,e);r.layers=this.layers,this.add(r);let a=new ye(Ki,Ji,t,e);a.layers=this.layers,this.add(a);let o=new ye(Ki,Ji,t,e);o.layers=this.layers,this.add(o);let c=new ye(Ki,Ji,t,e);c.layers=this.layers,this.add(c);let l=new ye(Ki,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qa=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var pc="\\[\\]\\.:\\/",Nf=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",Uf="[^"+pc.replace("\\.","")+"]",Df=/((?:WC+[\/:])*)/.source.replace("WC",mc),Ff=/(WCOD+)?/.source.replace("WCOD",Uf),qf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),Bf=new RegExp("^"+Df+Ff+qf+Of+"$"),kf=["material","materials","bones","map"],zl=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(t){let e=Bf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=zl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K1=new Float32Array(1);var Mc=class Mc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Mc.prototype.isMatrix2=!0;var Gl=Mc,wh=new rt,ja=class{constructor(t=new rt(1/0,1/0),e=new rt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wh).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var vr=class{constructor(){this.type="ShapePath",this.color=new Ht,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Yn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,a){return this.currentPath.bezierCurveTo(t,e,n,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(c,l){let h=!1,d=l.length;for(let u=0,f=d-1;u<d;f=u++){let g=l[u],v=l[f];g.y>c.y!=v.y>c.y&&c.x<(v.x-g.x)*(c.y-g.y)/(v.y-g.y)+g.x&&(h=!h)}return h}function e(c,l){let h=l.getCenter(new rt);if(t(h,c))return h;let d=h.y,u=[],f=c.length;for(let g=0;g<f;g++){let v=c[g],m=c[(g+1)%f];if(v.y>d!=m.y>d){let p=v.x+(d-v.y)*(m.x-v.x)/(m.y-v.y);u.push(p)}}return u.length>1&&(u.sort((g,v)=>g-v),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ft('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(c=>c!==0):(c=>(c&1)!==0),r=[];for(let c of this.subPaths){let l=c.getPoints();if(l.length<3)continue;let h=si.area(l);if(h===0)continue;let d=new ja;for(let u=0;u<l.length;u++)d.expandByPoint(l[u]);r.push({subPath:c,points:l,boundingBox:d,interiorPoint:e(l,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((c,l)=>l.absArea-c.absArea);for(let c=0;c<r.length;c++){let l=r[c],h=0;for(let d=c-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(l.boundingBox)&&t(l.interiorPoint,u.points)){l.container=u.exclude?u.container:u,h=u.winding,l.winding+=h;break}}s(l.winding)===s(h)&&(l.exclude=!0)}for(let c of r)c.exclude||(c.role=c.container===null||c.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let c of r){if(c.exclude||c.role!=="outer")continue;let l=new gn;l.curves=c.subPath.curves,a.push(l),o.set(c,l)}for(let c of r){if(c.exclude||c.role!=="hole")continue;let l=o.get(c.container);if(!l)continue;let h=new Yn;h.curves=c.subPath.curves,l.holes.push(h)}return a}};function gc(i,t,e,n){let s=zf(n);switch(e){case ac:return i*t;case lo:return i*t/s.components*s.byteLength;case co:return i*t/s.components*s.byteLength;case pi:return i*t*2/s.components*s.byteLength;case ho:return i*t*2/s.components*s.byteLength;case oc:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case uo:return i*t*4/s.components*s.byteLength;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:case go:return Math.max(i,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(t,8)/2;case _o:case xo:case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:case Rr:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ko:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cr:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zf(i){switch(i){case $e:case nc:return{byteLength:1,components:1};case xs:case ic:case Sn:return{byteLength:2,components:1};case ao:case oo:return{byteLength:2,components:4};case Mn:case ro:case rn:return{byteLength:4,components:1};case sc:case rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ku(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hf(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,c0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:Yf,alphatest_fragment:$f,alphatest_pars_fragment:Zf,aomap_fragment:Kf,aomap_pars_fragment:Jf,batching_pars_vertex:Qf,batching_vertex:jf,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:ap,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Fp,envmap_vertex:wp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:Dp,lights_toon_fragment:qp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:zp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Wp,lightprobes_pars_fragment:Xp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Kp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:jp,map_particle_pars_fragment:tm,metalnessmap_fragment:em,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:lm,normal_fragment_maps:cm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:ym,project_vertex:Mm,dithering_fragment:Sm,dithering_pars_fragment:bm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Im,skinning_pars_vertex:Pm,skinning_vertex:Lm,skinnormal_vertex:Nm,specularmap_fragment:Um,specularmap_pars_fragment:Dm,tonemapping_fragment:Fm,tonemapping_pars_fragment:qm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:km,uv_pars_vertex:zm,uv_vertex:Gm,worldpos_vertex:Hm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:Zm,depth_vert:Km,depth_frag:Jm,distance_vert:Qm,distance_frag:jm,equirect_vert:t0,equirect_frag:e0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:s0,meshbasic_frag:r0,meshlambert_vert:a0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:h0,meshnormal_frag:u0,meshphong_vert:d0,meshphong_frag:f0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:x0,points_frag:v0,shadow_vert:y0,shadow_frag:M0,sprite_vert:S0,sprite_frag:b0},xt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Fn={basic:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:He([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:He([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:He([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:He([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:He([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:He([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:He([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:He([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:He([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:He([xt.lights,xt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Fn.physical={uniforms:He([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Wo={r:0,b:0,g:0},E0=new ue,zu=new Vt;zu.set(-1,0,0,0,1,0,0,0,1);function T0(i,t,e,n,s,r){let a=new Ht(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let y=S.backgroundBlurriness>0;w=t.get(w,y)}return w}function g(S){let w=!1,y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===Sr)?(l===void 0&&(l=new bt(new be(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Ai(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zu),l.material.toneMapped=te.getTransfer(y.colorSpace)!==ae,(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new bt(new hr(2,2),new je({name:"BackgroundMaterial",uniforms:Ai(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(Wo,fc(i)),e.buffers.color.setClear(Wo.r,Wo.g,Wo.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:p}}function w0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,D,G,N,O){let X=!1,W=d(L,N,G,D);r!==W&&(r=W,l(r.object)),X=f(L,N,G,O),X&&g(L,N,G,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(L,D,G,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,D,G,N){let O=N.wireframe===!0,X=n[D.id];X===void 0&&(X={},n[D.id]=X);let W=L.isInstancedMesh===!0?L.id:0,Y=X[W];Y===void 0&&(Y={},X[W]=Y);let B=Y[G.id];B===void 0&&(B={},Y[G.id]=B);let J=B[O];return J===void 0&&(J=u(c()),B[O]=J),J}function u(L){let D=[],G=[],N=[];for(let O=0;O<e;O++)D[O]=0,G[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,D,G,N){let O=r.attributes,X=D.attributes,W=0,Y=G.getAttributes();for(let B in Y)if(Y[B].location>=0){let j=O[B],gt=X[B];if(gt===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor)),j===void 0||j.attribute!==gt||gt&&j.data!==gt.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(L,D,G,N){let O={},X=D.attributes,W=0,Y=G.getAttributes();for(let B in Y)if(Y[B].location>=0){let j=X[B];j===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));let gt={};gt.attribute=j,j&&j.data&&(gt.data=j.data),O[B]=gt,W++}r.attributes=O,r.attributesNum=W,r.index=N}function v(){let L=r.newAttributes;for(let D=0,G=L.length;D<G;D++)L[D]=0}function m(L){p(L,0)}function p(L,D){let G=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;G[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),O[L]!==D&&(i.vertexAttribDivisor(L,D),O[L]=D)}function S(){let L=r.newAttributes,D=r.enabledAttributes;for(let G=0,N=D.length;G<N;G++)D[G]!==L[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function w(L,D,G,N,O,X,W){W===!0?i.vertexAttribIPointer(L,D,G,O,X):i.vertexAttribPointer(L,D,G,N,O,X)}function y(L,D,G,N){v();let O=N.attributes,X=G.getAttributes(),W=D.defaultAttributeValues;for(let Y in X){let B=X[Y];if(B.location>=0){let J=O[Y];if(J===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let j=J.normalized,gt=J.itemSize,Mt=t.get(J);if(Mt===void 0)continue;let jt=Mt.buffer,Yt=Mt.type,Et=Mt.bytesPerElement,$=Yt===i.INT||Yt===i.UNSIGNED_INT||J.gpuType===ro;if(J.isInterleavedBufferAttribute){let Q=J.data,mt=Q.stride,kt=J.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<B.locationSize;Tt++)p(B.location+Tt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<B.locationSize;Tt++)m(B.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Tt=0;Tt<B.locationSize;Tt++)w(B.location+Tt,gt/B.locationSize,Yt,j,mt*Et,(kt+gt/B.locationSize*Tt)*Et,$)}else{if(J.isInstancedBufferAttribute){for(let Q=0;Q<B.locationSize;Q++)p(B.location+Q,J.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<B.locationSize;Q++)m(B.location+Q);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Q=0;Q<B.locationSize;Q++)w(B.location+Q,gt/B.locationSize,Yt,j,gt*Et,gt/B.locationSize*Q*Et,$)}}else if(W!==void 0){let j=W[Y];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(B.location,j);break;case 3:i.vertexAttrib3fv(B.location,j);break;case 4:i.vertexAttrib4fv(B.location,j);break;default:i.vertexAttrib1fv(B.location,j)}}}}S()}function E(){T();for(let L in n){let D=n[L];for(let G in D){let N=D[G];for(let O in N){let X=N[O];for(let W in X)h(X[W].object),delete X[W];delete N[O]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let G in D){let N=D[G];for(let O in N){let X=N[O];for(let W in X)h(X[W].object),delete X[W];delete N[O]}}delete n[L.id]}function C(L){for(let D in n){let G=n[D];for(let N in G){let O=G[N];if(O[L.id]===void 0)continue;let X=O[L.id];for(let W in X)h(X[W].object),delete X[W];delete O[L.id]}}}function x(L){for(let D in n){let G=n[D],N=L.isInstancedMesh===!0?L.id:0,O=G[N];if(O!==void 0){for(let X in O){let W=O[X];for(let Y in W)h(W[Y].object),delete W[Y];delete O[X]}delete G[N],Object.keys(G).length===0&&delete n[D]}}}function T(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function A0(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function R0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==$e&&C!==rn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ft("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:E,samples:b}}function C0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,w=S*4,y=p.clippingState||null;c.value=y,y=h(g,u,w,f);for(let E=0;E!==w;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==v;++w,y+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ms=4,I0=6,P0=20,L0=256,Pr=new ms,vu=new Ht,Sc=null,bc=0,Ec=0,Tc=!1,N0=new I,Ri=new I,bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=N0}=r;Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,bc,Ec),this._renderer.xr.enabled=Tc,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Sn,format:an,colorSpace:Hs,depthBuffer:!1},s=yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=U0(r)),this._blurMaterial=F0(r,t,e),this._ggxMaterial=D0(r,t,e)}return s}_compileMaterial(t){let e=new bt(new Ue,t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,s,r){let c=new ye(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(vu),d.toneMapping=yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new be,new Si({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(vu),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;ys(s,y*E,w>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ui||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Pr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Ms?n-g+Ms:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ys(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Pr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ys(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Pr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Ms?s-this._lodMax+Ms:0),u=4*(this._cubeSize-h);ys(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,Pr)}};function U0(i){let t=[],e=[],n=i,s=i-Ms+1+I0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,w=p>2?0:-1,y=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(y,f*u*p);for(let E=0;E<u;E++){let b=h[E*2]*2-1,C=h[E*2+1]*2-1;p===0?Ri.set(1,C,b):p===1?Ri.set(-b,1,-C):p===2?Ri.set(-b,C,1):p===3?Ri.set(-1,C,-b):p===4?Ri.set(-b,-1,C):Ri.set(b,C,-1),Ri.toArray(v,(p*u+E)*f)}}let m=new Ue;m.setAttribute("position",new ze(g,f)),m.setAttribute("outputDirection",new ze(v,f)),e.push(new bt(m,null)),n>Ms&&n--}return{lodMeshes:e,sizeLods:t}}function yu(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function D0(i,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function F0(i,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:P0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Mu(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Su(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yo=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new be(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Un});r.uniforms.tEquirect.value=e;let a=new bt(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=Ne),new Ja(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function q0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===no||f===io)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Yo(g.height);return v.fromEquirectangularTexture(i,u),t.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===no||f===io,v=f===ui||f===wi;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new bs(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||v&&S&&c(S)?(n===null&&(n=new bs(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===no?u.mapping=ui:f===io&&(u.mapping=wi),u}function c(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function O0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&yi("WebGLRenderer: "+n+" extension not supported."),s}}}function B0(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let w=0,y=S.length;w<y;w+=3){let E=S[w+0],b=S[w+1],C=S[w+2];u.push(E,b,b,C,C,E)}}else{let S=g.array;v=g.version;for(let w=0,y=S.length/3-1;w<y;w+=3){let E=w+0,b=w+1,C=w+2;u.push(E,b,b,C,C,E)}}let m=new(g.count>=65535?Zs:$s)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function k0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function z0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function G0(i,t,e){let n=new WeakMap,s=new ve;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let y=o.attributes.position.count*w,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*E*4*d),C=new Xs(b,y,E,d);C.type=rn,C.needsUpdate=!0;let x=w*4;for(let R=0;R<d;R++){let L=m[R],D=p[R],G=S[R],N=y*E*4*R;for(let O=0;O<L.count;O++){let X=O*x;f===!0&&(s.fromBufferAttribute(L,O),b[N+X+0]=s.x,b[N+X+1]=s.y,b[N+X+2]=s.z,b[N+X+3]=0),g===!0&&(s.fromBufferAttribute(D,O),b[N+X+4]=s.x,b[N+X+5]=s.y,b[N+X+6]=s.z,b[N+X+7]=0),v===!0&&(s.fromBufferAttribute(G,O),b[N+X+8]=s.x,b[N+X+9]=s.y,b[N+X+10]=s.z,b[N+X+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new rt(y,E)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function H0(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var V0={[Zl]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Ql]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[Mr]:"NEUTRAL_TONE_MAPPING",[jl]:"CUSTOM_TONE_MAPPING"};function W0(i,t,e,n,s,r){let a=new Ye(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ue;l.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new Oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new bt(l,h),u=new ms(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,S=[],w=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),c!==null&&c.setSize(y,E);for(let b=0;b<S.length;b++){let C=S[b];C.setSize&&C.setSize(y,E)}},this.setEffects=function(y){S=y,w=S.length>0&&S[0].isRenderPass===!0;let E=a.width,b=a.height;S.length>0&&o===null&&(o=new Ye(E,b,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),c=new Ye(E,b,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let x=S[C];x.setSize&&x.setSize(E,b)}},this.begin=function(y,E){if(v||y.toneMapping===yn&&S.length===0)return!1;if(p=E,E!==null){let b=E.width,C=E.height;(a.width!==b||a.height!==C)&&this.setSize(b,C)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=yn,!0},this.hasRenderPass=function(){return w},this.end=function(y,E){y.toneMapping=m,v=!0;let b=a,C=o;for(let x=0;x<S.length;x++){let T=S[x];T.enabled!==!1&&(T.render(y,C,b,E),T.needsSwap!==!1&&(b=C,C=C===o?c:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},te.getTransfer(f)===ae&&(h.defines.SRGB_TRANSFER="");let x=V0[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Gu=new Ge,Rc=new ai(1,1),Hu=new Xs,Vu=new Aa,Wu=new tr,bu=[],Eu=[],Tu=new Float32Array(16),wu=new Float32Array(9),Au=new Float32Array(4);function Es(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bu[s];if(r===void 0&&(r=new Float32Array(s),bu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ko(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function X0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function K0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Ae(e,n)}}function J0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),Ae(e,n)}}function Q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Tu.set(n),i.uniformMatrix4fv(this.addr,!1,Tu),Ae(e,n)}}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=e.isReversedDepthBuffer()?Vo:Ho,r=Rc):r=Gu,e.setTexture2D(t||r,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wu,s)}function hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function ug(i){switch(i){case 5126:return X0;case 35664:return Y0;case 35665:return $0;case 35666:return Z0;case 35674:return K0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return j0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(i,t){i.uniform1fv(this.addr,t)}function fg(i,t){let e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function pg(i,t){let e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function mg(i,t){let e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function gg(i,t){let e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _g(i,t){let e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xg(i,t){let e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vg(i,t){i.uniform1iv(this.addr,t)}function yg(i,t){i.uniform2iv(this.addr,t)}function Mg(i,t){i.uniform3iv(this.addr,t)}function Sg(i,t){i.uniform4iv(this.addr,t)}function bg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function Tg(i,t){i.uniform3uiv(this.addr,t)}function wg(i,t){i.uniform4uiv(this.addr,t)}function Ag(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rc:a=Gu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Rg(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vu,r[a])}function Cg(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wu,r[a])}function Ig(i,t,e){let n=this.cache,s=t.length,r=Ko(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hu,r[a])}function Pg(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Ig}}var Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}},Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pg(e.type)}},Pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},wc=/(\w+)(\])?(\[|\.)?/g;function Ru(i,t){i.seq.push(t),i.map[t.id]=t}function Lg(i,t,e){let n=i.name,s=n.length;for(wc.lastIndex=0;;){let r=wc.exec(n),a=wc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Ru(e,l===void 0?new Cc(o,i,t):new Ic(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Pc(o),Ru(e,d)),e=d}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Lg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ng=37297,Ug=0;function Dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Iu=new Vt;function Fg(i){te._getMatrix(Iu,te.workingColorSpace,i);let t=`mat3( ${Iu.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Vs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dg(i.getShaderSource(t),o)}else return r}function qg(i,t){let e=Fg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Og={[Zl]:"Linear",[Kl]:"Reinhard",[Jl]:"Cineon",[Ql]:"ACESFilmic",[tc]:"AgX",[Mr]:"Neutral",[jl]:"Custom"};function Bg(i,t){let e=Og[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xo=new I;function kg(){te.getLuminanceCoefficients(Xo);let i=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Gg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Nr(i){return i!==""}function Lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace(Vg,Xg)}var Wg=new Map;function Xg(i,t){let e=Zt[t];if(e===void 0){let n=Wg.get(t);if(n!==void 0)e=Zt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lc(e)}var Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(Yg,$g)}function $g(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Zg={[yr]:"SHADOWMAP_TYPE_PCF",[gs]:"SHADOWMAP_TYPE_VSM"};function Kg(i){return Zg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jg={[ui]:"ENVMAP_TYPE_CUBE",[wi]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE_UV"};function Qg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Jg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var jg={[wi]:"ENVMAP_MODE_REFRACTION"};function t1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var e1={[eo]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function n1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":e1[i.combine]||"ENVMAP_BLENDING_NONE"}function i1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function s1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Kg(e),l=Qg(e),h=t1(e),d=n1(e),u=i1(e),f=zg(e),g=Gg(r),v=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Lc(a),a=Lu(a,e),a=Nu(a,e),o=Lc(o),o=Lu(o,e),o=Nu(o,e),a=Uu(a),o=Uu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=S+m+a,y=S+p+o,E=Cu(s,s.VERTEX_SHADER,w),b=Cu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,E),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(E)||"",N=s.getShaderInfoLog(b)||"",O=D.trim(),X=G.trim(),W=N.trim(),Y=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,E,b);else{let J=Pu(s,E,"vertex"),j=Pu(s,b,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+J+`
`+j)}else O!==""?Ft("WebGLProgram: Program Info Log:",O):(X===""||W==="")&&(B=!1);B&&(L.diagnostics={runnable:Y,programLog:O,vertexShader:{log:X,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(E),s.deleteShader(b),x=new Ss(s,v),T=Hg(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,Ng)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}var r1=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uc(t),e.set(t,n)),n}},Uc=class{constructor(t){this.id=r1++,this.code=t,this.usedTimes=0}};function a1(i){return i===pi||i===Rr||i===Cr}function o1(i,t,e,n,s,r){let a=new Ys,o=new Nc,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function v(x,T,R,L,D,G){let N=L.fog,O=D.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||X,W),B=Y&&Y.mapping===Sr?Y.image.height:null,J=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,gt=j!==void 0?j.length:0,Mt=0;O.morphAttributes.position!==void 0&&(Mt=1),O.morphAttributes.normal!==void 0&&(Mt=2),O.morphAttributes.color!==void 0&&(Mt=3);let jt,Yt,Et,$;if(J){let me=Fn[J];jt=me.vertexShader,Yt=me.fragmentShader}else{jt=x.vertexShader,Yt=x.fragmentShader;let me=o.getVertexShaderStage(x),ie=o.getFragmentShaderStage(x);o.update(x,me,ie),Et=me.id,$=ie.id}let Q=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,Tt=D.isBatchedMesh===!0,zt=!!x.map,oe=!!x.matcap,nt=!!Y,st=!!x.aoMap,at=!!x.lightMap,ot=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,qt=!!x.displacementMap,Dt=!!x.emissiveMap,Gt=!!x.metalnessMap,Wt=!!x.roughnessMap,P=x.anisotropy>0,ne=x.clearcoat>0,Jt=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,q=x.sheen>0,H=x.transmission>0,Z=P&&!!x.anisotropyMap,lt=ne&&!!x.clearcoatMap,ct=ne&&!!x.clearcoatNormalMap,K=ne&&!!x.clearcoatRoughnessMap,et=_&&!!x.iridescenceMap,ut=_&&!!x.iridescenceThicknessMap,Lt=q&&!!x.sheenColorMap,_t=q&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Nt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,Xt=H&&!!x.transmissionMap,F=H&&!!x.thicknessMap,ft=!!x.gradientMap,tt=!!x.alphaMap,pt=x.alphaTest>0,St=!!x.alphaHash,it=!!x.extensions,Ut=yn;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=i.toneMapping);let It={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:jt,fragmentShader:Yt,defines:x.defines,customVertexShaderID:Et,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:oe,envMap:nt,envMapMode:nt&&Y.mapping,envMapCubeUVHeight:B,aoMap:st,lightMap:at,bumpMap:ot,normalMap:ht,displacementMap:qt,emissiveMap:Dt,normalMapObjectSpace:ht&&x.normalMapType===Qh,normalMapTangentSpace:ht&&x.normalMapType===Ir,packedNormalMap:ht&&x.normalMapType===Ir&&a1(x.normalMap.format),metalnessMap:Gt,roughnessMap:Wt,anisotropy:P,anisotropyMap:Z,clearcoat:ne,clearcoatMap:lt,clearcoatNormalMap:ct,clearcoatRoughnessMap:K,dispersion:Jt,retroreflection:A,iridescence:_,iridescenceMap:et,iridescenceThicknessMap:ut,sheen:q,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:dt,specularColorMap:Nt,specularIntensityMap:Ot,transmission:H,transmissionMap:Xt,thicknessMap:F,gradientMap:ft,opaque:x.transparent===!1&&x.blending===_s&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:St,combine:x.combine,mapUv:zt&&g(x.map.channel),aoMapUv:st&&g(x.aoMap.channel),lightMapUv:at&&g(x.lightMap.channel),bumpMapUv:ot&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:qt&&g(x.displacementMap.channel),emissiveMapUv:Dt&&g(x.emissiveMap.channel),metalnessMapUv:Gt&&g(x.metalnessMap.channel),roughnessMapUv:Wt&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:lt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(x.sheenRoughnessMap.channel),specularMapUv:dt&&g(x.specularMap.channel),specularColorMapUv:Nt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ot&&g(x.specularIntensityMap.channel),transmissionMapUv:Xt&&g(x.transmissionMap.channel),thicknessMapUv:F&&g(x.thicknessMap.channel),alphaMapUv:tt&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ht||P),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(zt||tt),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:mt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===Fe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let T=f[x.type],R;if(T){let L=Fn[T];R=gu.clone(L.uniforms)}else R=x.uniforms;return R}function y(x,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new s1(i,T,x,s),l.push(R),h.set(T,R)),R}function E(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:C}}function l1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function c(u,f,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);let w=o(u,f,g,v,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function l(u,f,g,v,m,p){let S=o(u,f,g,v,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||c1),n.length>1&&n.sort(f||Fu),s.length>1&&s.sort(f||Fu)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function h1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qu,i.set(n,[a])):s>=r.length?(a=new qu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function u1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Ht};break;case"SpotLight":e={position:new I,direction:new I,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function d1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var f1=0;function p1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function m1(i){let t=new u1,e=d1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new ue,a=new ue;function o(l){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,w=0,y=0,E=0,b=0,C=0,x=0,T=0,R=0;l.sort(p1);for(let D=0,G=l.length;D<G;D++){let N=l[D],O=N.color,X=N.intensity,W=N.distance,Y=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===pi?Y=N.shadow.map.texture:Y=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*X,d+=O.g*X,u+=O.b*X;else if(N.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(N.sh.coefficients[B],X);R++}else if(N.isSunLight){let B=t.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=Y;let gt=J.getViewportCount();for(let Mt=0;Mt<gt;Mt++)n.sunShadowMatrix[v+Mt]=J.getMatrix(Mt),n.sunShadowCascade[v+Mt]=J._cascadeData[Mt];v+=gt,g++}n.sun[f]=B,f++}else if(N.isDirectionalLight){let B=t.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=N.shadow.matrix,E++}n.directional[m]=B,m++}else if(N.isSpotLight){let B=t.get(N);B.position.setFromMatrixPosition(N.matrixWorld),B.color.copy(O).multiplyScalar(X),B.distance=W,B.coneCos=Math.cos(N.angle),B.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),B.decay=N.decay,n.spot[S]=B;let J=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,J.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[S]=J.matrix,N.castShadow){let j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=Y,C++}S++}else if(N.isRectAreaLight){let B=t.get(N);B.color.copy(O).multiplyScalar(X),B.halfWidth.set(N.width*.5,0,0),B.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=B,w++}else if(N.isPointLight){let B=t.get(N);if(B.color.copy(N.color).multiplyScalar(N.intensity),B.distance=N.distance,B.decay=N.decay,N.castShadow){let J=N.shadow,j=e.get(N);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=N.shadow.matrix,b++}n.point[p]=B,p++}else if(N.isHemisphereLight){let B=t.get(N);B.skyColor.copy(N.color).multiplyScalar(X),B.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[y]=B,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==w||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==C||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=w,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=C,L.numSpotMaps=x,L.numLightProbes=R,n.version=f1++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){let y=l[S];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Ou(i){let t=new m1(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function g1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ou(i),t.set(s,[o])):r>=a.length?(o=new Ou(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],y1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Bu=new ue,Lr=new I,Ac=new I;function M1(i,t,e){let n=new ls,s=new rt,r=new rt,a=new ve,o=new Ba,c=new ka,l={},h=e.maxTextureSize,d={[hi]:Fe,[Fe]:hi,[sn]:sn},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:_1,fragmentShader:x1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new bt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yr;let p=this.type;this.render=function(b,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ch&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yr);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let G=p!==this.type;G&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=b.length;N<O;N++){let X=b[N],W=X.shadow;if(W===void 0){Ft("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let Y=W.getFrameExtents();s.multiply(Y),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,W.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=B,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===gs){if(X.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ye(s.x,s.y,{format:pi,type:Sn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new ai(s.x,s.y,rn),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=Rn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ie,W.map.depthTexture.magFilter=Ie}else X.isPointLight?(W.map=new Yo(s.x),W.map.depthTexture=new Ia(s.x,Mn)):(W.map=new Ye(s.x,s.y),W.map.depthTexture=new ai(s.x,s.y,Mn)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=Rn,this.type===yr?(W.map.depthTexture.compareFunction=B?Vo:Ho,W.map.depthTexture.minFilter=Ne,W.map.depthTexture.magFilter=Ne):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ie,W.map.depthTexture.magFilter=Ie);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,x);for(let j=0;j<J;j++){let gt=W.getCamera(j);if(X.isPointLight){let Mt=W.camera,jt=W.matrix,Yt=X.distance||Mt.far;Yt!==Mt.far&&(Mt.far=Yt,Mt.updateProjectionMatrix()),Lr.setFromMatrixPosition(X.matrixWorld),Mt.position.copy(Lr),Ac.copy(Mt.position),Ac.add(v1[j]),Mt.up.copy(y1[j]),Mt.lookAt(Ac),Mt.updateMatrixWorld(),jt.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Bu.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Bu,Mt.coordinateSystem,Mt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,j),i.clear();else{j===0&&(i.setRenderTarget(W.map),i.clear());let Mt=W.getViewport(j);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),D.viewport(a)}n=W.getFrustum(j),y(C,x,gt,X,this.type)}W.isPointLightShadow!==!0&&this.type===gs&&S(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,L)};function S(b,C){let x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ye(s.x,s.y,{format:pi,type:Sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,x,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,x,f,v,null)}function w(b,C,x,T){let R=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let D=R.uuid,G=C.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let O=N[G];O===void 0&&(O=R.clone(),N[G]=O,C.addEventListener("dispose",E)),R=O}if(R.visible=C.visible,R.wireframe=C.wireframe,T===gs?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=x}return R}function y(b,C,x,T,R){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===gs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let G=t.update(b),N=b.material;if(Array.isArray(N)){let O=G.groups;for(let X=0,W=O.length;X<W;X++){let Y=O[X],B=N[Y.materialIndex];if(B&&B.visible){let J=w(b,B,T,R);b.onBeforeShadow(i,b,C,x,G,J,Y),i.renderBufferDirect(x,null,G,J,b,Y),b.onAfterShadow(i,b,C,x,G,J,Y)}}}else if(N.visible){let O=w(b,N,T,R);b.onBeforeShadow(i,b,C,x,G,O,null),i.renderBufferDirect(x,null,G,O,b,null),b.onAfterShadow(i,b,C,x,G,O,null)}}let D=b.children;for(let G=0,N=D.length;G<N;G++)y(D[G],C,x,T,R)}function E(b){b.target.removeEventListener("dispose",E);for(let x in l){let T=l[x],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function S1(i,t){function e(){let F=!1,ft=new ve,tt=null,pt=new ve(0,0,0,0);return{setMask:function(St){tt!==St&&!F&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){F=St},setClear:function(St,it,Ut,It,me){me===!0&&(St*=It,it*=It,Ut*=It),ft.set(St,it,Ut,It),pt.equals(ft)===!1&&(i.clearColor(St,it,Ut,It),pt.copy(ft))},reset:function(){F=!1,tt=null,pt.set(-1,0,0,0)}}}function n(){let F=!1,ft=!1,tt=null,pt=null,St=null;return{setReversed:function(it){if(ft!==it){let Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ft=it;let It=St;St=null,this.setClear(It)}},getReversed:function(){return ft},setTest:function(it){it?Q(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(it){tt!==it&&!F&&(i.depthMask(it),tt=it)},setFunc:function(it){if(ft&&(it=cu[it]),pt!==it){switch(it){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case _a:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case Ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=it}},setLocked:function(it){F=it},setClear:function(it){St!==it&&(St=it,ft&&(it=1-it),i.clearDepth(it))},reset:function(){F=!1,tt=null,pt=null,St=null,ft=!1}}}function s(){let F=!1,ft=null,tt=null,pt=null,St=null,it=null,Ut=null,It=null,me=null;return{setTest:function(ie){F||(ie?Q(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ie){ft!==ie&&!F&&(i.stencilMask(ie),ft=ie)},setFunc:function(ie,cn,bn){(tt!==ie||pt!==cn||St!==bn)&&(i.stencilFunc(ie,cn,bn),tt=ie,pt=cn,St=bn)},setOp:function(ie,cn,bn){(it!==ie||Ut!==cn||It!==bn)&&(i.stencilOp(ie,cn,bn),it=ie,Ut=cn,It=bn)},setLocked:function(ie){F=ie},setClear:function(ie){me!==ie&&(i.clearStencil(ie),me=ie)},reset:function(){F=!1,ft=null,tt=null,pt=null,St=null,it=null,Ut=null,It=null,me=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,w=null,y=null,E=null,b=null,C=null,x=new Ht(0,0,0),T=0,R=!1,L=null,D=null,G=null,N=null,O=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Y=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=Y>=2);let J=null,j={},gt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),jt=new ve().fromArray(gt),Yt=new ve().fromArray(Mt);function Et(F,ft,tt,pt){let St=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<tt;Ut++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(ft+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return it}let $={};$[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ts),ot(!1),ht(Hl),Q(i.CULL_FACE),st(Un);function Q(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function mt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function kt(F,ft){return u[F]!==ft?(i.bindFramebuffer(F,ft),u[F]=ft,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Tt(F,ft){let tt=g,pt=!1;if(F){tt=f.get(ft),tt===void 0&&(tt=[],f.set(ft,tt));let St=F.textures;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ut=St.length;it<Ut;it++)tt[it]=i.COLOR_ATTACHMENT0+it;tt.length=St.length,pt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,pt=!0);pt&&i.drawBuffers(tt)}function zt(F){return v!==F?(i.useProgram(F),v=F,!0):!1}let oe={[Ti]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};oe[Nh]=i.MIN,oe[Uh]=i.MAX;let nt={[Dh]:i.ZERO,[Fh]:i.ONE,[qh]:i.SRC_COLOR,[Yl]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Bh]:i.DST_ALPHA,[Oh]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[Gh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Vh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function st(F,ft,tt,pt,St,it,Ut,It,me,ie){if(F===Un){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),F!==Ih){if(F!==p||ie!==R){if((S!==Ti||E!==Ti)&&(i.blendEquation(i.FUNC_ADD),S=Ti,E=Ti),ie)switch(F){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",F);break}else switch(F){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",F);break}w=null,y=null,b=null,C=null,x.set(0,0,0),T=0,p=F,R=ie}return}St=St||ft,it=it||tt,Ut=Ut||pt,(ft!==S||St!==E)&&(i.blendEquationSeparate(oe[ft],oe[St]),S=ft,E=St),(tt!==w||pt!==y||it!==b||Ut!==C)&&(i.blendFuncSeparate(nt[tt],nt[pt],nt[it],nt[Ut]),w=tt,y=pt,b=it,C=Ut),(It.equals(x)===!1||me!==T)&&(i.blendColor(It.r,It.g,It.b,me),x.copy(It),T=me),p=F,R=!1}function at(F,ft){F.side===sn?mt(i.CULL_FACE):Q(i.CULL_FACE);let tt=F.side===Fe;ft&&(tt=!tt),ot(tt),F.blending===_s&&F.transparent===!1?st(Un):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let pt=F.stencilWrite;o.setTest(pt),pt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){L!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),L=F)}function ht(F){F!==Ah?(Q(i.CULL_FACE),F!==D&&(F===Hl?i.cullFace(i.BACK):F===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),D=F}function qt(F){F!==G&&(W&&i.lineWidth(F),G=F)}function Dt(F,ft,tt){F?(Q(i.POLYGON_OFFSET_FILL),(N!==ft||O!==tt)&&(N=ft,O=tt,a.getReversed()&&(ft=-ft),i.polygonOffset(ft,tt))):mt(i.POLYGON_OFFSET_FILL)}function Gt(F){F?Q(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function Wt(F){F===void 0&&(F=i.TEXTURE0+X-1),J!==F&&(i.activeTexture(F),J=F)}function P(F,ft,tt){tt===void 0&&(J===null?tt=i.TEXTURE0+X-1:tt=J);let pt=j[tt];pt===void 0&&(pt={type:void 0,texture:void 0},j[tt]=pt),(pt.type!==F||pt.texture!==ft)&&(J!==tt&&(i.activeTexture(tt),J=tt),i.bindTexture(F,ft||$[F]),pt.type=F,pt.texture=ft)}function ne(){let F=j[J];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Jt(){try{i.compressedTexImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function _(){try{i.texSubImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function q(){try{i.texSubImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function lt(){try{i.texStorage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function ct(){try{i.texStorage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function K(){try{i.texImage2D(...arguments)}catch(F){Bt("WebGLState:",F)}}function et(){try{i.texImage3D(...arguments)}catch(F){Bt("WebGLState:",F)}}function ut(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Lt(F,ft){d[F]!==ft&&(i.pixelStorei(F,ft),d[F]=ft)}function _t(F){jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),jt.copy(F))}function dt(F){Yt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Yt.copy(F))}function Nt(F,ft){let tt=l.get(ft);tt===void 0&&(tt=new WeakMap,l.set(ft,tt));let pt=tt.get(F);pt===void 0&&(pt=i.getUniformBlockIndex(ft,F.name),tt.set(F,pt))}function Ot(F,ft){let pt=l.get(ft).get(F);c.get(ft)!==pt&&(i.uniformBlockBinding(ft,pt,F.__bindingPointIndex),c.set(ft,pt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,j={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,w=null,y=null,E=null,b=null,C=null,x=new Ht(0,0,0),T=0,R=!1,L=null,D=null,G=null,N=null,O=null,jt.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:mt,bindFramebuffer:kt,drawBuffers:Tt,useProgram:zt,setBlending:st,setMaterial:at,setFlipSided:ot,setCullFace:ht,setLineWidth:qt,setPolygonOffset:Dt,setScissorTest:Gt,activeTexture:Wt,bindTexture:P,unbindTexture:ne,compressedTexImage2D:Jt,compressedTexImage3D:A,texImage2D:K,texImage3D:et,pixelStorei:Lt,getParameter:ut,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:lt,texStorage3D:ct,texSubImage2D:_,texSubImage3D:q,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:_t,viewport:dt,reset:Xt}}function b1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return g?new OffscreenCanvas(A,_):ns("canvas")}function m(A,_,q){let H=1,Z=Jt(A);if((Z.width>q||Z.height>q)&&(H=q/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let lt=Math.floor(H*Z.width),ct=Math.floor(H*Z.height);u===void 0&&(u=v(lt,ct));let K=_?v(lt,ct):u;return K.width=lt,K.height=ct,K.getContext("2d").drawImage(A,0,0,lt,ct),Ft("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+lt+"x"+ct+")."),K}else return"data"in A&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,_,q,H,Z,lt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;H&&(ct=t.get("EXT_texture_norm16"),ct||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(q===i.FLOAT&&(K=i.R32F),q===i.HALF_FLOAT&&(K=i.R16F),q===i.UNSIGNED_BYTE&&(K=i.R8),q===i.UNSIGNED_SHORT&&ct&&(K=ct.R16_EXT),q===i.SHORT&&ct&&(K=ct.R16_SNORM_EXT)),_===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.R8UI),q===i.UNSIGNED_SHORT&&(K=i.R16UI),q===i.UNSIGNED_INT&&(K=i.R32UI),q===i.BYTE&&(K=i.R8I),q===i.SHORT&&(K=i.R16I),q===i.INT&&(K=i.R32I)),_===i.RG&&(q===i.FLOAT&&(K=i.RG32F),q===i.HALF_FLOAT&&(K=i.RG16F),q===i.UNSIGNED_BYTE&&(K=i.RG8),q===i.UNSIGNED_SHORT&&ct&&(K=ct.RG16_EXT),q===i.SHORT&&ct&&(K=ct.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RG8UI),q===i.UNSIGNED_SHORT&&(K=i.RG16UI),q===i.UNSIGNED_INT&&(K=i.RG32UI),q===i.BYTE&&(K=i.RG8I),q===i.SHORT&&(K=i.RG16I),q===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RGB8UI),q===i.UNSIGNED_SHORT&&(K=i.RGB16UI),q===i.UNSIGNED_INT&&(K=i.RGB32UI),q===i.BYTE&&(K=i.RGB8I),q===i.SHORT&&(K=i.RGB16I),q===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),q===i.UNSIGNED_INT&&(K=i.RGBA32UI),q===i.BYTE&&(K=i.RGBA8I),q===i.SHORT&&(K=i.RGBA16I),q===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(q===i.UNSIGNED_SHORT&&ct&&(K=ct.RGB16_EXT),q===i.SHORT&&ct&&(K=ct.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let et=lt?Vs:te.getTransfer(Z);q===i.FLOAT&&(K=i.RGBA32F),q===i.HALF_FLOAT&&(K=i.RGBA16F),q===i.UNSIGNED_BYTE&&(K=et===ae?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ct&&(K=ct.RGBA16_EXT),q===i.SHORT&&ct&&(K=ct.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(A,_){let q;return A?_===null||_===Mn||_===vs?q=i.DEPTH24_STENCIL8:_===rn?q=i.DEPTH32F_STENCIL8:_===xs&&(q=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Mn||_===vs?q=i.DEPTH_COMPONENT24:_===rn?q=i.DEPTH_COMPONENT32F:_===xs&&(q=i.DEPTH_COMPONENT16),q}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ie&&A.minFilter!==Ne?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){let _=A.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),L(_)}function T(A){let _=n.get(A);if(_.__webglInit===void 0)return;let q=A.source,H=f.get(q);if(H){let Z=H[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(A),Object.keys(H).length===0&&f.delete(q)}n.remove(A)}function R(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let q=A.source,H=f.get(q);delete H[_.__cacheKey],a.memory.textures--}function L(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Z=0;Z<_.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let q=A.textures;for(let H=0,Z=q.length;H<Z;H++){let lt=n.get(q[H]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(q[H])}n.remove(A)}let D=0;function G(){D=0}function N(){return D}function O(A){D=A}function X(){let A=D;return A>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,A}function W(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function Y(A,_){let q=n.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){let H=A.image;if(H===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(q,A,_);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+_)}function B(A,_){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){mt(q,A,_);return}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+_)}function J(A,_){let q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){mt(q,A,_);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+_)}function j(A,_){let q=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&q.__version!==A.version){kt(q,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+_)}let gt={[Sa]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},Mt={[Ie]:i.NEAREST,[Kh]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[so]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},jt={[tu]:i.NEVER,[ru]:i.ALWAYS,[eu]:i.LESS,[Ho]:i.LEQUAL,[nu]:i.EQUAL,[Vo]:i.GEQUAL,[iu]:i.GREATER,[su]:i.NOTEQUAL};function Yt(A,_){if(_.type===rn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ne||_.magFilter===so||_.magFilter===br||_.magFilter===di||_.minFilter===Ne||_.minFilter===so||_.minFilter===br||_.minFilter===di)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,gt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,gt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,gt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Mt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,jt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ie||_.minFilter!==br&&_.minFilter!==di||_.type===rn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Et(A,_){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));let H=_.source,Z=f.get(H);Z===void 0&&(Z={},f.set(H,Z));let lt=W(_);if(lt!==A.__cacheKey){Z[lt]===void 0&&(Z[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),Z[lt].usedTimes++;let ct=Z[A.__cacheKey];ct!==void 0&&(Z[A.__cacheKey].usedTimes--,ct.usedTimes===0&&R(_)),A.__cacheKey=lt,A.__webglTexture=Z[lt].texture}return q}function $(A,_,q){return Math.floor(Math.floor(A/q)/_)}function Q(A,_,q,H){let lt=A.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,q,H,_.data);else{lt.sort((Lt,_t)=>Lt.start-_t.start);let ct=0;for(let Lt=1;Lt<lt.length;Lt++){let _t=lt[ct],dt=lt[Lt],Nt=_t.start+_t.count,Ot=$(dt.start,_.width,4),Xt=$(_t.start,_.width,4);dt.start<=Nt+1&&Ot===Xt&&$(dt.start+dt.count-1,_.width,4)===Ot?_t.count=Math.max(_t.count,dt.start+dt.count-_t.start):(++ct,lt[ct]=dt)}lt.length=ct+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Lt=0,_t=lt.length;Lt<_t;Lt++){let dt=lt[Lt],Nt=Math.floor(dt.start/4),Ot=Math.ceil(dt.count/4),Xt=Nt%_.width,F=Math.floor(Nt/_.width),ft=Ot,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Xt,F,ft,tt,q,H,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function mt(A,_,q){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let Z=Et(A,_),lt=_.source;e.bindTexture(H,A.__webglTexture,i.TEXTURE0+q);let ct=n.get(lt);if(lt.version!==ct.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let tt=te.getPrimaries(te.workingColorSpace),pt=_.colorSpace===Zn?null:te.getPrimaries(_.colorSpace),St=_.colorSpace===Zn||tt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let et=m(_.image,!1,s.maxTextureSize);et=ne(_,et);let ut=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),_t=y(_.internalFormat,ut,Lt,_.normalized,_.colorSpace,_.isVideoTexture);Yt(H,_);let dt,Nt=_.mipmaps,Ot=_.isVideoTexture!==!0,Xt=ct.__version===void 0||Z===!0,F=lt.dataReady,ft=b(_,et);if(_.isDepthTexture)_t=E(_.format===fi,_.type),Xt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,_t,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,ut,Lt,null));else if(_.isDataTexture)if(Nt.length>0){Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,ft,_t,Nt[0].width,Nt[0].height);for(let tt=0,pt=Nt.length;tt<pt;tt++)dt=Nt[tt],Ot?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,tt,_t,dt.width,dt.height,0,ut,Lt,dt.data);_.generateMipmaps=!1}else Ot?(Xt&&e.texStorage2D(i.TEXTURE_2D,ft,_t,et.width,et.height),F&&Q(_,et,ut,Lt)):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,ut,Lt,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,_t,Nt[0].width,Nt[0].height,et.depth);for(let tt=0,pt=Nt.length;tt<pt;tt++)if(dt=Nt[tt],_.format!==an)if(ut!==null)if(Ot){if(F)if(_.layerUpdates.size>0){let St=gc(dt.width,dt.height,_.format,_.type);for(let it of _.layerUpdates){let Ut=dt.data.subarray(it*St/dt.data.BYTES_PER_ELEMENT,(it+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,it,dt.width,dt.height,1,ut,Ut)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,et.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,_t,dt.width,dt.height,et.depth,0,dt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,dt.width,dt.height,et.depth,ut,Lt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,_t,dt.width,dt.height,et.depth,0,ut,Lt,dt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,ft,_t,Nt[0].width,Nt[0].height);for(let tt=0,pt=Nt.length;tt<pt;tt++)dt=Nt[tt],_.format!==an?ut!==null?Ot?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,_t,dt.width,dt.height,0,dt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,dt.width,dt.height,ut,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,tt,_t,dt.width,dt.height,0,ut,Lt,dt.data)}else if(_.isDataArrayTexture)if(Ot){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,_t,et.width,et.height,et.depth),F)if(_.layerUpdates.size>0){let tt=gc(et.width,et.height,_.format,_.type);for(let pt of _.layerUpdates){let St=et.data.subarray(pt*tt/et.data.BYTES_PER_ELEMENT,(pt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,et.width,et.height,1,ut,Lt,St)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,et.width,et.height,et.depth,0,ut,Lt,et.data);else if(_.isData3DTexture)Ot?(Xt&&e.texStorage3D(i.TEXTURE_3D,ft,_t,et.width,et.height,et.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,_t,et.width,et.height,et.depth,0,ut,Lt,et.data);else if(_.isFramebufferTexture){if(Xt)if(Ot)e.texStorage2D(i.TEXTURE_2D,ft,_t,et.width,et.height);else{let tt=et.width,pt=et.height;for(let St=0;St<ft;St++)e.texImage2D(i.TEXTURE_2D,St,_t,tt,pt,0,ut,Lt,null),tt>>=1,pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),d.add(_),tt.onpaint=pt=>{let St=pt.changedElements;for(let it of d)St.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let St=i.RGBA,it=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,it,Ut,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ot&&Xt){let tt=Jt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,ft,_t,tt.width,tt.height)}for(let tt=0,pt=Nt.length;tt<pt;tt++)dt=Nt[tt],Ot?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ut,Lt,dt):e.texImage2D(i.TEXTURE_2D,tt,_t,ut,Lt,dt);_.generateMipmaps=!1}else if(Ot){if(Xt){let tt=Jt(et);e.texStorage2D(i.TEXTURE_2D,ft,_t,tt.width,tt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,_t,ut,Lt,et);p(_)&&S(H),ct.__version=lt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function kt(A,_,q){if(_.image.length!==6)return;let H=Et(A,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let lt=n.get(Z);if(Z.version!==lt.__version||H===!0){e.activeTexture(i.TEXTURE0+q);let ct=te.getPrimaries(te.workingColorSpace),K=_.colorSpace===Zn?null:te.getPrimaries(_.colorSpace),et=_.colorSpace===Zn||ct===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ut=_.isCompressedTexture||_.image[0].isCompressedTexture,Lt=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!ut&&!Lt?_t[it]=m(_.image[it],!0,s.maxCubemapSize):_t[it]=Lt?_.image[it].image:_.image[it],_t[it]=ne(_,_t[it]);let dt=_t[0],Nt=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),Xt=y(_.internalFormat,Nt,Ot,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,ft=lt.__version===void 0||H===!0,tt=Z.dataReady,pt=b(_,dt);Yt(i.TEXTURE_CUBE_MAP,_);let St;if(ut){F&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,dt.width,dt.height);for(let it=0;it<6;it++){St=_t[it].mipmaps;for(let Ut=0;Ut<St.length;Ut++){let It=St[Ut];_.format!==an?Nt!==null?F?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,It.width,It.height,Nt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Xt,It.width,It.height,0,It.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,It.width,It.height,Nt,Ot,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Xt,It.width,It.height,0,Nt,Ot,It.data)}}}else{if(St=_.mipmaps,F&&ft){St.length>0&&pt++;let it=Jt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Nt,Ot,_t[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Xt,_t[it].width,_t[it].height,0,Nt,Ot,_t[it].data);for(let Ut=0;Ut<St.length;Ut++){let me=St[Ut].image[it].image;F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,me.width,me.height,Nt,Ot,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Xt,me.width,me.height,0,Nt,Ot,me.data)}}else{F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Nt,Ot,_t[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Xt,Nt,Ot,_t[it]);for(let Ut=0;Ut<St.length;Ut++){let It=St[Ut];F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Nt,Ot,It.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Xt,Nt,Ot,It.image[it])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),lt.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Tt(A,_,q,H,Z,lt){let ct=r.convert(q.format,q.colorSpace),K=r.convert(q.type),et=y(q.internalFormat,ct,K,q.normalized,q.colorSpace),ut=n.get(_),Lt=n.get(q);if(Lt.__renderTarget=_,!ut.__hasExternalTextures){let _t=Math.max(1,_.width>>lt),dt=Math.max(1,_.height>>lt);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,lt,et,_t,dt,_.depth,0,ct,K,null):e.texImage2D(Z,lt,et,_t,dt,0,ct,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,Lt.__webglTexture,0,Gt(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,Lt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,_,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let H=_.depthTexture,Z=H&&H.isDepthTexture?H.type:null,lt=E(_.stencilBuffer,Z),ct=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Wt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(_),lt,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(_),lt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,lt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,A)}else{let H=_.textures;for(let Z=0;Z<H.length;Z++){let lt=H[Z],ct=r.convert(lt.format,lt.colorSpace),K=r.convert(lt.type),et=y(lt.internalFormat,ct,K,lt.normalized,lt.colorSpace);Wt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(_),et,_.width,_.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(_),et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,et,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(A,_,q){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_.depthTexture);let ut=r.convert(_.depthTexture.format),Lt=r.convert(_.depthTexture.type),_t;_.depthTexture.format===Rn?_t=i.DEPTH_COMPONENT24:_.depthTexture.format===fi&&(_t=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,_t,_.width,_.height,0,ut,Lt,null)}}else Y(_.depthTexture,0);let lt=Z.__webglTexture,ct=Gt(_),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,et=_.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Rn)Wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,lt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,et,K,lt,0);else if(_.depthTexture.format===fi)Wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,K,lt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,et,K,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){let _=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let H=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=H}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(q)for(let H=0;H<6;H++)oe(_.__webglFramebuffer[H],A,H);else{let H=A.texture.mipmaps;H&&H.length>0?oe(_.__webglFramebuffer[0],A,0):oe(_.__webglFramebuffer,A,0)}else if(q){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),zt(_.__webglDepthbuffer[H],A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,lt)}}else{let H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),zt(_.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,_,q){let H=n.get(A);_!==void 0&&Tt(H.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&nt(A)}function at(A){let _=A.texture,q=n.get(A),H=n.get(_);A.addEventListener("dispose",x);let Z=A.textures,lt=A.isWebGLCubeRenderTarget===!0,ct=Z.length>1;if(ct||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),lt){q.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer[K]=[];for(let et=0;et<_.mipmaps.length;et++)q.__webglFramebuffer[K][et]=i.createFramebuffer()}else q.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)q.__webglFramebuffer[K]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ct)for(let K=0,et=Z.length;K<et;K++){let ut=n.get(Z[K]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Wt(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let et=Z[K];q.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[K]);let ut=r.convert(et.format,et.colorSpace),Lt=r.convert(et.type),_t=y(et.internalFormat,ut,Lt,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),dt=Gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,_t,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,q.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Tt(q.__webglFramebuffer[K][et],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else Tt(q.__webglFramebuffer[K],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let K=0,et=Z.length;K<et;K++){let ut=Z[K],Lt=n.get(ut),_t=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Lt.__webglTexture),Yt(_t,ut),Tt(q.__webglFramebuffer,A,ut,i.COLOR_ATTACHMENT0+K,_t,0),p(ut)&&S(_t)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),Yt(K,_),_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Tt(q.__webglFramebuffer[et],A,_,i.COLOR_ATTACHMENT0,K,et);else Tt(q.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,K,0);p(_)&&S(K),e.unbindTexture()}A.depthBuffer&&nt(A)}function ot(A){let _=A.textures;for(let q=0,H=_.length;q<H;q++){let Z=_[q];if(p(Z)){let lt=w(A),ct=n.get(Z).__webglTexture;e.bindTexture(lt,ct),S(lt),e.unbindTexture()}}}let ht=[],qt=[];function Dt(A){if(A.samples>0){if(Wt(A)===!1){let _=A.textures,q=A.width,H=A.height,Z=i.COLOR_BUFFER_BIT,lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(A),K=_.length>1;if(K)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Lt=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,q,H,0,0,q,H,Z,i.NEAREST),c===!0&&(ht.length=0,qt.length=0,ht.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ht.push(lt),qt.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Lt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Gt(A){return Math.min(s.maxSamples,A.samples)}function Wt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ne(A,_){let q=A.colorSpace,H=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==Hs&&q!==Zn&&(te.getTransfer(q)===ae?(H!==an||Z!==$e)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",q)),_}function Jt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=st,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function E1(i,t){function e(n,s=Zn){let r,a=te.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nc)return i.BYTE;if(n===ic)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===ro)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===ac)return i.ALPHA;if(n===oc)return i.RGB;if(n===an)return i.RGBA;if(n===Rn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===co)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===uo)return i.RGBA_INTEGER;if(n===Er||n===Tr||n===wr||n===Ar)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===xo||n===vo||n===yo||n===Mo||n===Rr||n===So)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===xo)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===yo)return r.COMPRESSED_R11_EAC;if(n===Mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rr)return r.COMPRESSED_RG11_EAC;if(n===So)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bo||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===No||n===Uo||n===Do||n===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Oo||n===Bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ko||n===zo||n===Cr||n===Go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:T1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding!="undefined",m=new Dc,p={},S=e.getContextAttributes(),w=null,y=null,E=[],b=[],C=new rt,x=null,T=null,R=new ye;R.viewport=new ve;let L=new ye;L.viewport=new ve;let D=[R,L],G=new Qa,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=E[$];return Q===void 0&&(Q=new as,E[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=E[$];return Q===void 0&&(Q=new as,E[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=E[$];return Q===void 0&&(Q=new as,E[$]=Q),Q.getHandSpace()};function X($){let Q=b.indexOf($.inputSource);if(Q===-1)return;let mt=E[Q];mt!==void 0&&(mt.update($.inputSource,$.frame,l||a),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<E.length;$++){let Q=b[$];Q!==null&&(b[$]=null,E[$].disconnect(Q))}N=null,O=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,kt=null,Tt=null;S.depth&&(Tt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?fi:Rn,kt=S.stencil?vs:Mn);let zt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ye(u.textureWidth,u.textureHeight,{format:an,type:$e,depthTexture:new ai(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ye(f.framebufferWidth,f.framebufferHeight,{format:an,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Et.setContext(s),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let Q=0;Q<$.removed.length;Q++){let mt=$.removed[Q],kt=b.indexOf(mt);kt>=0&&(b[kt]=null,E[kt].disconnect(mt))}for(let Q=0;Q<$.added.length;Q++){let mt=$.added[Q],kt=b.indexOf(mt);if(kt===-1){for(let zt=0;zt<E.length;zt++)if(zt>=b.length){b.push(mt),kt=zt;break}else if(b[zt]===null){b[zt]=mt,kt=zt;break}if(kt===-1)break}let Tt=E[kt];Tt&&Tt.connect(mt)}}let B=new I,J=new I;function j($,Q,mt){B.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(mt.matrixWorld);let kt=B.distanceTo(J),Tt=Q.projectionMatrix.elements,zt=mt.projectionMatrix.elements,oe=Tt[14]/(Tt[10]-1),nt=Tt[14]/(Tt[10]+1),st=(Tt[9]+1)/Tt[5],at=(Tt[9]-1)/Tt[5],ot=(Tt[8]-1)/Tt[0],ht=(zt[8]+1)/zt[0],qt=oe*ot,Dt=oe*ht,Gt=kt/(-ot+ht),Wt=Gt*-ot;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Wt),$.translateZ(Gt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let P=oe+Gt,ne=nt+Gt,Jt=qt-Wt,A=Dt+(kt-Wt),_=st*nt/ne*P,q=at*nt/ne*P;$.projectionMatrix.makePerspective(Jt,A,_,q,P,ne),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function gt($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,mt=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),G.near=L.near=R.near=Q,G.far=L.far=R.far=mt,(N!==G.near||O!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,O=G.far),G.layers.mask=$.layers.mask|6,R.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let kt=$.parent,Tt=G.cameras;gt(G,kt);for(let zt=0;zt<Tt.length;zt++)gt(Tt[zt],kt);Tt.length===2?j(G,R,L):G.projectionMatrix.copy(R.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Mt($,G,kt)};function Mt($,Q,mt){mt===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ss*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function($){return p[$]};let jt=null;function Yt($,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let kt=!1;mt.length!==G.cameras.length&&(G.cameras.length=0,kt=!0);for(let nt=0;nt<mt.length;nt++){let st=mt[nt],at=null;if(f!==null)at=f.getViewport(st);else{let ht=d.getViewSubImage(u,st);at=ht.viewport,nt===0&&(t.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(y))}let ot=D[nt];ot===void 0&&(ot=new ye,ot.layers.enable(nt),ot.viewport=new ve,D[nt]=ot),ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(st.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),nt===0&&(G.matrix.copy(ot.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),kt===!0&&G.cameras.push(ot)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let nt=d.getDepthInformation(mt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Tt&&Tt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<mt.length;nt++){let st=mt[nt].camera;if(st){let at=p[st];at||(at=new er,p[st]=at);let ot=d.getCameraImage(st);at.sourceTexture=ot}}}}for(let mt=0;mt<E.length;mt++){let kt=b[mt],Tt=E[mt];kt!==null&&Tt!==void 0&&Tt.update(kt,Q,l||a)}jt&&jt($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Et=new ku;Et.setAnimationLoop(Yt),this.setAnimationLoop=function($){jt=$},this.dispose=function(){}}},A1=new ue,Xu=new Vt;Xu.set(-1,0,0,0,1,0,0,0,1);function R1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,y=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C1(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){let b=E.program;n.uniformBlockBinding(y,b)}function l(y,E){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",S));let C=E.program;n.updateUBOMapping(y,C);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let E=d();y.__bindingPointIndex=E;let b=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){let R=b[x];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)f(R[L],x,L,C);else f(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,b,C){if(v(y,E,b,C)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){let D=T[L],G=p(D);g(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,E,b){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,b)}function v(y,E,b,C){let x=y.value,T=E+"_"+b;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let R=C[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let E=y.uniforms,b=0,C=16;for(let T=0,R=E.length;T<R;T++){let L=Array.isArray(E[T])?E[T]:[E[T]];for(let D=0,G=L.length;D<G;D++){let N=L[D],O=Array.isArray(N.value)?N.value:[N.value];for(let X=0,W=O.length;X<W;X++){let Y=O[X],B=p(Y),J=b%C,j=J%B.boundary,gt=J+j;b+=j,gt!==0&&C-gt<B.storage&&(b+=C-gt),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=B.storage}}}let x=b%C;return x>0&&(b+=C-x),y.__size=b,y.__cache={},this}function p(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",y),E}function S(y){let E=y.target;E.removeEventListener("dispose",S);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:w}}var I1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function P1(){return Dn===null&&(Dn=new Js(I1,16,16,pi,Sn),Dn.name="DFG_LUT",Dn.minFilter=Ne,Dn.magFilter=Ne,Dn.wrapS=wn,Dn.wrapT=wn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var $o=class{constructor(t={}){let{canvas:e=au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=$e}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([uo,ho,co]),p=new Set([$e,Mn,xs,vs,ao,oo]),S=new Uint32Array(4),w=new Int32Array(4),y=new I,E=null,b=null,C=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,D=null,G=null,N=null,O=null;this._outputColorSpace=Ce;let X=0,W=0,Y=null,B=-1,J=null,j=new ve,gt=new ve,Mt=null,jt=new Ht(0),Yt=0,Et=e.width,$=e.height,Q=1,mt=null,kt=null,Tt=new ve(0,0,Et,$),zt=new ve(0,0,Et,$),oe=!1,nt=new ls,st=!1,at=!1,ot=new ue,ht=new I,qt=new ve,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Wt(){return Y===null?Q:1}let P=n;function ne(M,U){return e.getContext(M,U)}let Jt,A,_,q,H,Z,lt,ct,K,et,ut,Lt,_t,dt,Nt,Ot,Xt,F,ft,tt,pt,St,it;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",cn,!1),P===null){let U="webgl2";if(P=ne(U,M),P===null)throw ne(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(M){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Bt("WebGLRenderer: "+M.message),M}function Ut(){Jt=new O0(P),Jt.init(),pt=new E1(P,Jt),A=new R0(P,Jt,t,pt),_=new S1(P,Jt),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),G=P.createFramebuffer(),N=P.createFramebuffer(),O=P.createFramebuffer(),q=new z0(P),H=new l1,Z=new b1(P,Jt,_,H,A,pt,q),lt=new q0(R),ct=new Hf(P),St=new w0(P,ct),K=new B0(P,ct,q,St),et=new H0(P,K,ct,St,q),F=new G0(P,A,Z),Nt=new C0(H),ut=new o1(R,lt,Jt,A,St,Nt),Lt=new R1(R,H),_t=new h1,dt=new g1(Jt),Xt=new T0(R,lt,_,et,g,c),Ot=new M1(R,et,A),it=new C1(P,q,A,_),ft=new A0(P,Jt,q),tt=new k0(P,Jt,q),q.programs=ut.programs,R.capabilities=A,R.extensions=Jt,R.properties=H,R.renderLists=_t,R.shadowMap=Ot,R.state=_,R.info=q}v!==$e&&(T=new W0(v,e.width,e.height,o,s,r));let It=new Fc(R,P);this.xr=It,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Jt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Jt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(M){M!==void 0&&(Q=M,this.setSize(Et,$,!1))},this.getSize=function(M){return M.set(Et,$)},this.setSize=function(M,U,V=!0){if(It.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=M,$=U,e.width=Math.floor(M*Q),e.height=Math.floor(U*Q),V===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Et*Q,$*Q).floor()},this.setDrawingBufferSize=function(M,U,V){Et=M,$=U,Q=V,e.width=Math.floor(M*V),e.height=Math.floor(U*V),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===$e){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(Tt)},this.setViewport=function(M,U,V,k){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,U,V,k),_.viewport(j.copy(Tt).multiplyScalar(Q).round())},this.getScissor=function(M){return M.copy(zt)},this.setScissor=function(M,U,V,k){M.isVector4?zt.set(M.x,M.y,M.z,M.w):zt.set(M,U,V,k),_.scissor(gt.copy(zt).multiplyScalar(Q).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(M){_.setScissorTest(oe=M)},this.setOpaqueSort=function(M){mt=M},this.setTransparentSort=function(M){kt=M},this.getClearColor=function(M){return M.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,V=!0){let k=0;if(M){let z=!1;if(Y!==null){let yt=Y.texture.format;z=m.has(yt)}if(z){let yt=Y.texture.type,At=p.has(yt),vt=Xt.getClearColor(),Rt=Xt.getClearAlpha(),Pt=vt.r,$t=vt.g,Qt=vt.b;At?(S[0]=Pt,S[1]=$t,S[2]=Qt,S[3]=Rt,P.clearBufferuiv(P.COLOR,0,S)):(w[0]=Pt,w[1]=$t,w[2]=Qt,w[3]=Rt,P.clearBufferiv(P.COLOR,0,w))}else k|=P.COLOR_BUFFER_BIT}U&&(k|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Xt.dispose(),_t.dispose(),dt.dispose(),H.dispose(),lt.dispose(),et.dispose(),St.dispose(),it.dispose(),ut.dispose(),It.dispose(),It.removeEventListener("sessionstart",Oc),It.removeEventListener("sessionend",Bc),mi.stop()};function me(M){M.preventDefault(),Ws("WebGLRenderer: Context Lost."),L=!0}function ie(){Ws("WebGLRenderer: Context Restored."),L=!1;let M=q.autoReset,U=Ot.enabled,V=Ot.autoUpdate,k=Ot.needsUpdate,z=Ot.type;Ut(),q.autoReset=M,Ot.enabled=U,Ot.autoUpdate=V,Ot.needsUpdate=k,Ot.type=z}function cn(M){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function bn(M){let U=M.target;U.removeEventListener("dispose",bn),ud(U)}function ud(M){dd(M),H.remove(M)}function dd(M){let U=H.get(M).programs;U!==void 0&&(U.forEach(function(V){ut.releaseProgram(V)}),M.isShaderMaterial&&ut.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,V,k,z,yt){U===null&&(U=Dt);let At=z.isMesh&&z.matrixWorld.determinantAffine()<0,vt=md(M,U,V,k,z);_.setMaterial(k,At);let Rt=V.index,Pt=1;if(k.wireframe===!0){if(Rt=K.getWireframeAttribute(V),Rt===void 0)return;Pt=2}let $t=V.drawRange,Qt=V.attributes.position,Ct=$t.start*Pt,se=($t.start+$t.count)*Pt;yt!==null&&(Ct=Math.max(Ct,yt.start*Pt),se=Math.min(se,(yt.start+yt.count)*Pt)),Rt!==null?(Ct=Math.max(Ct,0),se=Math.min(se,Rt.count)):Qt!=null&&(Ct=Math.max(Ct,0),se=Math.min(se,Qt.count));let Ee=se-Ct;if(Ee<0||Ee===1/0)return;St.setup(z,k,vt,V,Rt);let _e,fe=ft;if(Rt!==null&&(_e=ct.get(Rt),fe=tt,fe.setIndex(_e)),z.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*Wt()),fe.setMode(P.LINES)):fe.setMode(P.TRIANGLES);else if(z.isLine){let Oe=k.linewidth;Oe===void 0&&(Oe=1),_.setLineWidth(Oe*Wt()),z.isLineSegments?fe.setMode(P.LINES):z.isLineLoop?fe.setMode(P.LINE_LOOP):fe.setMode(P.LINE_STRIP)}else z.isPoints?fe.setMode(P.POINTS):z.isSprite&&fe.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Oe=z._multiDrawStarts,wt=z._multiDrawCounts,We=z._multiDrawCount,ee=Rt?ct.get(Rt).bytesPerElement:1,en=H.get(k).currentProgram.getUniforms();for(let En=0;En<We;En++)en.setValue(P,"_gl_DrawID",En),fe.render(Oe[En]/ee,wt[En])}else if(z.isInstancedMesh)fe.renderInstances(Ct,Ee,z.count);else if(V.isInstancedBufferGeometry){let Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,wt=Math.min(V.instanceCount,Oe);fe.renderInstances(Ct,Ee,wt)}else fe.render(Ct,Ee)};function qc(M,U,V,k){D!==null&&M.isNodeMaterial&&D.setObject(k,M),st===!0&&Nt.setState(M,V,!1),M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=Fe,M.needsUpdate=!0,zr(M,U,k),M.side=hi,M.needsUpdate=!0,zr(M,U,k),M.side=sn):zr(M,U,k)}this.compile=function(M,U,V=null){V===null&&(V=M),D!==null&&D.renderStart(M,U,V),b=dt.get(V),b.init(U),x.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),M!==V&&M.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),at=this.localClippingEnabled,st=Nt.init(this.clippingPlanes,at),st===!0&&Nt.setGlobalState(this.clippingPlanes,U),D!==null&&Ot.render(b.state.shadowsArray,V,U);let k=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let yt=z.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){let vt=yt[At];qc(vt,V,U,z),k.add(vt)}else qc(yt,V,U,z),k.add(yt)}),b=x.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(M,U,V=null){let k=this.compile(M,U,V);return new Promise(z=>{function yt(){if(k.forEach(function(At){let Rt=H.get(At).currentProgram;(Rt===void 0||Rt.isReady())&&k.delete(At)}),k.size===0){z(M);return}setTimeout(yt,10)}Jt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let il=null;function fd(M){il&&il(M)}function Oc(){mi.stop()}function Bc(){mi.start()}let mi=new ku;mi.setAnimationLoop(fd),typeof self!="undefined"&&mi.setContext(self),this.setAnimationLoop=function(M){il=M,It.setAnimationLoop(M),M===null?mi.stop():mi.start()},It.addEventListener("sessionstart",Oc),It.addEventListener("sessionend",Bc),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(M,U);let V=It.enabled===!0&&It.isPresenting===!0,k=T!==null&&(Y===null||V)&&T.begin(R,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(U),U=It.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,U,Y),b=dt.get(M,x.length),b.init(U),b.state.textureUnits=Z.getTextureUnits(),x.push(b),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(ot,mn,U.reversedDepth),at=this.localClippingEnabled,st=Nt.init(this.clippingPlanes,at),E=_t.get(M,C.length),E.init(),C.push(E),It.enabled===!0&&It.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&sl(At,U,-1/0,R.sortObjects)}sl(M,U,0,R.sortObjects),E.finish(),D!==null&&D.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(mt,kt),Gt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Gt&&Xt.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Nt.beginShadows();let z=b.state.shadowsArray;if(Ot.render(z,M,U),st===!0&&Nt.endShadows(),(k&&T.hasRenderPass())===!1){let At=E.opaque,vt=E.transmissive;if(b.setupLights(),U.isArrayCamera){let Rt=U.cameras;if(vt.length>0)for(let Pt=0,$t=Rt.length;Pt<$t;Pt++){let Qt=Rt[Pt];zc(At,vt,M,Qt)}Gt&&Xt.render(M);for(let Pt=0,$t=Rt.length;Pt<$t;Pt++){let Qt=Rt[Pt];kc(E,M,Qt,Qt.viewport)}}else vt.length>0&&zc(At,vt,M,U),Gt&&Xt.render(M),kc(E,M,U)}Y!==null&&W===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),k&&T.end(R),M.isScene===!0&&M.onAfterRender(R,M,U),St.resetDefaultState(),B=-1,J=null,x.pop(),x.length>0?(b=x[x.length-1],Z.setTextureUnits(b.state.textureUnits),st===!0&&Nt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,D!==null&&D.renderEnd()};function sl(M,U,V,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(nt)){k&&qt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ot);let At=et.update(M),vt=M.material;vt.visible&&E.push(M,At,vt,V,qt.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(nt))){let At=et.update(M),vt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qt.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),qt.copy(At.boundingSphere.center)),qt.applyMatrix4(M.matrixWorld).applyMatrix4(ot)),Array.isArray(vt)){let Rt=At.groups;for(let Pt=0,$t=Rt.length;Pt<$t;Pt++){let Qt=Rt[Pt],Ct=vt[Qt.materialIndex];Ct&&Ct.visible&&E.push(M,At,Ct,V,qt.z,Qt,U)}}else vt.visible&&E.push(M,At,vt,V,qt.z,null,U)}}let yt=M.children;for(let At=0,vt=yt.length;At<vt;At++)sl(yt[At],U,V,k)}function kc(M,U,V,k){let{opaque:z,transmissive:yt,transparent:At}=M;b.setupLightsView(V),st===!0&&Nt.setGlobalState(R.clippingPlanes,V),k&&_.viewport(j.copy(k)),z.length>0&&kr(z,U,V),yt.length>0&&kr(yt,U,V),At.length>0&&kr(At,U,V),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function zc(M,U,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Ct=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Ye(1,1,{generateMipmaps:!0,type:Ct?Sn:$e,minFilter:di,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let yt=b.state.transmissionRenderTarget[k.id],At=k.viewport||j;yt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let vt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Pt=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(jt),Yt=R.getClearAlpha(),Yt<1&&R.setClearColor(16777215,.5),R.clear(),Gt&&Xt.render(V);let $t=R.toneMapping;R.toneMapping=yn;let Qt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),st===!0&&Nt.setGlobalState(R.clippingPlanes,k),kr(M,V,k),Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let se=0,Ee=U.length;se<Ee;se++){let _e=U[se],{object:fe,geometry:Oe,material:wt,group:We}=_e;if(wt.side===sn&&fe.layers.test(k.layers)){let ee=wt.side;wt.side=Fe,wt.needsUpdate=!0,Gc(fe,V,k,Oe,wt,We),wt.side=ee,wt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt))}R.setRenderTarget(vt,Rt,Pt),R.setClearColor(jt,Yt),Qt!==void 0&&(k.viewport=Qt),R.toneMapping=$t}function kr(M,U,V){let k=U.isScene===!0?U.overrideMaterial:null;for(let z=0,yt=M.length;z<yt;z++){let At=M[z],{object:vt,geometry:Rt,group:Pt}=At,$t=At.material;$t.allowOverride===!0&&k!==null&&($t=k),vt.layers.test(V.layers)&&Gc(vt,U,V,Rt,$t,Pt)}}function Gc(M,U,V,k,z,yt){D!==null&&z.isNodeMaterial&&D.setObject(M,z),M.onBeforeRender(R,U,V,k,z,yt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(R,U,V,k,M,yt),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=Fe,z.needsUpdate=!0,R.renderBufferDirect(V,U,k,z,M,yt),z.side=hi,z.needsUpdate=!0,R.renderBufferDirect(V,U,k,z,M,yt),z.side=sn):R.renderBufferDirect(V,U,k,z,M,yt),M.onAfterRender(R,U,V,k,z,yt)}function zr(M,U,V){U.isScene!==!0&&(U=Dt);let k=H.get(M),z=b.state.lights,yt=b.state.shadowsArray,At=z.state.version,vt=ut.getParameters(M,z.state,yt,U,V,b.state.lightProbeGridArray),Rt=ut.getProgramCacheKey(vt),Pt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let $t=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=lt.get(M.envMap||k.environment,$t),k.envMapRotation=k.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",bn),Pt=new Map,k.programs=Pt);let Qt=Pt.get(Rt);if(Qt!==void 0){if(k.currentProgram===Qt&&k.lightsStateVersion===At)return Vc(M,vt),Qt}else vt.uniforms=ut.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,V,vt),M.onBeforeCompile(vt,R),Qt=ut.acquireProgram(vt,Rt),Pt.set(Rt,Qt),k.uniforms=vt.uniforms;let Ct=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=Nt.uniform),Vc(M,vt),k.needsLights=_d(M),k.lightsStateVersion=At,k.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.sunLights.value=z.state.sun,Ct.sunLightShadows.value=z.state.sunShadow,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.sunShadowMatrix.value=z.state.sunShadowMatrix,Ct.sunShadowCascade.value=z.state.sunShadowCascade,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=Qt,k.uniformsList=null,Qt}function Hc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Ss.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Vc(M,U){let V=H.get(M);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function pd(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let V=0,k=M.length;V<k;V++){let z=M[V];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function md(M,U,V,k,z){U.isScene!==!0&&(U=Dt),Z.resetTextureUnits();let yt=U.fog,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,vt=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:te.workingColorSpace,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pt=lt.get(k.envMap||At,Rt),$t=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Qt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,Ee=!!V.morphAttributes.color,_e=yn;k.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(_e=R.toneMapping);let fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Oe=fe!==void 0?fe.length:0,wt=H.get(k),We=b.state.lights;if(st===!0&&(at===!0||M!==J)){let ge=M===J&&k.id===B;Nt.setState(k,M,ge)}let ee=!1;k.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==We.state.version||wt.outputColorSpace!==vt||z.isBatchedMesh&&wt.batching===!1||!z.isBatchedMesh&&wt.batching===!0||z.isBatchedMesh&&wt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&wt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&wt.instancing===!1||!z.isInstancedMesh&&wt.instancing===!0||z.isSkinnedMesh&&wt.skinning===!1||!z.isSkinnedMesh&&wt.skinning===!0||z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null||wt.envMap!==Pt||k.fog===!0&&wt.fog!==yt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Nt.numPlanes||wt.numIntersection!==Nt.numIntersection)||wt.vertexAlphas!==$t||wt.vertexTangents!==Qt||wt.morphTargets!==Ct||wt.morphNormals!==se||wt.morphColors!==Ee||wt.toneMapping!==_e||wt.morphTargetsCount!==Oe||!!wt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,wt.__version=k.version);let en=wt.currentProgram;ee===!0&&(en=zr(k,U,z),D&&k.isNodeMaterial&&D.onUpdateProgram(k,en,wt));let En=!1,Kn=!1,Pi=!1,he=en.getUniforms(),Se=wt.uniforms;if(_.useProgram(en.program)&&(En=!0,Kn=!0,Pi=!0),k.id!==B&&(B=k.id,Kn=!0),wt.needsLights){let ge=pd(b.state.lightProbeGridArray,z);wt.lightProbeGrid!==ge&&(wt.lightProbeGrid=ge,Kn=!0)}if(En||J!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(P,"projectionMatrix",M.projectionMatrix),he.setValue(P,"viewMatrix",M.matrixWorldInverse);let Qn=he.map.cameraPosition;Qn!==void 0&&Qn.setValue(P,ht.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&he.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Kn=!0,Pi=!0)}if(wt.needsLights&&(We.state.sunShadowMap.length>0&&he.setValue(P,"sunShadowMap",We.state.sunShadowMap,Z),We.state.directionalShadowMap.length>0&&he.setValue(P,"directionalShadowMap",We.state.directionalShadowMap,Z),We.state.spotShadowMap.length>0&&he.setValue(P,"spotShadowMap",We.state.spotShadowMap,Z),We.state.pointShadowMap.length>0&&he.setValue(P,"pointShadowMap",We.state.pointShadowMap,Z)),z.isSkinnedMesh){he.setOptional(P,z,"bindMatrix"),he.setOptional(P,z,"bindMatrixInverse");let ge=z.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),he.setValue(P,"boneTexture",ge.boneTexture,Z))}z.isBatchedMesh&&(he.setOptional(P,z,"batchingTexture"),he.setValue(P,"batchingTexture",z._matricesTexture,Z),he.setOptional(P,z,"batchingIdTexture"),he.setValue(P,"batchingIdTexture",z._indirectTexture,Z),he.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&he.setValue(P,"batchingColorTexture",z._colorsTexture,Z));let Jn=V.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&F.update(z,V,en),(Kn||wt.receiveShadow!==z.receiveShadow)&&(wt.receiveShadow=z.receiveShadow,he.setValue(P,"receiveShadow",z.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Se.envMapIntensity.value=U.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=P1()),Kn){if(he.setValue(P,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&gd(Se,Pi),yt&&k.fog===!0&&Lt.refreshFogUniforms(Se,yt),Lt.refreshMaterialUniforms(Se,k,Q,$,b.state.transmissionRenderTarget[M.id]),wt.needsLights&&wt.lightProbeGrid){let ge=wt.lightProbeGrid;Se.probesSH.value=ge.texture,Se.probesMin.value.copy(ge.boundingBox.min),Se.probesMax.value.copy(ge.boundingBox.max),Se.probesResolution.value.copy(ge.resolution)}Ss.upload(P,Hc(wt),Se,Z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ss.upload(P,Hc(wt),Se,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(P,"center",z.center),he.setValue(P,"modelViewMatrix",z.modelViewMatrix),he.setValue(P,"normalMatrix",z.normalMatrix),he.setValue(P,"modelMatrix",z.matrixWorld),k.uniformsGroups!==void 0){let ge=k.uniformsGroups;for(let Qn=0,Li=ge.length;Qn<Li;Qn++){let Xc=ge[Qn];it.update(Xc,en),it.bind(Xc,en)}}return en}function gd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function _d(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,U,V){let k=H.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=U,H.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let V=H.get(M);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,V=0){Y=M,X=U,W=V;let k=null,z=!1,yt=!1;if(M){let vt=H.get(M);if(vt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,vt.__webglFramebuffer),j.copy(M.viewport),gt.copy(M.scissor),Mt=M.scissorTest,_.viewport(j),_.scissor(gt),_.setScissorTest(Mt),B=-1;return}else if(vt.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(vt.__hasExternalTextures)Z.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let $t=M.depthTexture;if(vt.__boundDepthTexture!==$t){if($t!==null&&H.has($t)&&(M.width!==$t.image.width||M.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}let Rt=M.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(yt=!0);let Pt=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?k=Pt[U][V]:k=Pt[U],z=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?k=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[V]:k=Pt,j.copy(M.viewport),gt.copy(M.scissor),Mt=M.scissorTest}else j.copy(Tt).multiplyScalar(Q).floor(),gt.copy(zt).multiplyScalar(Q).floor(),Mt=oe;if(V!==0&&(k=G),_.bindFramebuffer(P.FRAMEBUFFER,k)&&_.drawBuffers(M,k),_.viewport(j),_.scissor(gt),_.setScissorTest(Mt),z){let vt=H.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,V)}else if(yt){let vt=U;for(let Rt=0;Rt<M.textures.length;Rt++){let Pt=H.get(M.textures[Rt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Rt,Pt.__webglTexture,V,vt)}}else if(M!==null&&V!==0){let vt=H.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,V)}B=-1};function Wc(M){let U=H.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=A.textureFormatReadable(M.format),U.__typeReadable=A.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,V,k,z,yt,At,vt=0){if(!(M&&M.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt){_.bindFramebuffer(P.FRAMEBUFFER,Rt);try{let Pt=M.textures[vt],$t=Pt.format,Qt=Pt.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt);let Ct=Wc(Pt);if(Ct.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&V>=0&&V<=M.height-z&&P.readPixels(U,V,k,z,pt.convert($t),pt.convert(Qt),yt)}finally{let Pt=Y!==null?H.get(Y).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(M,U,V,k,z,yt,At,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Rt=Rt[At]),Rt)if(U>=0&&U<=M.width-k&&V>=0&&V<=M.height-z){_.bindFramebuffer(P.FRAMEBUFFER,Rt);let Pt=M.textures[vt],$t=Pt.format,Qt=Pt.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt);let Ct=Wc(Pt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(U,V,k,z,pt.convert($t),pt.convert(Qt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ee=Y!==null?H.get(Y).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Ee);let _e=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await lu(P,_e,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(se),P.deleteSync(_e),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,V=0){let k=Math.pow(2,-V),z=Math.floor(M.image.width*k),yt=Math.floor(M.image.height*k),At=U!==null?U.x:0,vt=U!==null?U.y:0;Z.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,At,vt,z,yt),_.unbindTexture()},this.copyTextureToTexture=function(M,U,V=null,k=null,z=0,yt=0){let At,vt,Rt,Pt,$t,Qt,Ct,se,Ee,_e=M.isCompressedTexture?M.mipmaps[yt]:M.image;if(V!==null)At=V.max.x-V.min.x,vt=V.max.y-V.min.y,Rt=V.isBox3?V.max.z-V.min.z:1,Pt=V.min.x,$t=V.min.y,Qt=V.isBox3?V.min.z:0;else{let Se=Math.pow(2,-z);At=Math.floor(_e.width*Se),vt=Math.floor(_e.height*Se),M.isDataArrayTexture?Rt=_e.depth:M.isData3DTexture?Rt=Math.floor(_e.depth*Se):Rt=1,Pt=0,$t=0,Qt=0}k!==null?(Ct=k.x,se=k.y,Ee=k.z):(Ct=0,se=0,Ee=0);let fe=pt.convert(U.format),Oe=pt.convert(U.type),wt;U.isData3DTexture?(Z.setTexture3D(U,0),wt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),wt=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),wt=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let We=_.getParameter(P.UNPACK_ROW_LENGTH),ee=_.getParameter(P.UNPACK_IMAGE_HEIGHT),en=_.getParameter(P.UNPACK_SKIP_PIXELS),En=_.getParameter(P.UNPACK_SKIP_ROWS),Kn=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,_e.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_e.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),_.pixelStorei(P.UNPACK_SKIP_ROWS,$t),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Qt);let Pi=M.isDataArrayTexture||M.isData3DTexture,he=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Se=H.get(M),Jn=H.get(U),ge=H.get(Se.__renderTarget),Qn=H.get(Jn.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,ge.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Li=0;Li<Rt;Li++)Pi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(M).__webglTexture,z,Qt+Li),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(U).__webglTexture,yt,Ee+Li)),P.blitFramebuffer(Pt,$t,At,vt,Ct,se,At,vt,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||H.has(M)){let Se=H.get(M),Jn=H.get(U);_.bindFramebuffer(P.READ_FRAMEBUFFER,N),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,O);for(let ge=0;ge<Rt;ge++)Pi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,z,Qt+ge):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Se.__webglTexture,z),he?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Jn.__webglTexture,yt,Ee+ge):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Jn.__webglTexture,yt),z!==0?P.blitFramebuffer(Pt,$t,At,vt,Ct,se,At,vt,P.COLOR_BUFFER_BIT,P.NEAREST):he?P.copyTexSubImage3D(wt,yt,Ct,se,Ee+ge,Pt,$t,At,vt):P.copyTexSubImage2D(wt,yt,Ct,se,Pt,$t,At,vt);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else he?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(wt,yt,Ct,se,Ee,At,vt,Rt,fe,Oe,_e.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(wt,yt,Ct,se,Ee,At,vt,Rt,fe,_e.data):P.texSubImage3D(wt,yt,Ct,se,Ee,At,vt,Rt,fe,Oe,_e):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,yt,Ct,se,At,vt,fe,Oe,_e.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,yt,Ct,se,_e.width,_e.height,fe,_e.data):P.texSubImage2D(P.TEXTURE_2D,yt,Ct,se,At,vt,fe,Oe,_e);_.pixelStorei(P.UNPACK_ROW_LENGTH,We),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee),_.pixelStorei(P.UNPACK_SKIP_PIXELS,en),_.pixelStorei(P.UNPACK_SKIP_ROWS,En),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Kn),yt===0&&U.generateMipmaps&&P.generateMipmap(wt),_.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){X=0,W=0,Y=null,_.reset(),St.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Jo=class extends $n{constructor(t){super(t)}load(t,e,n,s){let r=this,a=new fr(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){let c=r.parse(JSON.parse(o));e&&e(c)},n,s)}parse(t){return new Ur(t)}},Ur=class{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100,n="ltr"){let s=[],r=L1(t,e,this.data,n);for(let a=0,o=r.length;a<o;a++)s.push(...r[a].toShapes());return s}};function L1(i,t,e,n){let s=Array.from(i),r=t/e.resolution,a=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[],c=0,l=0;(n=="rtl"||n=="tb")&&s.reverse();for(let h=0;h<s.length;h++){let d=s[h];if(d===`
`)c=0,l-=a;else{let u=N1(d,r,c,l,e);n=="tb"?(c=0,l+=e.ascender*r):c+=u.offsetX,o.push(u.path)}}return o}function N1(i,t,e,n,s){let r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}let a=new vr,o,c,l,h,d,u,f,g;if(r.o){let v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,p=v.length;m<p;)switch(v[m++]){case"m":o=v[m++]*t+e,c=v[m++]*t+n,a.moveTo(o,c);break;case"l":o=v[m++]*t+e,c=v[m++]*t+n,a.lineTo(o,c);break;case"q":l=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,u=v[m++]*t+n,a.quadraticCurveTo(d,u,l,h);break;case"b":l=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,u=v[m++]*t+n,f=v[m++]*t+e,g=v[m++]*t+n,a.bezierCurveTo(d,u,f,g,l,h);break}}return{offsetX:r.ha*t,path:a}}var Yu={glyphs:{" ":{ha:291,x_min:0,x_max:291,o:""},"!":{ha:301,x_min:0,x_max:301,o:"m 72 255 l 123 700 l 350 700 l 223 255 m 110 -9 q 32 19 62 -9 q 2 88 2 47 q 36 168 2 136 q 121 199 71 199 q 199 172 169 199 q 229 104 229 145 q 213 48 229 73 q 170 6 197 22 q 110 -9 144 -9"},'"':{ha:462,x_min:0,x_max:462,o:"m 81 408 l 126 700 l 287 700 l 216 408 m 301 408 l 346 700 l 507 700 l 436 408"},"#":{ha:730,x_min:0,x_max:730,o:"m 329 0 l 376 149 l 256 149 l 209 0 l 70 0 l 117 149 l -8 149 l 18 278 l 159 278 l 204 422 l 81 422 l 107 551 l 246 551 l 293 700 l 432 700 l 385 551 l 505 551 l 552 700 l 691 700 l 644 551 l 769 551 l 744 422 l 602 422 l 557 278 l 680 278 l 655 149 l 515 149 l 468 0 m 298 278 l 418 278 l 463 422 l 343 422"},$:{ha:648,x_min:0,x_max:648,o:"m 196 -120 l 218 -11 q 163 -4 190 -9 q 62 24 107 6 q -15 62 17 41 l 64 209 q 138 172 99 187 q 217 148 176 156 q 249 143 233 145 l 276 278 q 211 299 243 286 q 144 332 174 312 q 94 385 113 353 q 76 464 76 417 q 118 596 76 540 q 235 683 159 652 q 362 712 291 706 l 384 820 l 504 820 l 482 710 q 553 698 518 706 q 665 653 618 682 l 592 507 q 502 547 551 533 q 451 557 477 553 l 423 414 q 481 397 452 406 q 548 364 517 384 q 596 312 578 343 q 615 235 615 281 q 574 104 615 160 q 456 17 532 48 q 338 -11 403 -4 l 316 -120 m 310 449 l 330 550 q 290 527 303 541 q 274 492 275 511 q 293 459 274 472 q 310 449 300 454 m 370 150 q 403 169 390 157 q 417 202 417 183 q 399 236 417 223 q 388 242 394 239"},"%":{ha:897,x_min:0,x_max:897,o:"m 83 0 l 693 700 l 844 700 l 235 0 m 227 321 q 112 363 157 321 q 68 482 68 405 q 92 598 68 546 q 163 679 117 649 q 273 709 209 709 q 388 667 344 709 q 432 548 432 625 q 408 432 432 484 q 338 351 383 381 q 227 321 292 321 m 238 416 q 281 436 265 416 q 304 486 297 456 q 311 542 311 515 q 297 598 311 581 q 262 614 283 614 q 219 594 235 614 q 196 545 203 574 q 189 488 189 516 q 204 432 189 449 q 238 416 218 416 m 655 -9 q 540 33 584 -9 q 496 152 496 75 q 520 267 496 216 q 591 348 545 318 q 701 378 637 378 q 816 336 772 378 q 860 218 860 295 q 836 102 860 154 q 766 21 811 51 q 655 -9 720 -9 m 666 85 q 708 105 693 85 q 731 155 724 125 q 738 212 738 185 q 724 268 738 251 q 690 284 710 284 q 647 264 663 284 q 624 214 631 244 q 617 158 617 185 q 631 102 617 119 q 666 85 645 85"},"&":{ha:752,x_min:0,x_max:752,o:"m 273 -14 q 140 8 199 -14 q 48 70 81 30 q 14 168 14 111 q 50 280 14 233 q 150 365 86 328 q 199 391 173 378 q 177 429 186 410 q 160 503 160 464 q 194 615 160 569 q 286 686 229 661 q 411 710 344 710 q 516 693 470 710 q 588 642 562 676 q 615 560 615 608 q 581 460 615 502 q 488 385 547 417 q 450 366 470 375 l 533 275 q 585 376 563 320 l 729 330 q 634 167 691 238 l 692 104 l 566 -12 l 506 53 q 463 29 485 39 q 273 -14 375 -14 m 284 295 q 274 290 279 292 q 222 250 240 271 q 204 200 204 229 q 228 151 204 171 q 303 131 253 131 q 409 159 356 131 m 365 459 q 396 474 382 467 q 442 510 430 493 q 455 544 455 526 q 441 574 455 562 q 404 585 427 585 q 354 568 373 585 q 334 522 334 551 q 346 485 334 504 q 365 459 353 474"},"'":{ha:242,x_min:0,x_max:242,o:"m 81 408 l 126 700 l 287 700 l 216 408"},"(":{ha:369,x_min:0,x_max:369,o:"m 103 -194 q 74 -112 87 -161 q 53 -8 61 -64 q 45 104 45 47 q 60 280 45 193 q 105 449 76 367 q 177 605 134 531 q 276 742 220 679 l 464 742 q 361 586 405 664 q 288 426 317 507 q 244 263 258 346 q 229 94 229 180 q 241 -50 229 21 q 277 -194 253 -121"},")":{ha:369,x_min:0,x_max:369,o:"m -82 -194 q 21 -38 -23 -116 q 94 122 65 41 q 138 286 124 202 q 153 454 153 369 q 142 598 153 527 q 105 742 130 669 l 279 742 q 308 660 296 709 q 329 556 321 612 q 337 444 337 501 q 322 268 337 355 q 276 99 306 181 q 204 -57 247 17 q 106 -194 161 -131"},"*":{ha:453,x_min:0,x_max:453,o:"m 511 593 l 396 537 l 482 485 l 413 386 l 317 453 l 296 335 l 181 335 l 207 448 l 95 387 l 49 481 l 169 539 l 79 593 l 148 692 l 242 627 l 263 742 l 376 742 l 352 627 l 465 689"},"+":{ha:609,x_min:0,x_max:609,o:"m 196 112 l 229 277 l 60 277 l 89 423 l 258 423 l 291 588 l 445 588 l 412 423 l 581 423 l 552 277 l 383 277 l 350 112"},",":{ha:283,x_min:0,x_max:283,o:"m -46 -157 l 36 10 q 23 21 29 15 q -7 95 -7 50 q 29 183 -7 150 q 115 216 65 216 q 192 187 163 216 q 222 112 222 158 q 213 65 222 87 q 181 10 204 43 l 73 -157"},"-":{ha:388,x_min:0,x_max:388,o:"m 37 212 l 66 358 l 357 358 l 328 212"},".":{ha:283,x_min:0,x_max:283,o:"m 101 -9 q 23 20 53 -9 q -7 95 -7 50 q 29 183 -7 150 q 115 216 65 216 q 192 187 163 216 q 222 112 222 158 q 206 49 222 76 q 162 6 189 22 q 101 -9 134 -9"},"/":{ha:415,x_min:0,x_max:415,o:"m -112 -100 l 401 842 l 576 842 l 63 -100"},"0":{ha:685,x_min:0,x_max:685,o:"m 303 -14 q 164 18 223 -14 q 73 110 105 50 q 41 256 41 170 q 68 436 41 352 q 145 582 95 519 q 263 679 195 644 q 413 714 331 714 q 552 682 493 714 q 642 590 610 650 q 675 444 675 530 q 648 264 675 348 q 570 118 620 181 q 453 21 521 56 q 303 -14 385 -14 m 322 148 q 390 178 361 148 q 438 252 419 207 q 466 347 457 297 q 476 439 476 397 q 454 526 476 500 q 394 552 431 552 q 326 522 355 552 q 278 448 297 493 q 250 353 259 403 q 240 261 240 303 q 262 174 240 200 q 322 148 285 148"},"1":{ha:405,x_min:0,x_max:405,o:"m 82 0 l 191 547 l 61 547 l 92 700 l 420 700 l 280 0"},"2":{ha:599,x_min:0,x_max:599,o:"m -24 0 l 1 124 l 307 362 q 363 412 343 391 q 392 452 383 433 q 400 490 400 471 q 378 537 400 519 q 315 555 356 555 q 246 536 279 555 q 185 485 212 518 l 53 572 q 172 676 95 637 q 345 714 249 714 q 480 689 421 714 q 570 620 538 664 q 603 520 603 577 q 588 439 603 478 q 538 360 573 400 q 439 271 502 319 l 292 157 l 553 157 l 521 0"},"3":{ha:603,x_min:0,x_max:603,o:"m 224 -14 q 80 6 148 -14 q -39 63 12 25 l 53 204 q 140 161 91 176 q 237 146 188 146 q 306 156 278 146 q 348 184 334 165 q 363 228 363 202 q 340 272 363 257 q 270 287 318 287 l 185 287 l 210 412 l 360 547 l 86 547 l 117 700 l 623 700 l 599 576 l 420 415 q 454 404 438 410 q 534 339 506 381 q 563 240 563 297 q 520 110 563 167 q 399 19 476 52 q 224 -14 322 -14"},"4":{ha:700,x_min:0,x_max:700,o:"m 0 134 l 25 263 l 419 700 l 632 700 l 271 291 l 410 291 l 434 410 l 617 410 l 593 291 l 698 291 l 666 134 l 562 134 l 535 0 l 343 0 l 370 134"},"5":{ha:607,x_min:0,x_max:607,o:"m 237 -14 q 92 6 161 -14 q -26 63 24 25 l 66 204 q 152 161 103 176 q 250 146 200 146 q 344 168 311 146 q 376 227 376 189 q 351 274 376 257 q 264 291 326 291 l 63 291 l 180 700 l 625 700 l 594 547 l 313 547 l 284 445 l 314 445 q 510 394 443 445 q 576 250 576 344 q 532 110 576 169 q 412 18 488 50 q 237 -14 335 -14"},"6":{ha:649,x_min:0,x_max:649,o:"m 331 -14 q 180 18 246 -14 q 77 114 114 50 q 40 271 40 177 q 56 394 40 331 q 104 514 71 457 q 190 616 138 571 q 312 688 241 661 q 475 714 383 714 q 592 700 536 714 q 683 663 648 687 l 593 523 q 532 550 565 542 q 464 557 500 557 q 392 547 424 557 q 336 518 360 537 q 294 474 311 500 q 266 419 276 449 q 260 400 262 410 q 318 433 286 421 q 403 446 356 446 q 512 422 461 446 q 594 354 562 399 q 625 244 625 309 q 587 108 625 165 q 482 18 549 50 q 331 -14 416 -14 m 329 127 q 401 153 372 127 q 430 225 430 179 q 406 283 430 262 q 341 304 382 304 q 288 292 311 304 q 252 260 265 281 q 238 210 238 238 q 248 168 238 187 q 280 138 259 150 q 329 127 300 127"},"7":{ha:632,x_min:0,x_max:632,o:"m 86 0 l 425 543 l 247 543 l 225 435 l 56 435 l 109 700 l 689 700 l 664 576 l 308 0"},"8":{ha:669,x_min:0,x_max:669,o:"m 311 -14 q 157 11 223 -14 q 54 82 91 36 q 17 187 17 127 q 57 311 17 260 q 153 382 93 356 q 136 400 144 390 q 101 495 101 440 q 138 612 101 564 q 240 688 175 661 q 389 714 305 714 q 531 690 470 714 q 626 626 592 667 q 660 528 660 584 q 624 413 660 460 q 554 355 596 377 q 587 324 573 341 q 624 221 624 281 q 584 96 624 148 q 474 14 544 43 q 311 -14 403 -14 m 314 125 q 394 150 364 125 q 425 219 425 175 q 398 278 425 257 q 327 299 372 299 q 246 274 277 299 q 215 205 215 249 q 243 146 215 168 q 314 125 271 125 m 376 428 q 440 450 415 428 q 464 509 464 471 q 442 558 464 541 q 386 575 421 575 q 322 554 347 575 q 298 494 298 532 q 320 446 298 463 q 376 428 341 428"},"9":{ha:649,x_min:0,x_max:649,o:"m 350 714 q 501 682 436 714 q 604 586 566 650 q 641 429 641 523 q 626 306 641 369 q 576 186 610 243 q 492 84 543 129 q 369 12 440 39 q 206 -14 298 -14 q 89 0 145 -14 q -2 37 33 13 l 88 177 q 148 150 116 158 q 217 143 180 143 q 289 153 257 143 q 346 182 321 163 q 388 226 370 200 q 416 281 405 251 q 421 300 419 290 q 365 268 395 279 q 285 254 328 254 q 172 278 225 254 q 88 346 120 301 q 56 456 56 391 q 94 593 56 536 q 198 682 132 650 q 350 714 265 714 m 352 573 q 280 547 310 573 q 251 475 251 521 q 275 417 251 438 q 340 396 299 396 q 393 408 370 396 q 430 441 416 419 q 443 490 443 463 q 432 532 443 513 q 402 562 422 550 q 352 573 382 573"},":":{ha:283,x_min:0,x_max:283,o:"m 168 326 q 90 356 120 326 q 60 430 60 385 q 96 518 60 485 q 182 551 132 551 q 260 522 230 551 q 289 447 289 493 q 272 384 289 411 q 228 342 256 357 q 168 326 201 326 m 101 -9 q 23 20 53 -9 q -7 95 -7 50 q 29 183 -7 150 q 115 216 65 216 q 192 187 163 216 q 222 112 222 158 q 206 49 222 76 q 162 6 189 22 q 101 -9 134 -9"},";":{ha:283,x_min:0,x_max:283,o:"m 168 326 q 90 356 120 326 q 60 430 60 385 q 96 518 60 485 q 182 551 132 551 q 260 522 230 551 q 289 447 289 493 q 272 384 289 411 q 228 342 256 357 q 168 326 201 326 m -46 -157 l 36 10 q 23 21 29 15 q -7 95 -7 50 q 29 183 -7 150 q 115 216 65 216 q 192 187 163 216 q 222 112 222 158 q 213 65 222 87 q 181 10 204 43 l 73 -157"},"<":{ha:609,x_min:0,x_max:609,o:"m 619 609 l 588 455 l 246 342 l 542 229 l 515 91 l 59 273 l 90 427"},"=":{ha:609,x_min:0,x_max:609,o:"m 85 404 l 114 549 l 607 549 l 577 404 m 34 151 l 63 296 l 556 296 l 527 151"},">":{ha:609,x_min:0,x_max:609,o:"m 22 91 l 53 245 l 395 358 l 99 471 l 127 609 l 582 427 l 551 273"},"?":{ha:597,x_min:0,x_max:597,o:"m 209 255 q 232 316 216 290 q 270 360 249 341 q 314 397 292 380 q 356 430 337 414 q 388 462 376 445 q 400 503 400 480 q 380 543 400 528 q 320 558 359 558 q 243 538 279 558 q 182 485 207 519 l 54 570 q 180 674 99 635 q 363 714 260 714 q 491 693 437 714 q 574 634 545 672 q 604 542 604 595 q 590 469 604 500 q 552 415 575 438 q 504 373 530 392 q 452 336 477 354 q 410 300 428 319 q 387 255 392 280 m 260 -9 q 182 19 213 -9 q 152 88 152 47 q 186 168 152 136 q 272 199 221 199 q 350 172 320 199 q 379 104 379 145 q 363 48 379 73 q 320 6 347 22 q 260 -9 294 -9"},"@":{ha:1036,x_min:0,x_max:1036,o:"m 456 -208 q 226 -158 323 -208 q 78 -20 130 -108 q 27 184 27 69 q 68 396 27 299 q 186 564 110 492 q 366 674 262 635 q 590 712 469 712 q 814 666 721 712 q 956 536 907 619 q 1006 343 1006 453 q 988 211 1006 274 q 936 98 970 148 q 854 20 901 49 q 745 -8 806 -8 q 618 37 656 -8 q 602 64 608 49 q 571 33 588 47 q 440 -8 520 -8 q 342 18 387 -8 q 270 91 297 43 q 244 204 244 139 q 263 314 244 262 q 316 407 282 367 q 396 470 350 447 q 498 493 443 493 q 628 441 586 493 q 642 419 636 431 l 656 485 l 819 485 l 758 179 q 759 136 751 152 q 791 120 767 120 q 834 142 817 120 q 864 197 852 163 q 881 268 875 231 q 887 336 887 305 q 852 478 887 419 q 747 570 816 538 q 573 601 678 601 q 404 570 481 601 q 274 485 328 540 q 190 356 219 430 q 160 193 160 281 q 196 41 160 106 q 300 -60 232 -24 q 464 -97 368 -97 q 558 -88 510 -97 q 651 -60 605 -79 l 678 -166 q 571 -197 631 -186 q 456 -208 511 -208 m 496 128 q 558 146 532 128 q 598 196 584 165 q 612 265 612 228 q 588 334 612 311 q 523 357 564 357 q 466 341 492 357 q 426 294 441 325 q 411 221 411 264 q 434 152 411 175 q 496 128 458 128"},A:{ha:786,x_min:0,x_max:786,o:"m -68 0 l 381 700 l 576 700 l 745 0 l 548 0 l 520 136 l 222 136 l 141 0 m 490 282 l 443 509 l 309 282"},B:{ha:769,x_min:0,x_max:769,o:"m 16 0 l 156 700 l 510 700 q 691 658 629 700 q 753 536 753 615 q 717 426 753 471 q 628 361 684 384 q 665 340 648 352 q 722 222 722 298 q 680 97 722 146 q 564 24 637 48 q 401 0 492 0 m 240 143 l 412 143 q 494 164 464 143 q 525 226 525 185 q 502 271 525 257 q 443 285 479 285 l 268 285 m 296 422 l 438 422 q 498 431 473 422 q 534 458 522 440 q 546 502 546 476 q 524 544 546 531 q 463 557 502 557 l 323 557"},C:{ha:738,x_min:0,x_max:738,o:"m 398 -14 q 212 25 291 -14 q 89 134 132 64 q 46 294 46 203 q 78 462 46 385 q 168 596 110 539 q 306 683 226 652 q 485 714 387 714 q 657 680 582 714 q 769 582 732 646 l 626 468 q 564 529 602 508 q 472 550 525 550 q 380 532 421 550 q 308 481 338 514 q 262 404 278 448 q 246 307 246 359 q 266 224 246 260 q 326 170 287 189 q 417 150 364 150 q 508 169 464 150 q 588 231 551 188 l 705 116 q 569 16 646 45 q 398 -14 492 -14"},D:{ha:826,x_min:0,x_max:826,o:"m 16 0 l 156 700 l 460 700 q 648 664 570 700 q 769 562 727 628 q 811 406 811 497 q 779 238 811 313 q 689 110 747 164 q 551 28 631 57 q 374 0 471 0 m 246 158 l 380 158 q 506 189 455 158 q 584 274 557 220 q 611 394 611 327 q 592 474 611 441 q 534 524 572 507 q 438 542 495 542 l 322 542"},E:{ha:672,x_min:0,x_max:672,o:"m 242 153 l 609 153 l 577 0 l 16 0 l 156 700 l 704 700 l 673 547 l 320 547 l 297 429 l 608 429 l 579 281 l 267 281"},F:{ha:642,x_min:0,x_max:642,o:"m 214 0 l 16 0 l 156 700 l 704 700 l 673 547 l 323 547 l 292 393 l 601 393 l 570 240 l 262 240"},G:{ha:770,x_min:0,x_max:770,o:"m 398 -14 q 212 25 292 -14 q 90 134 133 64 q 46 294 46 203 q 78 462 46 385 q 169 596 110 539 q 310 683 228 652 q 491 714 391 714 q 672 681 596 714 q 796 585 749 648 l 654 473 q 578 533 619 516 q 482 550 537 550 q 384 532 428 550 q 310 481 341 514 q 262 404 279 448 q 246 307 246 359 q 267 224 246 260 q 328 170 288 189 q 425 150 368 150 q 514 165 471 150 q 518 167 516 166 l 558 365 l 733 365 l 674 70 q 549 8 620 30 q 398 -14 478 -14"},H:{ha:806,x_min:0,x_max:806,o:"m 623 700 l 821 700 l 681 0 l 483 0 l 538 273 l 269 273 l 214 0 l 16 0 l 156 700 l 354 700 l 301 437 l 570 437"},I:{ha:339,x_min:0,x_max:339,o:"m 16 0 l 156 700 l 354 700 l 214 0"},J:{ha:550,x_min:0,x_max:550,o:"m 187 -14 q 42 13 103 -14 q -53 93 -18 40 l 75 215 q 126 162 97 180 q 190 144 155 144 q 256 168 231 144 q 291 238 282 191 l 352 547 l 110 547 l 141 700 l 579 700 l 488 249 q 430 94 469 152 q 330 12 391 37 q 187 -14 269 -14"},K:{ha:752,x_min:0,x_max:752,o:"m 16 0 l 156 700 l 351 700 l 294 414 l 610 700 l 843 700 l 483 378 l 718 0 l 497 0 l 336 252 l 245 170 l 211 0"},L:{ha:610,x_min:0,x_max:610,o:"m 16 0 l 156 700 l 354 700 l 246 157 l 580 157 l 548 0"},M:{ha:954,x_min:0,x_max:954,o:"m 16 0 l 156 700 l 317 700 l 481 295 l 799 700 l 968 700 l 830 0 l 647 0 l 719 369 l 486 69 l 399 69 l 272 369 l 198 0"},N:{ha:806,x_min:0,x_max:806,o:"m 16 0 l 156 700 l 319 700 l 551 317 l 627 700 l 821 700 l 681 0 l 518 0 l 287 384 l 210 0"},O:{ha:846,x_min:0,x_max:846,o:"m 394 -14 q 208 26 286 -14 q 88 134 130 65 q 46 294 46 203 q 78 462 46 386 q 168 596 110 539 q 306 683 226 652 q 483 714 387 714 q 669 674 591 714 q 789 566 747 635 q 831 406 831 497 q 799 238 831 314 q 709 104 767 161 q 570 17 651 48 q 394 -14 490 -14 m 411 150 q 504 169 463 150 q 572 222 544 188 q 616 301 601 257 q 631 394 631 345 q 612 476 631 441 q 556 530 592 511 q 466 550 519 550 q 374 531 415 550 q 304 478 333 512 q 261 399 276 443 q 246 306 246 355 q 266 224 246 260 q 322 170 285 189 q 411 150 358 150"},P:{ha:737,x_min:0,x_max:737,o:"m 16 0 l 156 700 l 452 700 q 662 641 588 700 q 736 475 736 582 q 694 321 736 387 q 574 219 652 255 q 390 183 496 183 l 250 183 l 214 0 m 281 339 l 399 339 q 500 370 464 339 q 536 458 536 401 q 507 523 536 502 q 426 544 478 544 l 322 544"},Q:{ha:846,x_min:0,x_max:846,o:"m 585 -169 q 405 -120 480 -169 q 298 -5 342 -80 q 208 26 249 5 q 88 134 130 65 q 46 294 46 203 q 78 462 46 386 q 168 596 110 539 q 306 683 226 652 q 483 714 387 714 q 669 674 591 714 q 789 566 747 635 q 831 406 831 497 q 799 238 831 314 q 709 104 767 161 q 571 17 651 48 q 529 3 550 9 q 539 -7 534 -3 q 602 -28 564 -28 q 660 -16 630 -28 q 712 19 689 -3 l 785 -98 q 697 -151 749 -133 q 585 -169 645 -169 m 411 150 q 504 169 463 150 q 572 222 544 188 q 616 301 601 257 q 631 394 631 345 q 612 476 631 441 q 556 530 592 511 q 466 550 519 550 q 374 531 415 550 q 304 478 333 512 q 261 399 276 443 q 246 306 246 355 q 266 224 246 260 q 322 170 285 189 q 411 150 358 150"},R:{ha:740,x_min:0,x_max:740,o:"m 16 0 l 156 700 l 455 700 q 664 641 590 700 q 737 477 737 582 q 694 324 737 389 q 574 222 652 258 q 543 209 559 215 l 662 0 l 455 0 l 351 186 l 251 186 l 214 0 m 281 339 l 399 339 q 501 370 465 339 q 537 458 537 401 q 508 523 537 502 q 427 544 479 544 l 323 544"},S:{ha:647,x_min:0,x_max:647,o:"m 277 -14 q 162 -4 217 -14 q 62 22 107 5 q -15 61 17 40 l 63 209 q 138 172 99 187 q 216 148 176 156 q 296 140 256 140 q 361 148 334 140 q 402 169 388 155 q 416 202 416 183 q 398 236 416 223 q 349 257 379 248 q 282 276 319 266 q 210 298 246 285 q 143 332 173 312 q 94 385 113 353 q 76 464 76 417 q 117 596 76 540 q 234 683 158 652 q 412 714 309 714 q 552 698 487 714 q 664 654 617 683 l 592 507 q 502 546 551 533 q 400 560 452 560 q 332 551 360 560 q 288 526 303 542 q 274 492 274 511 q 292 459 274 472 q 340 437 310 446 q 408 418 371 428 q 480 396 444 409 q 547 364 516 384 q 596 312 578 343 q 614 235 614 281 q 573 104 614 160 q 456 17 532 48 q 277 -14 380 -14"},T:{ha:635,x_min:0,x_max:635,o:"m 164 0 l 273 543 l 58 543 l 90 700 l 717 700 l 685 543 l 471 543 l 362 0"},U:{ha:772,x_min:0,x_max:772,o:"m 350 -14 q 174 26 245 -14 q 75 140 104 67 q 65 312 46 214 l 143 700 l 341 700 l 264 315 q 277 190 247 231 q 374 150 307 150 q 473 188 436 150 q 528 315 510 226 l 605 700 l 800 700 l 721 303 q 597 66 690 147 q 350 -14 504 -14"},V:{ha:766,x_min:0,x_max:766,o:"m 231 0 l 72 700 l 275 700 l 375 245 l 661 700 l 865 700 l 426 0"},W:{ha:1172,x_min:0,x_max:1172,o:"m 182 0 l 95 700 l 291 700 l 344 252 l 581 700 l 764 700 l 814 247 l 1052 700 l 1248 700 l 881 0 l 668 0 l 618 422 l 394 0"},X:{ha:737,x_min:0,x_max:737,o:"m -57 0 l 276 362 l 97 700 l 308 700 l 410 499 l 588 700 l 812 700 l 493 351 l 683 0 l 469 0 l 363 210 l 180 0"},Y:{ha:710,x_min:0,x_max:710,o:"m 201 0 l 251 253 l 74 700 l 272 700 l 383 422 l 606 700 l 807 700 l 448 248 l 399 0"},Z:{ha:679,x_min:0,x_max:679,o:"m -20 0 l 5 124 l 436 543 l 99 543 l 130 700 l 733 700 l 708 576 l 277 157 l 639 157 l 607 0"},"[":{ha:389,x_min:0,x_max:389,o:"m -23 -194 l 164 742 l 469 742 l 440 596 l 325 596 l 197 -48 l 312 -48 l 283 -194"},"\\":{ha:415,x_min:0,x_max:415,o:"m 378 -100 l 216 -100 l 68 842 l 230 842"},"]":{ha:389,x_min:0,x_max:389,o:"m 226 -194 l -79 -194 l -50 -48 l 65 -48 l 194 596 l 78 596 l 107 742 l 413 742"},"^":{ha:610,x_min:0,x_max:610,o:"m 21 140 l 287 560 l 438 560 l 537 140 l 400 140 l 341 414 l 172 140"},_:{ha:500,x_min:0,x_max:500,o:"m -75 -104 l -54 0 l 446 0 l 425 -104"},"`":{ha:600,x_min:0,x_max:600,o:"m 329 607 l 171 759 l 361 759 l 464 607"},a:{ha:695,x_min:0,x_max:695,o:"m 254 -9 q 143 20 196 -9 q 58 104 90 49 q 25 238 25 159 q 48 363 25 306 q 112 462 71 420 q 206 528 152 504 q 319 551 259 551 q 433 526 385 551 q 485 477 464 508 l 498 542 l 688 542 l 580 0 l 400 0 l 411 51 q 381 28 397 38 q 254 -9 327 -9 m 320 144 q 387 163 358 144 q 432 216 416 182 q 449 295 449 250 q 422 370 449 342 q 346 399 395 399 q 280 380 309 399 q 234 326 250 360 q 217 247 217 292 q 244 172 217 200 q 320 144 271 144"},b:{ha:695,x_min:0,x_max:695,o:"m 7 0 l 155 742 l 345 742 l 297 500 q 328 522 312 512 q 441 551 377 551 q 552 522 500 551 q 638 438 605 493 q 670 305 670 384 q 647 180 670 237 q 584 80 624 123 q 490 14 543 38 q 376 -9 437 -9 q 273 12 318 -9 q 203 76 228 32 l 188 0 m 349 144 q 416 163 387 144 q 462 216 445 182 q 478 295 478 250 q 451 370 478 342 q 375 399 424 399 q 308 380 338 399 q 262 326 279 360 q 246 247 246 292 q 273 172 246 200 q 349 144 300 144"},c:{ha:606,x_min:0,x_max:606,o:"m 310 -9 q 159 22 223 -9 q 60 108 95 53 q 24 238 24 164 q 67 398 24 328 q 186 510 110 469 q 360 551 262 551 q 520 512 452 551 q 617 404 587 473 l 455 327 q 412 382 440 365 q 350 399 385 399 q 282 380 312 399 q 234 327 251 360 q 217 249 217 294 q 244 173 217 202 q 323 144 271 144 q 390 160 360 144 q 440 215 419 177 l 579 131 q 470 28 540 65 q 310 -9 399 -9"},d:{ha:698,x_min:0,x_max:698,o:"m 257 -9 q 146 20 199 -9 q 61 104 94 49 q 28 238 28 159 q 51 363 28 306 q 114 462 74 420 q 208 528 155 504 q 323 551 262 551 q 427 531 382 551 q 488 479 464 514 l 541 742 l 731 742 l 583 0 l 403 0 l 414 52 q 371 20 394 34 q 257 -9 321 -9 m 323 144 q 390 163 362 144 q 436 216 419 182 q 452 295 452 250 q 425 370 452 342 q 350 399 398 399 q 284 380 313 399 q 238 326 254 360 q 221 247 221 292 q 248 172 221 200 q 323 144 275 144"},e:{ha:638,x_min:0,x_max:638,o:"m 313 -9 q 162 22 226 -9 q 61 108 97 52 q 25 238 25 163 q 66 398 25 328 q 181 510 107 469 q 353 551 255 551 q 496 521 436 551 q 588 438 555 491 q 620 313 620 384 q 617 267 620 289 q 609 224 614 245 l 211 224 q 241 163 216 184 q 334 136 272 136 q 404 148 370 136 q 465 180 439 159 l 544 61 q 434 7 493 23 q 313 -9 374 -9 m 222 324 l 445 324 q 440 361 446 345 q 404 402 429 387 q 344 416 380 416 q 268 393 298 416 q 225 331 239 370 q 222 324 223 327"},f:{ha:406,x_min:0,x_max:406,o:"m 29 0 l 105 380 l 25 380 l 54 522 l 134 522 l 138 544 q 221 694 157 637 q 393 751 285 751 q 466 744 432 751 q 524 722 500 737 l 451 589 q 395 605 426 605 q 346 588 363 605 q 320 533 329 570 l 318 522 l 446 522 l 418 380 l 295 380 l 219 0"},g:{ha:705,x_min:0,x_max:705,o:"m 252 -203 q 104 -186 171 -203 q -12 -133 37 -168 l 73 -1 q 154 -42 105 -26 q 257 -57 204 -57 q 366 -26 331 -57 q 413 65 401 6 l 417 84 q 387 61 403 71 q 266 28 335 28 q 148 56 202 28 q 62 134 94 83 q 29 259 29 186 q 52 373 29 320 q 114 466 74 426 q 209 528 155 506 q 326 551 263 551 q 433 528 386 551 q 501 456 477 506 l 517 542 l 698 542 l 610 100 q 486 -132 578 -61 q 252 -203 395 -203 m 322 180 q 388 196 360 180 q 434 242 417 212 q 450 310 450 271 q 424 374 450 350 q 349 399 397 399 q 282 382 311 399 q 236 336 253 366 q 220 268 220 307 q 248 204 220 228 q 322 180 275 180"},h:{ha:696,x_min:0,x_max:696,o:"m 454 551 q 570 522 521 551 q 639 438 618 494 q 643 300 660 383 l 583 0 l 393 0 l 449 282 q 442 362 460 334 q 378 390 425 390 q 297 360 330 390 q 251 268 264 330 l 197 0 l 7 0 l 155 742 l 345 742 l 296 498 q 337 523 315 513 q 454 551 394 551"},i:{ha:312,x_min:0,x_max:312,o:"m 7 0 l 115 542 l 304 542 l 196 0 m 235 602 q 156 630 185 602 q 126 696 126 657 q 160 773 126 742 q 249 804 194 804 q 328 778 299 804 q 358 713 358 752 q 324 633 358 664 q 235 602 291 602"},j:{ha:319,x_min:0,x_max:319,o:"m -46 -203 q -119 -196 -85 -203 q -181 -175 -153 -188 l -108 -40 q -51 -56 -83 -56 q -6 -39 -23 -56 q 17 15 10 -22 l 123 542 l 313 542 l 208 21 q -46 -203 164 -203 m 243 602 q 164 630 193 602 q 134 696 134 657 q 168 773 134 742 q 257 804 202 804 q 336 778 307 804 q 366 713 366 752 q 332 633 366 664 q 243 602 299 602"},k:{ha:673,x_min:0,x_max:673,o:"m 7 0 l 155 742 l 345 742 l 268 357 l 487 542 l 727 542 l 449 302 l 631 0 l 409 0 l 298 185 l 220 117 l 197 0"},l:{ha:313,x_min:0,x_max:313,o:"m 7 0 l 155 742 l 345 742 l 197 0"},m:{ha:1045,x_min:0,x_max:1045,o:"m 808 551 q 920 522 873 551 q 988 438 967 494 q 991 300 1008 383 l 932 0 l 742 0 l 798 280 q 792 362 809 335 q 734 390 774 390 q 662 362 691 390 q 619 273 632 335 l 564 0 l 374 0 l 431 280 q 424 362 442 335 q 367 390 407 390 q 294 362 324 390 q 251 271 264 334 l 197 0 l 7 0 l 115 542 l 295 542 l 284 487 q 333 523 306 509 q 446 551 387 551 q 534 534 494 551 q 599 481 573 516 q 609 464 605 473 q 669 514 636 494 q 808 551 730 551"},n:{ha:696,x_min:0,x_max:696,o:"m 454 551 q 571 522 523 551 q 640 438 619 494 q 643 300 660 383 l 583 0 l 393 0 l 449 282 q 442 362 460 334 q 378 390 425 390 q 297 360 330 390 q 251 268 264 330 l 197 0 l 7 0 l 115 542 l 295 542 l 284 487 q 337 523 308 509 q 454 551 394 551"},o:{ha:665,x_min:0,x_max:665,o:"m 308 -9 q 158 22 222 -9 q 59 108 94 53 q 24 238 24 164 q 67 398 24 328 q 185 510 110 469 q 357 551 260 551 q 508 520 444 551 q 606 435 571 490 q 641 305 641 380 q 598 144 641 215 q 480 32 555 73 q 308 -9 405 -9 m 319 142 q 386 162 357 142 q 432 215 415 181 q 448 295 448 249 q 422 370 448 340 q 346 400 395 400 q 279 381 308 400 q 234 328 250 362 q 217 247 217 293 q 244 170 217 199 q 319 142 271 142"},p:{ha:695,x_min:0,x_max:695,o:"m 376 -9 q 263 17 311 -9 q 210 65 231 34 l 158 -194 l -32 -194 l 115 542 l 295 542 l 284 490 q 315 515 298 504 q 441 551 369 551 q 552 522 500 551 q 638 438 605 493 q 670 305 670 384 q 647 180 670 237 q 584 80 624 123 q 490 14 543 38 q 376 -9 437 -9 m 349 144 q 416 163 387 144 q 462 216 445 182 q 478 295 478 250 q 451 370 478 342 q 375 399 424 399 q 308 380 338 399 q 262 326 279 360 q 246 247 246 292 q 273 172 246 200 q 349 144 300 144"},q:{ha:695,x_min:0,x_max:695,o:"m 254 -9 q 143 20 196 -9 q 58 104 90 49 q 25 238 25 159 q 48 363 25 306 q 112 462 71 420 q 206 528 152 504 q 319 551 259 551 q 433 526 385 551 q 491 466 470 505 l 507 542 l 688 542 l 541 -194 l 351 -194 l 398 40 q 381 28 390 33 q 254 -9 327 -9 m 320 144 q 387 163 358 144 q 432 216 416 182 q 449 295 449 250 q 422 370 449 342 q 346 399 395 399 q 280 380 309 399 q 234 326 250 360 q 217 247 217 292 q 244 172 217 200 q 320 144 271 144"},r:{ha:443,x_min:0,x_max:443,o:"m 7 0 l 115 542 l 295 542 l 283 483 q 341 524 309 509 q 479 551 400 551 l 446 380 q 424 382 434 382 q 403 383 414 383 q 302 354 341 383 q 249 256 262 324 l 197 0"},s:{ha:547,x_min:0,x_max:547,o:"m 219 -9 q 83 6 147 -9 q -16 44 19 22 l 53 177 q 142 140 91 153 q 241 127 193 127 q 308 138 288 127 q 328 166 328 148 q 308 190 328 182 q 255 202 287 197 q 188 215 223 207 q 120 238 152 223 q 68 280 88 253 q 47 354 47 308 q 85 463 47 419 q 188 529 123 507 q 336 551 254 551 q 448 540 394 551 q 542 508 502 529 l 475 375 q 393 408 435 399 q 314 416 351 416 q 247 404 267 416 q 227 375 227 392 q 248 352 227 360 q 300 338 268 343 q 367 324 331 332 q 434 302 403 317 q 486 260 466 287 q 507 187 507 233 q 468 79 507 123 q 365 13 430 35 q 219 -9 300 -9"},t:{ha:448,x_min:0,x_max:448,o:"m 247 -9 q 139 16 184 -9 q 75 88 94 40 q 69 201 56 135 l 109 401 l 29 401 l 58 542 l 137 542 l 161 663 l 351 663 l 327 542 l 450 542 l 422 401 l 299 401 l 259 202 q 266 154 254 171 q 307 138 278 138 q 336 142 322 138 q 364 154 350 146 l 388 23 q 322 -2 358 6 q 247 -9 285 -9"},u:{ha:692,x_min:0,x_max:692,o:"m 240 -9 q 126 20 174 -9 q 57 104 77 48 q 53 243 37 160 l 113 542 l 303 542 l 247 261 q 254 181 236 209 q 316 153 271 153 q 396 182 364 153 q 441 274 429 212 l 495 542 l 685 542 l 577 0 l 397 0 l 408 56 q 357 20 385 34 q 240 -9 300 -9"},v:{ha:620,x_min:0,x_max:620,o:"m 158 0 l 43 542 l 231 542 l 297 210 l 498 542 l 686 542 l 355 0"},w:{ha:961,x_min:0,x_max:961,o:"m 141 0 l 49 542 l 223 542 l 272 216 l 451 542 l 614 542 l 664 216 l 843 542 l 1021 542 l 725 0 l 537 0 l 486 295 l 327 0"},x:{ha:619,x_min:0,x_max:619,o:"m -60 0 l 211 278 l 68 542 l 267 542 l 339 404 l 468 542 l 677 542 l 415 269 l 562 0 l 360 0 l 286 142 l 155 0"},y:{ha:620,x_min:0,x_max:620,o:"m 70 -203 q -16 -190 27 -203 q -83 -156 -58 -177 l 2 -22 q 40 -44 19 -36 q 86 -53 61 -53 q 134 -39 114 -53 q 166 -5 151 -27 l 43 542 l 232 542 l 300 209 l 500 542 l 686 542 l 339 -24 q 257 -132 297 -93 q 172 -187 217 -171 q 70 -203 127 -203"},z:{ha:556,x_min:0,x_max:556,o:"m -22 0 l 0 112 l 302 401 l 66 401 l 94 542 l 577 542 l 554 431 l 254 142 l 507 142 l 478 0"},"{":{ha:414,x_min:0,x_max:414,o:"m 242 -194 q 136 -170 178 -194 q 76 -100 93 -145 q 72 3 60 -56 l 102 156 q 97 190 107 179 q 68 201 87 201 l 35 201 l 64 347 l 97 347 q 131 358 117 347 q 149 392 145 370 l 181 548 q 260 696 202 650 q 429 742 318 742 l 495 742 l 466 596 l 452 596 q 393 580 412 596 q 367 527 374 563 l 340 397 q 314 320 331 347 q 264 280 296 292 q 238 272 253 276 q 278 246 264 263 q 291 151 304 213 l 267 27 q 274 -28 259 -9 q 323 -48 290 -48 l 337 -48 l 308 -194"},"|":{ha:314,x_min:0,x_max:314,o:"m -22 -194 l 165 742 l 338 742 l 151 -194"},"}":{ha:414,x_min:0,x_max:414,o:"m -80 -194 l -51 -48 l -37 -48 q 22 -32 3 -48 q 48 21 41 -15 l 75 151 q 102 228 85 201 q 152 269 119 256 q 176 276 163 273 q 138 303 151 286 q 124 397 112 335 l 148 521 q 140 576 156 557 q 92 596 125 596 l 78 596 l 107 742 l 173 742 q 280 718 238 742 q 338 648 322 693 q 343 545 355 604 l 313 392 q 318 358 309 370 q 347 347 328 347 l 381 347 l 351 201 l 318 201 q 284 190 298 201 q 266 156 271 179 l 234 0 q 156 -148 214 -102 q -14 -194 97 -194"},"~":{ha:609,x_min:0,x_max:609,o:"m 411 243 q 348 256 375 243 q 302 284 322 268 q 266 312 283 299 q 228 324 248 324 q 183 306 201 324 q 159 254 165 287 l 41 254 q 79 366 51 320 q 147 435 107 411 q 231 459 187 459 q 293 446 267 459 q 339 418 319 434 q 376 390 359 403 q 414 378 394 378 q 458 397 440 378 q 482 449 476 416 l 600 449 q 562 337 590 383 q 496 267 535 291 q 411 243 456 243"},\u00E0:{ha:695,x_min:0,x_max:695,o:"m 254 -9 q 143 20 196 -9 q 58 104 90 49 q 25 238 25 159 q 48 363 25 306 q 112 462 71 420 q 206 528 152 504 q 319 551 259 551 q 433 526 385 551 q 485 477 464 508 l 498 542 l 688 542 l 580 0 l 400 0 l 411 51 q 381 28 397 38 q 254 -9 327 -9 m 320 144 q 387 163 358 144 q 432 216 416 182 q 449 295 449 250 q 422 370 449 342 q 346 399 395 399 q 280 380 309 399 q 234 326 250 360 q 217 247 217 292 q 244 172 217 200 q 320 144 271 144 m 387 607 l 229 759 l 419 759 l 522 607"},\u00E2:{ha:695,x_min:0,x_max:695,o:"m 254 -9 q 143 20 196 -9 q 58 104 90 49 q 25 238 25 159 q 48 363 25 306 q 112 462 71 420 q 206 528 152 504 q 319 551 259 551 q 433 526 385 551 q 485 477 464 508 l 498 542 l 688 542 l 580 0 l 400 0 l 411 51 q 381 28 397 38 q 254 -9 327 -9 m 320 144 q 387 163 358 144 q 432 216 416 182 q 449 295 449 250 q 422 370 449 342 q 346 399 395 399 q 280 380 309 399 q 234 326 250 360 q 217 247 217 292 q 244 172 217 200 q 320 144 271 144 m 212 607 l 364 759 l 528 759 l 637 607 l 514 607 l 439 684 l 342 607"},\u00E4:{ha:695,x_min:0,x_max:695,o:"m 254 -9 q 143 20 196 -9 q 58 104 90 49 q 25 238 25 159 q 48 363 25 306 q 112 462 71 420 q 206 528 152 504 q 319 551 259 551 q 433 526 385 551 q 485 477 464 508 l 498 542 l 688 542 l 580 0 l 400 0 l 411 51 q 381 28 397 38 q 254 -9 327 -9 m 320 144 q 387 163 358 144 q 432 216 416 182 q 449 295 449 250 q 422 370 449 342 q 346 399 395 399 q 280 380 309 399 q 234 326 250 360 q 217 247 217 292 q 244 172 217 200 q 320 144 271 144 m 540 606 q 487 624 508 606 q 466 676 466 643 q 492 739 466 715 q 551 763 517 763 q 604 744 582 763 q 625 692 625 724 q 599 630 625 653 q 540 606 573 606 m 328 606 q 275 624 296 606 q 254 676 254 643 q 280 739 254 715 q 339 763 305 763 q 392 744 371 763 q 413 692 413 724 q 387 630 413 653 q 328 606 361 606"},\u00E7:{ha:606,x_min:0,x_max:606,o:"m 212 -236 q 156 -230 183 -236 q 112 -215 130 -224 l 152 -140 q 182 -150 165 -146 q 217 -154 199 -154 q 255 -146 243 -154 q 268 -126 267 -138 q 261 -108 270 -114 q 230 -101 252 -101 l 190 -101 l 234 -2 q 159 22 193 5 q 60 108 95 53 q 24 238 24 164 q 67 398 24 328 q 186 510 110 469 q 360 551 262 551 q 520 512 452 551 q 617 404 587 473 l 455 327 q 412 382 440 365 q 350 399 385 399 q 282 380 312 399 q 234 327 251 360 q 217 249 217 294 q 244 173 217 202 q 323 144 271 144 q 390 160 360 144 q 440 215 419 177 l 579 131 q 470 28 540 65 q 331 -8 407 -5 l 313 -51 q 369 -80 352 -57 q 382 -132 386 -103 q 330 -208 375 -180 q 212 -236 284 -236"},\u00E9:{ha:638,x_min:0,x_max:638,o:"m 313 -9 q 162 22 226 -9 q 61 108 97 52 q 25 238 25 163 q 66 398 25 328 q 181 510 107 469 q 353 551 255 551 q 496 521 436 551 q 588 438 555 491 q 620 313 620 384 q 617 267 620 289 q 609 224 614 245 l 211 224 q 241 163 216 184 q 334 136 272 136 q 404 148 370 136 q 465 180 439 159 l 544 61 q 434 7 493 23 q 313 -9 374 -9 m 222 324 l 445 324 q 440 361 446 345 q 404 402 429 387 q 344 416 380 416 q 268 393 298 416 q 225 331 239 370 q 222 324 223 327 m 288 607 l 438 759 l 634 759 l 429 607"},\u00E8:{ha:638,x_min:0,x_max:638,o:"m 313 -9 q 162 22 226 -9 q 61 108 97 52 q 25 238 25 163 q 66 398 25 328 q 181 510 107 469 q 353 551 255 551 q 496 521 436 551 q 588 438 555 491 q 620 313 620 384 q 617 267 620 289 q 609 224 614 245 l 211 224 q 241 163 216 184 q 334 136 272 136 q 404 148 370 136 q 465 180 439 159 l 544 61 q 434 7 493 23 q 313 -9 374 -9 m 222 324 l 445 324 q 440 361 446 345 q 404 402 429 387 q 344 416 380 416 q 268 393 298 416 q 225 331 239 370 q 222 324 223 327 m 351 607 l 193 759 l 383 759 l 486 607"},\u00EA:{ha:638,x_min:0,x_max:638,o:"m 313 -9 q 162 22 226 -9 q 61 108 97 52 q 25 238 25 163 q 66 398 25 328 q 181 510 107 469 q 353 551 255 551 q 496 521 436 551 q 588 438 555 491 q 620 313 620 384 q 617 267 620 289 q 609 224 614 245 l 211 224 q 241 163 216 184 q 334 136 272 136 q 404 148 370 136 q 465 180 439 159 l 544 61 q 434 7 493 23 q 313 -9 374 -9 m 222 324 l 445 324 q 440 361 446 345 q 404 402 429 387 q 344 416 380 416 q 268 393 298 416 q 225 331 239 370 q 222 324 223 327 m 176 607 l 328 759 l 492 759 l 601 607 l 478 607 l 403 684 l 306 607"},\u00EB:{ha:638,x_min:0,x_max:638,o:"m 313 -9 q 162 22 226 -9 q 61 108 97 52 q 25 238 25 163 q 66 398 25 328 q 181 510 107 469 q 353 551 255 551 q 496 521 436 551 q 588 438 555 491 q 620 313 620 384 q 617 267 620 289 q 609 224 614 245 l 211 224 q 241 163 216 184 q 334 136 272 136 q 404 148 370 136 q 465 180 439 159 l 544 61 q 434 7 493 23 q 313 -9 374 -9 m 222 324 l 445 324 q 440 361 446 345 q 404 402 429 387 q 344 416 380 416 q 268 393 298 416 q 225 331 239 370 q 222 324 223 327 m 504 606 q 451 624 472 606 q 430 676 430 643 q 456 739 430 715 q 515 763 481 763 q 568 744 546 763 q 589 692 589 724 q 563 630 589 653 q 504 606 537 606 m 292 606 q 239 624 260 606 q 218 676 218 643 q 244 739 218 715 q 303 763 269 763 q 356 744 335 763 q 377 692 377 724 q 351 630 377 653 q 292 606 325 606"},\u00EE:{ha:312,x_min:0,x_max:312,o:"m 7 0 l 115 542 l 304 542 l 196 0 m 37 607 l 165 759 l 326 759 l 411 607 l 290 607 l 237 676 l 166 607"},\u00EF:{ha:312,x_min:0,x_max:312,o:"m 7 0 l 115 542 l 304 542 l 196 0 m 321 606 q 272 626 292 606 q 252 676 252 645 q 274 738 252 714 q 332 763 297 763 q 380 743 360 763 q 400 692 400 723 q 378 630 400 654 q 321 606 355 606 m 145 606 q 96 626 116 606 q 76 676 76 645 q 98 738 76 714 q 156 763 121 763 q 204 742 185 763 q 224 690 224 722 q 202 630 224 653 q 145 606 179 606"},\u00F4:{ha:665,x_min:0,x_max:665,o:"m 308 -9 q 158 22 222 -9 q 59 108 94 53 q 24 238 24 164 q 67 398 24 328 q 185 510 110 469 q 357 551 260 551 q 508 520 444 551 q 606 435 571 490 q 641 305 641 380 q 598 144 641 215 q 480 32 555 73 q 308 -9 405 -9 m 319 142 q 386 162 357 142 q 432 215 415 181 q 448 295 448 249 q 422 370 448 340 q 346 400 395 400 q 279 381 308 400 q 234 328 250 362 q 217 247 217 293 q 244 170 217 199 q 319 142 271 142 m 184 607 l 336 759 l 500 759 l 609 607 l 486 607 l 411 684 l 314 607"},\u00F6:{ha:665,x_min:0,x_max:665,o:"m 308 -9 q 158 22 222 -9 q 59 108 94 53 q 24 238 24 164 q 67 398 24 328 q 185 510 110 469 q 357 551 260 551 q 508 520 444 551 q 606 435 571 490 q 641 305 641 380 q 598 144 641 215 q 480 32 555 73 q 308 -9 405 -9 m 319 142 q 386 162 357 142 q 432 215 415 181 q 448 295 448 249 q 422 370 448 340 q 346 400 395 400 q 279 381 308 400 q 234 328 250 362 q 217 247 217 293 q 244 170 217 199 q 319 142 271 142 m 512 606 q 459 624 480 606 q 438 676 438 643 q 464 739 438 715 q 523 763 489 763 q 576 744 554 763 q 597 692 597 724 q 571 630 597 653 q 512 606 545 606 m 300 606 q 247 624 268 606 q 226 676 226 643 q 252 739 226 715 q 311 763 277 763 q 364 744 343 763 q 385 692 385 724 q 359 630 385 653 q 300 606 333 606"},\u00F9:{ha:692,x_min:0,x_max:692,o:"m 240 -9 q 126 20 174 -9 q 57 104 77 48 q 53 243 37 160 l 113 542 l 303 542 l 247 261 q 254 181 236 209 q 316 153 271 153 q 396 182 364 153 q 441 274 429 212 l 495 542 l 685 542 l 577 0 l 397 0 l 408 56 q 357 20 385 34 q 240 -9 300 -9 m 374 607 l 216 759 l 406 759 l 509 607"},\u00FB:{ha:692,x_min:0,x_max:692,o:"m 240 -9 q 126 20 174 -9 q 57 104 77 48 q 53 243 37 160 l 113 542 l 303 542 l 247 261 q 254 181 236 209 q 316 153 271 153 q 396 182 364 153 q 441 274 429 212 l 495 542 l 685 542 l 577 0 l 397 0 l 408 56 q 357 20 385 34 q 240 -9 300 -9 m 200 607 l 352 759 l 516 759 l 625 607 l 502 607 l 427 684 l 330 607"},\u00FC:{ha:692,x_min:0,x_max:692,o:"m 240 -9 q 126 20 174 -9 q 57 104 77 48 q 53 243 37 160 l 113 542 l 303 542 l 247 261 q 254 181 236 209 q 316 153 271 153 q 396 182 364 153 q 441 274 429 212 l 495 542 l 685 542 l 577 0 l 397 0 l 408 56 q 357 20 385 34 q 240 -9 300 -9 m 528 606 q 475 624 496 606 q 454 676 454 643 q 480 739 454 715 q 539 763 505 763 q 592 744 570 763 q 613 692 613 724 q 587 630 613 653 q 528 606 561 606 m 316 606 q 263 624 284 606 q 242 676 242 643 q 268 739 242 715 q 327 763 293 763 q 380 744 359 763 q 401 692 401 724 q 375 630 401 653 q 316 606 349 606"},\u00FF:{ha:620,x_min:0,x_max:620,o:"m 70 -203 q -16 -190 27 -203 q -83 -156 -58 -177 l 2 -22 q 40 -44 19 -36 q 86 -53 61 -53 q 134 -39 114 -53 q 166 -5 151 -27 l 43 542 l 232 542 l 300 209 l 500 542 l 686 542 l 339 -24 q 257 -132 297 -93 q 172 -187 217 -171 q 70 -203 127 -203 m 483 606 q 430 624 451 606 q 409 676 409 643 q 434 739 409 715 q 494 763 460 763 q 546 744 525 763 q 568 692 568 724 q 542 630 568 653 q 483 606 516 606 m 271 606 q 218 624 239 606 q 197 676 197 643 q 222 739 197 715 q 282 763 248 763 q 335 744 314 763 q 356 692 356 724 q 330 630 356 653 q 271 606 304 606"},\u0153:{ha:1057,x_min:0,x_max:1057,o:"m 297 -9 q 154 22 215 -9 q 58 108 92 53 q 25 238 25 164 q 66 398 25 328 q 180 510 107 469 q 346 551 252 551 q 488 521 427 551 q 556 469 528 500 q 612 510 581 492 q 772 551 682 551 q 914 521 855 551 q 1006 438 974 491 q 1039 313 1039 384 q 1036 267 1039 289 q 1028 224 1033 245 l 629 224 q 660 163 634 184 q 753 136 691 136 q 824 148 789 136 q 884 180 858 159 l 963 61 q 852 7 912 23 q 732 -9 793 -9 q 592 22 653 -9 q 520 75 549 42 q 462 32 494 50 q 297 -9 390 -9 m 320 144 q 387 163 358 144 q 432 216 416 182 q 449 295 449 250 q 422 370 449 342 q 346 399 395 399 q 280 380 309 399 q 234 326 250 360 q 217 247 217 292 q 244 172 217 200 q 320 144 271 144 m 641 324 l 864 324 q 859 361 865 345 q 824 402 848 387 q 763 416 799 416 q 688 393 717 416 q 643 331 658 370 q 641 324 642 327"},\u00C0:{ha:786,x_min:0,x_max:786,o:"m -68 0 l 381 700 l 576 700 l 745 0 l 548 0 l 520 136 l 222 136 l 141 0 m 490 282 l 443 509 l 309 282 m 451 757 l 293 909 l 483 909 l 586 757"},\u00C2:{ha:786,x_min:0,x_max:786,o:"m -68 0 l 381 700 l 576 700 l 745 0 l 548 0 l 520 136 l 222 136 l 141 0 m 490 282 l 443 509 l 309 282 m 281 757 l 433 909 l 597 909 l 706 757 l 583 757 l 508 834 l 411 757"},\u00C7:{ha:738,x_min:0,x_max:738,o:"m 398 -14 q 392 -14 395 -14 l 377 -51 q 433 -80 416 -57 q 446 -132 450 -103 q 394 -208 439 -180 q 276 -236 348 -236 q 220 -230 247 -236 q 176 -215 194 -224 l 216 -140 q 246 -150 229 -146 q 281 -154 263 -154 q 319 -146 307 -154 q 332 -126 331 -138 q 325 -108 334 -114 q 294 -101 316 -101 l 254 -101 l 297 -4 q 212 25 251 6 q 89 134 132 64 q 46 294 46 203 q 78 462 46 385 q 168 596 110 539 q 306 683 226 652 q 485 714 387 714 q 657 680 582 714 q 769 582 732 646 l 626 468 q 564 529 602 508 q 472 550 525 550 q 380 532 421 550 q 308 481 338 514 q 262 404 278 448 q 246 307 246 359 q 266 224 246 260 q 326 170 287 189 q 417 150 364 150 q 508 169 464 150 q 588 231 551 188 l 705 116 q 569 16 646 45 q 398 -14 492 -14"},\u00C9:{ha:672,x_min:0,x_max:672,o:"m 242 153 l 609 153 l 577 0 l 16 0 l 156 700 l 704 700 l 673 547 l 320 547 l 297 429 l 608 429 l 579 281 l 267 281 m 340 757 l 490 909 l 686 909 l 481 757"},\u00C8:{ha:672,x_min:0,x_max:672,o:"m 242 153 l 609 153 l 577 0 l 16 0 l 156 700 l 704 700 l 673 547 l 320 547 l 297 429 l 608 429 l 579 281 l 267 281 m 403 757 l 245 909 l 435 909 l 538 757"},\u00CA:{ha:672,x_min:0,x_max:672,o:"m 242 153 l 609 153 l 577 0 l 16 0 l 156 700 l 704 700 l 673 547 l 320 547 l 297 429 l 608 429 l 579 281 l 267 281 m 233 757 l 385 909 l 549 909 l 658 757 l 535 757 l 460 834 l 363 757"},\u00CB:{ha:672,x_min:0,x_max:672,o:"m 242 153 l 609 153 l 577 0 l 16 0 l 156 700 l 704 700 l 673 547 l 320 547 l 297 429 l 608 429 l 579 281 l 267 281 m 563 756 q 510 774 531 756 q 489 826 489 793 q 514 889 489 865 q 574 913 540 913 q 626 894 605 913 q 648 842 648 874 q 622 780 648 803 q 563 756 596 756 m 351 756 q 298 774 319 756 q 277 826 277 793 q 302 889 277 865 q 362 913 328 913 q 415 894 394 913 q 436 842 436 874 q 410 780 436 803 q 351 756 384 756"},\u00CE:{ha:339,x_min:0,x_max:339,o:"m 16 0 l 156 700 l 354 700 l 214 0 m 57 757 l 209 909 l 373 909 l 482 757 l 359 757 l 284 834 l 187 757"},\u00CF:{ha:339,x_min:0,x_max:339,o:"m 16 0 l 156 700 l 354 700 l 214 0 m 387 756 q 334 774 355 756 q 313 826 313 793 q 338 889 313 865 q 398 913 364 913 q 450 894 429 913 q 472 842 472 874 q 446 780 472 803 q 387 756 420 756 m 175 756 q 122 774 143 756 q 101 826 101 793 q 126 889 101 865 q 186 913 152 913 q 239 894 218 913 q 260 842 260 874 q 234 780 260 803 q 175 756 208 756"},\u00D4:{ha:846,x_min:0,x_max:846,o:"m 394 -14 q 208 26 286 -14 q 88 134 130 65 q 46 294 46 203 q 78 462 46 386 q 168 596 110 539 q 306 683 226 652 q 483 714 387 714 q 669 674 591 714 q 789 566 747 635 q 831 406 831 497 q 799 238 831 314 q 709 104 767 161 q 570 17 651 48 q 394 -14 490 -14 m 411 150 q 504 169 463 150 q 572 222 544 188 q 616 301 601 257 q 631 394 631 345 q 612 476 631 441 q 556 530 592 511 q 466 550 519 550 q 374 531 415 550 q 304 478 333 512 q 261 399 276 443 q 246 306 246 355 q 266 224 246 260 q 322 170 285 189 q 411 150 358 150 m 311 757 l 463 909 l 627 909 l 736 757 l 613 757 l 538 834 l 441 757"},\u00D6:{ha:846,x_min:0,x_max:846,o:"m 394 -14 q 208 26 286 -14 q 88 134 130 65 q 46 294 46 203 q 78 462 46 386 q 168 596 110 539 q 306 683 226 652 q 483 714 387 714 q 669 674 591 714 q 789 566 747 635 q 831 406 831 497 q 799 238 831 314 q 709 104 767 161 q 570 17 651 48 q 394 -14 490 -14 m 411 150 q 504 169 463 150 q 572 222 544 188 q 616 301 601 257 q 631 394 631 345 q 612 476 631 441 q 556 530 592 511 q 466 550 519 550 q 374 531 415 550 q 304 478 333 512 q 261 399 276 443 q 246 306 246 355 q 266 224 246 260 q 322 170 285 189 q 411 150 358 150 m 641 756 q 588 774 609 756 q 567 826 567 793 q 592 889 567 865 q 652 913 618 913 q 704 894 683 913 q 726 842 726 874 q 700 780 726 803 q 641 756 674 756 m 429 756 q 376 774 397 756 q 355 826 355 793 q 380 889 355 865 q 440 913 406 913 q 493 894 472 913 q 514 842 514 874 q 488 780 514 803 q 429 756 462 756"},\u00D9:{ha:772,x_min:0,x_max:772,o:"m 350 -14 q 174 26 245 -14 q 75 140 104 67 q 65 312 46 214 l 143 700 l 341 700 l 264 315 q 277 190 247 231 q 374 150 307 150 q 473 188 436 150 q 528 315 510 226 l 605 700 l 800 700 l 721 303 q 597 66 690 147 q 350 -14 504 -14 m 446 757 l 288 909 l 478 909 l 581 757"},\u00DB:{ha:772,x_min:0,x_max:772,o:"m 350 -14 q 174 26 245 -14 q 75 140 104 67 q 65 312 46 214 l 143 700 l 341 700 l 264 315 q 277 190 247 231 q 374 150 307 150 q 473 188 436 150 q 528 315 510 226 l 605 700 l 800 700 l 721 303 q 597 66 690 147 q 350 -14 504 -14 m 275 757 l 427 909 l 591 909 l 700 757 l 577 757 l 502 834 l 405 757"},\u00DC:{ha:772,x_min:0,x_max:772,o:"m 350 -14 q 174 26 245 -14 q 75 140 104 67 q 65 312 46 214 l 143 700 l 341 700 l 264 315 q 277 190 247 231 q 374 150 307 150 q 473 188 436 150 q 528 315 510 226 l 605 700 l 800 700 l 721 303 q 597 66 690 147 q 350 -14 504 -14 m 605 756 q 552 774 573 756 q 531 826 531 793 q 556 889 531 865 q 616 913 582 913 q 668 894 647 913 q 690 842 690 874 q 664 780 690 803 q 605 756 638 756 m 393 756 q 340 774 361 756 q 319 826 319 793 q 344 889 319 865 q 404 913 370 913 q 457 894 436 913 q 478 842 478 874 q 452 780 478 803 q 393 756 426 756"},\u0152:{ha:1142,x_min:0,x_max:1142,o:"m 397 0 q 209 36 288 0 q 88 138 130 72 q 46 294 46 204 q 78 462 46 387 q 168 590 110 536 q 307 672 227 643 q 483 700 387 700 l 1175 700 l 1144 547 l 791 547 l 767 429 l 1079 429 l 1049 281 l 738 281 l 712 153 l 1079 153 l 1048 0 m 594 542 l 477 542 q 352 511 404 542 q 273 426 300 480 q 246 306 246 373 q 266 226 246 260 q 324 176 285 193 q 419 158 363 158 l 518 158"},"\u2019":{ha:283,x_min:0,x_max:283,o:"m 61 378 l 142 545 q 130 556 136 550 q 100 630 100 585 q 136 718 100 685 q 222 751 172 751 q 300 722 270 751 q 329 647 329 693 q 320 600 329 622 q 289 545 311 578 l 180 378"}},familyName:"Montserrat Thin ExtraBold",ascender:968,descender:-251,underlinePosition:-100,underlineThickness:50,boundingBox:{yMin:-300,xMin:-100,yMax:1100,xMax:1200},resolution:1e3,original_font_information:{}};var $u="data:image/jpeg;base64,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";var Qo=window.matchMedia("(prefers-reduced-motion: reduce)").matches,qn={x:0,y:0,tx:0,ty:0};function F1(){let i=t=>{let e=t.touches?t.touches[0]:t;qn.tx=e.clientX/window.innerWidth*2-1,qn.ty=e.clientY/window.innerHeight*2-1};window.addEventListener("pointermove",i,{passive:!0}),window.addEventListener("touchmove",i,{passive:!0})}function q1(){let i=document.querySelector(".nav"),t=document.querySelector(".burger"),e=document.getElementById("menu"),n=()=>i.classList.toggle("is-stuck",window.scrollY>24);n(),window.addEventListener("scroll",n,{passive:!0}),t.addEventListener("click",()=>{let o=i.classList.toggle("is-open");t.setAttribute("aria-expanded",String(o))}),e.querySelectorAll("a").forEach(o=>o.addEventListener("click",()=>{i.classList.remove("is-open"),t.setAttribute("aria-expanded","false")}));let s=[...e.querySelectorAll("a")],r=new Map(s.map(o=>[o.getAttribute("href").slice(1),o])),a=new IntersectionObserver(o=>{o.forEach(c=>{if(c.isIntersecting){s.forEach(h=>h.classList.remove("is-active"));let l=r.get(c.target.id);l&&l.classList.add("is-active")}})},{rootMargin:"-45% 0px -50% 0px"});document.querySelectorAll("main section[id]").forEach(o=>a.observe(o))}function O1(){let i=document.getElementById("tilt");if(!i||Qo)return;let t=12;i.addEventListener("pointermove",e=>{let n=i.getBoundingClientRect(),s=(e.clientX-n.left)/n.width,r=(e.clientY-n.top)/n.height;i.style.setProperty("--ry",`${(s-.5)*t*2}deg`),i.style.setProperty("--rx",`${(.5-r)*t*2}deg`),i.style.setProperty("--gx",`${s*100}%`),i.style.setProperty("--gy",`${r*100}%`)}),i.addEventListener("pointerleave",()=>{i.style.setProperty("--ry","0deg"),i.style.setProperty("--rx","0deg")})}function B1(){Qo||document.querySelectorAll(".btn, .pill").forEach(i=>{i.addEventListener("pointermove",t=>{let e=i.getBoundingClientRect(),n=(t.clientX-e.left-e.width/2)*.14,s=(t.clientY-e.top-e.height/2)*.22;i.style.transform=`translate(${n}px, ${s}px)`}),i.addEventListener("pointerleave",()=>i.style.transform="")})}function Zu(){F1(),q1(),O1(),B1();let i=document.getElementById("year");i&&(i.textContent=new Date().getFullYear())}var jo=class extends Je{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new be;t.deleteAttribute("uv");let e=new de({side:Fe}),n=new de,s=new vn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new js(t,n,6),o=new Pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new bt(t,ws(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new bt(t,ws(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new bt(t,ws(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new bt(t,ws(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new bt(t,ws(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new bt(t,ws(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ws(i){return new ur({color:0,emissive:16777215,emissiveIntensity:i})}var Ci=(i,t,e)=>Math.min(e,Math.max(t,i)),Ku=(i,t,e)=>i+(t-i)*e,Ve=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n)),Ju=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),Qu=i=>1-Math.pow(1-i,3),k1=i=>i-Math.floor(i),pe=(i,t=0,e=0)=>k1(Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453);function ju(i){let t=new bs(i),e=t.fromScene(new jo,.04).texture;return t.dispose(),e}function Ii(i,{key:t=2.4,rim:e=60,rimColor:n=10181887}={}){i.add(new xr(16777215,.45));let s=new _r(16777215,t);s.position.set(4,7,6),i.add(s);let r=new vn(n,e,0,2);r.position.set(-6,3,-5),i.add(r);let a=new vn(16748496,e*.5,0,2);a.position.set(6,-3,4),i.add(a)}function On(i=1,t=.26,e=.18,n=4){let s=new gn;for(let a=0;a<n*2;a++){let o=a*Math.PI/n+Math.PI/2,c=a%2?t:i,l=Math.cos(o)*c,h=Math.sin(o)*c;a===0?s.moveTo(l,h):s.lineTo(l,h)}s.closePath();let r=new _n(s,{depth:e,bevelEnabled:!0,bevelThickness:e*.35,bevelSize:i*.035,bevelSegments:3});return r.center(),r}function qe(i={}){return new de({color:16777215,metalness:1,roughness:.1,...i})}function on(){return new de({color:13168700,emissive:10211328,emissiveIntensity:.55,roughness:.3,metalness:.1})}var z1=new Ht("#a8449a"),G1=new Ht("#f9b6da");function H1({height:i=3,radius:t=.8,seed:e=1,top:n=.85,bottom:s=.4,segs:r=7,rings:a=7}={}){let o=new De(t*n,t*s,i,r,a,!1),c=o.attributes.position;for(let u=0;u<c.count;u++){let f=c.getX(u),g=c.getY(u),v=c.getZ(u),m=Math.round((g/i+.5)*a),p=Math.round(Math.atan2(f,v)*10),S=.8+pe(e,m)*.42,w=1+(pe(e,m+11,p)-.5)*.28;f*=S*w,v*=S*w,Math.abs(f)+Math.abs(v)<1e-4&&g>0&&(g+=i*.06*pe(e,99)),c.setXYZ(u,f,g,v)}o=o.toNonIndexed();let l=o.attributes.position,h=new Float32Array(l.count*3),d=new Ht;for(let u=0;u<l.count;u+=3){let f=(l.getY(u)+l.getY(u+1)+l.getY(u+2))/3,g=Ci(f/i+.5,0,1),v=Math.floor(g*a)/a;d.copy(z1).lerp(G1,v),d.offsetHSL(0,0,(pe(e,u,5)-.5)*.05);for(let m=0;m<3;m++)h[(u+m)*3]=d.r,h[(u+m)*3+1]=d.g,h[(u+m)*3+2]=d.b}return o.setAttribute("color",new ze(h,3)),o.computeVertexNormals(),o}var V1=new de({vertexColors:!0,flatShading:!0,roughness:.82,metalness:0});function qr(i={}){let{height:t=3,crystals:e=0,seed:n=1}=i,s=new re;if(s.add(new bt(H1(i),V1)),e){let r=new cr(.16,0),a=on();for(let o=0;o<e;o++){let c=new bt(r,a),l=pe(n,o,3)*Math.PI*2;c.position.set(Math.cos(l)*.28,t/2+.12,Math.sin(l)*.28),c.scale.set(.7,1.4+pe(n,o,8)*1.2,.7),c.rotation.set((pe(n,o,1)-.5)*.5,l,(pe(n,o,2)-.5)*.5),s.add(c)}}return s}var Dr=null;function td(){if(Dr)return Dr;let i=document.createElement("canvas");i.width=256,i.height=160;let t=i.getContext("2d"),e=[[128,92,62],[82,98,46],[176,100,48],[112,66,40],[152,70,38],[50,108,30],[208,110,30]];for(let[n,s,r]of e){let a=t.createRadialGradient(n,s,0,n,s,r);a.addColorStop(0,"rgba(255,255,255,0.95)"),a.addColorStop(.55,"rgba(255,255,255,0.55)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,256,160)}return Dr=new cs(i),Dr.colorSpace=Ce,Dr}var Fr=null;function ed(){if(Fr)return Fr;let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),Fr=new cs(i),Fr.colorSpace=Ce,Fr}function tl(i,{w:t=8,h:e=6,z:n=2,zSpread:s=3}={}){let r=new re,a=new Ei(1,28,20),o=new Le({color:16777215,roughness:0,metalness:0,transparent:!0,opacity:.3,clearcoat:1,iridescence:1,iridescenceIOR:1.35,envMapIntensity:2.2,depthWrite:!1}),c=[];for(let h=0;h<i;h++){let d=new bt(a,o),u=.08+Math.pow(pe(h,1),2)*.3;d.scale.setScalar(u);let f={m:d,s:u,x:(pe(h,2)-.5)*t,y:(pe(h,3)-.5)*e,z:n+(pe(h,4)-.5)*s,v:.15+pe(h,5)*.35,ph:pe(h,6)*6.28};d.position.set(f.x,f.y,f.z),r.add(d),c.push(f)}function l(h,d,u=e){for(let f of c)f.y+=f.v*d,f.y>u/2+.5&&(f.y=-u/2-.5),f.m.position.set(f.x+Math.sin(h*.8+f.ph)*.15,f.y,f.z)}return{group:r,update:l,items:c,setArea(h,d){for(let u of c)u.x=(pe(c.indexOf(u),2)-.5)*h}}}function Or(i,{z:t=9,fov:e=30}={}){let n=new Je;n.environment=i;let s=new ye(e,1,.1,100);return s.position.set(0,.3,t),s.lookAt(0,0,0),Ii(n,{key:2.2,rim:50}),{scene:n,camera:s}}var el=class i extends _n{constructor(t,e={}){let n=e.font;if(n===void 0)super();else{let s=n.generateShapes(t,e.size,e.direction);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(t){let e=t.options;return e.font=new Ur(e.font.data),new i(e.text,e)}};function W1(){let i=t=>new de({color:t,roughness:.38,metalness:.25});return{white:[new Le({color:16777215,roughness:.22,clearcoat:1,clearcoatRoughness:.08}),i(3872368)],violet:[new Le({color:9389567,emissive:4854976,emissiveIntensity:.35,roughness:.2,clearcoat:1,clearcoatRoughness:.08}),i(2756444)]}}function X1(i){let t=new re,e=[],n=W1(),s=1/i.data.resolution,r=c=>i.data.glyphs[c]?i.data.glyphs[c].ha*s:.5;function a(c,l,h,d=0){let u=c.reduce((v,m)=>v+[...m.text].reduce((p,S)=>p+r(S)*l+d,0),0)-d,f=-u/2,g=0;for(let v of c)for(let m of v.text){if(m!==" "){let p=new el(m,{font:i,size:l,depth:l*.34,curveSegments:10,bevelEnabled:!0,bevelThickness:l*.04,bevelSize:l*.025,bevelOffset:0,bevelSegments:4});p.computeBoundingBox();let S=new I;p.boundingBox.getCenter(S),p.translate(-S.x,-S.y,-S.z);let w=new bt(p,n[v.tone]);w.position.set(f+S.x,h+S.y,0),t.add(w),e.push({mesh:w,baseX:w.position.x,baseY:w.position.y,i:e.length,size:l}),g=Math.max(g,l)}f+=r(m)*l+d}return u}let o=a([{text:"Nova",tone:"white"},{text:"Lya",tone:"violet"}],1,.1);return a([{text:"R",tone:"white"},{text:"P",tone:"violet"}],1.25,-1.28),a([{text:"NOVA-LIFE AMBOISE",tone:"white"}],.2,-1.78,.07),e.forEach((c,l)=>{c.delay=.35+l*.075}),{group:t,letters:e,width:o}}function nd({env:i,font:t}){let e=new Je;e.environment=i;let n=new ye(32,1,.1,120),s=16;n.position.set(0,0,s),Ii(e,{key:2.6,rim:90});let r=2*s*Math.tan(uc.degToRad(16)),a=X1(t),o=new re;o.add(a.group),e.add(o);let c=new os(new Mi({map:ed(),color:10771711,transparent:!0,opacity:.32,depthWrite:!1}));c.scale.set(9,6.4,1),c.position.set(0,-.2,-1.2),o.add(c);let l=new re;l.rotation.set(1.2,.08,.3),l.position.set(0,-.15,0);let h=new re;l.add(h);let d=new bt(new xn(3.05,.045,20,160),qe());h.add(d);let u=new bt(On(.42,.11,.1),qe({roughness:.06}));u.position.set(3.05,0,0),h.add(u);let f=new bt(On(.26,.07,.08),on());f.position.set(-3.05,0,0),h.add(f),o.add(l);let g={desk:[{nx:.42,ny:-.3,z:-4,h:5,r:1.15,seed:3,crystals:4},{nx:.24,ny:-.4,z:-2.2,h:3.2,r:.9,seed:8,crystals:2},{nx:.47,ny:.22,z:-7,h:3.4,r:.8,seed:5,crystals:0},{nx:.05,ny:-.44,z:-7,h:3.1,r:.8,seed:12,crystals:0},{nx:.14,ny:.34,z:-9,h:2.4,r:.6,seed:21,crystals:0}],mob:[{nx:-.4,ny:.3,z:-5,h:3.2,r:.6,seed:3,crystals:3},{nx:.42,ny:.1,z:-4,h:3.6,r:.62,seed:8,crystals:2},{nx:-.25,ny:.02,z:-8,h:2.2,r:.4,seed:5,crystals:0}]},v=[];function m(Y){v.forEach(B=>e.remove(B.g)),v.length=0,g[Y].forEach((B,J)=>{let j=qr({height:B.h,radius:B.r,seed:B.seed,crystals:B.crystals});j.rotation.y=pe(B.seed,1)*6,e.add(j),v.push({g:j,s:B,delay:.1+J*.16})})}let p=[],S=(Y,B)=>new Mi({map:td(),color:Y,transparent:!0,opacity:B,depthWrite:!1});for(let Y=0;Y<9;Y++){let B=new os(S(Y%3===1?16765678:16777215,.55+pe(Y,1)*.3)),J=8+pe(Y,2)*7;B.scale.set(J,J*.62,1),B.position.set((pe(Y,3)-.5)*36,(pe(Y,4)-.5)*12,-10-pe(Y,5)*6),e.add(B),p.push({sp:B,v:.08+pe(Y,6)*.12})}let w=On(.55,.15,.14),y=qe({roughness:.07}),E=on(),b=[{nx:-.02,ny:.34,z:1,s:1,mat:y},{nx:.14,ny:-.3,z:2,s:.7,mat:E},{nx:.45,ny:.36,z:0,s:.8,mat:y},{nx:-.3,ny:-.12,z:-1,s:.55,mat:E},{nx:.36,ny:-.02,z:3,s:.45,mat:y}].map((Y,B)=>{let J=new bt(w,Y.mat);return e.add(J),{...Y,m:J,ph:B*1.7}}),C=tl(22,{w:22,h:r*1.15,z:2,zSpread:6});e.add(C.group);let x=0,T="desk",R=16,L=1,D=!0;function G(Y){x=Y,R=r*Y,D=window.innerWidth>900&&window.innerWidth>window.innerHeight;let B=D?"desk":"mob";(B!==T||v.length===0)&&(T=B,m(T));let j=(D?R*.4:R*.84)/a.width;o.scale.setScalar(j),o.userData.base=D?new I(R*.25,r*.05,0):new I(0,r*.205,0),L=D?r/9.18:Ci(R/7,.45,1),v.forEach(({g:gt,s:Mt})=>{gt.scale.setScalar(L),gt.userData.base=new I(Mt.nx*R,Mt.ny*r,Mt.z)}),b.forEach(gt=>{gt.m.scale.setScalar(gt.s*(D?1:.7));let Mt=D?gt.nx:Ci(gt.nx*1.6,-.42,.42),jt=D?gt.ny:Ci(gt.ny+.12,-.05,.4);gt.base=new I(Mt*R,jt*r,gt.z)})}let N=null,O=0,X=0;function W(Y,B,J){n.aspect!==x&&G(n.aspect),N===null&&(N=Y-(J.reduced?10:0));let j=Y-N,gt=J.pointer.x,Mt=J.pointer.y;X=Ve(X,gt*.38,4,B),O=Ve(O,-Mt*.2,4,B);let jt=o.userData.base;o.position.set(jt.x+gt*.18,jt.y+Math.sin(Y*.7)*.05,0),o.rotation.set(O,X,0);for(let Et of a.letters){let $=Ci((j-Et.delay)/1,0,1),Q=Ju($);Et.mesh.visible=$>0,Et.mesh.position.y=Et.baseY+(1-Q)*6.5+Math.sin(Y*1.3+Et.i*.55)*.045*$*(Et.size>.5?1:.4),Et.mesh.position.x=Et.baseX,Et.mesh.rotation.x=(1-Q)*-2.6,Et.mesh.rotation.y=Math.sin(Y*.9+Et.i*.5)*.09*$,Et.mesh.scale.setScalar(.25+.75*Q)}h.rotation.z=Y*.45,u.rotation.y=Y*1.4,f.rotation.y=-Y*1.1;for(let Et of v){let $=Qu(Ci((j-Et.delay)/1.6,0,1)),Q=Et.g.userData.base,mt=.5+(Et.s.z+10)*-.03;Et.g.position.set(Q.x+gt*mt*.5,Q.y-(1-$)*7*L+Math.sin(Y*.55+Et.s.seed)*.14,Q.z),Et.g.rotation.y+=B*.08,Et.g.rotation.z=Math.sin(Y*.4+Et.s.seed)*.03}let Yt=R*1.1+6;for(let Et of p)Et.sp.position.x+=Et.v*B,Et.sp.position.x>Yt&&(Et.sp.position.x=-Yt);for(let Et of b)Et.m.position.set(Et.base.x+gt*.35,Et.base.y+Math.sin(Y*.9+Et.ph)*.18,Et.base.z),Et.m.rotation.y=Y*.8+Et.ph,Et.m.rotation.z=Math.sin(Y*.5+Et.ph)*.3;C.update(Y,B,r*1.15)}return{scene:e,camera:n,update:W}}function id(i,t,e=.06){let n=new gn;i.forEach(([r,a],o)=>o?n.lineTo(r,a):n.moveTo(r,a)),n.closePath();let s=new _n(n,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:6});return s.translate(0,0,-t/2),s}function Y1(){let i=new re,t=new Le({color:8077298,roughness:.28,metalness:.15,clearcoat:1,clearcoatRoughness:.06}),e=new Le({color:1708080,roughness:.08,metalness:.6,clearcoat:1}),n=new de({color:1773616,roughness:.8}),s=qe({roughness:.12}),r=new bt(id([[-2.2,.35],[-2.25,.75],[-2,.98],[-1.2,1.05],[-.75,1.62],[.45,1.62],[1.25,1.1],[2,.95],[2.25,.7],[2.2,.35]],1.5,.07),t);i.add(r);let a=new bt(id([[-.98,1.1],[-.64,1.52],[.4,1.52],[1.06,1.12]],1.78,0),e);i.add(a);let o=new bt(new be(4.2,.07,1.74),s);o.position.set(0,.5,0),i.add(o);let c=new De(.43,.43,.32,28),l=new De(.25,.25,.34,18),h=[];for(let f of[-1.32,1.32])for(let g of[-.86,.86]){let v=new re,m=new bt(c,n),p=new bt(l,s);m.rotation.x=p.rotation.x=Math.PI/2,v.add(m,p),v.position.set(f,.43,g),i.add(v),h.push(v)}let d=new de({color:15990704,emissive:14745440,emissiveIntensity:1.2}),u=new de({color:16731533,emissive:16723322,emissiveIntensity:1.1});for(let f of[-.5,.5]){let g=new bt(new be(.1,.16,.4),d);g.position.set(2.3,.74,f),i.add(g);let v=new bt(new be(.1,.16,.4),u);v.position.set(-2.3,.76,f),i.add(v)}return{car:i,wheels:h}}function sd({env:i}){let t=new Je;t.environment=i;let e=new ye(28,1,.1,100),n=new I(6.2,3.8,10.2);e.position.copy(n),e.lookAt(0,.5,0),Ii(t,{key:2.6,rim:80});let s=new re;t.add(s);let r=new bt(new De(3.4,3.4,.25,72),new Le({color:16304362,roughness:.35,clearcoat:1}));s.add(r);let a=new bt(new xn(3.4,.055,16,120),qe());a.rotation.x=Math.PI/2,a.position.y=.125,s.add(a);let{car:o}=Y1();o.position.y=.125,s.add(o);let c=qr({height:4.2,radius:.8,seed:31,crystals:3});c.position.set(-3.7,.8,-3.2);let l=qr({height:3,radius:.6,seed:17,crystals:0});l.position.set(3.9,1.2,-4),t.add(c,l);let h=On(.5,.14,.13),d=new bt(h,qe({roughness:.07}));d.position.set(-3.1,3.6,.5);let u=new bt(h,on());u.position.set(3.2,3.1,1.2),u.scale.setScalar(.7),t.add(d,u);let f=tl(12,{w:9,h:7,z:1,zSpread:5});t.add(f.group);let g=0;function v(m,p,S){let y=e.aspect<1.2?1.18:1;e.position.copy(n).multiplyScalar(y),e.lookAt(0,.5,0),g=Ve(g,S.pointer.x*.5,3,p),s.rotation.y=m*.32+g,o.position.y=.125+Math.sin(m*1.6)*.012,c.position.y=.8+Math.sin(m*.6)*.14,c.rotation.y+=p*.1,l.position.y=1.2+Math.sin(m*.7+2)*.12,l.rotation.y-=p*.1,d.rotation.y=m*.9,u.rotation.y=-m*1.1,d.position.y=3.6+Math.sin(m)*.15,f.update(m,p,7)}return{scene:t,camera:e,update:v}}var Br=new I;function ln(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Br.copy(t),Br[n]=0,Br.normalize();let l=.5*a/(a+o),h=1-Br.angleTo(i)/c;return Math.sign(Br[e])===1?h*l:o/(a+o)+l+l*(1-h)}var As=class i extends be{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new I,l=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,v=new I,m=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=h.x*Math.sign(c.x)+l.x*r,d[p+1]=h.y*Math.sign(c.y)+l.y*r,d[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[S+0]=ln(v,l,"z","y",r,n),f[S+1]=1-ln(v,l,"y","z",r,e);break;case 1:v.set(-1,0,0),f[S+0]=1-ln(v,l,"z","y",r,n),f[S+1]=1-ln(v,l,"y","z",r,e);break;case 2:v.set(0,1,0),f[S+0]=1-ln(v,l,"x","z",r,t),f[S+1]=ln(v,l,"z","x",r,n);break;case 3:v.set(0,-1,0),f[S+0]=1-ln(v,l,"x","z",r,t),f[S+1]=1-ln(v,l,"z","x",r,n);break;case 4:v.set(0,0,1),f[S+0]=1-ln(v,l,"x","y",r,t),f[S+1]=1-ln(v,l,"y","x",r,e);break;case 5:v.set(0,0,-1),f[S+0]=ln(v,l,"x","y",r,t),f[S+1]=1-ln(v,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function nl(i,t,e,n,s,{yaw:r=.45,pitch:a=.2,bob:o=.08}={}){s.hover=Ve(s.hover,n.hover,6,e),s.ry=Ve(s.ry,n.pointer.x*r,4,e),s.rx=Ve(s.rx,-n.pointer.y*a,4,e),i.rotation.x=s.rx,i.position.y=Math.sin(t*1.2)*o}function ad({env:i}){let{scene:t,camera:e}=Or(i,{z:7.4}),n=new re;t.add(n);let s=new re;s.position.y=.55,n.add(s);let r=qe({roughness:.14}),a=new bt(new De(1,1.25,.42,44),r);a.position.y=-1;let o=new bt(new De(.98,.98,.14,44),new de({color:2756680,roughness:.4,metalness:.4}));o.position.y=-.72;let c=new bt(new Ei(.94,44,22,0,Math.PI*2,0,Math.PI/2),new Le({color:12376319,transparent:!0,opacity:.5,roughness:.04,clearcoat:1,depthWrite:!1,side:sn}));c.position.y=-.66,s.add(a,o,c);let l=new re;l.position.y=-.38;let h=new de({color:16727406,emissive:16719701,emissiveIntensity:1.3}),d=new de({color:4029439,emissive:2053631,emissiveIntensity:1.3}),u=new bt(new be(.5,.5,.34),h);u.position.x=.4;let f=new bt(new be(.5,.5,.34),d);f.position.x=-.4;let g=new vn(16727406,22,0,2);g.position.set(.85,.1,0);let v=new vn(4029439,22,0,2);v.position.set(-.85,.1,0),l.add(u,f,g,v),s.add(l);let m={hover:0,rx:0,ry:0},p=0;function S(w,y,E){nl(n,w,y,E,m,{yaw:.3}),p+=y*(3+m.hover*6),l.rotation.y=p,n.rotation.y=m.ry;let b=.5+.5*Math.sin(p*2);h.emissiveIntensity=.5+1.2*b,d.emissiveIntensity=.5+1.2*(1-b)}return{scene:t,camera:e,update:S}}function od({env:i}){let{scene:t,camera:e}=Or(i,{z:7.6}),n=new re;t.add(n);let s=new Le({color:8122562,roughness:.22,clearcoat:1,clearcoatRoughness:.06}),r=new bt(new As(2.2,.74,.58,6,.2),s),a=new bt(new As(.74,2.2,.58,6,.2),s);n.add(r,a);let o=()=>new Si({color:16777215,transparent:!0,opacity:0,depthWrite:!1}),c=[0,1].map(()=>{let d=new bt(new xn(1,.025,12,90),o());return t.add(d),d}),l={hover:0,rx:0,ry:0};function h(d,u,f){nl(n,d,u,f,l,{bob:.05});let g=1+l.hover*.8,v=d*g*.9%1,m=Math.exp(-Math.pow((v-.12)*14,2))+.6*Math.exp(-Math.pow((v-.3)*14,2));n.scale.setScalar(1+m*.12),n.rotation.y=Math.sin(d*.8)*.5+l.ry,c.forEach((p,S)=>{let w=(d*g*.55+S*.5)%1;p.scale.setScalar(Ku(.9,2.3,w)),p.material.opacity=(1-w)*.75})}return{scene:t,camera:e,update:h}}function rd(i,t,e,n,s){let r=new gn,a=Math.PI*2/i;for(let l=0;l<i;l++){let h=l*a;[[e,h],[t,h+a*.12],[t,h+a*.38],[e,h+a*.5]].forEach(([u,f],g)=>{let v=Math.cos(f)*u,m=Math.sin(f)*u;l===0&&g===0?r.moveTo(v,m):r.lineTo(v,m)})}r.closePath();let o=new Yn;o.absarc(0,0,n,0,Math.PI*2,!0),r.holes.push(o);let c=new _n(r,{depth:s,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3});return c.translate(0,0,-s/2),c}function ld({env:i}){let{scene:t,camera:e}=Or(i,{z:7.9}),n=new re;t.add(n);let s=new bt(rd(12,1.35,1.08,.46,.5),qe({roughness:.16}));s.position.set(-.75,.42,0);let r=new bt(rd(9,.95,.76,.32,.5),on());r.position.set(1.12,-.7,0),n.add(s,r);let a={hover:0,rx:0,ry:0},o=0;function c(l,h,d){nl(n,l,h,d,a,{bob:.05}),o+=h*(.6+a.hover*1.4),s.rotation.z=o,r.rotation.z=-o*(12/9)+Math.PI/9,n.rotation.y=Math.sin(l*.7)*.28+a.ry}return{scene:t,camera:e,update:c}}function cd({env:i}){let{scene:t,camera:e}=Or(i,{z:8}),n=new re;t.add(n);let s=new bt(new De(2.2,2.2,.2,56),new Le({color:16503022,roughness:.4,clearcoat:1}));s.position.y=-1.15;let r=new bt(new As(1.9,1.25,1.6,4,.08),new Le({color:16774139,roughness:.4,clearcoat:.5}));r.position.y=-.4;let a=new bt(new us(1.7,.95,4),new Le({color:8077298,roughness:.3,clearcoat:1}));a.rotation.y=Math.PI/4,a.scale.set(1.05,1,.92),a.position.y=.68;let o=new bt(new be(.28,.5,.28),new de({color:5972406,roughness:.5}));o.position.set(.5,.95,.15);let c=new bt(new be(.4,.65,.06),new de({color:2756664,roughness:.5}));c.position.set(-.4,-.7,.81);let l=new de({color:16772234,emissive:16765517,emissiveIntensity:1.2}),h=new bt(new be(.42,.42,.06),l);h.position.set(.45,-.3,.81);let d=new bt(new be(.06,.42,.42),l);d.position.set(.96,-.3,0),n.add(s,r,a,o,c,h,d);let u=new re,f=new bt(new De(.06,.08,.3,8),new de({color:7027498,roughness:.9}));f.position.y=.15;let g=new bt(new us(.34,.9,7),new de({color:5888422,roughness:.6,flatShading:!0}));g.position.y=.72,u.add(f,g),u.position.set(1.45,-1.05,.6),n.add(u);let v=new bt(On(.28,.08,.08),on());v.position.set(-1.45,1.1,.4),n.add(v),n.scale.setScalar(.92);let m={hover:0,rx:0,ry:0},p=0;function S(w,y,E){nl(n,w,y,E,m,{bob:.06}),p+=y*(.35+m.hover*1.2),n.rotation.y=p+m.ry,v.rotation.y=w*1.5,l.emissiveIntensity=1+Math.sin(w*2.2)*.12}return{scene:t,camera:e,update:S}}function hd({env:i,logoUrl:t,renderer:e}){let n=new Je;n.environment=i;let s=new ye(30,1,.1,100);s.position.set(0,0,9.6),Ii(n,{key:2.4,rim:110,rimColor:10771711});let r=new pr().load(t);r.colorSpace=Ce,r.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy());let a=1.9,o=.28,c=new re;n.add(c);let l=new de({map:r,roughness:.4,metalness:.1,emissive:16777215,emissiveMap:r,emissiveIntensity:.55}),h=new bt(new hs(a-.02,96),l);h.position.z=o/2+.002;let d=new bt(new hs(a-.02,96),l);d.rotation.y=Math.PI,d.position.z=-o/2-.002;let u=new bt(new De(a,a,o,96,1,!0),qe({roughness:.12}));u.rotation.x=Math.PI/2;let f=qe({roughness:.08}),g=new bt(new xn(a,.075,20,120),f);g.position.z=o/2;let v=g.clone();v.position.z=-o/2,c.add(h,d,u,g,v);let m=new re;n.add(m);let p=On(.4,.11,.1),S=[qe({roughness:.07}),on(),qe({roughness:.07}),on(),qe({roughness:.07})],w=S.map((T,R)=>{let L=new bt(p,T);return L.scale.setScalar(.55+pe(R,1)*.6),m.add(L),{s:L,a:R/S.length*Math.PI*2,r:3+pe(R,2)*.7,y:(pe(R,3)-.5)*2.4}}),y=0,E=0,b=0,C=0;function x(T,R,L){b=Ve(b,L.hover,4,R),C+=R*(.55+b*1.6),y=Ve(y,L.pointer.x*.5,3,R),E=Ve(E,-L.pointer.y*.3,3,R),c.rotation.set(E,C*.9+y,Math.sin(T*.6)*.06),c.position.y=Math.sin(T*1.1)*.12,m.rotation.y=T*.35,w.forEach((D,G)=>{D.s.position.set(Math.cos(D.a)*D.r,D.y+Math.sin(T+G)*.15,Math.sin(D.a)*D.r),D.s.rotation.y=T*1.2+G})}return{scene:n,camera:s,update:x}}var $1={hero:nd,car:sd,siren:ad,cross:od,gear:ld,house:cd,coin:hd};function Z1(){Zu();let i;try{if(i=new $o({antialias:!0,alpha:!0,powerPreference:"high-performance"}),!i.getContext())throw new Error("no context")}catch(c){document.documentElement.classList.add("no-webgl"),console.warn("WebGL indisponible, affichage de secours.",c);return}let t=window.matchMedia("(pointer: coarse)").matches?1.75:2;i.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),i.toneMapping=Mr,i.toneMappingExposure=1;let e=i.domElement;e.id="gl",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let n=ju(i),s=new Jo().parse(Yu),r=[];document.querySelectorAll("[data-stage]").forEach(c=>{let l=$1[c.dataset.stage];if(l)try{let h=l({env:n,font:s,logoUrl:$u,renderer:i});h.el=c,h.hoverEl=c.closest(".card")||c.closest(".join")||c,h.ctx={pointer:qn,reduced:Qo,hover:0},r.push(h)}catch(h){console.error("Sc\xE8ne 3D impossible :",c.dataset.stage,h)}}),window.addEventListener("resize",()=>i.setSize(window.innerWidth,window.innerHeight));let a=performance.now()*.001;function o(c){if(requestAnimationFrame(o),document.hidden)return;let l=c*.001,h=Math.min(.05,Math.max(.001,l-a));a=l,qn.x=Ve(qn.x,qn.tx,6,h),qn.y=Ve(qn.y,qn.ty,6,h);let d=window.innerHeight;i.setScissorTest(!1),i.clear(),i.setScissorTest(!0);for(let u of r){let f=u.el.getBoundingClientRect();f.bottom<0||f.top>d||f.width<2||f.height<2||(u.ctx.hover=u.hoverEl.matches(":hover")?1:0,u.camera.aspect=f.width/f.height,u.camera.updateProjectionMatrix(),i.setViewport(f.left,d-f.bottom,f.width,f.height),i.setScissor(f.left,d-f.bottom,f.width,f.height),u.update(l,h,u.ctx),i.render(u.scene,u.camera))}}requestAnimationFrame(o)}Z1();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
