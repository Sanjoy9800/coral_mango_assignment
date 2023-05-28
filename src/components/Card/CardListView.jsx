import React from 'react';
import './CardListView.css';

const CardListView = ({ data }) => {
  return (
    <div className="card-list-view">
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardListView;
