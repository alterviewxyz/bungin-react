import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import Form from '../../styles/Form';
import Error from '../../ErrorMessage';
import { CURRENT_USER_QUERY } from '../../Queries/User';

const SINGLE_PODCAST_STATION_QUERY = gql`
  query SINGLE_PODCAST_STATION_QUERY($id: ID!) {
    podcastStation(where: { id: $id }) {
      id
      slug
      rss
      title
      description
      image
      language
      website
      unProcessedFeed
      episodesId {
        id
      }
    }
  }
`;

const UPDATE_PODCAST_STATION = gql`
  mutation UPDATE_PODCAST_STATION(
    $id: ID!
    $slug: String
    $rss: String
    $title: String
    $description: String
    $image: String
    $language: String
    $website: String
  ) {
    updatePodcastStation(
      id: $id
      data: {
        slug: $slug
        rss: $rss
        title: $title
        description: $description
        image: $image
        language: $language
        website: $website
      }
    ) {
      id
      title
      description
      slug
    }
  }
`;

class PublishPodcastForm extends Component {
  state = {};

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updatePodcastStation = async (e, updatePodcastStationMutation) => {
    e.preventDefault();
    console.log('Updating Podcast Station!!');
    console.log(this.state);
    const res = await updatePodcastStationMutation({
      variables: {
        id: this.props.id,
        data: this.state
      }
    });
    console.log('Updated!!');
    Router.push({
      pathname: '/publish/step2',
      query: { id: this.props.id }
    });
  };

  render() {
    return (
      <Query
        query={SINGLE_PODCAST_STATION_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.podcastStation)
            return <p>No Podcast Found for {this.props.id}</p>;
          const item = data.podcastStation;
          return (
            <Mutation mutation={UPDATE_PODCAST_STATION} variables={this.state}>
              {(updatePodcastStation, { loading, error }) => (
                <Form
                  onSubmit={e =>
                    this.updatePodcastStation(e, updatePodcastStation)
                  }
                >
                  <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Edit and confirm podcasts before publishing them.</h2>
                    <Error error={error} />

                    <label htmlFor="rss">
                      RSS
                      <input
                        type="text"
                        name="rss"
                        placeholder="Put RSS URL here..."
                        value={this.state.rss}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.rss}
                      />
                    </label>

                    <label htmlFor="slug">
                      Slug
                      <input
                        type="text"
                        name="slug"
                        placeholder="Put slug here..."
                        value={this.state.slug}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.slug}
                      />
                    </label>

                    <label htmlFor="title">
                      title
                      <input
                        type="text"
                        name="title"
                        placeholder="Put title here..."
                        value={this.state.title}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.title}
                      />
                    </label>

                    <label htmlFor="language">
                      language
                      <input
                        type="text"
                        name="language"
                        placeholder="Put language here..."
                        value={this.state.language}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.language}
                      />
                    </label>

                    <label htmlFor="description">
                      description
                      <input
                        type="text"
                        name="description"
                        placeholder="Put description here..."
                        value={this.state.description}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.description}
                      />
                    </label>

                    <label htmlFor="image">
                      image
                      <input
                        type="text"
                        name="image"
                        placeholder="Put image here..."
                        value={this.state.image}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.image}
                      />
                    </label>

                    <label htmlFor="website">
                      website
                      <input
                        type="text"
                        name="website"
                        placeholder="Put website here..."
                        value={this.state.website}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.website}
                      />
                    </label>

                    <button type="submit">Publish Podcast Episodes!</button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default PublishPodcastForm;
