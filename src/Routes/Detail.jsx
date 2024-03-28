import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context';
import axios from 'axios';
import Card from '../Components/Card';
import DetailStyles from '../Styles/Routes/Detail.module.css';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  const {dispatch, state} = useContextGlobal();
  const {doctorSelected} = state;
  useEffect(() => {
    axios(url)
    .then((response) => {
      dispatch({type: 'GET_SELECTED', payload: response.data})
    })
  }, [])
  return (
    <div className={DetailStyles.mainContainer}>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <Card key={doctorSelected.id}>
        <div className={DetailStyles.container}>
          <img src="../../public/images/doctor.jpg" alt="" className={DetailStyles.imgCard}/>
          <h3>{doctorSelected.name}</h3>
          <h4>{doctorSelected.username}</h4>
          <h4>{doctorSelected.phone}</h4>
          <h4>{doctorSelected.website}</h4>
        </div>
      </Card>

    </div>
  )
}

export default Detail