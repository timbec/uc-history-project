import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

//might need later. 
// import { getStaticProps } from 'next';

import Layout from '../../components/layout';
import NewsItem from '../../components/NewsItem';

import { useState, useEffect } from 'react';
import { getAllNewsPostsFromServer } from '../../lib/utils'; 

import Loader from '../../components/Loader'; 
import styles from '../../styles/Home.module.css'

export default function NewsPage({}: {}): JSX.Element {

  const [newsPosts, setNewsPosts] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNewsPosts = async() => {
      if(loading) {
        const newsPostsFromServer = await getAllNewsPostsFromServer(); 
        setNewsPosts(newsPostsFromServer); 
        setLoading(false);
      }
    };
    getNewsPosts(); 
    }, []);

  console.log(newsPosts);
  return (
    <Layout title="Uranium City News Page">
        <h1>Uranium City News</h1>
        {newsPosts.length === 0 && <Loader /> } 
          <section className="news-conainter">
            {newsPosts.map((post, id) => {
              {console.log(post.title.rendered)}
             return (
              <div key={id}>
                <NewsItem post={post} />
              </div>
             )
            })}
          </section>
    </Layout>
  )
}

