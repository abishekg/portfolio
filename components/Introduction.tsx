import React from 'react';
import Image from 'next/image';

const Introduction = () => {
  return (
    <div className="mt-12 p-6 w-[48rem]">
      <div className="flex flex-col justify-between items-center">
        <div className="border border-2 border-red-50 rounded-full p-2">
          <Image
            className="rounded-full border hover:animate-spin"
            src="/images/hamburger.svg"
            width={150}
            height={150}
          />
        </div>
        <div className="text-4xl mt-4">Abishek G</div>
        <div className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          at corporis eum eveniet, itaque magnam natus neque omnis praesentium
          quas quasi quos ratione repellendus sapiente, tempora tenetur,
          veritatis! Necessitatibus, pariatur.
        </div>
      </div>
    </div>
  );
};

export default Introduction;
