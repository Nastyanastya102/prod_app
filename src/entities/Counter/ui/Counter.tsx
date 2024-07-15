import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface CounterProps {
    className: string;
}
export const Counter = (props: CounterProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            Template
        </div>
    );
};
