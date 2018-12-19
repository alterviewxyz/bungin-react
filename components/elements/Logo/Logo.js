import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from 'styled-media-query';
// import * as LogoImage from '../../../static/images/logo.png';

const Image = styled.img`
  transition: all 0.5s ease;
  height: 36px;

  :hover {
    opacity: 0.7;
  }

  ${media.lessThan('472px')`
    height: 30px;
  `}
`;

const Logo = () => (
  <Link href="/?sort=top" as="/">
    <a title="Telegram Directory">
      Bung-In!
    </a>
  </Link>
);

export default Logo;
