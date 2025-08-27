import {Box, Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './LogInPage.css'

function LogInPage () {
  const navigate = useNavigate()
  return(
    <Box sx={{
        width: 944,
        height: 708,
        border: '1px solid #ccc',
        display:'flex',
        justifyContent:"flex-start",
        gap:"80px"
         }}>
    <img src="https://i.pinimg.com/736x/0e/3b/29/0e3b294beb09239a0625d82a2e2c0561.jpg" alt="Log in page photo" className="log-in-page-photo"/>

    <Box sx={{display:'flex',
              flexDirection:"column",
              gap:"50px"
    }}>

      <h1>Log in</h1>

        <Box sx={{display:'flex',
                  flexDirection:"column",
                  alignItems:'center',
                  gap:"20px",
                  bgcolor:'#E2484B',
                  color:"black",
                  padding:"20px",
                  borderRadius:"10px"
        }}>

          <TextField
            label="E-mail"
            type="email"
            fullWidth
            variant="outlined"
            size="small"
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            size="small"
          />

          <Button variant="contained"
                  onClick={() => navigate('/starterselection')}
                  sx={{bgcolor:'#2C2C2C',
                      padding:'10px 110px',
                      borderRadius:'10px',
                      fontSize:"0.73rem"
                  }}>Log in</Button>

        </Box>
        <Box>

        <p>You don't have an account? Go back to the:</p>

        <Button variant="contained"
                onClick={() => navigate('/')}
                  sx={{bgcolor:'#2C2C2C',
                      padding:'8px 100px',
                      borderRadius:'10px',
                      fontSize:"0.73rem"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" className="pokeball-icon"/>Main menu<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png" className="pokeball-icon"/>
        </Button>

        </Box>
      </Box>
    </Box>
  )
}

export default LogInPage