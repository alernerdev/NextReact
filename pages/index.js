import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';

const PostLink = (props) => (
        <li>
            <Link href={`/post?title=${props.title}`}>
                <a>{props.title}</a>
            </Link>
        </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink title="Hello next.js"></PostLink>
            <PostLink title="Learn Next.js is awesome"></PostLink>
            <PostLink title="Deploy apps with zeit"></PostLink>
        </ul>
    </Layout>
)
