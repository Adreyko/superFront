import type { Meta, StoryObj } from '@storybook/react';

import CommentCard from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof CommentCard> = {
  title: 'widgets/CommentCard',
  component: CommentCard,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof CommentCard>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
