import { motion } from "motion/react";
import Team from "../assets/team.png";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const heading = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const slideIn = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2, staggerChildren: 0.3 } },
};

const FadeIn = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row justify-center pt-16 pb-10 px-10 gap-20">
      <motion.div
        variants={container}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-3 shrink text-base items-start">
        <motion.h2
          variants={heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl text-white font-bold">
          About Us
        </motion.h2>
        <motion.p variants={FadeIn} className="pt-6">
          Cornaro Labs is a consulting firm specializing in securing funding for innovative Web3
          projects. We help Web3 projects get funded by identifying funding opportunities and
          writing successful grant applications. In addition to securing funding, we offer project
          management, consultation services, and business development support to help projects grow
          and achieve long-term success.
        </motion.p>
        <motion.p variants={FadeIn}>
          With over seven years of Web3 experience and a decentralized network of consultants and
          advisors across the EU, UK, and USA, we have successfully raised over €3M+ through
          industry and institutional sources.
        </motion.p>
        <Dialog>
          <DialogTrigger asChild>
            <motion.button variants={FadeIn} className="custom-btn">
              <span>Read more...</span>
            </motion.button>
          </DialogTrigger>
          <DialogContent className="bg-[#000612] text-white/70 text-sm">
            <DialogTitle className="text-2xl text-white underline">About Us</DialogTitle>
            <DialogDescription className="sr-only">Its about what we are.</DialogDescription>
            <ScrollArea className="max-h-[400px] whitespace-pre-wrap">
              <div className="flex flex-col gap-3 pr-3">
                <p>
                  Cornaro Labs is a consulting firm specializing in securing funding for innovative
                  Web3 projects. We help Web3 projects get funded by identifying funding
                  opportunities and writing successful grant applications. In addition to securing
                  funding, we offer project management, consultation services, and business
                  development support to help projects grow and achieve long-term success.
                </p>
                <p>
                  With over seven years of Web3 experience and a decentralized network of
                  consultants and advisors across the EU, UK, and USA, we have successfully raised
                  over €3M+ through industry and institutional sources. Our team has successfully
                  implemented more than 20 projects and two grant programs, demonstrating our
                  expertise in blockchain technology.
                </p>
                <p>
                  At Cornaro Labs, we are committed to empowering Web3 innovators by providing
                  tailored solutions that bridge the gap between groundbreaking ideas and
                  sustainable funding. Whether you're an emerging startup or an established
                  organization, our team is here to navigate the complexities of fundraising,
                  ensuring your project reaches its full potential.
                </p>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </motion.div>

      <motion.img
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        src={Team}
        alt=""
        className="lg:max-w-[40%] lg:translate-y-12"
      />
    </section>
  );
};
export default AboutUs;
