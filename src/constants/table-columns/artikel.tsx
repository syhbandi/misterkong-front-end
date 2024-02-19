import { createColumnHelper } from "@tanstack/react-table";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

export type ArtikelType = {
  content: string;
  date_add: string;
  date_modif: string;
  header_image: string;
  id: string;
  judul: string;
  kategori: string;
  kategori_id: string;
  sub_kategori: string;
  subkategori_id: string;
};

const helper = createColumnHelper<ArtikelType>();
const artikelCol = [
  helper.accessor("id", { cell: (data) => data.getValue() }),
  helper.accessor("judul", { cell: (data) => data.getValue() }),
  helper.accessor("sub_kategori", {
    header: "sub kategori",
    cell: (data) => data.getValue(),
  }),
  helper.display({
    id: "aksi",
    header: "Aksi",
    cell: ({ row: { original } }) => <Aksi artikel={original} />,
  }),
];

const Aksi = ({ artikel }: { artikel: ArtikelType }) => {
  return (
    <div className="flex items-center gap-2">
      <Link to={`${artikel.id}/edit`}>
        <FiEdit />
      </Link>
      <button>
        <FiTrash className={"text-red-600"} />
      </button>
    </div>
  );
};

export default artikelCol;
