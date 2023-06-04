import { Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";

import { MainPageAsync } from "./pages/Main/index.async";
import { AboutPageAsync } from "./pages/About/index.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { className } from "./helpers/classNames";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;