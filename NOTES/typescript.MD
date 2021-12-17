## Integrating Typescript with Next.js

I decided to incorporate Typescript into my next.js app. I'd done a couple of tutorials, but as everyone knows, the only way to learn is to do (or teach, hence these notes). Since I wasn't sure how Typescript worked with Next.js. However, the docs give a few clues: 

I found this video, by the very interesting Nuno Martinez Alonso: 
https://www.youtube.com/watch?v=fNjmAiPJLvw

More useful is the two repos hosted by the Vercel, with many different examples of Next.js configuration. In this case, typescript. 

Basic: 
https://github.com/vercel/next.js/blob/canary/examples/with-typescript/pages/users/index.tsx

More complex: 
https://github.com/vercel/next-learn/blob/master/basics/typescript-final/pages/index.tsx

At first it seemed pretty straightforward. 

rename `index.js` to `index.tsx`

include `GetStaticProps` from 'next'. Not 100% sure what this does, but it appears to be necessary: 

`import { GetStaticProps } from 'next';`

change 
`export default function HomePage()`
to: 

```
    export default function HomePage({
    allNewsPostsData
    } : {
    allNewsPostsData: {
        date: String, 
        title: String, 
        excerpt: String,
        id: Number
    }[]
    }) 
```

Then, in that rarity of rarities in the software dev world - it worked!! No errors. At least not until I scrolled down to where I'd implemented `useEffect()`, following a Brad Traversy course on Next.js. But here I discovered an error (which didn't seem to affect the output, but still): 

> Argument of type '() => Promise' is not assignable to parameter of type 'EffectCallback'.

> Type 'Promise' is not assignable to type 'void | (() => void | undefined)'.

> Type 'Promise' is not assignable to type '() => void | undefined'.

> Type 'Promise' provides no match for the signature '(): void | undefined'.ts(2345)

on this code: 
```
  useEffect(async () => {
    let mounted = true; 
    if(mounted) {
      const newsPostsFromServer = await getAllNewsPostsFromServer(); 
      setNewsPosts(newsPostsFromServer); 
    }
    return () => (mounted = false); 
  }, []);
  ```

A quick google search brought this page: 

https://stackoverflow.com/questions/57238928/react-typescript-16-8-how-to-make-useeffect-async

under *Why*, I found this explanation: 
> Using an async function in `useEffect` makes the callback function return a Promise instead of a ('https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect')['cleanup function']. 

under Solution: 
```
useEffect(() => {
  const foo = async () => {
    await performPromise()
  };

  foo();
}, []);
```

OR with IIFE (Immediately Invoked Function Expression)[https://developer.mozilla.org/en-US/docs/Glossary/IIFE]

```
useEffect(() => {
  (async () => {
    await performPromise()
  })()
}, []);
```
So my above code became: 
```
useEffect(() => {
    const getNewsPosts = async() => {
        let mounted = true; 
          if(mounted) {
            const newsPostsFromServer = await getAllNewsPostsFromServer(); 
            setNewsPosts(newsPostsFromServer); 
          }
          return () => (mounted = false); 
      };
      getNewsPosts();
    }, []);
```
    But then scrolling down to the bottom of vercel repo, I discovered this: 

    ```
    export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
```

Using Typescript with Hooks: 
https://codersera.com/blog/react-hooks-with-typescript-use-state-and-use-effect-in-2020/


## Part II

I figured out (more or less) how to add typescript to `useState()` and `useEffect()`. However, I still wasn't sure how to properly add them to the components themselves. Courtesy of this [blog post](https://fettblog.eu/typescript-react/components/), I found this VS Code Extension: 
https://marketplace.visualstudio.com/items?itemName=paulshen.paul-typescript-toolkit

// example here: https://selvaganesh93.medium.com/setup-next-js-with-typescript-integration-dece94e43cf5

// I guess functional components in TS don't need the 'function' declaration: 
//https://fettblog.eu/typescript-react/components/

Still unclear to me how to set up functional componets properly, and child components. 