import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

import { MainBTN } from "../components/buttons"
import { useState } from 'react'





export default function Home() {

  const [bandData, setBandData] = useState(false)


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

          <div className={styles.BTNCont}>
            {bandData? 
            <>
            <Link href="/listado">
              <a>
                <MainBTN 
                  btnTag={"Listado de Bandas"}
                  btnAction={testerFunct}
                />
              </a>
            </Link>
            </>:<>
                <MainBTN 
                  btnTag={"Listado de Bandas"}
                  boolController={bandData}
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
