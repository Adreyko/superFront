import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { LazyMainPage } from "./pages/MainPage/MainPage.lazy";
import { Suspense } from "react";
import { useTheme } from "./ContextTheme/useTheme";
import { className } from "./helpers/className/classeName";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <button onClick={toggleTheme}>
        Set {theme === "light" ? "dark" : "light"} theme
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<LazyMainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
