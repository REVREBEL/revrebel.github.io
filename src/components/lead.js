import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

const Lead = theme.p`
  font-size: 20px;
  margin-bottom: 24px;

  ${p => p.light};
`;

export default Lead;
