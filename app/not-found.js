/* eslint-disable @next/next/no-img-element */
import Button from '@mui/material/Button';

export default function NotFound() {
  return (
    <div className="relative h-screen">
      <img
        src="/images/404-page/background.png"
        alt="404"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center gap-4">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white">
            404
          </h1>
          <h2 className="heading-2 font-semibold">Page Not Found</h2>
          <h3 className="body-large font-semibold">
            Oops! The page you are looking for does not exist.
          </h3>
        </div>
        <Button
          variant="contained"
          href="/"
          className="w-fit body-large bg-primary-main">
          Return to Home Page
        </Button>
      </div>
    </div>
  );
}
