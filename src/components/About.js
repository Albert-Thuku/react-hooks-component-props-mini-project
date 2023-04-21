import React from "react";

function About({image = 'https://via.placeholder.com/215' , about}){
    return (
        <aside>
            {{image}? <img src={image} alt="blog logo"/> : {image}}
            <p>{about}</p>
        </aside>
    );
}

export default About;