(()=>{function Jh(){return[{id:"demo-1",title:"\u81F4\u591C\u7A7A\u4E0B\u7684\u4F60",text:"\u613F\u4F60\u5728\u5FD9\u788C\u7684\u65E5\u5E38\u91CC\uFF0C\u4F9D\u7136\u4FDD\u6709\u4E00\u7247\u5C5E\u4E8E\u81EA\u5DF1\u7684\u661F\u5149\u4E0E\u6E29\u67D4\u3002",imageDataUrl:null,imageElement:null,layout:"letter",paperTone:"ivory",imageFit:"contain",origamiShape:"inherit"},{id:"demo-2",title:"\u90A3\u4E9B\u95EA\u95EA\u53D1\u5149\u7684\u65E5\u5B50",text:"\u6BCF\u4E00\u6B21\u62AC\u5934\u4EF0\u671B\u661F\u7A7A\uFF0C\u90FD\u4F1A\u60F3\u8D77\u6211\u4EEC\u4E00\u8D77\u8D70\u8FC7\u7684\u8DEF\u4E0E\u5E76\u80A9\u770B\u8FC7\u7684\u98CE\u666F\u3002",imageDataUrl:null,imageElement:null,layout:"letter",paperTone:"sky",imageFit:"contain",origamiShape:"inherit"},{id:"demo-3",title:"\u98CE\u8D77\u65F6\uFF0C\u8BB0\u5F97\u5FAE\u7B11",text:"\u628A\u6240\u6709\u7684\u5FC3\u4E8B\u6298\u6210\u5343\u7EB8\u9E64\u4E0E\u7EB8\u98DE\u673A\uFF0C\u968F\u665A\u98CE\u98DE\u5411\u8FDC\u65B9\uFF0C\u53EA\u7559\u4E0B\u8F7B\u76C8\u4E0E\u671F\u5F85\u3002",imageDataUrl:null,imageElement:null,layout:"letter",paperTone:"lavender",imageFit:"contain",origamiShape:"inherit"}]}var pa=class{constructor(t=Jh()){this.cards=t.map(e=>({...e})),this.nextSeq=100,this.settings={holdDuration:3,origamiShape:"auto",envelopeTheme:"pearl-ivory",endingTitle:"\u613F\u6240\u6709\u6E29\u67D4\u4E0E\u661F\u5149\uFF0C\u90FD\u5954\u4F60\u800C\u6765",endingSignature:"\u2014\u2014 \u81F4\u6700\u7279\u522B\u7684\u4F60",cinemaHideControls:!0,autoFullscreen:!1,aspectRatio:"auto"}}_genId(){return this.nextSeq+=1,`card-${Date.now()}-${this.nextSeq}`}addTextCard({title:t="",text:e="",paperTone:n="ivory",origamiShape:i="inherit"}={}){let r=String(t).trim(),a=String(e).trim();if(!r&&!a)return null;let o={id:this._genId(),title:r,text:a,imageDataUrl:null,imageElement:null,layout:"letter",paperTone:n,imageFit:"contain",origamiShape:i};return this.cards.push(o),o}addImageCard({imageDataUrl:t,imageElement:e=null,title:n="",text:i="",layout:r="polaroid",paperTone:a="ivory",imageFit:o="contain",origamiShape:l="inherit"}){if(!t)return null;let c={id:this._genId(),title:String(n).trim(),text:String(i).trim(),imageDataUrl:t,imageElement:e,layout:r,paperTone:a,imageFit:o,origamiShape:l};return this.cards.push(c),c}updateCard(t,e){let n=this.cards.findIndex(i=>i.id===t);return n===-1?null:(this.cards[n]={...this.cards[n],...e},this.cards[n])}removeCard(t){let e=this.cards.findIndex(n=>n.id===t);return e===-1?!1:(this.cards.splice(e,1),!0)}moveCard(t,e){let n=this.cards.findIndex(a=>a.id===t);if(n===-1)return!1;let i=n+e;if(i<0||i>=this.cards.length)return!1;let[r]=this.cards.splice(n,1);return this.cards.splice(i,0,r),!0}clearCards(){this.cards=[]}loadDemoCards(){this.cards=Jh()}exportConfig(){return{version:1,savedAt:new Date().toISOString(),settings:{...this.settings},cards:this.cards.map(t=>({id:t.id,title:t.title||"",text:t.text||"",imageDataUrl:t.imageDataUrl||null,layout:t.layout||(t.imageDataUrl?"polaroid":"letter"),paperTone:t.paperTone||"ivory",imageFit:t.imageFit||"contain",origamiShape:t.origamiShape||"inherit"}))}}importConfig(t){if(!t||typeof t!="object"||!Array.isArray(t.cards))return!1;let e=t.settings&&typeof t.settings=="object"?t.settings:{},n=Number(e.holdDuration),i=["auto","plane","butterfly","crane"],r=["pearl-ivory","midnight-gold","lavender-mist"],a=["auto","9:16"];this.settings={holdDuration:Number.isFinite(n)?Math.max(1,Math.min(8,n)):this.settings.holdDuration,origamiShape:i.includes(e.origamiShape)?e.origamiShape:this.settings.origamiShape,envelopeTheme:r.includes(e.envelopeTheme)?e.envelopeTheme:this.settings.envelopeTheme,endingTitle:typeof e.endingTitle=="string"&&e.endingTitle.trim()?e.endingTitle.trim():this.settings.endingTitle,endingSignature:typeof e.endingSignature=="string"?e.endingSignature.trim():this.settings.endingSignature,cinemaHideControls:typeof e.cinemaHideControls=="boolean"?e.cinemaHideControls:this.settings.cinemaHideControls,autoFullscreen:typeof e.autoFullscreen=="boolean"?e.autoFullscreen:this.settings.autoFullscreen,aspectRatio:a.includes(e.aspectRatio)?e.aspectRatio:this.settings.aspectRatio};let o=["ivory","sky","lavender","blush"],l=["inherit","plane","butterfly","crane"];return this.cards=t.cards.filter(c=>c&&typeof c=="object"&&(c.imageDataUrl||c.title||c.text)).map(c=>{let h=typeof c.imageDataUrl=="string"&&c.imageDataUrl.startsWith("data:");return{id:typeof c.id=="string"&&c.id?c.id:this._genId(),title:typeof c.title=="string"?c.title.trim():"",text:typeof c.text=="string"?c.text.trim():"",imageDataUrl:h?c.imageDataUrl:null,imageElement:null,layout:c.layout==="polaroid"||h?"polaroid":"letter",paperTone:o.includes(c.paperTone)?c.paperTone:"ivory",imageFit:c.imageFit==="cover"?"cover":"contain",origamiShape:l.includes(c.origamiShape)?c.origamiShape:"inherit"}}),!0}};var Sp="starry-envelope-db";var Ts="configs",ma="starry-envelope-config-v1";function Kh(){return new Promise((s,t)=>{if(typeof indexedDB>"u"){t(new Error("IndexedDB unavailable"));return}let e=indexedDB.open(Sp,1);e.onupgradeneeded=()=>{let n=e.result;n.objectStoreNames.contains(Ts)||n.createObjectStore(Ts)},e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error||new Error("Failed to open IndexedDB"))})}async function Qh(s){try{let t=await Kh();return await new Promise((e,n)=>{let i=t.transaction(Ts,"readwrite");i.objectStore(Ts).put(s,ma),i.oncomplete=()=>e(),i.onerror=()=>n(i.error||new Error("IndexedDB write failed"))}),t.close(),{storage:"indexeddb"}}catch(t){if(typeof localStorage<"u")return localStorage.setItem(ma,JSON.stringify(s)),{storage:"localstorage"};throw t}}async function jh(){try{let s=await Kh(),t=await new Promise((e,n)=>{let r=s.transaction(Ts,"readonly").objectStore(Ts).get(ma);r.onsuccess=()=>e(r.result||null),r.onerror=()=>n(r.error||new Error("IndexedDB read failed"))});if(s.close(),t)return t}catch{}if(typeof localStorage<"u"){let s=localStorage.getItem(ma);if(s)return JSON.parse(s)}return null}var Tu=0,uc=1,wu=2;var dc=1,Au=2,kn=3,si=0,en=1,ze=2,oi=0,$i=1,zn=2,fc=3,pc=4,Ru=5,Si=100,Cu=101,Pu=102,Iu=103,Lu=104,Du=200,Uu=201,Fu=202,Nu=203,za=204,Ha=205,Ou=206,Bu=207,ku=208,zu=209,Hu=210,Vu=211,Gu=212,Wu=213,Xu=214,uo=0,fo=1,po=2,Ji=3,mo=4,go=5,_o=6,vo=7,mc=0,qu=1,Yu=2,li=0,Zu=1,$u=2,Ju=3,Ku=4,Qu=5,ju=6,td=7;var gc=300,as=301,os=302,xo=303,yo=304,Hr=306,Va=1e3,Mi=1001,Ga=1002,Tn=1003,ed=1004;var Vr=1005;var Xe=1006,Mo=1007;var Hn=1008;var Vn=1009,_c=1010,vc=1011,$s=1012,So=1013,Ri=1014,Gn=1015,Ci=1016,bo=1017,Eo=1018,ls=1020,xc=35902,yc=1021,Mc=1022,ln=1023,Sc=1024,bc=1025,Zi=1026,Ki=1027,Ec=1028,To=1029,Tc=1030,wo=1031;var Ao=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,Ro=35840,Co=35841,Po=35842,Io=35843,Lo=36196,Do=37492,Uo=37496,Fo=37808,No=37809,Oo=37810,Bo=37811,ko=37812,zo=37813,Ho=37814,Vo=37815,Go=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,Zo=37821,Yr=36492,$o=36494,Jo=36495,wc=36283,Ko=36284,Qo=36285,jo=36286;var br=2300,Wa=2301,ka=2302,ic=2400,sc=2401,rc=2402;var nd=3200,id=3201;var Ac=0,sd=1,ci="",oe="srgb",Qi="srgb-linear",Er="linear",ie="srgb";var Yi=7680;var ac=519,rd=512,ad=513,od=514,Rc=515,ld=516,cd=517,hd=518,ud=519,Xa=35044;var Cc="300 es",Nn=2e3,Tr=2001;var ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,Mr=Math.PI/180,Gs=180/Math.PI;function ni(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Gt(s,t,e){return Math.max(t,Math.min(e,s))}function Pc(s,t){return(s%t+t)%t}function bp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ep(s,t,e){return s!==t?(e-s)/(t-s):0}function Sr(s,t,e){return(1-e)*s+e*t}function Tp(s,t,e,n){return Sr(s,t,1-Math.exp(-e*n))}function wp(s,t=1){return t-Math.abs(Pc(s,t*2)-t)}function Ap(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Rp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Cp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Pp(s,t){return s+Math.random()*(t-s)}function Ip(s){return s*(.5-Math.random())}function Lp(s){s!==void 0&&(tu=s);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dp(s){return s*Mr}function Up(s){return s*Gs}function Fp(s){return(s&s-1)===0&&s!==0}function Np(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Op(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Bp(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ce={DEG2RAD:Mr,RAD2DEG:Gs,generateUUID:ni,clamp:Gt,euclideanModulo:Pc,mapLinear:bp,inverseLerp:Ep,lerp:Sr,damp:Tp,pingpong:wp,smoothstep:Ap,smootherstep:Rp,randInt:Cp,randFloat:Pp,randFloatSpread:Ip,seededRandom:Lp,degToRad:Dp,radToDeg:Up,isPowerOfTwo:Fp,ceilPowerOfTwo:Np,floorPowerOfTwo:Op,setQuaternionFromProperEuler:Bp,normalize:ee,denormalize:Un},Nt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],b=i[4],S=i[7],A=i[2],C=i[5],w=i[8];return r[0]=a*g+o*y+l*A,r[3]=a*m+o*b+l*C,r[6]=a*p+o*S+l*w,r[1]=c*g+h*y+u*A,r[4]=c*m+h*b+u*C,r[7]=c*p+h*S+u*w,r[2]=d*g+f*y+_*A,r[5]=d*m+f*b+_*C,r[8]=d*p+f*S+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new Ot;function Ic(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dd(){let s=wr("canvas");return s.style.display="block",s}var eu={};function Pi(s){s in eu||(eu[s]=!0,console.warn(s))}function fd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function md(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var nu=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kp(){let s={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Er:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Qi]:{primaries:t,whitePoint:n,transfer:Er,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oe},outputColorSpaceConfig:{drawingBufferColorSpace:oe}},[oe]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oe}}}),s}var Zt=kp();function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ws,qa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ws===void 0&&(ws=wr("canvas")),ws.width=t.width,ws.height=t.height;let n=ws.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ws}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zp=0,Ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fl(i[a].image)):r.push(Fl(i[a]))}else r=Fl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hp=0,an=class s extends ri{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Mi,i=Mi,r=Xe,a=Hn,o=ln,l=Vn,c=s.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=ni(),this.name="",this.source=new Ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=gc;an.DEFAULT_ANISOTROPY=1;var ne=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,S=(f+1)/2,A=(p+1)/2,C=(h+d)/4,w=(u+g)/4,T=(_+m)/4;return b>S&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=C/n,r=w/n):S>A?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=C/i,r=T/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=T/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ya=class extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new an(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ws(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends Ya{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Za=class extends an{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var le=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-o,p=l*d+c*f+h*_+u*g,y=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let A=Math.sqrt(b),C=Math.atan2(A,p*y);m=Math.sin(m*C)/A,o=Math.sin(o*C)/A}let S=o*y;if(l=l*m+d*S,c=c*m+f*S,h=h*m+_*S,u=u*m+g*S,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nl=new I,su=new le,bi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),_a.subVectors(this.max,fr),As.subVectors(t.a,fr),Rs.subVectors(t.b,fr),Cs.subVectors(t.c,fr),mi.subVectors(Rs,As),gi.subVectors(Cs,Rs),Gi.subVectors(As,Cs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Gi.z,Gi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Gi.z,0,-Gi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Gi.y,Gi.x,0];return!Ol(e,As,Rs,Cs,_a)||(e=[1,0,0,0,1,0,0,0,1],!Ol(e,As,Rs,Cs,_a))?!1:(va.crossVectors(mi,gi),e=[va.x,va.y,va.z],Ol(e,As,Rs,Cs,_a))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Jn=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,ga=new bi,As=new I,Rs=new I,Cs=new I,mi=new I,gi=new I,Gi=new I,fr=new I,_a=new I,va=new I,Wi=new I;function Ol(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wi.fromArray(s,r);let o=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vp=new bi,pr=new I,Bl=new I,ji=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Bl)),this.expandByPoint(pr.copy(t.center).sub(Bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new I,kl=new I,xa=new I,_i=new I,zl=new I,ya=new I,Hl=new I,Rr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kl.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(kl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(xa),o=_i.dot(this.direction),l=-_i.dot(xa),c=_i.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(kl).addScaledVector(xa,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,i,r){zl.subVectors(e,t),ya.subVectors(n,t),Hl.crossVectors(zl,ya);let a=this.direction.dot(Hl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);let l=o*this.direction.dot(ya.crossVectors(_i,ya));if(l<0)return null;let c=o*this.direction.dot(zl.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(Hl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),a=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gp,t,Wp)}lookAt(t,e,n){let i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),vi.crossVectors(n,mn),vi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),vi.crossVectors(n,mn)),vi.normalize(),Ma.crossVectors(mn,vi),i[0]=vi.x,i[4]=Ma.x,i[8]=mn.x,i[1]=vi.y,i[5]=Ma.y,i[9]=mn.y,i[2]=vi.z,i[6]=Ma.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],b=n[7],S=n[11],A=n[15],C=i[0],w=i[4],T=i[8],v=i[12],x=i[1],P=i[5],F=i[9],U=i[13],B=i[2],q=i[6],z=i[10],Z=i[14],H=i[3],et=i[7],at=i[11],ht=i[15];return r[0]=a*C+o*x+l*B+c*H,r[4]=a*w+o*P+l*q+c*et,r[8]=a*T+o*F+l*z+c*at,r[12]=a*v+o*U+l*Z+c*ht,r[1]=h*C+u*x+d*B+f*H,r[5]=h*w+u*P+d*q+f*et,r[9]=h*T+u*F+d*z+f*at,r[13]=h*v+u*U+d*Z+f*ht,r[2]=_*C+g*x+m*B+p*H,r[6]=_*w+g*P+m*q+p*et,r[10]=_*T+g*F+m*z+p*at,r[14]=_*v+g*U+m*Z+p*ht,r[3]=y*C+b*x+S*B+A*H,r[7]=y*w+b*P+S*q+A*et,r[11]=y*T+b*F+S*z+A*at,r[15]=y*v+b*U+S*Z+A*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,b=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,S=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,A=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,C=e*y+n*b+i*S+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return t[0]=y*w,t[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*w,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*w,t[4]=b*w,t[5]=(h*m*r-_*d*r+_*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*p-e*l*p)*w,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*w,t[8]=S*w,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*p-e*u*p)*w,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*w,t[12]=A*w,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*w,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,g=a*h,m=a*u,p=o*u,y=l*c,b=l*h,S=l*u,A=n.x,C=n.y,w=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+S)*A,i[2]=(_-b)*A,i[3]=0,i[4]=(f-S)*C,i[5]=(1-(d+p))*C,i[6]=(m+y)*C,i[7]=0,i[8]=(_+b)*w,i[9]=(m-y)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ps.set(i[0],i[1],i[2]).length(),a=Ps.set(i[4],i[5],i[6]).length(),o=Ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);let c=1/r,h=1/a,u=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Nn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,_;if(o===Nn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Tr)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Nn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h,_,g;if(o===Nn)_=(a+r)*u,g=-2*u;else if(o===Tr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ps=new I,Ln=new se,Gp=new I(0,0,0),Wp=new I(1,1,1),vi=new I,Ma=new I,mn=new I,ru=new se,au=new le,Be=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Be.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xp=0,ou=new I,Is=new le,Qn=new se,Sa=new I,mr=new I,qp=new I,Yp=new le,lu=new I(1,0,0),cu=new I(0,1,0),hu=new I(0,0,1),uu={type:"added"},Zp={type:"removed"},Ls={type:"childadded",child:null},Vl={type:"childremoved",child:null},Le=class s extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Be,n=new le,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ot}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,e){return Is.setFromAxisAngle(t,e),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(lu,t)}rotateY(t){return this.rotateOnAxis(cu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lu,t)}translateY(t){return this.translateOnAxis(cu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(mr,Sa,this.up):Qn.lookAt(Sa,mr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(Qn),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zp),Vl.child=t,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Yp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new I(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new I,jn=new I,Gl=new I,ti=new I,Ds=new I,Us=new I,du=new I,Wl=new I,Xl=new I,ql=new I,Yl=new ne,Zl=new ne,$l=new ne,ei=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Dn.subVectors(t,e),i.cross(Dn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Dn.subVectors(i,e),jn.subVectors(n,e),Gl.subVectors(t,e);let a=Dn.dot(Dn),o=Dn.dot(jn),l=Dn.dot(Gl),c=jn.dot(jn),h=jn.dot(Gl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Yl.setScalar(0),Zl.setScalar(0),$l.setScalar(0),Yl.fromBufferAttribute(t,e),Zl.fromBufferAttribute(t,n),$l.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yl,r.x),a.addScaledVector(Zl,r.y),a.addScaledVector($l,r.z),a}static isFrontFacing(t,e,n,i){return Dn.subVectors(n,e),jn.subVectors(t,e),Dn.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Dn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ds.subVectors(i,n),Us.subVectors(r,n),Wl.subVectors(t,n);let l=Ds.dot(Wl),c=Us.dot(Wl);if(l<=0&&c<=0)return e.copy(n);Xl.subVectors(t,i);let h=Ds.dot(Xl),u=Us.dot(Xl);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ds,a);ql.subVectors(t,r);let f=Ds.dot(ql),_=Us.dot(ql);if(_>=0&&f<=_)return e.copy(r);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Us,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return du.subVectors(r,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(du,o);let p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(Ds,a).addScaledVector(Us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Jl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var At=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Pc(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jl(a,r,t+1/3),this.g=Jl(a,r,t),this.b=Jl(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){let n=gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return Zt.fromWorkingColorSpace(We.copy(this),t),Math.round(Gt(We.r*255,0,255))*65536+Math.round(Gt(We.g*255,0,255))*256+Math.round(Gt(We.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(We.copy(this),e);let n=We.r,i=We.g,r=We.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=oe){Zt.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,i=We.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(ba);let n=Sr(xi.h,ba.h,e),i=Sr(xi.s,ba.s,e),r=Sr(xi.l,ba.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new At;At.NAMES=gd;var $p=0,Bn=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=$i,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ha,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ha&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ts=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new I,Ea=new Nt,Jp=0,ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ea.fromBufferAttribute(this,e),Ea.applyMatrix3(t),this.setXY(e,Ea.x,Ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}};var Pr=class extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ir=class extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var On=class extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kp=0,En=new se,Kl=new Le,Fs=new I,gn=new bi,gr=new bi,Ie=new I,ke=class s extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?Ir:Pr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new On(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(gn.min,gr.min),gn.expandByPoint(Ie),Ie.addVectors(gn.max,gr.max),gn.expandByPoint(Ie)):(gn.expandByPoint(gr.min),gn.expandByPoint(gr.max))}gn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Fs.fromBufferAttribute(t,c),Ie.add(Fs)),i=Math.max(i,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new I,l[T]=new I;let c=new I,h=new I,u=new I,d=new Nt,f=new Nt,_=new Nt,g=new I,m=new I;function p(T,v,x){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,v),_.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),o[T].add(g),o[v].add(g),o[x].add(g),l[T].add(m),l[v].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let T=0,v=y.length;T<v;++T){let x=y[T],P=x.start,F=x.count;for(let U=P,B=P+F;U<B;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new I,S=new I,A=new I,C=new I;function w(T){A.fromBufferAttribute(i,T),C.copy(A);let v=o[T];b.copy(v),b.sub(A.multiplyScalar(A.dot(v))).normalize(),S.crossVectors(C,v);let P=S.dot(l[T])<0?-1:1;a.setXYZW(T,b.x,b.y,b.z,P)}for(let T=0,v=y.length;T<v;++T){let x=y[T],P=x.start,F=x.count;for(let U=P,B=P+F;U<B;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fu=new se,Xi=new Rr,Ta=new ji,pu=new I,wa=new I,Aa=new I,Ra=new I,Ql=new I,Ca=new I,mu=new I,Pa=new I,de=class extends Le{constructor(t=new ke,e=new ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ql.fromBufferAttribute(u,t),a?Ca.addScaledVector(Ql,h):Ca.addScaledVector(Ql.sub(e),h))}e.add(Ca)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Ta.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Ta,pu)===null||Xi.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=b;S<A;S+=3){let C=o.getX(S),w=o.getX(S+1),T=o.getX(S+2);i=Ia(this,p,t,n,c,h,u,C,w,T),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);i=Ia(this,a,t,n,c,h,u,y,b,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=b;S<A;S+=3){let C=S,w=S+1,T=S+2;i=Ia(this,p,t,n,c,h,u,C,w,T),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let y=m,b=m+1,S=m+2;i=Ia(this,a,t,n,c,h,u,y,b,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Qp(s,t,e,n,i,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===si,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Pa);return c<e.near||c>e.far?null:{distance:c,point:Pa.clone(),object:s}}function Ia(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,wa),s.getVertexPosition(l,Aa),s.getVertexPosition(c,Ra);let h=Qp(s,t,e,n,wa,Aa,Ra,mu);if(h){let u=new I;ei.getBarycoord(mu,wa,Aa,Ra,u),i&&(h.uv=ei.getInterpolatedAttribute(i,o,l,c,u,new Nt)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,l,c,u,new Nt)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};ei.getNormal(wa,Aa,Ra,d.normal),h.face=d,h.barycoord=u}return h}var Xs=class s extends ke{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(u,2));function _(g,m,p,y,b,S,A,C,w,T,v){let x=S/w,P=A/T,F=S/2,U=A/2,B=C/2,q=w+1,z=T+1,Z=0,H=0,et=new I;for(let at=0;at<z;at++){let ht=at*P-U;for(let xt=0;xt<q;xt++){let Ut=xt*x-F;et[g]=Ut*y,et[m]=ht*b,et[p]=B,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[p]=C>0?1:-1,h.push(et.x,et.y,et.z),u.push(xt/w),u.push(1-at/T),Z+=1}}for(let at=0;at<T;at++)for(let ht=0;ht<w;ht++){let xt=d+ht+q*at,Ut=d+ht+q*(at+1),X=d+(ht+1)+q*(at+1),tt=d+(ht+1)+q*at;l.push(xt,Ut,tt),l.push(Ut,X,tt),H+=6}o.addGroup(f,H,v),f+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=cs(s[e]);for(let i in n)t[i]=n[i]}return t}function jp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Lc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var _d={clone:cs,merge:Ye},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Lr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new I,gu=new Nt,_u=new Nt,Ne=class extends Lr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,_u),e.subVectors(_u,gu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ns=-90,Os=1,$a=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(Ns,Os,t,e);i.layers=this.layers,this.add(i);let r=new Ne(Ns,Os,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Ns,Os,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Ns,Os,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Ns,Os,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Ns,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Dr=class extends an{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ja=class extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Dr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xs(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:oi});r.uniforms.tEquirect.value=e;let a=new de(i,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Xe),new $a(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Oe=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},nm={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var es=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ka=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new I,Ur=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ys=class extends Bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bs,_r=new I,ks=new I,zs=new I,Hs=new Nt,vr=new Nt,vd=new se,La=new I,xr=new I,Da=new I,vu=new Nt,jl=new Nt,xu=new Nt,Fr=class extends Le{constructor(t=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ka(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Ur(n,3,0,!1)),Bs.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),vd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-zs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ua(La.set(-.5,-.5,0),zs,a,ks,i,r),Ua(xr.set(.5,-.5,0),zs,a,ks,i,r),Ua(Da.set(.5,.5,0),zs,a,ks,i,r),vu.set(0,0),jl.set(1,0),xu.set(1,1);let o=t.ray.intersectTriangle(La,xr,Da,!1,_r);if(o===null&&(Ua(xr.set(-.5,.5,0),zs,a,ks,i,r),jl.set(0,1),o=t.ray.intersectTriangle(La,Da,xr,!1,_r),o===null))return;let l=t.ray.origin.distanceTo(_r);l<t.near||l>t.far||e.push({distance:l,point:_r.clone(),uv:ei.getInterpolation(_r,La,xr,Da,vu,jl,xu,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ua(s,t,e,n,i,r){Hs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(vr.x=r*Hs.x-i*Hs.y,vr.y=i*Hs.x+r*Hs.y):vr.copy(Hs),s.copy(t),s.x+=vr.x,s.y+=vr.y,s.applyMatrix4(vd)}var tc=new I,im=new I,sm=new Ot,Fn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=tc.subVectors(n,e).cross(im.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sm.getNormalMatrix(t),i=this.coplanarPoint(tc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new ji,Fa=new I,Zs=class{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],b=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-f,S-p).normalize(),n[1].setComponents(l+r,d+c,m+f,S+p).normalize(),n[2].setComponents(l+a,d+h,m+_,S+y).normalize(),n[3].setComponents(l-a,d-h,m-_,S-y).normalize(),n[4].setComponents(l-o,d-u,m-g,S-b).normalize(),e===Nn)n[5].setComponents(l+o,d+u,m+g,S+b).normalize();else if(e===Tr)n[5].setComponents(o,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Fa.x=i.normal.x>0?t.max.x:t.min.x,Fa.y=i.normal.y>0?t.max.y:t.min.y,Fa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ai=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yu=new se,oc=new Rr,Na=new ji,Oa=new I,Ei=class extends Le{constructor(t=new ke,e=new ai){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(i),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;yu.copy(i).invert(),oc.copy(t.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){let m=c.getX(_);Oa.fromBufferAttribute(u,m),Mu(Oa,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Oa.fromBufferAttribute(u,_),Mu(Oa,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mu(s,t,e,n,i,r,a){let o=oc.distanceSqToPoint(s);if(o<e){let l=new I;oc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var we=class extends an{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nr=class extends an{constructor(t,e,n,i,r,a,o,l,c,h=Zi){if(h!==Zi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=Ri),n===void 0&&h===Ki&&(n=ls),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var qe=class s extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let b=0;b<c;b++){let S=b*u-r;_.push(S,-y,0),g.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+c*p,S=y+c*(p+1),A=y+1+c*(p+1),C=y+1+c*p;f.push(b,S,C),f.push(S,A,C)}this.setIndex(f),this.setAttribute("position",new On(_,3)),this.setAttribute("normal",new On(g,3)),this.setAttribute("uv",new On(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ti=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ac,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qa=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ba(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function rm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ns=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},to=class extends ns{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-n;break;case rc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sc:a=t,l=2*n-e;break;case rc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*m+(1.5+f)*g+.5*_,S=f*m-f*g;for(let A=0;A!==o;++A)r[A]=p*a[h+A]+y*a[c+A]+b*a[l+A]+S*a[u+A];return r}},eo=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},no=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new to(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return ka}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&rm(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Wa;var wi=class extends wn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=br;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends wn{};io.prototype.ValueTypeName="color";var so=class extends wn{};so.prototype.ValueTypeName="number";var ro=class extends ns{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)le.slerpFlat(r,0,a,c-o,a,c,l);return r}},Or=class extends wn{InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends wn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=br;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends wn{};ao.prototype.ValueTypeName="vector";var oo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},xd=new oo,lo=class{constructor(t){this.manager=t!==void 0?t:xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var is=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Br=class extends is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ec=new se,Su=new I,bu=new I,co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Su.setFromMatrixPosition(t.matrixWorld),e.position.copy(Su),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),ec.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Eu=new se,yr=new I,nc=new I,lc=class extends co{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(yr),nc.copy(n.position),nc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nc),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}},kr=class extends is{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ss=class extends Lr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cc=class extends co{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zr=class extends is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ho=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}};var Dc="\\[\\]\\.:\\/",am=new RegExp("["+Dc+"]","g"),Uc="[^"+Dc+"]",om="[^"+Dc.replace("\\.","")+"]",lm=/((?:WC+[\/:])*)/.source.replace("WC",Uc),cm=/(WCOD+)?/.source.replace("WCOD",om),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),dm=new RegExp("^"+lm+cm+hm+um+"$"),fm=["material","materials","bones","map"],hc=class{constructor(t,e,n){let i=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(am,"")}static parseTrackName(t){let e=dm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=hc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jy=new Float32Array(1);function Fc(s,t,e,n){let i=pm(n);switch(e){case yc:return s*t;case Sc:return s*t;case bc:return s*t*2;case Ec:return s*t/i.components*i.byteLength;case To:return s*t/i.components*i.byteLength;case Tc:return s*t*2/i.components*i.byteLength;case wo:return s*t*2/i.components*i.byteLength;case Mc:return s*t*3/i.components*i.byteLength;case ln:return s*t*4/i.components*i.byteLength;case Ao:return s*t*4/i.components*i.byteLength;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Co:case Io:return Math.max(s,16)*Math.max(t,8)/4;case Ro:case Po:return Math.max(s,8)*Math.max(t,8)/2;case Lo:case Do:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Go:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yr:case $o:case Jo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wc:case Ko:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Qo:case jo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pm(s){switch(s){case Vn:case _c:return{byteLength:1,components:1};case $s:case vc:case Ci:return{byteLength:2,components:1};case bo:case Eo:return{byteLength:2,components:4};case Ri:case So:case Gn:return{byteLength:4,components:1};case xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"174"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="174");function Gd(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gm(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,e0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,U0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
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
}`,k0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,z0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,V0=`#define TOON
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
}`,G0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Z0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:_m,alphahash_pars_fragment:vm,alphamap_fragment:xm,alphamap_pars_fragment:ym,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:bm,aomap_pars_fragment:Em,batching_pars_vertex:Tm,batching_vertex:wm,begin_vertex:Am,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:Nm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:km,common:zm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Gm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:Zm,envmap_fragment:$m,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Km,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:cg,envmap_vertex:jm,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:ag,lights_lambert_pars_fragment:og,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:vg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:bg,map_pars_fragment:Eg,map_particle_fragment:Tg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Cg,morphcolor_vertex:Pg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Lg,morphtarget_vertex:Dg,normal_fragment_begin:Ug,normal_fragment_maps:Fg,normal_pars_fragment:Ng,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Gg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:$g,roughnessmap_fragment:Jg,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:jg,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:a0,specularmap_pars_fragment:o0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:y0,cube_frag:M0,depth_vert:S0,depth_frag:b0,distanceRGBA_vert:E0,distanceRGBA_frag:T0,equirect_vert:w0,equirect_frag:A0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:I0,meshlambert_vert:L0,meshlambert_frag:D0,meshmatcap_vert:U0,meshmatcap_frag:F0,meshnormal_vert:N0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:k0,meshphysical_vert:z0,meshphysical_frag:H0,meshtoon_vert:V0,meshtoon_frag:G0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:Z0,sprite_frag:$0},ut={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Wn={basic:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ye([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ye([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ye([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new At(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ye([ut.points,ut.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ye([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ye([ut.common,ut.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ye([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ye([ut.sprite,ut.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ye([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ye([ut.lights,ut.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Wn.physical={uniforms:Ye([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var tl={r:0,b:0,g:0},hs=new Be,J0=new se;function K0(s,t,e,n,i,r,a){let o=new At(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function g(b){let S=!1,A=_(b);A===null?p(o,l):A&&A.isColor&&(p(A,1),S=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,S){let A=_(S);A&&(A.isCubeTexture||A.mapping===Hr)?(h===void 0&&(h=new de(new Xs(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:cs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hs.copy(S.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(J0.makeRotationFromEuler(hs)),h.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ie,(u!==A||d!==A.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new de(new qe(2,2),new on({name:"BackgroundMaterial",uniforms:cs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ie,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(tl,Lc(s)),n.buffers.color.setClear(tl.r,tl.g,tl.b,S,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:g,addToRenderList:m,dispose:y}}function Q0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(x,P,F,U,B){let q=!1,z=u(U,F,P);r!==z&&(r=z,c(r.object)),q=f(x,U,F,B),q&&_(x,U,F,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(x,P,F,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,P,F){let U=F.wireframe===!0,B=n[x.id];B===void 0&&(B={},n[x.id]=B);let q=B[P.id];q===void 0&&(q={},B[P.id]=q);let z=q[U];return z===void 0&&(z=d(l()),q[U]=z),z}function d(x){let P=[],F=[],U=[];for(let B=0;B<e;B++)P[B]=0,F[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,P,F,U){let B=r.attributes,q=P.attributes,z=0,Z=F.getAttributes();for(let H in Z)if(Z[H].location>=0){let at=B[H],ht=q[H];if(ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),at===void 0||at.attribute!==ht||ht&&at.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==U}function _(x,P,F,U){let B={},q=P.attributes,z=0,Z=F.getAttributes();for(let H in Z)if(Z[H].location>=0){let at=q[H];at===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));let ht={};ht.attribute=at,at&&at.data&&(ht.data=at.data),B[H]=ht,z++}r.attributes=B,r.attributesNum=z,r.index=U}function g(){let x=r.newAttributes;for(let P=0,F=x.length;P<F;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){let F=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;F[x]=1,U[x]===0&&(s.enableVertexAttribArray(x),U[x]=1),B[x]!==P&&(s.vertexAttribDivisor(x,P),B[x]=P)}function y(){let x=r.newAttributes,P=r.enabledAttributes;for(let F=0,U=P.length;F<U;F++)P[F]!==x[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function b(x,P,F,U,B,q,z){z===!0?s.vertexAttribIPointer(x,P,F,B,q):s.vertexAttribPointer(x,P,F,U,B,q)}function S(x,P,F,U){g();let B=U.attributes,q=F.getAttributes(),z=P.defaultAttributeValues;for(let Z in q){let H=q[Z];if(H.location>=0){let et=B[Z];if(et===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){let at=et.normalized,ht=et.itemSize,xt=t.get(et);if(xt===void 0)continue;let Ut=xt.buffer,X=xt.type,tt=xt.bytesPerElement,yt=X===s.INT||X===s.UNSIGNED_INT||et.gpuType===So;if(et.isInterleavedBufferAttribute){let ot=et.data,Tt=ot.stride,st=et.offset;if(ot.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)p(H.location+bt,ot.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let bt=0;bt<H.locationSize;bt++)m(H.location+bt);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let bt=0;bt<H.locationSize;bt++)b(H.location+bt,ht/H.locationSize,X,at,Tt*tt,(st+ht/H.locationSize*bt)*tt,yt)}else{if(et.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot,et.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Ut);for(let ot=0;ot<H.locationSize;ot++)b(H.location+ot,ht/H.locationSize,X,at,ht*tt,ht/H.locationSize*ot*tt,yt)}}else if(z!==void 0){let at=z[Z];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(H.location,at);break;case 3:s.vertexAttrib3fv(H.location,at);break;case 4:s.vertexAttrib4fv(H.location,at);break;default:s.vertexAttrib1fv(H.location,at)}}}}y()}function A(){T();for(let x in n){let P=n[x];for(let F in P){let U=P[F];for(let B in U)h(U[B].object),delete U[B];delete P[F]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let P=n[x.id];for(let F in P){let U=P[F];for(let B in U)h(U[B].object),delete U[B];delete P[F]}delete n[x.id]}function w(x){for(let P in n){let F=n[P];if(F[x.id]===void 0)continue;let U=F[x.id];for(let B in U)h(U[B].object),delete U[B];delete F[x.id]}}function T(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function j0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function t_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==ln&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let T=w===Ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Vn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gn&&!T)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:C}}function e_(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Fn,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,b=y*4,S=p.clippingState||null;l.value=S,S=h(_,d,b,f);for(let A=0;A!==b;++A)S[A]=e[A];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==g;++b,S+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function n_(s){let t=new WeakMap;function e(a,o){return o===xo?a.mapping=as:o===yo&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===xo||o===yo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ja(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ks=4,yd=[.125,.215,.35,.446,.526,.582],fs=20,Nc=new ss,Md=new At,Oc=null,Bc=0,kc=0,zc=!1,ds=(1+Math.sqrt(5))/2,Js=1/ds,Sd=[new I(-ds,Js,0),new I(ds,Js,0),new I(-Js,0,ds),new I(Js,0,ds),new I(0,ds,-Js),new I(0,ds,Js),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],i_=new I,il=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=i_}=r;Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oc,Bc,kc),this._renderer.xr.enabled=zc,t.scissorTest=!1,el(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Ci,format:ln,colorSpace:Qi,depthBuffer:!1},i=bd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s_(r)),this._blurMaterial=r_(r,t,e)}return i}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Nc)}_sceneToCubeUV(t,e,n,i,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Md),u.toneMapping=li,u.autoClear=!1;let _=new ts({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new de(new Xs,_),m=!1,p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(Md),m=!0);for(let y=0;y<6;y++){let b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;el(i,b*S,y>2?S:0,S,S),u.setRenderTarget(i),m&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===as||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;el(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Nc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sd[(i-r-1)%Sd.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fs-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):fs;m>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let p=[],y=0;for(let w=0;w<fs;++w){let T=w/g,v=Math.exp(-T*T/2);p.push(v),w===0?y+=v:w<m&&(y+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;let S=this._sizeLods[i],A=3*S*(i>b-Ks?i-b+Ks:0),C=4*(this._cubeSize-S);el(e,A,C,3*S,2*S),l.setRenderTarget(e),l.render(u,Nc)}};function s_(s){let t=[],e=[],n=[],i=s,r=s-Ks+1+yd.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ks?l=yd[a-s+Ks-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),b=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let C=0;C<f;C++){let w=C%3*2/3-1,T=C>2?0:-1,v=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];y.set(v,g*_*C),b.set(d,m*_*C);let x=[C,C,C,C,C,C];S.set(x,p*_*C)}let A=new ke;A.setAttribute("position",new ue(y,g)),A.setAttribute("uv",new ue(b,m)),A.setAttribute("faceIndex",new ue(S,p)),t.push(A),i>Ks&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bd(s,t,e){let n=new _n(s,t,e);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function el(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function r_(s,t,e){let n=new Float32Array(fs),i=new I(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Ed(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Td(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Jc(){return`

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
	`}function a_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===xo||l===yo,h=l===as||l===os;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new il(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new il(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function o_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function l_(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let y=f.array;g=f.version;for(let b=0,S=y.length;b<S;b+=3){let A=y[b+0],C=y[b+1],w=y[b+2];d.push(A,C,C,w,w,A)}}else if(_!==void 0){let y=_.array;g=_.version;for(let b=0,S=y.length/3-1;b<S;b+=3){let A=b+0,C=b+1,w=b+2;d.push(A,C,C,w,w,A)}}else return;let m=new(Ic(d)?Ir:Pr)(d,1);m.version=g;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function c_(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*a,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function u_(s,t,e){let n=new WeakMap,i=new ne;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;f===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let S=o.attributes.position.count*b,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let C=new Float32Array(S*A*4*u),w=new Ar(C,S,A,u);w.type=Gn,w.needsUpdate=!0;let T=b*4;for(let x=0;x<u;x++){let P=m[x],F=p[x],U=y[x],B=S*A*4*x;for(let q=0;q<P.count;q++){let z=q*T;f===!0&&(i.fromBufferAttribute(P,q),C[B+z+0]=i.x,C[B+z+1]=i.y,C[B+z+2]=i.z,C[B+z+3]=0),_===!0&&(i.fromBufferAttribute(F,q),C[B+z+4]=i.x,C[B+z+5]=i.y,C[B+z+6]=i.z,C[B+z+7]=0),g===!0&&(i.fromBufferAttribute(U,q),C[B+z+8]=i.x,C[B+z+9]=i.y,C[B+z+10]=i.z,C[B+z+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Nt(S,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function d_(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Wd=new an,wd=new Nr(1,1),Xd=new Ar,qd=new Za,Yd=new Dr,Ad=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Id=new Float32Array(4);function js(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Ad[i];if(r===void 0&&(r=new Float32Array(i),Ad[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function rl(s,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function f_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function p_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function m_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function g_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function __(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Id.set(n),s.uniformMatrix2fv(this.addr,!1,Id),Ce(e,n)}}function v_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Pd.set(n),s.uniformMatrix3fv(this.addr,!1,Pd),Ce(e,n)}}function x_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Cd.set(n),s.uniformMatrix4fv(this.addr,!1,Cd),Ce(e,n)}}function y_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function M_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function S_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function b_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function E_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function T_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function w_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function A_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function R_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wd.compareFunction=Rc,r=wd):r=Wd,e.setTexture2D(t||r,i)}function C_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qd,i)}function P_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yd,i)}function I_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xd,i)}function L_(s){switch(s){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return b_;case 5125:return E_;case 36294:return T_;case 36295:return w_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}function D_(s,t){s.uniform1fv(this.addr,t)}function U_(s,t){let e=js(t,this.size,2);s.uniform2fv(this.addr,e)}function F_(s,t){let e=js(t,this.size,3);s.uniform3fv(this.addr,e)}function N_(s,t){let e=js(t,this.size,4);s.uniform4fv(this.addr,e)}function O_(s,t){let e=js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function B_(s,t){let e=js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function k_(s,t){let e=js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function z_(s,t){s.uniform1iv(this.addr,t)}function H_(s,t){s.uniform2iv(this.addr,t)}function V_(s,t){s.uniform3iv(this.addr,t)}function G_(s,t){s.uniform4iv(this.addr,t)}function W_(s,t){s.uniform1uiv(this.addr,t)}function X_(s,t){s.uniform2uiv(this.addr,t)}function q_(s,t){s.uniform3uiv(this.addr,t)}function Y_(s,t){s.uniform4uiv(this.addr,t)}function Z_(s,t,e){let n=this.cache,i=t.length,r=rl(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Wd,r[a])}function $_(s,t,e){let n=this.cache,i=t.length,r=rl(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||qd,r[a])}function J_(s,t,e){let n=this.cache,i=t.length,r=rl(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Yd,r[a])}function K_(s,t,e){let n=this.cache,i=t.length,r=rl(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Xd,r[a])}function Q_(s){switch(s){case 5126:return D_;case 35664:return U_;case 35665:return F_;case 35666:return N_;case 35674:return O_;case 35675:return B_;case 35676:return k_;case 5124:case 35670:return z_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return $_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}var Vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=L_(e.type)}},Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Q_(e.type)}},Wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Hc=/(\w+)(\])?(\[|\.)?/g;function Ld(s,t){s.seq.push(t),s.map[t.id]=t}function j_(s,t,e){let n=s.name,i=n.length;for(Hc.lastIndex=0;;){let r=Hc.exec(n),a=Hc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ld(e,c===void 0?new Vc(o,s,t):new Gc(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Wc(o),Ld(e,u)),e=u}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);j_(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Dd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var tv=37297,ev=0;function nv(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ud=new Ot;function iv(s){Zt._getMatrix(Ud,Zt.workingColorSpace,s);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Er:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+nv(s.getShaderSource(t),a)}else return i}function sv(s,t){let e=iv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rv(s,t){let e;switch(t){case Zu:e="Linear";break;case $u:e="Reinhard";break;case Ju:e="Cineon";break;case Ku:e="ACESFilmic";break;case ju:e="AgX";break;case td:e="Neutral";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nl=new I;function av(){Zt.getLuminanceCoefficients(nl);let s=nl.x.toFixed(4),t=nl.y.toFixed(4),e=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function lv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cv(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Zr(s){return s!==""}function Nd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Od(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(s){return s.replace(hv,dv)}var uv=new Map;function dv(s,t){let e=zt[t];if(e===void 0){let n=uv.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xc(e)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(s){return s.replace(fv,pv)}function pv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Au?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function gv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case Hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _v(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function vv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case qu:t="ENVMAP_BLENDING_MIX";break;case Yu:t="ENVMAP_BLENDING_ADD";break}return t}function xv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function yv(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=mv(e),c=gv(e),h=_v(e),u=vv(e),d=xv(e),f=ov(e),_=lv(r),g=i.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?zt.tonemapping_pars_fragment:"",e.toneMapping!==li?rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,sv("linearToOutputTexel",e.outputColorSpace),av(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Xc(a),a=Nd(a,e),a=Od(a,e),o=Xc(o),o=Nd(o,e),o=Od(o,e),a=Bd(a),o=Bd(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+a,S=y+p+o,A=Dd(i,i.VERTEX_SHADER,b),C=Dd(i,i.FRAGMENT_SHADER,S);i.attachShader(g,A),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(C).trim(),q=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,C);else{let Z=Fd(i,A,"vertex"),H=Fd(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Z+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||B==="")&&(z=!1);z&&(P.diagnostics={runnable:q,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(A),i.deleteShader(C),T=new Qs(i,g),v=cv(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,tv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ev++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}var Mv=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yc(t),e.set(t,n)),n}},Yc=class{constructor(t){this.id=Mv++,this.code=t,this.usedTimes=0}};function Sv(s,t,e,n,i,r,a){let o=new Cr,l=new qc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,P,F,U){let B=F.fog,q=U.geometry,z=v.isMeshStandardMaterial?F.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),H=Z&&Z.mapping===Hr?Z.image.height:null,et=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let at=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ht=at!==void 0?at.length:0,xt=0;q.morphAttributes.position!==void 0&&(xt=1),q.morphAttributes.normal!==void 0&&(xt=2),q.morphAttributes.color!==void 0&&(xt=3);let Ut,X,tt,yt;if(et){let Vt=Wn[et];Ut=Vt.vertexShader,X=Vt.fragmentShader}else Ut=v.vertexShader,X=v.fragmentShader,l.update(v),tt=l.getVertexShaderID(v),yt=l.getFragmentShaderID(v);let ot=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),st=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,Xt=!!v.map,jt=!!v.matcap,Bt=!!Z,L=!!v.aoMap,ae=!!v.lightMap,kt=!!v.bumpMap,It=!!v.normalMap,_t=!!v.displacementMap,qt=!!v.emissiveMap,Et=!!v.metalnessMap,R=!!v.roughnessMap,M=v.anisotropy>0,k=v.clearcoat>0,$=v.dispersion>0,j=v.iridescence>0,J=v.sheen>0,Mt=v.transmission>0,ct=M&&!!v.anisotropyMap,ft=k&&!!v.clearcoatMap,Ht=k&&!!v.clearcoatNormalMap,nt=k&&!!v.clearcoatRoughnessMap,gt=j&&!!v.iridescenceMap,W=j&&!!v.iridescenceThicknessMap,rt=J&&!!v.sheenColorMap,Q=J&&!!v.sheenRoughnessMap,Rt=!!v.specularMap,wt=!!v.specularColorMap,Jt=!!v.specularIntensityMap,D=Mt&&!!v.transmissionMap,lt=Mt&&!!v.thicknessMap,Y=!!v.gradientMap,K=!!v.alphaMap,mt=v.alphaTest>0,dt=!!v.alphaHash,Lt=!!v.extensions,te=li;v.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(te=s.toneMapping);let xe={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Ut,fragmentShader:X,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:st,instancingColor:st&&U.instanceColor!==null,instancingMorph:st&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Qi,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:jt,envMap:Bt,envMapMode:Bt&&Z.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:ae,bumpMap:kt,normalMap:It,displacementMap:d&&_t,emissiveMap:qt,normalMapObjectSpace:It&&v.normalMapType===sd,normalMapTangentSpace:It&&v.normalMapType===Ac,metalnessMap:Et,roughnessMap:R,anisotropy:M,anisotropyMap:ct,clearcoat:k,clearcoatMap:ft,clearcoatNormalMap:Ht,clearcoatRoughnessMap:nt,dispersion:$,iridescence:j,iridescenceMap:gt,iridescenceThicknessMap:W,sheen:J,sheenColorMap:rt,sheenRoughnessMap:Q,specularMap:Rt,specularColorMap:wt,specularIntensityMap:Jt,transmission:Mt,transmissionMap:D,thicknessMap:lt,gradientMap:Y,opaque:v.transparent===!1&&v.blending===$i&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:dt,combine:v.combine,mapUv:Xt&&g(v.map.channel),aoMapUv:L&&g(v.aoMap.channel),lightMapUv:ae&&g(v.lightMap.channel),bumpMapUv:kt&&g(v.bumpMap.channel),normalMapUv:It&&g(v.normalMap.channel),displacementMapUv:_t&&g(v.displacementMap.channel),emissiveMapUv:qt&&g(v.emissiveMap.channel),metalnessMapUv:Et&&g(v.metalnessMap.channel),roughnessMapUv:R&&g(v.roughnessMap.channel),anisotropyMapUv:ct&&g(v.anisotropyMap.channel),clearcoatMapUv:ft&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:W&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Q&&g(v.sheenRoughnessMap.channel),specularMapUv:Rt&&g(v.specularMap.channel),specularColorMapUv:wt&&g(v.specularColorMap.channel),specularIntensityMapUv:Jt&&g(v.specularIntensityMap.channel),transmissionMapUv:D&&g(v.transmissionMap.channel),thicknessMapUv:lt&&g(v.thicknessMap.channel),alphaMapUv:K&&g(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(It||M),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(Xt||K),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:xt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:te,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===ie,decodeVideoTextureEmissive:qt&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===ie,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ze,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Lt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&v.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)x.push(P),x.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(x,v),b(x,v),x.push(s.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function y(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function b(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){let x=_[v.type],P;if(x){let F=Wn[x];P=_d.clone(F.uniforms)}else P=v.uniforms;return P}function A(v,x){let P;for(let F=0,U=h.length;F<U;F++){let B=h[F];if(B.cacheKey===x){P=B,++P.usedTimes;break}}return P===void 0&&(P=new yv(s,x,v,r),h.push(P)),P}function C(v){if(--v.usedTimes===0){let x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function w(v){l.remove(v)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:T}}function bv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ev(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){let p=a(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Ev),n.length>1&&n.sort(d||zd),i.length>1&&i.sort(d||zd)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Tv(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Hd,s.set(n,[a])):i>=r.length?(a=new Hd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function wv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new At};break;case"SpotLight":e={position:new I,direction:new I,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Av(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Rv=0;function Cv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Pv(s){let t=new wv,e=Av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new se,a=new se;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,b=0,S=0,A=0,C=0,w=0;c.sort(Cv);for(let v=0,x=c.length;v<x;v++){let P=c[v],F=P.color,U=P.intensity,B=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],U);w++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=z,f++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(F).multiplyScalar(U),z.distance=B,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[g]=z;let Z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Z.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[g]=Z.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=q,S++}g++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(F).multiplyScalar(U),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=z,m++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,b++}n.point[_]=z,_++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(U),z.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==f||T.pointLength!==_||T.spotLength!==g||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==y||T.numPointShadows!==b||T.numSpotShadows!==S||T.numSpotMaps!==A||T.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,T.directionalLength=f,T.pointLength=_,T.spotLength=g,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=y,T.numPointShadows=b,T.numSpotShadows=S,T.numSpotMaps=A,T.numLightProbes=w,n.version=Rv++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(b.isSpotLight){let S=n.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Vd(s){let t=new Pv(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Iv(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Vd(s),t.set(i,[o])):r>=a.length?(o=new Vd(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Uv(s,t,e){let n=new Zs,i=new Nt,r=new Nt,a=new ne,o=new Qa({depthPacking:id}),l=new ja,c={},h=e.maxTextureSize,u={[si]:en,[en]:si,[ze]:ze},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new ke;_.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new de(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let p=this.type;this.render=function(C,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let v=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(oi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let U=p!==kn&&this.type===kn,B=p===kn&&this.type!==kn;for(let q=0,z=C.length;q<z;q++){let Z=C[q],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let et=H.getFrameExtents();if(i.multiply(et),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,H.mapSize.y=r.y)),H.map===null||U===!0||B===!0){let ht=this.type!==kn?{minFilter:Tn,magFilter:Tn}:{};H.map!==null&&H.map.dispose(),H.map=new _n(i.x,i.y,ht),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let at=H.getViewportCount();for(let ht=0;ht<at;ht++){let xt=H.getViewport(ht);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),F.viewport(a),H.updateMatrices(Z,ht),n=H.getFrustum(),S(w,T,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===kn&&y(H,T),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,x,P)};function y(C,w){let T=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _n(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(w,null,T,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(w,null,T,f,g,null)}function b(C,w,T,v){let x=null,P=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)x=P;else if(x=T.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=x.uuid,U=w.uuid,B=c[F];B===void 0&&(B={},c[F]=B);let q=B[U];q===void 0&&(q=x.clone(),B[U]=q,w.addEventListener("dispose",A)),x=q}if(x.visible=w.visible,x.wireframe=w.wireframe,v===kn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:u[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let F=s.properties.get(x);F.light=T}return x}function S(C,w,T,v,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let U=t.update(C),B=C.material;if(Array.isArray(B)){let q=U.groups;for(let z=0,Z=q.length;z<Z;z++){let H=q[z],et=B[H.materialIndex];if(et&&et.visible){let at=b(C,et,v,x);C.onBeforeShadow(s,C,w,T,U,at,H),s.renderBufferDirect(T,null,U,at,C,H),C.onAfterShadow(s,C,w,T,U,at,H)}}}else if(B.visible){let q=b(C,B,v,x);C.onBeforeShadow(s,C,w,T,U,q,null),s.renderBufferDirect(T,null,U,q,C,null),C.onAfterShadow(s,C,w,T,U,q,null)}}let F=C.children;for(let U=0,B=F.length;U<B;U++)S(F[U],w,T,v,x)}function A(C){C.target.removeEventListener("dispose",A);for(let T in c){let v=c[T],x=C.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}var Fv={[uo]:fo,[po]:_o,[mo]:vo,[Ji]:go,[fo]:uo,[_o]:po,[vo]:mo,[go]:Ji};function Nv(s,t){function e(){let D=!1,lt=new ne,Y=null,K=new ne(0,0,0,0);return{setMask:function(mt){Y!==mt&&!D&&(s.colorMask(mt,mt,mt,mt),Y=mt)},setLocked:function(mt){D=mt},setClear:function(mt,dt,Lt,te,xe){xe===!0&&(mt*=te,dt*=te,Lt*=te),lt.set(mt,dt,Lt,te),K.equals(lt)===!1&&(s.clearColor(mt,dt,Lt,te),K.copy(lt))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,Y=null,K=null,mt=null;return{setReversed:function(dt){if(lt!==dt){let Lt=t.get("EXT_clip_control");lt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);let te=mt;mt=null,this.setClear(te)}lt=dt},getReversed:function(){return lt},setTest:function(dt){dt?ot(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!D&&(s.depthMask(dt),Y=dt)},setFunc:function(dt){if(lt&&(dt=Fv[dt]),K!==dt){switch(dt){case uo:s.depthFunc(s.NEVER);break;case fo:s.depthFunc(s.ALWAYS);break;case po:s.depthFunc(s.LESS);break;case Ji:s.depthFunc(s.LEQUAL);break;case mo:s.depthFunc(s.EQUAL);break;case go:s.depthFunc(s.GEQUAL);break;case _o:s.depthFunc(s.GREATER);break;case vo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=dt}},setLocked:function(dt){D=dt},setClear:function(dt){mt!==dt&&(lt&&(dt=1-dt),s.clearDepth(dt),mt=dt)},reset:function(){D=!1,Y=null,K=null,mt=null,lt=!1}}}function i(){let D=!1,lt=null,Y=null,K=null,mt=null,dt=null,Lt=null,te=null,xe=null;return{setTest:function(Vt){D||(Vt?ot(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Vt){lt!==Vt&&!D&&(s.stencilMask(Vt),lt=Vt)},setFunc:function(Vt,Qe,Ue){(Y!==Vt||K!==Qe||mt!==Ue)&&(s.stencilFunc(Vt,Qe,Ue),Y=Vt,K=Qe,mt=Ue)},setOp:function(Vt,Qe,Ue){(dt!==Vt||Lt!==Qe||te!==Ue)&&(s.stencilOp(Vt,Qe,Ue),dt=Vt,Lt=Qe,te=Ue)},setLocked:function(Vt){D=Vt},setClear:function(Vt){xe!==Vt&&(s.clearStencil(Vt),xe=Vt)},reset:function(){D=!1,lt=null,Y=null,K=null,mt=null,dt=null,Lt=null,te=null,xe=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,b=null,S=null,A=null,C=null,w=new At(0,0,0),T=0,v=!1,x=null,P=null,F=null,U=null,B=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Z>=2);let et=null,at={},ht=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),Ut=new ne().fromArray(ht),X=new ne().fromArray(xt);function tt(D,lt,Y,K){let mt=new Uint8Array(4),dt=s.createTexture();s.bindTexture(D,dt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<Y;Lt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(lt+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return dt}let yt={};yt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(Ji),kt(!1),It(uc),ot(s.CULL_FACE),L(oi);function ot(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function st(D,lt){return u[D]!==lt?(s.bindFramebuffer(D,lt),u[D]=lt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function bt(D,lt){let Y=f,K=!1;if(D){Y=d.get(lt),Y===void 0&&(Y=[],d.set(lt,Y));let mt=D.textures;if(Y.length!==mt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Lt=mt.length;dt<Lt;dt++)Y[dt]=s.COLOR_ATTACHMENT0+dt;Y.length=mt.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function Xt(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let jt={[Si]:s.FUNC_ADD,[Cu]:s.FUNC_SUBTRACT,[Pu]:s.FUNC_REVERSE_SUBTRACT};jt[Iu]=s.MIN,jt[Lu]=s.MAX;let Bt={[Du]:s.ZERO,[Uu]:s.ONE,[Fu]:s.SRC_COLOR,[za]:s.SRC_ALPHA,[Hu]:s.SRC_ALPHA_SATURATE,[ku]:s.DST_COLOR,[Ou]:s.DST_ALPHA,[Nu]:s.ONE_MINUS_SRC_COLOR,[Ha]:s.ONE_MINUS_SRC_ALPHA,[zu]:s.ONE_MINUS_DST_COLOR,[Bu]:s.ONE_MINUS_DST_ALPHA,[Vu]:s.CONSTANT_COLOR,[Gu]:s.ONE_MINUS_CONSTANT_COLOR,[Wu]:s.CONSTANT_ALPHA,[Xu]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,lt,Y,K,mt,dt,Lt,te,xe,Vt){if(D===oi){g===!0&&(Tt(s.BLEND),g=!1);return}if(g===!1&&(ot(s.BLEND),g=!0),D!==Ru){if(D!==m||Vt!==v){if((p!==Si||S!==Si)&&(s.blendEquation(s.FUNC_ADD),p=Si,S=Si),Vt)switch(D){case $i:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zn:s.blendFunc(s.ONE,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,b=null,A=null,C=null,w.set(0,0,0),T=0,m=D,v=Vt}return}mt=mt||lt,dt=dt||Y,Lt=Lt||K,(lt!==p||mt!==S)&&(s.blendEquationSeparate(jt[lt],jt[mt]),p=lt,S=mt),(Y!==y||K!==b||dt!==A||Lt!==C)&&(s.blendFuncSeparate(Bt[Y],Bt[K],Bt[dt],Bt[Lt]),y=Y,b=K,A=dt,C=Lt),(te.equals(w)===!1||xe!==T)&&(s.blendColor(te.r,te.g,te.b,xe),w.copy(te),T=xe),m=D,v=!1}function ae(D,lt){D.side===ze?Tt(s.CULL_FACE):ot(s.CULL_FACE);let Y=D.side===en;lt&&(Y=!Y),kt(Y),D.blending===$i&&D.transparent===!1?L(oi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),qt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function It(D){D!==Tu?(ot(s.CULL_FACE),D!==P&&(D===uc?s.cullFace(s.BACK):D===wu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),P=D}function _t(D){D!==F&&(z&&s.lineWidth(D),F=D)}function qt(D,lt,Y){D?(ot(s.POLYGON_OFFSET_FILL),(U!==lt||B!==Y)&&(s.polygonOffset(lt,Y),U=lt,B=Y)):Tt(s.POLYGON_OFFSET_FILL)}function Et(D){D?ot(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+q-1),et!==D&&(s.activeTexture(D),et=D)}function M(D,lt,Y){Y===void 0&&(et===null?Y=s.TEXTURE0+q-1:Y=et);let K=at[Y];K===void 0&&(K={type:void 0,texture:void 0},at[Y]=K),(K.type!==D||K.texture!==lt)&&(et!==Y&&(s.activeTexture(Y),et=Y),s.bindTexture(D,lt||yt[D]),K.type=D,K.texture=lt)}function k(){let D=at[et];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ht(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(D){Ut.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ut.copy(D))}function Q(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Rt(D,lt){let Y=c.get(lt);Y===void 0&&(Y=new WeakMap,c.set(lt,Y));let K=Y.get(D);K===void 0&&(K=s.getUniformBlockIndex(lt,D.name),Y.set(D,K))}function wt(D,lt){let K=c.get(lt).get(D);l.get(lt)!==K&&(s.uniformBlockBinding(lt,K,D.__bindingPointIndex),l.set(lt,K))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,at={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,b=null,S=null,A=null,C=null,w=new At(0,0,0),T=0,v=!1,x=null,P=null,F=null,U=null,B=null,Ut.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Tt,bindFramebuffer:st,drawBuffers:bt,useProgram:Xt,setBlending:L,setMaterial:ae,setFlipSided:kt,setCullFace:It,setLineWidth:_t,setPolygonOffset:qt,setScissorTest:Et,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:gt,texImage3D:W,updateUBOMapping:Rt,uniformBlockBinding:wt,texStorage2D:Ht,texStorage3D:nt,texSubImage2D:J,texSubImage3D:Mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:rt,viewport:Q,reset:Jt}}function Ov(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return f?new OffscreenCanvas(R,M):wr("canvas")}function g(R,M,k){let $=1,j=Et(R);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let J=Math.floor($*j.width),Mt=Math.floor($*j.height);u===void 0&&(u=_(J,Mt));let ct=M?_(J,Mt):u;return ct.width=J,ct.height=Mt,ct.getContext("2d").drawImage(R,0,0,J,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+Mt+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(R,M,k,$,j=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=M;if(M===s.RED&&(k===s.FLOAT&&(J=s.R32F),k===s.HALF_FLOAT&&(J=s.R16F),k===s.UNSIGNED_BYTE&&(J=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.R8UI),k===s.UNSIGNED_SHORT&&(J=s.R16UI),k===s.UNSIGNED_INT&&(J=s.R32UI),k===s.BYTE&&(J=s.R8I),k===s.SHORT&&(J=s.R16I),k===s.INT&&(J=s.R32I)),M===s.RG&&(k===s.FLOAT&&(J=s.RG32F),k===s.HALF_FLOAT&&(J=s.RG16F),k===s.UNSIGNED_BYTE&&(J=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RG8UI),k===s.UNSIGNED_SHORT&&(J=s.RG16UI),k===s.UNSIGNED_INT&&(J=s.RG32UI),k===s.BYTE&&(J=s.RG8I),k===s.SHORT&&(J=s.RG16I),k===s.INT&&(J=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGB8UI),k===s.UNSIGNED_SHORT&&(J=s.RGB16UI),k===s.UNSIGNED_INT&&(J=s.RGB32UI),k===s.BYTE&&(J=s.RGB8I),k===s.SHORT&&(J=s.RGB16I),k===s.INT&&(J=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),k===s.UNSIGNED_INT&&(J=s.RGBA32UI),k===s.BYTE&&(J=s.RGBA8I),k===s.SHORT&&(J=s.RGBA16I),k===s.INT&&(J=s.RGBA32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),M===s.RGBA){let Mt=j?Er:Zt.getTransfer($);k===s.FLOAT&&(J=s.RGBA32F),k===s.HALF_FLOAT&&(J=s.RGBA16F),k===s.UNSIGNED_BYTE&&(J=Mt===ie?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(R,M){let k;return R?M===null||M===Ri||M===ls?k=s.DEPTH24_STENCIL8:M===Gn?k=s.DEPTH32F_STENCIL8:M===$s&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===ls?k=s.DEPTH_COMPONENT24:M===Gn?k=s.DEPTH_COMPONENT32F:M===$s&&(k=s.DEPTH_COMPONENT16),k}function A(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Xe?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M)}function w(R){let M=R.target;M.removeEventListener("dispose",w),x(M)}function T(R){let M=n.get(R);if(M.__webglInit===void 0)return;let k=R.source,$=d.get(k);if($){let j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(R),Object.keys($).length===0&&d.delete(k)}n.remove(R)}function v(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let k=R.source,$=d.get(k);delete $[M.__cacheKey],a.memory.textures--}function x(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(M.__webglFramebuffer[$][j]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=R.textures;for(let $=0,j=k.length;$<j;$++){let J=n.get(k[$]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(k[$])}n.remove(R)}let P=0;function F(){P=0}function U(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function B(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){let k=n.get(R);if(R.isVideoTexture&&_t(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,R,M);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function z(R,M){let k=n.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function Z(R,M){let k=n.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function H(R,M){let k=n.get(R);if(R.version>0&&k.__version!==R.version){tt(k,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let et={[Va]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[Ga]:s.MIRRORED_REPEAT},at={[Tn]:s.NEAREST,[ed]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[Xe]:s.LINEAR,[Mo]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},ht={[rd]:s.NEVER,[ud]:s.ALWAYS,[ad]:s.LESS,[Rc]:s.LEQUAL,[od]:s.EQUAL,[hd]:s.GEQUAL,[ld]:s.GREATER,[cd]:s.NOTEQUAL};function xt(R,M){if(M.type===Gn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Xe||M.magFilter===Mo||M.magFilter===Vr||M.magFilter===Hn||M.minFilter===Xe||M.minFilter===Mo||M.minFilter===Vr||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,et[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,et[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,et[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,at[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Tn||M.minFilter!==Vr&&M.minFilter!==Hn||M.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ut(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let $=M.source,j=d.get($);j===void 0&&(j={},d.set($,j));let J=B(M);if(J!==R.__cacheKey){j[J]===void 0&&(j[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[J].usedTimes++;let Mt=j[R.__cacheKey];Mt!==void 0&&(j[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&v(M)),R.__cacheKey=J,R.__webglTexture=j[J].texture}return k}function X(R,M,k){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let j=Ut(R,M),J=M.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+k);let Mt=n.get(J);if(J.version!==Mt.__version||j===!0){e.activeTexture(s.TEXTURE0+k);let ct=Zt.getPrimaries(Zt.workingColorSpace),ft=M.colorSpace===ci?null:Zt.getPrimaries(M.colorSpace),Ht=M.colorSpace===ci||ct===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let nt=g(M.image,!1,i.maxTextureSize);nt=qt(M,nt);let gt=r.convert(M.format,M.colorSpace),W=r.convert(M.type),rt=b(M.internalFormat,gt,W,M.colorSpace,M.isVideoTexture);xt($,M);let Q,Rt=M.mipmaps,wt=M.isVideoTexture!==!0,Jt=Mt.__version===void 0||j===!0,D=J.dataReady,lt=A(M,nt);if(M.isDepthTexture)rt=S(M.format===Ki,M.type),Jt&&(wt?e.texStorage2D(s.TEXTURE_2D,1,rt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,rt,nt.width,nt.height,0,gt,W,null));else if(M.isDataTexture)if(Rt.length>0){wt&&Jt&&e.texStorage2D(s.TEXTURE_2D,lt,rt,Rt[0].width,Rt[0].height);for(let Y=0,K=Rt.length;Y<K;Y++)Q=Rt[Y],wt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Q.width,Q.height,gt,W,Q.data):e.texImage2D(s.TEXTURE_2D,Y,rt,Q.width,Q.height,0,gt,W,Q.data);M.generateMipmaps=!1}else wt?(Jt&&e.texStorage2D(s.TEXTURE_2D,lt,rt,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,W,nt.data)):e.texImage2D(s.TEXTURE_2D,0,rt,nt.width,nt.height,0,gt,W,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){wt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,rt,Rt[0].width,Rt[0].height,nt.depth);for(let Y=0,K=Rt.length;Y<K;Y++)if(Q=Rt[Y],M.format!==ln)if(gt!==null)if(wt){if(D)if(M.layerUpdates.size>0){let mt=Fc(Q.width,Q.height,M.format,M.type);for(let dt of M.layerUpdates){let Lt=Q.data.subarray(dt*mt/Q.data.BYTES_PER_ELEMENT,(dt+1)*mt/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,dt,Q.width,Q.height,1,gt,Lt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Q.width,Q.height,nt.depth,gt,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,rt,Q.width,Q.height,nt.depth,0,Q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else wt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Q.width,Q.height,nt.depth,gt,W,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,rt,Q.width,Q.height,nt.depth,0,gt,W,Q.data)}else{wt&&Jt&&e.texStorage2D(s.TEXTURE_2D,lt,rt,Rt[0].width,Rt[0].height);for(let Y=0,K=Rt.length;Y<K;Y++)Q=Rt[Y],M.format!==ln?gt!==null?wt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Q.width,Q.height,gt,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,rt,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Q.width,Q.height,gt,W,Q.data):e.texImage2D(s.TEXTURE_2D,Y,rt,Q.width,Q.height,0,gt,W,Q.data)}else if(M.isDataArrayTexture)if(wt){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,rt,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){let Y=Fc(nt.width,nt.height,M.format,M.type);for(let K of M.layerUpdates){let mt=nt.data.subarray(K*Y/nt.data.BYTES_PER_ELEMENT,(K+1)*Y/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,gt,W,mt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,W,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,nt.width,nt.height,nt.depth,0,gt,W,nt.data);else if(M.isData3DTexture)wt?(Jt&&e.texStorage3D(s.TEXTURE_3D,lt,rt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,W,nt.data)):e.texImage3D(s.TEXTURE_3D,0,rt,nt.width,nt.height,nt.depth,0,gt,W,nt.data);else if(M.isFramebufferTexture){if(Jt)if(wt)e.texStorage2D(s.TEXTURE_2D,lt,rt,nt.width,nt.height);else{let Y=nt.width,K=nt.height;for(let mt=0;mt<lt;mt++)e.texImage2D(s.TEXTURE_2D,mt,rt,Y,K,0,gt,W,null),Y>>=1,K>>=1}}else if(Rt.length>0){if(wt&&Jt){let Y=Et(Rt[0]);e.texStorage2D(s.TEXTURE_2D,lt,rt,Y.width,Y.height)}for(let Y=0,K=Rt.length;Y<K;Y++)Q=Rt[Y],wt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt,W,Q):e.texImage2D(s.TEXTURE_2D,Y,rt,gt,W,Q);M.generateMipmaps=!1}else if(wt){if(Jt){let Y=Et(nt);e.texStorage2D(s.TEXTURE_2D,lt,rt,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,W,nt)}else e.texImage2D(s.TEXTURE_2D,0,rt,gt,W,nt);m(M)&&p($),Mt.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function tt(R,M,k){if(M.image.length!==6)return;let $=Ut(R,M),j=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let J=n.get(j);if(j.version!==J.__version||$===!0){e.activeTexture(s.TEXTURE0+k);let Mt=Zt.getPrimaries(Zt.workingColorSpace),ct=M.colorSpace===ci?null:Zt.getPrimaries(M.colorSpace),ft=M.colorSpace===ci||Mt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ht=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let K=0;K<6;K++)!Ht&&!nt?gt[K]=g(M.image[K],!0,i.maxCubemapSize):gt[K]=nt?M.image[K].image:M.image[K],gt[K]=qt(M,gt[K]);let W=gt[0],rt=r.convert(M.format,M.colorSpace),Q=r.convert(M.type),Rt=b(M.internalFormat,rt,Q,M.colorSpace),wt=M.isVideoTexture!==!0,Jt=J.__version===void 0||$===!0,D=j.dataReady,lt=A(M,W);xt(s.TEXTURE_CUBE_MAP,M);let Y;if(Ht){wt&&Jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Rt,W.width,W.height);for(let K=0;K<6;K++){Y=gt[K].mipmaps;for(let mt=0;mt<Y.length;mt++){let dt=Y[mt];M.format!==ln?rt!==null?wt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,dt.width,dt.height,rt,dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Rt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,dt.width,dt.height,rt,Q,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Rt,dt.width,dt.height,0,rt,Q,dt.data)}}}else{if(Y=M.mipmaps,wt&&Jt){Y.length>0&&lt++;let K=Et(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Rt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,gt[K].width,gt[K].height,rt,Q,gt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Rt,gt[K].width,gt[K].height,0,rt,Q,gt[K].data);for(let mt=0;mt<Y.length;mt++){let Lt=Y[mt].image[K].image;wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Lt.width,Lt.height,rt,Q,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Rt,Lt.width,Lt.height,0,rt,Q,Lt.data)}}else{wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,rt,Q,gt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Rt,rt,Q,gt[K]);for(let mt=0;mt<Y.length;mt++){let dt=Y[mt];wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,rt,Q,dt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Rt,rt,Q,dt.image[K])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),J.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function yt(R,M,k,$,j,J){let Mt=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),ft=b(k.internalFormat,Mt,ct,k.colorSpace),Ht=n.get(M),nt=n.get(k);if(nt.__renderTarget=M,!Ht.__hasExternalTextures){let gt=Math.max(1,M.width>>J),W=Math.max(1,M.height>>J);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,J,ft,gt,W,M.depth,0,Mt,ct,null):e.texImage2D(j,J,ft,gt,W,0,Mt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),It(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,nt.__webglTexture,0,kt(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,nt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(R,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,J=S(M.stencilBuffer,j),Mt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=kt(M);It(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,J,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,J,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,J,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,R)}else{let $=M.textures;for(let j=0;j<$.length;j++){let J=$[j],Mt=r.convert(J.format,J.colorSpace),ct=r.convert(J.type),ft=b(J.internalFormat,Mt,ct,J.colorSpace),Ht=kt(M);k&&It(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,ft,M.width,M.height):It(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht,ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);let j=$.__webglTexture,J=kt(M);if(M.depthTexture.format===Zi)It(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ki)It(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function st(R){let M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Tt(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),ot(M.__webglDepthbuffer[$],R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ot(M.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(R,M,k){let $=n.get(R);M!==void 0&&yt($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&st(R)}function Xt(R){let M=R.texture,k=n.get(R),$=n.get(M);R.addEventListener("dispose",w);let j=R.textures,J=R.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let ft=0;ft<M.mipmaps.length;ft++)k.__webglFramebuffer[ct][ft]=s.createFramebuffer()}else k.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)k.__webglFramebuffer[ct]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let ct=0,ft=j.length;ct<ft;ct++){let Ht=n.get(j[ct]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&It(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<j.length;ct++){let ft=j[ct];k.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);let Ht=r.convert(ft.format,ft.colorSpace),nt=r.convert(ft.type),gt=b(ft.internalFormat,Ht,nt,ft.colorSpace,R.isXRRenderTarget===!0),W=kt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,gt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),xt(s.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)yt(k.__webglFramebuffer[ct][ft],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else yt(k.__webglFramebuffer[ct],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ct=0,ft=j.length;ct<ft;ct++){let Ht=j[ct],nt=n.get(Ht);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),xt(s.TEXTURE_2D,Ht),yt(k.__webglFramebuffer,R,Ht,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(Ht)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),xt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)yt(k.__webglFramebuffer[ft],R,M,s.COLOR_ATTACHMENT0,ct,ft);else yt(k.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,ct,0);m(M)&&p(ct),e.unbindTexture()}R.depthBuffer&&st(R)}function jt(R){let M=R.textures;for(let k=0,$=M.length;k<$;k++){let j=M[k];if(m(j)){let J=y(R),Mt=n.get(j).__webglTexture;e.bindTexture(J,Mt),p(J),e.unbindTexture()}}}let Bt=[],L=[];function ae(R){if(R.samples>0){if(It(R)===!1){let M=R.textures,k=R.width,$=R.height,j=s.COLOR_BUFFER_BIT,J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(R),ct=M.length>1;if(ct)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Ht=n.get(M[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,j,s.NEAREST),l===!0&&(Bt.length=0,L.length=0,Bt.push(s.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Bt.push(J),L.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);let Ht=n.get(M[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function kt(R){return Math.min(i.maxSamples,R.samples)}function It(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _t(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function qt(R,M){let k=R.colorSpace,$=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Qi&&k!==ci&&(Zt.getTransfer(k)===ie?($!==ln||j!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=bt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=It}function Bv(s,t){function e(n,i=ci){let r,a=Zt.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_c)return s.BYTE;if(n===vc)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===So)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===Ci)return s.HALF_FLOAT;if(n===yc)return s.ALPHA;if(n===Mc)return s.RGB;if(n===ln)return s.RGBA;if(n===Sc)return s.LUMINANCE;if(n===bc)return s.LUMINANCE_ALPHA;if(n===Zi)return s.DEPTH_COMPONENT;if(n===Ki)return s.DEPTH_STENCIL;if(n===Ec)return s.RED;if(n===To)return s.RED_INTEGER;if(n===Tc)return s.RG;if(n===wo)return s.RG_INTEGER;if(n===Ao)return s.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===qr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ro||n===Co||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Do)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===No||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Go)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===$o||n===Jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Ko||n===Qo||n===jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var kv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
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

}`,Zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new an,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:kv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends ri{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=new Zc,m=e.getContextAttributes(),p=null,y=null,b=[],S=[],A=new Nt,C=null,w=new Ne;w.viewport=new ne;let T=new Ne;T.viewport=new ne;let v=[w,T],x=new ho,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=b[X];return tt===void 0&&(tt=new qs,b[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=b[X];return tt===void 0&&(tt=new qs,b[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=b[X];return tt===void 0&&(tt=new qs,b[X]=tt),tt.getHandSpace()};function U(X){let tt=S.indexOf(X.inputSource);if(tt===-1)return;let yt=b[tt];yt!==void 0&&(yt.update(X.inputSource,X.frame,c||a),yt.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",q);for(let X=0;X<b.length;X++){let tt=S[X];tt!==null&&(S[X]=null,b[X].disconnect(tt))}P=null,F=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",B),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,ot=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=m.stencil?Ki:Zi,ot=m.stencil?ls:Ri);let st={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(st),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new _n(d.textureWidth,d.textureHeight,{format:ln,type:Vn,depthTexture:new Nr(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _n(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ut.setContext(i),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(X){for(let tt=0;tt<X.removed.length;tt++){let yt=X.removed[tt],ot=S.indexOf(yt);ot>=0&&(S[ot]=null,b[ot].disconnect(yt))}for(let tt=0;tt<X.added.length;tt++){let yt=X.added[tt],ot=S.indexOf(yt);if(ot===-1){for(let st=0;st<b.length;st++)if(st>=S.length){S.push(yt),ot=st;break}else if(S[st]===null){S[st]=yt,ot=st;break}if(ot===-1)break}let Tt=b[ot];Tt&&Tt.connect(yt)}}let z=new I,Z=new I;function H(X,tt,yt){z.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);let ot=z.distanceTo(Z),Tt=tt.projectionMatrix.elements,st=yt.projectionMatrix.elements,bt=Tt[14]/(Tt[10]-1),Xt=Tt[14]/(Tt[10]+1),jt=(Tt[9]+1)/Tt[5],Bt=(Tt[9]-1)/Tt[5],L=(Tt[8]-1)/Tt[0],ae=(st[8]+1)/st[0],kt=bt*L,It=bt*ae,_t=ot/(-L+ae),qt=_t*-L;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qt),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Et=bt+_t,R=Xt+_t,M=kt-qt,k=It+(ot-qt),$=jt*Xt/R*Et,j=Bt*Xt/R*Et;X.projectionMatrix.makePerspective(M,k,$,j,Et,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function et(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let tt=X.near,yt=X.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),x.near=T.near=w.near=tt,x.far=T.far=w.far=yt,(P!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,F=x.far),w.layers.mask=X.layers.mask|2,T.layers.mask=X.layers.mask|4,x.layers.mask=w.layers.mask|T.layers.mask;let ot=X.parent,Tt=x.cameras;et(x,ot);for(let st=0;st<Tt.length;st++)et(Tt[st],ot);Tt.length===2?H(x,w,T):x.projectionMatrix.copy(w.projectionMatrix),at(X,x,ot)};function at(X,tt,yt){yt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(yt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Gs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ht=null;function xt(X,tt){if(h=tt.getViewerPose(c||a),_=tt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ot=!1;yt.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let bt=0;bt<yt.length;bt++){let Xt=yt[bt],jt=null;if(f!==null)jt=f.getViewport(Xt);else{let L=u.getViewSubImage(d,Xt);jt=L.viewport,bt===0&&(t.setRenderTargetTextures(y,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(y))}let Bt=v[bt];Bt===void 0&&(Bt=new Ne,Bt.layers.enable(bt),Bt.viewport=new ne,v[bt]=Bt),Bt.matrix.fromArray(Xt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Xt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(jt.x,jt.y,jt.width,jt.height),bt===0&&(x.matrix.copy(Bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(Bt)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let bt=u.getDepthInformation(yt[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,i.renderState)}}for(let yt=0;yt<b.length;yt++){let ot=S[yt],Tt=b[yt];ot!==null&&Tt!==void 0&&Tt.update(ot,tt,c||a)}ht&&ht(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}let Ut=new Gd;Ut.setAnimationLoop(xt),this.setAnimationLoop=function(X){ht=X},this.dispose=function(){}}},us=new Be,Hv=new se;function Vv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),b=y.envMap,S=y.envMapRotation;b&&(m.envMap.value=b,us.copy(S),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(us)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gv(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let S=b.program;n.uniformBlockBinding(y,S)}function c(y,b){let S=i[y.id];S===void 0&&(_(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));let A=b.program;n.updateUBOMapping(y,A);let C=t.render.frame;r[y.id]!==C&&(d(y),r[y.id]=C)}function h(y){let b=u();y.__bindingPointIndex=b;let S=s.createBuffer(),A=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,A,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=i[y.id],S=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let C=0,w=S.length;C<w;C++){let T=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,x=T.length;v<x;v++){let P=T[v];if(f(P,C,v,A)===!0){let F=P.__offset,U=Array.isArray(P.value)?P.value:[P.value],B=0;for(let q=0;q<U.length;q++){let z=U[q],Z=g(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,F+B,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,S,A){let C=y.value,w=b+"_"+S;if(A[w]===void 0)return typeof C=="number"||typeof C=="boolean"?A[w]=C:A[w]=C.clone(),!0;{let T=A[w];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return A[w]=C,!0}else if(T.equals(C)===!1)return T.copy(C),!0}return!1}function _(y){let b=y.uniforms,S=0,A=16;for(let w=0,T=b.length;w<T;w++){let v=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,P=v.length;x<P;x++){let F=v[x],U=Array.isArray(F.value)?F.value:[F.value];for(let B=0,q=U.length;B<q;B++){let z=U[B],Z=g(z),H=S%A,et=H%Z.boundary,at=H+et;S+=et,at!==0&&A-at<Z.storage&&(S+=A-at),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=Z.storage}}}let C=S%A;return C>0&&(S+=A-C),y.__size=S,y.__cache={},this}function g(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var sl=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this.toneMapping=li,this.toneMappingExposure=1;let S=this,A=!1,C=0,w=0,T=null,v=-1,x=null,P=new ne,F=new ne,U=null,B=new At(0),q=0,z=e.width,Z=e.height,H=1,et=null,at=null,ht=new ne(0,0,z,Z),xt=new ne(0,0,z,Z),Ut=!1,X=new Zs,tt=!1,yt=!1;this.transmissionResolutionScale=1;let ot=new se,Tt=new se,st=new I,bt=new ne,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jt=!1;function Bt(){return T===null?H:1}let L=n;function ae(E,N){return e.getContext(E,N)}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"174"}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){let N="webgl2";if(L=ae(N,E),L===null)throw ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let kt,It,_t,qt,Et,R,M,k,$,j,J,Mt,ct,ft,Ht,nt,gt,W,rt,Q,Rt,wt,Jt,D;function lt(){kt=new o_(L),kt.init(),wt=new Bv(L,kt),It=new t_(L,kt,t,wt),_t=new Nv(L,kt),It.reverseDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),qt=new h_(L),Et=new bv,R=new Ov(L,kt,_t,Et,It,wt,qt),M=new n_(S),k=new a_(S),$=new gm(L),Jt=new Q0(L,$),j=new l_(L,$,qt,Jt),J=new d_(L,j,$,qt),rt=new u_(L,It,R),nt=new e_(Et),Mt=new Sv(S,M,k,kt,It,Jt,nt),ct=new Vv(S,Et),ft=new Tv,Ht=new Iv(kt),W=new K0(S,M,k,_t,J,f,l),gt=new Uv(S,J,It),D=new Gv(L,qt,It,_t),Q=new j0(L,kt,qt),Rt=new c_(L,kt,qt),qt.programs=Mt.programs,S.capabilities=It,S.extensions=kt,S.properties=Et,S.renderLists=ft,S.shadowMap=gt,S.state=_t,S.info=qt}lt();let Y=new $c(S,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(z,Z,!1))},this.getSize=function(E){return E.set(z,Z)},this.setSize=function(E,N,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,Z=N,e.width=Math.floor(E*H),e.height=Math.floor(N*H),V===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(z*H,Z*H).floor()},this.setDrawingBufferSize=function(E,N,V){z=E,Z=N,H=V,e.width=Math.floor(E*V),e.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,N,V,G){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,N,V,G),_t.viewport(P.copy(ht).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,N,V,G){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,N,V,G),_t.scissor(F.copy(xt).multiplyScalar(H).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(E){_t.setScissorTest(Ut=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,V=!0){let G=0;if(E){let O=!1;if(T!==null){let it=T.texture.format;O=it===Ao||it===wo||it===To}if(O){let it=T.texture.type,pt=it===Vn||it===Ri||it===$s||it===ls||it===bo||it===Eo,vt=W.getClearColor(),St=W.getClearAlpha(),Dt=vt.r,Ft=vt.g,Ct=vt.b;pt?(_[0]=Dt,_[1]=Ft,_[2]=Ct,_[3]=St,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Dt,g[1]=Ft,g[2]=Ct,g[3]=St,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}N&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),W.dispose(),ft.dispose(),Ht.dispose(),Et.dispose(),M.dispose(),k.dispose(),J.dispose(),Jt.dispose(),D.dispose(),Mt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ua),Y.removeEventListener("sessionend",zi),Hi.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=qt.autoReset,N=gt.enabled,V=gt.autoUpdate,G=gt.needsUpdate,O=gt.type;lt(),qt.autoReset=E,gt.enabled=N,gt.autoUpdate=V,gt.needsUpdate=G,gt.type=O}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){let N=E.target;N.removeEventListener("dispose",Lt),te(N)}function te(E){xe(E),Et.remove(E)}function xe(E){let N=Et.get(E).programs;N!==void 0&&(N.forEach(function(V){Mt.releaseProgram(V)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,G,O,it){N===null&&(N=Xt);let pt=O.isMesh&&O.matrixWorld.determinant()<0,vt=gp(E,N,V,G,O);_t.setMaterial(G,pt);let St=V.index,Dt=1;if(G.wireframe===!0){if(St=j.getWireframeAttribute(V),St===void 0)return;Dt=2}let Ft=V.drawRange,Ct=V.attributes.position,Yt=Ft.start*Dt,Kt=(Ft.start+Ft.count)*Dt;it!==null&&(Yt=Math.max(Yt,it.start*Dt),Kt=Math.min(Kt,(it.start+it.count)*Dt)),St!==null?(Yt=Math.max(Yt,0),Kt=Math.min(Kt,St.count)):Ct!=null&&(Yt=Math.max(Yt,0),Kt=Math.min(Kt,Ct.count));let Ee=Kt-Yt;if(Ee<0||Ee===1/0)return;Jt.setup(O,G,vt,V,St);let ye,$t=Q;if(St!==null&&(ye=$.get(St),$t=Rt,$t.setIndex(ye)),O.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*Bt()),$t.setMode(L.LINES)):$t.setMode(L.TRIANGLES);else if(O.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),_t.setLineWidth(Pt*Bt()),O.isLineSegments?$t.setMode(L.LINES):O.isLineLoop?$t.setMode(L.LINE_LOOP):$t.setMode(L.LINE_STRIP)}else O.isPoints?$t.setMode(L.POINTS):O.isSprite&&$t.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))$t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Pt=O._multiDrawStarts,Fe=O._multiDrawCounts,Qt=O._multiDrawCount,Pn=St?$.get(St).bytesPerElement:1,Es=Et.get(G).currentProgram.getUniforms();for(let pn=0;pn<Qt;pn++)Es.setValue(L,"_gl_DrawID",pn),$t.render(Pt[pn]/Pn,Fe[pn])}else if(O.isInstancedMesh)$t.renderInstances(Yt,Ee,O.count);else if(V.isInstancedBufferGeometry){let Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Fe=Math.min(V.instanceCount,Pt);$t.renderInstances(Yt,Ee,Fe)}else $t.render(Yt,Ee)};function Vt(E,N,V){E.transparent===!0&&E.side===ze&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,fa(E,N,V),E.side=si,E.needsUpdate=!0,fa(E,N,V),E.side=ze):fa(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),p=Ht.get(V),p.init(N),b.push(p),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let it=O.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){let vt=it[pt];Vt(vt,V,O),G.add(vt)}else Vt(it,V,O),G.add(it)}),p=b.pop(),G},this.compileAsync=function(E,N,V=null){let G=this.compile(E,N,V);return new Promise(O=>{function it(){if(G.forEach(function(pt){Et.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){O(E);return}setTimeout(it,10)}kt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Qe=null;function Ue(E){Qe&&Qe(E)}function ua(){Hi.stop()}function zi(){Hi.start()}let Hi=new Gd;Hi.setAnimationLoop(Ue),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(E){Qe=E,Y.setAnimationLoop(E),E===null?Hi.stop():Hi.start()},Y.addEventListener("sessionstart",ua),Y.addEventListener("sessionend",zi),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,N,T),p=Ht.get(E,b.length),p.init(N),b.push(p),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Tt),yt=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,yt),m=ft.get(E,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){let it=S.xr.getDepthSensingMesh();it!==null&&Ll(it,N,-1/0,S.sortObjects)}Ll(E,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(et,at),jt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,jt&&W.addToRenderList(m,E),this.info.render.frame++,tt===!0&&nt.beginShadows();let V=p.state.shadowsArray;gt.render(V,E,N),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let it=N.cameras;if(O.length>0)for(let pt=0,vt=it.length;pt<vt;pt++){let St=it[pt];qh(G,O,E,St)}jt&&W.render(E);for(let pt=0,vt=it.length;pt<vt;pt++){let St=it[pt];Xh(m,E,St,St.viewport)}}else O.length>0&&qh(G,O,E,N),jt&&W.render(E),Xh(m,E,N);T!==null&&w===0&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(S,E,N),Jt.resetDefaultState(),v=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],tt===!0&&nt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ll(E,N,V,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){G&&bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);let pt=J.update(E),vt=E.material;vt.visible&&m.push(E,pt,vt,V,bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let pt=J.update(E),vt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),bt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),bt.copy(pt.boundingSphere.center)),bt.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(vt)){let St=pt.groups;for(let Dt=0,Ft=St.length;Dt<Ft;Dt++){let Ct=St[Dt],Yt=vt[Ct.materialIndex];Yt&&Yt.visible&&m.push(E,pt,Yt,V,bt.z,Ct)}}else vt.visible&&m.push(E,pt,vt,V,bt.z,null)}}let it=E.children;for(let pt=0,vt=it.length;pt<vt;pt++)Ll(it[pt],N,V,G)}function Xh(E,N,V,G){let O=E.opaque,it=E.transmissive,pt=E.transparent;p.setupLightsView(V),tt===!0&&nt.setGlobalState(S.clippingPlanes,V),G&&_t.viewport(P.copy(G)),O.length>0&&da(O,N,V),it.length>0&&da(it,N,V),pt.length>0&&da(pt,N,V),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function qh(E,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new _n(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?Ci:Vn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let it=p.state.transmissionRenderTarget[G.id],pt=G.viewport||P;it.setSize(pt.z*S.transmissionResolutionScale,pt.w*S.transmissionResolutionScale);let vt=S.getRenderTarget();S.setRenderTarget(it),S.getClearColor(B),q=S.getClearAlpha(),q<1&&S.setClearColor(16777215,.5),S.clear(),jt&&W.render(V);let St=S.toneMapping;S.toneMapping=li;let Dt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),tt===!0&&nt.setGlobalState(S.clippingPlanes,G),da(E,V,G),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Ct=0,Yt=N.length;Ct<Yt;Ct++){let Kt=N[Ct],Ee=Kt.object,ye=Kt.geometry,$t=Kt.material,Pt=Kt.group;if($t.side===ze&&Ee.layers.test(G.layers)){let Fe=$t.side;$t.side=en,$t.needsUpdate=!0,Yh(Ee,V,G,ye,$t,Pt),$t.side=Fe,$t.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}S.setRenderTarget(vt),S.setClearColor(B,q),Dt!==void 0&&(G.viewport=Dt),S.toneMapping=St}function da(E,N,V){let G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,it=E.length;O<it;O++){let pt=E[O],vt=pt.object,St=pt.geometry,Dt=G===null?pt.material:G,Ft=pt.group;vt.layers.test(V.layers)&&Yh(vt,N,V,St,Dt,Ft)}}function Yh(E,N,V,G,O,it){E.onBeforeRender(S,N,V,G,O,it),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(S,N,V,G,E,it),O.transparent===!0&&O.side===ze&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,S.renderBufferDirect(V,N,G,O,E,it),O.side=si,O.needsUpdate=!0,S.renderBufferDirect(V,N,G,O,E,it),O.side=ze):S.renderBufferDirect(V,N,G,O,E,it),E.onAfterRender(S,N,V,G,O,it)}function fa(E,N,V){N.isScene!==!0&&(N=Xt);let G=Et.get(E),O=p.state.lights,it=p.state.shadowsArray,pt=O.state.version,vt=Mt.getParameters(E,O.state,it,N,V),St=Mt.getProgramCacheKey(vt),Dt=G.programs;G.environment=E.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(E.isMeshStandardMaterial?k:M).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Lt),Dt=new Map,G.programs=Dt);let Ft=Dt.get(St);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===pt)return $h(E,vt),Ft}else vt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(vt,S),Ft=Mt.acquireProgram(vt,St),Dt.set(St,Ft),G.uniforms=vt.uniforms;let Ct=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=nt.uniform),$h(E,vt),G.needsLights=vp(E),G.lightsStateVersion=pt,G.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function Zh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Qs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function $h(E,N){let V=Et.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function gp(E,N,V,G,O){N.isScene!==!0&&(N=Xt),R.resetTextureUnits();let it=N.fog,pt=G.isMeshStandardMaterial?N.environment:null,vt=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,St=(G.isMeshStandardMaterial?k:M).get(G.envMap||pt),Dt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ft=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!V.morphAttributes.position,Yt=!!V.morphAttributes.normal,Kt=!!V.morphAttributes.color,Ee=li;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ee=S.toneMapping);let ye=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=ye!==void 0?ye.length:0,Pt=Et.get(G),Fe=p.state.lights;if(tt===!0&&(yt===!0||E!==x)){let je=E===x&&G.id===v;nt.setState(G,E,je)}let Qt=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Fe.state.version||Pt.outputColorSpace!==vt||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==St||G.fog===!0&&Pt.fog!==it||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==nt.numPlanes||Pt.numIntersection!==nt.numIntersection)||Pt.vertexAlphas!==Dt||Pt.vertexTangents!==Ft||Pt.morphTargets!==Ct||Pt.morphNormals!==Yt||Pt.morphColors!==Kt||Pt.toneMapping!==Ee||Pt.morphTargetsCount!==$t)&&(Qt=!0):(Qt=!0,Pt.__version=G.version);let Pn=Pt.currentProgram;Qt===!0&&(Pn=fa(G,N,O));let Es=!1,pn=!1,dr=!1,pe=Pn.getUniforms(),Sn=Pt.uniforms;if(_t.useProgram(Pn.program)&&(Es=!0,pn=!0,dr=!0),G.id!==v&&(v=G.id,pn=!0),Es||x!==E){_t.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),pd(ot),md(ot),pe.setValue(L,"projectionMatrix",ot)):pe.setValue(L,"projectionMatrix",E.projectionMatrix),pe.setValue(L,"viewMatrix",E.matrixWorldInverse);let rn=pe.map.cameraPosition;rn!==void 0&&rn.setValue(L,st.setFromMatrixPosition(E.matrixWorld)),It.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pe.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,pn=!0,dr=!0)}if(O.isSkinnedMesh){pe.setOptional(L,O,"bindMatrix"),pe.setOptional(L,O,"bindMatrixInverse");let je=O.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),pe.setValue(L,"boneTexture",je.boneTexture,R))}O.isBatchedMesh&&(pe.setOptional(L,O,"batchingTexture"),pe.setValue(L,"batchingTexture",O._matricesTexture,R),pe.setOptional(L,O,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",O._indirectTexture,R),pe.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",O._colorsTexture,R));let bn=V.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&rt.update(O,V,Pn),(pn||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,pe.setValue(L,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Sn.envMap.value=St,Sn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Sn.envMapIntensity.value=N.environmentIntensity),pn&&(pe.setValue(L,"toneMappingExposure",S.toneMappingExposure),Pt.needsLights&&_p(Sn,dr),it&&G.fog===!0&&ct.refreshFogUniforms(Sn,it),ct.refreshMaterialUniforms(Sn,G,H,Z,p.state.transmissionRenderTarget[E.id]),Qs.upload(L,Zh(Pt),Sn,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qs.upload(L,Zh(Pt),Sn,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pe.setValue(L,"center",O.center),pe.setValue(L,"modelViewMatrix",O.modelViewMatrix),pe.setValue(L,"normalMatrix",O.normalMatrix),pe.setValue(L,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let je=G.uniformsGroups;for(let rn=0,Dl=je.length;rn<Dl;rn++){let Vi=je[rn];D.update(Vi,Pn),D.bind(Vi,Pn)}}return Pn}function _p(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function vp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,V){Et.get(E.texture).__webglTexture=N,Et.get(E.depthTexture).__webglTexture=V;let G=Et.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){let V=Et.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};let xp=L.createFramebuffer();this.setRenderTarget=function(E,N=0,V=0){T=E,C=N,w=V;let G=!0,O=null,it=!1,pt=!1;if(E){let St=Et.get(E);if(St.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(St.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(St.__hasExternalTextures)R.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ct=E.depthTexture;if(St.__boundDepthTexture!==Ct){if(Ct!==null&&Et.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(pt=!0);let Ft=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?O=Ft[N][V]:O=Ft[N],it=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[V]:O=Ft,P.copy(E.viewport),F.copy(E.scissor),U=E.scissorTest}else P.copy(ht).multiplyScalar(H).floor(),F.copy(xt).multiplyScalar(H).floor(),U=Ut;if(V!==0&&(O=xp),_t.bindFramebuffer(L.FRAMEBUFFER,O)&&G&&_t.drawBuffers(E,O),_t.viewport(P),_t.scissor(F),_t.setScissorTest(U),it){let St=Et.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,V)}else if(pt){let St=Et.get(E.texture),Dt=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.__webglTexture,V,Dt)}else if(E!==null&&V!==0){let St=Et.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,St.__webglTexture,V)}v=-1},this.readRenderTargetPixels=function(E,N,V,G,O,it,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt){_t.bindFramebuffer(L.FRAMEBUFFER,vt);try{let St=E.texture,Dt=St.format,Ft=St.type;if(!It.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&V>=0&&V<=E.height-O&&L.readPixels(N,V,G,O,wt.convert(Dt),wt.convert(Ft),it)}finally{let St=T!==null?Et.get(T).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,G,O,it,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt){let St=E.texture,Dt=St.format,Ft=St.type;if(!It.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-G&&V>=0&&V<=E.height-O){_t.bindFramebuffer(L.FRAMEBUFFER,vt);let Ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.bufferData(L.PIXEL_PACK_BUFFER,it.byteLength,L.STREAM_READ),L.readPixels(N,V,G,O,wt.convert(Dt),wt.convert(Ft),0);let Yt=T!==null?Et.get(T).__webglFramebuffer:null;_t.bindFramebuffer(L.FRAMEBUFFER,Yt);let Kt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fd(L,Kt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,it),L.deleteBuffer(Ct),L.deleteSync(Kt),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,V=0){E.isTexture!==!0&&(Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-V),O=Math.floor(E.image.width*G),it=Math.floor(E.image.height*G),pt=N!==null?N.x:0,vt=N!==null?N.y:0;R.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,pt,vt,O,it),_t.unbindTexture()};let yp=L.createFramebuffer(),Mp=L.createFramebuffer();this.copyTextureToTexture=function(E,N,V=null,G=null,O=0,it=null){E.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],N=arguments[2],it=arguments[3]||0,V=null),it===null&&(O!==0?(Pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=O,O=0):it=0);let pt,vt,St,Dt,Ft,Ct,Yt,Kt,Ee,ye=E.isCompressedTexture?E.mipmaps[it]:E.image;if(V!==null)pt=V.max.x-V.min.x,vt=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,Dt=V.min.x,Ft=V.min.y,Ct=V.isBox3?V.min.z:0;else{let bn=Math.pow(2,-O);pt=Math.floor(ye.width*bn),vt=Math.floor(ye.height*bn),E.isDataArrayTexture?St=ye.depth:E.isData3DTexture?St=Math.floor(ye.depth*bn):St=1,Dt=0,Ft=0,Ct=0}G!==null?(Yt=G.x,Kt=G.y,Ee=G.z):(Yt=0,Kt=0,Ee=0);let $t=wt.convert(N.format),Pt=wt.convert(N.type),Fe;N.isData3DTexture?(R.setTexture3D(N,0),Fe=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Fe=L.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Fe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let Qt=L.getParameter(L.UNPACK_ROW_LENGTH),Pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Es=L.getParameter(L.UNPACK_SKIP_PIXELS),pn=L.getParameter(L.UNPACK_SKIP_ROWS),dr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);let pe=E.isDataArrayTexture||E.isData3DTexture,Sn=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let bn=Et.get(E),je=Et.get(N),rn=Et.get(bn.__renderTarget),Dl=Et.get(je.__renderTarget);_t.bindFramebuffer(L.READ_FRAMEBUFFER,rn.__webglFramebuffer),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Dl.__webglFramebuffer);for(let Vi=0;Vi<St;Vi++)pe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(E).__webglTexture,O,Ct+Vi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.get(N).__webglTexture,it,Ee+Vi)),L.blitFramebuffer(Dt,Ft,pt,vt,Yt,Kt,pt,vt,L.DEPTH_BUFFER_BIT,L.NEAREST);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Et.has(E)){let bn=Et.get(E),je=Et.get(N);_t.bindFramebuffer(L.READ_FRAMEBUFFER,yp),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mp);for(let rn=0;rn<St;rn++)pe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bn.__webglTexture,O,Ct+rn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bn.__webglTexture,O),Sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,je.__webglTexture,it,Ee+rn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,je.__webglTexture,it),O!==0?L.blitFramebuffer(Dt,Ft,pt,vt,Yt,Kt,pt,vt,L.COLOR_BUFFER_BIT,L.NEAREST):Sn?L.copyTexSubImage3D(Fe,it,Yt,Kt,Ee+rn,Dt,Ft,pt,vt):L.copyTexSubImage2D(Fe,it,Yt,Kt,Dt,Ft,pt,vt);_t.bindFramebuffer(L.READ_FRAMEBUFFER,null),_t.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Sn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Fe,it,Yt,Kt,Ee,pt,vt,St,$t,Pt,ye.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Fe,it,Yt,Kt,Ee,pt,vt,St,$t,ye.data):L.texSubImage3D(Fe,it,Yt,Kt,Ee,pt,vt,St,$t,Pt,ye):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,it,Yt,Kt,pt,vt,$t,Pt,ye.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,it,Yt,Kt,ye.width,ye.height,$t,ye.data):L.texSubImage2D(L.TEXTURE_2D,it,Yt,Kt,pt,vt,$t,Pt,ye);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Es),L.pixelStorei(L.UNPACK_SKIP_ROWS,pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,dr),it===0&&N.generateMipmaps&&L.generateMipmap(Fe),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,N,V=null,G=null,O=0){return E.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,V,G,O)},this.initRenderTarget=function(E){Et.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,_t.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Ze=1200,er=1664,Zd={ivory:{bgTop:"#fffdf8",bgBot:"#f7f1e3",border:"#d9c8a9",accent:"#b8945a",title:"#242b42",body:"#3a425c",muted:"#7a8096"},blush:{bgTop:"#fff9fb",bgBot:"#f8e9f0",border:"#dfc0ce",accent:"#b97895",title:"#3a2434",body:"#553a4d",muted:"#8f6f85"},sky:{bgTop:"#f8fbff",bgBot:"#e8f1fb",border:"#bfd1e8",accent:"#5f84b8",title:"#1b2c47",body:"#314666",muted:"#6c82a3"},lavender:{bgTop:"#faf8ff",bgBot:"#ece7f8",border:"#cbc0e6",accent:"#7c69b5",title:"#272146",body:"#413a66",muted:"#7b739e"}};function $r(s,t,e){if(!t||typeof t!="string")return[];let n=t.replace(/\r\n/g,`
`).split(`
`),i=[];for(let r of n){if(r===""){i.push("");continue}let a="";for(let o of r){let l=a+o;if(s.measureText(l).width>e&&a.length>0){let c=a.lastIndexOf(" ");c>a.length*.45&&/[A-Za-z0-9]/.test(o)?(i.push(a.slice(0,c)),a=a.slice(c+1)+o):(i.push(a),a=o===" "?"":o)}else a=l}(a.length>0||r.length===0)&&i.push(a)}return i}function Wv(s,t,e,n){let i=s.createLinearGradient(0,0,0,e);i.addColorStop(0,n.bgTop),i.addColorStop(1,n.bgBot),s.fillStyle=i,s.fillRect(0,0,t,e),s.save(),s.globalAlpha=.035;for(let a=0;a<650;a++){let o=a*7919%1e3/1e3*t,l=a*6271%1e3/1e3*e;s.fillStyle=a%2===0?"#5c4d3c":"#ffffff",s.fillRect(o,l,2,2)}s.restore(),s.save(),s.strokeStyle=n.border,s.lineWidth=4,s.strokeRect(32,32,t-64,e-64),s.strokeStyle=n.accent,s.globalAlpha=.42,s.lineWidth=1.5,s.strokeRect(46,46,t-92,e-92);let r=[[46,46],[t-46,46],[46,e-46],[t-46,e-46]];s.fillStyle=n.accent,s.globalAlpha=.65;for(let[a,o]of r)Jd(s,a,o,8);s.restore()}function Jd(s,t,e,n){s.beginPath(),s.moveTo(t,e-n),s.quadraticCurveTo(t,e,t+n,e),s.quadraticCurveTo(t,e,t,e+n),s.quadraticCurveTo(t,e,t-n,e),s.quadraticCurveTo(t,e,t,e-n),s.closePath(),s.fill()}function Kd(s,t,e,n,i){let r=s.naturalWidth||s.width||1,a=s.naturalHeight||s.height||1,o=r/a,l=n/i,c,h;o>l?(c=n,h=n/o):(h=i,c=i*o);let u=t+(n-c)*.5,d=e+(i-h)*.5;return{dx:u,dy:d,drawW:c,drawH:h}}function $d(s,t,e,n,i,r,a){let o=t.naturalWidth||t.width||1,l=t.naturalHeight||t.height||1,c=o/l,h=i/r;if(s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",a==="cover"){s.save(),s.beginPath(),s.roundRect(e,n,i,r,18),s.clip();let d,f,_,g;return c>h?(f=r,d=r*c,_=e-(d-i)*.5,g=n):(d=i,f=i/c,_=e,g=n-(f-r)*.5),s.drawImage(t,_,g,d,f),s.restore(),{dx:e,dy:n,drawW:i,drawH:r}}let u=Kd(t,e,n,i,r);return s.save(),s.beginPath(),s.roundRect(u.dx,u.dy,u.drawW,u.drawH,16),s.clip(),s.drawImage(t,u.dx,u.dy,u.drawW,u.drawH),s.restore(),u}function Qd(s){let t=document.createElement("canvas");t.width=Ze,t.height=er;let e=t.getContext("2d"),n=Zd[s.paperTone]||Zd.ivory;Wv(e,Ze,er,n);let i=!!s.imageElement,r=(s.title||"").trim(),a=(s.text||"").trim(),o=i?s.layout||"polaroid":"letter",l=s.imageFit||"contain";if(i&&o==="full"){let C=Ze-120,w=r||a?er-290:er-120;if($d(e,s.imageElement,60,60,C,w,l),r||a){let T=60+w+34;if(e.textAlign="center",e.textBaseline="top",r&&(e.fillStyle=n.title,e.font='600 42px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif',e.fillText(r,Ze/2,T,C)),a){e.fillStyle=n.body,e.font='400 31px "PingFang SC", "Microsoft YaHei", sans-serif';let v=$r(e,a,C-40).slice(0,3),x=r?T+58:T+12;v.forEach((P,F)=>{e.fillText(P,Ze/2,x+F*44,C)})}}return t}if(i){let w=Ze-176,T=r||a?1020:er-192,v=l==="cover"?{dx:88,dy:96,drawW:w,drawH:T}:Kd(s.imageElement,88,96,w,T);e.save(),e.fillStyle="rgba(20, 28, 48, 0.085)",e.beginPath(),e.roundRect(v.dx+5,v.dy+7,v.drawW,v.drawH,16),e.fill(),e.restore(),$d(e,s.imageElement,88,96,w,T,l),e.save(),e.strokeStyle=n.border,e.lineWidth=2.5,e.beginPath(),e.roundRect(v.dx,v.dy,v.drawW,v.drawH,16),e.stroke(),e.restore();let x=96+T+52,P=w-24;e.textAlign="center",e.textBaseline="top";let F=x;if(r&&(e.fillStyle=n.title,e.font='600 52px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif',$r(e,r,P).slice(0,2).forEach(B=>{e.fillText(B,Ze/2,F),F+=66}),F+=14),a){e.fillStyle=n.body,e.font='400 38px "PingFang SC", "Microsoft YaHei", sans-serif';let U=r?5:7;$r(e,a,P).slice(0,U).forEach(q=>{e.fillText(q,Ze/2,F),F+=56})}return t}let c=128,h=Ze-c*2;e.save(),e.fillStyle=n.accent,e.globalAlpha=.72,Jd(e,Ze/2,152,16),e.strokeStyle=n.accent,e.globalAlpha=.3,e.lineWidth=2,e.beginPath(),e.moveTo(c+90,152),e.lineTo(Ze/2-32,152),e.moveTo(Ze/2+32,152),e.lineTo(Ze-c-90,152),e.stroke(),e.restore(),e.textBaseline="top";let u=a.length>140?40:a.length>70?46:54,d=Math.round(u*1.55);e.font='600 64px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';let f=r?$r(e,r,h).slice(0,3):[];e.font=`400 ${u}px "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif`;let _=a?$r(e,a,h).slice(0,15):[],g=f.length*84+(f.length?42:0),m=_.length*d,p=g+m,y=228,b=er-375,S=y+Math.max(0,(b-p)*.42);if(e.textAlign="center",f.length>0){e.fillStyle=n.title,e.font='600 64px "Noto Serif SC", "Songti SC", "PingFang SC", Georgia, serif';for(let A of f)e.fillText(A,Ze/2,S),S+=84;e.fillStyle=n.accent,e.fillRect(Ze/2-30,S+10,60,2.5),S+=52}if(_.length>0){e.fillStyle=n.body,e.font=`400 ${u}px "Noto Serif SC", "PingFang SC", "Microsoft YaHei", sans-serif`;for(let A of _)e.fillText(A,Ze/2,S),S+=d}return t}function Kc(s){let t=Qd(s),e=document.createElement("canvas");e.width=216,e.height=300;let n=e.getContext("2d");return n.imageSmoothingEnabled=!0,n.imageSmoothingQuality="high",n.drawImage(t,0,0,e.width,e.height),e.toDataURL("image/jpeg",.85)}function jd(s,t=8){let e=Qd(s),n=new we(e);return n.colorSpace=oe,n.anisotropy=Math.min(16,t||8),n.minFilter=Hn,n.magFilter=Xe,n.generateMipmaps=!0,n.needsUpdate=!0,{texture:n}}var Xv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,qv=`
  uniform sampler2D tDiffuse;
  uniform vec2 uDirection;
  uniform vec2 uResolution;
  uniform float uBlurRadius;
  uniform float uVignette;
  uniform int uFinalPass;
  varying vec2 vUv;

  void main() {
    vec2 texel = uDirection * (uBlurRadius / uResolution);
    vec4 color = vec4(0.0);

    // 9-tap Gaussian kernel
    color += texture2D(tDiffuse, vUv - texel * 4.0) * 0.051;
    color += texture2D(tDiffuse, vUv - texel * 3.0) * 0.091;
    color += texture2D(tDiffuse, vUv - texel * 2.0) * 0.122;
    color += texture2D(tDiffuse, vUv - texel * 1.0) * 0.153;
    color += texture2D(tDiffuse, vUv)                * 0.166;
    color += texture2D(tDiffuse, vUv + texel * 1.0) * 0.153;
    color += texture2D(tDiffuse, vUv + texel * 2.0) * 0.122;
    color += texture2D(tDiffuse, vUv + texel * 3.0) * 0.091;
    color += texture2D(tDiffuse, vUv + texel * 4.0) * 0.051;

    if (uFinalPass == 1) {
      float dist = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.32, 0.95, dist) * uVignette;
      color.rgb *= (1.0 - vig);
      gl_FragColor = color;
      #include <colorspace_fragment>
    } else {
      gl_FragColor = color;
    }
  }
`,Yv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Zv=`
  uniform float uTime;
  uniform float uMilkyWay;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.05;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    // Deep velvet midnight-blue starry sky vertical gradient (linear space)
    vec3 zenith = vec3(0.0022, 0.0055, 0.022);
    vec3 midSky = vec3(0.0055, 0.014, 0.046);
    vec3 horizon = vec3(0.011, 0.026, 0.076);

    float h = clamp(vUv.y, 0.0, 1.0);
    vec3 col = mix(horizon, midSky, smoothstep(0.0, 0.52, h));
    col = mix(col, zenith, smoothstep(0.45, 1.0, h));

    // Subtle diagonal Milky Way nebula cloud
    vec2 diagUv = vec2(vUv.x * 1.4 - vUv.y * 0.9, vUv.y * 1.2 + vUv.x * 0.4);
    float band = exp(-pow((vUv.y - (0.35 + vUv.x * 0.42)) * 3.2, 2.0));
    float neb = fbm(diagUv * 3.8 + vec2(uTime * 0.012, 0.0));
    float neb2 = fbm(diagUv * 7.2 - vec2(0.0, uTime * 0.008));
    vec3 nebulaColor = mix(vec3(0.025, 0.065, 0.19), vec3(0.11, 0.22, 0.48), neb2);

    float milkyStrength = 0.22 + uMilkyWay * 0.65;
    col += nebulaColor * band * neb * milkyStrength;

    // Soft moonlit atmospheric glow near bottom-center behind envelope
    float glow = exp(-length((vUv - vec2(0.5, 0.26)) * vec2(1.4, 2.2)) * 2.6);
    col += vec3(0.018, 0.042, 0.11) * glow * 0.55;

    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
  }
`;function $v(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=64/2,i=e.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.2,"rgba(235,245,255,0.9)"),i.addColorStop(.5,"rgba(155,205,255,0.28)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,64,64);let r=new we(t);return r.colorSpace=oe,r}var al=class{constructor(t){this.canvas=t,this.width=t.clientWidth||window.innerWidth,this.height=t.clientHeight||window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.renderer=new sl({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height,!1),this.renderer.outputColorSpace=oe,this.renderer.autoClear=!1,this.camera=new Ne(42,this.width/this.height,.1,140),this.cameraBasePos=new I(0,.35,7.6),this.cameraBaseLook=new I(0,.2,0),this.cameraOffset=new I(0,0,0),this.cameraLookOffset=new I(0,0,0),this.cameraBreath=1,this.camera.position.copy(this.cameraBasePos),this.camera.lookAt(this.cameraBaseLook),this.bgScene=new es,this.fgScene=new es,this.fgContentGroup=new Oe,this.fgScene.add(this.fgContentGroup),this.dofAmount=0,this.milkyWayIntensity=0,this._setupLighting(this.bgScene),this._setupLighting(this.fgScene,!0),this._setupSkyBackdrop(),this._setupStarfield(),this._setupAmbientMotes(),this._setupBlurPipeline(),this._onResize=()=>this.resize(),window.addEventListener("resize",this._onResize),typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(()=>this.resize()),this._resizeObserver.observe(this.canvas))}_setupLighting(t,e=!1){let n=new zr("#dce8ff",e?1.35:1.15);if(t.add(n),!e){let a=new Br("#eef5ff","#5d7ab8",.85);t.add(a)}let i=new rs("#fff7ea",e?1.1:1.55);i.position.set(3.5,5.5,6.5),t.add(i);let r=new rs("#7cb6ff",e?.55:1.05);if(r.position.set(-4.5,2.5,-3.5),t.add(r),!e){let a=new rs("#e8f1ff",.65);a.position.set(-1.5,-.5,6),t.add(a);let o=new kr("#ffdca8",1.25,13);o.position.set(0,-1.5,2.5),t.add(o)}}_setupSkyBackdrop(){let t=new qe(66,40);this.skyMat=new on({uniforms:{uTime:{value:0},uMilkyWay:{value:0}},vertexShader:Yv,fragmentShader:Zv,depthWrite:!1}),this.skyMesh=new de(t,this.skyMat),this.skyMesh.position.set(0,.8,-28),this.bgScene.add(this.skyMesh)}_setupStarfield(){this.starTex=$v(),this.starLayers=[];let t=(e,n,i,r,a,o,l)=>{let c=new Float32Array(e*3),h=new Float32Array(e*3),u=new Float32Array(e*3),d=new Float32Array(e),f=[new At("#ffffff"),new At("#cbe4ff"),new At("#ffe7bd"),new At("#a8c8ff")];for(let p=0;p<e;p++){c[p*3]=(Math.random()-.5)*n,c[p*3+1]=-6+Math.random()*i,c[p*3+2]=r+Math.random()*(a-r);let y=f[p%f.length];h[p*3]=y.r,h[p*3+1]=y.g,h[p*3+2]=y.b,u[p*3]=y.r,u[p*3+1]=y.g,u[p*3+2]=y.b,d[p]=Math.random()*Math.PI*2}let _=new ke;_.setAttribute("position",new ue(c,3)),_.setAttribute("color",new ue(h,3));let g=new ai({size:o,map:this.starTex,vertexColors:!0,transparent:!0,opacity:l,blending:zn,depthWrite:!1}),m=new Ei(_,g);this.bgScene.add(m),this.starLayers.push({points:m,geo:_,mat:g,baseColors:u,phases:d,count:e})};t(580,46,30,-2,-22,.28,.95),t(260,40,26,-1.5,-19,.48,.85),t(80,34,22,-1.5,-16,.78,.75)}_setupAmbientMotes(){let e=new Float32Array(216),n=new Float32Array(216),i=[],r=new At("#ffe8b8"),a=new At("#a8d4ff");for(let c=0;c<72;c++){let h=(Math.random()-.5)*11,u=-3.6+Math.random()*8.2,d=-3.5+Math.random()*6;e[c*3]=h,e[c*3+1]=u,e[c*3+2]=d;let f=c%2===0?r:a;n[c*3]=f.r,n[c*3+1]=f.g,n[c*3+2]=f.b,i.push({bx:h,by:u,bz:d,speed:.12+Math.random()*.22,swayFreq:.5+Math.random()*.8,phase:Math.random()*Math.PI*2})}let o=new ke;o.setAttribute("position",new ue(e,3)),o.setAttribute("color",new ue(n,3));let l=new ai({size:.14,map:this.starTex,vertexColors:!0,transparent:!0,opacity:.65,blending:zn,depthWrite:!1});this.motesPoints=new Ei(o,l),this.motesPoints.frustumCulled=!1,this.motesMeta=i,this.bgScene.add(this.motesPoints)}_setupBlurPipeline(){let t=Math.max(1,Math.floor(this.width*this.dpr*.5)),e=Math.max(1,Math.floor(this.height*this.dpr*.5)),n={minFilter:Xe,magFilter:Xe,format:ln,type:Ci,depthBuffer:!0};this.rtA=new _n(t,e,n),this.rtB=new _n(t,e,n),this.blurScene=new es,this.blurCamera=new ss(-1,1,1,-1,0,1),this.blurMat=new on({uniforms:{tDiffuse:{value:null},uDirection:{value:new Nt(1,0)},uResolution:{value:new Nt(t,e)},uBlurRadius:{value:2.2},uVignette:{value:.35},uFinalPass:{value:0}},vertexShader:Xv,fragmentShader:qv,depthTest:!1,depthWrite:!1}),this.blurQuad=new de(new qe(2,2),this.blurMat),this.blurScene.add(this.blurQuad)}resize(){let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;if(t<=0||e<=0)return;this.width=t,this.height=e,this.dpr=Math.min(window.devicePixelRatio||1,2),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1);let n=Math.max(1,Math.floor(t*this.dpr*.5)),i=Math.max(1,Math.floor(e*this.dpr*.5));this.rtA.setSize(n,i),this.rtB.setSize(n,i),this.blurMat.uniforms.uResolution.value.set(n,i)}update(t){this.skyMat.uniforms.uTime.value=t,this.skyMat.uniforms.uMilkyWay.value=this.milkyWayIntensity;let e=this.cameraBreath,n=Math.sin(t*.42)*.08*e,i=Math.cos(t*.31)*.045*e,r=Math.sin(t*.24)*.06*e;this.camera.position.set(this.cameraBasePos.x+this.cameraOffset.x+n,this.cameraBasePos.y+this.cameraOffset.y+i,this.cameraBasePos.z+this.cameraOffset.z+r),this.camera.lookAt(this.cameraBaseLook.x+this.cameraLookOffset.x,this.cameraBaseLook.y+this.cameraLookOffset.y,this.cameraBaseLook.z+this.cameraLookOffset.z);for(let a=0;a<this.starLayers.length;a++){let o=this.starLayers[a];o.points.rotation.z=Math.sin(t*.04+a)*.018,o.points.position.x=Math.sin(t*.06+a*1.4)*.14;let l=o.geo.attributes.color,c=3,h=Math.floor(t*20)%c;for(let u=h;u<o.count;u+=c){let d=.62+.38*Math.sin(t*2.2+o.phases[u]);l.setXYZ(u,o.baseColors[u*3]*d,o.baseColors[u*3+1]*d,o.baseColors[u*3+2]*d)}l.needsUpdate=!0}if(this.motesPoints&&this.motesMeta){let a=this.motesPoints.geo?this.motesPoints.geo.attributes.position:this.motesPoints.geometry.attributes.position,o=this.motesMeta.length;for(let l=0;l<o;l++){let c=this.motesMeta[l],h=8.2,u=((c.by+t*c.speed+3.6)%h+h)%h-3.6,d=c.bx+Math.sin(t*c.swayFreq+c.phase)*.35,f=c.bz+Math.cos(t*c.swayFreq*.8+c.phase)*.25;a.setXYZ(l,d,u,f)}a.needsUpdate=!0}}render(){if(this.renderer.setRenderTarget(null),this.renderer.clear(),this.dofAmount<=.008)this.renderer.render(this.bgScene,this.camera);else{this.renderer.setRenderTarget(this.rtA),this.renderer.clear(),this.renderer.render(this.bgScene,this.camera);let t=this.dofAmount*1.25,e=this.dofAmount*1.85;this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.uDirection.value.set(1,0),this.blurMat.uniforms.uBlurRadius.value=t,this.blurMat.uniforms.uFinalPass.value=0,this.renderer.setRenderTarget(this.rtB),this.renderer.clear(),this.renderer.render(this.blurScene,this.blurCamera),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.uDirection.value.set(0,1),this.blurMat.uniforms.uBlurRadius.value=t,this.blurMat.uniforms.uFinalPass.value=0,this.renderer.setRenderTarget(this.rtA),this.renderer.clear(),this.renderer.render(this.blurScene,this.blurCamera),this.blurMat.uniforms.tDiffuse.value=this.rtA.texture,this.blurMat.uniforms.uDirection.value.set(1,0),this.blurMat.uniforms.uBlurRadius.value=e,this.blurMat.uniforms.uFinalPass.value=0,this.renderer.setRenderTarget(this.rtB),this.renderer.clear(),this.renderer.render(this.blurScene,this.blurCamera),this.blurMat.uniforms.tDiffuse.value=this.rtB.texture,this.blurMat.uniforms.uDirection.value.set(0,1),this.blurMat.uniforms.uBlurRadius.value=e,this.blurMat.uniforms.uVignette.value=this.dofAmount*.34,this.blurMat.uniforms.uFinalPass.value=1,this.renderer.setRenderTarget(null),this.renderer.render(this.blurScene,this.blurCamera)}this.fgContentGroup.children.length>0&&(this.renderer.clearDepth(),this.renderer.render(this.fgScene,this.camera))}dispose(){window.removeEventListener("resize",this._onResize),this._resizeObserver?.disconnect(),this.rtA.dispose(),this.rtB.dispose(),this.blurMat.dispose(),this.blurQuad.geometry.dispose(),this.skyMat.dispose(),this.skyMesh.geometry.dispose(),this.starTex.dispose();for(let t of this.starLayers)t.geo.dispose(),t.mat.dispose();this.motesPoints&&(this.motesPoints.geometry.dispose(),this.motesPoints.material.dispose()),this.renderer.dispose()}};var tf={"pearl-ivory":{laceThread:"#ffffff",laceFill:"#f4f7ff",laceShadow:"#c3cde0",laceEmissive:"#ffffff",laceEmissiveIntensity:.52,backTint:"#d8e0ef",letterPaper:"#efe6d2",letterPaperEdge:"#e4d8be",letterInk:"rgba(112, 95, 72, 0.30)"},"midnight-gold":{laceThread:"#fff6da",laceFill:"#f2d996",laceShadow:"#9a732a",laceEmissive:"#fff0c7",laceEmissiveIntensity:.42,backTint:"#d2b470",letterPaper:"#eee3cb",letterPaperEdge:"#e2d4b5",letterInk:"rgba(105, 86, 54, 0.30)"},"lavender-mist":{laceThread:"#ffffff",laceFill:"#ede4ff",laceShadow:"#a38ed0",laceEmissive:"#f4ecff",laceEmissiveIntensity:.48,backTint:"#d3c4ed",letterPaper:"#efe8f5",letterPaperEdge:"#e2d7ec",letterInk:"rgba(100, 84, 124, 0.28)"}};function nf(s=1337){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function De(s,t,e,n,i){s.save(),s.lineCap="round",s.lineJoin="round",s.translate(1.2,1.2),s.strokeStyle=i.laceShadow,s.lineWidth=n+.8,e(s),s.stroke(),s.restore(),s.save(),s.lineCap="round",s.lineJoin="round",s.strokeStyle=i.laceThread,s.lineWidth=n,e(s),s.stroke(),s.restore(),t.save(),t.lineCap="round",t.lineJoin="round",t.strokeStyle="#ffffff",t.lineWidth=n,e(t),t.stroke(),t.restore()}function sf(s,t,e,n,i,r,a,o){s.save(),s.translate(e,n),s.rotate(r),t.save(),t.translate(e,n),t.rotate(r);let l=a,c=Math.max(2.7,i*.088);for(let d=0;d<l;d++){let f=d/l*Math.PI*2;s.save(),s.rotate(f),t.save(),t.rotate(f);let _=i*.96,g=i*.45,m=y=>{y.beginPath(),y.moveTo(i*.24,0),y.bezierCurveTo(i*.42,-g,_*.94,-g*.76,_,0),y.bezierCurveTo(_*.94,g*.76,i*.42,g,i*.24,0),y.closePath()};m(s),s.fillStyle=o.laceFill,s.fill(),m(t),t.fillStyle="#ffffff",t.fill(),De(s,t,m,c,o);let p=y=>{y.beginPath(),y.ellipse(i*.63,0,i*.22,i*.14,0,0,Math.PI*2)};p(t),t.fillStyle="#000000",t.fill(),s.strokeStyle=o.laceShadow,s.lineWidth=1.2,p(s),s.stroke(),s.fillStyle=o.laceThread,s.beginPath(),s.arc(_+2.6,0,1.9,0,Math.PI*2),s.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(_+2.6,0,1.9,0,Math.PI*2),t.fill(),s.restore(),t.restore()}let h=Math.max(5,l-2);for(let d=0;d<h;d++){let f=(d+.5)/h*Math.PI*2;s.save(),s.rotate(f),t.save(),t.rotate(f),De(s,t,g=>{g.beginPath(),g.moveTo(i*.18,0),g.quadraticCurveTo(i*.42,-i*.22,i*.54,0),g.quadraticCurveTo(i*.42,i*.22,i*.18,0),g.closePath()},c*.85,o),s.restore(),t.restore()}let u=i*.22;De(s,t,d=>{d.beginPath(),d.arc(0,0,u,0,Math.PI*2)},c*.88,o),t.fillStyle="#000000",t.beginPath(),t.arc(0,0,u*.56,0,Math.PI*2),t.fill();for(let d=0;d<6;d++){let f=d/6*Math.PI*2;De(s,t,_=>{_.beginPath(),_.moveTo(Math.cos(f)*2.4,Math.sin(f)*2.4),_.lineTo(Math.cos(f)*u,Math.sin(f)*u)},1.6,o)}s.fillStyle=o.laceThread,s.beginPath(),s.arc(0,0,2.8,0,Math.PI*2),s.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(0,0,2.8,0,Math.PI*2),t.fill(),s.restore(),t.restore()}function rf(s,t,e,n,i,r,a,o){s.save(),s.translate(e,n),s.rotate(r),t.save(),t.translate(e,n),t.rotate(r);let l=Math.max(2.5,i*.115);for(let c=0;c<a;c++){let h=c/a*Math.PI*2;s.save(),s.rotate(h),t.save(),t.rotate(h),De(s,t,d=>{d.beginPath(),d.moveTo(i*.22,0),d.bezierCurveTo(i*.36,-i*.34,i*.96,-i*.28,i,0),d.bezierCurveTo(i*.96,i*.28,i*.36,i*.34,i*.22,0),d.closePath()},l,o),De(s,t,d=>{d.beginPath(),d.moveTo(i*.28,0),d.lineTo(i*.72,0)},1.6,o),s.restore(),t.restore()}De(s,t,c=>{c.beginPath(),c.arc(0,0,i*.2,0,Math.PI*2)},l*.9,o),t.fillStyle="#000000",t.beginPath(),t.arc(0,0,i*.11,0,Math.PI*2),t.fill(),s.restore(),t.restore()}function Jv(s,t,e,n,i,r,a){s.save(),s.translate(e,n),s.rotate(r),t.save(),t.translate(e,n),t.rotate(r);let o=5,l=Math.max(2.1,i*.16);for(let c=0;c<o;c++){let h=c/o*Math.PI*2;s.save(),s.rotate(h),t.save(),t.rotate(h),De(s,t,d=>{d.beginPath(),d.arc(i*.56,0,i*.34,0,Math.PI*2)},l,a),s.restore(),t.restore()}t.fillStyle="#000000",t.beginPath(),t.arc(0,0,i*.18,0,Math.PI*2),t.fill(),s.restore(),t.restore()}function Kv(s,t,e,n,i,r,a){s.save(),s.translate(e,n),s.rotate(r),t.save(),t.translate(e,n),t.rotate(r);let o=i*.36;De(s,t,c=>{c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(i*.45,-o,i,0),c.quadraticCurveTo(i*.45,o,0,0),c.closePath()},2.6,a),De(s,t,c=>{c.beginPath(),c.moveTo(0,0),c.lineTo(i*.88,0),c.moveTo(i*.32,0),c.lineTo(i*.56,-o*.46),c.moveTo(i*.32,0),c.lineTo(i*.56,o*.46)},1.7,a),s.restore(),t.restore()}function Qv(s,t,e,n,i,r,a,o){s.save(),s.translate(e,n),s.rotate(r),s.scale(a?-1:1,1),t.save(),t.translate(e,n),t.rotate(r),t.scale(a?-1:1,1),De(s,t,l=>{l.beginPath(),l.moveTo(-i,i*.25),l.bezierCurveTo(-i*.4,-i*.78,i*.5,-i*.62,i*.72,0),l.bezierCurveTo(i*.85,i*.46,i*.25,i*.66,i*.18,i*.22),l.bezierCurveTo(i*.15,.02,i*.36,-.02,i*.38,i*.14)},2.4,o),De(s,t,l=>{l.beginPath(),l.arc(-i*.42,i*.38,Math.max(3.8,i*.2),0,Math.PI*2)},2,o),s.restore(),t.restore()}function af(s,t,e,n,i,r=1){let a=Math.round(74/r),o=Math.round(64/r);s.save(),t.save(),s.strokeStyle=i.laceFill,s.lineWidth=2,s.globalAlpha=.82,t.strokeStyle="#ffffff",t.lineWidth=2;for(let l=-1;l<=Math.ceil(n/o)+1;l++){let c=l*o,h=l%2*(a*.5);for(let u=-1;u<=Math.ceil(e/a)+1;u++){let d=u*a+h,f=_=>{_.beginPath(),_.moveTo(d,c),_.quadraticCurveTo(d+a*.28,c+o*.38,d+a*.5,c+o),_.moveTo(d,c),_.quadraticCurveTo(d-a*.28,c+o*.38,d-a*.5,c+o)};f(s),s.stroke(),f(t),t.stroke(),s.fillStyle=i.laceThread,s.beginPath(),s.arc(d,c,2,0,Math.PI*2),s.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d,c,2,0,Math.PI*2),t.fill()}}s.restore(),t.restore()}function ol(s,t,e,n,i){for(let r=0;r<e.length;r++){let{x:a,y:o,nx:l,ny:c}=e[r],h=Math.atan2(c,l);s.save(),s.translate(a,o),s.rotate(h),t.save(),t.translate(a,o),t.rotate(h);let u=f=>{f.beginPath(),f.arc(0,0,n,-Math.PI*.6,Math.PI*.6),f.closePath()};u(s),s.fillStyle=i.laceFill,s.fill(),u(t),t.fillStyle="#ffffff",t.fill(),De(s,t,f=>{f.beginPath(),f.arc(0,0,n,-Math.PI*.58,Math.PI*.58)},2.3,i),t.fillStyle="#000000",t.beginPath(),t.arc(n*.34,0,n*.28,0,Math.PI*2),t.fill(),s.strokeStyle=i.laceShadow,s.lineWidth=1.1,s.beginPath(),s.arc(n*.34,0,n*.29,0,Math.PI*2),s.stroke();let d=n+2;s.fillStyle=i.laceThread,s.beginPath(),s.arc(d,0,1.7,0,Math.PI*2),s.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(d,0,1.7,0,Math.PI*2),t.fill(),s.restore(),t.restore()}}function Qc(s,t,e,n,i,r,a=1){let o=nf(r);af(s,t,e,n,i,a);let l=Math.max(4,Math.round(n/180));for(let f=0;f<l;f++){let _=(f+.5)*(n/l);De(s,t,g=>{g.beginPath(),g.moveTo(-16,_),g.bezierCurveTo(e*.25,_-72,e*.48,_+72,e*.72,_-46),g.bezierCurveTo(e*.85,_-90,e*.95,_+36,e+16,_-12)},2.8,i)}let c=136/a,h=124/a,u=Math.ceil(e/c)+1,d=Math.ceil(n/h)+1;for(let f=0;f<d;f++)for(let _=0;_<u;_++){let g=(o()-.5)*c*.36,m=(o()-.5)*h*.36,p=(_+f%2*.5)*c+g,y=f*h+m,b=30+o()*12,S=o()*Math.PI*2,A=o()>.42?8:7,C=3;for(let P=0;P<C;P++){let F=S+P/C*Math.PI*2+(o()-.5)*.45,U=p+Math.cos(F)*(b*.8),B=y+Math.sin(F)*(b*.8);Kv(s,t,U,B,26+o()*12,F+(o()-.5)*.4,i)}sf(s,t,p,y,b,S,A,i);let w=p+c*.48+(o()-.5)*20,T=y+h*.46+(o()-.5)*18;rf(s,t,w,T,19+o()*7,o()*Math.PI*2,o()>.4?5:6,i);let v=p-c*.34+(o()-.5)*16,x=y+h*.36+(o()-.5)*16;Jv(s,t,v,x,11+o()*4,o()*Math.PI*2,i),Qv(s,t,p+c*.26,y-h*.3,18+o()*6,o()*Math.PI*2,o()>.5,i)}}function jv(s){let n=document.createElement("canvas");n.width=1024,n.height=896;let i=n.getContext("2d"),r=document.createElement("canvas");r.width=1024,r.height=896;let a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,1024,896);let o=10,l=f=>{f.beginPath(),f.roundRect(o,o,1024-o*2,896-o*2,14)};i.save(),a.save(),l(i),i.clip(),l(a),a.clip(),Qc(i,a,1024,896,{...s,laceThread:s.backTint},4242,.92),i.restore(),a.restore(),De(i,a,f=>{f.beginPath(),f.moveTo(o,o+2),f.lineTo(1024-o,o+2)},3.6,{...s,laceThread:s.backTint});let c=[],h=18;for(let f=o+10;f<=1024-o-10;f+=h)c.push({x:f,y:896-o,nx:0,ny:1});for(let f=o+14;f<=896-o-10;f+=h)c.push({x:o,y:f,nx:-1,ny:0}),c.push({x:1024-o,y:f,nx:1,ny:0});ol(i,a,c,7.8,{...s,laceThread:s.backTint});let u=new we(n);u.colorSpace=oe,u.anisotropy=8;let d=new we(r);return d.anisotropy=8,{map:u,alphaMap:d}}function tx(s){let n=document.createElement("canvas");n.width=1024,n.height=896;let i=n.getContext("2d"),r=document.createElement("canvas");r.width=1024,r.height=896;let a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,1024,896);let o=10,l=40,c=152,h=p=>{p.beginPath(),p.moveTo(o,l),p.quadraticCurveTo(1024*.5,c,1024-o,l),p.lineTo(1024-o,896-o-12),p.quadraticCurveTo(1024-o,896-o,1024-o-12,896-o),p.lineTo(o+12,896-o),p.quadraticCurveTo(o,896-o,o,896-o-12),p.closePath()};i.save(),a.save(),h(i),i.clip(),h(a),a.clip(),Qc(i,a,1024,896,s,9001,1.04),i.restore(),a.restore(),De(i,a,p=>{p.beginPath(),p.moveTo(o,l),p.quadraticCurveTo(1024*.5,c,1024-o,l)},4,s);let u=[],d=52;for(let p=1;p<d;p++){let y=p/d,b=o+y*(1024-o*2),S=(1-y)*(1-y)*l+2*(1-y)*y*c+y*y*l,A=2*(1-y)*(c-l)+2*y*(l-c),C=1024-o*2,w=Math.hypot(C,A);u.push({x:b,y:S,nx:A/w,ny:-C/w})}ol(i,a,u,5.6,s);let f=[],_=18;for(let p=l+10;p<=896-o-10;p+=_)f.push({x:o,y:p,nx:-1,ny:0}),f.push({x:1024-o,y:p,nx:1,ny:0});for(let p=o+10;p<=1024-o-10;p+=_)f.push({x:p,y:896-o,nx:0,ny:1});ol(i,a,f,7.8,s);let g=new we(n);g.colorSpace=oe,g.anisotropy=8;let m=new we(r);return m.anisotropy=8,{map:g,alphaMap:m}}function ex(s){let n=document.createElement("canvas");n.width=1024,n.height=640;let i=n.getContext("2d"),r=document.createElement("canvas");r.width=1024,r.height=640;let a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,1024,640);let o=10,l=1024*.5,c=604,h=(o+(l-38))*.5-12,u=(1024-o+(l+38))*.5+12,d=c*.52,f=y=>{y.beginPath(),y.moveTo(o,2),y.lineTo(1024-o,2),y.quadraticCurveTo(u,d,l+38,c-14),y.quadraticCurveTo(l,c+14,l-38,c-14),y.quadraticCurveTo(h,d,o,2),y.closePath()};i.save(),a.save(),f(i),i.clip(),f(a),a.clip(),Qc(i,a,1024,640,s,2026,1.08),sf(i,a,l,c-76,38,.25,8,s),i.restore(),a.restore();let _=[],g=(y,b,S,A,C)=>{for(let w=0;w<=A;w++){let T=w/A,v=1-T,x=v*v*y.x+2*v*T*b.x+T*T*S.x,P=v*v*y.y+2*v*T*b.y+T*T*S.y,F=2*v*(b.x-y.x)+2*T*(S.x-b.x),U=2*v*(b.y-y.y)+2*T*(S.y-b.y),B=Math.hypot(F,U)||1;_.push({x,y:P,nx:C*U/B,ny:-C*F/B})}};g({x:o,y:4},{x:h,y:d},{x:l-38,y:c-14},34,-1),g({x:l-38,y:c-14},{x:l,y:c+14},{x:l+38,y:c-14},7,-1),g({x:l+38,y:c-14},{x:u,y:d},{x:1024-o,y:4},34,-1),De(i,a,y=>{y.beginPath(),y.moveTo(o,3),y.lineTo(1024-o,3)},3.8,s),De(i,a,y=>{y.beginPath(),y.moveTo(o,4),y.quadraticCurveTo(h,d,l-38,c-14),y.quadraticCurveTo(l,c+14,l+38,c-14),y.quadraticCurveTo(u,d,1024-o,4)},3.8,s),ol(i,a,_,7.6,s);let m=new we(n);m.colorSpace=oe,m.anisotropy=8;let p=new we(r);return p.anisotropy=8,{map:m,alphaMap:p}}function nx(s){let n=document.createElement("canvas");n.width=128,n.height=896;let i=n.getContext("2d"),r=document.createElement("canvas");r.width=128,r.height=896;let a=r.getContext("2d");a.fillStyle="#000000",a.fillRect(0,0,128,896),af(i,a,128,896,{...s,laceThread:s.backTint},1.2);for(let c=44;c<856;c+=84)rf(i,a,128*.5,c,24,c*.05,5,{...s,laceThread:s.backTint});let o=new we(n);o.colorSpace=oe;let l=new we(r);return{map:o,alphaMap:l}}function ef(s,t=0){let i=document.createElement("canvas");i.width=512,i.height=704;let r=i.getContext("2d"),a=r.createLinearGradient(0,0,0,704);a.addColorStop(0,s.letterPaper),a.addColorStop(1,s.letterPaperEdge),r.fillStyle=a,r.fillRect(0,0,512,704),r.strokeStyle="rgba(172, 150, 118, 0.28)",r.lineWidth=2.5,r.strokeRect(20,20,472,664),r.strokeStyle="rgba(172, 150, 118, 0.16)",r.lineWidth=1.2,r.strokeRect(30,30,452,644),r.fillStyle="rgba(164, 138, 98, 0.34)";let o=512*.5,l=96,c=10;r.beginPath(),r.moveTo(o,l-c),r.quadraticCurveTo(o,l,o+c,l),r.quadraticCurveTo(o,l,o,l+c),r.quadraticCurveTo(o,l,o-c,l),r.quadraticCurveTo(o,l,o,l-c),r.closePath(),r.fill(),r.fillStyle=s.letterInk;let h=nf(700+t*97);for(let d=0;d<9;d++){let f=160+d*40,_=d===8?140+h()*100:280+h()*64;r.fillRect((512-_)*.5,f,_,2.5)}let u=new we(i);return u.colorSpace=oe,u}var ll=class{constructor(t="pearl-ivory"){this.width=2.24,this.height=1.88,this.group=new Oe,this.bodyGroup=new Oe,this.group.add(this.bodyGroup),this.disposables=[],this.letterSheets=[],this._stackCount=3,this._pulseLevel=0,this._flapOpenProgress=0,this._build(t)}_build(t){let e=tf[t]||tf["pearl-ivory"],n=jv(e),i=tx(e),r=ex(e),a=nx(e),o=ef(e,0),l=ef(e,1);this.disposables.push(n.map,n.alphaMap,i.map,i.alphaMap,r.map,r.alphaMap,a.map,a.alphaMap,o,l);let c=(z,Z=1)=>new Ti({map:z.map,alphaMap:z.alphaMap,alphaTest:.1,transparent:!0,depthWrite:!0,roughness:.5,metalness:.02,emissive:new At(e.laceEmissive),emissiveMap:z.map,emissiveIntensity:e.laceEmissiveIntensity*Z,side:ze}),h=c(n,.65),u=c(i,1),d=c(r,1),f=c(a,.7),_=z=>new Ti({map:z,roughness:.88,metalness:0,emissive:new At("#e6dcc6"),emissiveMap:z,emissiveIntensity:.16,side:ze}),g=_(o),m=_(l);this.disposables.push(h,u,d,f,g,m);let p=new qe(this.width,this.height),y=new de(p,h);y.position.set(0,0,-.054),y.renderOrder=1,this.bodyGroup.add(y),this.letterSheets=[];let b=.98,S=1.36,A=new qe(b,S),C=[{x:-.026,y:-.175,z:-.032,rz:.024,mat:m},{x:.022,y:-.165,z:-.023,rz:-.02,mat:g},{x:0,y:-.155,z:-.014,rz:.004,mat:g}];for(let z of C){let Z=new de(A,z.mat);Z.position.set(z.x,z.y,z.z),Z.rotation.z=z.rz,Z.renderOrder=2,this.bodyGroup.add(Z),this.letterSheets.push(Z)}let w=new qe(.104,this.height*.94),T=this.width*.5-.018,v=new de(w,f);v.position.set(-T,-.01,.006),v.rotation.y=Math.PI*.5,v.renderOrder=3,this.bodyGroup.add(v);let x=new de(w,f);x.position.set(T,-.01,.006),x.rotation.y=-Math.PI*.5,x.renderOrder=3,this.bodyGroup.add(x);let P=new qe(this.width,this.height),F=new de(P,u);F.position.set(0,0,.058),F.renderOrder=4,this.bodyGroup.add(F),this.flapPivot=new Oe,this.flapPivot.position.set(0,this.height*.5-.018,.072);let U=1.06,B=new qe(this.width,U);B.translate(0,-U*.5,0);let q=new de(B,d);q.renderOrder=5,this.flapPivot.add(q),this.bodyGroup.add(this.flapPivot),this.disposables.push(p,A,P,w,B),this.setFlapOpen(0),this.setLetterStack(this._stackCount)}triggerExtractPulse(t=1){this._pulseLevel=Math.max(this._pulseLevel,Math.max(.2,Math.min(1.2,t)))}updateIdleMotion(t,e=.016){this._pulseLevel>0&&(this._pulseLevel=Math.max(0,this._pulseLevel-e*1.55));let n=Math.sin(Math.min(1,this._pulseLevel)*Math.PI);if(this.bodyGroup.position.y=Math.sin(t*1.15)*.042-n*.078,this.bodyGroup.position.x=Math.cos(t*.72)*.022,this.bodyGroup.rotation.x=Math.sin(t*.95+.5)*.028+n*.095,this.bodyGroup.rotation.y=Math.sin(t*.68)*.045,this.bodyGroup.rotation.z=Math.cos(t*.84)*.022,this.flapPivot){let i=this._flapOpenProgress*Math.sin(t*2.1+.4)*.028,r=this._flapOpenProgress*n*Math.sin(t*11.5)*.068;this.flapPivot.rotation.x=-.025-this._flapOpenProgress*(Math.PI*1.02)+i+r}}setLetterStack(t){this._stackCount=Math.max(0,Math.floor(t||0));let e=Math.min(this.letterSheets.length,this._stackCount);for(let n=0;n<this.letterSheets.length;n++){let i=this.letterSheets.length-1-n;this.letterSheets[n].visible=i<e}}setFlapOpen(t){let e=Math.max(0,Math.min(1,t));this._flapOpenProgress=e,this.flapPivot.rotation.x=-.025-e*(Math.PI*1.02),this.flapPivot.position.z=.072-e*.098}setTheme(t){for(;this.bodyGroup.children.length>0;)this.bodyGroup.remove(this.bodyGroup.children[0]);for(let e of this.disposables)e.dispose?.();this.disposables=[],this.letterSheets=[],this._build(t)}dispose(){for(let t of this.disposables)t.dispose?.();this.disposables=[],this.letterSheets=[]}};function ix(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.22,"rgba(220, 240, 255, 0.85)"),n.addColorStop(.55,"rgba(130, 190, 255, 0.28)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let i=new we(t);return i.colorSpace=oe,i}function sx(){let e=document.createElement("canvas");e.width=128,e.height=32;let n=e.getContext("2d"),i=n.createLinearGradient(0,0,128,0);i.addColorStop(0,"rgba(110, 180, 255, 0)"),i.addColorStop(.55,"rgba(175, 222, 255, 0.35)"),i.addColorStop(.88,"rgba(255, 248, 224, 0.92)"),i.addColorStop(1,"rgba(255, 255, 255, 1)"),n.fillStyle=i,n.fillRect(0,0,128,32),n.globalCompositeOperation="destination-in";let r=n.createLinearGradient(0,0,0,32);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(.32,"rgba(0,0,0,0.55)"),r.addColorStop(.5,"rgba(0,0,0,1)"),r.addColorStop(.68,"rgba(0,0,0,0.55)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,128,32);let a=new we(e);return a.colorSpace=oe,a}var cl=class{constructor(t){this.scene=t,this.group=new Oe,this.scene.add(this.group),this.spriteTex=ix(),this.meteorTex=sx(),this.meteorPlaneGeo=new qe(1,1),this.meteorPlaneGeo.translate(-.5,0,0),this.sparkles=[],this.maxSparkles=320,this.sparklePositions=new Float32Array(this.maxSparkles*3),this.sparkleColors=new Float32Array(this.maxSparkles*3),this.sparkleGeo=new ke,this.sparkleGeo.setAttribute("position",new ue(this.sparklePositions,3)),this.sparkleGeo.setAttribute("color",new ue(this.sparkleColors,3)),this.sparkleMat=new ai({size:.24,map:this.spriteTex,vertexColors:!0,transparent:!0,opacity:.95,blending:zn,depthWrite:!1}),this.sparklePoints=new Ei(this.sparkleGeo,this.sparkleMat),this.sparklePoints.frustumCulled=!1,this.group.add(this.sparklePoints),this.meteors=[],this.activeShower=!1,this.showerTime=0,this.spawnAccumulator=0}emitSparkleBurst(t,e=28,n="#ffe7ad"){let i=new At(n),r=new At("#9ad8ff");for(let a=0;a<e;a++){this.sparkles.length>=this.maxSparkles&&this.sparkles.shift();let o=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),c=.45+Math.random()*2.15,h=i.clone().lerp(r,Math.random());this.sparkles.push({x:t.x+(Math.random()-.5)*.22,y:t.y+(Math.random()-.5)*.22,z:t.z+(Math.random()-.5)*.22,vx:Math.sin(l)*Math.cos(o)*c,vy:Math.sin(l)*Math.sin(o)*c+.45,vz:Math.cos(l)*c,sway:(Math.random()-.5)*.65,life:0,maxLife:1.2+Math.random()*1.4,color:h})}}emitTrailDot(t,e="#c9e8ff"){this.sparkles.length>=this.maxSparkles&&this.sparkles.shift(),this.sparkles.push({x:t.x+(Math.random()-.5)*.1,y:t.y+(Math.random()-.5)*.1,z:t.z+(Math.random()-.5)*.1,vx:(Math.random()-.5)*.18,vy:.12+Math.random()*.16,vz:(Math.random()-.5)*.18,sway:(Math.random()-.5)*.45,life:0,maxLife:.85+Math.random()*.55,color:new At(e)})}spawnMeteor(t=null,e=null){let n=t?t.clone():new I(-9+Math.random()*23,5.2+Math.random()*6.8,-11-Math.random()*15),i=e?e.clone().normalize():new I(-.72-Math.random()*.65,-.46-Math.random()*.42,.12+(Math.random()-.5)*.26).normalize(),r=10+Math.random()*10,a=2.6+Math.random()*3.8,o=.075+Math.random()*.085,l=["#fff3d6","#cbe8ff","#ffe2b3","#d8dcff"],c=l[Math.floor(Math.random()*l.length)],h=new ts({map:this.meteorTex,color:c,transparent:!0,opacity:.95,blending:zn,depthWrite:!1,side:ze}),u=new de(this.meteorPlaneGeo,h);u.position.copy(n);let d=new I(0,0,1),f=new I().crossVectors(d,i);f.lengthSq()<1e-5?f.set(0,1,0):f.normalize();let _=new I().crossVectors(i,f).normalize(),g=new se().makeBasis(i,f,_);u.quaternion.setFromRotationMatrix(g),u.scale.set(a,o,1),this.group.add(u);let m=new Ys({map:this.spriteTex,color:c,transparent:!0,opacity:1,blending:zn,depthWrite:!1}),p=new Fr(m),y=.3+Math.random()*.28;p.scale.set(y,y,1),p.position.copy(n),this.group.add(p),this.meteors.push({pos:n,dir:i,speed:r,tailLen:a,beamWidth:o,streak:u,mat:h,head:p,headMat:m,life:0,maxLife:1.35+Math.random()*1.15})}startShower(){this.activeShower=!0,this.showerTime=0,this.spawnAccumulator=0;for(let t=0;t<6;t++)this.spawnMeteor()}stopAndClear(){this.activeShower=!1,this.sparkles=[],this.sparklePositions.fill(0),this.sparkleColors.fill(0),this.sparkleGeo.attributes.position.needsUpdate=!0,this.sparkleGeo.attributes.color.needsUpdate=!0;for(let t of this.meteors)this.group.remove(t.streak),this.group.remove(t.head),t.mat.dispose(),t.headMat.dispose();this.meteors=[]}update(t){for(let e=this.sparkles.length-1;e>=0;e--){let n=this.sparkles[e];if(n.life+=t,n.life>=n.maxLife){this.sparkles.splice(e,1);continue}n.x+=(n.vx+Math.sin(n.life*4.5)*(n.sway||0))*t,n.y+=n.vy*t,n.z+=n.vz*t,n.vx*=.975,n.vy=n.vy*.975+.18*t,n.vz*=.975}this.sparklePositions.fill(0),this.sparkleColors.fill(0);for(let e=0;e<this.sparkles.length;e++){let n=this.sparkles[e],i=Math.sin(n.life/n.maxLife*Math.PI),r=e*3;this.sparklePositions[r]=n.x,this.sparklePositions[r+1]=n.y,this.sparklePositions[r+2]=n.z,this.sparkleColors[r]=n.color.r*i,this.sparkleColors[r+1]=n.color.g*i,this.sparkleColors[r+2]=n.color.b*i}if(this.sparkleGeo.attributes.position.needsUpdate=!0,this.sparkleGeo.attributes.color.needsUpdate=!0,this.activeShower){this.showerTime+=t,this.spawnAccumulator+=t;let e=this.showerTime<4.5?.14:.38;this.spawnAccumulator>=e&&(this.spawnAccumulator=0,this.spawnMeteor())}for(let e=this.meteors.length-1;e>=0;e--){let n=this.meteors[e];if(n.life+=t,n.life>=n.maxLife){this.group.remove(n.streak),this.group.remove(n.head),n.mat.dispose(),n.headMat.dispose(),this.meteors.splice(e,1);continue}n.pos.addScaledVector(n.dir,n.speed*t),n.streak.position.copy(n.pos),n.head.position.copy(n.pos);let i=Math.min(1,n.life*4)*Math.max(0,1-n.life/n.maxLife);n.mat.opacity=i,n.headMat.opacity=i}}dispose(){this.stopAndClear(),this.sparkleGeo.dispose(),this.sparkleMat.dispose(),this.meteorPlaneGeo.dispose(),this.meteorTex.dispose(),this.spriteTex.dispose()}};function hi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function mf(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ea={duration:.5,overwrite:!1,delay:0},ph,He,me,Rn=1e8,re=1/Rn,ah=Math.PI*2,rx=ah/4,ax=0,gf=Math.sqrt,ox=Math.cos,lx=Math.sin,Pe=function(t){return typeof t=="string"},Me=function(t){return typeof t=="function"},di=function(t){return typeof t=="number"},Ml=function(t){return typeof t>"u"},Yn=function(t){return typeof t=="object"},un=function(t){return t!==!1},mh=function(){return typeof window<"u"},hl=function(t){return Me(t)||Pe(t)},_f=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Je=Array.isArray,cx=/random\([^)]+\)/g,hx=/,\s*/g,of=/(?:-?\.?\d|\.)+/gi,gh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_h=/[+-]=-?[.\d]+/,ux=/[^,'"\[\]\s]+/gi,dx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_e,Xn,oh,vh,xn={},pl={},vf,xf=function(t){return(pl=ir(t,xn))&&Ke},Sl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},na=function(t,e){return!e&&console.warn(t)},yf=function(t,e){return t&&(xn[t]=e)&&pl&&(pl[t]=e)||xn},ia=function(){return 0},fx={suppressEvents:!0,isStart:!0,kill:!1},ul={suppressEvents:!0,kill:!1},px={suppressEvents:!0},xh={},Li=[],lh={},Mf,cn={},th={},lf=30,dl=[],yh="",Mh=function(t){var e=t[0],n,i;if(Yn(e)||Me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=dl.length;i--&&!dl[i].targetTest(e););n=dl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Th(t[i],n)))||t.splice(i,1);return t},Di=function(t){return t._gsap||Mh(Cn(t))[0]._gsap},Sh=function(t,e,n){return(n=t[e])&&Me(n)?t[e]():Ml(n)&&t.getAttribute&&t.getAttribute(e)||n},nn=function(t,e){return(t=t.split(",")).forEach(e)||t},Se=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},vs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},mx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ml=function(){var t=Li.length,e=Li.slice(0),n,i;for(lh={},Li.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bh=function(t){return!!(t._initted||t._startAt||t.add)},Sf=function(t,e,n,i){Li.length&&!He&&ml(),t.render(e,n,i||!!(He&&e<0&&bh(t))),Li.length&&!He&&ml()},bf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ux).length<2?e:Pe(t)?t.trim():t},Ef=function(t){return t},yn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},gx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ir=function(t,e){for(var n in e)t[n]=e[n];return t},cf=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},gl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qr=function(t){var e=t.parent||_e,n=t.keyframes?gx(Je(t.keyframes)):yn;if(un(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},_x=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Tf=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},bl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ui=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ps=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},vx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ch=function(t,e,n,i){return t._startAt&&(He?t._startAt.revert(ul):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},xx=function s(t){return!t||t._ts&&s(t.parent)},hf=function(t){return t._repeat?sr(t._tTime,t=t.duration()+t._rDelay)*t:0},sr=function(t,e){var n=Math.floor(t=ge(t/e));return t&&n===t?n-1:n},_l=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},El=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},Tl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),El(t),n._dirty||ps(n,t)),t},wf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=_l(t.rawTime(),e),(!e._dur||oa(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),ps(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},qn=function(t,e,n,i){return e.parent&&Ui(e),e._start=ge((di(n)?n:!n&&vl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==_e?An(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Tf(t,e,"_first","_last",t._sort?"_start":0),vl(e)||(t._recent=e),i||wf(t,e),t._ts<0&&Tl(t,t._tTime),t},Af=function(t,e){return(xn.ScrollTrigger||Sl("scrollTrigger",e))&&xn.ScrollTrigger.create(e,t)},Rf=function(t,e,n,i,r){if(Rh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!He&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Mf!==hn.frame)return Li.push(t),t._lazy=[r,i],1},yx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},vl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Mx=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&yx(t)&&!(!t._initted&&vl(t))||(t._ts<0||t._dp._ts<0)&&!vl(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=oa(0,t._tDur,e),h=sr(l,o),t._yoyo&&h&1&&(a=1-a),h!==sr(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||He||i||t._zTime===re||!e&&t._zTime){if(!t._initted&&Rf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ch(t,e,n,!0),t._onUpdate&&!n&&vn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ui(t,1),!n&&!He&&(vn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Sx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},rr=function(t,e,n,i){var r=t._repeat,a=ge(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ge(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Tl(t,t._tTime=t._tDur*o),t.parent&&El(t),n||ps(t.parent,t),t},uf=function(t){return t instanceof $e?ps(t):rr(t,t._dur)},bx={_start:0,endTime:ia,totalDuration:ia},An=function s(t,e,n){var i=t.labels,r=t._recent||bx,a=t.duration()>=Rn?r.endTime(!1):t._dur,o,l,c;return Pe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Je(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},jr=function(t,e,n){var i=di(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=un(l.vars.inherit)&&l.parent;a.immediateRender=un(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new be(e[0],a,e[r+1])},Fi=function(t,e){return t||t===0?e(t):e},oa=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!Pe(t)||!(e=dx.exec(t))?"":e[1]},Ex=function(t,e,n){return Fi(n,function(i){return oa(t,e,i)})},hh=[].slice,Cf=function(t,e){return t&&Yn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yn(t[0]))&&!t.nodeType&&t!==Xn},Tx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Pe(i)&&!e||Cf(i,1)?(r=n).push.apply(r,Cn(i)):n.push(i)})||n},Cn=function(t,e,n){return me&&!e&&me.selector?me.selector(t):Pe(t)&&!n&&(oh||!ar())?hh.call((e||vh).querySelectorAll(t),0):Je(t)?Tx(t,n):Cf(t)?hh.call(t,0):t?[t]:[]},uh=function(t){return t=Cn(t)[0]||na("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Cn(e,n.querySelectorAll?n:n===t?na("Invalid scope")||vh.createElement("div"):t)}},Pf=function(t){return t.sort(function(){return .5-Math.random()})},If=function(t){if(Me(t))return t;var e=Yn(t)?t:{each:t},n=ms(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Pe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,y,b,S,A,C,w,T,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Rn])[1],!v){for(w=-Rn;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*h-.5:i%v,y=v===Rn?0:l?g*u/v-.5:i/v|0,w=0,T=Rn,C=0;C<g;C++)b=C%v-p,S=y-(C/v|0),m[C]=A=c?Math.abs(c==="y"?S:b):gf(b*b+S*S),A>w&&(w=A),A<T&&(T=A);i==="random"&&Pf(m),m.max=w-T,m.min=T,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ve(e.amount||e.each)||0,n=n&&g<0?Bx(n):n}return g=(m[d]-m.min)/m.max||0,ge(m.b+(n?n(g):g)*m.v)+m.u}},dh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(di(n)?0:Ve(n))}},Lf=function(t,e){var n=Je(t),i,r;return!n&&Yn(t)&&(i=n=t.radius||Rn,t.values?(t=Cn(t.values),(r=!di(t[0]))&&(i*=i)):t=dh(t.increment)),Fi(e,n?Me(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Rn,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,r||h===a||di(a)?h:h+Ve(a)}:dh(t))},Df=function(t,e,n,i){return Fi(Je(t)?!e:n===!0?!!(n=0):!i,function(){return Je(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},wx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Ax=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},Rx=function(t,e,n){return Ff(t,e,0,1,n)},Uf=function(t,e,n){return Fi(n,function(i){return t[~~e(i)]})},Cx=function s(t,e,n){var i=e-t;return Je(t)?Uf(t,s(0,t.length),e):Fi(n,function(r){return(i+(r-t)%i)%i+t})},Px=function s(t,e,n){var i=e-t,r=i*2;return Je(t)?Uf(t,s(0,t.length-1),e):Fi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},or=function(t){return t.replace(cx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(hx);return Df(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Ff=function(t,e,n,i,r){var a=e-t,o=i-n;return Fi(r,function(l){return n+((l-t)/a*o||0)})},Ix=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var a=Pe(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Je(t)&&!Je(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=ir(Je(t)?[]:{},t));if(!h){for(l in e)wh.call(o,t,l,"get",e[l]);r=function(_){return Ih(_,o)||(a?t.p:t)}}}return Fi(n,r)},df=function(t,e,n){var i=t.labels,r=Rn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},vn=function(t,e,n){var i=t.vars,r=i[e],a=me,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Li.length&&ml(),o&&(me=o),h=l?r.apply(c,l):r.call(c),me=a,h},Jr=function(t){return Ui(t),t.scrollTrigger&&t.scrollTrigger.kill(!!He),t.progress()<1&&vn(t,"onInterrupt"),t},nr,Nf=[],Of=function(t){if(t)if(t=!t.name&&t.default||t,mh()||t.headless){var e=t.name,n=Me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ia,render:Ih,add:wh,kill:Zx,modifier:Yx,rawVars:0},a={targetTest:0,get:0,getSetter:wl,aliases:{},register:0};if(ar(),t!==i){if(cn[e])return;yn(i,yn(gl(t,r),a)),ir(i.prototype,ir(r,gl(t,a))),cn[i.prop=e]=i,t.targetTest&&(dl.push(i),xh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}yf(e,i),t.register&&t.register(Ke,i,sn)}else Nf.push(t)},he=255,Kr={aqua:[0,he,he],lime:[0,he,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,he],navy:[0,0,128],white:[he,he,he],olive:[128,128,0],yellow:[he,he,0],orange:[he,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[he,0,0],pink:[he,192,203],cyan:[0,he,he],transparent:[he,he,he,0]},eh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*he+.5|0},Bf=function(t,e,n){var i=t?di(t)?[t>>16,t>>8&he,t&he]:0:Kr.black,r,a,o,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Kr[t])i=Kr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&he,i&he,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&he,t&he]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(of),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=eh(l+1/3,r,a),i[1]=eh(l,r,a),i[2]=eh(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(gh),n&&i.length<4&&(i[3]=1),i}else i=t.match(of)||Kr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/he,a=i[1]/he,o=i[2]/he,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(a-o)/f+(a<o?6:0):u===a?(o-r)/f+2:(r-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},kf=function(t){var e=[],n=[],i=-1;return t.split(ui).forEach(function(r){var a=r.match(_s)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},ff=function(t,e,n){var i="",r=(t+i).match(ui),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=Bf(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=kf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ui,"1").split(_s),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ui),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},ui=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Kr)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Lx=/hsl[a]?\(/,Eh=function(t){var e=t.join(" "),n;if(ui.lastIndex=0,ui.test(e))return n=Lx.test(e),t[1]=ff(t[1],n),t[0]=ff(t[0],n,kf(t[1])),!0},sa,hn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,d,f,_=function g(m){var p=s()-i,y=m===!0,b,S,A,C;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,b=A-a,(b>0||y)&&(C=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,a+=b+(b>=r?0:r-b),S=1),y||(l=c(g)),S)for(f=0;f<o.length;f++)o[f](A,d,C,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){vf&&(!oh&&mh()&&(Xn=oh=window,vh=Xn.document||{},xn.gsap=Ke,(Xn.gsapVersions||(Xn.gsapVersions=[])).push(Ke.version),xf(pl||Xn.GreenSockGlobals||!Xn.gsap&&Xn||{}),Nf.forEach(Of)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},sa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),sa=0,c=ia},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,p,y){var b=p?function(S,A,C,w){m(S,A,C,w),u.remove(b)}:m;return u.remove(m),o[y?"unshift":"push"](b),ar(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u})(),ar=function(){return!sa&&hn.wake()},Wt={},Dx=/^[\d.\-M][\d.\-,\s]/,Ux=/["']/g,Fx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Ux,"").trim():+c,i=l.substr(o+1).trim();return e},Nx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ox=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Fx(e[1])]:Nx(t).split(",").map(bf)):Wt._CE&&Dx.test(t)?Wt._CE("",t):n},Bx=function(t){return function(e){return 1-t(1-e)}},ms=function(t,e){return t&&(Me(t)?t:Wt[t]||Ox(t))||e},xs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return nn(t,function(o){Wt[o]=xn[o]=r,Wt[a=o.toLowerCase()]=n;for(var l in r)Wt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[o+"."+l]=r[l]}),r},zf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},nh=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/ah*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*lx((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:zf(o);return r=ah/r,l.config=function(c,h){return s(t,c,h)},l},ih=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:zf(n);return i.config=function(r){return s(t,r)},i};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;xs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;xs("Elastic",nh("in"),nh("out"),nh());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};xs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);xs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});xs("Circ",function(s){return-(gf(1-s*s)-1)});xs("Sine",function(s){return s===1?1:-ox(s*rx)+1});xs("Back",ih("in"),ih("out"),ih());Wt.SteppedEase=Wt.steps=xn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-re;return function(o){return((i*oa(0,a,o)|0)+r)*n}}};ea.ease=Wt["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return yh+=s+","+s+"Params,"});var Th=function(t,e){this.id=ax++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Sh,this.set=e?e.getSetter:wl},ra=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,rr(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),sa||hn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,rr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ar(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Tl(this,n),!r._dp||r.parent||wf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+hf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?sr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?_l(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||r>0&&r<o)&&this.totalTime(oa(-Math.abs(this._delay),o,r),i!==!1),El(this),vx(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ar(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==re,a;if(r)for(this._tTime-=re,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+re){r=!1;break}a=a._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_l(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=px);var i=He;return He=n,bh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),He=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,uf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,uf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(An(this,n),un(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,un(i)),this._dur||(this._zTime=-re),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-re)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Me(n)?n:Ef,l=function(){var h=i.then;i.then=null,r&&r(),Me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Jr(this)},s})();yn(ra.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var $e=(function(s){mf(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=un(n.sortChildren),_e&&qn(n.parent||_e,hi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Af(hi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return jr(0,arguments,this),this},e.from=function(i,r,a){return jr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return jr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Qr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new be(i,r,An(this,a),1),this},e.call=function(i,r,a){return qn(this,be.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new be(i,a,An(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Qr(a).immediateRender=un(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Qr(o).immediateRender=un(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ge(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,y,b,S,A,C,w;if(this!==_e&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,S=this._start,b=this._ts,p=!b,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=ge(h%m),h===l?(g=this._repeat,d=c):(A=ge(h/m),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=sr(this._tTime,m),!o&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),C&&g&1&&(d=c-d,w=1),g!==A&&!this._lock){var T=C&&A&1,v=T===(C&&g&1);if(g<A&&(T=!T),o=T?0:h%c?c:h,this._lock=1,this.render(o||(w?0:ge(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=T?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Sx(this,ge(o),ge(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!A&&(vn(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,a),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=-re);break}}f=_}else{f=this._last;for(var x=i<0?i:d;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,r,a);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,r,a||He&&bh(f)),d!==this._time||!this._ts&&!p){y=0,_&&(h+=this._zTime=x?-re:re);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=o?0:-re)._zTime=d>=o?1:-1,this._ts))return this._start=S,El(this),this.render(i,r,a);this._onUpdate&&!r&&vn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ui(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(vn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(di(r)||(r=An(this,r,i)),!(i instanceof ra)){if(Je(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Pe(i))return this.addLabel(i,r);if(Me(i))i=be.delayedCall(0,i);else return this}return this!==i?qn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Rn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof be?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Pe(i)?this.removeLabel(i):Me(i)?this.killTweensOf(i):(i.parent===this&&bl(this,i),i===this._recent&&(this._recent=this._last),ps(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=An(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=be.delayedCall(0,r||ia,a);return o.data="isPause",this._hasPause=1,qn(this,o,An(this,i))},e.removePause=function(i){var r=this._first;for(i=An(this,i);r;)r._start===i&&r.data==="isPause"&&Ui(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ii!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Cn(i),l=this._first,c=di(r),h;l;)l instanceof be?mx(l._targets,o)&&(c?(!Ii||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=An(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=be.to(a,yn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||re,onStart:function(){if(a.pause(),!f){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&rr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,yn({startAt:{time:An(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),df(this,An(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),df(this,An(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ge(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ps(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Rn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,qn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=ge(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;rr(a,a===_e&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(_e._ts&&(Sf(_e,_l(i,_e)),Mf=hn.frame),hn.frame>=lf){lf+=dn.autoSleep||120;var r=_e._first;if((!r||!r._ts)&&dn.autoSleep&&hn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||hn.sleep()}}},t})(ra);yn($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var kx=function(t,e,n,i,r,a,o){var l=new sn(this._pt,t,e,0,1,Ph,null,r),c=0,h=0,u,d,f,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=or(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(jc)||[];u=jc.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?vs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=jc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(_h.test(i)||p)&&(l.e=0),this._pt=l,l},wh=function(t,e,n,i,r,a,o,l,c,h){Me(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:Me(u)?c?t[e.indexOf("set")||!Me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Me(u)?c?Wx:Vf:Ch,_;if(Pe(i)&&(~i.indexOf("random(")&&(i=or(i)),i.charAt(1)==="="&&(_=vs(d,i)+(Ve(d)||0),(_||_===0)&&(i=_))),!h||d!==i||fh)return!isNaN(d*i)&&i!==""?(_=new sn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?qx:Gf,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Sl(e,i),kx.call(this,t,e,d,i,f,l||dn.stringFilter,c))},zx=function(t,e,n,i,r){if(Me(t)&&(t=ta(t,r,e,n,i)),!Yn(t)||t.style&&t.nodeType||Je(t)||_f(t))return Pe(t)?ta(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=ta(t[o],r,e,n,i);return a},Ah=function(t,e,n,i,r,a){var o,l,c,h;if(cn[t]&&(o=new cn[t]).init(r,o.rawVars?e[t]:zx(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new sn(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==nr))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Ii,fh,Rh=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,b=t._overwrite==="auto"&&!ph,S=t.timeline,A=i.easeReverse||u,C,w,T,v,x,P,F,U,B,q,z,Z,H;if(S&&(!d||!r)&&(r="none"),t._ease=ms(r,ea.ease),t._rEase=A&&(ms(A)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||d&&!i.stagger){if(U=m[0]?Di(m[0]).harness:0,Z=U&&i[U.prop],C=gl(i,xh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?ul:fx),g._lazy=0),a){if(Ui(t._startAt=be.set(m,yn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&un(l),startAt:null,delay:0,onUpdate:c&&function(){return vn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He||!o&&!f)&&t._startAt.revert(ul),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),T=yn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&un(l),immediateRender:o,stagger:0,parent:p},C),Z&&(T[U.prop]=Z),Ui(t._startAt=be.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(He?t._startAt.revert(ul):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&un(l)||l&&!_,w=0;w<m.length;w++){if(x=m[w],F=x._gsap||Mh(m)[w]._gsap,t._ptLookup[w]=q={},lh[F.id]&&Li.length&&ml(),z=y===m?w:y.indexOf(x),U&&(B=new U).init(x,Z||C,t,z,y)!==!1&&(t._pt=v=new sn(t._pt,x,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(et){q[et]=v}),B.priority&&(P=1)),!U||Z)for(T in C)cn[T]&&(B=Ah(T,C,t,z,x,y))?B.priority&&(P=1):q[T]=v=wh.call(t,x,T,"get",C[T],z,y,0,i.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),b&&t._pt&&(Ii=t,_e.killTweensOf(x,q,t.globalTime(e)),H=!t.parent,Ii=0),t._pt&&l&&(lh[F.id]=1)}P&&Lh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,d&&e<=0&&S.render(Rn,!0,!0)},Hx=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return fh=1,t.vars[e]="+=0",Rh(t,o),fh=0,l?na(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Se(n)+Ve(u.e)),u.b&&(u.b=h.s+Ve(u.b))},Vx=function(t,e){var n=t[0]?Di(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ir({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Gx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Je(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},ta=function(t,e,n,i,r){return Me(t)?t.call(e,n,i,r):Pe(t)&&~t.indexOf("random(")?or(t):t},xl=yh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Hf={};nn(xl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Hf[s]=1});xl=xl.split(",");var be=(function(s){mf(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Qr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||_e,y=(Je(n)||_f(n)?di(n[0]):"length"in i)?[n]:Cn(n),b,S,A,C,w,T,v,x;if(o._targets=y.length?Mh(y):na("GSAP target "+n+" not found. https://gsap.com",!dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||hl(c)||hl(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(b=o.timeline=new $e({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:y}),b.kill(),b.parent=b._dp=hi(o),b._start=0,d||hl(c)||hl(h)){if(C=y.length,v=d&&If(d),Yn(d))for(w in d)~xl.indexOf(w)&&(x||(x={}),x[w]=d[w]);for(S=0;S<C;S++)A=gl(i,Hf),A.stagger=0,P&&(A.easeReverse=P),x&&ir(A,x),T=y[S],A.duration=+ta(c,hi(o),S,T,y),A.delay=(+ta(h,hi(o),S,T,y)||0)-o._delay,!d&&C===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),b.to(T,A,v?v(S,T,y):0),b._ease=Wt.none;b.duration()?c=h=0:o.timeline=0}else if(_){Qr(yn(b.vars.defaults,{ease:"none"})),b._ease=ms(_.ease||i.ease||"none");var F=0,U,B,q;if(Je(_))_.forEach(function(z){return b.to(y,z,">")}),b.duration();else{A={};for(w in _)w==="ease"||w==="easeEach"||Gx(w,_[w],A,_.easeEach);for(w in A)for(U=A[w].sort(function(z,Z){return z.t-Z.t}),F=0,S=0;S<U.length;S++)B=U[S],q={ease:B.e,duration:(B.t-(S?U[S-1].t:0))/100*c},q[w]=B.v,b.to(y,q,F),F+=q.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!ph&&(Ii=hi(o),_e.killTweensOf(y),Ii=0),qn(p,hi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===ge(p._time)&&un(u)&&xx(hi(o))&&p.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-h)||0)),m&&Af(hi(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-re&&!h?l:i<re?0:i,d,f,_,g,m,p,y,b;if(!c)Mx(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=ge(u%g),u===l?(_=this._repeat,d=c):(m=ge(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=sr(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(ge(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Rf(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var S=d<o;if(S!==this._inv){var A=S?o:c-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/c);if(this._from&&(this.ratio=y=1-y),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!m&&(vn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&ch(this,i,r,a),vn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&vn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ch(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ui(this,1),!r&&!(h&&!o)&&(u||o||p)&&(vn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){sa||hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Rh(this,c),h=this._ease(c/this._dur),Hx(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(Tl(this,0),this.parent||Tf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Jr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!He),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ii&&Ii.vars.overwrite!==!0)._first||Jr(this),this.parent&&a!==this.timeline.totalDuration()&&rr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Cn(i):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!r||r==="all")&&_x(o,l))return r==="all"&&(this._pt=0),Jr(this);for(u=this._op=this._op||[],r!=="all"&&(Pe(r)&&(g={},nn(r,function(y){return g[y]=1}),r=g),r=Vx(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],r==="all"?(u[p]=r,_=d,f={}):(f=u[p]=u[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&bl(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Jr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return jr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return jr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return _e.killTweensOf(i,r,a)},t})(ra);yn(be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(s){be[s]=function(){var t=new $e,e=hh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Ch=function(t,e,n){return t[e]=n},Vf=function(t,e,n){return t[e](n)},Wx=function(t,e,n,i){return t[e](i.fp,n)},Xx=function(t,e,n){return t.setAttribute(e,n)},wl=function(t,e){return Me(t[e])?Vf:Ml(t[e])&&t.setAttribute?Xx:Ch},Gf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},qx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ph=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ih=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Yx=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},Zx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?bl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},$x=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lh=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},sn=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Gf,this.d=l||this,this.set=c||Ch,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=$x,this.m=n,this.mt=r,this.tween=i},s})();nn(yh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return xh[s]=1});xn.TweenMax=xn.TweenLite=be;xn.TimelineLite=xn.TimelineMax=$e;_e=new $e({sortChildren:!1,defaults:ea,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=Eh;var gs=[],fl={},Jx=[],pf=0,Kx=0,sh=function(t){return(fl[t]||Jx).map(function(e){return e()})},aa=function(){var t=Date.now(),e=[];t-pf>2&&(sh("matchMediaInit"),gs.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Xn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),sh("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pf=t,sh("matchMedia"))},Wf=(function(){function s(e,n){this.selector=n&&uh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Kx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Me(n)&&(r=i,i=n,n=Me);var a=this,o=function(){var c=me,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=uh(r)),me=a,u=i.apply(a,arguments),Me(u)&&a._r.push(u),me=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Me?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=me;me=null,n(this),me=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof be&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof be)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=gs.length;a--;)gs[a].id===this.id&&gs.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(aa):o.removeEventListener("change",aa)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),Qx=(function(){function s(e){this.contexts=[],this.scope=e,me&&me.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Yn(n)||(n={matches:n});var a=new Wf(0,r||this.scope),o=a.conditions={},l,c,h;me&&!a.selector&&(a.selector=me.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Xn.matchMedia(n[c]),l&&(gs.indexOf(a)<0&&gs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(aa):l.addEventListener("change",aa),(a._mqs||(a._mqs=[])).push(l)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),yl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Of(i)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return _e.getTweensOf(t,e)},getProperty:function(t,e,n,i){Pe(t)&&(t=Cn(t)[0]);var r=Di(t||{}).get,a=n?Ef:bf;return n==="native"&&(n=""),t&&(e?a((cn[e]&&cn[e].get||r)(t,e,n,i)):function(o,l,c){return a((cn[o]&&cn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Cn(t),t.length>1){var i=t.map(function(h){return Ke.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=cn[e],o=Di(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;nr._pt=0,u.init(t,n?h+n:h,nr,0,[t]),u.render(1,u),nr._pt&&Ih(1,nr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=Ke.to(t,yn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return _e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ms(t.ease,ea.ease)),cf(ea,t||{})},config:function(t){return cf(dn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!cn[o]&&!xn[o]&&na(e+" effect requires "+o+" plugin.")}),th[e]=function(o,l,c){return n(Cn(o),yn(l||{},r),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(th[e](o,Yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Wt[t]=ms(e)},parseEase:function(t,e){return arguments.length?ms(t,e):Wt},getById:function(t){return _e.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new $e(t),i,r;for(n.smoothChildTiming=un(t.smoothChildTiming),_e.remove(n),n._dp=0,n._time=n._tTime=_e._time,i=_e._first;i;)r=i._next,(e||!(!i._dur&&i instanceof be&&i.vars.onComplete===i._targets[0]))&&qn(n,i,i._start-i._delay),i=r;return qn(_e,n,0),n},context:function(t,e){return t?new Wf(t,e):me},matchMedia:function(t){return new Qx(t)},matchMediaRefresh:function(){return gs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||aa()},addEventListener:function(t,e){var n=fl[t]||(fl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=fl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Cx,wrapYoyo:Px,distribute:If,random:Df,snap:Lf,normalize:Rx,getUnit:Ve,clamp:Ex,splitColor:Bf,toArray:Cn,selector:uh,mapRange:Ff,pipe:wx,unitize:Ax,interpolate:Ix,shuffle:Pf},install:xf,effects:th,ticker:hn,updateRoot:$e.updateRoot,plugins:cn,globalTimeline:_e,core:{PropTween:sn,globals:yf,Tween:be,Timeline:$e,Animation:ra,getCache:Di,_removeLinkedListItem:bl,reverting:function(){return He},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return ph=t}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return yl[s]=be[s]});hn.add($e.updateRoot);nr=yl.to({},{duration:0});var jx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ty=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=jx(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},rh=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Pe(r)&&(l={},nn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ty(o,r)}}}},Ke=yl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)He?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},rh("roundProps",dh),rh("modifiers"),rh("snap",Lf))||yl;be.version=$e.version=Ke.version="3.15.1";vf=1;mh()&&ar();var ey=Wt.Power0,ny=Wt.Power1,iy=Wt.Power2,sy=Wt.Power3,ry=Wt.Power4,ay=Wt.Linear,oy=Wt.Quad,ly=Wt.Cubic,cy=Wt.Quart,hy=Wt.Quint,uy=Wt.Strong,dy=Wt.Elastic,fy=Wt.Back,py=Wt.SteppedEase,my=Wt.Bounce,gy=Wt.Sine,_y=Wt.Expo,vy=Wt.Circ;var Xf,Ni,cr,Bh,bs,xy,qf,kh,yy=function(){return typeof window<"u"},pi={},Ss=180/Math.PI,hr=Math.PI/180,lr=Math.atan2,Yf=1e8,zh=/([A-Z])/g,My=/(left|right|width|margin|padding|x)/i,Sy=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},by=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ey=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ty=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},wy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ep=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},np=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ay=function(t,e,n){return t.style[e]=n},Ry=function(t,e,n){return t.style.setProperty(e,n)},Cy=function(t,e,n){return t._gsap[e]=n},Py=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Iy=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Ly=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},ve="transform",fn=ve+"Origin",Dy=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in pi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Zn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=fi(i,o)}):this.tfm[t]=a.x?a[t]:fi(i,t),t===fn&&(this.tfm.zOrigin=a.zOrigin);else return Zn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(ve)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fn,e,"")),t=ve}(r||e)&&this.props.push(t,e,r[t])},ip=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Uy=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(zh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=kh(),(!r||!r.isStart)&&!n[ve]&&(ip(n),i.zOrigin&&n[fn]&&(n[fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},sp=function(t,e){var n={target:t,props:[],revert:Uy,save:Dy};return t._gsap||Ke.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},rp,Fh=function(t,e){var n=Ni.createElementNS?Ni.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ni.createElement(t);return n&&n.style?n:Ni.createElement(t)},Mn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(zh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,ur(e)||e,1)||""},Zf="O,Moz,ms,Ms,Webkit".split(","),ur=function(t,e,n){var i=e||bs,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Zf[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Zf[a]:"")+t},Nh=function(){yy()&&window.document&&(Xf=window,Ni=Xf.document,cr=Ni.documentElement,bs=Fh("div")||{style:{}},xy=Fh("div"),ve=ur(ve),fn=ve+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rp=!!ur("perspective"),kh=Ke.core.reverting,Bh=1)},$f=function(t){var e=t.ownerSVGElement,n=Fh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),cr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),cr.removeChild(n),r},Jf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ap=function(t){var e,n;try{e=t.getBBox()}catch{e=$f(t),n=1}return e&&(e.width||e.height)||n||(e=$f(t)),e&&!e.width&&!e.x&&!e.y?{x:+Jf(t,["x","cx","x1"])||0,y:+Jf(t,["y","cy","y1"])||0,width:0,height:0}:e},op=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ap(t))},Bi=function(t,e){if(e){var n=t.style,i;e in pi&&e!==fn&&(e=ve),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(zh,"-$1").toLowerCase())):n.removeAttribute(e)}},Oi=function(t,e,n,i,r,a){var o=new sn(t._pt,e,n,0,1,a?np:ep);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Kf={deg:1,rad:1,turn:1},Fy={grid:1,flex:1},ki=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=bs.style,l=My.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!r||Kf[i]||Kf[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&op(t),(f||a==="%")&&(pi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Se(f?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ni||!g.appendChild)&&(g=Ni.body),m=g._gsap,m&&f&&m.width&&l&&m.time===hn.time&&!m.uncache)return Se(r/m.width*u);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+i,_=t[h],y?t.style[e]=y:Bi(t,e)}else(f||a==="%")&&!Fy[Mn(g,"display")]&&(o.position=Mn(t,"position")),g===t&&(o.position="static"),g.appendChild(bs),_=bs[h],g.removeChild(bs),o.position="absolute";return l&&f&&(m=Di(g),m.time=hn.time,m.width=g[h]),Se(d?_*r/u:_&&r?u/_*r:0)},fi=function(t,e,n,i){var r;return Bh||Nh(),e in Zn&&e!=="transform"&&(e=Zn[e],~e.indexOf(",")&&(e=e.split(",")[0])),pi[e]&&e!=="transform"?(r=ha(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Rl(Mn(t,fn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Al[e]&&Al[e](t,e,n)||Mn(t,e)||Sh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ki(t,e,r,n)+n:r},Ny=function(t,e,n,i){if(!n||n==="none"){var r=ur(e,t,1),a=r&&Mn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Mn(t,"borderTopColor"))}var o=new sn(this._pt,t.style,e,0,1,Ph),l=0,c=0,h,u,d,f,_,g,m,p,y,b,S,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Mn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Mn(t,e)||i,g?t.style[e]=g:Bi(t,e)),h=[n,i],Eh(h),n=h[0],i=h[1],d=n.match(_s)||[],A=i.match(_s)||[],A.length){for(;u=_s.exec(i);)m=u[0],y=i.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),m.charAt(1)==="="&&(m=vs(f,m)+S),p=parseFloat(m),b=m.substr((p+"").length),l=_s.lastIndex-b.length,b||(b=b||dn.units[e]||S,l===i.length&&(i+=b,o.e+=b)),S!==b&&(f=ki(t,e,g,b)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?np:ep;return _h.test(i)&&(o.e=0),this._pt=o,o},Qf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Oy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Qf[n]||n,e[1]=Qf[i]||i,e.join(" ")},By=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],pi[o]&&(l=1,o=o==="transformOrigin"?fn:ve),Bi(n,o);l&&(Bi(n,ve),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ha(n,1),a.uncache=1,ip(i)))}},Al={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new sn(t._pt,e,n,0,0,By);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},ca=[1,0,0,1,0,0],lp={},cp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},jf=function(t){var e=Mn(t,ve);return cp(e)?ca:e.substr(7).match(gh).map(Se)},Hh=function(t,e){var n=t._gsap||Di(t),i=t.style,r=jf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ca:r):(r===ca&&!t.offsetParent&&t!==cr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,cr.appendChild(t)),r=jf(t),l?i.display=l:Bi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):cr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Oh=function(t,e,n,i,r,a){var o=t._gsap,l=r||Hh(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],b=e.split(" "),S=parseFloat(b[0])||0,A=parseFloat(b[1])||0,C,w,T,v;n?l!==ca&&(w=f*m-_*g)&&(T=S*(m/w)+A*(-g/w)+(g*y-m*p)/w,v=S*(-_/w)+A*(f/w)-(f*y-_*p)/w,S=T,A=v):(C=ap(t),S=C.x+(~b[0].indexOf("%")?S/100*C.width:S),A=C.y+(~(b[1]||b[0]).indexOf("%")?A/100*C.height:A)),i||i!==!1&&o.smooth?(p=S-c,y=A-h,o.xOffset=u+(p*f+y*g)-p,o.yOffset=d+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[fn]="0px 0px",a&&(Oi(a,o,"xOrigin",c,S),Oi(a,o,"yOrigin",h,A),Oi(a,o,"xOffset",u,o.xOffset),Oi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+A)},ha=function(t,e){var n=t._gsap||new Th(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Mn(t,fn)||"0",h,u,d,f,_,g,m,p,y,b,S,A,C,w,T,v,x,P,F,U,B,q,z,Z,H,et,at,ht,xt,Ut,X,tt;return h=u=d=g=m=p=y=b=S=0,f=_=1,n.svg=!!(t.getCTM&&op(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ve]!=="none"?l[ve]:"")),i.scale=i.rotate=i.translate="none"),w=Hh(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Oh(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,C=n.yOrigin||0,w!==ca&&(P=w[0],F=w[1],U=w[2],B=w[3],h=q=w[4],u=z=w[5],w.length===6?(f=Math.sqrt(P*P+F*F),_=Math.sqrt(B*B+U*U),g=P||F?lr(F,P)*Ss:0,y=U||B?lr(U,B)*Ss+g:0,y&&(_*=Math.abs(Math.cos(y*hr))),n.svg&&(h-=A-(A*P+C*U),u-=C-(A*F+C*B))):(tt=w[6],Ut=w[7],at=w[8],ht=w[9],xt=w[10],X=w[11],h=w[12],u=w[13],d=w[14],T=lr(tt,xt),m=T*Ss,T&&(v=Math.cos(-T),x=Math.sin(-T),Z=q*v+at*x,H=z*v+ht*x,et=tt*v+xt*x,at=q*-x+at*v,ht=z*-x+ht*v,xt=tt*-x+xt*v,X=Ut*-x+X*v,q=Z,z=H,tt=et),T=lr(-U,xt),p=T*Ss,T&&(v=Math.cos(-T),x=Math.sin(-T),Z=P*v-at*x,H=F*v-ht*x,et=U*v-xt*x,X=B*x+X*v,P=Z,F=H,U=et),T=lr(F,P),g=T*Ss,T&&(v=Math.cos(T),x=Math.sin(T),Z=P*v+F*x,H=q*v+z*x,F=F*v-P*x,z=z*v-q*x,P=Z,q=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Se(Math.sqrt(P*P+F*F+U*U)),_=Se(Math.sqrt(z*z+tt*tt)),T=lr(q,z),y=Math.abs(T)>2e-4?T*Ss:0,S=X?1/(X<0?-X:X):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!cp(Mn(t,ve)),Z&&t.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Se(f),n.scaleY=Se(_),n.rotation=Se(g)+o,n.rotationX=Se(m)+o,n.rotationY=Se(p)+o,n.skewX=y+o,n.skewY=b+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[fn]=Rl(c)),n.xOffset=n.yOffset=0,n.force3D=dn.force3D,n.renderTransform=n.svg?zy:rp?hp:ky,n.uncache=0,n},Rl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Dh=function(t,e,n){var i=Ve(e);return Se(parseFloat(e)+parseFloat(ki(t,"x",n+"px",i)))+i},ky=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,hp(t,e)},ys="0deg",la="0px",Ms=") ",hp=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,b=n.zOrigin,S="",A=p==="auto"&&t&&t!==1||p===!0;if(b&&(u!==ys||h!==ys)){var C=parseFloat(h)*hr,w=Math.sin(C),T=Math.cos(C),v;C=parseFloat(u)*hr,v=Math.cos(C),a=Dh(y,a,w*v*-b),o=Dh(y,o,-Math.sin(C)*-b),l=Dh(y,l,T*v*-b+b)}m!==la&&(S+="perspective("+m+Ms),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(A||a!==la||o!==la||l!==la)&&(S+=l!==la||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ms),c!==ys&&(S+="rotate("+c+Ms),h!==ys&&(S+="rotateY("+h+Ms),u!==ys&&(S+="rotateX("+u+Ms),(d!==ys||f!==ys)&&(S+="skew("+d+", "+f+Ms),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ms),y.style[ve]=S||"translate(0, 0)"},zy=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,b=parseFloat(a),S=parseFloat(o),A,C,w,T,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=hr,c*=hr,A=Math.cos(l)*u,C=Math.sin(l)*u,w=Math.sin(l-c)*-d,T=Math.cos(l-c)*d,c&&(h*=hr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,T*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),A*=v,C*=v)),A=Se(A),C=Se(C),w=Se(w),T=Se(T)):(A=u,T=d,C=w=0),(b&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(b=ki(f,"x",a,"px"),S=ki(f,"y",o,"px")),(_||g||m||p)&&(b=Se(b+_-(_*A+g*w)+m),S=Se(S+g-(_*C+g*T)+p)),(i||r)&&(v=f.getBBox(),b=Se(b+i/100*v.width),S=Se(S+r/100*v.height)),v="matrix("+A+","+C+","+w+","+T+","+b+","+S+")",f.setAttribute("transform",v),y&&(f.style[ve]=v)},Hy=function(t,e,n,i,r){var a=360,o=Pe(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Ss:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Yf)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Yf)%a-~~(c/a)*a)),t._pt=d=new sn(t._pt,e,n,i,c,by),d.e=h,d.u="deg",t._props.push(n),d},tp=function(t,e){for(var n in e)t[n]=e[n];return t},Vy=function(t,e,n){var i=tp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ve]=e,o=ha(n,1),Bi(n,ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ve],a[ve]=e,o=ha(n,1),a[ve]=c);for(l in pi)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(f=Ve(c),_=Ve(h),u=f!==_?ki(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new sn(t._pt,o,l,u,d-u,Uh),t._pt.u=_||0,t._props.push(l));tp(o,i)};nn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Al[t>1?"border"+s:s]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return fi(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Vh={name:"css",register:Nh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,y,b,S,A,C,w,T,v;Bh||Nh(),this.styles=this.styles||sp(t),T=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(cn[g]&&Ah(g,e,n,i,t,r)))){if(f=typeof h,_=Al[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=or(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",ui.lastIndex=0,ui.test(c)||(m=Ve(c),p=Ve(h),p?m!==p&&(c=ki(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),T.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Pe(c)&&~c.indexOf("random(")&&(c=or(c)),Ve(c+"")||c==="auto"||(c+=dn.units[g]||Ve(fi(t,g))||""),(c+"").charAt(1)==="="&&(c=fi(t,g))):c=fi(t,g),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in Zn&&(g==="autoAlpha"&&(d===1&&fi(t,"visibility")==="hidden"&&u&&(d=0),T.push("visibility",0,o.visibility),Oi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Zn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in pi,b){if(this.styles.save(g),v=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=Mn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=h,h=Mn(t,"perspective"),x?t.style.perspective=x:Bi(t,"perspective")}u=parseFloat(h)}if(S||(A=t._gsap,A.renderTransform&&!e.parseTransform||ha(t,e.parseTransform),C=e.smoothOrigin!==!1&&A.smooth,S=this._pt=new sn(this._pt,o,ve,0,1,A.renderTransform,A,0,-1),S.dep=1),g==="scale")this._pt=new sn(this._pt,A,"scaleY",A.scaleY,(y?vs(A.scaleY,y+u):u)-A.scaleY||0,Uh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){T.push(fn,0,o[fn]),h=Oy(h),A.svg?Oh(t,h,0,C,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Oi(this,A,"zOrigin",A.zOrigin,p),Oi(this,o,g,Rl(c),Rl(h)));continue}else if(g==="svgOrigin"){Oh(t,h,1,C,0,this);continue}else if(g in lp){Hy(this,A,g,d,y?vs(d,y+h):h);continue}else if(g==="smoothOrigin"){Oi(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){Vy(this,h,t);continue}}else g in o||(g=ur(g)||g);if(b||(u||u===0)&&(d||d===0)&&!Sy.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ve(h)||(g in dn.units?dn.units[g]:m),m!==p&&(d=ki(t,g,c,p)),this._pt=new sn(this._pt,b?A:o,g,d,(y?vs(d,y+u):u)-d,!b&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?wy:Uh),this._pt.u=p||0,b&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=Ty):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ey);else if(g in o)Ny.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){Sl(g,h);continue}b||(g in o?T.push(g,0,o[g]):typeof t[g]=="function"?T.push(g,2,t[g]()):T.push(g,1,c||t[g])),a.push(g)}}w&&Lh(this)},render:function(t,e){if(e.tween._time||!kh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:fi,aliases:Zn,getSetter:function(t,e,n){var i=Zn[e];return i&&i.indexOf(",")<0&&(e=i),e in pi&&e!==fn&&(t._gsap.x||fi(t,"x"))?n&&qf===n?e==="scale"?Py:Cy:(qf=n||{})&&(e==="scale"?Iy:Ly):t.style&&!Ml(t.style[e])?Ay:~e.indexOf("-")?Ry:wl(t,e)},core:{_removeProperty:Bi,_getMatrix:Hh}};Ke.utils.checkPrefix=ur;Ke.core.getStyleSaver=sp;(function(s,t,e,n){var i=nn(s+","+t+","+e,function(r){pi[r]=1});nn(t,function(r){dn.units[r]="deg",lp[r]=1}),Zn[i[13]]=s+","+t,nn(n,function(r){var a=r.split(":");Zn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){dn.units[s]="px"});Ke.registerPlugin(Vh);var $n=Ke.registerPlugin(Vh)||Ke,CE=$n.core.Tween;function Gh(s,t,e){let n=s.length,i=t.length,r=[];for(let d=n-1;d>0;d--)r.push(-s[d]);for(let d=0;d<n;d++)r.push(s[d]);let a=r.length,o=a*i,l=new Float32Array(o*2),c=e.map(()=>new Float32Array(o*3));for(let d=0;d<i;d++){let f=t[d],_=(f+1)*.5;for(let g=0;g<a;g++){let m=r[g],p=(m+1)*.5,y=d*a+g;l[y*2]=p,l[y*2+1]=_,c[0][y*3]=m*(1.55*.5),c[0][y*3+1]=f*(2.15*.5),c[0][y*3+2]=0;for(let b=1;b<e.length;b++){let S=m<0?-1:m>0?1:0,A=Math.abs(m),[C,w,T]=e[b](A,f,S);c[b][y*3]=C,c[b][y*3+1]=w,c[b][y*3+2]=T}}}let h=[],u=n-1;for(let d=0;d<i-1;d++)for(let f=0;f<a-1;f++){let _=d*a+f,g=_+1,m=(d+1)*a+f,p=m+1;f<u?(h.push(_,g,m),h.push(g,p,m)):(h.push(_,g,p),h.push(_,p,m))}return{indices:new Uint16Array(h),uvs:l,stages:c,vertexCount:o,triangleCount:h.length/3,nxStops:s,nyStops:t,fullX:r}}function Gy(){return Gh([0,.08,.22,.42,.62,.82,1],[-1,-.68,-.35,0,.35,.66,.86,1],[()=>[0,0,0],(r,a,o)=>{let l=.7130000000000001,c=2.15*.46,h=-.1*(1-Math.max(0,a-.5)*.6);if(r===0)return[0,a*c+.04,h];let u=Math.max(0,Math.min(1,(a-.15)/.85)),d=1-u*.68,f=o*r*l*d,_=a*c*(1-u*r*.16)+.04,g=h+r*.14+u*r*.06;return[f,_,g]},(r,a,o)=>{let l=a*.98+.1,c=(1-a)*.5;if(r===0){let g=-.23*Math.sin(Math.pow(c,.72)*Math.PI*.92)+.02;return[0,l,g]}if(r<=.12){let g=o*(.012+c*.042),m=.025+c*.015;return[g,l-.015,m]}let h=(r-.12)/.88,u=.032+Math.pow(c,.94)*.74,d=o*(.018+h*u),f=h*(.14+(1-c)*.06),_=.032+h*.105+(h>.78?(h-.78)*.24:0);return[d,l-f,_]}])}function Wy(){return Gh([0,.1,.28,.5,.76,1],[-1,-.72,-.44,-.14,.12,.44,.74,1],[()=>[0,0,0],(r,a,o)=>{let l=o*r*.44,c=a*.66,h=Math.sin(r*Math.PI*2.5)*.055,u=r===0?-.09:h+r*.08;return[l,c,u]},(r,a,o)=>{let l,c;if(a>=.7){let _=(a-.7)/.3;l=Ae(1.02,.86,_*_),c=Ae(.56,.72,_)-r*.04}else if(a>=.1){let _=(a-.1)/.6;l=Ae(.76,1.02,Math.sin(_*Math.PI*.5)),c=Ae(.12,.56,_)}else if(a>=-.2){let _=(a+.2)/.3;l=Ae(.5,.76,_)-Math.sin(_*Math.PI)*.14,c=Ae(-.14,.12,_)}else if(a>=-.68){let _=(a+.68)/.48;l=Ae(.66,.5,_)+Math.sin(_*Math.PI)*.08,c=Ae(-.48,-.14,_)}else{let _=(a+1)/.32;l=Ae(.34,.66,_),c=Ae(-.76,-.48,_)}if(r===0)return[0,a*.34,-.095+Math.abs(a)*.035];if(r<=.14){let _=o*(.04+r*.32),g=a*.38,m=.025+r*.14;return[_,g,m]}let h=(r-.14)/.86,u=o*(.085+h*(l-.085)),d=Ae(a*.38,c,Math.pow(h,.85)),f=.045+Math.pow(h,1.1)*.26+Math.max(0,a)*h*.05;return[u,d,f]}])}function Ae(s,t,e){return s+(t-s)*e}function Xy(){return Gh([0,.1,.28,.5,.75,1],[-1,-.68,-.35,-.06,.24,.55,.8,1],[()=>[0,0,0],(r,a,o)=>{let l=1-Math.abs(a)*.66,c=o*r*.46*l,h=a*.8,u=r===0?.11:r<.25?.05:.01;return[c,h,u]},(r,a,o)=>{let l=p=>{if(p>=.8){let b=(p-.8)/.2;return[Ae(.56,.78,b),Ae(.48,.35,b)]}if(p>=.24){let b=(p-.24)/.56;return[Ae(.24,.56,b),Ae(.15,.48,b)]}if(p>=-.35){let b=(p+.35)/.59,S=Math.sin(b*Math.PI)*.11;return[Ae(-.34,.24,b),.14+S]}let y=(p+1)/.65;return[Ae(-.78,-.34,y),Ae(.5,.14,y)]},[c,h]=l(a);if(r===0)return[0,c,h];if(r<=.14){let p=a>.55||a<-.55?.22:1;return[o*(.018+.08*p),c*.9,h*.82]}let u=(r-.14)/.86,f=.24+Math.exp(-Math.pow((a-.06)/.68,2))*.88,_=o*(.09+u*(f-.09)),g=Ae(c*.72,a*.24-u*.08,Math.pow(u,.75)),m=Ae(h*.68,.16+u*.16,Math.pow(u,.6));return[_,g,m]}])}function up(s){switch(s){case"butterfly":return Wy();case"crane":return Xy();case"plane":default:return Gy()}}function dp(s,t,e,n=0){let i=Math.max(0,Math.min(1,t)),[r,a,o]=s.stages,l=s.vertexCount,c=.42,h=s.fullX.length,u=Math.max(0,(i-.52)/.48);for(let d=0;d<l;d++){let f=d*3,_=d%h,g=Math.floor(d/h),m=s.fullX[_],p=s.nyStops[g],y=Math.abs(m),b=i<=0?0:i>=1?1:Math.max(0,Math.min(1,i+(.5-y)*.13*Math.sin(Math.PI*i))),S,A,C;if(b<=0)S=r[f],A=r[f+1],C=r[f+2];else if(b>=1)S=o[f],A=o[f+1],C=o[f+2];else{let w=r[f],T=r[f+1],v=r[f+2],x=a[f],P=a[f+1],F=a[f+2],U=o[f],B=o[f+1],q=o[f+2],z=(U-w)*.55,Z=(B-T)*.55,H=(q-v)*.55;if(b<=c){let et=b/c,at=et*et,ht=at*et,xt=2*ht-3*at+1,Ut=-2*ht+3*at,X=(ht-at)*c;S=xt*w+Ut*x+X*z,A=xt*T+Ut*P+X*Z,C=xt*v+Ut*F+X*H}else{let et=1-c,at=(b-c)/et,ht=at*at,xt=ht*at,Ut=2*xt-3*ht+1,X=(xt-2*ht+at)*et,tt=-2*xt+3*ht;S=Ut*x+X*z+tt*U,A=Ut*P+X*Z+tt*B,C=Ut*F+X*H+tt*q}}if(i>0&&i<1&&(C+=Math.sin(Math.PI*i)*Math.sin(Math.PI*y)*.055),n!==0&&u>0&&y>.14){let w=(y-.14)/.86,T=Math.pow(w,1.08)*u,v=n*T*(1+(1-p)*.09),x=m<0?-1:1,P=x*.1,F=S-P,U=C-.06,B=Math.cos(v*x),q=Math.sin(v*x);S=P+F*B-U*q,C=.06+F*q+U*B}e[f]=S,e[f+1]=A,e[f+2]=C}}var Cl=class{constructor({texture:t,shape:e="plane",index:n=0}){this.shape=e,this.index=n,this.texture=t,this.data=up(e),this.geometry=new ke,this.positions=new Float32Array(this.data.stages[0]),this.positionAttr=new ue(this.positions,3),this.geometry.setAttribute("position",this.positionAttr),this.geometry.setAttribute("uv",new ue(this.data.uvs,2)),this.geometry.setIndex(new ue(this.data.indices,1)),this.geometry.computeVertexNormals(),this.material=new Ti({color:new At("#000000"),map:t,emissiveMap:t,emissive:new At("#ffffff"),emissiveIntensity:1,roughness:.72,metalness:.04,side:ze,flatShading:!0,transparent:!0,opacity:1}),this.mesh=new de(this.geometry,this.material),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.group=new Oe,this.group.add(this.mesh),this._foldProgress=0,this._glowStrength=0,this._breezeFlex=0,this._pocketDim=0,this._wingPhase=n*1.7,this._lastFlapAngle=0}_syncShading(){let t=Math.min(1,this._foldProgress*1.65);if(this._glowStrength>.01){let e=Math.min(1.4,this._glowStrength);this.material.color.set("#ffffff").multiplyScalar(.48),this.material.emissive.set("#ffffff").lerp(new At("#ffe0ad"),Math.min(1,e*.78)),this.material.emissiveIntensity=.3+e*.78}else if(this._foldProgress<=.001&&this._pocketDim>.001){let e=Math.max(0,Math.min(1,this._pocketDim));this.material.color.setRGB(0,0,0),this.material.emissive.set("#ffffff").lerp(new At("#dce2ef"),e*.55),this.material.emissiveIntensity=1-e*.36}else this.material.color.setRGB(t,t,t),this.material.emissive.set(this._foldProgress<=.001?"#ffffff":"#fffbf2"),this.material.emissiveIntensity=1-t*.74}get foldProgress(){return this._foldProgress}set foldProgress(t){this._foldProgress=Math.max(0,Math.min(1,t)),this._updateGeometry(this._lastFlapAngle),this._syncShading()}get glowStrength(){return this._glowStrength}set glowStrength(t){this._glowStrength=Math.max(0,t),this._syncShading()}get pocketDim(){return this._pocketDim}set pocketDim(t){this._pocketDim=Math.max(0,Math.min(1,t)),this._syncShading()}get breezeFlex(){return this._breezeFlex}set breezeFlex(t){this._breezeFlex=Math.max(-1,Math.min(1,t)),this._foldProgress<=.001&&this._updateGeometry(0)}updateWingFlap(t){if(this._foldProgress<.54)return;let e=0;if(this.shape==="plane")e=Math.sin(t*2+this._wingPhase)*.052+Math.sin(t*3.8+this._wingPhase*1.3)*.014;else if(this.shape==="butterfly"){let n=t*5.6+this._wingPhase,i=.72+.28*Math.sin(t*1.15+this._wingPhase);e=(Math.sin(n)+.3*Math.sin(2*n-.55)+.1)*.5*i}else{let n=t*3.6+this._wingPhase,i=.72+.28*Math.sin(t*.95+this._wingPhase);e=(Math.sin(n)+.24*Math.sin(2*n-.4))*.42*i}this._lastFlapAngle=e,this._updateGeometry(e)}_updateGeometry(t){if(dp(this.data,this._foldProgress,this.positions,t),this._foldProgress<=.001&&Math.abs(this._breezeFlex)>1e-4){let e=2/1.55,n=2/2.15,i=this.data.vertexCount;for(let r=0;r<i;r++){let a=r*3,o=this.positions[a]*e,c=(1-this.positions[a+1]*n)*.5,h=Math.sin(c*Math.PI)*.058+c*c*.064,u=.68+.32*Math.cos(o*Math.PI*.5);this.positions[a+2]-=this._breezeFlex*h*u}}this.positionAttr.needsUpdate=!0,this.geometry.computeVertexNormals()}dispose(){this.geometry.dispose(),this.material.dispose()}};$n.ticker.lagSmoothing(1e3,200);var fp=["plane","butterfly","crane"];function Yy(s,t,e,n){let i=s&&s!=="inherit"?s:t;return i==="plane"||i==="butterfly"||i==="crane"?i:e===n-1&&n>=2?e%2===0?"butterfly":"crane":fp[e%fp.length]}function Zy(s,t,e,n,i){let r=1-n;return i.set(r*r*s.x+2*r*n*t.x+n*n*e.x,r*r*s.y+2*r*n*t.y+n*n*e.y,r*r*s.z+2*r*n*t.z+n*n*e.z),i}function Pl(s,t,e,n,i,r){let a=i*i,o=a*i,l=2*o-3*a+1,c=o-2*a+i,h=-2*o+3*a,u=o-a;return r.set(l*s.x+c*t.x+h*e.x+u*n.x,l*s.y+c*t.y+h*e.y+u*n.y,l*s.z+c*t.z+h*e.z+u*n.z),r}var Il=class{constructor({scene:t,envelope:e,meteorShower:n,onPhaseChange:i,onEndingToggle:r,onComplete:a}){this.scene=t,this.envelope=e,this.meteorShower=n,this.onPhaseChange=i||(()=>{}),this.onEndingToggle=r||(()=>{}),this.onComplete=a||(()=>{}),this.masterTl=null,this.activeOrigamis=[],this.pocketEntries=[],this.orbitEntries=[],this.showcasingEntry=null,this.isPlaying=!1,this.isPaused=!1,this._hiddenPaused=!1,this.orbitTime=0,this._lastUpdateTs=null,this._trailTimer=0,this.envelope.group.position.set(0,-1.48,.2),this.envelope.group.rotation.set(.14,0,0),this.envelope.group.visible=!0,this.envelope.setFlapOpen(0),this.envelope.setLetterStack?.(3)}_getEnvelopeAnchor(){return this.envelope.bodyGroup||this.envelope.group}_pocketToWorld(t,e,n,i,r,a){this.envelope.group?.updateMatrixWorld?.(!0);let o=this._getEnvelopeAnchor();o.updateMatrixWorld?.(!0);let l=new I,c=new le,h=new I(1,1,1);o.matrixWorld?.decompose(l,c,h),i.copy(t).multiply(h).applyQuaternion(c).add(l),r.copy(c).multiply(e),a.copy(h).multiplyScalar(n)}_applyPocketSlotPose(t){let e=Math.max(0,Math.min(2.8,t.pocketSlot)),n=t.index%2===0?-1:1,i=Math.min(1,e),r=e<1?(t.pocketPeek||0)*(1-e):0,a=new I(e===0?0:n*.018*i,-.155-e*.016+r*.072,.028-e*.013),o=new le().setFromEuler(new Be(0,0,(e===0?0:-n*.024*i)-(t.launchSide||1)*.028*r)),l=.62-e*.01;t.card.pocketDim=.62+Math.min(1.6,e)*.16,t.card.breezeFlex=0,this._pocketToWorld(a,o,l,t.card.group.position,t.card.group.quaternion,t.card.group.scale)}_evalExtractPocketLocal(t,e){let i=Math.max(0,Math.min(1,e/.44)),r=Math.sin(Math.min(1,i/.24)*Math.PI),a=-.068*r,o=Math.max(0,(i-.1)/.9),l=o*o*(1.42-.42*o),c=-.155+(t.index===0?.072:0),h=c+a+(1.62-c)*l,u=t.launchSide*.052*Math.sin(i*Math.PI*.78),d=.028,f=ce.lerp(.62,.67,l),g=(t.index===0?-t.launchSide*.028*(1-l):0)+t.launchSide*(.056*l-.032*r),m=ce.lerp(.62,.06,ce.smoothstep(i,.22,1));return{localX:u,localY:h,localZ:d,localRz:g,localScale:f,pocketDim:m}}_applyExtractPocketPose(t,e){let n=this._evalExtractPocketLocal(t,e),i=new I(n.localX,n.localY,n.localZ),r=new le().setFromEuler(new Be(0,0,n.localRz));this._pocketToWorld(i,r,n.localScale,t.card.group.position,t.card.group.quaternion,t.card.group.scale),t.card.pocketDim=n.pocketDim,t.card.breezeFlex=0}_capturePocketExitState(t){let i=new I,r=new le,a=new I,o=(c,h,u,d)=>{let f=this._evalExtractPocketLocal(t,c);this._pocketToWorld(new I(f.localX,f.localY,f.localZ),new le().setFromEuler(new Be(0,0,f.localRz)),f.localScale,h,u,d)};o(.44-.01,i,r,a);let l=new I;o(.44,t.extractExitPos,t.extractExitQuat,l),t.extractExitScale=l.x,t.extractExitVel.subVectors(t.extractExitPos,i).multiplyScalar((1-.44)/.01),t.extractExitVel.z+=.85,t.extractExitCaptured=!0}_clearCards(){this.masterTl&&(this.masterTl.kill(),this.masterTl=null),$n.killTweensOf(this.scene),this.scene.cameraOffset&&$n.killTweensOf(this.scene.cameraOffset),this.scene.cameraLookOffset&&$n.killTweensOf(this.scene.cameraLookOffset),$n.killTweensOf(this.envelope.group.position),$n.killTweensOf(this.envelope.group.rotation),$n.killTweensOf(this.envelope.group.scale);for(let t of this.activeOrigamis)this.scene.bgScene.remove(t.card.group),this.scene.fgContentGroup.remove(t.card.group),t.card.dispose();this.activeOrigamis=[],this.pocketEntries=[],this.orbitEntries=[],this.showcasingEntry=null,this.scene.dofAmount=0,this.scene.milkyWayIntensity=0,this.scene.cameraOffset?.set(0,0,0),this.scene.cameraLookOffset?.set(0,0,0),"cameraBreath"in this.scene&&(this.scene.cameraBreath=1),this.meteorShower.stopAndClear(),this.onEndingToggle(!1)}resetToIdle(){this._clearCards(),this.isPlaying=!1,this.isPaused=!1,this._hiddenPaused=!1,this.orbitTime=0,this.envelope.group.visible=!0,this.envelope.group.position.set(0,-1.48,.2),this.envelope.group.rotation.set(.14,0,0),this.envelope.group.scale.setScalar(1),this.envelope.setFlapOpen(0),this.envelope.setLetterStack?.(3),this.onPhaseChange("idle",0,0)}_evalFlightPoint(t,e,n){let i=1+(t.speedBoost||0),r=t.baseAngle+e*t.angularSpeed*t.dir*i,a=Math.sin(e*.72+t.phase)*.42,o=t.radius+a,l=(Math.cos(r)*o+Math.sin(r*2+t.phase)*.34)*(t.xSpread||1),c=t.centerZ+Math.sin(r)*(o*.64)+Math.cos(e*.64+t.phase)*.38,h=t.baseY+(t.liftBoost||0)+Math.sin(e*1.05+t.phase)*.46+Math.sin(r+t.tiltPhase)*.36;return n.set(l,h,c),n}_evalAscendPoint(t,e,n){let i=Math.max(0,Math.min(1.05,e)),r=t.ascendStartPos.x+t.ascendStartVel.x*(i*t.ascendDuration),a=t.ascendStartPos.y+t.ascendStartVel.y*(i*t.ascendDuration),o=t.ascendStartPos.z+t.ascendStartVel.z*(i*t.ascendDuration),l=Math.sin(Math.PI*Math.min(1,i))*(1.35+t.index*.16),c=t.phase+i*Math.PI*2.25*t.dir,h=ce.lerp(t.ascendStartPos.x,t.ascendTargetPos.x,i)+Math.cos(c)*l,u=ce.lerp(t.ascendStartPos.y,t.ascendTargetPos.y,i),d=ce.lerp(t.ascendStartPos.z,t.ascendTargetPos.z,i)+Math.sin(c)*l*.72,f=i*i*(1.6-.6*i);return n.set(ce.lerp(r,h,f),ce.lerp(a,u,f),ce.lerp(o,d,f)),n}_orientAlongFlight(t,e,n,i,r,a){let o=new I().subVectors(n,e),l=new I().subVectors(e,t);o.lengthSq()<1e-8&&o.set(0,1,0),o.normalize(),l.lengthSq()<1e-8&&l.copy(o),l.normalize();let c=Math.abs(o.y),h=ce.smoothstep(c,.88,.995),u=new I(0,1-h,h).normalize(),d=new I().crossVectors(o,u);d.lengthSq()<1e-5?d.set(1,0,0):d.normalize();let f=new I().crossVectors(d,o).normalize(),_=new se().makeBasis(d,o,f);a.setFromRotationMatrix(_);let m=new I().subVectors(o,l).dot(d),p=ce.clamp(m*16,-.78,.78),y=Math.sin(i*1.85+r)*.085,b=new le().setFromAxisAngle(new I(0,1,0),p+y);a.multiply(b)}_computeOrbitPose(t,e,n,i){let a=new I,o=new I;this._evalFlightPoint(t,e-.055,a),this._evalFlightPoint(t,e,n),this._evalFlightPoint(t,e+.055,o),this._orientAlongFlight(a,n,o,e,t.phase,i)}play(t,e={}){if(!t||t.length===0)return;this._clearCards(),this.isPlaying=!0,this.isPaused=!1,this._hiddenPaused=!1,this.orbitTime=0,this._lastUpdateTs=performance.now();let n=Math.max(1,Math.min(8,Number(e.holdDuration)||3)),i=e.origamiShape||"auto",r=7.6-3.25,a=ce.degToRad(this.scene.camera.fov),l=2*r*Math.tan(a*.5)*this.scene.camera.aspect,c=Math.min(1.16,l*.78/1.55),h=Math.min(1,Math.max(.56,this.scene.camera.aspect/1.18)),u=$n.timeline({onComplete:()=>{this.onPhaseChange("complete",t.length,t.length),this.onComplete()}});this.masterTl=u,this.onPhaseChange("intro",0,t.length);let d=this.envelope.group;d.visible=!0;let f=new I(-4.8,-3.1,-5),_=new I(1.15,-2.15,-1.1),g=new I(0,-1.52,.2);d.position.copy(f),d.rotation.set(-.34,-.92,.4),d.scale.setScalar(.28),d.updateMatrixWorld?.(!0),this.envelope.setFlapOpen(0),this.envelope.setLetterStack?.(Math.max(0,t.length-3));let m={p:0},p={p:0};u.call(()=>this.onPhaseChange("intro",0,t.length)),u.addLabel("introStart"),this.scene.cameraLookOffset&&u.to(this.scene.cameraLookOffset,{y:-.07,duration:.95,ease:"sine.inOut"},"introStart"),u.to(m,{p:1,duration:1.4,ease:"power3.out",onUpdate:()=>{let T=m.p;Zy(f,_,g,T,d.position);let v=Math.sin(Math.PI*T);d.rotation.set(ce.lerp(-.34,.14,T)-v*.08,ce.lerp(-.92,0,T)+v*.24,ce.lerp(.4,0,T)-v*.16);for(let x of this.pocketEntries)x.inPocket&&this._applyPocketSlotPose(x)}},"introStart"),u.to(d.scale,{x:1,y:1,z:1,duration:1.38,ease:"back.out(1.18)"},"introStart"),u.to(p,{p:1,duration:.85,ease:"back.out(1.08)",onUpdate:()=>{this.envelope.setFlapOpen(p.p)}},"introStart+=0.88"),u.to(d.rotation,{x:.23,duration:.38,ease:"sine.out"},"introStart+=0.88"),u.to(d.rotation,{x:.14,duration:.48,ease:"sine.inOut"},"introStart+=1.26"),this.scene.cameraLookOffset&&u.to(this.scene.cameraLookOffset,{y:0,duration:.72,ease:"sine.inOut"},"introStart+=1.15");let y=t.length,b=1.52,S=1.62,A=.44,C=new le().setFromEuler(new Be(-.03,0,0));for(let T=0;T<y;T++){let v=t[T],x=Yy(v.origamiShape,i,T,y),P=new Cl({texture:v.texture,shape:x,index:T}),F=T%2===0?1:-1,U=-F,B={card:P,index:T,launchSide:F,inPocket:T<3,pocketSlot:Math.min(2,T),pocketPeek:0,extractActive:!1,extractProgress:0,extractExitCaptured:!1,extractExitPos:new I,extractExitVel:new I,extractExitQuat:new le,extractExitScale:.67,active:!1,ascending:!1,ascendProgress:0,ascendDuration:1.78,ascendStartPos:new I,ascendStartVel:new I(F*.8,1.2,-1.5),ascendTargetPos:new I,speedBoost:0,liftBoost:0,launchStartPos:new I(0,.22,3.25),launchStartQuat:new le,launchStartScale:c,baseAngle:0,targetEntryAngle:(F>0?-.42:Math.PI+.42)+T%3*.12*U,dir:U,angularSpeed:.56+T%3*.07,radius:2.65+T%3*.45,xSpread:h,baseY:1.28+T%3*.38,centerZ:-.95-T%3*.55,phase:T*1.55,tiltPhase:T*1.1,orbitScale:.56+T%3*.04};P.group.visible=T<3,this.scene.bgScene.add(P.group),this.activeOrigamis.push({card:P,orbitEntry:B}),this.pocketEntries.push(B),B.inPocket&&this._applyPocketSlotPose(B)}this.pocketEntries[0]&&u.to(this.pocketEntries[0],{pocketPeek:1,duration:.58,ease:"sine.out",onUpdate:()=>{this.pocketEntries[0].inPocket&&this._applyPocketSlotPose(this.pocketEntries[0])}},"introStart+=0.88");for(let T=0;T<y;T++){let{card:v,orbitEntry:x}=this.activeOrigamis[T],P=x.launchSide,F=`card_${T}`,U=T===0?"introStart+=1.48":">-0.72";u.addLabel(F,U);let B=new I(0,.22,3.25),q=new I(0,0,0),z={p:0},Z=new I,H=new le,et=new le,at=new Be,ht=!1,xt=!1,Ut=!1,X=!1,tt=!1;u.call(()=>{this.onPhaseChange("extracting",T+1,y),x.inPocket=!1,x.extractActive=!0,x.extractProgress=0,x.extractExitCaptured=!1,v.group.visible=!0,this.envelope.triggerExtractPulse?.(.45);let R=new I,M=new le,k=new I;this._pocketToWorld(new I(0,.64,.042),new le,1,R,M,k),this.meteorShower.emitSparkleBurst(R,10,"#ffe8b5")},null,F),u.call(()=>{this.envelope.setLetterStack?.(Math.max(0,y-T-4));for(let R=T+1;R<=Math.min(y-1,T+3);R++){let M=this.pocketEntries[R];R===T+3&&!M.inPocket&&(M.pocketSlot=2.6),M.card.group.visible=!0,M.inPocket=!0,this._applyPocketSlotPose(M)}},null,`${F}+=0.68`);for(let R=T+1;R<=Math.min(y-1,T+3);R++){let M=this.pocketEntries[R],k=R-T-1;u.to(M,{pocketSlot:k,duration:.56,ease:"sine.inOut",onUpdate:()=>{M.inPocket&&this._applyPocketSlotPose(M)}},`${F}+=0.68`)}u.to(z,{p:1,duration:S,ease:"none",onUpdate:()=>{let R=z.p;if(x.extractProgress=R,R<=A){ht&&(ht=!1,this.scene.fgContentGroup.remove(v.group),this.scene.bgScene.add(v.group)),xt=!1,Ut=!1,X=!1,tt=!1,x.extractExitCaptured=!1,this._applyExtractPocketPose(x,R);return}if(x.extractExitCaptured||this._capturePocketExitState(x),!xt){xt=!0,this.envelope.triggerExtractPulse?.(1);let ft=new I,Ht=new le,nt=new I;this._pocketToWorld(new I(P*.08,.8,.055),new le,1,ft,Ht,nt),this.meteorShower.emitSparkleBurst(ft,18,"#fff1c9")}!ht&&R>=.46&&(ht=!0,this.scene.bgScene.remove(v.group),this.scene.fgContentGroup.add(v.group));let M=Math.max(0,Math.min(1,(R-A)/(1-A)));!Ut&&M>=.72&&(Ut=!0,this.onPhaseChange("showcasing",T+1,y)),Pl(x.extractExitPos,x.extractExitVel,B,q,M,Z);let k=Math.sin(Math.PI*M),$=k*k,j=k*Math.sin(2*Math.PI*M);Z.x+=P*(.32*$-.11*j),Z.y+=.28*$,v.group.position.copy(Z),!X&&M>=.28&&(X=!0,this.meteorShower.emitSparkleBurst(Z,8,"#cbe6ff")),!tt&&M>=.58&&(tt=!0,this.meteorShower.emitSparkleBurst(Z,6,"#ffe9b8"));let J=ce.smoothstep(M,0,.88);H.slerpQuaternions(x.extractExitQuat,C,J),at.set(-k*.18,P*k*.32,-P*k*.13*Math.cos(M*Math.PI*.45)),et.setFromEuler(at),v.group.quaternion.copy(H).multiply(et);let Mt=ce.lerp(x.extractExitScale,c,ce.smoothstep(M,0,.94));v.group.scale.setScalar(Mt),v.pocketDim=ce.lerp(.06,0,ce.smoothstep(M,0,.2));let ct=k*(.88*Math.cos(M*Math.PI*.55)+.16*Math.sin(M*Math.PI*2.2));v.breezeFlex=ce.clamp(ct,-1,1)},onComplete:()=>{x.extractActive=!1,v.pocketDim=0,v.breezeFlex=0}},F),u.to(this.scene,{dofAmount:1,duration:.68,ease:"power2.out"},`${F}+=0.82`),this.scene.cameraOffset&&u.to(this.scene.cameraOffset,{z:-.2,duration:.78,ease:"sine.inOut"},`${F}+=0.78`);let yt=`${F}+=${S}`;u.call(()=>{v.pocketDim=0,v.breezeFlex=0,this.showcasingEntry={card:v,startOrbitTime:this.orbitTime}},null,yt),u.to({},{duration:n},yt);let ot=`fold_${T}`,Tt=`${F}+=${S+n}`;u.addLabel(ot,Tt);let st=u.labels[ot],bt=st+b;x.baseAngle=x.targetEntryAngle-bt*x.angularSpeed*x.dir;let Xt=new I,jt=new I,Bt=new I;this._evalFlightPoint(x,bt,Xt),this._evalFlightPoint(x,bt-.05,jt),this._evalFlightPoint(x,bt+.05,Bt);let L=new I().subVectors(Bt,jt).multiplyScalar(b/.1),ae=new I(P*.55,.72,-1.1);u.call(()=>{this.showcasingEntry=null,this.onPhaseChange("folding",T+1,y),x.launchStartPos.copy(v.group.position),x.launchStartQuat.copy(v.group.quaternion),x.launchStartScale=v.group.scale.x,this.orbitEntries.push(x),this.meteorShower.emitSparkleBurst(v.group.position,8,"#cbe6ff")},null,ot),u.call(()=>{this.scene.fgContentGroup.remove(v.group),this.scene.bgScene.add(v.group)},null,`${ot}+=0.38`),u.to(this.scene,{dofAmount:0,duration:.42,ease:"power2.inOut"},ot),this.scene.cameraOffset&&u.to(this.scene.cameraOffset,{z:0,duration:.65,ease:"sine.inOut"},ot),u.to(v,{foldProgress:1,duration:1.16,ease:"sine.inOut"},ot);let kt={p:0},It=new I,_t=new I,qt=new I,Et=new le;u.to(kt,{p:1,duration:b,ease:"none",onUpdate:()=>{let R=kt.p;Pl(x.launchStartPos,ae,Xt,L,R,It),v.group.position.copy(It);let M=.025;R-M>=0?Pl(x.launchStartPos,ae,Xt,L,R-M,_t):_t.copy(It).addScaledVector(ae,-M),R+M<=1?Pl(x.launchStartPos,ae,Xt,L,R+M,qt):this._evalFlightPoint(x,bt+(R+M-1)*b,qt);let k=ce.lerp(st,bt,R);this._orientAlongFlight(_t,It,qt,k,x.phase,Et);let $=ce.smoothstep(R,.05,.7);v.group.quaternion.slerpQuaternions(x.launchStartQuat,Et,$);let j=ce.smoothstep(R,0,.94),J=ce.lerp(x.launchStartScale,x.orbitScale,j);v.group.scale.setScalar(J)},onComplete:()=>{x.active=!0}},ot)}u.call(()=>this.onPhaseChange("finale_orbit",y,y)),this.scene.cameraLookOffset&&u.to(this.scene.cameraLookOffset,{y:.42,duration:1.5,ease:"sine.inOut"},"<"),u.to({},{duration:1.25}),u.call(()=>this.onPhaseChange("finale_glow",y,y)),u.to(this.scene,{milkyWayIntensity:1,duration:1.55,ease:"power2.inOut"}),this.activeOrigamis.forEach(({card:T,orbitEntry:v},x)=>{u.to(T,{glowStrength:1.35,duration:.85,ease:"power2.out"},`<+${x===0?0:.06}`),u.to(v,{speedBoost:.45,liftBoost:.48,duration:1.25,ease:"sine.inOut"},"<")}),u.call(()=>{this.onPhaseChange("finale_shower",y,y),this.meteorShower.startShower()}),u.addLabel("finaleAscend"),this.scene.cameraLookOffset&&u.to(this.scene.cameraLookOffset,{y:.62,duration:1.8,ease:"sine.inOut"},"finaleAscend"),this.activeOrigamis.forEach(({card:T,orbitEntry:v},x)=>{let P=new I((x-(y-1)*.5)*1.95+(Math.random()-.5)*1.1,5+x%3*1.15,-12.5-x%4*2.2),F=x*.12;u.call(()=>{let U=this.masterTl?this.masterTl.time():this.orbitTime,B=new I,q=new I;this._evalFlightPoint(v,U-.05,B),this._evalFlightPoint(v,U+.05,q),v.active=!1,v.ascending=!0,v.ascendProgress=0,v.ascendStartPos.copy(T.group.position),v.ascendStartVel.subVectors(q,B).multiplyScalar(10),v.ascendTargetPos.copy(P)},null,`finaleAscend+=${F}`),u.to(v,{ascendProgress:1,duration:v.ascendDuration,ease:"none"},`finaleAscend+=${F}`),u.to(T.group.scale,{x:.07,y:.07,z:.07,duration:v.ascendDuration,ease:"power2.in"},`finaleAscend+=${F}`),u.to(T.material,{opacity:0,duration:.42,ease:"power2.out",onStart:()=>{this.meteorShower.emitSparkleBurst(T.group.position,36,"#ffe9b8"),this.meteorShower.spawnMeteor(T.group.position)}},`finaleAscend+=${F+1.46}`)}),u.to(d.position,{y:-4.85,duration:1.75,ease:"power2.inOut"},"finaleAscend+=0.2"),u.to(d.rotation,{x:.42,z:.08,duration:1.75,ease:"power2.inOut"},"finaleAscend+=0.2");let w=1.55+(y-1)*.12;u.call(()=>{this.onPhaseChange("finale_blessing",y,y),this.onEndingToggle(!0)},null,`finaleAscend+=${w}`),u.to({},{duration:4.5},`finaleAscend+=${w+.5}`)}pause(){!this.isPlaying||this.isPaused||(this.isPaused=!0,this.masterTl?.pause())}resume(){!this.isPlaying||!this.isPaused||(this.isPaused=!1,this._lastUpdateTs=performance.now(),this._hiddenPaused||this.masterTl?.resume())}setHiddenPaused(t){let e=!!t;this._hiddenPaused!==e&&(this._hiddenPaused=e,e?this.isPlaying&&this.masterTl?.pause():(this._lastUpdateTs=performance.now(),this.isPlaying&&!this.isPaused&&this.masterTl?.resume()))}togglePause(){return this.isPaused?this.resume():this.pause(),this.isPaused}update(t){this._lastUpdateTs===null&&(this._lastUpdateTs=t);let e=Math.min(.05,Math.max(0,(t-this._lastUpdateTs)/1e3));this._lastUpdateTs=t;let n=this.isPaused||this._hiddenPaused,i=n?0:e;this.orbitTime+=i;let r=this.isPlaying&&this.masterTl?this.masterTl.time():this.orbitTime;n||this.envelope.updateIdleMotion?.(this.orbitTime,i);for(let d of this.pocketEntries)d.inPocket?this._applyPocketSlotPose(d):d.extractActive&&d.extractProgress<=.44&&this._applyExtractPocketPose(d,d.extractProgress);if(this.showcasingEntry&&!n){let d=this.orbitTime-this.showcasingEntry.startOrbitTime,f=this.showcasingEntry.card.group,_=Math.min(1,d/.45);f.position.set(Math.sin(d*.85)*.016*_,.22+Math.sin(d*1.4)*.024*_,3.25),f.rotation.set(-.03+Math.cos(d*1.15)*.015*_,Math.sin(d*.82)*.032*_,Math.cos(d*.98)*.011*_)}let a=new I,o=new le,l=new I,c=new I,h=new I;this._trailTimer+=i;let u=this._trailTimer>=.075;u&&(this._trailTimer=0);for(let d of this.orbitEntries)if(d.card.updateWingFlap(this.orbitTime),d.active)this._computeOrbitPose(d,r,a,o),d.card.group.position.copy(a),d.card.group.quaternion.copy(o),u&&this.meteorShower.emitTrailDot(d.card.group.position,d.card.glowStrength>.2?"#ffe6a3":"#b7dcff");else if(d.ascending){let f=d.ascendProgress;this._evalAscendPoint(d,f-.02,l),this._evalAscendPoint(d,f,c),this._evalAscendPoint(d,f+.02,h),d.card.group.position.copy(c),this._orientAlongFlight(l,c,h,r,d.phase,o),d.card.group.quaternion.copy(o),u&&this.meteorShower.emitTrailDot(d.card.group.position,"#ffe9b8")}else u&&d.card.foldProgress>.45&&this.meteorShower.emitTrailDot(d.card.group.position,"#cbe6ff");this.meteorShower.update(i),this.scene.update(this.orbitTime),this.scene.render()}};var $y={idle:"\u51C6\u5907\u5C31\u7EEA",intro:"\u661F\u591C\u542F\u5C01 \xB7 \u857E\u4E1D\u4FE1\u5C01\u98DE\u5165",extracting:"\u5C55\u4FE1\u5347\u8D77",showcasing:"\u9AD8\u6E05\u5C55\u793A\u4E2D",folding:"\u6298\u7EB8\u5E7B\u5316\u4E2D",finale_orbit:"\u6298\u7EB8\u73AF\u7ED5\u5171\u821E",finale_glow:"\u661F\u5149\u6C47\u805A\u70B9\u4EAE",finale_shower:"\u5316\u4F5C\u6D41\u661F\u96E8\u98DE\u5411\u6DF1\u7A7A",finale_blessing:"\u661F\u6CB3\u732E\u793C \xB7 \u795D\u798F\u6D6E\u73B0",complete:"\u64AD\u653E\u5B8C\u6210"};function pp(s){return new Promise((t,e)=>{let n=new Image;n.onload=()=>t(n),n.onerror=i=>e(i),n.src=s})}function Jy(s){return new Promise((t,e)=>{let n=new FileReader;n.onload=()=>t(String(n.result)),n.onerror=i=>e(i),n.readAsDataURL(s)})}function mp(){let s=document.getElementById("app-shell"),t=document.getElementById("stage-root"),e=document.getElementById("studio-panel"),n=document.getElementById("scene-canvas"),i=document.getElementById("ratio-badge"),r=document.getElementById("ending-overlay"),a=document.getElementById("ending-title-display"),o=document.getElementById("ending-signature-display"),l=document.getElementById("phase-label"),c=document.getElementById("card-counter"),h=document.getElementById("image-upload-input"),u=document.getElementById("dropzone"),d=document.getElementById("text-card-form"),f=document.getElementById("new-card-title"),_=document.getElementById("new-card-body"),g=document.getElementById("new-card-tone"),m=document.getElementById("new-card-shape"),p=document.getElementById("load-demo-btn"),y=document.getElementById("clear-cards-btn"),b=document.getElementById("card-list"),S=document.getElementById("queue-count"),A=document.getElementById("empty-queue-msg"),C=document.getElementById("hold-duration"),w=document.getElementById("global-shape"),T=document.getElementById("envelope-theme"),v=document.getElementById("aspect-ratio-select"),x=document.getElementById("ending-title-input"),P=document.getElementById("ending-signature-input"),F=document.getElementById("cinema-hide-toggle"),U=document.getElementById("auto-fullscreen-toggle"),B=document.getElementById("form-error-msg"),q=document.getElementById("config-status-msg"),z=document.getElementById("save-config-btn"),Z=document.getElementById("export-config-btn"),H=document.getElementById("import-config-btn"),et=document.getElementById("import-config-input"),at=document.getElementById("start-play-btn"),ht=document.getElementById("playback-bar"),xt=document.getElementById("toggle-pause-btn"),Ut=document.getElementById("replay-btn"),X=document.getElementById("ratio-toggle-btn"),tt=document.getElementById("fullscreen-btn"),yt=document.getElementById("back-edit-btn"),ot=document.getElementById("open-help-btn"),Tt=document.getElementById("help-dialog"),st=new pa,bt=new al(n),Xt=new ll(st.settings.envelopeTheme);bt.bgScene.add(Xt.group);let jt=new cl(bt.bgScene),Bt=[],L=null,ae=new Il({scene:bt,envelope:Xt,meteorShower:jt,onPhaseChange:(W,rt,Q)=>{l.textContent=$y[W]||W,c.textContent=Q>0&&rt>0?`${rt} / ${Q}`:""},onEndingToggle:W=>{r.classList.toggle("is-visible",W),r.setAttribute("aria-hidden",W?"false":"true")},onComplete:()=>{xt.textContent="\u91CD\u64AD"}}),kt=null;function It(){B.hidden=!0,B.textContent=""}function _t(W){B.textContent=W,B.hidden=!1}function qt(W){clearTimeout(kt),q&&(q.textContent=W,q.hidden=!1,kt=setTimeout(()=>{q.hidden=!0},4e3))}function Et(){st.settings.holdDuration=Number(C.value)||3,st.settings.origamiShape=w.value,st.settings.envelopeTheme=T.value,Mt(v.value),st.settings.endingTitle=x.value.trim()||"\u613F\u6240\u6709\u6E29\u67D4\u4E0E\u661F\u5149\uFF0C\u90FD\u5954\u4F60\u800C\u6765",st.settings.endingSignature=P.value.trim(),st.settings.cinemaHideControls=F.checked,st.settings.autoFullscreen=U.checked}function R(){C.value=String(st.settings.holdDuration),w.value=st.settings.origamiShape,T.value=st.settings.envelopeTheme,Xt.setTheme(st.settings.envelopeTheme),Mt(st.settings.aspectRatio),x.value=st.settings.endingTitle,P.value=st.settings.endingSignature,F.checked=!!st.settings.cinemaHideControls,U.checked=!!st.settings.autoFullscreen}async function M(W){await Promise.allSettled(W.map(async rt=>{if(rt.imageDataUrl&&!rt.imageElement)try{rt.imageElement=await pp(rt.imageDataUrl)}catch(Q){console.warn("Failed to hydrate saved card image:",rt.id,Q)}}))}function k(){for(let W of Bt)W.dispose();Bt=[]}function $(){S.textContent=String(st.cards.length),A.hidden=st.cards.length>0,b.replaceChildren(),ae.isPlaying||Xt.setLetterStack?.(st.cards.length),st.cards.forEach((W,rt)=>{let Q=document.createElement("li");Q.className="card-item";let Rt=document.createElement("img");Rt.className="card-thumb",Rt.alt=W.title||`\u5361\u7247 ${rt+1}`,W._thumbUrl||(W._thumbUrl=Kc(W)),Rt.src=W._thumbUrl;let wt=()=>{W._thumbUrl=Kc(W),Rt.src=W._thumbUrl,Rt.alt=W.title||`\u5361\u7247 ${rt+1}`},Jt=document.createElement("div");Jt.className="card-meta";let D=document.createElement("input");D.type="text",D.value=W.title||"",D.placeholder=`\u5361\u7247 ${rt+1} \u6807\u9898\uFF08\u53EF\u9009\uFF09`,D.setAttribute("aria-label",`\u7B2C ${rt+1} \u5F20\u5361\u7247\u6807\u9898`),D.addEventListener("input",()=>{W=st.updateCard(W.id,{title:D.value.trim()})||W}),D.addEventListener("change",wt);let lt=document.createElement("input");lt.type="text",lt.value=W.text||"",lt.placeholder="\u5361\u7247\u914D\u6587 / \u795D\u798F\u8BED\uFF08\u53EF\u9009\uFF09",lt.setAttribute("aria-label",`\u7B2C ${rt+1} \u5F20\u5361\u7247\u5185\u5BB9`),lt.addEventListener("input",()=>{W=st.updateCard(W.id,{text:lt.value.trim()})||W}),lt.addEventListener("change",wt);let Y=document.createElement("div");Y.className="card-meta-row";let K=document.createElement("select");K.setAttribute("aria-label",`\u7B2C ${rt+1} \u5F20\u6298\u7EB8\u5F62\u6001`);let mt=[["inherit","\u8DDF\u968F\u5168\u5C40\u6298\u7EB8"],["plane","\u6298\u6210\u7EB8\u98DE\u673A"],["butterfly","\u6298\u6210\u8774\u8776"],["crane","\u6298\u6210\u5343\u7EB8\u9E64"]];for(let[Vt,Qe]of mt){let Ue=document.createElement("option");Ue.value=Vt,Ue.textContent=Qe,Ue.selected=W.origamiShape===Vt,K.appendChild(Ue)}if(K.addEventListener("change",()=>{st.updateCard(W.id,{origamiShape:K.value})}),Y.appendChild(K),W.imageElement){let Vt=document.createElement("select");Vt.setAttribute("aria-label",`\u7B2C ${rt+1} \u5F20\u56FE\u7247\u586B\u5145\u6A21\u5F0F`);let Qe=[["contain","\u5B8C\u6574\u4E0D\u88C1\u5207"],["cover","\u94FA\u6EE1\u753B\u9762"]];for(let[Ue,ua]of Qe){let zi=document.createElement("option");zi.value=Ue,zi.textContent=ua,zi.selected=(W.imageFit||"contain")===Ue,Vt.appendChild(zi)}Vt.addEventListener("change",()=>{W=st.updateCard(W.id,{imageFit:Vt.value})||W,wt()}),Y.appendChild(Vt)}Jt.append(D,lt,Y);let dt=document.createElement("div");dt.className="card-actions";let Lt=document.createElement("button");Lt.type="button",Lt.className="mini-btn",Lt.textContent="\u4E0A\u79FB",Lt.disabled=rt===0,Lt.addEventListener("click",()=>{st.moveCard(W.id,-1),$()});let te=document.createElement("button");te.type="button",te.className="mini-btn",te.textContent="\u4E0B\u79FB",te.disabled=rt===st.cards.length-1,te.addEventListener("click",()=>{st.moveCard(W.id,1),$()});let xe=document.createElement("button");xe.type="button",xe.className="mini-btn danger",xe.textContent="\u5220\u9664",xe.addEventListener("click",()=>{st.removeCard(W.id),$()}),dt.append(Lt,te,xe),Q.append(Rt,Jt,dt),b.appendChild(Q)})}async function j(W){It();let rt=Array.from(W||[]).filter(Q=>Q.type.startsWith("image/")||/\.(png|jpe?g|webp|gif|bmp|avif|svg)$/i.test(Q.name));if(rt.length===0){_t("\u8BF7\u9009\u62E9\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08JPG\u3001PNG\u3001WebP \u7B49\uFF09\u3002");return}for(let Q of rt)try{let Rt=await Jy(Q),wt=await pp(Rt);st.addImageCard({imageDataUrl:Rt,imageElement:wt,title:"",text:"",layout:"polaroid",paperTone:"ivory",imageFit:"contain",origamiShape:"inherit"})}catch(Rt){console.error("Failed to load image file:",Q.name,Rt),_t(`\u90E8\u5206\u56FE\u7247\u672A\u80FD\u8BFB\u53D6\uFF1A${Q.name}`)}$()}function J(){if(!i||st.settings.aspectRatio!=="9:16")return;let W=Math.round(t.clientWidth),rt=Math.round(t.clientHeight);i.textContent=W>0&&rt>0?`Instagram 9:16 \xB7 ${W} \xD7 ${rt}`:"Instagram 9:16"}function Mt(W){let rt=W==="9:16"?"9:16":"auto";st.settings.aspectRatio=rt,v&&(v.value=rt);let Q=rt==="9:16";s.classList.toggle("is-ratio-9-16",Q),X&&(X.classList.toggle("is-active",Q),X.textContent=Q?"9:16 \u7AD6\u5C4F \u2713":"9:16 \u7AD6\u5C4F"),i&&(i.hidden=!Q),bt.resize(),requestAnimationFrame(()=>{bt.resize(),J()})}function ct(){clearTimeout(L),s.classList.remove("is-cinema-idle"),t.classList.remove("is-cinema-idle"),st.settings.cinemaHideControls&&ae.isPlaying&&(L=setTimeout(()=>{s.classList.add("is-cinema-idle"),t.classList.add("is-cinema-idle")},1800))}function ft(){if(It(),st.cards.length===0){_t("\u8BF7\u5148\u4E0A\u4F20\u81F3\u5C11\u4E00\u5F20\u5361\u7247\u56FE\u7247\u6216\u6DFB\u52A0\u6587\u5B57\u5361\u7247\u3002");return}Et(),a.textContent=st.settings.endingTitle,o.textContent=st.settings.endingSignature,o.hidden=!st.settings.endingSignature,k();let W=bt.renderer.capabilities.getMaxAnisotropy(),rt=st.cards.map(Q=>{let{texture:Rt}=jd(Q,W);return Bt.push(Rt),{texture:Rt,origamiShape:Q.origamiShape}});e?.contains(document.activeElement)&&document.activeElement.blur?.(),e&&(e.inert=!0),s.classList.add("is-playing"),t.classList.add("is-playing"),ht.hidden=!1,xt.textContent="\u6682\u505C",st.settings.autoFullscreen&&!document.fullscreenElement&&s.requestFullscreen?.().then(()=>{!ae.isPlaying&&document.fullscreenElement===s&&document.exitFullscreen?.().catch(()=>{})}).catch(()=>{}),ae.play(rt,{holdDuration:st.settings.holdDuration,origamiShape:st.settings.origamiShape}),ct()}function Ht(){clearTimeout(L),s.classList.remove("is-playing","is-cinema-idle"),t.classList.remove("is-playing","is-cinema-idle"),e&&(e.inert=!1),ht.hidden=!0,ae.resetToIdle(),Xt.setLetterStack?.(st.cards.length),k(),document.fullscreenElement&&document.exitFullscreen?.().catch(()=>{})}if(h.addEventListener("change",W=>{j(W.target.files),h.value=""}),u.addEventListener("dragover",W=>{W.preventDefault(),u.classList.add("is-dragover")}),u.addEventListener("dragleave",()=>{u.classList.remove("is-dragover")}),u.addEventListener("drop",W=>{W.preventDefault(),u.classList.remove("is-dragover"),j(W.dataTransfer?.files)}),d.addEventListener("submit",W=>{W.preventDefault(),It();let rt=f.value.trim(),Q=_.value.trim();if(!rt&&!Q){_t("\u8BF7\u8F93\u5165\u5361\u7247\u6807\u9898\u6216\u6B63\u6587\u5185\u5BB9\u540E\u518D\u6DFB\u52A0\u3002");return}st.addTextCard({title:rt,text:Q,paperTone:g.value,origamiShape:m.value}),f.value="",_.value="",$()}),p.addEventListener("click",()=>{It(),st.loadDemoCards(),$()}),y.addEventListener("click",()=>{It(),st.clearCards(),$()}),T.addEventListener("change",()=>{Xt.setTheme(T.value)}),v.addEventListener("change",()=>{Mt(v.value)}),X.addEventListener("click",()=>{let W=st.settings.aspectRatio==="9:16"?"auto":"9:16";Mt(W),ct()}),z.addEventListener("click",async()=>{It(),Et();try{let W=st.exportConfig();await Qh(W),qt(`\u5DF2\u4FDD\u5B58\u5F53\u524D\u914D\u7F6E\uFF08\u542B ${W.cards.length} \u5F20\u5361\u7247\uFF09\uFF0C\u5237\u65B0\u9875\u9762\u81EA\u52A8\u6062\u590D\u3002`)}catch(W){console.error("Failed to save config:",W),_t("\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25\uFF0C\u53EF\u5C1D\u8BD5\u4F7F\u7528\u201C\u5BFC\u51FA\u914D\u7F6E\u201D\u4FDD\u5B58\u4E3A\u672C\u5730\u6587\u4EF6\u3002")}}),Z.addEventListener("click",()=>{It(),Et();let W=st.exportConfig(),rt=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),Q=URL.createObjectURL(rt),Rt=new Date().toISOString().slice(0,16).replace(/[:T]/g,"-"),wt=document.createElement("a");wt.href=Q,wt.download=`starry-envelope-config-${Rt}.json`,document.body.appendChild(wt),wt.click(),wt.remove(),URL.revokeObjectURL(Q),qt(`\u5DF2\u5BFC\u51FA\u914D\u7F6E\u6587\u4EF6\uFF08\u542B ${W.cards.length} \u5F20\u5361\u7247\uFF09\u3002`)}),H.addEventListener("click",()=>{et.click()}),et.addEventListener("change",async W=>{It();let rt=W.target.files?.[0];if(et.value="",!!rt)try{let Q=await rt.text(),Rt=JSON.parse(Q);if(!st.importConfig(Rt)){_t("\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u65E0\u6548\uFF0C\u8BF7\u9009\u62E9\u5BFC\u51FA\u7684 JSON \u914D\u7F6E\u6587\u4EF6\u3002");return}await M(st.cards),R(),$(),qt(`\u5DF2\u5BFC\u5165\u914D\u7F6E\uFF08\u542B ${st.cards.length} \u5F20\u5361\u7247\uFF09\u3002`)}catch(Q){console.error("Failed to import config:",Q),_t("\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u5931\u8D25\uFF0C\u8BF7\u786E\u8BA4\u6587\u4EF6\u4E3A\u6709\u6548\u7684 JSON \u914D\u7F6E\u3002")}}),at.addEventListener("click",ft),xt.addEventListener("click",()=>{if(xt.textContent==="\u91CD\u64AD"){ft();return}let W=ae.togglePause();xt.textContent=W?"\u7EE7\u7EED":"\u6682\u505C",ct()}),Ut.addEventListener("click",ft),tt.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.().catch(()=>{}):s.requestFullscreen?.().catch(()=>{})}),document.addEventListener("fullscreenchange",()=>{tt.textContent=document.fullscreenElement?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",requestAnimationFrame(()=>{bt.resize(),J()})}),window.addEventListener("resize",J),yt.addEventListener("click",Ht),s.addEventListener("mousemove",ct),s.addEventListener("pointerdown",ct),document.addEventListener("keydown",W=>{!ae.isPlaying||Tt.open||W.target&&["INPUT","TEXTAREA","SELECT"].includes(W.target.tagName)||(ct(),W.code==="Space"?(W.preventDefault(),xt.click()):W.key==="r"||W.key==="R"?ft():W.key==="Escape"&&!document.fullscreenElement&&Ht())}),ot.addEventListener("click",()=>{Tt.showModal()}),Tt.addEventListener("close",()=>{Tt.returnValue=""}),!("closedBy"in HTMLDialogElement.prototype)){let W=(Q,Rt)=>{let wt=Rt.getBoundingClientRect();return Q.clientX<wt.left||Q.clientX>wt.right||Q.clientY<wt.top||Q.clientY>wt.bottom},rt=!1;Tt.addEventListener("pointerdown",Q=>{rt=W(Q,Tt)}),Tt.addEventListener("pointerup",Q=>{rt&&W(Q,Tt)&&Tt.close()})}$(),jh().then(async W=>{W&&st.importConfig(W)&&(await M(st.cards),R(),$(),qt(`\u5DF2\u81EA\u52A8\u6062\u590D\u4E0A\u6B21\u4FDD\u5B58\u7684\u914D\u7F6E\uFF08\u542B ${st.cards.length} \u5F20\u5361\u7247\uFF09\u3002`))}).catch(W=>{console.warn("Could not restore saved config:",W)});let nt=null;function gt(W){document.hidden||ae.update(W),nt=requestAnimationFrame(gt)}nt=requestAnimationFrame(gt),document.addEventListener("visibilitychange",()=>{ae.setHiddenPaused(document.hidden)}),window.addEventListener("beforeunload",()=>{cancelAnimationFrame(nt),k(),Xt.dispose(),jt.dispose(),bt.dispose()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",mp):mp();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=app.bundle.js.map
