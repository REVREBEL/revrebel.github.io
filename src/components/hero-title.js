import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

import { mq } from '../utils/helpers';

const HeroTitle = theme.h1`
  font-size: ${theme.fontsize[6]};
  margin-bottom: ${theme.space[1]};

  ${mq[2]} {
    font-size: ${theme.fontsize[7]};
    margin-bottom: ${theme.space[2]};
  }
`;

export default HeroTitle;
