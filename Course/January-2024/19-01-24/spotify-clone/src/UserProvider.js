import { createContext } from "react"

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    return (<div>
        <UserContext.Provider value={{ fullName: "akash", age: 33 }}>
            {children}
        </UserContext.Provider>

    </div>)

}