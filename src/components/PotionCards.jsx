import { Box, Button } from '@mui/material';

function PotionCards({ potions }) {
  return (
    <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
      {potions.map(potion => (
        <Box
          key={potion.name}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: 2,
            p: 2,
            width: 150,
            gap: 1
          }}
        >
          <img src={potion.img} alt={potion.name} width={64} height={64} />
          
          <Button
            variant="contained"
            sx={{ borderRadius: '10px', bgcolor: '#2C2C2C', color: 'white' }}
          >
            Buy
          </Button>

          <Box sx={{ textAlign: 'center' }}>
            <h3 style={{ margin: 0, color:'black' }}>{potion.name}</h3>
            <p style={{ margin: 0 }}>${potion.price}</p>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default PotionCards;