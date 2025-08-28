import {Box, Button, TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SignUpPage () {
    const navigate = useNavigate()
  return(
 <Box sx={{
        width: 944,
        height: 708,
        border: '1px solid #ccc',
        display:'flex',
        justifyContent:"flex-end",
        gap:"110px"
         }}>

    <Box sx={{display:'flex',
              flexDirection:"column",
              gap:"30px"
    }}>

      <h1>Sign up</h1>

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

          <TextField
            label="Confirm password"
            type="password"
            fullWidth
            variant="outlined"
            size="small"
          />

          <Button variant="contained"
                  sx={{bgcolor:'#2C2C2C',
                      padding:'10px 110px',
                      borderRadius:'10px',
                      fontSize:"0.73rem"
                  }}>Sign up</Button>

        </Box>
        <Box>

        <p>Already have an account? Go back to the:</p>

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
          <img className="sign-up-page-photo" alt="Sign up photo" src="https://mfiles.alphacoders.com/975/thumb-1920-975777.jpg"/>
    </Box>
  )
}

export default SignUpPage