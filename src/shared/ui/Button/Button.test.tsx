import { render, screen } from '@testing-library/react';
import React from 'react';

import {Button, ThemeButton} from "shared/ui/Button/Button";

describe('Shared Button', () => {
    test('Button was rendered', () => {
      render(<Button>TEST</Button>);
      expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Button was rendered with class clear', () => {
      render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
      expect(screen.getByText('TEST')).toHaveClass('clear');
      // screen.debug();
    });
})