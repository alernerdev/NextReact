/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
const Batman = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Batman.getInitialProps = async function getInitialProps() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  /* eslint-disable no-console */
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Batman;
