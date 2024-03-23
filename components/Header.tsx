import { INavLinks } from '@/types';
import { LOGO_URL } from '@/utils/constants';
import { navLinks } from '@/utils/helper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex py-5 sm:px-10 px-4 justify-between items-center bg-gray-100 ">
      <Link href={'/'} className="cursor-pointer">
        <Image src={LOGO_URL} alt={'LOGO'} width={100} height={50} />
      </Link>
      <ul className="flex sm:gap-10 gap-5">
        {navLinks.map((el: INavLinks) => (
          <li key={el.title} className="font-semibold text-[20px] hover:text-blue-600">
            <Link href={el.path} target={el.title === 'About Us' ? '_blank' : '_self'}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
