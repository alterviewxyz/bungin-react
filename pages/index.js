import React from 'react';
import Link from 'next/link';
import ListPodcasts from '../components/ListPodcasts';

const Home = props => (
  <>
    {/* <ListPodcasts /> */}
    <Link as="/p/radio-marz" href="/p?slug=radio-marz">
      <p>A Sample Podcast!</p>
    </Link>
  </>
);

export default Home;
