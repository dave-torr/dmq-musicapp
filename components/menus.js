import Link from "next/link"

import styles from "../styles/misc.module.css"

function NavBar(props){
    return(
        <>
        <div className={styles.generalNavCont}> 
            <Link href="/" ><a> <div className={styles.navBTN}> 
                HOME </div></a></Link>
            <Link href="/bandas" ><a> <div className={styles.navBTN}> 
                LISTADO </div></a></Link>
        </div>
        </>
    )
}; 

function NavBar2(props){
    return(
        <>
        <div className={styles.generalNavCont}> 
            <Link href="/" ><a> <div className={styles.navBTN}> 
                HOME </div></a></Link>
            <Link href="/anadir" ><a> <div className={styles.navBTN}> 
                AÑADIR </div></a></Link>

        </div>
        </>
    )
}; 

export {NavBar, NavBar2}