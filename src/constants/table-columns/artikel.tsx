import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { deleteArtikel } from "../../api/artikel";
import { toast } from "react-toastify";
import { useStore } from "zustand";
import useUserStore from "../../states/auth";

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
  helper.accessor("judul", {
    cell: (data) => (
      <p className="text-ellipsis line-clamp-1 overflow-hidden">
        {data.getValue()}
      </p>
    ),
  }),
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
  const { user } = useStore(useUserStore);
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteArtikel,
    onMutate: () => {
      return { id: artikel.id };
    },
    //@ts-ignore
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["artikel"] });
      toast.success(`Artikel dengan ID: ${context?.id} berhasil dihapus!`);
    },
    onError: () => {
      deleteMutation.reset();
      toast.error("Gagal menghapus artikel!");
    },
  });
  const handleDelete = () => {
    if (window.confirm("Artikel akan dihapus")) {
      deleteMutation.mutate({ id: artikel.id, user });
    }
  };
  return (
    <div className="flex items-center gap-2">
      <Link to={`${artikel.id}/edit`}>
        <FiEdit />
      </Link>
      <button onClick={handleDelete}>
        <FiTrash className={"text-red-600"} />
      </button>
    </div>
  );
};

export default artikelCol;
