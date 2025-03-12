import { useEffect, useRef, useState } from "react";
import algorand from "../assets/algorand.svg";
import cosmos from "../assets/cosmos.svg";
import celo from "../assets/celo.svg";
import ethereum from "../assets/ethereum.svg";
import europeanCommission from "../assets/european-commission.svg";
import filecoin from "../assets/filecoin.svg";
import ripple from "../assets/ripple.svg";
import stellar from "../assets/stellar.svg";

const logos = [
  { src: algorand, link: "https://www.algorand.com" },
  { src: cosmos, link: "https://cosmos.network" },
  { src: celo, link: "https://celo.org" },
  { src: ethereum, link: "https://ethereum.org" },
  { src: filecoin, link: "https://filecoin.io" },
  { src: ripple, link: "https://ripple.com" },
  { src: stellar, link: "https://stellar.org" },
  { src: europeanCommission, link: "https://ec.europa.eu" },
];

const LogoCarousel = () => {
  const [position, setPosition] = useState(0);
  const speed = 0.5; // Adjust speed if needed

  useEffect(() => {
    let animationFrameId;

    const moveCarousel = () => {
      setPosition((prevPosition) => (prevPosition <= -100 ? 0 : prevPosition - speed));
      animationFrameId = requestAnimationFrame(moveCarousel);
    };

    animationFrameId = requestAnimationFrame(moveCarousel);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="carousel relative overflow-hidden mx-5 md:mx-20 py-10">
      <div
        className="carousel-track flex items-center"
        style={{
          transform: `translateX(${position}px)`,
          transition: "transform 0.05s linear",
          whiteSpace: "nowrap",
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mx-5"
            style={{ width: "150px", height: "50px" }} // Fixed size
          >
            <img
              src={logo.src}
              alt="logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
