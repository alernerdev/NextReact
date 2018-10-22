/* eslint-disable react/react-in-jsx-scope */

import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>this is the blog post content</p>
  </div>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
