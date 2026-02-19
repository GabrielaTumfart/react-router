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

    <div className="container">
        <h1>{prodotto.title}</h1>
        <img src={prodotto.image} alt={prodotto.title} />
        <p>{prodotto.description}</p>
        <p><strong>Prezzo:</strong> ${prodotto.price}</p>
        

    </div>




  );


}