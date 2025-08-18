import React from 'react';
import Image from 'next/image';
import imgixLoader from '@/lib/imgix/loader';
import { AIGirlfriend } from '@prisma/client';
import Link from 'next/link';

interface Props {
  user: AIGirlfriend;
}

const AiGirlfriendCard = ({ user }: Props) => {
  const imageUrl = imgixLoader({
    src: user.profileImageId || '',
    width: 400,
    quality: 80,
  });

  return (
    <Link href={`/${user.slug}`} prefetch={true}>
      <div className="flex flex-col">
        <div className="relative aspect-[3/4] w-full  overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={user.pseudo}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 ">
            <span className="text-base font-semibold font-karla text-white">
              {user.pseudo}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AiGirlfriendCard;
