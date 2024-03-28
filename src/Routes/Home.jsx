import { Link } from "react-router-dom"
import Card from '../Components/Card';
import { useContextGlobal } from "../Components/utils/global.context"
import HomeStyles from "../Styles/Routes/Home.module.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useContextGlobal();
  const {data, theme} = state;
  return (
    <main className={theme ? 'dark' : ''} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map((item) => {
          return(
            <>
              <Card key={item.id} item={item}>
                <Link to={`/dentist/${item.id}`}>
                  <div className={HomeStyles.container}>
                    <img src="../../public/images/doctor.jpg" alt="" className={HomeStyles.imgCard}/>
                    <h4>{item.name}</h4>
                    <h5>{item.username}</h5>
                  </div>
                </Link>
              </Card>
            </>
          )
        })}
      </div>
    </main>
  )
}

export default Home