import React from 'react';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

import Page from './page';
import { mq } from '../utils/helpers';

const Children = styled.div`
  overflow: hidden;
  padding-left: 2rem;
`;

function SidebarLayout({ sidebar, children }) {
  return (
    <Page
      css={css`
        ${mq[1]} {
          display: grid;
          grid-template-columns: ${sidebar ? 'clamp(160px, 20vw, 320px)' : ''} minmax(0, 1fr);
          grid-gap: 2rem;
        }
      `}
    >
      {sidebar && <div>{sidebar}</div>}
      <Children>{children}</Children>
    </Page>
  );
}

export default SidebarLayout;
