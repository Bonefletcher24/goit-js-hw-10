function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_hgVLmozRnWu8KA5AwXcTnQHagnoN82mIVmdHKvikbJsJw7KLhHIWKYVzJ3B5sXy5&breed_ids=${e}`).then((e=>{if(e.ok)return e.json();throw new Error(e.status)}))}const s=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),n=document.querySelector(".loader"),i=document.querySelector(".error");function d(){i.classList.remove("is-hidden"),s.classList.add("is-hidden")}i.classList.add("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_hgVLmozRnWu8KA5AwXcTnQHagnoN82mIVmdHKvikbJsJw7KLhHIWKYVzJ3B5sXy5").then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{n.classList.replace("loader","is-hidden");let t=e.map((({name:e,id:s})=>`<option value=${s}>${e}</option>`));s.insertAdjacentHTML("beforeend",t),s.classList.remove("is-hidden")})).catch(d),s.addEventListener("change",(s=>{n.classList.replace("is-hidden","loader"),t.classList.add("is-hidden"),e(s.target.value).then((e=>{const{url:s,breeds:i}=e[0],{name:d,description:a,temperament:r}=i[0];t.innerHTML=`\n            <img src='${s}' alt='{name}' width="400"/>\n            <div class='box'>\n                <h2>${d}</h2>\n                <p>${a}</p>\n                <p>${r}</p>\n            </div>\n        `,t.classList.remove("is-hidden"),n.classList.add("is-hidden")})).catch(d)}));
//# sourceMappingURL=index.17f0cb8d.js.map