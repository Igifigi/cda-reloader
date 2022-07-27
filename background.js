var url = "";
var quality;

chrome.browserAction.onClicked.addListener(function (tab) {
  SetUrl();
  if (!url.includes("www.cda.pl/video")) return;
  chrome.tabs.executeScript(tab.id, { file: "script.js" });
});

function SetUrl() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    url = tabs[0].url;
  });
}

chrome.extension.onRequest.addListener(function (_quality) {
  quality = _quality;
  OpenUrl(UpgradeUrlToHigherQuality(url));
});

function OpenUrl(url) {
  chrome.tabs.update(null, { url: url });
}

function UpgradeUrlToHigherQuality(url) {
  return (url += "?wersja=" + quality);
}
