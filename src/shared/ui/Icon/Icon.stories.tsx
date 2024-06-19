import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Icon> = {
  title: 'widgets/Icon',
  component: Icon,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof Icon>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
