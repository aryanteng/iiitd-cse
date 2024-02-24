function LocationMap({ src }) {
  return (
    <div
      className="w-full mx-auto relative mb-0"
      style={{ paddingTop: '25.00%' }}>
      <iframe
        src={src}
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}
export default LocationMap;
