import { layanan } from "../../data";
import misterkong3D from "../../assets/misterkong3D.png";
import { motion } from "framer-motion";

const img = {
  off: {
    opacity: 0,
    y: 100,
  },
  on: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 1,
    },
  },
};

const item = {
  off: {
    y: 50,
    opacity: 0,
  },
  on: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * i,
      duration: 0.5,
    },
  }),
};

const Layanan = () => {
  return (
    <section className=" relative py-10 md:py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="text-5xl font-semibold font-poppins  text-center mb-10">
          Permudah hidupmu
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col justify-center">
            {layanan.slice(0, layanan.length / 2).map((l) => (
              <motion.div
                variants={item}
                custom={l.id}
                initial="off"
                whileInView="on"
                viewport={{ once: true }}
                key={l.id}
                className="flex items-center gap-5 py-5"
              >
                <motion.img
                  variants={img}
                  whileHover={"hover"}
                  src={l.icon}
                  alt={l.nama}
                  width={50}
                  height={50}
                />
                <div>
                  <h1 className="text-base font-medium font-poppins">
                    {l.nama}
                  </h1>
                  <p className="text-sm font-roboto text-gray-500">
                    {l.deskripsi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className=" justify-center items-center hidden md:flex">
            <motion.img
              variants={img}
              initial="off"
              whileInView="on"
              src={misterkong3D}
              alt="misterkong 3d"
              width={250}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex flex-col justify-center">
            {layanan.slice(layanan.length / 2, layanan.length).map((l) => (
              <motion.div
                variants={item}
                initial="off"
                whileInView="on"
                custom={l.id}
                viewport={{ once: true }}
                className="flex items-center gap-5 py-5"
                key={l.id}
              >
                <motion.img
                  variants={img}
                  whileHover={"hover"}
                  src={l.icon}
                  alt={l.nama}
                  width={50}
                  height={50}
                />
                <div>
                  <h1 className="text-base font-medium font-poppins">
                    {l.nama}
                  </h1>
                  <p className="text-sm font-roboto text-gray-500">
                    {l.deskripsi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
