import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '../../components/layout';
import StoriesItem from '../../components/StoriesItem';

import { useState, useEffect } from 'react';
import { getAllStoriesPostsFromServer } from '../../lib/utils'; 

import Loader from '../../components/Loader';
import styles from '@/styles/Home.module.css'

export default function StoriesPage({}: {}): JSX.Element {
  const [storiesPosts, setStoriesPosts] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getStoriesPosts = async() => {
      if(loading) {
        const storiesPostsFromServer = await getAllStoriesPostsFromServer(); 
        setStoriesPosts(storiesPostsFromServer); 
        setLoading(false);
      }
    }
    getStoriesPosts(); 
  }, []);
  console.log(storiesPosts);
  return (
    <Layout title="Uranium City Stories">
        <h1>Stories</h1>
        {storiesPosts.length=== 0 && <Loader />} 
          <section className="news-conainter">
            {storiesPosts.map((post, id) => {
             return (
              <div key={id}>
                <StoriesItem post={post} />
              </div>
             )
            })}
          </section>
    </Layout>
  )
}

