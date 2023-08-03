import React from 'react';
import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeContextProvider, Themes } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => (
    <ThemeContextProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeContextProvider>
);
