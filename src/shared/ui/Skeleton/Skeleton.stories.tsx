import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: '100px',
  },
};

export const Circle: Story = {
  args: {
    width: '100px',
    height: '100px',
    border: '50%',
  },
};

export const DarkPrimary: Story = {
  args: {
    width: '100%',
    height: '100px',
  },
};

export const CircleDark: Story = {
  args: {
    width: '100px',
    height: '100px',
    border: '50%',
  },
};
