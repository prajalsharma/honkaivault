import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  return (
    <section className="hero pt-52 pb-36 relative">
      <div className="flex flex-col gap-28 px-9">
        <div className="text-center lg:text-left">
          <h1 className=" uppercase font-bold text-[3.125rem] drop-shadow">Fund. Build. Scale.</h1>
          <h2 className=" text-xl">Unlock Web3 Grants & Bring yout vision to life.</h2>
          <p className="my-1.5 max-w-[45rem] mx-auto lg:mx-0">
            We have secured over €3 million in grants, bringing more than seven years of experience
            in Web3. With a proven track record, we have successfully launched and managed over 20
            funded projects and two grant programs.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
