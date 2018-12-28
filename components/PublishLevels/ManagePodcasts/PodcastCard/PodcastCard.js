import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import styled from 'styled-components';
import Error from '../../../ErrorMessage';

const PodcastCardStyles = styled.div`
  transform: translate(0%, 0%);
  width: 300px;
  height: 300px;
  background: #000;
  box-shadow: 0 3px 5px rgba(160, 160, 160, 0.1);

  .image {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      transition: 0.5s;
    }
  }

  :hover .image img {
    opacity: 0.5;
    transform: translateX(30%); /*100%*/
  }

  .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%; /*100%*/
    height: 100%;
    background: #ffc107;
    transition: 0.5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);

    .center {
      padding: 20px;
      text-align: center;
      background: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .center h1 {
      margin: 0;
      padding: 0;
      color: #ff3636;
      line-height: 20px;
      font-size: 20px;
      text-transform: uppercase;
    }

    .center h1 span {
      font-size: 14px;
      color: #262626;
    }

    .center p {
      margin: 10px 0;
      padding: 0;
      color: #262626;
    }
  }

  :hover .details {
    transform: perspective(2000px) rotateY(0deg);
  }
`;

class PodcastCard extends Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { id, slug, image, title, description } = this.props.item;
    return (
      <PodcastCardStyles>
        <Link as={`/p/${slug}`} href={`/singlePodcastStation?slug=${slug}`}>
          <>
            <div className="image">
              <img src={image} alt={title} />
            </div>

            <div className="details">
              <div className="center">
                <h1>{title}</h1>
                <p>{description}</p>
                <Link
                  as={`/editPodcast/${slug}`}
                  href={`/editPodcastStation?slug=${slug}`}
                >
                  <a>Edit</a>
                </Link>
                <Link href={`/publish/step1?id=${id}`}>
                  <a>Publish</a>
                </Link>
              </div>
            </div>
          </>
        </Link>
      </PodcastCardStyles>
    );
  }
}

export default PodcastCard;
