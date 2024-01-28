import { useMemo } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function BottomBar() {
  const linkStyle = useMemo(
    () =>
      'body-xsmall lg:body-small font-medium hover:text-primary-main hover:cursor-pointer',
    []
  );

  const links = useMemo(
    () => [
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'People',
        link: '/people',
      },
      {
        name: 'Academics',
        link: '/academics',
      },
      {
        name: 'Research',
        link: '/research',
      },
      {
        name: 'News & Events',
        link: '/news-and-events',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    []
  );

  return (
    <div className="flex gap-12 justify-center border-t-2 py-1.5">
      {links.map((link, index) => (
        <div key={link.name} className="flex items-center">
          <a key={link.name} href={link.link} className={linkStyle}>
            {link.name}
            <KeyboardArrowDownIcon className="body-normal" />
          </a>
        </div>
      ))}
    </div>
  );
}
