import { AboutPage } from "pages/About"
import { MainPage } from "pages/Main"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about"
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about"
}

export const routeConfig:  Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage/>
  },
}