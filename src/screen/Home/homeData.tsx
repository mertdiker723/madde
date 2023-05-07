import { createContext, useContext, useState } from "react";
import { ActiveLocationModal } from "../../db-temporary/types";

export type InitialContext = {
    state: ActiveLocationModal[];
    onChangeHander: (event: React.ChangeEvent<HTMLInputElement>, item?: ActiveLocationModal) => void;
}
export const ActivityContext = createContext<InitialContext | null>(null);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<ActiveLocationModal[]>([]);

    const onChangeHander = (event: React.ChangeEvent<HTMLInputElement>, item?: ActiveLocationModal) => {
        if (item) {
            const { target } = event;
            if (target.checked) {
                setState([...state, item]);
                return;
            }
            setState(state.filter(y => y.id !== item.id));
        }
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
