import React from 'react';
//import logo from './logo.svg';

function Home() {
  return (
    <div className="App">
      <div class="row">
        <div class="col s12 m9">
            <div class="card">
                <br/>
                <span class="card-title"><h3>Acerca de Orchesta</h3></span>
                <hr style={{width: '500px'}}/>
                <br/>
                <div class="card-content">
                <p style={{fontSize: '17px'}} ALIGN='justify'> Orchesta es un espacio de trabajo para integrar soluciones informáticas con alto enfoque al negocio y con la capacidad de cubrir de punta a punta cualquier proyecto de informática utilizando estandares del ámbito lo cual agrega valor al resultado final.</p>
                </div>
                <br/>
                <div class="card-image">
                    <img src='/foto-home7.jpg' alt='home' height='460px'/>
                </div>
                <br />
                <span class="card-title"><h3>El objetivo es simple</h3></span>
                <hr style={{width: '500px'}}/>
                <br/>
                <div class="card-content">
                    <p style={{fontSize: '17px'}} className='text-center'> Sacar el máximo provecho de tu recursos (humanos, financieros, tecnológicos) en beneficio de tu empresa.</p>
                    <br/>
                </div>
            </div>
        </div>
        <div class="col s12 m3">
            <div class="card">
                <br/>
                <span class="card-title"><h3 style={{marginTop:'5px'}}>Beneficios</h3></span>
                <div class="card-image">
                    <img src='/ventajas.jpg' alt='home' height='200px'/>
                </div>
                <hr style={{width: '250px'}}/>
                <div class="card-content">
                    <p ALIGN='justify'>
                        <b style={{marginTop:'10px'}}> Business Inteligence & Data Science Ready!</b>
                        <br/>
                        <hr style={{width: '150px'}}/>
                        <b style={{marginTop:'10px'}}>Para el negocio</b>
                        <br/>
                        <ul class="collection">
                            <li class="collection-item"> <p>-Implementación en tiempo real de soluciones informáticas para cubrir los objetivos de tu negocio.</p></li>
                            <li class="collection-item"><p>-Agrega valor a tu negocio con los metadatos de las soluciones implementadas con Orchesta, serán tus nuevos activos tecnológicos.</p></li>
                        </ul>
                    </p>
                <p ALIGN='justify'>
                    <b style={{marginTop:'10px'}}>Para el área de sistemas</b>
                    <br/>
                    <ul class="collection">
                        <li class="collection-item"> <p>-Refuerza el desarrollo ágil de software de la empresa.</p></li>
                        <li class="collection-item"><p>-Minimiza el margen de error de tus sistemas.</p></li>
                        <li class="collection-item"><p>-Alto nivel de estandarización de los componentes desarrollados.</p></li>
                        <li class="collection-item"><p>-Facilita tu proceso de entrenamiento.</p></li>
                        <li class="collection-item"><p>-Integración con diferentes tecnologías del mercado.</p></li>
                    </ul>
                </p>
            </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Home;