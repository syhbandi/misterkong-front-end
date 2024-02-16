import { useState } from "react";
import BreadCrumb from "../../../components/admin/BreadCrumb";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../components/admin/Input";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { uploadPlugin } from "../../../components/admin/CKEditorUpload";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectSubKategori from "../../../components/admin/SelectSubKategori";
import UploadGambar from "../../../components/admin/UploadGambar";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createArtikel, getSlug } from "../../../api/artikel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import useUserStore from "../../../states/auth";
import Spinner from "../../../components/Spinner";

const schema = object().shape({
  judul: string().required("Judul harus diisi"),
  sub_kategori_id: string().required("Sub Kategori harus diisi"),
  slug: string().required("Slug harus diisi"),
});

const Tambah = () => {
  const { user } = useStore(useUserStore);
  const [blog, setBlog] = useState("");
  const method = useForm({ resolver: yupResolver(schema) });
  const [gambar, setGambar] = useState({
    filename: "",
    path: "",
  });
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createArtikel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
      toast.success("Blog baru ditambahkan!");
      navigate("/admin/blog", { replace: true });
    },
    onError: () => {
      toast.error("Gagal menambah blog baru");
    },
  });

  const handleSubmit = (data: any) => {
    mutation.mutate({
      body: { ...data, header_image: gambar.path, content: blog },
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

  return (
    <>
      <BreadCrumb
        title="Tambah Blog"
        breadcrumb={[
          { title: "Blog", href: "/admin/blog", active: false },
          { title: "Tambah", href: "/admin/blog/tambah", active: true },
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
                className="h-[41.6px] bg-kong px-5 rounded mb-5 disabled:opacity-50 hover:bg-opacity-80"
                onClick={buatSlug}
                type="button"
              >
                Buat slug
              </button>
              <button
                className="h-[41.6px] bg-white border border-gray-500 px-5 rounded mb-5 disabled:opacity-50 hover:bg-gray-800 hover:text-white"
                onClick={cekSlug}
                type="button"
              >
                Cek
              </button>
            </div>
            <SelectSubKategori kategoriId="2" />
            <div className="flex flex-col">
              <label className="font-medium mb-2">Blog</label>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  extraPlugins: [uploadPlugin],
                }}
                data={""}
                onChange={(event, editor) => {
                  setBlog(editor.getData());
                }}
              />
            </div>
            <div className="mt-3 flex items-center justify-end gap-2">
              <button
                className="h-11 rounded-md bg-white border border-gray-400 px-5 hover:bg-gray-100"
                onClick={() => history.back()}
              >
                Batal
              </button>
              <button
                type="submit"
                className="h-11 px-5 rounded-md bg-kong hover:bg-opacity-80 border border-kong transition-all ease-in-out duration-150"
                disabled={mutation.isLoading}
              >
                <span className="font-medium">
                  {mutation.isLoading ? (
                    <Spinner color="text-gray-800" />
                  ) : (
                    "Simpan"
                  )}
                </span>
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Tambah;
