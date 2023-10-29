import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";


function Guardar(){

    const [nombre, setNombre] = useState("")
    const [cantidad, setCantidad] = useState("")
    const [valor, setValor] = useState("")
    const volver = useNavigate()
  
    async function agregarproducto(){
        let colecionProducto = collection(database, "inventario")
        let producto = {nombre,cantidad,valor}
        await addDoc(colecionProducto,producto)
        volver("/inventario")
    }


    return(
        <>
            <section className="formulario">
                <form action="">
                    <input 
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="nombre"                    
                        type="text" 
                    />
                    <input 
                        onChange={(e)=> setCantidad(e.target.value)}
                        placeholder="cantidad"
                        type="number" 
                    />
                    <input 
                        onChange={(e)=> setValor(e.target.value)}
                        placeholder="valor unitario"
                        type="text" 
                    />
                    <section className="but">
                    <button onClick={agregarproducto} type="button" className="save">Agregar</button>
                    </section>
                </form>
            </section>
        </>
    )
}

export default Guardar