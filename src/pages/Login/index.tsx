import React, { useState } from 'react';
import './styles.css';

import api from '../../service/api';
import { useToasts } from 'react-toast-notifications';
import { useToken, useUserEmail, useUserPassword, useUserSaved } from '../../context/ContextAuth';
const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const Logo = require('../../assets/ifac.png');
    const { setToken } = useToken();
    const { addToast } = useToasts();
    const { setUserPassword } = useUserPassword();
    const { setUserEmail } = useUserEmail();
    const { setUserSaved } = useUserSaved();
    const onSubmit = () => {
        api.post('/users/login', {
            email: email.toLowerCase(),
            password: password
        }).then(res => {
            if (res.data.message === 'error') {
                return addToast(`${res.data.res}`, {
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
            setUserPassword(password);
            setUserEmail(email);
            setToken(res.data.token);
            setUserSaved(true);
            return addToast(`${res.data.res}`, {
                appearance: 'success',
                autoDismiss: true,
            })
        }).catch(res => {
            return addToast(`Ocorreu um erro!`, {
                appearance: 'error',
                autoDismiss: true,
            })
        });
    }
    return (
        <>
            <div className="App">
                <div className='form-admin'>
                    <img src={Logo} alt="IFAC" />
                    <form>
                        <input type='text' className='fggrqqrg4fwg' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Email'} />
                        <input className='fggrqqrg4fwg' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Senha'} />
                        <strong onClick={onSubmit} defaultValue="Fazer Login" >ACESSAR SISTEMA</strong>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;