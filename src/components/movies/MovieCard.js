const MovieCard = (props) => {


const {titulo, img,description, id, precio} = props.movie


  return (
    <div>
            
            <div>Descripcion: {description}</div>
            <div>Descripcion: {precio}</div>
            <div>Descripcion: {img}</div>
            
    </div>
  )
}

export default MovieCard;