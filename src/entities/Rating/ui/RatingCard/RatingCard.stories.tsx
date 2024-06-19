import type { Meta, StoryObj } from '@storybook/react';

import RatingCard from './RatingCard';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta: Meta<typeof RatingCard> = {
  title: 'widgets/RatingCard',
  component: RatingCard,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof RatingCard>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
