import React, { useState } from 'react';
import CardListView from '../Card/CardListView';
import './Table.css';

const Table = () => {
  const [viewType, setViewType] = useState('table');

  const data = [
    // Example data
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'card1.jpg',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'card2.jpg',
    },
    // Add more data objects as needed
  ];

  const handleViewTypeChange = () => {
    setViewType((prevType) => (prevType === 'table' ? 'card' : 'table'));
  };

  return (
    <div className="table-component">
      <div className="toggle-container">
        <label>
          <input
            type="checkbox"
            checked={viewType === 'card'}
            onChange={handleViewTypeChange}
          />
          Card View
        </label>
      </div>
      {viewType === 'table' ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <CardListView data={data} />
      )}
    </div>
  );
};

export default Table;
