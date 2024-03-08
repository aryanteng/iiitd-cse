/* eslint-disable @next/next/no-img-element */

import { AddBox } from '@mui/icons-material';

export default function ProjectCard({
  title,
  faculty,
  link,
  fundedBy,
  sanctionAmount,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full">
      <div className="w-full h-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden flex flex-col gap-2 px-2 py-4">
        <div className="text-primary-dark font-semibold body-normal">
          {title}
        </div>
        <div
          id="faculty"
          className="text-primary-dark py-2 font-semibold body-normal">
          <div className="flex gap-2 pt-4 items-center">
            <img
              src="https://iiitd.ac.in/sites/default/files/images/faculty/diptapriyo.jpg"
              className="rounded-full cursor-pointer w-1/6"
            />
            <div className="cursor-pointer body-xsmall">A V Subramanyam</div>
          </div>
        </div>
        <div className="body-xsmall py-2 body-small">
          Funded By :{' '}
          {fundedBy?.map((org, index) => (
            <span key={org}>
              <div className="flex flex-row gap-1" key={org}>
                <div className="">
                  <AddBox className="text-primary-light h-6 w-6"></AddBox>
                </div>
                <div className="body-xsmall text-left pt-1">{org}</div>
              </div>
            </span>
          ))}
        </div>
        <div className="mt-auto py-2 body-xsmall">
          Sanction Amount :{' '}
          <span className="bg-primary-light text-white px-1">
            {sanctionAmount} INR
          </span>
        </div>
      </div>
    </a>
  );
}
