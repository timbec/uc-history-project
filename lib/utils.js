import axios from 'axios'
import { NEWS_API_URL, PLACES_API_URL, AUTHORS_API_URL, MEDIA_API_URL, STORIES_API_URL } from './constants'


export const getAllNewsPostsFromServer = async () => {
    // get all news posts from server
    try {
        const { data } =await axios.get(NEWS_API_URL);
        return data; 
    } catch (error) {
        console.log(error); 
    }
}

export const getAllPlacessPostsFromServer = async () => {
    // get all news posts from server
    try {
        const { data } =await axios.get(PLACES_API_URL);
        return data; 
    } catch (error) {
        console.log(error); 
    }
}

export const getAllStoriesPostsFromServer = async () => {
  // get all news posts from server
  try {
      const { data } =await axios.get(STORIES_API_URL);
      return data; 
  } catch (error) {
      console.log(error); 
  }
}

export const getAuthor = async (id) => {
    try {
      const {
        data: { name },
      } = await axios.get(`${AUTHORS_API_URL}/${id}`);
      return name;
    } catch (error) {
      console.log(error);
    }
  };


  export const getFeaturedImage = async (id) => {
    try {
      const res = await axios.get(`${MEDIA_API_URL}/${id}`);
      return res.data.guid.rendered;
    } catch (error) {
      console.log(error);
      return '';
    }
  };