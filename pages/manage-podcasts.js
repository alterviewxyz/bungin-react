import * as React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { Container } from '../components/elements/Layout';
import PleaseSignIn from '../components/PleaseSignIn';


const SigninPage = (props) => (
    <Flex flex="1 1 auto" flexDirection="column">
        <Flex py={5} flexDirection="column" alignItems="center" as="section">
            <Container justifyContent="flex-start" flexDirection="column">
                <PleaseSignIn>


                </PleaseSignIn>
            </Container>
        </Flex>
    </Flex>
);

export default SigninPage;