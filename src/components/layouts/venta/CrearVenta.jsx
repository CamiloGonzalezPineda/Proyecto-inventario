import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";

function CrearVenta(){

    const [nombre, setNombre] = useState("")
    const [producto, setProducto] = useState("")
    const [correo, setCorreo] = useState("")
    const [telefono, setTelefono] = useState("")
    const volver = useNavigate()
  
    async function agregarventa(){
        let colecionVenta = collection(database, "venta")
        let venta = {nombre,correo,telefono,producto}
        await addDoc(colecionVenta,venta)
        volver("/venta")
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
                        onChange={(e)=> setCorreo(e.target.value)}
                        placeholder="correo"
                        type="text" 
                    />
                    <input 
                        onChange={(e)=> setTelefono(e.target.value)}
                        placeholder="telefono"
                        type="text" 
                    />
                    <input 
                        onChange={(e)=> setProducto(e.target.value)}
                        placeholder="producto"
                        type="text" 
                    />
                    <section className="butD">
                    <button onClick={agregarventa} type="button" className="insert">Agregar</button>
                    </section>
                </form>
            </section>
        </>
    )
}

export default CrearVenta