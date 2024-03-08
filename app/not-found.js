import Link from 'next/link';
import Button from '@mui/material/Button';

export default function NotFound() {
  return (
    <div className="relative h-screen">
      <img
        src="/images/404-page/background.png"
        alt="404 background image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-body font-bold mb-2 text-white">
          404
        </h1>
        <h2 className="heading-2" style={{ color: '#E0E0E0' }}>
          OOPS!
        </h2>
        <h2 className="heading-2" style={{ color: '#E0E0E0' }}>
          PAGE NOT FOUND
        </h2>
        <Button
          variant="contained"
          href="/"
          className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2"
          style={{ backgroundColor: 'var(--primary-dark)' }}>
          Return Home
        </Button>
      </div>
    </div>
  );
}
