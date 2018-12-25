import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import Form from '../../styles/Form';
import PodcastEpisodeCard from '../../PodcastEpisodeCard';
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

const CREATE_PODCAST_EPISODE = gql`
  mutation CREATE_PODCAST_EPISODE(
    $mp3: String!,
    $title: String!,
    $description: String!,
    $image: String,
    $episodeNubmer: Int!)  {
      createPodcastEpisode(
        data: {
          mp3: $mp3, title: $title, description: $description, image: $image, episodeNubmer: $episodeNubmer
        }
      )
      {
        id
        title
        description
        episodeNubmer
      }
  }
`;

class PublishEpisodesForm extends Component {
  state = {
  };
  
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPodcastEpisode = async (e, createPodcastEpisodeMutation) => {
    e.preventDefault();
    if((this.state.nextToGo + 1) > this.state.length){
      Router.push({
        pathname: '/publish/step3',
        query: {id:this.props.id}
      });
      return true;
    }
    console.log('Create Podcast Episode!!');
    const res = await createPodcastEpisodeMutation({
      variables: {
          mp3:          this.state.Episodes[this.state.nextToGo].title,
          episodeNubmer:this.state.nextToGo,
          title:        this.state.Episodes[this.state.nextToGo].title,
          description:  this.state.Episodes[this.state.nextToGo].content,
          image:        this.state.Episodes[this.state.nextToGo].image,
      },
    });
    console.log('Created!!',res);
    this.setState({ nextToGo: this.state.nextToGo + 1});
    console.log('next:  ',this.state.nextToGo);
  };

  render() {
    return (
      <Query
        query={SINGLE_PODCAST_STATION_QUERY}
        variables={{
          id: this.props.id
        }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.podcastStation)
            return <p>No Podcast Found for {this.props.id}</p>;
            const Episodes = data.podcastStation.unProcessedFeed.Episodes;

            //ُThis isn't the right what but I couldn't find any better way still
            this.setState((prevState) => {
              if (prevState.length === Episodes.length) return null
              return { length: Episodes.length, Episodes, nextToGo: 0 }
            });
            console.log(Episodes[this.state.nextToGo]);
            
          return (
            <Mutation mutation={CREATE_PODCAST_EPISODE} variables={this.state}>
            {(createPodcastEpisode, { loading, error }) => (
              <Form onSubmit={e => this.createPodcastEpisode(e, createPodcastEpisode)}>
                <button type="submit">Episode {this.state.nextToGo} of {this.state.length}!</button>
                <PodcastEpisodeCard
                  title={((this.state.Episodes || {})[this.state.nextToGo] || {}).title}
                  podcastTitle="ChanelB"
                  description={((this.state.Episodes || {})[this.state.nextToGo] || {}).content}
                  image={((this.state.Episodes || {})[this.state.nextToGo] || {}).image }
                  duration={((this.state.Episodes || {})[this.state.nextToGo] || {}).duration }
                  episode={((this.state.Episodes || {})[this.state.nextToGo] || {}).episode }
                />
              </Form>
            )}
          </Mutation>

        )}}
      </Query>
    );
  }
}

export default PublishEpisodesForm;