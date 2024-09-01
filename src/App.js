import { useReducer, useState } from 'react';
import './App.css';

import { yapilacaklar, islerReducer } from './reducer/islerReducer';
import IsListe from './IsListe';

function App() {
  // const [isler, islerGuncelle] = useState(yapilacaklar)
  const [inputBaslik, inputBaslikGuncelle] = useState("")
  const [isler, vekilFonksiyon] = useReducer( islerReducer, yapilacaklar  )

  function yeniIsInput(olay) {
    inputBaslikGuncelle(olay.target.value)
  }

  return (
    <>
      <h1>Yapılacaklar Listesi</h1>

      <div>
        <input value={inputBaslik} onChange={yeniIsInput} type='text' placeholder='Yeni iş başlığı girin' /> 
        <button onClick={ ()=> vekilFonksiyon( {type: "YENİİŞ", baslik: inputBaslik} ) }>+ Ekle</button>
      </div>

      <IsListe isler={isler} vekilFonksiyon={vekilFonksiyon} />
    </>
  );
}

export default App;
