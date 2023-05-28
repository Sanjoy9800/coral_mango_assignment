import React, { useEffect, useState } from 'react';
import './Table.css'

const fetchData = async () => {
  const response = await fetch('https://coralmango.com/api/react-test');
  const data = await response.json();
  return data;
};

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetchData().then((responseData) => {
      setData(responseData);
      setFilteredData(responseData);
    });
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    if (value) {
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filteredResults);
      setIsFiltered(true);
    } else {
      setFilteredData(data);
      setIsFiltered(false);
    }
  };

  const handleSort = (key) => {
    let sortedData = [...filteredData];

    if (sortKey === key) {
      sortedData.reverse();
    } else {
      sortedData.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
    }

    setSortKey(key);
    setFilteredData(sortedData);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
      />
      {isFiltered && <p>You are viewing filtered results.</p>}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
