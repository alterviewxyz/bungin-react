import Link from 'next/link';

const Home = props => (
    <>
        <Link as="/p/radio-marz" href="/p?slug=radio-marz">
            <p>A Sample Podcast!</p>
        </Link>
    </>
);

export default Home;
