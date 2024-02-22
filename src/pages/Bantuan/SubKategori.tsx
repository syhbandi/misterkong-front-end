import { useQuery } from "@tanstack/react-query";
import { Link, useLocation, useParams } from "react-router-dom";
import { getFrontArticles } from "../../api/artikel";
import Spinner from "../../components/Spinner";

const SubKategori = () => {
  const { kategori } = useParams();
  const { state } = useLocation();
  const query = useQuery({
    queryKey: ["kategori", kategori],
    queryFn: () =>
      getFrontArticles(
        {
          search: "",
          length: "",
          limit: 0,
        },
        "panduan",
        state.id
      ),
  });

  if (query.isLoading)
    return (
      <div className="py-10 flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <section>
      <div className="py-10 container px-6 mx-auto max-w-7xl">
        <h1 className="text-center text-3xl font-poppins font-semibold mb-10">
          Pilih Topik
        </h1>
        {query.data?.data?.map((item: any, index: number) => (
          <Link to={item.slug} key={"sub-" + index}>
            <div className="py-5 border-b border-gray-200 font-medium capitalize font-roboto hover:underline">
              {item.judul}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SubKategori;
