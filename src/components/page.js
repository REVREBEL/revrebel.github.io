import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

import { mq } from '../utils/helpers';

const Page = theme.div`
  padding-top: ${theme.space[5]};
  padding-bottom: ${theme.space[5]};

  ${mq[1]} {
    padding-top: ${theme.space[6]};
    padding-bottom: ${theme.space[6]};
  }
`;

export default Page;
