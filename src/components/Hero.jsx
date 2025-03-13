import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  return (
    <section className="hero pt-52 md:pb-36 pb-16 relative overflow-hidden">
      <div className="text-box flex flex-col gap-4 px-10 relative z-40">
        <div className="text-center z-10 text-white">
          <h1 className=" uppercase font-bold text-[3.125rem] drop-shadow">Fund. Build. Scale.</h1>
          <h2 className=" text-xl">Unlock Web3 Grants & Bring your vision to life.</h2>
          <p className="my-1.5 max-w-[45rem] mx-auto">
            Cornaro Labs helps Web3 projects secure funding through expert grant writing. We also
            offer strategic consultancy and project management services.
            <br />
            {/* We’re also building the CL Web3 Grants Dashboard, an AI-powered platform for grant
            discovery and funding analytics. With 7+ years in Web3 and a global network of
            consultants, we've raised €3M+ and supported 20+ projects and 2 grant programs. */}
          </p>
        </div>
        <div className="btn-box flex items-center gap-2 flex-wrap justify-center z-40 relative">
          <a
            className="custom-btn"
            href="https://www.web3grants.co/"
            target="_blank"
            rel="noreferrer">
            <span>Web3 Grants DashBoard</span>
          </a>
          <a
            className="custom-btn"
            href="https://calendly.com/cornarolabs"
            target="_blank"
            rel="noreferrer">
            <span>Book a free Consultation</span>
          </a>
        </div>
      </div>
      {/* <div className="shape-1 absolute " /> */}
    </section>
  );
};
export default Hero;
