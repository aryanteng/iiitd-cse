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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-body font-bold mb-2 text-white">
          404
        </h1>
        <h2 className="heading-2 font-semibold" style={{ color: 'white' }}>
          Page Not Found
        </h2>
        <h3 className="body-xlarge font-semibold" style={{ color: 'white' }}>
          Oops! The page you are looking for does not exist
        </h3>
        <Button
          variant="contained"
          href="/"
          className="text-sm md:text-base lg:text-lg xl:text-xl mt-3"
          style={{ backgroundColor: 'var(--primary-dark)' }}>
          Return to Home
        </Button>
      </div>
    </div>
  );
}
