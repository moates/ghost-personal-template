!function(e,t){e&&!e.getElementById("livereloadscript")&&((t=e.createElement("script")).async=1,t.src="//"+(self.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",t.id="livereloadscript",e.getElementsByTagName("head")[0].appendChild(t))}(self.document),function(){"use strict";let e=document.querySelector('link[rel="next"]')?.getAttribute("href");document.querySelector(".gh-burger").addEventListener("click",(function(){document.body.classList.toggle("gh-head-open")})),function(){if(!e)return;new IntersectionObserver(((t,n)=>{try{t.forEach((t=>{t.isIntersecting&&e&&async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch page");const n=await t.text(),o=(new DOMParser).parseFromString(n,"text/html"),r=o.querySelectorAll(".post"),a=o.querySelector('link[rel="next"]')?.getAttribute("href");return{posts:r,nextLink:a}}catch(e){throw new Error(e)}}(e).then((t=>{let{posts:o,nextLink:r}=t;o.forEach((e=>{document.querySelector(".gh-postfeed").append(e)})),r?(e=r,n.observe(document.querySelector(".post:last-of-type"))):n.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}(),function(){const e=["an artist","a programmer","a programmer","an artist","an artist","a sleepyhead","a policy analyst","a collaborator","a performer","an advocate","a privacy pro","a recovering techie","a dancer","a cluster of balloons","your future collaborator","a dear friend","a fighter for sex worker rights"];var t=0;Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]};var n=document.getElementById("randWord"),o=document.getElementById("randWordNote");function r(t){let o=`<span>is ${e.sample()}</span>`;for(let n=0;n<t;n++)o+=` / <span>${e.sample()}</span>`;n&&(n.innerHTML=o)}document.getElementById("randWordButton")?.addEventListener("click",(function(){r(t),document.getElementById("randWordButton")?.classList.remove("mo-glowing"),document.getElementById("addSlashButton")?.classList.add("mo-glowing")})),document.getElementById("addSlashButton")?.addEventListener("click",(function(){3==(t+=1)&&(o.textContent="How can we be so many things at once?"),4==t?(o.textContent="It's almost unbearable.",document.getElementById("randWordButton")?.classList.remove("mo-glowing"),document.getElementById("addSlashButton")?.classList.remove("mo-glowing")):t>4&&(t=0,o.textContent=""),r(t)}))}()}();
//# sourceMappingURL=index.js.map
