import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'

const AwardLink = theme.a`
  display: block;
  text-align: center;

  img {
    width: 60vw;
    max-width: 280px;
  }
`;

function Awards({ items }) {
  return items.map(item =>
    <AwardLink href={item.href} title={item.title}>
      <img src={item.image} alt={item.title} />
    </AwardLink>
  );
}

export default Awards;
