/* eslint-disable @next/next/no-img-element */
import HourGlass from '@mui/icons-material/HourglassBottomTwoTone';
import ScholarHat from '@mui/icons-material/School';
import { Button } from '@mui/material';

function OnlineCourseCard({ title, description }) {
  return (
    <div className="shadow-md hover:shadow-xl bg-white border-solid duration-500 overflow-hidden flex flex-col">
      <div className="flex-grow">
        <div className="relative h-auto">
          <img
            src="/images/approved-online-courses/internetOfThings.jpg"
            className="object-cover h-48 border-b-1 w-full opacity-90 brightness-50"
            loading="lazy"
            alt="IOT"
          />
          {/* Overlay Button */}
          <div className="absolute cursor-default bottom-2 right-2 bg-primary-dark text-white py-1 px-3 font-semibold rounded-xl text-sm">
            NPTEL
          </div>
          <h1 className="absolute top-1/3 left-2 text-white font-bold text-3xl">
            Internet of
            <br />
            things
          </h1>
        </div>
        <div className="flex flex-col gap-2 px-4 py-2">
          <div className="text-xs leading-5 line-clamp-5">{description}</div>
          <div className="flex gap-4 items-center justify-between">
            <div
              id="faculty"
              className="text-primary-dark py-2 font-semibold body-normal">
              <div className="flex gap-2 items-center">
                <img
                  src="images/people/faculty.png"
                  className="rounded-full cursor-pointer w-1/6"
                />
                <div className="cursor-pointer text-xs">A V Subramanyam</div>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="flex flex-row">
                <HourGlass className="text-primary-dark body-normal" />
                <span className="text-xs flex items-center whitespace-nowrap">
                  12 weeks
                </span>
              </div>
              <div className="flex flex-row">
                <ScholarHat className="text-primary-dark body-normal" />
                <span className="text-xs ml-1 flex items-center whitespace-nowrap">
                  17852
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Button at the bottom */}
      <Button
        variant="contained"
        className="w-full text-center bg-primary-dark text-white font-semibold">
        Start
      </Button>
    </div>
  );
}

export default OnlineCourseCard;
