import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Tabs> = {
  title: 'widgets/Tabs',
  component: Tabs,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof Tabs>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
