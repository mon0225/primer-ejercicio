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
    paddingLeft: '19px',
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
   
  },
  resetContainer: {
 
  },
}));

function getSteps() {
  return [<center><p style={{fontSize: '25px'}}><em><b>Creación valores discretos</b></em></p></center>, <center><p style={{fontSize: '25px'}}><em><b>Edición Grupo de Valores Discretos</b></em></p></center>, <center><p style={{fontSize: '25px'}}><em><b>Creación nueva colección</b></em></p></center>, <center><p style={{fontSize: '25px'}}><em><b>Integración de valores</b></em></p></center>, <center><p style={{fontSize: '25px'}}><em><b>Prueba de valores</b></em></p></center>];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return  <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/pantalla8.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'>Creación de un nuevo grupo de valores discretos</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'>&bull; En la pantalla principal abrimos la pestaña de <em><b>Metadatos</b></em>.</p>
            <br/>
            <p ALIGN='justify'> &bull; Damos clic derecho sobre <em><b>valores discretos</b></em> y seleccionamos la opción <em><b>nuevo grupo</b></em>.</p>
          </div>
        </div>
      </div>
    </div>;
    case 1:
      return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/pantalla11.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'>Redirección a vista de edición del Grupo de Valores Discretos, en la que se observaran cuatro etiquetas:</p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto', width:'500px'}}>
            <table className='highlight' style={{height:'10px'}}>
              <tbody>
                <tr>
                  <td><i class="far fa-square" style={{backgroundColor: 'blue'}}></i></td>
                  <td><em><b>Etiqueta azul.-</b></em></td>
                  <td><p ALIGN='justify'>Nueva Colección</p></td>
                </tr>
                <tr>
                  <td><i class="far fa-square" style={{backgroundColor: 'green'}}></i></td>
                  <td><em><b>Etiqueta verde.-</b></em></td>
                  <td><p ALIGN='justify'>Nuevo Grupo</p></td>
                </tr>
                <tr>
                  <td><i class="far fa-square" style={{backgroundColor: 'yellow'}}></i> </td>
                  <td><em><b>Etiqueta amarilla.-</b></em></td>
                  <td><p ALIGN='justify'>Nuevos Valores</p></td>
                </tr>
                <tr>
                  <td><i class="far fa-square" style={{backgroundColor: 'red'}}></i></td>
                  <td><em><b>Etiqueta roja.-</b></em></td>
                  <td><p ALIGN='justify'>Eliminar Datos</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
      
      {/*<div className='card' style={{width: '450px', marginLeft: '70px', height:'220px'}}>
          <p ALIGN='justify' style={{marginTop: '15px', marginLeft: '10px', marginRight: '5px'}}></p>
          <hr style={{width: '410px',  marginTop:'-5px'}}/>
          <p ALIGN='justify' style={{marginTop: '5px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'blue'}}></i> Etiqueta azul= <em><b>Nueva Colección</b></em>,</p>
          <br/>
          <p ALIGN='justify' style={{marginTop: '-30px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'green'}}></i> Etiqueta verde=<em><b>Nuevo Grupo</b></em>,</p>
          <br/>
          <p ALIGN='justify' style={{marginTop: '-30px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'yellow'}}></i> Etiqueta amarilla=<em><b>Nuevos Valores</b></em> y</p>
          <br/>
          <p ALIGN='justify'style={{marginTop: '-30px', marginLeft:'15px'}}><i class="far fa-square" style={{backgroundColor: 'red'}}></i> Etiqueta roja=<em><b>Eliminar Datos</b>.</em></p>
  </div>*/};

    case 2:
      return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/pantalla11.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'>Para crear una <em><b>nueva colección</b></em></p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'>&bull; Seleccionar la <em><b>etiqueta azul</b></em> y modificar el nombre de la nueva colección a crear.</p>
            <br/>
            <p ALIGN='justify'> &bull; Después apretar la <em><b>etiqueta verde</b></em> y nuevamente modificar el nombre del grupo de acuerdo a la colección establecida.</p>
          </div>
        </div>
      </div>
    </div>;
    case 3:
      return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/pantalla13.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'>Para establecer los <em><b>valores del grupo</b></em></p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'>&bull;  Clic sobre la <em><b>etiqueta amarilla</b></em> para incorporar todos los campos de los valores del grupo que deseamos integrar, indicando el nombre de cada uno de ellos.</p>
            <br/>
            <p ALIGN='justify'> &bull; Establecidos los datos apretar el botón<em><b> salvar</b></em> para guardar la información.</p>
          </div>
        </div>
      </div>
    </div>;
    default:
      return <div className="row">
      <div className="col s12 m10 push-m1">
        <div className="card">
          <div className="card-image">
            <img src='/Pantallas/pantalla18.png' alt='img1' width='500px' height='400px' style={{ borderStyle: 'solid' , borderWidth:'1px'}}/>
          </div>
          <div className="card-content" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='left'>Edición y prueba de <em><b>valores discretos creados</b></em></p>
          </div>
          <div className="card-action" style={{fontFamily: 'Roboto'}}>
            <p ALIGN='justify'>&bull;  Para modificar los valores que ingresamos dar clic derecho en el grupo creado y elegir la <em><b>opción de edita</b></em>.</p>
            <br/>
            <p ALIGN='justify'> &bull; Para probar dar clic derecho en el valor discreto creado y seleccionar la opción de <em><b>prueba</b></em>.</p>
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
