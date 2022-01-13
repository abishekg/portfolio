import React from 'react';

import Image from 'next/image';

type ProfileImageProps = {
  className: string;
  dimension: number;
};

function ProfileImage({ className, dimension }: ProfileImageProps) {
  return (
    <Image
      className={className}
      src="/images/self.png"
      width={dimension}
      height={dimension}
    />
  );
}

export default ProfileImage;
