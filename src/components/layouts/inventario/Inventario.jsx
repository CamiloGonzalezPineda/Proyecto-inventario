import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { Link } from "react-router-dom";
import Header from "../../helpers/Header";

function Inventario(){
    
    const[productos, setProducto] = useState([])

    async function listarProductos(){
        let colecionProducto = collection(database, "inventario")
        let data = await getDocs(colecionProducto)
        console.log(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        setProducto(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }

    async function eliminarProducto(id){
        let productoEliminado = doc(database, "inventario", id)
        await deleteDoc(productoEliminado)
        listarProductos()
    }
    useEffect(()=>{
        listarProductos()
    },[])

    return(
        <>
             
            <header>
                <section className="titulo">
                    <h1>INVENTARIO</h1>
                </section>
            </header>
            <Header />
            <section className="guarPro">
                <Link to ="/crearproducto"className="guarProo">Guardar producto</Link>
            </section>
            <section className="producto">
                {productos.map((producto)=>(
                    <section key={producto.id}>
                        <h3>nombre: {producto.nombre}</h3>
                        <h3>cantidad: {producto.cantidad}</h3>
                        <h3>valor: {producto.valor}</h3>
                        <button onClick={()=>eliminarProducto(producto.id)} type="button" className="delete">eliminar</button>
                    </section>
                ))}
            </section>
        </>
    )
}

export default Inventario