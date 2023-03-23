import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = () => {

  };

  // setPeople to an empty array can clear all items
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      <h2>useState array example</h2>

      {people.map((person) => {
        const {id, name} = person;
        return <div key={id}>
          <h4>{name}</h4>
          <button type='button'>Clear</button>
        </div>
      })}
      {/* This button outside of the original curly braces */}
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        className='btn'
        onClick={clearAllItems}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
