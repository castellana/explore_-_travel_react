import React, { useState } from 'react';

//si queremos usar el hook, necesitamos los props aquí. Si hiciéramos el map directamente aquí (sin props), se haría 1 hook para todas las figures a la vez (se abriría el read more a la vez en todas las figures). Para que se ejecute el hook en cada figure por separado usamos props aquí, y map en otro componente nuevo.
const StoryCard = (props) => {
    const [readMore, setReadMore] = useState(true);
    // console.log(props.element.description.length);
    return (
        <figure className="story-container">
            <img src={props.element.image} alt=""/>
            <figcaption>
                <h3>{props.element.title}</h3>
                <p className="ellipsisText" style={{display: readMore ? "inline-block" : "none"}}>{props.element.description.length < 78? props.element.description : props.element.description.slice(0, 78)+ `...`}
                    <span className="orangeLink" style={props.element.description.length < 78? {display: "none"} : {display: "block"}} onClick={() => {setReadMore(!readMore)}}>Lee más</span>
                </p>
                <p style={{display: readMore ? "none" : "block"}}>{props.element.description}</p>
            </figcaption>
        </figure>
    )
};

export default StoryCard;