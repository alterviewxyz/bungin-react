import styled from 'styled-components';
import { Box } from '@rebass/grid';
import { ifProp } from 'styled-tools';
import media from 'styled-media-query';

const CustomHr = styled.hr>`
  width: 100%;
  height: 1px;
  display: ${ifProp('onlyMobile', 'none', 'block')};
  background-color: #ededed;
  border: none;
  outline: none;
  border-radius: 2px;

  ${media.lessThan('470px')`
    display: block;
  `}
`;
const Divider = ({ my, onlyMobile }) => (
  <Box my={my} width={1}>
    <CustomHr onlyMobile={onlyMobile} />
  </Box>
);

Divider.defaultProps = {
  my: 4,
  onlyMobile: false,
};

export default Divider;
