import { fireEvent, screen, waitFor } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Render Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Render Sidebar with class collapsed', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });

    test('Sidebar mouse over no class collapsed', async () => {
        renderWithTranslation(<Sidebar />);
        fireEvent.mouseOver(screen.getByTestId('sidebar'));
        await waitFor(() => screen.getByTestId('sidebar'));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
