import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a>home</a>
    </Link>
    <Link href="/sell">
      <a>sell</a>
    </Link>
  </nav>
);

export default Nav;
