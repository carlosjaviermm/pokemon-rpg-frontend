import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import ShopCard from '../../components/ShopCard.jsx'
import ShopHeader from './ShopHeader.jsx'
import PotionCards from '../../components/PotionCards.jsx'

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

  const potions = [
  { name: 'Potion', price: 10, img: 'https://www.pokepedia.fr/images/c/ce/Miniature_Potion_EV.png' },

  { name: 'Hyper potion', price: 15, img: 'https://cdn.strobe.gg/pokemon/s/items/hyperpotion.png' },

  { name: 'Max potion', price: 20, img: 'https://images.wikidexcdn.net/mwuploads/wikidex/1/1b/latest/20230115181246/Poci%C3%B3n_m%C3%A1xima_EP.png' },

  { name: 'Restore all', price: 40, img: '/restore-all-icon.png' },
];

const potionElements = <PotionCards potions={potions} />


  return(
    <section>
      <ShopHeader />

      <h1 style={{display:'flex', margin:'0 0 0 20px', fontSize:'2.5rem'}}>Pokemon</h1>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, justifyContent:'center' }}>
      {shopPokemon.map(p => (
        <ShopCard key={p.name} pokemon={p} />
      ))}
    </Box>

      <h1 style={{display:'flex', margin:'0 20px 0 0', fontSize:'2.5rem', justifyContent:'flex-end'}}>Potions</h1>

      <Box sx={{display:'flex', justifyContent:'center'}}>
        {potionElements}
      </Box>

    </section>
  )
}

export default Shop