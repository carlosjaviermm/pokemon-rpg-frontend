import {LinearProgress} from '@mui/material'


function HealthBar () {
  return(
  <LinearProgress
    variant="determinate"
    sx={{
      height: 20,
      borderRadius: "5px",
      "& .MuiLinearProgress-bar": {
        bgcolor:"green"}
    }}/>
  )
}

export default HealthBar