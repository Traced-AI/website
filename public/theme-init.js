(function () {
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) { /* storage blocked */ }
  var t = stored === 'dark' || stored === 'light'
    ? stored
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', t);
})();
