import * as React from 'react'

const CountContext = React.createContext({count: 0})

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    case 'decrement': {
      return {count: state.count - 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CountProvider({children}) {
  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {CountProvider, useCount}