import FacultyCard from '@/components/people/faculty/FacultyCard';

export default function Faculty() {
  return (
    <div className="grid grid-cols-2 mx-auto py-4 lg:py-5 gap-2 sm:gap-4 lg:gap-5 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 w-11/12 max-w-screen-2xl">
      {Array.from({ length: 40 }).map((faculty, index) => (
        <FacultyCard key={index} />
      ))}
    </div>
  );
}
