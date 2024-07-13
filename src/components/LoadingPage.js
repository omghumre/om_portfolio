import React, { useEffect } from "react";
import "./LoadingPage.css";
import gsap from "gsap";
import { Bounce } from "gsap/all";

const LoadingPage = ({ onLoadingComplete }) => {
  useEffect(() => {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        gsap.to(".circle", 1.5, {
          width: "1000%",
          height: "1000%",
          background: "white",
          opacity: 1,
          ease: "power4.inOut",
          onComplete: onLoadingComplete,
        });
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 2;

      if (currentValue > 100) {
        currentValue = 100;
      }

      counterElement.textContent = currentValue + "%";

      let delay = Math.floor(Math.random() * 200) + 250;

      
      setTimeout(updateCounter, delay);
    }

    updateCounter();

    gsap.from(".circles", 3, {
      top: "-100%",
      ease: "elastic.out",
      delay: 0.5,
    });

    gsap.from(".circle-inner", 2, {
      rotation: 360,
      width: "75px",
      height: "75px",
      ease: "power4.inOut",
      delay: 2,
    });

    gsap.from(".circle-inner-rotator", 2, {
      rotation: 360,
      scale: 1,
      ease: "power4.inOut",
      delay: 2.5,
    });

    gsap.from(".circles", 2, {
      rotation: 360,
      ease: "power4.inOut",
      delay: 3,
    });

    gsap.from(".block", 1, {
      width: "800px",
      ease: "power4.inOut",
      delay: 4.5,
    });

    gsap.fromTo(
      ".container",
      {
        duration: 3,
        left: "100%",
        scale: 0.5,
        ease: "power4.inOut",
        delay: 4,
      },
      {
        duration: 3,
        left: "50%",
        scale: 0.5,
        transform: "translateX(-50%)",
        ease: "power4.inOut",
        delay: 4,
      }
    );

    gsap.to(".block", 2, {
      width: "0px",
      ease: "power4.inOut",
      delay: 6,
    });
    gsap.to(".block", 2, {
      height: "0px",
      ease: "power4.inOut",
      delay: 7,
    });

    gsap.to(".circles", 2, {
      rotation: 360,
      ease: "power4.inOut",
      delay: 8,
    });

    gsap.to(".loader", 3, {
      scale: 0,
      ease: "power4.inOut",
      delay: 9,
    });

    gsap.to(".container", 3, {
      scale: 1,
      ease: "power4.inOut",
      delay: 9.5,
    });

    // New circle animations
    gsap.to(".circle-inner", {
      rotation: 360,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });

    gsap.to(".circle-inner-rotator", {
      rotation: -360,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });

    gsap.to(".circle-bounce", {
      y: 100,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: Bounce.easeInOut,
    });
  }, [onLoadingComplete]);

  return (
    <div className="loader">
      <h1 className="counter">0</h1>
      <div className="site-teaser">
        <span>Something is cooking...</span>
      </div>
      <div className="circles">
        <div className="circle circle-outer"></div>
        <div className="circle circle-inner"></div>
        <div className="circle-inner-rotator"></div>
        <div className="circle circle-bounce"></div>
      </div>
      <div className="block"></div>
      <div className="white-block"></div>
    </div>
  );
};

export default LoadingPage;
