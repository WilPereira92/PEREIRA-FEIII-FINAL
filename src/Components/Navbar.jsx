import { Link } from "react-router-dom"
import NavBarStyles from "../Styles/Components/NavBar.module.css"
import { routes } from "./utils/routes"
import { useContextGlobal } from "./utils/global.context"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {dispatch, state} = useContextGlobal();
  const {theme} = state;
  const handleTheme = () => {
    dispatch({type: 'CHANGE_THEME', payload: !theme});
  }
  return (
    <nav className={theme ? 'dark' : ''}>
      <h1>DH Odonto</h1>
      <div className={NavBarStyles.container}>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul className={NavBarStyles.ulContainer}>
          <Link to={routes.home}><li>Home</li></Link>
          <Link to={routes.contact}><li>Contact</li></Link>
          <Link to={routes.favs}><li>Favs</li></Link>
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleTheme} className={NavBarStyles.btn}>{state.theme ? 'Modo claro' : 'Modo oscuro'}</button>
      </div>
    </nav>
  )
}

export default Navbar