//React
import React from "react";
import ReactDOM from "react-dom/client";

//Router
import App from "./containers/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Animes from "./pages/Animes";
import Movies from "./pages/Movies";
import Anime from "./pages/Anime";

//Components
import SingIn from "./pages/SingIn";
import Register from "./pages/Register";

//Context
import { StorageAnimes } from "./context/ContextAPI";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Styled-Components
import { GlobalStyled } from "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <ToastContainer autoClose={3000} />
      <StorageAnimes>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/anime/:name" element={<Anime />} />
          </Route>
          <Route path="/sing-in" element={<SingIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </StorageAnimes>
    </BrowserRouter>
  </React.StrictMode>
);
