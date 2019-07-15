import React from 'react';
//import logo from './logo.svg';
import Step from '../components/stepM1'

function Manual() {
  return (
    <div className="App">
    <br/>
      <div class="row">
        <div class="col s12 m8">
            <div class="card">
                <br/>
                <span class="card-title"><h3>Valores Discretos</h3></span>
                <hr style={{width: '500px'}}/>
                <br/>
                <div class="card-content">
                <p style={{fontSize: '17px'}} ALIGN='justify'> Instrucciones de uso de Valores Discretos dentro de la Aplicación de ORCHESTA, facilitando al usuario los conocimientos necesarios para el dominio del tema.</p>
                </div>
                <br/>
                <div class="card-image">
                    <img src='/programacion-variables.jpg' alt='home' height='360px'/>
                </div>
                <br />
                <span class="card-title"><h3>Manual de usuario</h3></span>
                <hr style={{width: '500px'}}/>
                <span class="card-title"><p>Nuevo grupo de Valores Discretos</p></span>
                <div class="card-content">
                    <p style={{fontSize: '17px'}} className='text-center'> <em>Entiende, ejecuta y configura !!!</em></p>
                </div>
                <div class="card-content" style={{marginLeft:'-20px'}}>
                    <p style={{fontSize: '17px'}}> <Step /></p>
                </div>
            </div>
        </div>
        <div class="col s12 m4">
            <div class="card">
                <br/>
                <span class="card-title"><h3 style={{marginTop:'5px'}}>Glosario</h3></span>
                <br/>
                <div class="card-image">
                    <img src='/glosario.jpg' alt='home' height='200px'/>
                </div>
                <br/>
                <div class="card-content">
                    <p ALIGN='justify'>
                       En esta parte intregramos un glosario explicando a más detalle algunos términos importantes en la operativa fundamental del sistema:
                        <br/>
                        <br/>
                        <br/>
                        <hr style={{width: '420px'}}/>
                        <table className='highlight'>
                            <thead>
                                <tr>
                                    <center><th>Tema</th></center>
                                    <th><center>Definición</center></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                <td><p className='text-center text-muted' style={{fontSize: '13px'}}><b><center>Valores Discretos</center></b></p></td>
                                <td><p ALIGN='justify' style={{fontSize: '13px'}}>Catálogo de datos generales precargados en la aplicación para su descarga en automático, caracterizados por su repetición constante en la integración de la aplicación. Ejemplos: estado civil, sexo, día de la semana, etc.</p></td>
                                </tr>
                                <tr>
                                <td><p className='text-center text-muted' style={{fontSize: '13px'}}><b><center>Metadatos</center></b></p></td>
                                <td><p ALIGN='justify' style={{fontSize: '13px'}}>Grupo de datos indispensables para la creación de una aplicación, enfocados en la descripción del contenido de archivos o información integrada.</p></td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                    </p>
                </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Manual;