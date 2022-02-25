import React, { useState } from "react";
import PropTypes from "prop-types";



function CounterApp() {

    const [contador,setContador] = useState( 0 );
    
    const aumentar = () => {
        setContador(contador+1);
    }
   // const aumentar = () => setContador(contador+1);
   
   // const disminuir = () => setContador(contador-1);

    const resetear = () => setContador(0);

  return (
    <>
       <h1>CounterApp</h1>
       <h2>{contador}</h2>
       <button onClick={aumentar}>+</button>
       <button onClick={resetear}>!!!</button>
       <button onClick={ ()=> setContador(contador-1)}>-</button>
    </>
  );
}

CounterApp.propTypes = {
    contador: PropTypes.number
}

export default CounterApp;
