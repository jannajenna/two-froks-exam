import styles from "./ProgramElements.module.css";
import { FaListUl } from "react-icons/fa"
import { BsFillGridFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"
import { useContext } from "react";
import { UpdateContext } from "@/contexts/viewModeContext";

export default function Viewmode() {
    const dispatch = useContext(UpdateContext)
    return (
        <div className={styles.flex_row_icons}>

            <FaListUl className={styles.icon_size}
                onClick={() => dispatch({ action: "VIEW_LIST" })} />
            <BsFillGridFill className={styles.icon_size}
                onClick={() => dispatch({ action: "VIEW_CARD" })}
            />
            <AiFillStar className={`${styles.icon_size} ${styles.icon_list}`} />
        </div>
    );
}
