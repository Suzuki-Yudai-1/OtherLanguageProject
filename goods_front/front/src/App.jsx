import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { TextField, Button, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { DeletePage } from "./pages/DeletePage";
import { InputPage } from "./pages/InputPage";
import { MainPage } from "./pages/MainPage";
import { ItemPage } from "./pages/ItemPage";

function App() {
  return (
    <Router>
      <>
        <div className="header">
          <span className="logo">digcari</span>
          <TextField
            className="search"
            placeholder="検索"
            variant="outlined"
            size="small"
            sx={{ width: "500px" , verticalAlign: "0", background: "#74747425"}}
          >
          </TextField>
          <IconButton type="button" >
              <SearchIcon />
            </IconButton>
          <Button
            className="headerButton"
            variant="contained"
            component={Link}
            to="/"
            sx={{ marginLeft: "500px", marginRight: "10pX" }}
          >
            ホーム
          </Button>
          <Button
            className="headerButton"
            variant="contained"
            component={Link}
            to="/input"
            sx={{ margin: "10px" }}
          >
            出品
          </Button>
          <Button
            className="headerButton"
            variant="contained"
            component={Link}
            to="/delete"
            sx={{ margin: "10px" }}
          >
            削除
          </Button>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/delete" element={<DeletePage />} />
          <Route path="/item" element={<ItemPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
