import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { MdCloudUpload, MdDelete, MdImage } from "react-icons/md";
import { AxiosProgressEvent } from "axios";
import { uploadGambar } from "../../api/artikel";
import { useStore } from "zustand";
import useUserStore from "../../states/auth";

type Files = {
  fileName: string;
  progress: number;
};

type gambar = {
  filename: string;
  path: string;
};

type Props = {
  gambars?: gambar;
  setGambars: React.Dispatch<React.SetStateAction<gambar>>;
};

const UploadGambar = ({ setGambars, gambars }: Props) => {
  const { user } = useStore(useUserStore);
  const [files, setFiles] = useState<Files[]>([]);

  const mutation = useMutation({
    mutationFn: uploadGambar,
    onError: () => {
      setFiles([]);
      mutation.reset();
    },
    onSuccess: (data) => {
      setGambars({
        filename: data?.filename,
        path: data?.path,
      });
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    if (e.target.files[0]?.size >= 50000) return;
    const fileName = e.target.files[0].name;
    setFiles((prev) => [...prev, { fileName, progress: 0 }]);
    mutation.mutate({
      image: e.target.files[0],
      user,
      progressFunc,
    });
  };

  const onDelete = () => {
    setGambars({ filename: "", path: "" });
  };

  const progressFunc = ({ loaded, total }: AxiosProgressEvent) => {
    setFiles((prev) => {
      const newData = [...prev];
      newData[newData.length - 1].progress = Math.floor(
        (loaded / (total || 0)) * 100
      );
      return newData;
    });
    if (loaded === total) {
      setFiles([]);
    }
  };

  return (
    <>
      <h1 className="font-medium mb-2">Gambar header</h1>
      {gambars?.filename ? (
        <div className="h-[200px] rounded overflow-hidden relative">
          <img
            src={`${gambars?.path}?${new Date()}`}
            alt={gambars?.filename}
            width={"100%"}
            className="object-cover"
          />
        </div>
      ) : (
        <label htmlFor="upload-gambar" className="cursor-pointer mb-5">
          <div className="rounded border-2 border-dashed border-gray-300 h-[200px] flex flex-col items-center gap-1 justify-center mb-4">
            <MdCloudUpload className="text-blue-500 text-4xl" />
            <span className="font-medium">Telusuri file</span>
            <span className="text-sm text-gray-400">(Max. 50Kb)</span>
          </div>
        </label>
      )}
      <input
        hidden
        type="file"
        id="upload-gambar"
        accept="image/*"
        onChange={onChange}
      />
      {mutation.isLoading && (
        <div className="flex flex-col gap-2 mt-4">
          {files.map((file, index) => (
            <div className="py-3 rounded flex items-center gap-3" key={index}>
              <span className="text-5xl text-blue-600">
                <MdImage />
              </span>
              <div className="w-full">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold">
                    {file.fileName.length > 15
                      ? file.fileName.slice(0, 15) +
                        "...." +
                        file.fileName.split(".")[1]
                      : file.fileName}
                  </span>
                  <span className="text-sm font-semibold">
                    {file.progress}%
                  </span>
                </div>
                <div className="rounded-full bg-blue-200 w-full">
                  <div
                    className="rounded-full p-1 bg-blue-600 transition-all ease-in-out"
                    style={{ width: `${file.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {mutation.isError && (
        <div className="text-red-500 text-center">
          Terjadi kesalahan, coba lagi!
        </div>
      )}
      <div className="flex flex-col gap-2 max-h-56 overflow-auto scrollbar-custom">
        {gambars?.filename ? (
          <div className="py-3 rounded flex items-center gap-3">
            <div className="flex-grow">
              <h5 className="font-semibold text-sm">{gambars?.filename}</h5>
              {/* <h6 className=" text-sm">{file.size}</h6> */}
            </div>
            <button
              className="outline-none text-red-600 text-lg"
              onClick={() => onDelete()}
            >
              <MdDelete />
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default UploadGambar;
