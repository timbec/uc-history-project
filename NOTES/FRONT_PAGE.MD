## Some notes for the front page. 


i have tried several stabs at making multiple calls on the front page: 

```

// HomePage.getInitialProps = async function(context:any ) {
//   const { id } = context.query 
//     const [newsData, placesData] = await Promise.all([
//       fetch(`NEWS_API_URL`).then(r => r.json()),
//       fetch(`PLACES_AIP_URL`).then(r => r.json())
//   ]);
//   console.log(newsData, placesData)
//   return { newsData, placesData };
  
// }

// export async function getStaticProps(context:any) {
//   console.log(context);
//   const { id } = context.query;

//   const [newsData, placesData] = await Promise.all([
//     fetch(`NEWS_API_URL`).then(r => r.json()),
//     fetch(`PLACES_AIP_URL`).then(r => r.json())
//   ]);
//   console.log(newsData, placesData)
//   return { newsData, placesData };
// }
```

So thinking might have to create individual components for a limited number of posts per box (say 5?). These component boxes will be re-used across the site anyway. For example: **Latest Comments** would appear in sideboxes, etc, or in page footer, what have you. 

