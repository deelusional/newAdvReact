import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Pete',
    age: 36,
    hobby: 'Losing his bank book',
  });
  
  // Refactor the code below to save lines of code and look cleaner (above)
  // const [name, setName] = useState('Dickhead')
  // const [age, setAge] = useState(50)
  // const [hobby, setHobby] = useState('Reading Comics')
  
  const displayPerson = () => { 
    // setPerson({ name: 'asshat', age: 50, hobby: 'Being a complete wanker!' })
    // setPerson('Pete the Weenie');
    // setPerson({name: 'Weenie'});
    setPerson({...person, name: 'Scaredy Cat', age: 36, hobby: 'Asking his wife where the bank book is'});


    // Below was used before the refactored code
    // setName('john')
    // setAge(60);
    // setHobby('Scream at bad kids!');
  }
  // Use an empty fragment <></>
  return <>
    {/* Refactored code */}
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>Likes: {person.hobby}</h3>

    {/* Three lines of code below were from before refactoring */}
    {/* <h3>{name}</h3> */}
    {/* <h3>{age}</h3> */}
    {/* <h3>Likes to : {hobby}</h3> */}
    <button className='btn' onClick={displayPerson}>
      show asshat
    </button>
  </>;
};

export default UseStateObject;
