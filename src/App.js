import { useState } from 'react';
import './App.css';
import { useMemo } from 'react';

function App() {
  const [sayi, sayiArttir] = useState(0)
  const [sayi2, sayiArttir2] = useState(0)

  function hesaplamaYap(sayi){
    console.log("Hesaplama fonksiyonu çalıştı..")

    return 658745+sayi
  }

  const deger = useMemo(  ()=> hesaplamaYap(sayi2), [sayi2]  )


  return (
    <>
      <p>{deger}</p>

      <button onClick={ ()=>{ sayiArttir(eskiDeger=>eskiDeger+5) } }> Arttır {sayi}</button>
      <button onClick={ ()=>{ sayiArttir2(eskiDeger=>eskiDeger+10) } }> Arttır 2 {sayi2}</button>
    </>
  );
}

export default App;
