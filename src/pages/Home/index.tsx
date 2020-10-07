import React, { useCallback, useState } from 'react';
import Header from '../../components/Header';
import './styles.css';
const Home: React.FC = () => {
    const List = require('../../assets/list.png')
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [artigo, setArtigo] = useState<string>('');
    const [resumo, setResumo] = useState<string>('');
    const onSubmit = () => {

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
                                <input value={email} onChange={(e) => emailValue(e)} type="text" id="fname" name="fname" />
                            </div>
                            <div className="rowwww">
                                <label htmlFor="lname"> Nome da parceirista</label>
                                <input value={name} onChange={(e) => nameValue(e)} type="text" id="lname" name="lname" />
                            </div>
                        </div>
                        <div className='rowss'>
                            <label htmlFor="lname"> Nome do artigo</label>
                            <input value={artigo} onChange={(e) => artigoValue(e)} type="text" id="lname" name="lname" />
                        </div>
                        <div className="rowss">
                            <label htmlFor="lname"> Resumo do artigo</label>
                            <textarea value={resumo} onChange={(e) => resumoValue(e)} name="" id="" />
                        </div>
                        <strong onClick={onSubmit} className='submitEmailSend'>ENVIAR EMAIL</strong>
                    </form>
                </div>
            </div>

            <span className="float">
                <img height='40%' src={List} alt="" />
            </span>

        </>
    )
}
export default Home;