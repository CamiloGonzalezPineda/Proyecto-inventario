import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { Link } from "react-router-dom"
import Header from "../../helpers/Header"

function Venta(){

    const[ventas, setVenta] = useState([])

    async function listarVenta(){
        let colecionVenta = collection(database, "venta")
        let data = await getDocs(colecionVenta)
        console.log(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        setVenta(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }

    useEffect(()=>{
        listarVenta()
    },[])

    return(
        <>
            <section>
                <h1>VENTAS</h1>
            </section>
            <Header />
            <section className="shop"> 
                <Link to="/crearventa" className="start">Iniciar venta</Link>
            </section>
            <section className="producto">
                <h1>HISTORIAL DE VENTAS</h1>
                {ventas.map((venta)=>(
                    <section key={venta.id}>
                        <h3>nombre: {venta.nombre}</h3>
                        <h3>correo: {venta.correo}</h3>
                        <h3>telefono: {venta.telefono}</h3>
                        <h3>producto: {venta.producto}</h3>
                    </section>
                ))}
            </section>
        </>
    )
}

export default Venta