import {useContext, createContext, useReducer, useEffect} from "react";
import {dataReducer} from "../reducer/dataReducer"

const PrimaryStates = createContext();

const initialStates = {
    userData : [],
    modal : false,
}

const PrimaryStatesProvider = ({children}) => {

    const [state, dispatch] = useReducer(dataReducer, initialStates)

    useEffect(()=>{
        if(state.userData.length >= 0){
            localStorage.setItem("userData", JSON.stringify(state.userData))
        } 
    },[state.userData])

    return(
        <PrimaryStates.Provider value={{state, dispatch}}>
            {children}
        </PrimaryStates.Provider>
    )
}

const usePrimaryStatesContext = () => useContext(PrimaryStates)

export { PrimaryStatesProvider, usePrimaryStatesContext }