import React, { createContext, useEffect, useState } from 'react';
export const LoadingCon = createContext()
const LoadingContext = ({children}) => {
  const [loading  , setLoading] = useState(false)

  return <LoadingCon.Provider value={{loading ,setLoading }}>{children}</LoadingCon.Provider>


}

export default LoadingContext;
