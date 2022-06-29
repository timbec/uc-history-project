import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '@/components/layout';
import NewsItem from '@/components/NewsItem';

import { useState, useEffect } from 'react';
import { getAllNewsPostsFromServer } from '../../lib/utils'; 

import styles from '@/styles/Home.module.css'

export default function NewsPage() {
  const [newsPosts, setNewsPosts] = useState([]);
  useEffect(async () => {
    let mounted = true; 
    if(mounted) {
      const newsPostsFromServer = await getAllNewsPostsFromServer(); 
      setNewsPosts(newsPostsFromServer); 
    }
    return () => (mounted = false); 
  }, []);
  console.log(newsPosts);
  return (
    <Layout title="Uranium City News Page">
        <h1>Uranium City News</h1>
        {newsPosts && (
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
        )}
    </Layout>
  )
}

