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

export default function Filterprogram({ data, bands }) {

    //Accordion
    const [open, setOpen] = useState(false);
    const toggle = () => {
        if (open) {
            return setOpen(false);
        }
        setOpen(true);

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

    //Viewmode: card or list
    /* const [selectedView, setSelectedView] = useState("Card");
    const handleViewClick = (view) => setSelectedView(view); */

    /*   let selectedMode;
      if (selectedView === "Card") {
          selectedMode = "Card"
      } else if (selectedView === "List") {
          selectedMode = "List"
      } else {
          selectedMode = "Card"
      } */

    //console.log("View selected:", selectedMode);

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
            <Viewmode /* onviewclick={handleViewClick} */ />
            <DayGrid
                bands={bands}
                dataStage={selectedData}
                name={selectedStage}
            /* viewMode={selectedMode} */
            />
        </div>
    );
}
