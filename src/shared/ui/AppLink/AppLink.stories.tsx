import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof AppLink> = {
    title:'shared/AppLink',
  component: AppLink,
  decorators :[],
  args :{
    to: "/"
  }

};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    theme:'primary',
    children: 'Link',

  },
 
};

export const Secondary: Story = {
  args: {
    theme:'secondary',
    children: 'Link',

  },

};

export const PrimaryDark: Story = {
    args: {
      theme:'primary',
      children: 'Link',

    },
    decorators:[ThemeDecorator(Theme.DARK)]
  };
  
export const SecondaryDark: Story = {
    args: {
        theme:'secondary',
      children: 'Link',

    },
  decorators:[ThemeDecorator(Theme.DARK)]
  };
