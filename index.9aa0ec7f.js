const e=document.querySelector(".slides"),l=document.querySelector(".slider__arrow--left"),t=document.querySelector(".slider__arrow--right"),r=Array.from(e.querySelectorAll("img")),c=r.length;let o=0;function n(){r.forEach((e,l)=>{l===o?(e.style.display="block",e.style.display="block"):e.style.display="none"})}l.addEventListener("click",function(){o=(o-1+c)%c,n()}),t.addEventListener("click",function(){o=(o+1)%c,n()}),n();
//# sourceMappingURL=index.9aa0ec7f.js.map
