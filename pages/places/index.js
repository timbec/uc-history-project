import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '@/components/layout';
import PlacesItem from '@/components/PlacesItem';

import { useState, useEffect } from 'react';
import { getAllPlacessPostsFromServer } from '../../lib/utils'; 

import styles from '@/styles/Home.module.css'

export default function PlacesPage() {
  const [placesPosts, setPlacesPosts] = useState([]);
  useEffect(async () => {
    let mounted = true; 
    if(mounted) {
      const placesPostsFromServer = await getAllPlacessPostsFromServer(); 

      setPlacesPosts(placesPostsFromServer); 
    }
    return () => (mounted = false); 
  }, []);
  console.log(placesPosts);
  return (
    <Layout title="Uranium City Places Page">
        <h1>Places</h1>
        {placesPosts && (
          <section className="news-conainter">
            {placesPosts.map((post, id) => {
              {console.log(post.title.rendered)}
             return (
              <div key={id}>
                <PlacesItem post={post} />
              </div>
             )
            })}

          </section>
        )}
    </Layout>
  )
}

