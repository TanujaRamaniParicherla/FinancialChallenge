import React, { useState } from 'react';

const FilterControls = ({ data, setFilteredData }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minRevenue, setMinRevenue] = useState('');
  const [maxRevenue, setMaxRevenue] = useState('');
  const [minNetIncome, setMinNetIncome] = useState('');
  const [maxNetIncome, setMaxNetIncome] = useState('');

  const applyFilters = () => {
    let filtered = [...data];

    // Filter by date range
    if (startDate && endDate) {
      filtered = filtered.filter(item => {
        const date = new Date(item.date);
        return date >= new Date(startDate) && date <= new Date(endDate);
      });
    }

    // Filter by revenue range
    if (minRevenue && maxRevenue) {
      filtered = filtered.filter(item => item.revenue >= minRevenue && item.revenue <= maxRevenue);
    }

    // Filter by net income range
    if (minNetIncome && maxNetIncome) {
      filtered = filtered.filter(item => item.netIncome >= minNetIncome && item.netIncome <= maxNetIncome);
    }

    setFilteredData(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="mr-2"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="mr-2"
      />
      <input
        type="number"
        placeholder="Min Revenue"
        value={minRevenue}
        onChange={(e) => setMinRevenue(e.target.value)}
        className="mr-2"
      />
      <input
        type="number"
        placeholder="Max Revenue"
        value={maxRevenue}
        onChange={(e) => setMaxRevenue(e.target.value)}
        className="mr-2"
      />
      <input
        type="number"
        placeholder="Min Net Income"
        value={minNetIncome}
        onChange={(e) => setMinNetIncome(e.target.value)}
        className="mr-2"
      />
      <input
        type="number"
        placeholder="Max Net Income"
        value={maxNetIncome}
        onChange={(e) => setMaxNetIncome(e.target.value)}
        className="mr-2"
      />
      <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterControls;
