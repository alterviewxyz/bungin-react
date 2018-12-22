import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Button from '../elements/Button';
import IconWrapper from '../elements/IconWrapper/IconWrapper';
import { CURRENT_USER_QUERY } from '../Queries/User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => (
  <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
    {signout => 
      <Button onClick={signout}>
        <IconWrapper size={14} fill="transparent" stroke="#666" mr={1}>
          <FontAwesomeIcon icon={faSignOutAlt} /> 
        </IconWrapper>
        Log out
      </Button>
    }
  </Mutation>
);
export default Signout;