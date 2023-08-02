import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND,
};

export const BackgroundThemeInverted = Template.bind({});
BackgroundThemeInverted.args = {
    children: 'Text',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
    theme: ThemeButton.CLEAR,
};

export const SquareLarge = Template.bind({});
SquareLarge.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ThemeButton.CLEAR,
};

export const SquareExtraLarge = Template.bind({});
SquareExtraLarge.args = {
    children: '>',
    square: true,
    size: ButtonSize.XL,
    theme: ThemeButton.CLEAR,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
    children: '>',
    size: ButtonSize.XL,
    theme: ThemeButton.CLEAR,
};

export const Large = Template.bind({});
Large.args = {
    children: '>',
    size: ButtonSize.L,
    theme: ThemeButton.CLEAR,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: '>',
    theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Themes.DARK)];
