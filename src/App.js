import React from 'react';
import Home from './component/home';


function App() {
    const styleObject = {display:'flex',flexWrap:'warp',justifyContent:'space-around'}
  return (
    <div style={styleObject}>
    <Home />
    </div>
  );
}

export default App;
