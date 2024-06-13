import React from "react";
import { useState, useRef, Link } from "react";
import "./Input.css";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import storage from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export const Input = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("画像が選択されていません");
  const [file, setFile] = useState({});
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
  };

  const fileUpload = () => {
    inputRef.current.click();
  };

  const postButton = () => {
    fetch("/api/goods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        description: description,
        condition: condition,
        image: image,
      }),
    });
  };

  const onFileUpload = (e) => {
    const storageRef = ref(storage, `image/${image}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  return (
    <>
      <div className="inputPage">
        <h1>商品の出品</h1>

        <p>{image}</p>
        <Button
          variant="contained"
          sx={{ width: "300px", height: "55px" }}
          onClick={fileUpload}
        >
          画像をアップロード　<CloudUploadIcon/>
        </Button>
        <div className="imageUplodeBox">
          <input
            hidden
            ref={inputRef}
            className="imageUploadInput"
            name="imageURL"
            type="file"
            accept=".png, .jpeg, .jpg"
            onChange={(e) => {
              setFile(e.target.files[0]), setImage(e.target.files[0].name);
            }}
          />
        </div>
        <br />
        <TextField
          label="商品名"
          type="text"
          margin="normal"
          sx={{ width: "500px" }}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <br />
        <TextField
          label="販売価格"
          type="number"
          margin="normal"
          sx={{ width: "500px" }}
          onChange={(e) => setPrice(e.target.value)}
        ></TextField>
        <h2>商品の詳細</h2>
        <Select
          label="商品の状態"
          defaultValue={"新品、未使用"}
          sx={{ width: "500px", margin: "10px" }}
          onChange={(e) => setCondition(e.target.value)}
        >
          <MenuItem value={"新品、未使用"}>新品、未使用</MenuItem>
          <MenuItem value={"未使用に近い"}>未使用に近い</MenuItem>
          <MenuItem value={"目立った傷や汚れなし"}>
            目立った傷や汚れなし
          </MenuItem>
          <MenuItem value={"やや傷や汚れあり"}>やや傷や汚れあり</MenuItem>
          <MenuItem value={"傷や汚れあり"}>傷や汚れあり</MenuItem>
          <MenuItem value={"全体的に状態が悪い"}>全体的に状態が悪い</MenuItem>
        </Select>
        <br />
        <TextField
          label="商品の説明"
          type="textarea"
          margin="normal"
          multiline
          rows={5}
          sx={{ width: "500px", hight: "1000px" }}
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
        <br />
        <Button
          variant="contained"
          sx={{ width: "300px", height: "55px", margin: "30px" }}
          onClick={() => {
            postButton(), onFileUpload(), togglePopUp();
          }}
        >
          出品する
        </Button>

        {isPopUpVisible && (
        <div className="PopUp">
          <p>出品が完了しました</p>
          <Button
            onClick={togglePopUp}
            variant="contained"
          >
            閉じる
          </Button>
        </div>  )}
      </div>
    </>
  );
};
