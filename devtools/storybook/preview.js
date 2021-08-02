import { MemoryRouter } from 'react-router-dom'
import { create } from '@storybook/theming/create'
import '../../src/firebase/initializeFirebase'

import StorybookTheme from './theme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/starter-capacitorjs',
})

export const decorators = [
  (Story) => {
    return (
      <StorybookTheme>
        <MemoryRouter initialEntries={['/']}>
          <Story />
        </MemoryRouter>
      </StorybookTheme>
    )
  },
]

export const parameters = {
  docs: {
    theme,
  },
}
