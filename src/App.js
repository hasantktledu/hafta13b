import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [adet, adetGuncelle] = useState(0)


  const paragrafRef = useRef()
  const sayacRef = useRef(20)

  useEffect(()=>{
    paragrafRef.current.style.color = "red"
  }, [])

  function arttir() {
    // adetGuncelle( mevcutDeger=>mevcutDeger + 5 )
    // alert(sayacRef.current)
    sayacRef.current = sayacRef.current + 5
  }

  return (
    <div className="App">
      <p ref={paragrafRef}>Test</p>

      <button onClick={arttir}>Arttır</button>
      <p>sayacRef: {sayacRef.current}</p>
      <p>adet: {adet}</p>
    </div>
  );
}

export default App;
