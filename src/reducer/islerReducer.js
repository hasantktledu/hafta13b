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
  
  const islerReducer = ( state, aksiyon ) => {
    switch(aksiyon.type) {
  
      case "TAMAMLAMA":
        return state.map((eleman) => {
          if (eleman.id === aksiyon.id) {
            return { ...eleman, tamamlandi: !eleman.tamamlandi };
          } else {
            return eleman;
          }
        });
        
      case "YENİİŞ":
        const yeniIs = {
          id: uuid(),
          baslik: aksiyon.baslik,
          tamamlandi: false
        }
  
        return [...state, yeniIs]
  
      case "İŞSİL":
  
      case "İŞGÜNCELLE":
  
      default:
        return state
    }
  }

  export {yapilacaklar, islerReducer}