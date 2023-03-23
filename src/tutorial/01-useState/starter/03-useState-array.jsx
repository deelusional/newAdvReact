import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <div>
      <h2>useState array example</h2>

      {people.map((person) => {
        const {id, name} = person;
        return <div key={id}>
          <h4>{name}</h4>
        </div>
      })}
    </div>
  );
};

export default UseStateArray;
