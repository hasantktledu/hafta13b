function IsListe({isler, vekilFonksiyon}) {

    return (
        <>
            {isler.map((eleman)=>{
                return (
                <div className="form-check" key={eleman.id}>
                    <label>
                        <input className="form-check-input" type='checkbox' checked={eleman.tamamlandi} onChange={ ()=>vekilFonksiyon( {type: "TAMAMLAMA", id: eleman.id } ) } />
                    {eleman.baslik}
                    </label>
                </div>
                )
            })}
        </>
    )
}

export default IsListe