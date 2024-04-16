import type { Meta, StoryObj } from '@storybook/react';

import AriclePage from './AriclePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof AriclePage> = {
  title: 'widgets/AriclePage',
  component: AriclePage,
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof AriclePage>;
export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
