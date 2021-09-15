import './App.css';
import ColorArea from './components/ColorArea';
import React, {useState} from 'react';
import AddColor from './components/AddColor';

function App() {

  const [colors, setColors] = useState(['#c34c44', '#c314ff'])

  const addNewColor = (color) => {
    setColors([...colors, color])
  }

  return (
    <div className="App">
      <h1>Colors🧊</h1>
      <AddColor addNewColor={addNewColor}/>
      <div className="colors">
        {colors.map(color => <ColorArea color={color}/>)}
      </div>
    </div>
  );
}

export default App;
