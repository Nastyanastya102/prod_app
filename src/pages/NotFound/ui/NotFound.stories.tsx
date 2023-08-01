import React from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import NotFound from './NotFound';

export default {
    title: 'pages/NotFound',
    component: NotFound,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args: ArgTypes) => <NotFound {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
    theme: Themes.LIGHT,
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
