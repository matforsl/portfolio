import React from 'react'
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { urlFor } from '../client';
import './Project.scss';

const Project = () => {
    const location =  useLocation();

    const [project, setProject] = useState(location.state?.project || null);
    
    return (
        <div className='app__project'>
            <div className='app__project-intro'>
                <div className='app__project-intro-text'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    {project.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div>
                <div className='app__project-intro-image'>
                    <img src={urlFor(project.imgUrl)} alt="coverImg" />
                </div>
            </div>
            
            <div className='app__project-info'>
                <div className='app__project-info-bar'>
                    <p>{project.role}</p>
                    <p>{project.duration}</p>
                    {project.tags[0]==="UX/UI"?(
                        <p>Tools</p>
                    ):(
                       <p>Tech Stack</p> 
                    )}
                    {project.tools.map((tool) => (
                        <p>{tool}</p>
                    ))}
                </div>
                <h3>Overview</h3>
                <p>{project.overview}</p>
                {project.sections == null ? (
                    null
                ) : (
                    <div>
                        <h2>Project Process</h2>
                        {project.sections.map((sectionObj, index) => (
                            <div key={index}>
                                <h3>{sectionObj.subheader}</h3>
                                <p>{sectionObj.body}</p>
                                {sectionObj.media ? (
                                    sectionObj.media.map((media, index) => (
                                        media._type === "image" ? (
                                            <img src={urlFor(media)} alt={`sectionImg${index}`} key={index}/>
                                        ) : (
                                            <video key={index} controls src={media.asset?.url} />
                                        )
                                    ))
                                ):(
                                    null
                                )}
                            </div>

                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Project
