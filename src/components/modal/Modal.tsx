import {Modal, Paper} from '@mui/material';

interface TMuiModal {
    open: boolean;
    handleOpenModal: () => void;
}


const MuiModal =({open, handleOpenModal}: TMuiModal): JSX.Element=> {
  return (
    <Modal open={open} onClose={handleOpenModal}>
    <Paper>Olá</Paper>
</Modal>
  )
}


export default MuiModal;
