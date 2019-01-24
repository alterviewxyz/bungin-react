/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import { Mutation, Query } from 'react-apollo';
import { SloganTitle } from '../../components/elements/Typography';
import { Container } from '../../components/elements/Layout';
import PleaseSignIn from '../../components/PleaseSignIn';
import {
  SINGLE_PODCAST_STATION_WITH_EPISODES_ID_QUERY,
  UPDATE_PODCAST_STATION
} from '../../components/Queries/Queries';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
class Add_Podcast extends React.Component {
  state = { pending: false };

  updatePodcastStation = async (e, updatePodcastStationMutation) => {
    const { id } = this.props.query;
    e.preventDefault();
    console.log('Updating Podcast Station!!');
    console.log(this.state);
    const res = await updatePodcastStationMutation({
      variables: {
        id: id,
        data: this.state
      }
    });
    console.log('Updated!!');
  };

  render() {
    const { query } = this.props;
    return (
      <Mutation mutation={UPDATE_PODCAST_STATION} variables={this.state}>
        {(updatePodcastStation, { loading, error }) => (
          <Flex flex="1 1 auto" flexDirection="column">
            <Flex
              py={5}
              flexDirection="column"
              alignItems="center"
              as="section"
            >
              <Container justifyContent="flex-start" flexDirection="column">
                <PleaseSignIn>
                  <SloganTitle>
                    <form
                      onSubmit={e =>
                        this.updatePodcastStation(e, updatePodcastStation)
                      }
                    >
                      Finally! The podcast is here! If everything is alright you
                      can now navigate to podcast page at
                      <Link
                        as={`/p/${query.slug}`}
                        href={`/singlePodcastStation?slug=${query.slug}`}
                      >
                        <a> it's page.</a>
                      </Link>
                      <button type="submit">
                        Make Podcast Station Public.
                      </button>
                    </form>
                  </SloganTitle>
                </PleaseSignIn>
              </Container>
            </Flex>
          </Flex>
        )}
      </Mutation>
    );
  }
}

export default Add_Podcast;
