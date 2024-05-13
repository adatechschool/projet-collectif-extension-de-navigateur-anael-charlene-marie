// fetch(getPhoto)
//   .then(response => response.json())
//   .then(photo => {
//     console.log(photo);
//     chrome.runtime.sendMessage({action: "setWallpaper", imageUrl: photo.urls.regular});
//   })
//   .catch(err => console.log('Erreur : ' + err));

// alert ('content script alive!');
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     alert ('change theme:' + request.font-size);
     $('#id_editor').attr('style', 'font-size:' + request.font-size+ 'px;')
    }
  );