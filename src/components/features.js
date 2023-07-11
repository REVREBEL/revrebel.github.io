import React from 'react';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

import Markdownify from './markdownify';

const Box = theme.div`
  margin-bottom: ${theme.space[5]};

  img {
    margin-bottom: ${theme.space[3]};
    margin-left: -${theme.space[2]};
  }
`;

const Title = theme.h3`
  color: ${p => (p.kind === 'light' ? theme.colors.primaryLight : theme.colors.primaryLight)};
  font-size: ${theme.fontsize[4]};
`;

const Text = theme.p`
  font-size: 18px;
  a {
    font-weight: 700;
  }
`;

function FeatureItem({ feature, description, imgpath, kind }) {
  return (
    <Box>
      {imgpath && <img src={require(`../img/${imgpath}`).default} alt="" />}
      <Title kind={kind}>
        <Markdownify source={feature} />
      </Title>
      <Text>
        <Markdownify source={description} />
      </Text>
    </Box>
  );
}

function Features({ items, kind }) {
  return items.map(item => <FeatureItem kind={kind} {...item} key={item.feature} />);
}

export default Features;
