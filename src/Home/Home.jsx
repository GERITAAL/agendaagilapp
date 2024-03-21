import"./Home.css"
import basedatos from"../Utils/basedatos.json"

console.log(basedatos[0])

export function Home(){

    return( // zona de renderizado( la parte estetica)
        <>
            <section className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className="fuente">servicios a un clic</h2>
                    <h2 className="text-muted">HOLA <span className="fuente">{basedatos[0].nombreUsuario}</span></h2>
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
                            <p>medico de familia {basedatos[0].medicoDeFamilia}</p>
                        </div>

                </div>
                <div className="row">
                    <div className="col-12 col-md-2 mt-5">
                    <i class="bi bi-person fs-1 fuente mb-5"></i>
                    </div>
                    
                    <div className="col-12 col-md-6 mt-5">
                        <p>{basedatos[0].grupoDeIngreso}</p>
                    
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                    <i class="bi bi-hospital fs-1 fuente"></i>
                    </div>


                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>{basedatos[0].ips}</p>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <hr />
        
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <h5>paciente{basedatos[0].nombreUsuario}, estas son tus proximas citas</h5>

                </div>
            </div>

        </section>
        <section className="container my-5">
            <div className="row row-cols-1 row-cols-md-3">
                {
                    basedatos[0].citasMedicas.map(function(cita){
                        return(
                            <div className="col">
                                <div className="card h-100 shadow px-2">
                                    <h3>{cita.especialidad}</h3>
                                    <h4>{cita.fecha}</h4>
                                    <h4>{cita.direccion}</h4>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
        </>
    )
}