import { Collapse } from "react-collapse";
import styles from "./ProgramElements.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import Card from "./Card";
import List from "./List";

import { useContext } from "react";
import { ProgramContext } from "@/contexts/viewModeContext";

export default function DayDropDownGrid({ bands, open, toggle, dataStage, day }) {
    //Remove breaks from program
    const onlyBands = dataStage?.filter((band) => band.act !== "break")

    //Display cards or list elements
    const { mode } = useContext(ProgramContext);

    //Images?
    console.log(bands)

    return (
        <div className={styles.flex_column}>
            <div className={`${styles.color_day} ${styles.flex_row}`} onClick={toggle}>
                <h3>{day}</h3>
                <div>
                    {open ? <AiOutlineMinus className={styles.icon_size} /> : <AiOutlinePlus className={styles.icon_size} />}
                </div>
            </div>
            <Collapse isOpened={open}>
                {mode === "CARD" ? <div className={styles.grid_cards}>
                    {onlyBands?.map((item) => (
                        <Card key={item.act} data={item} />
                    ))}
                </div> : mode === "LIST" ? < div >
                    {onlyBands?.map((item) => (
                        <List key={item.act} data={item} />
                    ))}
                </div> : null}
            </Collapse>
        </div >
    );
}
