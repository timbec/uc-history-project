import axios from 'axios'
import { NEWS_API_URL, PLACES_API_URL, AUTHORS_API_URL, MEDIA_API_URL, STORIES_API_URL } from './constants'


export const getAllNewsPostsFromServer = async () => {
    // get all news posts from server
    try {
        const { data } = await axios.get(NEWS_API_URL);
        return data; 
    } catch (error) {
        console.log(error); 
    }
}

export const getAllPlacessPostsFromServer = async () => {
    // get all places posts from server
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
      console.log('name:' + name);
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


  // export const getHomePagePosts = async() => {
  //   try {

  //   } catch(error) {
  //     console.log(error); 
  //     return '';
  //   }
  // }

  const getHomePagePosts = async function getStaticProps(context) {
      const { id } = context.query;

      const [newsData, placesData] = await Promise.all([
        fetch(`NEWS_API_URL`).then(r => r.json()),
        fetch(`PLACES_AIP_URL`).then(r => r.json())
      ]);
      console.log(newsData, placesData)
      return { newsData, placesData };
  }
  
  export default getHomePagePosts; 