const DestinationItem = (props) => {
    return ( 
        <section class="destinationItem">
            <figure className="foto-container">
                <img src={props.image} alt=""/>
                <figcaption className="bottom-left"> 
                    <h3>{props.destination}</h3>
                    <p>{props.country}</p>
                </figcaption>
            </figure>
           
        </section>
     );
}
 
export default DestinationItem;