import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Dickhead')
  const [age, setAge] = useState(50)
  const [hobby, setHobby] = useState('Reading Comics')
  
  const displayPerson = () => { 
    setName('john')
    setAge(60);
    setHobby('Scream at bad kids!');
  }
  // Use an empty fragment <></>
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>Likes to: {hobby}</h3>
    <button className='btn' onClick={displayPerson}>
      show asshat
    </button>
  </>;
};

export default UseStateObject;
