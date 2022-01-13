import React from 'react';

import ProfileImage from './ProfileImage';
import ThemeIcon from './ThemeIcon';

const Header = () => {
  return (
    <header className="fixed w-[48rem] h-16 flex justify-between items-center p-6 mt-0">
      <div className="border border-1 border-gray-800 rounded-full p-1 w-[4rem] h-[4rem]">
        <ProfileImage
          className="rounded-full hover:animate-spin"
          dimension={75}
        />
      </div>
      <ThemeIcon />
    </header>
  );
};

export default Header;
