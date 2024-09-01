import { useCallback, useState } from 'react';
import './App.css';
import C1 from './C1';

function App() {
  const [sayi, sayiGuncelle] = useState(0)
  const [sayi2, sayi2Guncelle] = useState(0)
  const [isim, isimGuncelle] = useState("Kaan")

  console.log("App komponenti render oldu")

  const hesapla = useCallback( ()=> {
    alert("Appteki hesapla fonksiyonu çalıştı! Sayı:"+sayi)
    return 32565
  }, [sayi] )


  return (
    <>
      <p>
        App
      </p>
      <button onClick={ ()=>sayiGuncelle(eskiDeger=>eskiDeger+5) }>Sayı arttır {sayi}</button>
      <button onClick={ ()=>sayi2Guncelle(eskiDeger=>eskiDeger+10) }>Sayı2 arttır {sayi2}</button>

      <C1 hesapla={hesapla} />
    </>
  );
}

export default App;
