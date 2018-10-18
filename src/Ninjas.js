import React from 'react';
import './Ninjas.min.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninjas" key={ninja.id}>
        <div>ID: {ninja.id}</div>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete!</button>
      </div>
    );
  });
  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  );
};

export default Ninjas;
