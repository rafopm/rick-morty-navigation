import Styles from '../styles/Card.module.css'
import {Link} from "react-router-dom"


export default function Card(props) {
   //console.log(props)
   return (
      <div className={Styles.card}>
         <button onClick={props.onClose}>X</button>
         <div className={Styles.txt}>
            <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2>
            <p>{props.species}</p>
            <p>{props.gender}</p>
            <img src={props.image} alt={props.image} />
            </Link>
         </div>
      </div>
   );
}
