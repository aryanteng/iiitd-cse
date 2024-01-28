export default function Banner() {
  return (
    <div className="banner-layout flex flex-col md:flex-row md:items-center gap-5 sm:gap-12">
      <div className="flex flex-col gap-2">
        <div className="body-3xlarge text-primary-dark font-semibold">
          Department of Computer Science and Engineering
        </div>
        <img
          src="/images/iiitd-logo.png"
          alt="Logo"
          className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-2/3"
        />
      </div>
      <img
        src="/images/qs-ranking.png"
        alt="Ranking"
        className="flex self-center w-full md:w-1/2 relative"
      />
    </div>
  );
}
