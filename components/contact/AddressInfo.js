function AddressInfo({ address }) {
  const addressLines = address.split(',,');
  return (
    <div className="p-4 font-body text-primary-dark">
      <h3 className="text-3xl font-bold">Address</h3>
      {addressLines.map((line, index) =>
        index === 0 ? (
          <p key={index} className="text-xl mt-2 font-bold">
            {line}
          </p>
        ) : (
          <p key={index} className="text-xl ">
            {line}
          </p>
        ),
      )}
    </div>
  );
}
export default AddressInfo;
