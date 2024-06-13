import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { TextField, Button , Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { DeletePage } from "./pages/DeletePage";
import { InputPage } from "./pages/InputPage";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <Router>
      <>
        <div className="header">
          <TextField className="search" label="Outlined" variant="outlined" sx={{width: "500px"}}/>
          <Button className="headerButton" variant="contained" component={Link} to="/"  sx={{marginLeft: "700px", marginRight: "10pX"}}>
            ホーム
          </Button>
          <Button className="headerButton" variant="contained" component={Link} to="/input" sx={{margin: "10px"}}>
            出品
          </Button>
          <Button className="headerButton" variant="contained" component={Link} to="/delete" sx={{margin: "10px"}}>
            削除
          </Button>
         
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/delete" element={<DeletePage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
