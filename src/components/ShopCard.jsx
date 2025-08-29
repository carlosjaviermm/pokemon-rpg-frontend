import { Box, Button } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function ShopCard ({pokemon}) {
    return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: 2,
        p: 2,
        width: 180,
        gap: 1
      }}
    >
      <img src={pokemon.img} alt={pokemon.name} width={96} height={96} />
      
      <Button
        variant="contained"
        startIcon={<MonetizationOnIcon />}
        sx={{ borderRadius: '10px', bgcolor: '#2C2C2C', color: 'white' }}
      >
        Buy
      </Button>

      <Box sx={{ textAlign: 'center' }}>
        <h3 style={{ color:'black', margin: 0, textTransform: 'capitalize' }}>{pokemon.name}</h3>
        <p style={{ margin: 0 }}>${pokemon.price}</p>
      </Box>
    </Box>
  );
}

export default ShopCard