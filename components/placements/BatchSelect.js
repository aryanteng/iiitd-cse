import { useState } from 'react';
const BatchSelect = ({ batches, onBatchChange }) => {
  const [selectedBatch, setSelectedBatch] = useState(batches[0]);

  const handleChange = (event) => {
    const newBatch = event.target.value;
    setSelectedBatch(newBatch);
    onBatchChange(newBatch);
  };

  return (
    <div className="flex justify-end mb-4">
      <select
        id="batch-select"
        value={selectedBatch}
        onChange={handleChange}
        className="w-1/4 md:w-1/6 lg:w-1/8 pl-3 pr-10 py-3 text-center border border-gray-300 bg-primary-main text-white font-bold focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark rounded-full">
        {batches.map((batch) => (
          <option
            key={batch}
            value={batch}
            className="bg-primary-color text-white">
            {batch}
          </option>
        ))}
      </select>
      {/* Assuming custom arrow styling is handled globally */}
    </div>
  );
};
export default BatchSelect;
