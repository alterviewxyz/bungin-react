import * as React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { SloganTitle } from '../components/elements/Typography';
import { Container } from '../components/elements/Layout';
import ManagePodcasts from '../components/ManagePodcasts';
import PleaseSignIn from '../components/PleaseSignIn';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Right = styled.div`
  grid-area: menu;
`;

const Left = styled.div``;

const Add_Podcast = props => (
  <Flex flex="1 1 auto" flexDirection="column">
    <Container justifyContent="flex-start" flexDirection="column">
      <PleaseSignIn>
        <SloganTitle>Manage And Publish Pending Podcasts.</SloganTitle>
        <ManagePodcasts />
      </PleaseSignIn>
    </Container>
  </Flex>
);

export default Add_Podcast;
