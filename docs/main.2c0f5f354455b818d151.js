!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(){},function(t,e,n){"use strict";function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,t},f:function t(){try{i||null==n.return||n.return()}finally{if(l)throw t}}}}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function l(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==n.return||n.return()}finally{if(i)throw t}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}n.r(e),n.d(e,"todoList",(function(){return h}));n(0);var u=function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date},d=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.cargarLocalStorage()}return function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(t,[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,n=r(this.todos);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.id==t){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(o){n.e(o)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[]}}]),t}(),s=document.querySelector(".todo-list"),f=document.querySelector(".new-todo"),m=document.querySelector(".clear-completed"),y=document.querySelector(".filters"),v=document.querySelectorAll(".filtro"),p=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n            <label>").concat(t.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=e,s.append(n.firstElementChild),n.firstElementChild};f.addEventListener("keyup",(function(t){if(13===t.keyCode&&0<f.value.length){var e=new u(f.value);h.nuevoTodo(e),p(e),f.value=""}})),s.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,r=n.getAttribute("data-id");e.includes("input")?(h.marcarCompletado(r),n.classList.toggle("completed")):e.includes("button")&&(h.eliminarTodo(r),s.removeChild(n))})),m.addEventListener("click",(function(){h.eliminarCompletados();for(var t,e=s.children.length-1;0<=e;e--)(t=s.children[e]).classList.contains("completed")&&s.removeChild(t)})),y.addEventListener("click",(function(t){var e=t.target.text;if(e){v.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var n,r=l(s.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");"Pendientes"===e?a&&o.classList.add("hidden"):"Completados"===e&&(a||o.classList.add("hidden"))}}catch(n){r.e(n)}finally{r.f()}}}));var h=new d;h.todos.forEach((function(t){return p(t)}))}]);