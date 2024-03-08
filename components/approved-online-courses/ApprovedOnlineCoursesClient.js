'use client';
import OnlineCourseCard from '@/components/approved-online-courses/OnlineCourseCard';
import { Button } from '@mui/material';
import React from 'react';

export default function ApprovedOnlineCoursesClient({ key, Courses }) {
  // console.log(labs);

  // console.log(structuredData);
  const [courses, setCourses] = React.useState(Courses);
  const toggleTerm = (termId) => {
    setCourses((prevCourses) =>
      prevCourses.map((term) =>
        term.id === termId ? { ...term, hidden: !term.hidden } : term,
      ),
    );
  };

  return (
    <div>
      <div className="body-2xlarge font-semibold text-primary-dark text-center p-4">
        Approved Online Courses
      </div>

      <div>
        {courses.map((term) => (
          <div className="padding-layout-2" key={term.id}>
            <div className="w-11/12 max-w-screen-2xl mx-auto">
              <Button
                variant="contained"
                onClick={() => {
                  toggleTerm(term.id);
                }}
                className="bg-primary-dark text-white w-1/4 font-semibold text-sm">
                {term.term}
              </Button>
            </div>
            {!term.hidden && (
              <div className="padding-layout-2 grid grid-cols-2 mx-auto gap-2 sm:gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-11/12 max-w-screen-2xl">
                {term?.courseList.map((course) => (
                  <OnlineCourseCard key={course.id} {...course} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
