var url = "";

chrome.browserAction.onClicked.addListener(function (tab) {
  SetUrl();
  if (!url.includes("www.cda.pl/video")) return;
  chrome.tabs.executeScript(null, { file: "script.js" });
});

function SetUrl() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    url = tabs[0].url;
  });
}
