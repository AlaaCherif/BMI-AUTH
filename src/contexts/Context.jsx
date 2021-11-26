import { useContext, useState } from "react";
import React from "react";


const InfoContext = React.createContext();

export function useInfo() {
       return useContext(InfoContext)
}
export const InfoProvider = ({ children }) => {
       const [weight, setWeight] = useState(0)
       const [height, setHeight] = useState(0)

       const value = {
              weight,
              setWeight,
              height,
              setHeight
       }

       return (
              <InfoContext.Provider value={value}>
                     {children}
              </InfoContext.Provider>
       )
}