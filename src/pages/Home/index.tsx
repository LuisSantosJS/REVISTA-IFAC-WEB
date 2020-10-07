import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import './styles.css';
import api from '../../service/api';
import { useToasts } from 'react-toast-notifications';
import { useToken } from '../../context/ContextAuth';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
    const List = require('../../assets/list.png');
    const { token } = useToken();
    const { addToast } = useToasts();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [artigo, setArtigo] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const onSubmit = () => {
        if ((email.length === 0) || (name.length === 0) || (artigo.length === 0) || (resumo.length === 0)) {
            return addToast(`Preencha todos os campos`, {
                appearance: 'error',
                autoDismiss: true,
            })
        }

        const config = {
            headers: { 'x-access-token': `${token}` }
        }
        api.post('/email/send', {
            email: String(email.toLowerCase()),
            artigo,
            resumo,
            name
        }, config).then(res => {
            if (res.data.message === 'success') {
                setEmail('');
                setName('');
                
                return addToast(`Email enviado!`, {
                    appearance: 'success',
                    autoDismiss: true,
                })
            } else {
                return addToast(`Ocorreu um erro ao enviar email!`, {
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
        }).catch(() => {
            return addToast(`Ocorreu um erro ao enviar email!`, {
                appearance: 'error',
                autoDismiss: true,
            })
        })
    }
    const emailValue = useCallback((e: any) => setEmail(e.target.value), []);
    const nameValue = useCallback((e: any) => setName(e.target.value), []);
    const artigoValue = useCallback((e: any) => setArtigo(e.target.value), []);
    const resumoValue = useCallback((e: any) => setResumo(e.target.value), [])

    return (
        <>
            <Header />
            <div className="spacinfss" />
            <div className="App">
                <div className="containersendemailhome">
                    <form className='formsss'>
                        <h2>ENVIAR NOVO EMAIL</h2>
                        <div className='rowss rowsa'>
                            <div className="rowwww">
                                <label htmlFor="fname"> Email de destino</label>
                                <input className={'inpstshome'} value={email} onChange={(e) => emailValue(e)} type="text" id="fname" name="fname" />
                            </div>
                            <div className="rowwww">
                                <label htmlFor="lname"> Nome da parceirista</label>
                                <input className={'inpstshome'} value={name} onChange={(e) => nameValue(e)} type="text" id="lname" name="lname" />
                            </div>
                        </div>
                        <div className='rowss'>
                            <label htmlFor="lname"> Nome do artigo</label>
                            <input className={'inpstshome'} value={artigo} onChange={(e) => artigoValue(e)} type="text" id="lname" name="lname" />
                        </div>
                        <div className="rowss">
                            <label htmlFor="lname"> Resumo do artigo</label>
                            <textarea className='textareas' value={resumo} onChange={(e) => resumoValue(e)} name="" id="" />
                        </div>
                        <strong onClick={onSubmit} className='submitEmailSend'>ENVIAR EMAIL</strong>
                    </form>
                </div>
            </div>

            <Link to='/assessments' className="float">
                <img height='40%' src={List} alt="" />
            </Link>

        </>
    )
}
export default Home;