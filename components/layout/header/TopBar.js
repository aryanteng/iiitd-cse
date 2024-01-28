/* eslint-disable @next/next/no-img-element */
'use client';

import { useMemo } from 'react';

export default function TopBar() {
  const linkStyle = useMemo(
    () =>
      'body-xsmall hover:text-primary-main hover:underline hover:cursor-pointer',
    []
  );

  const links = useMemo(
    () => [
      {
        name: 'Course Catalog',
        link: '/academics/course-catalog',
      },
      {
        name: 'Prospective Students',
        link: '/prospective-students',
      },
      {
        name: 'Labs',
        link: '/research/labs',
      },
      {
        name: 'PhD Admissions',
        link: '/admissions/phd',
      },
      {
        name: 'Events',
        link: 'news-and-events/events',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    []
  );
  return (
    <div className="flex justify-between items-center px-5 py-1">
      <img
        src="/images/iiitd-cse-logo.png"
        alt="Logo"
        className="w-0 md:w-32 lg:w-44"
      />
      <div className="flex gap-4">
        {links.map((link, index) => (
          <div key={link.name} className="flex gap-4 items-center">
            <a key={link.name} href={link.link} className={linkStyle}>
              {link.name}
            </a>
            {index !== links.length - 1 && (
              <span className="bg-primary-main h-4 w-0.5"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
