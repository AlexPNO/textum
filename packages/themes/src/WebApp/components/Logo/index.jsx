import React from 'react';
import styled from 'styled-components';

import { base } from '@pagerland/common/src/utils';

import logo from '../../assets/Bruna-Giro-Logo.png';

const Img = styled.img`
  display: block;
  max-width: 100px;
  ${base};
`;

const Logo = props => <Img src={logo} alt="WebApp" {...props} />;

export default Logo;
