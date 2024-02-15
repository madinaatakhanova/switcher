import React, { useState } from 'react';
import "./App.css"
function App() {
  const [color, setColor] = useState('black');

  const changeColor = (newColor) => {
    document.body.style.backgroundColor = newColor;
    setColor(newColor);
  };

  return (
    <div className="container" style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <button onClick={() => changeColor('red')} style={{ backgroundColor: 'red', color: 'white', marginRight: '10px' }}>Qizil</button>
        <button onClick={() => changeColor('green')} style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}>Yashil</button>
        <button onClick={() => changeColor('yellow')} style={{ backgroundColor: 'yellow', color: 'black' }}>Sariq</button>
      </div>
      {/* <div style={{ backgroundColor: color, marginTop: '20px', padding: '20px' }}>
        Rang o'zgartirildi
      </div> */}
    </div>
  );
}

export default App;
