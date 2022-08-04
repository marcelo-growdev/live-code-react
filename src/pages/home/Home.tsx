import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from "react";
import ItemList from '../../components/ItemList/ItemList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addOne, selectAll } from '../../store/modules/items/ItemsSlice';

const Home: React.FC = () => {
  const items = useAppSelector(selectAll);
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState<string>('');
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    console.log('selectall', items);
  }, [items]);

  const handleAdd = () => {
    dispatch(
      addOne({ uid: description + items.length, checked: false, description })
    );
    setDescription('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item spacing={2} container xs={12}>


      <Typography variant="h2">Home</Typography>
      </Grid>


    </Grid>
  );
};

export default Home;
