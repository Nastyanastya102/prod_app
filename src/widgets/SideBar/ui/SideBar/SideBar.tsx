import { useState } from "react";
import { classNames } from "shared/lib/className/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface ISideBarProps {
  className?: string
}

export const SideBar = ({ className }: ISideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggeleSt = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button onClick={toggeleSt}>Toggel</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
