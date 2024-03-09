/* eslint-disable @next/next/no-img-element */
'use client';

import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import CustomDrawer from './CustomDrawer';

export default function TopBar() {
  const linkStyle = useMemo(
    () => 'body-xsmall hover:text-primary-main hover:cursor-pointer',
    [],
  );

  const links = useMemo(
    () => [
      {
        name: 'Course Catalog',
        link: '/academics/course-catalog',
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
    [],
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex justify-between items-center px-5 py-1 border-b-2 md:border-none">
      <a href="/">
        <img
          src="/images/iiitd-cse-logo.png"
          alt="Logo"
          className="w-28 md:w-32 lg:w-36"
        />
      </a>
      <div className="hidden md:flex gap-4">
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
      <IconButton
        className="md:hidden p-1"
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}>
        <Menu className="text-2xl text-primary-dark" />
      </IconButton>
      <CustomDrawer
        open={isDrawerOpen}
        anchor={'right'}
        toggleDrawer={handleDrawerToggle}
      />
    </div>
  );
}
