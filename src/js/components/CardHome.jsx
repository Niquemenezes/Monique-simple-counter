import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faClock } from '@fortawesome/free-regular-svg-icons'

const CardHome = ({seconds}) => {
	// Convertir los segundos en una cadena de dígitos
	const digits = seconds.toString().padStart(6, "0").split("");// Convertir segundos a dígitos
	
  return (
		  <div className="container mt-4" style={{ maxWidth: "1000px", background:"black", height: "50px",  display: "flex", alignItems: "center", justifyContent: "start", gap: "20px",padding: "20px" }} >
        	  <div className="reloj" style={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black", color: "white", fontSize: "50px"}}>
	   			   <FontAwesomeIcon icon={faClock} />
	   		    </div>
        {/* Mostrar los dígitos de los segundos, de última tarjeta a la primera */}
        {digits.map((digit, index) => (
            <div key={index} style={{width: "50px",height: "70px", fontSize: "50px", backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {digit} {/* Mostrar el dígito */}
		        </div>
          ))
          }
      </div>
    );
  };

export default CardHome;
			  