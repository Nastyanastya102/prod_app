import { classNames } from "shared/lib/className/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface INavbarProps {
  className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.logo)}>
      </div>
      <div className={classNames(cls.links)}>
        <AppLink to="/" className={classNames(cls.mainLink)} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
        <AppLink to="about">About</AppLink>
      </div>
    </div>
  )
}
