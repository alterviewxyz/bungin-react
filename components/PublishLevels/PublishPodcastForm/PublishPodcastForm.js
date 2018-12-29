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

  uploadFile = async e => {
    const files = e.target.files;
    const name = e.target.name;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/pushup/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      [name]: file.secure_url
    });
    console.log(file.secure_url);
  };

  render() {
    const { id } = this.props;
    console.log('id', id);
    const {
      rss,
      slug,
      title,
      subtitle,
      language,
      description,
      image,
      largeimage,
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

                    <label htmlFor="title">
                      sub title
                      <input
                        type="text"
                        name="subtitle"
                        placeholder="Put subtitle here..."
                        value={subtitle}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.subtitle}
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
                        type="file"
                        id="file"
                        name="image"
                        placeholder="Upload an image"
                        required
                        onChange={this.uploadFile}
                      />
                      <input
                        type="text"
                        name="image"
                        placeholder="Put image here..."
                        value={image}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.image}
                      />
                      <img
                        src={image || data.podcastStation.image}
                        alt=""
                        style={{ height: '150px', margin: '15px' }}
                      />
                    </label>

                    <label htmlFor="image">
                      large image
                      <input
                        type="file"
                        id="file"
                        name="largeimage"
                        placeholder="Upload an image"
                        required
                        onChange={this.uploadFile}
                      />
                      <input
                        type="text"
                        name="largeimage"
                        placeholder="Put largeimage here..."
                        value={largeimage}
                        onChange={this.saveToState}
                        defaultValue={data.podcastStation.largeimage}
                      />
                      <img
                        src={largeimage || data.podcastStation.largeimage}
                        alt=""
                        style={{ height: '150px', margin: '15px' }}
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
