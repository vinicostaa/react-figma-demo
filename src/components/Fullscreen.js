import { background } from '../utils/styles';
import styled from 'styled-components';

const Fullscreen = styled.div`
  width: calc(100vW - 40px);
  height: calc(100vH - 40px);
  top: 0;
  left: 0;
  position: absolute;
  padding: 20px;
  ${background}
`;

export default Fullscreen;