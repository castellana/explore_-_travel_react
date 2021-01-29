const StoryItem = (props) => {
    return ( 
        <figure className="story-container">
            <img src={props.image} alt=""/>
            <figcaption>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </figcaption>
        </figure>
     );
}
 
export default StoryItem;