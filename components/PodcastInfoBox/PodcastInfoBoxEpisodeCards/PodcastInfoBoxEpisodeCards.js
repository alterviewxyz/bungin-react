import React, { Component } from 'react';
import styled from 'styled-components';
import EpisodeCard from '../../EpisodeCard';

const EpisodeCards = styled.div``;

const PodcastInfoBoxEpisodeCards = ({ episodes }) => (
  <EpisodeCards>
    {episodes.map(episode => (
      <EpisodeCard
        key={episode.id}
        id={episode.id}
        slug={episode.slug}
        title={episode.title}
        description={episode.description}
        image={episode.image}
        podcastTitle={episode.podcastTitle}
        duration={episode.duration}
        date={episode.date}
        episodeNubmer={episode.episodeNubmer}
      />
    ))}
  </EpisodeCards>
);
export default PodcastInfoBoxEpisodeCards;
