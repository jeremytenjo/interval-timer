const component = {
  type: 'Simple Component',
  files: [
    {
      path: () => `index.js`,
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
      path: () => `styles.js`,
      template: ({ helpers }) => `        
      import styled from 'styled-components'

      export const Wrapper = styled.div${helpers.addEmptyTemplateLiteral()}
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
      
<Meta 
  title='Lib/${name}' 
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
]
