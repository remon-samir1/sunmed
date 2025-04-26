import React, { createContext, useEffect, useState } from 'react';
export const Menu = createContext()
const MenuContext = ({children}) => {
  const [isOpen  , setIsOpen] = useState(false)

  return <Menu.Provider value={{isOpen ,setIsOpen }}>{children}</Menu.Provider>


}

export default MenuContext;
