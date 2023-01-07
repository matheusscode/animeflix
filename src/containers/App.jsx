import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "styled-components";
import { AppStyled, Button } from "../styles/AppStyled";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const themeInitial = () => {
  const themeSaved = localStorage.getItem("theme");
  return themeSaved ? JSON.parse(themeSaved) : { mode: "light" };
};

export default function App() {
  const [theme, setTheme] = useState(themeInitial);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

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
