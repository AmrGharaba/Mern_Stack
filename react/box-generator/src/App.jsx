import React, { useState } from 'react';
import MessageDisplay from './assets/components/MessageDisplay';
import MessageForm from './assets/components/MessageForm';


function App() {
  const [colorArr, setcolorArr] = useState([]);

  const sendArray = (newColor) => {
    setcolorArr([...colorArr, newColor]);
  }

  return (
    <>
      <MessageForm onSubmit={sendArray} />
      <MessageDisplay colorArray={colorArr} />
    </>
  );
}

export default App;

