import {Loader} from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/className/classNames';
import cls from "./PageLoader.module.scss";

interface IPageLoaderProps {
  className?: string
}

const PageLoader = ({className}: IPageLoaderProps) => {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader/>
    </div>
  )
}

export default PageLoader