import { useMemo } from 'react';
import BasicMenu from './BasicMenu';

export default function BottomBar() {
  const links = useMemo(
    () => [
      {
        name: 'Academics',
        menuItems: [
          {
            name: 'BTech (CSE) Program',
            link: 'https://www.iiitd.ac.in/academics/btech/cse',
          },
          {
            name: 'BTech (CSAI) Program',
            link: 'https://www.iiitd.ac.in/academics/btech/csai',
          },
          {
            name: 'MTech Program',
            link: 'https://www.iiitd.ac.in/academics/mtech/cse',
          },
          {
            name: 'PhD Program',
            link: 'https://www.iiitd.ac.in/academics/phd',
          },
          {
            name: 'Guidelines',
            link: 'https://www.iiitd.ac.in/academics/resources',
          },
          { name: 'Approved Online Courses', link: '/approved-online-courses' },
        ],
      },
      {
        name: 'Academics',
      },
      {
        name: 'Academics',
      },
      {
        name: 'Academics',
      },
      {
        name: 'Academics',
      },
      {
        name: 'Academics',
      },
      {
        name: 'Academics',
      },
    ],
    []
  );

  return (
    <div className="flex gap-12 justify-center border-y-2 py-1.5">
      {links.map((link) => (
        <BasicMenu
          key={link.name}
          name={link.name}
          menuItems={link.menuItems}
        />
      ))}
    </div>
  );
}
