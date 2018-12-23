import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
import media from 'styled-media-query';
import User from '../../Queries/User';
import Button from '../../elements/Button';
import Signout from '../../Signout';


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
      <User>
        {({ data: { me } }) => (
          <Flex
            alignItems={['flex-end', 'center']}
            flexDirection={['column', 'row']}
            as="nav"
          >
            {!me && (
              <Flex
              alignItems={['flex-end', 'center']}
              flexDirection={['column', 'row']}
              as="div">
                <Box mx={[0, 2]}>
                  <Link href="/signup" passHref>
                    <Button responsive>Signup</Button>
                  </Link>
                </Box>
                <Box mx={[0, 2]}>
                  <Link href="/signin" passHref>
                    <Button responsive>Login</Button>
                  </Link>
                </Box>
              </Flex>
            )}
            {me && (
              <>
                <Box mx={[0, 2]}>
                  <Signout/>
                </Box>
                <Box mx={[0, 2]}>
                  <Link href="/add-podcast" passHref>
                    <Button responsive>Add A Podcast!</Button>
                  </Link>
                </Box>
              </>
            )}
          </Flex>
        )}
      </User>
    );
  }
};

export default HeaderMenu;
