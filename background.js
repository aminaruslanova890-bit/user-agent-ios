// Service worker для Apple UA Spoofer
// Также переопределяет navigator.userAgent через контентный скрипт

chrome.runtime.onInstalled.addListener(() => {
  console.log('Apple UA Spoofer установлен');
});
