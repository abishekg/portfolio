// @ts-nocheck
import React from 'react';

import Image from 'next/image';

import useDarkMode from '../utils/useDarkMode';

const ThemeIcon = () => {
  const [nextTheme, setNextTheme] = useDarkMode();

  return (
    <>
      {nextTheme === 'dark' ? (
        <div onClick={() => setNextTheme('dark')}>
          <Image
            src="/images/sun-1.svg"
            alt={'Light Theme'}
            width={25}
            height={25}
          />
        </div>
      ) : (
        <div onClick={() => setNextTheme('light')}>
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
