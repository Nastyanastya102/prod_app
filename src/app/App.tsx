import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/className/classNames";
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import PageLoader from "shared/ui/PageLoader/PageLoader";

const Comp = () => {
  const { t, i18n } = useTranslation();

  const trans = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en")
  }

  return (
    <div>
      <h1>{t('Welcome to React')}</h1>
      <button onClick={trans}>
      {t('translate')}
      </button>
    </div>
  )
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<PageLoader/>}>
        <Navbar />
        {/* <Comp/> */}
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App;