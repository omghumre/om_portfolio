import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './LoadingPage.css'; // Make sure to create this CSS file and copy the styles

const LoadingPage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counterElement = document.querySelector(".counter");

    function updateCounter() {
      if (counter >= 100) return;
      let newValue = counter + Math.floor(Math.random() * 10) + 1;
      if (newValue > 100) newValue = 100;
      setCounter(newValue);

      const delay = Math.floor(Math.random() * 200) + 250;
      setTimeout(updateCounter, delay);
    }

    updateCounter();

    gsap.from(".circles", {
      duration: 2,
      top: "-100%",
      ease: "elastic.out",
      delay: 0.5,
    });

    gsap.from(".circle-inner", {
      duration: 1,
      width: "75px",
      height: "75px",
      ease: "power4.inOut",
      delay: 2,
    });

    gsap.from(".circle-inner-rotator", {
      duration: 1,
      scale: 1,
      ease: "power4.inOut",
      delay: 2.5,
    });

    gsap.from(".circles", {
      duration: 1.5,
      rotation: 360,
      ease: "power4.inOut",
      delay: 3,
    });

    gsap.from(".block", {
      duration: 0.75,
      width: "800px",
      ease: "power4.inOut",
      delay: 4.5,
    });

    gsap.fromTo(
      ".container",
      {
        left: "100%",
        scale: 0.5,
        ease: "power4.inOut",
        delay: 4,
      },
      {
        left: "50%",
        scale: 0.5,
        transform: "translateX(-50%)",
        ease: "power4.inOut",
        delay: 4,
      }
    );

    gsap.to(".block", {
      duration: 1.5,
      width: "0px",
      ease: "power4.inOut",
      delay: 5,
    });

    gsap.to(".block", {
      duration: 1.5,
      height: "0px",
      ease: "power4.inOut",
      delay: 6,
    });

    gsap.to(".circles", {
      duration: 1.5,
      rotation: 0,
      ease: "power4.inOut",
      delay: 6.5,
    });

    gsap.to(".loader", {
      duration: 2.5,
      scale: 0,
      ease: "power4.inOut",
      delay: 7,
    });

    gsap.to(".container", {
      duration: 2,
      scale: 1,
      ease: "power4.inOut",
      delay: 7.5,
    });
  }, [counter]);

  return (
    <div>
      <div className="loader">
        <h1 className="counter">{counter}%</h1>
        <div className="site-teaser">
          <span>Use headphone</span>
        </div>
        <div className="circles">
          <div className="circle circle-outer"></div>
          <div className="circle circle-inner"></div>
          <div className="circle-inner-rotator"></div>
          <div className="block"></div>
        </div>
      </div>
      <div className="container">
        <h1>H<span>i</span></h1>
      </div>
    </div>
  );
};

export default LoadingPage;
