import styled from 'styled-components';
import { color } from 'styled-system';

import { fontStyles } from '../utils/styles';

const Title = styled.h1`
  ${color}
  ${fontStyles}
  text-transform: uppercase;
`;

export default Title;