import { memo } from "react"

function C1({isim, sayi}) {

    console.log("C1 komponenti render oldu.")

    return (
        <>
            <p>Ben C1 komponentiyim</p>
            <p>Üst komponentten gelen isim: {isim}</p>
            <p>Üst komponentten gelen sayı: {sayi}</p>
        </>
    )
}

export default memo(C1)