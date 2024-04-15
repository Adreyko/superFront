import type { Meta, StoryObj } from '@storybook/react';

import [FTName]  from './[FTName]';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof [FTName] > = {
  title: 'widgets/[FTName]',
  component: [FTName] ,
  decorators: []

};

export default meta;
type Story = StoryObj<typeof [FTName] >;
export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

};
