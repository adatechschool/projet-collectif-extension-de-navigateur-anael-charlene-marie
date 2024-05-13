
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "photos") {
        // Change the wallpaper in your Google Chrome
        // For demonstration purposes, let's just log the URL
        console.log("Setting wallpaper:", request.imageUrl);
        // You need to implement the logic to set the wallpaper

        // Exemple d'implémentation :
        chrome.storage.local.set({ wallpaperUrl: request.imageUrl }, function() {
            console.log('Wallpaper URL saved:', request.imageUrl);
        });
    }
});
