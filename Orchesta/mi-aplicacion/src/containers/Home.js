import React from 'react';
//import logo from './logo.svg';

function Home() {
  return (
    <div className="App">
      <div className="row">
        <div className="col s12 m9">
        <br/>
            <div className="card">
                <br/>
                <span className="card-title"><h3><center>Acerca de Orchesta</center></h3></span>
                <hr style={{width: '500px'}}/>
                <br/>
                <div className="card-content">
                <p style={{fontSize: '17px'}} ALIGN='justify'> Orchesta es un espacio de trabajo para integrar soluciones informáticas con alto enfoque al negocio y con la capacidad de cubrir de punta a punta cualquier proyecto de informática utilizando estandares del ámbito lo cual agrega valor al resultado final.</p>
                </div>
                <br/>
                <div className="card-image">
                    <img src='/foto-home7.jpg' alt='home' height='460px'/>
                </div>
                <br />
                <span className="card-title"><h3><center>El objetivo es simple</center></h3></span>
                <hr style={{width: '500px'}}/>
                <br/>
                <div className="card-content">
                    <p style={{fontSize: '17px'}} className='text-center'> Sacar el máximo provecho de tu recursos (humanos, financieros, tecnológicos) en beneficio de tu empresa.</p>
                    <br/>
                </div>
            </div>
        </div>
        <div class="col s12 m3">
        <br/>
            <div className="card" style={{height: '970px'}}>
                <br/>
                <span className="card-title"><h3 style={{marginTop:'8px'}}><center>Beneficios</center></h3></span>
                <hr style={{width: '250px'}}/>
                <div className="card-image">
                    <img src='/ventajas.jpg' alt='home' height='199px'/>
                </div>
                <div className="card-content">
                    <p ALIGN='justify'>
                        <b style={{marginTop:'10px'}}> Business Inteligence & Data Science Ready!</b>
                        <br/>
                        <hr style={{width: '150px'}}/>
                        <b style={{marginTop:'10px'}}>Para el negocio</b>
                        <br/>
                        <ul className="collection">
                            <li className="collection-item"> <p>-Implementación en tiempo real de soluciones informáticas para cubrir los objetivos de tu negocio.</p></li>
                            <li className="collection-item"><p>-Agrega valor a tu negocio con los metadatos de las soluciones implementadas con Orchesta, serán tus nuevos activos tecnológicos.</p></li>
                        </ul>
                    </p>
                    <p ALIGN='justify'>
                        <b style={{marginTop:'10px'}}>Para el área de sistemas</b>
                        <br/>
                        <ul className="collection" style={{height: '292px', lineHeight: '10px'}}>
                            <li className="collection-item"><p style={{lineHeight: '19px'}}>-Refuerza el desarrollo ágil de software de la empresa.</p></li>
                            <li className="collection-item"><p style={{lineHeight: '19px'}}>-Minimiza el margen de error de tus sistemas.</p></li>
                            <li className="collection-item"><p style={{lineHeight: '19px'}}>-Alto nivel de estandarización de los componentes desarrollados.</p></li>
                            <li className="collection-item"><p style={{lineHeight: '19px'}}>-Facilita tu proceso de entrenamiento.</p></li>
                            <li className="collection-item"><p style={{lineHeight: '19px'}}>-Integración con diferentes tecnologías del mercado.</p></li>
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