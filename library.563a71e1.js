var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var i=r("g3W78"),a=r("j7Oh7"),c=r("c7dDA"),o=r("eWl5n"),l=r("1pvbX"),s=r("iox0Q"),d=r("8P1Rs"),f=r("iYVxn"),u=r("8huCE"),h=r("5yo3f");function p(e){e.classList.contains("btn--accent")?e.classList.replace("btn--accent","btn--white"):e.classList.replace("btn--white","btn--accent")}r("2atFa"),r("a1STQ"),(0,a.onTopArrow)(),(0,o.onSwitch)(),(0,h.onSmoothScroll)(),i.refs.libraryControls.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;e.target.classList.contains("js-btn-watched")&&(p(e.currentTarget.children[1].firstElementChild),p(e.currentTarget.children[0].firstElementChild),(0,s.renderFilms)(d.apiService.fetchWatched()));e.target.classList.contains("js-btn-qeue")&&(p(e.currentTarget.children[1].firstElementChild),p(e.currentTarget.children[0].firstElementChild),(0,s.renderFilms)(d.apiService.fetchQeue()))})),i.refs.contentList.addEventListener("click",(function(e){const t=e.target.parentNode.parentNode;if("LI"!==t.nodeName)return;const n=d.apiService.films.find((({id:e})=>e==t.id));(0,c.fillModal)(n)})),i.refs.paginationControls.addEventListener("click",l.onPaginationClick),(0,s.renderFilms)(d.apiService.fetchWatched()),u.renderPagination,(0,f.toggleBackdrop)();
//# sourceMappingURL=library.563a71e1.js.map
