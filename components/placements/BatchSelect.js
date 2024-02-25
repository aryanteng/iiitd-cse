import { useState } from 'react';
const BatchSelect = ({ batches, onBatchChange }) => {
  const [selectedBatch, setSelectedBatch] = useState(batches[0]);

  const handleChange = (event) => {
    const newBatch = event.target.value;
    setSelectedBatch(newBatch);
    onBatchChange(newBatch);
  };

  return (
    <div className="flex flex-col items-end mb-4">
      <select
        id="batch-select"
        value={selectedBatch}
        onChange={handleChange}
        className="w-40 pl-3 pr-10 py-3 text-lg border border-gray-300 bg-[#4AC7C0] text-white text-center font-bold focus:outline-none focus:ring-2 focus:ring-gray focus:border-gray rounded-md"
        style={{
          // Inline styles for properties that aren't covered by Tailwind
          borderRadius: '20px',
          // Other styles as needed
        }}>
        {batches.map((batch) => (
          <option key={batch} value={batch} className="bg-[#4AC7C0] text-white">
            {batch}
          </option>
        ))}
      </select>
      {/* Custom arrow styling will go here */}
    </div>
  );
};
export default BatchSelect;
