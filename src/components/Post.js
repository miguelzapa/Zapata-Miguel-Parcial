import Reac, {useState} from 'react'
import Posteos from "./Posteos"
import data from "./data.json"
import "../index.css"
// El componente Post no tiene componentes hijos.
// ESTADO: Post debe tener un número para almacenar la cantidad de likes, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Post debe tener un método para manejar el click de su boton, el cual debe:
//  - sumar 1 like al posteo
//  - sumar en la cantidad total de likes contabilizada por App
//  - mostrar en consola qué posteo sumó un like
// PROPS: Post recibe todos los campos que muestra en pantalla: titulo, texto, likes y el método heredados para sumar en el total.
// Maqueta de Post:
//    h3
//    p
//    button       (este boton debe permitir sumar likes)
//    h5    (este h5 debe mostrar la cantidad de likes, pero si la misma es mayor a 10 debe decir "Más de 10 likes")

export default function Post(sumarLikes, data) {

  const [cantidadLikes, setCantidadLikes] = useState(data.likes);
  const clickLike = () => {
    setCantidadLikes(cantidadLikes + 1);
    sumarLikes();
    console.log("Suma 1 like: " + data.titulo);
  }

  return (
    <div className='posteo'>
      <h3>{data.titulo}</h3>
      <p>{data.texto}</p>
      <button onClick={clickLike}>Dar like</button>
      <h5>{cantidadLikes <=10 ? "Likes: " + cantidadLikes : "Más de 10 likes"}</h5>
    </div>
  )
}
