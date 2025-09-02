import { useParams } from "react-router-dom";
import { Box, Button } from '@mui/material';
import HealthBar from '../../components/HealthBar.jsx'
import {useNavigate} from 'react-router-dom';
import './Level.css';

function Level() {
  const { id } = useParams(); 
  const level = parseInt(id, 10);
  const navigate = useNavigate();

  // Definir niveles
  const levels = {
    1: { enemyTrainer: '/bug-catcher.png',
         enemyPokemon: "pichu", 
         playerPokemon: "charmander",
         pokedexNumber: '172' },

    2: { enemyTrainer: '/youngster-joey.webp', 
         enemyPokemon: "jirachi", 
         playerPokemon: "charmander",
         pokedexNumber: '385' },

    3: { enemyTrainer: '/trainer-3.png', 
         enemyPokemon: "charcadet", 
         playerPokemon: "charmander",
         pokedexNumber: '935' },

    4: { enemyTrainer: '/trainer-4.png', 
         enemyPokemon: "combusken", 
         playerPokemon: "charmander",
         pokedexNumber: '256' },

    5: { enemyTrainer: '/trainer-6.png', 
         enemyPokemon: "haunter", 
         playerPokemon: "charmander",
         pokedexNumber: '93' },

    6: { enemyTrainer: '/trainer-4.png', 
         enemyPokemon: "kingambit", 
         playerPokemon: "charmander",
         pokedexNumber: '983' },

    7: { enemyTrainer: '/trainer-5.png', 
         enemyPokemon: "annihilape", 
         playerPokemon: "charmander",
         pokedexNumber: '979' },
 
    8: { enemyTrainer: '/trainer-5.png', 
         enemyPokemon: "lugia", 
         playerPokemon: "charmander",
         pokedexNumber: '249' }
  };

  const data = levels[level];

  return (
    <Box className='level-container'>
     <Box sx={{display:'flex', alignItems:'center', gap:'250px'}}>
          <Button onClick={() => navigate('/mainhub')} variant='contained' sx={{bgcolor:'red', marginLeft:'5px'}}>Run away</Button>
          <h1 style={{marginBottom:'0px'}}>Level {level}</h1>
      </Box>

     <Box className='enemy-side'
          sx={{display:'flex',
               justifyContent:'flex-end',
          }}>

          <Box sx={{padding:'0 20px', display:'grid', bgcolor:'white', color:'black', height:'80px', width:'360px'}} > { data.enemyPokemon.charAt(0).toUpperCase() + data.enemyPokemon.slice(1) } <HealthBar />
          </Box>

          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokedexNumber}.png`} alt="Enemy Pokémon" className='enemy-pokemon' />

          <img src={data.enemyTrainer} className='enemy-trainer' alt="Enemy Trainer" />

     </Box>

     <Box className='player-side'
          sx={{display:'flex',
               justifyContent:'flex-start'
          }}>

          <img className='player-trainer' src='/player-trainer.png' />

          <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"} alt="Player Pokémon" className='player-pokemon' />

          <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>

               <Box sx={{padding:'0 20px', display:'grid', bgcolor:'white', color:'black', height:'80px', maxWidth:'400px'
               }} > { data.playerPokemon.charAt(0).toUpperCase() + data.playerPokemon.slice(1) } <HealthBar />
               </Box>

               <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', bgcolor:'white', color:'black', height:'150px', width:'400px'
               }} > 
                    <Box sx={{display:'flex', gap:'70px',}}>
                         <Button sx={{color:'black', bgcolor:'#5CD6DF', borderRadius:'17px'}} variant="contained">Ranged Attack</Button>
                         <Button sx={{color:'black', bgcolor:'#EF4C4C', borderRadius:'17px'}} variant="contained">Attack</Button>
                    </Box>

                    <p>What will your pokemon do?</p>

                    <Box sx={{display:'flex', gap:'70px',}}>
                         <Button sx={{color:'black', bgcolor:'#ABEF4C', borderRadius:'17px'}} variant="contained">Defend</Button>
                         <Button sx={{color:'black', bgcolor:'#C64CEF', borderRadius:'17px'}} variant="contained">Grab</Button>
                    </Box>
               </Box>
          </Box>
     </Box>
    </Box>
  );
}

export default Level;