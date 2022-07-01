import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '@/components/layout';
import NewsItem from '@/components/NewsItem';

import { useState, useEffect } from 'react';
import { getAllNewsPostsFromServer, getAllCommentsFromServer } from '../lib/utils';

import styles from '@/styles/Home.module.css'


export default function HomePage() {
  //get all News posts
  const [newsPosts, setNewsPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const newsPostsFromServer = await getAllNewsPostsFromServer();
      setNewsPosts(newsPostsFromServer);
    }
    return () => (mounted = false);
  }, []);
  // console.log(newsPosts);

  // get all Comments
  const [comments, setComments] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const commentsFromServer = await getAllCommentsFromServer();
      setComments(commentsFromServer);
    }
    return () => (mounted = false);
  }, []);

  return (
    <Layout title="Uranium City Home Page">
      <h1>Home </h1>
      {/* What happened to the 'loading' effect? */}
      {newsPosts && (
        <section className="news-container">
          {newsPosts.map((post, id) => {
            { console.log(post.title.rendered) }
            return (
              <div key={id}>
                <NewsItem post={post} />
              </div>
            )
          })}

        </section>
      )}

      <h3>Comments: </h3>
      {comments && (
        <section className="comments-container">
          {comments.map((post, id) => {
            { console.log(post.content.rendered) }
            return (
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
              </div>

            )

          })}
        </section>
      )}
    </Layout>
  )
}
