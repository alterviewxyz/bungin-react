import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faHeart,
  faEnvelope,
  faShareAlt
} from '@fortawesome/free-solid-svg-icons';
import IconWrapper from '../elements/IconWrapper/IconWrapper';
import Error from '../ErrorMessage';
// import UserInfoBoxHero from './UserInfoBoxHero';
// import UserInfoBoxDescription from './UserInfoBoxDescription';
// import UserInfoBoxEpisodeCards from './UserInfoBoxEpisodeCards';
import { USER_QUERY } from '../Queries/Queries';

class UserInfoBox extends Component {
  render() {
    const { username } = this.props;
    return (
      <Query query={USER_QUERY} variables={{ username }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.user) return <p>No User Found for @{username}</p>;
          const {
            id,
            email,
            name,
            permissions,
            subscribes,
            owns,
            votes,
            followerCount,
            folloingCount,
            following
          } = data.user;
          return (
            <>
              <Head>
                <title>Bungin - {name}</title>
              </Head>
              <div>
                email: {email}
                <br />
                name: {name}
                <br />
                subscribes: {subscribes}
                <br />
                their podcasts: {owns}
                <br />
                followers: {followerCount}
                <br />
                followings: {folloingCount}
                <br />
              </div>
            </>
          );
        }}
      </Query>
    );
  }
}

export default UserInfoBox;
