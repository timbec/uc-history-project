import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAuthor } from '../lib/utils';
import parse from 'html-react-parser';

// how did the output change that I have a different post object (doesn't contain 'date' method for example)
export default function NewsItem({ post }) {

    console.log(post);
    //const [postImgAndAuthor, setPostImgAndAuthor] = useState<Array<string>>({ featImgUrl: '', author: '' });
    useEffect(() => {
        let mounted = false; // change to true when issues with author/featuredImage resoloved 
        //## NEED TO DEBUG QUERY TO GET BOTH AUTHOR AND FEATURED IMAGE.
        // if(mounted) {
        //     const author = getAuthor(post.author); 
        //     console.log(author);
        //     const featuredImg = getFeaturedImage(post.featured_media);
        //     // resolve the Promise in getAuthor and getFeaturedImg async functions using Promise.all
        //     Promise.all([author, featuredImg]).then((res) => {
        //         setPostImgAndAuthor({
        //             author: res[0],
        //             featImgUrl: res[1],
        //         }); 
        //     });
        // }
        // return () => {
        //     mounted = false; 
        // };
    })
    return (
        <article className="excerpt">
            {/* Use Next (Image) tag?? */}
            <h4>{new Date(post.date).toDateString()}</h4>
            {/* <img className="excerpt-img" src={postImgAndAuthor ? postImgAndAuthor.featImg : 'default image'} /> */}
            <figure className="featured-image places-featured-image">
                <img src={post.fimg_url} alt={post.title.rendered} />
            </figure>
            <h1>
            <Link href={`/news/${post.link}`}>
                <a dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
                </a>
            </Link>
            </h1>
            
            <div className="excerpt__text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
    
            <Link href={`/post/${post.link}`}>
          <a className="mt-3 text-blue-800 bottom-0">Continue reading</a>
        </Link>
        </article>
    )
}
