import { useContext } from "react"
import GlobalHavuz from "./context"

function C3() {
    const a = useContext(GlobalHavuz)

    return (
        <>
            <p>BEN C3</p>
            Appte yer alan adet değeri: {a.adetState.adet}

            <button onClick={()=>{ a.adetState.adetGuncelle(25) }}>Değiştir</button>
        </>
    )
}

export default C3