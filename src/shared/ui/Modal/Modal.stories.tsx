import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi assumenda ipsa voluptatibus similique, labore id doloremque, quisquam, laboriosam architecto animi maiores ex eum nisi aliquid ea nihil necessitatibus nostrum',
};

export const IsOpened = Template.bind({});
IsOpened.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi assumenda ipsa voluptatibus similique, labore id doloremque, quisquam, laboriosam architecto animi maiores ex eum nisi aliquid ea nihil necessitatibus nostrum',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus excepturi assumenda ipsa voluptatibus similique, labore id doloremque, quisquam, laboriosam architecto animi maiores ex eum nisi aliquid ea nihil necessitatibus nostrum',
    isOpen: true,
};

Dark.decorators = [ThemeDecorator(Themes.DARK)];
