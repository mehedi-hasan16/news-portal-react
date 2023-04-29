/* eslint-disable react/prop-types */
import{ createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const authInfo={

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;