import { useReducer, useState } from "react";
import "./App.css";

import { yapilacaklar, islerReducer } from "./reducer/islerReducer";
import IsListe from "./IsListe";

function App() {
  // const [isler, islerGuncelle] = useState(yapilacaklar)
  const [inputBaslik, inputBaslikGuncelle] = useState("");
  const [isler, vekilFonksiyon] = useReducer(islerReducer, yapilacaklar);

  function yeniIsInput(olay) {
    inputBaslikGuncelle(olay.target.value);
  }

  return (
    <>
      <section className="container pt-5">
        <h1>Yapılacaklar Listesi</h1>

        <div className="row mb-3">
          <div className="col-auto">
            <input
              className="form-control"
              value={inputBaslik}
              onChange={yeniIsInput}
              type="text"
              placeholder="Yeni iş başlığı girin"
            />
          </div>

          <div className="col-auto">
            <button
              className="btn btn-success"
              onClick={() =>
                vekilFonksiyon({ type: "YENİİŞ", baslik: inputBaslik })
              }
            >
              + Ekle
            </button>
          </div>
        </div>

        <IsListe isler={isler} vekilFonksiyon={vekilFonksiyon} />
      </section>
    </>
  );
}

export default App;
