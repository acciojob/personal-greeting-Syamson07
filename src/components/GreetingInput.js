import React, { useState } from 'react';

const GreetingInput = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      {name.trim() && <p>Hello, {name}!</p>}
    </div>
  );
};

export default GreetingInput;
