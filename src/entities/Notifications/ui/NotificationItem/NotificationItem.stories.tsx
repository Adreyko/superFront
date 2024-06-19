import type { Meta, StoryObj } from '@storybook/react';

import NotificationItem from './NotificationItem';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotificationItem> = {
  title: 'widgets/NotificationItem',
  component: NotificationItem,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
