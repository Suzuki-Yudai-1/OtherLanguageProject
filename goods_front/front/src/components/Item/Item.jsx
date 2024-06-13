import React from "react";
import { useLocation } from "react-router-dom";
import "./Item.css";
import { Button, Stack } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export const Item = () => {
  const state = useLocation().state;
  console.log(state);

  return (
    <div className="item">
      <img src={state.url} className="itemImage"></img>
      <div className="details">
        <p className="itemName">
          {state.obj.name}
          <br />￥{state.obj.price}
        </p>
        <Stack spacing={2} direction="row" >
          <ThumbUpOffAltIcon sx={{ fontSize: "40px"}}/>
          <CommentIcon sx={{ fontSize: "40px"}}/>
        </Stack>
        <br/>

        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            sx={{ width: "200px", height: "50px", margin: "30px" }}
          >
            あと払いする
          </Button>
          <Button
            variant="contained"
            sx={{ width: "300px", height: "50px", margin: "30px" }}
          >
            購入手続きへ
          </Button>
        </Stack>
        <br />
        <p className="text">商品の説明</p>
        <p className="innertext">{state.obj.description}</p>
        <br />
        <p className="text">商品の情報</p>
        <hr></hr>
        <p className="innertext">状態　　　　　　　{state.obj.condition}</p>
        <p className="innertext">配送料の負担　　　送料込み(出品者負担)</p>
        <p className="innertext">配送の方法　　　　らくらくディグカリ便</p>
        <p className="innertext">発送元の地域　　　北海道</p>
        <p className="innertext">発送までの日数　　３〜９０日で発送</p>
      </div>
    </div>
  );
};
