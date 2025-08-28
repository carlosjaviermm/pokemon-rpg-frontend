import {Box, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './StarterSelection.css'

function StarterSelection () {

  const [showStarters, setShowStarters] = useState (false)
  const [starters, setStarters] = useState ([])

  function openPokeballs () {
    setShowStarters(!showStarters)
  }

  useEffect(() => {
    const fetchStarters = async () => {
      const pokemon = ['bulbasaur', 'squirtle', 'charmander']
      try {
        const data = await Promise.all(
          pokemon.map(p =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${p}`).then(res => res.json())
          )
        )

        const sprites = data.map(p => ({
          name: p.name,
          img: p.sprites.front_default
        }))

        setStarters(sprites)
      } catch (error) {
        console.error('Error fetching starters:', error)
      }
    }

    fetchStarters()
  }, [])

  const startersElements = starters.map((pokemon) => {
    return(<Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img className="starter-sprites" src={pokemon.img} alt={pokemon.name} key={pokemon.name} />
            <Button variant="contained">
              Select
            </Button>
          </Box>)
  })

  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Which Pokemon is going to be your starter?</h1>
      {showStarters ? <Box sx={{display:'flex'}}> {startersElements} </Box> : <Box>
        <img className='pokeball-sprite' src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6a/latest/20230115164405/Pok%C3%A9_Ball_EP.png" />
        <img className='pokeball-sprite' src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6a/latest/20230115164405/Pok%C3%A9_Ball_EP.png" />
        <img className='pokeball-sprite' src="https://images.wikidexcdn.net/mwuploads/wikidex/6/6a/latest/20230115164405/Pok%C3%A9_Ball_EP.png" />
      </Box>}
      <Button variant='contained'
              onClick={openPokeballs}
              sx={{bgcolor:'#2C2C2C',
                   padding:'10px 110px',
                   borderRadius:'10px',
                   fontSize:"0.73rem",
                   marginTop:'35px'
                  }}>
        {showStarters ? 'Close Poke-balls' : 'Open Poke-balls'}
      </Button>
    </Box>
  )
}

export default StarterSelection