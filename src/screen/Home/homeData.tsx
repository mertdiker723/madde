import { createContext, useContext, useReducer, useState } from "react";
import { ActiveLocationModal } from "../../db-temporary/types";


export type InitialContext = {
    state: ActiveLocationModal[];
    onChangeHander: (item: ActiveLocationModal) => void;
}
export const ActivityContext = createContext<InitialContext | null>(null);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<ActiveLocationModal[]>([]);

    const onChangeHander = (item: ActiveLocationModal) => {
        setState([...state, item])
    }

    return (
        <ActivityContext.Provider value={{ state, onChangeHander }}>
            {children}
        </ActivityContext.Provider>
    )
}

export const useDataState = () => {
    const context = useContext(ActivityContext);
    if (!context) {
        throw new Error("useDataState has to be used within <ActivityContext.Provider>");
    }
    return context;
}
