import C2 from "./C2"

function C1({a}) {

    return (
        <>
            <p>BEN C1</p>
            <C2 b={a} />
        </>
    )
}

export default C1