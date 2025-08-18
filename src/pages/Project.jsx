import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { urlFor, videoUrlFor, client } from '../client';
import './Project.scss';

const Project = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const query = `*[_type == "works" && slug.current == $slug][0]{
            ...,
            sections[]{
                ...,
                media[]{
                    ...,
                    asset->{url}
                }
            }
        }`;

        client.fetch(query, {slug})
            .then((data) => setProject(data))
            .catch((err) => {
                console.log(err);
                setError('Failed to fetch data: ${err.message || err}');
            })
            .finally(() => setLoading(false))
    }, [slug]);


    if (loading) {
        return <p className='p-text app__project_message'>Loading...</p>
    }
    if (error) {
        return <p className='p-text app__project_message'>{error}</p>
    }
    if (!project) {
        return <p className='p-text app__project_message'>Project not found :(</p>
    }

    return (
        <div className='app__project'>
            <div className='app__flex'>
                <div className='app__project-intro'>
                    <div className='app__project-intro-text'>
                        <h1 className='head-text'>{project.title}</h1>
                        <p className='app__project-intro-text-desc p-text'>{project.description}</p>
                        <div className='app__project_intro-tags'>
                            {project.tags?.map((tag, index) => ( 
                                <div key={index}>
                                    { (tag === 'All') ? (
                                        null
                                    ):(
                                        <p className='p-text'>{tag}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>       
                    <div className='app__project-intro-image app__flex'>
                        <img src={urlFor(project.imgUrl)} alt="coverImg" />
                    </div>
                </div>
            </div>
                
            <div className='app__project-card'>
                <div className='app__project-info'>
                    <div className='app__project-info-bar'>

                        <div className='app__project-info-bar-item'>
                            <h4>Role</h4>
                            <p>{project.role}</p>
                        </div>

                        <div className='app__project-info-bar-item'>
                            <h4>Duration</h4>
                            <p>{project.duration}</p>
                        </div>

                        <div className='app__project-info-bar-item'>
                            {project.tags[0]==="UX/UI"?(
                                <h4>Tools</h4>
                            ):(
                                <h4>Tech Stack</h4>
                            )}
                            {project.tools?.map((tool) => (
                                <p key={tool}>{tool}</p>
                            ))}
                        </div>
                    </div>
                    
                    <div className='subsection'>
                        <h3>Overview</h3>
                        <p style={{ whiteSpace: "pre-line" }}>{project.overview}</p>
                    </div>

                    {project.sections == null ? (
                        null
                    ) : (
                        <div className='app__project-info-sections'>
                            <h2>Project Process</h2>
                            {project.sections.map((sectionObj, index) => (
                                <div className='subsection' key={index}>
                                    <h3>{sectionObj.subheader}</h3>
                                    <p style={{ whiteSpace: "pre-line" }}>{sectionObj.body}</p>
                                    <div className='app__project-info-sections-media'>
                                        {sectionObj.media ? (
                                            sectionObj.media.map((media, index) => (
                                                media._type === "image" ? (
                                                        <img src={urlFor(media)} alt={`sectionImg${index}`} key={index}/>
                                                ) : (
                                                        <video controls src={media.asset.url} key={index}/>
                                                )
                                            ))
                                        ):(
                                            null
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {project.links == null ? (
                        null
                    ):(
                        <div className='subsection'>
                            <h3>Links</h3>
                            {project.links.map((linkObj, index) => (
                                <div key={index}>
                                    <p>
                                        {linkObj.linkText + " "}
                                        <a href={linkObj.linkAddress} target="_blank" rel="noopener noreferrer">
                                            here
                                        </a>
                                    </p>
                                    
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project
