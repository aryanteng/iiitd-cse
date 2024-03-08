/* eslint-disable @next/next/no-img-element */

export default function ProjectCard({
  title,
  faculty,
  link,
  year,
  fundedBy,
  sanctionAmount,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full">
      <div className="w-full h-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden">
        <div className="flex flex-col gap-2 px-2 py-4">
          <div className="text-primary-dark font-semibold body-large">
            {title}
          </div>
          <div className="body-xsmall">{title}</div>
        </div>
      </div>
    </a>
  );
}
