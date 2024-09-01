import { useState } from 'react';
import './App.css';
import  {v4 as uuid} from 'uuid'

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
  const [inputBaslik, inputBaslikGuncelle] = useState("")

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

  function yeniIsInput(olay) {
    inputBaslikGuncelle(olay.target.value)
  }

  function yeniIsEkle(){

    const yeniIs = {
      id: uuid(),
      baslik: inputBaslik,
      tamamlandi: false
    }

    islerGuncelle( eskiDeger=>[...eskiDeger, yeniIs] )
    inputBaslikGuncelle("")
  }

  return (
    <>
      <h1>Yapılacaklar Listesi</h1>

      <div>
        <input value={inputBaslik} onChange={yeniIsInput} type='text' placeholder='Yeni iş başlığı girin' /> 
        <button onClick={yeniIsEkle}>+ Ekle</button>
      </div>

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
