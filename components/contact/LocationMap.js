function LocationMap({ src }) {
  const mapStyles = {
    border: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  };

  const containerStyles = {
    paddingTop: '30%',
    position: 'relative',
    width: '100%',
  };

  return (
    <div style={containerStyles}>
      <iframe
        src={src}
        style={mapStyles}
        allowFullScreen
        aria-hidden="false"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default LocationMap;
