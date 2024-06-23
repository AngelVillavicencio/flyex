
import hero from "../components/assets/hero.jpg";
import LayoutPages from "../components/LayoutPages";
import React, { useState } from 'react';
import  './Vender.css';

/*const Index = ()=>{
    return (<>
    <LayoutPages>
        
    </LayoutPages>

</>)
}

//export default Index;*/

const FlightDetailsForm = () => {
const [formData, setFormData] = useState({
    nombres: '',
    compania: '',
    tipoBillete: '',
    aeropuertoSalida: '',
    aeropuertoLlegada: '',
    fechaIda: '',
    precioBillete: '',
    horaSalida: '',
    horaLlegada: '',
    tipoTarifa: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar la lógica para manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="flight-details-form">
      <h2>Detalles de vuelo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombres y apellidos:</label>
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Compañía aerea:</label>
          <input type="text" name="compania" value={formData.compania} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Tipo de billete:</label>
          <input type="text" name="tipoBillete" value={formData.tipoBillete} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Aeropuerto de salida (IDA):</label>
          <input type="text" name="aeropuertoSalida" value={formData.aeropuertoSalida} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Aeropuerto de llegada (IDA):</label>
          <input type="text" name="aeropuertoLlegada" value={formData.aeropuertoLlegada} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Fecha de ida:</label>
          <input type="date" name="fechaIda" value={formData.fechaIda} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Precio del billete:</label>
          <input type="text" name="precioBillete" value={formData.precioBillete} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Hora Salida - Ida:</label>
          <input type="time" name="horaSalida" value={formData.horaSalida} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Hora Llegada - Ida:</label>
          <input type="time" name="horaLlegada" value={formData.horaLlegada} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Tipo de tarifa:</label>
          <input type="text" name="tipoTarifa" value={formData.tipoTarifa} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Generar cambios</button>
      </form>
    </div>
  );
};

export default FlightDetailsForm;
