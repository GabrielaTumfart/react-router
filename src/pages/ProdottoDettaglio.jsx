import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProdottoDettaglio() {
    const { id } = useParams();
    const [prodotto, setProdotto] = useState(null);

    useEffect(() => {
        axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then(res => setProdotto(res.data))
          .catch(err => console.error(err));
      }, [id]);



  return (

    <div>
         <h1>Prodotti di Gabriela</h1>

         <ul>
            {prodotti.map(p => (
            ))}


         </ul>


    </div>




  );


}