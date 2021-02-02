import { useEffect, useState } from "react"


import styles from "./../styles/addBands.module.css"
import BarriosDMQ from "./../data/adminZonalDMQ.json"

export default function Anadir(){
    const [inputStep, setInputStep]= useState(0)
    const [aBandRegistry, setBandRegistry] = useState({
        "bandName": String,
        "yearStarted": Number,
        "location": {
            "parroquia": String,
            "barrio": String,
            "detalleAdicional": String,
            },
        "bandMembers": Object,
        "musicoMayor": {
            "name": String,
            "age": Number,
            "occupation": String,
            "yearsInRole": Number,
            },
        "active": true
        })

// Input step controllers
const nextPrevStep = ()=>{
    return(
        <>
            <div className={styles.stepControllers}> 
                {inputStep>0&& 
                    <> <div className={styles.aStepController}
                    onClick={()=>setInputStep(inputStep-1)}> 
                    Regresar </div> </>}
                {inputStep<=3&& 
                    <> <div className={styles.aStepController}
                    onClick={()=>setInputStep(inputStep+1)}> 
                    Siguiente </div> </>}
            </div>
        </>
    )
}

// Inputs
    const [localizacion, setlocalizacion]= useState("urban")
    const locationInputs=()=>{
        return(
            <>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    
                    {urbanNhDropDown("urbano", BarriosDMQ.parroquiasUrbanas)}
                    {urbanNhDropDown("Rural", BarriosDMQ.parroquiasRurales)}

                 </div>
                <div className={styles.textInput}>
                    <label htmlFor="barrioTextInput"> Barrio: </label>
                    <input id="barrioTextInput" type="text" onChange={(e)=>{
                        setBandRegistry({
                            ...aBandRegistry,
                            "location":{
                                ...aBandRegistry.location,
                                "barrio": e.target.value,
                            }})}}/>
                    </div>
                <div className={styles.textInput}>
                    <label htmlFor="addiDetailTextInput"> Detalles Adicionales: </label>
                    <input id="addiDetailTextInput" type="text" onChange={(e)=>{
                        setBandRegistry({
                            ...aBandRegistry,
                            "location":{
                                ...aBandRegistry.location,
                                "detalleAdicional": e.target.value,
                            }})}}/>
                    </div>
            </>
        )
    }
    const urbanNhDropDown=(barrioType, barrioData)=>{
        let sortedNeighborhoods = barrioData.sort().map((elem, i)=>
            <> <option value={elem} key={i}> {elem} </option>
            </>)

        return(
            <>
                <div className={styles.aDropDown}>
                    <div className={styles.barrioType}> {barrioType} </div>
                    <select 
                        className={styles.barrioPickers} 
                        onChange={(e)=>{
                            setBandRegistry({
                                ...aBandRegistry,
                                "location":{
                                    ...aBandRegistry.location,
                                    "parroquia": e.target.value
                                }})}}> 
                        {sortedNeighborhoods} </select>
                </div>
            </>
        )    
    }


console.log(aBandRegistry)

    const inputSummary=()=>{
        return(
            <>
                <h1 className={styles.summaryTitle}> Datos de Banda: </h1>
            </>
        )
    }

    const submitData=()=>{
        return(
            <div 
                className={styles.submitBandBTN}
                onClick={async()=>{
                    let stringifiedBand= JSON.stringify(aBandRegistry);
                    const res = await fetch("/api/anadir",{
                        method: "post",
                        body: stringifiedBand
                    })
                    const bandRegistration = await res.json()
                    console.log("bandRegistration", bandRegistration)
                }}> 
                Agregar a base de datos </div>
        )
    }

    return(
        <>
            <div className={styles.addBandPage}>
                <div className={styles.generalInputCont}>


                    <form className={styles.dataInputs}>
                        {inputStep===0&&
                            <>{locationInputs()}</>}

                    </form>
                    {nextPrevStep()}
                    <div className={styles.summaryCont}>
                        {inputSummary()}</div>
                    <div className={styles.submitCont}>
                        {submitData()}</div>
                </div>
            </div>
        </>
    )
}