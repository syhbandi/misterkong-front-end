import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/api.config";
import Spinner from "../../components/Spinner";

const Kategori = () => {
  const query = useQuery({
    queryKey: ["kategori"],
    queryFn: async () => {
      const { data } = await api.get("article/panduan");
      return data;
    },
  });

  if (query.isLoading)
    return (
      <div className="py-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <section>
      <div className="container mx-auto px-6 max-w-7xl py-10">
        <h1 className="text-center text-3xl font-poppins font-semibold mb-10">
          Pilih kategori
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {query.data?.data?.map((item: any, index: number) => (
            <Link
              to={item.nama.toLowerCase().split(" ").join("-")}
              key={index}
              state={{ id: item.id }}
            >
              <div className="cursor-pointer px-5 py-5 shadow rounded-lg flex items-center gap-5 hover:bg-gray-100 font-roboto font-semibold">
                <span className="text-lg capitalize">
                  {item.nama.toLowerCase()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kategori;
