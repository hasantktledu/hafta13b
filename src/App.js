import { useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {
  const [adet, adetGuncelle] = useState(0)


  return (
    <C1 a={adet} />
  );
}

export default App;
