import React from "react";

export default function ProjectList({ projects }) {
    return <div className="projects-list">
        {projects.map((item, index) =>{
            return <div key={index} className="image-container"><img className="image" src={item.img} alt="" /></div>
        })}
    </div>
}