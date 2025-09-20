import {Box, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCatchPokemonMutation, useGetStartersQuery } from '../../slices/pokemonApiSlice'
import { useSelector, useDispatch } from 'react-redux'
import {setUser} from '../../slices/currentUserSlice'
import './StarterSelection.css'

function StarterSelection () {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.user);

  const [catchStarter, {isLoading}] = useCatchPokemonMutation ()

  const { data: startersData } = useGetStartersQuery();

  const [showStarters, setShowStarters] = useState (false)
  const [starters, setStarters] = useState ([])

  function openPokeballs () {
    setShowStarters(!showStarters)
  }

  const handleChooseStarter = async (pokemonId) => {
    try {
      const res = await catchStarter({ 
        user_id: currentUser.id, 
        pokemon_id: pokemonId 
      }).unwrap();

      // Actualizar Redux con el nuevo equipo (starter)
      dispatch(setUser({
        ...currentUser,
        team: [
          ...currentUser.team, 
          { pokemon_id: pokemonId, name: res.data?.starterName || 'Starter', health: 100 }
        ]
      }));

      // Redirigir al MainHub
      navigate('/mainhub');

    } catch (error) {
  console.error('Full error:', error);
  alert(
    error?.data?.error || 
    error?.error || 
    error?.message || 
    'Error catching starter')
    }
  };

  useEffect(() => {
    if (!startersData || startersData.length === 0) return;
    const fetchStarters = async () => {
      const pokemon = ['charmander', 'squirtle', 'bulbasaur']
      try {
        const data = await Promise.all(
          pokemon.map(p =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${p}`).then(res => res.json())
          )
        )

      const sprites = data.map((p) => {
        // Find the starter from your backend that matches the PokéAPI name
        const dbStarter = startersData.find(s => s.name.toLowerCase() === p.name.toLowerCase());
        return {
          id: dbStarter?.id, // Use DB id
          name: p.name,
          img: p.sprites.front_default
        }
      });

        setStarters(sprites)
      } catch (error) {
        console.error('Error fetching starters:', error)
      }
    }

    fetchStarters()
  }, [startersData])

  console.log(starters)

  const startersElements = starters.map((pokemon) => {
    return(<Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img className="starter-sprites" src={pokemon.img} alt={pokemon.name} key={pokemon.name} />
            <Button variant="contained" onClick={() => handleChooseStarter(pokemon.id)}>
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