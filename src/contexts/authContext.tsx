
import { createContext, ReactNode, useState } from 'react';

type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const signIn = () => setIsAuthenticated(true);
    const signOut = () => setIsAuthenticated(false);
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login: signIn, logout: signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
