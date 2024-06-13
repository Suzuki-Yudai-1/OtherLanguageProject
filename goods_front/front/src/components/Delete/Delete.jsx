import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Delete.css";
import {
  Button,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";

export const Delete = () => {
  const [deleteId, setDeleteId] = useState(0);
  const [allGoods, setAllGoods] = useState([]);

  useEffect(() => {
    (async () => {
      const goodsList = await axios("/api/goods").then((res) => res.data);
      setAllGoods(goodsList);
    })();
  }, []);

  const deleteButton = () => {
    fetch(`/api/goods/${deleteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=> {
      (async () => {
        const goodsList = await axios("/api/goods").then((res) => res.data);
        setAllGoods(goodsList);
      })();
    })
  };

  return (
    <>
      <div className="deletePage">
        <h1>商品の削除</h1>
        <FormControl>
          <RadioGroup
            name="radio-buttons-group"
            onChange={(e) => setDeleteId(e.target.value)}
          >
            {allGoods.map((object, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={object.id}
                  control={<Radio />}
                  label={object.name}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
        <br />
        <Button variant="contained" onClick={deleteButton}>
          削除
        </Button>
      </div>
    </>
  );
};
