import { StoryFn } from "@storybook/react"
import { Theme } from "app/providers/ThemeProvider/lib/ContextTheme"
import "app/styles/index.scss"
// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div id='app' style={{ width: "100%" }} className={`app ${theme}`}>
    <Story />
  </div>
)
