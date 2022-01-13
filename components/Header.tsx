import React from 'react';

import Link from 'next/link';
import ThemeIcon from './ThemeIcon';

const Header = () => {
  return (
    <header className="fixed flex justify-between items-center text-left px-4 md:px-12 h-12">
      <nav>
        <Link href="#">
          <div className="text-2xl text-white">Abishek Goutham</div>
        </Link>
        <ThemeIcon />
      </nav>
    </header>
  );
};

export default Header;
