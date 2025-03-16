import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="login">
        <h1>Acceder al formulario</h1>
        <label htmlFor="form">Nombre del formulario</label>
        <input type="text" name="form" id="form" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        <button type="button">Acceder</button>
      </div>
    </div>
  );
}
