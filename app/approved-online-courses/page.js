'use client';
import OnlineCourseCard from '@/components/approved-online-courses/OnlineCourseCard';
import { Button } from '@mui/material';
import React from 'react';

export default function ApprovedOnlineCourses() {
  const [courses, setCourses] = React.useState([
    {
      id: 'w23',
      hidden: false,
      term: 'winter 2023',
      courseList: [
        {
          id: 1,
          title: 'Course 2',
          description: 'mollit anim id est laborum.',
        },
        {
          id: 2,
          title: 'Course 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 3,
          title: 'Course 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 4,
          title: 'Course 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 5,
          title: 'Course 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 6,
          title: 'Course 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
  ]);

  const toggleTerm = (termId) => {
    setCourses((prevCourses) =>
      prevCourses.map((term) =>
        term.id === termId ? { ...term, hidden: !term.hidden } : term,
      ),
    );
  };

  return (
    <div>
      <div className="body-2xlarge text-center p-4">
        Approved Online Courses
      </div>

      <div>
        {courses.map((term) => (
          <div className="padding-layout-2" key={term.id}>
            <Button
              variant="contained"
              onClick={() => {
                toggleTerm(term.id);
              }}
              className="bg-primary-dark text-white font-semibold lg:mx-10 mx-5 rounded-xl text-sm">
              {term.term}
            </Button>

            {!term.hidden && (
              <div className="padding-layout-2 grid grid-cols-2 mx-auto gap-2 sm:gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-11/12 max-w-screen-2xl">
                {term?.courseList.map((course) => (
                  <OnlineCourseCard
                    key={course.id}
                    title={course.title}
                    description={course.description}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
