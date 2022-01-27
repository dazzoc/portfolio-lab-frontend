import { useState, useEffect } from "react";

function About(props) {
    // State variable to hold data
    const [about, setAbout] = useState(null);
    //Function to make an api call
    const getAboutData = async () => {
        //make api call to get a response
        const response = await fetch(props.URL + "about");
        // turn response into an object
        const data = await response.json();
        // set the about state to the data
        setAbout(data);
    };
    // make an initial call for the data inside useEffect, so it only happens once on component load
    useEffect(() => getAboutData(), []);
    //define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div className="About">
            <h2 className="name">{about.name}</h2>
            <img src={about.headshot} alt={about.name} className="headshot"/>
            <h3 className="email">CONTACT - {about.email}</h3>
            <p className="bio">{about.bio}</p>
        </div>
    );
    // if we have the data return loaded else loading
    return about ? loaded() : <h1>Loading...</h1>
}

export default About;