import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

import { MainBTN } from "../components/buttons"
import { useState } from 'react'





export default function Home() {

  const [bandData, setBandData] = useState(true)
  const [userData, setUserData] = useState(true)


const testerFunct=()=>{
  return
}

  return (
    <div className={styles.container}>
      <Head>
        <title>El Sonido de Quito - App</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.welcomeContainerGeneral}>
          
          <div className={styles.titleText}>
            <div className={styles.blueTitle}> sonido </div>
            <div className={styles.redTitle}> de </div>
            <div className={styles.blueTitle}> quito </div>
          </div>

          <div className={styles.slogan}>
          "Asi suena mi distrito"
          </div>

          <div className={styles.BTNCont}>
            {bandData? 
              <>
              <Link href="/bandas">
                <a>
                  <MainBTN 
                    btnTag={"Listado de Bandas"}
                    btnAction={testerFunct}
                    availData={"Acceder Base de Datos"}
                  />
                </a>
              </Link>
              </>
              :<>
                  <MainBTN 
                    btnTag={"Listado de Bandas"}
                    boolController={bandData}
                    unavailData={"recopilando informacion"}
                  />
              </>
              }
            {userData? 
              <>
              <Link href="/anadir">
                <a>
                  <MainBTN 
                    btnTag={"Añadir Banda"}
                    availData={"Hola Jay!"}
                  />
                </a>
              </Link>
              </>
              :<>
                  <MainBTN 
                    btnTag={"Añadir Banda"}
                    boolController={userData}
                    unavailData={"Por favor registrarse"}
                  />
              </>
              }

          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
