/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

function getExcerpt(str = '', limit) {
  return `${str.substr(0, str.lastIndexOf(' ', limit))}...`;
}

const StationStyles = styled.div`
  width: 360px;
  height: 150px;
  background: #000000;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);

  .stationcard_left {
    width: 40%;
    height: 150px;
    float: left;
    overflow: hidden;
    background: transparent;

    img {
      width: 100%;
      height: auto;
      border-radius: 10px 0 0 10px;
      -webkit-border-radius: 10px 0 0 10px;
      -moz-border-radius: 10px 0 0 10px;
      position: relative;
      padding-top: 3px;
      padding-bottom: 3px;
    }
  }

  .stationcard_right {
    width: 60%;
    float: left;
    background: #000000;
    height: 150px;
    border-radius: 0 10px 10px 0;
    -webkit-border-radius: 0 10px 10px 0;
    -moz-border-radius: 0 10px 10px 0;

    h2 {
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      text-align: left;
      font-size: 25px;
      margin: 5px 0 0 0;
      padding: 0 0 0 5px;
      letter-spacing: 1px;
    }
  }

  .stationcard_right__details ul {
    list-style-type: none;
    padding: 0 0 0 5px;
    margin: 0px 0 0 0;

    li {
      display: inline;
      color: #e3e3e3;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 14px;
      padding: 0 20px 0 0;
    }
  }

  label:hover ~ label {
    color: #ffed85;
  }
  .stationcard_right__review {
    p {
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-size: 11px;
      padding: 0px 10px 0 5px;
      letter-spacing: 1px;
      margin: 10px 0 10px 0;
      line-height: 15px;
    }

    a {
      text-decoration: none;
      font-family: 'Montserrat', sans-serif;
      color: #ffda00;
      margin: 0;
    }
  }

  .stationcard_right__button {
    padding: 0 0 0 40px;
    margin: 30px 0 0 0;

    a {
      color: #ffda00;
      text-decoration: none;
      font-family: 'Montserrat', sans-serif;
      border: 2px solid #ffda00;
      padding: 10px 10px 10px 40px;
      font-size: 12px;
      background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/COMdoWZ.png);
      background-size: 12px 12px;
      background-repeat: no-repeat;
      background-position: 7% 50%;
      border-radius: 5px;
      transition-property: all;
      transition-duration: 0.5s;

      :hover {
        color: #000000;
        background-color: #ffda00;
        background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/rFQ5dHA.png);
        background-size: 12px 12px;
        background-repeat: no-repeat;
        background-position: 10% 50%;
        cursor: pointer;
        transition-property: all;
        transition-duration: 0.5s;
      }
    }
  }
`;

class StationCard extends Component {
  render() {
    const { id, slug, title, description, image, upvotes } = this.props;
    return (
      <StationStyles className="stationcard">
        <div className="stationcard_left">
          <img alt="" src={image} />
        </div>
        <div className="stationcard_right">
          <h2>{title}</h2>
          <div className="stationcard_right__details">
            <ul>
              <li>15 Subscribers</li>
              {/* <li>50 min~ </li>
              <li>{upvotes} UpVote</li> */}
            </ul>
            <div className="stationcard_right__rating">
              <div className="stationcard_right__rating__stars" />
            </div>
            <div className="stationcard_right__review">
              <p>
                {/* {description}{' '} */}
                <Link as={`/p/${slug}`} href={`/p?slug=${slug}`}>
                  Read more...
                </Link>
              </p>
            </div>
            {/* <div className="stationcard_right__button">
              <a href="">
                Listen to the Show
              </a>
            </div> */}
          </div>
        </div>
      </StationStyles>
    );
  }
}

export default StationCard;
