import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { Container } from '../elements/Layout';
import PleaseSignIn from '../PleaseSignIn';
import PodcastCard from './PodcastCard';

const ALL_PODCAST_STATIONS_QUERY = gql`
  query ALL_PODCAST_STATIONS_QUERY(
    $skip: Int = 0
    $first: Int = 10
    $pending: Boolean = true
  ) {
    podcastStations(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { pending: $pending }
    ) {
      id
      slug
      title
      description
      image
    }
  }
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const ManagePodcasts = props => (
  <Query query={ALL_PODCAST_STATIONS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return (
        <ItemsList>
          {data.podcastStations.map(item => (
            <PodcastCard item={item} key={item.id} />
          ))}
        </ItemsList>
      );
    }}
  </Query>
);

export default ManagePodcasts;
