function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},n.parcelRequired7c6=r);var a=r("g3W78"),s=r("j7Oh7"),c=r("c7dDA"),o=r("eWl5n"),l=r("1pvbX"),d=r("iox0Q"),f=r("8P1Rs"),u=r("iYVxn");r("8huCE"),r("bHKmf"),r("bHKmf");var v=r("5yo3f");var p=e(r("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(e,n,t,i,r){return'  <div class="container content-library__card">\n    <div class="content-library__img-card">\n      <img src="https://i.imgur.com/iLiA7oC.png" alt="mike" class="content-library__image" />\n    </div>\n    <div class="content-library__list">\n      <h2 class="content-library__title">Ouhh... it\'s empty in here!</h2>\n      <p class="content-library__text">\n        <a class="content-library__link" href="./index.html">Go back</a> and add\n        your favorite movies.\n      </p>\n    </div>\n  </div>'},useData:!0});(0,s.onTopArrow)(),(0,o.onSwitch)(),(0,v.onSmoothScroll)(),a.refs.libraryControls.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.contains("js-btn-watched")&&(a.refs.libWatchedBtn.classList.add("btn-js-active"),a.refs.libQeueBtn.classList.remove("btn-js-active"),(0,d.renderFilms)(f.apiService.fetchWatched(),!0),f.apiService.watched.length||(a.refs.contentList.innerHTML=p()));e.target.classList.contains("js-btn-qeue")&&(a.refs.libQeueBtn.classList.add("btn-js-active"),a.refs.libWatchedBtn.classList.remove("btn-js-active"),(0,d.renderFilms)(f.apiService.fetchQeue(),!0),f.apiService.qeue.length||(a.refs.contentList.innerHTML=p()))})),a.refs.contentList.addEventListener("click",(function(e){const n=e.target.parentNode.parentNode;if("LI"!==n.nodeName)return;const t=f.apiService.films.find((({id:e})=>e==n.id));(0,c.fillModal)(t)})),a.refs.paginationControls.addEventListener("click",l.onPaginationClick,!0),async function(){const e=await f.apiService.fetchWatched(),n=await(0,d.renderFilms)(e,!0);f.apiService.watched.length||(a.refs.contentList.innerHTML=p())}(),console.log(f.apiService),(0,u.toggleBackdrop)();
//# sourceMappingURL=library.a040d5e1.js.map
