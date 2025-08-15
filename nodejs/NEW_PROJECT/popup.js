(() => {
  const STORAGE_KEY = 'channelList';
  const listContainer = document.getElementById('channel-list');
  const removeAllBtn = document.getElementById('remove-all');
  let channelList = [];

  const saveChannels = () => {
    chrome.storage.local.set({ [STORAGE_KEY]: channelList });
  };

  const renderChannels = () => {
    listContainer.innerHTML = '';
    channelList.forEach((name, idx) => {
      const channelDiv = document.createElement('div');
      channelDiv.className = 'channel';
      channelDiv.innerHTML = `
        <div class="channel-left">
          <span class="status-dot ${isLive(name) ? 'live' : 'offline'}"></span>
          <span class="channel-name">${name}</span>
        </div>
        <button class="close-btn" data-index="${idx}">×</button>
      `;
      channelDiv.querySelector('.close-btn')
        .addEventListener('click', () => removeChannel(idx));
      listContainer.appendChild(channelDiv);
    });
  };

  const addChannels = (names) => {
    channelList.push(...names);
    saveChannels();
    renderChannels();
  };

  const removeChannel = (index) => {
    channelList.splice(index, 1);
    saveChannels();
    renderChannels();
  };

  const clearChannels = () => {
    channelList = [];
    saveChannels();
    renderChannels();
  };

  function isLive(name) {
    // Defina aqui lógica real de LIVE vs OFFLINE
    return false;
  }

  const init = () => {
    chrome.storage.local.get(STORAGE_KEY, (result) => {
      channelList = result[STORAGE_KEY] || ['Streamer1', 'Streamer2'];
      renderChannels();
    });

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
      if (msg.type === 'text' && Array.isArray(msg.data)) {
        addChannels(msg.data);
        sendResponse({ status: 'adicionado no popup!' });
      }
    });

    removeAllBtn.addEventListener('click', clearChannels);
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === 'local' && changes[STORAGE_KEY]) {
        channelList = changes[STORAGE_KEY].newValue;
        renderChannels();
      }
    });
  };

  document.addEventListener('DOMContentLoaded', init);
})();