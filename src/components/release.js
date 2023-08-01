import React from 'react';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

import Markdownify from '../components/markdownify';

const ReleaseLink = theme.a`
  display: block;
  padding: ${theme.space[2]} ${theme.space[3]};
  border-radius: ${theme.radii[1]};
  height: 100%;
  &:hover {
    background: ${theme.colors.darkGray};
  }
`;

const Version = theme.span`
  background: ${theme.colors.shadeBlue};
  font-size: ${theme.fontsize[1]};
  padding: 0 ${theme.space[1]};
  border-radius: ${theme.radii[1]};
  font-weight: 700;
  margin-right: ${theme.space[2]};
  color: ${theme.colors.gray};
`;

function Release({ version, versionPrevious, date, description, url }) {
  const displayDate = moment(date).format('MMMM D, YYYY');
  const defaultUrl = `https://github.com/decaporg/decap-cms/compare/netlify-cms@${versionPrevious}...netlify-cms@${version}`;

  return (
    <li
      css={css`
        flex: 1;
      `}
    >
      <ReleaseLink href={url || defaultUrl}>
        <div
          css={css`
            margin-bottom: ${theme.space[1]};
          `}
        >
          <Version>{version}</Version>
          <span
            css={css`
              font-size: ${theme.fontsize[1]};
              color: rgba(255, 255, 255, 0.6);
            `}
          >
            {displayDate}
          </span>
        </div>
        <span
          css={css`
            font-size: ${theme.fontsize[2]};
          `}
        >
          <Markdownify source={description} />
        </span>
      </ReleaseLink>
    </li>
  );
}

export default Release;
