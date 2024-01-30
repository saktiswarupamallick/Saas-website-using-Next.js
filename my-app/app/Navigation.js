
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = ({ user }) => {
  return (
    <div className="fixed top-0 right-0 left-0 mb-20 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image
          src="/assets/logo.png"
          width={40}
          height={40}
          alt="plur logo"
        />
       
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link className='text-white' href={'#'}>Pricing</Link>
          <Link className='text-white' href={'#'}>About</Link>
          <Link className='text-white' href={'#'}>Documentation</Link>
          <Link className='text-white' href={'#'}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={'/agency'}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        
      </aside>
    </div>
  );
};

export default Navigation;
