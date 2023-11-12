import Footer from "./Footer.js";
import Carrusel from './Carrusel.js';
import Cartas from "./Cartas.js"

const Inicio = () => {
    return (
        <div className="Inicio">
            <Carrusel />
            <div class="p-2 bg-light border">
                <Cartas />
            </div>
            <div class="p-2 bg-light border">
                <Footer />
            </div>
        </div>
    );
}

export default Inicio;