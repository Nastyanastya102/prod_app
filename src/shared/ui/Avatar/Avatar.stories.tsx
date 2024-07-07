import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvaterImage from 'shared/assets/tests/storybook.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvaterImage,
    size: 150,
};

export const Small = Template.bind({});
Small.args = {
    src: AvaterImage,
    size: 50,
};
