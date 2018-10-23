/* eslint-disable react/react-in-jsx-scope */

import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
/* eslint-enable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/anchor-is-valid */
// the as property hides the query string business on the browser URL
const Batman = (props) => {
  return (
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
};

export default Batman;
