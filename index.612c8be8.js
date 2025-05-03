document.querySelector("ul").addEventListener("click",function(t){t.preventDefault();var e=t.target.classList.contains("gallery__thumb"),r=t.target.classList.contains("list-item__link");if(e||r){var a=document.querySelector("#largeImg");"IMG"===t.target.tagName?a.src=t.target.parentElement.href:a.src=t.target.href}});
//# sourceMappingURL=index.612c8be8.js.map
