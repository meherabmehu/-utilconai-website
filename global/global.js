/* ============================================================
   UtilCon AI — GLOBAL JAVASCRIPT
   Paste into WP Code Snippets as a "JS Code Snippet" (site-wide)
   Run on: Page load
   ============================================================ */

(function () {
  "use strict";

  /* 1) Scroll reveal */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { obs.observe(el); });
  }

  /* 2) Animated counters */
  function initCounters() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var suffix = el.getAttribute("data-suffix") || "";
      var dur = 1600; var start = null;
      function tick(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString() + suffix;
      }
      requestAnimationFrame(tick);
    }
    if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { run(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { obs.observe(el); });
  }

  /* 3) FAQ accordion */
  function initAccordion() {
    document.querySelectorAll(".accordion__head").forEach(function (head) {
      head.addEventListener("click", function () {
        var item = head.closest(".accordion");
        var body = item.querySelector(".accordion__body");
        var isOpen = item.classList.contains("is-open");
        document.querySelectorAll(".accordion.is-open").forEach(function (o) {
          if (o !== item) { o.classList.remove("is-open"); o.querySelector(".accordion__body").style.maxHeight = "0px"; }
        });
        if (isOpen) { item.classList.remove("is-open"); body.style.maxHeight = "0px"; }
        else { item.classList.add("is-open"); body.style.maxHeight = body.scrollHeight + "px"; }
      });
    });
  }

  /* Boot */
  function boot() { initReveal(); initCounters(); initAccordion(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
