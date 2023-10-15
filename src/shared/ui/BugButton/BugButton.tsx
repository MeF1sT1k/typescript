import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import ErrorSVG from 'shared/assets/icons/error.svg';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const makeError = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error('Hello');
        }
    }, [error]);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={makeError}
        >
            <ErrorSVG />
        </Button>
    );
};
