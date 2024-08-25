import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [inputDegeri, setInputValue] = useState("");
  const inputunOncekiDegeri = useRef(""); // inputValuenun bir önceki değerini saklamak için..

  useEffect(() => {
    inputunOncekiDegeri.current = inputDegeri;
  }, [inputDegeri]);

  return (
    <>
      <input
        type="text"
        value={inputDegeri}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Şu anki Değer: {inputDegeri}</h2>
      <h2>Önceki Değer: {inputunOncekiDegeri.current}</h2>
    </>
  );

}

export default App;
