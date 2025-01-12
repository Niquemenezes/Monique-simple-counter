import React, {useEffect} from "react";

const Alerta = ({segundos, tiempoAlerta, setTiempoAlerta}) => {
    
         // Alerta cuando el tiempo coincide
         useEffect(() => {
            if (tiempoAlerta !== null && segundos === tiempoAlerta) {
              alert(`¡Tu tiempo ha llegado a ${tiempoAlerta} segundos!`);
            }
          }, [segundos, tiempoAlerta]);
    
    
    return(
      <div className="mt-3" style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <label htmlFor="tiempoAlerta">Tiempo para alerta:</label>
        <input id="tiempoAlerta" className="form-control" style={{ width: "100px" }}
          value={tiempoAlerta || ""}
          onChange={(e) => setTiempoAlerta(Number(e.target.value))}
        />
      </div>
      
      
    )

};

export default Alerta;