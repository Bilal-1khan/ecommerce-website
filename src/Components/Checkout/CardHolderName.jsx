import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const CardHolderName = () => {
  return (
    <>
     <Box
                className="w-full"
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {  width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                  className="w-full"
                    id="outlined-password-input"
                    label="Cardholder name"
                    type="text"
                    autoComplete="current-password"
                  />
                </Box> 
    </>
  )
}

export default CardHolderName
