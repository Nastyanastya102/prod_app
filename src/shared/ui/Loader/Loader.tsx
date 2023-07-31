import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/className/classNames';
import "./Loader.scss";

interface ILoaderProps {
  className?: string
}

const Loader = ({ className }: ILoaderProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames("lds-ellipsis", {}, [className])}>
      <div></div><div></div><div></div><div></div>
    </div>
  )
}

export default Loader