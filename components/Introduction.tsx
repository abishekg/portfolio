import React from 'react';

import Image from 'next/image';
import ProfileImage from './ProfileImage';

const Introduction = () => {
  return (
    <div className="mt-36 p-6 w-[48rem]">
      <div className="flex flex-col justify-between items-center">
        <div className="text-4xl mt-4">Hi. I&apos;m Abishek G.</div>
        <div className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          at corporis eum eveniet, itaque magnam natus neque omnis praesentium
          quas quasi quos ratione repellendus sapiente, tempora tenetur,
          veritatis! Necessitatibus, pariatur.
        </div>
        <span className="before:animate-extend text-5xl" />
      </div>
    </div>
  );
};

export default Introduction;
