
import { useEffect, useState } from "react"
import { CircularProgress } from '@material-ui/core';

import useBands from "./../../utils/bandFetching"

import styles from "./../../styles/bandList.module.css"
import {NavBar2} from "./../../components/menus"

export default function Bandas(){

const { ListadoDeBandas, isLoading, isError } = useBands()
const [bandPageGenController, setBandPageGenController] = useState("list")
const [selectedBand, setSelectedBand] = useState(null)

useEffect(()=>{
    if(ListadoDeBandas){
        console.log(ListadoDeBandas)
    }
},[ListadoDeBandas])


const eachBandDisplayer=(bands)=>{
    if(bands){
            let eachBand = bands.map((elem, i)=>
            <>
                <div className={styles.aBandCont}>
                    <div className={styles.eachBandName} > 
                        {elem.bandName} </div>
                        <div className={styles.bandQuickData}>
                            <div className={styles.startingYear}> 
                                est. {elem.yearStarted} </div>
                            <div className={styles.eachBandDetail} > 
                                {elem.location.parroquia} </div>
                            <div className={styles.dataReference}> 
                                PARROQUIA</div>
                            <div className={styles.eachBandDetail} > 
                                {elem.musicoMayor.name} </div>
                            <div className={styles.dataReference}> 
                                MUSICO MAYOR</div>
                            <div className={styles.eachBandDetail}> 
                            {elem.bandMembers.length} Miembros </div>
                        </div>
                    <div className={styles.eachBandBTNS}> 
                        {/* <div className={styles.editBTN} 
                            onClick={()=>{
                                setSelectedBand(elem)
                            }}> Editar </div> */}
                        <div className={styles.profileBTN} 
                            onClick={()=>{
                                setSelectedBand(elem)
                                setBandPageGenController("profile")
                            }}> Perfil </div>
                    </div>
                </div>
            </>)
        return(
            <>
                <div className={styles.bandDisplayGrid}>
                    {eachBand}
                </div>
            </>
        )
    } else {
        return(
            <>
                <div style={{width:"100%", display: "flex", flexDirection:"column",  alignItems:"center"}}> 
                    <br></br>
                    <br></br>
                    <br></br>
                    <CircularProgress  />
                    <br></br>
                    <br></br>
                    Buscando Informacion
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    </div>
            </>
        )
    }
}

const bandProfile=(bandData)=>{
    let eachBandMember=bandData.bandMembers.map((elem, i)=>
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
                    <div className={styles.summaryElementData}> <strong> Edad: </strong> {elem.age} </div></>}
            </div>
        </>)
    return(
        <>
            <div className={styles.fullListBTN} onClick={()=>{
                setBandPageGenController("list");
                setSelectedBand(null)
            }}> Listado completo </div>
            <div className={styles.bandProfileGenCont}>
                <div className={styles.bandProfileName}> 
                    {bandData.bandName} </div>
                <div className={styles.bandProfileYear}> 
                    est. {bandData.yearStarted} </div>
                <div className={styles.bandProfileDataCont}> 
                    <div className={styles.profileLocationDataCont}>
                        <div style={{display:"flex", flexDirection:"column", height:"100%", justifyContent: "space-around"}}>
                            <h3> Locacion </h3>
                            {bandData.location.parroquia&&<>
                                <div className={styles.summaryElementData}> <strong> Parroquia: </strong> {bandData.location.parroquia} </div></>}
                            {bandData.location.barrio&&<>
                                <div className={styles.summaryElementData}> <strong> Barrio: </strong> {bandData.location.barrio} </div></>}
                            {bandData.location.detalleAdicional&&<>
                                <div className={styles.summaryElementData}> <strong> Adicional: </strong> {bandData.location.detalleAdicional} </div></>}
                        </div>                        
                    </div>
                    <div className={styles.profileDirectorDataCont}>
                        <div style={{display:"flex", flexDirection:"column", height:"100%", justifyContent: "space-around"}}>
                            <h3> Musico Mayor </h3>
                            {bandData.musicoMayor.name&&<>
                                <div className={styles.summaryElementData}> <strong> Nombre: </strong> {bandData.musicoMayor.name} </div></>}
                            {bandData.musicoMayor.occupation&&<>
                                <div className={styles.summaryElementData}> <strong> Ocupación: </strong> {bandData.musicoMayor.occupation} </div></>}
                            {bandData.musicoMayor.yearsInRole&&<>
                                <div className={styles.summaryElementData}> <strong> Años de director: </strong> {bandData.musicoMayor.yearsInRole} </div></>}
                            {bandData.musicoMayor.age&&<>
                                <div className={styles.summaryElementData}> <strong> Edad: </strong> {bandData.musicoMayor.age} </div></>}
                        </div>                        

                    </div>
                </div>
                <div className={styles.profileMemberDataCont}>
                    <h3> Integrantes </h3>
                    <div className={styles.eachBamdMemberCards}> 
                        {eachBandMember}
                    </div>
                </div>
            </div>
        </>
    )
}

console.log(selectedBand)
const generalBandListDisp=()=>{
    return(
        <>
        <div className={styles.bandDisplayerGenCont}>
        {bandPageGenController==="list"&&
            <>
                <h1> Listado de Bandas </h1>
                <h3> del Distrito Metropolitano de Quito </h3>
                {eachBandDisplayer(ListadoDeBandas)}
            </>}
        {bandPageGenController==="profile"&&
            <>
                {bandProfile(selectedBand)}
            </>}
        </div>
        </>
    )
}

    return(
        <>
        <div className={styles.bandListPage}>
            <NavBar2 /> 
            {generalBandListDisp()}
        </div>
        </>
    )
}