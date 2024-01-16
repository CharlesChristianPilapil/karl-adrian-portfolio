import React from 'react'
import styles from './contact.module.css'
import { delay, motion } from 'framer-motion'
import image from '../../assets/logo.svg'
import { slideVariant, opacityVariant } from '../../motion/motion'

const Contact = () => {
  return (
    <section id='contact' className={styles.example}> 
      <motion.div
        variants={slideVariant('-100%')}
        initial='hidden'
        whileInView='visible'
        viewport={{once: false}}
      >
        <h1> Send Me a Message </h1>


        <div className={styles.wrapper}>

          <motion.form action=""
            variants={opacityVariant(0)}
            viewport={{once: false}}
          >
            <motion.input type="text" name="" id="" placeholder='Name'
                  variants={opacityVariant(0.5)}
                  viewport={{once: false}}
            />

            <motion.input type="email" name="" id="" placeholder='Email'
                  variants={opacityVariant(0.8)}
                  viewport={{once: false}}
            />

            <motion.input type="tel" name="" id="" placeholder='xxxx-xxx-xxxx'
                  variants={opacityVariant(1.2)}
                  viewport={{once: false}}
            />
            <motion.textarea name="" id="" cols="30" rows="10" placeholder='Message'
                  variants={opacityVariant(1.5)}
                  viewport={{once: false}}
            >
            </motion.textarea>

            <motion.button
                  variants={opacityVariant(1.8)}
                  viewport={{once: false}}
            >
               Submit
            </motion.button>
          </motion.form>

          <motion.div className={styles.imgIcon}
            variants={opacityVariant(1)}
          >
            <img src={image} alt="" />
          </motion.div>

        </div>

      </motion.div>

    
    </section>
  )
}

export default Contact;