import { Query } from 'react-apollo';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import PodcastCard from '../PublishLevels/ManagePodcasts/PodcastCard';
import StationCard from '../StationCard';
import { ALL_PODCAST_STATIONS_QUERY } from '../Queries/Queries';

const ItemsList = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  max-width: 1140px;
  width: 1111px;
  margin-top: 40px;
`;

const FlexItem = styled.div`
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
              <FlexItem>
                <StationCard
                  id={item.id}
                  slug={item.slug}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  upvotes={35}
                />
              </FlexItem>
            </Link>
          ))}
        </ItemsList>
      );
    }}
  </Query>
);

export default ManagePodcasts;
