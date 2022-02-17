import React, { createContext, useState } from "react"


export const DataContext = createContext()

export function DataProvaider({ children }) {
          const [input, setInput] = useState("")
          const [showSearch, setShowSearch] = useState(false)
          const [fetchData, setFetchData] = useState([])
          return (
                    <DataContext.Provider value={{ input, setInput, showSearch, setShowSearch, fetchData, setFetchData }}>{children}</DataContext.Provider>
          )
}