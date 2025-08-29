import './MainHub.css'
import {Box, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MainHub () {
  return(
    <section className='main-hub'>
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
                sx={{borderRadius:'15px', 
                     fontSize:'0.7rem',
                     marginRight:'90px'}}>Go to shop
        </Button>

        <img className='pokedex-icon' alt='pokedex icon' src='https://cdn-icons-png.flaticon.com/512/188/188940.png'/>

        <h1 className='hub-shop-title'>Pokemon RPG</h1>

        <img className='coin-icon' alt='coin icon' src='https://cdn-icons-png.flaticon.com/512/188/188926.png' />

        <h3 style={{fontSize:'1.5rem'}}>$20</h3>
    </Box>

    <Box sx={{display:'flex',
              justifyContent:'space-between',
              padding:'0 20px',
              marginTop:'10px'
    }}>
      <span style={{color:'black'}}>account: tucorreo@mail.com</span>
      <Button variant='contained'
              sx={{borderRadius:'17px',
                   fontSize:'0.70rem',
                   bgcolor:'#ec1c23ff'
              }}>
        Log out
      </Button>
    </Box>

    </section>
  )
}

export default MainHub