import { Link } from "react-router-dom"

function Header(){

    return(
        <>
            <section className="header">
                <Link to="/">inicio</Link>
                <Link to="/inventario">inventario</Link>
                <Link to="/venta">venta</Link>
            </section>
        </>
    )
}

export default Header