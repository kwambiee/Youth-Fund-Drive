window.onload = function () {
  function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      // if any scroll is attempted,
      // set this to the previous value
      (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      });
  }
  function enableScroll() {
    window.onscroll = function () {};
  }

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};
