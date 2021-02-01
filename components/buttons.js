import styles from "../styles/Buttons.module.css"

function MainBTN(props){

    return(
        <>
            <div className={styles.mainBTNCont}
            onClick={()=>{
                if(props.btnAction){
                    props.btnAction()
                }
                    }}> 
                {props.btnTag}
            </div>
        </>
    )
} export { MainBTN };
