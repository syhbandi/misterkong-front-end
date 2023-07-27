import { layanan } from "../../data";

const Layanan = () => {
  return (
    <section className="my-10 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {layanan.map((item) => (
          <>{item.nama}</>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-kong rounded-full -z-10"></div>
    </section>
  );
};

export default Layanan;
