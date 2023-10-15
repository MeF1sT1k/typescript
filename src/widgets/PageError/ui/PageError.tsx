import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Restart from 'shared/assets/icons/restart2.gif';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation('errorPage');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <h3>{t('ErrorMessage')}</h3>
            <Button
                className={cls.button}
                onClick={reloadPage}
                theme={ThemeButton.CLEAR}
            >
                <img src={Restart} alt="lol" />
            </Button>
        </div>
    );
};
