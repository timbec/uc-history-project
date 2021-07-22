import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '@/components/layout';
import StoriesItem from '@/components/StoriesItem';

import { useState, useEffect } from 'react';
import { getAllStoriesPostsFromServer } from '../../lib/utils'; 

import styles from '@/styles/Home.module.css'

export default function StoriesPage() {
  const [storiesPosts, setStoriesPosts] = useState([]);
  useEffect(async () => {
    let mounted = true; 
    if(mounted) {
      const storiesPostsFromServer = await getAllStoriesPostsFromServer(); 

      setStoriesPosts(storiesPostsFromServer); 
    }
    return () => (mounted = false); 
  }, []);
  console.log(storiesPosts);
  return (
    <Layout title="Uranium City Stories">
        <h1>Stories</h1>
        {storiesPosts && (
          <section className="news-conainter">
            {storiesPosts.map((post, id) => {
             return (
              <div key={id}>
                <StoriesItem post={post} />
              </div>
             )
            })}

          </section>
        )}
    </Layout>
  )
}

