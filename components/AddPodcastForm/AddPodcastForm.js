import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import { ADD_PODCAST_FROM_URL_MUTATION } from '../Queries/Queries';

class AddPodcastForm extends Component {
  state = {};
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name } = this.state;
    return (
      <Mutation mutation={ADD_PODCAST_FROM_URL_MUTATION} variables={this.state}>
        {(addpodcast, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              const res = await addpodcast();
              Router.push({
                pathname: '/p/' + res.data.addPodcastFromURL.slug
              });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Add A Podcast To Bungin Database</h2>
              <Error error={error} />

              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="rss"
                  placeholder="Put RSS URL here..."
                  value={name}
                  onChange={this.saveToState}
                />
              </label>

              <button type="submit">Add Podcast!</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default AddPodcastForm;
