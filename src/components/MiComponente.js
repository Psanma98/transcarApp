import React, {useState} from "react";
//un estado es una variable pero que al sufrir un cambio, el componente se actualiza todo de nuevo. Usestate siempre se declara con const, y no se modifica de cualquier forma.

export const MiComponente = ({miNumero}) =>{
    const [contador, setContador] = useState (1); 
    const handlerAdd = () => {
        setContador(contador + 1)         
    }
    const handlerSustract = () => {
        setContador(contador - 1);
    }
    const handlerReset = () =>{
        setContador(1)
    }
    
    return(
        <>
            <div>Unidades agregadas al carrito:</div>
            <div>{contador}</div>
            <div id="btn"></div>     
            <button className="waves-effect waves-light btn" onClick={handlerAdd}>Agregar Unidad</button>
            <button className="waves-effect waves-light btn" onClick={handlerSustract}>Quitar Unidad</button>
            <button className="waves-effect waves-light btn" onClick={handlerReset}>Vaciar Carrito</button>
        </>
    )
}





