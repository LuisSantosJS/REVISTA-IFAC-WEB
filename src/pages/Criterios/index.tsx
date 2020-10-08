import React from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
const Criterios: React.FC = () => {

    const chlindren: any = useParams();
    const a: string = chlindren.a;
    const b: string = chlindren.b;
    const c: string = chlindren.c;
    const d: string = chlindren.d;
    const desc: string = chlindren.desc;

    const Aa = a.split(',');
    const Bb = b.split(',');
    const Cc = c.split(',');

    return (
        <>
            <div className="App">
                <div className="viewContainehgxjhcy">
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
                            <tr>
                                <td> A metodologia foi adequada naanálise dos resultados</td>
                                <td>{Bb[4]}</td>
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
                    <table id="customers2">
                        <tbody>
                            <tr>
                                <td className='vniasyuvbapjcpeoi' >({d === '0' ? 'X' : '  '}) Não Recomendada</td>
                                <td className='vniasyuvbapjcpeoi'>({d === '1' ? 'X' : '  '}) Recomendada</td>
                                <td className='vniasyuvbapjcpeoi' >({d === '2' ? 'X' : '  '}) Recomendada com restrições</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className='h2spacinfagr' />

                    <div className='asvnoarivfhcor0tjpew'>
                        <label > Comentários adicionais</label>
                        <textarea value={desc} className='bcuoahsvoyuvvtasbp' name="" id="" />
                    </div>
                    <div className="vniuasrbvisbrv"></div>
                </div>
            </div>
        </>
    )
}

export default Criterios;