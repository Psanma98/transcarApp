import React, {useState} from "react";

export const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState (initial); 
    const unit = 1;
    function disableAdd (){
        let btnA = document.getElementById('btnAdd');
        btnA.disabled = true;
    }

    function workingAdd (){
        let btnA = document.getElementById('btnAdd');
        btnA.disabled = false;
    }

    function disableSus (){
        let btnS = document.getElementById('btnSus');
        btnS.disabled = true;
    }

    function workingSus (){
        let btnS = document.getElementById('btnSus');
        btnS.disabled = false;
    }

    const handlerAdd = () => {
        setContador(contador + unit) 
            if(contador===stock - unit){
            disableAdd ();   
            }  
            if (contador===unit){
                workingSus();
            }           
    }

    const handlerSustract = () => {
        setContador(contador - unit)
            if (contador<=stock){
                workingAdd();
            }
            if (contador===initial + unit) {
                disableSus();
            }
    }

    const handlerReset = () =>{
        setContador (initial);
        workingAdd();
        disableSus();
    }

   const message = () =>{
        onAdd();
   }

   


    return(
        <>
            <div className="row">
            <div className="z-depth-4 col s12 m6 l3 offset-l6"><span></span></div>
                <div className="z-depth-4 col s12 m6 l3 offset-l6">
                    <div className="right-align">Unidades agregadas al carrito: -stock disponible {stock} unidades-</div>
                    <div>{contador}</div>
                    <div id="btn"></div>     
                    <button id="btnAdd" className="waves-effect waves-light btn-small" onClick={handlerAdd}>Agregar Unidad</button>
                    <button id="btnSus" className="waves-effect waves-light btn-small" onClick={handlerSustract}>Quitar Unidad</button>
                    <button id="btnRes" className="waves-effect waves-light btn-small " onClick={handlerReset}>Vaciar Carrito</button>
                    <button id="btnBuy" className="waves-effect waves-light btn-small" onClick={()=>{onAdd({contador});}}>avisar</button>
                    <section id="buy"></section>
                </div>
            </div>    
        </>
        
    )
}





