import {React, createContext, useState} from 'react'

export const SearchTagContext = createContext()

export const SearchTagProvider = ({children}) => {
    const [tagQuery, settagQuery] = useState({
        tag: ""
      });
    const [result, setResult] = useState([])
    const [filterResult, setFilterResult] = useState([])
    const [status, setStatus] = useState(false)
    const [route, setRoute] = useState("")
    console.log(route)

    const value = {tagQuery, settagQuery, result, setResult, filterResult, setFilterResult, status, setStatus, route, setRoute}

  return <SearchTagContext.Provider value={value}>{children}</SearchTagContext.Provider>
}
