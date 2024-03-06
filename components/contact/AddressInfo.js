function AddressInfo({ address }) {
  const addressLines = address.split(',,');
  return (
    <div className="flex flex-col gap-2 p-4 text-primary-dark">
      <h3 className="heading-2">Address</h3>
      {addressLines.map((line, index) => (
        <p key={index} className="body-normal font-body">
          {line}
        </p>
      ))}
    </div>
  );
}
export default AddressInfo;
