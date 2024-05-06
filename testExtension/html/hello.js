const apiKey ='854c7f80271d986efc886f7373e8d319';

 document.getElementById("meteoSearch").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value; // permet de récupérer la valeur inscrite dans l'input
    if (query) // condition if mise en place pour ne pas générer de requête si rien n'a été indiqué dans l'input
    {
       const meteoSearchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric&lang=fr`;
       // Fonction pour appeler l'API OpenWeather avec une ville en paramètre
   

    
    // Appel de l'API
    fetch(meteoSearchUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            document.querySelector('#city').innerHTML = `Hey !! Comment ça va sur ${data.name}?`;
            document.querySelector('#temp').innerHTML = `la température est de ${data.main.temp} °C`;
            console.log(data.main.temp)
            document.querySelector('#humidity').innerHTML = `Le temps est plutôt ${data.weather[0].description}, bonne journée à toi !
             
            
            
            Maintenant tu peux choisir les thèmes pour plus de fun ! <3 `;
            // document.querySelector('#wind').innerHTML = `${data.wind.speed} km/h`;
            // document.querySelector('#icon').innerHTML = `${data.weather.icon}`

            //fction pour recup la donnée météorologique
            // const getDescription =(weatherArray) => {
            //     let description="";
            //     weatherArray.forEach(weatherObject => {
                    //weatherObject est utilisé comme une variable de paramètre dans la fonction
                    // weatherArray += weatherObject.main + ", ";

                     })
        .catch(err => console.log('Erreur : ' + err));
    }
})

// let page1 = document.getElementById("page1");
// let page2 = document.getElementById("page2");
// let meteoSearch = document.getElementById("meteoSearch");
// let back = document.getElementById("bacK");
//  meteoSearch.addEventListener("click", () => {
//   if(getComputedStyle(page1).display != "none"){
//     page1.style.display = "none";
//   } else {
//     page1.style.display = "block";
//   }
// })

// function returnToPage1() {
//   document.getElementById("page1").style.display = "block";
//   document.getElementById("page2").style.display = "none";
//   // return false; // Pour empêcher le navigateur de suivre le lien
// }
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let meteoSearch = document.getElementById("meteoSearch");
let back = document.getElementById(".back"); 

meteoSearch.addEventListener("click", () => {
    if (getComputedStyle(page1).display != "none") {
        page1.style.display = "none";
        page2.style.display = "block"; // Affiche la page 2 lorsque la recherche est effectuée
    } else {
        // Ici, vous devez ajouter le code pour traiter la recherche météo
    }
});

// variable pour garder l'id de la page1
let currentPageId = "page1";

// Ajoute un écouteur d'événement clic au lien "back"
document.querySelector('.back').addEventListener('click', returnToPreviousPage);

// Fonction pour revenir à la page/div précédente
function returnToPreviousPage() {
    let currentPage = document.getElementById(currentPageId);
    currentPage.style.display = "none"; // Masque la page/div courante

    // Détermine l'ID de la page/div précédente
    let previousPageId = currentPageId === "page1" ? "page2" : "page1";
    let previousPage = document.getElementById(previousPageId);
    previousPage.style.display = "block"; // Affiche la page/div précédente

    // Met à jour l'ID de la page/div actuelle
    currentPageId = previousPageId;
}

