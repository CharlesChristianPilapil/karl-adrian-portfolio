import React, { useRef, useEffect, useState } from 'react';
import './about.css';
import image from '../../assets/yabo.jpg';

const About = () => {
  const elements = {
    info: { ref: useRef(), state: useState(false) },
    ul: { ref: useRef(), state: useState(false) },
    img: { ref: useRef(), state: useState(false) },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { ref, state } = Object.values(elements).find((el) => el.ref.current === entry.target) || {};
          if (ref && state) {
            state[1](entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    Object.values(elements).forEach(({ ref }) => observer.observe(ref.current));

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [elements]);

  return (
    <section id='about'>
      <div className='about-image'>
        <img ref={elements.img.ref} src={image} alt='yabo' className={elements.img.state[0] ? 'about-img-animate' : ''} />
      </div>

      <div className='about-wrapper'>
        <div ref={elements.info.ref} className={`intro ${elements.info.state[0] ? 'info-animate' : ''}`}>
          <h1> Hi, I'm <br/> Karl Adrian </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod dolores repudiandae maiores eligendi ipsum vel sit nihil animi natus deleniti, assumenda vero alias repellat neque molestiae obcaecati ab eveniet voluptates necessitatibus praesentium sapiente! Consequatur pariatur quae ea aliquid, voluptas eaque porro doloribus! Totam eligendi, ipsam nostrum numquam dolorum eos. </p>
        </div>

        <div ref={elements.ul.ref} className={`experience ${elements.ul.state[0] ? 'animated' : ''}`}>
          <h1> Work Experience </h1>
          <ul>
            <li> <span> Job1 </span> <span> Lorem ipsum dolor sit amet consectetur. </span> </li>
            <li> <span> Job2 </span> <span> Lorem ipsum dolor sit amet consectetur. </span> </li>
            <li> <span> Job3 </span> <span> Lorem ipsum dolor sit amet consectetur. </span> </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
