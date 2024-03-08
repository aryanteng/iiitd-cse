import OnlineCourseCard from '@/components/approved-online-courses/OnlineCourseCard';
import { Button } from '@mui/material';
import React from 'react';
import { getSheetData } from '@/app/api/sheets';
import { normalizeSheetData } from '@/utils/normaliseSheetData';
import ApprovedOnlineCoursesClient from '@/components/approved-online-courses/ApprovedOnlineCoursesClient';
import { Key } from '@mui/icons-material';

export default async function ApprovedOnlineCourses() {
  const spreadsheetId = '1cYPbswNr4ZvvQhzkfIOaM9Q75cSDP1CSl_JELvmA4iQ';
  const range = 'Online-Courses';

  const data = await getSheetData(spreadsheetId, range);
  const labs = normalizeSheetData(data);

  // console.log(labs);

  const structuredCourses = Object.values(
    labs.reduce((acc, course) => {
      const { term } = course;
      const id = term.split(' ').join('').toLowerCase();
      const hidden = false;

      if (!acc[id]) {
        acc[id] = {
          id,
          hidden,
          term,
          courseList: [course],
        };
      } else {
        acc[id].courseList.push(course);
      }

      return acc;
    }, {}),
  );

  // console.log(structuredCourses);

  const toggleTerm = (termId) => {
    setCourses((prevCourses) =>
      prevCourses.map((term) =>
        term.id === termId ? { ...term, hidden: !term.hidden } : term,
      ),
    );
  };

  return (
    <ApprovedOnlineCoursesClient
      Key="OnlineCourceClient"
      Courses={structuredCourses}
    />
  );
}
