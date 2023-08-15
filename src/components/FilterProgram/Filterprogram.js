import { useState } from "react";
//components imported
import Viewmode from "@/components/Program/Viewmode";
import DayGrid from "@/components/Program/DayGrid";
//Filtercomponnts
import ByDay from "./ByDay";
import ByStage from "./ByStage";
import ByTime from "./ByTime";
import styles from "./Filterprogram.module.css";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import { Collapse } from "react-collapse";

//View mode selection
export default function Filterprogram({ data }) {

    //Accordion
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(open => !open);
    };

    //Filter stages
    // State to keep track of the selected stage and its data
    const [selectedStage, setSelectedStage] = useState("Midgard");
    // Function to update the selected stage and its data
    const handleStageClick = (stage) => setSelectedStage(stage);

    // The data for each stage
    const midgardData = data.Midgard;
    const jotunheimData = data.Jotunheim;
    const vanaheimData = data.Vanaheim

    let selectedData;
    selectedData = (selectedStage === "Midgard") ? midgardData :
        (selectedStage === "Jotunheim") ? jotunheimData :
            (selectedStage === "Vanaheim") ? vanaheimData : null;

    return (
        <div >
            <div className={styles.bkg}>
                <div className={styles.accordion} onClick={toggle} >
                    <p>Filter</p>
                    {open ? <BsChevronUp className={styles.icon_size} /> : <BsChevronDown className={styles.icon_size} />}
                </div>
                <Collapse isOpened={open} >
                    <ByStage data={data} onstageClick={handleStageClick} />
                    <ByDay />
                    <ByTime />
                    <h5 className={styles.clear}>Clear all</h5>
                </Collapse>
            </div>
            <Viewmode />
            <DayGrid
                dataStage={selectedData}
                name={selectedStage}
            />
        </div>
    );
}
