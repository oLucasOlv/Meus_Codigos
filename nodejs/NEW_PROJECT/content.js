// Envia nome do streamer ao carregar e em SPA navigation
(() => {
  function sendStreamer() {
    const streamer = window.location.pathname.replace(/\//g, "");
    if (!streamer) return;
    console.log("Enviando streamer:", streamer);
    chrome.runtime.sendMessage({ type: "text", data: [streamer] }, (res) => {
      console.log("Resposta do background:", res);
    });
  }

  // Primeiro envio
  sendStreamer();

  // Detecta navegação interna (SPA)
  const _push = history.pushState;
  history.pushState = function () {
    _push.apply(this, arguments);
    sendStreamer();
  };
  window.addEventListener("popstate", sendStreamer);
})();