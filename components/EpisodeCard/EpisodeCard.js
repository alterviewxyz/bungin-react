import React, { Component } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

function getExcerpt(str = '', limit) {
  return `${str.substr(0, str.lastIndexOf(' ', limit))}...`;
}

const EpisodeStyles = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Montserrat', helvetica, arial, sans-serif;
  position: relative;
  display: block;
  width: 720px;
  height: 300px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);

  :hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
    transition: all 0.4s;
  }

  .info_section {
    position: relative;
    width: 100%;
    height: 100%;
    background-blend-mode: multiply;
    z-index: 2;
    border-radius: 10px;

    .episode_header {
      position: relative;
      padding: 25px 25px 10px 25px;
      height: fit-content;
      h1 {
        color: black;
        font-weight: 400;
      }
      h4 {
        color: #555;
        font-weight: 400;
      }
      .minutes {
        display: inline-block;
        margin-top: 15px;
        color: #555;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }
      .type {
        display: inline-block;
        color: #959595;
        margin-left: 10px;
      }

      .locandina {
        position: relative;
        float: left;
        margin-right: 20px;
        height: 120px;
        box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
      }
    }

    .episode_desc {
      padding: 5px 25px;
      height: fit-content;
      .text {
        color: #545454;
      }
    }

    .episode_social {
      height: fit-content;
      position: absolute;
      bottom: 0;
      padding-left: 15px;
      padding-bottom: 20px;
      ul {
        list-style: none;
        padding: 0;
        li {
          display: inline-block;
          color: rgba(0, 0, 0, 0.3);
          transition: color 0.3s;
          transition-delay: 0.15s;
          margin: 0 10px;
          :hover {
            transition: color 0.3s;
            color: rgba(0, 0, 0, 0.7);
          }
          i {
            font-size: 19px;
            cursor: pointer;
          }
        }
      }
    }
  }

  .blur_back {
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%;
    right: 0;
    background-size: cover;
    border-radius: 11px;
  }

  @media screen and (min-width: 768px) {
    .episode_header {
      width: 75%;
    }
    .episode_desc {
      width: 65%;
    }
    .info_section {
      background: linear-gradient(to right, #e5e6e6 65%, transparent 100%);
    }
    .blur_back {
      width: 80%;
      background-position: -100% 10% !important;
      background-size: cover !important;
    }
  }

  @media screen and (max-width: 768px) {
    .episode_card {
      width: 95%;
      margin: 70px auto;
      min-height: 350px;
      height: auto;
    }
    .blur_back {
      width: 100%;
      background-position: 50% 50% !important;
    }
    .episode_header {
      width: 100%;
      margin-top: 85px;
    }
    .episode_desc {
      width: 100%;
    }
    .info_section {
      background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
      display: inline-grid;
    }
  }

  .bright_back {
    background: url(${props => props.img});
  }
`;

class EpisodeCard extends Component {
  render() {
    const {
      id,
      slug,
      title,
      description,
      image,
      podcastTitle,
      duration,
      date,
      episode
    } = this.props;
    return (
      <EpisodeStyles img={image} className="episode-card">
        <div className="info_section">
          <div className="episode_header">
            <img
              className="locandina"
              src={image}
              alt={podcastTitle + ' - ' + title}
            />
            <h1>{title}</h1>
            <h4>قسمت چهارم</h4>
            <span className="minutes">{Math.trunc(duration / 60)} min</span>
            <p className="type">Action, Crime, Fantasy</p>
          </div>
          <div className="episode_desc">
            <p className="text">{getExcerpt(description, 200)}</p>
          </div>
          <div className="episode_social">
            <ul>
              <li>
                <i>❤️</i>
              </li>
              <li>
                <i>💬</i>
              </li>
              <li>
                <i>✍️</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back bright_back" />
      </EpisodeStyles>
    );
  }
}

export default EpisodeCard;
