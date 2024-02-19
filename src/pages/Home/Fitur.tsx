import { fitur } from "../../data";
import { motion } from "framer-motion";

const fitursVariant = {
  off: {
    opacity: 0,
  },
  on: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const fiturVariant = {
  off: { opacity: 0, y: 100 },
  on: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Fitur = () => {
  return (
    <>
      {fitur.map((item, index) => {
        const isOdd = index % 2 > 0;
        return (
          <motion.section
            variants={fitursVariant}
            initial="off"
            whileInView="on"
            className={`relative`}
            key={index}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-7xl px-6 py-10 md:py-20 gap-10">
              <div className={`flex item-center ${isOdd ? "justify-end" : ""}`}>
                <img
                  className="w-full h-full md:w-[500px] md:h-[500px] object-cover rounded-3xl shadow-xl hidden md:block "
                  src={item.image}
                />
              </div>
              <div
                className={`${
                  isOdd ? "order-first" : ""
                } flex flex-col justify-center`}
              >
                <motion.h1
                  variants={fiturVariant}
                  className="text-3xl md:text-5xl font-semibold mb-10 font-poppins"
                >
                  {item.judul}
                </motion.h1>
                <img
                  className="w-full h-full md:w-[500px] md:h-[500px] object-cover rounded-3xl shadow-xl md:hidden mb-10"
                  src={item.image}
                />
                <motion.p
                  variants={fiturVariant}
                  className="text-base lg:text-lg font-roboto leading-loose"
                >
                  {item.body}
                </motion.p>
              </div>
            </div>
          </motion.section>
        );
      })}
    </>
  );
};

export default Fitur;
