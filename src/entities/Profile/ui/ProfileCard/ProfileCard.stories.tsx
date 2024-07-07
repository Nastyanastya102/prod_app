import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvaterImage from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: 'Stacy',
        username: 'StacyKl',
        lastname: 'Kl',
        age: 29,
        country: Country.Ukraine,
        currency: Currency.EUR,
        avatar: AvaterImage,
    },
};

export const withLoading = Template.bind({});
withLoading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: 'Error',
};

export const notEditable = Template.bind({});
notEditable.args = {
    data: {
        first: 'Stacy',
        username: 'StacyKl',
        lastname: 'Kl',
        age: 29,
        country: Country.Ukraine,
        currency: Currency.EUR,
        avatar: AvaterImage,
    },
    readOnly: true,
};
