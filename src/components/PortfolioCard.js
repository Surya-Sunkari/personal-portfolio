import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const PortfolioCard = ({portfolios, id, src, name}) => {

    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    const handleOpen = (id) => {
        setModalInfo(portfolios[id-1]);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    return ( 
        <>
            <div onClick={() => handleOpen(id)} className=' cursor-pointer'>
                <img src={src} alt="" className='rounded-md duration-200 h-44 w-full object-fill'/>
                <h2 className=' text-xl text-center font-bold mt-2'>{name}</h2>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                style={{overflow: 'scroll'}}
            >
                <div className=''>
                    <Fade in={open}>
                        <Box className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7/12 h-3/5 
                                        flex  items-center flex-col bg-gray-800 rounded-md'>
                            <h1 className=' text-6xl text-center text-white font-bold p-6 m-6 pb-0 mb-0'>{modalInfo.name}</h1>
                            <p className=' text-2xl text-center text-white font-normal p-8'>{modalInfo.desc}</p>
                            <Stack direction="row" spacing={12}>
                                {modalInfo.demo!==undefined && <Button href={modalInfo.demo} variant="contained">Demo</Button>}
                                {modalInfo.code!==undefined && <Button href={modalInfo.code} variant="contained">Code</Button>}
                                {modalInfo.paper!==undefined && <Button href={modalInfo.paper} variant="contained">Paper</Button>}
                            </Stack>
                        </Box>
                    </Fade>
                </div>
            </Modal>
        </>
     );
}
 
export default PortfolioCard;