import { useParams } from "react-router-dom";
import './Level.css';
function Level() {
  const { id } = useParams(); 
  const level = parseInt(id, 10);

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
    <div>
      <h1>Level {level}</h1>
      <img src={data.enemyTrainer} className='enemy-trainer' alt="Enemy Trainer" />
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokedexNumber}.png`} alt="Enemy Pokémon" />
      <h2>Your Pokémon: {data.playerPokemon}</h2>
    </div>
  );
}

export default Level;