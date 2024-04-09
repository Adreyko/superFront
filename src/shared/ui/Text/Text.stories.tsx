import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'lorem lroemwmdsmdads',
    title: 'title lorem asas',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'text',
  },
};
