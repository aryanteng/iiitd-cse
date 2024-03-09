import { AddBox } from '@mui/icons-material';
import { Chip } from '@mui/material';

export default function ProjectCard({
  key,
  title,
  faculty,
  faculty_image,
  funded_by,
  year,
  sanction_amount,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full">
      <div className="w-full h-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden flex flex-col gap-2 px-2 py-4">
        <div className="text-primary-dark h-2/5 font-semibold body-normal">
          {title}
        </div>
        <div className="text-primary-dark font-semibold text-right body-small">
          {year}
        </div>
        <div
          id="faculty"
          className="text-primary-dark py-2 font-semibold body-normal">
          <div className="flex gap-2 pt-4 items-center">
            <img
              src={faculty_image}
              className="rounded-full cursor-pointer w-1/6"
            />
            <div className="cursor-pointer body-xsmall">{faculty}</div>
          </div>
        </div>
        <div className="body-xsmall py-2 body-small">
          Funded By :{' '}
          <div className="flex flex-row gap-2 py-1">
            {funded_by?.map((org, index) => (
              <Chip
                label={org}
                title={org}
                className="body-xsmall w-2/6 font-semibold bg-primary-dark text-white text-left overflow-hidden truncate cursor-pointer hover:overflow-visible hover:whitespace-normal"
              />
            ))}
          </div>
        </div>
        <div className="mt-auto py-2 body-xsmall">
          Sanction Amount :{' '}
          <Chip
            label={sanction_amount + ' INR'}
            className="body-xsmall font-semibold bg-primary-dark text-white text-left"
          />
        </div>
      </div>
    </a>
  );
}
