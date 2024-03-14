import React, { useState } from 'react' 


export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState('no user')

    const handleUser = () => {
        setUser(prev => '1st user')
    }      

    const contextData = {user, handleUser}
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return(
        React.useContext(AuthContext)
    )
}