import { Themed } from '@theme-ui/mdx'
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide'

export default (props) => (
  <>
    <Themed.h1>Style Guide</Themed.h1>
    <ColorPalette />
    <TypeScale />
    <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading" />
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body" />
  </>
)