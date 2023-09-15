import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} placeholder={t('Enter username')} autoFocus />
            <Input type="text" className={cls.input} placeholder={t('Enter user password')} />
            <Button className={cls.loginBtn}>
                {t('Sign in')}
            </Button>

        </div>
    );
};
