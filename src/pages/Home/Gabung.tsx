import { Link } from "react-router-dom";
import { RiEBikeFill, RiStore2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Mitra Driver",
    body: "Bergabung menjadi mitra driver dan atur sendiri pendapatan kamu",
    link: "mitra-driver",
    icon: (
      <div className="absolute -top-5 rounded-md bg-green-200 text-green-600 text-4xl w-14 h-14 flex items-center justify-center">
        <RiEBikeFill />
      </div>
    ),
  },
  {
    id: 2,
    title: "Mitra Usaha",
    body: "Bergabung menjadi mitra usaha dan maksimalkan omzet usahamu",
    link: "mitra-usaha",
    icon: (
      <div className="absolute -top-5 rounded-md bg-kong  text-black text-4xl w-14 h-14 flex items-center justify-center">
        <RiStore2Fill />
      </div>
    ),
  },
];

const card = {
  on: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.3,
    },
  }),
  off: { opacity: 0, y: 100 },
};

const Gabung = () => {
  return (
    <section className={`bg-[url('/img/hero-pos.jpg')] bg-left`}>
      <div className="w-full h-full backdrop-brightness-50 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 py-10 md:py-20">
          <h1 className="text-3xl md:text-5xl font-semibold mb-20 font-poppins text-center text-white">
            Bergabung bersama kami
          </h1>
          <div className="flex flex-col md:flex-row item-center justify-center gap-10 md:gap-5">
            {data.map(({ id, title, body, link, icon }) => (
              <motion.div
                className="rounded-md shadow-md bg-white p-5 md:w-3/12 relative"
                key={id}
                variants={card}
                initial="off"
                whileInView="on"
                custom={id}
                viewport={{ once: true }}
              >
                {icon}
                <h1 className="text-lg font-semibold font-poppins mb-5 mt-10">
                  {title}
                </h1>
                <p className="font-roboto mb-5">{body}</p>
                <Link to={link}>
                  <span className=" font-poppins text-blue-600 font-medium">
                    Selengkapnya
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gabung;
