import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Themes } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
  const {toggleTheme, theme} = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Themes.DARK ? <LightIcon/> : <DarkIcon/>}
      </Button>
  )
}
