import { Editor } from "@ckeditor/ckeditor5-core";
import {
  UploadAdapter,
  FileLoader,
} from "@ckeditor/ckeditor5-upload/src/filerepository";
import axios from "axios";
function uploadAdapter(loader: FileLoader): UploadAdapter {
  return {
    upload: () => {
      return new Promise(async (resolve, reject) => {
        try {
          const file = await loader.file;
          const response = await axios.request({
            method: "POST",
            url: `${import.meta.env.VITE_API_BASE_URL}article/uploads`,
            data: {
              image: file,
            },
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer " +
                JSON.parse(localStorage.getItem("MISTERKONG_ADMIN") || "{}")
                  ?.access_token,
            },
          });
          resolve({
            default: response.data?.path,
          });
        } catch (error) {
          reject("Gagal upload gambar");
        }
      });
    },
    abort: () => {},
  };
}

export function uploadPlugin(editor: Editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}
