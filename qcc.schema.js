/**
 * Input `useDataStore` returns `dataStore`
 */
const generateUseVariable = (string) => {
  let newValue = string.substring(3)
  newValue = newValue.charAt(0).toLowerCase() + newValue.slice(1)

  return newValue
}

const component = {
  type: 'Simple Component',
  files: [
    {
      path: () => `index.js`,
      template: ({ name, helpers }) => `        
      import Box from 'lib/components/Box'

      import * as styles from './styles.js'

      export default function ${helpers.changeCase.pascalCase(name)}() {
        return (
          <Box sx={styles.wrapper}>
           ${name}
          </Box> 
        );
      }
        `,
    },
    {
      path: () => `styles.js`,
      template: () => `
      export const wrapper = {}
        `,
    },
    {
      path: () => `stories/sb.stories.mdx`,
      template: ({ name }) => `import { Meta, Story } from '@storybook/addon-docs/blocks'
import ${name} from '../'
      
<Meta 
  title='Lib/components/${name}' 
  component={${name}} 
  argTypes={{}} 
  args={{}} 
/>

# ${name}

export const Template = (args) => (
  <${name} {...args}>
    ${name}
  </${name}>
)

<Story name='default' argTypes={{}} args={{}}>
  {Template.bind({})}
</Story>
`,
    },
  ],
}

const componentWithStory = {
  type: 'Complete Component',
  files: [
    {
      path: () => `index.js`,
      template: ({ name }) => `        
      import use${name}Data from './use${name}Data'
      import Ui from './ui/ui'
      
      export default function ${name}(props) {
        const data = use${name}Data({ props })
        return <Ui {...props} {...data} />
      }
        `,
    },
    {
      path: () => `ui/ui.js`,
      template: ({ name, helpers }) => `        
      import * as S from './styles'

      export default function ${helpers.changeCase.pascalCase(name)}() {
        return (
          <S.Wrapper>
           ${name}
          </S.Wrapper> 
        );
      }
        `,
    },
    {
      path: () => `ui/styles.js`,
      template: ({ helpers }) => `        
      import styled from 'styled-components'

      export const Wrapper = styled.div${helpers.addEmptyTemplateLiteral()}
        `,
    },
    {
      path: ({ name }) => `use${name}Data/index.js`,
      template: ({ name }) => `        
      export default function use${name}Data({ props }) {
        console.log(props)
        return {}
      }
        `,
    },
    {
      path: () => `stories/sb.stories.mdx`,
      template: ({ name }) => `import { Meta } from '@storybook/addon-docs/blocks'
import ${name} from '../'
      
<Meta title='Lib/components${name}' component={${name}} argTypes={{}} args={{}} />

# ${name}

export const Template = (args) => (
  <${name} {...args}>
    ${name}
  </${name}>
)

<Story name='default' argTypes={{}} args={{}}>
  {Template.bind({})}
</Story>
`,
    },
  ],
}

module.exports = [
  component,
  componentWithStory,
  {
    type: 'Function',
    files: [
      {
        path: () => 'index.js',
        template: ({ name }) => `export default function ${name}() {}`,
      },
    ],
  },
  {
    type: 'Page',
    files: [
      {
        path: () => 'index.js',
        template: ({ name }) => `export default function ${name}Page() {}`,
      },
      {
        path: () => 'routes.js',
        template: ({ name }) => `const ${name} = lazy(() => import('./'))

        export default function ${name}Routes() {
          return (
            <Routes>
              <Route path='/' element={<${name} />} />
            </Routes>
          )
        }`,
      },
    ],
  },
  {
    type: 'Global State',
    files: [
      {
        path: () => 'index.js',
        template: ({ name }) => `import create from 'zustand'

        const ${name}Store = create((set) => ({
          example: true,
        
          setExample: (newValue) => set(() => ({ example: newValue })),
        }))

        export default function ${name}() {
          const ${generateUseVariable(`${name}Store`)} = ${name}Store()

          const updateExample = (newValue) => {
            ${generateUseVariable(`${name}Store`)}.setExample(newValue)
          }

          return {
            updateExample
          }
        }`,
      },
    ],
  },
]
