import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import tapi from '../../Assets/Imagens/tapi.jpg'
import { Header } from '../../Componentes/Header/Header.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';


const Home = () => {

    return (
        <>

            <Header />

            <body>
                <div className="body__content">
                    <div className="body__content--text">
                        <figure>
                            <img src={tapi} alt="Bandeira Tapiratiba" title="Bandeira Tapiratiba" />
                        </figure>
                        <br></br>
                        <Text text="Bem-vindo ao Sistema Integrado de Fisioterapia" />
                        <Text text="Essa aplicação web foi desenvolvida para facilitar a logística 
                                    de dados colhidos pelo setor de Fisioterapia da Santa Casa Misercicórdia de Guaxupé" />
                        <Link to="/login">
                            <button className="button--assine">Começar agora</button>
                        </Link>  
                    </div>              
                </div>
            </body>

        </>
    )
}

export { Home }
