import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

function TokenModal ({open, onClose}) {

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Expired token</DialogTitle>
      <DialogContent>Your session has expired, please log in</DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={onClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default TokenModal