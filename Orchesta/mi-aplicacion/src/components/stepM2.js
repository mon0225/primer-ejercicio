import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
  },
  button: {
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
   
  },
  resetContainer: {
 
  },
}));

function getSteps() {
  return [<center><p style={{fontSize: '25px'}}>Creación Vista Configurada</p></center>, <center><p style={{fontSize: '25px'}}>Vista Configurada</p></center>, <center><p style={{fontSize: '25px'}}>Acciones de Campos</p></center>, <center><p style={{fontSize: '25px'}}>Acciones de Campos-secuencias</p></center>, <center><p style={{fontSize: '25px'}}>Configuraciones Principales</p></center>, <center><p style={{fontSize: '25px'}}>Configuraciones Físicas del Campo</p></center>, <center><p style={{fontSize: '25px'}}>Comportamiento del Campo</p></center>, <center><p style={{fontSize: '25px'}}>Documentación</p></center>, <center><p style={{fontSize: '25px'}}>Acciones VC</p></center>, <center><p style={{fontSize: '25px'}}>Probar VC</p></center>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return  <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/pantalla19.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'>Para crear una <em><b>Vista configurada</b></em>:</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'>&bull; En la pantalla principal abrimos la pestaña de <em><b>Metadatos</b></em>.</p>
            <br/>
            <p ALIGN='justify'> &bull; Damos clic derecho sobre <em><b>Vista configurada</b></em> y seleccionamos la opción <em><b>nueva vista</b></em>.</p>
          </div>
        </div>
      </div>
    </div>;
    case 1:
      return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/pantalla20.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'>Redirección a <em><b>Vista configurada </b></em> la cual estara integrada por siete partes:</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <table className='highlight' style={{width:'560px', height:'10px'}}>
              <tbody>
                <tr>
                  <td><i class="fas fa-user-cog"></i> Configuraciones principales,</td>
                  <td><i class="fas fa-cog"></i> Configuraciones físicas del campo,</td>
                </tr>
                <tr>
                  <td><i class="far fa-save"></i> Acciones VC,</td>
                  <td><i class="fas fa-file-contract"></i> Documentación,</td>
                </tr>
                <tr>
                 <td><i class="fas fa-plus-circle"></i> Acciones de campo,</td>
                 <td><i class="fab fa-elementor"></i> Acciones.</td>
                </tr>
                <tr>
                  <td><i class="fas fa-text-height"></i> Comportamiento del campo,</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
    case 2:
      return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/Acciones_Campos.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <br/>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'><em><b><i class="fas fa-plus-circle"></i>  Acciones de campos</b></em></p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'>&bull; En esta parte encontraremos seis pestañas de acciones que podremos implementar, las pestañas que principalmente se usaran serán:</p>
            <br/>
            <table className='highlight' style={{height:'10px'}}>
              <tbody>
                <tr>
                  <td><i class="fas fa-plus-circle"></i></td>
                  <td><em><b>Agregar.-</b></em></td>
                  <td><p ALIGN='justify'>Representado como botón con símbolo de más, el cual cada vez que se use creara una nueva pestaña de vista configurada.</p></td>
                </tr>
                <tr>
                  <td><img src='../sigma.png' alt='operación' width='10px' height='11px'/></td>
                  <td><em><b>Calc.-</b></em></td>
                  <td><p ALIGN='justify'>Podremos agregar calculos matemáticos u operaciones que deseamos realizar.</p></td>
                </tr>
                <tr>
                  <td><i class="fas fa-server"></i></td>
                  <td><em><b>Seq.-</b></em></td>
                  <td><p ALIGN='justify'>Si queremos crear una secuencia de datos, ejemplo tipo continuo con numeración.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
    case 3:
      return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/seq.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'><em><b>Agregar Secuencia</b></em></p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'><em><b>&bull;</b></em>  Dentro del rubro de Acciones de campos se localiza la pestaña de secuencia, en la que se hara referencia al orden de ejecución de instrucciones, integrado por tres partes:</p>
            <table className='highlight' style={{height:'10px'}}>
              <tbody>
                <tr>
                  <td><center><i class="fas fa-cog"></i></center></td>
                  <td><em><b><center>Configuraciones principales.-</center></b></em></td>
                  <td><p ALIGN='justify'>En el que estableceremos el tipo de secuencia deseado.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-list-ol"></i></center></td>
                  <td><em><b><center>Nueva secuencia.-</center></b></em></td>
                  <td><p ALIGN='justify'>En el que se llenaran campos de descripción, tipo de secuencia y formato, además se tendrá que indicar el número con el que se iniciar y los pasos a usar.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-server"></i></center></td>
                  <td><em><b><center>Secuencias Disponibles.-</center></b></em></td>
                  <td><p ALIGN='justify'>Una vez terminada la configuración y guardada la secuencia, en esta parte podremos observar y seleccionar todas las secuencias creadas para su uso.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
    case 4:
    return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/Config_ppal.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'><em><b>Configuraciones Principales</b></em>:</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
              <p ALIGN='justify'><em><b>&bull;</b></em> En esta parte se mostraran el conjunto de datos que determinaran el valor de las variables del sistema operativo:</p>
          
              {/*<div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>*/}
              <table className='highlight' style={{height:'10px'}}>
              <tbody>
                <tr>
                  <td><center><i class="fas fa-table"></i></center></td>
                  <td><em><b><center>Nombre de tabla.-</center></b></em></td>
                  <td><p ALIGN='justify'>Entendido como el nombre con el que se ubicara la tabla física que lleguemos a crear.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-file-word"></i></center></td>
                  <td><em><b><center>Nombre Vista Configurada.-</center></b></em></td>
                  <td><p ALIGN='justify'>Entendido como el nombre que se le de al metadato, el cual por cuestiones de orden se recomienda  iniciar con un prefijo, Ej: VC_EVC.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-font"></i></center></td>
                  <td><em><b><center>Descripción.-</center></b></em></td>
                  <td><p ALIGN='justify'>Explicación de la creación y uso del metadato.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-stop"></i></center></td>
                  <td><em><b><center>Botones.-</center></b></em></td>
                  <td><p ALIGN='justify'>Además se visualizan botones a activar indicando que se muestre el grid, las secfuencias continuas o se establezcan nombres estandarizados.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
    case 5:
    return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/Acciones_Campo.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'><em><b><em><b>Configuraciones Físicas del Campo</b></em></b></em>:</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
              <p ALIGN='justify'><em><b>&bull;</b></em> En esta parte se mostraran las propiedades principales de los valores físicos del metadato determinados por el dominio de la aplicación:</p>
              
          {/*<div className='card' style={{width: '450px', marginLeft: '65px', height:'220px'}}>*/}
            <table className='highlight' style={{height:'10px'}}>
              <tbody>
                <tr>
                  <td><center><i class="fas fa-font"></i></center></td>
                  <td><em><b><center>Nombre.-</center></b></em></td>
                  <td><p ALIGN='justify'>En el que se indicara el nombre con el que será conocido el metadato para su creación.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-database"></i></center></td>
                  <td><em><b><center>Tipo de Dato.-</center></b></em></td>
                  <td><p ALIGN='justify'>Clase de datos que se manejaremos en la apliación, como lo es numérico, boolean, varchar,etc.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-arrows-alt-v"></i></center></td>
                  <td><em><b><center>Longitud.-</center></b></em></td>
                  <td><p ALIGN='justify'>El espacio en longitud que la cadena de caracteres tendra de acuerdo a lo que busquemos.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fab fa-500px"></i></center></td>
                  <td><em><b><center>Precisión.-</center></b></em></td>
                  <td><p ALIGN='justify'>En el caso de que el tipo de valor sea numérico la cantidad de decimales que podrá tener.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-stop"></i></center></td>
                  <td><em><b><center>Botones.-</center></b></em></td>
                  <td><p ALIGN='justify'>Se anexan botones a activar en los que se indicara si la vista tiene llave primaria, valor único o si permite valores nulos.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
    case 6:
    return <div className="row">
    <div className="col s12 m10 push-m1">
      <div className="card">
        <div className="card-image">
          <img src='/Pantallas/C_Campo.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
        </div>
        <div className="card-content" style={{fontFamily: 'Roboto'}}>
          <p ALIGN='left'><em><b><em><b>Comportamiento del Campo</b></em></b></em>:</p>
        </div>
        <div className="card-action" style={{fontFamily: 'Roboto'}}>
          <p ALIGN='justify'><em><b>&bull;</b></em> En esta parte estableceremos el estado de nuestro objeto, mediante la modificación de atributos principales (posición (translación),tamaño (escala), orientación (rotación) o apariencia) de acuerdo al resultado final que esperamos:</p>
          <table className='highlight' style={{height:'10px'}}>
            <tbody>
              <tr>
                <td><center><i class="fas fa-tag"></i></center></td>
                <td><em><b><center>Etiqueta.-</center></b></em></td>
                <td><p ALIGN='justify'>En el que se indicara el nombre con el que daremos a conocer el metadato ante el cliente..</p></td>
              </tr>
              <tr>
                <td><center><i class="far fa-calendar-check"></i></center></td>
                <td><em><b><center>Control.-</center></b></em></td>
                <td><p ALIGN='justify'>Apartado en la que se determinara el tipo de control por el cual podremos obtener una entrada de datos, por ejemplo textBox, comboBox, dateTime, checkBox, etc.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-map-marker-alt"></i></center></td>
                <td><em><b><center>Ubicación.-</center></b></em></td>
                <td><p ALIGN='justify'>Localización física del código que define el comportamiento</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-times"></i></center></td>
                <td><em><b><center>Valor nulo default.-</center></b></em></td>
                <td><p ALIGN='justify'>Estableceremos si habran datos nulos o no en la aplicación.</p></td>
              </tr>
              <tr>
                <td><center><i class="far fa-object-ungroup"></i></center></td>
                <td><em><b><center>Formato.-</center></b></em></td>
                <td><p ALIGN='justify'>Si se desea tener una estructura determinada, ejemplo Money, Percent, Date, etc.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-th-large"></i></center></td>
                <td><em><b><center>Estilo del campo.-</center></b></em></td>
                <td><p ALIGN='justify'>Estableceremos si habran datos nulos o no en la aplicación.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-text-width"></i></center></td>
                <td><em><b><center>Width.-</center></b></em></td>
                <td><p ALIGN='justify'>Establecer el ancho de los objetos a mostrar en la aplicación.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-text-height"></i></center></td>
                <td><em><b><center>Height.-</center></b></em></td>
                <td><p ALIGN='justify'>Indicar la altura de los objetos en la aplicación.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-sort-alpha-down"></i></center></td>
                <td><em><b><center>Tipo de validación.-</center></b></em></td>
                <td><p ALIGN='justify'>Con este campo nos aseguramos de establcer criterios o reglas que comprueben la significación y seguridad de los datos, procurando que el programa funcione de manera ordenada, correcta y útil, ejemplo números enteros, decimales, alfabético, etc.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-traffic-light"></i></center></td>
                <td><em><b><center>Semáforo.-</center></b></em></td>
                <td><p ALIGN='justify'>En esta opción se determinara la estructura mediante la cual sincronizaremos los procesos que haran que la ejecución del código de realice de manera ordenada.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-calculator"></i></center></td>
                <td><em><b><center>Valor sumarizado.-</center></b></em></td>
                <td><p ALIGN='justify'>Campo en el que podremos establecer funciones de operaciones matemàticas, ejemplo AVG, SUM, etc.</p></td>
              </tr>
              <tr>
                <td><center><i class="fas fa-stop"></i></center></td>
                <td><em><b><center>Botones.-</center></b></em></td>
                <td><p ALIGN='justify'>Además se anexan botones con opciones a activar como que el archivo sea solo lectura, el valor sea requerido y si el texto es multilínea.</p></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>;
  case 7:
    return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/Documentacion.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'><em><b><em><b>Documentación</b></em></b></em>:</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'><em><b>&bull;</b></em> En esta división se deberan adjuntar y/o anexar los documentos o archivos de textos   vinculados directamente para la creación de la estructura de la aplicación a desarrollar, así como de sus compenentes integradores, por ejemplop valores discretos, vista configurada, etc:</p>
            <table className='highlight' style={{height:'10px'}}>
              <tbody>
                <tr>
                  <td><center><i class="fas fa-ad"></i></center></td>
                  <td><em><b><center>Composición nombre lógico.-</center></b></em></td>
                  <td><p ALIGN='justify'>Nombre para identificar los documentos adjuntados.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-font"></i></center></td>
                  <td><em><b><center>Texto para documentación.-</center></b></em></td>
                  <td><p ALIGN='justify'>Explicación del Valor Discreto en caso de considerarse complejo.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-columns"></i></center></td>
                  <td><em><b><center>¿Es campo relacionado?.-</center></b></em></td>
                  <td><p ALIGN='justify'>Relación con las vistas configuradas creadas dentro de la apliación.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-share-alt-square"></i></center></td>
                  <td><em><b><center>¿Es valor discreto?.-</center></b></em></td>
                  <td><p ALIGN='justify'>Selección y anexo de valores discretos creados.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
    case 8:
    return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/Vista_Previa.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'><em><b><em><b>Acciones VC</b></em></b></em>:</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'><em><b>&bull;</b></em> integrado por tres botones para vista previa y salvado de los datos establecidos.</p>
            <table className='highlight' style={{height:'10px'}}>
              <tbody>
                <tr>
                  <td><center><i class="fas fa-laptop-code"></i></center></td>
                  <td><em><b><center>Vista previa.-</center></b></em></td>
                  <td><p ALIGN='justify'>Despliegue de vista preliminar de los metadatos creados para su revisión final.</p></td>
                </tr>
                <tr>
                  <td><center><i class="fas fa-file-export"></i></center></td>
                  <td><em><b><center>Salvar y continuar.-</center></b></em></td>
                  <td><p ALIGN='justify'>Almacenamiento de la información generada permitiendonos continuar usando la aplicación.</p></td>
                </tr>
                <tr>
                  <td><center><i class="far fa-save"></i></center></td>
                  <td><em><b><center>Salvar y cerrar.-</center></b></em></td>
                  <td><p ALIGN='justify'>Cierre de la aplicación una vez se hayan guardado los datos finales.</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
  default:
  return <div className="row">
    <div className="col s12 m10 push-m1">
      <div className="card">
        <div className="card-image">
          <img src='/Pantallas/Vista_Prueba.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
        </div>
        <div className="card-content" style={{fontFamily: 'Roboto'}}>
          <p ALIGN='left'>Edición y prueba de <em><b>Prueba</b></em></p>
        </div>
        <div className="card-action" style={{fontFamily: 'Roboto'}}>
         <p ALIGN='justify' style={{marginTop: '5px', marginLeft: '10px', marginRight: '5px'}}><em><b>&bull;</b></em> Para el uso de la Vista Configurada, nos redirigimos a la vista principal de metadatos, damos clic derecho sobre la vista y apretamos la opción de prueba.</p>
        </div>
      </div>
    </div>
  </div>;
  }
}


{/*function getStepImage(step) {
    switch (step) {
      case 0:
        return <img src='/Pantallas/pantalla8.png' alt='img1' width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px', marginLeft: '10px'}} />;
      case 1:
        return <img src= '/Pantallas/pantalla11.png' alt="img2" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 2:
        return <img src='/Pantallas/pantalla11.png' alt="img3" width='500px' height='280px' style={{ borderStyle: 'solid' , borderWidth:'3px'}}/>;
      case 3:
        return <img src='/Pantallas/pantalla13.png' alt="img4" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
      default:
        return <img src='/Pantallas/pantalla18.png' alt="img7" width='500px' height='280px' style={{borderStyle: 'solid' , borderWidth:'3px'}}/>;
    }
  }*/}

function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
    <center>
      <Stepper xs={12} activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <br/>
            <StepLabel style={{ fontSize: '100px'}} >{label}</StepLabel>
            <StepContent >
            <br/>
            <center>
              {/*<Typography style={{fontSize: '32px', fontFamily: 'roboto', paddingLeft: '50px'}}>{getStepImage(index)}</Typography>*/}
              <br/>
              <Typography style={{fontFamily: 'montserrat'}}>{getStepContent(index)}</Typography>
            </center>
              <div className={classes.actionsContainer}>
                <div>
                <br/>
                <center>
                {activeStep === 0 ? 
                  <Button
                    color={activeStep === -1}
                    style={{ background: 'linear-gradient(45deg, #1A2F6C 30%, #2759E8 90%)', color: 'white', width: '140px'}}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                    >
                    Next
                    </Button>
                  : 
                  <div>
                    <Button
                    color={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    style={{background: 'linear-gradient(45deg, #49BFA4 30%, #27E8DD 90%)', color: 'white', width: '140px'}}
                    >
                      Back
                      
                    </Button>
                    <Button
                    style={{ background: 'linear-gradient(45deg, #1A2F6C 30%, #2759E8 90%)', color: 'white', width: '140px'}}
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'End' : 'Next'}
                    </Button>
                  </div>
                }
                </center>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </center>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
        <br/>
        <center>
          <Typography style={{fontSize: '20px'}}><em><b>Ver nuevamente</b></em></Typography>
          <Button style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color: 'white', width: '140px'}} onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </center>
        </Paper>
      )}
    </div>
  );
}

export default VerticalLinearStepper;