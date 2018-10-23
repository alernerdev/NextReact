/* eslint-disable react/react-in-jsx-scope */

import Link from 'next/link';
import Layout from '../components/Layout';

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
/*
  the as property hides the query string business on the browser URL
*/
const MaskedURLLink = props => (
  <li>
    <Link
      as={`/p/${props.id}`}
      href={`/post?title=${props.title}`}
    >
      <a>{props.title}</a>
    </Link>
  </li>
);
/* eslint-enable jsx-a11y/anchor-is-valid */

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello next.js" />
      <MaskedURLLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with zeit" />
    </ul>
  </Layout>
);

export default Index;
