import Link from 'next/link';

export default function PubCard({ title, description, year, authors }) {
  return (
    <Link
      href={'#'}
      className="w-full shadow-md hover:shadow-xl bg-white border-solid cursor-pointer duration-500 overflow-hidden">
      <div className="flex flex-col gap-2 px-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary-dark font-semibold body-normal">
            {title}
          </div>
        </div>
        <div className="body-small font-semibold">{description}</div>
        <div className="body-xsmall">{authors.join(', ')}</div>
      </div>
    </Link>
  );
}
