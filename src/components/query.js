// require("dotenv").config({
//   path: `.env`,
// });

const api_key = process.env.REACT_APP_NASA_KEY;

//seperate by page
//keep page number in state

export const NasaData = {
  getCuriosityMastPhotos(page) {
    return fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=${api_key}&page=${page}`
    ).then((res) => res.json());
  },
};
