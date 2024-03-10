/* eslint-disable @next/next/no-img-element */
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

export default function FacultyCard({
  'faculty image': image,
  name,
  designation,
  education,
  'google scholar': googleScholar,
  linkedin,
}) {
  return (
    <div className="w-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden">
      <img
        src={image || '/images/people/faculty.png'}
        className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
        loading="lazy"
        alt="Faculty"
      />
      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary-main font-semibold body-normal">
            {name}
          </div>
          <div className="flex gap-1">
            {googleScholar && (
              <a href={googleScholar} target="_blank" rel="noopener noreferrer">
                <GoogleIcon className="text-primary-main body-normal" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="text-primary-main body-normal" />
              </a>
            )}
          </div>
        </div>
        <div className="body-small font-semibold">{designation}</div>
        <div className="body-xsmall">{education}</div>
      </div>
    </div>
  );
}
