import AppStyles from './Styles/Components/AppStyles.module.css'
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail"
import { routes } from "./Components/utils/routes";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";


function App() {
  return (
      <div className={`App ${AppStyles.mainContainer}`}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
          </Routes>
          <div className={AppStyles.containerPage}>
            <Footer/>
          </div>
      </div>
  );
}

export default App;
