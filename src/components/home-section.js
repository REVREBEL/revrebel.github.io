import React from 'react';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'
import { Container } from 'theme-ui'

import Page from './page';

const Header = theme.header`
  text-align: center;
  padding-top: ${theme.space[6]};
  padding-bottom: ${theme.space[6]};
`;

const Title = theme.h2`
  font-size: ${theme.fontsize[6]};
`;

const Text = theme.div`
  max-width: 710px;
  margin: 0 auto;
`;

function HomeSection({ title, text, children, ...props }) {
  return (
    <Page as="section" {...props}>
      <Container>
        <Header>
          <Title>{title}</Title>
          {text && <Text>{text}</Text>}
        </Header>
        {children}
      </Container>
    </Page>
  );
}

export default HomeSection;
