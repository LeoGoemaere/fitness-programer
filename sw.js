if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const f=e=>t(e,r),l={module:{uri:r},exports:o,require:f};s[r]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(i(...e),o)))}}define(["./workbox-cbf83eee"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"488a33034f847903f096c3907d5ea55d"},{url:"_nuxt/builds/meta/76609e0f-09ad-430a-a704-04f4a85b999c.json",revision:null},{url:"manifest.webmanifest",revision:"64e899f14fd94f98e0195da508c8f46e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/fitness-programer/")))}));
