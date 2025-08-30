import { useParams } from "react-router-dom";

function Level() {
  const { id } = useParams(); 
  const level = parseInt(id, 10);
  const enemySprite = 'https://www.vhv.rs/dpng/d/498-4988462_pokemon-sprite-trainer-png-transparent-pokemon-trainer-sprite.png'

  // Definir niveles
  const levels = {
    1: { enemyTrainer: '/youngster-joey.webp',
         enemyPokemon: "pichu", 
         playerPokemon: "charmander",
         pokedexNumber: '172' },

    2: { enemyTrainer: '/bug-catcher.png', 
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

    5: { enemyTrainer: '/trainer-5.png', 
         enemyPokemon: "haunter", 
         playerPokemon: "charmander",
         pokedexNumber: '93' },

    6: { enemyTrainer: '/trainer-6.png', 
         enemyPokemon: "kingambit", 
         playerPokemon: "charmander",
         pokedexNumber: '983' },

    7: { enemyTrainer: enemySprite, 
         enemyPokemon: "annihilape", 
         playerPokemon: "charmander",
         pokedexNumber: '979' },

    8: { enemyTrainer: enemySprite, 
         enemyPokemon: "lugia", 
         playerPokemon: "charmander",
         pokedexNumber: '249' }
  };

  const data = levels[level];

  return (
    <div>
      <h1>Level {level}</h1>
      <img src={data.enemyTrainer} alt="Enemy Trainer" />
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokedexNumber}.png`} alt="Enemy Pokémon" />
      <h2>Your Pokémon: {data.playerPokemon}</h2>
    </div>
  );
}

export default Level;