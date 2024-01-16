import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './navBar.css';
import logoImage from '../../assets/logo.png';

const NavBar = () => {

  // scroll animation
  const divRef = useRef();
  const [hasScrolledThrough, setHasScrolledThrough] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasScrolledThrough(true);
        } else {
          setHasScrolledThrough(false); // Reset when the ul is out of view
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(divRef.current);

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);


  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeNav();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  const navClass = isOpen ? 'active' : '';

  return (
    <header id='home'>

      {/* <div className='nav-overlay'>

      </div> */}

      <nav ref={navRef}>
        <div className={`nav-wrapper ${navClass}`}>
          <div>
            <Link to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={closeNav}> <img src={logoImage} alt="" /> </Link>
          </div>

          <ul className={navClass}>
            <li>
              <Link to='about' spy={true} smooth={true} offset={-70} duration={500} onClick={closeNav}>
                About
              </Link>
            </li>

            <li>
              <Link to='work' spy={true} smooth={true} offset={-70} duration={500} onClick={closeNav}>
                Work
              </Link>
            </li>

            <li>
              <Link to='contact' spy={true} smooth={true} offset={-70} duration={500} onClick={closeNav}>
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to='footer' spy={true} smooth={true} offset={-59} duration={500} onClick={closeNav}>
                Footer
              </Link>
            </li> */}
          </ul>

          <div onClick={handleToggle} className='toggleNav'>
            hamburger
          </div>
        </div>
      </nav>

      <div ref={divRef} className={`hero ${hasScrolledThrough ? 'hero-animation' : ''} `}>
        <div>
          <h1> Karl Adrian </h1>
          <ul>
            <li> Drug Dealer </li>
            <li> Graphic Designer </li>
            <li> Alien </li>
          </ul>
        </div>

        <div className='icons'>
          <div>
            {' '}
            <h2> ig </h2> <a href=''> @instagram </a>{' '}
          </div>
          <div>
            {' '}
            <h2> in </h2> <a href=''> @linkIn </a>{' '}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
