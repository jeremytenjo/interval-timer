// https://github.com/jeremytenjo/quick-component-creator/tree/master#component-type-properties
const files = [
  {
    path: ({ name }) => `${name}.ts`,
    template: ({ name, helpers }) => {
      const propsTypeName = `${helpers.changeCase.capitalCase(name)}Props`.trim()
      return `type ${propsTypeName} = {name: string}
    
    export default function ${name}({name}: ${propsTypeName}) {}`
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
