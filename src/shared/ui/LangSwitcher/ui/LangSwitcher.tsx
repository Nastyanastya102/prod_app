import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/className/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const trans = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };

    return (
        <div className={classNames(className)}>
            <Button
                onClick={trans}
                type="button"
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {short ? t('Lan') : t('Language')}
            </Button>
        </div>
    );
};
