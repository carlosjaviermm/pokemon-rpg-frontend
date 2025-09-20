import { Box, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'

function LevelCard({ pokemon, level }) {
  const navigate = useNavigate()
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
      <img src={pokemon.img} alt={pokemon.name} style={{ width: 90, height: 90 }} />
      <Button 
        variant="contained"
        onClick={() => navigate(`/level/${level}`)}
        sx={{ bgcolor: "#2C2C2C", borderRadius: "10px", fontSize: "0.75rem" }}
      >
        Level {level}
      </Button>
    </Box>
  )
}

export default LevelCard