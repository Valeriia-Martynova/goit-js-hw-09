import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s="feedback-form-state",t={email:"",message:""},a=document.querySelector(".feedback-form"),l=a.elements.email,m=a.elements.message;function r(){localStorage.setItem(s,JSON.stringify(t))}function i(){const e=localStorage.getItem(s);return e?JSON.parse(e):null}document.addEventListener("DOMContentLoaded",()=>{const e=i();e&&(t=e,l.value=e.email||"",m.value=e.message||"")});a.addEventListener("input",e=>{const{name:o,value:n}=e.target;t[o]=n.trim(),r()});a.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(s),t={email:"",message:""},a.reset()});
//# sourceMappingURL=2-form.js.map
