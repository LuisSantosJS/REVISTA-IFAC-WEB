import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../service/api';

type ContextType = {
    userSaved: boolean;
    setUserSaved: (value: boolean) => void;
    token: string;
    setToken: (value: string) => void;
    userEmail: string;
    setUserEmail: (value: string) => void;
    userPassword: string;
    setUserPassword: (value: string) => void;
    artigo: string;
    setArtigo: (value: string) => void;

};


const ContextMain = createContext<ContextType>({
    userSaved: false,
    setUserSaved: (value: boolean) => { },
    token: '',
    setToken: (value: string) => { },
    userEmail: '',
    setUserEmail: (value: string) => { },
    userPassword: '',
    setUserPassword: (value: string) => { },
    artigo: '',
    setArtigo: (value: string) => { },
});


const Provider: React.FC = ({ children }) => {


    const [userSaved, setUserSaved] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [artigo, setArtigo] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    useEffect(() => {
        const checkAuth = () => {
            api.post('/users/login', {
                email: userEmail.toLowerCase(),
                password: userPassword
            }).then(res => {
                console.log(res.data)
                if (res.data.message === 'error') {
                    return setUserSaved(false);
                }
                setToken(res.data.token);
            }).catch(res => console.log('aaaa', res)).finally(() => {
                setTimeout(() => {
                    return checkAuth();
                }, Number(120 * 60000));
            })
        }
        if (userSaved) {
            setTimeout(() => {
                return checkAuth();
            }, Number(120 * 60000));
        }
        // eslint-disable-next-line 
    }, [userSaved]);



    return (
        <ContextMain.Provider value={{
            userSaved, setUserSaved,
            artigo, setArtigo,
            token, setToken,
            userEmail, setUserEmail,
            userPassword, setUserPassword
        }}>
            {children}
        </ContextMain.Provider>
    );
}
export default Provider;


export function useUserSaved() {
    const infoUser: ContextType = useContext(ContextMain);
    const { userSaved, setUserSaved } = infoUser;
    return { userSaved, setUserSaved };
}

export function useToken() {
    const infoUser: ContextType = useContext(ContextMain);
    const { token, setToken } = infoUser;
    return { token, setToken };
}

export function useUserEmail() {
    const infoUser: ContextType = useContext(ContextMain);
    const { userEmail, setUserEmail } = infoUser;
    return { userEmail, setUserEmail };
}
export function useUserPassword() {
    const infoUser: ContextType = useContext(ContextMain);
    const { userPassword, setUserPassword } = infoUser;
    return { userPassword, setUserPassword };
}

export function useArtigoName() {
    const infoUser: ContextType = useContext(ContextMain);
    const { artigo, setArtigo } = infoUser;
    return { artigo, setArtigo };
}