import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import Layout from '../../components/layout';
import PlacesItem from '../../components/PlacesItem';

import { useState, useEffect } from 'react';
import { getAllPlacessPostsFromServer } from '../../lib/utils'; 

import Loader from '../../components/Loader';

import styles from '../../styles/Home.module.css'

export default function PlacesPage() {
  const [placesPosts, setPlacesPosts] = useState([]);
    //loader 
  const [loading, setLoading] = useState(true); 
  useEffect(async () => {
    
    if(loading) {
      const placesPostsFromServer = await getAllPlacessPostsFromServer(); 

      setPlacesPosts(placesPostsFromServer.slice(0,6)); 
      setLoading(false);
    }
    // return () => (mounted = false); 
  }, []);
  console.log(placesPosts);
  return (
    <article className="content-box">
        <h1>Places</h1>
        {placesPosts.length === 0 && <Loader /> }
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
    </article>
  )
}

