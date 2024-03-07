/* eslint-disable @next/next/no-img-element */

export default function LabCard({ name, description, image, link }) {
  return (
    <a
      href="https://sites.google.com/view/vinayakabrol/cross-caps-laboratory"
      target="_blank"
      rel="noopener noreferrer">
      <div className="w-full h-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden">
        <img
          src={image}
          className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
          loading="lazy"
          alt="Lab Logo"
        />
        <div className="flex flex-col gap-2 px-2 py-4">
          <div className="text-primary-dark font-semibold body-large">
            {name}
          </div>
          <div className="body-xsmall">{description}</div>
        </div>
      </div>
    </a>
  );
}
