import DayDropDownGrid from "./DayDropDownGrid";

export function Monday({ bands, open, toggle, dataStage, selectedMode }) {


    //Days
    const stageMo = dataStage?.mon

    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="MONDAY"
            dataStage={stageMo}
            selectedMode={selectedMode}
        />
    );
}


export function Tuesday({ bands, open, toggle, dataStage, selectedMode }) {

    //Days
    const stageTue = dataStage?.tue

    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="TUESDAY"
            dataStage={stageTue}
            selectedMode={selectedMode}

        />
    );
}

export function Wednesday({ bands, open, toggle, dataStage, selectedMode }) {

    //Days
    const stageWed = dataStage?.wed


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="WEDNESDAY"
            dataStage={stageWed}
            selectedMode={selectedMode}

        />
    );
}

export function Thursday({ bands, open, toggle, dataStage, selectedMode }) {

    //Days
    const stageThu = dataStage?.thu


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="THURSDAY"
            dataStage={stageThu}
            selectedMode={selectedMode}

        />
    );
}

export function Friday({ bands, open, toggle, dataStage, selectedMode }) {

    //Days
    const stageFri = dataStage?.fri


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="FRIDAY"
            dataStage={stageFri}
            selectedMode={selectedMode}

        />
    );
}

export function Saturday({ bands, open, toggle, dataStage, selectedMode }) {

    //Days
    const stageSat = dataStage?.sat


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="SATURDAY"
            dataStage={stageSat}
            selectedMode={selectedMode}

        />
    );
}

export function Sunday({ bands, open, toggle, dataStage, selectedMode }) {

    //Days
    const stageSun = dataStage?.sun


    return (
        <DayDropDownGrid
            bands={bands}
            open={open}
            toggle={toggle}
            day="SUNDAY"
            dataStage={stageSun}
            selectedMode={selectedMode}

        />
    );
}