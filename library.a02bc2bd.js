!function(){var e,t={contentList:document.querySelector(".content__list"),form:document.querySelector("#search-form"),openFilmBtn:document.querySelector("[data-film-modal-open]"),openTeamBtn:document.querySelector("[data-team-modal-open]"),backdropRef:document.querySelector("[data-backdrop]"),filmModalRef:document.querySelector("[data-film-modal]"),teamModalRef:document.querySelector("[data-team-modal]"),filmName:document.querySelector(".js-name"),filmImage:document.querySelector(".film-modal__img"),filmPopulation:document.querySelector(".js-rating"),filmTittle:document.querySelector(".js-title"),filmVoteFirst:document.querySelector(".js-accent-box"),filmVoteSecond:document.querySelector(".js-pale-box"),filmAbout:document.querySelector(".js-about"),filmGenres:document.querySelector(".js-genre"),paginationControls:document.querySelector(".pagination__controls"),currentPage:document.querySelector(".js-current"),toggle:document.getElementById("toggleDark"),body:document.querySelector("body"),switchBtn:document.querySelector(".switch__btn"),switchIcon:document.querySelector(".switch__btn__icon"),failureMessage:document.querySelector(".failure-message"),spinner:document.querySelector(".loader"),goTopBtn:document.querySelector(".lift_up")};function o(e){localStorage.setItem("darkmode",e)}t.switchBtn.addEventListener("click",(function(){t.body.classList.toggle("darkmode"),t.switchIcon.classList.add("animated"),o(t.body.classList.contains("darkmode")),t.body.classList.contains("darkmode")?(t.switchIcon.classList.remove("fa-sun"),t.switchIcon.classList.add("fa-moon")):(t.switchIcon.classList.remove("fa-moon"),t.switchIcon.classList.add("fa-sun")),setTimeout((function(){t.switchIcon.classList.remove("animated")}),500)})),window.addEventListener("scroll",(function(){var e=window.pageYOffset,o=document.documentElement.clientHeight;e>o&&t.goTopBtn.classList.add("lift_up-show"),e<o&&t.goTopBtn.classList.remove("lift_up-show")})),t.goTopBtn.addEventListener("click",(function e(){window.pageYOffset>0&&(window.scrollBy(0,-80),setTimeout(e,10))})),(e=localStorage.getItem("darkmode"))?"true"==e?(t.body.classList.add("darkmode"),t.switchIcon.classList.add("fa-moon")):"false"==e&&t.switchIcon.classList.add("fa-sun"):(o(!1),t.switchIcon.classList.add("fa-sun"))}();
//# sourceMappingURL=library.a02bc2bd.js.map
