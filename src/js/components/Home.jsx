import React, { useState, useEffect } from "react";
import ContadorSegundos from "./ContadorSegundos";
import CuentaRegresiva from "./CuentaRegresiva";
import Alerta from "./Alerta";

const Home = () => {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(false); //empieza automaticamente
  const [regresivo, setRegresivo] = useState(false); // Modo progersivo regresivo
  const [valorInicial, setValorInicial] = useState(0); // Valor inicial
  const [tiempoAlerta, setTiempoAlerta] = useState(null); // Tiempo de alerta

  // Lógica del contador (progresivo o regresivo)
  useEffect(() => {
    if (pausado) return;

    const intervalo = setInterval(() => {
      setSegundos((prevSegundos) => {
       if (regresivo) {
        return prevSegundos > 0 ? prevSegundos - 1 : 0; //no baja de 0
       }else {
        return prevSegundos + 1;
       }
    });
    }, 1000);

    return () => clearInterval(intervalo);
  }, [pausado, regresivo]);

    // Funciones para controlar el contador
  const detenerContador = () => setPausado(true);
  const reanudarContador = () => setPausado(false);
  const reiniciarContador = () => {
    setPausado(true); 
    if (regresivo) {
      setSegundos(valorInicial || 0);
     } else { 
      setSegundos(0);
     }
     setPausado(false);
    };
    const iniciarCuentaRegresiva = () => {
      setRegresivo(true);
      setSegundos(valorInicial || 0);
      setPausado(false);
    };
    const iniciarCuentaProgresiva = () => {
      setRegresivo(false);
      setPausado(false);
    };

  return (
    <div className="container mt-4">
      <ContadorSegundos
        segundos={segundos}
        detener={detenerContador}
        reanudar={reanudarContador}
        reiniciar={reiniciarContador}
                       
      />
     <CuentaRegresiva
      valorInicial={valorInicial}
      setValorInicial={setValorInicial}
      iniciarRegresivo={iniciarCuentaRegresiva}
      iniciarProgresivo={iniciarCuentaProgresiva}
      /> 

    <Alerta 
       segundos={segundos}
       tiempoAlerta={tiempoAlerta}
       setTiempoAlerta={setTiempoAlerta} />
    </div>
  );
};

export default Home;
