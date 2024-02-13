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
    <div className="w-full shadow-md hover:shadow-xl bg-white border-solid duration-500 overflow-hidden flex flex-col">
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
      </div>
      {/* Start Button at the bottom */}
    </div>
  );
}

export default OnlineCourseCard;
