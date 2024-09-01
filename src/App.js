import { useState } from 'react';
import './App.css';

const yapilacaklar = [
  {
    id: 12,
    baslik: "Yumurta alınacak",
    tamamlandi: false
  },
  {
    id: 156,
    baslik: "Süt alınacak",
    tamamlandi: true
  }
]

function App() {
  const [isler, islerGuncelle] = useState(yapilacaklar)

  function tamamlamaIslemi(tiklananEleman) {
    islerGuncelle(  eskiDeger=> {
        return eskiDeger.map( eskiEleman=>{
          if ( eskiEleman.id === tiklananEleman.id ) {
            return {...eskiEleman, tamamlandi: !eskiEleman.tamamlandi}
          } else{
            return eskiEleman
          }
        } )
      }
     )
  }

  return (
    <>
      <h1>Yapılacaklar Listesi</h1>



      {isler.map((eleman)=>{
        return (
          <div key={eleman.id}>
            <label>
              <input type='checkbox' checked={eleman.tamamlandi} onChange={ ()=>tamamlamaIslemi(eleman) } />
              {eleman.baslik}
            </label>
          </div>
        )
      })}
    </>
  );
}

export default App;
