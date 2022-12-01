import {useState} from 'react'
import axios from 'axios'

interface TPosts{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const usePosts =() => {
const [posts, setPosts] = useState<TPosts[] | []>([]);

const getAllPosts = async () =>{
 const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
 setPosts (() => response.data);
};

  return {
    posts,
    getAllPosts
};
}

export default usePosts;