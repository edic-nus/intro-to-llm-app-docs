!(function () {
  for (
    var e = document.body.getElementsByTagName("a"), t = e.length, n = 0;
    n < t;
    n++
  )
    new URL(e[n].href).origin !== location.origin &&
      e[n].setAttribute("target", "_blank");
})();
