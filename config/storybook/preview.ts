import type { Preview } from '@storybook/react';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecoratro';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: [
      { name: 'light', class: Theme.LIGHT, color: '#000000', default: true },
      { name: 'dark', class: Theme.DARK, color: '#ffffff' },
    ],
  },
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
