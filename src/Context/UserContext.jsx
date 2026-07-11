import { Children, createContext } from "react";



export const UserContext = createContext();

//function provider

const UserContextProvider = ({Children})=>{

  const userName = "Aseel";
  const UserAge = 28;

  return <UserContextProvider value={userName, UserAge}>
    {Children}
  </UserContextProvider>
}

export default UserContextProvider;
