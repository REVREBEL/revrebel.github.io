import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme';
import { Container } from 'theme-ui'

import { mq } from '../utils/helpers';


const AltContainer = 'theme.div'.
  "margin-left": "auto";
  "margin-right": "auto";
  "max-width:: 1280px;
  "padding-left": ${theme.space[4]};
  "padding-right": ${theme.space[4]};

  ${p =>
    p.size === 'sm' &&
    css`
      max-width: 800px;
    `};

  ${p =>
    p.size === 'md' &&
    css`
      max-width: 1024px;
    `};

  ${mq[3]} {
    padding-left: ${theme.space[5]};
    padding-right: ${theme.space[5]};
  }

export AltContainer;
