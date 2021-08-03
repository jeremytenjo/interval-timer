import { MemoryRouter } from 'react-router-dom'
import { create } from '@storybook/theming/create'

import DataProvider from '../../src/lib/utils/useData/DataProvider'
import { FirebaseProvider } from '../../src/firebase/firebase'

import StorybookTheme from './theme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/my-interval-timer',
})

export const decorators = [
  (Story) => {
    return (
      <StorybookTheme>
        <FirebaseProvider>
          <DataProvider>
            <MemoryRouter initialEntries={['/']}>
              <Story />
            </MemoryRouter>
          </DataProvider>
        </FirebaseProvider>
      </StorybookTheme>
    )
  },
]

export const parameters = {
  docs: {
    theme,
  },
}
