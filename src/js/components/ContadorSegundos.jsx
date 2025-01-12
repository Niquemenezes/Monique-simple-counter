import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const ContadorSegundos = ({ segundos, detener, reanudar, reiniciar, }) => {
  const digitos = segundos.toString().padStart(6, "0").split("");

  return (
    <div>
      <div
        className="contador" style={{background: "black", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-around", gap: "20px", padding: "20px", }}>
        <div
          className="reloj"  style={{width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", color: "white", fontSize: "50px",}}>
          <FontAwesomeIcon icon={faClock} />
        </div>
        {digitos.map((digito, index) => (
          <div
            key={index} style={{ width: "50px", height: "70px", fontSize: "50px", backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center", }}>
            {digito}
          </div>
        ))}
      </div>

      
      <div
        className="botones mt-3" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <button className="btn btn-danger" onClick={detener} style={{ background: "red", border: "none", padding: "10px 20px", borderRadius: "5px", color: "white" }}>
          Detener
        </button>
        <button className="btn btn-success" onClick={reanudar}style={{ background: "green", border: "none", padding: "10px 20px", borderRadius: "5px", color: "white" }}>
          Reanudar
        </button>
        <button className="btn btn-primary" onClick={reiniciar} style={{ background: "blue", border: "none", padding: "10px 20px", borderRadius: "5px", color: "white" }}>
          Reiniciar
        </button>
      </div>

     
        
    </div>
  );
};

export default ContadorSegundos;
