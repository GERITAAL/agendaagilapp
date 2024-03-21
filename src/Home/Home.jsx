import"./Home.css"
import { inventario } from "../Utils/medicamentos"


export function Home(){
    // zona de manipulacion de datos (parte logica)
    let nombrePaciente="Geraldin Bernal Mazo"
    let sedePaciente="Suramericana"

    console.log(inventario)

    // a los arreglos los puedo manipular para controlar que informacion voy a presentar
    // funcion de filtrado de datos , condicion de filtrado (pregunta si o no)

    let resultado=inventario.filter(function(auxiliar){
        return(auxiliar.nombre=="acetaminofen") // se pone condicion de filtrado
    })
            console.log(resultado)
            
    return( // zona de renderizado( la parte estetica)
        <>
            <section className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className="fuente">servicios a un clic</h2>
                    <h2 className="text-muted">HOLA <span className="fuente">{nombrePaciente}</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate dignissimos quas impedit qui tempora voluptatibus veritatis suscipit, similique, deleniti soluta omnis, nam sed consectetur nulla eaque obcaecati ratione sunt officiis sapiente incidunt? Aliquid quidem distinctio sequi quae, hic, id nihil eius voluptatibus ab soluta perspiciatis, omnis qui mollitia amet?</p>
                </div>
                <div className="col-12 col-md-6">
                <select class="form-select" aria-label="Default select example">
                 <option selected>GRUPO FAMILIAR</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                 <option value="3">Three</option>
                </select>
                <div className="row">
                    <div className="col-12 col-md-2 mt 5">
                        <br />
                    <i class="bi bi-person-down fs-1 fuente mt-5"></i>
                    </div>
                    
                        <div className="col-12 col-md-10 mt-5">
                            <p>Dr Natalia Blandon</p>
                        </div>

                </div>
                <div className="row">
                    
                </div>
                <di className="row">

                </di>
                <di className="row">

                </di>
                </div>
            </div>
        </section>
        
        </>
    )
}