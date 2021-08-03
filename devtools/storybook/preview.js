import { MemoryRouter } from 'react-router-dom'
import { create } from '@storybook/theming/create'

import DataProvider from '../../src/lib/utils/useData/DataProvider'
import '../../src/firebase/initializeFirebase'

import StorybookTheme from './theme'

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/jeremytenjo/my-interval-timer',
})

export const decorators = [
  (Story) => {
    return (
      <StorybookTheme>
        <DataProvider>
          <MemoryRouter initialEntries={['/']}>
            <Story />
          </MemoryRouter>
        </DataProvider>
      </StorybookTheme>
    )
  },
]

export const parameters = {
  docs: {
    theme,
  },
}
