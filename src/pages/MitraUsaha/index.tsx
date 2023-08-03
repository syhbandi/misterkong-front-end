import hero from "../../assets/hero-pos.jpg";
import { motion } from "framer-motion";
const item = {
  off: {
    opacity: 0,
    y: 100,
  },
  on: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const MitraUsaha = () => {
  return (
    <>
      <header
        className="h-screen bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="h-full backdrop-brightness-[30%]">
          <div className="container mx-auto max-w-7xl px-6 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex items-center">
                <div>
                  <motion.h1
                    variants={item}
                    initial="off"
                    whileInView={"on"}
                    className="text-2xl md:text-6xl font-poppins text-white font-bold mb-10"
                    viewport={{ once: true }}
                  >
                    Jadilah mitra usaha kami dan tingkatkan omzetmu
                  </motion.h1>
                  <motion.a
                    variants={item}
                    initial="off"
                    whileInView={"on"}
                    href="https://pos.misterkong.com"
                    target="_blank"
                    rel="noreferrer"
                    viewport={{ once: true }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center bg-kong rounded-md text-xl font-poppins font-semibold px-7 py-3"
                    >
                      Selengkapnya
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MitraUsaha;
