import type { Meta, StoryObj } from '@storybook/react';

import NotificationList from './NotificationList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotificationList> = {
  title: 'widgets/NotificationList',
  component: NotificationList,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
