import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    // Can also pass const newPeople in setPeople like below to make it dynamic:
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(people.filter((person) => person.id !== id));
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
          <button type='button' onClick={() => removeItem(id)}>
            Clear
          </button>
        </div>
      })}
      {/* This button outside of the original curly braces */}
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        className='btn'
        // Can also use an arrrow func in onClick
        // onClick={()=>setPeople([])}
        onClick={clearAllItems}
      >
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
