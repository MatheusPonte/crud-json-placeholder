import { useState, useEffect } from 'react';
import usePosts from '../hooks/usePosts';
import MuITable from '../components/table/Table';
import {Button, Modal, Paper} from '@mui/material';
import MuiModal from '../components/modal/Modal';


const Home = (): JSX.Element => {
    const {posts, getAllPosts } = usePosts();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => setOpen((prev)=> !prev);

    useEffect(()=>{
        if(!(posts.length > 1))getAllPosts();
        return () =>{
    
        }
      },[]);

      return (
        <>
        <MuiModal open={open} handleOpenModal={handleOpenModal}/>
        <Button type="button" onClick={handleOpenModal}>Criar nova postagem</Button>
          <MuITable columns={['id', 'title', 'body']} data={posts} />
        </>
      )
  
}


export default Home ;

