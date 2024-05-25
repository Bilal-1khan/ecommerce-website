import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const CardNumber = () => {
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
                    id="outlined-number"
                    label="Card number"
                    type="number"
                    autoComplete="current-password"
                  />
                </Box>
    </>
  )
}

export default CardNumber
