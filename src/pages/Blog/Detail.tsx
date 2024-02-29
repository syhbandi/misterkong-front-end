import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { getFrontArticle } from "../../api/artikel";
import Spinner from "../../components/Spinner";
import { FiArrowLeft } from "react-icons/fi";

const Detail = () => {
  const { slug } = useParams();
  const query = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getFrontArticle(slug!),
  });
  const location = useLocation();

  console.log(location);

  return (
    <div className="container mx-auto px-6 mt-20 py-10 max-w-7xl">
      {query.isLoading && (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {query.isError && (
        <div className="flex items-center justify-center">
          <h1 className="text-center text-lg font-medium text-red-600">
            Terjadi kesalahan!
          </h1>
        </div>
      )}
      {query.data?.data?.id ? (
        <div className="mx-auto w-full md:w-2/3">
          <button
            className="flex items-center justify-center font-medium font-roboto gap-3 mb-10"
            onClick={() => history.back()}
          >
            <FiArrowLeft />
            <span>Blog</span>
          </button>
          <h1 className="text-3xl md:text-5xl md:leading-snug  font-semibold font-poppins mb-5 ">
            {query.data?.data?.judul}
          </h1>
          <p className="font-roboto text-gray-500 mb-10">
            {new Intl.DateTimeFormat("id", { dateStyle: "long" }).format(
              new Date(query.data?.data?.date_add)
            )}
          </p>
          {query.data?.data.header_image && (
            <img
              src={query.data?.data?.header_image}
              className="w-full max-h-[450px] rounded-2xl object-cover mb-10"
            />
          )}
          <div
            dangerouslySetInnerHTML={{ __html: query.data?.data?.content }}
            className="ck-content font-roboto break-words text-justify"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          Tidak menemukan blog dengan slug: {slug}
        </div>
      )}
    </div>
  );
};

export default Detail;
