import React, {useState, useEffect} from 'react'
import styles from './DiseñoCardLista.module.css'
import DiseñoCardRefriLista from './DiseñoCardLista';
import { useParams } from 'react-router-dom';

function DiseñoCardLista(props) {
    const[InfoRefri, setInfoRefri] = useState([]);
    const id = useParams();

    useEffect(() => {

        // Define the API endpoint URL based on the userId prop
        const url = `http://localhost:3001/chofer/refrigeradores/solicitud/${id.id}/${encodeURIComponent(props.id_solicitud)}`;
        
        const options = {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        };
    
      // Make a fetch request to the endpoint
      fetch(url, options)
      .then(response => {
        switch (response.status) {
          case 404:
            throw new Error("User not found");
          case 401:
            throw new Error("Invalid Id");
          case 400:
            throw new Error("Something went wrong")
          default:
            break;
        }
        return response.json();
      })
      .then (data => {
        if (Array.isArray(data)) { // Verificar si la respuesta es un array
          setInfoRefri(data);
          console.log(data)
        } else {
          setInfoRefri([data]); //Si no, se pone dentro de un array
          console.log(data)
        }
    })
      .catch((err) => {
        console.error("Error logging in: ", err);
      });
    }, [id, props.id_solicitud]); // Specify the userId as a dependency

  return (
    <h1>hd</h1>
  );
}

export default DiseñoCardLista