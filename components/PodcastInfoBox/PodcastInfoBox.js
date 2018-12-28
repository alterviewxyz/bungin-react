import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "../ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import IconWrapper from "../elements/IconWrapper/IconWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faHeart,
  faEnvelope,
  faShareAlt
} from "@fortawesome/free-solid-svg-icons";
import PodcastInfoBoxHero from "./PodcastInfoBoxHero";
import PodcastInfoBoxDescription from "./PodcastInfoBoxDescription";

const PodcastInfoBoxStyles = styled.div`
  a {
    text-decoration: none;
    color: #5c7fb8;
  }

  a:hover {
    text-decoration: underline;
  }

  .cover {
    position: absolute;
    top: 160px;
    left: 40px;
    z-index: 2;
    width: 150px;
  }

  .movie-card {
    font: 14px/22px sans-serif;
    color: #a9a8a3;
    padding: 40px 0;
  }

  .container {
    margin: 0 auto;
    min-width: 780px;
    min-height: 700px;
    background: #f0f0ed;
    border-radius: 5px;
    position: relative;
  }

  fieldset,
  label {
    margin: 0;
    padding: 0;
  }

  /****** Style Star Rating Widget *****/
  .rating {
    border: none;
    float: left;
  }

  .rating > input {
    display: none;
  }
  .rating > label:before {
    margin: 5px;
    margin-top: 0;
    font-size: 1em;
    font-family: FontAwesome;
    display: inline-block;
    content: "\f005";
  }

  .rating > .half:before {
    content: "\f089";
    position: absolute;
  }

  .rating > label {
    color: #ddd;
    float: right;
  }
  /***** CSS Magic to Highlight Stars on Hover *****/
  .rating > input:checked ~ label, /* show gold star when clicked */
  .rating:not(:checked) > label:hover, /* hover current star */
  .rating:not(:checked) > label:hover ~ label {
    color: #ffd700;
  } /* hover previous stars in list */

  .rating > input:checked + label:hover, /* hover current star when changing rating */
  .rating > input:checked ~ label:hover,
  .rating > label:hover ~ input:checked ~ label, /* lighten current selection */
  .rating > input:checked ~ label:hover ~ label {
    color: #ffed85;
  }

  a[data-tooltip] {
    position: relative;
  }
  a[data-tooltip]::before,
  a[data-tooltip]::after {
    position: absolute;
    display: none;
    opacity: 0.85;
  }
  a[data-tooltip]::before {
    /*
    * using data-tooltip instead of title so we 
    * don't have the real tooltip overlapping
    */
    content: attr(data-tooltip);
    background: #000;
    color: #fff;
    font-size: 13px;
    padding: 5px;
    border-radius: 5px;
    /* we don't want the text to wrap */
    white-space: nowrap;
    text-decoration: none;
  }
  a[data-tooltip]::after {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    content: "";
  }

  a[data-tooltip]:hover::before,
  a[data-tooltip]:hover::after {
    display: block;
  }

  /** positioning **/
  /* top tooltip */
  a[data-tooltip][data-placement="top"]::before {
    bottom: 100%;
    left: 0;
    margin-bottom: 40px;
  }
  a[data-tooltip][data-placement="top"]::after {
    border-top-color: #000;
    border-bottom: none;
    bottom: 50px;
    left: 20px;
    margin-bottom: 4px;
  }
`;

const SINGLE_PODCAST_STATION_QUERY = gql`
  query SINGLE_PODCAST_STATION_QUERY($slug: String!) {
    podcastStation(where: { slug: $slug }) {
      id
      title
      pending
      description
      image
      subscribed
      episodesId
      latestEpisode
      category
      tag
      copyright
      rating
      website
      author
    }
  }
`;

class PodcastInfoBox extends Component {
  render() {
    return (
      <Query
        query={SINGLE_PODCAST_STATION_QUERY}
        variables={{
          slug: this.props.slug
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.podcastStation)
            return <p>No Podcast Found for {this.props.id}</p>;
          const item = data.podcastStation;
          return (
            <PodcastInfoBoxStyles>
              <Head>
                <title>Bungin - {item.title}</title>
              </Head>
              <div className="movie-card">
                <div className="container">
                  <a href="#">
                    <img src={item.image} alt={item.title} className="cover" />
                  </a>
                    <PodcastInfoBoxHero
                      title={item.title}
                      subTitle={item.description}
                      pending={item.pending}
                    />
                  <PodcastInfoBoxDescription description={item.description} />
                </div>
              </div>
            </PodcastInfoBoxStyles>
          );
        }}
      </Query>
    );
  }
}

export default PodcastInfoBox;
