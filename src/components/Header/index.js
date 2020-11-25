import React from 'react';

import Logo from '../../assets/img/logo.jpg';

import './styles.css';
/* Criando componentes no react com funções, em vez de utilizar render e definir a classe Header */
const Header = () => (
<header id="main-header">
    <img className="Logo" src={Logo} alt="Logo JSProjects" />
</header>
);

export default Header;