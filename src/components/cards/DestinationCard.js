const DestinationItem = (props) => {
    return ( 
            <figure className="figContainer">
                <img src={props.image} alt=""/>
                <figcaption className="bottom-left"> 
                    <h3>{props.destination}</h3>
                    <p>{props.country}</p>
                </figcaption>
            </figure>
     );
}
 
export default DestinationItem;