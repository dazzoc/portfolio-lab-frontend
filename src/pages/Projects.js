import { useState, useEffect } from "react";

function Projects(props) {
    // State variable to hold data
    const [projects, setProjects] = useState(null);
    //Function to make an api call
    const getProjectsData = async () => {
        //make api call to get a response
        const response = await fetch(props.URL + "projects");
        // turn response into an object
        const data = await response.json();
        // set the about state to the data
        setProjects(data);
    };
    // make an initial call for the data inside useEffect, so it only happens once on component load
    useEffect(() => getProjectsData(), []);
    //define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project) => (
            <div className="project">
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>GITHUB</button>
                </a>
                <a href={project.live}>
                    <button>LIVE SITE</button>
                </a>
            </div>
        ));
    };
    // if we have the data return loaded else loading
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;