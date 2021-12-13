import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '../components/layout';
import NewsItem from '../components/NewsItem';

import { useState, useEffect } from 'react';
import { getAllNewsPostsFromServer } from '../lib/utils'; 

import { GetStaticProps } from 'next';

import styles from '../styles/Home.module.css'

interface Props {

}

export default function HomePage({}) {
  
  const [newsPosts, setNewsPosts] = useState<Array<string>>([])


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
  return (
    <Layout title="Uranium City Home Page">
        <h1>Home </h1>
        {newsPosts && (
          <section className="news-conainter">
            {newsPosts.map((id: number, post: object) => {
              {console.log(post.title.rendered)}
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

export const getStaticProps: GetStaticProps = async () => {
  const allNewsPostsData = await getAllNewsPostsFromServer()
  return {
    props: {
      allNewsPostsData
    }
  }
}