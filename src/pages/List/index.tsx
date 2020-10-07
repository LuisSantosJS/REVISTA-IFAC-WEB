import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../service/api';
import { useToken } from '../../context/ContextAuth';
import Header from '../../components/Header';
interface Item {
    id: string;
    email: string;
    name: string;
    artigo: string;
}
const List: React.FC = () => {
    const { token } = useToken();
    const [listItem, setListItem] = useState<Item[]>([]);
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
    return (
        <>
            <Header />
            <div className="spacinfss" />
            <div className="App">
                <div className="containerlistava">
                    <h2 className='biufvivfiuw'>LISTA DE AVALIAÇÕES</h2>
                    <table id="customers">
                        <tbody>
                            {listItem.map(res => {
                                return (
                                    <tr key={res.id}>
                                        <td>{res.name}</td>
                                        <td>{res.artigo}</td>
                                        <td><span className={'nodunbobw'}>VER AVALIAÇÃO</span></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
export default List;