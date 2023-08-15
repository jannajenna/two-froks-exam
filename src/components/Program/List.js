import styles from "./ProgramElements.module.css"
import { AiOutlineStar } from "react-icons/ai"

export default function List({ data }) {
    return (
        <div>
            <div className={styles.bkg}>
                <div className={styles.list_container}>
                    <AiOutlineStar className={`${styles.icon_size} ${styles.icon_list}`} />
                    <div className={styles.row_line}>
                        <h4 className={styles.uppercase}>{data.act}</h4>
                        <div className={styles.row_container}>
                            <p>{data.start} - {data.end} </p>
                        </div>
                    </div>
                </div>

                <hr className={styles.solid_list}></hr>
            </div>
            <div>

            </div>
        </div >
    );
}