import movie from "../../assets/Teaser.webm";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const containerVariants = {
  off: {
    opacity: 0,
  },
  on: {
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  off: { opacity: 0, y: 100 },
  on: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.1,
  },
};

const Hero = () => {
  return (
    <header className="w-full h-screen">
      <div className="w-full h-full bg-black bg-opacity-75">
        <div className="grid grid-cols-1 md:grid-cols-2 container max-w-7xl mx-auto px-6 h-full">
          <motion.div
            variants={containerVariants}
            initial="off"
            whileInView="on"
            className="text-white flex flex-col justify-center"
          >
            <motion.h1
              variants={childVariants}
              className="text-4xl md:text-6xl font-medium text-center md:text-left font-poppins"
            >
              Super App
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-base md:text-2xl mt-5 text-center md:text-left font-roboto"
            >
              Nikmati kemudahan layanan kami, mulai dari Transportasi,
              Pengiriman Barang, Food & Beverage, dan kebutuhan lainnya.
            </motion.p>
            <motion.p
              variants={childVariants}
              className="text-base md:text-2xl mt-5 font-medium text-center md:text-left font-roboto"
            >
              #kongTemanYangBaik
            </motion.p>

            <AnchorLink href={"#unduh"} className="text-center md:text-left">
              <motion.button
                variants={childVariants}
                whileHover={"hover"}
                className="bg-kong  py-3 px-9 rounded-md border border-kong md:mr-auto mt-5 font-poppins"
              >
                <span className="text-black text-lg font-semibold flex items-center justify-center gap-3">
                  <BsDownload />
                  Unduh sekarang
                </span>
                <span></span>
              </motion.button>
            </AnchorLink>
          </motion.div>
        </div>
      </div>
      <video
        src={movie}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full -z-[3] object-cover"
      ></video>
    </header>
  );
};

export default Hero;
