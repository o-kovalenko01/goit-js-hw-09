const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let l=null;t.addEventListener("click",(()=>{null===l&&(l=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),850),t.disabled=!0)})),e.addEventListener("click",(()=>{clearInterval(l),l=null,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.de94625f.js.map