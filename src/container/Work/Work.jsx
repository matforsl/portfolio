import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss'
import { Link } from 'react-router-dom';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y:0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = `*[_type == "works"]{
      _id,
      title,
      description,
      imgUrl,
      tags,
      slug

    }`;

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);
    
    setTimeout(()=>{
      setAnimateCard([{y:0, opacity:1}]);
      if (item==='All'){
        setFilterWork(works);
      }
      else {
        setFilterWork(works.filter((work)=> work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>My <span>Portfolio </span>Section</h2>
      <div className='app__work-filter'>
        {['UX/UI', 'Frontend', 'Backend', 'ML/AI', 'All'].map((item, index) => (
          <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : '' }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate= {animateCard}
        transition = {{duration: 0.5}}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <Link 
            to={`/project/${work.slug.current}`}
            key={index}
          >
            <div className='app__work-item app__flex' >
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />
              </div>
              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{margin: 10}}>{work.description}</p>
                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Work, 'app__works'), 
  'work',
  'app__primarybg'
);
