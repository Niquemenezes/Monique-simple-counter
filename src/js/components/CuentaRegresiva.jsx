import React from "react";

const CuentaRegresiva = ({valorInicial, setValorInicial, iniciarRegresivo, iniciarProgresivo }) => {
    
    
return(
    <div>
        <div className="mt-3"style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <label htmlFor="valorInicial">Valor inicial:</label>
        <input id="valorInicial" className="form-control" style={{ width: "100px" }} 
          value={valorInicial}
          onChange={(e) => setValorInicial(Number(e.target.value))} />
         <button className="btn btn-info mx-2" onClick={iniciarRegresivo}>Modo Regresivo</button>
         <button className="btn btn-info mx-2" onClick={iniciarProgresivo}>Modo Progresivo</button>
        </div>
        
    </div>

);

};
export default CuentaRegresiva
