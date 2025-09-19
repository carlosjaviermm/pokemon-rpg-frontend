import {Box, Button, TextField} from '@mui/material'
import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setUser} from '../../slices/currentUserSlice'
import { useNavigate } from 'react-router-dom'
import {useLogInMutation} from '../../slices/authApiSlice'
import './LogInPage.css'

function LogInPage () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [logIn, {isLoading}] = useLogInMutation ()
  

  const handleSubmit = async () => {
    try {
      const result = await logIn({email, password}).unwrap()

      console.log("Logged on the account", result);
      alert(`✅ Current user: ${result.currentUser.username || result.message}`);
      dispatch(setUser(result.currentUser))
      navigate("/starterselection"); // redirigir al main menu

    } catch (error) {
      console.error("There was a problem in the server", error);
      alert("Could not connect with the server, try again ❌");

      const errorMessage =
      error?.data?.error || // si tu backend devuelve {error: "..."}
      error?.error ||       // mensaje genérico de RTK Query
      "No se pudo conectar con el servidor ❌";

    alert(errorMessage);
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained"
                  onClick={handleSubmit}
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