import { useEffect } from "react";
import algorand from "../assets/algorand.svg";
import cosmos from "../assets/cosmos.svg";
import celo from "../assets/celo.svg";
import ethereum from "../assets/ethereum.svg";
import europeanCommission from "../assets/european-commission.svg";
import filecoin from "../assets/filecoin.svg";
import ripple from "../assets/ripple.svg";
import stellar from "../assets/stellar.svg";

const logos = [algorand, cosmos, celo, ethereum, filecoin, ripple, stellar, europeanCommission];

const LogoCarousel = () => {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const carouselTrack = document.querySelector(".carousel-track");
    const clone = carouselTrack.cloneNode(true);
    carousel.appendChild(clone);
  }, []);

  return (
    <div className="carousel relative flex overflow-hidden mx-5 md:mx-20 py-10">
      <div className="carousel-track flex py-3 items-center ">
        {logos.map((logo) => (
          <div className="w-48 h-14 flex items-center justify-center mx-5" key={logo}>
            <img src={logo} alt="logo" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
