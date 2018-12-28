import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import { CURRENT_USER_QUERY } from '../Queries/User';

const ADD_PODCAST_FROM_URL_MUTATION = gql`
  mutation ADD_PODCAST_FROM_URL_MUTATION($rss: String!) {
    addPodcastFromURL(rss: $rss) {
      id
      slug
      rss
    }
  }
`;

class EditPodcastForm extends Component {
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
              <h2>U</h2>
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

export default EditPodcastForm;
