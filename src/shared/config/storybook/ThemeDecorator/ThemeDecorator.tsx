import React from 'react'
import { Story } from "@storybook/react";
import "app/styles/index.scss"
import { Themes } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  )
}