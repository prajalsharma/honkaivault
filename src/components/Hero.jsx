import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  return (
    <section className="hero pt-52 md:pb-36 pb-16 relative overflow-hidden">
      <div className="text-box flex flex-col gap-4 px-10 relative z-40">
        <div className="text-center z-10">
          <h1 className=" uppercase font-bold text-[3.125rem] drop-shadow">Fund. Build. Scale.</h1>
          <h2 className=" text-xl">Unlock Web3 Grants & Bring your vision to life.</h2>
          <p className="my-1.5 max-w-[45rem] mx-auto">
            We have secured over €3 million in grants, bringing more than seven years of experience
            in Web3. With a proven track record, we have successfully launched and managed over 20
            funded projects and two grant programs.
          </p>
        </div>
        <div className="btn-box flex items-center gap-2 flex-wrap justify-center z-40 relative">
          <a className="custom-btn" href="https://www.web3grants.co/">
            <span className="text">Web3 Grants DashBoard</span>
          </a>
          <a className="custom-btn" href="https://calendly.com/cornarolabs">
            <span className="text">Book a free Consultation</span>
          </a>
        </div>
      </div>
      {/* <div className="shape-1 absolute " /> */}
    </section>
  );
};
export default Hero;
