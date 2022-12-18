//React
import React, { useState } from "react";

//Router
import { Outlet } from "react-router-dom";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Styled-Components
import { ThemeProvider } from "styled-components";
import { AppStyled, Button } from "../styles/AppStyled";

//React-Icons
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function App() {
  const [theme, setTheme] = useState({ mode: "light" });

  const handleChangeTheme = () => {
    setTheme(theme.mode === "light" ? { mode: "dark" } : { mode: "light" });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppStyled />
      <Header />
      <Outlet />
      <Button onClick={handleChangeTheme}>
        {theme.mode === "light" ? (
          <BsFillMoonFill className="button-icon" />
        ) : (
          <BsFillSunFill className="button-icon" />
        )}
      </Button>
      <Footer />
    </ThemeProvider>
  );
}
