
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme';
import { button } from 'theme-ui';

// prettier-ignore
const Button = styled.button`
  display: inline-block;
  background-image: linear-gradient(0deg, #97bf2f 14%, #c9fa4b 94%);
  color: ${theme.colors.darkGray};
  border-radius: ${theme.radii[1]};
  font-size: ${theme.fontsize[3]};
  font-weight: 700;
  padding: ${theme.space[2]} ${theme.space[3]};
  border: 2px solid ${theme.colors.primaryDark};
  cursor: pointer;

  ${p => p.block && css`
    display: block;
    width: 100%;
  `};

  ${p => p.outline && css`
    background: none;
    font-weight: 500;
  `};

  ${p => p.active && css`
    background: ${theme.colors.primaryDark};
    color: white;
  `};
`;

export default Button;
