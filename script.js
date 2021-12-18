//unsplash API
const count = 10;
const apiKey = '59dKnT1j0NDBVv3QEzvaUdanNbGN9_39SISasHajJDs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API
async function getPhotos()
{
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        //Display error.
    }
}

//on Load
getPhotos();