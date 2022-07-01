import axios from 'axios';
import { getAuthor, getDefaultLibFilePath, getFeaturedImage } from '../../lib/utils';
import { PLACES_API_URL } from '../../lib/constants';

import Layout from '@/components/layout';


export default function NewsSingle({ title, featuredImg, content, date }) {
  // console.log(content);
  return (
    <Layout>
      <article>
        <span className="post-date">
          {new Date(date).toDateString()}
        </span>
        <img src={featuredImg} />
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        <div>

        </div>
      </article>

    </Layout>
  )
}



export async function getServerSideProps({ query: { slug, id } }) {
  const res = await axios.get(`${PLACES_API_URL}?slug=${slug}`);
  // console.log('res:' + res);
  const places = await res.data;
  console.log('places ID: ' + places.id)

  const comments = await axios.get('http://uchistory.local/wp-json/wp/v2/' + `comments?post=id`);

  console.log(comments);
  const featuredImg = await getFeaturedImage(places[0].featured_media);
  return {
    props: {
      title: places[0].title.rendered,
      content: places[0].content.rendered,
      featuredImg,
      date: places[0].date
    }
  };
}
