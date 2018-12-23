import * as React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { SloganTitle } from '../components/elements/Typography';
import { Container } from '../components/elements/Layout';
import PodcastInfoBox from '../components/PodcastInfoBox';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Right = styled.div`
  grid-area: menu;
`;

const Left = styled.div`

`;


const singlePodcastStation = (props) => (
    <Flex flex="1 1 auto" flexDirection="column">
        <Flex py={5} flexDirection="column" alignItems="center" as="section">
            <Container justifyContent="flex-start" flexDirection="column">
                <SloganTitle>Podcast slug is: {props.query.slug}</SloganTitle>
                <Columns>       
                    <Right>
                        
                    </Right>
                    <Left>
                        <PodcastInfoBox slug={props.query.slug} />
                    </Left>
                </Columns>
            </Container>
        </Flex>
    </Flex>
);

export default singlePodcastStation;