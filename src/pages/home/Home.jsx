import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../../components/ItemList/ItemList";

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item spacing={2} container xs={12}>
        <Typography variant="h2">Home</Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
