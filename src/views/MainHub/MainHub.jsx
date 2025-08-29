import './MainHub.css'
import {Box, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HealthBar from '../../components/HealthBar.jsx'
import MainHubHeader from './MainHubHeader.jsx'
import LevelCard from '../../components/LevelCard.jsx'

function MainHub () {
  const navigate = useNavigate()
  
    const [levels, setLevels] = useState([])

  useEffect(() => {
    const fetchLevels = async () => {
      const pokemonList = ["pichu", "jirachi", "charcadet", 'combusken', 'haunter', 'kingambit', 'annihilape', 'lugia']
      const data = await Promise.all(
        pokemonList.map(p => fetch(`https://pokeapi.co/api/v2/pokemon/${p}`).then(res => res.json()))
      )

      const formatted = data.map((p, i) => ({
        name: p.name,
        img: p.sprites.front_default,
        level: i + 1
      }))

      setLevels(formatted)
    }

    fetchLevels()
  }, [])

  const levelElements = levels.map(p => (
          <LevelCard key={p.level} pokemon={p} level={p.level} />
        ))

  return(
    <section className='main-hub'>
      <MainHubHeader />

    <Box sx={{display:'flex',
              justifyContent:'space-between',
              padding:'0 20px',
              marginTop:'10px'
    }}>

      <span style={{color:'black'}}>account: tucorreo@mail.com</span>

      <Button variant='contained'
              onClick={() => navigate('/')}
              sx={{borderRadius:'17px',
                   fontSize:'0.70rem',
                   bgcolor:'#ec1c23ff'
              }}>
        Log out
      </Button>

    </Box>

    <Box sx={{display:'flex', 
              alignItems:'center', 
              justifyContent:'center',
              gap:'20px'}}>

      <img className='red-sprite' alt='red sprite' src='/red-sprite.webp' />

      <span style={{color:'black', fontSize:'1.5rem'}}>Your team:</span>

      <Box>
        <img className='team-sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' />
        <HealthBar />
      </Box>
      <Box>
        <img className='team-sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png' />
        <HealthBar />
      </Box>
      <Box>
        <img className='team-sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png' />
        <HealthBar />
      </Box>

      <Box>
        <img className='team-sprite' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png' />
        <HealthBar />
      </Box>

    </Box>

    <h1>Battle</h1>

    <Box sx={{display:'flex',
              justifyContent:'center',
              alignItems: 'center',
               gap: 2,    
                  }}>
      {levelElements}
    </Box>
    </section>
  )}

export default MainHub