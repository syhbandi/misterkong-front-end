import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { editArtikel, getArtikel, getSlug } from "../../../api/artikel";
import { useStore } from "zustand";
import useUserStore from "../../../states/auth";
import BreadCrumb from "../../../components/admin/BreadCrumb";
import { object, string } from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import UploadGambar from "../../../components/admin/UploadGambar";
import Input from "../../../components/admin/Input";
import SelectSubKategori from "../../../components/admin/SelectSubKategori";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { uploadPlugin } from "../../../components/admin/CKEditorUpload";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import { FiArrowLeft, FiLoader, FiPlus, FiSave } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";

const schema = object().shape({
  judul: string().required("Judul harus diisi"),
  sub_kategori_id: string().required("Sub Kategori harus diisi"),
  slug: string().required("Slug harus diisi"),
});

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useStore(useUserStore);
  const [content, setContent] = useState("");

  const method = useForm({ resolver: yupResolver(schema) });
  const [gambar, setGambar] = useState({
    filename: "",
    path: "",
  });

  const query = useQuery({
    queryKey: ["article", id],
    queryFn: () => getArtikel(id!, user),
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: editArtikel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bantuan"] });
      toast.success("Blog diperbarui!");
      navigate("/admin/blog", { replace: true });
    },
    onError: () => {
      toast.error("Gagal memperbarui!");
    },
  });

  useEffect(() => {
    if (query.data) {
      method.reset({
        judul: query.data.data.judul,
        sub_kategori_id: query.data.data.subkategori_id,
        slug: query.data.data.slug,
      });
      setGambar(() => {
        const path = query.data.data.header_image;
        const splitted = path.split("/");
        const filename = splitted[splitted.length - 1];
        return { path, filename };
      });
      setContent(query.data.data.content);
    }
  }, [query.data]);

  const handleSubmit = (data: any) => {
    mutation.mutate({
      body: { ...data, header_image: gambar.path, content, id },
      user,
    });
  };

  const buatSlug = () => {
    if (!method.getValues("judul")) return;
    let slug = method.getValues("judul").split(" ").join("-");
    method.setValue("slug", slug);
  };

  const cekSlug = async () => {
    const slug = method.getValues("slug");
    if (!slug) return;
    try {
      const { jumlah } = await getSlug(slug, user);
      if (jumlah) {
        toast.error("Slug sudah digunakan");
      } else {
        toast.success("Slug tersedia");
      }
    } catch (error) {
      toast.error("gagal cek slug");
    }
  };

  if (query.isLoading) return <Spinner />;
  if (query.isError)
    return (
      <div className="flex items-center border border-red-600 bg-red-100">
        <MdErrorOutline className="text-lg text-red-600" />
        Terjadi kesalahan!
      </div>
    );

  return (
    <>
      <BreadCrumb
        title="Edit content"
        breadcrumb={[
          { title: "content", href: "/admin/content", active: false },
          { title: "Edit", href: `/admin/content/${id}/edit`, active: true },
        ]}
      />

      <div className="bg-white rounded-lg p-5 flex-1">
        <UploadGambar gambars={gambar} setGambars={setGambar} />
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(handleSubmit)}>
            <Input name="judul" label="Judul" placeholder="Judul artikel" />
            <div className="flex items-end gap-2">
              <Input name="slug" label="Slug" placeholder="Slug" />
              <button
                className="h-[41.6px] bg-kong px-5 rounded mb-5 disabled:opacity-50 hover:bg-opacity-80 flex items-center justify-center gap-2"
                onClick={buatSlug}
                type="button"
              >
                <FiPlus />
                Buat slug
              </button>
              <button
                className="h-[41.6px] bg-white border border-gray-500 px-5 rounded mb-5 disabled:opacity-50 hover:bg-gray-100 flex items-center justify-center gap-2"
                onClick={cekSlug}
                type="button"
              >
                <FiLoader />
                Cek
              </button>
            </div>
            <SelectSubKategori kategoriId="2" />
            <div className="flex flex-col">
              <label className="font-medium mb-2">content</label>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  extraPlugins: [uploadPlugin],
                }}
                data={content}
                //@ts-ignore
                onChange={(event, editor) => {
                  setContent(editor.getData());
                }}
              />
            </div>
            <div className="mt-3 flex items-center justify-end gap-2">
              <button
                className="h-11 flex items-center justify-center rounded-md bg-white border border-gray-400 px-5 hover:bg-gray-100 gap-2"
                onClick={() => history.back()}
                type="button"
              >
                <FiArrowLeft />
                Batal
              </button>
              <button
                type="submit"
                className="h-11 px-5 rounded-md bg-kong hover:bg-opacity-80 border border-kong transition-all ease-in-out duration-150 flex items-center justify-center gap-2"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? (
                  <Spinner color="text-gray-800" />
                ) : (
                  <>
                    <FiSave />
                    Simpan
                  </>
                )}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Edit;
