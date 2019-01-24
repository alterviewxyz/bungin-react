import { Query } from 'react-apollo';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PodcastCard from '../PublishLevels/ManagePodcasts/PodcastCard';
import { ALL_PODCAST_STATIONS_QUERY } from '../Queries/Queries';

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 10px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const ManagePodcasts = props => (
  <Query query={ALL_PODCAST_STATIONS_QUERY} variables={{ pending: false }}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
      return (
        <ItemsList>
          {data.podcastStations.map(item => (
            <Link as={`/p/${item.slug}`} href={`/p?slug=${item.slug}`}>
              {item.title}
            </Link>
          ))}
        </ItemsList>
      );
    }}
  </Query>
);

export default ManagePodcasts;
