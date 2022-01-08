import Link from 'next/link';
import { useState, useEffect } from 'react';

import { getAllNewsPostsFromServer } from '../../lib/utils';
import Loader from '../../components/Loader'; 

import NewsItem from '../../components/NewsItem';


// rename .txs and convert to typescript later

console.log(getAllNewsPostsFromServer)
export default function NewsBox() {
const [newsPosts, setNewsPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNewsPosts = async() => {
      if(loading) {
        const newsPostsFromServer = await getAllNewsPostsFromServer(); 
        // can pass in number of posts as props
        setNewsPosts(newsPostsFromServer.slice(0,6)); 
        setLoading(false);
      }
    };
    getNewsPosts(); 
    }, []);

  console.log(newsPosts);
  return (
    <article className="content-box">
        <h1>Latest News</h1>
        {newsPosts.length === 0 && <Loader /> } 
          <section className="news-conainter">
            {newsPosts.map((post, id) => {
              {console.log(post.title)}
             return (
              <div key={id}>
                <NewsItem post={post} />
              </div>
             )
            })}
          </section>
    </article>
  )
}