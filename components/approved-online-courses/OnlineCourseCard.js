import HourGlass from '@mui/icons-material/HourglassBottomTwoTone';
import ScholarHat from '@mui/icons-material/School';
import { Button } from '@mui/material';

function OnlineCourseCard({ title, description }) {
  return (
    <div className="cards-grid-layout shadow-md hover:shadow-xl bg-white border-solid duration-500 overflow-hidden flex flex-col">
      <div className="flex-grow">
        <div className="relative aspect-w-16 h-2/5">
          <img
            src="/images/approved-online-courses/internetOfThings.jpg"
            className="object-cover border-b-1 w-full h-full opacity-90 brightness-50"
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
        <div className="flex flex-col gap-2 padding-layout-2">
          <div className="body-xsmall line-clamp-5">{description}</div>
          <div className="flex gap-4 items-center justify-between">
            <div
              id="faculty"
              className="text-primary-dark font-semibold body-normal">
              <div className="flex gap-2 items-center">
                <img
                  src="images/people/faculty.png"
                  className="rounded-full cursor-pointer w-1/6"
                />
                <div className="cursor-pointer text-xs">A V Subramanyam</div>
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <div className="flex flex-row">
                <HourGlass className="text-primary-dark body-normal" />
                <span className="body-xsmall flex items-center whitespace-nowrap">
                  12 weeks
                </span>
              </div>
              <div className="flex flex-row">
                <ScholarHat className="text-primary-dark body-normal" />
                <span className="body-xsmall ml-1 flex items-center whitespace-nowrap">
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
        className="py-2 w-full text-center bg-primary-dark text-white font-semibold">
        Start
      </Button>
    </div>
  );
}

export default OnlineCourseCard;
