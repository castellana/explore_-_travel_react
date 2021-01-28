const StoryItem = (props) => {
    return ( 
        <section id="stories">
            <article className="foto-container">
                <img src={props.image} alt=""/>
                <h2>{props.title}</h2>
            </article>
            <h4>{props.description}</h4>
        </section>
     );
}
 
export default StoryItem;