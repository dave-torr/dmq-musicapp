
import { useEffect, useState } from "react"
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
                        <div className={styles.editBTN} 
                            onClick={()=>{
                                setSelectedBand(elem)
                            }}> Editar </div>
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
    }
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
                Profile
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