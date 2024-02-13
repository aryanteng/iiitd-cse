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
        </div>
      </div>
      {/* Start Button at the bottom */}
    </div>
  );
}

export default OnlineCourseCard;
