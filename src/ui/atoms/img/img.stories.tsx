import type { Meta, StoryObj } from '@storybook/react';
import { img } from './';
import type { Props } from './img.types';

const meta: Meta<Props> = {
    title: '/img',
    component: img,
    parameters: {
        layout: 'centered',
        tags: ['autodocs'],
        argTypes: {}
    }
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
