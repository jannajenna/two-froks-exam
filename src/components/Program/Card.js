import styles from "./ProgramElements.module.css";
import { AiOutlineStar } from "react-icons/ai"


export default function Card({ data }) {

    //console.log(data)
    //console.log("card")

    return (
        <div>
            <div className={`${styles.card_container} ${styles.bkg}`}>
                <div className={styles.img_container}>
                    {/* <img className={styles.img} src="" alt=""></img> */}
                    <AiOutlineStar className={`${styles.icon_size} ${styles.icon}`} />
                </div>
                <div /* className={styles.column_container} */>
                    <h4>{data.act}</h4>
                    <div className={styles.row_container}>
                        <p>{data.start} - {data.end} </p>
                    </div>
                    <hr className={styles.solid}></hr>
                </div>
            </div>
            <div>

            </div>
        </div >
    );
}

