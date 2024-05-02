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
            document.querySelector('#humidity').innerHTML = `Le temps est plutôt ${data.weather[0].main} bonne journée à toi`;
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