// Work.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { opacityVariant } from '../../motion/motion';
import { useInView } from 'react-intersection-observer';
import './work.css';
import images from '../../assets/images';

const Work = () => {
    const [ref1, inView1] = useInView({
        triggerOnce: false,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: false,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: false,
    });

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const transition = {
        type: 'spring',
        stiffness: 80,
        damping: 10,
        when: "beforeChildren"
    };

    return (
        <section id='work'>
            <div className="work-wrapper">
                <h1> Featured Projects </h1>

                <div className='project-wrapper'>
                    <motion.div
                        ref={ref1}
                        initial="hidden"
                        animate={inView1 ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ ...transition, duration: 0.5 }}
                        className="project-box"
                    >
                        <img src={images.project1} alt="Project 1" />

                        <motion.div className='project-info'>
                          <h2> Meme Beauty Depot Ad</h2>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={ref2}
                        initial="hidden"
                        animate={inView2 ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ ...transition, duration: 0.5}}
                        className="project-box"
                    >
                        <motion.img src={images.project2} alt="Project 2" 
                            variants={opacityVariant}
                            initial='hidden'
                            whileInView='visible'
                        />

                        <motion.div className='project-info'>
                          <h2> Meme Beauty Depot Ad</h2>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={ref3}
                        initial="hidden"
                        animate={inView3 ? 'visible' : 'hidden'}
                        variants={variants}
                        transition={{ ...transition, duration: 0.5}}
                        className="project-box"
                    >
                        <img src={images.project3} alt="Project 3" />

                        <motion.div className='project-info'>
                          <h2> Meme Beauty Depot Ad</h2>
                        </motion.div>
                        
                    </motion.div>
                </div>

                <div className='view-box'>
                  <a href="" _blank=""> View Other Projects </a>
                </div>

            </div>
        </section>
    );
};

export default Work;
