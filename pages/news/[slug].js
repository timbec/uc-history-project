import axios from 'axios';
import { getAuthor, getDefaultLibFilePath, getFeaturedImage } from '../../lib/utils';
import { NEWS_API_URL } from '../../lib/constants';

import Layout from '../../components/Layout';


export default function NewsSingle({ title, featuredImg, content, date }) {
    
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
    const res = await axios.get(`${NEWS_API_URL}?link=${link}`);
    const news = await res.data;
    console.log('news: ' + news)
    const featuredImg = await getFeaturedImage(news[0].featured_media); 
    return {
      props: {
        title: news[0].title, 
        content: news[0].content, 
        featuredImg, 
        date: news[0].date
      }
    };
  }
  