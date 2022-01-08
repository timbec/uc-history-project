This helpfully provides a good example of using 'getStaticProps' (recommended for headless CMS), and integrating Typescript: 

https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation

Need to customize the REST output so I can bring them in properly: 

https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/

specifically for users and featured images: 
https://wordpress.stackexchange.com/questions/231137/wp-rest-api-how-to-get-featured-image

I used this with the writing portfolio to get a full list of all image meta: 

`http://localhost:8888/uc-history/wp-json/wp/v2/places?_embed`

usig Vue.js: 
```
mounted() {
      axios.get('/wp-json/wp/v2/posts?_embed').then(response =>  this.posts = response.data);
   }
```

For an example: 
`http://localhost:8888/uc-history/wp-json/wp/v2/places?_embed`