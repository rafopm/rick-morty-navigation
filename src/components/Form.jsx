import React from "react";
import Styles from '../styles/Form.module.css'

export default function Form() {

  return (
    <div className={Styles.contenedorLogin} >
      <label className={Styles.etiquetaUsuario}>
        Usuario:
        <input className={Styles.txtUsuario} type="text" name="name" />
      </label>
      <label className={Styles.etiquetaPassword}>
        Password:
        <input  className={Styles.txtPassword} type="text" name="name" />
      </label>
      <input className={Styles.btnLogin} type="submit" value="ENVIAR" />
    </div>
  );
}
