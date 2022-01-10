import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAuthor, getFeaturedImage } from '../lib/utils';
import parse from 'html-react-parser';

export default function StoriesItem({ post }) {
    console.log(post);
    const [postImgAndAuthor, setPostImgAndAuthor] = useState({ featImgUrl: '', author: '' });
    useEffect(() => {
        let mounted = true; 
        if(mounted) {
            // const author = getAuthor(post.author); 
            // console.log(author);
            // const featuredImg = getFeaturedImage(post.fimg_url);
            // console.log(featuredImg);
            // resolve the Promise in getAuthor and getFeaturedImg async functions using Promise.all
            // Promise.all([featuredImg]).then((res) => {
            //     setPostImgAndAuthor({
            //         author: res[0],
            //         featImgUrl: res[1],
            //     }); 
            // });
        }
        return () => {
            mounted = false; 
        };
    })
    return (
        <article className="excerpt">
            {/* Use Next (Image) tag?? */}
            <h4>{new Date(post.date).toDateString()}</h4>
            <img className="excerpt-img" src={post.fimg_url} />
            <h1>
            <Link href={`/stories/${post.slug}`}>
                <a dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
                </a>
            </Link>
            </h1>
            
            <div className="excerpt__text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
    
            <Link href={`/post/${post.slug}`}>
          <a className="mt-3 text-blue-800 bottom-0">Continue reading</a>
        </Link>
        </article>
    )
}
