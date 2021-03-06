/* eslint-disable react/react-in-jsx-scope */

import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/batman">
      <a style={linkStyle}>Batman</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
