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



// принимает строку и лимит после скольки знаков искать пробел и обрезать
function getExcerpt( str = "", limit ){
  return str.substr( 0, str.lastIndexOf( ' ', limit ) ) + '...';
}


const EpisodeBoxStyles = styled.div`
  background: #fff;
  margin: 4em auto;
  width: 90%;
  max-width: 496px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  
  aside {
    position: relative;

    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      max-width: 100%;
      height: auto;
      vertical-align: bottom;
    }

    .button {
      background: #57abf2;
      display: inline-block;
      position: absolute;
      top: 80%;
      right: 3%;
      width: 4.0625em;
      height: 4.0625em;
      border-radius: 4.0625em;
      line-height: 4.0625em;
      text-align: center;

      .icon {
        vertical-align: middle;
      }
    }
  }

  article {
    padding: 1.25em 1.5em;

    ul {
      list-style: none;
      margin: 0.5em 0 0;
      padding: 0;
      li {
        display: inline-block;
        margin-left: 1em;
        line-height: 1em;
        &:first-child {
          margin-left: 0;
        }

        .icon {
          vertical-align: bottom;
        }

        span:nth-of-type(2) {
          margin-left: 0.5em;
          font-size: 0.8em;
          font-weight: 300;
          vertical-align: middle;
          color: #838689;
        }
      }
    }

    h2,
    h3 {
      margin: 0;
      font-weight: 300;
    }

    h2 {
      font-size: em(28);
      color: #222222;
    }

    h3 {
      font-size: em(15);
      color: #838689;
    }

    p {
      margin: 1.25em 0;
      font-size: em(13);
      font-weight: 400;
      color: #222222;

      span {
        font-weight: 700;
        color: #000000;
      }
    }

    .ingredients {
      margin: 2em 0 0.5em;
    }
  }

  .icon {
    display: inline;
    display: inline-block;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/recipe-card-icons.svg);
    background-repeat: no-repeat;
  }
  .icon-play{
    background-position: 0 -58px;
    width: 21px;
    height: 26px;
  }

  .icon-calories {
    background-position: 0 0;
    width: 16px;
    height: 19px;
  }
  
  .icon-level{
    background-position: 0 -39px;
    width: 16px;
    height: 19px;
  }

  .icon-clock {
    background-position: 0 -19px;
    width: 20px;
    height: 20px;
  }

  .icon-users {
    background-position: 0 -84px;
    width: 18px;
    height: 18px;
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
    }
  }
`;

class PodcastEpisodeCard extends Component {
  render() {
    return (
      // <Query
      //   query={SINGLE_PODCAST_STATION_QUERY}
      //   variables={{
      //     slug: this.props.slug
      //   }}
      // >
      //   {({ error, loading, data }) => {
      //     if (error) return <Error error={error} />;
      //     if (loading) return <p>Loading...</p>;
      //     if (!data.podcastStation)
      //       return <p>No Podcast Found for {this.props.id}</p>;
      //     const item = data.podcastStation;
      //     return (
              <EpisodeBoxStyles className="recipe-card">
                <aside>
                  <img
                    src={this.props.image}
                    alt={this.props.title}
                  />

                  <a href="#" className="button">
                    <span className="icon icon-play" />
                  </a>
                </aside>

                <article>
                  <h2>{this.props.title}</h2>
                  <h3>{this.props.podcastTitle}</h3>

                  <ul>
                    <li>
                      <span className="icon icon-users" />
                      <span>1</span>
                    </li>
                    <li>
                      <span className="icon icon-clock" />
                      <span>{this.props.duration/60} minutes</span>
                    </li>
                    <li>
                      <span className="icon icon-level" />
                      <span>{this.props.date}</span>
                    </li>
                    <li>
                      <span className="icon icon-calories" />
                      <span>Episode {this.props.episode}</span>
                    </li>
                  </ul>

                  <p>
                    {getExcerpt(this.props.description,200)}
                  </p>

                  <p className="ingredients">
                    <span>Tags:&nbsp;</span>
                  </p>
                </article>
              </EpisodeBoxStyles>
      //     );
      //   }}
      // </Query>
    );
  }
}

export default PodcastEpisodeCard;
