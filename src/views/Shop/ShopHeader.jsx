import {Box, Button} from '@mui/material'
import {useNavigate} from "react-router-dom"

function ShopHeader () {
const navigate = useNavigate()
  return (
    <Box component='header'
          sx={{
            width: "944px",
            height:'120px',
            bgcolor: "#2C2C2C",
            display: "flex",
            alignItems: "center",
            borderBottom: "2px solid #4799fdff"
      }}>
        <img className='money-bag-icon' alt='money bag icon' src='https://www.s24sammy.com/uploads/1/2/0/4/120476725/go-battle-girl-gold-medal_orig.png'/>

        <Button variant='contained'
                onClick={() => navigate('/mainhub')}
                sx={{borderRadius:'15px', 
                     fontSize:'0.7rem',
                     marginRight:'180px',
                     marginLeft:'10px',
                     bgcolor:'#D95255'}}>Go to battle
        </Button>

        <img className='pokedex-icon' alt='pokedex icon' src='https://cdn-icons-png.flaticon.com/512/188/188940.png'/>

        <h1 className='hub-shop-title'>Shop</h1>

        <img className='coin-icon' alt='coin icon' src='https://cdn-icons-png.flaticon.com/512/188/188926.png' />

        <h3 style={{fontSize:'1.5rem'}}>$20</h3>
    </Box>
    )
}

export default ShopHeader