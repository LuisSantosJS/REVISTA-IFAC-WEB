import React from 'react';
import Auth from './auth'
import Authenticate from './authenticate'
import { useUserSaved } from '../context/ContextAuth';
const App: React.FC = () => {
    const { userSaved } = useUserSaved();
    if (userSaved) {
        return <Authenticate />
    }
    return <Auth />

}
export default App;