import Carousel from '@/components/admissions/phd/carousel';
import OnlineCourseCard from '@/components/approved-online-courses/OnlineCourseCard';
import { Button } from '@mui/material';

export default function PhdAdmissions() {
  return (
    <div>
      <div className="body-2xlarge font-semibold text-primary-dark text-center mt-4 italic p-4">
        PhD Admissions
      </div>
      <div className="body-small font-semibold text-primary-dark text-center ">
        Explore the possibility of admissions at IIIT Delhi
      </div>
      <Carousel />
    </div>
  );
}
