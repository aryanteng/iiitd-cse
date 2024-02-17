import OnlineCourseCard from '@/components/approved-online-courses/OnlineCourseCard';

export default function ApprovedOnlineCourses() {
  // Example courses data
  const courses = [
    {
      id: 'w23',
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
  ];

  return (
    <div>
      <h1 className="text-[25px] ml-[40px] text-center mt-[50px] font-semibold">
        Approved Online Courses
      </h1>

      <div>
        {courses.map((term) => (
          <div>
            <button className="ml-[4%] mt-[50px] bg-primary-dark text-white py-1 px-3 font-semibold rounded-xl text-sm">
              {term.term}
            </button>

            <div className="mt-4 grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-11/12 max-w-screen-2xl">
              {term?.courseList.map((course) => (
                <OnlineCourseCard
                  key={course.id}
                  title={course.title}
                  description={course.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
