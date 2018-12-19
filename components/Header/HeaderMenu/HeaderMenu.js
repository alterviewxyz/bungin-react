import * as React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import media from 'styled-media-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Button from '../../elements/Button';
import IconWrapper from '../../elements/IconWrapper/IconWrapper';


const Name = styled.span`
  padding-right: 16px;
  font-size: 14px;
  color: #888;

  ${media.lessThan('470px')`
    font-size: 13px;
    padding-right: 10px;
  `}
`;

const A = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #686868;
  text-decoration: none;
  transition: color 0.3s ease-out;

  :hover,
  :active,
  :focus {
    color: #64b5f6;

    svg path {
      stroke: #64b5f6;
    }
  }

  ${media.lessThan('470px')`
    font-size: 13px;
  `}
`;


class HeaderMenu extends React.Component {

  // const login = (
    // <Modal
    //   trigger={
    //     isAuthenticated ? null : (
    //       <A href="#" title="Login or sign up">
    //         Log in / Sign Up
    //       </A>
    //     )
    //   }
    // >
    //   {closeModal => <LoginModal closeModal={closeModal} />}
    // </Modal>
  // );

  // const showSubmit = closeModal => 
  //   isAuthenticated ? (
  //     <SubmitModal closeModal={closeModal} />
  //   ) : (
  //     <LoginModal closeModal={closeModal} />
  //   );

  render() {
    return (
      <Flex
        alignItems={['flex-end', 'center']}
        flexDirection={['column', 'row']}
        as="nav"
      >
        <Box mx={[0, 3]}>
          <Button responsive>Login / Signup</Button>
        </Box>
        <Box mx={[0, 3]}>
          <a href="#" title="Logout">
            <IconWrapper size={14} fill="transparent" stroke="#666" mr={1}>
              <FontAwesomeIcon icon={faSignOutAlt} /> 
            </IconWrapper>
            Log out
          </a>
        </Box>
        <Flex ml={[0, 2]} mt={[2, 0]} alignItems={['flex-end', 'center']}>
          {/* {logoutLink} */}
          {/* {login} */}
        </Flex>
      </Flex>
    );
  }
};

export default HeaderMenu;
