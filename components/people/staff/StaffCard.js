/* eslint-disable @next/next/no-img-element */

export default function StaffCard({
  name,
  designation,
  office,
  image,
  contact,
}) {
  return (
    <div className="w-full shadow-md bg-white border-solid overflow-hidden">
      <img
        src={image}
        className="object-cover border-b-1 w-full relative aspect-w-16 aspect-h-9"
        loading="lazy"
        alt="Faculty"
      />
      <div className="flex flex-col gap-2 p-2">
        <div className="text-primary-main font-semibold body-normal">
          {name}
        </div>
        <div className="body-small font-semibold">{designation}</div>
        <div className="body-xsmall">{office}</div>
        <div className="body-xsmall">{contact}</div>
      </div>
    </div>
  );
}
