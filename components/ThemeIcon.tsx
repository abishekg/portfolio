import React from 'react';

import Image from 'next/image';

import useDarkMode from '../utils/useDarkMode';

const ThemeIcon = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      {colorTheme === 'dark' ? (
        <div onClick={() => setTheme('dark')}>
          <Image
            src="/images/sun-1.svg"
            alt={'Light Theme'}
            width={50}
            height={50}
          />
        </div>
      ) : (
        <div onClick={() => setTheme('light')}>
          <Image
            src="/images/moon-1.svg"
            alt={'Dark Theme'}
            width={25}
            height={25}
          />
        </div>
      )}
    </>
  );
};

export default ThemeIcon;
