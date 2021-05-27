import React, {useReducer, createContext, useContext, useMemo} from "react"

const initialState = {
  themeColor: `light`,
}

const reducer = (store, action) => {
  switch (action.type) {
    case `THEME_COLOR`: {
      return {...store, themeColor: action.themeColor}
    }
    default:
      return store
  }
}

const StoreContext = createContext()
export const useStore = () => useContext(StoreContext)

const DispatchContext = createContext()
export const useDispatch = () => useContext(DispatchContext)

export const StoreProvider = ({children}) => {
  const [store, dispatch] = useReducer(reducer, initialState)

  console.log(store)

  return useMemo(() => {
    return (
      <StoreContext.Provider value={{store}}>
        <DispatchContext.Provider value={{dispatch}}>{children}</DispatchContext.Provider>
      </StoreContext.Provider>
    )
  }, [store])
}
