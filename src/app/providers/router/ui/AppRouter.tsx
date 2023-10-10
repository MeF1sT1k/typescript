import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export function AppRouter() {
    const { t } = useTranslation();

    return (
        <div className="page-wrapper">
            <Suspense fallback={<div>{t('Загружаюсь...')}</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
}

export default AppRouter;
