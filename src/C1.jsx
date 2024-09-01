import { memo } from "react"

function C1({hesapla}) {

    console.log("C1 komponenti render oldu.")

    return (
        <>
            <p>Ben C1 komponentiyim</p>
            <button onClick={ ()=>hesapla() }>Appteki Hesaplayı çalıştır</button>
        </>
    )
}

export default memo(C1)