import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ShopCard from '../../components/ShopCard.jsx'
import ShopHeader from './ShopHeader.jsx'

function Shop () {
  const [shopPokemon, setShopPokemon] = useState([]);

  

  useEffect(() => {
    const pokemonList = [
      { name: 'phanpy', price: 35 },
      { name: 'grovyle', price: 82 },
      { name: 'snorlax', price: 126 },
      { name: 'reshiram', price: 250 },
    ];

    const fetchPokemons = async () => {
      const data = await Promise.all(
        pokemonList.map(async p => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${p.name}`);
          const json = await res.json();
          return {
            name: p.name,
            img: json.sprites.front_default,
            price: p.price
          };
        })
      );
      setShopPokemon(data);
    };

    fetchPokemons();
  }, []);

  return(
    <section>
      <ShopHeader />
      <h1 style={{display:'flex', marginLeft:'20px'}}>Pokemon</h1>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, p: 3 }}>
      {shopPokemon.map(p => (
        <ShopCard key={p.name} pokemon={p} />
      ))}
    </Box>
    </section>
  )
}

export default Shop