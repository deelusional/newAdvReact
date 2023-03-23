const ErrorExample = () => {
  let count = 0;

  const handleClick = () => { 
    count = count + 1;
    console.log(count)
  };

  return (
    <div>
      <h2>useState Error Example</h2>
      <h3>{count}</h3>
      <button type="button" onClick={handleClick} className='btn'>
        Increase
      </button>
    </div>
  );
};

export default ErrorExample;
