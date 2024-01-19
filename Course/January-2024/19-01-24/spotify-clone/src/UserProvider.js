import { createContext, useContext ,useState} from "react"

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [getUser,setUser] = useState(null);

    const signInUser = (input)=>{
        setUser(input);
    }

    const object={
        getUser,
        signInUser
    }


    return (<div>
        <UserContext.Provider value={object}>
            {children}
        </UserContext.Provider>

    </div>)

}

export function useUser(){
    return useContext(UserContext);
}
