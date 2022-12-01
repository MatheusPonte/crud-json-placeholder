import { useState, useEffect } from 'react';
import usePosts from './hooks/usePosts';
import MuITable from './components/table/Table';

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
      <MuITable columns={['id', 'title', 'body']} data={posts} />
    </div>
  )
}

export default App
