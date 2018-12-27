import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { Line } from 'rc-progress';
import Form from '../../styles/Form';
import PodcastEpisodeCard from '../../PodcastEpisodeCard';
import Error from '../../ErrorMessage';
import { CURRENT_USER_QUERY } from '../../Queries/User';

const Contain = styled.div`
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
  grid-gap: 20px;
`;


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
    $episodeNubmer: Int!,
    $publishDate: DateTime!,
    $duration: Int!,
    $podcastStation: String!)  {
      createPodcastEpisode(
        data: {
          mp3: $mp3,
          title: $title,
          description: $description,
          episodeNubmer: $episodeNubmer,
          image: $image,
          publishDate: $publishDate,
          duration: $duration,
        },
        podcastStation: $podcastStation,
      )
      {
        id
        title
        mp3
        description
        episodeNubmer
        publishDate
        duration
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
    if((this.state.nextToGo) < 0){
      Router.push({
        pathname: '/publish/step3',
        query: {id:this.props.id}
      });
      return true;
    }
    console.log('Create Podcast Episode!!');
    const res = await createPodcastEpisodeMutation({
      variables: {
          mp3:            this.state.mp3,
          episodeNubmer:  parseInt(this.state.nubmer),
          title:          this.state.title,
          description:    this.state.description,
          image:          this.state.image,
          publishDate:    this.state.publishDate,
          duration:       parseInt(this.state.duration),
          podcastStation: this.props.id,
      },
    });
    console.log('Created!!',res);
    this.setState({
      nextToGo:       this.state.nextToGo - 1,
      mp3:            this.state.episodes[this.state.nextToGo - 1].enclosure.url,
      nubmer:         this.state.episodes[this.state.nextToGo - 1].episode,
      title:          this.state.episodes[this.state.nextToGo - 1].title,
      description:    this.state.episodes[this.state.nextToGo - 1].description,
      image:          this.state.episodes[this.state.nextToGo - 1].image,
      duration:       this.state.episodes[this.state.nextToGo - 1].duration,
      publishDate:    this.state.episodes[this.state.nextToGo - 1].published,
    });
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
            const episodes = data.podcastStation.unProcessedFeed.episodes;
            const podcastTitle = data.podcastStation.title;

            //ُThis isn't the right what but I couldn't find any better way still
            const the_length = episodes.length - 1;
            console.log("episodes.length",the_length);
            this.setState((prevState) => {
              if (prevState.length === episodes.length) return null
              return {
                length:         episodes.length,
                episodes:       episodes,
                nextToGo:       the_length,
                mp3:            episodes[the_length].enclosure.url,
                nubmer:         episodes[the_length].episode,
                title:          episodes[the_length].title,
                description:    episodes[the_length].description,
                image:          episodes[the_length].image,
                duration:       episodes[the_length].duration,
                publishDate:    episodes[the_length].published,
              }
            });
          return (
            <Mutation mutation={CREATE_PODCAST_EPISODE} variables={this.state}>
            {(createPodcastEpisode, { loading, error }) => (
              <Form onSubmit={e => this.createPodcastEpisode(e, createPodcastEpisode)}>
              <Line percent={this.state.nubmer*100/this.state.length} strokeWidth="1" strokeColor="#5a45f0" />  
              <Contain>
                <fieldset disabled={loading} aria-busy={loading}>
                  <h2>Edit and confirm episode before publishing it.</h2>
                  <Error error={error} />
                  <button type="submit">Publish Episode {this.state.nubmer} of {this.state.length}!</button>
                  <label htmlFor="title">
                    RSS
                    <input
                      type="text"
                      name="title"
                      placeholder="Put title here..."
                      value={this.state.title}
                      onChange={this.saveToState}
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
                    />
                  </label>

                  <label htmlFor="duration">
                    duration
                    <input
                      type="text"
                      name="duration"
                      placeholder="Put duration here..."
                      value={this.state.duration}
                      onChange={this.saveToState}
                    />
                  </label>


                  <label htmlFor="description">
                    description
                    <textarea
                      type="text"
                      name="description"
                      placeholder="Put description here..."
                      value={this.state.description}
                      onChange={this.saveToState}
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
                    />
                  </label>

                  <label htmlFor="nubmer">
                  nubmer
                    <input
                      type="text"
                      name="nubmer"
                      placeholder="Put episode nubmer here..."
                      value={this.state.nubmer}
                      onChange={this.saveToState}
                    />
                  </label>
                </fieldset>
                  <PodcastEpisodeCard
                    title={this.state.title}
                    podcastTitle={podcastTitle}
                    description={this.state.description}
                    image={this.state.image }
                    duration={this.state.duration }
                    episode={this.state.nubmer}
                    date={this.state.publishDate}
                  />
                </Contain>
              </Form>
            )}
          </Mutation>

        )}}
      </Query>
    );
  }
}

export default PublishEpisodesForm;