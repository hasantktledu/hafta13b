import { useContext } from "react"
import C3 from "./C3"
import GlobalHavuz from "./context"

function C2() {

    const veriHavuzu = useContext(GlobalHavuz)

    return (
        <>
            <p>BEN C2</p>
            
            {
            veriHavuzu.girisYapildi &&
            <div>
                Üyelere özel içerik.
            </div>
            }
            <C3 />
        </>
    )
}

export default C2