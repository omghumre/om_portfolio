import React, { useEffect } from "react";
import "./LoadingPage.css";
import gsap from "gsap";

const LoadingPage = ({ onLoadingComplete }) => {
  useEffect(() => {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        gsap.to(".white-block", 1.5, {
          width: "100%",
          height: "100%",
          opacity: 1,
          ease: "power4.inOut",
          onComplete: onLoadingComplete,
        });
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

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
      width: "75px",
      height: "75px",
      ease: "power4.inOut",
      delay: 2,
    });

    gsap.from(".circle-inner-rotator", 2, {
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
      rotation: 0,
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
  }, [onLoadingComplete]);

  return (
    <div className="loader">
      <h1 className="counter">0</h1>
      <div className="site-teaser">
        <span>Use headphones</span>
      </div>
      <div className="circles">
        <div className="circle circle-outer"></div>
        <div className="circle circle-inner"></div>
        <div className="circle-inner-rotator"></div>
        <div className="block"></div>
      </div>
      <div className="white-block"></div>
    </div>
  );
};

export default LoadingPage;
