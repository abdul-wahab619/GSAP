import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const gsapRef = useRef();
  useGSAP(
    () => {
      gsap.from(".box", {
        opacity: 0,
        scale: 0,
        rotate: 360,
        duration: 1,
        delay: 1,
      });
    },
    { scope: ".container" }
  );
  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
