import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../../components/ItemList/ItemList";
import { addOne, selectAll } from "../../store/modules/items/ItemsSlice";

function Home() {
  const items = useSelector(selectAll);
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const ref = useRef();

  useEffect(() => {
    console.log("selectall", items);
  }, [items]);

  const handleAdd = () => {
    dispatch(
      addOne({ uid: description + items.length, checked: false, description })
    );
    setDescription("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item spacing={2} container xs={12}>
        <Typography variant="h2">Home</Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
