import { useContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom"
import FavsStyles from "../Styles/Routes/Favs.module.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContextGlobal();
  const {favs, theme} = state;
  return (
    <div className={`${FavsStyles.mainContainer} ${theme ? 'dark' : ''}`}>
      <h1>Dentists Favs</h1>
      {favs.length == 0 && <h3>No hay dentistas en favoritos</h3>}
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((item) => {
          return(
            <>
              <div className="card">
                <Link to={`/dentist/${item.id}`}>
                  <div className={FavsStyles.container}>
                    <img src="../../public/images/doctor.jpg" alt="" className={FavsStyles.imgCard}/>
                    <h4>{item.name}</h4>
                    <h5>{item.username}</h5>
                  </div>
                </Link>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Favs;
