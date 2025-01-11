import React from 'react';

const DataTable = ({ filteredData, sortData }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => sortData('date')}>Date</th>
          <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => sortData('revenue')}>Revenue</th>
          <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => sortData('netIncome')}>Net Income</th>
          <th className="border border-gray-300 px-4 py-2">Gross Profit</th>
          <th className="border border-gray-300 px-4 py-2">EPS</th>
          <th className="border border-gray-300 px-4 py-2">Operating Income</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{item.date}</td>
            <td className="border border-gray-300 px-4 py-2">{item.revenue}</td>
            <td className="border border-gray-300 px-4 py-2">{item.netIncome}</td>
            <td className="border border-gray-300 px-4 py-2">{item.grossProfit}</td>
            <td className="border border-gray-300 px-4 py-2">{item.eps}</td>
            <td className="border border-gray-300 px-4 py-2">{item.operatingIncome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
