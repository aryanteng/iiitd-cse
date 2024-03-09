function AddressInfo({ address }) {
  const addressLines = address.split(',,');
  return (
    <div className="flex flex-col gap-2 text-primary-dark">
      <div className="body-large font-bold text-primary-dark">Address</div>
      {addressLines.map((line, index) => (
        <p key={index} className="body-small">
          {line}
        </p>
      ))}
    </div>
  );
}
export default AddressInfo;
