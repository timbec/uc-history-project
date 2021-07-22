import axios from 'axios';
import { getAuthor, getDefaultLibFilePath, getFeaturedImage } from '../../lib/utils';
import { STORIES_API_URL } from '../../lib/constants';

import Layout from '../../components/Layout';

export default function StoriesSingle({ title, featuredImg, content, date }) {
    console.log(content);
    return (
      <Layout>
        <article>
            <span className="post-date">
            {new Date(date).toDateString()}
            </span>
            <img src={featuredImg} />
            <h1 dangerouslySetInnerHTML={{ __html: title}}></h1>
            <div dangerouslySetInnerHTML={{ __html: content}}></div>
            <div>
            
            </div>
        </article>
      </Layout>
    )
}


//TODO - read up and write about all three of these so I understand them. 
// export async function getStaticPaths() {
//     const res = await axios.get(NEWS_API_URL);
//     const posts = res.data; 
//     //get the paths we want to pre-render based on posts returned
//     const paths = posts.map((post) => ({
        
//         params: { slug: post.slug.toString() }, 
//     }));
//     console.log(paths)

//     //pre-render only these paths at build time
//     return { paths, fallback: false }
// }

//also gets called at build time 
// export async function getStaticProps({ params }) {
//     console.log(params.slug);
//     const res = await axios.get(`${NEWS_API_URL}?slug="${params.slug}`); 
//     console.log(res);
//     const post = await res.json();
//     console.log(post);
//     const featuredImg = await getFeaturedImage(post.featured_media); 
//     const author = await getAuthor(post.author); 
//     return {
//         props: { 
//             title: post.title.rendered, 
//             content: post.content.rendered, 
//             featuredImg, 
//             author, 
//             date: post.date },
//     };
    
// }

export async function getServerSideProps({ query: { slug } }) {
    const res = await axios.get(`${STORIES_API_URL}?slug=${slug}`);
    const stories = await res.data;
    console.log('stories: ' + stories)
    const featuredImg = await getFeaturedImage(stories[0].featured_media); 
    return {
      props: {
        title: stories[0].title.rendered, 
        content: stories[0].content.rendered, 
        featuredImg, 
        date: stories[0].date
      }
    };
  }
  