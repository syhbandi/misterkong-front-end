import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import { getFrontArticle } from "../../api/artikel";
import "./style.css";
import Spinner from "../../components/Spinner";

const Detail = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["aricle", slug],
    queryFn: () => getFrontArticle(slug!),
  });
  if (isLoading)
    return (
      <div className="flex justify-center items-center py-10">
        <Spinner />
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center py-10">
        <h1 className="text-lg text-red-500 font-roboto">
          Terjadi kesalahan saat memuat artikel!
        </h1>
      </div>
    );
  return (
    <section>
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        <div className="capitalize inline-flex items-center font-roboto gap-2">
          <Link to={"/bantuan"} className="font-semibold">
            Bantuan
          </Link>{" "}
          /
          <Link
            to={`/bantuan/${state.nama.toLowerCase().split(" ").join("-")}`}
            state={state}
            className="font-semibold"
          >
            {state.nama}
          </Link>
          /<span>{data?.data?.judul}</span>
        </div>
        <div className="w-full lg:w-2/3 mx-auto mt-10">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-poppins font-semibold text-center capitalize mb-3">
              {data?.data.judul}
            </h1>
            <p className="text-center text-gray-400 font-roboto">
              {new Intl.DateTimeFormat("id", { dateStyle: "long" }).format(
                new Date(data?.data.date_add)
              )}{" "}
              <span className="text-gray-800">Oleh Admin</span>
            </p>
          </div>
          {data?.data?.header_image && (
            <img
              src={data?.data.header_image}
              className="w-full object-cover h-[200px] md:h-[400px] rounded-lg mb-10"
            />
          )}
          <div
            dangerouslySetInnerHTML={{ __html: data?.data.content }}
            className="ck-content font-roboto break-words"
          />
        </div>
      </div>
    </section>
  );
};

export default Detail;
