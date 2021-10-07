import { MemoryRouter } from 'react-router-dom'
import { create } from '@storybook/theming/create'

import { FirebaseProvider } from '../../src/firebase/../../src/firebase/useFirebase'

import StorybookTheme from './theme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/my-interval-timer',
})

export const decorators = [
  (Story) => {
    return (
      <FirebaseProvider>
        <StorybookTheme>
          <MemoryRouter initialEntries={['/']}>
            <Story />
          </MemoryRouter>
        </StorybookTheme>
      </FirebaseProvider>
    )
  },
]

export const parameters = {
  docs: {
    theme,
  },
}
