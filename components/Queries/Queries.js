import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;

const ADD_PODCAST_FROM_URL_MUTATION = gql`
  mutation ADD_PODCAST_FROM_URL_MUTATION($rss: String!) {
    addPodcastFromURL(rss: $rss) {
      id
      slug
      rss
    }
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
      # subscribers {
      # }
      episodesId {
        id
        mp3
        episodeNubmer
        title
        description
        image
        tag {
          id
          title
        }
        upvotes
        downvotes
        duration
      }
      latestEpisode
      category {
        id
      }
      tag {
        id
        title
      }
      copyright {
        id
      }
      downvotes
      website
      author {
        id
      }
    }
  }
`;

const ALL_PODCAST_STATIONS_QUERY = gql`
  query ALL_PODCAST_STATIONS_QUERY(
    $skip: Int = 0
    $first: Int = 10
    $pending: Boolean = true
  ) {
    podcastStations(
      first: $first
      skip: $skip
      orderBy: createdAt_DESC
      where: { pending: $pending }
    ) {
      id
      slug
      title
      description
      image
    }
  }
`;

const CREATE_PODCAST_EPISODE = gql`
  mutation CREATE_PODCAST_EPISODE(
    $mp3: String!
    $title: String!
    $description: String!
    $image: String
    $episodeNubmer: Int!
    $publishDate: DateTime!
    $duration: Int!
    $podcastStation: String!
  ) {
    createPodcastEpisode(
      data: {
        mp3: $mp3
        title: $title
        description: $description
        episodeNubmer: $episodeNubmer
        image: $image
        publishDate: $publishDate
        duration: $duration
      }
      podcastStation: $podcastStation
    ) {
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

const SINGLE_PODCAST_STATION_WITH_EPISODES_ID_QUERY = gql`
  query SINGLE_PODCAST_STATION_WITH_EPISODES_ID_QUERY($id: ID!) {
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

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const UPDATE_PODCAST_STATION = gql`
  mutation UPDATE_PODCAST_STATION(
    $id: ID!
    $slug: String
    $rss: String
    $title: String
    $subtitle: String
    $description: String
    $image: String
    $largeimage: String
    $language: String
    $website: String
  ) {
    updatePodcastStation(
      id: $id
      data: {
        slug: $slug
        rss: $rss
        title: $title
        subtitle: $subtitle
        description: $description
        image: $image
        largeImage: $largeimage
        language: $language
        website: $website
      }
    ) {
      id
      title
      description
      slug
    }
  }
`;

export {
  CURRENT_USER_QUERY,
  ADD_PODCAST_FROM_URL_MUTATION,
  SINGLE_PODCAST_STATION_QUERY,
  ALL_PODCAST_STATIONS_QUERY,
  CREATE_PODCAST_EPISODE,
  UPDATE_PODCAST_STATION,
  SINGLE_PODCAST_STATION_WITH_EPISODES_ID_QUERY,
  SIGNIN_MUTATION,
  SIGN_OUT_MUTATION,
  SIGNUP_MUTATION
};
