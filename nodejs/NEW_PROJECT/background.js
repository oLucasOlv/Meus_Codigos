console.log("Edge extension is working!");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background recebeu:", message);

  if (message.type === "text" && Array.isArray(message.data)) {
    chrome.storage.local.get("channelList", (result) => {
      const existing = result.channelList || [];
      const updated = [...existing, ...message.data];
      chrome.storage.local.set({ channelList: updated }, () => {
        console.log("Storage atualizado no background:", updated);
        sendResponse({ status: "salvo no background!" });
      });
    });
    return true; // indica resposta assíncrona
  }
});