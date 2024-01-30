/* eslint-disable @next/next/no-img-element */
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

export default function FacultyCard() {
  return (
    <div className="w-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden">
      <img
        src="/images/people/faculty.png"
        className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
        loading="lazy"
        alt="Faculty"
      />
      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary-dark font-semibold body-large">
            A V Subramanyam
          </div>
          <div className="flex gap-1">
            <GoogleIcon className="text-primary-dark body-large" />
            <LinkedInIcon className="text-primary-dark body-large" />
          </div>
        </div>
        <div className="body-small font-semibold">
          Associate Professor (ECE, CSE)
        </div>
        <div className="body-xsmall">
          PhD (2012), Nanyang Technological University, Singapore
        </div>
      </div>
    </div>
  );
}
