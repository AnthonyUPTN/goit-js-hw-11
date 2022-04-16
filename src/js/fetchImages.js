'use strict';

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_API_KEY = '26775773-5c491c43123f0c4d75768fcb7';
const OPTIONS = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40';
let pageChanger = 1;

export async function FetchImages(query) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}?q=${query}${OPTIONS}&page=${pageChanger}&key=${MY_API_KEY}`,
    );
    pageChanger += 1;
    return data;
  } catch (err) {
    console.log(err);
  }
}
