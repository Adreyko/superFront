import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
  title: 'widgets/Page',
  component: Page,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof Page>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
