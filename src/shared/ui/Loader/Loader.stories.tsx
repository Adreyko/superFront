import type { Meta, StoryObj } from '@storybook/react';

import Loader from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof Loader>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
