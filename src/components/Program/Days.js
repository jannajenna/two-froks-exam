import DayDropDownGrid from "./DayDropDownGrid";

export function Monday({ open, toggle, dataStage, selectedMode }) {
    //Days
    const stageMo = dataStage?.mon
    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="MONDAY"
            dataStage={stageMo}
            selectedMode={selectedMode}
        />
    );
}

export function Tuesday({ open, toggle, dataStage, selectedMode }) {
    //Days
    const stageTue = dataStage?.tue
    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="TUESDAY"
            dataStage={stageTue}
            selectedMode={selectedMode}
        />
    );
}

export function Wednesday({ open, toggle, dataStage, selectedMode }) {
    //Days
    const stageWed = dataStage?.wed
    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="WEDNESDAY"
            dataStage={stageWed}
            selectedMode={selectedMode}
        />
    );
}

export function Thursday({ open, toggle, dataStage, selectedMode }) {
    //Days
    const stageThu = dataStage?.thu
    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="THURSDAY"
            dataStage={stageThu}
            selectedMode={selectedMode}
        />
    );
}

export function Friday({ open, toggle, dataStage, selectedMode }) {
    //Days
    const stageFri = dataStage?.fri
    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="FRIDAY"
            dataStage={stageFri}
            selectedMode={selectedMode}
        />
    );
}

export function Saturday({ open, toggle, dataStage, selectedMode }) {
    //Days
    const stageSat = dataStage?.sat
    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="SATURDAY"
            dataStage={stageSat}
            selectedMode={selectedMode}
        />
    );
}

export function Sunday({ open, toggle, dataStage, selectedMode }) {
    //Days
    const stageSun = dataStage?.sun
    return (
        <DayDropDownGrid
            open={open}
            toggle={toggle}
            day="SUNDAY"
            dataStage={stageSun}
            selectedMode={selectedMode}
        />
    );
}