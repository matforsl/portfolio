import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { urlFor, videoUrlFor, client } from '../client';
import './Project.scss';

const Project = () => {
    const { slug } = useParams();
    const [project, setProject] = useState();
    
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

        client.fetch(query, {slug}).then((data) => {
            setProject(data)
        })
    }, [slug]);

    return (
        !project ? (
            <p>Loading...</p>
        ) : (
            <div className='app__project'>
                <div className='app__flex'>
                    <div className='app__project-intro'>
                        <div className='app__project-intro-text'>
                            <h1 className='head-text'>{project.title}</h1>
                            <p className='app__project-intro-text-desc p-text'>{project.description}</p>
                            <div className='app__project_intro-tags'>
                                {project.tags.map((tag, index) => ( 
                                    <p className='p-text' key={index}>{tag}</p>
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
                                {project.tools.map((tool) => (
                                    <p key={tool}>{tool}</p>
                                ))}
                            </div>
                        </div>
                        
                        <div className='subsection'>
                            <h3>Overview</h3>
                            <p>{project.overview}</p>
                        </div>

                        {project.sections == null ? (
                            null
                        ) : (
                            <div className='app__project-info-sections'>
                                <h2>Project Process</h2>
                                {project.sections.map((sectionObj, index) => (
                                    <div className='subsection' key={index}>
                                        <h3>{sectionObj.subheader}</h3>
                                        <p>{sectionObj.body}</p>
                                        <div className='app__project-info-sections-media'>
                                            {sectionObj.media ? (
                                                sectionObj.media.map((media, index) => (
                                                    media._type === "image" ? (
                                                            <img src={urlFor(media)} alt={`sectionImg${index}`} key={index}/>
                                                    ) : (
                                                            <video controls src={media.asset.url} />
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
                    </div>
                </div>
            </div>
        )
    )
}

export default Project
