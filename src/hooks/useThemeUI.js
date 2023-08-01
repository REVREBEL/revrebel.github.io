import { useThemeUI } from 'theme-ui'

export default (props) => {
  const context = useThemeUI()
  const { theme, components, colorMode, setColorMode } = context

  return <pre>{JSON.stringify(theme, null, 2)}</pre>
}