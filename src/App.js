import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=X1sSjLKXN0Nxaf6h72wM5XS3WHb3XFor');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const sortData = (field) => {
    const order = sortedField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    const sorted = [...data].sort((a, b) => {
      if (field === 'date') {
        return order === 'asc' ? new Date(a[field]) - new Date(b[field]) : new Date(b[field]) - new Date(a[field]);
      }
      return order === 'asc' ? a[field] - b[field] : b[field] - a[field];
    });
    setData(sorted);
    setSortedField(field);
    setSortOrder(order);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Data Table</h1>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => sortData('date')}>
              Date {sortedField === 'date' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => sortData('revenue')}>
              Revenue {sortedField === 'revenue' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th className="border border-gray-300 px-4 py-2 cursor-pointer" onClick={() => sortData('netIncome')}>
              Net Income {sortedField === 'netIncome' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th className="border border-gray-300 px-4 py-2">Gross Profit</th>
            <th className="border border-gray-300 px-4 py-2">EPS</th>
            <th className="border border-gray-300 px-4 py-2">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
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
    </div>
  );
};

export default App;
