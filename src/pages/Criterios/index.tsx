import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../service/api';
import { useArtigoName } from '../../context/ContextAuth';
import { useParams } from 'react-router-dom';

interface Item {
    id: number,
    docID: number,
    a: string,
    b: string,
    c: string,
    d: string,
    desc: string
}
const Criterios: React.FC = () => {

    const chlindren: any = useParams();
    const ID = chlindren.id;
    const [a, setA] = useState<string>('')
    const [b, setB] = useState<string>('')
    const [c, setC] = useState<string>('')
    const [d, setD] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const { artigo } = useArtigoName()

    useEffect(() => {
        api.post('/docume/show', { id: ID }).then(res => {
            if (res.data.message === 'success') {
                const data: Item = res.data.res[0];
                setA(data.a);
                setB(data.b);
                setC(data.c);
                setD(data.d);
                setDesc(data.desc);
            }
        }).catch((err) => { })
    }, []);

    const Aa: string[] = a.split(',');
    const Bb: string[] = b.split(',');
    const Cc: string[] = c.split(',');

    return (
        <>
            <div className="App2">
                <div className="viewContainehgxjhcy">
                    <br />
                    <h4 className='vrsv4'>{artigo}</h4>
                    <br />
                    <table id="customers2">
                        <thead>
                            <tr>
                                <th>Critérios Linguísticos e Formais</th>
                                <th>Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Qualidade escrita, organização e apresentação do texto</td>
                                <td>{Aa[0]}</td>
                            </tr>
                            <tr>
                                <td>Objetividade e clareza</td>
                                <td>{Aa[1]}</td>
                            </tr>
                            <tr>
                                <td>Distribuição lógica das seções dos trabalhos</td>
                                <td>{Aa[2]}</td>
                            </tr>
                            <tr>
                                <td> Adequação e qualidade das ilustrações</td>
                                <td>{Aa[3]}</td>
                            </tr>

                        </tbody>


                        <thead>
                            <tr>
                                <th>Critérios Metofológicos</th>
                                <th>Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Indicação das referências bibliográficas</td>
                                <td>{Bb[0]}</td>
                            </tr>
                            <tr>
                                <td>Possui fundamentação teórica</td>
                                <td>{Bb[1]}</td>
                            </tr>
                            <tr>
                                <td>Rigor científico e metodológico(articulação entre problema, objetivos e resultados)</td>
                                <td>{Bb[2]}</td>
                            </tr>
                            <tr>
                                <td> A metodologia foi adequada na análise dos resultados</td>
                                <td>{Bb[3]}</td>
                            </tr>
                        </tbody>




                        <thead>
                            <tr>
                                <th>Critérios Específicos da área</th>
                                <th>Pontuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adequação do titulo</td>
                                <td>{Cc[0]}</td>
                            </tr>
                            <tr>
                                <td>Originalidade do tema</td>
                                <td>{Cc[1]}</td>
                            </tr>
                            <tr>
                                <td>Formulação do problema de pesquisa</td>
                                <td>{Cc[2]}</td>
                            </tr>
                            <tr>
                                <td> Relevância para o desenvolvimento do conhecimento científico, tecnológico, social e cultutal</td>
                                <td>{Cc[3]}</td>
                            </tr>
                            <tr>
                                <td> Resultados satisfatórios </td>
                                <td>{Cc[4]}</td>
                            </tr>
                        </tbody>

                    </table>
                    <br />
                    <br />
                    <table id="customers2">
                        <tbody>
                            <tr>
                                <td className='vniasyuvbapjcpeoi' >({d === '0' ? 'X' : '  '}) Não Recomendada</td>
                                <td className='vniasyuvbapjcpeoi'>({d === '1' ? 'X' : '  '}) Recomendada</td>
                                <td className='vniasyuvbapjcpeoi' >({d === '2' ? 'X' : '  '}) Recomendada com restrições</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <br />

                    <table id="customers2">
                        <tbody>
                            <td className='avnbisurgoa'>Total</td>
                            <td>{Number(Number(Aa[0]) + Number(Aa[1]) + Number(Aa[2]) + Number(Aa[3]) + Number(Number(Bb[0]) * 2) + Number(Bb[1]) + Number(Bb[2]) + Number(Number(Bb[3]) * 2) + Number(Number(Cc[0]) * 2) + Number(Number(Cc[1]) * 2) + Number(Number(Cc[2]) * 2) + Number(Number(Cc[3]) * 2) + Number(Number(Cc[4]) * 2))}</td>
                        </tbody>
                    </table>



                    <br />
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='asvnoarivfhcor0tjpew'>
                        <label > Comentários adicionais</label>
                        <div className='bcuoahsvoyuvvtasbp' >
                            {desc}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Criterios;