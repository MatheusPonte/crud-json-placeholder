import { useState, useEffect } from 'react';
import usePosts from '../hooks/usePosts';
import MuITable from '../components/table/Table';
import {Button, Modal, Paper} from '@mui/material';



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
        <Modal open={open} onClose={handleOpenModal}>
            <Paper>Olá</Paper>
        </Modal>
        <Button type="button" onClick={handleOpenModal}>Criar nova postagem</Button>
          <MuITable columns={['id', 'title', 'body']} data={posts} />
        </>
      )
  
}


export default Home ;

