import LayoutPages from "../components/LayoutPages";
import React from 'react';
import './App.css'; // Archivo CSS para los estilos

const listadoViajes = [
{ id: 1, ofertadoPor: "Carlos", aerolinea: "JetSMART Perú", salida: "Lima", destino: "Trujillo", fecha: "13/07/2024", precioOriginal: 170, precioDescuento: 130 },
{ id: 2, ofertadoPor: "Andrea M", aerolinea: "LATAM Perú", salida: "Lima", destino: "Cusco", fecha: "13/07/2024", precioOriginal: 250, precioDescuento: 200 },
{ id: 3, ofertadoPor: "Francisco", aerolinea: "Sky Airline Perú", salida: "Arequipa", destino: "Tacna", fecha: "13/07/2024", precioOriginal: 120, precioDescuento: 80 },
{ id: 4, ofertadoPor: "Paola A", aerolinea: "Atsa Airlines", salida: "Iquitos", destino: "Lima", fecha: "13/07/2024", precioOriginal: 190, precioDescuento: 150 }
];

/*const Index = ()=>{
    return (<>
    <LayoutPages>
    
    </LayoutPages>
</>)
}*/
const TarjetaViaje = ({ viaje }) => (
<div className="tarjeta-viaje">
    <div className="encabezado">
    <div className="icono-oferta">✈️</div>
    <span className="texto-ofertado">Ofertado por:</span>
    <span className="nombre-ofertante">{viaje.ofertadoPor}</span>
    </div>
    <div className="contenido">
    <p className="aerolinea">{viaje.aerolinea}</p>
    <p className="ruta">{viaje.salida} → {viaje.destino}</p>
    <p className="fecha">Fecha de ida: {viaje.fecha}</p>
    <div className="precios">
        <p className="precio-original">${viaje.precioOriginal}</p>
        <p className="precio-descuento">${viaje.precioDescuento}</p>
    </div>
    </div>
    <div className="etiqueta-billetes">Billetes de avión</div>
</div>
);

const App = () => (
<div className="app">
    <h1>FlyEx</h1>
    <div className="listado-viajes">
    {listadoViajes.map(viaje => (
        <TarjetaViaje key={viaje.id} viaje={viaje} />
    ))}
    </div>
</div>
);

export default App;