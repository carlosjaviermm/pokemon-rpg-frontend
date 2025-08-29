import { useNavigate } from 'react-router-dom'
import {Box, Button} from '@mui/material'



function MainHubHeader () {
  const navigate = useNavigate()
  return (
    <Box component='header'
          sx={{
            width: "944px",
            height:'120px',
            bgcolor: "#2C2C2C",
            display: "flex",
            alignItems: "center",
            borderBottom: "2px solid #EE3B40"
      }}>
        <img className='money-bag-icon' alt='money bag icon' src='https://cdn-icons-png.flaticon.com/512/188/188947.png'/>

        <Button variant='contained'
                onClick={() => navigate('/shop')}
                sx={{borderRadius:'15px', 
                     fontSize:'0.7rem',
                     marginRight:'90px'}}>Go to shop
        </Button>

        <img className='pokedex-icon' alt='pokedex icon' src='https://cdn-icons-png.flaticon.com/512/188/188940.png'/>

        <h1 className='hub-shop-title'>Pokemon RPG</h1>

        <img className='coin-icon' alt='coin icon' src='https://cdn-icons-png.flaticon.com/512/188/188926.png' />

        <h3 style={{fontSize:'1.5rem'}}>$20</h3>
    </Box>
  )
}

export default MainHubHeader