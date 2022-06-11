// Recuperiamo informazioni da cambiare dinamicamente
const weatherIcon = document.querySelector(".weather-icon");
const weatherLocation = document.querySelector(".weather-location");
const weatherTemperature = document.querySelector(".weather-temperature");
const suggestionParagraph = document.querySelector(".suggestion");

// devo recuperare anche la classe js-loading che è in html - così recuper il tag <html>
const rootElement = document.documentElement;

// cercare di recuperare la posizione - geolocation API
// navigator rappresenta in js il nostro browser
// getCurrentPosition richiede due funzioni: una in caso di errore e una in caso di successo
window.navigator.geolocation.getCurrentPosition(onSuccess, onError);

// I parametri delle funzioni li passerà getCurrentPosition
// Funzione da eseguire in caso di errore
function onError(error) {
  console.error(error);
  weatherLocation.innerText = "Devi attivare la Geolocalizzazione!";
}

// Funzione da eseguire in caso di successo
function onSuccess(position) {
  console.log(position);

  // Abbiamo bisogno di una API per gestire questa informazione, utilizzeremo openweathermap.org
  // Prepariamo i dati per l'API
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiKey = "248c85030c04512637f5b74b80579911";
  const language = "it";
  const units = "metric";
  const endpoint = "https://api.openweathermap.org/data/2.5/weather";

  // Costruiamo l'indirizzo, comprensivo di quesry string!
  const apiUri = `${endpoint}?lon=${longitude}&lat=${latitude}&units=${units}&lang=${language}&appid=${apiKey}`;

  // chiamiamo il nostro servizio esterno
  // dthen dopo il tempo necessario...
  fetch(apiUri)
    .then(function (response) {
      // json converte risposta in modo da farlo diventare un elemento js più snello e leggibile
      const data = response.json(); //richiederà tempo, quindi serve then che metto dopo
      // Tra le varie cose abbiamo il codice icona e lo faremo corrispondere ai nomi delle icone
      return data;
    })
    .then(function (data) {
      console.log(data);

      // estrapoliamo le informazioni di cui abbiamo bisogno
      const locationName = data.name;
      const temperature = Math.floor(data.main.temp);
      //Arrotonda per difetto per togliere le virgole Math.floor();
      const iconCode = data.weather[0].icon;
      const description = data.weather[0].description;
      console.log(description);

      //Prepariamo il consiglio giusto
      const suggestion = getSuggestion(iconCode);


      //Inseriamo i dati dove vogliamo mostrarli
      weatherLocation.innerText = locationName;
      weatherTemperature.innerText = temperature + "°";
      weatherIcon.alt = description;
      weatherIcon.src = `images/${iconCode}.gif`;
      // weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      // weatherIcon.src = `http://openweathermap.org/img/wn/01d@2x.png`;

      suggestionParagraph.innerText = suggestion;

      //rimuoviamo la classe js-loading
      rootElement.classList.remove("js-loading");
    });
}

//Funzione per recuperare il suggerimento giusot
function getSuggestion(key) {
  const suggestions = {
    // da INSERIRE
    "01d": "LODA IL SOLE!",
    "01n": "Buonanotte!",
    "02d": "Oggi il sole va e viene...",
    "02n": "Buonanotte!",
    "03d": "Nuvoloso, per ora...",
    "03n": "Buonanotte!",
    "04d": "Broken clouds, che minchia significa? Guarda il cielo.",
    "04n": "Buonanotte!",
    "09d": "Pioviscola! Copriti!",
    "09n": "Buonanotte! Tanto piove...",
    "10d": "Meglio portarsi l'ombrello!",
    "10n": "Buonanotte! Tanto piove...",
    "11d": "Forse è meglio se stai a casa!",
    "11n": "Va a letto che è meglio",
    "13d": "Fa freschino, copriti!",
    "13n": "Meglio sta nel brentone",
    "50d": "E chi ci vede?",
    "50n": "Buonanotte!",
  };

  return suggestions[key];
}
