import styled from 'styled-components';
import { space } from 'styled-system';

import { boxShadow, width, height } from '../utils/styles';

const Card = styled.div`
  ${boxShadow}
  ${width}
  ${height}
  ${space}
  background: #fff;
  border-radius: 4px;
`;

export default Card;