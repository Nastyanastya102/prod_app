import { fireEvent, screen } from '@testing-library/react';

import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import {
    RenderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('SideBar', () => {
    test('SideBar was rendered', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('SideBar collapsed', () => {
        ComponentRender(<SideBar />);
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
