import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames'
import { Button } from 'shared/ui/Button/Button';

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string
}

const PageError = ({className}: PageErrorProps) => {
  const {t} = useTranslation();

  const reloadPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t("Something went wrong")}</p>
      <Button onClick={reloadPage}>
        {t("Reload page")}
      </Button>
    </div>
  )
}
export default PageError