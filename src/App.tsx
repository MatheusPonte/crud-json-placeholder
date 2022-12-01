import { useState, useEffect } from 'react';
import usePosts from './hooks/usePosts';

function App() {
  const {posts, getAllPosts } = usePosts();

  useEffect(()=>{
    if(!(posts.length > 1))getAllPosts();
    return () =>{

    }
  },[]);

  console.log(posts)

  return (
    <div className="App">

    </div>
  )
}

export default App
