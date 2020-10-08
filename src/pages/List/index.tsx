import React, { useEffect, useState } from 'react';
import './styles.css';
import {Link} from 'react-router-dom'
import api from '../../service/api';
import { useToken } from '../../context/ContextAuth';
import Header from '../../components/Header';
interface Item {
    id: string;
    email: string;
    name: string;
    artigo: string;
    a: string,
    b: string,
    c: string,
    status: string,
    desculpa:string,
    d: string,
    desc: string,
}
const List: React.FC = () => {
    const { token } = useToken();
    const List = require('../../assets/list.png');
    const [listItem, setListItem] = useState<Item[]>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [descs, setDescs] = useState<string>('')
    const loadItems = () => {
        const config = {
            headers: { 'x-access-token': `${token}` }
        }
        api.get('/assessments/index', config).then(res => {
            if (res.data.message === 'success') {
                setListItem(res.data.res);
            }
        }).catch(res => { })
    };
    useEffect(() => {

        loadItems();
        // eslint-disable-next-line
    }, []);
    const onRecuseText = (e: string) =>{
        setDescs(e);
        setModal(true)
    }
    return (
        <>
            <Header />
            <div className="spacinfss" />
            <div className="App">
                <div className="containerlistava">
                    <h2 className='biufvivfiuw'>LISTA DE AVALIAÇÕES</h2>
                    <table id="customers">
                        <thead>
                            <th>Parceirista</th>
                            <th>Artigo</th>
                            <th>Status</th>
                            <th>Avaliação</th>
                        </thead>
                        <tbody>
                            {listItem.map((res) => {
    
                                return (
                                    <tr key={res.id}>
                                        <td>{res.name}</td>
                                        <td>{res.artigo}</td>
                                        <td onClick={()=> res.status === 'recusado' ?onRecuseText(res.desculpa) : {}} className={res.status === 'recusado' ? 'reeeeeeed' : ''} >{String(res.status.toUpperCase())}</td>
                                        <td><Link to={`/criterios/${res.id}`} className={'nodunbobw'}>VER AVALIAÇÃO</Link></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>

                </div>
            </div>
            {modal && <div className="modal" >
                <div onClick={() => { }} className="modal-content">
                    <h2>Motivo</h2>
                    <textarea className='bcuoahsvoyuvvtasbps' name="" id="" >{descs}</textarea>
                    <div className='cancel' onClick={() => setModal(false)}>Fechar</div>
                </div>
            </div>}

            <Link to='/' className="float">
                <img height='40%' src={List} alt="" />
            </Link>
        </>
    )
}
export default List;