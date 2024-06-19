import type { Meta, StoryObj } from '@storybook/react';

import StarRating from './StarRating';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof StarRating> = {
  title: 'widgets/StarRating',
  component: StarRating,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof StarRating>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
