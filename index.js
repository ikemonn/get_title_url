//タブの情報を取得する
chrome.tabs.getSelected(null, function(tab) {

    var siteTitle = tab.title;
    var siteURL   = tab.url;
    var content = siteTitle + ' ( ' + siteURL + ' )';
    var textarea = document.getElementById('content');
    textarea.value = content;
});


