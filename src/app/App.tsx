import { Route, Routes, Link } from "react-router-dom";
import { Suspense } from "react";

import { MainPage } from "pages/Main";
import { AboutPage } from "pages/About";
import { className } from "shared/lib/className/classNames";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;