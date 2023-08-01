import React from 'react';
import { ComponentStory, ComponentMeta, ArgTypes } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import Main from './Main';

export default {
    title: 'pages/Main',
    component: Main,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args: ArgTypes) => <Main {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

export const Dark = Template.bind({});
Dark.args = {
    theme: Themes.LIGHT,
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
