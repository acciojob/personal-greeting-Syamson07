import React, { useState } from 'react';

const GreetingInput = () => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2>Enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Type your name..."
        style={styles.input}
      />
      {name.trim() && (
        <h3 style={styles.greeting}>Hello, {name}!</h3>
      )}
    </div>
  );
};

// Inline styling (no external libraries)
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '2rem auto',
    padding: '1rem',
    textAlign: 'center',
    maxWidth: '400px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  input: {
    padding: '10px',
    width: '80%',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #aaa',
  },
  greeting: {
    marginTop: '20px',
    color: '#333',
  },
};

export default GreetingInput;
