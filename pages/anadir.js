import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

import {NavBar} from "./../components/menus"

import styles from "./../styles/addBands.module.css"
import BarriosDMQ from "./../data/adminZonalDMQ.json"

export default function Anadir(){
    const router = useRouter()

    const [inputStep, setInputStep]= useState(0)
    const [aBandRegistry, setBandRegistry] = useState({
        "bandName": null,
        "yearStarted": null,
        "location": {
            "parroquia": null,
            "barrio": null,
            "detalleAdicional": null,
            },
        "bandMembers": [],
        "musicoMayor": {
            "name": null,
            "age": null,
            "occupation": null,
            "yearsInRole": null,
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
                    {inputStep<=2&& 
                        <> <div className={styles.aStepController}
                        onClick={()=>setInputStep(inputStep+1)}> 
                        Siguiente </div> </>}
                </div>
            </>
        )
    }

// Inputs
    const [localizacion, setlocalizacion]= useState(null)
    const locationInputs=()=>{
        return(
            <>
            <div className={styles.locationInputsCont}>
                <h1> Localizacion </h1>
                <div style={{display:"flex", justifyContent:"space-around", marginBottom: "15px" }}>
                    <label className={styles.radios} htmlFor="urbanPicker"  > 
                        <input type="radio" name="ruralUrban" id="urbanPicker" value="urban"
                        onChange={(e)=>setlocalizacion(e.target.value)} /> 
                        Urbano </label>

                    <label className={styles.radios} htmlFor="ruralPicker"> 
                        <input type="radio" name="ruralUrban" id="ruralPicker" value="rural"
                        onChange={(e)=>setlocalizacion(e.target.value)} /> 
                        Rural </label>
                        </div>

                    {localizacion==="urban"&&
                        <> {urbanNhDropDown("urbano", BarriosDMQ.parroquiasUrbanas)}</>}
                    {localizacion==="rural"&&
                        <> {urbanNhDropDown("Rural", BarriosDMQ.parroquiasRurales)}</>}
                    {localizacion&&
                    <>
                    <div className={styles.textInput}>
                        <label style={{width:"160px", textAlign:"end", paddingRight: "12px"}} 
                        htmlFor="barrioTextInput"> Barrio: </label>
                        <input id="barrioTextInput" type="text" placeholder={aBandRegistry.location.barrio} onChange={(e)=>{
                            setBandRegistry({
                                ...aBandRegistry,
                                "location":{
                                    ...aBandRegistry.location,
                                    "barrio": e.target.value,
                                }})}}/>
                        </div>
                    <div className={styles.textInput}>
                        <label style={{width:"160px", textAlign:"end", paddingRight: "12px"}} 
                        htmlFor="addiDetailTextInput"> Detalles Adicionales: </label>
                        <input id="addiDetailTextInput" type="text" placeholder={aBandRegistry.location.detalleAdicional} onChange={(e)=>{
                            setBandRegistry({
                                ...aBandRegistry,
                                "location":{
                                    ...aBandRegistry.location,
                                    "detalleAdicional": e.target.value,
                                }})}}/>
                        </div>
                    </>}
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
                    <div className={styles.barrioType}> {barrioType}:  </div>
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

// GEN Data
    const generalDataInput=()=>{
        return(
            <>
                <h1> Informacion General </h1>
                <div className={styles.anInputWLabel}> 
                <label className={styles.inputLabel} htmlFor="bandName"> 
                Nombre de Banda: {""}</label>
                    <input type="text"  id="bandName" placeholder={aBandRegistry.bandName} onChange={(e)=>{
                        setBandRegistry({
                        ...aBandRegistry,
                        "bandName":e.target.value,
                        })}}/>
                        </div>

                <div className={styles.anInputWLabel}> 
                <label className={styles.inputLabel} htmlFor="yearStarted"> 
                Año Inicio: {""} </label>
                    <input type="number" max="2020" min="1600" id="yearStarted" placeholder={aBandRegistry.yearStarted} onChange={(e)=>{
                        setBandRegistry({
                        ...aBandRegistry,
                        "yearStarted":e.target.value,
                        })}}/>
                        </div>
            </>
        )
    }

// DIRECTOR DATA
    const musicDirector=()=>{
        return(
            <>
            <h1> Musico Mayor </h1>
            <div className={styles.musicoMayorCont}>
                <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoMayorName"> 
                        Nombre: {""}</label>                
                        <input placeholder={aBandRegistry.musicoMayor.name} type="text" id="musicoMayorName" onChange={(e)=>{
                            setBandRegistry({
                            ...aBandRegistry,
                            "musicoMayor":{
                                ...aBandRegistry.musicoMayor,
                                "name": e.target.value
                            }})}}/>
                        </div>
                <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoMayorOccupation"> 
                        Ocupacion: {""}</label>                
                        <input placeholder={aBandRegistry.musicoMayor.occupation} type="text" id="musicoMayorOccupation" onChange={(e)=>{
                            setBandRegistry({
                            ...aBandRegistry,
                            "musicoMayor":{
                                ...aBandRegistry.musicoMayor,
                                "occupation": e.target.value
                            }})}}/>
                        </div>
                <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoMayorCareer"> 
                        Tiempo en rol: {""}</label>                
                        <input placeholder={aBandRegistry.musicoMayor.yearsInRole} type="number" id="musicoMayorCareer" onChange={(e)=>{
                            setBandRegistry({
                            ...aBandRegistry,
                            "musicoMayor":{
                                ...aBandRegistry.musicoMayor,
                                "yearsInRole": e.target.value
                            }})}}/>
                        </div>
                <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoMayorAge"> 
                        Edad: {""}</label>                
                        <input placeholder={aBandRegistry.musicoMayor.age} type="number" id="musicoMayorAge" onChange={(e)=>{
                            setBandRegistry({
                            ...aBandRegistry,
                            "musicoMayor":{
                                ...aBandRegistry.musicoMayor,
                                "age": e.target.value
                            }})}}/>
                        </div>
            </div>
            </>
        )
    }

// MBand member data
    const [aBandMember, setABandMember]=useState({
            "name": null,
            "instrument": null,
            "occupation": null,
            "age": null,
    })
    const [bandMemberController, setbandMemberController]=useState(false)
    const bandMembersInputFunc=()=>{
        return(
            <>
            <h1> Miembros de la Banda</h1>
                <div className={styles.bandMemberInputCont}>

                    <div> Al momento hay {aBandRegistry.bandMembers.length} musicos registrados.
                    </div> <br></br>
                    
                    {!bandMemberController&&
                    <>                    
                    <div className={styles.addMusicianBTN} onClick={()=>{
                        setbandMemberController(true) }}> 
                        añadir musico &#9835; </div> </>}
                    {bandMemberController&&
                    <>
                    <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoName"> 
                        Nombre: {""}</label>                
                        <input type="text" id="musicoName" onChange={(e)=>{
                            setABandMember({
                                ...aBandMember,
                                "name": e.target.value
                                })
                            }}/>
                        </div>
                    <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoOccupation"> 
                        Ocupacion: {""}</label>                
                        <input type="text" id="musicoOccupation" onChange={(e)=>{
                            setABandMember({
                                ...aBandMember,
                                "occupation": e.target.value
                                })
                            }}/>
                        </div>
                    <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoInstrument"> 
                        Instrumento: {""}</label>                
                        <input type="text" id="musicoInstrument" onChange={(e)=>{
                            setABandMember({
                                ...aBandMember,
                                "instrument": e.target.value
                                })
                            }}/>
                        </div>
                    <div className={styles.anInputWLabel}> 
                    <label className={styles.inputLabel} htmlFor="musicoAge"> 
                        Edad: {""}</label>                
                        <input type="number" id="musicoAge" onChange={(e)=>{
                            setABandMember({
                                ...aBandMember,
                                "age": e.target.value
                                })
                            }}/>
                        </div>

                    <div className={styles.confirmMuscBTN} onClick={()=>{
                        setBandRegistry({
                            ...aBandRegistry,
                            "bandMembers": [...aBandRegistry.bandMembers, aBandMember]
                        });
                        setABandMember({
                            "name": null,
                            "instrument": null,
                            "occupation": null,
                            "age": null,
                        });
                        setbandMemberController(false)
                    }}> Añadir! </div>
                    </>}
                </div>
            </>
        )
    }

// SUMMARY
    const [expandBandList, setBandExpander]=useState(false)
    const inputSummary=()=>{
        return(
            <>
                <h2> Resumen </h2>
                {summElemDisp1(aBandRegistry.bandName, "Nombre de Banda", aBandRegistry.bandName)}
                {summElemDisp1(aBandRegistry.yearStarted, "Año Inicio", aBandRegistry.yearStarted)}
                {summElemDisp2(aBandRegistry.location, "Locación", aBandRegistry.location)}
                {summElemDisp3(aBandRegistry.musicoMayor, "Musico Mayor", aBandRegistry.musicoMayor)}
                {musiciansDisplay(aBandRegistry.bandMembers, "Miembros de Banda", aBandRegistry.bandMembers)}
            </>
        )
    }

    const summElemDisp1=(controller, title, data)=>{
        return(
            <>
                {controller&&
                    <>
                    <div className={styles.aBandSummaryElemCont}>
                        <div className={styles.inputLabel}> <strong> {title}: </strong> </div>
                        <div className={styles.summaryElementData}> {data} </div>
                    </div>
                </>}
            </>
        )
    }
    const summElemDisp2=(controller, title, data)=>{
        return(
            <>
                {controller.parroquia&&
                    <>
                    <div className={styles.aBandSummaryElemCont}>
                        <div className={styles.inputLabel}> <strong> {title}: </strong></div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            {data.parroquia&&<>
                                <div className={styles.summaryElementData}> <strong> Parroquia: </strong> {data.parroquia} </div></>}
                            {data.barrio&&<>
                                <div className={styles.summaryElementData}> <strong> Barrio: </strong> {data.barrio} </div></>}
                            {data.detalleAdicional&&<>
                                <div className={styles.summaryElementData}> <strong> Adicional: </strong> {data.detalleAdicional} </div></>}
                        </div>
                    </div>
                </>}
            </>
        )
    }
    const summElemDisp3=(controller, title, data)=>{
        return(
            <>
                {controller.name&&
                    <>
                    <div className={styles.aBandSummaryElemCont}>
                        <div className={styles.inputLabel}> <strong> {title}: </strong></div>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            {data.name&&<>
                                <div className={styles.summaryElementData}> <strong> Nombre: </strong> {data.name} </div></>}
                            {data.occupation&&<>
                                <div className={styles.summaryElementData}> <strong> Ocupación: </strong> {data.occupation} </div></>}
                            {data.yearsInRole&&<>
                                <div className={styles.summaryElementData}> <strong> Años de director: </strong> {data.yearsInRole} </div></>}
                            {data.age&&<>
                                <div className={styles.summaryElementData}> <strong> Edad: </strong> {data.age} </div></>}
                        </div>
                    </div>
                </>}
            </>
        )
    }
    const musiciansDisplay=(controller, title, data)=>{
        let eachMusician=aBandRegistry.bandMembers.map((elem, i)=>
            <> 
                <div style={{display:"flex", flexDirection:"column"}}>
                    <div>_______________________________ </div>
                    <strong> Integrante {i+1} </strong>
                    {elem.name&&<>
                        <div className={styles.summaryElementData}> <strong> Nombre: </strong> {elem.name} </div></>}
                    {elem.instrument&&<>
                        <div className={styles.summaryElementData}> <strong> Instrumento: </strong> {elem.instrument} </div></>}
                    {elem.occupation&&<>
                        <div className={styles.summaryElementData}> <strong> Ocupación: </strong> {elem.occupation} </div></>}
                    {elem.age&&<>
                        <div className={styles.summaryElementData}> <strong> Edad: </strong> {data.age} </div></>}
                </div>
            </>)
        return(
            <>
            {controller.length>0&&
                <>
                    <div className={styles.aBandSummaryElemCont}>
                        <div className={styles.inputLabel}> <strong> {title}: </strong></div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <div> Numero de Integrantes: 
                                <strong>{" "}{aBandRegistry.bandMembers.length}</strong></div> 
                                
                                {expandBandList?<>
                                <div className={styles.bandExpander} onClick={()=> setBandExpander(false)}> Colapsar </div>
                                </> : <>
                                <div className={styles.bandExpander} onClick={()=> setBandExpander(true)}> Expander </div>
                                </>}
                                {expandBandList&&<>
                                    {eachMusician} </>}
                            </div>
                    </div>

                </>}
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
                    router.push('/')
                }}> 
                Agregar a base de datos </div>
        )
    }


console.log("Band Reg", aBandRegistry)
    return(
        <>
            <div className={styles.addBandPage}>
                <NavBar />
                <div className={styles.generalInputCont}>


                    <form className={styles.dataInputs}>
                        {inputStep===0&&
                            <>{generalDataInput()}</>}
                        {inputStep===1&&
                            <>{locationInputs()}</>}
                        {inputStep===2&&
                            <>{musicDirector()}</>}
                        {inputStep===3&&
                            <>{bandMembersInputFunc()}</>}

                    </form>
                    {nextPrevStep()}
                    <div className={styles.summaryCont}>
                        {inputSummary()}</div>
                    {inputStep===3&&
                        <><div className={styles.submitCont}>
                            {submitData()}</div></>}
                </div>
            </div>
        </>
    )
}