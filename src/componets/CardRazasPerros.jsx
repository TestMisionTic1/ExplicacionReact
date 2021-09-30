function CardRazasPerros({nombreRazas, imagen, descripcion, likes, comment, view }) {
    return (
        <li className="breedCard">
            <div className="contenedorImagen">
                <img src={imagen} alt= {descripcion} />
            </div>
            <span className="breedTitle">
                {nombreRazas}
            </span>
            <div className="breedTitleComment">
                <span className="espacio">
                    <i className="fas fa-heart heartRed"></i>
                    {likes}
                </span>
                <span className="espacio">
                    <i className="far fa-comment commentwhite"></i>
                    {comment}
                </span>
                <span className="espacio">
                    <i className="fas fa-eye commentwhite"></i>
                    {view}
                </span>
            </div>
        </li>
    )
}

export default CardRazasPerros;