import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

const SectionLabel = theme.h3`
  color: ${theme.colors.gray};
  font-size: ${theme.fontsize[1]};
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: ${theme.space[4]};

  &:after {
    background: ${theme.colors.primaryDark};
    content: ' ';
    display: block;
    height: 2px;
    margin-top: 5px;
    width: ${theme.space[5]};
  }
`;

export default SectionLabel;
