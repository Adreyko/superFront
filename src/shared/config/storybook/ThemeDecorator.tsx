import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoryFn } from '@storybook/react';
import './../../../app/styles/index.scss'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) =>

  (
    <div id="app" style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className={`app ${theme}`}>
      <Story />
    </div>
  );
