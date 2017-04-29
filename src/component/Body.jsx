import styled from 'styled-components';
import { global } from '../constant/variable';

const Body = styled.div`
  padding-bottom: ${global.size.touchable};
  background-color: ${global.color.background};
  min-height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

export default Body;
