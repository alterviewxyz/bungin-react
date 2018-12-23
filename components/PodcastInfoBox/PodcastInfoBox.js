import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';

const PodcastInfoBoxStyles = styled.div`
 img {
     width:300px;
     height:300px;
 }
`;

const SINGLE_PODCAST_STATION_QUERY = gql`
  query SINGLE_PODCAST_STATION_QUERY($id: ID!) {
    podcastStation(where: { id: $id }) {
      id
      title
      description
      image
    }
  }
`;

class PodcastInfoBox extends Component {
  render() {
    return (
      <Query
        query={SINGLE_PODCAST_STATION_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.podcastStation) return <p>No Podcast Found for {this.props.id}</p>;
          const item = data.podcastStation;
          return (
            <PodcastInfoBoxStyles>
              <Head>
                <title>Bungin - {item.title}</title>
              </Head>
              <img src={item.image} alt={item.title} />
              <div className="details">
                <h2>Viewing {item.title}</h2>
                <p>{item.description}</p>
              </div>
            </PodcastInfoBoxStyles>
          );
        }}
      </Query>
    );
  }
}

export default PodcastInfoBox;