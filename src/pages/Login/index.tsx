import React, { useState } from 'react';
import './styles.css';
const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const Logo = require('../../assets/ifac.png')
    return (
        <>
            <div className="App">
                <div className='form-admin'>
                    <img src={Logo}  alt="IFAC" />
                    <form>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'Email'} />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Senha'} />
                        <strong onClick={() => { }} defaultValue="Fazer Login" >ACESSAR SISTEMA</strong>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;