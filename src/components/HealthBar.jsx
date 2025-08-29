import {LinearProgress} from '@mui/material'


function HealthBar () {
  return(
  <LinearProgress
    variant="determinate"
    value='100'
    sx={{
      height: 20,
      borderRadius: "5px",
      "& .MuiLinearProgress-bar": {
        bgcolor:"green"}
    }}/>
  )
}

export default HealthBar