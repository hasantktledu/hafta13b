import { useState } from 'react';
import './App.css';
import C1 from './C1';
import GlobalHavuz from './context';

function App() {
  const [adet, adetGuncelle] = useState(0)
  const [girisYapildi, girisYapildiGuncelle] = useState(false)

  const veri = {  adetState: {adet, adetGuncelle}, girisYapildi  } 

  return (
    <GlobalHavuz.Provider value={veri}>
      <C1 />
    </GlobalHavuz.Provider>
  );
}

export default App;
