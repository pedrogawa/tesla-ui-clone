import styled from 'styled-components';

import teslaY from '../../assets/tesla-model-y.jpg';
import teslaX from '../../assets/tesla-model-x.jpg';
import teslaThree from '../../assets/tesla-model-3.jpg';
import teslaS from '../../assets/tesla-model-s.jpg';
import teslaSolar from '../../assets/tesla-solar.jpg';
import teslaRoof from '../../assets/tesla-solar-roof.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${teslaY});
    background-size: cover;
  }
  .colored:nth-child(2) {
    background: url(${teslaX});
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: url(${teslaThree});
    background-size: cover;
  }
  .colored:nth-child(4) {
    background: url(${teslaS});
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: url(${teslaSolar});
    background-size: cover;
  }
  .colored:nth-child(6) {
    background: url(${teslaRoof});
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: #f4f3ee;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #f4f3ee;
`;
