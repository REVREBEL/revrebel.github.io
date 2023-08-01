import React from 'react';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'
import { Container } from 'theme-ui'

import { mq } from '../utils/helpers';

function PageHero({ children }) {
  return (
    <section
      css={css`
        color: ${theme.colors.gray};
        position: relative;
        padding-top: ${theme.space[6]};
        padding-bottom: ${theme.space[6]};

        ${mq[3]} {
          padding-top: ${theme.space[6]};
          padding-bottom: ${theme.space[8]};
        }
      `}
    >
      <Container>{children}</Container>
    </section>
  );
}

export default PageHero;
