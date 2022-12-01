import {useState} from 'react'
import api from '../utils/api'

interface TPosts{
    userId: number;
    id: number;
    title: string;
    body: string;
}

const usePosts =() => {
const [posts, setPosts] = useState<TPosts[] | []>([]);

const getAllPosts = async () =>{
 const response = await api.get('/posts');
 setPosts(() => response.data);
};

  return {
    posts,
    getAllPosts
};
}

export default usePosts;