import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof CommentList> = {
  title: 'widgets/CommentList',
  component: CommentList,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof CommentList>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
