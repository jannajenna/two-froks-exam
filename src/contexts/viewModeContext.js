import { createContext, useReducer } from "react";


export const ProgramContext = createContext();
export const UpdateContext = createContext();

const initialState = {
    mode: "CARD",
}

function reducer(state, action) {
    switch (action.action) {
        case "VIEW_CARD":
            console.log(state, action)
            return {
                ...state, mode: "CARD"
            };
        case "VIEW_LIST":
            console.log(state, action)
            return {
                ...state, mode: "LIST"
            };
    }
}

export const ProgramProvider = ({ children }) => {
    const [data, dispatch] = useReducer(reducer, initialState);
    return (
        <ProgramContext.Provider value={data}>
            <UpdateContext.Provider value={dispatch}>
                {children}
            </UpdateContext.Provider>
        </ProgramContext.Provider>
    )
}