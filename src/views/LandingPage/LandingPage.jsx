import './LandingPage.css'
import {Box, Button} from '@mui/material'

function LandingPage (){
  return (
    <Box
      sx={{
        width: 944,
        height: 708,
        border: '1px solid #ccc',
        backgroundImage: `url("https://d3kjluh73b9h9o.cloudfront.net/original/3X/5/e/5ee4d3103d54f8edf6d9b1aa211042445b7b6c9e.jpeg")`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }}
    >
      <Box
        sx={{display: 'flex',
              flexDirection:'column',
              alignItems:'center'
        }}>
      <img className="logo-image" alt="Logo image" src="https://img.itch.zone/aW1nLzI5MDAzOTMucG5n/original/oWgoJ5.png" />

      <Box sx={{display:"flex",
                gap:"80px",
                marginTop:'30px'
      }}>
      <Button variant="contained" 
              sx={{bgcolor:'#EE3B40',
                    padding:'15px 60px',
                    borderRadius:'15px'
              }}>
        Sign up
      </Button>
      <Button variant="contained"
              sx={{bgcolor:'#2C2C2C',
                  padding:'15px 60px',
                  borderRadius:'15px'
              }}>
        Log in
      </Button>
      </Box>

      </Box>
    </Box>
  )
}

export default LandingPage