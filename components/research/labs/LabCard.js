/* eslint-disable @next/next/no-img-element */

export default function LabCard() {
  return (
    <a
      href="https://sites.google.com/view/vinayakabrol/cross-caps-laboratory"
      target="_blank"
      rel="noopener noreferrer">
      <div className="w-full shadow-md hover:shadow-xl bg-white border-solid border-1 rounded-lg cursor-pointer duration-500 overflow-hidden pb-2">
        <img
          src="/images/labs/cross-caps-lab.png"
          className="object-cover border-b-1 w-full relative"
          loading="lazy"
          alt="Lab Logo"
        />
        <div className="flex flex-col gap-2 p-2">
          <div className="text-primary-dark font-semibold body-large">
            Cross Caps Lab
          </div>
          <div className="body-xsmall">
            Cross-Caps Laboratory as a part of the Infosys Centre for Artificial
            Intelligence focuses on design, and analysis of numerical algorithms
            for information inspired applications in signal processing and
            machine learning. Members of our research lab are associated with
            one of the sub-groups namely Sound Cube Group: Inverse problems in
            speech and audio processing; Information Intelligence Group:
            Developing efficient and scalable machine learning algorithms;
            Healthcare Informatics Group: Building acute and critical care
            solutions.
          </div>
        </div>
      </div>
    </a>
  );
}
