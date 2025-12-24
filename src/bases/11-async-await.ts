import type { GiphyRandomResponse } from '../bases/data/giphy.response';

const API_KEY = 'SQG5Lh7IdpJ4jvbOieTHg2BmTyWD9Lp3'

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);



const createImageInsideDOM = (url: string) =>{
        const imgElement = document.createElement('img');
        imgElement.src = url;

        document.body.append(imgElement);
}



myRequest
    .then((response) =>response.json())
    .then(({data}: GiphyRandomResponse ) =>{

        const imageUrl = data.images.original.url;

        createImageInsideDOM(imageUrl);
    })
    .catch((err)=>{
        console.log(err);
    });