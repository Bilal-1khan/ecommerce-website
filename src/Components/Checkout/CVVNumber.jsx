import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const CVVNumber = () => {
  return (
    <>
      <Box
        className="inline-block w-[70%]"
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="w-full"
          id="outlined-number"
          label="CVV"
          type="number"
          autoComplete="current-password"
        />
      </Box>
    </>
  );
};

export default CVVNumber;
