import * as React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import Link from 'next/link';
import { SloganTitle } from '../../components/elements/Typography';
import { Container } from '../../components/elements/Layout';
import PodcastInfoBox from '../../components/PodcastInfoBox';
import PleaseSignIn from '../../components/PleaseSignIn';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;


const Add_Podcast = (props) => (
    <Flex flex="1 1 auto" flexDirection="column">
        <Flex py={5} flexDirection="column" alignItems="center" as="section">
            <Container justifyContent="flex-start" flexDirection="column">
                <PleaseSignIn>
                    <SloganTitle>Finally! The podcast is here! If everything is alright you can now navigate to podcast page at 
                    <Link as={`/p/${  props.query.slug}`} href={`/singlePodcastStation?slug=${  props.query.slug}`}>
                        <a> it's page.</a>
                    </Link>
                    </SloganTitle>
                </PleaseSignIn>
            </Container>
        </Flex>
    </Flex>
);

export default Add_Podcast;