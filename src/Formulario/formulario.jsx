import { useState } from "react"


export function Formulario(){

        const[verIdentificacion,modificarIdentificacion]=useState("")
        const[verContraseña,modificarContraseña]=useState("")

        function procesarFormulario(){}
    return(
        <>
            <section className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-6">
                        <img src="../../src/Assets/logo-sura.png" alt="" className="img-fluid" />
                        <form className="border rounded p-4">
                            <h2>Gestiona tu salud</h2>

                            <div class="input-group mb-3 mt-5">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard-fill"></i></span>
                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Identificacion"
                                    id="Identificacion"
                                    />
                                    
                            </div>
                                <div class="input-group mb-3 mt-2">
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-key"></i></span>

                                <input 
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Contraseña"
                                    id="Contraseña"
                                    />
                                    
                            </div>

                            <button type="submit" className="btn btn-primary">Ingresar</button>
                        </form>
                    </div>
                </div>
            </section>
        
        
        
        </>

    )
   
}