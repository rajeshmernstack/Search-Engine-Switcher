
HighlightTheSelectedEngine();

function HighlightTheSelectedEngine() {
    chrome.storage.local.get(['engine'], function (data) {
        switch (data.engine) {
            case 1:
                document.getElementById('google-engine-btn').classList.add('btn-success')
                document.getElementById('youtube-engine-btn').classList.remove('btn-success')
                document.getElementById('yahoo-engine-btn').classList.remove('btn-success')
                document.getElementById('bing-engine-btn').classList.remove('btn-success')
                document.getElementById('yandex-engine-btn').classList.remove('btn-success')
                break;
            case 2:
                document.getElementById('google-engine-btn').classList.remove('btn-success')
                document.getElementById('youtube-engine-btn').classList.add('btn-success')
                document.getElementById('yahoo-engine-btn').classList.remove('btn-success')
                document.getElementById('bing-engine-btn').classList.remove('btn-success')
                document.getElementById('yandex-engine-btn').classList.remove('btn-success')

                break;
            case 3:
                document.getElementById('google-engine-btn').classList.remove('btn-success')
                document.getElementById('youtube-engine-btn').classList.remove('btn-success')
                document.getElementById('yahoo-engine-btn').classList.add('btn-success')
                document.getElementById('bing-engine-btn').classList.remove('btn-success')
                document.getElementById('yandex-engine-btn').classList.remove('btn-success')
                break;
            case 4:
                document.getElementById('google-engine-btn').classList.remove('btn-success')
                document.getElementById('youtube-engine-btn').classList.remove('btn-success')
                document.getElementById('yahoo-engine-btn').classList.remove('btn-success')
                document.getElementById('bing-engine-btn').classList.add('btn-success')
                document.getElementById('yandex-engine-btn').classList.remove('btn-success')
                break;
            case 5:
                document.getElementById('google-engine-btn').classList.remove('btn-success')
                document.getElementById('youtube-engine-btn').classList.remove('btn-success')
                document.getElementById('yahoo-engine-btn').classList.remove('btn-success')
                document.getElementById('bing-engine-btn').classList.remove('btn-success')
                document.getElementById('yandex-engine-btn').classList.add('btn-success')
                break;
        }
    })
}
document.getElementById('google-engine-btn').addEventListener('click', function (e) {
    chrome.storage.local.set({ engine: 1 }, function () {
        HighlightTheSelectedEngine();
    })
})

document.getElementById('youtube-engine-btn').addEventListener('click', function (e) {
    chrome.storage.local.set({ engine: 2 }, function () {
        HighlightTheSelectedEngine();
    })
})

document.getElementById('yahoo-engine-btn').addEventListener('click', function (e) {
    chrome.storage.local.set({ engine: 3 }, function () {
        HighlightTheSelectedEngine();
    })
})
document.getElementById('bing-engine-btn').addEventListener('click', function (e) {
    chrome.storage.local.set({ engine: 4 }, function () {
        HighlightTheSelectedEngine();
    })
})
document.getElementById('yandex-engine-btn').addEventListener('click', function (e) {
    chrome.storage.local.set({ engine: 5 }, function () {
        HighlightTheSelectedEngine();
    })
})

