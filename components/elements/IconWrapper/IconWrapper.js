import styled, { css } from 'styled-components';
import { Flex } from '@rebass/grid';
import { prop } from 'styled-tools';
import media from 'styled-media-query';


const IconWrapper = styled(
  ({ fill, hoverFill, size, stroke, ...rest }) => (
    <Flex {...rest} alignItems="center" justifyContent="center" as="span" />
  )
)`
  svg {
    width: ${prop('size', 16)}px;
    height: auto;
    path {
      fill: ${prop('fill', '#C7CFD6')};
      stroke: ${prop('stroke', 'none')};
      opacity: 1;
      transition: fill 0.3s ease-out, stroke 0.3s ease-out;
    }
  }
  ${({ hoverFill }) =>
    hoverFill &&
    css`
      :hover {
        svg path {
          fill: ${hoverFill};
        }
      }
    `};
  ${media.lessThan('470px')`
    svg {
      width: ${({ size }) => (size ? size * 0.9 : 15)}px;
    }
  `};
`;

export default IconWrapper;