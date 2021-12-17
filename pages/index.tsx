import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '../components/layout';
import NewsItem from '../components/NewsItem';

import { useState, useEffect } from 'react';
import { getAllNewsPostsFromServer } from '../lib/utils'; 

import { GetStaticProps } from 'next';

import styles from '../styles/Home.module.css'

// used this is a reference for adding TS with React Hooks: 
// https://codersera.com/blog/react-hooks-with-typescript-use-state-and-use-effect-in-2020/

export default function HomePage({}: {}): JSX.Element {
  
  const [newsPosts, setNewsPosts] = useState<Array<string>>([])

  //loader 
  const [loading, setLoading] = useState<boolean>(false); 


  useEffect(() => {
    const getNewsPosts = async() => {
        let mounted = true; 
          if(mounted) {
            const newsPostsFromServer = await getAllNewsPostsFromServer(); 
            setNewsPosts(newsPostsFromServer); 
          }
          return () => (mounted = false); 
      };
      getNewsPosts();
    }, []);

  // useEffect(async () => {
  //   let mounted = true; 
  //   if(mounted) {
  //     const newsPostsFromServer = await getAllNewsPostsFromServer(); 
  //     setNewsPosts(newsPostsFromServer); 
  //   }
  //   return () => (mounted = false); 
  // }, []);
  console.log(newsPosts);

  useEffect(() => {
    setLoading(true);
  }, []);
  
  return (
    <Layout title="Uranium City Home Page">
        <h1>Home </h1>
        {newsPosts && (
          <section className="news-conainter">
            {newsPosts.map((post: string, id:number) => {
              {console.log(post)}
             return (
              <div key={id}>
                <NewsItem post={post} />
              </div>
             )
            })}

          </section>
        )}
    </Layout>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allNewsPostsData = await getAllNewsPostsFromServer()
//   return {
//     props: {
//       allNewsPostsData
//     }
//   }
// }