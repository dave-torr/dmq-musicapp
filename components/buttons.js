import styles from "../styles/misc.module.css"

function MainBTN(props){

    return(
        <>
            <div className={styles.mainBTNCont}
                onClick={()=>{
                    if(props.btnAction){
                        props.btnAction()
                        }}}>
                <div className={styles.BTNtag}>
                    {props.btnTag}
                </div>
                {props.unavailData&&
                    <div className={styles.unavailData}>
                        {props.unavailData}
                    </div>}
                {props.availData&&
                    <div className={styles.availData}>
                        {props.availData}
                    </div>}
            </div>
        </>
    )
} export { MainBTN };
