var newURL = "";
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        chrome.storage.local.set({engine: 1})
    }else if(details.reason == "update"){
        //call a function to handle an update
        chrome.storage.local.set({engine: 1})
    }
});

chrome.omnibox.onInputEntered.addListener((text) => {

    chrome.storage.local.get(['engine'], function (data) {
        switch (data.engine) {
            case 1:
                newURL = 'https://www.google.com/search?q=' + encodeURIComponent(text);
                break;
            case 2:
                newURL = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(text);
                break;
            case 3:
                newURL = 'https://search.yahoo.com/search?p=' + encodeURIComponent(text);
                break;
            case 4:
                newURL = 'https://bing.com/search?q=' + encodeURIComponent(text);
                break;
            case 5:
                newURL = 'https://yandex.com/search/?text=' + encodeURIComponent(text);
                break;
        }
    })

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id; // or do whatever you need
        chrome.tabs.update(activeTabId, { url: newURL });
    });

});

// chrome.omnibox.onInputChanged.addListener(
//     function (text, suggest) {
//         text = text.replace(" ", "");

//         // Add suggestions to an array
//         var suggestions = [];
//         suggestions.push({ content: "http://reddit.com/r/" + text, description: "reddit.com/r/" + text });
//         suggestions.push({ content: "http://imgur.com/r/" + text, description: "imgur.com/r/" + text });

//         // Set first suggestion as the default suggestion
//         chrome.omnibox.setDefaultSuggestion({ description: suggestions[0].description });

//         // Remove the first suggestion from the array since we just suggested it
//         suggestions.shift();

//         // Suggest the remaining suggestions
//         suggest(suggestions);
//     }
// );