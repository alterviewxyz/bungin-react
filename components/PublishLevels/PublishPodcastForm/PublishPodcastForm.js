/* eslint-disable no-console */
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import Form from '../../styles/Form';
import Error from '../../ErrorMessage';
import {
  SINGLE_PODCAST_STATION_WITH_EPISODES_ID_QUERY,
  UPDATE_PODCAST_STATION
} from '../../Queries/Queries';

class PublishPodcastForm extends Component {
  state = {};

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updatePodcastStation = async (e, updatePodcastStationMutation) => {
    const { id } = this.props;
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
    Router.push({
      pathname: '/publish/step2',
      query: { id }
    });
  };

  render() {
    const { id } = this.props;
    const {
      rss,
      slug,
      title,
      language,
      description,
      image,
      website
    } = this.state;
    return (
      <Query
        query={SINGLE_PODCAST_STATION_WITH_EPISODES_ID_QUERY}
        variables={{
          id: id
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.podcastStation) return <p>No Podcast Found for {id}</p>;
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
                        value={rss}
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
                        value={slug}
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
                        value={title}
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
                        value={language}
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
                        value={description}
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
                        value={image}
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
                        value={website}
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
