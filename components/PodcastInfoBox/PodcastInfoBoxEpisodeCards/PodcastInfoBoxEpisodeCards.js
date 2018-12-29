import React, { Component } from 'react';
import styled from 'styled-components';
import EpisodeCard from '../../EpisodeCard';

const EpisodeCards = styled.div``;

const PodcastInfoBoxEpisodeCards = ({ episodes }) => (
  <EpisodeCards>
    <EpisodeCard
      id={episodes[0].id}
      slug={episodes[0].slug}
      title={episodes[0].title}
      description={episodes[0].description}
      image={episodes[0].image}
      podcastTitle={episodes[0].podcastTitle}
      duration={episodes[0].duration}
      date={episodes[0].date}
      episode={episodes[0].episode}
    />
  </EpisodeCards>
);
export default PodcastInfoBoxEpisodeCards;
