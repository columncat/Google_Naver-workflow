var GOOGLE = "google";
var NAVER = "search.naver.com";

chrome.browserAction.onClicked.addListener(function (tab) {
  var currentUrl; // 현재 접속한 페이지 주소
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    currentUrl = tabs[0].url;

    // 주소에 google이라는 단어 포함여부
    if (currentUrl.indexOf(GOOGLE) > -1) {
      if (currentUrl.indexOf("search") == -1) {
        chrome.tabs.update({ url: "https://www.naver.com/" });
      }
      var matchWord = currentUrl.match(/(\?|&)q=([^&]+)/);
      var keyword = matchWord[matchWord.length - 1];

      if (keyword != undefined) {
        chrome.tabs.update({
          url: "https://search.naver.com/search.naver?query=" + keyword,
        });
      }
    } else if (currentUrl.indexOf(NAVER) > -1) {
      var isSearch = currentUrl.match(/(\?|&)query=([^&]+)/);
      var keyword = isSearch[isSearch.length - 1];

      if (keyword != undefined) {
        chrome.tabs.update({
          url: "https://www.google.com/search?q=" + keyword,
        });
      }
    } else if (currentUrl.indexOf("www.naver.com") > -1) {
      chrome.tabs.update({ url: "https://www.google.com/" });
    }
  });
});

chrome.commands.onCommand.addListener(function (command) {
  var currentUrl; // 현재 접속한 페이지 주소
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    currentUrl = tabs[0].url;

    // 주소에 google이라는 단어 포함여부
    if (currentUrl.indexOf(GOOGLE) > -1) {
      if (currentUrl.indexOf("search") == -1) {
        chrome.tabs.update({ url: "https://www.naver.com/" });
      }
      var matchWord = currentUrl.match(/(\?|&)q=([^&]+)/);
      var keyword = matchWord[matchWord.length - 1];

      if (keyword != undefined) {
        chrome.tabs.update({
          url: "https://search.naver.com/search.naver?query=" + keyword,
        });
      }
    } else if (currentUrl.indexOf(NAVER) > -1) {
      var isSearch = currentUrl.match(/(\?|&)query=([^&]+)/);
      var keyword = isSearch[isSearch.length - 1];

      if (keyword != undefined) {
        chrome.tabs.update({
          url: "https://www.google.com/search?q=" + keyword,
        });
      }
    } else if (currentUrl.indexOf("www.naver.com") > -1) {
      chrome.tabs.update({ url: "https://www.google.com/" });
    }
  });
});
