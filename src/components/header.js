import React, { useState, useEffect } from 'react';

import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'
import { Container } from 'theme-ui'

import GitHubButton from 'react-github-btn';

import Notifications from './notifications';
import DocSearch from './doc-search';
import searchIcon from '../theme/icons/binoculars-fill.svg';
import { mq } from '../utils/helpers';

const StyledHeader = theme.header`
  background: ${theme.colors.white};
  padding-top: ${theme.space[3]};
  padding-bottom: ${theme.space[3]};
  transition: background 0.2s ease, padding 0.2s ease, box-shadow 0.2s ease;

  ${mq[2]} {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: ${theme.zIndexes.header};

    ${p =>
      !p.collapsed &&
      css`
        padding-top: ${theme.space[5]};
        padding-bottom: ${theme.space[5]};
      `};

    ${p =>
      p.hasNotifications &&
      css`
        padding-top: 0;
      `};
  }
`;

const HeaderContainer = theme(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = theme.div`
  ${mq[1]} {
    margin-right: ${theme.space[5]};
  }

  img {
    height: clamp(32px, 3vw, 60px);
    width: auto;
  }
`;

const MenuActions = theme.div`
  flex: 1 0 60px;
  display: flex;
  justify-content: flex-end;
  ${mq[1]} {
    display: none;
  }
`;

const MenuBtn = theme.button`
  background: none;
  border: 0;
  padding: ${theme.space[2]};
  font-size: ${theme.fontsize[6]};
  line-height: 1;
`;

const SearchBtn = theme(MenuBtn)``;

const ToggleArea = theme.div`
  display: ${p => (p.open ? 'block' : 'none')};
  flex: 1 0 100px;
  width: 100%;
  margin-top: ${theme.space[3]};

  ${mq[1]} {
    display: block;
    width: auto;
    margin-top: 0;
  }
`;

const SearchBox = theme(ToggleArea)`
  ${mq[1]} {
    flex: 1;
    max-width: 200px;
    margin-right: ${theme.space[3]};
  }
`;

const Menu = theme(ToggleArea)`
  ${mq[1]} {
    flex: 0 0 auto;
    margin-left: auto;
  }
`;

const MenuList = theme.ul`
  ${mq[1]} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const MenuItem = theme.li`
  margin-bottom: ${theme.space[3]};
  ${mq[1]} {
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: ${theme.space[3]};
    }
  }
`;

const NavLink = theme(Link)`
  text-decoration: none;
  font-weight: 600;
`;

const NOTIFS_QUERY = graphql`
  query notifs {
    file(relativePath: { regex: "/notifications/" }) {
      childDataYaml {
        notifications {
          published
          loud
          message
          url
        }
      }
    }
  }
`;

function Header({ hasHeroBelow }) {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // TODO: use raf to throttle events
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const currentWindowPos = document.documentElement.scrollTop || document.body.scrollTop;

    const scrolled = currentWindowPos > 0;

    setScrolled(scrolled);
  }

  function handleMenuBtnClick() {
    setNavOpen(s => !s);
    setSearchOpen(false);
  }

  function handleSearchBtnClick() {
    setSearchOpen(s => !s);
    setNavOpen(false);
  }

  return (
    <StaticQuery query={NOTIFS_QUERY}>
      {data => {
        const notifications = data.file.childDataYaml.notifications.filter(
          notif => notif.published,
        );
        const collapsed = !hasHeroBelow || scrolled;
        const hasNotifications = notifications.length > 0;
        return (
          <StyledHeader collapsed={collapsed} id="header" hasNotifications={hasNotifications}>
            <Notifications notifications={notifications} />
            <HeaderContainer>
              <Logo>
                <Link to="/">
                  <img src="/img/decap-logo.svg" alt="Decap CMS logo" />
                </Link>
              </Logo>
              <MenuActions>
                <SearchBtn onClick={handleSearchBtnClick}>
                  {isSearchOpen ? <span>&times;</span> : <img src={searchIcon} alt="search" />}
                </SearchBtn>
                <MenuBtn onClick={handleMenuBtnClick}>
                  {isNavOpen ? <span>&times;</span> : <span>&#9776;</span>}
                </MenuBtn>
              </MenuActions>
              <SearchBox open={isSearchOpen}>
                <DocSearch />
              </SearchBox>
              <Menu open={isNavOpen}>
                <MenuList>
                  <MenuItem
                    css={css`
                      margin-top: 8px;
                    `}
                  >
                    <GitHubButton
                      href="https://github.com/decaporg/decap-cms"
                      data-icon="octicon-star"
                      data-show-count="true"
                      aria-label="Star decaporg/decap-cms on GitHub"
                    >
                      Star
                    </GitHubButton>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/docs/intro/">Docs</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/docs/contributor-guide/">Contributing</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/community/">Community</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/blog/">Blog</NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HeaderContainer>
          </StyledHeader>
        );
      }}
    </StaticQuery>
  );
}

export default Header;
