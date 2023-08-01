import { fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { SideBar } from 'widgets/SideBar/ui/SideBar/SideBar';
import {
    RenderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('SideBar', () => {
    test('SideBar was rendered', () => {
        RenderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    // test('SideBar collapsed', () => {
    //     RenderWithTranslation(<SideBar />);
    //     const btn = screen.getByTestId('sidebar-toggle');
    //     fireEvent.click(btn);
    //     expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    // });
});
