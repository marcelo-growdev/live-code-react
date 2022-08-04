import React from "react";
import { useDispatch } from "react-redux";
import { Paper, Typography } from "@mui/material";
import { updateOne } from "../../store/modules/items/ItemsSlice";

function ItemList({ uid, item, checked }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateOne({ id: uid, changes: { checked: !checked } }));
  };

  return (
    <Paper elevation={3} onClick={handleClick} className="my-2 p-2">
      {!checked && (
        <Typography variant="h4" className="cursor-pointer">
          {item}
        </Typography>
      )}
      {checked && (
        <Typography variant="h4" className="line-through cursor-pointer">
          {item}
        </Typography>
      )}
    </Paper>
  );
}

export default ItemList;
