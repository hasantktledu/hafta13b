function IsListe({isler, vekilFonksiyon}) {

    return (
        <>
            {isler.map((eleman)=>{
                return (
                <div key={eleman.id}>
                    <label>
                    <input type='checkbox' checked={eleman.tamamlandi} onChange={ ()=>vekilFonksiyon( {type: "TAMAMLAMA", id: eleman.id } ) } />
                    {eleman.baslik}
                    </label>
                </div>
                )
            })}
        </>
    )
}

export default IsListe