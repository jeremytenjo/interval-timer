// https://github.com/jeremytenjo/quick-component-creator/tree/master#component-type-properties
const files = [
  {
    path: ({ name }) => `use${name}.ts`,
    template: ({ name, helpers }) => {
      const nameCapitalized = helpers.changeCase.capitalCase(name)
      return `import useData from '@useweb/use-data'

import useGet${nameCapitalized} from './handlers/useGet${nameCapitalized}/useGet${nameCapitalized}'
import useCreate${nameCapitalized} from './handlers/useCreate${nameCapitalized}/useCreate${nameCapitalized}'
import useUpdate${nameCapitalized} from './handlers/useUpdate${nameCapitalized}/useUpdate${nameCapitalized}'
import useRemove${nameCapitalized} from './handlers/useRemove${nameCapitalized}/useRemove${nameCapitalized}'

export default function use${nameCapitalized}() {
  const get = useGet${nameCapitalized}()
  const create = useCreate${nameCapitalized}()
  const update = useUpdate${nameCapitalized}()
  const remove = useRemove${nameCapitalized}()

  const ${name} = useData({
    id: '${name}',
    get,
    create,
    update,
    remove,
  })

  return ${name}
}
`
    },
  },
]

const template = {
  type: 'Data',
  files,
}

module.exports = {
  files,
  template,
}
