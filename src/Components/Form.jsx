import { useState } from "react";
import { useContextGlobal } from "./utils/global.context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const {state} = useContextGlobal();
  const {theme} = state;
  const [showForm, setShowForm] = useState(true);
  const [inputsForm, setInputsForm] = useState({
    nombre: '',
    apellido: '',
    email: ''
  })
  const [showError, setShowError] = useState(false);
  const {nombre, apellido, email} = inputsForm;
  const emailValidation = (texto) => {
    let respuesta = true;
    let regEspacios = /\s/;
    if (regEspacios.test(texto)) {
      respuesta = false;
    }
    if (texto[0] == " " || texto[texto.length - 1] == " ") {
      console.log("trim: " + "false")
      respuesta = false;
    }
    let regFormatoEmail = /\S+@\S+\.\S+/;
    if(!regFormatoEmail.test(texto)){
      respuesta = false;
    }
    return respuesta;
  }
  const textValidation = (texto) => {
    let respuesta = true;
    if (texto.length < 5) {
        respuesta = false;
    }
    if (texto.trim() !== texto) {
        respuesta = false;
    }
    let caracteresEspeciales = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    if (caracteresEspeciales.test(texto)) {
        respuesta = false;
    }
    return respuesta;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(textValidation(nombre) && textValidation(apellido) && emailValidation(email)){
      setShowForm(false);
      setShowError(false);
    } else {
      setShowForm(true);
      setShowError(true);
    }

  }
  return (
    <div className={theme ? 'dark' : ''}>
      {showForm ? <form>
        <input type="text" name="" id="" placeholder="Nombre" onChange={(event) => setInputsForm({...inputsForm, nombre: event.target.value})}/>
        <input type="text" name="" id="" placeholder="Apellido" onChange={(event) => setInputsForm({...inputsForm, apellido: event.target.value})}/>
        <input type="text" name="" id="" placeholder="Email" onChange={(event) => setInputsForm({...inputsForm, email: event.target.value})}/>
        <button onClick={handleSubmit}>Submit</button>
      </form> : <h3>Gracias {nombre} {apellido} te contactaremos cuanto antes vía email.</h3>}
      {showError && <h3>Por favor verifique su información nuevamente</h3>}
    </div>
  );
};

export default Form;
