import React, { useState, useEffect } from "react";
import CardHome from "./CardHome"; 

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  /*Incrementar los segundos cada segundo*/
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); /* Aumentar segundos*/
    }, 1000); /* Cada segundo*/

    /* Limpiar el intervalo cuando el componente se desmonte*/
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Pasamos los segundos como prop a CardHome */}
      <CardHome seconds={seconds} />
    </>
  );
};

export default Home;