import React from 'react';

const HelloWorld = ({ name, age, greeting = 'Hello' }) => {
  return (
    <div className="hello-world">
      <h1>{greeting}, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

export default HelloWorld; 