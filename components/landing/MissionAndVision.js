/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';

export default function MissionAndVision({ name, description, isReverse }) {
  return (
    <div>
      <div
        className={
          'banner-layout flex md:flex-row flex-col justify-between items-center md:gap-10 gap-5' +
          (isReverse ? ' md:flex-row-reverse' : '')
        }>
        <img
          src={`/images/landing/${name}.png`}
          alt="Vision&Mission"
          className="flex self-center w-full md:w-1/2 relative"
        />
        <div className="flex flex-col gap-4">
          <div className="body-2xlarge font-semibold">{name}</div>
          <div className="body-xsmall">{description}</div>
        </div>
      </div>
    </div>
  );
}

MissionAndVision.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReverse: PropTypes.bool,
};

MissionAndVision.defaultProps = {
  isReverse: false,
};
