import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
    title: 'shared/BuInputtton',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    placeholder: 'placeholder text',
    value: ''
};

export const WithValue = Template.bind({});
WithValue.args = {
    placeholder: 'placeholder text',
    value: 'text'
};

