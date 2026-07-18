import{a as kh,r as xp,t as Gh}from"./rolldown-runtime-W-g5d7YK.js";import{n as Mp,r as Sp}from"./api-vendor-KadXuswR.js";import{n as bp,r as Tp,t as Ep}from"./react-vendor-Bp4sJ3e1.js";var Xe=kh(Sp());var Ap={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Hh="attached",Cp="detached";var Gr=1e3,Jt=1001,Hr=1002,Ct=1003,Xo=1004,Rp=1004,qo=1005,Pp=1005,St=1006,Yo=1007,Ip=1007,dr=1008,Lp=1008,Ri=1009,Wh=1010,Xh=1011,Zo=1012,qh=1013,Ii=1014,Li=1015,Ki=1016,Jo=1017,Ko=1018,$o=1020,Yh=35902,Zh=35899,Jh=1021,Kh=1022,Di=1023,ar=1026,jo=1027,Qo=1028,va=1029,Wr=1030,el=1031,Dp=1032,tl=1033,$h=33776,jh=33777,Qh=33778,eu=33779,tu=35840,iu=35841,nu=35842,ru=35843,su=36196,au=37492,ou=37496,lu=37488,cu=37489,hu=37490,uu=37491,du=37808,fu=37809,pu=37810,mu=37811,gu=37812,vu=37813,_u=37814,yu=37815,xu=37816,Mu=37817,Su=37818,bu=37819,Tu=37820,Eu=37821,Au=36492,wu=36494,Cu=36495,Ru=36283,Pu=36284,Iu=36285,Lu=36286,Up=2200,Du=2201,Uu=2202,Xr=2300,ua=2301,ra=2302,Io=2303,vn=2400,_n=2401,qr=2402,_a=2500,il=2501,Nu=3200,Np=3201,Op=3202,Fp=3203;var Qt="srgb",da="srgb-linear",Yr="linear",Zr="srgb",sa=7680,Bp=7681,zp=7682,Vp=7683,kp=34055,Gp=34056,Hp=5386;var ya=35044,Wp=35048,Xp=35040,qp=35045,Yp=35049,Zp=35041,Jp=35046,Kp=35050,$p=35042,jp="300 es",$i=2e3,Qp=2001,em={COMPUTE:"compute",RENDER:"render"},tm={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},im={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},nm={TEXTURE_COMPARE:"depthTextureCompare"};function rm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}var sm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nr(e,t){return new sm[e](t)}function Ou(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Fu(){const e=Jr("canvas");return e.style.display="block",e}var ql={},ji=null;function am(e){ji=e}function om(){return ji}function Kr(...e){const t="THREE."+e.shift();ji?ji("log",t,...e):console.log(t,...e)}function Bu(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function de(...e){e=Bu(e);const t="THREE."+e.shift();if(ji)ji("warn",t,...e);else{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Pe(...e){e=Bu(e);const t="THREE."+e.shift();if(ji)ji("error",t,...e);else{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ji(...e){const t=e.join(" ");t in ql||(ql[t]=!0,de(...e))}function lm(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var cm={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=1234567,Mn=Math.PI/180,or=180/Math.PI;function ei(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[e&255]+Ft[e>>8&255]+Ft[e>>16&255]+Ft[e>>24&255]+"-"+Ft[t&255]+Ft[t>>8&255]+"-"+Ft[t>>16&15|64]+Ft[t>>24&255]+"-"+Ft[i&63|128]+Ft[i>>8&255]+"-"+Ft[i>>16&255]+Ft[i>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function ke(e,t,i){return Math.max(t,Math.min(i,e))}function nl(e,t){return(e%t+t)%t}function hm(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function um(e,t,i){return e!==t?(i-e)/(t-e):0}function zr(e,t,i){return(1-i)*e+i*t}function dm(e,t,i,n){return zr(e,t,1-Math.exp(-i*n))}function fm(e,t=1){return t-Math.abs(nl(e,t*2)-t)}function pm(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function mm(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function gm(e,t){return e+Math.floor(Math.random()*(t-e+1))}function vm(e,t){return e+Math.random()*(t-e)}function _m(e){return e*(.5-Math.random())}function ym(e){e!==void 0&&(Yl=e);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xm(e){return e*Mn}function Mm(e){return e*or}function Sm(e){return(e&e-1)===0&&e!==0}function bm(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Tm(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Em(e,t,i,n,r){const s=Math.cos,a=Math.sin,o=s(i/2),l=a(i/2),c=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),u=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*f,o*c);break;case"YXY":e.set(l*f,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*f,o*h,o*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Je(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Am={DEG2RAD:Mn,RAD2DEG:or,generateUUID:ei,clamp:ke,euclideanModulo:nl,mapLinear:hm,inverseLerp:um,lerp:zr,damp:dm,pingpong:fm,smoothstep:pm,smootherstep:mm,randInt:gm,randFloat:vm,randFloatSpread:_m,seededRandom:ym,degToRad:xm,radToDeg:Mm,isPowerOfTwo:Sm,ceilPowerOfTwo:bm,floorPowerOfTwo:Tm,setQuaternionFromProperEuler:Em,normalize:Je,denormalize:Wt},ee=class zu{static{zu.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,n=this.y,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6],this.y=r[1]*i+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ke(this.x,t.x,i.x),this.y=ke(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ke(this.x,t,i),this.y=ke(this.y,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const n=Math.cos(i),r=Math.sin(i),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){let o=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3],d=r[s+0],u=r[s+1],f=r[s+2],g=r[s+3];if(h!==g||o!==d||l!==u||c!==f){let v=o*d+l*u+c*f+h*g;v<0&&(d=-d,u=-u,f=-f,g=-g,v=-v);let m=1-a;if(v<.9995){const p=Math.acos(v),x=Math.sin(p);m=Math.sin(m*p)/x,a=Math.sin(a*p)/x,o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a;const p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){const a=i[n],o=i[n+1],l=i[n+2],c=i[n+3],h=r[s],d=r[s+1],u=r[s+2],f=r[s+3];return e[t]=a*f+c*h+o*u-l*d,e[t+1]=o*f+c*d+l*h-a*u,e[t+2]=l*f+c*u+a*d-o*h,e[t+3]=c*f-a*h-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(i/2),c=a(n/2),h=a(r/2),d=o(i/2),u=o(n/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"YXZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"ZXY":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"ZYX":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"YZX":this._x=d*c*h+l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h-d*u*f;break;case"XZY":this._x=d*c*h-l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h+d*u*f;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(r-l)*u,this._z=(s-n)*u}else if(i>a&&i>h){const u=2*Math.sqrt(1+i-a-h);this._w=(c-o)/u,this._x=.25*u,this._y=(n+s)/u,this._z=(r+l)/u}else if(a>h){const u=2*Math.sqrt(1+a-i-h);this._w=(r-l)/u,this._x=(n+s)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+h-i-a);this._w=(s-n)/u,this._x=(r+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+s*a+n*l-r*o,this._y=n*c+s*o+r*a-i*l,this._z=r*c+s*l+i*o-n*a,this._w=s*c-i*a-n*o-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class Vu{static{Vu.prototype.isVector3=!0}constructor(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Zl.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6]*r,this.y=s[1]*i+s[4]*n+s[7]*r,this.z=s[2]*i+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*i+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*i+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*i+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*i+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const i=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*i-s*r),d=2*(s*n-a*i);return this.x=i+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[4]*n+s[8]*r,this.y=s[1]*i+s[5]*n+s[9]*r,this.z=s[2]*i+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ke(this.x,t.x,i.x),this.y=ke(this.y,t.y,i.y),this.z=ke(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ke(this.x,t,i),this.y=ke(this.y,t,i),this.z=ke(this.z,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const n=t.x,r=t.y,s=t.z,a=i.x,o=i.y,l=i.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return La.copy(this).projectOnVector(t),this.sub(La)}reflect(t){return this.sub(La.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return i*i+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){const r=Math.sin(i)*t;return this.x=r*Math.sin(n),this.y=Math.cos(i)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=r,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},La=new P,Zl=new Xt,Ze=class ku{static{ku.prototype.isMatrix3=!0}constructor(t,i,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,l,c)}set(t,i,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=i,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=r[0],m=r[3],p=r[6],x=r[1],M=r[4],_=r[7],E=r[2],A=r[5],R=r[8];return s[0]=a*v+o*x+l*E,s[3]=a*m+o*M+l*A,s[6]=a*p+o*_+l*R,s[1]=c*v+h*x+d*E,s[4]=c*m+h*M+d*A,s[7]=c*p+h*_+d*R,s[2]=u*v+f*x+g*E,s[5]=u*m+f*M+g*A,s[8]=u*p+f*_+g*R,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*a*h-i*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=i*d+n*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(r*c-h*n)*v,t[2]=(o*n-r*a)*v,t[3]=u*v,t[4]=(h*i-r*l)*v,t[5]=(r*s-o*i)*v,t[6]=f*v,t[7]=(n*l-c*i)*v,t[8]=(a*i-n*s)*v,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+i,0,0,1),this}scale(t,i){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Da.makeScale(t,i)),this}rotate(t){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Da.makeRotation(-t)),this}translate(t,i){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Da.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<9;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Da=new Ze,Jl=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wm(){const e={enabled:!0,workingColorSpace:da,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Yr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[da]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:Jl,fromXYZ:Kl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:Jl,fromXYZ:Kl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),e}var nt=wm();function Pi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function sr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Pn,Gu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pn===void 0&&(Pn=Jr("canvas")),Pn.width=e.width,Pn.height=e.height;const n=Pn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Pn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Pi(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cm=0,Yi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(Ua(n[s].image)):r.push(Ua(n[s]))}else r=Ua(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ua(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Gu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}var Rm=0,Na=new P,It=class aa extends di{constructor(t=aa.DEFAULT_IMAGE,i=aa.DEFAULT_MAPPING,n=Jt,r=Jt,s=St,a=dr,o=Di,l=Ri,c=aa.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ei(),this.name="",this.source=new Yi(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){de(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){de(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case Jt:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case Jt:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=300;It.DEFAULT_ANISOTROPY=1;var ft=class Hu{static{Hu.prototype.isVector4=!0}constructor(t=0,i=0,n=0,r=1){this.x=t,this.y=i,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,r){return this.x=t,this.y=i,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*i+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*i+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*i+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*i+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const M=(c+1)/2,_=(f+1)/2,E=(p+1)/2,A=(h+u)/4,R=(d+v)/4,y=(g+m)/4;return M>_&&M>E?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=R/n):_>E?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=A/r,s=y/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=R/s,r=y/s),this.set(n,r,s,i),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ke(this.x,t.x,i.x),this.y=ke(this.y,t.y,i.y),this.z=ke(this.z,t.z,i.z),this.w=ke(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ke(this.x,t,i),this.y=ke(this.y,t,i),this.z=ke(this.z,t,i),this.w=ke(this.w,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rl=class extends di{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},r=new It(n),s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Yi(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends rl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},xa=class extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pm=class extends ti{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new xa(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},Ma=class extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Im=class extends ti{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new Ma(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},We=class Lo{static{Lo.prototype.isMatrix4=!0}constructor(t,i,n,r,s,a,o,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,l,c,h,d,u,f,g,v,m)}set(t,i,n,r,s,a,o,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=i,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,n=t.elements,r=1/In.setFromMatrixColumn(t,0).length(),s=1/In.setFromMatrixColumn(t,1).length(),a=1/In.setFromMatrixColumn(t,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=f+g*c,i[5]=u-v*c,i[9]=-o*l,i[2]=v-u*c,i[6]=g+f*c,i[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;i[0]=u+v*o,i[4]=g*o-f,i[8]=a*c,i[1]=a*d,i[5]=a*h,i[9]=-o,i[2]=f*o-g,i[6]=v+u*o,i[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;i[0]=u-v*o,i[4]=-a*d,i[8]=g+f*o,i[1]=f+g*o,i[5]=a*h,i[9]=v-u*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;i[0]=l*h,i[4]=g*c-f,i[8]=u*c+v,i[1]=l*d,i[5]=v*c+u,i[9]=f*c-g,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;i[0]=l*h,i[4]=v-u*d,i[8]=g*d+f,i[1]=d,i[5]=a*h,i[9]=-o*h,i[2]=-c*h,i[6]=f*d+g,i[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+v,i[5]=a*h,i[9]=f*d-g,i[2]=g*d-f,i[6]=o*h,i[10]=v*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Dm)}lookAt(t,i,n){const r=this.elements;return $t.subVectors(t,i),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Bi.crossVectors(n,$t),Bi.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Bi.crossVectors(n,$t)),Bi.normalize(),us.crossVectors($t,Bi),r[0]=Bi.x,r[4]=us.x,r[8]=$t.x,r[1]=Bi.y,r[5]=us.y,r[9]=$t.y,r[2]=Bi.z,r[6]=us.z,r[10]=$t.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],M=n[7],_=n[11],E=n[15],A=r[0],R=r[4],y=r[8],S=r[12],I=r[1],C=r[5],N=r[9],G=r[13],k=r[2],H=r[6],J=r[10],z=r[14],B=r[3],q=r[7],X=r[11],Q=r[15];return s[0]=a*A+o*I+l*k+c*B,s[4]=a*R+o*C+l*H+c*q,s[8]=a*y+o*N+l*J+c*X,s[12]=a*S+o*G+l*z+c*Q,s[1]=h*A+d*I+u*k+f*B,s[5]=h*R+d*C+u*H+f*q,s[9]=h*y+d*N+u*J+f*X,s[13]=h*S+d*G+u*z+f*Q,s[2]=g*A+v*I+m*k+p*B,s[6]=g*R+v*C+m*H+p*q,s[10]=g*y+v*N+m*J+p*X,s[14]=g*S+v*G+m*z+p*Q,s[3]=x*A+M*I+_*k+E*B,s[7]=x*R+M*C+_*H+E*q,s[11]=x*y+M*N+_*J+E*X,s[15]=x*S+M*G+_*z+E*Q,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],x=l*f-c*u,M=o*f-c*d,_=o*u-l*d,E=a*f-c*h,A=a*u-l*h,R=a*d-o*h;return i*(v*x-m*M+p*_)-n*(g*x-m*E+p*A)+r*(g*M-v*E+p*R)-s*(g*_-v*A+m*R)}determinantAffine(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=i,r[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=i*o-n*a,M=i*l-r*a,_=i*c-s*a,E=n*l-r*o,A=n*c-s*o,R=r*c-s*l,y=h*v-d*g,S=h*m-u*g,I=h*p-f*g,C=d*m-u*v,N=d*p-f*v,G=u*p-f*m,k=x*G-M*N+_*C+E*I-A*S+R*y;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/k;return t[0]=(o*G-l*N+c*C)*H,t[1]=(r*N-n*G-s*C)*H,t[2]=(v*R-m*A+p*E)*H,t[3]=(u*A-d*R-f*E)*H,t[4]=(l*I-a*G-c*S)*H,t[5]=(i*G-r*I+s*S)*H,t[6]=(m*_-g*R-p*M)*H,t[7]=(h*R-u*_+f*M)*H,t[8]=(a*N-o*I+c*y)*H,t[9]=(n*I-i*N-s*y)*H,t[10]=(g*A-v*_+p*x)*H,t[11]=(d*_-h*A-f*x)*H,t[12]=(o*S-a*C-l*y)*H,t[13]=(i*C-n*S+r*y)*H,t[14]=(v*M-g*E-m*x)*H,t[15]=(h*E-d*M+u*x)*H,this}scale(t){const i=this.elements,n=t.x,r=t.y,s=t.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),r=Math.sin(i),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,i,r,1,0,0,0,0,1),this}compose(t,i,n){const r=this.elements,s=i._x,a=i._y,o=i._z,l=i._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,v=a*h,m=a*d,p=o*d,x=l*c,M=l*h,_=l*d,E=n.x,A=n.y,R=n.z;return r[0]=(1-(v+p))*E,r[1]=(f+_)*E,r[2]=(g-M)*E,r[3]=0,r[4]=(f-_)*A,r[5]=(1-(u+p))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(g+M)*R,r[9]=(m-x)*R,r[10]=(1-(u+v))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,i,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),i.identity(),this;let a=In.set(r[0],r[1],r[2]).length();const o=In.set(r[4],r[5],r[6]).length(),l=In.set(r[8],r[9],r[10]).length();s<0&&(a=-a),li.copy(this);const c=1/a,h=1/o,d=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,i.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=l,this}makePerspective(t,i,n,r,s,a,o=$i,l=!1){const c=this.elements,h=2*s/(i-t),d=2*s/(n-r),u=(i+t)/(i-t),f=(n+r)/(n-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,r,s,a,o=$i,l=!1){const c=this.elements,h=2/(i-t),d=2/(n-r),u=-(i+t)/(i-t),f=-(n+r)/(n-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===2e3)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}},In=new P,li=new We,Lm=new P(0,0,0),Dm=new P(1,1,1),Bi=new P,us=new P,$t=new P,$l=new We,jl=new Xt,Ui=class Wu{constructor(t=0,i=0,n=0,r=Wu.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(i){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ui.DEFAULT_ORDER="XYZ";var Sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Um=0,Ql=new P,Ln=new Xt,Mi=new We,ds=new P,yr=new P,Nm=new P,Om=new Xt,ec=new P(1,0,0),tc=new P(0,1,0),ic=new P(0,0,1),nc={type:"added"},Fm={type:"removed"},Dn={type:"childadded",child:null},Oa={type:"childremoved",child:null},lt=class oa extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oa.DEFAULT_UP.clone();const t=new P,i=new Ui,n=new Xt,r=new P(1,1,1);function s(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new Ze}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=oa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ln.setFromAxisAngle(t,i),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(t,i){return Ln.setFromAxisAngle(t,i),this.quaternion.premultiply(Ln),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,i){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?ds.copy(t):ds.set(t,i,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(yr,ds,this.up):Mi.lookAt(ds,yr,this.up),this.quaternion.setFromRotationMatrix(Mi),r&&(Mi.extractRotation(r.matrixWorld),Ln.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ln.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Dn.child=t,this.dispatchEvent(Dn),Dn.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Fm),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Dn.child=t,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,Nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Om,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*n-s[8]*r,s[13]+=n-s[1]*i-s[5]*n-s[9]*r,s[14]+=r-s[2]*i-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(i){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}};lt.DEFAULT_UP=new P(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rr=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bm={type:"move"},la=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,i),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position);l.inputState.pinching&&d>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=.02-.005&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Fa(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=nt.workingColorSpace){if(e=nl(e,1),t=ke(t,0,1),i=ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Fa(s,r,e+1/3),this.g=Fa(s,r,e),this.b=Fa(s,r,e-1/3)}return nt.colorSpaceToWorking(this,n),this}setStyle(e,t=Qt){function i(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:de("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);de("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Xu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):de("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return nt.workingToColorSpace(Bt.copy(this),e),Math.round(ke(Bt.r*255,0,255))*65536+Math.round(ke(Bt.g*255,0,255))*256+Math.round(ke(Bt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Bt.copy(this),t);const i=Bt.r,n=Bt.g,r=Bt.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case i:o=(n-r)/h+(n<r?6:0);break;case n:o=(r-i)/h+2;break;case r:o=(i-n)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Qt){nt.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,n=Bt.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(fs);const i=zr(zi.h,fs.h,t),n=zr(zi.s,fs.s,t),r=zr(zi.l,fs.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new ye;ye.NAMES=Xu;var qu=class Yu{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Yu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Zu=class Ju{constructor(t,i=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(t),this.near=i,this.far=n}clone(){return new Ju(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sl=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new P,Si=new P,Ba=new P,bi=new P,Un=new P,Nn=new P,rc=new P,za=new P,Va=new P,ka=new P,Ga=new ft,Ha=new ft,Wa=new ft,qi=class Qn{constructor(t=new P,i=new P,n=new P){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,r){r.subVectors(n,i),ci.subVectors(t,i),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,i,n,r,s){ci.subVectors(r,i),Si.subVectors(n,i),Ba.subVectors(t,i);const a=ci.dot(ci),o=ci.dot(Si),l=ci.dot(Ba),c=Si.dot(Si),h=Si.dot(Ba),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,i,n,r){return this.getBarycoord(t,i,n,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,i,n,r,s,a,o,l){return this.getBarycoord(t,i,n,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(t,i,n,r,s,a){return Ga.setScalar(0),Ha.setScalar(0),Wa.setScalar(0),Ga.fromBufferAttribute(t,i),Ha.fromBufferAttribute(t,n),Wa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ga,s.x),a.addScaledVector(Ha,s.y),a.addScaledVector(Wa,s.z),a}static isFrontFacing(t,i,n,r){return ci.subVectors(n,i),Si.subVectors(t,i),ci.cross(Si).dot(r)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,r){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,n,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ci.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Qn.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,r,s){return Qn.getInterpolation(t,this.a,this.b,this.c,i,n,r,s)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,r=this.b,s=this.c;let a,o;Un.subVectors(r,n),Nn.subVectors(s,n),za.subVectors(t,n);const l=Un.dot(za),c=Nn.dot(za);if(l<=0&&c<=0)return i.copy(n);Va.subVectors(t,r);const h=Un.dot(Va),d=Nn.dot(Va);if(h>=0&&d<=h)return i.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),i.copy(n).addScaledVector(Un,a);ka.subVectors(t,s);const f=Un.dot(ka),g=Nn.dot(ka);if(g>=0&&f<=g)return i.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),i.copy(n).addScaledVector(Nn,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return rc.subVectors(s,r),o=(d-h)/(d-h+(f-g)),i.copy(r).addScaledVector(rc,o);const p=1/(m+v+u);return a=v*p,o=u*p,i.copy(n).addScaledVector(Un,a).addScaledVector(Nn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,hi):hi.fromBufferAttribute(r,s),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ps.copy(i.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),ms.subVectors(this.max,xr),On.subVectors(e.a,xr),Fn.subVectors(e.b,xr),Bn.subVectors(e.c,xr),Vi.subVectors(Fn,On),ki.subVectors(Bn,Fn),rn.subVectors(On,Bn);let t=[0,-Vi.z,Vi.y,0,-ki.z,ki.y,0,-rn.z,rn.y,Vi.z,0,-Vi.x,ki.z,0,-ki.x,rn.z,0,-rn.x,-Vi.y,Vi.x,0,-ki.y,ki.x,0,-rn.y,rn.x,0];return!Xa(t,On,Fn,Bn,ms)||(t=[1,0,0,0,1,0,0,0,1],!Xa(t,On,Fn,Bn,ms))?!1:(gs.crossVectors(Vi,ki),t=[gs.x,gs.y,gs.z],Xa(t,On,Fn,Bn,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,ps=new Vt,On=new P,Fn=new P,Bn=new P,Vi=new P,ki=new P,rn=new P,xr=new P,ms=new P,gs=new P,sn=new P;function Xa(e,t,i,n,r){for(let s=0,a=e.length-3;s<=a;s+=3){sn.fromArray(e,s);const o=r.x*Math.abs(sn.x)+r.y*Math.abs(sn.y)+r.z*Math.abs(sn.z),l=t.dot(sn),c=i.dot(sn),h=n.dot(sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wi=zm();function zm(){const e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Zt(e){Math.abs(e)>65504&&de("DataUtils.toHalfFloat(): Value out of range."),e=ke(e,-65504,65504),wi.floatView[0]=e;const t=wi.uint32View[0],i=t>>23&511;return wi.baseTable[i]+((t&8388607)>>wi.shiftTable[i])}function Nr(e){const t=e>>10;return wi.uint32View[0]=wi.mantissaTable[wi.offsetTable[t]+(e&1023)]+wi.exponentTable[t],wi.floatView[0]}var Vm=class{static toHalfFloat(e){return Zt(e)}static fromHalfFloat(e){return Nr(e)}},Et=new P,vs=new ee,km=0,ht=class extends di{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ya,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},Gm=class extends ht{constructor(e,t,i){super(new Int8Array(e),t,i)}},Hm=class extends ht{constructor(e,t,i){super(new Uint8Array(e),t,i)}},Wm=class extends ht{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},Xm=class extends ht{constructor(e,t,i){super(new Int16Array(e),t,i)}},al=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}},qm=class extends ht{constructor(e,t,i){super(new Int32Array(e),t,i)}},ol=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ym=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Nr(this.array[e*this.itemSize]);return this.normalized&&(t=Wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=Zt(t),this}getY(e){let t=Nr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=Zt(t),this}getZ(e){let t=Nr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=Zt(t),this}getW(e){let t=Nr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=Zt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=Zt(t),this.array[e+1]=Zt(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.array[e+0]=Zt(t),this.array[e+1]=Zt(i),this.array[e+2]=Zt(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[e+0]=Zt(t),this.array[e+1]=Zt(i),this.array[e+2]=Zt(n),this.array[e+3]=Zt(r),this}},Te=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},Zm=new Vt,Mr=new P,qa=new P,Ut=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zm.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Mr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(qa)),this.expandByPoint(Mr.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jm=0,ni=new We,Ya=new lt,zn=new P,jt=new Vt,Sr=new Vt,Lt=new P,Ke=class Ku extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rm(t)?ol:al)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,i,n){return ni.makeTranslation(t,i,n),this.applyMatrix4(ni),this}scale(t,i,n){return ni.makeScale(t,i,n),this.applyMatrix4(ni),this}lookAt(t){return Ya.lookAt(t),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{const n=Math.min(t.length,i.count);for(let r=0;r<n;r++){const s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,r=i.length;n<r;n++){const s=i[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ut);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(t),i)for(let s=0,a=i.length;s<a;s++){const o=i[s];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(jt.min,Sr.min),jt.expandByPoint(Lt),Lt.addVectors(jt.max,Sr.max),jt.expandByPoint(Lt)):(jt.expandByPoint(Sr.min),jt.expandByPoint(Sr.max))}jt.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Lt.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Lt));if(i)for(let s=0,a=i.length;s<a;s++){const o=i[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(zn.fromBufferAttribute(t,c),Lt.add(zn)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,r=i.normal,s=i.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new P,l[y]=new P;const c=new P,h=new P,d=new P,u=new ee,f=new ee,g=new ee,v=new P,m=new P;function p(y,S,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,I),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[y].add(v),o[S].add(v),o[I].add(v),l[y].add(m),l[S].add(m),l[I].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let y=0,S=x.length;y<S;++y){const I=x[y],C=I.start,N=I.count;for(let G=C,k=C+N;G<k;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const M=new P,_=new P,E=new P,A=new P;function R(y){E.fromBufferAttribute(r,y),A.copy(E);const S=o[y];M.copy(S),M.sub(E.multiplyScalar(E.dot(S))).normalize(),_.crossVectors(A,S);const I=_.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,I)}for(let y=0,S=x.length;y<S;++y){const I=x[y],C=I.start,N=I.count;for(let G=C,k=C+N;G<k;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new ht(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const r=new P,s=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),a.fromBufferAttribute(i,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=i.count;u<f;u+=3)r.fromBufferAttribute(i,u+0),s.fromBufferAttribute(i,u+1),a.fromBufferAttribute(i,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)Lt.fromBufferAttribute(t,i),Lt.normalize(),t.setXYZ(i,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new ht(u,h,d)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ku,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);i.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(i))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ya,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new P,$r=class $u{constructor(t,i,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,n=this.data.count;i<n;i++)Gt.fromBufferAttribute(this,i),Gt.applyMatrix4(t),this.setXYZ(i,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)Gt.fromBufferAttribute(this,i),Gt.applyNormalMatrix(t),this.setXYZ(i,Gt.x,Gt.y,Gt.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)Gt.fromBufferAttribute(this,i),Gt.transformDirection(t),this.setXYZ(i,Gt.x,Gt.y,Gt.z);return this}getComponent(t,i){let n=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(n=Wt(n,this.array)),n}setComponent(t,i,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[t*this.data.stride+this.offset+i]=n,this}setX(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Wt(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Wt(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Wt(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Wt(i,this.array)),i}setXY(t,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Je(i,this.array),n=Je(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this}setXYZ(t,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,i,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Kr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return new ht(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Km=0,Nt=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){de(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){de(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ll=class extends Nt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vn,br=new P,kn=new P,Gn=new P,Hn=new ee,Tr=new ee,ju=new We,_s=new P,Er=new P,ys=new P,sc=new ee,Za=new ee,ac=new ee,Qu=class extends lt{constructor(e=new ll){if(super(),this.isSprite=!0,this.type="Sprite",Vn===void 0){Vn=new Ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sa(t,5);Vn.setIndex([0,1,2,0,2,3]),Vn.setAttribute("position",new $r(i,3,0,!1)),Vn.setAttribute("uv",new $r(i,2,3,!1))}this.geometry=Vn,this.material=e,this.center=new ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),kn.setFromMatrixScale(this.matrixWorld),ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&kn.multiplyScalar(-Gn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const s=this.center;xs(_s.set(-.5,-.5,0),Gn,s,kn,n,r),xs(Er.set(.5,-.5,0),Gn,s,kn,n,r),xs(ys.set(.5,.5,0),Gn,s,kn,n,r),sc.set(0,0),Za.set(1,0),ac.set(1,1);let a=e.ray.intersectTriangle(_s,Er,ys,!1,br);if(a===null&&(xs(Er.set(-.5,.5,0),Gn,s,kn,n,r),Za.set(0,1),a=e.ray.intersectTriangle(_s,ys,Er,!1,br),a===null))return;const o=e.ray.origin.distanceTo(br);o<e.near||o>e.far||t.push({distance:o,point:br.clone(),uv:qi.getInterpolation(br,_s,Er,ys,sc,Za,ac,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xs(e,t,i,n,r,s){Hn.subVectors(e,i).addScalar(.5).multiply(n),r!==void 0?(Tr.x=s*Hn.x-r*Hn.y,Tr.y=r*Hn.x+s*Hn.y):Tr.copy(Hn),e.copy(t),e.x+=Tr.x,e.y+=Tr.y,e.applyMatrix4(ju)}var Ms=new P,oc=new P,ed=class extends lt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Ms.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ms);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ms.setFromMatrixPosition(e.matrixWorld),oc.setFromMatrixPosition(this.matrixWorld);const i=Ms.distanceTo(oc)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),i>=s)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const s=i[n];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}},Ei=new P,Ja=new P,Ss=new P,Gi=new P,Ka=new P,bs=new P,$a=new P,fr=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ja.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ss),a=Gi.dot(this.direction),o=-Gi.dot(Ss),l=Gi.lengthSq(),c=Math.abs(1-s*s);let h,d,u,f;if(c>0)if(h=s*o-a,d=s*a-o,f=r*c,h>=0)if(d>=-f)if(d<=f){const g=1/c;h*=g,d*=g,u=h*(h+s*d+2*a)+d*(s*h+d+2*o)+l}else d=r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d=-r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d<=-f?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l):d<=f?(h=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Ja).addScaledVector(Ss,d),u}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),n=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),c>=0?(r=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),h>=0?(a=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,n,r){Ka.subVectors(t,e),bs.subVectors(i,e),$a.crossVectors(Ka,bs);let s=this.direction.dot($a),a;if(s>0){if(n)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const o=a*this.direction.dot(bs.crossVectors(Gi,bs));if(o<0)return null;const l=a*this.direction.dot(Ka.cross(Gi));if(l<0||o+l>s)return null;const c=-a*Gi.dot($a);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends Nt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lc=new We,an=new fr,Ts=new Ut,cc=new P,Es=new P,As=new P,ws=new P,ja=new P,Cs=new P,hc=new P,Rs=new P,wt=class extends lt{constructor(e=new Ke,t=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],h=r[o];c!==0&&(ja.fromBufferAttribute(h,e),s?Cs.addScaledVector(ja,c):Cs.addScaledVector(ja.sub(t),c))}t.add(Cs)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(r),an.copy(e.ray).recast(e.near),!(Ts.containsPoint(an.origin)===!1&&(an.intersectSphere(Ts,cc)===null||an.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(lc.copy(r).invert(),an.copy(e.ray).applyMatrix4(lc),!(i.boundingBox!==null&&an.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,an)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const v=d[f],m=s[v.materialIndex],p=Math.max(v.start,u.start),x=Math.min(a.count,Math.min(v.start+v.count,u.start+u.count));for(let M=p,_=x;M<_;M+=3){const E=a.getX(M),A=a.getX(M+1),R=a.getX(M+2);n=Ps(this,m,e,i,l,c,h,E,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const f=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let v=f,m=g;v<m;v+=3){const p=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);n=Ps(this,s,e,i,l,c,h,p,x,M),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const v=d[f],m=s[v.materialIndex],p=Math.max(v.start,u.start),x=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));for(let M=p,_=x;M<_;M+=3){const E=M,A=M+1,R=M+2;n=Ps(this,m,e,i,l,c,h,E,A,R),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=v.materialIndex,t.push(n))}}else{const f=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let v=f,m=g;v<m;v+=3){const p=v,x=v+1,M=v+2;n=Ps(this,s,e,i,l,c,h,p,x,M),n&&(n.faceIndex=Math.floor(v/3),t.push(n))}}}};function $m(e,t,i,n,r,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===0,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(e.matrixWorld);const c=i.ray.origin.distanceTo(Rs);return c<i.near||c>i.far?null:{distance:c,point:Rs.clone(),object:e}}function Ps(e,t,i,n,r,s,a,o,l,c){e.getVertexPosition(o,Es),e.getVertexPosition(l,As),e.getVertexPosition(c,ws);const h=$m(e,t,i,n,Es,As,ws,hc);if(h){const d=new P;qi.getBarycoord(hc,Es,As,ws,d),r&&(h.uv=qi.getInterpolatedAttribute(r,o,l,c,d,new ee)),s&&(h.uv1=qi.getInterpolatedAttribute(s,o,l,c,d,new ee)),a&&(h.normal=qi.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};qi.getNormal(Es,As,ws,u.normal),h.face=u,h.barycoord=d}return h}var Ar=new ft,uc=new ft,dc=new ft,jm=new ft,fc=new We,Is=new P,Qa=new Ut,pc=new We,eo=new fr,td=class extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Is),this.boundingBox.expandByPoint(Is)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ut),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Is),this.boundingSphere.expandByPoint(Is)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(n),e.ray.intersectsSphere(Qa)!==!1&&(pc.copy(n).invert(),eo.copy(e.ray).applyMatrix4(pc),!(this.boundingBox!==null&&eo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():de("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;uc.fromBufferAttribute(n.attributes.skinIndex,e),dc.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Ar.copy(t),t.set(0,0,0,0)):(Ar.set(...t,1),t.set(0,0,0)),Ar.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const s=dc.getComponent(r);if(s!==0){const a=uc.getComponent(r);fc.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(jm.copy(Ar).applyMatrix4(fc),s)}}return t.isVector4&&(t.w=Ar.w),t.applyMatrix4(this.bindMatrixInverse)}},cl=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ri=class extends It{constructor(e=null,t=1,i=1,n,r,s,a,o,l=Ct,c=Ct,h,d){super(null,s,a,o,l,c,n,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},mc=new We,Qm=new We,id=class nd{constructor(t=[],i=[]){this.uuid=ei(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){de("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){const n=new We;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,i=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Qm;mc.multiplyMatrices(o,i[s]),mc.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new nd(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const i=new Float32Array(t*t*4);i.set(this.boneMatrices);const n=new ri(i,t,t,Di,Li);return n.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=n,this}getBoneByName(t){for(let i=0,n=this.bones.length;i<n;i++){const r=this.bones[i];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=i[s];a===void 0&&(de("Skeleton: No bone found with UUID:",s),a=new cl),this.bones.push(a),this.boneInverses.push(new We().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const i=this.bones,n=this.boneInverses;for(let r=0,s=i.length;r<s;r++){const a=i[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}},lr=class extends ht{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wn=new We,gc=new We,Ls=[],vc=new Vt,eg=new We,wr=new wt,Cr=new Ut,rd=class extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,eg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wn),vc.copy(e.boundingBox).applyMatrix4(Wn),this.boundingBox.union(vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ut),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Wn),Cr.copy(e.boundingSphere).applyMatrix4(Wn),this.boundingSphere.union(Cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let s=0;s<i.length;s++)i[s]=n[r+s]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),e.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Wn),gc.multiplyMatrices(i,Wn),wr.matrixWorld=gc,wr.raycast(e,Ls);for(let s=0,a=Ls.length;s<a;s++){const o=Ls[s];o.instanceId=r,o.object=this,t.push(o)}Ls.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ri(new Float32Array(n*this.count),n,this.count,Qo,Li));const r=this.morphTexture.source.data.data;let s=0;for(let l=0;l<i.length;l++)s+=i[l];const a=this.geometry.morphTargetsRelative?1:1-s,o=n*e;return r[o]=a,r.set(i,o+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},to=new P,tg=new P,ig=new Ze,Xi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=to.subVectors(i,t).cross(tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(to),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ig.getNormalMatrix(e),n=this.coplanarPoint(to).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},on=new Ut,ng=new ee(.5,.5),Ds=new P,bn=class{constructor(e=new Xi,t=new Xi,i=new Xi,n=new Xi,r=new Xi,s=new Xi){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i,i=!1){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],x=r[13],M=r[14],_=r[15];if(n[0].setComponents(l-s,u-c,m-f,_-p).normalize(),n[1].setComponents(l+s,u+c,m+f,_+p).normalize(),n[2].setComponents(l+a,u+h,m+g,_+x).normalize(),n[3].setComponents(l-a,u-h,m-g,_-x).normalize(),i)n[4].setComponents(o,d,v,M).normalize(),n[5].setComponents(l-o,u-d,m-v,_-M).normalize();else if(n[4].setComponents(l-o,u-d,m-v,_-M).normalize(),t===2e3)n[5].setComponents(l+o,u+d,m+v,_+M).normalize();else if(t===2001)n[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),on.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),on.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(on)}intersectsSprite(e){on.center.set(0,0,0);const t=ng.distanceTo(e.center);return on.radius=.7071067811865476+t,on.applyMatrix4(e.matrixWorld),this.intersectsSphere(on)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ds.x=n.normal.x>0?e.max.x:e.min.x,Ds.y=n.normal.y>0?e.max.y:e.min.y,Ds.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_c=new We,sd=class ad{constructor(){this.coordinateSystem=$i,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,n=this._frustums;for(let r=0;r<i.length;r++){const s=i[r];_c.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new bn),n[r].setFromProjectionMatrix(_c,s.coordinateSystem,s.reversedDepth)}return this._count=i.length,this}intersectsObject(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let n=0;n<this._count;n++)if(i[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,n=t._frustums;for(let r=0;r<t._count;r++)i[r]===void 0&&(i[r]=new bn),i[r].copy(n[r]);return this._count=t._count,this}clone(){return new ad().copy(this)}};function io(e,t){return e-t}function rg(e,t){return e.z-t.z}function sg(e,t){return t.z-e.z}var ag=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];s.push(a),this.index++,a.start=e,a.count=t,a.z=i,a.index=n}reset(){this.list.length=0,this.index=0}},Yt=new We,og=new ye(1,1,1),lg=new bn,cg=new sd,Us=new Vt,ln=new Ut,Rr=new P,yc=new P,hg=new P,no=new ag,zt=new wt,Ns=[];function ug(e,t,i=0){const n=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){const r=e.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)t.setComponent(s+i,a,e.getComponent(s,a))}else t.array.set(e.array,i*n);t.needsUpdate=!0}function cn(e,t){if(e.constructor!==t.constructor){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++)t[n]=e[n]}else{const i=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,i))}}var od=class extends wt{constructor(e,t,i=t*2,n){super(new Ke,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new ri(t,e,e,Di,Li);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new ri(t,e,e,va,Ii);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new ri(t,e,e,Di,Li);i.colorSpace=nt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const{array:s,itemSize:a,normalized:o}=e.getAttribute(r),l=new s.constructor(i*a),c=new ht(l,a,o);t.setAttribute(r,c)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new ht(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Yt),this.getBoundingBoxAt(r,Us).applyMatrix4(Yt),e.union(Us)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ut);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Yt),this.getBoundingSphereAt(r,ln).applyMatrix4(Yt),e.union(ln)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(io),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const n=this._matricesTexture;Yt.identity().toArray(n.image.data,i*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(og.toArray(r.image.data,i*4),r.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const s=e.getIndex();if(s!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?s.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let a;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(io),a=this._availableGeometryIds.shift(),r[a]=n):(a=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(a,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,a}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),s=t.getIndex(),a=this._geometryInfo[e];if(n&&s.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const o=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const c in i.attributes){const h=t.getAttribute(c),d=i.getAttribute(c);ug(h,d,o);const u=h.itemSize;for(let f=h.count,g=l;f<g;f++){const v=o+f;for(let m=0;m<u;m++)d.setComponent(v,m,0)}d.needsUpdate=!0,d.addUpdateRange(o*u,l*u)}if(n){const c=a.indexStart,h=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<s.count;d++)r.setX(c+d,o+s.getX(d));for(let d=s.count,u=h;d<u;d++)r.setX(c+d,o);r.needsUpdate=!0,r.addUpdateRange(c,a.reservedIndexCount)}return a.start=n?a.indexStart:a.vertexStart,a.count=n?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((s,a)=>a).sort((s,a)=>i[s].vertexStart-i[a].vertexStart),r=this.geometry;for(let s=0,a=i.length;s<a;s++){const o=i[n[s]];if(o.active!==!1){if(r.index!==null){if(o.indexStart!==t){const{indexStart:l,vertexStart:c,reservedIndexCount:h}=o,d=r.index,u=d.array,f=e-c;for(let g=l;g<l+h;g++)u[g]=u[g]+f;d.array.copyWithin(t,l,l+h),d.addUpdateRange(t,h),d.needsUpdate=!0,o.indexStart=t}t+=o.reservedIndexCount}if(o.vertexStart!==e){const{vertexStart:l,reservedVertexCount:c}=o,h=r.attributes;for(const d in h){const u=h[d],{array:f,itemSize:g}=u;f.copyWithin(e*g,l*g,(l+c)*g),u.addUpdateRange(e*g,c*g),u.needsUpdate=!0}o.vertexStart=e}e+=o.reservedVertexCount,o.start=r.index?o.indexStart:o.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new Vt,s=i.index,a=i.attributes.position;for(let o=n.start,l=n.start+n.count;o<l;o++){let c=o;s&&(c=s.getX(c)),r.expandByPoint(Rr.fromBufferAttribute(a,c))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Ut;this.getBoundingBoxAt(e,Us),Us.getCenter(r.center);const s=i.index,a=i.attributes.position;let o=0;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;s&&(h=s.getX(h)),Rr.fromBufferAttribute(a,h),o=Math.max(o,r.center.distanceToSquared(Rr))}r.radius=Math.sqrt(o),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(io);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);cn(this._multiDrawCounts,n),cn(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;const s=this._indirectTexture,a=this._matricesTexture,o=this._colorsTexture;s.dispose(),this._initIndirectTexture(),cn(s.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),cn(a.image.data,this._matricesTexture.image.data),o&&(o.dispose(),this._initColorsTexture(),cn(o.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(s=>s.active);if(Math.max(...i.map(s=>s.vertexStart+s.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(s=>s.indexStart+s.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const n=this.geometry;n.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ke,this._initializeGeometry(n));const r=this.geometry;n.index&&cn(n.index.array,r.index.array);for(const s in n.attributes)cn(n.attributes[s].array,r.attributes[s].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,s=this.geometry;zt.material=this.material,zt.geometry.index=s.index,zt.geometry.attributes=s.attributes,zt.geometry.boundingBox===null&&(zt.geometry.boundingBox=new Vt),zt.geometry.boundingSphere===null&&(zt.geometry.boundingSphere=new Ut);for(let a=0,o=i.length;a<o;a++){if(!i[a].visible||!i[a].active)continue;const l=i[a].geometryIndex,c=n[l];zt.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(a,zt.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,zt.geometry.boundingBox),this.getBoundingSphereAt(l,zt.geometry.boundingSphere),zt.raycast(e,Ns);for(let h=0,d=Ns.length;h<d;h++){const u=Ns[h];u.object=this,u.batchId=a,t.push(u)}Ns.length=0}zt.material=null,zt.geometry.index=null,zt.geometry.attributes={},zt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=n.getIndex();let a=s===null?1:s.array.BYTES_PER_ELEMENT,o=1;r.wireframe&&(o=2,a=n.attributes.position.count>65535?4:2);const l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._geometryInfo,u=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data,v=i.isArrayCamera?cg:lg;u&&(i.isArrayCamera?v.setFromArrayCamera(i):(Yt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),v.setFromProjectionMatrix(Yt,i.coordinateSystem,i.reversedDepth)));let m=0;if(this.sortObjects){Yt.copy(this.matrixWorld).invert(),Rr.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Yt),yc.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Yt);for(let M=0,_=l.length;M<_;M++)if(l[M].visible&&l[M].active){const E=l[M].geometryIndex;this.getMatrixAt(M,Yt),this.getBoundingSphereAt(E,ln).applyMatrix4(Yt);let A=!1;if(u&&(A=!v.intersectsSphere(ln)),!A){const R=d[E],y=hg.subVectors(ln.center,Rr).dot(yc);no.push(R.start,R.count,y,M)}}const p=no.list,x=this.customSort;x===null?p.sort(r.transparent?sg:rg):x.call(this,p,i);for(let M=0,_=p.length;M<_;M++){const E=p[M];c[m]=E.start*a*o,h[m]=E.count*o,g[m]=E.index,m++}no.reset()}else for(let p=0,x=l.length;p<x;p++)if(l[p].visible&&l[p].active){const M=l[p].geometryIndex;let _=!1;if(u&&(this.getMatrixAt(p,Yt),this.getBoundingSphereAt(M,ln).applyMatrix4(Yt),_=!v.intersectsSphere(ln)),!_){const E=d[M];c[m]=E.start*a*o,h[m]=E.count*o,g[m]=p,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,s){this.onBeforeRender(e,null,n,r,s)}},qt=class extends Nt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fa=new P,pa=new P,xc=new We,Pr=new fr,Os=new Ut,ro=new P,Mc=new P,Qi=class extends lt{constructor(e=new Ke,t=new qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)fa.fromBufferAttribute(t,n-1),pa.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=fa.distanceTo(pa);e.setAttribute("lineDistance",new Te(i,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(n),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;xc.copy(n).invert(),Pr.copy(e.ray).applyMatrix4(xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let f=d,g=u-1;f<g;f+=l){const v=c.getX(f),m=c.getX(f+1),p=Fs(this,e,Pr,o,v,m,f);p&&t.push(p)}if(this.isLineLoop){const f=c.getX(u-1),g=c.getX(d),v=Fs(this,e,Pr,o,f,g,u-1);v&&t.push(v)}}else{const d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let f=d,g=u-1;f<g;f+=l){const v=Fs(this,e,Pr,o,f,f+1,f);v&&t.push(v)}if(this.isLineLoop){const f=Fs(this,e,Pr,o,u-1,d,u-1);f&&t.push(f)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Fs(e,t,i,n,r,s,a){const o=e.geometry.attributes.position;if(fa.fromBufferAttribute(o,r),pa.fromBufferAttribute(o,s),i.distanceSqToSegment(fa,pa,ro,Mc)>n)return;ro.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(ro);if(!(l<t.near||l>t.far))return{distance:l,point:Mc.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var Sc=new P,bc=new P,yi=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Sc.fromBufferAttribute(t,n),bc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Sc.distanceTo(bc);e.setAttribute("lineDistance",new Te(i,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ld=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},hl=class extends Nt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tc=new We,Do=new fr,Bs=new Ut,zs=new P,cd=class extends lt{constructor(e=new Ke,t=new hl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(n),Bs.radius+=r,e.ray.intersectsSphere(Bs)===!1)return;Tc.copy(n).invert(),Do.copy(e.ray).applyMatrix4(Tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,c=i.attributes.position;if(l!==null){const h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let u=h,f=d;u<f;u++){const g=l.getX(u);zs.fromBufferAttribute(c,g),Ec(zs,g,o,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let u=h,f=d;u<f;u++)zs.fromBufferAttribute(c,u),Ec(zs,u,o,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Ec(e,t,i,n,r,s,a){const o=Do.distanceSqToPoint(e);if(o<i){const l=new P;Do.closestPointToPoint(e,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var hd=class extends It{constructor(e,t,i,n,r=St,s=St,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function h(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},dg=class extends hd{constructor(e,t,i,n,r,s,a,o){super({},e,t,i,n,r,s,a,o),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},fg=class extends It{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ct,this.minFilter=Ct,this.generateMipmaps=!1,this.needsUpdate=!0}},ba=class extends It{constructor(e,t,i,n,r,s,a,o,l,c,h,d){super(null,s,a,o,l,c,n,r,h,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},pg=class extends ba{constructor(e,t,i,n,r,s){super(e,t,i,r,s),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=Jt,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},mg=class extends ba{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},rs=class extends It{constructor(e=[],t=301,i,n,r,s,a,o,l,c){super(e,t,i,n,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gg=class extends It{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},vg=class extends It{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const c=e?e.parentNode:null;c!==null&&"requestPaint"in c&&(c.onpaint=()=>{this.needsUpdate=!0},c.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Tn=class extends It{constructor(e,t,i=Ii,n,r,s,a=Ct,o=Ct,l,c=ar,h=1){if(c!==1026&&c!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:h},n,r,s,a,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ud=class extends Tn{constructor(e,t=Ii,i=301,n,r,s=Ct,a=Ct,o,l=ar){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,a,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ul=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ss=class dd extends Ke{constructor(t=1,i=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,i,t,a,s,0),g("z","y","x",1,-1,n,i,-t,a,s,1),g("x","z","y",1,1,t,n,i,r,a,2),g("x","z","y",1,-1,t,n,-i,r,a,3),g("x","y","z",1,-1,t,i,n,r,s,4),g("x","y","z",-1,-1,t,i,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function g(v,m,p,x,M,_,E,A,R,y,S){const I=_/R,C=E/y,N=_/2,G=E/2,k=A/2,H=R+1,J=y+1;let z=0,B=0;const q=new P;for(let X=0;X<J;X++){const Q=X*C-G;for(let se=0;se<H;se++)q[v]=(se*I-N)*x,q[m]=Q*M,q[p]=k,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),d.push(se/R),d.push(1-X/y),z+=1}for(let X=0;X<y;X++)for(let Q=0;Q<R;Q++){const se=u+Q+H*X,Fe=u+Q+H*(X+1),$e=u+(Q+1)+H*(X+1),K=u+(Q+1)+H*X;l.push(se,Fe,K),l.push(Fe,$e,K),B+=6}o.addGroup(f,B,S),f+=B,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dd(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},fd=class pd extends Ke{constructor(t=1,i=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:n,radialSegments:r,heightSegments:s},i=Math.max(0,i),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],h=i/2,d=Math.PI/2*t,u=i,f=2*d+u,g=n*2+s,v=r+1,m=new P,p=new P;for(let x=0;x<=g;x++){let M=0,_=0,E=0,A=0;if(x<=n){const S=x/n,I=S*Math.PI/2;_=-h-t*Math.cos(I),E=t*Math.sin(I),A=-t*Math.cos(I),M=S*d}else if(x<=n+s){const S=(x-n)/s;_=-h+S*i,E=t,A=0,M=d+S*u}else{const S=(x-n-s)/n,I=S*Math.PI/2;_=h+t*Math.sin(I),E=t*Math.cos(I),A=t*Math.sin(I),M=d+u+S*d}const R=Math.max(0,Math.min(1,M/f));let y=0;x===0?y=.5/r:x===g&&(y=-.5/r);for(let S=0;S<=r;S++){const I=S/r,C=I*Math.PI*2,N=Math.sin(C),G=Math.cos(C);p.x=-E*G,p.y=_,p.z=E*N,o.push(p.x,p.y,p.z),m.set(-E*G,A,E*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+y,R)}if(x>0){const S=(x-1)*v;for(let I=0;I<r;I++){const C=S+I,N=S+I+1,G=x*v+I,k=x*v+I+1;a.push(C,N,G),a.push(N,k,G)}}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pd(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},md=class gd extends Ke{constructor(t=1,i=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:r},i=Math.max(3,i);const s=[],a=[],o=[],l=[],c=new P,h=new ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){const f=n+d/i*r;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gd(t.radius,t.segments,t.thetaStart,t.thetaLength)}},dl=class vd extends Ke{constructor(t=1,i=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),a===!1&&(t>0&&M(!0),i>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function x(){const _=new P,E=new P;let A=0;const R=(i-t)/n;for(let y=0;y<=s;y++){const S=[],I=y/s,C=I*(i-t)+t;for(let N=0;N<=r;N++){const G=N/r,k=G*l+o,H=Math.sin(k),J=Math.cos(k);E.x=C*H,E.y=-I*n+m,E.z=C*J,d.push(E.x,E.y,E.z),_.set(H,R,J).normalize(),u.push(_.x,_.y,_.z),f.push(G,1-I),S.push(g++)}v.push(S)}for(let y=0;y<r;y++)for(let S=0;S<s;S++){const I=v[S][y],C=v[S+1][y],N=v[S+1][y+1],G=v[S][y+1];(t>0||S!==0)&&(h.push(I,C,G),A+=3),(i>0||S!==s-1)&&(h.push(C,N,G),A+=3)}c.addGroup(p,A,0),p+=A}function M(_){const E=g,A=new ee,R=new P;let y=0;const S=_===!0?t:i,I=_===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;const C=g;for(let N=0;N<=r;N++){const G=N/r*l+o,k=Math.cos(G),H=Math.sin(G);R.x=S*H,R.y=m*I,R.z=S*k,d.push(R.x,R.y,R.z),u.push(0,I,0),A.x=k*.5+.5,A.y=H*.5*I+.5,f.push(A.x,A.y),g++}for(let N=0;N<r;N++){const G=E+N,k=C+N;_===!0?h.push(k,k+1,G):h.push(k+1,k,G),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},fl=class _d extends dl{constructor(t=1,i=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,i,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new _d(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pr=class yd extends Ke{constructor(t=[],i=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:n,detail:r};const s=[],a=[];o(r),c(n),h(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new P,_=new P,E=new P;for(let A=0;A<i.length;A+=3)f(i[A+0],M),f(i[A+1],_),f(i[A+2],E),l(M,_,E,x)}function l(x,M,_,E){const A=E+1,R=[];for(let y=0;y<=A;y++){R[y]=[];const S=x.clone().lerp(_,y/A),I=M.clone().lerp(_,y/A),C=A-y;for(let N=0;N<=C;N++)N===0&&y===A?R[y][N]=S:R[y][N]=S.clone().lerp(I,N/C)}for(let y=0;y<A;y++)for(let S=0;S<2*(A-y)-1;S++){const I=Math.floor(S/2);S%2===0?(u(R[y][I+1]),u(R[y+1][I]),u(R[y][I])):(u(R[y][I+1]),u(R[y+1][I+1]),u(R[y+1][I]))}}function c(x){const M=new P;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(x),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function h(){const x=new P;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const _=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(_,1-E)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const M=a[x+0],_=a[x+2],E=a[x+4];Math.max(M,_,E)>.9&&Math.min(M,_,E)<.1&&(M<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,M){const _=x*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function g(){const x=new P,M=new P,_=new P,E=new P,A=new ee,R=new ee,y=new ee;for(let S=0,I=0;S<s.length;S+=9,I+=6){x.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),A.set(a[I+0],a[I+1]),R.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),E.copy(x).add(M).add(_).divideScalar(3);const C=m(E);v(A,I+0,x,C),v(R,I+2,M,C),v(y,I+4,_,C)}}function v(x,M,_,E){E<0&&x.x===1&&(a[M]=x.x-1),_.x===0&&_.z===0&&(a[M]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yd(t.vertices,t.indices,t.radius,t.detail)}},xd=class Md extends pr{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(s,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Md(t.radius,t.detail)}},Vs=new P,ks=new P,so=new P,Gs=new qi,Sd=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(Mn*t),r=e.getIndex(),s=e.getAttribute("position"),a=r?r.count:s.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),h={},d=[];for(let u=0;u<a;u+=3){r?(o[0]=r.getX(u),o[1]=r.getX(u+1),o[2]=r.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);const{a:f,b:g,c:v}=Gs;if(f.fromBufferAttribute(s,o[0]),g.fromBufferAttribute(s,o[1]),v.fromBufferAttribute(s,o[2]),Gs.getNormal(so),c[0]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,c[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,c[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let m=0;m<3;m++){const p=(m+1)%3,x=c[m],M=c[p],_=Gs[l[m]],E=Gs[l[p]],A=`${x}_${M}`,R=`${M}_${x}`;R in h&&h[R]?(so.dot(h[R].normal)<=n&&(d.push(_.x,_.y,_.z),d.push(E.x,E.y,E.z)),h[R]=null):A in h||(h[A]={index0:o[m],index1:o[p],normal:so.clone()})}}for(const u in h)if(h[u]){const{index0:f,index1:g}=h[u];Vs.fromBufferAttribute(s,f),ks.fromBufferAttribute(s,g),d.push(Vs.x,Vs.y,Vs.z),d.push(ks.x,ks.y,ks.z)}this.setAttribute("position",new Te(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},fi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let a=0,o=r-1,l;for(;a<=o;)if(n=Math.floor(a+(o-a)/2),l=i[n]-s,l<0)a=n+1;else if(l>0)o=n-1;else{o=n;break}if(n=o,i[n]===s)return n/(r-1);const c=i[n],h=i[n+1]-c,d=(s-c)/h;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),a=this.getPoint(r),o=t||(s.isVector2?new ee:new P);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new P,n=[],r=[],s=[],a=new P,o=new We;for(let u=0;u<=e;u++){const f=u/e;n[u]=this.getTangentAt(f,new P)}r[0]=new P,s[0]=new P;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),h=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(ke(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(a,f))}s[u].crossVectors(n[u],r[u])}if(t===!0){let u=Math.acos(ke(r[0].dot(r[e]),-1,1));u/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let f=1;f<=e;f++)r[f].applyMatrix4(o.makeRotationAxis(n[f],u*f)),s[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ta=class extends fi{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new ee){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bd=class extends Ta{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function pl(){let e=0,t=0,i=0,n=0;function r(s,a,o,l){e=s,t=o,i=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,r(a,o,u,f)},calc:function(s){const a=s*s,o=a*s;return e+t*s+i*a+n*o}}}var Ac=new P,wc=new P,ao=new pl,oo=new pl,lo=new pl,Td=class extends fi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new P){const i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let l,c;this.closed||a>0?l=n[(a-1)%r]:(wc.subVectors(n[0],n[1]).add(n[0]),l=wc);const h=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:(Ac.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let f=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(c),u);g<1e-4&&(g=1),f<1e-4&&(f=g),v<1e-4&&(v=g),ao.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,f,g,v),oo.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,f,g,v),lo.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,f,g,v)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),oo.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),lo.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return i.set(ao.calc(o),oo.calc(o),lo.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cc(e,t,i,n,r){const s=(n-t)*.5,a=(r-i)*.5,o=e*e,l=e*o;return(2*i-2*n+s+a)*l+(-3*i+3*n-2*s-a)*o+s*e+i}function _g(e,t){const i=1-e;return i*i*t}function yg(e,t){return 2*(1-e)*e*t}function xg(e,t){return e*e*t}function Vr(e,t,i,n){return _g(e,t)+yg(e,i)+xg(e,n)}function Mg(e,t){const i=1-e;return i*i*i*t}function Sg(e,t){const i=1-e;return 3*i*i*e*t}function bg(e,t){return 3*(1-e)*e*e*t}function Tg(e,t){return e*e*e*t}function kr(e,t,i,n,r){return Mg(e,t)+Sg(e,i)+bg(e,n)+Tg(e,r)}var ml=class extends fi{constructor(e=new ee,t=new ee,i=new ee,n=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ee){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(kr(e,n.x,r.x,s.x,a.x),kr(e,n.y,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ed=class extends fi{constructor(e=new P,t=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new P){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(kr(e,n.x,r.x,s.x,a.x),kr(e,n.y,r.y,s.y,a.y),kr(e,n.z,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gl=class extends fi{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ad=class extends fi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends fi{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Vr(e,n.x,r.x,s.x),Vr(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends fi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Vr(e,n.x,r.x,s.x),Vr(e,n.y,r.y,s.y),Vr(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yl=class extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),a=r-s,o=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(Cc(a,o.x,l.x,c.x,h.x),Cc(a,o.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ee().fromArray(n))}return this}},ma=Object.freeze({__proto__:null,ArcCurve:bd,CatmullRomCurve3:Td,CubicBezierCurve:ml,CubicBezierCurve3:Ed,EllipseCurve:Ta,LineCurve:gl,LineCurve3:Ad,QuadraticBezierCurve:vl,QuadraticBezierCurve3:_l,SplineCurve:yl}),wd=class extends fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ma[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const s=n[r]-i,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const s=r[n],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(a);for(let l=0;l<o.length;l++){const c=o[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new ma[n.type]().fromJSON(n))}return this}},jr=class extends wd{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new gl(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new vl(this.currentPoint.clone(),new ee(e,t),new ee(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){const a=new ml(this.currentPoint.clone(),new ee(e,t),new ee(i,n),new ee(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new yl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,a,o),this}absellipse(e,t,i,n,r,s,a,o){const l=new Ta(e,t,i,n,r,s,a,o);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},as=class extends jr{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new jr().fromJSON(n))}return this}};function Eg(e,t,i=2){const n=t&&t.length,r=n?t[0]*i:e.length;let s=Cd(e,0,r,i,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Pg(e,t,s,i)),e.length>80*i){o=e[0],l=e[1];let h=o,d=l;for(let u=i;u<r;u+=i){const f=e[u],g=e[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Qr(s,a,i,o,l,c,0),a}function Cd(e,t,i,n,r){let s;if(r===kg(e,t,i,n)>0)for(let a=t;a<i;a+=n)s=Rc(a/n|0,e[a],e[a+1],s);else for(let a=i-n;a>=t;a-=n)s=Rc(a/n|0,e[a],e[a+1],s);return s&&cr(s,s.next)&&(ts(s),s=s.next),s}function En(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(cr(i,i.next)||_t(i.prev,i,i.next)===0)){if(ts(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Qr(e,t,i,n,r,s,a){if(!e)return;!a&&s&&Ng(e,n,r,s);let o=e;for(;e.prev!==e.next;){const l=e.prev,c=e.next;if(s?wg(e,n,r,s):Ag(e)){t.push(l.i,e.i,c.i),ts(e),e=c.next,o=c.next;continue}if(e=c,e===o){a?a===1?(e=Cg(En(e),t),Qr(e,t,i,n,r,s,2)):a===2&&Rg(e,t,i,n,r,s):Qr(En(e),t,i,n,r,s,1);break}}}function Ag(e){const t=e.prev,i=e,n=e.next;if(_t(t,i,n)>=0)return!1;const r=t.x,s=i.x,a=n.x,o=t.y,l=i.y,c=n.y,h=Math.min(r,s,a),d=Math.min(o,l,c),u=Math.max(r,s,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Or(r,o,s,l,a,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wg(e,t,i,n){const r=e.prev,s=e,a=e.next;if(_t(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=Uo(f,g,t,i,n),x=Uo(v,m,t,i,n);let M=e.prevZ,_=e.nextZ;for(;M&&M.z>=p&&_&&_.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Or(o,h,l,d,c,u,M.x,M.y)&&_t(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Or(o,h,l,d,c,u,_.x,_.y)&&_t(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==a&&Or(o,h,l,d,c,u,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Or(o,h,l,d,c,u,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Cg(e,t){let i=e;do{const n=i.prev,r=i.next.next;!cr(n,r)&&Pd(n,i,i.next,r)&&es(n,r)&&es(r,n)&&(t.push(n.i,i.i,r.i),ts(i),ts(i.next),i=e=r),i=i.next}while(i!==e);return En(i)}function Rg(e,t,i,n,r,s){let a=e;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bg(a,o)){let l=Id(a,o);a=En(a,a.next),l=En(l,l.next),Qr(a,t,i,n,r,s,0),Qr(l,t,i,n,r,s,0);return}o=o.next}a=a.next}while(a!==e)}function Pg(e,t,i,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=Cd(e,t[s]*n,s<a-1?t[s+1]*n:e.length,n,!1);o===o.next&&(o.steiner=!0),r.push(Fg(o))}r.sort(Ig);for(let s=0;s<r.length;s++)i=Lg(r[s],i);return i}function Ig(e,t){let i=e.x-t.x;return i===0&&(i=e.y-t.y,i===0&&(i=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),i}function Lg(e,t){const i=Dg(e,t);if(!i)return t;const n=Id(i,e);return En(n,n.next),En(i,i.next)}function Dg(e,t){let i=t;const n=e.x,r=e.y;let s=-1/0,a;if(cr(e,i))return i;do{if(cr(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const d=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>s&&(s=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;i=a;do{if(n>=i.x&&i.x>=l&&n!==i.x&&Rd(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){const d=Math.abs(r-i.y)/(n-i.x);es(i,e)&&(d<h||d===h&&(i.x>a.x||i.x===a.x&&Ug(a,i)))&&(a=i,h=d)}i=i.next}while(i!==o);return a}function Ug(e,t){return _t(e.prev,e,t.prev)<0&&_t(t.next,e,e.next)<0}function Ng(e,t,i,n){let r=e;do r.z===0&&(r.z=Uo(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Og(r)}function Og(e){let t,i=1;do{let n=e,r;e=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<i&&(o++,a=a.nextZ,!!a);c++);let l=i;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=a}s.nextZ=null,i*=2}while(t>1);return e}function Uo(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Fg(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Rd(e,t,i,n,r,s,a,o){return(r-a)*(t-o)>=(e-a)*(s-o)&&(e-a)*(n-o)>=(i-a)*(t-o)&&(i-a)*(s-o)>=(r-a)*(n-o)}function Or(e,t,i,n,r,s,a,o){return!(e===a&&t===o)&&Rd(e,t,i,n,r,s,a,o)}function Bg(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!zg(e,t)&&(es(e,t)&&es(t,e)&&Vg(e,t)&&(_t(e.prev,e,t.prev)||_t(e,t.prev,t))||cr(e,t)&&_t(e.prev,e,e.next)>0&&_t(t.prev,t,t.next)>0)}function _t(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function cr(e,t){return e.x===t.x&&e.y===t.y}function Pd(e,t,i,n){const r=Ws(_t(e,t,i)),s=Ws(_t(e,t,n)),a=Ws(_t(i,n,e)),o=Ws(_t(i,n,t));return!!(r!==s&&a!==o||r===0&&Hs(e,i,t)||s===0&&Hs(e,n,t)||a===0&&Hs(i,e,n)||o===0&&Hs(i,t,n))}function Hs(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Ws(e){return e>0?1:e<0?-1:0}function zg(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Pd(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function es(e,t){return _t(e.prev,e,e.next)<0?_t(e,t,e.next)>=0&&_t(e,e.prev,t)>=0:_t(e,t,e.prev)<0||_t(e,e.next,t)<0}function Vg(e,t){let i=e,n=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e);return n}function Id(e,t){const i=No(e.i,e.x,e.y),n=No(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function Rc(e,t,i,n){const r=No(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ts(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function No(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kg(e,t,i,n){let r=0;for(let s=t,a=i-n;s<i;s+=n)r+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return r}var Gg=class{static triangulate(e,t,i=2){return Eg(e,t,i)}},Ci=class Ld{static area(t){const i=t.length;let n=0;for(let r=i-1,s=0;s<i;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Ld.area(t)<0}static triangulateShape(t,i){const n=[],r=[],s=[];Pc(t),Ic(n,t);let a=t.length;i.forEach(Pc);for(let l=0;l<i.length;l++)r.push(a),a+=i[l].length,Ic(n,i[l]);const o=Gg.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Pc(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ic(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Dd=class Ud extends Ke{constructor(t=new as([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Te(r,3)),this.setAttribute("uv",new Te(s,2)),this.computeVertexNormals();function a(o){const l=[],c=i.curveSegments!==void 0?i.curveSegments:12,h=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1;let u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,f=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:f-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3;const p=i.extrudePath,x=i.UVGenerator!==void 0?i.UVGenerator:Hg;let M,_=!1,E,A,R,y;if(p){M=p.getSpacedPoints(h),_=!0,u=!1;const j=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,j),A=new P,R=new P,y=new P}u||(m=0,f=0,g=0,v=0);const S=o.extractPoints(c);let I=S.shape;const C=S.holes;if(!Ci.isClockWise(I)){I=I.reverse();for(let j=0,oe=C.length;j<oe;j++){const ue=C[j];Ci.isClockWise(ue)&&(C[j]=ue.reverse())}}function N(j){const ue=10000000000000001e-36;let xe=j[0];for(let Me=1;Me<=j.length;Me++){const Le=Me%j.length,De=j[Le],qe=De.x-xe.x,Ye=De.y-xe.y,L=qe*qe+Ye*Ye,vt=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(xe.x),Math.abs(xe.y));if(L<=ue*vt*vt){j.splice(Le,1),Me--;continue}xe=De}}N(I),C.forEach(N);const G=C.length,k=I;for(let j=0;j<G;j++){const oe=C[j];I=I.concat(oe)}function H(j,oe,ue){return oe||Pe("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(oe,ue)}const J=I.length;function z(j,oe,ue){let xe,Me,Le;const De=j.x-oe.x,qe=j.y-oe.y,Ye=ue.x-j.x,L=ue.y-j.y,vt=De*De+qe*qe,rt=De*L-qe*Ye;if(Math.abs(rt)>Number.EPSILON){const tt=Math.sqrt(vt),w=Math.sqrt(Ye*Ye+L*L),b=oe.x-qe/tt,D=oe.y+De/tt,Y=ue.x-L/w,te=ue.y+Ye/w,le=((Y-b)*L-(te-D)*Ye)/(De*L-qe*Ye);xe=b+De*le-j.x,Me=D+qe*le-j.y;const fe=xe*xe+Me*Me;if(fe<=2)return new ee(xe,Me);Le=Math.sqrt(fe/2)}else{let tt=!1;De>Number.EPSILON?Ye>Number.EPSILON&&(tt=!0):De<-Number.EPSILON?Ye<-Number.EPSILON&&(tt=!0):Math.sign(qe)===Math.sign(L)&&(tt=!0),tt?(xe=-qe,Me=De,Le=Math.sqrt(vt)):(xe=De,Me=qe,Le=Math.sqrt(vt/2))}return new ee(xe/Le,Me/Le)}const B=[];for(let j=0,oe=k.length,ue=oe-1,xe=j+1;j<oe;j++,ue++,xe++)ue===oe&&(ue=0),xe===oe&&(xe=0),B[j]=z(k[j],k[ue],k[xe]);const q=[];let X,Q=B.concat();for(let j=0,oe=G;j<oe;j++){const ue=C[j];X=[];for(let xe=0,Me=ue.length,Le=Me-1,De=xe+1;xe<Me;xe++,Le++,De++)Le===Me&&(Le=0),De===Me&&(De=0),X[xe]=z(ue[xe],ue[Le],ue[De]);q.push(X),Q=Q.concat(X)}let se;if(m===0)se=Ci.triangulateShape(k,C);else{const j=[],oe=[];for(let ue=0;ue<m;ue++){const xe=ue/m,Me=f*Math.cos(xe*Math.PI/2),Le=g*Math.sin(xe*Math.PI/2)+v;for(let De=0,qe=k.length;De<qe;De++){const Ye=H(k[De],B[De],Le);pe(Ye.x,Ye.y,-Me),xe===0&&j.push(Ye)}for(let De=0,qe=G;De<qe;De++){const Ye=C[De];X=q[De];const L=[];for(let vt=0,rt=Ye.length;vt<rt;vt++){const tt=H(Ye[vt],X[vt],Le);pe(tt.x,tt.y,-Me),xe===0&&L.push(tt)}xe===0&&oe.push(L)}}se=Ci.triangulateShape(j,oe)}const Fe=se.length,$e=g+v;for(let j=0;j<J;j++){const oe=u?H(I[j],Q[j],$e):I[j];_?(R.copy(E.normals[0]).multiplyScalar(oe.x),A.copy(E.binormals[0]).multiplyScalar(oe.y),y.copy(M[0]).add(R).add(A),pe(y.x,y.y,y.z)):pe(oe.x,oe.y,0)}for(let j=1;j<=h;j++)for(let oe=0;oe<J;oe++){const ue=u?H(I[oe],Q[oe],$e):I[oe];_?(R.copy(E.normals[j]).multiplyScalar(ue.x),A.copy(E.binormals[j]).multiplyScalar(ue.y),y.copy(M[j]).add(R).add(A),pe(y.x,y.y,y.z)):pe(ue.x,ue.y,d/h*j)}for(let j=m-1;j>=0;j--){const oe=j/m,ue=f*Math.cos(oe*Math.PI/2),xe=g*Math.sin(oe*Math.PI/2)+v;for(let Me=0,Le=k.length;Me<Le;Me++){const De=H(k[Me],B[Me],xe);pe(De.x,De.y,d+ue)}for(let Me=0,Le=C.length;Me<Le;Me++){const De=C[Me];X=q[Me];for(let qe=0,Ye=De.length;qe<Ye;qe++){const L=H(De[qe],X[qe],xe);_?pe(L.x,L.y+M[h-1].y,M[h-1].x+ue):pe(L.x,L.y,d+ue)}}}K(),ae();function K(){const j=r.length/3;if(u){let oe=0,ue=J*oe;for(let xe=0;xe<Fe;xe++){const Me=se[xe];Ne(Me[2]+ue,Me[1]+ue,Me[0]+ue)}oe=h+m*2,ue=J*oe;for(let xe=0;xe<Fe;xe++){const Me=se[xe];Ne(Me[0]+ue,Me[1]+ue,Me[2]+ue)}}else{for(let oe=0;oe<Fe;oe++){const ue=se[oe];Ne(ue[2],ue[1],ue[0])}for(let oe=0;oe<Fe;oe++){const ue=se[oe];Ne(ue[0]+J*h,ue[1]+J*h,ue[2]+J*h)}}n.addGroup(j,r.length/3-j,0)}function ae(){const j=r.length/3;let oe=0;ge(k,oe),oe+=k.length;for(let ue=0,xe=C.length;ue<xe;ue++){const Me=C[ue];ge(Me,oe),oe+=Me.length}n.addGroup(j,r.length/3-j,1)}function ge(j,oe){let ue=j.length;for(;--ue>=0;){const xe=ue;let Me=ue-1;Me<0&&(Me=j.length-1);for(let Le=0,De=h+m*2;Le<De;Le++){const qe=J*Le,Ye=J*(Le+1);ze(oe+xe+qe,oe+Me+qe,oe+Me+Ye,oe+xe+Ye)}}}function pe(j,oe,ue){l.push(j),l.push(oe),l.push(ue)}function Ne(j,oe,ue){Ue(j),Ue(oe),Ue(ue);const xe=r.length/3,Me=x.generateTopUV(n,r,xe-3,xe-2,xe-1);Qe(Me[0]),Qe(Me[1]),Qe(Me[2])}function ze(j,oe,ue,xe){Ue(j),Ue(oe),Ue(xe),Ue(oe),Ue(ue),Ue(xe);const Me=r.length/3,Le=x.generateSideWallUV(n,r,Me-6,Me-3,Me-2,Me-1);Qe(Le[0]),Qe(Le[1]),Qe(Le[3]),Qe(Le[1]),Qe(Le[2]),Qe(Le[3])}function Ue(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Qe(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,n=this.parameters.options;return Wg(i,n,t)}static fromJSON(t,i){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=i[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ma[r.type]().fromJSON(r)),new Ud(n,t.options)}},Hg={generateTopUV:function(e,t,i,n,r){const s=t[i*3],a=t[i*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new ee(s,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(e,t,i,n,r,s){const a=t[i*3],o=t[i*3+1],l=t[i*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[r*3],f=t[r*3+1],g=t[r*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-d),new ee(u,1-g),new ee(v,1-p)]:[new ee(o,1-l),new ee(h,1-d),new ee(f,1-g),new ee(m,1-p)]}};function Wg(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){const s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Nd=class Od extends pr{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Od(t.radius,t.detail)}},Fd=class Bd extends Ke{constructor(t=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],i=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:n,phiLength:r},i=Math.floor(i),r=ke(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],h=1/i,d=new P,u=new ee,f=new P,g=new P,v=new P;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let x=0;x<=i;x++){const M=n+x*h*r,_=Math.sin(M),E=Math.cos(M);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*_,d.y=t[A].y,d.z=t[A].x*E,a.push(d.x,d.y,d.z),u.x=x/i,u.y=A/(t.length-1),o.push(u.x,u.y);const R=l[3*A+0]*_,y=l[3*A+1],S=l[3*A+0]*E;c.push(R,y,S)}}for(let x=0;x<i;x++)for(let M=0;M<t.length-1;M++){const _=M+x*t.length,E=_,A=_+t.length,R=_+t.length+1,y=_+1;s.push(E,A,y),s.push(R,y,A)}this.setIndex(s),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bd(t.points,t.segments,t.phiStart,t.phiLength)}},xl=class zd extends pr{constructor(t=1,i=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new zd(t.radius,t.detail)}},Ea=class Vd extends Ke{constructor(t=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:r};const s=t/2,a=i/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=t/o,u=i/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let M=0;M<c;M++){const _=M*d-s;g.push(_,-x,0),v.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const M=x+c*p,_=x+c*(p+1),E=x+1+c*(p+1),A=x+1+c*p;f.push(M,_,A),f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vd(t.width,t.height,t.widthSegments,t.heightSegments)}},kd=class Gd extends Ke{constructor(t=.5,i=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let d=t;const u=(i-t)/r,f=new P,g=new ee;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/i+1)/2,g.y=(f.y/i+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<r;v++){const m=v*(n+1);for(let p=0;p<n;p++){const x=p+m,M=x,_=x+n+1,E=x+n+2,A=x+1;o.push(M,_,A),o.push(_,E,A)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gd(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Hd=class Wd extends Ke{constructor(t=new as([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(s,3)),this.setAttribute("uv",new Te(a,2));function c(h){const d=r.length/3,u=h.extractPoints(i);let f=u.shape;const g=u.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Ci.isClockWise(x)===!0&&(g[m]=x.reverse())}const v=Ci.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];r.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=v.length;m<p;m++){const x=v[m],M=x[0]+d,_=x[1]+d,E=x[2]+d;n.push(M,_,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return Xg(i,t)}static fromJSON(t,i){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=i[t.shapes[r]];n.push(a)}return new Wd(n,t.curveSegments)}};function Xg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){const r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Ml=class Xd extends Ke{constructor(t=1,i=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],M=p/n,_=a+M*o,E=t*Math.cos(_),A=Math.sqrt(t*t-E*E);let R=0;p===0&&a===0?R=.5/i:p===n&&l===Math.PI&&(R=-.5/i);for(let y=0;y<=i;y++){const S=y/i,I=r+S*s;d.x=-A*Math.cos(I),d.y=E,d.z=A*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(S+R,1-M),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<i;x++){const M=h[p][x+1],_=h[p][x],E=h[p+1][x],A=h[p+1][x+1];(p!==0||a>0)&&f.push(M,_,A),(p!==n-1||l<Math.PI)&&f.push(_,E,A)}this.setIndex(f),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},qd=class Yd extends pr{constructor(t=1,i=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Yd(t.radius,t.detail)}},Zd=class Jd extends Ke{constructor(t=1,i=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],h=[],d=[],u=new P,f=new P,g=new P;for(let v=0;v<=n;v++){const m=a+v/n*o;for(let p=0;p<=r;p++){const x=p/r*s;f.x=(t+i*Math.cos(m))*Math.cos(x),f.y=(t+i*Math.cos(m))*Math.sin(x),f.z=i*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/r),d.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=r;m++){const p=(r+1)*v+m-1,x=(r+1)*(v-1)+m-1,M=(r+1)*(v-1)+m,_=(r+1)*v+m;l.push(p,x,_),l.push(x,M,_)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Kd=class $d extends Ke{constructor(t=1,i=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],h=[],d=new P,u=new P,f=new P,g=new P,v=new P,m=new P,p=new P;for(let M=0;M<=n;++M){const _=M/n*s*Math.PI*2;x(_,s,a,t,f),x(_+.01,s,a,t,g),m.subVectors(g,f),p.addVectors(g,f),v.crossVectors(m,p),p.crossVectors(v,m),v.normalize(),p.normalize();for(let E=0;E<=r;++E){const A=E/r*Math.PI*2,R=-i*Math.cos(A),y=i*Math.sin(A);d.x=f.x+(R*p.x+y*v.x),d.y=f.y+(R*p.y+y*v.y),d.z=f.z+(R*p.z+y*v.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/n),h.push(E/r)}}for(let M=1;M<=n;M++)for(let _=1;_<=r;_++){const E=(r+1)*(M-1)+(_-1),A=(r+1)*M+(_-1),R=(r+1)*M+_,y=(r+1)*(M-1)+_;o.push(E,A,y),o.push(A,R,y)}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2));function x(M,_,E,A,R){const y=Math.cos(M),S=Math.sin(M),I=E/_*M,C=Math.cos(I);R.x=A*(2+C)*.5*y,R.y=A*(2+C)*S*.5,R.z=A*Math.sin(I)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $d(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},jd=class Qd extends Ke{constructor(t=new _l(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),i=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(i,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new ee;let h=new P;const d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function v(){for(let M=0;M<i;M++)m(M);m(s===!1?i:0),x(),p()}function m(M){h=t.getPointAt(M/i,h);const _=a.normals[M],E=a.binormals[M];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,y=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+y*E.x,l.y=S*_.y+y*E.y,l.z=S*_.z+y*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=i;M++)for(let _=1;_<=r;_++){const E=(r+1)*(M-1)+(_-1),A=(r+1)*M+(_-1),R=(r+1)*M+_,y=(r+1)*(M-1)+_;g.push(E,A,y),g.push(A,R,y)}}function x(){for(let M=0;M<=i;M++)for(let _=0;_<=r;_++)c.x=M/i,c.y=_/r,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qd(new ma[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},ef=class extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new P,r=new P;if(e.index!==null){const s=e.attributes.position,a=e.index;let o=e.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){const h=o[l],d=h.start,u=h.count;for(let f=d,g=d+u;f<g;f+=3)for(let v=0;v<3;v++){const m=a.getX(f+v),p=a.getX(f+(v+1)%3);n.fromBufferAttribute(s,m),r.fromBufferAttribute(s,p),Lc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){const c=3*a+l,h=3*a+(l+1)%3;n.fromBufferAttribute(s,c),r.fromBufferAttribute(s,h),Lc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Lc(e,t,i){const n=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(n)===!0||i.has(r)===!0?!1:(i.add(n),i.add(r),!0)}var Dc=Object.freeze({__proto__:null,BoxGeometry:ss,CapsuleGeometry:fd,CircleGeometry:md,ConeGeometry:fl,CylinderGeometry:dl,DodecahedronGeometry:xd,EdgesGeometry:Sd,ExtrudeGeometry:Dd,IcosahedronGeometry:Nd,LatheGeometry:Fd,OctahedronGeometry:xl,PlaneGeometry:Ea,PolyhedronGeometry:pr,RingGeometry:kd,ShapeGeometry:Hd,SphereGeometry:Ml,TetrahedronGeometry:qd,TorusGeometry:Zd,TorusKnotGeometry:Kd,TubeGeometry:jd,WireframeGeometry:ef}),tf=class extends Nt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function hr(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const r=e[i][n];if(Uc(r))r.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=r.clone();else if(Array.isArray(r))if(Uc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function Ht(e){const t={};for(let i=0;i<e.length;i++){const n=hr(e[i]);for(const r in n)t[r]=n[r]}return t}function Uc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function qg(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function nf(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nt.workingColorSpace}var rf={clone:hr,merge:Ht},Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends Nt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ye().setHex(n.value);break;case"v2":this.uniforms[i].value=new ee().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(n.value);break;case"m4":this.uniforms[i].value=new We().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sl=class extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bl=class extends Nt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sf=class extends bl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},af=class extends Nt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},of=class extends Nt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},lf=class extends Nt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},cf=class extends Nt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Tl=class extends Nt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends Nt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},hf=class extends Nt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},uf=class extends qt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function yn(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function df(e){function t(r,s){return e[r]-e[s]}const i=e.length,n=new Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function Oo(e,t,i){const n=e.length,r=new e.constructor(n);for(let s=0,a=0;a!==n;++s){const o=i[s]*t;for(let l=0;l!==t;++l)r[a++]=e[o+l]}return r}function ff(e,t,i,n){let r=1,s=e[0];for(;s!==void 0&&s[n]===void 0;)s=e[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),i.push(...a)),s=e[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(i,i.length)),s=e[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),i.push(a)),s=e[r++];while(s!==void 0)}function Jg(e,t,i,n,r=30){const s=e.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*r;if(!(g<i||g>=n)){d.push(c.times[f]);for(let v=0;v<h;++v)u.push(c.values[f*h+v])}}d.length!==0&&(c.times=yn(d,c.times.constructor),c.values=yn(u,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function Kg(e,t=0,i=e,n=30){n<=0&&(n=30);const r=i.tracks.length,s=t/n;for(let a=0;a<r;++a){const o=i.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=e.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const g=o.times.length-1;let v;if(s<=o.times[0]){const p=h,x=d-h;v=o.values.slice(p,x)}else if(s>=o.times[g]){const p=g*d+h,x=p+d-h;v=o.values.slice(p,x)}else{const p=o.createInterpolant(),x=h,M=d-h;p.evaluate(s),v=p.resultBuffer.slice(x,M)}l==="quaternion"&&new Xt().fromArray(v).normalize().conjugate().toArray(v);const m=c.times.length;for(let p=0;p<m;++p){const x=p*f+u;if(l==="quaternion")Xt.multiplyQuaternionsFlat(c.values,x,v,0,c.values,x);else{const M=f-u*2;for(let _=0;_<M;++_)c.values[x+_]-=v[_]}}}return e.blendMode=il,e}var $g=class{static convertArray(e,t){return yn(e,t)}static isTypedArray(e){return Ou(e)}static getKeyframeOrder(e){return df(e)}static sortedArray(e,t,i){return Oo(e,t,i)}static flattenJSON(e,t,i,n){ff(e,t,i,n)}static subclip(e,t,i,n,r=30){return Jg(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return Kg(e,t,i,n)}},mr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break i}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break i}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pf=class extends mr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vn,endingEnd:vn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case _n:r=e,a=2*t-i;break;case qr:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case _n:s=e,o=2*i-t;break;case qr:s=1,o=i+n[1]-n[0];break;default:s=e-1,o=t}const l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(i-t)/(n-t),g=f*f,v=g*f,m=-d*v+2*d*g-d*f,p=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*f+1,x=(-1-u)*v+(1.5+u)*g+.5*f,M=u*v-u*g;for(let _=0;_!==a;++_)r[_]=m*s[c+_]+p*s[l+_]+x*s[o+_]+M*s[h+_];return r}},Al=class extends mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(i-t)/(n-t),h=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*h+s[o+d]*c;return r}},mf=class extends mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},gf=class extends mr{interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){const f=(i-t)/(n-t),g=1-f;for(let v=0;v!==a;++v)r[v]=s[l+v]*g+s[o+v]*f;return r}const d=a*2,u=e-1;for(let f=0;f!==a;++f){const g=s[l+f],v=s[o+f],m=u*d+f*2,p=h[m],x=h[m+1],M=e*d+f*2,_=c[M],E=c[M+1];let A=(i-t)/(n-t),R,y,S,I,C;for(let N=0;N<8;N++){R=A*A,y=R*A,S=1-A,I=S*S,C=I*S;const G=C*t+3*I*A*p+3*S*R*_+y*n-i;if(Math.abs(G)<1e-10)break;const k=3*I*(p-t)+6*S*A*(_-p)+3*R*(n-_);if(Math.abs(k)<1e-10)break;A=A-G/k,A=Math.max(0,Math.min(1,A))}r[f]=C*g+3*I*A*x+3*S*R*E+y*v}return r}},ai=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yn(t,this.TimeBufferType),this.values=yn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yn(e.times,Array),values:yn(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new gf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break;case Io:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return de("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){Pe("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){Pe("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(n!==void 0&&Ou(n))for(let a=0,o=n.length;a!==o;++a){const l=n[a];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ra,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=e[a];if(l!==e[a+1]&&(a!==1||l!==e[0]))if(n)o=!0;else{const c=a*i,h=c-i,d=c+i;for(let u=0;u!==i;++u){const f=t[c+u];if(f!==t[h+u]||f!==t[d+u]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const c=a*i,h=s*i;for(let d=0;d!==i;++d)t[h+d]=t[c+d]}++s}}if(r>0){e[s]=e[r];for(let a=r*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=ua;var An=class extends ai{constructor(e,t,i){super(e,t,i)}};An.prototype.ValueTypeName="bool";An.prototype.ValueBufferType=Array;An.prototype.DefaultInterpolation=Xr;An.prototype.InterpolantFactoryMethodLinear=void 0;An.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends ai{constructor(e,t,i,n){super(e,t,i,n)}};wl.prototype.ValueTypeName="color";var Aa=class extends ai{constructor(e,t,i,n){super(e,t,i,n)}};Aa.prototype.ValueTypeName="number";var vf=class extends mr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t);let l=e*a;for(let c=l+a;l!==c;l+=4)Xt.slerpFlat(r,0,s,l-a,s,l,o);return r}},wa=class extends ai{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new vf(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var wn=class extends ai{constructor(e,t,i){super(e,t,i)}};wn.prototype.ValueTypeName="string";wn.prototype.ValueBufferType=Array;wn.prototype.DefaultInterpolation=Xr;wn.prototype.InterpolantFactoryMethodLinear=void 0;wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends ai{constructor(e,t,i,n){super(e,t,i,n)}};Cl.prototype.ValueTypeName="vector";var is=class{constructor(e="",t=-1,i=[],n=_a){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(Qg(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(ai.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const c=df(o);o=Oo(o,1,c),l=Oo(l,1,c),!n&&o[0]===0&&(o.push(r),l.push(l[0])),s.push(new Aa(".morphTargetInfluences["+t[a].name+"]",o,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.name.match(r);if(c&&c.length>1){const h=c[1];let d=n[h];d||(n[h]=d=[]),d.push(l)}}const s=[];for(const a in n)s.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return s}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function jg(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Aa;case"vector":case"vector2":case"vector3":case"vector4":return Cl;case"color":return wl;case"quaternion":return wa;case"bool":case"boolean":return An;case"string":return wn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Qg(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=jg(e.type);if(e.times===void 0){const i=[],n=[];ff(e.keys,i,n,"value"),e.times=i,e.values=n}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}var _i={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Nc(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Nc(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Nc(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Rl=class{constructor(e,t,i){const n=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){const u=l[h],f=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_f=new Rl,Kt=class{constructor(e){this.manager=e!==void 0?e:_f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Kt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},ev=class extends Error{constructor(e,t){super(e),this.response=t}},Ni=class extends Kt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:n});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&de("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Ai[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,f=u!==0;let g=0;const v=new ReadableStream({start(m){p();function p(){h.read().then(({done:x,value:M})=>{if(x)m.close();else{g+=M.byteLength;const _=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:u});for(let E=0,A=c.length;E<A;E++){const R=c[E];R.onProgress&&R.onProgress(_)}m.enqueue(M),p()}},x=>{m.error(x)})}}});return new Response(v)}else throw new ev(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),h=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{_i.add(`file:${e}`,l);const c=Ai[e];delete Ai[e];for(let h=0,d=c.length;h<d;h++){const u=c[h];u.onLoad&&u.onLoad(l)}}).catch(l=>{const c=Ai[e];if(c===void 0)throw this.manager.itemError(e),l;delete Ai[e];for(let h=0,d=c.length;h<d;h++){const u=c[h];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},tv=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Ni(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):Pe(o),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=is.parse(e[i]);t.push(n)}return t}},iv=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=[],a=new ba,o=new Ni(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(h){o.load(e[h],function(d){const u=r.parse(d,!0);s[h]={width:u.width,height:u.height,format:u.format,mipmaps:u.mipmaps},l+=1,l===6&&(u.mipmapCount===1&&(a.minFilter=St),a.image=s,a.format=u.format,a.needsUpdate=!0,t&&t(a))},i,n)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)c(h);else o.load(e,function(h){const d=r.parse(h,!0);if(d.isCubemap){const u=d.mipmaps.length/d.mipmapCount;for(let f=0;f<u;f++){s[f]={mipmaps:[]};for(let g=0;g<d.mipmapCount;g++)s[f].mipmaps.push(d.mipmaps[f*d.mipmapCount+g]),s[f].format=d.format,s[f].width=d.width,s[f].height=d.height}a.image=s}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=St),a.format=d.format,a.needsUpdate=!0,t&&t(a)},i,n);return a}},Xn=new WeakMap,ns=class extends Kt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=_i.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let h=Xn.get(s);h===void 0&&(h=[],Xn.set(s,h)),h.push({onLoad:t,onError:n})}return s}const a=Jr("img");function o(){c(),t&&t(this);const h=Xn.get(this)||[];for(let d=0;d<h.length;d++){const u=h[d];u.onLoad&&u.onLoad(this)}Xn.delete(this),r.manager.itemEnd(e)}function l(h){c(),n&&n(h),_i.remove(`image:${e}`);const d=Xn.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onError&&f.onError(h)}Xn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),_i.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},nv=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=new rs;r.colorSpace=Qt;const s=new ns(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(e[l],function(c){r.images[l]=c,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let l=0;l<e.length;++l)o(l);return r}},rv=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new ri,a=new Ni(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(o){let l;try{l=r.parse(o)}catch(c){n!==void 0?n(c):Pe(c);return}r._applyTexData(s,l),t&&t(s,l)},i,n),s}createDataTexture(e){const t=new ri;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Jt,e.wrapT=t.wrapT!==void 0?t.wrapT:Jt,e.magFilter=t.magFilter!==void 0?t.magFilter:St,e.minFilter=t.minFilter!==void 0?t.minFilter:St,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=dr),t.mipmapCount===1&&(e.minFilter=St),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},sv=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=new It,s=new ns(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},tn=class extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},yf=class extends tn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},co=new We,Oc=new P,Fc=new P,Pl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bn,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Oc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xs=new P,qs=new Xt,gi=new P,os=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xs,qs,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,qs,gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xs,qs,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xs,qs,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new P,Bc=new ee,zc=new ee,Dt=class extends os{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Mn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Bc,zc),t.subVectors(zc,Bc)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*n/o,t-=s.offsetY*i/l,n*=s.width/o,i*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},av=class extends Pl{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=or*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},xf=class extends tn{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new av}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ov=class extends Pl{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},Mf=class extends tn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ov}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gr=class extends os{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lv=class extends Pl{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sf=class extends tn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new lv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},bf=class extends tn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Tf=class extends tn{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Il=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new P)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*n),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*n)),t.addScaledVector(s[5],1.092548*(n*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(i*r)),t.addScaledVector(s[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*n),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*i),t.addScaledVector(s[4],2*.429043*i*n),t.addScaledVector(s[5],2*.429043*n*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*i*r),t.addScaledVector(s[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}},Ef=class extends tn{constructor(e=new Il,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},Vc={},Af=class wf extends Kt{constructor(t){super(t),this.textures={}}load(t,i,n,r){const s=this,a=new Ni(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{i(s.parse(JSON.parse(o)))}catch(l){r?r(l):Pe(l),s.manager.itemError(t)}},n,r)}parse(t){const i=this.createMaterialFromType(t.type);return i.fromJSON(t,this.textures),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return wf.createMaterialFromType(t)}static createMaterialFromType(t){const i={ShadowMaterial:tf,SpriteMaterial:ll,RawShaderMaterial:Sl,ShaderMaterial:si,PointsMaterial:hl,MeshPhysicalMaterial:sf,MeshStandardMaterial:bl,MeshPhongMaterial:af,MeshToonMaterial:of,MeshNormalMaterial:lf,MeshLambertMaterial:cf,MeshDepthMaterial:Tl,MeshDistanceMaterial:El,MeshBasicMaterial:en,MeshMatcapMaterial:hf,LineDashedMaterial:uf,LineBasicMaterial:qt,Material:Nt,...Vc}[t];let n;return i===void 0?(Ji(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),n=new Nt):n=new i,n}static registerMaterial(t,i){Vc[t]=i}},Fo=class{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Cf=class extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Rf=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Ni(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):Pe(o),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(d,u){if(t[u]!==void 0)return t[u];const f=d.interleavedBuffers[u],g=r(d,f.buffer),v=nr(f.type,g),m=new Sa(v,f.stride);return m.uuid=f.uuid,t[u]=m,m}function r(d,u){if(i[u]!==void 0)return i[u];const f=d.arrayBuffers[u],g=new Uint32Array(f).buffer;return i[u]=g,g}const s=e.isInstancedBufferGeometry?new Cf:new Ke,a=e.data.index;if(a!==void 0){const d=nr(a.type,a.array);s.setIndex(new ht(d,1))}const o=e.data.attributes;for(const d in o){const u=o[d];let f;if(u.isInterleavedBufferAttribute){const g=n(e.data,u.data);f=new $r(g,u.itemSize,u.offset,u.normalized)}else{const g=nr(u.type,u.array);f=new(u.isInstancedBufferAttribute?lr:ht)(g,u.itemSize,u.normalized)}u.name!==void 0&&(f.name=u.name),u.usage!==void 0&&f.setUsage(u.usage),s.setAttribute(d,f)}const l=e.data.morphAttributes;if(l)for(const d in l){const u=l[d],f=[];for(let g=0,v=u.length;g<v;g++){const m=u[g];let p;if(m.isInterleavedBufferAttribute){const x=n(e.data,m.data);p=new $r(x,m.itemSize,m.offset,m.normalized)}else{const x=nr(m.type,m.array);p=new ht(x,m.itemSize,m.normalized)}m.name!==void 0&&(p.name=m.name),f.push(p)}s.morphAttributes[d]=f}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let d=0,u=c.length;d!==u;++d){const f=c[d];s.addGroup(f.start,f.count,f.materialIndex)}const h=e.data.boundingSphere;return h!==void 0&&(s.boundingSphere=new Ut().fromJSON(h)),e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}},ho={},cv=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=this.path===""?Fo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const a=new Ni(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){let l=null;try{l=JSON.parse(o)}catch(h){n!==void 0&&n(h),Pe("ObjectLoader: Can't parse "+e+".",h.message);return}const c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),Pe("ObjectLoader: Can't load "+e);return}r.parse(l,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?Fo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const r=new Ni(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const s=await r.loadAsync(e,t);let a;try{a=JSON.parse(s)}catch(l){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+l.message)}const o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(a)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,i),c=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,c),this.bindLightTargets(l),t!==void 0){let h=!1;for(const d in s)if(s[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,s),o=this.parseObject(e.object,n,a,s,t),l=this.parseSkeletons(e.skeletons,o);return this.bindSkeletons(o,l),this.bindLightTargets(o),o}static registerGeometry(e,t){ho[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new as().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=new id().fromJSON(e[r],n);i[a.uuid]=a}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new Rf;for(let r=0,s=e.length;r<s;r++){let a;const o=e[r];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=n.parse(o);break;default:o.type in Dc?a=Dc[o.type].fromJSON(o,t):o.type in ho?a=ho[o.type].fromJSON(o,t):de(`ObjectLoader: Unknown geometry type "${o.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.userData!==void 0&&(a.userData=o.userData),i[o.uuid]=a}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new Af;r.setTextures(t);for(let s=0,a=e.length;s<a;s++){const o=e[s];i[o.uuid]===void 0&&(i[o.uuid]=r.parse(o)),n[o.uuid]=i[o.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=is.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function s(o){return o=i.manager.resolveURL(o),i.manager.itemStart(o),r.load(o,function(){i.manager.itemEnd(o)},void 0,function(){i.manager.itemError(o),i.manager.itemEnd(o)})}function a(o){if(typeof o=="string"){const l=o;return s(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l)}else return o.data?{data:nr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){const o=new Rl(t);r=new ns(o),r.setCrossOrigin(this.crossOrigin);for(let l=0,c=e.length;l<c;l++){const h=e[l],d=h.url;if(Array.isArray(d)){const u=[];for(let f=0,g=d.length;f<g;f++){const v=d[f],m=a(v);m!==null&&(m instanceof HTMLImageElement?u.push(m):u.push(new ri(m.data,m.width,m.height)))}n[h.uuid]=new Yi(u)}else{const u=a(h.url);n[h.uuid]=new Yi(u)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(s){if(typeof s=="string"){const a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await n.loadAsync(o)}else return s.data?{data:nr(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){n=new ns(this.manager),n.setCrossOrigin(this.crossOrigin);for(let s=0,a=e.length;s<a;s++){const o=e[s],l=o.url;if(Array.isArray(l)){const c=[];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=await r(u);f!==null&&(f instanceof HTMLImageElement?c.push(f):c.push(new ri(f.data,f.width,f.height)))}i[o.uuid]=new Yi(c)}else{const c=await r(o.url);i[o.uuid]=new Yi(c)}}}return i}parseTextures(e,t){function i(r,s){return typeof r=="number"?r:(de("ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const n={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=e[r];a.image===void 0&&de('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&de("ObjectLoader: Undefined image",a.image);const o=t[a.image],l=o.data;let c;Array.isArray(l)?(c=new rs,l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new ri:c=new It,l&&(c.needsUpdate=!0)),c.source=o,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,hv)),a.channel!==void 0&&(c.channel=a.channel),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],kc),c.wrapT=i(a.wrap[1],kc)),a.format!==void 0&&(c.format=a.format),a.internalFormat!==void 0&&(c.internalFormat=a.internalFormat),a.type!==void 0&&(c.type=a.type),a.colorSpace!==void 0&&(c.colorSpace=a.colorSpace),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,Gc)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,Gc)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.generateMipmaps!==void 0&&(c.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(c.compareFunction=a.compareFunction),a.normalized!==void 0&&(c.normalized=a.normalized),a.userData!==void 0&&(c.userData=a.userData),n[a.uuid]=c}return n}parseObject(e,t,i,n,r){let s;function a(d){return t[d]===void 0&&de("ObjectLoader: Undefined geometry",d),t[d]}function o(d){if(d!==void 0){if(Array.isArray(d)){const u=[];for(let f=0,g=d.length;f<g;f++){const v=d[f];i[v]===void 0&&de("ObjectLoader: Undefined material",v),u.push(i[v])}return u}return i[d]===void 0&&de("ObjectLoader: Undefined material",d),i[d]}}function l(d){return n[d]===void 0&&de("ObjectLoader: Undefined texture",d),n[d]}let c,h;switch(e.type){case"Scene":s=new sl,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new ye(e.background):s.background=l(e.background)),e.environment!==void 0&&(s.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Zu(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new qu(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Dt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new gr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new bf(e.color,e.intensity);break;case"DirectionalLight":s=new Sf(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new Mf(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Tf(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new xf(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new yf(e.color,e.groundColor,e.intensity);break;case"LightProbe":const d=new Il().fromArray(e.sh);s=new Ef(d,e.intensity);break;case"SkinnedMesh":c=a(e.geometry),h=o(e.material),s=new td(c,h),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=a(e.geometry),h=o(e.material),s=new wt(c,h);break;case"InstancedMesh":c=a(e.geometry),h=o(e.material);const u=e.count,f=e.instanceMatrix,g=e.instanceColor;s=new rd(c,h,u),s.instanceMatrix=new lr(new Float32Array(f.array),16),g!==void 0&&(s.instanceColor=new lr(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":c=a(e.geometry),h=o(e.material),s=new od(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,h),s.geometry=c,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._geometryInfo=e.geometryInfo.map(v=>{let m=null,p=null;return v.boundingBox!==void 0&&(m=new Vt().fromJSON(v.boundingBox)),v.boundingSphere!==void 0&&(p=new Ut().fromJSON(v.boundingSphere)),{...v,boundingBox:m,boundingSphere:p}}),s._instanceInfo=e.instanceInfo,s._availableInstanceIds=e._availableInstanceIds,s._availableGeometryIds=e._availableGeometryIds,s._nextIndexStart=e.nextIndexStart,s._nextVertexStart=e.nextVertexStart,s._geometryCount=e.geometryCount,s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._matricesTexture=l(e.matricesTexture.uuid),s._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(s.boundingSphere=new Ut().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(s.boundingBox=new Vt().fromJSON(e.boundingBox));break;case"LOD":s=new ed;break;case"Line":s=new Qi(a(e.geometry),o(e.material));break;case"LineLoop":s=new ld(a(e.geometry),o(e.material));break;case"LineSegments":s=new yi(a(e.geometry),o(e.material));break;case"PointCloud":case"Points":s=new cd(a(e.geometry),o(e.material));break;case"Sprite":s=new Qu(o(e.material));break;case"Group":s=new rr;break;case"Bone":s=new cl;break;default:s=new lt}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.pivot!==void 0&&(s.pivot=new P().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.static!==void 0&&(s.static=e.static),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let u=0;u<d.length;u++)s.add(this.parseObject(d[u],t,i,n,r))}if(e.animations!==void 0){const d=e.animations;for(let u=0;u<d.length;u++){const f=d[u];s.animations.push(r[f])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const d=e.levels;for(let u=0;u<d.length;u++){const f=d[u],g=s.getObjectByProperty("uuid",f.object);g!==void 0&&s.addLevel(g,f.distance,f.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?de("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new lt}})}},hv={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},kc={RepeatWrapping:Gr,ClampToEdgeWrapping:Jt,MirroredRepeatWrapping:Hr},Gc={NearestFilter:Ct,NearestMipmapNearestFilter:Xo,NearestMipmapLinearFilter:qo,LinearFilter:St,LinearMipmapNearestFilter:Yo,LinearMipmapLinearFilter:dr},uo=new WeakMap,uv=class extends Kt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&de("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&de("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=_i.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(l=>{uo.has(s)===!0?(n&&n(uo.get(s)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const o=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){_i.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){n&&n(l),uo.set(o,l),_i.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(`image-bitmap:${e}`,o),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ys,Ll=class{static getContext(){return Ys===void 0&&(Ys=new(window.AudioContext||window.webkitAudioContext)),Ys}static setContext(e){Ys=e}},dv=class extends Kt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new Ni(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0),c=Ll.getContext(),h=e+"#decode";r.manager.itemStart(h),c.decodeAudioData(l,function(d){t(d),r.manager.itemEnd(h)}).catch(function(d){a(d),r.manager.itemEnd(h)})}catch(l){a(l)}},i,n);function a(o){n?n(o):Pe(o),r.manager.itemError(e)}}},Hc=new We,Wc=new We,hn=new We,fv=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Dt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Dt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,hn.copy(e.projectionMatrix);const i=t.eyeSep/2,n=i*t.near/t.focus,r=t.near*Math.tan(Mn*t.fov*.5)/t.zoom;let s,a;Wc.elements[12]=-i,Hc.elements[12]=i,s=-r*t.aspect+n,a=r*t.aspect+n,hn.elements[0]=2*t.near/(a-s),hn.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(hn),s=-r*t.aspect-n,a=r*t.aspect-n,hn.elements[0]=2*t.near/(a-s),hn.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(hn)}this.cameraL.matrix.copy(e.matrixWorld).multiply(Wc),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(Hc),this.cameraR.matrixWorldNeedsUpdate=!0}},qn=-90,Yn=1,Pf=class extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Dt(qn,Yn,e,t);n.layers=this.layers,this.add(n);const r=new Dt(qn,Yn,e,t);r.layers=this.layers,this.add(r);const s=new Dt(qn,Yn,e,t);s.layers=this.layers,this.add(s);const a=new Dt(qn,Yn,e,t);a.layers=this.layers,this.add(a);const o=new Dt(qn,Yn,e,t);o.layers=this.layers,this.add(o);const l=new Dt(qn,Yn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,a,o]=t;for(const l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},If=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Lf=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=pv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function pv(){this._document.hidden===!1&&this.reset()}var un=new P,fo=new Xt,mv=new P,dn=new P,fn=new P,gv=class extends lt{constructor(){super(),this.type="AudioListener",this.context=Ll.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Lf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(un,fo,mv),dn.set(0,0,-1).applyQuaternion(fo),fn.set(0,1,0).applyQuaternion(fo),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(un.x,i),t.positionY.linearRampToValueAtTime(un.y,i),t.positionZ.linearRampToValueAtTime(un.z,i),t.forwardX.linearRampToValueAtTime(dn.x,i),t.forwardY.linearRampToValueAtTime(dn.y,i),t.forwardZ.linearRampToValueAtTime(dn.z,i),t.upX.linearRampToValueAtTime(fn.x,i),t.upY.linearRampToValueAtTime(fn.y,i),t.upZ.linearRampToValueAtTime(fn.z,i)}else t.setPosition(un.x,un.y,un.z),t.setOrientation(dn.x,dn.y,dn.z,fn.x,fn.y,fn.z)}},Df=class extends lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){de("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(de("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){de("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(de("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},pn=new P,Xc=new Xt,vv=new P,mn=new P,_v=class extends Df{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(pn,Xc,vv),mn.set(0,0,1).applyQuaternion(Xc);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(pn.x,i),t.positionY.linearRampToValueAtTime(pn.y,i),t.positionZ.linearRampToValueAtTime(pn.z,i),t.orientationX.linearRampToValueAtTime(mn.x,i),t.orientationY.linearRampToValueAtTime(mn.y,i),t.orientationZ.linearRampToValueAtTime(mn.z,i)}else t.setPosition(pn.x,pn.y,pn.z),t.setOrientation(mn.x,mn.y,mn.z)}},yv=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Uf=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,s;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==n;++a)i[r+a]=i[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const o=t*this._origIndex;this._mixBufferRegion(i,n,o,1-r,t)}s>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let o=t,l=t+t;o!==l;++o)if(i[o]!==i[o+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,s=n;r!==s;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let s=0;s!==r;++s)e[t+s]=e[i+s]}_slerp(e,t,i,n){Xt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const s=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,s,e,t,e,i),Xt.slerpFlat(e,t,e,t,e,s,n)}_lerp(e,t,i,n,r){const s=1-n;for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]*s+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[i+s]*n}}},xv="\\[\\]\\.:\\/",Mv=new RegExp("[\\[\\]\\.:\\/]","g"),Dl="[^\\[\\]\\.:\\/]",Sv="[^"+xv.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Tv=/(WCOD+)?/.source.replace("WCOD",Sv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Av=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),wv=new RegExp("^"+bv+Tv+Ev+Av+"$"),Cv=["material","materials","bones","map"],Rv=class{constructor(e,t,i){const n=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class er{constructor(t,i,n){this.path=i,this.parsedPath=n||er.parseTrackName(i),this.node=er.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new er.Composite(t,i,n):new er(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mv,"")}static parseTrackName(t){const i=wv.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Cv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===i||o.uuid===i)return o;const l=n(o.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,n=i.objectName,r=i.propertyName;let s=i.propertyIndex;if(t||(t=er.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[r];if(a===void 0){const c=i.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Rv;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pv=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ei(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,s=r.length;let a,o=e.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){const d=arguments[c],u=d.uuid;let f=t[u];if(f===void 0){f=o++,t[u]=f,e.push(d);for(let g=0,v=s;g!==v;++g)r[g].push(new dt(d,i[g],n[g]))}else if(f<l){a=e[f];const g=--l,v=e[g];t[v.uuid]=f,e[f]=v,t[u]=g,e[g]=d;for(let m=0,p=s;m!==p;++m){const x=r[m],M=x[g];let _=x[f];x[f]=M,_===void 0&&(_=new dt(d,i[m],n[m])),x[g]=_}}else e[f]!==a&&Pe("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const o=arguments[s],l=o.uuid,c=t[l];if(c!==void 0&&c>=r){const h=r++,d=e[h];t[d.uuid]=c,e[c]=d,t[l]=h,e[h]=o;for(let u=0,f=n;u!==f;++u){const g=i[u],v=g[h],m=g[c];g[c]=v,g[h]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,s=e.length;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a].uuid,c=t[l];if(c!==void 0)if(delete t[l],c<r){const h=--r,d=e[h],u=--s,f=e[u];t[d.uuid]=c,e[c]=d,t[f.uuid]=h,e[h]=f,e.pop();for(let g=0,v=n;g!==v;++g){const m=i[g],p=m[h],x=m[u];m[c]=p,m[h]=x,m.pop()}}else{const h=--s,d=e[h];h>0&&(t[d.uuid]=c),e[c]=d,e.pop();for(let u=0,f=n;u!==f;++u){const g=i[u];g[c]=g[h],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);n=r.length,i[e]=n,s.push(e),a.push(t),r.push(h);for(let d=c,u=o.length;d!==u;++d){const f=o[d];h[d]=new dt(f,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a],l=e[a];t[l]=i,s[i]=o,s.pop(),r[i]=r[a],r.pop(),n[i]=n[a],n.pop()}}},Nf=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,s=r.length,a=new Array(s),o={endingStart:vn,endingEnd:vn};for(let l=0;l!==s;++l){const c=r[l].createInterpolant(null);a[l]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Du,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,r=e._clip.duration,s=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+i,l[0]=e/s,l[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const o=(e-r)*i;o<0||i===0?t=0:(this._startTime=null,t=i*o)}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case il:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulateAdditive(a);break;case _a:default:for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const s=i===Uu;if(e===0)return r===-1?n:s&&(r&1)===1?t-n:n;if(i===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);const o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===1){const l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=n;if(s&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=_n,n.endingEnd=_n):(e?n.endingStart=this.zeroSlopeAtStart?_n:vn:n.endingStart=qr,t?n.endingEnd=this.zeroSlopeAtEnd?_n:vn:n.endingEnd=qr)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let s=this._weightInterpolant;s===null&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,o=s.sampleValues;return a[0]=r,o[0]=t,a[1]=r+e,o[1]=i,this}},Iv=new Float32Array(1),Lv=class extends di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,s=e._propertyBindings,a=e._interpolants,o=i.uuid,l=this._bindingsByRootAndName;let c=l[o];c===void 0&&(c={},l[o]=c);for(let h=0;h!==r;++h){const d=n[h],u=d.name;let f=c[u];if(f!==void 0)++f.referenceCount,s[h]=f;else{if(f=s[h],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,o,u));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;f=new Uf(dt.create(i,u,g),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,o,u),s[h]=f}a[h].resultBuffer=f.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let s=n[t];s===void 0&&(s={},n[t]=s),s[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,s=this._bindingsByRootAndName,a=s[n],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Al(new Float32Array(2),new Float32Array(2),1,Iv),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let s=typeof e=="string"?is.findByName(n,e):e;const a=s!==null?s.uuid:e,o=this._actionsByClip[a];let l=null;if(i===void 0&&(s!==null?i=s.blendMode:i=_a),o!==void 0){const h=o.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const c=new Nf(this,s,t,i);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?is.findByName(i,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(n,e,r,s);const a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){const l=s[a];this._deactivateAction(l);const c=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,t[c]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const s=i[r].actionByRoot[t];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const n=this._bindingsByRootAndName[t];if(n!==void 0)for(const r in n){const s=n[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},Dv=class extends rl{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i,this.texture=new Ma(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},Uv=class Of{constructor(t){this.value=t}clone(){return new Of(this.value.clone===void 0?this.value:this.value.clone())}},Nv=0,Ov=class extends di{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Nv++}),this.name="",this.usage=ya,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=Array.isArray(t[i])?t[i]:[t[i]];for(let s=0;s<r.length;s++)this.uniforms.push(r[s].clone())}return this}clone(){return new this.constructor().copy(this)}},Fv=class extends Sa{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Bv=class{constructor(e,t,i,n,r,s=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},qc=new We,Ff=class{constructor(e,t,i=0,n=1/0){this.ray=new fr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Sn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(e,t=!0,i=[]){return Bo(e,this,i,t),i.sort(Yc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Bo(e[n],this,i,t);return i.sort(Yc),i}};function Yc(e,t){return e.distance-t.distance}function Bo(e,t,i,n){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&n===!0){const s=e.children;for(let a=0,o=s.length;a<o;a++)Bo(s[a],t,i,!0)}}var Bf=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,de("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},zv=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Vv=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},kv=class zf{static{zf.prototype.isMatrix2=!0}constructor(t,i,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let n=0;n<4;n++)this.elements[n]=t[n+i];return this}set(t,i,n,r){const s=this.elements;return s[0]=t,s[2]=i,s[1]=n,s[3]=r,this}},Zc=new ee,Vf=class{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zc).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jc=new P,Zs=new P,Zn=new P,Jn=new P,po=new P,Gv=new P,Hv=new P,Wv=class{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Jc.subVectors(e,this.start),Zs.subVectors(this.end,this.start);const i=Zs.dot(Zs);if(i===0)return 0;let n=Zs.dot(Jc)/i;return t&&(n=ke(n,0,1)),n}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=Gv,i=Hv){const n=10000000000000001e-32;let r,s;const a=this.start,o=e.start,l=this.end,c=e.end;Zn.subVectors(l,a),Jn.subVectors(c,o),po.subVectors(a,o);const h=Zn.dot(Zn),d=Jn.dot(Jn),u=Jn.dot(po);if(h<=n&&d<=n)return t.copy(a),i.copy(o),t.sub(i),t.dot(t);if(h<=n)r=0,s=u/d,s=ke(s,0,1);else{const f=Zn.dot(po);if(d<=n)s=0,r=ke(-f/h,0,1);else{const g=Zn.dot(Jn),v=h*d-g*g;v!==0?r=ke((g*u-f*d)/v,0,1):r=0,s=(g*r+u)/d,s<0?(s=0,r=ke(-f/h,0,1)):s>1&&(s=1,r=ke((g-f)/h,0,1))}}return t.copy(a).addScaledVector(Zn,r),i.copy(o).addScaledVector(Jn,s),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Kc=new P,Xv=class extends lt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Ke,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){const l=s/o*Math.PI*2,c=a/o*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}i.setAttribute("position",new Te(n,3));const r=new qt({fog:!1,toneMapped:!1});this.cone=new yi(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Kc.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Kc),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Wi=new P,Js=new We,mo=new We,qv=class extends yi{constructor(e){const t=kf(e),i=new Ke,n=[],r=[];for(let l=0;l<t.length;l++){const c=t[l];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new Te(n,3)),i.setAttribute("color",new Te(r,3));const s=new qt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,s),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new ye(255),o=new ye(65280);this.setColors(a,o)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");mo.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Js.multiplyMatrices(mo,a.matrixWorld),Wi.setFromMatrixPosition(Js),n.setXYZ(s,Wi.x,Wi.y,Wi.z),Js.multiplyMatrices(mo,a.parent.matrixWorld),Wi.setFromMatrixPosition(Js),n.setXYZ(s+1,Wi.x,Wi.y,Wi.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let n=0;n<i.count;n+=2)i.setXYZ(n,e.r,e.g,e.b),i.setXYZ(n+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function kf(e){const t=[];e.isBone===!0&&t.push(e);for(let i=0;i<e.children.length;i++)t.push(...kf(e.children[i]));return t}var Yv=class extends wt{constructor(e,t,i){const n=new Ml(t,4,2),r=new en({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},Zv=new P,$c=new ye,jc=new ye,Jv=class extends lt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new xl(t);n.rotateY(Math.PI*.5),this.material=new en({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),s=new Float32Array(r.count*3);n.setAttribute("color",new ht(s,3)),this.add(new wt(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");$c.copy(this.light.color),jc.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?$c:jc;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(Zv.setFromMatrixPosition(this.light.matrixWorld).negate())}},Kv=class extends yi{constructor(e=10,t=10,i=4473924,n=8947848){i=new ye(i),n=new ye(n);const r=t/2,s=e/t,a=e/2,o=[],l=[];for(let d=0,u=0,f=-a;d<=t;d++,f+=s){o.push(-a,0,f,a,0,f),o.push(f,0,-a,f,0,a);const g=d===r?i:n;g.toArray(l,u),u+=3,g.toArray(l,u),u+=3,g.toArray(l,u),u+=3,g.toArray(l,u),u+=3}const c=new Ke;c.setAttribute("position",new Te(o,3)),c.setAttribute("color",new Te(l,3));const h=new qt({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},$v=class extends yi{constructor(e=10,t=16,i=8,n=64,r=4473924,s=8947848){r=new ye(r),s=new ye(s);const a=[],o=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),u=Math.sin(d)*e,f=Math.cos(d)*e;a.push(0,0,0),a.push(u,0,f);const g=h&1?r:s;o.push(g.r,g.g,g.b),o.push(g.r,g.g,g.b)}for(let h=0;h<i;h++){const d=h&1?r:s,u=e-e/i*h;for(let f=0;f<n;f++){let g=f/n*(Math.PI*2),v=Math.sin(g)*u,m=Math.cos(g)*u;a.push(v,0,m),o.push(d.r,d.g,d.b),g=(f+1)/n*(Math.PI*2),v=Math.sin(g)*u,m=Math.cos(g)*u,a.push(v,0,m),o.push(d.r,d.g,d.b)}}const l=new Ke;l.setAttribute("position",new Te(a,3)),l.setAttribute("color",new Te(o,3));const c=new qt({vertexColors:!0,toneMapped:!1});super(l,c),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Qc=new P,Ks=new P,eh=new P,jv=class extends lt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Ke;n.setAttribute("position",new Te([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new qt({fog:!1,toneMapped:!1});this.lightPlane=new Qi(n,r),this.add(this.lightPlane),n=new Ke,n.setAttribute("position",new Te([0,0,0,0,0,1],3)),this.targetLine=new Qi(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Qc.setFromMatrixPosition(this.light.matrixWorld),Ks.setFromMatrixPosition(this.light.target.matrixWorld),eh.subVectors(Ks,Qc),this.lightPlane.lookAt(Ks),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ks),this.targetLine.scale.z=eh.length()}},$s=new P,Mt=new os,Qv=class extends yi{constructor(e){const t=new Ke,i=new qt({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],s={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(f,g){o(f),o(g)}function o(f){n.push(0,0,0),r.push(0,0,0),s[f]===void 0&&(s[f]=[]),s[f].push(n.length/3-1)}t.setAttribute("position",new Te(n,3)),t.setAttribute("color",new Te(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new ye(16755200),c=new ye(16711680),h=new ye(43775),d=new ye(16777215),u=new ye(3355443);this.setColors(l,c,h,d,u)}setColors(e,t,i,n,r){const s=this.geometry.getAttribute("color");return s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,n.r,n.g,n.b),s.setXYZ(39,n.r,n.g,n.b),s.setXYZ(40,r.r,r.g,r.b),s.setXYZ(41,r.r,r.g,r.b),s.setXYZ(42,r.r,r.g,r.b),s.setXYZ(43,r.r,r.g,r.b),s.setXYZ(44,r.r,r.g,r.b),s.setXYZ(45,r.r,r.g,r.b),s.setXYZ(46,r.r,r.g,r.b),s.setXYZ(47,r.r,r.g,r.b),s.setXYZ(48,r.r,r.g,r.b),s.setXYZ(49,r.r,r.g,r.b),s.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;let r,s;if(Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,s=0;else if(this.camera.coordinateSystem===2e3)r=-1,s=1;else if(this.camera.coordinateSystem===2001)r=0,s=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Tt("c",t,e,Mt,0,0,r),Tt("t",t,e,Mt,0,0,s),Tt("n1",t,e,Mt,-1,-1,r),Tt("n2",t,e,Mt,i,-1,r),Tt("n3",t,e,Mt,-1,n,r),Tt("n4",t,e,Mt,i,n,r),Tt("f1",t,e,Mt,-1,-1,s),Tt("f2",t,e,Mt,i,-1,s),Tt("f3",t,e,Mt,-1,n,s),Tt("f4",t,e,Mt,i,n,s),Tt("u1",t,e,Mt,i*.7,n*1.1,r),Tt("u2",t,e,Mt,-1*.7,n*1.1,r),Tt("u3",t,e,Mt,0,n*2,r),Tt("cf1",t,e,Mt,-1,0,s),Tt("cf2",t,e,Mt,i,0,s),Tt("cf3",t,e,Mt,0,-1,s),Tt("cf4",t,e,Mt,0,n,s),Tt("cn1",t,e,Mt,-1,0,r),Tt("cn2",t,e,Mt,i,0,r),Tt("cn3",t,e,Mt,0,-1,r),Tt("cn4",t,e,Mt,0,n,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Tt(e,t,i,n,r,s,a){$s.set(r,s,a).unproject(n);const o=t[e];if(o!==void 0){const l=i.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],$s.x,$s.y,$s.z)}}var js=new Vt,e_=class extends yi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new Ke;r.setIndex(new ht(i,1)),r.setAttribute("position",new ht(n,3)),super(r,new qt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&js.setFromObject(this.object),js.isEmpty())return;const e=js.min,t=js.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},t_=class extends yi{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ke;r.setIndex(new ht(i,1)),r.setAttribute("position",new Te(n,3)),super(r,new qt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},i_=class extends Qi{constructor(e,t=1,i=16776960){const n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new Ke;s.setAttribute("position",new Te(r,3)),s.computeBoundingSphere(),super(s,new qt({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new Ke;o.setAttribute("position",new Te(a,3)),o.computeBoundingSphere(),this.add(new wt(o,new en({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},th=new P,Qs,go,n_=class extends lt{constructor(e=new P(0,0,1),t=new P(0,0,0),i=1,n=16776960,r=i*.2,s=r*.2){super(),this.type="ArrowHelper",Qs===void 0&&(Qs=new Ke,Qs.setAttribute("position",new Te([0,0,0,0,1,0],3)),go=new fl(.5,1,5,1),go.translate(0,-.5,0)),this.position.copy(t),this.line=new Qi(Qs,new qt({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new wt(go,new en({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{th.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(th,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},r_=class extends yi{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Ke;n.setAttribute("position",new Te(t,3)),n.setAttribute("color",new Te(i,3));const r=new qt({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new ye,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},s_=class{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new jr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,s){return this.currentPath.bezierCurveTo(e,t,i,n,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(o,l){let c=!1;const h=l.length;for(let d=0,u=h-1;d<h;u=d++){const f=l[d],g=l[u];f.y>o.y!=g.y>o.y&&o.x<(g.x-f.x)*(o.y-f.y)/(g.y-f.y)+f.x&&(c=!c)}return c}function t(o,l){const c=l.getCenter(new ee);if(e(c,o))return c;const h=c.y,d=[],u=o.length;for(let f=0;f<u;f++){const g=o[f],v=o[(f+1)%u];if(g.y>h!=v.y>h){const m=g.x+(h-g.y)*(v.x-g.x)/(v.y-g.y);d.push(m)}}return d.length>1&&(d.sort((f,g)=>f-g),c.x=(d[0]+d[1])/2),c}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(de('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");const n=i==="nonzero"?(o=>o!==0):(o=>(o&1)!==0),r=[];for(const o of this.subPaths){const l=o.getPoints();if(l.length<3)continue;const c=Ci.area(l);if(c===0)continue;const h=new Vf;for(let d=0;d<l.length;d++)h.expandByPoint(l[d]);r.push({subPath:o,points:l,boundingBox:h,interiorPoint:t(l,h),absArea:Math.abs(c),winding:c<0?-1:1,container:null,exclude:!1,role:null})}r.sort((o,l)=>l.absArea-o.absArea);for(let o=0;o<r.length;o++){const l=r[o];let c=0;for(let h=o-1;h>=0;h--){const d=r[h];if(d.boundingBox.containsBox(l.boundingBox)&&e(l.interiorPoint,d.points)){l.container=d.exclude?d.container:d,c=d.winding,l.winding+=c;break}}n(l.winding)===n(c)&&(l.exclude=!0)}for(const o of r)o.exclude||(o.role=o.container===null||o.container.role==="hole"?"outer":"hole");const s=[],a=new Map;for(const o of r){if(o.exclude||o.role!=="outer")continue;const l=new as;l.curves=o.subPath.curves,s.push(l),a.set(o,l)}for(const o of r){if(o.exclude||o.role!=="hole")continue;const l=a.get(o.container);if(!l)continue;const c=new jr;c.curves=o.subPath.curves,l.holes.push(c)}return s}},a_=class extends di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){de("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function o_(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function l_(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function c_(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function zo(e,t,i,n){const r=h_(n);switch(i){case Jh:return e*t;case Qo:return e*t/r.components*r.byteLength;case va:return e*t/r.components*r.byteLength;case Wr:return e*t*2/r.components*r.byteLength;case el:return e*t*2/r.components*r.byteLength;case Kh:return e*t*3/r.components*r.byteLength;case Di:return e*t*4/r.components*r.byteLength;case tl:return e*t*4/r.components*r.byteLength;case $h:case jh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qh:case eu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case iu:case ru:return Math.max(e,16)*Math.max(t,8)/4;case tu:case nu:return Math.max(e,8)*Math.max(t,8)/2;case su:case au:case lu:case cu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ou:case hu:case uu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case du:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fu:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case mu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case vu:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case _u:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case yu:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xu:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Su:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Tu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Eu:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Au:case wu:case Cu:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ru:case Pu:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Iu:case Lu:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function h_(e){switch(e){case Ri:case Wh:return{byteLength:1,components:1};case Zo:case Xh:case Ki:return{byteLength:2,components:1};case Jo:case Ko:return{byteLength:2,components:4};case Ii:case qh:case Li:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}var u_=class{static contain(e,t){return o_(e,t)}static cover(e,t){return l_(e,t)}static fill(e){return c_(e)}static getByteLength(e,t,i,n){return zo(e,t,i,n)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var d_=xp({ACESFilmicToneMapping:()=>4,AddEquation:()=>100,AddOperation:()=>2,AdditiveAnimationBlendMode:()=>il,AdditiveBlending:()=>2,AgXToneMapping:()=>6,AlphaFormat:()=>Jh,AlwaysCompare:()=>519,AlwaysDepth:()=>1,AlwaysStencilFunc:()=>519,AmbientLight:()=>bf,AnimationAction:()=>Nf,AnimationClip:()=>is,AnimationLoader:()=>tv,AnimationMixer:()=>Lv,AnimationObjectGroup:()=>Pv,AnimationUtils:()=>$g,ArcCurve:()=>bd,ArrayCamera:()=>If,ArrowHelper:()=>n_,AttachedBindMode:()=>Hh,Audio:()=>Df,AudioAnalyser:()=>yv,AudioContext:()=>Ll,AudioListener:()=>gv,AudioLoader:()=>dv,AxesHelper:()=>r_,BackSide:()=>1,BasicDepthPacking:()=>Nu,BasicShadowMap:()=>0,BatchedMesh:()=>od,BezierInterpolant:()=>gf,Bone:()=>cl,BooleanKeyframeTrack:()=>An,Box2:()=>Vf,Box3:()=>Vt,Box3Helper:()=>t_,BoxGeometry:()=>ss,BoxHelper:()=>e_,BufferAttribute:()=>ht,BufferGeometry:()=>Ke,BufferGeometryLoader:()=>Rf,ByteType:()=>Wh,Cache:()=>_i,Camera:()=>os,CameraHelper:()=>Qv,CanvasTexture:()=>gg,CapsuleGeometry:()=>fd,CatmullRomCurve3:()=>Td,CineonToneMapping:()=>3,CircleGeometry:()=>md,ClampToEdgeWrapping:()=>Jt,Clock:()=>Bf,Color:()=>ye,ColorKeyframeTrack:()=>wl,ColorManagement:()=>nt,Compatibility:()=>nm,CompressedArrayTexture:()=>pg,CompressedCubeTexture:()=>mg,CompressedTexture:()=>ba,CompressedTextureLoader:()=>iv,ConeGeometry:()=>fl,ConstantAlphaFactor:()=>213,ConstantColorFactor:()=>211,Controls:()=>a_,CubeCamera:()=>Pf,CubeDepthTexture:()=>ud,CubeReflectionMapping:()=>301,CubeRefractionMapping:()=>302,CubeTexture:()=>rs,CubeTextureLoader:()=>nv,CubeUVReflectionMapping:()=>306,CubicBezierCurve:()=>ml,CubicBezierCurve3:()=>Ed,CubicInterpolant:()=>pf,CullFaceBack:()=>1,CullFaceFront:()=>2,CullFaceFrontBack:()=>3,CullFaceNone:()=>0,Curve:()=>fi,CurvePath:()=>wd,CustomBlending:()=>5,CustomToneMapping:()=>5,CylinderGeometry:()=>dl,Cylindrical:()=>Vv,Data3DTexture:()=>Ma,DataArrayTexture:()=>xa,DataTexture:()=>ri,DataTextureLoader:()=>rv,DataUtils:()=>Vm,DecrementStencilOp:()=>Vp,DecrementWrapStencilOp:()=>Gp,DefaultLoadingManager:()=>_f,DepthFormat:()=>ar,DepthStencilFormat:()=>jo,DepthTexture:()=>Tn,DetachedBindMode:()=>Cp,DirectionalLight:()=>Sf,DirectionalLightHelper:()=>jv,DiscreteInterpolant:()=>mf,DodecahedronGeometry:()=>xd,DoubleSide:()=>2,DstAlphaFactor:()=>206,DstColorFactor:()=>208,DynamicCopyUsage:()=>Kp,DynamicDrawUsage:()=>Wp,DynamicReadUsage:()=>Yp,EdgesGeometry:()=>Sd,EllipseCurve:()=>Ta,EqualCompare:()=>514,EqualDepth:()=>4,EqualStencilFunc:()=>514,EquirectangularReflectionMapping:()=>303,EquirectangularRefractionMapping:()=>304,Euler:()=>Ui,EventDispatcher:()=>di,ExternalTexture:()=>ul,ExtrudeGeometry:()=>Dd,FileLoader:()=>Ni,Float16BufferAttribute:()=>Ym,Float32BufferAttribute:()=>Te,FloatType:()=>Li,Fog:()=>Zu,FogExp2:()=>qu,FramebufferTexture:()=>fg,FrontSide:()=>0,Frustum:()=>bn,FrustumArray:()=>sd,GLBufferAttribute:()=>Bv,GLSL1:()=>"100",GLSL3:()=>jp,GreaterCompare:()=>516,GreaterDepth:()=>6,GreaterEqualCompare:()=>518,GreaterEqualDepth:()=>5,GreaterEqualStencilFunc:()=>518,GreaterStencilFunc:()=>516,GridHelper:()=>Kv,Group:()=>rr,HTMLTexture:()=>vg,HalfFloatType:()=>Ki,HemisphereLight:()=>yf,HemisphereLightHelper:()=>Jv,IcosahedronGeometry:()=>Nd,ImageBitmapLoader:()=>uv,ImageLoader:()=>ns,ImageUtils:()=>Gu,IncrementStencilOp:()=>zp,IncrementWrapStencilOp:()=>kp,InstancedBufferAttribute:()=>lr,InstancedBufferGeometry:()=>Cf,InstancedInterleavedBuffer:()=>Fv,InstancedMesh:()=>rd,Int16BufferAttribute:()=>Xm,Int32BufferAttribute:()=>qm,Int8BufferAttribute:()=>Gm,IntType:()=>qh,InterleavedBuffer:()=>Sa,InterleavedBufferAttribute:()=>$r,Interpolant:()=>mr,InterpolateBezier:()=>Io,InterpolateDiscrete:()=>Xr,InterpolateLinear:()=>ua,InterpolateSmooth:()=>ra,InterpolationSamplingMode:()=>im,InterpolationSamplingType:()=>tm,InvertStencilOp:()=>Hp,KeepStencilOp:()=>sa,KeyframeTrack:()=>ai,LOD:()=>ed,LatheGeometry:()=>Fd,Layers:()=>Sn,LessCompare:()=>513,LessDepth:()=>2,LessEqualCompare:()=>515,LessEqualDepth:()=>3,LessEqualStencilFunc:()=>515,LessStencilFunc:()=>513,Light:()=>tn,LightProbe:()=>Ef,Line:()=>Qi,Line3:()=>Wv,LineBasicMaterial:()=>qt,LineCurve:()=>gl,LineCurve3:()=>Ad,LineDashedMaterial:()=>uf,LineLoop:()=>ld,LineSegments:()=>yi,LinearFilter:()=>St,LinearInterpolant:()=>Al,LinearMipMapLinearFilter:()=>Lp,LinearMipMapNearestFilter:()=>Ip,LinearMipmapLinearFilter:()=>dr,LinearMipmapNearestFilter:()=>Yo,LinearSRGBColorSpace:()=>da,LinearToneMapping:()=>1,LinearTransfer:()=>Yr,Loader:()=>Kt,LoaderUtils:()=>Fo,LoadingManager:()=>Rl,LoopOnce:()=>Up,LoopPingPong:()=>Uu,LoopRepeat:()=>Du,MOUSE:()=>Ap,Material:()=>Nt,MaterialBlending:()=>6,MaterialLoader:()=>Af,MathUtils:()=>Am,Matrix2:()=>kv,Matrix3:()=>Ze,Matrix4:()=>We,MaxEquation:()=>104,Mesh:()=>wt,MeshBasicMaterial:()=>en,MeshDepthMaterial:()=>Tl,MeshDistanceMaterial:()=>El,MeshLambertMaterial:()=>cf,MeshMatcapMaterial:()=>hf,MeshNormalMaterial:()=>lf,MeshPhongMaterial:()=>af,MeshPhysicalMaterial:()=>sf,MeshStandardMaterial:()=>bl,MeshToonMaterial:()=>of,MinEquation:()=>103,MirroredRepeatWrapping:()=>Hr,MixOperation:()=>1,MultiplyBlending:()=>4,MultiplyOperation:()=>0,NearestFilter:()=>Ct,NearestMipMapLinearFilter:()=>Pp,NearestMipMapNearestFilter:()=>Rp,NearestMipmapLinearFilter:()=>qo,NearestMipmapNearestFilter:()=>Xo,NeutralToneMapping:()=>7,NeverCompare:()=>512,NeverDepth:()=>0,NeverStencilFunc:()=>512,NoBlending:()=>0,NoColorSpace:()=>"",NoNormalPacking:()=>"",NoToneMapping:()=>0,NormalAnimationBlendMode:()=>_a,NormalBlending:()=>1,NormalGAPacking:()=>"ga",NormalRGPacking:()=>"rg",NotEqualCompare:()=>517,NotEqualDepth:()=>7,NotEqualStencilFunc:()=>517,NumberKeyframeTrack:()=>Aa,Object3D:()=>lt,ObjectLoader:()=>cv,ObjectSpaceNormalMap:()=>1,OctahedronGeometry:()=>xl,OneFactor:()=>201,OneMinusConstantAlphaFactor:()=>214,OneMinusConstantColorFactor:()=>212,OneMinusDstAlphaFactor:()=>207,OneMinusDstColorFactor:()=>209,OneMinusSrcAlphaFactor:()=>205,OneMinusSrcColorFactor:()=>203,OrthographicCamera:()=>gr,PCFShadowMap:()=>1,PCFSoftShadowMap:()=>2,PMREMGenerator:()=>Vo,Path:()=>jr,PerspectiveCamera:()=>Dt,Plane:()=>Xi,PlaneGeometry:()=>Ea,PlaneHelper:()=>i_,PointLight:()=>Mf,PointLightHelper:()=>Yv,Points:()=>cd,PointsMaterial:()=>hl,PolarGridHelper:()=>$v,PolyhedronGeometry:()=>pr,PositionalAudio:()=>_v,PropertyBinding:()=>dt,PropertyMixer:()=>Uf,QuadraticBezierCurve:()=>vl,QuadraticBezierCurve3:()=>_l,Quaternion:()=>Xt,QuaternionKeyframeTrack:()=>wa,QuaternionLinearInterpolant:()=>vf,R11_EAC_Format:()=>lu,RED_GREEN_RGTC2_Format:()=>Iu,RED_RGTC1_Format:()=>Ru,REVISION:()=>"185",RG11_EAC_Format:()=>hu,RGBADepthPacking:()=>Np,RGBAFormat:()=>Di,RGBAIntegerFormat:()=>tl,RGBA_ASTC_10x10_Format:()=>bu,RGBA_ASTC_10x5_Format:()=>xu,RGBA_ASTC_10x6_Format:()=>Mu,RGBA_ASTC_10x8_Format:()=>Su,RGBA_ASTC_12x10_Format:()=>Tu,RGBA_ASTC_12x12_Format:()=>Eu,RGBA_ASTC_4x4_Format:()=>du,RGBA_ASTC_5x4_Format:()=>fu,RGBA_ASTC_5x5_Format:()=>pu,RGBA_ASTC_6x5_Format:()=>mu,RGBA_ASTC_6x6_Format:()=>gu,RGBA_ASTC_8x5_Format:()=>vu,RGBA_ASTC_8x6_Format:()=>_u,RGBA_ASTC_8x8_Format:()=>yu,RGBA_BPTC_Format:()=>Au,RGBA_ETC2_EAC_Format:()=>ou,RGBA_PVRTC_2BPPV1_Format:()=>ru,RGBA_PVRTC_4BPPV1_Format:()=>nu,RGBA_S3TC_DXT1_Format:()=>jh,RGBA_S3TC_DXT3_Format:()=>Qh,RGBA_S3TC_DXT5_Format:()=>eu,RGBDepthPacking:()=>Op,RGBFormat:()=>Kh,RGBIntegerFormat:()=>Dp,RGB_BPTC_SIGNED_Format:()=>wu,RGB_BPTC_UNSIGNED_Format:()=>Cu,RGB_ETC1_Format:()=>su,RGB_ETC2_Format:()=>au,RGB_PVRTC_2BPPV1_Format:()=>iu,RGB_PVRTC_4BPPV1_Format:()=>tu,RGB_S3TC_DXT1_Format:()=>$h,RGDepthPacking:()=>Fp,RGFormat:()=>Wr,RGIntegerFormat:()=>el,RawShaderMaterial:()=>Sl,Ray:()=>fr,Raycaster:()=>Ff,RectAreaLight:()=>Tf,RedFormat:()=>Qo,RedIntegerFormat:()=>va,ReinhardToneMapping:()=>2,RenderTarget:()=>rl,RenderTarget3D:()=>Dv,RepeatWrapping:()=>Gr,ReplaceStencilOp:()=>Bp,ReverseSubtractEquation:()=>102,RingGeometry:()=>kd,SIGNED_R11_EAC_Format:()=>cu,SIGNED_RED_GREEN_RGTC2_Format:()=>Lu,SIGNED_RED_RGTC1_Format:()=>Pu,SIGNED_RG11_EAC_Format:()=>uu,SRGBColorSpace:()=>Qt,SRGBTransfer:()=>Zr,Scene:()=>sl,ShaderChunk:()=>je,ShaderLib:()=>ui,ShaderMaterial:()=>si,ShadowMaterial:()=>tf,Shape:()=>as,ShapeGeometry:()=>Hd,ShapePath:()=>s_,ShapeUtils:()=>Ci,ShortType:()=>Xh,Skeleton:()=>id,SkeletonHelper:()=>qv,SkinnedMesh:()=>td,Source:()=>Yi,Sphere:()=>Ut,SphereGeometry:()=>Ml,Spherical:()=>zv,SphericalHarmonics3:()=>Il,SplineCurve:()=>yl,SpotLight:()=>xf,SpotLightHelper:()=>Xv,Sprite:()=>Qu,SpriteMaterial:()=>ll,SrcAlphaFactor:()=>204,SrcAlphaSaturateFactor:()=>210,SrcColorFactor:()=>202,StaticCopyUsage:()=>Jp,StaticDrawUsage:()=>ya,StaticReadUsage:()=>qp,StereoCamera:()=>fv,StreamCopyUsage:()=>$p,StreamDrawUsage:()=>Xp,StreamReadUsage:()=>Zp,StringKeyframeTrack:()=>wn,SubtractEquation:()=>101,SubtractiveBlending:()=>3,TOUCH:()=>wp,TangentSpaceNormalMap:()=>0,TetrahedronGeometry:()=>qd,Texture:()=>It,TextureLoader:()=>sv,TextureUtils:()=>u_,Timer:()=>Lf,TimestampQuery:()=>em,TorusGeometry:()=>Zd,TorusKnotGeometry:()=>Kd,Triangle:()=>qi,TriangleFanDrawMode:()=>2,TriangleStripDrawMode:()=>1,TrianglesDrawMode:()=>0,TubeGeometry:()=>jd,UVMapping:()=>300,Uint16BufferAttribute:()=>al,Uint32BufferAttribute:()=>ol,Uint8BufferAttribute:()=>Hm,Uint8ClampedBufferAttribute:()=>Wm,Uniform:()=>Uv,UniformsGroup:()=>Ov,UniformsLib:()=>me,UniformsUtils:()=>rf,UnsignedByteType:()=>Ri,UnsignedInt101111Type:()=>Zh,UnsignedInt248Type:()=>$o,UnsignedInt5999Type:()=>Yh,UnsignedIntType:()=>Ii,UnsignedShort4444Type:()=>Jo,UnsignedShort5551Type:()=>Ko,UnsignedShortType:()=>Zo,VSMShadowMap:()=>3,Vector2:()=>ee,Vector3:()=>P,Vector4:()=>ft,VectorKeyframeTrack:()=>Cl,VideoFrameTexture:()=>dg,VideoTexture:()=>hd,WebGL3DRenderTarget:()=>Im,WebGLArrayRenderTarget:()=>Pm,WebGLCoordinateSystem:()=>$i,WebGLCubeRenderTarget:()=>Ul,WebGLRenderTarget:()=>ti,WebGLRenderer:()=>Kf,WebGLUtils:()=>Zf,WebGPUCoordinateSystem:()=>Qp,WebXRController:()=>la,WireframeGeometry:()=>ef,WrapAroundEnding:()=>qr,ZeroCurvatureEnding:()=>vn,ZeroFactor:()=>200,ZeroSlopeEnding:()=>_n,ZeroStencilOp:()=>0,createCanvasElement:()=>Fu,error:()=>Pe,getConsoleFunction:()=>om,log:()=>Kr,setConsoleFunction:()=>am,warn:()=>de,warnOnce:()=>Ji});function Gf(){let e=null,t=!1,i=null,n=null;function r(s,a){i(s,a),n=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function f_(e){const t=new WeakMap;function i(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];e.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var je={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},me={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ui={basic:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ht([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ht([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ht([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ye(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ht([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ht([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ht([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ht([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ht([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:Ht([me.common,me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:Ht([me.lights,me.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ui.physical={uniforms:Ht([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var ea={r:0,b:0,g:0},p_=new We,Hf=new Ze;Hf.set(-1,0,0,0,1,0,0,0,1);function m_(e,t,i,n,r,s){const a=new ye(0);let o=r===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const _=x.backgroundBlurriness>0;M=t.get(M,_)}return M}function g(x){let M=!1;const _=f(x);_===null?m(a,o):_&&_.isColor&&(m(_,1),M=!0);const E=e.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(x,M){const _=f(M);_&&(_.isCubeTexture||_.mapping===306)?(c===void 0&&(c=new wt(new ss(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:hr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hf),c.material.toneMapped=nt.getTransfer(_.colorSpace)!==Zr,(h!==_||d!==_.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=e.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new wt(new Ea(2,2),new si({name:"BackgroundMaterial",uniforms:hr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==Zr,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=e.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(ea,nf(e)),i.buffers.color.setClear(ea.r,ea.g,ea.b,M,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:v,dispose:p}}function g_(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(C,N,G,k,H){let J=!1;const z=d(C,k,G,N);s!==z&&(s=z,c(s.object)),J=f(C,k,G,H),J&&g(C,k,G,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,_(C,N,G,k),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return e.createVertexArray()}function c(C){return e.bindVertexArray(C)}function h(C){return e.deleteVertexArray(C)}function d(C,N,G,k){const H=k.wireframe===!0;let J=n[N.id];J===void 0&&(J={},n[N.id]=J);const z=C.isInstancedMesh===!0?C.id:0;let B=J[z];B===void 0&&(B={},J[z]=B);let q=B[G.id];q===void 0&&(q={},B[G.id]=q);let X=q[H];return X===void 0&&(X=u(l()),q[H]=X),X}function u(C){const N=[],G=[],k=[];for(let H=0;H<i;H++)N[H]=0,G[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:k,object:C,attributes:{},index:null}}function f(C,N,G,k){const H=s.attributes,J=N.attributes;let z=0;const B=G.getAttributes();for(const q in B)if(B[q].location>=0){const X=H[q];let Q=J[q];if(Q===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),X===void 0||X.attribute!==Q||Q&&X.data!==Q.data)return!0;z++}return s.attributesNum!==z||s.index!==k}function g(C,N,G,k){const H={},J=N.attributes;let z=0;const B=G.getAttributes();for(const q in B)if(B[q].location>=0){let X=J[q];X===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));const Q={};Q.attribute=X,X&&X.data&&(Q.data=X.data),H[q]=Q,z++}s.attributes=H,s.attributesNum=z,s.index=k}function v(){const C=s.newAttributes;for(let N=0,G=C.length;N<G;N++)C[N]=0}function m(C){p(C,0)}function p(C,N){const G=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;G[C]=1,k[C]===0&&(e.enableVertexAttribArray(C),k[C]=1),H[C]!==N&&(e.vertexAttribDivisor(C,N),H[C]=N)}function x(){const C=s.newAttributes,N=s.enabledAttributes;for(let G=0,k=N.length;G<k;G++)N[G]!==C[G]&&(e.disableVertexAttribArray(G),N[G]=0)}function M(C,N,G,k,H,J,z){z===!0?e.vertexAttribIPointer(C,N,G,H,J):e.vertexAttribPointer(C,N,G,k,H,J)}function _(C,N,G,k){v();const H=k.attributes,J=G.getAttributes(),z=N.defaultAttributeValues;for(const B in J){const q=J[B];if(q.location>=0){let X=H[B];if(X===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),X!==void 0){const Q=X.normalized,se=X.itemSize,Fe=t.get(X);if(Fe===void 0)continue;const $e=Fe.buffer,K=Fe.type,ae=Fe.bytesPerElement,ge=K===e.INT||K===e.UNSIGNED_INT||X.gpuType===1013;if(X.isInterleavedBufferAttribute){const pe=X.data,Ne=pe.stride,ze=X.offset;if(pe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<q.locationSize;Ue++)p(q.location+Ue,pe.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ue=0;Ue<q.locationSize;Ue++)m(q.location+Ue);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let Ue=0;Ue<q.locationSize;Ue++)M(q.location+Ue,se/q.locationSize,K,Q,Ne*ae,(ze+se/q.locationSize*Ue)*ae,ge)}else{if(X.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe,X.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);e.bindBuffer(e.ARRAY_BUFFER,$e);for(let pe=0;pe<q.locationSize;pe++)M(q.location+pe,se/q.locationSize,K,Q,se*ae,se/q.locationSize*pe*ae,ge)}}else if(z!==void 0){const Q=z[B];if(Q!==void 0)switch(Q.length){case 2:e.vertexAttrib2fv(q.location,Q);break;case 3:e.vertexAttrib3fv(q.location,Q);break;case 4:e.vertexAttrib4fv(q.location,Q);break;default:e.vertexAttrib1fv(q.location,Q)}}}}x()}function E(){S();for(const C in n){const N=n[C];for(const G in N){const k=N[G];for(const H in k){const J=k[H];for(const z in J)h(J[z].object),delete J[z];delete k[H]}}delete n[C]}}function A(C){if(n[C.id]===void 0)return;const N=n[C.id];for(const G in N){const k=N[G];for(const H in k){const J=k[H];for(const z in J)h(J[z].object),delete J[z];delete k[H]}}delete n[C.id]}function R(C){for(const N in n){const G=n[N];for(const k in G){const H=G[k];if(H[C.id]===void 0)continue;const J=H[C.id];for(const z in J)h(J[z].object),delete J[z];delete H[C.id]}}}function y(C){for(const N in n){const G=n[N],k=C.isInstancedMesh===!0?C.id:0,H=G[k];if(H!==void 0){for(const J in H){const z=H[J];for(const B in z)h(z[B].object),delete z[B];delete H[J]}delete G[k],Object.keys(G).length===0&&delete n[N]}}}function S(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function v_(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,h){h!==0&&(e.drawArraysInstanced(n,l,c,h),i.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];i.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function __(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==1023&&n.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const y=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&n.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!y)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const h=l(c);h!==c&&(de("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),x=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,maxSamples:E,samples:A}}function y_(e){const t=this;let i=null,n=0,r=!1,s=!1;const a=new Xi,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||r;return r=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,M=x*4;let _=p.clippingState||null;l.value=_,_=h(g,u,M,f);for(let E=0;E!==M;++E)_[E]=i[E];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==v;++M,_+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Zi=4,ih=[.125,.215,.35,.446,.526,.582],gn=20,x_=256,Ir=new gr,nh=new ye,vo=null,_o=0,yo=0,xo=!1,M_=new P,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:a=M_}=r;vo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,n,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vo,_o,yo),this._renderer.xr.enabled=xo,e.scissorTest=!1,Kn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:Ki,format:Di,colorSpace:da,depthBuffer:!1},n=rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=S_(r)),this._blurMaterial=T_(r,e,t),this._ggxMaterial=b_(r,e,t)}return n}_compileMaterial(e){const t=new wt(new Ke,e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,i,n,r){const s=new Dt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(nh),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wt(new ss,new en({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,u=d.material;let f=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,f=!0):(u.color.copy(nh),f=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(s.up.set(0,a[v],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[v],r.y,r.z)):m===1?(s.up.set(0,0,a[v]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[v],r.z)):(s.up.set(0,a[v],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[v]));const p=this._cubeSize;Kn(n,m*p,v>2?p:0,p,p),l.setRenderTarget(n),f&&l.render(d,s),l.render(e,s)}l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());const r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;Kn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,Ir)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const o=s.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,u=this._sizeLods[i],f=3*u*(i>d-Zi?i-d+Zi:0),g=4*(this._cubeSize-u);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=d-t,Kn(r,f,g,3*u,2*u),n.setRenderTarget(r),n.render(a,Ir),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-i,Kn(e,f,g,3*u,2*u),n.setRenderTarget(e),n.render(a,Ir)}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[n];h.material=l;const d=l.uniforms,u=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*gn-1),g=r/f,v=isFinite(r)?1+Math.floor(c*g):gn;v>gn&&de(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${gn}`);const m=[];let p=0;for(let _=0;_<gn;++_){const E=_/g,A=Math.exp(-E*E/2);m.push(A),_===0?p+=A:_<v&&(p+=2*A)}for(let _=0;_<m.length;_++)m[_]=m[_]/p;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=f,d.mipInt.value=x-i;const M=this._sizeLods[n];Kn(t,3*M*(n>x-Zi?n-x+Zi:0),4*(this._cubeSize-M),3*M,2*M),o.setRenderTarget(t),o.render(h,Ir)}};function S_(e){const t=[],i=[],n=[];let r=e;const s=e-Zi+1+ih.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>e-Zi?l=ih[a-e+Zi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,y=A>2?0:-1,S=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];x.set(S,v*g*A),M.set(u,m*g*A);const I=[A,A,A,A,A,A];_.set(I,p*g*A)}const E=new Ke;E.setAttribute("position",new ht(x,v)),E.setAttribute("uv",new ht(M,m)),E.setAttribute("faceIndex",new ht(_,p)),n.push(new wt(E,null)),r>Zi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:i}}function rh(e,t,i){const n=new ti(e,t,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kn(e,t,i,n,r){e.viewport.set(t,i,n,r),e.scissor.set(t,i,n,r)}function b_(e,t,i){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function T_(e,t,i){const n=new Float32Array(gn),r=new P(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function sh(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ah(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ul=class extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new rs(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ss(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const s=new wt(n,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=St),new Pf(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}};function E_(e){let t=new WeakMap,i=new WeakMap,n=null;function r(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===303||f===304)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Ul(g.height);return v.fromEquirectangularTexture(e,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===303||f===304,v=f===301||f===302;if(g||v){let m=i.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Vo(e)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return g&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Vo(e)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===303?u.mapping=301:f===304&&(u.mapping=302),u}function l(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=i.get(f);g!==void 0&&(i.delete(f),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function A_(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const r=i(n);return r===null&&Ji("WebGLRenderer: "+n+" extension not supported."),r}}}function w_(e,t,i,n){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,i.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],e.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const x=f.array;v=f.version;for(let M=0,_=x.length;M<_;M+=3){const E=x[M+0],A=x[M+1],R=x[M+2];u.push(E,A,A,R,R,E)}}else{const x=g.array;v=g.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const E=M+0,A=M+1,R=M+2;u.push(E,A,A,R,R,E)}}const m=new(g.count>=65535?ol:al)(u,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function C_(e,t,i){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){e.drawElements(n,u,s,d*a),i.update(u,n,1)}function c(d,u,f){f!==0&&(e.drawElementsInstanced(n,u,s,d*a,f),i.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];i.update(g,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function R_(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function P_(e,t,i){const n=new WeakMap,r=new ft;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let _=o.attributes.position.count*M,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const A=new Float32Array(_*E*4*d),R=new xa(A,_,E,d);R.type=Li,R.needsUpdate=!0;const y=M*4;for(let I=0;I<d;I++){const C=m[I],N=p[I],G=x[I],k=_*E*4*I;for(let H=0;H<C.count;H++){const J=H*y;f===!0&&(r.fromBufferAttribute(C,H),A[k+J+0]=r.x,A[k+J+1]=r.y,A[k+J+2]=r.z,A[k+J+3]=0),g===!0&&(r.fromBufferAttribute(N,H),A[k+J+4]=r.x,A[k+J+5]=r.y,A[k+J+6]=r.z,A[k+J+7]=0),v===!0&&(r.fromBufferAttribute(G,H),A[k+J+8]=r.x,A[k+J+9]=r.y,A[k+J+10]=r.z,A[k+J+11]=G.itemSize===4?r.w:1)}}u={count:d,texture:R,size:new ee(_,E)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:s}}function I_(e,t,i,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:a,dispose:o}}var L_={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function D_(e,t,i,n,r,s){const a=new ti(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Tn(t,i):void 0}),o=new ti(t,i,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),l=new Ke;l.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Te([0,2,0,0,2,0],2));const c=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new wt(l,c),d=new gr(-1,1,1,-1,0,1);let u=null,f=null,g=!1,v,m=null,p=[],x=!1;this.setSize=function(M,_){a.setSize(M,_),o.setSize(M,_);for(let E=0;E<p.length;E++){const A=p[E];A.setSize&&A.setSize(M,_)}},this.setEffects=function(M){p=M,x=p.length>0&&p[0].isRenderPass===!0;const _=a.width,E=a.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(_,E)}},this.begin=function(M,_){if(g||M.toneMapping===0&&p.length===0)return!1;if(m=_,_!==null){const E=_.width,A=_.height;(a.width!==E||a.height!==A)&&this.setSize(E,A)}return x===!1&&M.setRenderTarget(a),v=M.toneMapping,M.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(M,_){M.toneMapping=v,g=!0;let E=a,A=o;for(let R=0;R<p.length;R++){const y=p[R];if(y.enabled!==!1&&(y.render(M,A,E,_),y.needsSwap!==!1)){const S=E;E=A,A=S}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,c.defines={},nt.getTransfer(u)==="srgb"&&(c.defines.SRGB_TRANSFER="");const R=L_[f];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(m),M.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Wf=new It,ko=new Tn(1,1),Xf=new xa,qf=new Ma,Yf=new rs,oh=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function vr(e,t,i){const n=e[0];if(n<=0||n>0)return e;const r=t*i;let s=oh[r];if(s===void 0&&(s=new Float32Array(r),oh[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(s,o)}return s}function Rt(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Pt(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Ra(e,t){let i=lh[t];i===void 0&&(i=new Int32Array(t),lh[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function U_(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function N_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2fv(this.addr,t),Pt(i,t)}}function O_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rt(i,t))return;e.uniform3fv(this.addr,t),Pt(i,t)}}function F_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4fv(this.addr,t),Pt(i,t)}}function B_(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Rt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pt(i,t)}else{if(Rt(i,n))return;uh.set(n),e.uniformMatrix2fv(this.addr,!1,uh),Pt(i,n)}}function z_(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Rt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pt(i,t)}else{if(Rt(i,n))return;hh.set(n),e.uniformMatrix3fv(this.addr,!1,hh),Pt(i,n)}}function V_(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Rt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pt(i,t)}else{if(Rt(i,n))return;ch.set(n),e.uniformMatrix4fv(this.addr,!1,ch),Pt(i,n)}}function k_(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function G_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2iv(this.addr,t),Pt(i,t)}}function H_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rt(i,t))return;e.uniform3iv(this.addr,t),Pt(i,t)}}function W_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4iv(this.addr,t),Pt(i,t)}}function X_(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function q_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rt(i,t))return;e.uniform2uiv(this.addr,t),Pt(i,t)}}function Y_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rt(i,t))return;e.uniform3uiv(this.addr,t),Pt(i,t)}}function Z_(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rt(i,t))return;e.uniform4uiv(this.addr,t),Pt(i,t)}}function J_(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(ko.compareFunction=i.isReversedDepthBuffer()?518:515,s=ko):s=Wf,i.setTexture2D(t||s,r)}function K_(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(t||qf,r)}function $_(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(t||Yf,r)}function j_(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(t||Xf,r)}function Q_(e){switch(e){case 5126:return U_;case 35664:return N_;case 35665:return O_;case 35666:return F_;case 35674:return B_;case 35675:return z_;case 35676:return V_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return H_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return Y_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return j_}}function e0(e,t){e.uniform1fv(this.addr,t)}function t0(e,t){const i=vr(t,this.size,2);e.uniform2fv(this.addr,i)}function i0(e,t){const i=vr(t,this.size,3);e.uniform3fv(this.addr,i)}function n0(e,t){const i=vr(t,this.size,4);e.uniform4fv(this.addr,i)}function r0(e,t){const i=vr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function s0(e,t){const i=vr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function a0(e,t){const i=vr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function o0(e,t){e.uniform1iv(this.addr,t)}function l0(e,t){e.uniform2iv(this.addr,t)}function c0(e,t){e.uniform3iv(this.addr,t)}function h0(e,t){e.uniform4iv(this.addr,t)}function u0(e,t){e.uniform1uiv(this.addr,t)}function d0(e,t){e.uniform2uiv(this.addr,t)}function f0(e,t){e.uniform3uiv(this.addr,t)}function p0(e,t){e.uniform4uiv(this.addr,t)}function m0(e,t,i){const n=this.cache,r=t.length,s=Ra(i,r);Rt(n,s)||(e.uniform1iv(this.addr,s),Pt(n,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=ko:a=Wf;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||a,s[o])}function g0(e,t,i){const n=this.cache,r=t.length,s=Ra(i,r);Rt(n,s)||(e.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)i.setTexture3D(t[a]||qf,s[a])}function v0(e,t,i){const n=this.cache,r=t.length,s=Ra(i,r);Rt(n,s)||(e.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)i.setTextureCube(t[a]||Yf,s[a])}function _0(e,t,i){const n=this.cache,r=t.length,s=Ra(i,r);Rt(n,s)||(e.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==r;++a)i.setTexture2DArray(t[a]||Xf,s[a])}function y0(e){switch(e){case 5126:return e0;case 35664:return t0;case 35665:return i0;case 35666:return n0;case 35674:return r0;case 35675:return s0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return _0}}var x0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Q_(t.type)}},M0=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y0(t.type)}},S0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(e,t[a.id],i)}}},Mo=/(\w+)(\])?(\[|\.)?/g;function dh(e,t){e.seq.push(t),e.map[t.id]=t}function b0(e,t,i){const n=e.name,r=n.length;for(Mo.lastIndex=0;;){const s=Mo.exec(n),a=Mo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){dh(i,c===void 0?new x0(o,e,t):new M0(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new S0(o),dh(i,h)),i=h}}}var ca=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s);b0(a,e.getUniformLocation(t,a.name),this)}const n=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}};function fh(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var T0=37297,E0=0;function A0(e,t){const i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var ph=new Ze;function w0(e){nt._getMatrix(ph,nt.workingColorSpace,e);const t=`mat3( ${ph.elements.map(i=>i.toFixed(4))} )`;switch(nt.getTransfer(e)){case Yr:return[t,"LinearTransferOETF"];case Zr:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function mh(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return i.toUpperCase()+`

`+r+`

`+A0(e.getShaderSource(t),a)}else return r}function C0(e,t){const i=w0(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var R0={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function P0(e,t){const i=R0[t];return i===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var ta=new P;function I0(){return nt.getLuminanceCoefficients(ta),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ta.x.toFixed(4)}, ${ta.y.toFixed(4)}, ${ta.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function D0(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function U0(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function Fr(e){return e!==""}function gh(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(e){return e.replace(N0,F0)}var O0=new Map;function F0(e,t){let i=je[t];if(i===void 0){const n=O0.get(t);if(n!==void 0)i=je[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Go(i)}var B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(e){return e.replace(B0,z0)}function z0(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var V0={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function k0(e){return V0[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var G0={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function H0(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":G0[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var W0={302:"ENVMAP_MODE_REFRACTION"};function X0(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":W0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var q0={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Y0(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":q0[e.combine]||"ENVMAP_BLENDING_NONE"}function Z0(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function J0(e,t,i,n){const r=e.getContext(),s=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=k0(i),c=H0(i),h=X0(i),d=Y0(i),u=Z0(i),f=L0(i),g=D0(s),v=r.createProgram();let m,p,x=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(m=[yh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[yh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==0?"#define TONE_MAPPING":"",i.toneMapping!==0?je.tonemapping_pars_fragment:"",i.toneMapping!==0?P0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,C0("linearToOutputTexel",i.outputColorSpace),I0(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Go(a),a=gh(a,i),a=vh(a,i),o=Go(o),o=gh(o,i),o=vh(o,i),a=_h(a),o=_h(o),i.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,_=x+p+o,E=fh(r,r.VERTEX_SHADER,M),A=fh(r,r.FRAGMENT_SHADER,_);r.attachShader(v,E),r.attachShader(v,A),i.index0AttributeName!==void 0?r.bindAttribLocation(v,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(C){if(e.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(E)||"",k=r.getShaderInfoLog(A)||"",H=N.trim(),J=G.trim(),z=k.trim();let B=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,v,E,A);else{const X=mh(r,E,"vertex"),Q=mh(r,A,"fragment");Pe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+X+`
`+Q)}else H!==""?de("WebGLProgram: Program Info Log:",H):(J===""||z==="")&&(q=!1);q&&(C.diagnostics={runnable:B,programLog:H,vertexShader:{log:J,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(E),r.deleteShader(A),y=new ca(r,v),S=U0(r,v)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let I=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(v,T0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=A,this}var K0=0,$0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new j0(e),t.set(e,i)),i}},j0=class{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}};function Q0(e){return e===1030||e===37490||e===36285}function ey(e,t,i,n,r,s){const a=new Sn,o=new $0,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,S,I,C,N,G){const k=C.fog,H=N.geometry,J=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=t.get(y.envMap||J,z),q=B&&B.mapping===306?B.image.height:null,X=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&de("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=Q!==void 0?Q.length:0;let Fe=0;H.morphAttributes.position!==void 0&&(Fe=1),H.morphAttributes.normal!==void 0&&(Fe=2),H.morphAttributes.color!==void 0&&(Fe=3);let $e,K,ae,ge;if(X){const Ve=ui[X];$e=Ve.vertexShader,K=Ve.fragmentShader}else{$e=y.vertexShader,K=y.fragmentShader;const Ve=o.getVertexShaderStage(y),kt=o.getFragmentShaderStage(y);o.update(y,Ve,kt),ae=Ve.id,ge=kt.id}const pe=e.getRenderTarget(),Ne=e.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,Ue=N.isBatchedMesh===!0,Qe=!!y.map,j=!!y.matcap,oe=!!B,ue=!!y.aoMap,xe=!!y.lightMap,Me=!!y.bumpMap&&y.wireframe===!1,Le=!!y.normalMap,De=!!y.displacementMap,qe=!!y.emissiveMap,Ye=!!y.metalnessMap,L=!!y.roughnessMap,vt=y.anisotropy>0,rt=y.clearcoat>0,tt=y.dispersion>0,w=y.iridescence>0,b=y.sheen>0,D=y.transmission>0,Y=vt&&!!y.anisotropyMap,te=rt&&!!y.clearcoatMap,le=rt&&!!y.clearcoatNormalMap,fe=rt&&!!y.clearcoatRoughnessMap,O=w&&!!y.iridescenceMap,ce=w&&!!y.iridescenceThicknessMap,be=b&&!!y.sheenColorMap,Ce=b&&!!y.sheenRoughnessMap,re=!!y.specularMap,Ie=!!y.specularColorMap,Oe=!!y.specularIntensityMap,He=D&&!!y.transmissionMap,st=D&&!!y.thicknessMap,U=!!y.gradientMap,$=!!y.alphaMap,ie=y.alphaTest>0,Se=!!y.alphaHash,we=!!y.extensions;let ne=0;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ne=e.toneMapping);const ve={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:$e,fragmentShader:K,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ue,batchingColor:Ue&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:pe===null?e.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:j,envMap:oe,envMapMode:oe&&B.mapping,envMapCubeUVHeight:q,aoMap:ue,lightMap:xe,bumpMap:Me,normalMap:Le,displacementMap:De,emissiveMap:qe,normalMapObjectSpace:Le&&y.normalMapType===1,normalMapTangentSpace:Le&&y.normalMapType===0,packedNormalMap:Le&&y.normalMapType===0&&Q0(y.normalMap.format),metalnessMap:Ye,roughnessMap:L,anisotropy:vt,anisotropyMap:Y,clearcoat:rt,clearcoatMap:te,clearcoatNormalMap:le,clearcoatRoughnessMap:fe,dispersion:tt,iridescence:w,iridescenceMap:O,iridescenceThicknessMap:ce,sheen:b,sheenColorMap:be,sheenRoughnessMap:Ce,specularMap:re,specularColorMap:Ie,specularIntensityMap:Oe,transmission:D,transmissionMap:He,thicknessMap:st,gradientMap:U,opaque:y.transparent===!1&&y.blending===1&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ie,alphaHash:Se,combine:y.combine,mapUv:Qe&&g(y.map.channel),aoMapUv:ue&&g(y.aoMap.channel),lightMapUv:xe&&g(y.lightMap.channel),bumpMapUv:Me&&g(y.bumpMap.channel),normalMapUv:Le&&g(y.normalMap.channel),displacementMapUv:De&&g(y.displacementMap.channel),emissiveMapUv:qe&&g(y.emissiveMap.channel),metalnessMapUv:Ye&&g(y.metalnessMap.channel),roughnessMapUv:L&&g(y.roughnessMap.channel),anisotropyMapUv:Y&&g(y.anisotropyMap.channel),clearcoatMapUv:te&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(y.sheenRoughnessMap.channel),specularMapUv:re&&g(y.specularMap.channel),specularColorMapUv:Ie&&g(y.specularColorMap.channel),specularIntensityMapUv:Oe&&g(y.specularIntensityMap.channel),transmissionMapUv:He&&g(y.transmissionMap.channel),thicknessMapUv:st&&g(y.thicknessMap.channel),alphaMapUv:$&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Le||vt),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!H.attributes.uv&&(Qe||$),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&Le===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:ne,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)==="srgb",decodeVideoTextureEmissive:qe&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(S,y),x(S,y),S.push(e.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){const S=f[y.type];let I;if(S){const C=ui[S];I=rf.clone(C.uniforms)}else I=y.uniforms;return I}function _(y,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new J0(e,S,y,r),c.push(I),h.set(S,I)),I}function E(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:R}}function ty(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function r(a,o,l){e.get(a)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function iy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function xh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Mh(){const e=[];let t=0;const i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let x=e[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},e[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=g,x.materialVariant=a(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=p),t++,x}function l(u,f,g,v,m,p){const x=o(u,f,g,v,m,p);g.transmission>0?n.push(x):g.transparent===!0?r.push(x):i.push(x)}function c(u,f,g,v,m,p){const x=o(u,f,g,v,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):i.unshift(x)}function h(u,f,g){i.length>1&&i.sort(u||iy),n.length>1&&n.sort(f||xh),r.length>1&&r.sort(f||xh),g&&(i.reverse(),n.reverse(),r.reverse())}function d(){for(let u=t,f=e.length;u<f;u++){const g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:h}}function ny(){let e=new WeakMap;function t(n,r){const s=e.get(n);let a;return s===void 0?(a=new Mh,e.set(n,[a])):r>=s.length?(a=new Mh,s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function ry(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new P,color:new ye};break;case"SpotLight":i={position:new P,direction:new P,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=i,i}}}function sy(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var ay=0;function oy(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ly(e){const t=new ry,i=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const r=new P,s=new We,a=new We;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,x=0,M=0,_=0,E=0,A=0,R=0;c.sort(oy);for(let S=0,I=c.length;S<I;S++){const C=c[S],N=C.color,G=C.intensity,k=C.distance;let H=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===1030?H=C.shadow.map.texture:H=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=N.r*G,d+=N.g*G,u+=N.b*G;else if(C.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(C.sh.coefficients[J],G);R++}else if(C.isDirectionalLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,B=i.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=C.shadow.matrix,x++}n.directional[f]=J,f++}else if(C.isSpotLight){const J=t.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(N).multiplyScalar(G),J.distance=k,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,n.spot[v]=J;const z=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[v]=z.matrix,C.castShadow){const B=i.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=H,_++}v++}else if(C.isRectAreaLight){const J=t.get(C);J.color.copy(N).multiplyScalar(G),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=J,m++}else if(C.isPointLight){const J=t.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){const z=C.shadow,B=i.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=J,g++}else if(C.isHemisphereLight){const J=t.get(C);J.skyColor.copy(C.color).multiplyScalar(G),J.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[p]=J,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const y=n.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==x||y.numPointShadows!==M||y.numSpotShadows!==_||y.numSpotMaps!==E||y.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,y.directionalLength=f,y.pointLength=g,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=x,y.numPointShadows=M,y.numSpotShadows=_,y.numSpotMaps=E,y.numLightProbes=R,n.version=ay++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const M=c[p];if(M.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Sh(e){const t=new ly(e),i=[],n=[],r=[];function s(u){d.camera=u,i.length=0,n.length=0,r.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){t.setup(i)}function h(u){t.setupView(i,u)}const d={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cy(e){let t=new WeakMap;function i(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Sh(e),t.set(r,[o])):s>=a.length?(o=new Sh(e),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
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
}`,dy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],bh=new We,Lr=new P,So=new P;function py(e,t,i){let n=new bn;const r=new ee,s=new ee,a=new ft,o=new Tl,l=new El,c={},h=i.maxTextureSize,d={0:1,1:0,2:2},u=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:hy,fragmentShader:uy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(A,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===2&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const S=e.getRenderTarget(),I=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),N=e.state;N.setBlending(0),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=p!==this.type;G&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(H=>H.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,H=A.length;k<H;k++){const J=A[k],z=J.shadow;if(z===void 0){de("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const B=z.getFrameExtents();r.multiply(B),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,z.mapSize.y=s.y));const q=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=q,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===3){if(J.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ti(r.x,r.y,{format:Wr,type:Ki,minFilter:St,magFilter:St,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new Tn(r.x,r.y,Li),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=ar,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct}else J.isPointLight?(z.map=new Ul(r.x),z.map.depthTexture=new ud(r.x,Ii)):(z.map=new ti(r.x,r.y),z.map.depthTexture=new Tn(r.x,r.y,Ii)),z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=ar,this.type===1?(z.map.depthTexture.compareFunction=q?518:515,z.map.depthTexture.minFilter=St,z.map.depthTexture.magFilter=St):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct);z.camera.updateProjectionMatrix()}const X=z.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<X;Q++){if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,Q),e.clear();else{Q===0&&(e.setRenderTarget(z.map),e.clear());const se=z.getViewport(Q);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),N.viewport(a)}if(J.isPointLight){const se=z.camera,Fe=z.matrix,$e=J.distance||se.far;$e!==se.far&&(se.far=$e,se.updateProjectionMatrix()),Lr.setFromMatrixPosition(J.matrixWorld),se.position.copy(Lr),So.copy(se.position),So.add(dy[Q]),se.up.copy(fy[Q]),se.lookAt(So),se.updateMatrixWorld(),Fe.makeTranslation(-Lr.x,-Lr.y,-Lr.z),bh.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),z._frustum.setFromProjectionMatrix(bh,se.coordinateSystem,se.reversedDepth)}else z.updateMatrices(J);n=z.getFrustum(),_(R,y,z.camera,J,this.type)}z.isPointLightShadow!==!0&&this.type===3&&x(z,y),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(S,I,C)};function x(A,R){const y=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(r.x,r.y,{format:Wr,type:Ki})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(R,null,y,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(R,null,y,f,v,null)}function M(A,R,y,S){let I=null;const C=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)I=C;else if(I=y.isPointLight===!0?l:o,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=I.uuid,G=R.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let H=k[G];H===void 0&&(H=I.clone(),k[G]=H,R.addEventListener("dispose",E)),I=H}if(I.visible=R.visible,I.wireframe=R.wireframe,S===3?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=e.properties.get(I);N.light=y}return I}function _(A,R,y,S,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const N=t.update(A),G=A.material;if(Array.isArray(G)){const k=N.groups;for(let H=0,J=k.length;H<J;H++){const z=k[H],B=G[z.materialIndex];if(B&&B.visible){const q=M(A,B,S,I);A.onBeforeShadow(e,A,R,y,N,q,z),e.renderBufferDirect(y,null,N,q,A,z),A.onAfterShadow(e,A,R,y,N,q,z)}}}else if(G.visible){const k=M(A,G,S,I);A.onBeforeShadow(e,A,R,y,N,k,null),e.renderBufferDirect(y,null,N,k,A,null),A.onAfterShadow(e,A,R,y,N,k,null)}}const C=A.children;for(let N=0,G=C.length;N<G;N++)_(C[N],R,y,S,I)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const y=c[R],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function my(e,t){function i(){let U=!1;const $=new ft;let ie=null;const Se=new ft(0,0,0,0);return{setMask:function(we){ie!==we&&!U&&(e.colorMask(we,we,we,we),ie=we)},setLocked:function(we){U=we},setClear:function(we,ne,ve,Ve,kt){kt===!0&&(we*=Ve,ne*=Ve,ve*=Ve),$.set(we,ne,ve,Ve),Se.equals($)===!1&&(e.clearColor(we,ne,ve,Ve),Se.copy($))},reset:function(){U=!1,ie=null,Se.set(-1,0,0,0)}}}function n(){let U=!1,$=!1,ie=null,Se=null,we=null;return{setReversed:function(ne){if($!==ne){const ve=t.get("EXT_clip_control");ne?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),$=ne;const Ve=we;we=null,this.setClear(Ve)}},getReversed:function(){return $},setTest:function(ne){ne?pe(e.DEPTH_TEST):Ne(e.DEPTH_TEST)},setMask:function(ne){ie!==ne&&!U&&(e.depthMask(ne),ie=ne)},setFunc:function(ne){if($&&(ne=cm[ne]),Se!==ne){switch(ne){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Se=ne}},setLocked:function(ne){U=ne},setClear:function(ne){we!==ne&&(we=ne,$&&(ne=1-ne),e.clearDepth(ne))},reset:function(){U=!1,ie=null,Se=null,we=null,$=!1}}}function r(){let U=!1,$=null,ie=null,Se=null,we=null,ne=null,ve=null,Ve=null,kt=null;return{setTest:function(pt){U||(pt?pe(e.STENCIL_TEST):Ne(e.STENCIL_TEST))},setMask:function(pt){$!==pt&&!U&&(e.stencilMask(pt),$=pt)},setFunc:function(pt,pi,xi){(ie!==pt||Se!==pi||we!==xi)&&(e.stencilFunc(pt,pi,xi),ie=pt,Se=pi,we=xi)},setOp:function(pt,pi,xi){(ne!==pt||ve!==pi||Ve!==xi)&&(e.stencilOp(pt,pi,xi),ne=pt,ve=pi,Ve=xi)},setLocked:function(pt){U=pt},setClear:function(pt){kt!==pt&&(e.clearStencil(pt),kt=pt)},reset:function(){U=!1,$=null,ie=null,Se=null,we=null,ne=null,ve=null,Ve=null,kt=null}}}const s=new i,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,M=null,_=null,E=null,A=null,R=null,y=new ye(0,0,0),S=0,I=!1,C=null,N=null,G=null,k=null,H=null;const J=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=B>=2);let X=null,Q={};const se=e.getParameter(e.SCISSOR_BOX),Fe=e.getParameter(e.VIEWPORT),$e=new ft().fromArray(se),K=new ft().fromArray(Fe);function ae(U,$,ie,Se){const we=new Uint8Array(4),ne=e.createTexture();e.bindTexture(U,ne),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ve=0;ve<ie;ve++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D($,0,e.RGBA,1,1,Se,0,e.RGBA,e.UNSIGNED_BYTE,we):e.texImage2D($+ve,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,we);return ne}const ge={};ge[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),ge[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ge[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(e.DEPTH_TEST),a.setFunc(3),Me(!1),Le(1),pe(e.CULL_FACE),ue(0);function pe(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function Ne(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function ze(U,$){return u[U]!==$?(e.bindFramebuffer(U,$),u[U]=$,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=$),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=$),!0):!1}function Ue(U,$){let ie=g,Se=!1;if(U){ie=f.get($),ie===void 0&&(ie=[],f.set($,ie));const we=U.textures;if(ie.length!==we.length||ie[0]!==e.COLOR_ATTACHMENT0){for(let ne=0,ve=we.length;ne<ve;ne++)ie[ne]=e.COLOR_ATTACHMENT0+ne;ie.length=we.length,Se=!0}}else ie[0]!==e.BACK&&(ie[0]=e.BACK,Se=!0);Se&&e.drawBuffers(ie)}function Qe(U){return v!==U?(e.useProgram(U),v=U,!0):!1}const j={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};j[103]=e.MIN,j[104]=e.MAX;const oe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(U,$,ie,Se,we,ne,ve,Ve,kt,pt){if(U===0){m===!0&&(Ne(e.BLEND),m=!1);return}if(m===!1&&(pe(e.BLEND),m=!0),U!==5){if(U!==p||pt!==I){if((x!==100||E!==100)&&(e.blendEquation(e.FUNC_ADD),x=100,E=100),pt)switch(U){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Pe("WebGLState: Invalid blending: ",U);break}else switch(U){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",U);break}M=null,_=null,A=null,R=null,y.set(0,0,0),S=0,p=U,I=pt}return}we=we||$,ne=ne||ie,ve=ve||Se,($!==x||we!==E)&&(e.blendEquationSeparate(j[$],j[we]),x=$,E=we),(ie!==M||Se!==_||ne!==A||ve!==R)&&(e.blendFuncSeparate(oe[ie],oe[Se],oe[ne],oe[ve]),M=ie,_=Se,A=ne,R=ve),(Ve.equals(y)===!1||kt!==S)&&(e.blendColor(Ve.r,Ve.g,Ve.b,kt),y.copy(Ve),S=kt),p=U,I=!1}function xe(U,$){U.side===2?Ne(e.CULL_FACE):pe(e.CULL_FACE);let ie=U.side===1;$&&(ie=!ie),Me(ie),U.blending===1&&U.transparent===!1?ue(0):ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Se=U.stencilWrite;o.setTest(Se),Se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),qe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(e.SAMPLE_ALPHA_TO_COVERAGE):Ne(e.SAMPLE_ALPHA_TO_COVERAGE)}function Me(U){C!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),C=U)}function Le(U){U!==0?(pe(e.CULL_FACE),U!==N&&(U===1?e.cullFace(e.BACK):U===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ne(e.CULL_FACE),N=U}function De(U){U!==G&&(z&&e.lineWidth(U),G=U)}function qe(U,$,ie){U?(pe(e.POLYGON_OFFSET_FILL),(k!==$||H!==ie)&&(k=$,H=ie,a.getReversed()&&($=-$),e.polygonOffset($,ie))):Ne(e.POLYGON_OFFSET_FILL)}function Ye(U){U?pe(e.SCISSOR_TEST):Ne(e.SCISSOR_TEST)}function L(U){U===void 0&&(U=e.TEXTURE0+J-1),X!==U&&(e.activeTexture(U),X=U)}function vt(U,$,ie){ie===void 0&&(X===null?ie=e.TEXTURE0+J-1:ie=X);let Se=Q[ie];Se===void 0&&(Se={type:void 0,texture:void 0},Q[ie]=Se),(Se.type!==U||Se.texture!==$)&&(X!==ie&&(e.activeTexture(ie),X=ie),e.bindTexture(U,$||ge[U]),Se.type=U,Se.texture=$)}function rt(){const U=Q[X];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{e.compressedTexImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function w(){try{e.compressedTexImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function b(){try{e.texSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function D(){try{e.texSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function te(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function le(){try{e.texStorage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function fe(){try{e.texStorage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function O(){try{e.texImage2D(...arguments)}catch(U){Pe("WebGLState:",U)}}function ce(){try{e.texImage3D(...arguments)}catch(U){Pe("WebGLState:",U)}}function be(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function Ce(U,$){d[U]!==$&&(e.pixelStorei(U,$),d[U]=$)}function re(U){$e.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),$e.copy(U))}function Ie(U){K.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function Oe(U,$){let ie=c.get($);ie===void 0&&(ie=new WeakMap,c.set($,ie));let Se=ie.get(U);Se===void 0&&(Se=e.getUniformBlockIndex($,U.name),ie.set(U,Se))}function He(U,$){const ie=c.get($).get(U);l.get($)!==ie&&(e.uniformBlockBinding($,ie,U.__bindingPointIndex),l.set($,ie))}function st(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,Q={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,x=null,M=null,_=null,E=null,A=null,R=null,y=new ye(0,0,0),S=0,I=!1,C=null,N=null,G=null,k=null,H=null,$e.set(0,0,e.canvas.width,e.canvas.height),K.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Ne,bindFramebuffer:ze,drawBuffers:Ue,useProgram:Qe,setBlending:ue,setMaterial:xe,setFlipSided:Me,setCullFace:Le,setLineWidth:De,setPolygonOffset:qe,setScissorTest:Ye,activeTexture:L,bindTexture:vt,unbindTexture:rt,compressedTexImage2D:tt,compressedTexImage3D:w,texImage2D:O,texImage3D:ce,pixelStorei:Ce,getParameter:be,updateUBOMapping:Oe,uniformBlockBinding:He,texStorage2D:le,texStorage3D:fe,texSubImage2D:b,texSubImage3D:D,compressedTexSubImage2D:Y,compressedTexSubImage3D:te,scissor:re,viewport:Ie,reset:st}}function gy(e,t,i,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,b){return g?new OffscreenCanvas(w,b):Jr("canvas")}function m(w,b,D){let Y=1;const te=tt(w);if((te.width>D||te.height>D)&&(Y=D/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const le=Math.floor(Y*te.width),fe=Math.floor(Y*te.height);u===void 0&&(u=v(le,fe));const O=b?v(le,fe):u;return O.width=le,O.height=fe,O.getContext("2d").drawImage(w,0,0,le,fe),de("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+le+"x"+fe+")."),O}else return"data"in w&&de("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function p(w){return w.generateMipmaps}function x(w){e.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(w,b,D,Y,te,le=!1){if(w!==null){if(e[w]!==void 0)return e[w];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;Y&&(fe=t.get("EXT_texture_norm16"),fe||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let O=b;if(b===e.RED&&(D===e.FLOAT&&(O=e.R32F),D===e.HALF_FLOAT&&(O=e.R16F),D===e.UNSIGNED_BYTE&&(O=e.R8),D===e.UNSIGNED_SHORT&&fe&&(O=fe.R16_EXT),D===e.SHORT&&fe&&(O=fe.R16_SNORM_EXT)),b===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.R8UI),D===e.UNSIGNED_SHORT&&(O=e.R16UI),D===e.UNSIGNED_INT&&(O=e.R32UI),D===e.BYTE&&(O=e.R8I),D===e.SHORT&&(O=e.R16I),D===e.INT&&(O=e.R32I)),b===e.RG&&(D===e.FLOAT&&(O=e.RG32F),D===e.HALF_FLOAT&&(O=e.RG16F),D===e.UNSIGNED_BYTE&&(O=e.RG8),D===e.UNSIGNED_SHORT&&fe&&(O=fe.RG16_EXT),D===e.SHORT&&fe&&(O=fe.RG16_SNORM_EXT)),b===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.RG8UI),D===e.UNSIGNED_SHORT&&(O=e.RG16UI),D===e.UNSIGNED_INT&&(O=e.RG32UI),D===e.BYTE&&(O=e.RG8I),D===e.SHORT&&(O=e.RG16I),D===e.INT&&(O=e.RG32I)),b===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.RGB8UI),D===e.UNSIGNED_SHORT&&(O=e.RGB16UI),D===e.UNSIGNED_INT&&(O=e.RGB32UI),D===e.BYTE&&(O=e.RGB8I),D===e.SHORT&&(O=e.RGB16I),D===e.INT&&(O=e.RGB32I)),b===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(O=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(O=e.RGBA16UI),D===e.UNSIGNED_INT&&(O=e.RGBA32UI),D===e.BYTE&&(O=e.RGBA8I),D===e.SHORT&&(O=e.RGBA16I),D===e.INT&&(O=e.RGBA32I)),b===e.RGB&&(D===e.UNSIGNED_SHORT&&fe&&(O=fe.RGB16_EXT),D===e.SHORT&&fe&&(O=fe.RGB16_SNORM_EXT),D===e.UNSIGNED_INT_5_9_9_9_REV&&(O=e.RGB9_E5),D===e.UNSIGNED_INT_10F_11F_11F_REV&&(O=e.R11F_G11F_B10F)),b===e.RGBA){const ce=le?Yr:nt.getTransfer(te);D===e.FLOAT&&(O=e.RGBA32F),D===e.HALF_FLOAT&&(O=e.RGBA16F),D===e.UNSIGNED_BYTE&&(O=ce==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT&&fe&&(O=fe.RGBA16_EXT),D===e.SHORT&&fe&&(O=fe.RGBA16_SNORM_EXT),D===e.UNSIGNED_SHORT_4_4_4_4&&(O=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(O=e.RGB5_A1)}return(O===e.R16F||O===e.R32F||O===e.RG16F||O===e.RG32F||O===e.RGBA16F||O===e.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function E(w,b){let D;return w?b===null||b===1014||b===1020?D=e.DEPTH24_STENCIL8:b===1015?D=e.DEPTH32F_STENCIL8:b===1012&&(D=e.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===1014||b===1020?D=e.DEPTH_COMPONENT24:b===1015?D=e.DEPTH_COMPONENT32F:b===1012&&(D=e.DEPTH_COMPONENT16),D}function A(w,b){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function R(w){const b=w.target;b.removeEventListener("dispose",R),S(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function y(w){const b=w.target;b.removeEventListener("dispose",y),C(b)}function S(w){const b=n.get(w);if(b.__webglInit===void 0)return;const D=w.source,Y=f.get(D);if(Y){const te=Y[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(w),Object.keys(Y).length===0&&f.delete(D)}n.remove(w)}function I(w){const b=n.get(w);e.deleteTexture(b.__webglTexture);const D=w.source,Y=f.get(D);delete Y[b.__cacheKey],a.memory.textures--}function C(w){const b=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let te=0;te<b.__webglFramebuffer[Y].length;te++)e.deleteFramebuffer(b.__webglFramebuffer[Y][te]);else e.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)e.deleteFramebuffer(b.__webglFramebuffer[Y]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const D=w.textures;for(let Y=0,te=D.length;Y<te;Y++){const le=n.get(D[Y]);le.__webglTexture&&(e.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(D[Y])}n.remove(w)}let N=0;function G(){N=0}function k(){return N}function H(w){N=w}function J(){const w=N;return w>=r.maxTextures&&de("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),N+=1,w}function z(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function B(w,b){const D=n.get(w);if(w.isVideoTexture&&vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){const Y=w.image;if(Y===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(D,w,b);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+b)}function q(w,b){const D=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){Ne(D,w,b);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+b)}function X(w,b){const D=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){Ne(D,w,b);return}i.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+b)}function Q(w,b){const D=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&D.__version!==w.version){ze(D,w,b);return}i.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+b)}const se={[Gr]:e.REPEAT,[Jt]:e.CLAMP_TO_EDGE,[Hr]:e.MIRRORED_REPEAT},Fe={[Ct]:e.NEAREST,[Xo]:e.NEAREST_MIPMAP_NEAREST,[qo]:e.NEAREST_MIPMAP_LINEAR,[St]:e.LINEAR,[Yo]:e.LINEAR_MIPMAP_NEAREST,[dr]:e.LINEAR_MIPMAP_LINEAR},$e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function K(w,b){if(b.type===1015&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===1006||b.magFilter===1007||b.magFilter===1005||b.magFilter===1008||b.minFilter===1006||b.minFilter===1007||b.minFilter===1005||b.minFilter===1008)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,se[b.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,se[b.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,se[b.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Fe[b.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Fe[b.minFilter]),b.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,$e[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===1003||b.minFilter!==1005&&b.minFilter!==1008||b.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(w,b){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",R));const Y=b.source;let te=f.get(Y);te===void 0&&(te={},f.set(Y,te));const le=z(b);if(le!==w.__cacheKey){te[le]===void 0&&(te[le]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,D=!0),te[le].usedTimes++;const fe=te[w.__cacheKey];fe!==void 0&&(te[w.__cacheKey].usedTimes--,fe.usedTimes===0&&I(b)),w.__cacheKey=le,w.__webglTexture=te[le].texture}return D}function ge(w,b,D){return Math.floor(Math.floor(w/D)/b)}function pe(w,b,D,Y){const le=w.updateRanges;if(le.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,D,Y,b.data);else{le.sort((Ce,re)=>Ce.start-re.start);let fe=0;for(let Ce=1;Ce<le.length;Ce++){const re=le[fe],Ie=le[Ce],Oe=re.start+re.count,He=ge(Ie.start,b.width,4),st=ge(re.start,b.width,4);Ie.start<=Oe+1&&He===st&&ge(Ie.start+Ie.count-1,b.width,4)===He?re.count=Math.max(re.count,Ie.start+Ie.count-re.start):(++fe,le[fe]=Ie)}le.length=fe+1;const O=i.getParameter(e.UNPACK_ROW_LENGTH),ce=i.getParameter(e.UNPACK_SKIP_PIXELS),be=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let Ce=0,re=le.length;Ce<re;Ce++){const Ie=le[Ce],Oe=Math.floor(Ie.start/4),He=Math.ceil(Ie.count/4),st=Oe%b.width,U=Math.floor(Oe/b.width),$=He,ie=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,st),i.pixelStorei(e.UNPACK_SKIP_ROWS,U),i.texSubImage2D(e.TEXTURE_2D,0,st,U,$,ie,D,Y,b.data)}w.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,O),i.pixelStorei(e.UNPACK_SKIP_PIXELS,ce),i.pixelStorei(e.UNPACK_SKIP_ROWS,be)}}function Ne(w,b,D){let Y=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=e.TEXTURE_3D);const te=ae(w,b),le=b.source;i.bindTexture(Y,w.__webglTexture,e.TEXTURE0+D);const fe=n.get(le);if(le.version!==fe.__version||te===!0){if(i.activeTexture(e.TEXTURE0+D),!(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)){const $=nt.getPrimaries(nt.workingColorSpace),ie=b.colorSpace===""?null:nt.getPrimaries(b.colorSpace),Se=b.colorSpace===""||$===ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}i.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment);let O=m(b.image,!1,r.maxTextureSize);O=rt(b,O);const ce=s.convert(b.format,b.colorSpace),be=s.convert(b.type);let Ce=_(b.internalFormat,ce,be,b.normalized,b.colorSpace,b.isVideoTexture);K(Y,b);let re;const Ie=b.mipmaps,Oe=b.isVideoTexture!==!0,He=fe.__version===void 0||te===!0,st=le.dataReady,U=A(b,O);if(b.isDepthTexture)Ce=E(b.format===jo,b.type),He&&(Oe?i.texStorage2D(e.TEXTURE_2D,1,Ce,O.width,O.height):i.texImage2D(e.TEXTURE_2D,0,Ce,O.width,O.height,0,ce,be,null));else if(b.isDataTexture)if(Ie.length>0){Oe&&He&&i.texStorage2D(e.TEXTURE_2D,U,Ce,Ie[0].width,Ie[0].height);for(let $=0,ie=Ie.length;$<ie;$++)re=Ie[$],Oe?st&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,ce,be,re.data):i.texImage2D(e.TEXTURE_2D,$,Ce,re.width,re.height,0,ce,be,re.data);b.generateMipmaps=!1}else Oe?(He&&i.texStorage2D(e.TEXTURE_2D,U,Ce,O.width,O.height),st&&pe(b,O,ce,be)):i.texImage2D(e.TEXTURE_2D,0,Ce,O.width,O.height,0,ce,be,O.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,Ce,Ie[0].width,Ie[0].height,O.depth);for(let $=0,ie=Ie.length;$<ie;$++)if(re=Ie[$],b.format!==1023)if(ce!==null)if(Oe){if(st)if(b.layerUpdates.size>0){const Se=zo(re.width,re.height,b.format,b.type);for(const we of b.layerUpdates){const ne=re.data.subarray(we*Se/re.data.BYTES_PER_ELEMENT,(we+1)*Se/re.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,we,re.width,re.height,1,ce,ne)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,O.depth,ce,re.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,$,Ce,re.width,re.height,O.depth,0,re.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?st&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,$,0,0,0,re.width,re.height,O.depth,ce,be,re.data):i.texImage3D(e.TEXTURE_2D_ARRAY,$,Ce,re.width,re.height,O.depth,0,ce,be,re.data)}else{Oe&&He&&i.texStorage2D(e.TEXTURE_2D,U,Ce,Ie[0].width,Ie[0].height);for(let $=0,ie=Ie.length;$<ie;$++)re=Ie[$],b.format!==1023?ce!==null?Oe?st&&i.compressedTexSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,ce,re.data):i.compressedTexImage2D(e.TEXTURE_2D,$,Ce,re.width,re.height,0,re.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?st&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,re.width,re.height,ce,be,re.data):i.texImage2D(e.TEXTURE_2D,$,Ce,re.width,re.height,0,ce,be,re.data)}else if(b.isDataArrayTexture)if(Oe){if(He&&i.texStorage3D(e.TEXTURE_2D_ARRAY,U,Ce,O.width,O.height,O.depth),st)if(b.layerUpdates.size>0){const $=zo(O.width,O.height,b.format,b.type);for(const ie of b.layerUpdates){const Se=O.data.subarray(ie*$/O.data.BYTES_PER_ELEMENT,(ie+1)*$/O.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ie,O.width,O.height,1,ce,be,Se)}b.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,ce,be,O.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ce,O.width,O.height,O.depth,0,ce,be,O.data);else if(b.isData3DTexture)Oe?(He&&i.texStorage3D(e.TEXTURE_3D,U,Ce,O.width,O.height,O.depth),st&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,ce,be,O.data)):i.texImage3D(e.TEXTURE_3D,0,Ce,O.width,O.height,O.depth,0,ce,be,O.data);else if(b.isFramebufferTexture){if(He)if(Oe)i.texStorage2D(e.TEXTURE_2D,U,Ce,O.width,O.height);else{let $=O.width,ie=O.height;for(let Se=0;Se<U;Se++)i.texImage2D(e.TEXTURE_2D,Se,Ce,$,ie,0,ce,be,null),$>>=1,ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in e){const $=e.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),O.parentNode!==$){$.appendChild(O),d.add(b),$.onpaint=ie=>{const Se=ie.changedElements;for(const we of d)Se.includes(we.image)&&(we.needsUpdate=!0)},$.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,O);else{const Se=e.RGBA,we=e.RGBA,ne=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Se,we,ne,O)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Oe&&He){const $=tt(Ie[0]);i.texStorage2D(e.TEXTURE_2D,U,Ce,$.width,$.height)}for(let $=0,ie=Ie.length;$<ie;$++)re=Ie[$],Oe?st&&i.texSubImage2D(e.TEXTURE_2D,$,0,0,ce,be,re):i.texImage2D(e.TEXTURE_2D,$,Ce,ce,be,re);b.generateMipmaps=!1}else if(Oe){if(He){const $=tt(O);i.texStorage2D(e.TEXTURE_2D,U,Ce,$.width,$.height)}st&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,be,O)}else i.texImage2D(e.TEXTURE_2D,0,Ce,ce,be,O);p(b)&&x(Y),fe.__version=le.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ze(w,b,D){if(b.image.length!==6)return;const Y=ae(w,b),te=b.source;i.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+D);const le=n.get(te);if(te.version!==le.__version||Y===!0){i.activeTexture(e.TEXTURE0+D);const fe=nt.getPrimaries(nt.workingColorSpace),O=b.colorSpace===""?null:nt.getPrimaries(b.colorSpace),ce=b.colorSpace===""||fe===O?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=b.isCompressedTexture||b.image[0].isCompressedTexture,Ce=b.image[0]&&b.image[0].isDataTexture,re=[];for(let ne=0;ne<6;ne++)!be&&!Ce?re[ne]=m(b.image[ne],!0,r.maxCubemapSize):re[ne]=Ce?b.image[ne].image:b.image[ne],re[ne]=rt(b,re[ne]);const Ie=re[0],Oe=s.convert(b.format,b.colorSpace),He=s.convert(b.type),st=_(b.internalFormat,Oe,He,b.normalized,b.colorSpace),U=b.isVideoTexture!==!0,$=le.__version===void 0||Y===!0,ie=te.dataReady;let Se=A(b,Ie);K(e.TEXTURE_CUBE_MAP,b);let we;if(be){U&&$&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,st,Ie.width,Ie.height);for(let ne=0;ne<6;ne++){we=re[ne].mipmaps;for(let ve=0;ve<we.length;ve++){const Ve=we[ve];b.format!==1023?Oe!==null?U?ie&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Ve.width,Ve.height,Oe,Ve.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,st,Ve.width,Ve.height,0,Ve.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Ve.width,Ve.height,Oe,He,Ve.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,st,Ve.width,Ve.height,0,Oe,He,Ve.data)}}}else{if(we=b.mipmaps,U&&$){we.length>0&&Se++;const ne=tt(re[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Se,st,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ce){U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,re[ne].width,re[ne].height,Oe,He,re[ne].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,st,re[ne].width,re[ne].height,0,Oe,He,re[ne].data);for(let ve=0;ve<we.length;ve++){const Ve=we[ve].image[ne].image;U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Ve.width,Ve.height,Oe,He,Ve.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,st,Ve.width,Ve.height,0,Oe,He,Ve.data)}}else{U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Oe,He,re[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,st,Oe,He,re[ne]);for(let ve=0;ve<we.length;ve++){const Ve=we[ve];U?ie&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Oe,He,Ve.image[ne]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,st,Oe,He,Ve.image[ne])}}}p(b)&&x(e.TEXTURE_CUBE_MAP),le.__version=te.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ue(w,b,D,Y,te,le){const fe=s.convert(D.format,D.colorSpace),O=s.convert(D.type),ce=_(D.internalFormat,fe,O,D.normalized,D.colorSpace),be=n.get(b),Ce=n.get(D);if(Ce.__renderTarget=b,!be.__hasExternalTextures){const re=Math.max(1,b.width>>le),Ie=Math.max(1,b.height>>le);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?i.texImage3D(te,le,ce,re,Ie,b.depth,0,fe,O,null):i.texImage2D(te,le,ce,re,Ie,0,fe,O,null)}i.bindFramebuffer(e.FRAMEBUFFER,w),L(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,te,Ce.__webglTexture,0,Ye(b)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,te,Ce.__webglTexture,le),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Qe(w,b,D){if(e.bindRenderbuffer(e.RENDERBUFFER,w),b.depthBuffer){const Y=b.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,le=E(b.stencilBuffer,te),fe=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;L(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(b),le,b.width,b.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(b),le,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,le,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,w)}else{const Y=b.textures;for(let te=0;te<Y.length;te++){const le=Y[te],fe=s.convert(le.format,le.colorSpace),O=s.convert(le.type),ce=_(le.internalFormat,fe,O,le.normalized,le.colorSpace);L(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(b),ce,b.width,b.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(b),ce,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,ce,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function j(w,b,D){const Y=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=n.get(b.depthTexture);if(te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(te.__webglInit===void 0&&(te.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture),K(e.TEXTURE_CUBE_MAP,b.depthTexture);const be=s.convert(b.depthTexture.format),Ce=s.convert(b.depthTexture.type);let re;b.depthTexture.format===1026?re=e.DEPTH_COMPONENT24:b.depthTexture.format===1027&&(re=e.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,re,b.width,b.height,0,be,Ce,null)}}else B(b.depthTexture,0);const le=te.__webglTexture,fe=Ye(b),O=Y?e.TEXTURE_CUBE_MAP_POSITIVE_X+D:e.TEXTURE_2D,ce=b.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(b.depthTexture.format===1026)L(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,O,le,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,ce,O,le,0);else if(b.depthTexture.format===1027)L(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ce,O,le,0,fe):e.framebufferTexture2D(e.FRAMEBUFFER,ce,O,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(w){const b=n.get(w),D=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=Y}if(w.depthTexture&&!b.__autoAllocateDepthBuffer)if(D)for(let Y=0;Y<6;Y++)j(b.__webglFramebuffer[Y],w,Y);else{const Y=w.texture.mipmaps;Y&&Y.length>0?j(b.__webglFramebuffer[0],w,0):j(b.__webglFramebuffer,w,0)}else if(D){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=e.createRenderbuffer(),Qe(b.__webglDepthbuffer[Y],w,!1);else{const te=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,le),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,le)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),Qe(b.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,le),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,le)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ue(w,b,D){const Y=n.get(w);b!==void 0&&Ue(Y.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&oe(w)}function xe(w){const b=w.texture,D=n.get(w),Y=n.get(b);w.addEventListener("dispose",y);const te=w.textures,le=w.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=b.version,a.memory.textures++),le){D.__webglFramebuffer=[];for(let O=0;O<6;O++)if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer[O]=[];for(let ce=0;ce<b.mipmaps.length;ce++)D.__webglFramebuffer[O][ce]=e.createFramebuffer()}else D.__webglFramebuffer[O]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){D.__webglFramebuffer=[];for(let O=0;O<b.mipmaps.length;O++)D.__webglFramebuffer[O]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(fe)for(let O=0,ce=te.length;O<ce;O++){const be=n.get(te[O]);be.__webglTexture===void 0&&(be.__webglTexture=e.createTexture(),a.memory.textures++)}if(w.samples>0&&L(w)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let O=0;O<te.length;O++){const ce=te[O];D.__webglColorRenderbuffer[O]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[O]);const be=s.convert(ce.format,ce.colorSpace),Ce=s.convert(ce.type),re=_(ce.internalFormat,be,Ce,ce.normalized,ce.colorSpace,w.isXRRenderTarget===!0),Ie=Ye(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie,re,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+O,e.RENDERBUFFER,D.__webglColorRenderbuffer[O])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),Qe(D.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(le){i.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),K(e.TEXTURE_CUBE_MAP,b);for(let O=0;O<6;O++)if(b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)Ue(D.__webglFramebuffer[O][ce],w,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,ce);else Ue(D.__webglFramebuffer[O],w,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);p(b)&&x(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(fe){for(let O=0,ce=te.length;O<ce;O++){const be=te[O],Ce=n.get(be);let re=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(re=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(re,Ce.__webglTexture),K(re,be),Ue(D.__webglFramebuffer,w,be,e.COLOR_ATTACHMENT0+O,re,0),p(be)&&x(re)}i.unbindTexture()}else{let O=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(O,Y.__webglTexture),K(O,b),b.mipmaps&&b.mipmaps.length>0)for(let ce=0;ce<b.mipmaps.length;ce++)Ue(D.__webglFramebuffer[ce],w,b,e.COLOR_ATTACHMENT0,O,ce);else Ue(D.__webglFramebuffer,w,b,e.COLOR_ATTACHMENT0,O,0);p(b)&&x(O),i.unbindTexture()}w.depthBuffer&&oe(w)}function Me(w){const b=w.textures;for(let D=0,Y=b.length;D<Y;D++){const te=b[D];if(p(te)){const le=M(w),fe=n.get(te).__webglTexture;i.bindTexture(le,fe),x(le),i.unbindTexture()}}}const Le=[],De=[];function qe(w){if(w.samples>0){if(L(w)===!1){const b=w.textures,D=w.width,Y=w.height;let te=e.COLOR_BUFFER_BIT;const le=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=n.get(w),O=b.length>1;if(O)for(let be=0;be<b.length;be++)i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ce=w.texture.mipmaps;ce&&ce.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let be=0;be<b.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),O){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[be]);const Ce=n.get(b[be]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ce,0)}e.blitFramebuffer(0,0,D,Y,0,0,D,Y,te,e.NEAREST),l===!0&&(Le.length=0,De.length=0,Le.push(e.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Le.push(le),De.push(le),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,De)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),O)for(let be=0;be<b.length;be++){i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.RENDERBUFFER,fe.__webglColorRenderbuffer[be]);const Ce=n.get(b[be]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+be,e.TEXTURE_2D,Ce,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const b=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function Ye(w){return Math.min(r.maxSamples,w.samples)}function L(w){const b=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function vt(w){const b=a.render.frame;h.get(w)!==b&&(h.set(w,b),w.update())}function rt(w,b){const D=w.colorSpace,Y=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!=="srgb-linear"&&D!==""&&(nt.getTransfer(D)==="srgb"?(Y!==1023||te!==1009)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",D)),b}function tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.getTextureUnits=k,this.setTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=ue,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=L,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Zf(e,t){function i(n,r=""){let s;const a=nt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
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

}`,yy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ul(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new si({vertexShader:vy,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xy=class extends di{constructor(e,t){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,f=null;const g=typeof XRWebGLBinding<"u",v=new yy,m={},p=t.getContextAttributes();let x=null,M=null;const _=[],E=[],A=new ee;let R=null;const y=new Dt;y.viewport=new ft;const S=new Dt;S.viewport=new ft;const I=[y,S],C=new If;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=_[K];return ae===void 0&&(ae=new la,_[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=_[K];return ae===void 0&&(ae=new la,_[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=_[K];return ae===void 0&&(ae=new la,_[K]=ae),ae.getHandSpace()};function k(K){const ae=E.indexOf(K.inputSource);if(ae===-1)return;const ge=_[ae];ge!==void 0&&(ge.update(K.inputSource,K.frame,l||s),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",J);for(let K=0;K<_.length;K++){const ae=E[K];ae!==null&&(E[K]=null,_[K].disconnect(ae))}N=null,G=null,v.reset();for(const K in m)delete m[K];e.setRenderTarget(x),u=null,d=null,h=null,n=null,M=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(n,t)),h},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(K){if(n=K,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",H),n.addEventListener("inputsourceschange",J),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ge=null,pe=null;p.depth&&(pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?jo:ar,ge=p.stencil?$o:Ii);const Ne={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ne),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ti(d.textureWidth,d.textureHeight,{format:Di,type:Ri,depthTexture:new Tn(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,t,ae),n.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new ti(u.framebufferWidth,u.framebufferHeight,{format:Di,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await n.requestReferenceSpace(a),$e.setContext(n),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J(K){for(let ae=0;ae<K.removed.length;ae++){const ge=K.removed[ae],pe=E.indexOf(ge);pe>=0&&(E[pe]=null,_[pe].disconnect(ge))}for(let ae=0;ae<K.added.length;ae++){const ge=K.added[ae];let pe=E.indexOf(ge);if(pe===-1){for(let ze=0;ze<_.length;ze++)if(ze>=E.length){E.push(ge),pe=ze;break}else if(E[ze]===null){E[ze]=ge,pe=ze;break}if(pe===-1)break}const Ne=_[pe];Ne&&Ne.connect(ge)}}const z=new P,B=new P;function q(K,ae,ge){z.setFromMatrixPosition(ae.matrixWorld),B.setFromMatrixPosition(ge.matrixWorld);const pe=z.distanceTo(B),Ne=ae.projectionMatrix.elements,ze=ge.projectionMatrix.elements,Ue=Ne[14]/(Ne[10]-1),Qe=Ne[14]/(Ne[10]+1),j=(Ne[9]+1)/Ne[5],oe=(Ne[9]-1)/Ne[5],ue=(Ne[8]-1)/Ne[0],xe=(ze[8]+1)/ze[0],Me=Ue*ue,Le=Ue*xe,De=pe/(-ue+xe),qe=De*-ue;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(qe),K.translateZ(De),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ye=Ue+De,L=Qe+De,vt=Me-qe,rt=Le+(pe-qe),tt=j*Qe/L*Ye,w=oe*Qe/L*Ye;K.projectionMatrix.makePerspective(vt,rt,tt,w,Ye,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function X(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(n===null)return;let ae=K.near,ge=K.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),C.near=S.near=y.near=ae,C.far=S.far=y.far=ge,(N!==C.near||G!==C.far)&&(n.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,G=C.far),C.layers.mask=K.layers.mask|6,y.layers.mask=C.layers.mask&-5,S.layers.mask=C.layers.mask&-3;const pe=K.parent,Ne=C.cameras;X(C,pe);for(let ze=0;ze<Ne.length;ze++)X(Ne[ze],pe);Ne.length===2?q(C,y,S):C.projectionMatrix.copy(y.projectionMatrix),Q(K,C,pe)};function Q(K,ae,ge){ge===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=or*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(K){o=K,d!==null&&(d.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)},this.getCameraTexture=function(K){return m[K]};let se=null;function Fe(K,ae){if(c=ae.getViewerPose(l||s),f=ae,c!==null){const ge=c.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let pe=!1;ge.length!==C.cameras.length&&(C.cameras.length=0,pe=!0);for(let ze=0;ze<ge.length;ze++){const Ue=ge[ze];let Qe=null;if(u!==null)Qe=u.getViewport(Ue);else{const oe=h.getViewSubImage(d,Ue);Qe=oe.viewport,ze===0&&(e.setRenderTargetTextures(M,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(M))}let j=I[ze];j===void 0&&(j=new Dt,j.layers.enable(ze),j.viewport=new ft,I[ze]=j),j.matrix.fromArray(Ue.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ue.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ze===0&&(C.matrix.copy(j.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),pe===!0&&C.cameras.push(j)}const Ne=n.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const ze=h.getDepthInformation(ge[0]);ze&&ze.isValid&&ze.texture&&v.init(ze,n.renderState)}if(Ne&&Ne.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let ze=0;ze<ge.length;ze++){const Ue=ge[ze].camera;if(Ue){let Qe=m[Ue];Qe||(Qe=new ul,m[Ue]=Qe);const j=h.getCameraImage(Ue);Qe.sourceTexture=j}}}}for(let ge=0;ge<_.length;ge++){const pe=E[ge],Ne=_[ge];pe!==null&&Ne!==void 0&&Ne.update(pe,ae,l||s)}se&&se(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),f=null}const $e=new Gf;$e.setAnimationLoop(Fe),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}},My=new We,Jf=new Ze;Jf.set(-1,0,0,0,1,0,0,0,1);function Sy(e,t){function i(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nf(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,i(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,i(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,i(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,i(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(My.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,i(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function by(e,t,i,n){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){const A=E.program;n.uniformBlockBinding(_,A)}function c(_,E){let A=r[_.id];A===void 0&&(m(_),A=h(_),r[_.id]=A,_.addEventListener("dispose",x));const R=E.program;n.updateUBOMapping(_,R);const y=t.render.frame;s[_.id]!==y&&(u(_),s[_.id]=y)}function h(_){const E=d();_.__bindingPointIndex=E;const A=e.createBuffer(),R=_.__size,y=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,R,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,A),A}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const E=r[_.id],A=_.uniforms,R=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let y=0,S=A.length;y<S;y++){const I=A[y];if(Array.isArray(I))for(let C=0,N=I.length;C<N;C++)f(I[C],y,C,R);else f(I,y,0,R)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(_,E,A,R){if(v(_,E,A,R)===!0){const y=_.__offset,S=_.value;if(Array.isArray(S)){let I=0;for(let C=0;C<S.length;C++){const N=S[C],G=p(N);g(N,_.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,_.__data)}}function g(_,E,A){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,A)}function v(_,E,A,R){const y=_.value,S=E+"_"+A;if(R[S]===void 0)return typeof y=="number"||typeof y=="boolean"?R[S]=y:ArrayBuffer.isView(y)?R[S]=y.slice():R[S]=y.clone(),!0;{const I=R[S];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return R[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(_){const E=_.uniforms;let A=0;const R=16;for(let S=0,I=E.length;S<I;S++){const C=Array.isArray(E[S])?E[S]:[E[S]];for(let N=0,G=C.length;N<G;N++){const k=C[N],H=Array.isArray(k.value)?k.value:[k.value];for(let J=0,z=H.length;J<z;J++){const B=H[J],q=p(B),X=A%R,Q=X%q.boundary,se=X+Q;A+=Q,se!==0&&R-se<q.storage&&(A+=R-se),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=q.storage}}}const y=A%R;return y>0&&(A+=R-y),_.__size=A,_.__cache={},this}function p(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):de("WebGLRenderer: Unsupported uniform value type.",_),E}function x(_){const E=_.target;E.removeEventListener("dispose",x);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function M(){for(const _ in r)e.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}var Ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function Ey(){return vi===null&&(vi=new ri(Ty,16,16,Wr,Ki),vi.name="DFG_LUT",vi.minFilter=St,vi.magFilter=St,vi.wrapS=Jt,vi.wrapT=Jt,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Kf=class{constructor(e={}){const{canvas:t=Fu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Ri}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const g=u,v=new Set([tl,el,va]),m=new Set([Ri,Ii,Zo,$o,Jo,Ko]),p=new Uint32Array(4),x=new Int32Array(4),M=new P;let _=null,E=null;const A=[],R=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1,C=null,N=null,G=null,k=null;this._outputColorSpace=Qt;let H=0,J=0,z=null,B=-1,q=null;const X=new ft,Q=new ft;let se=null;const Fe=new ye(0);let $e=0,K=t.width,ae=t.height,ge=1,pe=null,Ne=null;const ze=new ft(0,0,K,ae),Ue=new ft(0,0,K,ae);let Qe=!1;const j=new bn;let oe=!1,ue=!1;const xe=new We,Me=new P,Le=new ft,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ye(){return z===null?ge:1}let L=i;function vt(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r185"),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",kt,!1),t.addEventListener("webglcontextcreationerror",pt,!1),L===null){const F="webgl2";if(L=vt(F,T),L===null)throw vt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw Pe("WebGLRenderer: "+T.message),T}let rt,tt,w,b,D,Y,te,le,fe,O,ce,be,Ce,re,Ie,Oe,He,st,U,$,ie,Se,we;function ne(){rt=new A_(L),rt.init(),ie=new Zf(L,rt),tt=new __(L,rt,e,ie),w=new my(L,rt),tt.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),N=L.createFramebuffer(),G=L.createFramebuffer(),k=L.createFramebuffer(),b=new R_(L),D=new ty,Y=new gy(L,rt,w,D,tt,ie,b),te=new E_(S),le=new f_(L),Se=new g_(L,le),fe=new w_(L,le,b,Se),O=new I_(L,fe,le,Se,b),st=new P_(L,tt,Y),Ie=new y_(D),ce=new ey(S,te,rt,tt,Se,Ie),be=new Sy(S,D),Ce=new ny,re=new cy(rt),He=new m_(S,te,w,O,f,o),Oe=new py(S,O,tt),we=new by(L,b,tt,w),U=new v_(L,rt,b),$=new C_(L,rt,b),b.programs=ce.programs,S.capabilities=tt,S.extensions=rt,S.properties=D,S.renderLists=Ce,S.shadowMap=Oe,S.state=w,S.info=b}ne(),g!==1009&&(y=new D_(g,t.width,t.height,a,n,r));const ve=new xy(S,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(T){T!==void 0&&(ge=T,this.setSize(K,ae,!1))},this.getSize=function(T){return T.set(K,ae)},this.setSize=function(T,F,Z=!0){if(ve.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,ae=F,t.width=Math.floor(T*ge),t.height=Math.floor(F*ge),Z===!0&&(t.style.width=T+"px",t.style.height=F+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(K*ge,ae*ge).floor()},this.setDrawingBufferSize=function(T,F,Z){K=T,ae=F,ge=Z,t.width=Math.floor(T*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(g===1009){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(ze)},this.setViewport=function(T,F,Z,W){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,F,Z,W),w.viewport(X.copy(ze).multiplyScalar(ge).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,F,Z,W){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,F,Z,W),w.scissor(Q.copy(Ue).multiplyScalar(ge).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){w.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){pe=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Z=!0){let W=0;if(T){let V=!1;if(z!==null){const he=z.texture.format;V=v.has(he)}if(V){const he=z.texture.type,_e=m.has(he),Ee=He.getClearColor(),Ae=He.getClearAlpha(),Ge=Ee.r,et=Ee.g,it=Ee.b;_e?(p[0]=Ge,p[1]=et,p[2]=it,p[3]=Ae,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=Ge,x[1]=et,x[2]=it,x[3]=Ae,L.clearBufferiv(L.COLOR,0,x))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),C=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),He.dispose(),Ce.dispose(),re.dispose(),D.dispose(),te.dispose(),O.dispose(),Se.dispose(),we.dispose(),ce.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Bl),ve.removeEventListener("sessionend",zl),nn.stop()};function Ve(T){T.preventDefault(),Kr("WebGLRenderer: Context Lost."),I=!0}function kt(){Kr("WebGLRenderer: Context Restored."),I=!1;const T=b.autoReset,F=Oe.enabled,Z=Oe.autoUpdate,W=Oe.needsUpdate,V=Oe.type;ne(),b.autoReset=T,Oe.enabled=F,Oe.autoUpdate=Z,Oe.needsUpdate=W,Oe.type=V}function pt(T){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pi(T){const F=T.target;F.removeEventListener("dispose",pi),xi(F)}function xi(T){pp(T),D.remove(T)}function pp(T){const F=D.get(T).programs;F!==void 0&&(F.forEach(function(Z){ce.releaseProgram(Z)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Z,W,V,he){F===null&&(F=De);const _e=V.isMesh&&V.matrixWorld.determinantAffine()<0,Ee=vp(T,F,Z,W,V);w.setMaterial(W,_e);let Ae=Z.index,Ge=1;if(W.wireframe===!0){if(Ae=fe.getWireframeAttribute(Z),Ae===void 0)return;Ge=2}const et=Z.drawRange,it=Z.attributes.position;let Be=et.start*Ge,mt=(et.start+et.count)*Ge;he!==null&&(Be=Math.max(Be,he.start*Ge),mt=Math.min(mt,(he.start+he.count)*Ge)),Ae!==null?(Be=Math.max(Be,0),mt=Math.min(mt,Ae.count)):it!=null&&(Be=Math.max(Be,0),mt=Math.min(mt,it.count));const yt=mt-Be;if(yt<0||yt===1/0)return;Se.setup(V,W,Ee,Z,Ae);let xt,at=U;if(Ae!==null&&(xt=le.get(Ae),at=$,at.setIndex(xt)),V.isMesh)W.wireframe===!0?(w.setLineWidth(W.wireframeLinewidth*Ye()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(V.isLine){let Ot=W.linewidth;Ot===void 0&&(Ot=1),w.setLineWidth(Ot*Ye()),V.isLineSegments?at.setMode(L.LINES):V.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else V.isPoints?at.setMode(L.POINTS):V.isSprite&&at.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ot=V._multiDrawStarts,Re=V._multiDrawCounts,oi=V._multiDrawCount,ot=Ae?le.get(Ae).bytesPerElement:1,ii=D.get(W).currentProgram.getUniforms();for(let mi=0;mi<oi;mi++)ii.setValue(L,"_gl_DrawID",mi),at.render(Ot[mi]/ot,Re[mi])}else if(V.isInstancedMesh)at.renderInstances(Be,yt,V.count);else if(Z.isInstancedBufferGeometry){const Ot=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Re=Math.min(Z.instanceCount,Ot);at.renderInstances(Be,yt,Re)}else at.render(Be,yt)};function Fl(T,F,Z){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,hs(T,F,Z),T.side=0,T.needsUpdate=!0,hs(T,F,Z),T.side=2):hs(T,F,Z)}this.compile=function(T,F,Z=null){Z===null&&(Z=T),E=re.get(Z),E.init(F),R.push(E),Z.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),T!==Z&&T.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();const W=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const he=V.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Ee=he[_e];Fl(Ee,Z,V),W.add(Ee)}else Fl(he,Z,V),W.add(he)}),E=R.pop(),W},this.compileAsync=function(T,F,Z=null){const W=this.compile(T,F,Z);return new Promise(V=>{function he(){if(W.forEach(function(_e){D.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){V(T);return}setTimeout(he,10)}rt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Pa=null;function mp(T){Pa&&Pa(T)}function Bl(){nn.stop()}function zl(){nn.start()}const nn=new Gf;nn.setAnimationLoop(mp),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(T){Pa=T,ve.setAnimationLoop(T),T===null?nn.stop():nn.start()},ve.addEventListener("sessionstart",Bl),ve.addEventListener("sessionend",zl),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;C!==null&&C.renderStart(T,F);const Z=ve.enabled===!0&&ve.isPresenting===!0,W=y!==null&&(z===null||Z)&&y.begin(S,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,F,z),E=re.get(T,R.length),E.init(F),E.state.textureUnits=Y.getTextureUnits(),R.push(E),xe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(xe,$i,F.reversedDepth),ue=this.localClippingEnabled,oe=Ie.init(this.clippingPlanes,ue),_=Ce.get(T,A.length),_.init(),A.push(_),ve.enabled===!0&&ve.isPresenting===!0){const he=S.xr.getDepthSensingMesh();he!==null&&Ia(he,F,-1/0,S.sortObjects)}Ia(T,F,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(pe,Ne,F.reversedDepth),qe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,qe&&He.addToRenderList(_,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Ie.beginShadows();const V=E.state.shadowsArray;if(Oe.render(V,T,F),oe===!0&&Ie.endShadows(),(W&&y.hasRenderPass())===!1){const he=_.opaque,_e=_.transmissive;if(E.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(_e.length>0)for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const et=Ee[Ae];kl(he,_e,T,et)}qe&&He.render(T);for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const et=Ee[Ae];Vl(_,T,et,et.viewport)}}else _e.length>0&&kl(he,_e,T,F),qe&&He.render(T),Vl(_,T,F)}z!==null&&J===0&&(Y.updateMultisampleRenderTarget(z),Y.updateRenderTargetMipmap(z)),W&&y.end(S),T.isScene===!0&&T.onAfterRender(S,T,F),Se.resetDefaultState(),B=-1,q=null,R.pop(),R.length>0?(E=R[R.length-1],Y.setTextureUnits(E.state.textureUnits),oe===!0&&Ie.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,C!==null&&C.renderEnd()};function Ia(T,F,Z,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){W&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xe);const he=O.update(T),_e=T.material;_e.visible&&_.push(T,he,_e,Z,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const he=O.update(T),_e=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Le.copy(he.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(xe)),Array.isArray(_e)){const Ee=he.groups;for(let Ae=0,Ge=Ee.length;Ae<Ge;Ae++){const et=Ee[Ae],it=_e[et.materialIndex];it&&it.visible&&_.push(T,he,it,Z,Le.z,et)}}else _e.visible&&_.push(T,he,_e,Z,Le.z,null)}}const V=T.children;for(let he=0,_e=V.length;he<_e;he++)Ia(V[he],F,Z,W)}function Vl(T,F,Z,W){const{opaque:V,transmissive:he,transparent:_e}=T;E.setupLightsView(Z),oe===!0&&Ie.setGlobalState(S.clippingPlanes,Z),W&&w.viewport(X.copy(W)),V.length>0&&cs(V,F,Z),he.length>0&&cs(he,F,Z),_e.length>0&&cs(_e,F,Z),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function kl(T,F,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const it=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new ti(1,1,{generateMipmaps:!0,type:it?Ki:Ri,minFilter:dr,samples:Math.max(4,tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const V=E.state.transmissionRenderTarget[W.id],he=W.viewport||X;V.setSize(he.z*S.transmissionResolutionScale,he.w*S.transmissionResolutionScale);const _e=S.getRenderTarget(),Ee=S.getActiveCubeFace(),Ae=S.getActiveMipmapLevel();S.setRenderTarget(V),S.getClearColor(Fe),$e=S.getClearAlpha(),$e<1&&S.setClearColor(16777215,.5),S.clear(),qe&&He.render(Z);const Ge=S.toneMapping;S.toneMapping=0;const et=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),oe===!0&&Ie.setGlobalState(S.clippingPlanes,W),cs(T,Z,W),Y.updateMultisampleRenderTarget(V),Y.updateRenderTargetMipmap(V),rt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Be=0,mt=F.length;Be<mt;Be++){const{object:yt,geometry:xt,material:at,group:Ot}=F[Be];if(at.side===2&&yt.layers.test(W.layers)){const Re=at.side;at.side=1,at.needsUpdate=!0,Gl(yt,Z,W,xt,at,Ot),at.side=Re,at.needsUpdate=!0,it=!0}}it===!0&&(Y.updateMultisampleRenderTarget(V),Y.updateRenderTargetMipmap(V))}S.setRenderTarget(_e,Ee,Ae),S.setClearColor(Fe,$e),et!==void 0&&(W.viewport=et),S.toneMapping=Ge}function cs(T,F,Z){const W=F.isScene===!0?F.overrideMaterial:null;for(let V=0,he=T.length;V<he;V++){const _e=T[V],{object:Ee,geometry:Ae,group:Ge}=_e;let et=_e.material;et.allowOverride===!0&&W!==null&&(et=W),Ee.layers.test(Z.layers)&&Gl(Ee,F,Z,Ae,et,Ge)}}function Gl(T,F,Z,W,V,he){T.onBeforeRender(S,F,Z,W,V,he),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(S,F,Z,W,T,he),V.transparent===!0&&V.side===2&&V.forceSinglePass===!1?(V.side=1,V.needsUpdate=!0,S.renderBufferDirect(Z,F,W,V,T,he),V.side=0,V.needsUpdate=!0,S.renderBufferDirect(Z,F,W,V,T,he),V.side=2):S.renderBufferDirect(Z,F,W,V,T,he),T.onAfterRender(S,F,Z,W,V,he)}function hs(T,F,Z){F.isScene!==!0&&(F=De);const W=D.get(T),V=E.state.lights,he=E.state.shadowsArray,_e=V.state.version,Ee=ce.getParameters(T,V.state,he,F,Z,E.state.lightProbeGridArray),Ae=ce.getProgramCacheKey(Ee);let Ge=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const et=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=te.get(T.envMap||W.environment,et),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",pi),Ge=new Map,W.programs=Ge);let it=Ge.get(Ae);if(it!==void 0){if(W.currentProgram===it&&W.lightsStateVersion===_e)return Wl(T,Ee),it}else Ee.uniforms=ce.getUniforms(T),C!==null&&T.isNodeMaterial&&C.build(T,Z,Ee),T.onBeforeCompile(Ee,S),it=ce.acquireProgram(Ee,Ae),Ge.set(Ae,it),W.uniforms=Ee.uniforms;const Be=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Ie.uniform),Wl(T,Ee),W.needsLights=yp(T),W.lightsStateVersion=_e,W.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=it,W.uniformsList=null,it}function Hl(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ca.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Wl(T,F){const Z=D.get(T);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function gp(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let Z=0,W=T.length;Z<W;Z++){const V=T[Z];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function vp(T,F,Z,W,V){F.isScene!==!0&&(F=De),Y.resetTextureUnits();const he=F.fog,_e=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Ee=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:nt.workingColorSpace,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ge=te.get(W.envMap||_e,Ae),et=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,yt=!!Z.morphAttributes.color;let xt=0;W.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(xt=S.toneMapping);const at=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ot=at!==void 0?at.length:0,Re=D.get(W),oi=E.state.lights;if(oe===!0&&(ue===!0||T!==q)){const ct=T===q&&W.id===B;Ie.setState(W,T,ct)}let ot=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==oi.state.version||Re.outputColorSpace!==Ee||V.isBatchedMesh&&Re.batching===!1||!V.isBatchedMesh&&Re.batching===!0||V.isBatchedMesh&&Re.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Re.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Re.instancing===!1||!V.isInstancedMesh&&Re.instancing===!0||V.isSkinnedMesh&&Re.skinning===!1||!V.isSkinnedMesh&&Re.skinning===!0||V.isInstancedMesh&&Re.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Re.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Re.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Re.instancingMorph===!1&&V.morphTexture!==null||Re.envMap!==Ge||W.fog===!0&&Re.fog!==he||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ie.numPlanes||Re.numIntersection!==Ie.numIntersection)||Re.vertexAlphas!==et||Re.vertexTangents!==it||Re.morphTargets!==Be||Re.morphNormals!==mt||Re.morphColors!==yt||Re.toneMapping!==xt||Re.morphTargetsCount!==Ot||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Re.__version=W.version);let ii=Re.currentProgram;ot===!0&&(ii=hs(W,F,V),C&&W.isNodeMaterial&&C.onUpdateProgram(W,ii,Re));let mi=!1,Oi=!1,Cn=!1;const ut=ii.getUniforms(),bt=Re.uniforms;if(w.useProgram(ii.program)&&(mi=!0,Oi=!0,Cn=!0),W.id!==B&&(B=W.id,Oi=!0),Re.needsLights){const ct=gp(E.state.lightProbeGridArray,V);Re.lightProbeGrid!==ct&&(Re.lightProbeGrid=ct,Oi=!0)}if(mi||q!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",T.projectionMatrix),ut.setValue(L,"viewMatrix",T.matrixWorldInverse);const ct=ut.map.cameraPosition;ct!==void 0&&ct.setValue(L,Me.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),q!==T&&(q=T,Oi=!0,Cn=!0)}if(Re.needsLights&&(oi.state.directionalShadowMap.length>0&&ut.setValue(L,"directionalShadowMap",oi.state.directionalShadowMap,Y),oi.state.spotShadowMap.length>0&&ut.setValue(L,"spotShadowMap",oi.state.spotShadowMap,Y),oi.state.pointShadowMap.length>0&&ut.setValue(L,"pointShadowMap",oi.state.pointShadowMap,Y)),V.isSkinnedMesh){ut.setOptional(L,V,"bindMatrix"),ut.setOptional(L,V,"bindMatrixInverse");const ct=V.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ut.setValue(L,"boneTexture",ct.boneTexture,Y))}V.isBatchedMesh&&(ut.setOptional(L,V,"batchingTexture"),ut.setValue(L,"batchingTexture",V._matricesTexture,Y),ut.setOptional(L,V,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",V._indirectTexture,Y),ut.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",V._colorsTexture,Y));const Fi=Z.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&st.update(V,Z,ii),(Oi||Re.receiveShadow!==V.receiveShadow)&&(Re.receiveShadow=V.receiveShadow,ut.setValue(L,"receiveShadow",V.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(bt.envMapIntensity.value=F.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=Ey()),Oi){if(ut.setValue(L,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&_p(bt,Cn),he&&W.fog===!0&&be.refreshFogUniforms(bt,he),be.refreshMaterialUniforms(bt,W,ge,ae,E.state.transmissionRenderTarget[T.id]),Re.needsLights&&Re.lightProbeGrid){const ct=Re.lightProbeGrid;bt.probesSH.value=ct.texture,bt.probesMin.value.copy(ct.boundingBox.min),bt.probesMax.value.copy(ct.boundingBox.max),bt.probesResolution.value.copy(ct.resolution)}ca.upload(L,Hl(Re),bt,Y)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ca.upload(L,Hl(Re),bt,Y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(L,"center",V.center),ut.setValue(L,"modelViewMatrix",V.modelViewMatrix),ut.setValue(L,"normalMatrix",V.normalMatrix),ut.setValue(L,"modelMatrix",V.matrixWorld),W.uniformsGroups!==void 0){const ct=W.uniformsGroups;for(let _r=0,Rn=ct.length;_r<Rn;_r++){const Xl=ct[_r];we.update(Xl,ii),we.bind(Xl,ii)}}return ii}function _p(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function yp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,F,Z){const W=D.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),D.get(T.texture).__webglTexture=F,D.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const Z=D.get(T);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Z=0){z=T,H=F,J=Z;let W=null,V=!1,he=!1;if(T){const _e=D.get(T);if(_e.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(L.FRAMEBUFFER,_e.__webglFramebuffer),X.copy(T.viewport),Q.copy(T.scissor),se=T.scissorTest,w.viewport(X),w.scissor(Q),w.setScissorTest(se),B=-1;return}else if(_e.__webglFramebuffer===void 0)Y.setupRenderTarget(T);else if(_e.__hasExternalTextures)Y.rebindTextures(T,D.get(T.texture).__webglTexture,D.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(_e.__boundDepthTexture!==Ge){if(Ge!==null&&D.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(T)}}const Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=!0);const Ae=D.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?W=Ae[F][Z]:W=Ae[F],V=!0):T.samples>0&&Y.useMultisampledRTT(T)===!1?W=D.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[Z]:W=Ae,X.copy(T.viewport),Q.copy(T.scissor),se=T.scissorTest}else X.copy(ze).multiplyScalar(ge).floor(),Q.copy(Ue).multiplyScalar(ge).floor(),se=Qe;if(Z!==0&&(W=N),w.bindFramebuffer(L.FRAMEBUFFER,W)&&w.drawBuffers(T,W),w.viewport(X),w.scissor(Q),w.setScissorTest(se),V){const _e=D.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,Z)}else if(he){const _e=F;for(let Ee=0;Ee<T.textures.length;Ee++){const Ae=D.get(T.textures[Ee]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,Z,_e)}}else if(T!==null&&Z!==0){const _e=D.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_e.__webglTexture,Z)}B=-1},this.readRenderTargetPixels=function(T,F,Z,W,V,he,_e,Ee=0){if(!(T&&T.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=D.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){w.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Ge=T.textures[Ee],et=Ge.format,it=Ge.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),!tt.textureFormatReadable(et)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(it)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-V&&L.readPixels(F,Z,W,V,ie.convert(et),ie.convert(it),he)}finally{const Ge=z!==null?D.get(z).__webglFramebuffer:null;w.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,F,Z,W,V,he,_e,Ee=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=D.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae)if(F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-V){w.bindFramebuffer(L.FRAMEBUFFER,Ae);const Ge=T.textures[Ee],et=Ge.format,it=Ge.type;if(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee),!tt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(F,Z,W,V,ie.convert(et),ie.convert(it),0);const mt=z!==null?D.get(z).__webglFramebuffer:null;w.bindFramebuffer(L.FRAMEBUFFER,mt);const yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await lm(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(Be),L.deleteSync(yt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Z=0){const W=Math.pow(2,-Z),V=Math.floor(T.image.width*W),he=Math.floor(T.image.height*W),_e=F!==null?F.x:0,Ee=F!==null?F.y:0;Y.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,_e,Ee,V,he),w.unbindTexture()},this.copyTextureToTexture=function(T,F,Z=null,W=null,V=0,he=0){let _e,Ee,Ae,Ge,et,it,Be,mt,yt;const xt=T.isCompressedTexture?T.mipmaps[he]:T.image;if(Z!==null)_e=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,Ae=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,et=Z.min.y,it=Z.isBox3?Z.min.z:0;else{const bt=Math.pow(2,-V);_e=Math.floor(xt.width*bt),Ee=Math.floor(xt.height*bt),T.isDataArrayTexture?Ae=xt.depth:T.isData3DTexture?Ae=Math.floor(xt.depth*bt):Ae=1,Ge=0,et=0,it=0}W!==null?(Be=W.x,mt=W.y,yt=W.z):(Be=0,mt=0,yt=0);const at=ie.convert(F.format),Ot=ie.convert(F.type);let Re;F.isData3DTexture?(Y.setTexture3D(F,0),Re=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),Re=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),Re=L.TEXTURE_2D),w.activeTexture(L.TEXTURE0),w.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const oi=w.getParameter(L.UNPACK_ROW_LENGTH),ot=w.getParameter(L.UNPACK_IMAGE_HEIGHT),ii=w.getParameter(L.UNPACK_SKIP_PIXELS),mi=w.getParameter(L.UNPACK_SKIP_ROWS),Oi=w.getParameter(L.UNPACK_SKIP_IMAGES);w.pixelStorei(L.UNPACK_ROW_LENGTH,xt.width),w.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xt.height),w.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),w.pixelStorei(L.UNPACK_SKIP_ROWS,et),w.pixelStorei(L.UNPACK_SKIP_IMAGES,it);const Cn=T.isDataArrayTexture||T.isData3DTexture,ut=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const bt=D.get(T),Fi=D.get(F),ct=D.get(bt.__renderTarget),_r=D.get(Fi.__renderTarget);w.bindFramebuffer(L.READ_FRAMEBUFFER,ct.__webglFramebuffer),w.bindFramebuffer(L.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Rn=0;Rn<Ae;Rn++)Cn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(T).__webglTexture,V,it+Rn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(F).__webglTexture,he,yt+Rn)),L.blitFramebuffer(Ge,et,_e,Ee,Be,mt,_e,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST);w.bindFramebuffer(L.READ_FRAMEBUFFER,null),w.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||D.has(T)){const bt=D.get(T),Fi=D.get(F);w.bindFramebuffer(L.READ_FRAMEBUFFER,G),w.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let ct=0;ct<Ae;ct++)Cn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.__webglTexture,V,it+ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bt.__webglTexture,V),ut?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fi.__webglTexture,he,yt+ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fi.__webglTexture,he),V!==0?L.blitFramebuffer(Ge,et,_e,Ee,Be,mt,_e,Ee,L.COLOR_BUFFER_BIT,L.NEAREST):ut?L.copyTexSubImage3D(Re,he,Be,mt,yt+ct,Ge,et,_e,Ee):L.copyTexSubImage2D(Re,he,Be,mt,Ge,et,_e,Ee);w.bindFramebuffer(L.READ_FRAMEBUFFER,null),w.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ut?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Re,he,Be,mt,yt,_e,Ee,Ae,at,Ot,xt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Re,he,Be,mt,yt,_e,Ee,Ae,at,xt.data):L.texSubImage3D(Re,he,Be,mt,yt,_e,Ee,Ae,at,Ot,xt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,Be,mt,_e,Ee,at,Ot,xt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,Be,mt,xt.width,xt.height,at,xt.data):L.texSubImage2D(L.TEXTURE_2D,he,Be,mt,_e,Ee,at,Ot,xt);w.pixelStorei(L.UNPACK_ROW_LENGTH,oi),w.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),w.pixelStorei(L.UNPACK_SKIP_PIXELS,ii),w.pixelStorei(L.UNPACK_SKIP_ROWS,mi),w.pixelStorei(L.UNPACK_SKIP_IMAGES,Oi),he===0&&F.generateMipmaps&&L.generateMipmap(Re),w.unbindTexture()},this.initRenderTarget=function(T){D.get(T).__webglFramebuffer===void 0&&Y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Y.setTextureCube(T,0):T.isData3DTexture?Y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Y.setTexture2DArray(T,0):Y.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){H=0,J=0,z=null,w.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}},Br=Tp();function Ay(e){let t;const i=new Set,n=(c,h)=>{const d=typeof c=="function"?c(t):c;if(d!==t){const u=t;t=h?d:Object.assign({},t,d),i.forEach(f=>f(t,u))}},r=()=>t,s=(c,h=r,d=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let u=h(t);function f(){const g=h(t);if(!d(u,g)){const v=u;c(u=g,v)}}return i.add(f),()=>i.delete(f)},l={setState:n,getState:r,subscribe:(c,h,d)=>h||d?s(c,h,d):(i.add(c),()=>i.delete(c)),destroy:()=>i.clear()};return t=e(n,r,l),l}var Th=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?Xe.useEffect:Xe.useLayoutEffect;function wy(e){const t=typeof e=="function"?Ay(e):e,i=(n=t.getState,r=Object.is)=>{const[,s]=(0,Xe.useReducer)(m=>m+1,0),a=t.getState(),o=(0,Xe.useRef)(a),l=(0,Xe.useRef)(n),c=(0,Xe.useRef)(r),h=(0,Xe.useRef)(!1),d=(0,Xe.useRef)();d.current===void 0&&(d.current=n(a));let u,f=!1;(o.current!==a||l.current!==n||c.current!==r||h.current)&&(u=n(a),f=!r(d.current,u)),Th(()=>{f&&(d.current=u),o.current=a,l.current=n,c.current=r,h.current=!1});const g=(0,Xe.useRef)(a);Th(()=>{const m=()=>{try{const x=t.getState(),M=l.current(x);c.current(d.current,M)||(o.current=x,d.current=M,s())}catch{h.current=!0,s()}},p=t.subscribe(m);return t.getState()!==g.current&&m(),p},[]);const v=f?u:d.current;return(0,Xe.useDebugValue)(v),v};return Object.assign(i,t),i[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[i,t];return{next(){const r=n.length<=0;return{value:n.shift(),done:r}}}},i}var Cy=e=>typeof e=="object"&&typeof e.then=="function",xn=[];function $f(e,t,i=(n,r)=>n===r){if(e===t)return!0;if(!e||!t)return!1;const n=e.length;if(t.length!==n)return!1;for(let r=0;r<n;r++)if(!i(e[r],t[r]))return!1;return!0}function jf(e,t=null,i=!1,n={}){t===null&&(t=[e]);for(const s of xn)if($f(t,s.keys,s.equal)){if(i)return;if(Object.prototype.hasOwnProperty.call(s,"error"))throw s.error;if(Object.prototype.hasOwnProperty.call(s,"response"))return n.lifespan&&n.lifespan>0&&(s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(s.remove,n.lifespan)),s.response;if(!i)throw s.promise}const r={keys:t,equal:n.equal,remove:()=>{const s=xn.indexOf(r);s!==-1&&xn.splice(s,1)},promise:(Cy(e)?e:e(...t)).then(s=>{r.response=s,n.lifespan&&n.lifespan>0&&(r.timeout=setTimeout(r.remove,n.lifespan))}).catch(s=>r.error=s)};if(xn.push(r),!i)throw r.promise}var Ry=(e,t,i)=>jf(e,t,!1,i),Py=(e,t,i)=>{jf(e,t,!0,i)},Iy=e=>{if(e===void 0||e.length===0)xn.splice(0,xn.length);else{const t=xn.find(i=>$f(e,i.keys,i.equal));t&&t.remove()}},Ly=Gh((e=>{function t(B,q){var X=B.length;B.push(q);e:for(;0<X;){var Q=X-1>>>1,se=B[Q];if(0<r(se,q))B[Q]=q,B[X]=se,X=Q;else break e}}function i(B){return B.length===0?null:B[0]}function n(B){if(B.length===0)return null;var q=B[0],X=B.pop();if(X!==q){B[0]=X;e:for(var Q=0,se=B.length,Fe=se>>>1;Q<Fe;){var $e=2*(Q+1)-1,K=B[$e],ae=$e+1,ge=B[ae];if(0>r(K,X))ae<se&&0>r(ge,K)?(B[Q]=ge,B[ae]=X,Q=ae):(B[Q]=K,B[$e]=X,Q=$e);else if(ae<se&&0>r(ge,X))B[Q]=ge,B[ae]=X,Q=ae;else break e}}return q}function r(B,q){var X=B.sortIndex-q.sortIndex;return X!==0?X:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,d=null,u=3,f=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(B){for(var q=i(c);q!==null;){if(q.callback===null)n(c);else if(q.startTime<=B)n(c),q.sortIndex=q.expirationTime,t(l,q);else break;q=i(c)}}function _(B){if(v=!1,M(B),!g)if(i(l)!==null)g=!0,J(E);else{var q=i(c);q!==null&&z(_,q.startTime-B)}}function E(B,q){g=!1,v&&(v=!1,p(y),y=-1),f=!0;var X=u;try{for(M(q),d=i(l);d!==null&&(!(d.expirationTime>q)||B&&!C());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,u=d.priorityLevel;var se=Q(d.expirationTime<=q);q=e.unstable_now(),typeof se=="function"?d.callback=se:d===i(l)&&n(l),M(q)}else n(l);d=i(l)}if(d!==null)var Fe=!0;else{var $e=i(c);$e!==null&&z(_,$e.startTime-q),Fe=!1}return Fe}finally{d=null,u=X,f=!1}}var A=!1,R=null,y=-1,S=5,I=-1;function C(){return!(e.unstable_now()-I<S)}function N(){if(R!==null){var B=e.unstable_now();I=B;var q=!0;try{q=R(!0,B)}finally{q?G():(A=!1,R=null)}}else A=!1}var G;if(typeof x=="function")G=function(){x(N)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,H=k.port2;k.port1.onmessage=N,G=function(){H.postMessage(null)}}else G=function(){m(N,0)};function J(B){R=B,A||(A=!0,G())}function z(B,q){y=m(function(){B(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){g||f||(g=!0,J(E))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return i(l)},e.unstable_next=function(B){switch(u){case 1:case 2:case 3:var q=3;break;default:q=u}var X=u;u=q;try{return B()}finally{u=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=u;u=B;try{return q()}finally{u=X}},e.unstable_scheduleCallback=function(B,q,X){var Q=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Q+X:Q):X=Q,B){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=X+se,B={id:h++,callback:q,priorityLevel:B,startTime:X,expirationTime:se,sortIndex:-1},X>Q?(B.sortIndex=X,t(c,B),i(l)===null&&B===i(c)&&(v?(p(y),y=-1):v=!0,z(_,X-Q))):(B.sortIndex=se,t(l,B),g||f||(g=!0,J(E))),B},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(B){var q=u;return function(){var X=u;u=q;try{return B.apply(this,arguments)}finally{u=X}}}})),Dy=Gh(((e,t)=>{t.exports=Ly()})),At=Mp(),Uy=kh(bp()),Eh=Dy(),Nl={},Ny=e=>{Object.assign(Nl,e)};function Oy(e,t){function i(c,{args:h=[],attach:d,...u},f){let g=`${c[0].toUpperCase()}${c.slice(1)}`,v;if(c==="primitive"){if(u.object===void 0)throw new Error("R3F: Primitives without 'object' are invalid!");const m=u.object;v=tr(m,{type:c,root:f,attach:d,primitive:!0})}else{const m=Nl[g];if(!m)throw new Error(`R3F: ${g} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);if(!Array.isArray(h))throw new Error("R3F: The args prop must be an array!");v=tr(new m(...h),{type:c,root:f,attach:d,memoizedProps:{args:h}})}return v.__r3f.attach===void 0&&(v.isBufferGeometry?v.__r3f.attach="geometry":v.isMaterial&&(v.__r3f.attach="material")),g!=="inject"&&Eo(v,u),v}function n(c,h){let d=!1;if(h){var u,f;(u=h.__r3f)!=null&&u.attach?To(c,h,h.__r3f.attach):h.isObject3D&&c.isObject3D&&(c.add(h),d=!0),d||(f=c.__r3f)==null||f.objects.push(h),h.__r3f||tr(h,{}),h.__r3f.parent=c,Wo(h),ir(h)}}function r(c,h,d){let u=!1;if(h){var f,g;if((f=h.__r3f)!=null&&f.attach)To(c,h,h.__r3f.attach);else if(h.isObject3D&&c.isObject3D){h.parent=c,h.dispatchEvent({type:"added"}),c.dispatchEvent({type:"childadded",child:h});const v=c.children.filter(p=>p!==h),m=v.indexOf(d);c.children=[...v.slice(0,m),h,...v.slice(m)],u=!0}u||(g=c.__r3f)==null||g.objects.push(h),h.__r3f||tr(h,{}),h.__r3f.parent=c,Wo(h),ir(h)}}function s(c,h,d=!1){c&&[...c].forEach(u=>a(h,u,d))}function a(c,h,d){if(h){var u,f,g;if(h.__r3f&&(h.__r3f.parent=null),(u=c.__r3f)!=null&&u.objects&&(c.__r3f.objects=c.__r3f.objects.filter(M=>M!==h)),(f=h.__r3f)!=null&&f.attach)Ph(c,h,h.__r3f.attach);else if(h.isObject3D&&c.isObject3D){var v;c.remove(h),(v=h.__r3f)!=null&&v.root&&Xy(ha(h),h)}const p=(g=h.__r3f)==null?void 0:g.primitive,x=!p&&(d===void 0?h.dispose!==null:d);if(!p){var m;s((m=h.__r3f)==null?void 0:m.objects,h,x),s(h.children,h,x)}if(delete h.__r3f,x&&h.dispose&&h.type!=="Scene"){const M=()=>{try{h.dispose()}catch{}};typeof IS_REACT_ACT_ENVIRONMENT>"u"?(0,Eh.unstable_scheduleCallback)(Eh.unstable_IdlePriority,M):M()}ir(c)}}function o(c,h,d,u){var f;const g=(f=c.__r3f)==null?void 0:f.parent;if(!g)return;const v=i(h,d,c.__r3f.root);if(c.children){for(const m of c.children)m.__r3f&&n(v,m);c.children=c.children.filter(m=>!m.__r3f)}c.__r3f.objects.forEach(m=>n(v,m)),c.__r3f.objects=[],c.__r3f.autoRemovedBeforeAppend||a(g,c),v.parent&&(v.__r3f.autoRemovedBeforeAppend=!0),n(g,v),v.raycast&&v.__r3f.eventCount&&ha(v).getState().internal.interaction.push(v),[u,u.alternate].forEach(m=>{m!==null&&(m.stateNode=v,m.ref&&(typeof m.ref=="function"?m.ref(v):m.ref.current=v))})}const l=()=>{};return{reconciler:(0,Uy.default)({createInstance:i,removeChild:a,appendChild:n,appendInitialChild:n,insertBefore:r,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(c,h)=>{if(!h)return;const d=c.getState().scene;d.__r3f&&(d.__r3f.root=c,n(d,h))},removeChildFromContainer:(c,h)=>{h&&a(c.getState().scene,h)},insertInContainerBefore:(c,h,d)=>{if(!h||!d)return;const u=c.getState().scene;u.__r3f&&r(u,h,d)},getRootHostContext:()=>null,getChildHostContext:c=>c,finalizeInitialChildren(c){var h;return!!((h=c?.__r3f)!=null?h:{}).handlers},prepareUpdate(c,h,d,u){var f;if(((f=c?.__r3f)!=null?f:{}).primitive&&u.object&&u.object!==c)return[!0];{const{args:g=[],children:v,...m}=u,{args:p=[],children:x,...M}=d;if(!Array.isArray(g))throw new Error("R3F: the args prop must be an array!");if(g.some((E,A)=>E!==p[A]))return[!0];const _=rp(c,m,M,!0);return _.changes.length?[!1,_]:null}},commitUpdate(c,[h,d],u,f,g,v){h?o(c,u,g,v):Eo(c,d)},commitMount(c,h,d,u){var f;const g=(f=c.__r3f)!=null?f:{};c.raycast&&g.handlers&&g.eventCount&&ha(c).getState().internal.interaction.push(c)},getPublicInstance:c=>c,prepareForCommit:()=>null,preparePortalMount:c=>tr(c.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(c){var h;const{attach:d,parent:u}=(h=c.__r3f)!=null?h:{};d&&u&&Ph(u,c,d),c.isObject3D&&(c.visible=!1),ir(c)},unhideInstance(c,h){var d;const{attach:u,parent:f}=(d=c.__r3f)!=null?d:{};u&&f&&To(f,c,u),(c.isObject3D&&h.visible==null||h.visible)&&(c.visible=!0),ir(c)},createTextInstance:l,hideTextInstance:l,unhideTextInstance:l,getCurrentEventPriority:()=>t?t():Br.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:typeof performance<"u"&&gt.fun(performance.now)?performance.now:gt.fun(Date.now)?Date.now:()=>0,scheduleTimeout:gt.fun(setTimeout)?setTimeout:void 0,cancelTimeout:gt.fun(clearTimeout)?clearTimeout:void 0}),applyProps:Eo}}var Ah,wh,bo=e=>"colorSpace"in e||"outputColorSpace"in e,Qf=()=>{var e;return(e=Nl.ColorManagement)!=null?e:null},ep=e=>e&&e.isOrthographicCamera,Fy=e=>e&&e.hasOwnProperty("current"),ls=typeof window<"u"&&((Ah=window.document)!=null&&Ah.createElement||((wh=window.navigator)==null?void 0:wh.product)==="ReactNative")?Xe.useLayoutEffect:Xe.useEffect;function tp(e){const t=Xe.useRef(e);return ls(()=>{t.current=e},[e]),t}function By({set:e}){return ls(()=>(e(new Promise(()=>null)),()=>e(!1)),[e]),null}var ip=class extends Xe.Component{constructor(...e){super(...e),this.state={error:!1}}componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}};ip.getDerivedStateFromError=()=>({error:!0});var Ch=new Map,zy=e=>e&&!!e.memoized&&!!e.changes;function np(e){var t;const i=typeof window<"u"?(t=window.devicePixelRatio)!=null?t:2:1;return Array.isArray(e)?Math.min(Math.max(e[0],i),e[1]):e}var Dr=e=>{var t;return(t=e.__r3f)==null?void 0:t.root.getState()};function ha(e){let t=e.__r3f.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}var gt={obj:e=>e===Object(e)&&!gt.arr(e)&&typeof e!="function",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",boo:e=>typeof e=="boolean",und:e=>e===void 0,arr:e=>Array.isArray(e),equ(e,t,{arrays:i="shallow",objects:n="reference",strict:r=!0}={}){if(typeof e!=typeof t||!!e!=!!t)return!1;if(gt.str(e)||gt.num(e)||gt.boo(e))return e===t;const s=gt.obj(e);if(s&&n==="reference")return e===t;const a=gt.arr(e);if(a&&i==="reference")return e===t;if((a||s)&&e===t)return!0;let o;for(o in e)if(!(o in t))return!1;if(s&&i==="shallow"&&n==="shallow"){for(o in r?t:e)if(!gt.equ(e[o],t[o],{strict:r,objects:"reference"}))return!1}else for(o in r?t:e)if(e[o]!==t[o])return!1;if(gt.und(o)){if(a&&e.length===0&&t.length===0||s&&Object.keys(e).length===0&&Object.keys(t).length===0)return!0;if(e!==t)return!1}return!0}};function Vy(e){const t={nodes:{},materials:{}};return e&&e.traverse(i=>{i.name&&(t.nodes[i.name]=i),i.material&&!t.materials[i.material.name]&&(t.materials[i.material.name]=i.material)}),t}function ky(e){e.dispose&&e.type!=="Scene"&&e.dispose();for(const t in e)t.dispose==null||t.dispose(),delete e[t]}function tr(e,t){const i=e;return i.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...t},e}function Ho(e,t){let i=e;if(t.includes("-")){const n=t.split("-"),r=n.pop();return i=n.reduce((s,a)=>s[a],e),{target:i,key:r}}else return{target:i,key:t}}var Rh=/-\d+$/;function To(e,t,i){if(gt.str(i)){if(Rh.test(i)){const{target:s,key:a}=Ho(e,i.replace(Rh,""));Array.isArray(s[a])||(s[a]=[])}const{target:n,key:r}=Ho(e,i);t.__r3f.previousAttach=n[r],n[r]=t}else t.__r3f.previousAttach=i(e,t)}function Ph(e,t,i){var n,r;if(gt.str(i)){const{target:s,key:a}=Ho(e,i),o=t.__r3f.previousAttach;o===void 0?delete s[a]:s[a]=o}else(n=t.__r3f)==null||n.previousAttach==null||n.previousAttach(e,t);(r=t.__r3f)==null||delete r.previousAttach}function rp(e,{children:t,key:i,ref:n,...r},{children:s,key:a,ref:o,...l}={},c=!1){const h=e.__r3f,d=Object.entries(r),u=[];if(c){const g=Object.keys(l);for(let v=0;v<g.length;v++)r.hasOwnProperty(g[v])||d.unshift([g[v],"__defaultremove"])}d.forEach(([g,v])=>{var m;if((m=e.__r3f)!=null&&m.primitive&&g==="object"||gt.equ(v,l[g]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(g))return u.push([g,v,!0,[]]);let p=[];g.includes("-")&&(p=g.split("-")),u.push([g,v,!1,p]);for(const x in r){const M=r[x];x.startsWith(`${g}-`)&&u.push([x,M,!1,x.split("-")])}});const f={...r};return h!=null&&h.memoizedProps&&h!=null&&h.memoizedProps.args&&(f.args=h.memoizedProps.args),h!=null&&h.memoizedProps&&h!=null&&h.memoizedProps.attach&&(f.attach=h.memoizedProps.attach),{memoized:f,changes:u}}var Gy=typeof process<"u"&&!1;function Eo(e,t){var i;const n=e.__r3f,r=n?.root,s=r==null||r.getState==null?void 0:r.getState(),{memoized:a,changes:o}=zy(t)?t:rp(e,t),l=n?.eventCount;e.__r3f&&(e.__r3f.memoizedProps=a);for(let d=0;d<o.length;d++){let[u,f,g,v]=o[d];if(bo(e)){const M="srgb",_="srgb-linear";u==="encoding"?(u="colorSpace",f=f===3001?M:_):u==="outputEncoding"&&(u="outputColorSpace",f=f===3001?M:_)}let m=e,p=m[u];if(v.length&&(p=v.reduce((x,M)=>x[M],e),!(p&&p.set))){const[x,...M]=v.reverse();m=M.reverse().reduce((_,E)=>_[E],e),u=x}if(f==="__defaultremove")if(m.constructor){let x=Ch.get(m.constructor);x||(x=new m.constructor,Ch.set(m.constructor,x)),f=x[u]}else f=0;if(g&&n)f?n.handlers[u]=f:delete n.handlers[u],n.eventCount=Object.keys(n.handlers).length;else if(p&&p.set&&(p.copy||p instanceof Sn)){if(Array.isArray(f))p.fromArray?p.fromArray(f):p.set(...f);else if(p.copy&&f&&f.constructor&&(Gy?p.constructor.name===f.constructor.name:p.constructor===f.constructor))p.copy(f);else if(f!==void 0){var c;const x=(c=p)==null?void 0:c.isColor;!x&&p.setScalar?p.setScalar(f):p instanceof Sn&&f instanceof Sn?p.mask=f.mask:p.set(f),!Qf()&&s&&!s.linear&&x&&p.convertSRGBToLinear()}}else{var h;if(m[u]=f,(h=m[u])!=null&&h.isTexture&&m[u].format===1023&&m[u].type===1009&&s){const x=m[u];bo(x)&&bo(s.gl)?x.colorSpace=s.gl.outputColorSpace:x.encoding=s.gl.outputEncoding}}ir(e)}if(n&&n.parent&&e.raycast&&l!==n.eventCount){const d=ha(e).getState().internal,u=d.interaction.indexOf(e);u>-1&&d.interaction.splice(u,1),n.eventCount&&d.interaction.push(e)}return!(o.length===1&&o[0][0]==="onUpdate")&&o.length&&(i=e.__r3f)!=null&&i.parent&&Wo(e),e}function ir(e){var t,i;const n=(t=e.__r3f)==null||(i=t.root)==null||i.getState==null?void 0:i.getState();n&&n.internal.frames===0&&n.invalidate()}function Wo(e){e.onUpdate==null||e.onUpdate(e)}function Hy(e,t){e.manual||(ep(e)?(e.left=t.width/-2,e.right=t.width/2,e.top=t.height/2,e.bottom=t.height/-2):e.aspect=t.width/t.height,e.updateProjectionMatrix(),e.updateMatrixWorld())}function ia(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function Wy(){var e;const t=typeof self<"u"&&self||typeof window<"u"&&window;if(!t)return Br.DefaultEventPriority;switch((e=t.event)==null?void 0:e.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return Br.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return Br.ContinuousEventPriority;default:return Br.DefaultEventPriority}}function sp(e,t,i,n){const r=i.get(t);r&&(i.delete(t),i.size===0&&(e.delete(n),r.target.releasePointerCapture(n)))}function Xy(e,t){const{internal:i}=e.getState();i.interaction=i.interaction.filter(n=>n!==t),i.initialHits=i.initialHits.filter(n=>n!==t),i.hovered.forEach((n,r)=>{(n.eventObject===t||n.object===t)&&i.hovered.delete(r)}),i.capturedMap.forEach((n,r)=>{sp(i.capturedMap,t,n,r)})}function qy(e){function t(l){const{internal:c}=e.getState(),h=l.offsetX-c.initialClick[0],d=l.offsetY-c.initialClick[1];return Math.round(Math.sqrt(h*h+d*d))}function i(l){return l.filter(c=>["Move","Over","Enter","Out","Leave"].some(h=>{var d;return(d=c.__r3f)==null?void 0:d.handlers["onPointer"+h]}))}function n(l,c){const h=e.getState(),d=new Set,u=[],f=c?c(h.internal.interaction):h.internal.interaction;for(let p=0;p<f.length;p++){const x=Dr(f[p]);x&&(x.raycaster.camera=void 0)}h.previousRoot||h.events.compute==null||h.events.compute(l,h);function g(p){const x=Dr(p);if(!x||!x.events.enabled||x.raycaster.camera===null)return[];if(x.raycaster.camera===void 0){var M;x.events.compute==null||x.events.compute(l,x,(M=x.previousRoot)==null?void 0:M.getState()),x.raycaster.camera===void 0&&(x.raycaster.camera=null)}return x.raycaster.camera?x.raycaster.intersectObject(p,!0):[]}let v=f.flatMap(g).sort((p,x)=>{const M=Dr(p.object),_=Dr(x.object);return!M||!_?p.distance-x.distance:_.events.priority-M.events.priority||p.distance-x.distance}).filter(p=>{const x=ia(p);return d.has(x)?!1:(d.add(x),!0)});h.events.filter&&(v=h.events.filter(v,h));for(const p of v){let x=p.object;for(;x;){var m;(m=x.__r3f)!=null&&m.eventCount&&u.push({...p,eventObject:x}),x=x.parent}}if("pointerId"in l&&h.internal.capturedMap.has(l.pointerId))for(let p of h.internal.capturedMap.get(l.pointerId).values())d.has(ia(p.intersection))||u.push(p.intersection);return u}function r(l,c,h,d){const u=e.getState();if(l.length){const f={stopped:!1};for(const g of l){const{raycaster:v,pointer:m,camera:p,internal:x}=Dr(g.object)||u,M=new P(m.x,m.y,0).unproject(p),_=S=>{var I,C;return(I=(C=x.capturedMap.get(S))==null?void 0:C.has(g.eventObject))!=null?I:!1},E=S=>{const I={intersection:g,target:c.target};x.capturedMap.has(S)?x.capturedMap.get(S).set(g.eventObject,I):x.capturedMap.set(S,new Map([[g.eventObject,I]])),c.target.setPointerCapture(S)},A=S=>{const I=x.capturedMap.get(S);I&&sp(x.capturedMap,g.eventObject,I,S)};let R={};for(let S in c){let I=c[S];typeof I!="function"&&(R[S]=I)}let y={...g,...R,pointer:m,intersections:l,stopped:f.stopped,delta:h,unprojectedPoint:M,ray:v.ray,camera:p,stopPropagation(){const S="pointerId"in c&&x.capturedMap.get(c.pointerId);(!S||S.has(g.eventObject))&&(y.stopped=f.stopped=!0,x.hovered.size&&Array.from(x.hovered.values()).find(I=>I.eventObject===g.eventObject)&&s([...l.slice(0,l.indexOf(g)),g]))},target:{hasPointerCapture:_,setPointerCapture:E,releasePointerCapture:A},currentTarget:{hasPointerCapture:_,setPointerCapture:E,releasePointerCapture:A},nativeEvent:c};if(d(y),f.stopped===!0)break}}return l}function s(l){const{internal:c}=e.getState();for(const h of c.hovered.values())if(!l.length||!l.find(d=>d.object===h.object&&d.index===h.index&&d.instanceId===h.instanceId)){const d=h.eventObject.__r3f,u=d?.handlers;if(c.hovered.delete(ia(h)),d!=null&&d.eventCount){const f={...h,intersections:l};u.onPointerOut==null||u.onPointerOut(f),u.onPointerLeave==null||u.onPointerLeave(f)}}}function a(l,c){for(let h=0;h<c.length;h++){const d=c[h].__r3f;d==null||d.handlers.onPointerMissed==null||d.handlers.onPointerMissed(l)}}function o(l){switch(l){case"onPointerLeave":case"onPointerCancel":return()=>s([]);case"onLostPointerCapture":return c=>{const{internal:h}=e.getState();"pointerId"in c&&h.capturedMap.has(c.pointerId)&&requestAnimationFrame(()=>{h.capturedMap.has(c.pointerId)&&(h.capturedMap.delete(c.pointerId),s([]))})}}return function(h){const{onPointerMissed:d,internal:u}=e.getState();u.lastEvent.current=h;const f=l==="onPointerMove",g=l==="onClick"||l==="onContextMenu"||l==="onDoubleClick",v=n(h,f?i:void 0),m=g?t(h):0;l==="onPointerDown"&&(u.initialClick=[h.offsetX,h.offsetY],u.initialHits=v.map(x=>x.eventObject)),g&&!v.length&&m<=2&&(a(h,u.interaction),d&&d(h)),f&&s(v);function p(x){const M=x.eventObject,_=M.__r3f,E=_?.handlers;if(_!=null&&_.eventCount)if(f){if(E.onPointerOver||E.onPointerEnter||E.onPointerOut||E.onPointerLeave){const A=ia(x),R=u.hovered.get(A);R?R.stopped&&x.stopPropagation():(u.hovered.set(A,x),E.onPointerOver==null||E.onPointerOver(x),E.onPointerEnter==null||E.onPointerEnter(x))}E.onPointerMove==null||E.onPointerMove(x)}else{const A=E[l];A?(!g||u.initialHits.includes(M))&&(a(h,u.interaction.filter(R=>!u.initialHits.includes(R))),A(x)):g&&u.initialHits.includes(M)&&a(h,u.interaction.filter(R=>!u.initialHits.includes(R)))}}r(v,h,m,p)}}return{handlePointer:o}}var ap=e=>!!(e!=null&&e.render),op=Xe.createContext(null),Yy=(e,t)=>{const i=wy((o,l)=>{const c=new P,h=new P,d=new P;function u(m=l().camera,p=h,x=l().size){const{width:M,height:_,top:E,left:A}=x,R=M/_;p.isVector3?d.copy(p):d.set(...p);const y=m.getWorldPosition(c).distanceTo(d);if(ep(m))return{width:M/m.zoom,height:_/m.zoom,top:E,left:A,factor:1,distance:y,aspect:R};{const S=m.fov*Math.PI/180,I=2*Math.tan(S/2)*y,C=I*(M/_);return{width:C,height:I,top:E,left:A,factor:M/C,distance:y,aspect:R}}}let f;const g=m=>o(p=>({performance:{...p.performance,current:m}})),v=new ee;return{set:o,get:l,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:(m=1)=>e(l(),m),advance:(m,p)=>t(m,p,l()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new Bf,pointer:v,mouse:v,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{const m=l();f&&clearTimeout(f),m.performance.current!==m.performance.min&&g(m.performance.min),f=setTimeout(()=>g(l().performance.max),m.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:u},setEvents:m=>o(p=>({...p,events:{...p.events,...m}})),setSize:(m,p,x,M,_)=>{const E=l().camera,A={width:m,height:p,top:M||0,left:_||0,updateStyle:x};o(R=>({size:A,viewport:{...R.viewport,...u(E,h,A)}}))},setDpr:m=>o(p=>{const x=np(m);return{viewport:{...p.viewport,dpr:x,initialDpr:p.viewport.initialDpr||x}}}),setFrameloop:(m="always")=>{const p=l().clock;p.stop(),p.elapsedTime=0,m!=="never"&&(p.start(),p.elapsedTime=0),o(()=>({frameloop:m}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:Xe.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(m,p,x)=>{const M=l().internal;return M.priority=M.priority+(p>0?1:0),M.subscribers.push({ref:m,priority:p,store:x}),M.subscribers=M.subscribers.sort((_,E)=>_.priority-E.priority),()=>{const _=l().internal;_!=null&&_.subscribers&&(_.priority=_.priority-(p>0?1:0),_.subscribers=_.subscribers.filter(E=>E.ref!==m))}}}}}),n=i.getState();let r=n.size,s=n.viewport.dpr,a=n.camera;return i.subscribe(()=>{const{camera:o,size:l,viewport:c,gl:h,set:d}=i.getState();if(l.width!==r.width||l.height!==r.height||c.dpr!==s){var u;r=l,s=c.dpr,Hy(o,l),h.setPixelRatio(c.dpr);const f=(u=l.updateStyle)!=null?u:typeof HTMLCanvasElement<"u"&&h.domElement instanceof HTMLCanvasElement;h.setSize(l.width,l.height,f)}o!==a&&(a=o,d(f=>({viewport:{...f.viewport,...f.viewport.getCurrentViewport(o)}})))}),i.subscribe(o=>e(o)),i},na,Zy=new Set,Jy=new Set,Ky=new Set;function Ao(e,t){if(e.size)for(const{callback:i}of e.values())i(t)}function Ur(e,t){switch(e){case"before":return Ao(Zy,t);case"after":return Ao(Jy,t);case"tail":return Ao(Ky,t)}}var wo,Co;function Ro(e,t,i){let n=t.clock.getDelta();for(t.frameloop==="never"&&typeof e=="number"&&(n=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),wo=t.internal.subscribers,na=0;na<wo.length;na++)Co=wo[na],Co.ref.current(Co.store.getState(),n,i);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),t.frameloop==="always"?1:t.internal.frames}function $y(e){let t=!1,i=!1,n,r,s;function a(c){r=requestAnimationFrame(a),t=!0,n=0,Ur("before",c),i=!0;for(const d of e.values()){var h;s=d.store.getState(),s.internal.active&&(s.frameloop==="always"||s.internal.frames>0)&&!((h=s.gl.xr)!=null&&h.isPresenting)&&(n+=Ro(c,s))}if(i=!1,Ur("after",c),n===0)return Ur("tail",c),t=!1,cancelAnimationFrame(r)}function o(c,h=1){var d;if(!c)return e.forEach(u=>o(u.store.getState(),h));(d=c.gl.xr)!=null&&d.isPresenting||!c.internal.active||c.frameloop==="never"||(h>1?c.internal.frames=Math.min(60,c.internal.frames+h):i?c.internal.frames=2:c.internal.frames=1,t||(t=!0,requestAnimationFrame(a)))}function l(c,h=!0,d,u){if(h&&Ur("before",c),d)Ro(c,d,u);else for(const f of e.values())Ro(c,f.store.getState());h&&Ur("after",c)}return{loop:a,invalidate:o,advance:l}}function jy(){const e=Xe.useContext(op);if(!e)throw new Error("R3F: Hooks can only be used within the Canvas component!");return e}function Qy(e,t=0){const i=jy(),n=i.getState().internal.subscribe,r=tp(e);return ls(()=>n(r,t,i),[t,n,i]),null}var Ih=new WeakMap;function lp(e,t){return function(i,...n){let r=Ih.get(i);return r||(r=new i,Ih.set(i,r)),e&&e(r),Promise.all(n.map(s=>new Promise((a,o)=>r.load(s,l=>{l.scene&&Object.assign(l,Vy(l.scene)),a(l)},t,l=>o(new Error(`Could not load ${s}: ${l?.message}`))))))}}function cp(e,t,i,n){const r=Array.isArray(t)?t:[t],s=Ry(lp(i,n),[e,...r],{equal:gt.equ});return Array.isArray(t)?s:s[0]}cp.preload=function(e,t,i){const n=Array.isArray(t)?t:[t];return Py(lp(i),[e,...n])};cp.clear=function(e,t){return Iy([e,...Array.isArray(t)?t:[t]])};var ur=new Map,{invalidate:Lh,advance:Dh}=$y(ur),{reconciler:ga,applyProps:$n}=Oy(ur,Wy),jn={objects:"shallow",strict:!1},ex=(e,t)=>{const i=typeof e=="function"?e(t):e;return ap(i)?i:new Kf({powerPreference:"high-performance",canvas:t,antialias:!0,alpha:!0,...e})};function tx(e,t){const i=typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement;if(t){const{width:n,height:r,top:s,left:a,updateStyle:o=i}=t;return{width:n,height:r,top:s,left:a,updateStyle:o}}else if(typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement&&e.parentElement){const{width:n,height:r,top:s,left:a}=e.parentElement.getBoundingClientRect();return{width:n,height:r,top:s,left:a,updateStyle:i}}else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)return{width:e.width,height:e.height,top:0,left:0,updateStyle:i};return{width:0,height:0,top:0,left:0}}function ix(e){const t=ur.get(e),i=t?.fiber,n=t?.store;t&&console.warn("R3F.createRoot should only be called once!");const r=typeof reportError=="function"?reportError:console.error,s=n||Yy(Lh,Dh),a=i||ga.createContainer(s,1,null,!1,null,"",r,null);t||ur.set(e,{fiber:a,store:s});let o,l=!1,c;return{configure(h={}){let{gl:d,size:u,scene:f,events:g,onCreated:v,shadows:m=!1,linear:p=!1,flat:x=!1,legacy:M=!1,orthographic:_=!1,frameloop:E="always",dpr:A=[1,2],performance:R,raycaster:y,camera:S,onPointerMissed:I}=h,C=s.getState(),N=C.gl;C.gl||C.set({gl:N=ex(d,e)});let G=C.raycaster;G||C.set({raycaster:G=new Ff});const{params:k,...H}=y||{};if(gt.equ(H,G,jn)||$n(G,{...H}),gt.equ(k,G.params,jn)||$n(G,{params:{...G.params,...k}}),!C.camera||C.camera===c&&!gt.equ(c,S,jn)){c=S;const X=S instanceof os,Q=X?S:_?new gr(0,0,0,0,.1,1e3):new Dt(75,0,.1,1e3);X||(Q.position.z=5,S&&($n(Q,S),("aspect"in S||"left"in S||"right"in S||"bottom"in S||"top"in S)&&(Q.manual=!0,Q.updateProjectionMatrix())),!C.camera&&!(S!=null&&S.rotation)&&Q.lookAt(0,0,0)),C.set({camera:Q}),G.camera=Q}if(!C.scene){let X;f!=null&&f.isScene?X=f:(X=new sl,f&&$n(X,f)),C.set({scene:tr(X)})}if(!C.xr){var J;const X=(Fe,$e)=>{const K=s.getState();K.frameloop!=="never"&&Dh(Fe,!0,K,$e)},Q=()=>{const Fe=s.getState();Fe.gl.xr.enabled=Fe.gl.xr.isPresenting,Fe.gl.xr.setAnimationLoop(Fe.gl.xr.isPresenting?X:null),Fe.gl.xr.isPresenting||Lh(Fe)},se={connect(){const Fe=s.getState().gl;Fe.xr.addEventListener("sessionstart",Q),Fe.xr.addEventListener("sessionend",Q)},disconnect(){const Fe=s.getState().gl;Fe.xr.removeEventListener("sessionstart",Q),Fe.xr.removeEventListener("sessionend",Q)}};typeof((J=N.xr)==null?void 0:J.addEventListener)=="function"&&se.connect(),C.set({xr:se})}if(N.shadowMap){const X=N.shadowMap.enabled,Q=N.shadowMap.type;if(N.shadowMap.enabled=!!m,gt.boo(m))N.shadowMap.type=2;else if(gt.str(m)){var z;const se={basic:0,percentage:1,soft:2,variance:3};N.shadowMap.type=(z=se[m])!=null?z:2}else gt.obj(m)&&Object.assign(N.shadowMap,m);(X!==N.shadowMap.enabled||Q!==N.shadowMap.type)&&(N.shadowMap.needsUpdate=!0)}const B=Qf();B&&("enabled"in B?B.enabled=!M:"legacyMode"in B&&(B.legacyMode=M)),l||$n(N,{outputEncoding:p?3e3:3001,toneMapping:x?0:4}),C.legacy!==M&&C.set(()=>({legacy:M})),C.linear!==p&&C.set(()=>({linear:p})),C.flat!==x&&C.set(()=>({flat:x})),d&&!gt.fun(d)&&!ap(d)&&!gt.equ(d,N,jn)&&$n(N,d),g&&!C.events.handlers&&C.set({events:g(s)});const q=tx(e,u);return gt.equ(q,C.size,jn)||C.setSize(q.width,q.height,q.updateStyle,q.top,q.left),A&&C.viewport.dpr!==np(A)&&C.setDpr(A),C.frameloop!==E&&C.setFrameloop(E),C.onPointerMissed||C.set({onPointerMissed:I}),R&&!gt.equ(R,C.performance,jn)&&C.set(X=>({performance:{...X.performance,...R}})),o=v,l=!0,this},render(h){return l||this.configure(),ga.updateContainer((0,At.jsx)(nx,{store:s,children:h,onCreated:o,rootElement:e}),a,null,()=>{}),s},unmount(){hp(e)}}}function nx({store:e,children:t,onCreated:i,rootElement:n}){return ls(()=>{const r=e.getState();r.set(s=>({internal:{...s.internal,active:!0}})),i&&i(r),e.getState().events.connected||r.events.connect==null||r.events.connect(n)},[]),(0,At.jsx)(op.Provider,{value:e,children:t})}function hp(e,t){const i=ur.get(e),n=i?.fiber;if(n){const r=i?.store.getState();r&&(r.internal.active=!1),ga.updateContainer(null,n,null,()=>{r&&setTimeout(()=>{try{var s,a,o,l;r.events.disconnect==null||r.events.disconnect(),(s=r.gl)==null||(a=s.renderLists)==null||a.dispose==null||a.dispose(),(o=r.gl)==null||o.forceContextLoss==null||o.forceContextLoss(),(l=r.gl)!=null&&l.xr&&r.xr.disconnect(),ky(r),ur.delete(e),t&&t(e)}catch{}},500)})}}ga.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:"18.3.1"});var Po={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function rx(e){const{handlePointer:t}=qy(e);return{priority:1,enabled:!0,compute(i,n,r){n.pointer.set(i.offsetX/n.size.width*2-1,-(i.offsetY/n.size.height)*2+1),n.raycaster.setFromCamera(n.pointer,n.camera)},connected:void 0,handlers:Object.keys(Po).reduce((i,n)=>({...i,[n]:t(n)}),{}),update:()=>{var i;const{events:n,internal:r}=e.getState();(i=r.lastEvent)!=null&&i.current&&n.handlers&&n.handlers.onPointerMove(r.lastEvent.current)},connect:i=>{var n;const{set:r,events:s}=e.getState();s.disconnect==null||s.disconnect(),r(a=>({events:{...a.events,connected:i}})),Object.entries((n=s.handlers)!=null?n:[]).forEach(([a,o])=>{const[l,c]=Po[a];i.addEventListener(l,o,{passive:c})})},disconnect:()=>{const{set:i,events:n}=e.getState();if(n.connected){var r;Object.entries((r=n.handlers)!=null?r:[]).forEach(([s,a])=>{if(n&&n.connected instanceof HTMLElement){const[o]=Po[s];n.connected.removeEventListener(o,a)}}),i(s=>({events:{...s.events,connected:void 0}}))}}}}var sx=Object.defineProperty,ax=Object.defineProperties,ox=Object.getOwnPropertyDescriptors,Uh=Object.getOwnPropertySymbols,lx=Object.prototype.hasOwnProperty,cx=Object.prototype.propertyIsEnumerable,Nh=(e,t,i)=>t in e?sx(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Oh=(e,t)=>{for(var i in t||(t={}))lx.call(t,i)&&Nh(e,i,t[i]);if(Uh)for(var i of Uh(t))cx.call(t,i)&&Nh(e,i,t[i]);return e},hx=(e,t)=>ax(e,ox(t)),Fh,Bh,Mx=typeof window<"u"&&((Fh=window.document)!=null&&Fh.createElement||((Bh=window.navigator)==null?void 0:Bh.product)==="ReactNative")?Xe.useLayoutEffect:Xe.useEffect;function up(e,t,i){if(!e)return;if(i(e)===!0)return e;let n=t?e.return:e.child;for(;n;){const r=up(n,t,i);if(r)return r;n=t?null:n.sibling}}function dp(e){try{return Object.defineProperties(e,{_currentRenderer:{get(){return null},set(){}},_currentRenderer2:{get(){return null},set(){}}})}catch{return e}}var zh=console.error;console.error=function(){const e=[...arguments].join("");if(e?.startsWith("Warning:")&&e.includes("useContext")){console.error=zh;return}return zh.apply(this,arguments)};var Ol=dp(Xe.createContext(null)),fp=class extends Xe.Component{render(){return Xe.createElement(Ol.Provider,{value:this._reactInternals},this.props.children)}};function ux(){const e=Xe.useContext(Ol);if(e===null)throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");const t=Xe.useId();return Xe.useMemo(()=>{for(const i of[e,e?.alternate]){if(!i)continue;const n=up(i,!1,r=>{let s=r.memoizedState;for(;s;){if(s.memoizedState===t)return!0;s=s.next}});if(n)return n}},[e,t])}function dx(){const e=ux(),[t]=Xe.useState(()=>new Map);t.clear();let i=e;for(;i;){if(i.type&&typeof i.type=="object"){const n=i.type._context===void 0&&i.type.Provider===i.type?i.type:i.type._context;n&&n!==Ol&&!t.has(n)&&t.set(n,Xe.useContext(dp(n)))}i=i.return}return t}function fx(){const e=dx();return Xe.useMemo(()=>Array.from(e.keys()).reduce((t,i)=>n=>Xe.createElement(t,null,Xe.createElement(i.Provider,hx(Oh({},n),{value:e.get(i)}))),t=>Xe.createElement(fp,Oh({},t))),[e])}var px=Xe.forwardRef(function({children:t,fallback:i,resize:n,style:r,gl:s,events:a=rx,eventSource:o,eventPrefix:l,shadows:c,linear:h,flat:d,legacy:u,orthographic:f,frameloop:g,dpr:v,performance:m,raycaster:p,camera:x,scene:M,onPointerMissed:_,onCreated:E,...A},R){Xe.useMemo(()=>Ny(d_),[]);const y=fx(),[S,I]=Ep({scroll:!0,debounce:{scroll:50,resize:0},...n}),C=Xe.useRef(null),N=Xe.useRef(null);Xe.useImperativeHandle(R,()=>C.current);const G=tp(_),[k,H]=Xe.useState(!1),[J,z]=Xe.useState(!1);if(k)throw k;if(J)throw J;const B=Xe.useRef(null);return ls(()=>{const q=C.current;I.width>0&&I.height>0&&q&&(B.current||(B.current=ix(q)),B.current.configure({gl:s,events:a,shadows:c,linear:h,flat:d,legacy:u,orthographic:f,frameloop:g,dpr:v,performance:m,raycaster:p,camera:x,scene:M,size:I,onPointerMissed:(...X)=>G.current==null?void 0:G.current(...X),onCreated:X=>{X.events.connect==null||X.events.connect(o?Fy(o)?o.current:o:N.current),l&&X.setEvents({compute:(Q,se)=>{const Fe=Q[l+"X"],$e=Q[l+"Y"];se.pointer.set(Fe/se.size.width*2-1,-($e/se.size.height)*2+1),se.raycaster.setFromCamera(se.pointer,se.camera)}}),E?.(X)}}),B.current.render((0,At.jsx)(y,{children:(0,At.jsx)(ip,{set:z,children:(0,At.jsx)(Xe.Suspense,{fallback:(0,At.jsx)(By,{set:H}),children:t??null})})})))}),Xe.useEffect(()=>{const q=C.current;if(q)return()=>hp(q)},[]),(0,At.jsx)("div",{ref:N,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:o?"none":"auto",...r},...A,children:(0,At.jsx)("div",{ref:S,style:{width:"100%",height:"100%"},children:(0,At.jsx)("canvas",{ref:C,style:{display:"block"},children:i})})})}),mx=Xe.forwardRef(function(t,i){return(0,At.jsx)(fp,{children:(0,At.jsx)(px,{...t,ref:i})})}),Vh=["#0d9488","#10b981","#34d399","#6ee7b7"],gx=16;function vx(){const e=(0,Xe.useRef)([]),t=(0,Xe.useMemo)(()=>Array.from({length:gx},()=>({basePos:new P((Math.random()-.5)*10,(Math.random()-.5)*7,(Math.random()-.5)*4-1),radius:.12+Math.random()*.22,speed:.15+Math.random()*.25,phase:Math.random()*Math.PI*2,color:Vh[Math.floor(Math.random()*Vh.length)]})),[]);return Qy(i=>{const n=i.clock.getElapsedTime();t.forEach((r,s)=>{const a=e.current[s];a&&(a.position.x=r.basePos.x+Math.sin(n*r.speed+r.phase)*.8,a.position.y=r.basePos.y+Math.cos(n*r.speed*.8+r.phase)*.6,a.rotation.x=n*r.speed*.5,a.rotation.y=n*r.speed*.4)})}),(0,At.jsx)(At.Fragment,{children:t.map((i,n)=>(0,At.jsxs)("mesh",{ref:r=>{e.current[n]=r},position:i.basePos,children:[(0,At.jsx)("icosahedronGeometry",{args:[i.radius,0]}),(0,At.jsx)("meshStandardMaterial",{color:i.color,roughness:.4,metalness:.1,transparent:!0,opacity:.55})]},n))})}function Sx(){return(0,At.jsxs)(mx,{className:"!fixed !inset-0 !z-[-1] pointer-events-none",camera:{position:[0,0,8],fov:45},gl:{alpha:!0,antialias:!0},style:{position:"fixed",inset:0,zIndex:-1},children:[(0,At.jsx)("ambientLight",{intensity:.9}),(0,At.jsx)("directionalLight",{position:[3,3,5],intensity:.6}),(0,At.jsx)(vx,{})]})}export{Sx as default};
