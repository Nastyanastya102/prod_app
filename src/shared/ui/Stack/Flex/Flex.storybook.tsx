import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: (
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    ),
};

export const Column = Template.bind({});
Basic.args = {
    direction: 'column',
    children: (
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    ),
};

export const Gap8 = Template.bind({});
Basic.args = {
    direction: 'column',
    gap: '8',
    children: (
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    ),
};

export const Gap12 = Template.bind({});
Basic.args = {
    direction: 'column',
    gap: '12',
    children: (
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    ),
};

export const justifyBetween = Template.bind({});
Basic.args = {
    justify: 'between',
    children: (
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    ),
};
