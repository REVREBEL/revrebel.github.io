import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme/theme'
import { Container } from 'theme-ui'
//import { mq } from '../utils';


const Grid = theme.div`
  ${mq[2]} {
    display: grid;
    grid-template-columns: repeat(${p => p.cols}, 1fr);
    grid-gap: ${theme.space[7]};
  }
`;

export default Grid;
