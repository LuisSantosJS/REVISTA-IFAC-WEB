import React from 'react';
import './styles.css'
const Header: React.FC = () => {
    const Sair = require('../../assets/sair.png');
    const User = require('../../assets/user.png');
    return (
        <>

            <nav className='navs'>
                <ul className='uls'>
                    <li className='lis'><span onClick={() => { }}><img height='24' src={User} alt="" /></span></li>
                    <li className='lis'><span onClick={() => { }}>GESTÃO E CONTROLE</span></li>
                    <li className='lis'><span onClick={() => { }}><img height='24' src={Sair} alt="" /></span></li>
                </ul>
            </nav>

        </>
    )
}
export default Header;