import Team from "../assets/team.png";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row items-center justify-center pt-16 pb-10 px-10 gap-20">
      <div className="flex flex-col gap-3 shrink text-sm">
        <h2 className="text-4xl text-white font-bold">About Us</h2>
        <p>
          Cornaro Labs is a consulting firm specializing in securing funding for innovative Web3
          projects. We help Web3 projects get funded by identifying funding opportunities and
          writing successful grant applications. In addition to securing funding, we offer project
          management, consultation services, and business development support to help projects grow
          and achieve long-term success.
        </p>
        <p>
          With over seven years of Web3 experience and a decentralized network of consultants and
          advisors across the EU, UK, and USA, we have successfully raised over €3M+ through
          industry and institutional sources. Our team has successfully implemented more than 20
          projects and two grant programs, demonstrating our expertise in blockchain technology.
        </p>
        <p>
          At Cornaro Labs, we are committed to empowering Web3 innovators by providing tailored
          solutions that bridge the gap between groundbreaking ideas and sustainable funding.
          Whether you're an emerging startup or an established organization, our team is here to
          navigate the complexities of fundraising, ensuring your project reaches its full
          potential.
        </p>
      </div>

      <img src={Team} alt="" className="max-w-[30%]" />
    </section>
  );
};
export default AboutUs;
