import HourGlass from '@mui/icons-material/HourglassBottomTwoTone';
import ScholarHat from '@mui/icons-material/School';

function OnlineCourseCard({ title, description }) {
  // Helper function to truncate description to 100 words
  const truncateDescription = (text) => {
    const words = text.split(' ');
    if (words.length > 50) {
      return words.slice(0, 50).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="w-full mt-2 shadow-md hover:shadow-xl bg-white border-solid duration-500 overflow-hidden flex flex-col">
      <div className="flex-grow">
        <div className="relative w-full aspect-w-16 h-[40%]">
          <img
            src="/images/approved-online-courses/internetOfThings.jpg"
            className="object-cover border-b-1 w-full h-full opacity-90 brightness-50"
            loading="lazy"
            alt="IOT"
          />
          {/* Overlay Button */}
          <button className="absolute cursor-default bottom-2 right-2 bg-primary-dark text-white py-1 px-3 font-semibold rounded-xl text-sm">
            NPTEL
          </button>
          <h1 className="absolute top-[30%] left-[4px] text-white py-1 px-3 font-bold text-3xl">
            Internet of
            <br />
            things
          </h1>
        </div>
        <div className="flex flex-col gap-2 px-2 py-2">
          <div className="body-xsmall">{truncateDescription(description)}</div>
          <div className="flex mt-[2%] items-center justify-between">
            <div className="text-primary-dark mt-1 font-semibold body-normal">
              <div className="flex">
                <img
                  src="images/people/faculty.png"
                  className="rounded-full cursor-pointer h-[15%] w-[15%]"
                />
                <div className="mt-2 ml-2 cursor-pointer text-xs">
                  A V Subramanyam
                </div>
              </div>
            </div>
            <div className="flex gap-1 flex-col mt-1 right-[15px]">
              <div className="flex flex-row mr-5">
                <HourGlass className="text-primary-dark body-normal" />
                <span className="text-[8px] flex justify-center items-center ml-1 whitespace-nowrap">
                  12 weeks
                </span>
              </div>
              <div className="flex flex-row mr-5">
                <ScholarHat className="text-primary-dark body-normal" />
                <span className="text-[8px] flex justify-center items-center ml-1 whitespace-nowrap">
                  17852
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Button at the bottom */}
      <button className="mt-1 py-2 w-full text-center bg-primary-dark text-white font-semibold">
        Start
      </button>
    </div>
  );
}

export default OnlineCourseCard;
