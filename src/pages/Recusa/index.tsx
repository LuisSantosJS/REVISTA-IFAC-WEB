import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../service/api';
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
const Recusa: React.FC = () => {
    const [desculpa, setDesculpa] = useState<string>('')
    const chlindren: any = useParams();
    const [alert, setAlert] = useState<string>('');
    const Logo = require('../../assets/ifac.png')
    const { addToast } = useToasts();
    useEffect(()=>{
        api.get(`/exist/docume/${chlindren.id}/yes`).then(res=>{
             addToast(`${res.data.res}`, {
                appearance: 'info',
                autoDismiss: true,
            })
            if(res.data.message === 'exist'){
                setAlert(res.data.res2);
                return addToast(`${res.data.res2}`, {
                    appearance: 'info',
                })
            }
        })
    },[])
    const onSubmit = () => {
        if (desculpa.length === 0) {
            return addToast(`Preencha o campo!`, {
                appearance: 'error',
                autoDismiss: true,
            })
        }
        api.post('/recusa/desculpa', {
            id: chlindren.id,
            desculpa
        }).then(res => {
            if (res.data.message === 'success') {
                api.get(`/recusa/${chlindren.id}`).then((res) => {
                    if (res.data.message === 'success') {
                        return addToast(`Enviado com sucesso!`, {
                            appearance: 'success',
                            autoDismiss: true,
                        })
                    }else{
                        return addToast(`Ocorreu um erro!`, {
                            appearance: 'error',
                            autoDismiss: true,
                        })
                    }
                })
            }else{
                return addToast(`Ocorreu um erro!`, {
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
        }).catch(() => {
            return addToast(`Ocorreu um erro!`, {
                appearance: 'error',
                autoDismiss: true,
            })
        })
    }

    return (
        
        <>
            <div className="App">
                <div className='form-recusaa'>
                    <img src={Logo}  alt=""/>
                    <h3 className='avtsbt'>Qual motivo?</h3>
                    <textarea value={desculpa} onChange={(e) => setDesculpa(e.target.value)} className='vabrhuobrsuygvorsucbur' rows={4} name="" id="" >

                    </textarea>
                    <div className="vniuasrbvisbrv">
                        <h5 className='adfasr'>{alert}</h5>
                    </div>
                    <strong onClick={onSubmit}>SUBMETER RESPOSTA</strong>
                </div>
            </div>
        </>
    )
}
export default Recusa;