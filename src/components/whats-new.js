import React from 'react';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

import { Container } from 'theme-ui';
import Release from './release';
import Grid from './grid';

function WhatsNew({ updates }) {
  return (
    <section
      css={css`
        background: ${theme.colors.lightishGray};
        padding-top: ${theme.space[6]};
        padding-bottom: ${theme.space[5]};
      `}
    >
      <Container>
        <Grid as="ol" cols={3}>
          {updates.slice(0, 3).map((item, idx) => (
            <Release {...item} versionPrevious={updates[idx + 1].version} key={item.version} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default WhatsNew;
