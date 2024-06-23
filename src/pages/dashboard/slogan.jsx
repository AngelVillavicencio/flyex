import React from 'react';
import logo from '../../assets/logo.png';
import './Slogan.css'; //CSS

export const Slogan = () => {
    return (
        <section className="Slogan">
            <img src={logo} alt="Viaje frustrado" className="slogan-image" />
            <div className="slogan-content">
                <h1>¡Viaje frustrado, dinero asegurado con Flyex!</h1>
                <div className="slogan-buttons">
                    <button className="btn">Comprar</button>
                    <button className="btn">Vender</button>
                </div>
            </div>
        </section>
    );
}

export default Slogan;
