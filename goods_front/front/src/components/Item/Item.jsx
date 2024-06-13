import React from "react";
import { useLocation } from "react-router-dom";
import "./Item.css";

export const Item = () => {
  const state = useLocation().state;
  console.log(state);

  return (
    <div className="item">
      <img src={state.url} className="itemImage"></img>
      <div className="details">
      {state.obj.name}　{state.obj.description}　{state.obj.condition}　{state.obj.price}
      </div>
    </div>
  );
};
