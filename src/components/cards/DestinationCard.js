const DestinationItem = (props) => {
    return ( 
        <section id="destination">
            <article className="foto-container">
                <img src={props.image} alt=""/>
                <h2 className="centered">{props.destination}</h2>
            </article>
            <h4 className="show-text">{props.country}</h4>
        </section>
     );
}
 
export default DestinationItem;