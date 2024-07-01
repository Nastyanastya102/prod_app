import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'option 1',
    options: [
        { value: '1', content: 'value 1' },
        { value: '2', content: 'value 2' },
        { value: '3', content: 'value 3' },
    ],
};
