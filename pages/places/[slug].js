import axios from 'axios';
import { getAuthor, getDefaultLibFilePath } from '../../lib/utils';
import { PLACES_API_URL } from '../../lib/constants';

import Layout from '../../components/Layout';


export default function NewsSingle({ title, content, date }) {
    console.log(content);
    return (
        <Layout>
        <article>
            <span className="post-date">
            {new Date(date).toDateString()}
            </span>
            <h1 dangerouslySetInnerHTML={{ __html: title}}></h1>
            <div dangerouslySetInnerHTML={{ __html: content}}></div>
            <div>
            
            </div>
        </article>
        </Layout>
    )
}

export async function getServerSideProps({ query: { slug } }) {
    const res = await axios.get(`${PLACES_API_URL}?slug=${slug}`);
    const places = await res.data;
    console.log('places: ' + places)
    return {
      props: {
        title: places[0].title.rendered, 
        content: places[0].content.rendered, 
        date: places[0].date
      }
    };
  }
  